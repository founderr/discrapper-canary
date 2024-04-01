"use strict";
n.r(t), n.d(t, {
  SURVEY_REFETCH_INTERVAL: function() {
    return A
  }
}), n("47120"), n("913527");
var s, l, a, i = n("149765"),
  r = n("442837");
n("433517");
var o = n("570140"),
  u = n("491428"),
  d = n("528097"),
  c = n("650774"),
  E = n("430824"),
  f = n("496675"),
  _ = n("914010"),
  T = n("594174"),
  I = n("981631");

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let N = {
    hiddenSurveys: {},
    surveyOverride: null,
    lastFetched: null,
    lastSeen: null
  },
  p = N,
  S = {},
  C = null,
  A = 864e5;
(a = s || (s = {})).IS_OWNER = "is_owner", a.IS_ADMIN = "is_admin", a.IS_COMMUNITY = "is_community", a.GUILD_SIZE = "guild_size", a.IS_HUB = "is_hub", a.IS_VIEWING = "is_viewing", a.GUILD_PERMISSIONS = "guild_permissions", a.GUILD_SIZE_ALL = "guild_size_all";
let h = new Set(Object.values(s));

function g(e) {
  return function(e) {
    return "1213250669327286303" === e.key || "1213251044474232852" === e.key ? (0, d.daysSinceYouBarFirstSeen)() >= 7 : "1213254060338319402" !== e.key && "1213254481224015954" !== e.key || (0, d.daysSinceYouBarFirstSeen)() >= 14
  }(e) && function(e) {
    let {
      guild_requirements: t = [],
      guild_size: n = [null, null],
      guild_permissions: s = []
    } = e;
    if (0 === t.length) return !0;
    for (let e of t)
      if (!h.has(e)) return !1;
    let l = t.includes("guild_size_all"),
      a = !0;
    for (let r of Object.values(E.default.getGuilds())) {
      if (l || t.includes("guild_size")) {
        let e = c.default.getMemberCount(r.id);
        if (null == e || null != n[0] && e < n[0] || null != n[1] && e > n[1]) {
          a = !1;
          continue
        }
      }
      if (t.includes("is_community") && !r.hasFeature(I.GuildFeatures.COMMUNITY) || t.includes("is_hub") && !r.hasFeature(I.GuildFeatures.HUB)) continue;
      if (t.includes("guild_permissions")) {
        if (0 === s.length) continue;
        let e = !1;
        for (let t of s) try {
          let n = i.deserialize(t);
          if (f.default.can(n, r)) {
            e = !0;
            break
          }
        } catch (e) {}
        if (!e) continue
      }
      let o = T.default.getCurrentUser(),
        u = (null == o ? void 0 : o.id) === r.ownerId,
        d = f.default.can(I.Permissions.ADMINISTRATOR, r);
      if (t.includes("is_owner") && !u || t.includes("is_admin") && !d) continue;
      null == (S = null != S ? S : {})[e.key] && (S[e.key] = e);
      let E = _.default.getGuildId(),
        m = null != E && E === r.id;
      if ((!t.includes("is_viewing") || m) && !l) return !0
    }
    return !!l && !!a || !1
  }(e)
}

function M(e) {
  let {
    survey: t
  } = e;
  if (p.lastFetched = Date.now(), null == p.hiddenSurveys && (p.hiddenSurveys = {}), null != t && null == p.hiddenSurveys[t.key]) {
    if (!g(t)) return;
    C = t
  }
}

function O() {
  if (null != C && (g(C) || (C = null, 0))) return !1;
  ! function() {
    let e = Object.values(S = null != S ? S : {})[0];
    if (null != e && g(e)) {
      M({
        type: "SURVEY_FETCHED",
        survey: e
      });
      return
    }
    if (null == C) return;
    C = null
  }()
}
class R extends(l = r.default.PersistedStore) {
  initialize(e) {
    p = null != e ? e : N, this.syncWith([_.default], O)
  }
  getState() {
    return p
  }
  getCurrentSurvey() {
    return C
  }
  getSurveyOverride() {
    return p.surveyOverride
  }
  getLastSeenTimestamp() {
    return p.lastSeen
  }
}
m(R, "displayName", "SurveyStore"), m(R, "persistKey", "SurveyStore"), m(R, "migrations", [e => {
  let t = {
    ...e
  };
  return delete t.validSurveys, delete t.currentSurvey, delete t.iosIsPushNotificationClicked, delete t.iosIsInviteShown, delete t.iosFirstRunDate, t
}, e => {
  var t;
  return {
    ...e,
    lastSeen: null !== (t = e.lastSeen) && void 0 !== t ? t : null
  }
}, e => {
  var t;
  return {
    ...e,
    hiddenSurveys: null !== (t = e.hiddenSurveys) && void 0 !== t ? t : {}
  }
}]), t.default = new R(o.default, {
  CONNECTION_OPEN: function() {
    var e;
    if (!(null != p.lastFetched && Date.now() - (null !== (e = p.lastFetched) && void 0 !== e ? e : 0) < A) || null != p.surveyOverride)(0, u.surveyFetch)(p.surveyOverride, !0)
  },
  SURVEY_FETCHED: M,
  SURVEY_HIDE: function(e) {
    let {
      key: t
    } = e;
    p.hiddenSurveys[t] = !0, C = null, S = null != S ? S : {}, delete S[t]
  },
  SURVEY_OVERRIDE: function(e) {
    let {
      id: t
    } = e;
    p.surveyOverride = t, null != t && delete p.hiddenSurveys[t], (0, u.surveyFetch)(p.surveyOverride, !0)
  },
  PUSH_NOTIFICATION_CLICK: function() {},
  DISPLAYED_INVITE_SHOW: function() {},
  LOGOUT: function() {
    p.hiddenSurveys = {}
  },
  SURVEY_SEEN: function() {
    p.lastSeen = Date.now()
  }
})