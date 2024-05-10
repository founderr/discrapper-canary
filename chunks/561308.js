"use strict";
n.r(t), n.d(t, {
  calculateActiveTimestampDurations: function() {
    return f
  },
  formatActiveTimestamp: function() {
    return h
  },
  formatEndedTimestamp: function() {
    return m
  },
  formatEntryTimestamp: function() {
    return p
  },
  getAggregateRange: function() {
    return _
  },
  getEntryDuration: function() {
    return S
  },
  getFullMarathonDescription: function() {
    return y
  },
  getFullResurrectedBadgeText: function() {
    return A
  },
  getMarathonDurationStr: function() {
    return M
  },
  getMarathonName: function() {
    return R
  },
  getResurrectedEntryLastPlayTime: function() {
    return I
  },
  getStreakCount: function() {
    return v
  },
  isEntryActive: function() {
    return E
  },
  isEntryExpired: function() {
    return g
  },
  isEntryMarathon: function() {
    return T
  },
  isEntryNew: function() {
    return C
  },
  isEntryTopGame: function() {
    return N
  },
  isValidStreak: function() {
    return x
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
let c = e => {
    let {
      start: t,
      now: n
    } = e, a = Math.abs((n - t) / o.default.Millis.SECOND), l = Math.floor(a) % o.default.Seconds.MINUTE, s = Math.floor(a / o.default.Seconds.MINUTE) % o.default.Seconds.MINUTE, i = Math.floor(a / o.default.Seconds.HOUR);
    return {
      seconds: l,
      minutes: s,
      hours: i,
      days: Math.floor(a / o.default.Seconds.DAY)
    }
  },
  f = (e, t) => c({
    start: "id" in e ? u.default.extractTimestamp(e.id) : e.start,
    now: t
  }),
  h = (e, t) => {
    let {
      seconds: n,
      minutes: a,
      hours: l
    } = f(e, t);

    function s(e) {
      return String(e).padStart(2, "0")
    }
    return d.default.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_ACTIVE.format({
      hours: l,
      minutes: l > 0 ? s(a) : a,
      seconds: s(n)
    })
  },
  m = (e, t) => {
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
  p = (e, t) => E(e) ? h(e, Date.now()) : m(e, t);

function E(e) {
  let t = e.traits.find(e => e.type === i.ContentInventoryTraitType.IS_LIVE);
  return null != t && t.is_live
}

function C(e) {
  let t = e.traits.find(e => e.type === i.ContentInventoryTraitType.FIRST_TIME);
  return null != t && t.first_time
}

function g(e) {
  return null != e.expires_at && new Date(e.expires_at) < new Date
}

function S(e) {
  let t = e.traits.find(e => e.type === i.ContentInventoryTraitType.DURATION_SECONDS);
  return null == t ? void 0 : t.duration_seconds
}

function _(e) {
  let t = e.traits.find(e => e.type === i.ContentInventoryTraitType.AGGREGATE_RANGE);
  return null == t ? void 0 : t.range
}

function T(e) {
  let t = e.traits.find(e => e.type === i.ContentInventoryTraitType.MARATHON);
  return null == t ? void 0 : t.marathon
}

function I(e) {
  let t = e.traits.find(e => e.type === i.ContentInventoryTraitType.RESURRECTED);
  return (null == t ? void 0 : t.resurrected_last_played) != null ? new Date(t.resurrected_last_played) : void 0
}

function A(e) {
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

function N(e) {
  return e.content_type === r.ContentInventoryEntryType.TOP_GAME
}

function v(e) {
  let t = e.traits.find(e => e.type === i.ContentInventoryTraitType.STREAK_DAYS);
  return null == t ? void 0 : t.streak_count_days
}

function x(e) {
  let t = v(e);
  if (null == t || t < 3) return !1;
  let n = u.default.extractTimestamp(e.id);
  return !(Date.now() - n > 48 * o.default.Millis.HOUR) && !0
}

function M(e) {
  let t = S(e);
  if (null == t) return null;
  let n = Math.round(t / o.default.Seconds.HOUR);
  return d.default.Messages.MEMBER_LIST_CONTENT_FEED_PLAYED_FOR_HOURS.format({
    hours: n
  })
}

function R(e) {
  var t;
  let n = null !== (t = S(e)) && void 0 !== t ? t : 0;
  return n > 10 * o.default.Seconds.HOUR ? d.default.Messages.MEMBER_LIST_CONTENT_FEED_EPIC_MARATHON : n > 5 * o.default.Seconds.HOUR ? d.default.Messages.MEMBER_LIST_CONTENT_FEED_ULTRA_MARATHON : d.default.Messages.MEMBER_LIST_CONTENT_FEED_MARATHON
}

function y(e) {
  let t = M(e),
    n = R(e);
  return null == t ? n : "".concat(n, " — ").concat(t)
}