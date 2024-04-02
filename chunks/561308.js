"use strict";
n.r(t), n.d(t, {
  calculateActiveTimestampDurations: function() {
    return u
  },
  formatActiveTimestamp: function() {
    return d
  },
  formatEndedTimestamp: function() {
    return c
  },
  formatEntryTimestamp: function() {
    return f
  },
  getAggregateRange: function() {
    return C
  },
  getEntryDuration: function() {
    return E
  },
  isEntryActive: function() {
    return h
  },
  isEntryExpired: function() {
    return p
  },
  isEntryNew: function() {
    return m
  }
});
var a = n("913527"),
  l = n.n(a),
  s = n("884439"),
  i = n("70956"),
  r = n("709054"),
  o = n("689938");
let u = (e, t) => {
    let n = Math.abs((t - r.default.extractTimestamp(e.id)) / i.default.Millis.SECOND),
      a = Math.floor(n) % i.default.Seconds.MINUTE,
      l = Math.floor(n / i.default.Seconds.MINUTE) % i.default.Seconds.MINUTE,
      s = Math.floor(n / i.default.Seconds.HOUR);
    return {
      seconds: a,
      minutes: l,
      hours: s,
      days: Math.floor(n / i.default.Seconds.DAY)
    }
  },
  d = (e, t) => {
    let {
      seconds: n,
      minutes: a,
      hours: l
    } = u(e, t);

    function s(e) {
      return String(e).padStart(2, "0")
    }
    return o.default.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_ACTIVE.format({
      hours: l,
      minutes: l > 0 ? s(a) : a,
      seconds: s(n)
    })
  },
  c = (e, t) => {
    let n = l()(r.default.extractTimestamp(e.id)),
      a = n.isSame(l()(), "day"),
      s = l()().diff(n, "s");
    if (s < i.default.Seconds.MINUTE) return o.default.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_SECONDS_AGO.format({
      count: s
    });
    if (s < i.default.Seconds.HOUR) {
      let e = Math.round(s / i.default.Seconds.MINUTE);
      o.default.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_MINUTES_AGO.format({
        count: e
      })
    } else if (s < 6 * i.default.Seconds.HOUR) {
      let e = Math.round(s / i.default.Seconds.HOUR);
      return o.default.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_HOURS_AGO.format({
        count: e
      })
    } else if (s < i.default.Seconds.WEEK && a) return n.toDate().toLocaleTimeString(t, {
      hour: "numeric"
    });
    else if (s < i.default.Seconds.WEEK && !a) {
      let e = n.toDate(),
        a = e.toLocaleDateString(t, {
          weekday: "short"
        }),
        l = e.toLocaleTimeString(t, {
          hour: "numeric"
        });
      return "".concat(a, " \xb7 ").concat(l)
    }
    let u = Math.round(s / (7 * i.default.Seconds.DAY));
    return o.default.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_WEEKS_AGO.format({
      count: u
    })
  },
  f = (e, t) => h(e) ? d(e, Date.now()) : c(e, t);

function h(e) {
  let t = e.traits.find(e => e.type === s.ContentInventoryTraitType.IS_LIVE);
  return null != t && t.is_live
}

function m(e) {
  let t = e.traits.find(e => e.type === s.ContentInventoryTraitType.FIRST_TIME);
  return null != t && t.first_time
}

function p(e) {
  return null != e.expires_at && new Date(e.expires_at) < new Date
}

function E(e) {
  let t = e.traits.find(e => e.type === s.ContentInventoryTraitType.DURATION_SECONDS);
  return null == t ? void 0 : t.duration_seconds
}

function C(e) {
  let t = e.traits.find(e => e.type === s.ContentInventoryTraitType.AGGREGATE_RANGE);
  return null == t ? void 0 : t.range
}