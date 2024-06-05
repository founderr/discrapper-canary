"use strict";
n.r(e), n.d(e, {
  calculateActiveTimestampDurations: function() {
    return _
  },
  formatActiveTimestamp: function() {
    return L
  },
  formatEndedTimestamp: function() {
    return C
  },
  formatEntryTimestamp: function() {
    return S
  },
  getAggregateRange: function() {
    return v
  },
  getEntryDuration: function() {
    return M
  },
  getFullMarathonDescription: function() {
    return U
  },
  getFullResurrectedBadgeText: function() {
    return O
  },
  getMarathonDurationStr: function() {
    return P
  },
  getMarathonName: function() {
    return h
  },
  getResurrectedEntryLastPlayTime: function() {
    return y
  },
  getStreakCount: function() {
    return D
  },
  getTrait: function() {
    return I
  },
  getTrendingType: function() {
    return G
  },
  isEntryActive: function() {
    return N
  },
  isEntryExpired: function() {
    return A
  },
  isEntryMarathon: function() {
    return m
  },
  isEntryNew: function() {
    return p
  },
  isEntryTopGame: function() {
    return R
  },
  isValidStreak: function() {
    return g
  },
  useEntryActivityAndApplication: function() {
    return w
  }
}), n("47120");
var r = n("283398"),
  i = n("913527"),
  o = n.n(i),
  u = n("884439"),
  a = n("442837"),
  s = n("876215"),
  l = n("835473"),
  E = n("70956"),
  T = n("709054"),
  d = n("719247"),
  c = n("689938");
let f = t => {
    let {
      start: e,
      now: n
    } = t, r = Math.abs((n - e) / E.default.Millis.SECOND), i = Math.floor(r) % E.default.Seconds.MINUTE, o = Math.floor(r / E.default.Seconds.MINUTE) % E.default.Seconds.MINUTE, u = Math.floor(r / E.default.Seconds.HOUR);
    return {
      seconds: i,
      minutes: o,
      hours: u,
      days: Math.floor(r / E.default.Seconds.DAY)
    }
  },
  _ = (t, e) => {
    let n = "id" in t ? T.default.extractTimestamp(t.id) : t.start;
    return f({
      start: n,
      now: "end" in t && null != t.end ? Math.min(t.end, e) : e
    })
  },
  L = (t, e) => {
    let {
      seconds: n,
      minutes: r,
      hours: i
    } = _(t, e);

    function o(t) {
      return String(t).padStart(2, "0")
    }
    return c.default.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_ACTIVE.format({
      hours: i,
      minutes: i > 0 ? o(r) : r,
      seconds: o(n)
    })
  },
  C = (t, e) => {
    let n = o()(T.default.extractTimestamp(t.id)),
      r = n.isSame(o()(), "day"),
      i = o()().diff(n, "s");
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
    let u = Math.round(i / (7 * E.default.Seconds.DAY));
    return c.default.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_WEEKS_AGO.format({
      count: u
    })
  },
  S = (t, e) => N(t) ? L(t, Date.now()) : C(t, e);

function I(t, e) {
  return t.traits.find(t => t.type === e)
}

function N(t) {
  var e, n;
  return null !== (n = null === (e = I(t, u.ContentInventoryTraitType.IS_LIVE)) || void 0 === e ? void 0 : e.is_live) && void 0 !== n && n
}

function p(t) {
  var e, n;
  return null !== (n = null === (e = I(t, u.ContentInventoryTraitType.FIRST_TIME)) || void 0 === e ? void 0 : e.first_time) && void 0 !== n && n
}

function A(t) {
  return null != t.expires_at && new Date(t.expires_at) < new Date
}

function M(t) {
  var e;
  return null === (e = I(t, u.ContentInventoryTraitType.DURATION_SECONDS)) || void 0 === e ? void 0 : e.duration_seconds
}

function v(t) {
  var e;
  return null === (e = I(t, u.ContentInventoryTraitType.AGGREGATE_RANGE)) || void 0 === e ? void 0 : e.range
}

function m(t) {
  var e;
  return null === (e = I(t, u.ContentInventoryTraitType.MARATHON)) || void 0 === e ? void 0 : e.marathon
}

function y(t) {
  let e = I(t, u.ContentInventoryTraitType.RESURRECTED);
  return (null == e ? void 0 : e.resurrected_last_played) != null ? new Date(e.resurrected_last_played) : void 0
}

function O(t) {
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

function R(t) {
  return t.content_type === s.ContentInventoryEntryType.TOP_GAME
}

function D(t) {
  var e;
  return null === (e = I(t, u.ContentInventoryTraitType.STREAK_DAYS)) || void 0 === e ? void 0 : e.streak_count_days
}

function g(t) {
  let e = D(t);
  if (null == e || e < 3) return !1;
  let n = T.default.extractTimestamp(t.id);
  return !(Date.now() - n > 48 * E.default.Millis.HOUR) && !0
}

function P(t) {
  let e = M(t);
  if (null == e) return null;
  let n = Math.round(e / E.default.Seconds.HOUR);
  return c.default.Messages.MEMBER_LIST_CONTENT_FEED_PLAYED_FOR_HOURS.format({
    hours: n
  })
}

function h(t) {
  var e;
  let n = null !== (e = M(t)) && void 0 !== e ? e : 0;
  return n > 10 * E.default.Seconds.HOUR ? c.default.Messages.MEMBER_LIST_CONTENT_FEED_EPIC_MARATHON : n > 5 * E.default.Seconds.HOUR ? c.default.Messages.MEMBER_LIST_CONTENT_FEED_ULTRA_MARATHON : c.default.Messages.MEMBER_LIST_CONTENT_FEED_MARATHON
}

function U(t) {
  let e = P(t),
    n = h(t);
  return null == e ? n : "".concat(n, " — ").concat(e)
}

function G(t) {
  var e;
  return null === (e = I(t, u.ContentInventoryTraitType.TRENDING_CONTENT)) || void 0 === e ? void 0 : e.trending
}

function w(t) {
  let e = (0, a.useStateFromStores)([d.default], () => d.default.getMatchingActivity(t)),
    [n, r] = (0, l.default)([null == e ? void 0 : e.application_id, t.extra.application_id]);
  return {
    activity: e,
    anyMatchingApplication: null != n ? n : r,
    activityApplication: n,
    fallbackApplication: r
  }
}