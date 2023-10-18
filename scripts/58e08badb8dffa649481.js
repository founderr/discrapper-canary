"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [88310, 47428], {
        647428: (t, e, n) => {
            n.d(e, {
                Z: () => I
            });
            var r = n(202351),
                o = n(744564),
                i = n(120415),
                u = n(310126),
                a = new Set(["nvidia"]);
            var c = n(236625),
                l = n.n(c);
            var s = function(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }({}, i.AB.WINDOWS, {
                nvidia: ">=397.93.0"
            });

            function f(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function d(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(t, r.key, r)
                }
            }

            function y(t) {
                y = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                };
                return y(t)
            }

            function p(t, e) {
                return !e || "object" !== v(e) && "function" != typeof e ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : e
            }

            function b(t, e) {
                b = Object.setPrototypeOf || function(t, e) {
                    t.__proto__ = e;
                    return t
                };
                return b(t, e)
            }
            var v = function(t) {
                return t && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            };

            function O(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = y(t);
                    if (e) {
                        var o = y(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return p(this, n)
                }
            }
            var h = !1,
                g = !0;
            var S = function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    e && b(t, e)
                }(n, t);
                var e = O(n);

                function n() {
                    f(this, n);
                    return e.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    var t = this;
                    i.FB && !__OVERLAY__ && u.ZP.getGPUDriverVersions().then((function(e) {
                        h = function(t) {
                            var e = s[(0, i.Xf)()];
                            if (null == e) return !1;
                            var n, r, o, u = !0,
                                a = !1,
                                c = void 0;
                            try {
                                for (var f, d = Object.keys(t)[Symbol.iterator](); !(u = (f = d.next()).done); u = !0) {
                                    var y = f.value,
                                        p = t[y],
                                        b = e[y];
                                    if (null != p && null != b && null == p.error) {
                                        var v = (r = void 0, o = void 0, "".concat(null !== (r = (n = p).major) && void 0 !== r ? r : 0, ".").concat(null !== (o = n.minor) && void 0 !== o ? o : 0, ".0"));
                                        if (!l().satisfies(v, b)) return !0
                                    }
                                }
                            } catch (t) {
                                a = !0;
                                c = t
                            } finally {
                                try {
                                    u || null == d.return || d.return()
                                } finally {
                                    if (a) throw c
                                }
                            }
                            return !1
                        }(e);
                        g = function(t) {
                            var e = !0,
                                n = !1,
                                r = void 0;
                            try {
                                for (var o, i = Object.keys(t)[Symbol.iterator](); !(e = (o = i.next()).done); e = !0) {
                                    var u = o.value,
                                        c = t[u];
                                    if (null != c && null == c.error && a.has(u)) return !0
                                }
                            } catch (t) {
                                n = !0;
                                r = t
                            } finally {
                                try {
                                    e || null == i.return || i.return()
                                } finally {
                                    if (n) throw r
                                }
                            }
                            return !1
                        }(e);
                        t.emitChange()
                    }))
                };
                r.getState = function() {
                    return {
                        GPUDriversOutdated: h,
                        canUseHardwareAcceleration: g
                    }
                };
                ! function(t, e, n) {
                    e && d(t.prototype, e);
                    n && d(t, n)
                }(n, [{
                    key: "GPUDriversOutdated",
                    get: function() {
                        return h
                    }
                }, {
                    key: "canUseHardwareAcceleration",
                    get: function() {
                        return g
                    }
                }]);
                return n
            }(r.ZP.Store);
            S.displayName = "StreamingCapabilitiesStore";
            const I = new S(o.Z, {
                OVERLAY_INITIALIZE: function(t) {
                    var e = t.streamingCapabilitiesStoreState;
                    h = e.GPUDriversOutdated;
                    g = e.canUseHardwareAcceleration
                }
            })
        },
        488310: (t, e, n) => {
            n.r(e);
            n.d(e, {
                default: () => K
            });
            var r = n(496486),
                o = n.n(r),
                i = n(575494),
                u = n(418705),
                a = n(245353),
                c = n(264076),
                l = n(647428),
                s = n(550254),
                f = n(996344),
                d = n(656907),
                y = n(487685),
                p = n(666613),
                b = n(591684),
                v = n(473419),
                O = n(609182),
                h = n(177570),
                g = n(664625),
                S = n(610773),
                I = n(61209),
                m = n(476020),
                E = n(776477),
                P = n(959207),
                w = n(837067),
                _ = n(27851),
                C = n(21372),
                Z = n(567403),
                j = n(517205),
                T = n(870614),
                R = n(3862),
                N = n(997582),
                A = n(602351),
                D = n(491260),
                L = n(563367),
                B = n(179913),
                k = n(840922),
                M = n(715107),
                U = n(9430),
                x = n(473903),
                V = n(407561),
                G = n(711531),
                Y = n(325213),
                H = n(375759),
                z = n(453007),
                q = n(674482),
                F = n(226810);

            function W(t, e, n, r, o, i, u) {
                try {
                    var a = t[i](u),
                        c = a.value
                } catch (t) {
                    n(t);
                    return
                }
                a.done ? e(c) : Promise.resolve(c).then(r, o)
            }

            function J(t) {
                return function() {
                    var e = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = t.apply(e, n);

                        function u(t) {
                            W(i, r, o, u, a, "next", t)
                        }

                        function a(t) {
                            W(i, r, o, u, a, "throw", t)
                        }
                        u(void 0)
                    }))
                }
            }
            var Q = function(t, e) {
                var n, r, o, i, u = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function a(i) {
                    return function(a) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; u;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                (r = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        u.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        u.label++;
                                        r = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = u.ops.pop();
                                        u.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = u.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            u = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            u.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && u.label < o[1]) {
                                            u.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && u.label < o[2]) {
                                            u.label = o[2];
                                            u.ops.push(i);
                                            break
                                        }
                                        o[2] && u.ops.pop();
                                        u.trys.pop();
                                        continue
                                }
                                i = e.call(t, u)
                            } catch (t) {
                                i = [6, t];
                                r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, a])
                    }
                }
            };

            function K(t, e) {
                return X.apply(this, arguments)
            }

            function X() {
                X = J((function(t, e) {
                    var n, r, W, J, X, $, tt, et, nt, rt, ot, it, ut, at, ct, lt, st, ft, dt, yt, pt, bt, vt, Ot, ht, gt, St, It, mt, Et, Pt, wt, _t, Ct, Zt, jt, Tt, Rt, Nt, At, Dt, Lt, Bt, kt, Mt, Ut, xt = arguments;
                    return Q(this, (function(Q) {
                        switch (Q.label) {
                            case 0:
                                n = xt.length > 2 && void 0 !== xt[2] ? xt[2] : new i.Z;
                                return [4, new Promise((function(t) {
                                    return setImmediate(t)
                                }))];
                            case 1:
                                Q.sent();
                                if (null == (r = x.default.getCurrentUser())) return [2, new Promise((function(r) {
                                    n.fail((function() {
                                        r(K(t, e, n))
                                    }))
                                }))];
                                n.succeed();
                                W = Object.values(x.default.getUsers());
                                J = Object.values(Z.Z.getGuilds());
                                X = o().values(I.Z.getInitialOverlayState());
                                $ = C.ZP.getMutableAllGuildsAndMembers();
                                tt = B.ZP.getAllReadStates(!0);
                                et = V.Z.getAllVoiceStates();
                                nt = D.Z.getState();
                                rt = w.Z.unavailableGuilds;
                                ot = o().mapValues(a.Z.getGuilds(), (function(t) {
                                    return t.emojis
                                }));
                                it = U.Z.getAllSettings();
                                ut = S.Z.getInternalState();
                                at = z.Z.getStates();
                                ct = m.Z.getAllConnections();
                                lt = N.Z.getApplicationActivities();
                                st = E.Z.getParties();
                                ft = E.Z.getUserParties();
                                dt = g.default.getSessionId();
                                yt = g.default.getAnalyticsToken();
                                pt = H.Z.getGameAsJSON(e);
                                bt = _.Z.getMemberCounts();
                                vt = k.Z.getRelationships();
                                Ot = Array.from(f.Z.getMessageRequestChannelIds());
                                ht = M.Z.getVoiceChannelId();
                                gt = q.Z.getFocusedPID();
                                St = q.Z.getSelectedGuildId();
                                It = q.Z.getSelectedChannelId();
                                mt = A.Z.getState();
                                Et = P.Z.games.map((function(t) {
                                    return t.toJS()
                                }));
                                Pt = Object.values(G.Z.paymentSources).map((function(t) {
                                    return t.toJS()
                                }));
                                wt = G.Z.defaultPaymentSourceId;
                                _t = G.Z.hasFetchedPaymentSources;
                                Ct = h.Z.getState();
                                Zt = Y.Z.testModeApplicationId;
                                jt = {
                                    null: {
                                        state: L.Z.getState(),
                                        pings: L.Z.getPings(),
                                        quality: L.Z.getQuality(),
                                        hostname: L.Z.getHostname(),
                                        lossRate: L.Z.getOutboundLossRate()
                                    }
                                };
                                j.Z.forEach((function(t, e) {
                                    jt[e] = {
                                        state: t.state,
                                        pings: t.getPings(),
                                        quality: t.quality,
                                        hostname: t.hostname,
                                        lossRate: t.getOutboundLossRate()
                                    }
                                }));
                                Tt = T.Z.getLobbies();
                                Rt = R.Z.getAllVoiceStates();
                                Nt = Array.from(s.Z.getState().hiddenHotspots);
                                At = c.Z.getSerializedState();
                                Dt = l.Z.getState();
                                Lt = y.Z.getInitialOverlayState();
                                Bt = p.Z.getInitialOverlayState();
                                kt = b.Z.getInitialOverlayState();
                                Mt = (0, O.xU)(u.o8, v.Z.settings);
                                Ut = d.Z.getOverlaySerializedState();
                                return [2, {
                                    type: "OVERLAY_INITIALIZE",
                                    version: F.Tq,
                                    users: W,
                                    guilds: J,
                                    channels: X,
                                    guildMembers: $,
                                    readStates: tt,
                                    voiceStates: et,
                                    unavailableGuilds: rt,
                                    emojis: ot,
                                    allUserGuildSettings: it,
                                    callStoreInternalState: ut,
                                    activityLauncherStates: at,
                                    connectedApps: ct,
                                    localActivities: lt,
                                    parties: st,
                                    userParties: ft,
                                    user: r,
                                    messageRequestChannelIds: Ot,
                                    token: t,
                                    sessionId: dt,
                                    analyticsToken: yt,
                                    presences: nt,
                                    currentGame: pt,
                                    selectedVoiceChannelId: ht,
                                    selectedChannelId: It,
                                    selectedGuildId: St,
                                    guildMemberCounts: bt,
                                    relationships: vt,
                                    mediaEngineState: mt,
                                    rtcConnectionStates: jt,
                                    focusedPID: gt,
                                    applications: Et,
                                    paymentSources: Pt,
                                    defaultPaymentSourceId: wt,
                                    hasFetchedPaymentSources: _t,
                                    testModeApplicationId: Zt,
                                    lobbies: Tt,
                                    lobbyVoiceStates: Rt,
                                    applicationStreamState: Ct,
                                    hiddenHotspots: Nt,
                                    serializedExperimentStore: At,
                                    streamingCapabilitiesStoreState: Dt,
                                    joinedThreads: Lt,
                                    threadMembers: Bt,
                                    threadMessages: kt,
                                    userSettingsProto: Mt,
                                    soundboardStoreState: Ut
                                }]
                        }
                    }))
                }));
                return X.apply(this, arguments)
            }
        },
        776477: (t, e, n) => {
            n.d(e, {
                Z: () => C
            });
            var r = n(496486),
                o = n.n(r),
                i = n(202351),
                u = n(744564),
                a = n(664625),
                c = n(840922),
                l = n(436154),
                s = n(2590);

            function f(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function d(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function y(t) {
                y = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                };
                return y(t)
            }

            function p(t, e) {
                return !e || "object" !== v(e) && "function" != typeof e ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : e
            }

            function b(t, e) {
                b = Object.setPrototypeOf || function(t, e) {
                    t.__proto__ = e;
                    return t
                };
                return b(t, e)
            }
            var v = function(t) {
                return t && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            };

            function O(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = y(t);
                    if (e) {
                        var o = y(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return p(this, n)
                }
            }
            var h = {},
                g = {};

            function S(t, e) {
                var n;
                return (null !== (n = h[t]) && void 0 !== n ? n : {})[e]
            }

            function I(t, e) {
                var n = S(t, e);
                if (null != n) {
                    var r = h[t];
                    delete r[e];
                    o().isEmpty(r) && delete h[t];
                    var i = g[n];
                    if (null != i) {
                        i.delete(t);
                        0 === i.size && delete g[n]
                    }
                }
            }

            function m(t, e, n, r) {
                var o = n.find((function(t) {
                        return null != t.party && t.party.id
                    })),
                    i = null != o && null != o.party ? o.party.id : null,
                    u = S(e, t);
                if (null != i && r !== s.Skl.OFFLINE) {
                    if (null != u) {
                        if (u === i) return !1;
                        I(e, t)
                    }! function(t, e, n) {
                        var r = h[t];
                        null == r && (r = h[t] = {});
                        r[e] = n;
                        if (!c.Z.isBlocked(t)) {
                            var o, i = null !== (o = g[n]) && void 0 !== o ? o : new Set;
                            g[n] = i;
                            i.add(t)
                        }
                    }(e, t, i)
                } else {
                    if (null == u) return !1;
                    I(e, t)
                }
            }

            function E(t) {
                var e = t.guild,
                    n = !1,
                    r = !0,
                    o = !1,
                    i = void 0;
                try {
                    for (var u, a = e.presences[Symbol.iterator](); !(r = (u = a.next()).done); r = !0) {
                        var c = u.value,
                            l = c.user,
                            s = c.status,
                            f = c.activities;
                        !1 !== m(e.id, l.id, f, s) && (n = !0)
                    }
                } catch (t) {
                    o = !0;
                    i = t
                } finally {
                    try {
                        r || null == a.return || a.return()
                    } finally {
                        if (o) throw i
                    }
                }
                return n
            }

            function P(t, e) {
                var n = !1;
                e.forEach((function(e) {
                    null != e && m(t, e.user.id, e.activities, e.status) && (n = !0)
                }));
                return n
            }

            function w() {
                var t = a.default.getId(),
                    e = l.Z.getActivities();
                return m(s.ME, t, e)
            }
            var _ = function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    e && b(t, e)
                }(n, t);
                var e = O(n);

                function n() {
                    f(this, n);
                    return e.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    this.syncWith([l.Z], w);
                    this.waitFor(l.Z, c.Z)
                };
                r.getParty = function(t) {
                    return null != t && null != g[t] ? g[t] : null
                };
                r.getUserParties = function() {
                    return h
                };
                r.getParties = function() {
                    return g
                };
                return n
            }(i.ZP.Store);
            _.displayName = "GamePartyStore";
            const C = new _(u.Z, {
                CONNECTION_OPEN_SUPPLEMENTAL: function(t) {
                    var e = t.guilds,
                        n = t.presences,
                        r = !1,
                        o = !0,
                        i = !1,
                        u = void 0;
                    try {
                        for (var a, c = n[Symbol.iterator](); !(o = (a = c.next()).done); o = !0) {
                            var l = a.value,
                                f = l.user,
                                d = l.status,
                                y = l.activities;
                            null != f && !1 !== m(s.ME, f.id, y, d) && (r = !0)
                        }
                    } catch (t) {
                        i = !0;
                        u = t
                    } finally {
                        try {
                            o || null == c.return || c.return()
                        } finally {
                            if (i) throw u
                        }
                    }
                    var p = !0,
                        b = !1,
                        v = void 0;
                    try {
                        for (var O, h = e[Symbol.iterator](); !(p = (O = h.next()).done); p = !0) {
                            !1 !== E({
                                guild: O.value
                            }) && (r = !0)
                        }
                    } catch (t) {
                        b = !0;
                        v = t
                    } finally {
                        try {
                            p || null == h.return || h.return()
                        } finally {
                            if (b) throw v
                        }
                    }
                    return r
                },
                OVERLAY_INITIALIZE: function(t) {
                    var e = t.parties,
                        n = t.userParties;
                    g = {};
                    h = function(t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var n = null != arguments[e] ? arguments[e] : {},
                                r = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                                return Object.getOwnPropertyDescriptor(n, t).enumerable
                            }))));
                            r.forEach((function(e) {
                                d(t, e, n[e])
                            }))
                        }
                        return t
                    }({}, n);
                    Object.keys(e).forEach((function(t) {
                        return g[t] = new Set(e[t])
                    }))
                },
                GUILD_CREATE: E,
                PRESENCES_REPLACE: function(t) {
                    var e = t.presences,
                        n = !1,
                        r = !0,
                        o = !1,
                        i = void 0;
                    try {
                        for (var u, a = e[Symbol.iterator](); !(r = (u = a.next()).done); r = !0) {
                            var c = u.value,
                                l = c.user,
                                f = c.activities;
                            null != l && !1 !== m(s.ME, l.id, f) && (n = !0)
                        }
                    } catch (t) {
                        o = !0;
                        i = t
                    } finally {
                        try {
                            r || null == a.return || a.return()
                        } finally {
                            if (o) throw i
                        }
                    }
                    return n
                },
                PRESENCE_UPDATES: function(t) {
                    return t.updates.map((function(t) {
                        var e = t.guildId,
                            n = t.user,
                            r = t.status,
                            o = t.activities;
                        return m(null != e ? e : s.ME, n.id, o, r)
                    })).some((function(t) {
                        return t
                    }))
                },
                THREAD_MEMBER_LIST_UPDATE: function(t) {
                    return P(t.guildId, t.members.map((function(t) {
                        return t.presence
                    })))
                },
                THREAD_MEMBERS_UPDATE: function(t) {
                    var e = t.guildId,
                        n = t.addedMembers;
                    return null != n && P(e, n.map((function(t) {
                        return t.presence
                    })))
                },
                RELATIONSHIP_ADD: function(t) {
                    var e = t.relationship;
                    if (!c.Z.isBlocked(e.id)) return !1;
                    var n = h[e.id];
                    if (null == n) return !1;
                    var r = !0,
                        i = !1,
                        u = void 0;
                    try {
                        for (var a, l = o().values(n)[Symbol.iterator](); !(r = (a = l.next()).done); r = !0) {
                            var s = a.value,
                                f = g[s];
                            null != f && f.delete(e.id)
                        }
                    } catch (t) {
                        i = !0;
                        u = t
                    } finally {
                        try {
                            r || null == l.return || l.return()
                        } finally {
                            if (i) throw u
                        }
                    }
                },
                RELATIONSHIP_REMOVE: function(t) {
                    var e = t.relationship,
                        n = h[e.id];
                    if (null == n) return !1;
                    var r = !0,
                        i = !1,
                        u = void 0;
                    try {
                        for (var a, c = o().values(n)[Symbol.iterator](); !(r = (a = c.next()).done); r = !0) {
                            var l = a.value,
                                s = g[l];
                            null != s && s.add(e.id)
                        }
                    } catch (t) {
                        i = !0;
                        u = t
                    } finally {
                        try {
                            r || null == c.return || c.return()
                        } finally {
                            if (i) throw u
                        }
                    }
                }
            })
        },
        517205: (t, e, n) => {
            n.d(e, {
                Z: () => j
            });
            var r = n(496486),
                o = n.n(r),
                i = n(202351),
                u = n(744564),
                a = n(207840),
                c = n(250834),
                l = n(664625),
                s = n(870614),
                f = n(602351),
                d = n(2590);

            function y(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function p(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function b(t) {
                b = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                };
                return b(t)
            }

            function v(t, e) {
                e = null != e ? e : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : function(t, e) {
                    var n = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(t);
                        e && (r = r.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(e)).forEach((function(n) {
                    Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n))
                }));
                return t
            }

            function O(t, e) {
                return !e || "object" !== S(e) && "function" != typeof e ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : e
            }

            function h(t, e) {
                h = Object.setPrototypeOf || function(t, e) {
                    t.__proto__ = e;
                    return t
                };
                return h(t, e)
            }
            var g, S = function(t) {
                return t && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            };

            function I(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = b(t);
                    if (e) {
                        var o = b(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return O(this, n)
                }
            }
            var m = {};

            function E(t, e) {
                if (null == g) throw new Error("Creating RTCConnection without session.");
                var n = s.Z.getLobby(t);
                if (null == n) throw new Error("Creating RTCConnection without lobby.");
                var r = n.application_id,
                    o = new a.Z({
                        userId: l.default.getId(),
                        sessionId: g,
                        guildId: t,
                        channelId: e,
                        context: r
                    });
                o.on(c.z.State, (function(e, n, r) {
                    u.Z.dispatch(v(function(t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var n = null != arguments[e] ? arguments[e] : {},
                                r = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                                return Object.getOwnPropertyDescriptor(n, t).enumerable
                            }))));
                            r.forEach((function(e) {
                                p(t, e, n[e])
                            }))
                        }
                        return t
                    }({
                        type: "RTC_CONNECTION_STATE",
                        state: e
                    }, n, r), {
                        lobbyId: t
                    }))
                }));
                o.on(c.z.Ping, (function(e, n) {
                    u.Z.dispatch({
                        type: "RTC_CONNECTION_PING",
                        pings: e,
                        quality: n,
                        lobbyId: t
                    })
                }));
                o.on(c.z.OutboundLossRate, (function(e) {
                    u.Z.dispatch({
                        type: "RTC_CONNECTION_LOSS_RATE",
                        lossRate: e,
                        lobbyId: t
                    })
                }));
                return o
            }

            function P() {
                o().forEach(m, (function(t, e) {
                    t.destroy();
                    delete m[e]
                }))
            }

            function w(t, e, n) {
                var r = m[t];
                return null != r ? e(r) : n
            }

            function _(t) {
                var e = t.lobbyId,
                    n = m[e];
                if (null == n) return !1;
                n.destroy();
                delete m[e]
            }

            function C() {
                return !0
            }
            var Z = function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    e && h(t, e)
                }(n, t);
                var e = I(n);

                function n() {
                    y(this, n);
                    return e.apply(this, arguments)
                }
                var r = n.prototype;
                r.forEach = function(t) {
                    o().each(m, t)
                };
                r.getState = function(t) {
                    return w(t, (function(t) {
                        return t.state
                    }), d.hes.DISCONNECTED)
                };
                r.isConnected = function(t) {
                    return this.getState(t) === d.hes.RTC_CONNECTED
                };
                r.isDisconnected = function(t) {
                    return this.getState(t) === d.hes.DISCONNECTED
                };
                r.getHostname = function(t) {
                    return w(t, (function(t) {
                        return t.hostname
                    }), null)
                };
                r.getQuality = function(t) {
                    return w(t, (function(t) {
                        return t.quality
                    }), d.IE4.UNKNOWN)
                };
                r.getPings = function(t) {
                    return w(t, (function(t) {
                        return t.getPings()
                    }), [])
                };
                r.getAveragePing = function(t) {
                    return w(t, (function(t) {
                        return t.getAveragePing()
                    }), 0)
                };
                r.getLastPing = function(t) {
                    return w(t, (function(t) {
                        return t.getLastPing()
                    }), 0)
                };
                r.getOutboundLossRate = function(t) {
                    return w(t, (function(t) {
                        return t.getOutboundLossRate()
                    }), 0)
                };
                r.getMediaSessionId = function(t) {
                    return w(t, (function(t) {
                        return t.getMediaSessionId()
                    }), null)
                };
                r.getRTCConnectionId = function(t) {
                    return w(t, (function(t) {
                        return t.getRTCConnectionId()
                    }), null)
                };
                r.getDuration = function(t) {
                    return w(t, (function(t) {
                        return t.getDuration()
                    }), 0)
                };
                return n
            }(i.ZP.Store);
            Z.displayName = "RTCConnectionStore";
            const j = new Z(u.Z, f.Z.isSupported() ? {
                CONNECTION_OPEN: function(t) {
                    g = t.sessionId;
                    P()
                },
                CONNECTION_CLOSED: function() {
                    g = null;
                    P()
                },
                RTC_CONNECTION_STATE: C,
                RTC_CONNECTION_PING: C,
                RTC_CONNECTION_LOSS_RATE: C,
                RTC_CONNECTION_UPDATE_ID: function(t) {
                    return o().some(m, (function(e) {
                        return e === t.connection
                    }))
                },
                LOBBY_VOICE_STATE_UPDATE: function(t) {
                    if (l.default.getId() !== t.userId) return !1;
                    if (t.sessionId !== g) return !1;
                    var e = m[t.lobbyId];
                    if (null != e && null == t.channelId) {
                        e.destroy();
                        delete m[t.lobbyId]
                    } else if (null != e) e.channelId = t.channelId;
                    else if (null != t.channelId) {
                        e = E(t.lobbyId, t.channelId);
                        m[t.lobbyId] = e
                    }
                },
                LOBBY_VOICE_SERVER_UPDATE: function(t) {
                    var e = m[t.lobbyId];
                    if (null == e) return !1;
                    e.connect(t.endpoint, t.token)
                },
                LOBBY_DELETE: _,
                LOBBY_DISCONNECT: _
            } : {})
        },
        3862: (t, e, n) => {
            n.d(e, {
                Z: () => E
            });
            var r = n(496486),
                o = n.n(r),
                i = n(202351),
                u = n(744564),
                a = n(75509);

            function c(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function l(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function s(t) {
                s = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                };
                return s(t)
            }

            function f(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                        return Object.getOwnPropertyDescriptor(n, t).enumerable
                    }))));
                    r.forEach((function(e) {
                        l(t, e, n[e])
                    }))
                }
                return t
            }

            function d(t, e) {
                e = null != e ? e : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : function(t, e) {
                    var n = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(t);
                        e && (r = r.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(e)).forEach((function(n) {
                    Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n))
                }));
                return t
            }

            function y(t, e) {
                return !e || "object" !== b(e) && "function" != typeof e ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : e
            }

            function p(t, e) {
                p = Object.setPrototypeOf || function(t, e) {
                    t.__proto__ = e;
                    return t
                };
                return p(t, e)
            }
            var b = function(t) {
                return t && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            };

            function v(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = s(t);
                    if (e) {
                        var o = s(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return y(this, n)
                }
            }
            var O, h, g = Object.freeze({}),
                S = {};

            function I(t) {
                var e = t.lobbyId;
                delete S[e]
            }
            var m = function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    e && p(t, e)
                }(n, t);
                var e = v(n);

                function n() {
                    c(this, n);
                    return e.apply(this, arguments)
                }
                var r = n.prototype;
                r.getAllVoiceStates = function() {
                    return S
                };
                r.getVoiceStates = function(t) {
                    var e;
                    return null !== (e = S[t]) && void 0 !== e ? e : g
                };
                r.getVoiceState = function(t, e) {
                    return this.getVoiceStates(t)[e]
                };
                r.getLobbyIdsForUser = function(t) {
                    return Object.keys(S).filter((function(e) {
                        return null != S[e][t]
                    }))
                };
                return n
            }(i.ZP.Store);
            m.displayName = "LobbyVoiceStateStore";
            const E = new m(u.Z, {
                CONNECTION_OPEN: function(t) {
                    var e = t.user,
                        n = t.sessionId;
                    S = {};
                    O = e.id;
                    h = n
                },
                OVERLAY_INITIALIZE: function(t) {
                    var e = t.lobbyVoiceStates,
                        n = t.user,
                        r = t.sessionId;
                    S = {};
                    o().each(e, (function(t, e) {
                        S[e] = {};
                        o().each(t, (function(t, n) {
                            S[e][n] = new a.Z(t)
                        }))
                    }));
                    O = n.id;
                    h = r
                },
                LOBBY_VOICE_STATE_UPDATE: function(t) {
                    var e, n, r = t.sessionId,
                        o = t.userId,
                        i = t.lobbyId,
                        u = t.channelId,
                        c = t.mute,
                        s = t.deaf,
                        y = t.selfMute,
                        p = t.selfDeaf,
                        b = o === O && r !== h,
                        v = null !== (e = S[i]) && void 0 !== e ? e : {},
                        g = v[o];
                    null == u || b || (n = null == g ? new a.Z({
                        userId: o,
                        sessionId: r,
                        channelId: u,
                        mute: c,
                        deaf: s,
                        selfMute: y,
                        selfDeaf: p
                    }) : g.merge({
                        userId: o,
                        sessionId: r,
                        channelId: u,
                        mute: c,
                        deaf: s,
                        selfMute: y,
                        selfDeaf: p
                    }));
                    if (g === n) return !1;
                    null == n ? delete(v = f({}, v))[o] : v = d(f({}, v), l({}, o, n));
                    S[i] = v
                },
                LOBBY_DELETE: I,
                LOBBY_DISCONNECT: I
            })
        }
    }
]);