"use strict";
let i;
n.r(t), n("47120");
var r, s, a = n("442837"),
  o = n("433517"),
  l = n("570140"),
  u = n("635384"),
  d = n("695346"),
  _ = n("973616"),
  c = n("358085");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let I = "GameStoreReportedGames",
  T = new u.default,
  f = {},
  S = {},
  h = null !== (r = o.Storage.get(I)) && void 0 !== r ? r : {},
  A = "";
let m = null;

function N(e) {
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

function p(e) {
  let t = e instanceof _.default ? N(e) : e;
  for (let n of (T.set(e.id, t), f[e.name.toLowerCase()] = t, e.aliases)) f[n.toLowerCase()] = t;
  if ((0, c.isDesktop)())
    for (let n of e.executables) S[n.name] = t
}
class O extends(s = a.default.PersistedStore) {
  initialize(e) {
    var t;
    null != e && (null != e.detectableGamesEtag && (A = e.detectableGamesEtag), null === (t = e.detectableGames) || void 0 === t || t.forEach(e => p(e)))
  }
  getState() {
    return (0, c.isDesktop)() ? {
      detectableGamesEtag: A,
      detectableGames: T.values()
    } : {
      detectableGamesEtag: "",
      detectableGames: []
    }
  }
  get games() {
    return T.values()
  }
  getDetectableGame(e) {
    return T.get(e)
  }
  getGameByName(e) {
    if (null == e) return null;
    let t = e.toLowerCase();
    return Object.prototype.hasOwnProperty.call(f, t) ? f[t] : null
  }
  isGameInDatabase(e) {
    return null != this.getGameByName(e.name) || void 0 !== e.nativeProcessObserverId && (2147483648 & e.nativeProcessObserverId) == 0
  }
  get fetching() {
    return !0 === i
  }
  get detectableGamesEtag() {
    return A
  }
  get lastFetched() {
    return m
  }
  getGameByExecutable(e) {
    return S[e]
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
      n = null != h[e];
    return d.ShowCurrentGame.getSetting() && !i && !(t || n)
  }
  markGameReported(e) {
    h[e] = !0, o.Storage.set(I, h)
  }
}
E(O, "displayName", "GameStore"), E(O, "persistKey", "GameStore"), E(O, "migrations", [e => {
  var t, n;
  if (null == e) return {
    detectableGamesEtag: "",
    detectableGames: []
  };
  return {
    detectableGamesEtag: e.detectableGamesEtag,
    detectableGames: null !== (n = null === (t = e.detectableGames) || void 0 === t ? void 0 : t.map(e => N(new _.default(e)))) && void 0 !== n ? n : []
  }
}, e => (0, c.isDesktop)() ? e : {
  detectableGamesEtag: "",
  detectableGames: []
}]), t.default = new O(l.default, {
  OVERLAY_INITIALIZE: function(e) {
    let {
      detectableApplications: t
    } = e;
    for (let e of t) p(e)
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
    for (let e of (null != n && A !== n && (A = n), t)) p(function(e) {
      var t, n, i, r, s, a;
      return {
        id: e.id,
        name: e.name,
        executables: (null !== (t = e.executables) && void 0 !== t ? t : []).map(_.createExecutable),
        overlay: null !== (n = e.overlay) && void 0 !== n && n,
        overlayWarn: null !== (i = e.overlay_warn) && void 0 !== i && i,
        overlayCompatibilityHook: null !== (r = e.overlay_compatibility_hook) && void 0 !== r && r,
        hook: null === (s = e.hook) || void 0 === s || s,
        aliases: null !== (a = e.aliases) && void 0 !== a ? a : [],
        supportsOutOfProcessOverlay: _.default.supportsOutOfProcessOverlay(e.overlay_methods)
      }
    }(e));
    i = void 0, m = Date.now()
  }
})