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
    return N
  },
  getAggregateRange: function() {
    return O
  },
  getEntryDuration: function() {
    return m
  },
  getFullMarathonDescription: function() {
    return G
  },
  getFullResurrectedBadgeText: function() {
    return C
  },
  getMarathonDurationStr: function() {
    return U
  },
  getMarathonName: function() {
    return h
  },
  getResurrectedEntryLastPlayTime: function() {
    return R
  },
  getStreakCount: function() {
    return P
  },
  getTrait: function() {
    return A
  },
  getTrendingType: function() {
    return L
  },
  isEntryActive: function() {
    return p
  },
  isEntryExpired: function() {
    return y
  },
  isEntryMarathon: function() {
    return v
  },
  isEntryNew: function() {
    return M
  },
  isEntryTopGame: function() {
    return D
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
  E = n("876215"),
  s = n("835473"),
  l = n("70956"),
  T = n("709054"),
  d = n("719247"),
  c = n("689938");
let f = t => {
    let {
      start: e,
      now: n
    } = t, r = Math.abs((n - e) / l.default.Millis.SECOND), i = Math.floor(r) % l.default.Seconds.MINUTE, o = Math.floor(r / l.default.Seconds.MINUTE) % l.default.Seconds.MINUTE, u = Math.floor(r / l.default.Seconds.HOUR);
    return {
      seconds: i,
      minutes: o,
      hours: u,
      days: Math.floor(r / l.default.Seconds.DAY)
    }
  },
  _ = (t, e) => {
    let n = "id" in t ? T.default.extractTimestamp(t.id) : t.start;
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

    function o(t) {
      return String(t).padStart(2, "0")
    }
    return c.default.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_ACTIVE.format({
      hours: i,
      minutes: i > 0 ? o(r) : r,
      seconds: o(n)
    })
  },
  I = (t, e) => {
    let n = o()(T.default.extractTimestamp(t.id)),
      r = n.isSame(o()(), "day"),
      i = o()().diff(n, "s");
    if (i < l.default.Seconds.MINUTE) return c.default.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_SECONDS_AGO.format({
      count: i
    });
    if (i < l.default.Seconds.HOUR) {
      let t = Math.round(i / l.default.Seconds.MINUTE);
      return c.default.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_MINUTES_AGO.format({
        count: t
      })
    }
    if (i < 6 * l.default.Seconds.HOUR) {
      let t = Math.round(i / l.default.Seconds.HOUR);
      return c.default.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_HOURS_AGO.format({
        count: t
      })
    } else if (i < l.default.Seconds.WEEK && r) return n.toDate().toLocaleTimeString(e, {
      hour: "numeric"
    });
    else if (i < l.default.Seconds.WEEK && !r) return n.toDate().toLocaleTimeString(e, {
      weekday: "short",
      hour: "numeric"
    });
    let u = Math.round(i / (7 * l.default.Seconds.DAY));
    return c.default.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_WEEKS_AGO.format({
      count: u
    })
  },
  N = (t, e) => p(t) ? S(t, Date.now()) : I(t, e);

function A(t, e) {
  return t.traits.find(t => t.type === e)
}

function p(t) {
  var e, n;
  return null !== (n = null === (e = A(t, u.ContentInventoryTraitType.IS_LIVE)) || void 0 === e ? void 0 : e.is_live) && void 0 !== n && n
}

function M(t) {
  var e, n;
  return null !== (n = null === (e = A(t, u.ContentInventoryTraitType.FIRST_TIME)) || void 0 === e ? void 0 : e.first_time) && void 0 !== n && n
}

function y(t) {
  return null != t.expires_at && new Date(t.expires_at) < new Date
}

function m(t) {
  var e;
  return null === (e = A(t, u.ContentInventoryTraitType.DURATION_SECONDS)) || void 0 === e ? void 0 : e.duration_seconds
}

function O(t) {
  var e;
  return null === (e = A(t, u.ContentInventoryTraitType.AGGREGATE_RANGE)) || void 0 === e ? void 0 : e.range
}

function v(t) {
  var e;
  return null === (e = A(t, u.ContentInventoryTraitType.MARATHON)) || void 0 === e ? void 0 : e.marathon
}

function R(t) {
  let e = A(t, u.ContentInventoryTraitType.RESURRECTED);
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
  return t.content_type === E.ContentInventoryEntryType.TOP_GAME
}

function P(t) {
  var e;
  return null === (e = A(t, u.ContentInventoryTraitType.STREAK_DAYS)) || void 0 === e ? void 0 : e.streak_count_days
}

function g(t) {
  let e = P(t);
  if (null == e || e < 3) return !1;
  let n = T.default.extractTimestamp(t.id);
  return !(Date.now() - n > 48 * l.default.Millis.HOUR) && !0
}

function U(t) {
  let e = m(t);
  if (null == e) return null;
  let n = Math.round(e / l.default.Seconds.HOUR);
  return c.default.Messages.MEMBER_LIST_CONTENT_FEED_PLAYED_FOR_HOURS.format({
    hours: n
  })
}

function h(t) {
  var e;
  let n = null !== (e = m(t)) && void 0 !== e ? e : 0;
  return n > 10 * l.default.Seconds.HOUR ? c.default.Messages.MEMBER_LIST_CONTENT_FEED_EPIC_MARATHON : n > 5 * l.default.Seconds.HOUR ? c.default.Messages.MEMBER_LIST_CONTENT_FEED_ULTRA_MARATHON : c.default.Messages.MEMBER_LIST_CONTENT_FEED_MARATHON
}

function G(t) {
  let e = U(t),
    n = h(t);
  return null == e ? n : "".concat(n, " — ").concat(e)
}

function L(t) {
  var e;
  return null === (e = A(t, u.ContentInventoryTraitType.TRENDING_CONTENT)) || void 0 === e ? void 0 : e.trending
}

function w(t) {
  let e = (0, a.useStateFromStores)([d.default], () => d.default.getMatchingActivity(t)),
    [n, r] = (0, s.default)([null == e ? void 0 : e.application_id, t.extra.application_id]);
  return {
    activity: e,
    anyMatchingApplication: null != n ? n : r,
    activityApplication: n,
    fallbackApplication: r
  }
}