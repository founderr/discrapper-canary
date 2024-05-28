"use strict";
n.r(t), n.d(t, {
  calculateActiveTimestampDurations: function() {
    return E
  },
  formatActiveTimestamp: function() {
    return f
  },
  formatEndedTimestamp: function() {
    return _
  },
  formatEntryTimestamp: function() {
    return T
  },
  getAggregateRange: function() {
    return R
  },
  getEntryDuration: function() {
    return N
  },
  getFullMarathonDescription: function() {
    return x
  },
  getFullResurrectedBadgeText: function() {
    return L
  },
  getMarathonDurationStr: function() {
    return O
  },
  getMarathonName: function() {
    return A
  },
  getResurrectedEntryLastPlayTime: function() {
    return v
  },
  getStreakCount: function() {
    return p
  },
  getTrait: function() {
    return I
  },
  getTrendingType: function() {
    return U
  },
  isEntryActive: function() {
    return S
  },
  isEntryExpired: function() {
    return C
  },
  isEntryMarathon: function() {
    return g
  },
  isEntryNew: function() {
    return m
  },
  isEntryTopGame: function() {
    return h
  },
  isValidStreak: function() {
    return M
  }
});
var s = n("283398"),
  a = n("913527"),
  i = n.n(a),
  l = n("884439"),
  r = n("876215"),
  u = n("70956"),
  o = n("709054"),
  d = n("689938");
let c = e => {
    let {
      start: t,
      now: n
    } = e, s = Math.abs((n - t) / u.default.Millis.SECOND), a = Math.floor(s) % u.default.Seconds.MINUTE, i = Math.floor(s / u.default.Seconds.MINUTE) % u.default.Seconds.MINUTE, l = Math.floor(s / u.default.Seconds.HOUR);
    return {
      seconds: a,
      minutes: i,
      hours: l,
      days: Math.floor(s / u.default.Seconds.DAY)
    }
  },
  E = (e, t) => {
    let n = "id" in e ? o.default.extractTimestamp(e.id) : e.start;
    return c({
      start: n,
      now: "end" in e && null != e.end ? Math.min(e.end, t) : t
    })
  },
  f = (e, t) => {
    let {
      seconds: n,
      minutes: s,
      hours: a
    } = E(e, t);

    function i(e) {
      return String(e).padStart(2, "0")
    }
    return d.default.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_ACTIVE.format({
      hours: a,
      minutes: a > 0 ? i(s) : s,
      seconds: i(n)
    })
  },
  _ = (e, t) => {
    let n = i()(o.default.extractTimestamp(e.id)),
      s = n.isSame(i()(), "day"),
      a = i()().diff(n, "s");
    if (a < u.default.Seconds.MINUTE) return d.default.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_SECONDS_AGO.format({
      count: a
    });
    if (a < u.default.Seconds.HOUR) {
      let e = Math.round(a / u.default.Seconds.MINUTE);
      return d.default.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_MINUTES_AGO.format({
        count: e
      })
    }
    if (a < 6 * u.default.Seconds.HOUR) {
      let e = Math.round(a / u.default.Seconds.HOUR);
      return d.default.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_HOURS_AGO.format({
        count: e
      })
    } else if (a < u.default.Seconds.WEEK && s) return n.toDate().toLocaleTimeString(t, {
      hour: "numeric"
    });
    else if (a < u.default.Seconds.WEEK && !s) return n.toDate().toLocaleTimeString(t, {
      weekday: "short",
      hour: "numeric"
    });
    let l = Math.round(a / (7 * u.default.Seconds.DAY));
    return d.default.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_WEEKS_AGO.format({
      count: l
    })
  },
  T = (e, t) => S(e) ? f(e, Date.now()) : _(e, t);

function I(e, t) {
  return e.traits.find(e => e.type === t)
}

function S(e) {
  var t, n;
  return null !== (n = null === (t = I(e, l.ContentInventoryTraitType.IS_LIVE)) || void 0 === t ? void 0 : t.is_live) && void 0 !== n && n
}

function m(e) {
  var t, n;
  return null !== (n = null === (t = I(e, l.ContentInventoryTraitType.FIRST_TIME)) || void 0 === t ? void 0 : t.first_time) && void 0 !== n && n
}

function C(e) {
  return null != e.expires_at && new Date(e.expires_at) < new Date
}

function N(e) {
  var t;
  return null === (t = I(e, l.ContentInventoryTraitType.DURATION_SECONDS)) || void 0 === t ? void 0 : t.duration_seconds
}

function R(e) {
  var t;
  return null === (t = I(e, l.ContentInventoryTraitType.AGGREGATE_RANGE)) || void 0 === t ? void 0 : t.range
}

function g(e) {
  var t;
  return null === (t = I(e, l.ContentInventoryTraitType.MARATHON)) || void 0 === t ? void 0 : t.marathon
}

function v(e) {
  let t = I(e, l.ContentInventoryTraitType.RESURRECTED);
  return (null == t ? void 0 : t.resurrected_last_played) != null ? new Date(t.resurrected_last_played) : void 0
}

function L(e) {
  let {
    months: t = 0,
    weeks: n = 0,
    days: a = 0
  } = (0, s.intervalToDuration)({
    start: e,
    end: new Date
  });
  return d.default.Messages.MEMBER_LIST_CONTENT_FEED_RESURRECTED_AFTER.format({
    months: t,
    weeks: t > 0 ? 0 : n,
    days: t > 0 || n > 0 ? 0 : a
  })
}

function h(e) {
  return e.content_type === r.ContentInventoryEntryType.TOP_GAME
}

function p(e) {
  var t;
  return null === (t = I(e, l.ContentInventoryTraitType.STREAK_DAYS)) || void 0 === t ? void 0 : t.streak_count_days
}

function M(e) {
  let t = p(e);
  if (null == t || t < 3) return !1;
  let n = o.default.extractTimestamp(e.id);
  return !(Date.now() - n > 48 * u.default.Millis.HOUR) && !0
}

function O(e) {
  let t = N(e);
  if (null == t) return null;
  let n = Math.round(t / u.default.Seconds.HOUR);
  return d.default.Messages.MEMBER_LIST_CONTENT_FEED_PLAYED_FOR_HOURS.format({
    hours: n
  })
}

function A(e) {
  var t;
  let n = null !== (t = N(e)) && void 0 !== t ? t : 0;
  return n > 10 * u.default.Seconds.HOUR ? d.default.Messages.MEMBER_LIST_CONTENT_FEED_EPIC_MARATHON : n > 5 * u.default.Seconds.HOUR ? d.default.Messages.MEMBER_LIST_CONTENT_FEED_ULTRA_MARATHON : d.default.Messages.MEMBER_LIST_CONTENT_FEED_MARATHON
}

function x(e) {
  let t = O(e),
    n = A(e);
  return null == t ? n : "".concat(n, " — ").concat(t)
}

function U(e) {
  var t;
  return null === (t = I(e, l.ContentInventoryTraitType.TRENDING_CONTENT)) || void 0 === t ? void 0 : t.trending
}