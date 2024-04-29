"use strict";
n.r(t), n.d(t, {
  calculateActiveTimestampDurations: function() {
    return d
  },
  calculateActiveTimestampDurationsFromStart: function() {
    return c
  },
  formatActiveTimestampFromUnits: function() {
    return h
  },
  formatEndedTimestamp: function() {
    return m
  },
  formatEntryTimestamp: function() {
    return p
  },
  getAggregateRange: function() {
    return _
  },
  getEntryDuration: function() {
    return S
  },
  getFullMarathonDescription: function() {
    return M
  },
  getMarathonDurationStr: function() {
    return v
  },
  getMarathonName: function() {
    return x
  },
  getStreakCount: function() {
    return N
  },
  isEntryActive: function() {
    return E
  },
  isEntryExpired: function() {
    return g
  },
  isEntryMarathon: function() {
    return T
  },
  isEntryNew: function() {
    return C
  },
  isEntryResurrected: function() {
    return I
  },
  isEntryTopGame: function() {
    return A
  }
});
var a = n("913527"),
  l = n.n(a),
  s = n("884439"),
  i = n("876215"),
  r = n("70956"),
  o = n("709054"),
  u = n("689938");
let d = (e, t) => c(o.default.extractTimestamp(e.id), t),
  c = (e, t) => {
    let n = Math.abs((t - e) / r.default.Millis.SECOND),
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
  f = (e, t) => {
    let {
      seconds: n,
      minutes: a,
      hours: l
    } = d(e, t);
    return h(n, a, l)
  },
  h = (e, t, n) => {
    function a(e) {
      return String(e).padStart(2, "0")
    }
    return u.default.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_ACTIVE.format({
      hours: n,
      minutes: n > 0 ? a(t) : t,
      seconds: a(e)
    })
  },
  m = (e, t) => {
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
  p = (e, t) => E(e) ? f(e, Date.now()) : m(e, t);

function E(e) {
  let t = e.traits.find(e => e.type === s.ContentInventoryTraitType.IS_LIVE);
  return null != t && t.is_live
}

function C(e) {
  let t = e.traits.find(e => e.type === s.ContentInventoryTraitType.FIRST_TIME);
  return null != t && t.first_time
}

function g(e) {
  return null != e.expires_at && new Date(e.expires_at) < new Date
}

function S(e) {
  let t = e.traits.find(e => e.type === s.ContentInventoryTraitType.DURATION_SECONDS);
  return null == t ? void 0 : t.duration_seconds
}

function _(e) {
  let t = e.traits.find(e => e.type === s.ContentInventoryTraitType.AGGREGATE_RANGE);
  return null == t ? void 0 : t.range
}

function T(e) {
  let t = e.traits.find(e => e.type === s.ContentInventoryTraitType.MARATHON);
  return null == t ? void 0 : t.marathon
}

function I(e) {
  let t = e.traits.find(e => e.type === s.ContentInventoryTraitType.RESURRECTED);
  return (null == t ? void 0 : t.resurrected_last_played) != null
}

function A(e) {
  return e.content_type === i.ContentInventoryEntryType.TOP_GAME
}

function N(e) {
  let t = e.traits.find(e => e.type === s.ContentInventoryTraitType.STREAK_DAYS);
  return null == t ? void 0 : t.streak_count_days
}

function v(e) {
  let t = S(e);
  if (null == t) return null;
  let n = Math.round(t / r.default.Seconds.HOUR);
  return u.default.Messages.MEMBER_LIST_CONTENT_FEED_PLAYED_FOR_HOURS.format({
    hours: n
  })
}

function x(e) {
  var t;
  let n = null !== (t = S(e)) && void 0 !== t ? t : 0;
  return n > 10 * r.default.Seconds.HOUR ? u.default.Messages.MEMBER_LIST_CONTENT_FEED_EPIC_MARATHON : n > 5 * r.default.Seconds.HOUR ? u.default.Messages.MEMBER_LIST_CONTENT_FEED_ULTRA_MARATHON : u.default.Messages.MEMBER_LIST_CONTENT_FEED_MARATHON
}

function M(e) {
  let t = v(e),
    n = x(e);
  return null == t ? n : "".concat(n, " — ").concat(t)
}