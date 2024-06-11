"use strict";
n.r(t), n.d(t, {
  calculateActiveTimestampDurations: function() {
    return T
  },
  formatActiveTimestamp: function() {
    return I
  },
  formatEndedTimestamp: function() {
    return S
  },
  formatEntryTimestamp: function() {
    return C
  },
  getAggregateRange: function() {
    return p
  },
  getEntryDuration: function() {
    return g
  },
  getFullMarathonDescription: function() {
    return P
  },
  getFullResurrectedBadgeText: function() {
    return A
  },
  getMarathonDurationStr: function() {
    return U
  },
  getMarathonName: function() {
    return D
  },
  getResurrectedEntryLastPlayTime: function() {
    return L
  },
  getStreakCount: function() {
    return M
  },
  getTrait: function() {
    return m
  },
  getTrendingType: function() {
    return y
  },
  isEntryActive: function() {
    return N
  },
  isEntryExpired: function() {
    return v
  },
  isEntryMarathon: function() {
    return h
  },
  isEntryNew: function() {
    return R
  },
  isEntryTopGame: function() {
    return O
  },
  isValidStreak: function() {
    return x
  },
  useEntryActivityAndApplication: function() {
    return j
  }
}), n("47120");
var i = n("283398"),
  a = n("913527"),
  s = n.n(a),
  r = n("884439"),
  l = n("442837"),
  u = n("876215"),
  o = n("835473"),
  d = n("70956"),
  c = n("709054"),
  f = n("719247"),
  E = n("689938");
let _ = e => {
    let {
      start: t,
      now: n
    } = e, i = Math.abs((n - t) / d.default.Millis.SECOND), a = Math.floor(i) % d.default.Seconds.MINUTE, s = Math.floor(i / d.default.Seconds.MINUTE) % d.default.Seconds.MINUTE, r = Math.floor(i / d.default.Seconds.HOUR);
    return {
      seconds: a,
      minutes: s,
      hours: r,
      days: Math.floor(i / d.default.Seconds.DAY)
    }
  },
  T = (e, t) => {
    let n = "id" in e ? c.default.extractTimestamp(e.id) : e.start;
    return _({
      start: n,
      now: "end" in e && null != e.end ? Math.min(e.end, t) : t
    })
  },
  I = (e, t) => {
    let {
      seconds: n,
      minutes: i,
      hours: a
    } = T(e, t);

    function s(e) {
      return String(e).padStart(2, "0")
    }
    return E.default.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_ACTIVE.format({
      hours: a,
      minutes: a > 0 ? s(i) : i,
      seconds: s(n)
    })
  },
  S = (e, t) => {
    let n = s()(c.default.extractTimestamp(e.id)),
      i = n.isSame(s()(), "day"),
      a = s()().diff(n, "s");
    if (a < d.default.Seconds.MINUTE) return E.default.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_SECONDS_AGO.format({
      count: a
    });
    if (a < d.default.Seconds.HOUR) {
      let e = Math.round(a / d.default.Seconds.MINUTE);
      return E.default.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_MINUTES_AGO.format({
        count: e
      })
    }
    if (a < 6 * d.default.Seconds.HOUR) {
      let e = Math.round(a / d.default.Seconds.HOUR);
      return E.default.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_HOURS_AGO.format({
        count: e
      })
    } else if (a < d.default.Seconds.WEEK && i) return n.toDate().toLocaleTimeString(t, {
      hour: "numeric"
    });
    else if (a < d.default.Seconds.WEEK && !i) return n.toDate().toLocaleTimeString(t, {
      weekday: "short",
      hour: "numeric"
    });
    let r = Math.round(a / (7 * d.default.Seconds.DAY));
    return E.default.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_WEEKS_AGO.format({
      count: r
    })
  },
  C = (e, t) => N(e) ? I(e, Date.now()) : S(e, t);

function m(e, t) {
  return e.traits.find(e => e.type === t)
}

function N(e) {
  var t, n;
  return null !== (n = null === (t = m(e, r.ContentInventoryTraitType.IS_LIVE)) || void 0 === t ? void 0 : t.is_live) && void 0 !== n && n
}

function R(e) {
  var t, n;
  return null !== (n = null === (t = m(e, r.ContentInventoryTraitType.FIRST_TIME)) || void 0 === t ? void 0 : t.first_time) && void 0 !== n && n
}

function v(e) {
  return null != e.expires_at && new Date(e.expires_at) < new Date
}

function g(e) {
  var t;
  return null === (t = m(e, r.ContentInventoryTraitType.DURATION_SECONDS)) || void 0 === t ? void 0 : t.duration_seconds
}

function p(e) {
  var t;
  return null === (t = m(e, r.ContentInventoryTraitType.AGGREGATE_RANGE)) || void 0 === t ? void 0 : t.range
}

function h(e) {
  var t;
  return null === (t = m(e, r.ContentInventoryTraitType.MARATHON)) || void 0 === t ? void 0 : t.marathon
}

function L(e) {
  let t = m(e, r.ContentInventoryTraitType.RESURRECTED);
  return (null == t ? void 0 : t.resurrected_last_played) != null ? new Date(t.resurrected_last_played) : void 0
}

function A(e) {
  let {
    months: t = 0,
    weeks: n = 0,
    days: a = 0
  } = (0, i.intervalToDuration)({
    start: e,
    end: new Date
  });
  return E.default.Messages.MEMBER_LIST_CONTENT_FEED_RESURRECTED_AFTER.format({
    months: t,
    weeks: t > 0 ? 0 : n,
    days: t > 0 || n > 0 ? 0 : a
  })
}

function O(e) {
  return e.content_type === u.ContentInventoryEntryType.TOP_GAME
}

function M(e) {
  var t;
  return null === (t = m(e, r.ContentInventoryTraitType.STREAK_DAYS)) || void 0 === t ? void 0 : t.streak_count_days
}

function x(e) {
  let t = M(e);
  if (null == t || t < 3) return !1;
  let n = c.default.extractTimestamp(e.id);
  return !(Date.now() - n > 48 * d.default.Millis.HOUR) && !0
}

function U(e) {
  let t = g(e);
  if (null == t) return null;
  let n = Math.round(t / d.default.Seconds.HOUR);
  return E.default.Messages.MEMBER_LIST_CONTENT_FEED_PLAYED_FOR_HOURS.format({
    hours: n
  })
}

function D(e) {
  var t;
  let n = null !== (t = g(e)) && void 0 !== t ? t : 0;
  return n > 10 * d.default.Seconds.HOUR ? E.default.Messages.MEMBER_LIST_CONTENT_FEED_EPIC_MARATHON : n > 5 * d.default.Seconds.HOUR ? E.default.Messages.MEMBER_LIST_CONTENT_FEED_ULTRA_MARATHON : E.default.Messages.MEMBER_LIST_CONTENT_FEED_MARATHON
}

function P(e) {
  let t = U(e),
    n = D(e);
  return null == t ? n : "".concat(n, " — ").concat(t)
}

function y(e) {
  var t;
  return null === (t = m(e, r.ContentInventoryTraitType.TRENDING_CONTENT)) || void 0 === t ? void 0 : t.trending
}

function j(e) {
  let t = (0, l.useStateFromStores)([f.default], () => f.default.getMatchingActivity(e)),
    [n, i] = (0, o.default)([null == t ? void 0 : t.application_id, e.extra.application_id]);
  return {
    activity: t,
    anyMatchingApplication: null != n ? n : i,
    activityApplication: n,
    fallbackApplication: i
  }
}