"use strict";
n.r(t), n.d(t, {
  calculateActiveTimestampDurations: function() {
    return d
  },
  formatActiveTimestamp: function() {
    return _
  },
  formatEndedTimestamp: function() {
    return c
  },
  formatEntryTimestamp: function() {
    return L
  },
  getAggregateRange: function() {
    return M
  },
  getEntryDuration: function() {
    return N
  },
  getFullMarathonDescription: function() {
    return g
  },
  getFullResurrectedBadgeText: function() {
    return R
  },
  getMarathonDurationStr: function() {
    return v
  },
  getMarathonName: function() {
    return y
  },
  getResurrectedEntryLastPlayTime: function() {
    return A
  },
  getStreakCount: function() {
    return p
  },
  getTrait: function() {
    return f
  },
  getTrendingType: function() {
    return h
  },
  isEntryActive: function() {
    return C
  },
  isEntryExpired: function() {
    return I
  },
  isEntryMarathon: function() {
    return m
  },
  isEntryNew: function() {
    return S
  },
  isEntryTopGame: function() {
    return O
  },
  isValidStreak: function() {
    return D
  }
});
var r = n("283398"),
  o = n("913527"),
  i = n.n(o),
  a = n("884439"),
  u = n("876215"),
  s = n("70956"),
  E = n("709054"),
  T = n("689938");
let l = e => {
    let {
      start: t,
      now: n
    } = e, r = Math.abs((n - t) / s.default.Millis.SECOND), o = Math.floor(r) % s.default.Seconds.MINUTE, i = Math.floor(r / s.default.Seconds.MINUTE) % s.default.Seconds.MINUTE, a = Math.floor(r / s.default.Seconds.HOUR);
    return {
      seconds: o,
      minutes: i,
      hours: a,
      days: Math.floor(r / s.default.Seconds.DAY)
    }
  },
  d = (e, t) => {
    let n = "id" in e ? E.default.extractTimestamp(e.id) : e.start;
    return l({
      start: n,
      now: "end" in e && null != e.end ? Math.min(e.end, t) : t
    })
  },
  _ = (e, t) => {
    let {
      seconds: n,
      minutes: r,
      hours: o
    } = d(e, t);

    function i(e) {
      return String(e).padStart(2, "0")
    }
    return T.default.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_ACTIVE.format({
      hours: o,
      minutes: o > 0 ? i(r) : r,
      seconds: i(n)
    })
  },
  c = (e, t) => {
    let n = i()(E.default.extractTimestamp(e.id)),
      r = n.isSame(i()(), "day"),
      o = i()().diff(n, "s");
    if (o < s.default.Seconds.MINUTE) return T.default.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_SECONDS_AGO.format({
      count: o
    });
    if (o < s.default.Seconds.HOUR) {
      let e = Math.round(o / s.default.Seconds.MINUTE);
      return T.default.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_MINUTES_AGO.format({
        count: e
      })
    }
    if (o < 6 * s.default.Seconds.HOUR) {
      let e = Math.round(o / s.default.Seconds.HOUR);
      return T.default.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_HOURS_AGO.format({
        count: e
      })
    } else if (o < s.default.Seconds.WEEK && r) return n.toDate().toLocaleTimeString(t, {
      hour: "numeric"
    });
    else if (o < s.default.Seconds.WEEK && !r) return n.toDate().toLocaleTimeString(t, {
      weekday: "short",
      hour: "numeric"
    });
    let a = Math.round(o / (7 * s.default.Seconds.DAY));
    return T.default.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_WEEKS_AGO.format({
      count: a
    })
  },
  L = (e, t) => C(e) ? _(e, Date.now()) : c(e, t);

function f(e, t) {
  return e.traits.find(e => e.type === t)
}

function C(e) {
  var t, n;
  return null !== (n = null === (t = f(e, a.ContentInventoryTraitType.IS_LIVE)) || void 0 === t ? void 0 : t.is_live) && void 0 !== n && n
}

function S(e) {
  var t, n;
  return null !== (n = null === (t = f(e, a.ContentInventoryTraitType.FIRST_TIME)) || void 0 === t ? void 0 : t.first_time) && void 0 !== n && n
}

function I(e) {
  return null != e.expires_at && new Date(e.expires_at) < new Date
}

function N(e) {
  var t;
  return null === (t = f(e, a.ContentInventoryTraitType.DURATION_SECONDS)) || void 0 === t ? void 0 : t.duration_seconds
}

function M(e) {
  var t;
  return null === (t = f(e, a.ContentInventoryTraitType.AGGREGATE_RANGE)) || void 0 === t ? void 0 : t.range
}

function m(e) {
  var t;
  return null === (t = f(e, a.ContentInventoryTraitType.MARATHON)) || void 0 === t ? void 0 : t.marathon
}

function A(e) {
  let t = f(e, a.ContentInventoryTraitType.RESURRECTED);
  return (null == t ? void 0 : t.resurrected_last_played) != null ? new Date(t.resurrected_last_played) : void 0
}

function R(e) {
  let {
    months: t = 0,
    weeks: n = 0,
    days: o = 0
  } = (0, r.intervalToDuration)({
    start: e,
    end: new Date
  });
  return T.default.Messages.MEMBER_LIST_CONTENT_FEED_RESURRECTED_AFTER.format({
    months: t,
    weeks: t > 0 ? 0 : n,
    days: t > 0 || n > 0 ? 0 : o
  })
}

function O(e) {
  return e.content_type === u.ContentInventoryEntryType.TOP_GAME
}

function p(e) {
  var t;
  return null === (t = f(e, a.ContentInventoryTraitType.STREAK_DAYS)) || void 0 === t ? void 0 : t.streak_count_days
}

function D(e) {
  let t = p(e);
  if (null == t || t < 3) return !1;
  let n = E.default.extractTimestamp(e.id);
  return !(Date.now() - n > 48 * s.default.Millis.HOUR) && !0
}

function v(e) {
  let t = N(e);
  if (null == t) return null;
  let n = Math.round(t / s.default.Seconds.HOUR);
  return T.default.Messages.MEMBER_LIST_CONTENT_FEED_PLAYED_FOR_HOURS.format({
    hours: n
  })
}

function y(e) {
  var t;
  let n = null !== (t = N(e)) && void 0 !== t ? t : 0;
  return n > 10 * s.default.Seconds.HOUR ? T.default.Messages.MEMBER_LIST_CONTENT_FEED_EPIC_MARATHON : n > 5 * s.default.Seconds.HOUR ? T.default.Messages.MEMBER_LIST_CONTENT_FEED_ULTRA_MARATHON : T.default.Messages.MEMBER_LIST_CONTENT_FEED_MARATHON
}

function g(e) {
  let t = v(e),
    n = y(e);
  return null == t ? n : "".concat(n, " — ").concat(t)
}

function h(e) {
  var t;
  return null === (t = f(e, a.ContentInventoryTraitType.TRENDING_CONTENT)) || void 0 === t ? void 0 : t.trending
}