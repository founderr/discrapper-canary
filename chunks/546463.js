"use strict";
let i;
n.r(t), n.d(t, {
  default: function() {
    return I
  }
}), n("222007");
var r, s = n("446674"),
  a = n("95410"),
  o = n("913144"),
  l = n("845579"),
  u = n("653047"),
  c = n("773336");
let d = "GameStoreReportedGames",
  p = {},
  h = {},
  f = {},
  E = null !== (r = a.default.get(d)) && void 0 !== r ? r : {},
  _ = "";
let m = null;

function S(e) {
  return {
    id: e.id,
    name: e.name,
    executables: e.executables,
    overlayWarn: e.overlayWarn,
    overlayCompatibilityHook: e.overlayCompatibilityHook,
    overlay: e.overlay,
    hook: e.hook,
    aliases: e.aliases,
    supportsOutOfProcessOverlay: e.supportsOutOfProcessOverlay
  }
}

function g(e) {
  let t = e instanceof u.default ? S(e) : e;
  for (let n of (p[e.id] = t, h[e.name.toLowerCase()] = t, e.aliases)) h[n.toLowerCase()] = t;
  if ((0, c.isDesktop)())
    for (let n of e.executables) f[n.name] = t
}
class T extends s.default.PersistedStore {
  initialize(e) {
    var t;
    null != e && (null != e.detectableGamesEtag && (_ = e.detectableGamesEtag), null === (t = e.detectableGames) || void 0 === t || t.forEach(e => g(e)))
  }
  getState() {
    return (0, c.isDesktop)() ? {
      detectableGamesEtag: _,
      detectableGames: Object.values(p)
    } : {
      detectableGamesEtag: "",
      detectableGames: []
    }
  }
  get games() {
    return Object.values(p)
  }
  getDetectableGame(e) {
    return p[e]
  }
  getGameByName(e) {
    if (null == e) return null;
    let t = e.toLowerCase();
    return Object.prototype.hasOwnProperty.call(h, t) ? h[t] : null
  }
  get fetching() {
    return !0 === i
  }
  get detectableGamesEtag() {
    return _
  }
  get lastFetched() {
    return m
  }
  getGameByExecutable(e) {
    return f[e]
  }
  getGameByGameData(e) {
    var t, n;
    let i;
    if (null == e.exePath) return null;
    let r = e.exePath.split("/").pop(),
      s = e.exePath.split("/").slice(-2).join("/");
    if (null != e.name) {
      if (null != (i = this.getGameByName(e.name)) && null != i.executables) {
        let e = i.executables.map(e => e.name);
        if (e.includes(r) || e.includes(s)) return i
      } else if (null != i) return null
    }
    return null !== (n = null !== (t = this.getGameByExecutable(r)) && void 0 !== t ? t : this.getGameByExecutable(s)) && void 0 !== n ? n : i
  }
  shouldReport(e) {
    let t = null != this.getGameByName(e),
      n = null != E[e];
    return l.ShowCurrentGame.getSetting() && !i && !(t || n)
  }
  markGameReported(e) {
    E[e] = !0, a.default.set(d, E)
  }
}
T.displayName = "GameStore", T.persistKey = "GameStore", T.migrations = [e => {
  var t, n;
  if (null == e) return {
    detectableGamesEtag: "",
    detectableGames: []
  };
  return {
    detectableGamesEtag: e.detectableGamesEtag,
    detectableGames: null !== (n = null === (t = e.detectableGames) || void 0 === t ? void 0 : t.map(e => S(new u.default(e)))) && void 0 !== n ? n : []
  }
}, e => (0, c.isDesktop)() ? e : {
  detectableGamesEtag: "",
  detectableGames: []
}];
var I = new T(o.default, {
  OVERLAY_INITIALIZE: function(e) {
    let {
      detectableApplications: t
    } = e;
    for (let e of t) g(e)
  },
  GAMES_DATABASE_FETCH: function() {
    i = !0
  },
  GAMES_DATABASE_FETCH_FAIL: function() {
    i = !1
  },
  GAMES_DATABASE_UPDATE: function(e) {
    let {
      games: t,
      etag: n
    } = e;
    for (let e of (null != n && _ !== n && (_ = n), t)) g(function(e) {
      var t, n, i, r, s, a;
      return {
        id: e.id,
        name: e.name,
        executables: (null !== (t = e.executables) && void 0 !== t ? t : []).map(u.createExecutable),
        overlay: null !== (n = e.overlay) && void 0 !== n && n,
        overlayWarn: null !== (i = e.overlay_warn) && void 0 !== i && i,
        overlayCompatibilityHook: null !== (r = e.overlay_compatibility_hook) && void 0 !== r && r,
        hook: null === (s = e.hook) || void 0 === s || s,
        aliases: null !== (a = e.aliases) && void 0 !== a ? a : [],
        supportsOutOfProcessOverlay: u.default.supportsOutOfProcessOverlay(e.overlay_methods)
      }
    }(e));
    i = void 0, m = Date.now()
  }
})