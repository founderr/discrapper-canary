let r;
n.d(t, {
    FZ: function () {
        return eh;
    },
    ik: function () {
        return ed;
    },
    jk: function () {
        return ec;
    },
    rH: function () {
        return eu;
    }
}),
    n(47120),
    n(653041),
    n(724458),
    n(757143),
    n(733860);
var i,
    a,
    s,
    o,
    l = n(392711),
    u = n.n(l),
    c = n(913527),
    d = n.n(c),
    f = n(442837),
    _ = n(433517),
    h = n(570140),
    p = n(593472),
    m = n(726542),
    g = n(439849),
    E = n(710845),
    v = n(630699),
    I = n(855403),
    S = n(454991),
    b = n(77498),
    T = n(283595),
    y = n(417363),
    A = n(626135),
    N = n(70956),
    C = n(877481),
    R = n(823379),
    O = n(358085),
    D = n(998502),
    L = n(145597),
    x = n(370862),
    w = n(981631),
    M = n(987650);
let P = new E.Z('RunningGameStore'),
    k = 'RunningGameStore',
    U = [
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
            name: m.Z.get(w.ABu.SPOTIFY).name
        }
    ],
    G = [],
    B = !0,
    Z = new Set(),
    F = [],
    V = [],
    j = [],
    H = null,
    Y = [],
    W = {},
    K = {},
    z = {
        gamesSeen: [],
        gameOverrides: {},
        enableOverlay: {},
        enableDetection: {}
    },
    q = function () {},
    Q = {},
    X = 0,
    J = null,
    $ = null,
    ee = {},
    et = new Set(),
    en = new Set(),
    er = null,
    ei = null;
function ea(e, t, n) {
    let r = e[t];
    void 0 !== r && (delete e[t], (e[n] = r));
}
function es(e, t) {
    null != t.lastLaunched ? (e.lastLaunched = t.lastLaunched) : null != t.start && (e.lastLaunched = t.start);
}
function eo(e) {
    return U.some((t) => t.name === e.name && !0 === t.streamerTool);
}
function el() {
    if (j.length > 0) {
        let e = H;
        (H = j[0]), null != e && H.pid === e.pid ? (H.start = e.start) : (H.start = Date.now());
    } else H = null;
    let e = [];
    for (let t of j) !(t.pid in ee) && ((ee[t.pid] = t), e.push(t));
    let t = [];
    for (let e of Object.values(ee)) !j.some((t) => t.pid === e.pid) && (t.push(e), delete ee[e.pid]);
    P.info('games', {
        runningGames: j,
        added: e,
        removed: t,
        previousGames: ee
    }),
        h.Z.dispatch({
            type: 'RUNNING_GAMES_CHANGE',
            games: j,
            added: e,
            removed: t
        });
}
function eu(e) {
    let t = null != e.name ? e.name : '';
    return ''.concat(e.exePath, ':').concat(t);
}
function ec(e) {
    if (e.isLauncher)
        return {
            source: x.d.LAUNCHER,
            enabled: !1,
            overlayMethod: M.gl.Disabled
        };
    let t = b.Z.getGameByName(e.name);
    if (null != t) {
        let e = T.Z.getActiveLibraryApplication(t.id);
        if (null != e)
            return {
                source: x.d.LIBRARY_APPLICATION,
                enabled: e.isOverlayEnabled(),
                overlayMethod: M.gl.Disabled
            };
    }
    let n = v.H() && (0, L.VS)() && !S.v.legacyEnabled,
        r = n ? M.gl.OutOfProcess : M.gl.Hook,
        i = z.enableOverlay[eu(e)];
    if (null != i)
        return {
            source: x.d.USER_OVERRIDE,
            enabled: i,
            overlayMethod: r
        };
    let a = null == e.id ? null : Q[e.id];
    return null != a
        ? {
              source: x.d.DATABASE,
              enabled: a.enabled || n,
              overlayMethod: r
          }
        : {
              source: x.d.DEFAULT,
              enabled: !1,
              overlayMethod: M.gl.Hook
          };
}
function ed(e) {
    let t = z.enableDetection[eu(e)];
    return null == t || t;
}
function ef(e) {
    return !e.hidden && ed(e);
}
function e_() {
    _.K.set(k, z);
}
function eh(e) {
    var t, n;
    let r = {
        ...e,
        played: null != e.lastFocused && 0 !== e.lastFocused ? d()(new Date(e.lastFocused * N.Z.Millis.SECOND)).fromNow() : ' ',
        overlay: ((t = e), null !== (n = z.enableOverlay[eu(t)]) && void 0 !== n ? n : ec(t).enabled),
        verified: b.Z.isGameInDatabase(e),
        detectable: ed(e)
    };
    if (null != e.id && null != Q[e.id]) {
        let t = Q[e.id];
        r.overlayWarn = t.warn;
    }
    return r;
}
function ep() {
    let e = !1;
    return (
        (F = u()
            .values(T.Z.libraryApplications)
            .reduce((t, n) => {
                let r = b.Z.getDetectableGame(n.id);
                if (null == r) return t;
                for (let i of y.Z.getLaunchOptions(n.id, n.branchId)) {
                    let a = ''.concat(n.id, ':').concat(n.branchId);
                    !Z.has(a) && ((e = !0), Z.add(a));
                    let { fullExecutablePath: s } = i,
                        o = s.replace(/\\/g, '/').toLowerCase();
                    (W[o] = r.id),
                        t.push({
                            id: r.id,
                            name: r.name,
                            exePath: o,
                            cmdLine: '',
                            lastFocused: 0,
                            add: !0
                        });
                }
                return t;
            }, [])),
        e && em(),
        e
    );
}
function em() {
    if (!__OVERLAY__ && O.isPlatformEmbedded) {
        let e = [...F, ...u().values(z.gameOverrides)];
        D.ZP.setGameCandidateOverrides(e);
    }
}
function eg(e) {
    if (null != e && 0 !== e.length)
        e.forEach((e) => {
            if (
                z.gamesSeen.some((t) => {
                    if (t.name === e.name) {
                        if (e.lastFocused) {
                            t.lastFocused = e.lastFocused;
                            let n = z.gameOverrides[eu(e)];
                            null != n && (n.lastFocused = e.lastFocused);
                        }
                        return es(t, e), !0;
                    }
                    return !1;
                })
            );
            else {
                if (e.hidden) return;
                z.gamesSeen.unshift(
                    (function (e) {
                        let t = {
                            exePath: e.exePath,
                            cmdLine: e.cmdLine,
                            lastFocused: e.lastFocused
                        };
                        return null != e.id && (t.id = e.id), null != e.nativeProcessObserverId && (t.nativeProcessObserverId = e.nativeProcessObserverId), null != e.name && (t.name = e.name), e.add && (t.add = !0), e.block && (t.block = !0), es(t, e), t;
                    })(e)
                );
            }
        }),
            z.gamesSeen.sort((e, t) => t.lastFocused - e.lastFocused),
            e_(),
            C.Z.setRecentGames(eE().map((e) => eh(e)));
}
function eE() {
    let e = u().values(z.gameOverrides);
    return z.gamesSeen.filter((e) => void 0 === z.gameOverrides[eu(e)]).concat(e);
}
!__OVERLAY__ &&
    (0, O.isDesktop)() &&
    (q = function () {
        let e = [],
            t = new Set();
        r = {};
        let n = b.Z.games;
        for (let e of n) {
            var i, a, s, o;
            Q[e.id] = {
                compatibilityHook: null !== (i = e.overlayCompatibilityHook) && void 0 !== i ? i : p.r.compatibilityHook,
                warn: null !== (a = e.overlayWarn) && void 0 !== a ? a : p.r.warn,
                enabled: null !== (s = e.overlay) && void 0 !== s ? s : p.r.enabled,
                allowHook: null !== (o = e.hook) && void 0 !== o ? o : p.r.allowHook,
                supportsOutOfProcessOverlay: e.supportsOutOfProcessOverlay
            };
        }
        [...n, ...U].forEach((n) => {
            var r;
            let i =
                    null != n.executables
                        ? null === (r = n.executables) || void 0 === r
                            ? void 0
                            : r.filter((e) => {
                                  let { os: t } = e;
                                  return t === (0, O.getPlatformName)();
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
            D.ZP.setObservedGamesCallback(e, (e) => {
                let n = [],
                    i = {};
                e = e.filter(
                    (e) => (
                        (e.distributor = (function (e) {
                            if (null != W[e.exePath]) return w.GQo.DISCORD;
                            if (/steamapps/.test(e.cmdLine)) return w.GQo.STEAM;
                            if (/-epicapp/.test(e.cmdLine)) return w.GQo.EPIC;
                            return e.distributor;
                        })(e)),
                        (e.isLauncher = t.has(e.exeName)),
                        e.isLauncher && null != e.id && (i[e.id] = e),
                        (e.windowHandle = (function (e, t) {
                            if (void 0 === t) {
                                let t = D.ZP.getDiscordUtils();
                                if (null != t && null != t.getWindowHandleFromPid) {
                                    let n = t.getWindowHandleFromPid(e);
                                    return null != n && '0' !== n ? n : null;
                                }
                                return null;
                            }
                            return '0' === t ? null : t;
                        })(e.pid, e.windowHandle)),
                        null ==
                            U.find((t) => {
                                let { name: n } = t;
                                return n === e.name;
                            }) || (n.push(e), !1)
                    )
                );
                let a = n.filter(eo).length;
                a !== X &&
                    ((X = a),
                    h.Z.dispatch({
                        type: 'RUNNING_STREAMER_TOOLS_CHANGE',
                        count: X
                    })),
                    (j = e),
                    (Y = n),
                    (r = i),
                    el();
            }),
            em();
    });
class ev extends (i = f.ZP.Store) {
    initialize() {
        var e, t, n, r;
        let i =
            null !== (e = _.K.get(k)) && void 0 !== e
                ? e
                : {
                      gamesSeen: [],
                      gameOverrides: {},
                      enableOverlay: {},
                      enableDetection: {}
                  };
        z.gameOverrides = {};
        let a = !1;
        if (
            (u()
                .values(null !== (t = i.gameOverrides) && void 0 !== t ? t : {})
                .forEach((e) => {
                    let t = eu(e);
                    z.gameOverrides[t] = e;
                }),
            (z.enableOverlay = null !== (n = i.enableOverlay) && void 0 !== n ? n : {}),
            (z.enableDetection = null !== (r = i.enableDetection) && void 0 !== r ? r : {}),
            em(),
            Array.isArray(i.gamesSeen))
        )
            for (let e of i.gamesSeen) 'number' == typeof e.id && ((e.nativeProcessObserverId = e.id), delete e.id, (a = !0));
        eg(i.gamesSeen), this.waitFor(b.Z), this.syncWith([T.Z, b.Z, y.Z], u().throttle(ep, 1000)), a && e_();
    }
    getVisibleGame() {
        return null == H || ef(H) ? H : null;
    }
    getCurrentGameForAnalytics() {
        return H;
    }
    getVisibleRunningGames() {
        return j.filter(ef);
    }
    getRunningGames() {
        return j;
    }
    getRunningDiscordApplicationIds() {
        let e = [];
        for (let t of j) null != W[t.exePath] && e.push(W[t.exePath]);
        return e;
    }
    getRunningVerifiedApplicationIds() {
        return this.getRunningGames()
            .map((e) => b.Z.getGameByName(e.name))
            .filter(R.lm)
            .map((e) => e.id);
    }
    getGameForPID(e) {
        var t;
        return null !== (t = j.find((t) => t.pid === e)) && void 0 !== t ? t : null;
    }
    getLauncherForPID(e) {
        let t = this.getGameForPID(e);
        return null != t ? (null != t.id ? r[t.id] : null) : null;
    }
    getOverlayOptionsForPID(e) {
        let t = this.getGameForPID(e);
        return null == t || t.isLauncher || null == t.id ? null : { ...Q[t.id] };
    }
    shouldElevateProcessForPID(e) {
        return null != J && J === e;
    }
    shouldContinueWithoutElevatedProcessForPID(e) {
        return null != $ && $ === e;
    }
    getCandidateGames() {
        return V.filter((e) => e.hidden || null == e.id).filter((e) => void 0 === z.gameOverrides[eu(e)]);
    }
    getGamesSeen(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            n = eE();
        if (e) {
            let e = this.getVisibleGame();
            if (null != e) {
                let t = eu(e);
                n = n.filter((e) => eu(e) !== t);
            }
        }
        return t && n.sort((e, t) => t.lastFocused - e.lastFocused), n;
    }
    getSeenGameByName(e) {
        return z.gamesSeen.find((t) => null != t.name && t.name.toLowerCase() === e.toLowerCase());
    }
    isObservedAppRunning(e) {
        return Y.some((t) => t.name === e);
    }
    getOverrides() {
        return Object.values(z.gameOverrides);
    }
    getOverrideForGame(e) {
        return z.gameOverrides[eu(e)];
    }
    getGameOverlayStatus(e) {
        if (e.isLauncher || e.elevated || e.sandboxed) return P.verbose('getGameOverlayStatus: Overlay not supported.', e), null;
        let t = ec(e);
        return t.enabled ? t : null;
    }
    getObservedAppNameForWindow(e) {
        var t, n;
        return null !== (n = null === (t = Y.find((t) => (0, I.Z)(e, t.windowHandle))) || void 0 === t ? void 0 : t.name) && void 0 !== n ? n : null;
    }
    get canShowAdminWarning() {
        return B;
    }
    isDetectionEnabled(e) {
        return ed(e);
    }
    addExecutableTrackedByAnalytics(e) {
        var t;
        en.add(null !== (t = (0, g.F)(e)) && void 0 !== t ? t : e);
    }
}
(o = 'RunningGameStore'),
    (s = 'displayName') in (a = ev)
        ? Object.defineProperty(a, s, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (a[s] = o),
    (t.ZP = new ev(h.Z, {
        RUNNING_GAMES_CHANGE: function (e) {
            eg(j);
        },
        CANDIDATE_GAMES_CHANGE: function (e) {
            V = e.games;
        },
        PERMISSION_CLEAR_PTT_ADMIN_WARNING: function () {
            B = !1;
        },
        PERMISSION_REQUEST_ELEVATED_PROCESS: function (e) {
            let { pid: t } = e;
            (J = t), ($ = null);
        },
        PERMISSION_CLEAR_ELEVATED_PROCESS: function () {
            J = null;
        },
        PERMISSION_CONTINUE_NONELEVATED_PROCESS: function (e) {
            let { pid: t } = e;
            ($ = t), (J = null);
        },
        RUNNING_GAME_ADD_OVERRIDE: function (e) {
            let t;
            let n = e.pid,
                r = j.find((e) => e.pid === n);
            if (null == r) {
                let e = V.find((e) => e.pid === n);
                if (null == e) return;
                ((r = { ...e }).hidden = !1), j.push(r), (t = eu(r));
            } else (t = eu(r)), r.hidden && (K[t] = !0), (r.hidden = !1);
            (null == r.lastFocused || 0 === r.lastFocused) && (r.lastFocused = Math.floor(Date.now() / 1000)),
                (z.gameOverrides[t] = {
                    ...r,
                    add: !0
                }),
                eg(j),
                em(),
                e_(),
                el();
        },
        RUNNING_GAME_TOGGLE_OVERLAY: function (e) {
            if (((z.enableOverlay[eu(e.game)] = e.newEnabledValue), e_(), !__OVERLAY__)) {
                let t = null != e.game.id ? b.Z.getDetectableGame(e.game.id) : null;
                null != t &&
                    A.default.track(w.rMx.OVERLAY_TOGGLED, {
                        enabled: e.newEnabledValue,
                        setting_type: 'overlay toggled - game',
                        application_id: t.id,
                        application_name: t.name
                    });
            }
        },
        RUNNING_GAME_TOGGLE_DETECTION: function (e) {
            let { game: t } = e,
                n = ed(t);
            (z.enableDetection[eu(t)] = !n), e_(), A.default.track(w.rMx.USER_SETTINGS_GAME_DETECTION_TOGGLE, { enabled: !n });
        },
        RUNNING_GAME_EDIT_NAME: function (e) {
            let t = eu(e.game),
                n = z.gameOverrides[t];
            if (null == n) {
                var r;
                (n = {
                    name: (r = e.game).name,
                    exePath: r.exePath,
                    cmdLine: r.cmdLine,
                    lastFocused: r.lastFocused
                }).add = !0;
            }
            n.name = e.newName;
            let i = eu(n);
            delete z.gameOverrides[t],
                (z.gameOverrides[i] = n),
                ea(z.enableOverlay, t, i),
                ea(z.enableDetection, t, i),
                ea(K, t, i),
                z.gamesSeen.forEach((n) => {
                    eu(n) === t && (n.name = e.newName);
                });
            let a = !1;
            j.forEach((n) => {
                eu(n) === t && ((n.name = e.newName), (a = !0));
            }),
                em(),
                e_(),
                a && el();
        },
        RUNNING_GAME_DELETE_ENTRY: function (e) {
            let t = eu(e.game);
            delete z.gameOverrides[t],
                delete z.enableOverlay[t],
                delete z.enableDetection[t],
                (z.gamesSeen = z.gamesSeen.filter((e) => eu(e) !== t)),
                K[t] &&
                    (j.forEach((e) => {
                        t === eu(e) && (e.hidden = !0);
                    }),
                    delete K[t],
                    el()),
                em(),
                e_();
        },
        GAMES_DATABASE_UPDATE: q,
        GAME_LAUNCH_SUCCESS: function (e) {
            var t;
            if (__OVERLAY__ || !O.isPlatformEmbedded) return;
            let n = D.ZP.getDiscordUtils().notifyGameLaunched;
            if (null == n) return;
            let r = b.Z.getDetectableGame(e.applicationId);
            if (null != r) n(r.id, r.name, null !== (t = e.pids) && void 0 !== t ? t : []);
        },
        GAME_DETECTION_WATCH_CANDIDATE_GAMES_START: function () {
            em();
        },
        GAME_DETECTION_DEBUGGING_START: function (e) {
            (er = e.level), (ei = e.intervalSeconds);
        },
        GAME_DETECTION_DEBUGGING_STOP: function () {
            (er = null), (ei = null), et.clear();
        },
        GAME_DETECTION_DEBUGGING_TICK: function (e) {
            let t = e.processes
                .map((e) => {
                    var t;
                    return {
                        pid: e.pid,
                        cleanedExePath: null !== (t = (0, g.F)(e.exePath)) && void 0 !== t ? t : e.exePath
                    };
                })
                .filter((e) => {
                    if (et.has(e.pid) || en.has(e.cleanedExePath)) return !1;
                    let t = G.some((t) => e.cleanedExePath.includes(t));
                    return t && et.add(e.pid), t;
                })
                .map((e) => e.cleanedExePath);
            t.length > 0 &&
                A.default.track(w.rMx.GAME_DETECTION_DEBUGGING_KEYWORD_MATCH, {
                    keywords: G,
                    paths: t,
                    debugging_level: er,
                    interval_seconds: ei
                });
        }
    }));
