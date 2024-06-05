"use strict";
n.r(e), n.d(e, {
  calculateActiveTimestampDurations: function() {
    return d
  },
  formatActiveTimestamp: function() {
    return _
  },
  formatEndedTimestamp: function() {
    return L
  },
  formatEntryTimestamp: function() {
    return c
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
    return U
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
  u = n("884439"),
  a = n("876215"),
  s = n("70956"),
  T = n("709054"),
  E = n("689938");
let l = t => {
    let {
      start: e,
      now: n
    } = t, r = Math.abs((n - e) / s.default.Millis.SECOND), o = Math.floor(r) % s.default.Seconds.MINUTE, i = Math.floor(r / s.default.Seconds.MINUTE) % s.default.Seconds.MINUTE, u = Math.floor(r / s.default.Seconds.HOUR);
    return {
      seconds: o,
      minutes: i,
      hours: u,
      days: Math.floor(r / s.default.Seconds.DAY)
    }
  },
  d = (t, e) => {
    let n = "id" in t ? T.default.extractTimestamp(t.id) : t.start;
    return l({
      start: n,
      now: "end" in t && null != t.end ? Math.min(t.end, e) : e
    })
  },
  _ = (t, e) => {
    let {
      seconds: n,
      minutes: r,
      hours: o
    } = d(t, e);

    function i(t) {
      return String(t).padStart(2, "0")
    }
    return E.default.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_ACTIVE.format({
      hours: o,
      minutes: o > 0 ? i(r) : r,
      seconds: i(n)
    })
  },
  L = (t, e) => {
    let n = i()(T.default.extractTimestamp(t.id)),
      r = n.isSame(i()(), "day"),
      o = i()().diff(n, "s");
    if (o < s.default.Seconds.MINUTE) return E.default.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_SECONDS_AGO.format({
      count: o
    });
    if (o < s.default.Seconds.HOUR) {
      let t = Math.round(o / s.default.Seconds.MINUTE);
      return E.default.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_MINUTES_AGO.format({
        count: t
      })
    }
    if (o < 6 * s.default.Seconds.HOUR) {
      let t = Math.round(o / s.default.Seconds.HOUR);
      return E.default.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_HOURS_AGO.format({
        count: t
      })
    } else if (o < s.default.Seconds.WEEK && r) return n.toDate().toLocaleTimeString(e, {
      hour: "numeric"
    });
    else if (o < s.default.Seconds.WEEK && !r) return n.toDate().toLocaleTimeString(e, {
      weekday: "short",
      hour: "numeric"
    });
    let u = Math.round(o / (7 * s.default.Seconds.DAY));
    return E.default.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_WEEKS_AGO.format({
      count: u
    })
  },
  c = (t, e) => C(t) ? _(t, Date.now()) : L(t, e);

function f(t, e) {
  return t.traits.find(t => t.type === e)
}

function C(t) {
  var e, n;
  return null !== (n = null === (e = f(t, u.ContentInventoryTraitType.IS_LIVE)) || void 0 === e ? void 0 : e.is_live) && void 0 !== n && n
}

function S(t) {
  var e, n;
  return null !== (n = null === (e = f(t, u.ContentInventoryTraitType.FIRST_TIME)) || void 0 === e ? void 0 : e.first_time) && void 0 !== n && n
}

function I(t) {
  return null != t.expires_at && new Date(t.expires_at) < new Date
}

function N(t) {
  var e;
  return null === (e = f(t, u.ContentInventoryTraitType.DURATION_SECONDS)) || void 0 === e ? void 0 : e.duration_seconds
}

function M(t) {
  var e;
  return null === (e = f(t, u.ContentInventoryTraitType.AGGREGATE_RANGE)) || void 0 === e ? void 0 : e.range
}

function m(t) {
  var e;
  return null === (e = f(t, u.ContentInventoryTraitType.MARATHON)) || void 0 === e ? void 0 : e.marathon
}

function A(t) {
  let e = f(t, u.ContentInventoryTraitType.RESURRECTED);
  return (null == e ? void 0 : e.resurrected_last_played) != null ? new Date(e.resurrected_last_played) : void 0
}

function R(t) {
  let {
    months: e = 0,
    weeks: n = 0,
    days: o = 0
  } = (0, r.intervalToDuration)({
    start: t,
    end: new Date
  });
  return E.default.Messages.MEMBER_LIST_CONTENT_FEED_RESURRECTED_AFTER.format({
    months: e,
    weeks: e > 0 ? 0 : n,
    days: e > 0 || n > 0 ? 0 : o
  })
}

function O(t) {
  return t.content_type === a.ContentInventoryEntryType.TOP_GAME
}

function p(t) {
  var e;
  return null === (e = f(t, u.ContentInventoryTraitType.STREAK_DAYS)) || void 0 === e ? void 0 : e.streak_count_days
}

function D(t) {
  let e = p(t);
  if (null == e || e < 3) return !1;
  let n = T.default.extractTimestamp(t.id);
  return !(Date.now() - n > 48 * s.default.Millis.HOUR) && !0
}

function v(t) {
  let e = N(t);
  if (null == e) return null;
  let n = Math.round(e / s.default.Seconds.HOUR);
  return E.default.Messages.MEMBER_LIST_CONTENT_FEED_PLAYED_FOR_HOURS.format({
    hours: n
  })
}

function y(t) {
  var e;
  let n = null !== (e = N(t)) && void 0 !== e ? e : 0;
  return n > 10 * s.default.Seconds.HOUR ? E.default.Messages.MEMBER_LIST_CONTENT_FEED_EPIC_MARATHON : n > 5 * s.default.Seconds.HOUR ? E.default.Messages.MEMBER_LIST_CONTENT_FEED_ULTRA_MARATHON : E.default.Messages.MEMBER_LIST_CONTENT_FEED_MARATHON
}

function g(t) {
  let e = v(t),
    n = y(t);
  return null == e ? n : "".concat(n, " — ").concat(e)
}

function U(t) {
  var e;
  return null === (e = f(t, u.ContentInventoryTraitType.TRENDING_CONTENT)) || void 0 === e ? void 0 : e.trending
}