"use strict";
n.r(t), n.d(t, {
  calculateActiveTimestampDurations: function() {
    return c
  },
  calculateActiveTimestampDurationsFromStart: function() {
    return f
  },
  formatActiveTimestampFromUnits: function() {
    return m
  },
  formatEndedTimestamp: function() {
    return p
  },
  formatEntryTimestamp: function() {
    return E
  },
  getAggregateRange: function() {
    return T
  },
  getEntryDuration: function() {
    return _
  },
  getFullMarathonDescription: function() {
    return L
  },
  getFullResurrectedBadgeText: function() {
    return N
  },
  getMarathonDurationStr: function() {
    return M
  },
  getMarathonName: function() {
    return R
  },
  getResurrectedEntryLastPlayTime: function() {
    return A
  },
  getStreakCount: function() {
    return x
  },
  isEntryActive: function() {
    return C
  },
  isEntryExpired: function() {
    return S
  },
  isEntryMarathon: function() {
    return I
  },
  isEntryNew: function() {
    return g
  },
  isEntryTopGame: function() {
    return v
  }
});
var a = n("283398"),
  l = n("913527"),
  s = n.n(l),
  i = n("884439"),
  r = n("876215"),
  o = n("70956"),
  u = n("709054"),
  d = n("689938");
let c = (e, t) => f(u.default.extractTimestamp(e.id), t),
  f = (e, t) => {
    let n = Math.abs((t - e) / o.default.Millis.SECOND),
      a = Math.floor(n) % o.default.Seconds.MINUTE,
      l = Math.floor(n / o.default.Seconds.MINUTE) % o.default.Seconds.MINUTE,
      s = Math.floor(n / o.default.Seconds.HOUR);
    return {
      seconds: a,
      minutes: l,
      hours: s,
      days: Math.floor(n / o.default.Seconds.DAY)
    }
  },
  h = (e, t) => {
    let {
      seconds: n,
      minutes: a,
      hours: l
    } = c(e, t);
    return m(n, a, l)
  },
  m = (e, t, n) => {
    function a(e) {
      return String(e).padStart(2, "0")
    }
    return d.default.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_ACTIVE.format({
      hours: n,
      minutes: n > 0 ? a(t) : t,
      seconds: a(e)
    })
  },
  p = (e, t) => {
    let n = s()(u.default.extractTimestamp(e.id)),
      a = n.isSame(s()(), "day"),
      l = s()().diff(n, "s");
    if (l < o.default.Seconds.MINUTE) return d.default.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_SECONDS_AGO.format({
      count: l
    });
    if (l < o.default.Seconds.HOUR) {
      let e = Math.round(l / o.default.Seconds.MINUTE);
      return d.default.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_MINUTES_AGO.format({
        count: e
      })
    }
    if (l < 6 * o.default.Seconds.HOUR) {
      let e = Math.round(l / o.default.Seconds.HOUR);
      return d.default.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_HOURS_AGO.format({
        count: e
      })
    } else if (l < o.default.Seconds.WEEK && a) return n.toDate().toLocaleTimeString(t, {
      hour: "numeric"
    });
    else if (l < o.default.Seconds.WEEK && !a) return n.toDate().toLocaleTimeString(t, {
      weekday: "short",
      hour: "numeric"
    });
    let i = Math.round(l / (7 * o.default.Seconds.DAY));
    return d.default.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_WEEKS_AGO.format({
      count: i
    })
  },
  E = (e, t) => C(e) ? h(e, Date.now()) : p(e, t);

function C(e) {
  let t = e.traits.find(e => e.type === i.ContentInventoryTraitType.IS_LIVE);
  return null != t && t.is_live
}

function g(e) {
  let t = e.traits.find(e => e.type === i.ContentInventoryTraitType.FIRST_TIME);
  return null != t && t.first_time
}

function S(e) {
  return null != e.expires_at && new Date(e.expires_at) < new Date
}

function _(e) {
  let t = e.traits.find(e => e.type === i.ContentInventoryTraitType.DURATION_SECONDS);
  return null == t ? void 0 : t.duration_seconds
}

function T(e) {
  let t = e.traits.find(e => e.type === i.ContentInventoryTraitType.AGGREGATE_RANGE);
  return null == t ? void 0 : t.range
}

function I(e) {
  let t = e.traits.find(e => e.type === i.ContentInventoryTraitType.MARATHON);
  return null == t ? void 0 : t.marathon
}

function A(e) {
  let t = e.traits.find(e => e.type === i.ContentInventoryTraitType.RESURRECTED);
  return (null == t ? void 0 : t.resurrected_last_played) != null ? new Date(t.resurrected_last_played) : void 0
}

function N(e) {
  let {
    months: t = 0,
    weeks: n = 0,
    days: l = 0
  } = (0, a.intervalToDuration)({
    start: e,
    end: new Date
  });
  return d.default.Messages.MEMBER_LIST_CONTENT_FEED_RESURRECTED_AFTER.format({
    months: t,
    weeks: t > 0 ? 0 : n,
    days: t > 0 || n > 0 ? 0 : l
  })
}

function v(e) {
  return e.content_type === r.ContentInventoryEntryType.TOP_GAME
}

function x(e) {
  let t = e.traits.find(e => e.type === i.ContentInventoryTraitType.STREAK_DAYS);
  return null == t ? void 0 : t.streak_count_days
}

function M(e) {
  let t = _(e);
  if (null == t) return null;
  let n = Math.round(t / o.default.Seconds.HOUR);
  return d.default.Messages.MEMBER_LIST_CONTENT_FEED_PLAYED_FOR_HOURS.format({
    hours: n
  })
}

function R(e) {
  var t;
  let n = null !== (t = _(e)) && void 0 !== t ? t : 0;
  return n > 10 * o.default.Seconds.HOUR ? d.default.Messages.MEMBER_LIST_CONTENT_FEED_EPIC_MARATHON : n > 5 * o.default.Seconds.HOUR ? d.default.Messages.MEMBER_LIST_CONTENT_FEED_ULTRA_MARATHON : d.default.Messages.MEMBER_LIST_CONTENT_FEED_MARATHON
}

function L(e) {
  let t = M(e),
    n = R(e);
  return null == t ? n : "".concat(n, " — ").concat(t)
}