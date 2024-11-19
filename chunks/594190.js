let r;
n.d(t, {
    FZ: function () {
        return eh;
    },
    ik: function () {
        return ef;
    },
    jk: function () {
        return ed;
    },
    rH: function () {
        return ec;
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
    p = n(570140),
    h = n(593472),
    m = n(726542),
    g = n(439849),
    E = n(710845),
    v = n(630699),
    b = n(855403),
    I = n(454991),
    T = n(568963),
    S = n(77498),
    y = n(283595),
    A = n(417363),
    N = n(626135),
    C = n(70956),
    R = n(877481),
    O = n(823379),
    D = n(358085),
    L = n(998502),
    x = n(145597),
    w = n(370862),
    M = n(981631),
    P = n(987650);
let k = new E.Z('RunningGameStore'),
    U = 'RunningGameStore',
    B = [
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
            name: m.Z.get(M.ABu.SPOTIFY).name
        }
    ],
    G = [],
    Z = !0,
    F = new Set(),
    V = [],
    j = [],
    H = [],
    Y = null,
    W = [],
    K = {},
    z = {},
    q = {
        gamesSeen: [],
        gameOverrides: {},
        enableOverlay: {},
        enableDetection: {}
    },
    Q = function () {},
    X = {},
    J = 0,
    $ = null,
    ee = null,
    et = {},
    en = new Set(),
    er = new Set(),
    ei = null,
    ea = null;
function es(e, t, n) {
    let r = e[t];
    void 0 !== r && (delete e[t], (e[n] = r));
}
function eo(e, t) {
    null != t.lastLaunched ? (e.lastLaunched = t.lastLaunched) : null != t.start && (e.lastLaunched = t.start);
}
function el(e) {
    return B.some((t) => t.name === e.name && !0 === t.streamerTool);
}
function eu() {
    if (H.length > 0) {
        let e = Y;
        (Y = H[0]), null != e && Y.pid === e.pid ? (Y.start = e.start) : (Y.start = Date.now());
    } else Y = null;
    let e = [];
    for (let t of H) !(t.pid in et) && ((et[t.pid] = t), e.push(t));
    let t = [];
    for (let e of Object.values(et)) !H.some((t) => t.pid === e.pid) && (t.push(e), delete et[e.pid]);
    k.info('games', {
        runningGames: H,
        added: e,
        removed: t,
        previousGames: et
    }),
        p.Z.dispatch({
            type: 'RUNNING_GAMES_CHANGE',
            games: H,
            added: e,
            removed: t
        });
}
function ec(e) {
    let t = null != e.name ? e.name : '';
    return ''.concat(e.exePath, ':').concat(t);
}
function ed(e) {
    if (e.isLauncher)
        return {
            source: w.d.LAUNCHER,
            enabled: !1,
            overlayMethod: P.gl.Disabled
        };
    let t = S.Z.getGameByName(e.name);
    if (null != t) {
        let e = y.Z.getActiveLibraryApplication(t.id);
        if (null != e)
            return {
                source: w.d.LIBRARY_APPLICATION,
                enabled: e.isOverlayEnabled(),
                overlayMethod: P.gl.Disabled
            };
    }
    let n = (v.H() || (0, T.R)()) && (0, x.VS)() && !I.v.legacyEnabled,
        r = n ? P.gl.OutOfProcess : P.gl.Hook,
        i = q.enableOverlay[ec(e)];
    if (null != i)
        return {
            source: w.d.USER_OVERRIDE,
            enabled: i,
            overlayMethod: r
        };
    let a = null == e.id ? null : X[e.id];
    return null != a
        ? {
              source: w.d.DATABASE,
              enabled: a.enabled || n,
              overlayMethod: r
          }
        : {
              source: w.d.DEFAULT,
              enabled: !1,
              overlayMethod: P.gl.Hook
          };
}
function ef(e) {
    let t = q.enableDetection[ec(e)];
    return null == t || t;
}
function e_(e) {
    return !e.hidden && ef(e);
}
function ep() {
    _.K.set(U, q);
}
function eh(e) {
    var t, n;
    let r = {
        ...e,
        played: null != e.lastFocused && 0 !== e.lastFocused ? d()(new Date(e.lastFocused * C.Z.Millis.SECOND)).fromNow() : ' ',
        overlay: ((t = e), null !== (n = q.enableOverlay[ec(t)]) && void 0 !== n ? n : ed(t).enabled),
        verified: S.Z.isGameInDatabase(e),
        detectable: ef(e)
    };
    if (null != e.id && null != X[e.id]) {
        let t = X[e.id];
        r.overlayWarn = t.warn;
    }
    return r;
}
function em() {
    let e = !1;
    return (
        (V = u()
            .values(y.Z.libraryApplications)
            .reduce((t, n) => {
                let r = S.Z.getDetectableGame(n.id);
                if (null == r) return t;
                for (let i of A.Z.getLaunchOptions(n.id, n.branchId)) {
                    let a = ''.concat(n.id, ':').concat(n.branchId);
                    !F.has(a) && ((e = !0), F.add(a));
                    let { fullExecutablePath: s } = i,
                        o = s.replace(/\\/g, '/').toLowerCase();
                    (K[o] = r.id),
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
        e && eg(),
        e
    );
}
function eg() {
    if (!__OVERLAY__ && D.isPlatformEmbedded) {
        let e = [...V, ...u().values(q.gameOverrides)];
        L.ZP.setGameCandidateOverrides(e);
    }
}
function eE(e) {
    if (null != e && 0 !== e.length)
        e.forEach((e) => {
            if (
                q.gamesSeen.some((t) => {
                    if (t.name === e.name) {
                        if (e.lastFocused) {
                            t.lastFocused = e.lastFocused;
                            let n = q.gameOverrides[ec(e)];
                            null != n && (n.lastFocused = e.lastFocused);
                        }
                        return eo(t, e), !0;
                    }
                    return !1;
                })
            );
            else {
                if (e.hidden) return;
                q.gamesSeen.unshift(
                    (function (e) {
                        let t = {
                            exePath: e.exePath,
                            cmdLine: e.cmdLine,
                            lastFocused: e.lastFocused
                        };
                        return null != e.id && (t.id = e.id), null != e.nativeProcessObserverId && (t.nativeProcessObserverId = e.nativeProcessObserverId), null != e.name && (t.name = e.name), e.add && (t.add = !0), e.block && (t.block = !0), eo(t, e), t;
                    })(e)
                );
            }
        }),
            q.gamesSeen.sort((e, t) => t.lastFocused - e.lastFocused),
            ep(),
            R.Z.setRecentGames(ev().map((e) => eh(e)));
}
function ev() {
    let e = u().values(q.gameOverrides);
    return q.gamesSeen.filter((e) => void 0 === q.gameOverrides[ec(e)]).concat(e);
}
!__OVERLAY__ &&
    (0, D.isDesktop)() &&
    (Q = function () {
        let e = [],
            t = new Set();
        r = {};
        let n = S.Z.games;
        for (let e of n) {
            var i, a, s, o;
            X[e.id] = {
                compatibilityHook: null !== (i = e.overlayCompatibilityHook) && void 0 !== i ? i : h.r.compatibilityHook,
                warn: null !== (a = e.overlayWarn) && void 0 !== a ? a : h.r.warn,
                enabled: null !== (s = e.overlay) && void 0 !== s ? s : h.r.enabled,
                allowHook: null !== (o = e.hook) && void 0 !== o ? o : h.r.allowHook,
                supportsOutOfProcessOverlay: e.supportsOutOfProcessOverlay
            };
        }
        [...n, ...B].forEach((n) => {
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
            L.ZP.setObservedGamesCallback(e, (e) => {
                let n = [],
                    i = {};
                e = e.filter(
                    (e) => (
                        (e.distributor = (function (e) {
                            if (null != K[e.exePath]) return M.GQo.DISCORD;
                            if (/steamapps/.test(e.cmdLine)) return M.GQo.STEAM;
                            if (/-epicapp/.test(e.cmdLine)) return M.GQo.EPIC;
                            return e.distributor;
                        })(e)),
                        (e.isLauncher = t.has(e.exeName)),
                        e.isLauncher && null != e.id && (i[e.id] = e),
                        (e.windowHandle = (function (e, t) {
                            if (void 0 === t) {
                                let t = L.ZP.getDiscordUtils();
                                if (null != t && null != t.getWindowHandleFromPid) {
                                    let n = t.getWindowHandleFromPid(e);
                                    return null != n && '0' !== n ? n : null;
                                }
                                return null;
                            }
                            return '0' === t ? null : t;
                        })(e.pid, e.windowHandle)),
                        null ==
                            B.find((t) => {
                                let { name: n } = t;
                                return n === e.name;
                            }) || (n.push(e), !1)
                    )
                );
                let a = n.filter(el).length;
                a !== J &&
                    ((J = a),
                    p.Z.dispatch({
                        type: 'RUNNING_STREAMER_TOOLS_CHANGE',
                        count: J
                    })),
                    (H = e),
                    (W = n),
                    (r = i),
                    eu();
            }),
            eg();
    });
class eb extends (i = f.ZP.Store) {
    initialize() {
        var e, t, n, r;
        let i =
            null !== (e = _.K.get(U)) && void 0 !== e
                ? e
                : {
                      gamesSeen: [],
                      gameOverrides: {},
                      enableOverlay: {},
                      enableDetection: {}
                  };
        q.gameOverrides = {};
        let a = !1;
        if (
            (u()
                .values(null !== (t = i.gameOverrides) && void 0 !== t ? t : {})
                .forEach((e) => {
                    let t = ec(e);
                    q.gameOverrides[t] = e;
                }),
            (q.enableOverlay = null !== (n = i.enableOverlay) && void 0 !== n ? n : {}),
            (q.enableDetection = null !== (r = i.enableDetection) && void 0 !== r ? r : {}),
            eg(),
            Array.isArray(i.gamesSeen))
        )
            for (let e of i.gamesSeen) 'number' == typeof e.id && ((e.nativeProcessObserverId = e.id), delete e.id, (a = !0));
        eE(i.gamesSeen), this.waitFor(S.Z), this.syncWith([y.Z, S.Z, A.Z], u().throttle(em, 1000)), a && ep();
    }
    getVisibleGame() {
        return null == Y || e_(Y) ? Y : null;
    }
    getCurrentGameForAnalytics() {
        return Y;
    }
    getVisibleRunningGames() {
        return H.filter(e_);
    }
    getRunningGames() {
        return H;
    }
    getRunningDiscordApplicationIds() {
        let e = [];
        for (let t of H) null != K[t.exePath] && e.push(K[t.exePath]);
        return e;
    }
    getRunningVerifiedApplicationIds() {
        return this.getRunningGames()
            .map((e) => S.Z.getGameByName(e.name))
            .filter(O.lm)
            .map((e) => e.id);
    }
    getGameForPID(e) {
        var t;
        return null !== (t = H.find((t) => t.pid === e)) && void 0 !== t ? t : null;
    }
    getLauncherForPID(e) {
        let t = this.getGameForPID(e);
        return null != t ? (null != t.id ? r[t.id] : null) : null;
    }
    getOverlayOptionsForPID(e) {
        let t = this.getGameForPID(e);
        return null == t || t.isLauncher || null == t.id ? null : { ...X[t.id] };
    }
    shouldElevateProcessForPID(e) {
        return null != $ && $ === e;
    }
    shouldContinueWithoutElevatedProcessForPID(e) {
        return null != ee && ee === e;
    }
    getCandidateGames() {
        return j.filter((e) => e.hidden || null == e.id).filter((e) => void 0 === q.gameOverrides[ec(e)]);
    }
    getGamesSeen(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            n = ev();
        if (e) {
            let e = this.getVisibleGame();
            if (null != e) {
                let t = ec(e);
                n = n.filter((e) => ec(e) !== t);
            }
        }
        return t && n.sort((e, t) => t.lastFocused - e.lastFocused), n;
    }
    getSeenGameByName(e) {
        return q.gamesSeen.find((t) => null != t.name && t.name.toLowerCase() === e.toLowerCase());
    }
    isObservedAppRunning(e) {
        return W.some((t) => t.name === e);
    }
    getOverrides() {
        return Object.values(q.gameOverrides);
    }
    getOverrideForGame(e) {
        return q.gameOverrides[ec(e)];
    }
    getGameOverlayStatus(e) {
        if (e.isLauncher || e.elevated || e.sandboxed) return k.verbose('getGameOverlayStatus: Overlay not supported.', e), null;
        let t = ed(e);
        return t.enabled ? t : null;
    }
    getObservedAppNameForWindow(e) {
        var t, n;
        return null !== (n = null === (t = W.find((t) => (0, b.Z)(e, t.windowHandle))) || void 0 === t ? void 0 : t.name) && void 0 !== n ? n : null;
    }
    get canShowAdminWarning() {
        return Z;
    }
    isDetectionEnabled(e) {
        return ef(e);
    }
    addExecutableTrackedByAnalytics(e) {
        var t;
        er.add(null !== (t = (0, g.F)(e)) && void 0 !== t ? t : e);
    }
}
(o = 'RunningGameStore'),
    (s = 'displayName') in (a = eb)
        ? Object.defineProperty(a, s, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (a[s] = o),
    (t.ZP = new eb(p.Z, {
        RUNNING_GAMES_CHANGE: function (e) {
            eE(H);
        },
        CANDIDATE_GAMES_CHANGE: function (e) {
            j = e.games;
        },
        PERMISSION_CLEAR_PTT_ADMIN_WARNING: function () {
            Z = !1;
        },
        PERMISSION_REQUEST_ELEVATED_PROCESS: function (e) {
            let { pid: t } = e;
            ($ = t), (ee = null);
        },
        PERMISSION_CLEAR_ELEVATED_PROCESS: function () {
            $ = null;
        },
        PERMISSION_CONTINUE_NONELEVATED_PROCESS: function (e) {
            let { pid: t } = e;
            (ee = t), ($ = null);
        },
        RUNNING_GAME_ADD_OVERRIDE: function (e) {
            let t;
            let n = e.pid,
                r = H.find((e) => e.pid === n);
            if (null == r) {
                let e = j.find((e) => e.pid === n);
                if (null == e) return;
                ((r = { ...e }).hidden = !1), H.push(r), (t = ec(r));
            } else (t = ec(r)), r.hidden && (z[t] = !0), (r.hidden = !1);
            (null == r.lastFocused || 0 === r.lastFocused) && (r.lastFocused = Math.floor(Date.now() / 1000)),
                (q.gameOverrides[t] = {
                    ...r,
                    add: !0
                }),
                eE(H),
                eg(),
                ep(),
                eu();
        },
        RUNNING_GAME_TOGGLE_OVERLAY: function (e) {
            if (((q.enableOverlay[ec(e.game)] = e.newEnabledValue), ep(), !__OVERLAY__)) {
                let t = null != e.game.id ? S.Z.getDetectableGame(e.game.id) : null;
                null != t &&
                    N.default.track(M.rMx.OVERLAY_TOGGLED, {
                        enabled: e.newEnabledValue,
                        setting_type: 'overlay toggled - game',
                        application_id: t.id,
                        application_name: t.name
                    });
            }
        },
        RUNNING_GAME_TOGGLE_DETECTION: function (e) {
            let { game: t } = e,
                n = ef(t);
            (q.enableDetection[ec(t)] = !n), ep(), N.default.track(M.rMx.USER_SETTINGS_GAME_DETECTION_TOGGLE, { enabled: !n });
        },
        RUNNING_GAME_EDIT_NAME: function (e) {
            let t = ec(e.game),
                n = q.gameOverrides[t];
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
            let i = ec(n);
            delete q.gameOverrides[t],
                (q.gameOverrides[i] = n),
                es(q.enableOverlay, t, i),
                es(q.enableDetection, t, i),
                es(z, t, i),
                q.gamesSeen.forEach((n) => {
                    ec(n) === t && (n.name = e.newName);
                });
            let a = !1;
            H.forEach((n) => {
                ec(n) === t && ((n.name = e.newName), (a = !0));
            }),
                eg(),
                ep(),
                a && eu();
        },
        RUNNING_GAME_DELETE_ENTRY: function (e) {
            let t = ec(e.game);
            delete q.gameOverrides[t],
                delete q.enableOverlay[t],
                delete q.enableDetection[t],
                (q.gamesSeen = q.gamesSeen.filter((e) => ec(e) !== t)),
                z[t] &&
                    (H.forEach((e) => {
                        t === ec(e) && (e.hidden = !0);
                    }),
                    delete z[t],
                    eu()),
                eg(),
                ep();
        },
        GAMES_DATABASE_UPDATE: Q,
        GAME_LAUNCH_SUCCESS: function (e) {
            var t;
            if (__OVERLAY__ || !D.isPlatformEmbedded) return;
            let n = L.ZP.getDiscordUtils().notifyGameLaunched;
            if (null == n) return;
            let r = S.Z.getDetectableGame(e.applicationId);
            if (null != r) n(r.id, r.name, null !== (t = e.pids) && void 0 !== t ? t : []);
        },
        GAME_DETECTION_WATCH_CANDIDATE_GAMES_START: function () {
            eg();
        },
        GAME_DETECTION_DEBUGGING_START: function (e) {
            (ei = e.level), (ea = e.intervalSeconds);
        },
        GAME_DETECTION_DEBUGGING_STOP: function () {
            (ei = null), (ea = null), en.clear();
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
                    if (en.has(e.pid) || er.has(e.cleanedExePath)) return !1;
                    let t = G.some((t) => e.cleanedExePath.includes(t));
                    return t && en.add(e.pid), t;
                })
                .map((e) => e.cleanedExePath);
            t.length > 0 &&
                N.default.track(M.rMx.GAME_DETECTION_DEBUGGING_KEYWORD_MATCH, {
                    keywords: G,
                    paths: t,
                    debugging_level: ei,
                    interval_seconds: ea
                });
        }
    }));
