"use strict";
n.r(t), n.d(t, {
  calculateActiveTimestampDurations: function() {
    return d
  },
  formatActiveTimestamp: function() {
    return c
  },
  formatEndedTimestamp: function() {
    return f
  },
  formatEntryTimestamp: function() {
    return h
  },
  getAggregateRange: function() {
    return g
  },
  getEntryDuration: function() {
    return C
  },
  isEntryActive: function() {
    return m
  },
  isEntryExpired: function() {
    return E
  },
  isEntryMarathon: function() {
    return S
  },
  isEntryNew: function() {
    return p
  },
  isEntryResurrected: function() {
    return _
  },
  isEntryTopGame: function() {
    return T
  }
});
var a = n("913527"),
  l = n.n(a),
  s = n("884439"),
  i = n("876215"),
  r = n("70956"),
  o = n("709054"),
  u = n("689938");
let d = (e, t) => {
    let n = Math.abs((t - o.default.extractTimestamp(e.id)) / r.default.Millis.SECOND),
      a = Math.floor(n) % r.default.Seconds.MINUTE,
      l = Math.floor(n / r.default.Seconds.MINUTE) % r.default.Seconds.MINUTE,
      s = Math.floor(n / r.default.Seconds.HOUR);
    return {
      seconds: a,
      minutes: l,
      hours: s,
      days: Math.floor(n / r.default.Seconds.DAY)
    }
  },
  c = (e, t) => {
    let {
      seconds: n,
      minutes: a,
      hours: l
    } = d(e, t);

    function s(e) {
      return String(e).padStart(2, "0")
    }
    return u.default.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_ACTIVE.format({
      hours: l,
      minutes: l > 0 ? s(a) : a,
      seconds: s(n)
    })
  },
  f = (e, t) => {
    let n = l()(o.default.extractTimestamp(e.id)),
      a = n.isSame(l()(), "day"),
      s = l()().diff(n, "s");
    if (s < r.default.Seconds.MINUTE) return u.default.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_SECONDS_AGO.format({
      count: s
    });
    if (s < r.default.Seconds.HOUR) {
      let e = Math.round(s / r.default.Seconds.MINUTE);
      return u.default.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_MINUTES_AGO.format({
        count: e
      })
    }
    if (s < 6 * r.default.Seconds.HOUR) {
      let e = Math.round(s / r.default.Seconds.HOUR);
      return u.default.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_HOURS_AGO.format({
        count: e
      })
    } else if (s < r.default.Seconds.WEEK && a) return n.toDate().toLocaleTimeString(t, {
      hour: "numeric"
    });
    else if (s < r.default.Seconds.WEEK && !a) return n.toDate().toLocaleTimeString(t, {
      weekday: "short",
      hour: "numeric"
    });
    let i = Math.round(s / (7 * r.default.Seconds.DAY));
    return u.default.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_WEEKS_AGO.format({
      count: i
    })
  },
  h = (e, t) => m(e) ? c(e, Date.now()) : f(e, t);

function m(e) {
  let t = e.traits.find(e => e.type === s.ContentInventoryTraitType.IS_LIVE);
  return null != t && t.is_live
}

function p(e) {
  let t = e.traits.find(e => e.type === s.ContentInventoryTraitType.FIRST_TIME);
  return null != t && t.first_time
}

function E(e) {
  return null != e.expires_at && new Date(e.expires_at) < new Date
}

function C(e) {
  let t = e.traits.find(e => e.type === s.ContentInventoryTraitType.DURATION_SECONDS);
  return null == t ? void 0 : t.duration_seconds
}

function g(e) {
  let t = e.traits.find(e => e.type === s.ContentInventoryTraitType.AGGREGATE_RANGE);
  return null == t ? void 0 : t.range
}

function S(e) {
  let t = e.traits.find(e => e.type === s.ContentInventoryTraitType.MARATHON);
  return null == t ? void 0 : t.marathon
}

function _(e) {
  let t = e.traits.find(e => e.type === s.ContentInventoryTraitType.RESURRECTED);
  return (null == t ? void 0 : t.resurrected_last_played) != null
}

function T(e) {
  return e.content_type === i.ContentInventoryEntryType.TOP_GAME
}