n.d(t, {
  J: function() {
    return A
  }
}), n(47120), n(913527);
var s, i, l, a = n(149765),
  r = n(442837);
n(433517);
var o = n(570140),
  c = n(491428),
  u = n(650774),
  d = n(430824),
  E = n(496675),
  _ = n(914010),
  I = n(594174),
  T = n(981631);

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
  h = N,
  C = {},
  S = null,
  A = 864e5;
(l = s || (s = {})).IS_OWNER = "is_owner", l.IS_ADMIN = "is_admin", l.IS_COMMUNITY = "is_community", l.GUILD_SIZE = "guild_size", l.IS_HUB = "is_hub", l.IS_VIEWING = "is_viewing", l.GUILD_PERMISSIONS = "guild_permissions", l.GUILD_SIZE_ALL = "guild_size_all";
let g = new Set(Object.values(s));

function p(e) {
  return function(e) {
    return !0
  }(e) && function(e) {
    let {
      guild_requirements: t = [],
      guild_size: n = [null, null],
      guild_permissions: s = []
    } = e;
    if (0 === t.length) return !0;
    for (let e of t)
      if (!g.has(e)) return !1;
    let i = t.includes("guild_size_all"),
      l = !0;
    for (let r of Object.values(d.Z.getGuilds())) {
      if (i || t.includes("guild_size")) {
        let e = u.Z.getMemberCount(r.id);
        if (null == e || null != n[0] && e < n[0] || null != n[1] && e > n[1]) {
          l = !1;
          continue
        }
      }
      if (t.includes("is_community") && !r.hasFeature(T.oNc.COMMUNITY) || t.includes("is_hub") && !r.hasFeature(T.oNc.HUB)) continue;
      if (t.includes("guild_permissions")) {
        if (0 === s.length) continue;
        let e = !1;
        for (let t of s) try {
          let n = a.vB(t);
          if (E.Z.can(n, r)) {
            e = !0;
            break
          }
        } catch (e) {}
        if (!e) continue
      }
      let o = I.default.getCurrentUser(),
        c = (null == o ? void 0 : o.id) === r.ownerId,
        d = E.Z.can(T.Plq.ADMINISTRATOR, r);
      if (t.includes("is_owner") && !c || t.includes("is_admin") && !d) continue;
      null == (C = null != C ? C : {})[e.key] && (C[e.key] = e);
      let m = _.Z.getGuildId(),
        N = null != m && m === r.id;
      if (!t.includes("is_viewing") || !!N) {
        if (!i) return !0
      }
    }
    return !!i && !!l || !1
  }(e)
}

function f(e) {
  let {
    survey: t
  } = e;
  if (h.lastFetched = Date.now(), null == h.hiddenSurveys && (h.hiddenSurveys = {}), null != t && null == h.hiddenSurveys[t.key]) {
    if (!p(t)) return;
    S = t
  }
}

function R() {
  if (null != S && (p(S) || (S = null, 0))) return !1;
  ! function() {
    let e = Object.values(C = null != C ? C : {})[0];
    if (null != e && p(e)) {
      f({
        type: "SURVEY_FETCHED",
        survey: e
      });
      return
    }
    if (null == S) return;
    S = null
  }()
}
class O extends(i = r.ZP.PersistedStore) {
  initialize(e) {
    h = null != e ? e : N, this.syncWith([_.Z], R)
  }
  getState() {
    return h
  }
  getCurrentSurvey() {
    return S
  }
  getSurveyOverride() {
    return h.surveyOverride
  }
  getLastSeenTimestamp() {
    return h.lastSeen
  }
}
m(O, "displayName", "SurveyStore"), m(O, "persistKey", "SurveyStore"), m(O, "migrations", [e => {
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
}]), t.Z = new O(o.Z, {
  CONNECTION_OPEN: function() {
    var e;
    if (!(null != h.lastFetched && Date.now() - (null !== (e = h.lastFetched) && void 0 !== e ? e : 0) < A) || null != h.surveyOverride)(0, c.wk)(h.surveyOverride, !0)
  },
  SURVEY_FETCHED: f,
  SURVEY_HIDE: function(e) {
    let {
      key: t
    } = e;
    h.hiddenSurveys[t] = !0, S = null, C = null != C ? C : {}, delete C[t]
  },
  SURVEY_OVERRIDE: function(e) {
    let {
      id: t
    } = e;
    h.surveyOverride = t, null != t && delete h.hiddenSurveys[t], (0, c.wk)(h.surveyOverride, !0)
  },
  PUSH_NOTIFICATION_CLICK: function() {},
  DISPLAYED_INVITE_SHOW: function() {},
  LOGOUT: function() {
    h.hiddenSurveys = {}
  },
  SURVEY_SEEN: function() {
    h.lastSeen = Date.now()
  }
})