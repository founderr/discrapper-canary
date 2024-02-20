"use strict";
let i;
n.r(t), n.d(t, {
  gameKey: function() {
    return ee
  },
  gameInDatabase: function() {
    return et
  },
  getOverlayGameStatus: function() {
    return en
  },
  isDetectionEnabled: function() {
    return ei
  },
  transformForGameSettings: function() {
    return ea
  },
  default: function() {
    return ep
  }
}), n("222007"), n("424973"), n("808653"), n("781738"), n("843762");
var r, s, a = n("917351"),
  o = n.n(a),
  l = n("866227"),
  u = n.n(l),
  c = n("446674"),
  d = n("95410"),
  p = n("913144"),
  h = n("115718"),
  f = n("376556"),
  E = n("605250"),
  _ = n("630915"),
  m = n("756898"),
  S = n("32128"),
  g = n("599110"),
  T = n("718517"),
  I = n("269180"),
  v = n("449008"),
  C = n("773336"),
  A = n("50885"),
  R = n("819068"),
  N = n("546463"),
  y = n("686470"),
  O = n("535974"),
  D = n("49111"),
  b = n("6791");
let P = new E.default("RunningGameStore"),
  L = "RunningGameStore",
  M = [{
    executables: [{
      os: "win32",
      name: "obs/obs.exe"
    }, {
      os: "win32",
      name: "obs32.exe"
    }, {
      os: "win32",
      name: "obs64.exe"
    }, {
      os: "darwin",
      name: "OBS.app"
    }, {
      os: "linux",
      name: "obs"
    }],
    name: "OBS",
    streamerTool: !0
  }, {
    executables: [{
      os: "win32",
      name: "XSplit.Gamecaster.exe"
    }, {
      os: "win32",
      name: "XSplit.Core.exe"
    }, {
      os: "win32",
      name: "Gamecaster.exe"
    }],
    name: "XSplit",
    streamerTool: !0
  }, {
    executables: [{
      os: "win32",
      name: "bebo.exe"
    }],
    name: "Bebo",
    streamerTool: !0
  }, {
    executables: [{
      os: "win32",
      name: "Streamlabs OBS.exe"
    }, {
      os: "win32",
      name: "Streamlabs Desktop.exe"
    }, {
      os: "darwin",
      name: "Streamlabs Desktop.app"
    }],
    name: "Streamlabs Desktop",
    streamerTool: !0
  }, {
    executables: [{
      os: "win32",
      name: "TwitchStudio.exe"
    }, {
      os: "darwin",
      name: "Twitch Studio.app"
    }],
    name: "Twitch Studio",
    streamerTool: !0
  }, {
    executables: [{
      os: "win32",
      name: "Spotify.exe"
    }, {
      os: "darwin",
      name: "Spotify.app"
    }, {
      os: "linux",
      name: "spotify"
    }],
    name: f.default.get(D.PlatformTypes.SPOTIFY).name
  }],
  U = !0,
  w = new Set,
  k = [],
  G = [],
  x = [],
  F = null,
  V = [],
  B = {},
  H = {},
  j = {
    gamesSeen: [],
    gameOverrides: {},
    enableOverlay: {},
    enableDetection: {}
  },
  Y = function() {},
  W = {},
  K = 0,
  z = null,
  q = null,
  Q = {};

function X(e, t, n) {
  let i = e[t];
  void 0 !== i && (delete e[t], e[n] = i)
}

function Z(e, t) {
  null != t.lastLaunched ? e.lastLaunched = t.lastLaunched : null != t.start && (e.lastLaunched = t.start)
}

function J(e) {
  return M.some(t => t.name === e.name && !0 === t.streamerTool)
}

function $() {
  if (x.length > 0) {
    let e = F;
    F = x[0], null != e && F.pid === e.pid ? F.start = e.start : F.start = Date.now()
  } else F = null;
  let e = [];
  for (let t of x) !(t.pid in Q) && (Q[t.pid] = t, e.push(t));
  let t = [];
  for (let e of Object.values(Q)) !x.some(t => t.pid === e.pid) && (t.push(e), delete Q[e.pid]);
  P.info("games", {
    runningGames: x,
    added: e,
    removed: t,
    previousGames: Q
  }), p.default.dispatch({
    type: "RUNNING_GAMES_CHANGE",
    games: x,
    added: e,
    removed: t
  })
}

function ee(e) {
  let t = null != e.name ? e.name : "";
  return "".concat(e.exePath, ":").concat(t)
}

function et(e) {
  let t = N.default.getGameByName(e.name);
  return null != t || void 0 !== e.nativeProcessObserverId && (2147483648 & e.nativeProcessObserverId) == 0
}

function en(e) {
  if (e.isLauncher) return {
    source: "LAUNCHER",
    enabled: !1,
    overlayMethod: b.OverlayMethod.Disabled
  };
  let t = N.default.getGameByName(e.name);
  if (null != t) {
    let e = y.default.getActiveLibraryApplication(t.id);
    if (null != e) return {
      source: "LIBRARY_APPLICATION",
      enabled: e.isOverlayEnabled(),
      overlayMethod: b.OverlayMethod.Disabled
    }
  }
  let n = _.isOOPExperimentEnabled() && (0, R.supportsOutOfProcess)(),
    i = null == e.id ? null : W[e.id],
    r = n && null != i && i.supportsOutOfProcessOverlay,
    s = r ? b.OverlayMethod.OutOfProcess : b.OverlayMethod.Hook,
    a = S.OverlayStoredSettings.methodOverride;
  if (null != a && a !== b.OverlayMethod.Disabled) {
    let t = b.OverlayMethod[s],
      n = b.OverlayMethod[a];
    P.info("getOverlayGameStatus: overlay method overriden ".concat(t, " -> ").concat(n, " (").concat(e.name, ")")), s = a
  }
  let o = j.enableOverlay[ee(e)];
  return null != o ? {
    source: "USER_OVERRIDE",
    enabled: o,
    overlayMethod: s
  } : null != i ? {
    source: "DATABASE",
    enabled: i.enabled || r,
    overlayMethod: s
  } : {
    source: "DEFAULT",
    enabled: !1,
    overlayMethod: b.OverlayMethod.Hook
  }
}(s = r || (r = {})).LAUNCHER = "LAUNCHER", s.LIBRARY_APPLICATION = "LIBRARY_APPLICATION", s.USER_OVERRIDE = "USER_OVERRIDE", s.DATABASE = "DATABASE", s.DEFAULT = "DEFAULT";

function ei(e) {
  let t = j.enableDetection[ee(e)];
  return null == t || t
}

function er(e) {
  return !e.hidden && ei(e)
}

function es() {
  d.default.set(L, j)
}

function ea(e) {
  var t, n;
  let i = {
    ...e,
    played: null != e.lastFocused && 0 !== e.lastFocused ? u(new Date(e.lastFocused * T.default.Millis.SECOND)).fromNow() : " ",
    overlay: (t = e, null !== (n = j.enableOverlay[ee(t)]) && void 0 !== n ? n : en(t).enabled),
    verified: et(e),
    detectable: ei(e)
  };
  if (null != e.id && null != W[e.id]) {
    let t = W[e.id];
    i.overlayWarn = t.warn
  }
  return i
}

function eo() {
  let e = !1;
  return k = o.values(y.default.libraryApplications).reduce((t, n) => {
    let i = N.default.getDetectableGame(n.id);
    if (null == i) return t;
    let r = O.default.getLaunchOptions(n.id, n.branchId);
    for (let s of r) {
      let r = "".concat(n.id, ":").concat(n.branchId);
      !w.has(r) && (e = !0, w.add(r));
      let {
        fullExecutablePath: a
      } = s, o = a.replace(/\\/g, "/").toLowerCase();
      B[o] = i.id, t.push({
        id: i.id,
        name: i.name,
        exePath: o,
        cmdLine: "",
        lastFocused: 0,
        add: !0
      })
    }
    return t
  }, []), e && el(), e
}

function el() {
  if (!__OVERLAY__ && C.isPlatformEmbedded) {
    let e = [...k, ...o.values(j.gameOverrides)];
    A.default.setGameCandidateOverrides(e)
  }
}

function eu(e) {
  null != e && 0 !== e.length && (e.forEach(e => {
    let t = j.gamesSeen.some(t => {
      if (t.name === e.name) {
        if (e.lastFocused) {
          t.lastFocused = e.lastFocused;
          let n = j.gameOverrides[ee(e)];
          null != n && (n.lastFocused = e.lastFocused)
        }
        return Z(t, e), !0
      }
      return !1
    });
    if (t);
    else {
      if (e.hidden) return;
      j.gamesSeen.unshift(function(e) {
        let t = {
          exePath: e.exePath,
          cmdLine: e.cmdLine,
          lastFocused: e.lastFocused
        };
        return null != e.id && (t.id = e.id), null != e.nativeProcessObserverId && (t.nativeProcessObserverId = e.nativeProcessObserverId), null != e.name && (t.name = e.name), e.add && (t.add = !0), e.block && (t.block = !0), Z(t, e), t
      }(e))
    }
  }), j.gamesSeen.sort((e, t) => t.lastFocused - e.lastFocused), es(), I.default.setRecentGames(ec().map(e => ea(e))))
}

function ec() {
  let e = o.values(j.gameOverrides),
    t = j.gamesSeen.filter(e => void 0 === j.gameOverrides[ee(e)]);
  return t.concat(e)
}!__OVERLAY__ && (0, C.isDesktop)() && (Y = function() {
  let e = [],
    t = new Set;
  i = {};
  let n = N.default.games;
  for (let e of n) {
    var r, s, a, o;
    W[e.id] = {
      compatibilityHook: null !== (r = e.overlayCompatibilityHook) && void 0 !== r ? r : h.DEFAULT_OVERLAY_OPTIONS.compatibilityHook,
      warn: null !== (s = e.overlayWarn) && void 0 !== s ? s : h.DEFAULT_OVERLAY_OPTIONS.warn,
      enabled: null !== (a = e.overlay) && void 0 !== a ? a : h.DEFAULT_OVERLAY_OPTIONS.enabled,
      allowHook: null !== (o = e.hook) && void 0 !== o ? o : h.DEFAULT_OVERLAY_OPTIONS.allowHook,
      supportsOutOfProcessOverlay: e.supportsOutOfProcessOverlay
    }
  } [...n, ...M].forEach(n => {
    var i;
    let r = null != n.executables ? null === (i = n.executables) || void 0 === i ? void 0 : i.filter(e => {
        let {
          os: t
        } = e;
        return t === (0, C.getPlatformName)()
      }) : [],
      s = {};
    r.forEach(e => {
      let n = null != e.arguments && e.arguments.length > 0 ? e.arguments : "null";
      null == s[n] && (s[n] = []), s[n].push(e.name), e.isLauncher && t.add(e.name)
    }), Object.keys(s).forEach(t => e.push({
      name: n.name,
      id: n.id,
      executables: s[t],
      cmdLine: "null" !== t ? t : null
    }))
  }), e = e.filter(e => null != e.executables && e.executables.length > 0), A.default.setObservedGamesCallback(e, e => {
    let n = [],
      r = {};
    e = e.filter(e => (e.distributor = function(e) {
      if (null != B[e.exePath]) return D.Distributors.DISCORD;
      if (/steamapps/.test(e.cmdLine)) return D.Distributors.STEAM;
      if (/-epicapp/.test(e.cmdLine)) return D.Distributors.EPIC;
      return e.distributor
    }(e), e.isLauncher = t.has(e.exeName), e.isLauncher && null != e.id && (r[e.id] = e), e.windowHandle = function(e, t) {
      if (void 0 === t) {
        let t = A.default.getDiscordUtils();
        if (null != t && null != t.getWindowHandleFromPid) {
          let n = t.getWindowHandleFromPid(e);
          return null != n && "0" !== n ? n : null
        }
        return null
      }
      return "0" === t ? null : t
    }(e.pid, e.windowHandle), null == M.find(t => {
      let {
        name: n
      } = t;
      return n === e.name
    }) || (n.push(e), !1)));
    let s = n.filter(J).length;
    s !== K && (K = s, p.default.dispatch({
      type: "RUNNING_STREAMER_TOOLS_CHANGE",
      count: K
    })), x = e, V = n, i = r, $()
  }), el()
});
class ed extends c.default.Store {
  initialize() {
    var e, t, n, i;
    let r = null !== (e = d.default.get(L)) && void 0 !== e ? e : {
      gamesSeen: [],
      gameOverrides: {},
      enableOverlay: {},
      enableDetection: {}
    };
    j.gameOverrides = {};
    let s = !1;
    if (o.values(null !== (t = r.gameOverrides) && void 0 !== t ? t : {}).forEach(e => {
        let t = ee(e);
        j.gameOverrides[t] = e
      }), j.enableOverlay = null !== (n = r.enableOverlay) && void 0 !== n ? n : {}, j.enableDetection = null !== (i = r.enableDetection) && void 0 !== i ? i : {}, el(), Array.isArray(r.gamesSeen))
      for (let e of r.gamesSeen) "number" == typeof e.id && (e.nativeProcessObserverId = e.id, delete e.id, s = !0);
    eu(r.gamesSeen), this.waitFor(N.default), this.syncWith([y.default, N.default, O.default], o.throttle(eo, 1e3)), s && es()
  }
  getVisibleGame() {
    return null == F || er(F) ? F : null
  }
  getCurrentGameForAnalytics() {
    return F
  }
  getVisibleRunningGames() {
    return x.filter(er)
  }
  getRunningGames() {
    return x
  }
  getRunningDiscordApplicationIds() {
    let e = [];
    for (let t of x) null != B[t.exePath] && e.push(B[t.exePath]);
    return e
  }
  getRunningVerifiedApplicationIds() {
    return this.getRunningGames().map(e => N.default.getGameByName(e.name)).filter(v.isNotNullish).map(e => e.id)
  }
  getGameForPID(e) {
    var t;
    return null !== (t = x.find(t => t.pid === e)) && void 0 !== t ? t : null
  }
  getLauncherForPID(e) {
    let t = this.getGameForPID(e);
    return null != t ? null != t.id ? i[t.id] : null : null
  }
  getOverlayOptionsForPID(e) {
    let t = this.getGameForPID(e);
    return null == t || t.isLauncher || null == t.id ? null : {
      ...W[t.id]
    }
  }
  shouldElevateProcessForPID(e) {
    return null != z && z === e
  }
  shouldContinueWithoutElevatedProcessForPID(e) {
    return null != q && q === e
  }
  getCandidateGames() {
    return G.filter(e => e.hidden || null == e.id).filter(e => void 0 === j.gameOverrides[ee(e)])
  }
  getGamesSeen(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
      n = ec();
    if (e) {
      let e = this.getVisibleGame();
      if (null != e) {
        let t = ee(e);
        n = n.filter(e => ee(e) !== t)
      }
    }
    return t && n.sort((e, t) => t.lastFocused - e.lastFocused), n
  }
  getSeenGameByName(e) {
    return j.gamesSeen.find(t => null != t.name && t.name.toLowerCase() === e.toLowerCase())
  }
  isObservedAppRunning(e) {
    return V.some(t => t.name === e)
  }
  getOverrides() {
    return Object.values(j.gameOverrides)
  }
  getOverrideForGame(e) {
    return j.gameOverrides[ee(e)]
  }
  getGameOverlayStatus(e) {
    if (e.hidden || e.isLauncher || e.elevated || e.sandboxed) return P.verbose("getGameOverlayStatus: Overlay not supported.", e), null;
    let t = en(e);
    return t.enabled ? t : null
  }
  getObservedAppNameForWindow(e) {
    var t, n;
    return null !== (n = null === (t = V.find(t => (0, m.default)(e, t.windowHandle))) || void 0 === t ? void 0 : t.name) && void 0 !== n ? n : null
  }
  get canShowAdminWarning() {
    return U
  }
}
ed.displayName = "RunningGameStore";
var ep = new ed(p.default, {
  RUNNING_GAMES_CHANGE: function(e) {
    eu(x)
  },
  CANDIDATE_GAMES_CHANGE: function(e) {
    G = e.games
  },
  PERMISSION_CLEAR_PTT_ADMIN_WARNING: function() {
    U = !1
  },
  PERMISSION_REQUEST_ELEVATED_PROCESS: function(e) {
    let {
      pid: t
    } = e;
    z = t, q = null
  },
  PERMISSION_CLEAR_ELEVATED_PROCESS: function() {
    z = null
  },
  PERMISSION_CONTINUE_NONELEVATED_PROCESS: function(e) {
    let {
      pid: t
    } = e;
    q = t, z = null
  },
  RUNNING_GAME_ADD_OVERRIDE: function(e) {
    let t;
    let n = e.pid,
      i = x.find(e => e.pid === n);
    if (null == i) {
      let e = G.find(e => e.pid === n);
      if (null == e) return;
      (i = {
        ...e
      }).hidden = !1, x.push(i), t = ee(i)
    } else t = ee(i), i.hidden && (H[t] = !0), i.hidden = !1;
    (null == i.lastFocused || 0 === i.lastFocused) && (i.lastFocused = Math.floor(Date.now() / 1e3)), j.gameOverrides[t] = {
      ...i,
      add: !0
    }, eu(x), el(), es(), $()
  },
  RUNNING_GAME_TOGGLE_OVERLAY: function(e) {
    if (j.enableOverlay[ee(e.game)] = e.newEnabledValue, es(), !__OVERLAY__) {
      let t = null != e.game.id ? N.default.getDetectableGame(e.game.id) : null;
      null != t && g.default.track(D.AnalyticEvents.OVERLAY_TOGGLED, {
        enabled: e.newEnabledValue,
        setting_type: "overlay toggled - game",
        application_id: t.id,
        application_name: t.name
      })
    }
  },
  RUNNING_GAME_TOGGLE_DETECTION: function(e) {
    let {
      game: t
    } = e, n = ei(t);
    j.enableDetection[ee(t)] = !n, es(), g.default.track(D.AnalyticEvents.USER_SETTINGS_GAME_DETECTION_TOGGLE, {
      enabled: !n
    })
  },
  RUNNING_GAME_EDIT_NAME: function(e) {
    let t = ee(e.game),
      n = j.gameOverrides[t];
    if (null == n) {
      var i;
      (n = {
        name: (i = e.game).name,
        exePath: i.exePath,
        cmdLine: i.cmdLine,
        lastFocused: i.lastFocused
      }).add = !0
    }
    n.name = e.newName;
    let r = ee(n);
    delete j.gameOverrides[t], j.gameOverrides[r] = n, X(j.enableOverlay, t, r), X(j.enableDetection, t, r), X(H, t, r), j.gamesSeen.forEach(n => {
      ee(n) === t && (n.name = e.newName)
    });
    let s = !1;
    x.forEach(n => {
      ee(n) === t && (n.name = e.newName, s = !0)
    }), el(), es(), s && $()
  },
  RUNNING_GAME_DELETE_ENTRY: function(e) {
    let t = ee(e.game);
    delete j.gameOverrides[t], delete j.enableOverlay[t], delete j.enableDetection[t], j.gamesSeen = j.gamesSeen.filter(e => ee(e) !== t), H[t] && (x.forEach(e => {
      t === ee(e) && (e.hidden = !0)
    }), delete H[t], $()), el(), es()
  },
  GAMES_DATABASE_UPDATE: Y,
  GAME_LAUNCH_SUCCESS: function(e) {
    var t;
    if (__OVERLAY__ || !C.isPlatformEmbedded) return;
    let n = A.default.getDiscordUtils().notifyGameLaunched;
    if (null == n) return;
    let i = N.default.getDetectableGame(e.applicationId);
    null != i && n(i.id, i.name, null !== (t = e.pids) && void 0 !== t ? t : [])
  },
  GAME_DETECTION_WATCH_CANDIDATE_GAMES_START: function() {
    el()
  }
})