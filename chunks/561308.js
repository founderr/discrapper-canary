"use strict";
n.r(e), n.d(e, {
  calculateActiveTimestampDurations: function() {
    return _
  },
  formatActiveTimestamp: function() {
    return S
  },
  formatEndedTimestamp: function() {
    return I
  },
  formatEntryTimestamp: function() {
    return A
  },
  getAggregateRange: function() {
    return R
  },
  getEntryDuration: function() {
    return p
  },
  getFullMarathonDescription: function() {
    return F
  },
  getFullResurrectedBadgeText: function() {
    return C
  },
  getMarathonDurationStr: function() {
    return P
  },
  getMarathonName: function() {
    return U
  },
  getResurrectedEntryLastPlayTime: function() {
    return m
  },
  getStreakCount: function() {
    return g
  },
  getTrait: function() {
    return N
  },
  getTrendingType: function() {
    return L
  },
  isEntryActive: function() {
    return M
  },
  isEntryExpired: function() {
    return y
  },
  isEntryMarathon: function() {
    return O
  },
  isEntryNew: function() {
    return v
  },
  isEntryTopGame: function() {
    return D
  },
  isValidStreak: function() {
    return h
  },
  useEntryActivityAndApplication: function() {
    return G
  }
}), n("47120");
var r = n("283398"),
  i = n("913527"),
  u = n.n(i),
  o = n("884439"),
  a = n("442837"),
  l = n("876215"),
  s = n("835473"),
  E = n("70956"),
  d = n("709054"),
  T = n("719247"),
  c = n("689938");
let f = t => {
    let {
      start: e,
      now: n
    } = t, r = Math.abs((n - e) / E.default.Millis.SECOND), i = Math.floor(r) % E.default.Seconds.MINUTE, u = Math.floor(r / E.default.Seconds.MINUTE) % E.default.Seconds.MINUTE, o = Math.floor(r / E.default.Seconds.HOUR);
    return {
      seconds: i,
      minutes: u,
      hours: o,
      days: Math.floor(r / E.default.Seconds.DAY)
    }
  },
  _ = (t, e) => {
    let n = "id" in t ? d.default.extractTimestamp(t.id) : t.start;
    return f({
      start: n,
      now: "end" in t && null != t.end ? Math.min(t.end, e) : e
    })
  },
  S = (t, e) => {
    let {
      seconds: n,
      minutes: r,
      hours: i
    } = _(t, e);

    function u(t) {
      return String(t).padStart(2, "0")
    }
    return c.default.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_ACTIVE.format({
      hours: i,
      minutes: i > 0 ? u(r) : r,
      seconds: u(n)
    })
  },
  I = (t, e) => {
    let n = u()(d.default.extractTimestamp(t.id)),
      r = n.isSame(u()(), "day"),
      i = u()().diff(n, "s");
    if (i < E.default.Seconds.MINUTE) return c.default.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_SECONDS_AGO.format({
      count: i
    });
    if (i < E.default.Seconds.HOUR) {
      let t = Math.round(i / E.default.Seconds.MINUTE);
      return c.default.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_MINUTES_AGO.format({
        count: t
      })
    }
    if (i < 6 * E.default.Seconds.HOUR) {
      let t = Math.round(i / E.default.Seconds.HOUR);
      return c.default.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_HOURS_AGO.format({
        count: t
      })
    } else if (i < E.default.Seconds.WEEK && r) return n.toDate().toLocaleTimeString(e, {
      hour: "numeric"
    });
    else if (i < E.default.Seconds.WEEK && !r) return n.toDate().toLocaleTimeString(e, {
      weekday: "short",
      hour: "numeric"
    });
    let o = Math.round(i / (7 * E.default.Seconds.DAY));
    return c.default.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_WEEKS_AGO.format({
      count: o
    })
  },
  A = (t, e) => M(t) ? S(t, Date.now()) : I(t, e);

function N(t, e) {
  return t.traits.find(t => t.type === e)
}

function M(t) {
  var e, n;
  return null !== (n = null === (e = N(t, o.ContentInventoryTraitType.IS_LIVE)) || void 0 === e ? void 0 : e.is_live) && void 0 !== n && n
}

function v(t) {
  var e, n;
  return null !== (n = null === (e = N(t, o.ContentInventoryTraitType.FIRST_TIME)) || void 0 === e ? void 0 : e.first_time) && void 0 !== n && n
}

function y(t) {
  return null != t.expires_at && new Date(t.expires_at) < new Date
}

function p(t) {
  var e;
  return null === (e = N(t, o.ContentInventoryTraitType.DURATION_SECONDS)) || void 0 === e ? void 0 : e.duration_seconds
}

function R(t) {
  var e;
  return null === (e = N(t, o.ContentInventoryTraitType.AGGREGATE_RANGE)) || void 0 === e ? void 0 : e.range
}

function O(t) {
  var e;
  return null === (e = N(t, o.ContentInventoryTraitType.MARATHON)) || void 0 === e ? void 0 : e.marathon
}

function m(t) {
  let e = N(t, o.ContentInventoryTraitType.RESURRECTED);
  return (null == e ? void 0 : e.resurrected_last_played) != null ? new Date(e.resurrected_last_played) : void 0
}

function C(t) {
  let {
    months: e = 0,
    weeks: n = 0,
    days: i = 0
  } = (0, r.intervalToDuration)({
    start: t,
    end: new Date
  });
  return c.default.Messages.MEMBER_LIST_CONTENT_FEED_RESURRECTED_AFTER.format({
    months: e,
    weeks: e > 0 ? 0 : n,
    days: e > 0 || n > 0 ? 0 : i
  })
}

function D(t) {
  return t.content_type === l.ContentInventoryEntryType.TOP_GAME
}

function g(t) {
  var e;
  return null === (e = N(t, o.ContentInventoryTraitType.STREAK_DAYS)) || void 0 === e ? void 0 : e.streak_count_days
}

function h(t) {
  let e = g(t);
  if (null == e || e < 3) return !1;
  let n = d.default.extractTimestamp(t.id);
  return !(Date.now() - n > 48 * E.default.Millis.HOUR) && !0
}

function P(t) {
  let e = p(t);
  if (null == e) return null;
  let n = Math.round(e / E.default.Seconds.HOUR);
  return c.default.Messages.MEMBER_LIST_CONTENT_FEED_PLAYED_FOR_HOURS.format({
    hours: n
  })
}

function U(t) {
  var e;
  let n = null !== (e = p(t)) && void 0 !== e ? e : 0;
  return n > 10 * E.default.Seconds.HOUR ? c.default.Messages.MEMBER_LIST_CONTENT_FEED_EPIC_MARATHON : n > 5 * E.default.Seconds.HOUR ? c.default.Messages.MEMBER_LIST_CONTENT_FEED_ULTRA_MARATHON : c.default.Messages.MEMBER_LIST_CONTENT_FEED_MARATHON
}

function F(t) {
  let e = P(t),
    n = U(t);
  return null == e ? n : "".concat(n, " — ").concat(e)
}

function L(t) {
  var e;
  return null === (e = N(t, o.ContentInventoryTraitType.TRENDING_CONTENT)) || void 0 === e ? void 0 : e.trending
}

function G(t) {
  let e = (0, a.useStateFromStores)([T.default], () => T.default.getMatchingActivity(t)),
    [n, r] = (0, s.default)([null == e ? void 0 : e.application_id, t.extra.application_id]);
  return {
    activity: e,
    anyMatchingApplication: null != n ? n : r,
    activityApplication: n,
    fallbackApplication: r
  }
}