"use strict";
let i;
n(47120);
var r, s, o = n(442837),
  a = n(433517),
  l = n(570140),
  u = n(642047),
  _ = n(695346),
  c = n(973616),
  d = n(358085);

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let I = "GameStoreReportedGames",
  T = new u.Z,
  h = {},
  f = {},
  S = null !== (r = a.K.get(I)) && void 0 !== r ? r : {},
  N = "";
let A = null;

function m(e) {
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

function O(e) {
  let t = e instanceof c.Z ? m(e) : e;
  for (let n of (T.set(e.id, t), h[e.name.toLowerCase()] = t, e.aliases)) h[n.toLowerCase()] = t;
  if ((0, d.isDesktop)())
    for (let n of e.executables) f[n.name] = t
}
class p extends(s = o.ZP.PersistedStore) {
  initialize(e) {
    var t;
    null != e && (null != e.detectableGamesEtag && (N = e.detectableGamesEtag), null === (t = e.detectableGames) || void 0 === t || t.forEach(e => O(e)))
  }
  getState() {
    return (0, d.isDesktop)() ? {
      detectableGamesEtag: N,
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
    return Object.prototype.hasOwnProperty.call(h, t) ? h[t] : null
  }
  isGameInDatabase(e) {
    return null != this.getGameByName(e.name) || void 0 !== e.nativeProcessObserverId && (2147483648 & e.nativeProcessObserverId) == 0
  }
  get fetching() {
    return !0 === i
  }
  get detectableGamesEtag() {
    return N
  }
  get lastFetched() {
    return A
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
      n = null != S[e];
    return _.G6.getSetting() && !i && !(t || n)
  }
  markGameReported(e) {
    S[e] = !0, a.K.set(I, S)
  }
}
E(p, "displayName", "GameStore"), E(p, "persistKey", "GameStore"), E(p, "migrations", [e => {
  var t, n;
  if (null == e) return {
    detectableGamesEtag: "",
    detectableGames: []
  };
  return {
    detectableGamesEtag: e.detectableGamesEtag,
    detectableGames: null !== (n = null === (t = e.detectableGames) || void 0 === t ? void 0 : t.map(e => m(new c.Z(e)))) && void 0 !== n ? n : []
  }
}, e => (0, d.isDesktop)() ? e : {
  detectableGamesEtag: "",
  detectableGames: []
}]), t.Z = new p(l.Z, {
  OVERLAY_INITIALIZE: function(e) {
    let {
      detectableApplications: t
    } = e;
    for (let e of t) O(e)
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
    for (let e of (null != n && N !== n && (N = n), t)) O(function(e) {
      var t, n, i, r, s, o;
      return {
        id: e.id,
        name: e.name,
        executables: (null !== (t = e.executables) && void 0 !== t ? t : []).map(c.B),
        overlay: null !== (n = e.overlay) && void 0 !== n && n,
        overlayWarn: null !== (i = e.overlay_warn) && void 0 !== i && i,
        overlayCompatibilityHook: null !== (r = e.overlay_compatibility_hook) && void 0 !== r && r,
        hook: null === (s = e.hook) || void 0 === s || s,
        aliases: null !== (o = e.aliases) && void 0 !== o ? o : [],
        supportsOutOfProcessOverlay: c.Z.supportsOutOfProcessOverlay(e.overlay_methods)
      }
    }(e));
    i = void 0, A = Date.now()
  }
})