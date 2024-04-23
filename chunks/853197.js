"use strict";
n.r(t), n.d(t, {
  doesGameTitleMatchList: function() {
    return _
  },
  getDrop: function() {
    return C
  },
  getDropByQuestId: function() {
    return A
  },
  getDropExpired: function() {
    return S
  },
  getDropsExperiment: function() {
    return f
  },
  getDropsExperimentForDrop: function() {
    return E
  },
  getDropsPartnerGameNameByQuestId: function() {
    return g
  },
  getEligibilityByRunningGameDetection: function() {
    return I
  },
  getEligibleGameLastSeenStartTimeSeconds: function() {
    return m
  },
  getPlatformLabel: function() {
    return M
  },
  getShowDropsEndedIncompleteBanner: function() {
    return N
  },
  getShowDropsNoticeBanner: function() {
    return h
  },
  isDropGameDetected: function() {
    return T
  }
});
var s = n("913527"),
  l = n.n(s),
  a = n("594190"),
  i = n("695346"),
  r = n("77498"),
  o = n("70956"),
  u = n("346114"),
  d = n("702512"),
  c = n("689938");

function f(e) {
  let t = C(e);
  return null == t ? null : E(t)
}

function E(e) {
  if (e.dropsQuestId === d.FORTNITE_QUEST_ID) return u.DropsForGoLiveFortniteExperiment;
  return null
}

function _(e, t) {
  if (null == e) return !1;
  let n = r.default.getGameByName(e);
  return !!(null != n && t.some(e => {
    var t;
    return e.toLowerCase() === (null == n ? void 0 : null === (t = n.name) || void 0 === t ? void 0 : t.toLowerCase())
  })) || !1
}

function m() {
  return Math.floor(Date.now() / 1e3) - d.DROPS_ELIGIBILITY_SEEN_GAMES_LOOKBACK_SECONDS
}

function T(e, t, n) {
  var s, l, a, i;
  if (null == C(e)) return !1;
  let r = (s = t, l = d.PartnerGameNameToSearchTermMapping[e], null !== (a = s.find(e => _(e.name, l))) && void 0 !== a ? a : null);
  if (null != r) {
    ;
    let e = null !== (i = null == r ? void 0 : r.lastLaunched) && void 0 !== i ? i : 0;
    return n <= r.lastFocused || n * o.default.Millis.SECOND <= e
  }
  return !1
}

function I(e) {
  return T(e, a.default.getGamesSeen(!1), m())
}

function p(e, t) {
  let {
    endDate: n
  } = e, s = l()(), a = l()(n, d.noticeBannerDateFormat), i = l()(s.clone().add(e.dropsNoticeBannerDurationDays, "days").format(d.noticeBannerDateFormat)), r = a.isSameOrBefore(i), o = a.isBefore(s, "minute");
  return r && (t && !o || !t && o)
}

function h(e) {
  var t;
  let n = C(e);
  if (null == n || !(null === (t = f(e)) || void 0 === t ? void 0 : t.getCurrentConfig({
      location: "1"
    }, {
      autoTrackExposure: !1
    }).dropsEnabled)) return !1;
  let s = i.DropsOptedOut.getSetting(),
    l = p(n, !0);
  return !s && l
}

function N(e) {
  var t, n;
  let s = C(e);
  if (null == s || !(null === (n = f(e)) || void 0 === n ? void 0 : null === (t = n.getCurrentConfig({
      location: "2"
    }, {
      autoTrackExposure: !1
    })) || void 0 === t ? void 0 : t.dropsEnabled)) return !1;
  let l = i.DropsOptedOut.getSetting(),
    a = p(s, !1);
  return S(s) && !l && a
}

function S(e) {
  let {
    endDate: t
  } = e, n = l()(t, "YYYY-MM-DD HH:mm");
  return l()() > n
}

function C(e) {
  return d.DROPS_GAMES[e]
}

function A(e) {
  return Object.values(d.DROPS_GAMES).find(t => t.dropsQuestId === e)
}

function g(e) {
  return Object.keys(d.DROPS_GAMES).find(t => d.DROPS_GAMES[t].dropsQuestId === e)
}

function M(e) {
  switch (e) {
    case "SWITCH":
      return c.default.Messages.DROPS_PLATFORM_SWITCH;
    case "PC":
      return c.default.Messages.DROPS_PLATFORM_PC;
    case "PLAYSTATION":
      return c.default.Messages.DROPS_PLATFORM_PLAYSTATION;
    case "XBOX":
      return c.default.Messages.DROPS_PLATFORM_XBOX;
    default:
      return ""
  }
}