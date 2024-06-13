"use strict";
n.r(t), n.d(t, {
  calculateActiveTimestampDurations: function() {
    return R
  },
  formatActiveTimestamp: function() {
    return o
  },
  formatEndedTimestamp: function() {
    return N
  },
  formatEntryTimestamp: function() {
    return O
  },
  getAggregateRange: function() {
    return P
  },
  getEntryDuration: function() {
    return G
  },
  getFullMarathonDescription: function() {
    return p
  },
  getFullResurrectedBadgeText: function() {
    return U
  },
  getMarathonDurationStr: function() {
    return y
  },
  getMarathonName: function() {
    return K
  },
  getResurrectedEntryLastPlayTime: function() {
    return C
  },
  getStreakCount: function() {
    return D
  },
  getTrait: function() {
    return d
  },
  getTrendingType: function() {
    return m
  },
  isEntryActive: function() {
    return c
  },
  isEntryExpired: function() {
    return M
  },
  isEntryMarathon: function() {
    return L
  },
  isEntryNew: function() {
    return f
  },
  isEntryTopGame: function() {
    return g
  },
  isValidStreak: function() {
    return v
  },
  useEntryActivityAndApplication: function() {
    return F
  }
}), n("47120");
var r = n("283398"),
  s = n("913527"),
  a = n.n(s),
  E = n("884439"),
  u = n("442837"),
  T = n("876215"),
  _ = n("835473"),
  A = n("70956"),
  I = n("709054"),
  S = n("719247"),
  l = n("689938");
let i = e => {
    let {
      start: t,
      now: n
    } = e, r = Math.abs((n - t) / A.default.Millis.SECOND), s = Math.floor(r) % A.default.Seconds.MINUTE, a = Math.floor(r / A.default.Seconds.MINUTE) % A.default.Seconds.MINUTE, E = Math.floor(r / A.default.Seconds.HOUR);
    return {
      seconds: s,
      minutes: a,
      hours: E,
      days: Math.floor(r / A.default.Seconds.DAY)
    }
  },
  R = (e, t) => {
    let n = "id" in e ? I.default.extractTimestamp(e.id) : e.start;
    return i({
      start: n,
      now: "end" in e && null != e.end ? Math.min(e.end, t) : t
    })
  },
  o = (e, t) => {
    let {
      seconds: n,
      minutes: r,
      hours: s
    } = R(e, t);

    function a(e) {
      return String(e).padStart(2, "0")
    }
    return l.default.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_ACTIVE.format({
      hours: s,
      minutes: s > 0 ? a(r) : r,
      seconds: a(n)
    })
  },
  N = (e, t) => {
    let n = a()(I.default.extractTimestamp(e.id)),
      r = n.isSame(a()(), "day"),
      s = a()().diff(n, "s");
    if (s < A.default.Seconds.MINUTE) return l.default.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_SECONDS_AGO.format({
      count: s
    });
    if (s < A.default.Seconds.HOUR) {
      let e = Math.round(s / A.default.Seconds.MINUTE);
      return l.default.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_MINUTES_AGO.format({
        count: e
      })
    }
    if (s < 6 * A.default.Seconds.HOUR) {
      let e = Math.round(s / A.default.Seconds.HOUR);
      return l.default.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_HOURS_AGO.format({
        count: e
      })
    } else if (s < A.default.Seconds.WEEK && r) return n.toDate().toLocaleTimeString(t, {
      hour: "numeric"
    });
    else if (s < A.default.Seconds.WEEK && !r) return n.toDate().toLocaleTimeString(t, {
      weekday: "short",
      hour: "numeric"
    });
    let E = Math.round(s / (7 * A.default.Seconds.DAY));
    return l.default.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_WEEKS_AGO.format({
      count: E
    })
  },
  O = (e, t) => c(e) ? o(e, Date.now()) : N(e, t);

function d(e, t) {
  return e.traits.find(e => e.type === t)
}

function c(e) {
  var t, n;
  return null !== (n = null === (t = d(e, E.ContentInventoryTraitType.IS_LIVE)) || void 0 === t ? void 0 : t.is_live) && void 0 !== n && n
}

function f(e) {
  var t, n;
  return null !== (n = null === (t = d(e, E.ContentInventoryTraitType.FIRST_TIME)) || void 0 === t ? void 0 : t.first_time) && void 0 !== n && n
}

function M(e) {
  return null != e.expires_at && new Date(e.expires_at) < new Date
}

function G(e) {
  var t;
  return null === (t = d(e, E.ContentInventoryTraitType.DURATION_SECONDS)) || void 0 === t ? void 0 : t.duration_seconds
}

function P(e) {
  var t;
  return null === (t = d(e, E.ContentInventoryTraitType.AGGREGATE_RANGE)) || void 0 === t ? void 0 : t.range
}

function L(e) {
  var t;
  return null === (t = d(e, E.ContentInventoryTraitType.MARATHON)) || void 0 === t ? void 0 : t.marathon
}

function C(e) {
  let t = d(e, E.ContentInventoryTraitType.RESURRECTED);
  return (null == t ? void 0 : t.resurrected_last_played) != null ? new Date(t.resurrected_last_played) : void 0
}

function U(e) {
  let {
    months: t = 0,
    weeks: n = 0,
    days: s = 0
  } = (0, r.intervalToDuration)({
    start: e,
    end: new Date
  });
  return l.default.Messages.MEMBER_LIST_CONTENT_FEED_RESURRECTED_AFTER.format({
    months: t,
    weeks: t > 0 ? 0 : n,
    days: t > 0 || n > 0 ? 0 : s
  })
}

function g(e) {
  return e.content_type === T.ContentInventoryEntryType.TOP_GAME
}

function D(e) {
  var t;
  return null === (t = d(e, E.ContentInventoryTraitType.STREAK_DAYS)) || void 0 === t ? void 0 : t.streak_count_days
}

function v(e) {
  let t = D(e);
  if (null == t || t < 3) return !1;
  let n = I.default.extractTimestamp(e.id);
  return !(Date.now() - n > 48 * A.default.Millis.HOUR) && !0
}

function y(e) {
  let t = G(e);
  if (null == t) return null;
  let n = Math.round(t / A.default.Seconds.HOUR);
  return l.default.Messages.MEMBER_LIST_CONTENT_FEED_PLAYED_FOR_HOURS.format({
    hours: n
  })
}

function K(e) {
  var t;
  let n = null !== (t = G(e)) && void 0 !== t ? t : 0;
  return n > 10 * A.default.Seconds.HOUR ? l.default.Messages.MEMBER_LIST_CONTENT_FEED_EPIC_MARATHON : n > 5 * A.default.Seconds.HOUR ? l.default.Messages.MEMBER_LIST_CONTENT_FEED_ULTRA_MARATHON : l.default.Messages.MEMBER_LIST_CONTENT_FEED_MARATHON
}

function p(e) {
  let t = y(e),
    n = K(e);
  return null == t ? n : "".concat(n, " — ").concat(t)
}

function m(e) {
  var t;
  return null === (t = d(e, E.ContentInventoryTraitType.TRENDING_CONTENT)) || void 0 === t ? void 0 : t.trending
}

function F(e) {
  let t = (0, u.useStateFromStores)([S.default], () => S.default.getMatchingActivity(e)),
    [n, r] = (0, _.default)([null == t ? void 0 : t.application_id, e.extra.application_id]);
  return {
    activity: t,
    anyMatchingApplication: null != n ? n : r,
    activityApplication: n,
    fallbackApplication: r
  }
}