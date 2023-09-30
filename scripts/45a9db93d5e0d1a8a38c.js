"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [73727], {
        811324: (t, n, e) => {
            e.d(n, {
                Z: () => o
            });
            var r = e(744564);

            function o() {
                r.Z.dispatch({
                    type: "ACTIVITY_SYNC_STOP"
                })
            }
        },
        597287: (t, n, e) => {
            e.d(n, {
                rC: () => v,
                hP: () => O,
                am: () => b,
                Ai: () => _,
                PW: () => P,
                hY: () => m,
                wO: () => S,
                k1: () => g,
                Tu: () => T
            });
            var r = e(281110),
                o = e(513328),
                i = e(744564),
                c = e(964283),
                u = e(120415),
                a = e(972725),
                l = e(966334),
                s = e(2590);

            function f(t, n, e) {
                n in t ? Object.defineProperty(t, n, {
                    value: e,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[n] = e;
                return t
            }

            function p(t) {
                for (var n = 1; n < arguments.length; n++) {
                    var e = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(e);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(e).filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))));
                    r.forEach((function(n) {
                        f(t, n, e[n])
                    }))
                }
                return t
            }

            function d(t, n) {
                n = null != n ? n : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : function(t, n) {
                    var e = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(t);
                        n && (r = r.filter((function(n) {
                            return Object.getOwnPropertyDescriptor(t, n).enumerable
                        })));
                        e.push.apply(e, r)
                    }
                    return e
                }(Object(n)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }));
                return t
            }
            var y = 5e3;

            function h(t, n, e, r) {
                var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1;
                r = d(p({}, r), {
                    headers: {
                        authorization: "Bearer ".concat(e)
                    }
                });
                return t(r).then((function(t) {
                    return 202 === t.status ? Promise.reject(t) : t
                })).catch((function(e) {
                    var c = !0 !== r.onlyRetryOnAuthorizationErrors && 202 === e.status;
                    return (401 === e.status || c) && i > 0 ? (202 === e.status ? (0, o.GR)(y) : Promise.resolve()).then((function() {
                        return O(n)
                    })).then((function(e) {
                        var o = e.body.access_token;
                        return h(t, n, o, r, i - 1)
                    })).then((function(t) {
                        return new Promise((function(n) {
                            return setImmediate((function() {
                                return n(t)
                            }))
                        }))
                    })) : Promise.reject(e)
                }))
            }
            var v = {
                get: h.bind(null, r.ZP.get),
                put: h.bind(null, r.ZP.put)
            };

            function O(t) {
                return r.ZP.get({
                    url: s.ANM.CONNECTION_ACCESS_TOKEN(s.ABu.SPOTIFY, t),
                    oldFormErrors: !0
                }).catch((function(n) {
                    if (401 === n.status) i.Z.dispatch({
                        type: "SPOTIFY_ACCOUNT_ACCESS_TOKEN_REVOKE",
                        accountId: t
                    });
                    else if (429 === n.status) {
                        var e = 1e3 * n.headers["retry-after"],
                            r = isNaN(e) || 0 === e ? 5e3 : e;
                        return (0, o.GR)(r).then((function() {
                            return O(t)
                        }))
                    }
                    return Promise.reject(n)
                })).then((function(n) {
                    var e = n.body.access_token;
                    i.Z.dispatch({
                        type: "SPOTIFY_ACCOUNT_ACCESS_TOKEN",
                        accountId: t,
                        accessToken: e
                    });
                    return n
                }))
            }

            function b(t, n, e) {
                var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 2;
                return v.put(t, n, {
                    url: l.C7.NOTIFICATIONS_PLAYER,
                    query: {
                        connection_id: e
                    }
                }).catch((function(i) {
                    return r <= 0 ? Promise.reject(i) : (0, o.GR)(y).then((function() {
                        return b(t, n, e, r - 1)
                    }))
                }))
            }

            function _(t, n) {
                return v.get(t, n, {
                    url: l.C7.PROFILE
                }).then((function(n) {
                    i.Z.dispatch({
                        type: "SPOTIFY_PROFILE_UPDATE",
                        accountId: t,
                        isPremium: "premium" === n.body.product
                    });
                    return n
                }))
            }

            function P(t, n) {
                return v.get(t, n, {
                    url: l.C7.PLAYER_DEVICES
                }).then((function(n) {
                    n.body && i.Z.dispatch({
                        type: "SPOTIFY_SET_DEVICES",
                        accountId: t,
                        devices: n.body.devices
                    });
                    return n
                }))
            }

            function m(t, n, e) {
                var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                    o = l.C7.PLAYER_OPEN(l.Hw.TRACK, e, !1),
                    c = r.deviceId,
                    u = r.position,
                    a = r.contextUri,
                    s = r.repeat;
                return v.put(t, n, {
                    url: l.C7.PLAYER_PLAY,
                    query: {
                        device_id: c
                    },
                    body: {
                        context_uri: null != a ? a : void 0,
                        uris: null == a ? [o] : void 0,
                        offset: null != a ? {
                            uri: o
                        } : void 0,
                        position_ms: null != u ? u : 0
                    }
                }).then((function(e) {
                    return null == s ? e : v.put(t, n, {
                        url: l.C7.PLAYER_REPEAT,
                        query: {
                            device_id: c,
                            state: s ? "context" : "off"
                        }
                    })
                })).then((function(t) {
                    i.Z.dispatch({
                        type: "SPOTIFY_PLAYER_PLAY",
                        id: e,
                        position: null != u ? u : 0
                    });
                    return t
                }))
            }

            function S(t, n) {
                return v.put(t, n, {
                    url: l.C7.PLAYER_PAUSE
                }).then((function(t) {
                    i.Z.dispatch({
                        type: "SPOTIFY_PLAYER_PAUSE"
                    });
                    return t
                }))
            }

            function g() {
                a.Z.isProtocolRegistered() || (0, u.nI)() && c.Z.isProtocolRegistered(l.M5).then((function(t) {
                    i.Z.dispatch({
                        type: "SPOTIFY_SET_PROTOCOL_REGISTERED",
                        isRegistered: t
                    })
                }))
            }

            function T(t, n) {
                i.Z.dispatch({
                    type: "SPOTIFY_SET_ACTIVE_DEVICE",
                    accountId: t,
                    deviceId: n
                })
            }
        },
        972725: (t, n, e) => {
            e.d(n, {
                Z: () => d
            });
            var r = e(202351),
                o = e(744564);

            function i(t, n) {
                if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
            }

            function c(t) {
                c = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                };
                return c(t)
            }

            function u(t, n) {
                return !n || "object" !== l(n) && "function" != typeof n ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : n
            }

            function a(t, n) {
                a = Object.setPrototypeOf || function(t, n) {
                    t.__proto__ = n;
                    return t
                };
                return a(t, n)
            }
            var l = function(t) {
                return t && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            };

            function s(t) {
                var n = function() {
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
                    var e, r = c(t);
                    if (n) {
                        var o = c(this).constructor;
                        e = Reflect.construct(r, arguments, o)
                    } else e = r.apply(this, arguments);
                    return u(this, e)
                }
            }
            var f = !1;
            var p = function(t) {
                ! function(t, n) {
                    if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(n && n.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    n && a(t, n)
                }(e, t);
                var n = s(e);

                function e() {
                    i(this, e);
                    return n.apply(this, arguments)
                }
                e.prototype.isProtocolRegistered = function() {
                    return f
                };
                return e
            }(r.ZP.Store);
            p.displayName = "SpotifyProtocolStore";
            const d = new p(o.Z, {
                SPOTIFY_SET_PROTOCOL_REGISTERED: function(t) {
                    var n = t.isRegistered;
                    f = n
                }
            })
        },
        73727: (t, n, e) => {
            e.d(n, {
                Z: () => mt
            });
            var r = e(496486),
                o = e.n(r),
                i = e(575494),
                c = e(202351),
                u = e(199731),
                a = e(513328),
                l = e(744564),
                s = e(473664),
                f = e(265688),
                p = e(811324),
                d = e(296602),
                y = e(664625),
                h = e(629223),
                v = e(595970),
                O = e(491260),
                b = e(671723),
                _ = e(377128),
                P = e(407561),
                m = e(652591),
                S = e(3564),
                g = e(597287),
                T = e(966334),
                I = e(2590);

            function E(t, n) {
                if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
            }

            function A(t, n) {
                for (var e = 0; e < n.length; e++) {
                    var r = n[e];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(t, r.key, r)
                }
            }

            function w(t, n, e) {
                n in t ? Object.defineProperty(t, n, {
                    value: e,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[n] = e;
                return t
            }

            function C(t) {
                C = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                };
                return C(t)
            }

            function k(t, n) {
                n = null != n ? n : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : function(t, n) {
                    var e = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(t);
                        n && (r = r.filter((function(n) {
                            return Object.getOwnPropertyDescriptor(t, n).enumerable
                        })));
                        e.push.apply(e, r)
                    }
                    return e
                }(Object(n)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }));
                return t
            }

            function j(t, n) {
                return !n || "object" !== R(n) && "function" != typeof n ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : n
            }

            function N(t, n) {
                N = Object.setPrototypeOf || function(t, n) {
                    t.__proto__ = n;
                    return t
                };
                return N(t, n)
            }
            var R = function(t) {
                return t && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            };

            function D(t) {
                var n = function() {
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
                    var e, r = C(t);
                    if (n) {
                        var o = C(this).constructor;
                        e = Reflect.construct(r, arguments, o)
                    } else e = r.apply(this, arguments);
                    return j(this, e)
                }
            }
            var Y, L = f.Z.get(I.ABu.SPOTIFY),
                Z = "hm://pusher/v1/connections/",
                x = 3e4,
                F = 5e3;
            ! function(t) {
                t.PLAYER_STATE_CHANGED = "PLAYER_STATE_CHANGED";
                t.DEVICE_STATE_CHANGED = "DEVICE_STATE_CHANGED"
            }(Y || (Y = {}));
            var U, B, V, G = "message",
                W = "ping",
                H = "single",
                M = new d.Z("Spotify"),
                z = new a.V7,
                q = new a.V7,
                K = new a.V7,
                X = new a.V7,
                J = new a.V7,
                $ = {},
                Q = {},
                tt = {},
                nt = !1,
                et = null;

            function rt() {
                for (var t in $) {
                    var n = $[t];
                    if (n.connected && null != Q[t]) {
                        var e = Q[t].find((function(t) {
                            return t.is_active
                        }));
                        if (null != e) return {
                            socket: n,
                            device: e
                        }
                    }
                }
            }

            function ot(t, n) {
                var e = Date.now(),
                    r = null != t ? t.startTime : 0,
                    o = e - n;
                return Math.abs(o - r) > 1500 ? o : r
            }

            function it(t) {
                l.Z.dispatch({
                    type: "SPOTIFY_PLAYER_STATE",
                    accountId: t,
                    track: null,
                    volumePercent: 0,
                    isPlaying: !1,
                    repeat: !1,
                    position: 0,
                    context: null
                })
            }

            function ct(t) {
                return O.Z.findActivity(t, (function(t) {
                    return null != t.party && null != t.party.id && (0, T.Ps)(t.party.id)
                }))
            }
            var ut = new Set([WebSocket.CONNECTING, WebSocket.OPEN]),
                at = function() {
                    function t(n, e) {
                        var r = this;
                        E(this, t);
                        this._requestedDisconnect = !1;
                        this._requestedConnect = !1;
                        this.handleDeviceStateChange = o().throttle((function() {
                            (0, g.PW)(r.accountId, r.accessToken);
                            bt(r.accountId, r.accessToken)
                        }), 3e3);
                        this.accountId = n;
                        this.accessToken = e;
                        this.pingInterval = new a.Xp;
                        this.backoff = new i.Z(void 0, 6e4);
                        this.connect()
                    }
                    var n = t.prototype;
                    n.connect = function() {
                        var t = this;
                        if (!this.connected && !this._requestedConnect) {
                            M.info("WS Connecting");
                            this._requestedDisconnect = !1;
                            this._requestedConnect = !0;
                            bt(this.accountId, this.accessToken).then((function() {
                                t._requestedConnect = !1;
                                t.socket = new WebSocket("".concat("wss://dealer.spotify.com/?access_token=").concat(t.accessToken));
                                t.socket.onopen = t.handleOpen.bind(t);
                                t.socket.onmessage = t.handleMessage.bind(t);
                                t.socket.onclose = t.socket.onerror = t.handleClose.bind(t)
                            })).catch((function(n) {
                                M.error(n);
                                t._requestedConnect = !1;
                                t.handleClose()
                            }))
                        }
                    };
                    n.disconnect = function() {
                        this._requestedDisconnect = !0;
                        this.backoff.cancel();
                        try {
                            var t;
                            null === (t = this.socket) || void 0 === t || t.close()
                        } catch (t) {}
                    };
                    n.ping = function() {
                        var t;
                        this.connected && (null === (t = this.socket) || void 0 === t || t.send(JSON.stringify({
                            type: W
                        })))
                    };
                    n.handleOpen = function() {
                        var t = this;
                        M.info("WS Connected");
                        this.backoff.succeed();
                        this.pingInterval.start(3e4, (function() {
                            return t.ping()
                        }));
                        (0, g.Ai)(this.accountId, this.accessToken);
                        (0, g.PW)(this.accountId, this.accessToken)
                    };
                    n.handleMessage = function(t) {
                        var n = t.data;
                        if ("string" == typeof n) {
                            var e = JSON.parse(n),
                                r = e.type,
                                o = e.uri,
                                i = e.payloads;
                            if (r === G)
                                if ("string" == typeof o && o.startsWith(Z)) {
                                    this.connectionId = decodeURIComponent(o.split(Z)[1]);
                                    (0, g.am)(this.accountId, this.accessToken, this.connectionId)
                                } else if (Array.isArray(i)) {
                                var c = !0,
                                    u = !1,
                                    a = void 0;
                                try {
                                    for (var l, s = i[Symbol.iterator](); !(c = (l = s.next()).done); c = !0) {
                                        var f = l.value.events;
                                        if (null != f) {
                                            var p = !0,
                                                d = !1,
                                                y = void 0;
                                            try {
                                                for (var h, v = f[Symbol.iterator](); !(p = (h = v.next()).done); p = !0) {
                                                    var O = h.value;
                                                    this.handleEvent(O)
                                                }
                                            } catch (t) {
                                                d = !0;
                                                y = t
                                            } finally {
                                                try {
                                                    p || null == v.return || v.return()
                                                } finally {
                                                    if (d) throw y
                                                }
                                            }
                                        }
                                    }
                                } catch (t) {
                                    u = !0;
                                    a = t
                                } finally {
                                    try {
                                        c || null == s.return || s.return()
                                    } finally {
                                        if (u) throw a
                                    }
                                }
                            }
                        }
                    };
                    n.handleClose = function() {
                        var t = this;
                        this.pingInterval.stop();
                        if (!this._requestedDisconnect) try {
                            var n = this.backoff.fail((function() {
                                t._requestedDisconnect || t.connect()
                            }));
                            M.info("WS Disconnected. Next retry in ".concat(Math.round(n), "ms"))
                        } catch (t) {}
                    };
                    n.handleEvent = function(t) {
                        var n = t.type,
                            e = t.event;
                        switch (n) {
                            case Y.PLAYER_STATE_CHANGED:
                                null != e && null != e.state && Ot(this.accountId, this.accessToken, e.state);
                                break;
                            case Y.DEVICE_STATE_CHANGED:
                                this.handleDeviceStateChange()
                        }
                    };
                    ! function(t, n, e) {
                        n && A(t.prototype, n);
                        e && A(t, e)
                    }(t, [{
                        key: "connected",
                        get: function() {
                            return null != this.socket && ut.has(this.socket.readyState)
                        }
                    }]);
                    return t
                }();

            function lt(t, n) {
                if (t in $) {
                    $[t].accessToken = n;
                    M.info("Updated account access token: ".concat(t))
                } else {
                    $[t] = new at(t, n);
                    M.info("Added account: ".concat(t))
                }
            }

            function st(t) {
                if (t in $) {
                    $[t].disconnect();
                    delete $[t];
                    var n = tt[t];
                    null != n && null != U && n.track.id === U.track.id && (U = null);
                    delete tt[t];
                    M.info("Removed account: ".concat(t))
                }
            }

            function ft(t, n) {
                var e = !0,
                    r = !1,
                    o = void 0;
                try {
                    for (var i, c = Q[t][Symbol.iterator](); !(e = (i = c.next()).done); e = !0) {
                        var u = i.value;
                        u.is_active = u.id === n
                    }
                } catch (t) {
                    r = !0;
                    o = t
                } finally {
                    try {
                        e || null == c.return || c.return()
                    } finally {
                        if (r) throw o
                    }
                }
            }

            function pt(t, n, e) {
                var r = rt();
                if (null == r) return !1;
                var o = r.socket,
                    i = r.device,
                    c = n.sync_id,
                    u = n.party,
                    a = n.timestamps;
                if (null == c || null == u || null == u.id || !(0, T.Ps)(u.id)) return !1;
                var l = null != a && null != a.start ? a.start : Date.now(),
                    s = Math.max(0, Date.now() - l),
                    f = !1,
                    p = tt[o.accountId];
                null != p && !1 === p.repeat && (f = null);
                (0, g.hY)(o.accountId, o.accessToken, c, {
                    position: +s,
                    deviceId: i.id,
                    repeat: f
                });
                B = {
                    userId: t,
                    partyId: u.id,
                    trackId: c,
                    startTime: l
                };
                var d = "presence change";
                if (e) {
                    d = "started";
                    m.default.track(I.rMx.SPOTIFY_LISTEN_ALONG_STARTED, {
                        party_id: u.id,
                        other_user_id: t
                    })
                }
                M.info("Listen along ".concat(d, ": ").concat(o.accountId, " to ").concat(t, " playing ").concat(c, " on ").concat(i.name))
            }

            function dt() {
                m.default.track(I.rMx.SPOTIFY_LISTEN_ALONG_ENDED, {
                    party_id: null != B ? B.partyId : null,
                    other_user_id: null != B ? B.userId : null
                });
                var t = null != B ? B.trackId : null;
                B = null;
                M.info("Listen along stopped");
                var n = rt();
                if (null != n) {
                    var e = n.socket,
                        r = tt[e.accountId];
                    null != r && r.track.id === t && (0, g.wO)(e.accountId, e.accessToken)
                }
            }

            function yt() {
                var t = Object.keys($),
                    n = h.Z.getAccounts().filter((function(t) {
                        return t.type === I.ABu.SPOTIFY
                    }));
                if (null == n) return !1;
                var e = n.map((function(t) {
                        return t.id
                    })),
                    r = !0,
                    o = !1,
                    i = void 0;
                try {
                    for (var c, u = t[Symbol.iterator](); !(r = (c = u.next()).done); r = !0) {
                        var a = c.value;
                        e.includes(a) || st(a)
                    }
                } catch (t) {
                    o = !0;
                    i = t
                } finally {
                    try {
                        r || null == u.return || u.return()
                    } finally {
                        if (o) throw i
                    }
                }
                var l = !1,
                    s = !0,
                    f = !1,
                    p = void 0;
                try {
                    for (var d, y = n[Symbol.iterator](); !(s = (d = y.next()).done); s = !0) {
                        var v = d.value;
                        if (null != U && U.account.id === v.id) {
                            U.account = v;
                            l = !0
                        }
                        t.includes(v.id) || (null == v.accessToken ? (0, g.hP)(v.id) : lt(v.id, v.accessToken))
                    }
                } catch (t) {
                    f = !0;
                    p = t
                } finally {
                    try {
                        s || null == y.return || y.return()
                    } finally {
                        if (f) throw p
                    }
                }
                return l
            }

            function ht() {
                if (null != U) {
                    var t = rt();
                    if (null != t) {
                        var n = t.socket;
                        nt = !0;
                        (0, g.wO)(n.accountId, n.accessToken);
                        m.default.track(I.rMx.SPOTIFY_AUTO_PAUSED);
                        M.info("Playback auto paused")
                    }
                }
            }

            function vt(t) {
                if (t === y.default.getId()) {
                    var n = P.Z.isCurrentClientInVoiceChannel(),
                        e = (0, s.O)({
                            userId: t,
                            checkSoundSharing: !0,
                            checkSoundboardSounds: !1
                        });
                    if (n && e && null != U) {
                        z.start(x, ht, !1);
                        q.stop()
                    } else q.start(100, (function() {
                        return z.stop()
                    }), !1)
                }
                return !1
            }

            function Ot(t, n, e) {
                var r, o, i = e.device,
                    c = e.progress_ms,
                    u = e.is_playing,
                    a = e.repeat_state,
                    s = e.item,
                    f = e.context;
                if (null != s && s.type === T.Hw.TRACK) {
                    var p = s.id;
                    null != s.linked_from && null != s.linked_from.id && (p = s.linked_from.id);
                    r = {
                        id: p,
                        name: s.name,
                        duration: s.duration_ms,
                        album: {
                            id: s.album.id,
                            name: s.album.name,
                            image: s.album.images[0]
                        },
                        artists: s.artists,
                        isLocal: s.is_local || !1
                    }
                }
                null != i && !0 !== i.is_active && (i = k(function(t) {
                    for (var n = 1; n < arguments.length; n++) {
                        var e = null != arguments[n] ? arguments[n] : {},
                            r = Object.keys(e);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(e).filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))));
                        r.forEach((function(n) {
                            w(t, n, e[n])
                        }))
                    }
                    return t
                }({}, i), {
                    is_active: !0
                }));
                if (null != f && [T.Hw.PLAYLIST, T.Hw.ALBUM].includes(f.type)) {
                    var d = Pt.getPlayerState(t);
                    o = null != d && null != d.context && d.context.uri === f.uri ? Promise.resolve(d.context) : f.type === T.Hw.ALBUM ? Promise.resolve(f) : g.rC.get(t, n, {
                        url: f.href
                    }).then((function(t) {
                        return t.body
                    })).catch((function(t) {
                        if (t && 404 === t.status) return null;
                        throw t
                    }))
                } else o = Promise.resolve(void 0);
                return o.then((function(n) {
                    null == n || n.type !== T.Hw.PLAYLIST || n.public || (n = null);
                    l.Z.dispatch({
                        type: "SPOTIFY_PLAYER_STATE",
                        accountId: t,
                        track: r,
                        volumePercent: null != i ? i.volume_percent : 0,
                        isPlaying: u,
                        repeat: "off" !== a,
                        position: c,
                        context: n,
                        device: i
                    })
                }))
            }

            function bt(t, n) {
                return g.rC.get(t, n, {
                    url: T.C7.PLAYER,
                    onlyRetryOnAuthorizationErrors: !0
                }).then((function(e) {
                    var r = e.body;
                    null != r ? Ot(t, n, r).then((function() {
                        return e
                    })) : it(t)
                })).catch((function() {
                    return it(t)
                }))
            }
            var _t = function(t) {
                ! function(t, n) {
                    if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(n && n.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    n && N(t, n)
                }(e, t);
                var n = D(e);

                function e() {
                    E(this, e);
                    return n.apply(this, arguments)
                }
                var r = e.prototype;
                r.initialize = function() {
                    this.waitFor(h.Z, _.Z);
                    this.syncWith([O.Z], (function() {
                        return function() {
                            if (null == B) return !1;
                            if (null == rt()) return !1;
                            var t = B.userId,
                                n = ct(t);
                            if (null == n) {
                                K.start(3e5, (function() {
                                    null != B && B.userId === t && (0, p.Z)()
                                }));
                                return !1
                            }
                            K.stop();
                            var e = n.sync_id,
                                r = n.timestamps,
                                o = n.party,
                                i = null != e && B.trackId !== e,
                                c = null != r && B.startTime !== r.start;
                            if (i || c) return pt(t, n, !1);
                            if (null != o && o.id !== B.partyId) {
                                B.partyId = o.id;
                                return !0
                            }
                            return !1
                        }()
                    }));
                    (0,
                        g.k1)()
                };
                r.hasConnectedAccount = function() {
                    return Object.keys($).length > 0
                };
                r.getActiveSocketAndDevice = function() {
                    return rt()
                };
                r.getPlayableComputerDevices = function() {
                    var t = [];
                    for (var n in $) {
                        var e = $[n];
                        if (e.connected && null != Q[n]) {
                            var r = Q[n].find((function(t) {
                                return !t.is_restricted && "Computer" === t.type
                            }));
                            null != r && t.push({
                                socket: e,
                                device: r
                            })
                        }
                    }
                    return t
                };
                r.canPlay = function(t) {
                    var n = t.sync_id,
                        e = t.party;
                    return null != rt() && null != n && null != e && null != e.id && (0, T.Ps)(e.id)
                };
                r.getSyncingWith = function() {
                    return B
                };
                r.wasAutoPaused = function() {
                    return nt
                };
                r.getLastPlayedTrackId = function() {
                    return V
                };
                r.getTrack = function() {
                    return null != U ? U.track : null
                };
                r.getPlayerState = function(t) {
                    return tt[t]
                };
                r.shouldShowActivity = function() {
                    return null != U && U.account.showActivity && !v.Z.isIdle()
                };
                r.getActivity = function() {
                    if (null == U) return null != B ? ct(B.userId) : null;
                    var t, n = U.track,
                        e = n.artists,
                        r = n.album,
                        o = n.name,
                        i = n.id,
                        c = n.duration,
                        u = n.isLocal,
                        a = U.startTime,
                        l = U.context,
                        s = e.slice(0, 5);
                    e.length > 0 && (t = s.map((function(t) {
                        return t.name.replace(/;/g, "")
                    })).join("; "));
                    var f, p, d = {},
                        h = null != r.image ? (0, S.f)(I.ABu.SPOTIFY, r.image.url) : null;
                    null != r.image && null != h && (d.large_image = h);
                    r.type !== H && (d.large_text = r.name);
                    null != l && (f = l.uri);
                    p = null != B && null != B.partyId ? B.partyId : "".concat(T.lS).concat(y.default.getId());
                    var v = o.length > 128 ? o.substring(0, 125) + "..." : o,
                        O = {
                            name: L.name,
                            assets: d,
                            details: v,
                            state: t,
                            timestamps: {
                                start: a,
                                end: a + c
                            },
                            party: {
                                id: p
                            }
                        };
                    if (!u) {
                        O.sync_id = i;
                        O.flags = I.xjy.PLAY | I.xjy.SYNC;
                        O.metadata = {
                            context_uri: f,
                            album_id: r.id,
                            artist_ids: s.map((function(t) {
                                return t.id
                            }))
                        }
                    }
                    return O
                };
                return e
            }(c.ZP.Store);
            _t.displayName = "SpotifyStore";
            var Pt = new _t(l.Z, {
                USER_CONNECTIONS_UPDATE: yt,
                CONNECTION_OPEN: yt,
                SPOTIFY_ACCOUNT_ACCESS_TOKEN: function(t) {
                    lt(t.accountId, t.accessToken);
                    return !1
                },
                SPOTIFY_ACCOUNT_ACCESS_TOKEN_REVOKE: function(t) {
                    st(t.accountId)
                },
                SPOTIFY_PROFILE_UPDATE: function(t) {
                    var n = t.accountId,
                        e = t.isPremium,
                        r = $[n];
                    if (null == r) return !1;
                    r.isPremium = e;
                    M.info("Profile updated for ".concat(n, ": isPremium = ").concat(e))
                },
                SPOTIFY_PLAYER_STATE: function(t) {
                    var n = t.accountId,
                        e = t.isPlaying,
                        r = t.repeat,
                        i = t.track,
                        c = t.position,
                        a = t.device,
                        l = t.context,
                        s = !1;
                    if (null != a)
                        if (null != Q[n]) {
                            var f = Q[n].find((function(t) {
                                return t.id === a.id
                            }));
                            if (null == f) {
                                Q[n].push(a);
                                s = !0
                            } else if (!(0, u.Z)(f, a)) {
                                Object.assign(f, a);
                                s = !0
                            }
                            ft(n, a.id)
                        } else {
                            Q[n] = [a];
                            s = !0
                        } if (e) null == et || et.start(x, ht);
                    else {
                        i = null;
                        null == et || et.stop()
                    }
                    var d = h.Z.getAccount(n, I.ABu.SPOTIFY);
                    if (null == d) return s;
                    var v = tt[n],
                        O = null != i ? {
                            account: d,
                            track: i,
                            startTime: ot(v, c),
                            context: l,
                            repeat: r
                        } : null,
                        b = null != a && null != B && 0 === c && !e;
                    b || (tt[n] = O);
                    var _ = U;
                    U = o().values(tt).find((function(t) {
                        return null != t
                    }));
                    vt(y.default.getId());
                    null == i || b ? X.stop() : X.start(i.duration - c + F, (function() {
                        return it(d.id)
                    }));
                    if (null != B && (!e && c > 0 || null == a || null != O && B.trackId !== O.track.id)) {
                        M.info("Listen along active but playback stopped or track changed. Stopping listen along in ".concat(F, "ms"));
                        J.start(F, (function() {
                            M.info("Stopping listening along");
                            (0, p.Z)();
                            it(d.id)
                        }))
                    } else if (J.isStarted()) {
                        M.info("Listen along stop cancelled as playback of track resumed");
                        J.stop()
                    }
                    if (_ === U || null == v && null == O) return s;
                    if (null != v && null != O && v.track.id === O.track.id && v.startTime === O.startTime) return s;
                    null != i && m.default.track(I.rMx.ACTIVITY_UPDATED, {
                        party_platform: I.ABu.SPOTIFY,
                        track_id: i.id,
                        has_images: !0
                    })
                },
                SPOTIFY_PLAYER_PLAY: function(t) {
                    var n = t.id;
                    V = n
                },
                ACTIVITY_PLAY: function(t) {
                    var n = t.activity,
                        e = t.metadata,
                        r = rt();
                    if (null == r) return !1;
                    var o, i = r.socket,
                        c = r.device,
                        u = n.sync_id,
                        a = n.party;
                    if (null == u || null == a || null == a.id || !(0, T.Ps)(a.id)) return !1;
                    null != e && (o = e.context_uri);
                    null != B && dt();
                    (0, g.hY)(i.accountId, i.accessToken, u, {
                        contextUri: o,
                        deviceId: c.id
                    });
                    M.info("Play started: ".concat(i.accountId, " playing ").concat(u, " on ").concat(c.name))
                },
                ACTIVITY_SYNC: function(t) {
                    var n = t.activity;
                    return pt(t.userId, n, !0)
                },
                ACTIVITY_SYNC_STOP: dt,
                SPOTIFY_SET_DEVICES: function(t) {
                    var n = t.accountId,
                        e = t.devices;
                    Q[n] = e;
                    M.info("Devices updated for ".concat(n, ":"), e)
                },
                SPOTIFY_SET_ACTIVE_DEVICE: function(t) {
                    ft(t.accountId, t.deviceId)
                },
                SPEAKING: function(t) {
                    return vt(t.userId)
                },
                VOICE_STATE_UPDATES: function(t) {
                    return t.voiceStates.reduce((function(t, n) {
                        return vt(n.userId) || t
                    }), !1)
                },
                MEDIA_ENGINE_SET_GO_LIVE_SOURCE: function(t) {
                    var n = t.settings;
                    if (null != (null == n ? void 0 : n.desktopSettings)) {
                        null == et || et.stop();
                        var e = null == n ? void 0 : n.desktopSettings,
                            r = e.sourceId,
                            o = e.sound;
                        null != r && b.ZP.getObservedAppNameForWindow(r) === L.name && o ? (et = new a.Xp).start(x, ht) : et = null
                    }
                }
            });
            const mt = Pt
        },
        629223: (t, n, e) => {
            e.d(n, {
                Z: () => R
            });
            var r = e(202351),
                o = e(744564),
                i = e(579344),
                c = e(265688),
                u = e(169376);

            function a(t) {
                a = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                };
                return a(t)
            }

            function l(t, n) {
                return !n || "object" !== f(n) && "function" != typeof n ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : n
            }

            function s(t, n) {
                s = Object.setPrototypeOf || function(t, n) {
                    t.__proto__ = n;
                    return t
                };
                return s(t, n)
            }
            var f = function(t) {
                return t && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            };

            function p(t) {
                var n = function() {
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
                    var e, r = a(t);
                    if (n) {
                        var o = a(this).constructor;
                        e = Reflect.construct(r, arguments, o)
                    } else e = r.apply(this, arguments);
                    return l(this, e)
                }
            }
            var d = function(t) {
                    ! function(t, n) {
                        if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                        t.prototype = Object.create(n && n.prototype, {
                            constructor: {
                                value: t,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        n && s(t, n)
                    }(e, t);
                    var n = p(e);

                    function e(t) {
                        ! function(t, n) {
                            if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
                        }(this, e);
                        var r;
                        (r = n.call(this)).id = t.id;
                        r.type = t.type;
                        r.name = t.name;
                        r.revoked = t.revoked || !1;
                        r.integrations = t.integrations || [];
                        r.visibility = t.visibility || 0;
                        r.friendSync = t.friend_sync || !1;
                        r.showActivity = t.show_activity || !1;
                        r.verified = t.verified || !1;
                        r.accessToken = t.access_token || null;
                        r.twoWayLink = t.two_way_link || !1;
                        r.metadata = t.metadata || null;
                        r.metadataVisibility = t.metadata_visibility || 0;
                        return r
                    }
                    e.prototype.toString = function() {
                        return this.name
                    };
                    return e
                }(u.Z),
                y = e(848285),
                h = e(2590);

            function v(t, n) {
                if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
            }

            function O(t, n, e) {
                n in t ? Object.defineProperty(t, n, {
                    value: e,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[n] = e;
                return t
            }

            function b(t) {
                b = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                };
                return b(t)
            }

            function _(t) {
                for (var n = 1; n < arguments.length; n++) {
                    var e = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(e);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(e).filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))));
                    r.forEach((function(n) {
                        O(t, n, e[n])
                    }))
                }
                return t
            }

            function P(t, n) {
                n = null != n ? n : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : function(t, n) {
                    var e = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(t);
                        n && (r = r.filter((function(n) {
                            return Object.getOwnPropertyDescriptor(t, n).enumerable
                        })));
                        e.push.apply(e, r)
                    }
                    return e
                }(Object(n)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }));
                return t
            }

            function m(t, n) {
                return !n || "object" !== g(n) && "function" != typeof n ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : n
            }

            function S(t, n) {
                S = Object.setPrototypeOf || function(t, n) {
                    t.__proto__ = n;
                    return t
                };
                return S(t, n)
            }
            var g = function(t) {
                return t && "undefined" != typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
            };

            function T(t) {
                var n = function() {
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
                    var e, r = b(t);
                    if (n) {
                        var o = b(this).constructor;
                        e = Reflect.construct(r, arguments, o)
                    } else e = r.apply(this, arguments);
                    return m(this, e)
                }
            }
            var I = new Set([h.ABu.CONTACTS]),
                E = !0,
                A = [],
                w = [],
                C = {},
                k = {},
                j = function(t) {
                    A = t.filter((function(t) {
                        return !I.has(t.type) && c.Z.isSupported(t.type)
                    }));
                    w = t.filter((function(t) {
                        return I.has(t.type)
                    }));
                    E = !1
                };
            var N = function(t) {
                ! function(t, n) {
                    if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(n && n.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    n && S(t, n)
                }(e, t);
                var n = T(e);

                function e() {
                    v(this, e);
                    return n.apply(this, arguments)
                }
                var r = e.prototype;
                r.isJoining = function(t) {
                    return C[t] || !1
                };
                r.isFetching = function() {
                    return E
                };
                r.getAccounts = function() {
                    return A
                };
                r.getLocalAccounts = function() {
                    return w
                };
                r.getAccount = function(t, n) {
                    return A.find((function(e) {
                        return (null == t || e.id === t) && e.type === n
                    }))
                };
                r.getLocalAccount = function(t) {
                    return w.find((function(n) {
                        return n.type === t
                    }))
                };
                r.isSuggestedAccountType = function(t) {
                    return k[t] || !1
                };
                return e
            }(r.ZP.Store);
            N.displayName = "ConnectedAccountsStore";
            const R = new N(o.Z, {
                CONNECTION_OPEN: function(t) {
                    var n = t.connectedAccounts.map((function(t) {
                        return new d(t)
                    }));
                    j(n)
                },
                USER_CONNECTIONS_UPDATE: function(t) {
                    if (t.local && null != t.accounts) {
                        var n = t.accounts.map((function(t) {
                            return new d(P(_({}, t), {
                                integrations: t.integrations.map((function(t) {
                                    return P(_({}, t), {
                                        guild: new y.Z(t.guild)
                                    })
                                }))
                            }))
                        }));
                        j(n)
                    } else i.Z.fetch()
                },
                USER_CONNECTIONS_INTEGRATION_JOINING: function(t) {
                    C[t.integrationId] = t.joining
                },
                USER_CONNECTION_UPDATE: function(t) {
                    var n = t.platformType,
                        e = t.id,
                        r = t.revoked,
                        o = t.accessToken,
                        i = A.find((function(t) {
                            return t.id === e && t.type === n
                        }));
                    if (null == i) return !1;
                    null != r && (i.revoked = r);
                    null != o && (i.accessToken = o)
                }
            })
        },
        3564: (t, n, e) => {
            e.d(n, {
                f: () => w,
                xF: () => C,
                hR: () => L
            });
            var r = e(441143),
                o = e.n(r),
                i = e(496486),
                c = e.n(i),
                u = e(281110),
                a = e(744564),
                l = e(296602),
                s = e(874049),
                f = e(2590);

            function p(t, n) {
                (null == n || n > t.length) && (n = t.length);
                for (var e = 0, r = new Array(n); e < n; e++) r[e] = t[e];
                return r
            }

            function d(t, n, e, r, o, i, c) {
                try {
                    var u = t[i](c),
                        a = u.value
                } catch (t) {
                    e(t);
                    return
                }
                u.done ? n(a) : Promise.resolve(a).then(r, o)
            }

            function y(t) {
                return function() {
                    var n = this,
                        e = arguments;
                    return new Promise((function(r, o) {
                        var i = t.apply(n, e);

                        function c(t) {
                            d(i, r, o, c, u, "next", t)
                        }

                        function u(t) {
                            d(i, r, o, c, u, "throw", t)
                        }
                        c(void 0)
                    }))
                }
            }

            function h(t, n, e) {
                n in t ? Object.defineProperty(t, n, {
                    value: e,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[n] = e;
                return t
            }

            function v(t, n) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, n) {
                    var e = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != e) {
                        var r, o, i = [],
                            c = !0,
                            u = !1;
                        try {
                            for (e = e.call(t); !(c = (r = e.next()).done); c = !0) {
                                i.push(r.value);
                                if (n && i.length === n) break
                            }
                        } catch (t) {
                            u = !0;
                            o = t
                        } finally {
                            try {
                                c || null == e.return || e.return()
                            } finally {
                                if (u) throw o
                            }
                        }
                        return i
                    }
                }(t, n) || function(t, n) {
                    if (!t) return;
                    if ("string" == typeof t) return p(t, n);
                    var e = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === e && t.constructor && (e = t.constructor.name);
                    if ("Map" === e || "Set" === e) return Array.from(e);
                    if ("Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return p(t, n)
                }(t, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var O, b = function(t, n) {
                    var e, r, o, i, c = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                            next: u(0),
                            throw: u(1),
                            return: u(2)
                        },
                        "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                            return this
                        }), i;

                    function u(i) {
                        return function(u) {
                            return function(i) {
                                if (e) throw new TypeError("Generator is already executing.");
                                for (; c;) try {
                                    if (e = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                    (r = 0, o) && (i = [2 & i[0], o.value]);
                                    switch (i[0]) {
                                        case 0:
                                        case 1:
                                            o = i;
                                            break;
                                        case 4:
                                            c.label++;
                                            return {
                                                value: i[1], done: !1
                                            };
                                        case 5:
                                            c.label++;
                                            r = i[1];
                                            i = [0];
                                            continue;
                                        case 7:
                                            i = c.ops.pop();
                                            c.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = c.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                c = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                c.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && c.label < o[1]) {
                                                c.label = o[1];
                                                o = i;
                                                break
                                            }
                                            if (o && c.label < o[2]) {
                                                c.label = o[2];
                                                c.ops.push(i);
                                                break
                                            }
                                            o[2] && c.ops.pop();
                                            c.trys.pop();
                                            continue
                                    }
                                    i = n.call(t, c)
                                } catch (t) {
                                    i = [6, t];
                                    r = 0
                                } finally {
                                    e = o = 0
                                }
                                if (5 & i[0]) throw i[1];
                                return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0
                                }
                            }([i, u])
                        }
                    }
                },
                _ = "https://i.scdn.co/image/",
                P = /https:\/\/static-cdn\.jtvnw\.net\/previews-ttv\/live_user_(.+)-\{width\}x\{height\}.jpg/,
                m = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/hqdefault_live\.jpg/,
                S = (h(O = {}, f.ABu.SPOTIFY, {
                    deserialize: function(t) {
                        return "".concat(_).concat(encodeURIComponent(t))
                    },
                    serialize: function(t) {
                        return t.split(_)[1]
                    }
                }), h(O, f.ABu.TWITCH, {
                    deserialize: function(t, n) {
                        return e = encodeURIComponent(t), r = n[0], o = n[1], "https://static-cdn.jtvnw.net/previews-ttv/live_user_".concat(e, "-").concat(r, "x").concat(o, ".jpg");
                        var e, r, o
                    },
                    serialize: function(t) {
                        var n = t.match(P);
                        return null != n ? n[1] : null
                    }
                }), h(O, f.ABu.YOUTUBE, {
                    deserialize: function(t) {
                        return function(t) {
                            return "https://i.ytimg.com/vi/".concat(t, "/hqdefault_live.jpg")
                        }(encodeURIComponent(t))
                    },
                    serialize: function(t) {
                        var n = t.match(m);
                        return null != n ? n[1] : null
                    }
                }), h(O, "mp", {
                    deserialize: function(t) {
                        o()(null != window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT, "MEDIA_PROXY_ENDPOINT not configured");
                        return new URL(t, location.protocol + window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT).toString()
                    },
                    serialize: function(t) {
                        return t
                    }
                }), O),
                g = {},
                T = {};

            function I(t) {
                return E.apply(this, arguments)
            }

            function E() {
                return (E = y((function(t) {
                    var n, e;
                    return b(this, (function(r) {
                        switch (r.label) {
                            case 0:
                                return [4, u.ZP.get({
                                    url: f.ANM.APPLICATION_ASSETS(t),
                                    oldFormErrors: !0
                                })];
                            case 1:
                                n = r.sent(), e = n.body;
                                return [2, g[t] = {
                                    assets: c().keyBy(e, "name"),
                                    lastUpdated: Date.now()
                                }]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function A(t) {
                var n, e = g[t];
                return null == e || (n = e.lastUpdated, Date.now() - n > 36e5) ? I(t) : Promise.resolve(e)
            }

            function w(t, n) {
                var e = S[t].serialize(n);
                return e ? "".concat(t, ":").concat(e.toString()) : null
            }

            function C(t, n, e) {
                if (null != n && n.includes(":")) {
                    var r = v(n.split(":"), 2),
                        o = r[0],
                        i = r[1];
                    if (o === f.ABu.TWITCH) {
                        if (null == e || "number" == typeof e) {
                            new l.Z("ApplicationAssetUtils").warn("getAssetImage: size must === [number, number] for Twitch");
                            return
                        }
                        return S[f.ABu.TWITCH].deserialize(i, e)
                    }
                    return Object.prototype.hasOwnProperty.call(S, o) ? S[o].deserialize(i) : void 0
                }
                if (null != t && null != n) {
                    var c = "number" == typeof e ? "?size=".concat((0, s.oO)(e)) : "";
                    return null != window.GLOBAL_ENV.CDN_HOST ? "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.CDN_HOST, "/app-assets/").concat(t, "/").concat(n, ".png").concat(c) : "".concat(u.ZP.getAPIBaseURL(), "/applications/").concat(t, "/app-assets/").concat(n, ".png").concat(c)
                }
            }

            function k(t) {
                return j.apply(this, arguments)
            }

            function j() {
                return (j = y((function(t) {
                    return b(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, A(t)];
                            case 1:
                                return [2, n.sent().assets]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function N(t, n) {
                return R.apply(this, arguments)
            }

            function R() {
                return (R = y((function(t, n) {
                    var e, r, o, i, c, a, l, s, p, d;
                    return b(this, (function(y) {
                        switch (y.label) {
                            case 0:
                                return 0 === (e = n.filter((function(t) {
                                    return null != t && !Object.prototype.hasOwnProperty.call(T, t) && null == T[t]
                                }))).length ? [2] : [4, u.ZP.post({
                                    url: f.ANM.APPLICATION_EXTERNAL_ASSETS(t),
                                    body: {
                                        urls: e
                                    },
                                    oldFormErrors: !0
                                })];
                            case 1:
                                r = y.sent().body;
                                o = !0, i = !1, c = void 0;
                                try {
                                    for (a = r[Symbol.iterator](); !(o = (l = a.next()).done); o = !0) {
                                        s = l.value, p = s.url, d = s.external_asset_path;
                                        T[p] = d
                                    }
                                } catch (t) {
                                    i = !0;
                                    c = t
                                } finally {
                                    try {
                                        o || null == a.return || a.return()
                                    } finally {
                                        if (i) throw c
                                    }
                                }
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function D(t, n) {
                var e = 0,
                    r = t.filter((function(t) {
                        return (null == t ? void 0 : t.startsWith("http:")) || (null == t ? void 0 : t.startsWith("https:"))
                    }));
                if (r.length > 0)
                    for (var o = 0; o < t.length; o++) {
                        var i = t[o];
                        if (null != i) {
                            var c = Object.prototype.hasOwnProperty.call(T, i) ? T[i] : void 0;
                            if (null != c) {
                                n[o] = w("mp", c);
                                e++
                            }
                        }
                    }
                return e === t.length
            }

            function Y(t, n, e, r) {
                for (var o = !1, i = 0; i < t.length; i++) {
                    var c = t[i];
                    if (null != c && null == n[i]) {
                        var u = Object.prototype.hasOwnProperty.call(e, c) && e[c];
                        if (!u) {
                            if (null == r || r <= 0) {
                                n[i] = null;
                                continue
                            }
                            o = !0
                        }
                        n[i] = u.id
                    }
                }
                return o
            }

            function L(t, n) {
                return Z.apply(this, arguments)
            }

            function Z() {
                Z = y((function(t, n) {
                    var e, r, o, i, c = arguments;
                    return b(this, (function(u) {
                        switch (u.label) {
                            case 0:
                                e = c.length > 2 && void 0 !== c[2] ? c[2] : 1;
                                a.Z.dispatch({
                                    type: "APPLICATION_ASSETS_FETCH",
                                    applicationId: t
                                });
                                r = [];
                                return (o = n.filter((function(t) {
                                    return (null == t ? void 0 : t.startsWith("http:")) || (null == t ? void 0 : t.startsWith("https:"))
                                }))).length > 0 ? [4, N(t, o)] : [3, 2];
                            case 1:
                                u.sent();
                                u.label = 2;
                            case 2:
                                if (D(n, r)) {
                                    a.Z.dispatch({
                                        type: "APPLICATION_ASSETS_FETCH_SUCCESS",
                                        applicationId: t
                                    });
                                    return [2, r]
                                }
                                return [4, k(t)];
                            case 3:
                                i = u.sent();
                                if (Y(n, r, i, e)) return [2, I(t).then((function() {
                                    return L(t, n, e - 1)
                                }))];
                                a.Z.dispatch({
                                    type: "APPLICATION_ASSETS_FETCH_SUCCESS",
                                    applicationId: t
                                });
                                return [2, r]
                        }
                    }))
                }));
                return Z.apply(this, arguments)
            }
        }
    }
]);