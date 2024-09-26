let r;
n.d(t, {
    FZ: function () {
        return eg;
    },
    ik: function () {
        return em;
    },
    jk: function () {
        return eh;
    },
    rH: function () {
        return ef;
    }
});
var i,
    a = n(47120);
var o = n(653041);
var s = n(724458);
var l = n(757143);
var u = n(733860);
var c = n(392711),
    d = n.n(c),
    _ = n(913527),
    E = n.n(_),
    f = n(442837),
    h = n(433517),
    p = n(570140),
    m = n(593472),
    I = n(726542),
    T = n(439849),
    g = n(710845),
    S = n(630699),
    A = n(855403),
    v = n(454991),
    N = n(77498),
    O = n(283595),
    R = n(417363),
    C = n(626135),
    y = n(70956),
    L = n(877481),
    b = n(823379),
    D = n(358085),
    M = n(998502),
    P = n(145597),
    U = n(370862),
    w = n(981631),
    x = n(987650);
function G(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let k = new g.Z('RunningGameStore'),
    B = 'RunningGameStore',
    F = !1,
    Z = [
        {
            executables: [
                {
                    os: 'win32',
                    name: 'obs/obs.exe'
                },
                {
                    os: 'win32',
                    name: 'obs32.exe'
                },
                {
                    os: 'win32',
                    name: 'obs64.exe'
                },
                {
                    os: 'darwin',
                    name: 'OBS.app'
                },
                {
                    os: 'linux',
                    name: 'obs'
                }
            ],
            name: 'OBS',
            streamerTool: !0
        },
        {
            executables: [
                {
                    os: 'win32',
                    name: 'XSplit.Gamecaster.exe'
                },
                {
                    os: 'win32',
                    name: 'XSplit.Core.exe'
                },
                {
                    os: 'win32',
                    name: 'Gamecaster.exe'
                }
            ],
            name: 'XSplit',
            streamerTool: !0
        },
        {
            executables: [
                {
                    os: 'win32',
                    name: 'bebo.exe'
                }
            ],
            name: 'Bebo',
            streamerTool: !0
        },
        {
            executables: [
                {
                    os: 'win32',
                    name: 'Streamlabs OBS.exe'
                },
                {
                    os: 'win32',
                    name: 'Streamlabs Desktop.exe'
                },
                {
                    os: 'darwin',
                    name: 'Streamlabs Desktop.app'
                }
            ],
            name: 'Streamlabs Desktop',
            streamerTool: !0
        },
        {
            executables: [
                {
                    os: 'win32',
                    name: 'TwitchStudio.exe'
                },
                {
                    os: 'darwin',
                    name: 'Twitch Studio.app'
                }
            ],
            name: 'Twitch Studio',
            streamerTool: !0
        },
        {
            executables: [
                {
                    os: 'win32',
                    name: 'Spotify.exe'
                },
                {
                    os: 'darwin',
                    name: 'Spotify.app'
                },
                {
                    os: 'linux',
                    name: 'spotify'
                }
            ],
            name: I.Z.get(w.ABu.SPOTIFY).name
        }
    ],
    V = [],
    H = !0,
    Y = new Set(),
    j = [],
    W = [],
    K = [],
    z = null,
    q = [],
    Q = {},
    X = {},
    $ = {
        gamesSeen: [],
        gameOverrides: {},
        enableOverlay: {},
        enableDetection: {}
    },
    J = function () {},
    ee = {},
    et = 0,
    en = null,
    er = null,
    ei = {},
    ea = new Set(),
    eo = new Set(),
    es = null,
    el = null;
function eu(e, t, n) {
    let r = e[t];
    void 0 !== r && (delete e[t], (e[n] = r));
}
function ec(e) {
    let t = {
        exePath: e.exePath,
        cmdLine: e.cmdLine,
        lastFocused: e.lastFocused
    };
    return null != e.id && (t.id = e.id), null != e.nativeProcessObserverId && (t.nativeProcessObserverId = e.nativeProcessObserverId), null != e.name && (t.name = e.name), e.add && (t.add = !0), e.block && (t.block = !0), ed(t, e), t;
}
function ed(e, t) {
    null != t.lastLaunched ? (e.lastLaunched = t.lastLaunched) : null != t.start && (e.lastLaunched = t.start);
}
function e_(e) {
    return Z.some((t) => t.name === e.name && !0 === t.streamerTool);
}
function eE() {
    if (K.length > 0) {
        let e = z;
        (z = K[0]), null != e && z.pid === e.pid ? (z.start = e.start) : (z.start = Date.now());
    } else z = null;
    let e = [];
    for (let t of K) !(t.pid in ei) && ((ei[t.pid] = t), e.push(t));
    let t = [];
    for (let e of Object.values(ei)) !K.some((t) => t.pid === e.pid) && (t.push(e), delete ei[e.pid]);
    k.info('games', {
        runningGames: K,
        added: e,
        removed: t,
        previousGames: ei
    }),
        p.Z.dispatch({
            type: 'RUNNING_GAMES_CHANGE',
            games: K,
            added: e,
            removed: t
        });
}
function ef(e) {
    let t = null != e.name ? e.name : '';
    return ''.concat(e.exePath, ':').concat(t);
}
function eh(e) {
    if (e.isLauncher)
        return {
            source: U.d.LAUNCHER,
            enabled: !1,
            overlayMethod: x.gl.Disabled
        };
    let t = N.Z.getGameByName(e.name);
    if (null != t) {
        let e = O.Z.getActiveLibraryApplication(t.id);
        if (null != e)
            return {
                source: U.d.LIBRARY_APPLICATION,
                enabled: e.isOverlayEnabled(),
                overlayMethod: x.gl.Disabled
            };
    }
    let n = S.H() && (0, P.VS)() && !v.v.legacyEnabled,
        r = n ? x.gl.OutOfProcess : x.gl.Hook,
        i = $.enableOverlay[ef(e)];
    if (null != i)
        return {
            source: U.d.USER_OVERRIDE,
            enabled: i,
            overlayMethod: r
        };
    let a = null == e.id ? null : ee[e.id];
    return null != a
        ? {
              source: U.d.DATABASE,
              enabled: a.enabled || n,
              overlayMethod: r
          }
        : {
              source: U.d.DEFAULT,
              enabled: F,
              overlayMethod: x.gl.Hook
          };
}
function ep(e) {
    var t;
    return null !== (t = $.enableOverlay[ef(e)]) && void 0 !== t ? t : eh(e).enabled;
}
function em(e) {
    let t = $.enableDetection[ef(e)];
    return null == t || t;
}
function eI(e) {
    return !e.hidden && em(e);
}
function eT() {
    h.K.set(B, $);
}
function eg(e) {
    let t = {
        ...e,
        played: null != e.lastFocused && 0 !== e.lastFocused ? E()(new Date(e.lastFocused * y.Z.Millis.SECOND)).fromNow() : ' ',
        overlay: ep(e),
        verified: N.Z.isGameInDatabase(e),
        detectable: em(e)
    };
    if (null != e.id && null != ee[e.id]) {
        let n = ee[e.id];
        t.overlayWarn = n.warn;
    }
    return t;
}
function eS(e) {
    return {
        name: e.name,
        exePath: e.exePath,
        cmdLine: e.cmdLine,
        lastFocused: e.lastFocused
    };
}
function eA() {
    let e = !1;
    return (
        (j = d()
            .values(O.Z.libraryApplications)
            .reduce((t, n) => {
                let r = N.Z.getDetectableGame(n.id);
                if (null == r) return t;
                for (let i of R.Z.getLaunchOptions(n.id, n.branchId)) {
                    let a = ''.concat(n.id, ':').concat(n.branchId);
                    !Y.has(a) && ((e = !0), Y.add(a));
                    let { fullExecutablePath: o } = i,
                        s = o.replace(/\\/g, '/').toLowerCase();
                    (Q[s] = r.id),
                        t.push({
                            id: r.id,
                            name: r.name,
                            exePath: s,
                            cmdLine: '',
                            lastFocused: 0,
                            add: !0
                        });
                }
                return t;
            }, [])),
        e && ev(),
        e
    );
}
function ev() {
    if (!__OVERLAY__ && D.isPlatformEmbedded) {
        let e = [...j, ...d().values($.gameOverrides)];
        M.ZP.setGameCandidateOverrides(e);
    }
}
function eN(e) {
    if (null != Q[e.exePath]) return w.GQo.DISCORD;
    if (/steamapps/.test(e.cmdLine)) return w.GQo.STEAM;
    if (/-epicapp/.test(e.cmdLine)) return w.GQo.EPIC;
    return e.distributor;
}
function eO(e) {
    if (null != e && 0 !== e.length)
        e.forEach((e) => {
            if (
                $.gamesSeen.some((t) => {
                    if (t.name === e.name) {
                        if (e.lastFocused) {
                            t.lastFocused = e.lastFocused;
                            let n = $.gameOverrides[ef(e)];
                            null != n && (n.lastFocused = e.lastFocused);
                        }
                        return ed(t, e), !0;
                    }
                    return !1;
                })
            );
            else {
                if (e.hidden) return;
                $.gamesSeen.unshift(ec(e));
            }
        }),
            $.gamesSeen.sort((e, t) => t.lastFocused - e.lastFocused),
            eT(),
            L.Z.setRecentGames(eR().map((e) => eg(e)));
}
function eR() {
    let e = d().values($.gameOverrides);
    return $.gamesSeen.filter((e) => void 0 === $.gameOverrides[ef(e)]).concat(e);
}
function eC(e, t) {
    if (void 0 === t) {
        let t = M.ZP.getDiscordUtils();
        if (null != t && null != t.getWindowHandleFromPid) {
            let n = t.getWindowHandleFromPid(e);
            return null != n && '0' !== n ? n : null;
        }
        return null;
    }
    return '0' === t ? null : t;
}
function ey(e) {
    eO(K);
}
function eL(e) {
    W = e.games;
}
function eb() {
    H = !1;
}
function eD(e) {
    let { pid: t } = e;
    (en = t), (er = null);
}
function eM(e) {
    let { pid: t } = e;
    (er = t), (en = null);
}
function eP() {
    en = null;
}
function eU(e) {
    let t;
    let n = e.pid,
        r = K.find((e) => e.pid === n);
    if (null == r) {
        let e = W.find((e) => e.pid === n);
        if (null == e) return;
        ((r = { ...e }).hidden = !1), K.push(r), (t = ef(r));
    } else (t = ef(r)), r.hidden && (X[t] = !0), (r.hidden = !1);
    (null == r.lastFocused || 0 === r.lastFocused) && (r.lastFocused = Math.floor(Date.now() / 1000)),
        ($.gameOverrides[t] = {
            ...r,
            add: !0
        }),
        eO(K),
        ev(),
        eT(),
        eE();
}
function ew() {
    ev();
}
function ex(e) {
    (es = e.level), (el = e.intervalSeconds);
}
function eG() {
    (es = null), (el = null), ea.clear();
}
function ek(e) {
    let t = e.processes
        .map((e) => {
            var t;
            return {
                pid: e.pid,
                cleanedExePath: null !== (t = (0, T.F)(e.exePath)) && void 0 !== t ? t : e.exePath
            };
        })
        .filter((e) => {
            if (ea.has(e.pid) || eo.has(e.cleanedExePath)) return !1;
            let t = V.some((t) => e.cleanedExePath.includes(t));
            return t && ea.add(e.pid), t;
        })
        .map((e) => e.cleanedExePath);
    t.length > 0 &&
        C.default.track(w.rMx.GAME_DETECTION_DEBUGGING_KEYWORD_MATCH, {
            keywords: V,
            paths: t,
            debugging_level: es,
            interval_seconds: el
        });
}
function eB(e) {
    if ((($.enableOverlay[ef(e.game)] = e.newEnabledValue), eT(), !__OVERLAY__)) {
        let t = null != e.game.id ? N.Z.getDetectableGame(e.game.id) : null;
        null != t &&
            C.default.track(w.rMx.OVERLAY_TOGGLED, {
                enabled: e.newEnabledValue,
                setting_type: 'overlay toggled - game',
                application_id: t.id,
                application_name: t.name
            });
    }
}
function eF(e) {
    let { game: t } = e,
        n = em(t);
    ($.enableDetection[ef(t)] = !n), eT(), C.default.track(w.rMx.USER_SETTINGS_GAME_DETECTION_TOGGLE, { enabled: !n });
}
function eZ(e) {
    let t = ef(e.game),
        n = $.gameOverrides[t];
    null == n && ((n = eS(e.game)).add = !0), (n.name = e.newName);
    let r = ef(n);
    delete $.gameOverrides[t],
        ($.gameOverrides[r] = n),
        eu($.enableOverlay, t, r),
        eu($.enableDetection, t, r),
        eu(X, t, r),
        $.gamesSeen.forEach((n) => {
            ef(n) === t && (n.name = e.newName);
        });
    let i = !1;
    K.forEach((n) => {
        ef(n) === t && ((n.name = e.newName), (i = !0));
    }),
        ev(),
        eT(),
        i && eE();
}
function eV(e) {
    let t = ef(e.game);
    delete $.gameOverrides[t],
        delete $.enableOverlay[t],
        delete $.enableDetection[t],
        ($.gamesSeen = $.gamesSeen.filter((e) => ef(e) !== t)),
        X[t] &&
            (K.forEach((e) => {
                t === ef(e) && (e.hidden = !0);
            }),
            delete X[t],
            eE()),
        ev(),
        eT();
}
function eH(e) {
    var t;
    if (__OVERLAY__ || !D.isPlatformEmbedded) return;
    let n = M.ZP.getDiscordUtils().notifyGameLaunched;
    if (null == n) return;
    let r = N.Z.getDetectableGame(e.applicationId);
    if (null != r) n(r.id, r.name, null !== (t = e.pids) && void 0 !== t ? t : []);
}
!__OVERLAY__ &&
    (0, D.isDesktop)() &&
    (J = function () {
        let e = [],
            t = new Set();
        r = {};
        let n = N.Z.games;
        for (let e of n) {
            var i, a, o, s;
            ee[e.id] = {
                compatibilityHook: null !== (i = e.overlayCompatibilityHook) && void 0 !== i ? i : m.r.compatibilityHook,
                warn: null !== (a = e.overlayWarn) && void 0 !== a ? a : m.r.warn,
                enabled: null !== (o = e.overlay) && void 0 !== o ? o : m.r.enabled,
                allowHook: null !== (s = e.hook) && void 0 !== s ? s : m.r.allowHook,
                supportsOutOfProcessOverlay: e.supportsOutOfProcessOverlay
            };
        }
        [...n, ...Z].forEach((n) => {
            var r;
            let i =
                    null != n.executables
                        ? null === (r = n.executables) || void 0 === r
                            ? void 0
                            : r.filter((e) => {
                                  let { os: t } = e;
                                  return t === (0, D.getPlatformName)();
                              })
                        : [],
                a = {};
            i.forEach((e) => {
                let n = null != e.arguments && e.arguments.length > 0 ? e.arguments : 'null';
                null == a[n] && (a[n] = []), a[n].push(e.name), e.isLauncher && t.add(e.name);
            }),
                Object.keys(a).forEach((t) =>
                    e.push({
                        name: n.name,
                        id: n.id,
                        executables: a[t],
                        cmdLine: 'null' !== t ? t : null
                    })
                );
        }),
            (e = e.filter((e) => null != e.executables && e.executables.length > 0)),
            M.ZP.setObservedGamesCallback(e, (e) => {
                let n = [],
                    i = {};
                e = e.filter(
                    (e) => (
                        (e.distributor = eN(e)),
                        (e.isLauncher = t.has(e.exeName)),
                        e.isLauncher && null != e.id && (i[e.id] = e),
                        (e.windowHandle = eC(e.pid, e.windowHandle)),
                        null ==
                            Z.find((t) => {
                                let { name: n } = t;
                                return n === e.name;
                            }) || (n.push(e), !1)
                    )
                );
                let a = n.filter(e_).length;
                a !== et &&
                    ((et = a),
                    p.Z.dispatch({
                        type: 'RUNNING_STREAMER_TOOLS_CHANGE',
                        count: et
                    })),
                    (K = e),
                    (q = n),
                    (r = i),
                    eE();
            }),
            ev();
    });
class eY extends (i = f.ZP.Store) {
    initialize() {
        var e, t, n, r;
        let i =
            null !== (e = h.K.get(B)) && void 0 !== e
                ? e
                : {
                      gamesSeen: [],
                      gameOverrides: {},
                      enableOverlay: {},
                      enableDetection: {}
                  };
        $.gameOverrides = {};
        let a = !1;
        if (
            (d()
                .values(null !== (t = i.gameOverrides) && void 0 !== t ? t : {})
                .forEach((e) => {
                    let t = ef(e);
                    $.gameOverrides[t] = e;
                }),
            ($.enableOverlay = null !== (n = i.enableOverlay) && void 0 !== n ? n : {}),
            ($.enableDetection = null !== (r = i.enableDetection) && void 0 !== r ? r : {}),
            ev(),
            Array.isArray(i.gamesSeen))
        )
            for (let e of i.gamesSeen) 'number' == typeof e.id && ((e.nativeProcessObserverId = e.id), delete e.id, (a = !0));
        eO(i.gamesSeen), this.waitFor(N.Z), this.syncWith([O.Z, N.Z, R.Z], d().throttle(eA, 1000)), a && eT();
    }
    getVisibleGame() {
        return null == z || eI(z) ? z : null;
    }
    getCurrentGameForAnalytics() {
        return z;
    }
    getVisibleRunningGames() {
        return K.filter(eI);
    }
    getRunningGames() {
        return K;
    }
    getRunningDiscordApplicationIds() {
        let e = [];
        for (let t of K) null != Q[t.exePath] && e.push(Q[t.exePath]);
        return e;
    }
    getRunningVerifiedApplicationIds() {
        return this.getRunningGames()
            .map((e) => N.Z.getGameByName(e.name))
            .filter(b.lm)
            .map((e) => e.id);
    }
    getGameForPID(e) {
        var t;
        return null !== (t = K.find((t) => t.pid === e)) && void 0 !== t ? t : null;
    }
    getLauncherForPID(e) {
        let t = this.getGameForPID(e);
        return null != t ? (null != t.id ? r[t.id] : null) : null;
    }
    getOverlayOptionsForPID(e) {
        let t = this.getGameForPID(e);
        return null == t || t.isLauncher || null == t.id ? null : { ...ee[t.id] };
    }
    shouldElevateProcessForPID(e) {
        return null != en && en === e;
    }
    shouldContinueWithoutElevatedProcessForPID(e) {
        return null != er && er === e;
    }
    getCandidateGames() {
        return W.filter((e) => e.hidden || null == e.id).filter((e) => void 0 === $.gameOverrides[ef(e)]);
    }
    getGamesSeen(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            n = eR();
        if (e) {
            let e = this.getVisibleGame();
            if (null != e) {
                let t = ef(e);
                n = n.filter((e) => ef(e) !== t);
            }
        }
        return t && n.sort((e, t) => t.lastFocused - e.lastFocused), n;
    }
    getSeenGameByName(e) {
        return $.gamesSeen.find((t) => null != t.name && t.name.toLowerCase() === e.toLowerCase());
    }
    isObservedAppRunning(e) {
        return q.some((t) => t.name === e);
    }
    getOverrides() {
        return Object.values($.gameOverrides);
    }
    getOverrideForGame(e) {
        return $.gameOverrides[ef(e)];
    }
    getGameOverlayStatus(e) {
        if (e.hidden || e.isLauncher || e.elevated || e.sandboxed) return k.verbose('getGameOverlayStatus: Overlay not supported.', e), null;
        let t = eh(e);
        return t.enabled ? t : null;
    }
    getObservedAppNameForWindow(e) {
        var t, n;
        return null !== (n = null === (t = q.find((t) => (0, A.Z)(e, t.windowHandle))) || void 0 === t ? void 0 : t.name) && void 0 !== n ? n : null;
    }
    get canShowAdminWarning() {
        return H;
    }
    isDetectionEnabled(e) {
        return em(e);
    }
    addExecutableTrackedByAnalytics(e) {
        var t;
        eo.add(null !== (t = (0, T.F)(e)) && void 0 !== t ? t : e);
    }
}
G(eY, 'displayName', 'RunningGameStore'),
    (t.ZP = new eY(p.Z, {
        RUNNING_GAMES_CHANGE: ey,
        CANDIDATE_GAMES_CHANGE: eL,
        PERMISSION_CLEAR_PTT_ADMIN_WARNING: eb,
        PERMISSION_REQUEST_ELEVATED_PROCESS: eD,
        PERMISSION_CLEAR_ELEVATED_PROCESS: eP,
        PERMISSION_CONTINUE_NONELEVATED_PROCESS: eM,
        RUNNING_GAME_ADD_OVERRIDE: eU,
        RUNNING_GAME_TOGGLE_OVERLAY: eB,
        RUNNING_GAME_TOGGLE_DETECTION: eF,
        RUNNING_GAME_EDIT_NAME: eZ,
        RUNNING_GAME_DELETE_ENTRY: eV,
        GAMES_DATABASE_UPDATE: J,
        GAME_LAUNCH_SUCCESS: eH,
        GAME_DETECTION_WATCH_CANDIDATE_GAMES_START: ew,
        GAME_DETECTION_DEBUGGING_START: ex,
        GAME_DETECTION_DEBUGGING_STOP: eG,
        GAME_DETECTION_DEBUGGING_TICK: ek
    }));
