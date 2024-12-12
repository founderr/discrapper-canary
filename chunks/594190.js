let i;
r.d(n, {
    FZ: function () {
        return eb;
    },
    ik: function () {
        return ev;
    },
    jk: function () {
        return eg;
    },
    rH: function () {
        return em;
    }
});
var a,
    s = r(47120);
var o = r(653041);
var l = r(724458);
var u = r(757143);
var c = r(733860);
var d = r(392711),
    f = r.n(d),
    _ = r(913527),
    h = r.n(_),
    p = r(442837),
    m = r(433517),
    g = r(570140),
    E = r(593472),
    v = r(726542),
    I = r(439849),
    T = r(710845),
    b = r(630699),
    y = r(855403),
    S = r(454991),
    A = r(32300),
    N = r(77498),
    C = r(283595),
    R = r(417363),
    O = r(626135),
    D = r(70956),
    L = r(877481),
    x = r(823379),
    w = r(358085),
    P = r(998502),
    M = r(145597),
    k = r(370862),
    U = r(981631),
    B = r(987650);
function G(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let Z = new T.Z('RunningGameStore'),
    F = 'RunningGameStore',
    V = !1,
    j = [
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
            name: v.Z.get(U.ABu.SPOTIFY).name
        }
    ],
    H = [],
    Y = !0,
    W = new Set(),
    K = [],
    z = [],
    q = [],
    Q = null,
    X = [],
    J = {},
    $ = {},
    ee = {
        gamesSeen: [],
        gameOverrides: {},
        enableOverlay: {},
        enableDetection: {}
    },
    et = function () {},
    en = {},
    er = 0,
    ei = null,
    ea = null,
    es = {},
    eo = new Set(),
    el = new Set(),
    eu = null,
    ec = null;
function ed(e, n, r) {
    let i = e[n];
    void 0 !== i && (delete e[n], (e[r] = i));
}
function ef(e) {
    let n = {
        exePath: e.exePath,
        cmdLine: e.cmdLine,
        lastFocused: e.lastFocused
    };
    return null != e.id && (n.id = e.id), null != e.nativeProcessObserverId && (n.nativeProcessObserverId = e.nativeProcessObserverId), null != e.name && (n.name = e.name), e.add && (n.add = !0), e.block && (n.block = !0), e_(n, e), n;
}
function e_(e, n) {
    null != n.lastLaunched ? (e.lastLaunched = n.lastLaunched) : null != n.start && (e.lastLaunched = n.start);
}
function eh(e) {
    return j.some((n) => n.name === e.name && !0 === n.streamerTool);
}
function ep() {
    if (q.length > 0) {
        let e = Q;
        (Q = q[0]), null != e && Q.pid === e.pid ? (Q.start = e.start) : (Q.start = Date.now());
    } else Q = null;
    let e = [];
    for (let n of q) !(n.pid in es) && ((es[n.pid] = n), e.push(n));
    let n = [];
    for (let e of Object.values(es)) !q.some((n) => n.pid === e.pid) && (n.push(e), delete es[e.pid]);
    Z.info('games', {
        runningGames: q,
        added: e,
        removed: n,
        previousGames: es
    }),
        g.Z.dispatch({
            type: 'RUNNING_GAMES_CHANGE',
            games: q,
            added: e,
            removed: n
        });
}
function em(e) {
    let n = null != e.name ? e.name : '';
    return ''.concat(e.exePath, ':').concat(n);
}
function eg(e) {
    if (e.isLauncher)
        return {
            source: k.d.LAUNCHER,
            enabled: !1,
            overlayMethod: B.gl.Disabled
        };
    let n = N.Z.getGameByName(e.name);
    if (null != n) {
        let e = C.Z.getActiveLibraryApplication(n.id);
        if (null != e)
            return {
                source: k.d.LIBRARY_APPLICATION,
                enabled: e.isOverlayEnabled(),
                overlayMethod: B.gl.Disabled
            };
    }
    let r = (b.H() || (0, A.R)()) && (0, M.VS)() && !S.v.legacyEnabled,
        i = r ? B.gl.OutOfProcess : B.gl.Hook,
        a = ee.enableOverlay[em(e)];
    if (null != a)
        return {
            source: k.d.USER_OVERRIDE,
            enabled: a,
            overlayMethod: i
        };
    let s = null == e.id ? null : en[e.id];
    return null != s
        ? {
              source: k.d.DATABASE,
              enabled: s.enabled || r,
              overlayMethod: i
          }
        : {
              source: k.d.DEFAULT,
              enabled: V,
              overlayMethod: B.gl.Hook
          };
}
function eE(e) {
    var n;
    return null !== (n = ee.enableOverlay[em(e)]) && void 0 !== n ? n : eg(e).enabled;
}
function ev(e) {
    let n = ee.enableDetection[em(e)];
    return null == n || n;
}
function eI(e) {
    return !e.hidden && ev(e);
}
function eT() {
    m.K.set(F, ee);
}
function eb(e) {
    let n = {
        ...e,
        played: null != e.lastFocused && 0 !== e.lastFocused ? h()(new Date(e.lastFocused * D.Z.Millis.SECOND)).fromNow() : ' ',
        overlay: eE(e),
        verified: N.Z.isGameInDatabase(e),
        detectable: ev(e)
    };
    if (null != e.id && null != en[e.id]) {
        let r = en[e.id];
        n.overlayWarn = r.warn;
    }
    return n;
}
function ey(e) {
    return {
        name: e.name,
        exePath: e.exePath,
        cmdLine: e.cmdLine,
        lastFocused: e.lastFocused
    };
}
function eS() {
    let e = !1;
    return (
        (K = f()
            .values(C.Z.libraryApplications)
            .reduce((n, r) => {
                let i = N.Z.getDetectableGame(r.id);
                if (null == i) return n;
                for (let a of R.Z.getLaunchOptions(r.id, r.branchId)) {
                    let s = ''.concat(r.id, ':').concat(r.branchId);
                    !W.has(s) && ((e = !0), W.add(s));
                    let { fullExecutablePath: o } = a,
                        l = o.replace(/\\/g, '/').toLowerCase();
                    (J[l] = i.id),
                        n.push({
                            id: i.id,
                            name: i.name,
                            exePath: l,
                            cmdLine: '',
                            lastFocused: 0,
                            add: !0
                        });
                }
                return n;
            }, [])),
        e && eA(),
        e
    );
}
function eA() {
    if (!__OVERLAY__ && w.isPlatformEmbedded) {
        let e = [...K, ...f().values(ee.gameOverrides)];
        P.ZP.setGameCandidateOverrides(e);
    }
}
function eN(e) {
    if (null != J[e.exePath]) return U.GQo.DISCORD;
    if (/steamapps/.test(e.cmdLine)) return U.GQo.STEAM;
    if (/-epicapp/.test(e.cmdLine)) return U.GQo.EPIC;
    return e.distributor;
}
function eC(e) {
    if (null != e && 0 !== e.length)
        e.forEach((e) => {
            if (
                ee.gamesSeen.some((n) => {
                    if (n.name === e.name) {
                        if (e.lastFocused) {
                            n.lastFocused = e.lastFocused;
                            let r = ee.gameOverrides[em(e)];
                            null != r && (r.lastFocused = e.lastFocused);
                        }
                        return e_(n, e), !0;
                    }
                    return !1;
                })
            );
            else {
                if (e.hidden) return;
                ee.gamesSeen.unshift(ef(e));
            }
        }),
            ee.gamesSeen.sort((e, n) => n.lastFocused - e.lastFocused),
            eT(),
            L.Z.setRecentGames(eR().map((e) => eb(e)));
}
function eR() {
    let e = f().values(ee.gameOverrides);
    return ee.gamesSeen.filter((e) => void 0 === ee.gameOverrides[em(e)]).concat(e);
}
function eO(e, n) {
    if (void 0 === n) {
        let n = P.ZP.getDiscordUtils();
        if (null != n && null != n.getWindowHandleFromPid) {
            let r = n.getWindowHandleFromPid(e);
            return null != r && '0' !== r ? r : null;
        }
        return null;
    }
    return '0' === n ? null : n;
}
function eD(e) {
    eC(q);
}
function eL(e) {
    z = e.games;
}
function ex() {
    Y = !1;
}
function ew(e) {
    let { pid: n } = e;
    (ei = n), (ea = null);
}
function eP(e) {
    let { pid: n } = e;
    (ea = n), (ei = null);
}
function eM() {
    ei = null;
}
function ek(e) {
    let n;
    let r = e.pid,
        i = q.find((e) => e.pid === r);
    if (null == i) {
        let e = z.find((e) => e.pid === r);
        if (null == e) return;
        ((i = { ...e }).hidden = !1), q.push(i), (n = em(i));
    } else (n = em(i)), i.hidden && ($[n] = !0), (i.hidden = !1);
    (null == i.lastFocused || 0 === i.lastFocused) && (i.lastFocused = Math.floor(Date.now() / 1000)),
        (ee.gameOverrides[n] = {
            ...i,
            add: !0
        }),
        eC(q),
        eA(),
        eT(),
        ep();
}
function eU() {
    eA();
}
function eB(e) {
    (eu = e.level), (ec = e.intervalSeconds);
}
function eG() {
    (eu = null), (ec = null), eo.clear();
}
function eZ(e) {
    let n = e.processes
        .map((e) => {
            var n;
            return {
                pid: e.pid,
                cleanedExePath: null !== (n = (0, I.F)(e.exePath)) && void 0 !== n ? n : e.exePath
            };
        })
        .filter((e) => {
            if (eo.has(e.pid) || el.has(e.cleanedExePath)) return !1;
            let n = H.some((n) => e.cleanedExePath.includes(n));
            return n && eo.add(e.pid), n;
        })
        .map((e) => e.cleanedExePath);
    n.length > 0 &&
        O.default.track(U.rMx.GAME_DETECTION_DEBUGGING_KEYWORD_MATCH, {
            keywords: H,
            paths: n,
            debugging_level: eu,
            interval_seconds: ec
        });
}
function eF(e) {
    if (((ee.enableOverlay[em(e.game)] = e.newEnabledValue), eT(), !__OVERLAY__)) {
        let n = null != e.game.id ? N.Z.getDetectableGame(e.game.id) : null;
        null != n &&
            O.default.track(U.rMx.OVERLAY_TOGGLED, {
                enabled: e.newEnabledValue,
                setting_type: 'overlay toggled - game',
                application_id: n.id,
                application_name: n.name
            });
    }
}
function eV(e) {
    let { game: n } = e,
        r = ev(n);
    (ee.enableDetection[em(n)] = !r), eT(), O.default.track(U.rMx.USER_SETTINGS_GAME_DETECTION_TOGGLE, { enabled: !r });
}
function ej(e) {
    let n = em(e.game),
        r = ee.gameOverrides[n];
    null == r && ((r = ey(e.game)).add = !0), (r.name = e.newName);
    let i = em(r);
    delete ee.gameOverrides[n],
        (ee.gameOverrides[i] = r),
        ed(ee.enableOverlay, n, i),
        ed(ee.enableDetection, n, i),
        ed($, n, i),
        ee.gamesSeen.forEach((r) => {
            em(r) === n && (r.name = e.newName);
        });
    let a = !1;
    q.forEach((r) => {
        em(r) === n && ((r.name = e.newName), (a = !0));
    }),
        eA(),
        eT(),
        a && ep();
}
function eH(e) {
    let n = em(e.game);
    delete ee.gameOverrides[n],
        delete ee.enableOverlay[n],
        delete ee.enableDetection[n],
        (ee.gamesSeen = ee.gamesSeen.filter((e) => em(e) !== n)),
        $[n] &&
            (q.forEach((e) => {
                n === em(e) && (e.hidden = !0);
            }),
            delete $[n],
            ep()),
        eA(),
        eT();
}
function eY(e) {
    var n;
    if (__OVERLAY__ || !w.isPlatformEmbedded) return;
    let r = P.ZP.getDiscordUtils().notifyGameLaunched;
    if (null == r) return;
    let i = N.Z.getDetectableGame(e.applicationId);
    if (null != i) r(i.id, i.name, null !== (n = e.pids) && void 0 !== n ? n : []);
}
!__OVERLAY__ &&
    (0, w.isDesktop)() &&
    (et = function () {
        let e = [],
            n = new Set();
        i = {};
        let r = N.Z.games;
        for (let e of r) {
            var a, s, o, l;
            en[e.id] = {
                compatibilityHook: null !== (a = e.overlayCompatibilityHook) && void 0 !== a ? a : E.r.compatibilityHook,
                warn: null !== (s = e.overlayWarn) && void 0 !== s ? s : E.r.warn,
                enabled: null !== (o = e.overlay) && void 0 !== o ? o : E.r.enabled,
                allowHook: null !== (l = e.hook) && void 0 !== l ? l : E.r.allowHook,
                supportsOutOfProcessOverlay: e.supportsOutOfProcessOverlay
            };
        }
        [...r, ...j].forEach((r) => {
            let i = null != r.executables ? r.executables : [],
                a = {};
            i.forEach((e) => {
                let r = null != e.arguments && e.arguments.length > 0 ? e.arguments : 'null';
                null == a[r] && (a[r] = []), a[r].push(e.name), e.isLauncher && n.add(e.name);
            }),
                Object.keys(a).forEach((n) =>
                    e.push({
                        name: r.name,
                        id: r.id,
                        executables: a[n],
                        cmdLine: 'null' !== n ? n : null
                    })
                );
        }),
            (e = e.filter((e) => null != e.executables && e.executables.length > 0)),
            P.ZP.setObservedGamesCallback(e, (e) => {
                let r = [],
                    a = {};
                e = e.filter(
                    (e) => (
                        (e.distributor = eN(e)),
                        (e.isLauncher = n.has(e.exeName)),
                        e.isLauncher && null != e.id && (a[e.id] = e),
                        (e.windowHandle = eO(e.pid, e.windowHandle)),
                        null ==
                            j.find((n) => {
                                let { name: r } = n;
                                return r === e.name;
                            }) || (r.push(e), !1)
                    )
                );
                let s = r.filter(eh).length;
                s !== er &&
                    ((er = s),
                    g.Z.dispatch({
                        type: 'RUNNING_STREAMER_TOOLS_CHANGE',
                        count: er
                    })),
                    (q = e),
                    (X = r),
                    (i = a),
                    ep();
            }),
            eA();
    });
class eW extends (a = p.ZP.Store) {
    initialize() {
        var e, n, r, i;
        let a =
            null !== (e = m.K.get(F)) && void 0 !== e
                ? e
                : {
                      gamesSeen: [],
                      gameOverrides: {},
                      enableOverlay: {},
                      enableDetection: {}
                  };
        ee.gameOverrides = {};
        let s = !1;
        if (
            (f()
                .values(null !== (n = a.gameOverrides) && void 0 !== n ? n : {})
                .forEach((e) => {
                    let n = em(e);
                    ee.gameOverrides[n] = e;
                }),
            (ee.enableOverlay = null !== (r = a.enableOverlay) && void 0 !== r ? r : {}),
            (ee.enableDetection = null !== (i = a.enableDetection) && void 0 !== i ? i : {}),
            eA(),
            Array.isArray(a.gamesSeen))
        )
            for (let e of a.gamesSeen) 'number' == typeof e.id && ((e.nativeProcessObserverId = e.id), delete e.id, (s = !0));
        eC(a.gamesSeen), this.waitFor(N.Z), this.syncWith([C.Z, N.Z, R.Z], f().throttle(eS, 1000)), s && eT();
    }
    getVisibleGame() {
        return null == Q || eI(Q) ? Q : null;
    }
    getCurrentGameForAnalytics() {
        return Q;
    }
    getVisibleRunningGames() {
        return q.filter(eI);
    }
    getRunningGames() {
        return q;
    }
    getRunningDiscordApplicationIds() {
        let e = [];
        for (let n of q) null != J[n.exePath] && e.push(J[n.exePath]);
        return e;
    }
    getRunningVerifiedApplicationIds() {
        return this.getRunningGames()
            .map((e) => N.Z.getGameByName(e.name))
            .filter(x.lm)
            .map((e) => e.id);
    }
    getGameForPID(e) {
        var n;
        return null !== (n = q.find((n) => n.pid === e)) && void 0 !== n ? n : null;
    }
    getLauncherForPID(e) {
        let n = this.getGameForPID(e);
        return null != n ? (null != n.id ? i[n.id] : null) : null;
    }
    getOverlayOptionsForPID(e) {
        let n = this.getGameForPID(e);
        return null == n || n.isLauncher || null == n.id ? null : { ...en[n.id] };
    }
    shouldElevateProcessForPID(e) {
        return null != ei && ei === e;
    }
    shouldContinueWithoutElevatedProcessForPID(e) {
        return null != ea && ea === e;
    }
    getCandidateGames() {
        return z.filter((e) => e.hidden || null == e.id).filter((e) => void 0 === ee.gameOverrides[em(e)]);
    }
    getGamesSeen(e) {
        let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            r = eR();
        if (e) {
            let e = this.getVisibleGame();
            if (null != e) {
                let n = em(e);
                r = r.filter((e) => em(e) !== n);
            }
        }
        return n && r.sort((e, n) => n.lastFocused - e.lastFocused), r;
    }
    getSeenGameByName(e) {
        return ee.gamesSeen.find((n) => null != n.name && n.name.toLowerCase() === e.toLowerCase());
    }
    isObservedAppRunning(e) {
        return X.some((n) => n.name === e);
    }
    getOverrides() {
        return Object.values(ee.gameOverrides);
    }
    getOverrideForGame(e) {
        return ee.gameOverrides[em(e)];
    }
    getGameOverlayStatus(e) {
        if (e.isLauncher || e.elevated || e.sandboxed) return Z.verbose('getGameOverlayStatus: Overlay not supported.', e), null;
        let n = eg(e);
        return n.enabled ? n : null;
    }
    getObservedAppNameForWindow(e) {
        var n, r;
        return null !== (r = null === (n = X.find((n) => (0, y.Z)(e, n.windowHandle))) || void 0 === n ? void 0 : n.name) && void 0 !== r ? r : null;
    }
    get canShowAdminWarning() {
        return Y;
    }
    isDetectionEnabled(e) {
        return ev(e);
    }
    addExecutableTrackedByAnalytics(e) {
        var n;
        el.add(null !== (n = (0, I.F)(e)) && void 0 !== n ? n : e);
    }
}
G(eW, 'displayName', 'RunningGameStore'),
    (n.ZP = new eW(g.Z, {
        RUNNING_GAMES_CHANGE: eD,
        CANDIDATE_GAMES_CHANGE: eL,
        PERMISSION_CLEAR_PTT_ADMIN_WARNING: ex,
        PERMISSION_REQUEST_ELEVATED_PROCESS: ew,
        PERMISSION_CLEAR_ELEVATED_PROCESS: eM,
        PERMISSION_CONTINUE_NONELEVATED_PROCESS: eP,
        RUNNING_GAME_ADD_OVERRIDE: ek,
        RUNNING_GAME_TOGGLE_OVERLAY: eF,
        RUNNING_GAME_TOGGLE_DETECTION: eV,
        RUNNING_GAME_EDIT_NAME: ej,
        RUNNING_GAME_DELETE_ENTRY: eH,
        GAMES_DATABASE_UPDATE: et,
        GAME_LAUNCH_SUCCESS: eY,
        GAME_DETECTION_WATCH_CANDIDATE_GAMES_START: eU,
        GAME_DETECTION_DEBUGGING_START: eB,
        GAME_DETECTION_DEBUGGING_STOP: eG,
        GAME_DETECTION_DEBUGGING_TICK: eZ
    }));
