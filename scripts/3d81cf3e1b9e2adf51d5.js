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
                c = new Set(["nvidia"]);
            var a = n(236625),
                l = n.n(a);
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

            function p(t, e) {
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

            function d(t, e) {
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
                    return d(this, n)
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
                                c = !1,
                                a = void 0;
                            try {
                                for (var f, p = Object.keys(t)[Symbol.iterator](); !(u = (f = p.next()).done); u = !0) {
                                    var y = f.value,
                                        d = t[y],
                                        b = e[y];
                                    if (null != d && null != b && null == d.error) {
                                        var v = (r = void 0, o = void 0, "".concat(null !== (r = (n = d).major) && void 0 !== r ? r : 0, ".").concat(null !== (o = n.minor) && void 0 !== o ? o : 0, ".0"));
                                        if (!l().satisfies(v, b)) return !0
                                    }
                                }
                            } catch (t) {
                                c = !0;
                                a = t
                            } finally {
                                try {
                                    u || null == p.return || p.return()
                                } finally {
                                    if (c) throw a
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
                                        a = t[u];
                                    if (null != a && null == a.error && c.has(u)) return !0
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
                r.__getLocalVars = function() {
                    return {
                        GPUDriversOutdated: h,
                        canUseHardwareAcceleration: g
                    }
                };
                ! function(t, e, n) {
                    e && p(t.prototype, e);
                    n && p(t, n)
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
        550254: (t, e, n) => {
            n.d(e, {
                Z: () => v
            });
            var r = n(202351),
                o = n(744564),
                i = n(113469),
                u = n(199790);

            function c(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function a(t) {
                a = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                };
                return a(t)
            }

            function l(t, e) {
                return !e || "object" !== f(e) && "function" != typeof e ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : e
            }

            function s(t, e) {
                s = Object.setPrototypeOf || function(t, e) {
                    t.__proto__ = e;
                    return t
                };
                return s(t, e)
            }
            var f = function(t) {
                return t && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            };

            function p(t) {
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
                    var n, r = a(t);
                    if (e) {
                        var o = a(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return l(this, n)
                }
            }
            var y = new Set,
                d = {};
            var b = function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    e && s(t, e)
                }(n, t);
                var e = p(n);

                function n() {
                    c(this, n);
                    return e.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function(t) {
                    if (null != t) {
                        Array.isArray(t.hiddenHotspots) && (y = new Set(t.hiddenHotspots));
                        null != t.hotspotOverrides && (d = t.hotspotOverrides)
                    }
                };
                r.hasHotspot = function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = !e && d[t];
                    return !u.a && (!i.s.isDisallowPopupsSet() && (n || !y.has(t)))
                };
                r.hasHiddenHotspot = function(t) {
                    return y.has(t)
                };
                r.getHotspotOverride = function(t) {
                    return d[t]
                };
                r.getState = function() {
                    return {
                        hiddenHotspots: y,
                        hotspotOverrides: d
                    }
                };
                r.__getLocalVars = function() {
                    return {
                        hiddenHotspots: y,
                        hotspotOverrides: d
                    }
                };
                return n
            }(r.ZP.PersistedStore);
            b.displayName = "HotspotStore";
            b.persistKey = "hotspots";
            b.migrations = [function(t) {
                return {
                    hiddenHotspots: null != t ? t : [],
                    hotspotOverrides: {}
                }
            }];
            const v = new b(o.Z, {
                OVERLAY_INITIALIZE: function(t) {
                    var e = t.hiddenHotspots;
                    y = new Set(e)
                },
                HOTSPOT_HIDE: function(t) {
                    var e = t.location;
                    if (y.has(e)) return !1;
                    y.add(e)
                },
                HOTSPOT_OVERRIDE_SET: function(t) {
                    var e = t.location,
                        n = t.enabled;
                    d[e] = n
                },
                HOTSPOT_OVERRIDE_CLEAR: function(t) {
                    var e = t.location;
                    if (null == d[e]) return !1;
                    delete d[e]
                }
            })
        },
        488310: (t, e, n) => {
            n.r(e);
            n.d(e, {
                default: () => Q
            });
            var r = n(496486),
                o = n.n(r),
                i = n(575494),
                u = n(418705),
                c = n(245353),
                a = n(264076),
                l = n(647428),
                s = n(550254),
                f = n(996344),
                p = n(656907),
                y = n(487685),
                d = n(666613),
                b = n(591684),
                v = n(473419),
                O = n(609182),
                h = n(177570),
                g = n(664625),
                S = n(610773),
                I = n(61209),
                E = n(476020),
                _ = n(776477),
                P = n(959207),
                m = n(837067),
                w = n(27851),
                T = n(21372),
                C = n(567403),
                j = n(517205),
                R = n(870614),
                Z = n(3862),
                A = n(997582),
                N = n(525077),
                L = n(491260),
                D = n(563367),
                V = n(717091),
                B = n(840922),
                M = n(715107),
                x = n(9430),
                H = n(473903),
                U = n(407561),
                k = n(711531),
                F = n(325213),
                G = n(375759),
                Y = n(453007),
                z = n(674482),
                J = n(226810);

            function q(t, e, n, r, o, i, u) {
                try {
                    var c = t[i](u),
                        a = c.value
                } catch (t) {
                    n(t);
                    return
                }
                c.done ? e(a) : Promise.resolve(a).then(r, o)
            }

            function W(t) {
                return function() {
                    var e = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = t.apply(e, n);

                        function u(t) {
                            q(i, r, o, u, c, "next", t)
                        }

                        function c(t) {
                            q(i, r, o, u, c, "throw", t)
                        }
                        u(void 0)
                    }))
                }
            }
            var K = function(t, e) {
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
                        next: c(0),
                        throw: c(1),
                        return: c(2)
                    },
                    "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                function c(i) {
                    return function(c) {
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
                        }([i, c])
                    }
                }
            };

            function Q(t, e) {
                return X.apply(this, arguments)
            }

            function X() {
                X = W((function(t, e) {
                    var n, r, q, W, X, $, tt, et, nt, rt, ot, it, ut, ct, at, lt, st, ft, pt, yt, dt, bt, vt, Ot, ht, gt, St, It, Et, _t, Pt, mt, wt, Tt, Ct, jt, Rt, Zt, At, Nt, Lt, Dt, Vt, Bt, Mt, xt, Ht = arguments;
                    return K(this, (function(K) {
                        switch (K.label) {
                            case 0:
                                n = Ht.length > 2 && void 0 !== Ht[2] ? Ht[2] : new i.Z;
                                return [4, new Promise((function(t) {
                                    return setImmediate(t)
                                }))];
                            case 1:
                                K.sent();
                                if (null == (r = H.default.getCurrentUser())) return [2, new Promise((function(r) {
                                    n.fail((function() {
                                        r(Q(t, e, n))
                                    }))
                                }))];
                                n.succeed();
                                q = Object.values(H.default.getUsers());
                                W = Object.values(C.Z.getGuilds());
                                X = o().values(I.Z.getInitialOverlayState());
                                $ = T.ZP.getMutableAllGuildsAndMembers();
                                tt = V.ZP.getAllReadStates(!0);
                                et = U.Z.getAllVoiceStates();
                                nt = L.Z.getState();
                                rt = m.Z.unavailableGuilds;
                                ot = o().mapValues(c.Z.getGuilds(), (function(t) {
                                    return t.emojis
                                }));
                                it = x.Z.getAllSettings();
                                ut = S.Z.getInternalState();
                                ct = Y.Z.getStates();
                                at = E.Z.getAllConnections();
                                lt = A.Z.getApplicationActivities();
                                st = _.Z.getParties();
                                ft = _.Z.getUserParties();
                                pt = g.default.getSessionId();
                                yt = g.default.getAnalyticsToken();
                                dt = G.Z.getGameAsJSON(e);
                                bt = w.Z.getMemberCounts();
                                vt = B.Z.getRelationships();
                                Ot = Array.from(f.Z.getMessageRequestChannelIds());
                                ht = M.Z.getVoiceChannelId();
                                gt = z.Z.getFocusedPID();
                                St = z.Z.getSelectedGuildId();
                                It = z.Z.getSelectedChannelId();
                                Et = N.Z.getState();
                                _t = P.Z.games.map((function(t) {
                                    return t.toJS()
                                }));
                                Pt = Object.values(k.Z.paymentSources).map((function(t) {
                                    return t.toJS()
                                }));
                                mt = k.Z.defaultPaymentSourceId;
                                wt = k.Z.hasFetchedPaymentSources;
                                Tt = h.Z.getState();
                                Ct = F.Z.testModeApplicationId;
                                jt = {
                                    null: {
                                        state: D.Z.getState(),
                                        pings: D.Z.getPings(),
                                        quality: D.Z.getQuality(),
                                        hostname: D.Z.getHostname(),
                                        lossRate: D.Z.getOutboundLossRate()
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
                                Rt = R.Z.getLobbies();
                                Zt = Z.Z.getAllVoiceStates();
                                At = Array.from(s.Z.getState().hiddenHotspots);
                                Nt = a.Z.getSerializedState();
                                Lt = l.Z.getState();
                                Dt = y.Z.getInitialOverlayState();
                                Vt = d.Z.getInitialOverlayState();
                                Bt = b.Z.getInitialOverlayState();
                                Mt = (0, O.xU)(u.o8, v.Z.settings);
                                xt = p.Z.getOverlaySerializedState();
                                return [2, {
                                    type: "OVERLAY_INITIALIZE",
                                    version: J.Tq,
                                    users: q,
                                    guilds: W,
                                    channels: X,
                                    guildMembers: $,
                                    readStates: tt,
                                    voiceStates: et,
                                    unavailableGuilds: rt,
                                    emojis: ot,
                                    allUserGuildSettings: it,
                                    callStoreInternalState: ut,
                                    activityLauncherStates: ct,
                                    connectedApps: at,
                                    localActivities: lt,
                                    parties: st,
                                    userParties: ft,
                                    user: r,
                                    messageRequestChannelIds: Ot,
                                    token: t,
                                    sessionId: pt,
                                    analyticsToken: yt,
                                    presences: nt,
                                    currentGame: dt,
                                    selectedVoiceChannelId: ht,
                                    selectedChannelId: It,
                                    selectedGuildId: St,
                                    guildMemberCounts: bt,
                                    relationships: vt,
                                    mediaEngineState: Et,
                                    rtcConnectionStates: jt,
                                    focusedPID: gt,
                                    applications: _t,
                                    paymentSources: Pt,
                                    defaultPaymentSourceId: mt,
                                    hasFetchedPaymentSources: wt,
                                    testModeApplicationId: Ct,
                                    lobbies: Rt,
                                    lobbyVoiceStates: Zt,
                                    applicationStreamState: Tt,
                                    hiddenHotspots: At,
                                    serializedExperimentStore: Nt,
                                    streamingCapabilitiesStoreState: Lt,
                                    joinedThreads: Dt,
                                    threadMembers: Vt,
                                    threadMessages: Bt,
                                    userSettingsProto: Mt,
                                    soundboardStoreState: xt
                                }]
                        }
                    }))
                }));
                return X.apply(this, arguments)
            }
        },
        776477: (t, e, n) => {
            n.d(e, {
                Z: () => T
            });
            var r = n(496486),
                o = n.n(r),
                i = n(202351),
                u = n(744564),
                c = n(664625),
                a = n(840922),
                l = n(436154),
                s = n(2590);

            function f(t, e) {
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

            function y(t) {
                y = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                };
                return y(t)
            }

            function d(t, e) {
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
                    return d(this, n)
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

            function E(t, e, n, r) {
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
                        if (!a.Z.isBlocked(t)) {
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

            function _(t) {
                var e = t.guild,
                    n = !1,
                    r = !0,
                    o = !1,
                    i = void 0;
                try {
                    for (var u, c = e.presences[Symbol.iterator](); !(r = (u = c.next()).done); r = !0) {
                        var a = u.value,
                            l = a.user,
                            s = a.status,
                            f = a.activities;
                        !1 !== E(e.id, l.id, f, s) && (n = !0)
                    }
                } catch (t) {
                    o = !0;
                    i = t
                } finally {
                    try {
                        r || null == c.return || c.return()
                    } finally {
                        if (o) throw i
                    }
                }
                return n
            }

            function P(t, e) {
                var n = !1;
                e.forEach((function(e) {
                    null != e && E(t, e.user.id, e.activities, e.status) && (n = !0)
                }));
                return n
            }

            function m() {
                var t = c.default.getId(),
                    e = l.Z.getActivities();
                return E(s.ME, t, e)
            }
            var w = function(t) {
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
                    this.syncWith([l.Z], m);
                    this.waitFor(l.Z, a.Z)
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
                r.__getLocalVars = function() {
                    return {
                        userParties: h,
                        parties: g
                    }
                };
                return n
            }(i.ZP.Store);
            w.displayName = "GamePartyStore";
            const T = new w(u.Z, {
                CONNECTION_OPEN_SUPPLEMENTAL: function(t) {
                    var e = t.guilds,
                        n = t.presences,
                        r = !1,
                        o = !0,
                        i = !1,
                        u = void 0;
                    try {
                        for (var c, a = n[Symbol.iterator](); !(o = (c = a.next()).done); o = !0) {
                            var l = c.value,
                                f = l.user,
                                p = l.status,
                                y = l.activities;
                            null != f && !1 !== E(s.ME, f.id, y, p) && (r = !0)
                        }
                    } catch (t) {
                        i = !0;
                        u = t
                    } finally {
                        try {
                            o || null == a.return || a.return()
                        } finally {
                            if (i) throw u
                        }
                    }
                    var d = !0,
                        b = !1,
                        v = void 0;
                    try {
                        for (var O, h = e[Symbol.iterator](); !(d = (O = h.next()).done); d = !0) {
                            !1 !== _({
                                guild: O.value
                            }) && (r = !0)
                        }
                    } catch (t) {
                        b = !0;
                        v = t
                    } finally {
                        try {
                            d || null == h.return || h.return()
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
                                p(t, e, n[e])
                            }))
                        }
                        return t
                    }({}, n);
                    Object.keys(e).forEach((function(t) {
                        return g[t] = new Set(e[t])
                    }))
                },
                GUILD_CREATE: _,
                PRESENCES_REPLACE: function(t) {
                    var e = t.presences,
                        n = !1,
                        r = !0,
                        o = !1,
                        i = void 0;
                    try {
                        for (var u, c = e[Symbol.iterator](); !(r = (u = c.next()).done); r = !0) {
                            var a = u.value,
                                l = a.user,
                                f = a.activities;
                            null != l && !1 !== E(s.ME, l.id, f) && (n = !0)
                        }
                    } catch (t) {
                        o = !0;
                        i = t
                    } finally {
                        try {
                            r || null == c.return || c.return()
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
                        return E(null != e ? e : s.ME, n.id, o, r)
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
                    if (!a.Z.isBlocked(e.id)) return !1;
                    var n = h[e.id];
                    if (null == n) return !1;
                    var r = !0,
                        i = !1,
                        u = void 0;
                    try {
                        for (var c, l = o().values(n)[Symbol.iterator](); !(r = (c = l.next()).done); r = !0) {
                            var s = c.value,
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
                        for (var c, a = o().values(n)[Symbol.iterator](); !(r = (c = a.next()).done); r = !0) {
                            var l = c.value,
                                s = g[l];
                            null != s && s.add(e.id)
                        }
                    } catch (t) {
                        i = !0;
                        u = t
                    } finally {
                        try {
                            r || null == a.return || a.return()
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
                c = n(84039),
                a = n(250834),
                l = n(664625),
                s = n(870614),
                f = n(525077),
                p = n(2590);

            function y(t, e) {
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
            var E = {};

            function _(t, e) {
                if (null == g) throw new Error("Creating RTCConnection without session.");
                var n = s.Z.getLobby(t);
                if (null == n) throw new Error("Creating RTCConnection without lobby.");
                var r = n.application_id,
                    o = new c.Z({
                        userId: l.default.getId(),
                        sessionId: g,
                        guildId: t,
                        channelId: e,
                        context: r
                    });
                o.on(a.z.State, (function(e, n, r) {
                    u.Z.dispatch(v(function(t) {
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
                    }({
                        type: "RTC_CONNECTION_STATE",
                        state: e
                    }, n, r), {
                        lobbyId: t
                    }))
                }));
                o.on(a.z.Ping, (function(e, n) {
                    u.Z.dispatch({
                        type: "RTC_CONNECTION_PING",
                        pings: e,
                        quality: n,
                        lobbyId: t
                    })
                }));
                o.on(a.z.OutboundLossRate, (function(e) {
                    u.Z.dispatch({
                        type: "RTC_CONNECTION_LOSS_RATE",
                        lossRate: e,
                        lobbyId: t
                    })
                }));
                return o
            }

            function P() {
                o().forEach(E, (function(t, e) {
                    t.destroy();
                    delete E[e]
                }))
            }

            function m(t, e, n) {
                var r = E[t];
                return null != r ? e(r) : n
            }

            function w(t) {
                var e = t.lobbyId,
                    n = E[e];
                if (null == n) return !1;
                n.destroy();
                delete E[e]
            }

            function T() {
                return !0
            }
            var C = function(t) {
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
                    o().each(E, t)
                };
                r.getState = function(t) {
                    return m(t, (function(t) {
                        return t.state
                    }), p.hes.DISCONNECTED)
                };
                r.isConnected = function(t) {
                    return this.getState(t) === p.hes.RTC_CONNECTED
                };
                r.isDisconnected = function(t) {
                    return this.getState(t) === p.hes.DISCONNECTED
                };
                r.getHostname = function(t) {
                    return m(t, (function(t) {
                        return t.hostname
                    }), null)
                };
                r.getQuality = function(t) {
                    return m(t, (function(t) {
                        return t.quality
                    }), p.IE4.UNKNOWN)
                };
                r.getPings = function(t) {
                    return m(t, (function(t) {
                        return t.getPings()
                    }), [])
                };
                r.getAveragePing = function(t) {
                    return m(t, (function(t) {
                        return t.getAveragePing()
                    }), 0)
                };
                r.getLastPing = function(t) {
                    return m(t, (function(t) {
                        return t.getLastPing()
                    }), 0)
                };
                r.getOutboundLossRate = function(t) {
                    return m(t, (function(t) {
                        return t.getOutboundLossRate()
                    }), 0)
                };
                r.getMediaSessionId = function(t) {
                    return m(t, (function(t) {
                        return t.getMediaSessionId()
                    }), null)
                };
                r.getRTCConnectionId = function(t) {
                    return m(t, (function(t) {
                        return t.getRTCConnectionId()
                    }), null)
                };
                r.getDuration = function(t) {
                    return m(t, (function(t) {
                        return t.getDuration()
                    }), 0)
                };
                r.__getLocalVars = function() {
                    return {
                        sessionId: g,
                        rtcConnections: E
                    }
                };
                return n
            }(i.ZP.Store);
            C.displayName = "RTCConnectionStore";
            const j = new C(u.Z, f.Z.isSupported() ? {
                CONNECTION_OPEN: function(t) {
                    g = t.sessionId;
                    P()
                },
                CONNECTION_CLOSED: function() {
                    g = null;
                    P()
                },
                RTC_CONNECTION_STATE: T,
                RTC_CONNECTION_PING: T,
                RTC_CONNECTION_LOSS_RATE: T,
                RTC_CONNECTION_UPDATE_ID: function(t) {
                    return o().some(E, (function(e) {
                        return e === t.connection
                    }))
                },
                LOBBY_VOICE_STATE_UPDATE: function(t) {
                    if (l.default.getId() !== t.userId) return !1;
                    if (t.sessionId !== g) return !1;
                    var e = E[t.lobbyId];
                    if (null != e && null == t.channelId) {
                        e.destroy();
                        delete E[t.lobbyId]
                    } else if (null != e) e.channelId = t.channelId;
                    else if (null != t.channelId) {
                        e = _(t.lobbyId, t.channelId);
                        E[t.lobbyId] = e
                    }
                },
                LOBBY_VOICE_SERVER_UPDATE: function(t) {
                    var e = E[t.lobbyId];
                    if (null == e) return !1;
                    e.connect(t.endpoint, t.token)
                },
                LOBBY_DELETE: w,
                LOBBY_DISCONNECT: w
            } : {})
        },
        3862: (t, e, n) => {
            n.d(e, {
                Z: () => _
            });
            var r = n(496486),
                o = n.n(r),
                i = n(202351),
                u = n(744564),
                c = n(75509);

            function a(t, e) {
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

            function p(t, e) {
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

            function d(t, e) {
                d = Object.setPrototypeOf || function(t, e) {
                    t.__proto__ = e;
                    return t
                };
                return d(t, e)
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
            var E = function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    e && d(t, e)
                }(n, t);
                var e = v(n);

                function n() {
                    a(this, n);
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
                r.__getLocalVars = function() {
                    return {
                        EMPTY_MAP: g,
                        lobbies: S,
                        currentUserId: O,
                        currentSessionId: h
                    }
                };
                return n
            }(i.ZP.Store);
            E.displayName = "LobbyVoiceStateStore";
            const _ = new E(u.Z, {
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
                            S[e][n] = new c.Z(t)
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
                        a = t.mute,
                        s = t.deaf,
                        y = t.selfMute,
                        d = t.selfDeaf,
                        b = o === O && r !== h,
                        v = null !== (e = S[i]) && void 0 !== e ? e : {},
                        g = v[o];
                    null == u || b || (n = null == g ? new c.Z({
                        userId: o,
                        sessionId: r,
                        channelId: u,
                        mute: a,
                        deaf: s,
                        selfMute: y,
                        selfDeaf: d
                    }) : g.merge({
                        userId: o,
                        sessionId: r,
                        channelId: u,
                        mute: a,
                        deaf: s,
                        selfMute: y,
                        selfDeaf: d
                    }));
                    if (g === n) return !1;
                    null == n ? delete(v = f({}, v))[o] : v = p(f({}, v), l({}, o, n));
                    S[i] = v
                },
                LOBBY_DELETE: I,
                LOBBY_DISCONNECT: I
            })
        },
        453007: (t, e, n) => {
            n.d(e, {
                Z: () => S
            });
            var r = n(202351),
                o = n(513328),
                i = n(744564),
                u = n(2590);

            function c(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function a(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n;
                return t
            }

            function l(t) {
                l = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                };
                return l(t)
            }

            function s(t, e) {
                return !e || "object" !== p(e) && "function" != typeof e ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : e
            }

            function f(t, e) {
                f = Object.setPrototypeOf || function(t, e) {
                    t.__proto__ = e;
                    return t
                };
                return f(t, e)
            }
            var p = function(t) {
                return t && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            };

            function y(t) {
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
                    var n, r = l(t);
                    if (e) {
                        var o = l(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return s(this, n)
                }
            }
            var d = {},
                b = {},
                v = 12e4;

            function O(t, e, n) {
                var r, c = n.applicationId,
                    a = null !== (r = d[c]) && void 0 !== r ? r : {};
                a[e] = t;
                d[c] = a;
                if (!__OVERLAY__ && t === u.OcF.FAILED) {
                    null != b[c] && b[c].stop();
                    var l = new o.V7;
                    l.start(v, (function() {
                        return i.Z.dispatch({
                            type: "ACTIVITY_LAUNCH_FAIL",
                            applicationId: c,
                            activityType: e
                        })
                    }));
                    b[c] = l
                }
            }

            function h(t) {
                return O(u.OcF.COMPLETE, u.mFx.JOIN, t)
            }
            var g = function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    e && f(t, e)
                }(n, t);
                var e = y(n);

                function n() {
                    c(this, n);
                    return e.apply(this, arguments)
                }
                var r = n.prototype;
                r.getState = function(t, e) {
                    var n = d[t];
                    return null == n ? void 0 : n[e]
                };
                r.getStates = function() {
                    return d
                };
                r.__getLocalVars = function() {
                    return {
                        states: d,
                        clearTimeouts: b,
                        CLEAR_LAUNCH_TIME: v
                    }
                };
                return n
            }(r.ZP.Store);
            g.displayName = "ActivityLauncherStore";
            const S = new g(i.Z, {
                OVERLAY_INITIALIZE: function(t) {
                    var e = t.activityLauncherStates;
                    d = function(t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var n = null != arguments[e] ? arguments[e] : {},
                                r = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                                return Object.getOwnPropertyDescriptor(n, t).enumerable
                            }))));
                            r.forEach((function(e) {
                                a(t, e, n[e])
                            }))
                        }
                        return t
                    }({}, e)
                },
                ACTIVITY_JOIN_LOADING: function(t) {
                    return O(u.OcF.LOADING, u.mFx.JOIN, t)
                },
                ACTIVITY_JOIN_FAILED: function(t) {
                    return O(u.OcF.FAILED, u.mFx.JOIN, t)
                },
                ACTIVITY_JOIN: h,
                EMBEDDED_ACTIVITY_CLOSE: h,
                ACTIVITY_LAUNCH_FAIL: function(t) {
                    var e = t.applicationId,
                        n = t.activityType,
                        r = d[e];
                    if (null == r || r[n] !== u.OcF.FAILED) return !1;
                    delete r[n]
                }
            })
        }
    }
]);
//# sourceMappingURL=3d81cf3e1b9e2adf51d5.js.map