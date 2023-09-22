"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [79913], {
        116404: (e, t, n) => {
            n.r(t);
            n.d(t, {
                default: () => H
            });
            var r = n(744564),
                i = n(520436),
                o = n(409125),
                u = n(15338),
                a = n(784426),
                s = n(166302),
                l = n(61209),
                c = n(747126),
                d = n(52467),
                f = n(715107),
                _ = n(464187),
                E = n(473903),
                h = n(176758),
                p = n(264817),
                g = n(716371),
                v = n(162723),
                I = n(713717),
                N = n(359721),
                O = n(396043),
                y = n(535312),
                T = n(492886),
                C = n(296872),
                A = n(563367);

            function S(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function m(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        S(e, t, n[t])
                    }))
                }
                return e
            }

            function M(e, t, n, i) {
                var o, u, a = f.Z.getVoiceChannelId(),
                    s = l.Z.getChannel(a);
                if (null == t && null != a && null != s) {
                    var c = function(e, t) {
                        return m({
                            channel_id: e.id,
                            channel_type: e.type,
                            guild_id: e.getGuildId(),
                            rtc_connection_id: A.Z.getRTCConnectionId(),
                            duration: A.Z.getDuration(),
                            media_session_id: A.Z.getMediaSessionId()
                        }, (0, O.kO)(A.Z.getGuildId(), A.Z.getChannelId(), t))
                    }(s, i);
                    e();
                    if (T.Z.hasUsedBackgroundInCall) {
                        var _ = m({}, c, (u = (0, y.P)(E.default.getCurrentUser()), {
                            video_device_name: null === (o = d.Z.getVideoDevices()[d.Z.getVideoDeviceId()]) || void 0 === o ? void 0 : o.name,
                            video_hardware_scaling_enabled: d.Z.getHardwareH264(),
                            video_effect_type: (0, C.TA)(u),
                            video_effect_detail: (0, C.V$)(u)
                        }));
                        r.Z.dispatch({
                            type: "VIDEO_BACKGROUND_SHOW_FEEDBACK",
                            analyticsData: _
                        })
                    } else r.Z.dispatch({
                        type: "VOICE_CHANNEL_SHOW_FEEDBACK",
                        analyticsData: c
                    })
                } else e()
            }
            var R = n(567403),
                b = n(746477),
                U = n(407561);

            function D(e, t, n, r, i, o, u) {
                try {
                    var a = e[o](u),
                        s = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(s) : Promise.resolve(s).then(r, i)
            }

            function Z(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(t, n);

                        function u(e) {
                            D(o, r, i, u, a, "next", e)
                        }

                        function a(e) {
                            D(o, r, i, u, a, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }

            function P(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function L(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        P(e, t, n[t])
                    }))
                }
                return e
            }
            var w = function(e, t) {
                    var n, r, i, o, u = {
                        label: 0,
                        sent: function() {
                            if (1 & i[0]) throw i[1];
                            return i[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return o = {
                        next: a(0),
                        throw: a(1),
                        return: a(2)
                    }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                        return this
                    }), o;

                    function a(o) {
                        return function(a) {
                            return function(o) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; u;) try {
                                    if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                    (r = 0, i) && (o = [2 & o[0], i.value]);
                                    switch (o[0]) {
                                        case 0:
                                        case 1:
                                            i = o;
                                            break;
                                        case 4:
                                            u.label++;
                                            return {
                                                value: o[1], done: !1
                                            };
                                        case 5:
                                            u.label++;
                                            r = o[1];
                                            o = [0];
                                            continue;
                                        case 7:
                                            o = u.ops.pop();
                                            u.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = u.trys, i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                                u = 0;
                                                continue
                                            }
                                            if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                                u.label = o[1];
                                                break
                                            }
                                            if (6 === o[0] && u.label < i[1]) {
                                                u.label = i[1];
                                                i = o;
                                                break
                                            }
                                            if (i && u.label < i[2]) {
                                                u.label = i[2];
                                                u.ops.push(o);
                                                break
                                            }
                                            i[2] && u.ops.pop();
                                            u.trys.pop();
                                            continue
                                    }
                                    o = t.call(e, u)
                                } catch (e) {
                                    o = [6, e];
                                    r = 0
                                } finally {
                                    n = i = 0
                                }
                                if (5 & o[0]) throw o[1];
                                return {
                                    value: o[0] ? o[1] : void 0,
                                    done: !0
                                }
                            }([o, a])
                        }
                    }
                },
                G = function(e, t) {
                    var i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                        u = function() {
                            r.Z.dispatch({
                                type: "VOICE_CHANNEL_SELECT",
                                guildId: t,
                                channelId: e,
                                currentVoiceChannelId: f.Z.getVoiceChannelId(),
                                video: i,
                                stream: o
                            })
                        },
                        a = l.Z.getChannel(e),
                        s = U.Z.getCurrentClientVoiceChannelId(null != t ? t : null) === e,
                        c = null != a ? b.Z.getCheck(a.guild_id) : null,
                        d = null != t && (0, g.n)(t);
                    if (!d && (null == c || c.canChat || (0, v.jU)(a))) {
                        if (null != a && !s) {
                            var _ = (0, h.rY)(a, U.Z, R.Z);
                            if (_ && a.isGuildStageVoice() && (0, I.xJ)(a.id)) {
                                (0, p.ZD)(Z((function() {
                                    var e, t;
                                    return w(this, (function(r) {
                                        switch (r.label) {
                                            case 0:
                                                return [4, Promise.all([n.e(40532), n.e(17586), n.e(40056), n.e(19887), n.e(24251), n.e(94302), n.e(28629), n.e(91406), n.e(56620), n.e(894)]).then(n.bind(n, 518197))];
                                            case 1:
                                                e = r.sent(), t = e.default;
                                                return [2, function(e) {
                                                    return t(L({
                                                        channel: a
                                                    }, e))
                                                }]
                                        }
                                    }))
                                })));
                                return
                            }
                            if (_) {
                                (0, p.ZD)(Z((function() {
                                    var e, t;
                                    return w(this, (function(r) {
                                        switch (r.label) {
                                            case 0:
                                                return [4, Promise.all([n.e(40532), n.e(51395)]).then(n.bind(n, 851395))];
                                            case 1:
                                                e = r.sent(), t = e.default;
                                                return [2, function(e) {
                                                    return t(e)
                                                }]
                                        }
                                    }))
                                })));
                                return
                            }
                        }
                        i && (0, N.eH)();
                        M(u, e, 0, i)
                    }
                },
                k = n(2590);
            const H = {
                selectChannel: function(e) {
                    var t = e.guildId,
                        n = e.channelId,
                        i = e.messageId,
                        o = e.jumpType,
                        u = e.preserveDrawerState,
                        a = e.source;
                    r.Z.dispatch({
                        type: "CHANNEL_SELECT",
                        guildId: t === k.ME ? null : t,
                        channelId: n,
                        messageId: i,
                        jumpType: o,
                        preserveDrawerState: u,
                        source: a
                    })
                },
                selectPrivateChannel: function(e) {
                    (0, a.uL)(k.Z5c.CHANNEL(k.ME, e))
                },
                selectVoiceChannel: function(e) {
                    var t, n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        i = l.Z.getChannel(e),
                        o = null == i ? void 0 : i.getGuildId();
                    if (!(null == i ? void 0 : i.isGuildVocal()) || !(null == i ? void 0 : i.isNSFW()) || (null === (t = E.default.getCurrentUser()) || void 0 === t ? void 0 : t.nsfwAllowed) && c.Z.didAgree(o)) {
                        if (d.Z.isSupported()) {
                            null != e && d.Z.getMediaEngine().interact();
                            G(e, o, n, r)
                        }
                    } else(0, a.uL)(k.Z5c.CHANNEL(o, e))
                },
                disconnect: function() {
                    var e = o.Z.getRemoteSessionId();
                    null != e && i._(e);
                    if ((0, s.ur)()) this.selectVoiceChannel(null);
                    else {
                        var t = l.Z.getChannel(f.Z.getChannelId()),
                            n = f.Z.getChannelId() === f.Z.getVoiceChannelId() && !0 === (null == t ? void 0 : t.isThread());
                        this.selectVoiceChannel(null);
                        u.xv(k.KJ3.CHANNEL_CALL_POPOUT);
                        if (n) {
                            var r = _.Z.getGuildId();
                            null != r && (0, a.uL)((0, h.LY)(r))
                        }
                    }
                }
            }
        },
        473664: (e, t, n) => {
            n.d(t, {
                Z: () => l,
                O: () => c
            });
            var r = n(202351),
                i = n(656907),
                o = n(715107),
                u = n(377128),
                a = n(407561);

            function s(e, t, n) {
                return e || t || n
            }

            function l(e) {
                var t = e.userId,
                    n = e.checkSoundSharing,
                    l = void 0 !== n && n,
                    c = e.checkSoundboardSounds,
                    d = void 0 === c || c,
                    f = e.checkIsMuted,
                    _ = void 0 !== f && f,
                    E = e.context,
                    h = (0, r.e7)([a.Z, o.Z], (function() {
                        var e = o.Z.getVoiceChannelId();
                        return null != e ? a.Z.getVoiceStateForChannel(e, t) : null
                    })),
                    p = _ && ((null == h ? void 0 : h.mute) || (null == h ? void 0 : h.selfMute)),
                    g = (0, r.e7)([u.Z], (function() {
                        return u.Z.isSpeaking(t, E) && !p
                    })),
                    v = (0, r.e7)([u.Z], (function() {
                        return u.Z.isSoundSharing(t) && l
                    }));
                return s(g, (0, r.e7)([i.Z], (function() {
                    return i.Z.isUserPlayingSounds(t) && d
                })), v)
            }

            function c(e) {
                var t = e.userId,
                    n = e.checkSoundSharing,
                    r = void 0 !== n && n,
                    l = e.checkSoundboardSounds,
                    c = void 0 === l || l,
                    d = e.checkIsMuted,
                    f = void 0 !== d && d,
                    _ = e.context,
                    E = o.Z.getVoiceChannelId(),
                    h = null != E ? a.Z.getVoiceStateForChannel(E, t) : null,
                    p = f && ((null == h ? void 0 : h.mute) || (null == h ? void 0 : h.selfMute)),
                    g = u.Z.isSpeaking(t, _) && !p,
                    v = u.Z.isSoundSharing(t) && r;
                return s(g, i.Z.isUserPlayingSounds(t) && c, v)
            }
        },
        955048: (e, t, n) => {
            n.d(t, {
                ZP: () => g
            });
            var r = n(817673),
                i = n(281110),
                o = n(296602),
                u = n(2590);

            function a(e, t, n, r, i, o, u) {
                try {
                    var a = e[o](u),
                        s = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(s) : Promise.resolve(s).then(r, i)
            }

            function s(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function l(e) {
                l = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return l(e)
            }

            function c(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                });
                t && f(e, t)
            }

            function d(e, t) {
                return !t || "object" !== _(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function f(e, t) {
                f = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return f(e, t)
            }
            var _ = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function E(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = l(e);
                    if (t) {
                        var i = l(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return d(this, n)
                }
            }
            var h = function(e, t) {
                    var n, r, i, o, u = {
                        label: 0,
                        sent: function() {
                            if (1 & i[0]) throw i[1];
                            return i[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return o = {
                        next: a(0),
                        throw: a(1),
                        return: a(2)
                    }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                        return this
                    }), o;

                    function a(o) {
                        return function(a) {
                            return function(o) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; u;) try {
                                    if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                    (r = 0,
                                        i) && (o = [2 & o[0], i.value]);
                                    switch (o[0]) {
                                        case 0:
                                        case 1:
                                            i = o;
                                            break;
                                        case 4:
                                            u.label++;
                                            return {
                                                value: o[1], done: !1
                                            };
                                        case 5:
                                            u.label++;
                                            r = o[1];
                                            o = [0];
                                            continue;
                                        case 7:
                                            o = u.ops.pop();
                                            u.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = u.trys, i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                                u = 0;
                                                continue
                                            }
                                            if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                                u.label = o[1];
                                                break
                                            }
                                            if (6 === o[0] && u.label < i[1]) {
                                                u.label = i[1];
                                                i = o;
                                                break
                                            }
                                            if (i && u.label < i[2]) {
                                                u.label = i[2];
                                                u.ops.push(o);
                                                break
                                            }
                                            i[2] && u.ops.pop();
                                            u.trys.pop();
                                            continue
                                    }
                                    o = t.call(e, u)
                                } catch (e) {
                                    o = [6, e];
                                    r = 0
                                } finally {
                                    n = i = 0
                                }
                                if (5 & o[0]) throw o[1];
                                return {
                                    value: o[0] ? o[1] : void 0,
                                    done: !0
                                }
                            }([o, a])
                        }
                    }
                },
                p = function() {
                    function e(t, n, r) {
                        s(this, e);
                        this.isCanceled = !1;
                        this.searchId = t;
                        this.searchType = n;
                        this.query = r
                    }
                    var t = e.prototype;
                    t.fetch = function(e, t, n) {
                        var r, i = this;
                        return (r = function() {
                            var r, u, a, s;
                            return h(this, (function(l) {
                                switch (l.label) {
                                    case 0:
                                        if (i.isCanceled) return [2];
                                        l.label = 1;
                                    case 1:
                                        l.trys.push([1, 3, , 4]);
                                        return [4, i.makeRequest()];
                                    case 2:
                                        if (null == (r = l.sent())) return [2];
                                        if (i.isCanceled) return [2];
                                        if (200 === r.status) e(r);
                                        else if (202 === r.status) {
                                            i.query.attempts = (null !== (u = i.query.attempts) && void 0 !== u ? u : 0) + 1;
                                            a = 1e3 * r.body.retry_after;
                                            i.retryDelay = isNaN(a) || 0 === a ? 5e3 : a;
                                            i.retryLater(e, t, n);
                                            t(r)
                                        }
                                        return [3, 4];
                                    case 3:
                                        s = l.sent();
                                        new o.Z("SearchFetcher").error(s);
                                        n(s);
                                        return [3, 4];
                                    case 4:
                                        return [2]
                                }
                            }))
                        }, function() {
                            var e = this,
                                t = arguments;
                            return new Promise((function(n, i) {
                                var o = r.apply(e, t);

                                function u(e) {
                                    a(o, n, i, u, s, "next", e)
                                }

                                function s(e) {
                                    a(o, n, i, u, s, "throw", e)
                                }
                                u(void 0)
                            }))
                        })()
                    };
                    t.cancel = function() {
                        this.isCanceled = !0;
                        null != this.indexingPollId && clearTimeout(this.indexingPollId)
                    };
                    t.retryLater = function(e, t, n) {
                        null != this.indexingPollId && clearTimeout(this.indexingPollId);
                        this.indexingPollId = setTimeout(this.fetch.bind(this, e, t, n), this.retryDelay)
                    };
                    return e
                }(),
                g = function(e) {
                    c(n, e);
                    var t = E(n);

                    function n() {
                        s(this, n);
                        return t.apply(this, arguments)
                    }
                    var o = n.prototype;
                    o.getEndpoint = function() {
                        switch (this.searchType) {
                            case u.aib.DMS:
                                return u.ANM.SEARCH_DMS;
                            case u.aib.GUILD:
                                if (null == this.searchId || "" === this.searchId) return;
                                return u.ANM.SEARCH_GUILD(this.searchId);
                            case u.aib.CHANNEL:
                                if (null == this.searchId || "" === this.searchId) return;
                                return u.ANM.SEARCH_CHANNEL(this.searchId);
                            default:
                                throw new Error("[SearchFetcher] Unhandled search type: ".concat(this.searchType))
                        }
                    };
                    o.makeRequest = function() {
                        var e = this.getEndpoint();
                        return null == e ? null : i.ZP.get({
                            url: e,
                            query: r.stringify(this.query),
                            oldFormErrors: !0
                        })
                    };
                    return n
                }(p)
        },
        258104: (e, t, n) => {
            n.d(t, {
                i6: () => R,
                ZP: () => X
            });
            var r = n(202351),
                i = n(744564),
                o = n(73904),
                u = n(664625),
                a = n(61209),
                s = n(682776),
                l = n(473903),
                c = n(120415),
                d = n(84894),
                f = n(838733),
                _ = n(2590),
                E = n(473708);

            function h(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function p(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function g(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function v(e) {
                v = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return v(e)
            }

            function I(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        g(e, t, n[t])
                    }))
                }
                return e
            }

            function N(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function O(e, t) {
                return !t || "object" !== A(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function y(e, t) {
                y = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return y(e, t)
            }

            function T(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, o = [],
                            u = !0,
                            a = !1;
                        try {
                            for (n = n.call(e); !(u = (r = n.next()).done); u = !0) {
                                o.push(r.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            a = !0;
                            i = e
                        } finally {
                            try {
                                u || null == n.return || n.return()
                            } finally {
                                if (a) throw i
                            }
                        }
                        return o
                    }
                }(e, t) || S(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function C(e) {
                return function(e) {
                    if (Array.isArray(e)) return h(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || S(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var A = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function S(e, t) {
                if (e) {
                    if ("string" == typeof e) return h(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    return "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? h(e, t) : void 0
                }
            }

            function m(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = v(e);
                    if (t) {
                        var i = v(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return O(this, n)
                }
            }
            new Set([]);
            var M = {
                    seenActivities: [],
                    shouldShowNewActivityIndicator: !1,
                    usersHavePlayedByApp: new Map
                },
                R = [],
                b = new Map,
                U = new Map,
                D = new Map,
                Z = !1,
                P = new Map,
                L = new Map,
                w = new Map,
                G = new Map,
                k = new Map,
                H = new Map,
                Y = 216e5,
                F = new Map,
                j = new Set([]),
                V = void 0;

            function B(e) {
                return null != e ? e : "0"
            }

            function x(e, t, n, r) {
                var i = (0, d.Z)(n.application_id);
                if (null != i) {
                    var o = a.Z.getBasicChannel(t),
                        l = null != o && s.Z.canBasicChannel(_.S7T.CONNECT, o) || (null == o ? void 0 : o.type) === _.d4z.DM || (null == o ? void 0 : o.type) === _.d4z.GROUP_DM;
                    ! function(e, t) {
                        var n;
                        M.usersHavePlayedByApp.set(e, new Set(C(null !== (n = M.usersHavePlayedByApp.get(e)) && void 0 !== n ? n : []).concat(C(t.map((function(e) {
                            return e.user_id
                        }))))))
                    }(n.application_id, r);
                    if (l) {
                        var c, f = function(e, t, n, r, i) {
                                var o, u, a = new Map;
                                t.forEach((function(e) {
                                    a.set(e.user_id, e)
                                }));
                                return N(I({}, e), {
                                    name: null !== (o = e.name) && void 0 !== o ? o : E.Z.Messages.EMBEDDED_ACTIVITIES_UNKNOWN_ACTIVITY_NAME,
                                    type: null !== (u = e.type) && void 0 !== u ? u : _.IIU.PLAYING,
                                    url: n,
                                    connections: a,
                                    guildId: r,
                                    channelId: i
                                })
                            }(n, r, i, e, t),
                            h = u.default.getId(),
                            p = b.get(f.application_id);
                        r.some((function(e) {
                            return e.user_id === h
                        })) && null != p && b.set(p.application_id, I({}, p, f));
                        var g, v = (null !== (c = D.get(t)) && void 0 !== c ? c : []).filter((function(e) {
                                return e.application_id !== n.application_id
                            })),
                            O = B(e),
                            y = (null !== (g = U.get(O)) && void 0 !== g ? g : []).filter((function(e) {
                                return !(e.application_id === n.application_id && e.channelId === t)
                            }));
                        if (0 !== r.length) {
                            v.push(f);
                            y.push(f)
                        }
                        D.set(t, v);
                        U.set(O, y)
                    }
                }
            }

            function W(e) {
                e.embedded_activities.forEach((function(t) {
                    var n = t.channel_id,
                        r = t.embedded_activity,
                        i = t.connections;
                    x(e.id, n, r, i)
                }))
            }
            var K = function() {
                M.shouldShowNewActivityIndicator = !1
            };

            function q() {
                Z = !1
            }

            function z(e, t) {
                return "".concat(e, ":").concat(t)
            }
            var Q = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && y(e, t)
                }(n, e);
                var t = m(n);

                function n() {
                    p(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function(e) {
                    var t = new Map;
                    Array.isArray(null == e ? void 0 : e.usersHavePlayedByApp) && (null == e || e.usersHavePlayedByApp.forEach((function(e) {
                        if (Array.isArray(e)) {
                            var n = T(e, 2),
                                r = n[0],
                                i = n[1];
                            "string" == typeof r && Array.isArray(i) && t.set(r, new Set(i))
                        }
                    })));
                    null != e && (M = N(I({}, e), {
                        usersHavePlayedByApp: t
                    }))
                };
                r.getState = function() {
                    return M
                };
                r.getSelfEmbeddedActivityForChannel = function(e) {
                    var t;
                    return null !== (t = Array.from(b.values()).find((function(t) {
                        var n = t.channelId;
                        return e === n
                    }))) && void 0 !== t ? t : null
                };
                r.getSelfEmbeddedActivities = function() {
                    return b
                };
                r.getEmbeddedActivitiesForGuild = function(e) {
                    var t;
                    return null !== (t = U.get(e)) && void 0 !== t ? t : R
                };
                r.getEmbeddedActivitiesForChannel = function(e) {
                    var t;
                    return null !== (t = D.get(e)) && void 0 !== t ? t : R
                };
                r.getEmbeddedActivitiesByChannel = function() {
                    return D
                };
                r.getEmbeddedActivityDurationMs = function(e, t) {
                    var n = F.get(z(e, t));
                    return null == n ? null : Date.now() - n
                };
                r.isLaunchingActivity = function() {
                    return Z
                };
                r.getShelfActivities = function(e) {
                    var t, n = B(e);
                    return null !== (t = P.get(n)) && void 0 !== t ? t : []
                };
                r.getShelfFetchStatus = function(e) {
                    var t = B(e);
                    return L.get(t)
                };
                r.shouldFetchShelf = function(e) {
                    var t, n, r = B(e),
                        i = null !== (t = L.get(r)) && void 0 !== t ? t : {
                            isFetching: !1
                        },
                        o = Date.now() - (null !== (n = null == i ? void 0 : i.lastFetchTimestampMs) && void 0 !== n ? n : 0) > Y;
                    return !(null == i ? void 0 : i.isFetching) && o
                };
                r.getOrientationLockStateForApp = function(e) {
                    var t;
                    return null !== (t = w.get(e)) && void 0 !== t ? t : null
                };
                r.getPipOrientationLockStateForApp = function(e) {
                    var t;
                    return null !== (t = G.get(e)) && void 0 !== t ? t : this.getOrientationLockStateForApp(e)
                };
                r.getGridOrientationLockStateForApp = function(e) {
                    var t, n;
                    return null !== (n = null !== (t = k.get(e)) && void 0 !== t ? t : G.get(e)) && void 0 !== n ? n : this.getOrientationLockStateForApp(e)
                };
                r.getLayoutModeForApp = function(e) {
                    return H.get(e)
                };
                r.getDismissedEmbeddedActivityMessageKeys = function() {
                    return Array.from(j)
                };
                r.getUsersHavePlayedByApp = function(e) {
                    var t;
                    return C(null !== (t = M.usersHavePlayedByApp.get(e)) && void 0 !== t ? t : [])
                };
                r.getConnectedActivityChannelId = function() {
                    return V
                };
                r.__getLocalVars = function() {
                    return {
                        persistedState: M,
                        connectedActivities: b,
                        embeddedActivitiesByGuild: U,
                        embeddedActivitiesByChannel: D,
                        isLaunchingActivity: Z,
                        shelfActivitiesByGuild: P,
                        shelfFetchStatus: L,
                        orientationLockStateByApp: w,
                        pipOrientationLockStateByApp: G,
                        gridOrientationLockStateByApp: k,
                        layoutModeByApp: H,
                        CACHE_TIME_MS: Y,
                        activityJoinTimesMs: F,
                        dismissedEmbeddedActivityMessageKeys: j,
                        connectedActivityChannelId: V,
                        handleDismissNewIndicator: K,
                        instance: J
                    }
                };
                return n
            }(r.ZP.PersistedStore);
            Q.displayName = "EmbeddedActivitiesStore";
            Q.persistKey = "EmbeddedActivities";
            Q.migrations = [function(e) {
                return N(I({}, e), {
                    seenFeaturedActivities: [],
                    shouldShowNewActivityIndicator: !1
                })
            }, function(e) {
                delete e.seenFeaturedActivities;
                return N(I({}, e), {
                    seenActivities: []
                })
            }, function(e) {
                return I({}, e)
            }, function(e) {
                delete e.currentFreeActivity;
                delete e.lastFreeActivityRotationTimestampMs;
                delete e.freePeriodActivities;
                delete e.shouldShowFreeActivityIndicator;
                return I({}, e)
            }];
            var J = new Q(i.Z, {
                ACTIVITY_LAYOUT_MODE_UPDATE: function(e) {
                    var t = e.applicationId,
                        n = e.layoutMode;
                    H.set(t, n)
                },
                CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
                    var t = e.guilds;
                    D.clear();
                    U.clear();
                    t.forEach((function(e) {
                        return W(e)
                    }))
                },
                GUILD_CREATE: function(e) {
                    W(e.guild)
                },
                CALL_CREATE: function(e) {
                    e.channelId;
                    ! function(e, t) {
                        t.forEach((function(e) {
                            x(null, e.channel_id, e.embedded_activity, e.connections)
                        }))
                    }(0, e.embeddedActivities)
                },
                CHANNEL_DELETE: function(e) {
                    var t = e.channel;
                    D.set(t.id, []);
                    var n = t.guild_id;
                    if (null != n) {
                        var r, i = B(n),
                            o = (null !== (r = U.get(i)) && void 0 !== r ? r : []).filter((function(e) {
                                return e.channelId !== t.id
                            }));
                        U.set(i, o)
                    }
                },
                EMBEDDED_ACTIVITY_LAUNCH_START: function() {
                    Z = !0
                },
                EMBEDDED_ACTIVITY_LAUNCH_SUCCESS: q,
                EMBEDDED_ACTIVITY_LAUNCH_FAIL: q,
                EMBEDDED_ACTIVITY_OPEN: function(e) {
                    var t, n = e.channelId,
                        r = e.embeddedActivity,
                        i = r.application_id,
                        o = (0, d.Z)(i),
                        s = u.default.getSessionId();
                    if (null == o || null == s) return !1;
                    if ((null === (t = b.get(i)) || void 0 === t ? void 0 : t.channelId) === n) return !1;
                    var c, f = a.Z.getChannel(n),
                        h = null == f ? void 0 : f.getGuildId(),
                        p = l.default.getCurrentUser();
                    if (null == h && (null === (c = null == f ? void 0 : f.isPrivate()) || void 0 === c || !c) || null == p) return !1;
                    V = n;
                    var g, v = new Map,
                        I = p.id;
                    v.set(I, {
                        user_id: I
                    });
                    b.set(i, {
                        guildId: h,
                        channelId: n,
                        application_id: i,
                        name: null !== (g = r.name) && void 0 !== g ? g : E.Z.Messages.EMBEDDED_ACTIVITIES_UNKNOWN_ACTIVITY_NAME,
                        url: o,
                        type: _.IIU.PLAYING,
                        connections: v,
                        connectedSince: Date.now()
                    });
                    F.set(z(n, i), Date.now())
                },
                EMBEDDED_ACTIVITY_CLOSE: function(e) {
                    var t = e.applicationId,
                        n = b.get(t);
                    b.delete(t);
                    (null == n ? void 0 : n.channelId) === V && (V = void 0)
                },
                EMBEDDED_ACTIVITY_INBOUND_UPDATE: function(e) {
                    x(e.guildId, e.channelId, e.embeddedActivity, e.connections)
                },
                LOCAL_ACTIVITY_UPDATE: function(e) {
                    var t, n = e.activity;
                    if (null == n) return !1;
                    var r, i = b.get(null !== (t = n.application_id) && void 0 !== t ? t : "");
                    if (null == i) return !1;
                    b.set(i.application_id, N(I({}, i), {
                        type: null !== (r = n.type) && void 0 !== r ? r : i.type,
                        secrets: n.secrets
                    }))
                },
                EMBEDDED_ACTIVITY_SET_CONFIG: function(e) {
                    var t = e.applicationId,
                        n = e.config,
                        r = b.get(t);
                    null != r && b.set(r.application_id, N(I({}, r), {
                        config: n
                    }))
                },
                EMBEDDED_ACTIVITY_FETCH_SHELF: function(e) {
                    var t = B(e.guildId),
                        n = L.get(t);
                    L.set(t, {
                        isFetching: !0,
                        lastFetchTimestampMs: null == n ? void 0 : n.lastFetchTimestampMs
                    })
                },
                EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS: function(e) {
                    var t = e.guildId,
                        n = e.activities,
                        r = B(t);
                    P.set(r, n);
                    var i = Date.now();
                    n.forEach((function(e) {
                        var t = e.application_id,
                            n = e.client_platform_config[(0, f.Z)((0, c.Ij)())];
                        n.label_type === o.ww.NEW && null != n.label_until && new Date(n.label_until).getTime() > i && !M.seenActivities.includes(t) && (M.shouldShowNewActivityIndicator = !0);
                        M.seenActivities.push(t)
                    }));
                    L.set(r, {
                        isFetching: !1,
                        lastFetchTimestampMs: i
                    })
                },
                EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL: function(e) {
                    var t = B(e.guildId),
                        n = L.get(t);
                    L.set(t, {
                        isFetching: !1,
                        lastFetchTimestampMs: null == n ? void 0 : n.lastFetchTimestampMs
                    })
                },
                EMBEDDED_ACTIVITY_DISMISS_NEW_INDICATOR: K,
                EMBEDDED_ACTIVITY_SET_ORIENTATION_LOCK_STATE: function(e) {
                    var t = e.applicationId,
                        n = e.lockState,
                        r = e.pictureInPictureLockState,
                        i = e.gridLockState;
                    null == n ? w.delete(t) : w.set(t, n);
                    null === r ? G.delete(t) : void 0 !== r && G.set(t, r);
                    null === i ? k.delete(t) : void 0 !== i && k.set(t, i)
                },
                EMBEDDED_ACTIVITY_DISMISS_MESSAGE: function(e) {
                    var t = e.embeddedActivityKey;
                    j.add(t)
                }
            });
            const X = J
        },
        84894: (e, t, n) => {
            n.d(t, {
                Z: () => o
            });
            var r = n(325213),
                i = n(560213);

            function o(e) {
                var t = i.Z.getState();
                return t.isEnabled && t.useActivityUrlOverride && null != t.activityUrlOverride && "" !== t.activityUrlOverride ? t.activityUrlOverride : r.Z.inTestModeForEmbeddedApplication(e) ? r.Z.testModeOriginURL : function(e) {
                    var t = window.GLOBAL_ENV.ACTIVITY_APPLICATION_HOST;
                    return null == t ? null : "https://".concat(e, ".").concat(t)
                }(e)
            }
        },
        838733: (e, t, n) => {
            n.d(t, {
                Z: () => i
            });
            var r = n(73904);

            function i(e) {
                switch (e) {
                    case "android":
                        return r.C3.ANDROID;
                    case "ios":
                        return r.C3.IOS;
                    default:
                        return r.C3.WEB
                }
            }
        },
        453597: (e, t, n) => {
            n.d(t, {
                qz: () => b,
                sI: () => M,
                ZP: () => D
            });
            var r = n(496486),
                i = n(575626),
                o = n(473664),
                u = n(258104),
                a = n(306263),
                s = n(177570),
                l = n(664625),
                c = n(610773),
                d = n(61209),
                f = n(52467),
                _ = n(377128),
                E = n(473903),
                h = n(256727),
                p = n(407561),
                g = n(773148),
                v = n(358500),
                I = n(2590),
                N = n(36256);

            function O(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function y(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(e, r.key, r)
                }
            }

            function T(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function C(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        T(e, t, n[t])
                    }))
                }
                return e
            }

            function A(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function S(e) {
                return function(e) {
                    if (Array.isArray(e)) return O(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || m(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function m(e, t) {
                if (e) {
                    if ("string" == typeof e) return O(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    return "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? O(e, t) : void 0
                }
            }
            var M, R = "__EMBEDDED_ACTIVITIES__",
                b = function(e, t) {
                    return "".concat(e.toLowerCase().padEnd(32, "!")).concat(t.id)
                };

            function U(e) {
                switch (e.type) {
                    case v.fO.ACTIVITY:
                        return "\0".concat(e.sortKey);
                    case v.fO.HIDDEN_STREAM:
                    case v.fO.STREAM:
                        return "".concat(e.userVideo ? "" : "").concat(b(e.userNick, e.user), "");
                    case v.fO.USER:
                        var t, n, r = "";
                        (null === (t = e.voiceState) || void 0 === t ? void 0 : t.selfVideo) ? r = "": (null === (n = e.voiceState) || void 0 === n ? void 0 : n.selfStream) && (r = "");
                        return "".concat(r).concat(b(e.userNick, e.user))
                }
            }! function(e) {
                e.VIDEO = "VIDEO";
                e.STREAM = "STREAM";
                e.FILTERED = "FILTERED";
                e.SPEAKING = "SPEAKING";
                e.ACTIVITY = "ACTIVITY"
            }(M || (M = {}));
            var D = function() {
                function e(t) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e);
                    this.participants = {};
                    this.lastSpoke = {};
                    this.participantByIndex = new i.Z((function(e) {
                        var t, n = [];
                        e.type === v.fO.USER && e.speaking && n.push(M.SPEAKING);
                        if (e.type === v.fO.USER && (null === (t = e.voiceState) || void 0 === t ? void 0 : t.selfVideo)) {
                            n.push(M.VIDEO);
                            e.localVideoDisabled || n.push(M.FILTERED)
                        } else if ((0, v._5)(e)) {
                            n.push(M.STREAM);
                            e.type !== v.fO.HIDDEN_STREAM && null != e.streamId && n.push(M.FILTERED)
                        }
                        e.type === v.fO.ACTIVITY && n.push(M.ACTIVITY);
                        return n
                    }), U);
                    this.channelId = t
                }
                var t = e.prototype;
                t.size = function(e) {
                    return this.participantByIndex.size(e)
                };
                t.toArray = function(e) {
                    return this.participantByIndex.values(e, !0)
                };
                t.rebuild = function() {
                    var e = this,
                        t = d.Z.getChannel(this.channelId);
                    if (null == t || t.type === I.d4z.GUILD_TEXT) return !1;
                    this.call = c.Z.getCall(this.channelId);
                    if (t.isPrivate() && (null == this.call || this.call.unavailable)) return !1;
                    var n = new Set(t.isGuildVocalOrThread() ? Object.keys(p.Z.getVoiceStatesForChannel(t.id)) : t.recipients);
                    n.add(l.default.getId());
                    s.Z.getAllActiveStreamsForChannel(this.channelId).forEach((function(e) {
                        var t = e.ownerId;
                        return n.add(t)
                    }));
                    this.participantByIndex.clear();
                    this.participants = {};
                    n.forEach((function(t) {
                        return e.updateParticipant(t)
                    }));
                    this.updateEmbeddedActivities();
                    return !0
                };
                t.getParticipant = function(e) {
                    var t;
                    return null !== (t = this.participantByIndex.get(e)) && void 0 !== t ? t : null
                };
                t.updateEmbeddedActivities = function() {
                    return this.updateParticipant(R)
                };
                t.hasEmbeddedActivity = function() {
                    var e = this.participants.__EMBEDDED_ACTIVITIES__;
                    return null != e && e.length > 0
                };
                t.updateParticipant = function(e) {
                    var t = this,
                        n = this.participants[e],
                        r = e === R ? this._getParticipantsForEmbeddedActivities() : this._getParticipantsForUser(e);
                    if (null == n && 0 === r.length) return !1;
                    null == n || n.forEach((function(e) {
                        t.participantByIndex.delete(e.id)
                    }));
                    r.forEach((function(e) {
                        t.participantByIndex.set(e.id, e)
                    }));
                    this.participants[e] = r;
                    return !0
                };
                t.updateParticipantSpeaking = function(e) {
                    var t, n, r = this;
                    return null !== (n = null === (t = this.participants[e]) || void 0 === t ? void 0 : t.reduce((function(t, n) {
                        if (n.type === v.fO.USER) {
                            var i = (0, o.O)({
                                userId: e,
                                checkIsMuted: !0
                            });
                            i && (r.lastSpoke[e] = Date.now());
                            r.participantByIndex.set(n.id, A(C({}, n), {
                                speaking: i,
                                lastSpoke: r.lastSpoke[e],
                                soundsharing: _.Z.isSoundSharing(e)
                            }));
                            return !0
                        }
                        return t
                    }), !1)) && void 0 !== n && n
                };
                t.updateParticipantQuality = function(e, t, n) {
                    var r, i, o = this;
                    return null !== (i = null === (r = this.participants[e]) || void 0 === r ? void 0 : r.reduce((function(e, r) {
                        if (r.type === v.fO.STREAM) {
                            o.participantByIndex.set(r.id, A(C({}, r), {
                                maxResolution: t,
                                maxFrameRate: n
                            }));
                            return !0
                        }
                        return e
                    }), !1)) && void 0 !== i && i
                };
                t._getEmbeddedActivities = function() {
                    var e = u.ZP.getEmbeddedActivitiesForChannel(this.channelId),
                        t = u.ZP.getSelfEmbeddedActivityForChannel(this.channelId);
                    return null == t ? e : (0, r.uniqBy)(S(e).concat([t]), "application_id")
                };
                t._getParticipantsForEmbeddedActivities = function() {
                    var e = this;
                    return this._getEmbeddedActivities().map((function(t, n) {
                        var r, i, o, u;
                        return {
                            type: v.fO.ACTIVITY,
                            id: t.application_id,
                            activityType: t.type,
                            activityUrl: t.url,
                            participants: new Set(t.connections.keys()),
                            canJoin: null != (null == t || null === (r = t.secrets) || void 0 === r ? void 0 : r.join),
                            joinSecret: null == t || null === (i = t.secrets) || void 0 === i ? void 0 : i.join,
                            guildId: null !== (u = null === (o = d.Z.getChannel(e.channelId)) || void 0 === o ? void 0 : o.getGuildId()) && void 0 !== u ? u : null,
                            sortKey: n.toString()
                        }
                    }))
                };
                t._getParticipantsForUser = function(e) {
                    var t, n, r = [],
                        i = E.default.getUser(e);
                    if (null == i) return r;
                    var u, c, I, O, y = p.Z.getVoiceStateForChannel(this.channelId, e),
                        T = p.Z.getVoicePlatformForChannel(this.channelId, e),
                        S = d.Z.getChannel(this.channelId),
                        m = null !== (c = null === (t = this.call) || void 0 === t || null === (n = t.ringing) || void 0 === n ? void 0 : n.includes(e)) && void 0 !== c && c;
                    if (null != y || m) {
                        var M;
                        u = A(C({
                            type: v.fO.USER
                        }, h.Z.getUserStreamData(e, null == S ? void 0 : S.getGuildId())), {
                            user: i,
                            id: i.id,
                            voiceState: y,
                            voicePlatform: T,
                            speaking: (0, o.O)({
                                userId: e,
                                checkIsMuted: !0
                            }),
                            lastSpoke: null !== (M = this.lastSpoke[e]) && void 0 !== M ? M : 0,
                            soundsharing: _.Z.isSoundSharing(e),
                            ringing: m,
                            userNick: g.ZP.getName(null == S ? void 0 : S.getGuildId(), this.channelId, i),
                            localVideoDisabled: f.Z.isLocalVideoDisabled(i.id)
                        });
                        r.push(u)
                    }
                    var R = null !== (O = s.Z.getStreamForUser(e, null == S ? void 0 : S.getGuildId())) && void 0 !== O ? O : s.Z.getActiveStreamForUser(e, null == S ? void 0 : S.getGuildId());
                    if (null != R && R.channelId === this.channelId) {
                        var b, U = (0, a.V9)(R),
                            D = this.getParticipant(U),
                            Z = R.ownerId === l.default.getId() && s.Z.isSelfStreamHidden(this.channelId),
                            P = (null == D ? void 0 : D.type) === v.fO.STREAM ? {
                                maxResolution: null != D.maxResolution ? C({}, D.maxResolution) : void 0,
                                maxFrameRate: D.maxFrameRate
                            } : null;
                        I = A(C({}, h.Z.getUserStreamData(e, null == S ? void 0 : S.getGuildId(), N.Yn.STREAM), P), {
                            type: Z ? v.fO.HIDDEN_STREAM : v.fO.STREAM,
                            id: U,
                            userVideo: null !== (b = null == y ? void 0 : y.selfVideo) && void 0 !== b && b,
                            user: i,
                            userNick: g.ZP.getName(null == S ? void 0 : S.getGuildId(), this.channelId, i),
                            stream: R
                        });
                        r.push(I)
                    }
                    return r
                };
                ! function(e, t, n) {
                    t && y(e.prototype, t);
                    n && y(e, n)
                }(e, [{
                    key: "version",
                    get: function() {
                        return this.participantByIndex.version
                    }
                }]);
                return e
            }()
        },
        566706: (e, t, n) => {
            n.d(t, {
                Z: () => Ee
            });
            var r = n(441143),
                i = n.n(r),
                o = n(496486),
                u = n.n(o),
                a = n(202351),
                s = n(744564),
                l = n(258104),
                c = n(296602),
                d = n(409125),
                f = n(306263),
                _ = n(177570),
                E = n(664625),
                h = n(610773),
                p = n(61209),
                g = n(715107),
                v = n(377128),
                I = n(473903),
                N = n(256727),
                O = n(407561),
                y = n(453597),
                T = n(358500),
                C = n(2590);

            function A(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function S(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function m(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function M(e) {
                M = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return M(e)
            }

            function R(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function b(e, t) {
                return !t || "object" !== Z(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function U(e, t) {
                U = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return U(e, t)
            }

            function D(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, o = [],
                            u = !0,
                            a = !1;
                        try {
                            for (n = n.call(e); !(u = (r = n.next()).done); u = !0) {
                                o.push(r.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            a = !0;
                            i = e
                        } finally {
                            try {
                                u || null == n.return || n.return()
                            } finally {
                                if (a) throw i
                            }
                        }
                        return o
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return A(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return A(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var Z = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function P(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = M(e);
                    if (t) {
                        var i = M(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return b(this, n)
                }
            }
            var L = new c.Z("ChannelRTCStore"),
                w = Object.freeze([]),
                G = [],
                k = {},
                H = {},
                Y = {},
                F = {},
                j = {},
                V = {},
                B = {},
                x = {},
                W = {},
                K = {};

            function q(e) {
                var t = k[e];
                if (null == t) {
                    t = new y.ZP(e);
                    k[e] = t
                }
                return t
            }

            function z(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : G;
                return t.reduce((function(t, n) {
                    var r = q(n);
                    if (!e(r)) return t;
                    re(n);
                    ne(n);
                    return !0
                }), !1)
            }

            function Q(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : G;
                return z((function(t) {
                    return t.updateParticipant(e)
                }), t)
            }

            function J(e) {
                var t, n = p.Z.getChannel(e),
                    r = (null == n ? void 0 : n.isDM()) ? T.dF.AUTO : T.dF.NONE;
                return null !== (t = H[e]) && void 0 !== t ? t : [r, T.dF.NONE]
            }

            function X(e) {
                return null != H[e] && D(H[e], 1)[0] !== T.dF.NONE
            }

            function $(e) {
                null == Y[e] && (Y[e] = {
                    gridDurationMs: 0,
                    focusDurationMs: 0,
                    toggleCount: 0,
                    lastUpdate: 0
                });
                var t = Y[e],
                    n = performance.now(),
                    r = X(e);
                if (t.lastUpdate > 0) {
                    var i = n - t.lastUpdate;
                    t[r ? "focusDurationMs" : "gridDurationMs"] += i
                }
                t.lastUpdate = n
            }

            function ee(e, t) {
                $(e);
                var n = X(e);
                null == t ? delete H[e] : H[e] = t;
                n !== X(e) && Y[e].toggleCount++
            }

            function te(e) {
                return e.size(y.sI.STREAM) > 0 || e.size(y.sI.VIDEO) > 0 || e.hasEmbeddedActivity()
            }

            function ne(e) {
                var t = E.default.getId(),
                    n = q(e);
                if (0 !== n.size() && g.Z.getVoiceChannelId() === e) {
                    var r = T.dF.NONE,
                        o = n.toArray(y.sI.STREAM).find((function(e) {
                            return e.type === T.fO.STREAM && _.Z.getActiveStreamForStreamKey(e.id)
                        }));
                    if (null != o) {
                        i()(o.type === T.fO.STREAM, "Impossible condition");
                        r = o.id
                    } else if (1 === n.size()) r = t;
                    else if (1 === n.size(y.sI.VIDEO)) {
                        r = D(n.toArray(y.sI.VIDEO), 1)[0].id
                    } else {
                        var u, a = n.toArray().find((function(e) {
                            return e.type === T.fO.USER && e.id !== t && !e.ringing
                        }));
                        r = null !== (u = null == a ? void 0 : a.id) && void 0 !== u ? u : t
                    }
                    var s = D(J(e), 1)[0];
                    if (s !== T.dF.AUTO && s !== T.dF.NONE) {
                        var l = n.getParticipant(s);
                        (null == l || l.type === T.fO.STREAM && null == _.Z.getActiveStreamForStreamKey(l.id)) && (s = T.dF.NONE)
                    }
                    ee(e, [s, r])
                } else ee(e, null)
            }

            function re(e) {
                var t = q(e);
                if (0 !== t.size()) {
                    var n = fe(e) || te(t) ? C.WtW.VIDEO : C.WtW.VOICE;
                    if (n === C.WtW.VOICE) {
                        delete F[e];
                        delete j[e]
                    } else F[e] = n
                }
            }

            function ie(e) {
                delete k[e];
                delete H[e];
                delete F[e];
                delete j[e]
            }

            function oe() {
                return z((function(e) {
                    return e.rebuild()
                }), function() {
                    var e = [],
                        t = g.Z.getChannelId();
                    null != t && e.push(t);
                    var n = g.Z.getVoiceChannelId();
                    null == n || e.includes(n) || e.push(n);
                    var r = d.Z.getRemoteSessionId(),
                        i = O.Z.getVoiceStateForSession(E.default.getId(), r);
                    null != (null == i ? void 0 : i.channelId) && e.push(null == i ? void 0 : i.channelId);
                    u().difference(G, e).forEach(ie);
                    var o = u().difference(e, G);
                    G = e;
                    return o
                }())
            }

            function ue() {
                return z((function(e) {
                    return e.updateEmbeddedActivities()
                }))
            }

            function ae(e) {
                var t = e.userId;
                return z((function(e) {
                    return e.updateParticipantSpeaking(t)
                }))
            }

            function se(e) {
                return Q(e.user.id)
            }

            function le(e) {
                return z((function(e) {
                    return e.rebuild()
                }), [e.channelId])
            }

            function ce(e) {
                var t = e.channel.id;
                delete x[t];
                delete W[t];
                return ie(t)
            }

            function de(e) {
                var t = e.streamKey,
                    n = (0, f.my)(t),
                    r = n.channelId;
                return Q(n.ownerId, [r])
            }

            function fe(e) {
                var t;
                return Boolean(null === (t = p.Z.getChannel(e)) || void 0 === t ? void 0 : t.isGuildVocal())
            }
            var _e = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && U(e, t)
                }(n, e);
                var t = P(n);

                function n() {
                    S(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    this.waitFor(_.Z, E.default, h.Z, p.Z, l.ZP, g.Z, v.Z, I.default, N.Z, O.Z);
                    this.syncWith([l.ZP], ue);
                    this.syncWith([d.Z], oe)
                };
                r.getParticipantsVersion = function(e) {
                    return q(e).version
                };
                r.getParticipants = function(e) {
                    var t;
                    return null !== (t = q(e).toArray()) && void 0 !== t ? t : w
                };
                r.getSpeakingParticipants = function(e) {
                    var t;
                    return null !== (t = q(e).toArray(y.sI.SPEAKING)) && void 0 !== t ? t : w
                };
                r.getFilteredParticipants = function(e) {
                    return B[e] ? q(e).toArray(y.sI.FILTERED) : q(e).toArray()
                };
                r.getVideoParticipants = function(e) {
                    var t;
                    return null !== (t = q(e).toArray(y.sI.VIDEO)) && void 0 !== t ? t : w
                };
                r.getStreamParticipants = function(e) {
                    var t;
                    return null !== (t = q(e).toArray(y.sI.STREAM)) && void 0 !== t ? t : w
                };
                r.getActivityParticipants = function(e) {
                    var t;
                    return null !== (t = q(e).toArray(y.sI.ACTIVITY)) && void 0 !== t ? t : w
                };
                r.getParticipant = function(e, t) {
                    return q(e).getParticipant(t)
                };
                r.getUserParticipantCount = function(e) {
                    var t = q(e);
                    return t.size() - t.size(y.sI.STREAM) - t.size(y.sI.ACTIVITY)
                };
                r.getParticipantsOpen = function(e) {
                    var t;
                    return null === (t = V[e]) || void 0 === t || t
                };
                r.getVoiceParticipantsHidden = function(e) {
                    var t;
                    return null !== (t = B[e]) && void 0 !== t && t
                };
                r.getSelectedParticipantId = function(e) {
                    var t = D(J(e), 2),
                        n = t[0],
                        r = t[1];
                    return n === T.dF.NONE ? null : n !== T.dF.AUTO ? n : r === T.dF.NONE || r === T.dF.AUTO ? null : r
                };
                r.getSelectedParticipant = function(e) {
                    var t = this.getSelectedParticipantId(e);
                    return null == t ? null : q(e).getParticipant(t)
                };
                r.getSelectedParticipantStats = function(e) {
                    var t = Y[e];
                    return null == t ? {} : {
                        view_mode_grid_duration_ms: Math.floor(t.gridDurationMs),
                        view_mode_focus_duration_ms: Math.floor(t.focusDurationMs),
                        view_mode_toggle_count: t.toggleCount
                    }
                };
                r.getMode = function(e) {
                    var t;
                    return null !== (t = F[e]) && void 0 !== t ? t : fe(e) ? C.WtW.VIDEO : C.WtW.VOICE
                };
                r.getLayout = function(e) {
                    var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : C.IlC.APP;
                    if (__OVERLAY__) return C.AEg.NORMAL;
                    var r, i = p.Z.getChannel(e),
                        o = fe(e) || (null == i ? void 0 : i.isBroadcastChannel());
                    return null !== (r = null === (t = j[e]) || void 0 === t ? void 0 : t[n]) && void 0 !== r ? r : o ? C.AEg.NO_CHAT : C.AEg.NORMAL
                };
                r.getChatOpen = function(e) {
                    var t;
                    return null !== (t = x[e]) && void 0 !== t && t
                };
                r.isFullscreenInContext = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : C.IlC.APP;
                    return Object.values(j).some((function(t) {
                        return t[e] === C.AEg.FULL_SCREEN
                    }))
                };
                r.getStageStreamSize = function(e) {
                    return W[e]
                };
                r.getStageVideoLimitBoostUpsellDismissed = function(e) {
                    return K[e]
                };
                r.__getLocalVars = function() {
                    return {
                        logger: L,
                        activeChannelIds: G,
                        rtcParticipants: k,
                        selectedParticipantIds: H,
                        selectedParticipantStats: Y,
                        modes: F,
                        layouts: j,
                        participantsOpen: V,
                        voiceParticipantsHidden: B,
                        chatOpen: x,
                        stageStreamSize: W,
                        stageVideoLimitBoostUpsellDismissed: K
                    }
                };
                return n
            }(a.ZP.Store);
            _e.displayName = "ChannelRTCStore";
            const Ee = new _e(s.Z, {
                CONNECTION_OPEN: oe,
                CONNECTION_OPEN_SUPPLEMENTAL: oe,
                THREAD_LIST_SYNC: oe,
                OVERLAY_INITIALIZE: oe,
                VOICE_CHANNEL_SELECT: function(e) {
                    var t = e.channelId,
                        n = e.currentVoiceChannelId;
                    if (null != t) delete Y[t];
                    else if (null != n) {
                        delete x[n];
                        delete W[n];
                        $(n)
                    }
                    return oe()
                },
                CHANNEL_SELECT: function(e) {
                    var t = e.channelId,
                        n = e.messageId,
                        r = oe(),
                        i = p.Z.getChannel(t);
                    if (null != t && null != n && ((null == i ? void 0 : i.type) === C.d4z.GUILD_VOICE || (null == i ? void 0 : i.type) === C.d4z.GUILD_STAGE_VOICE) && !x[t]) {
                        x[t] = !0;
                        return !0
                    }
                    return r
                },
                CHANNEL_RTC_ACTIVE_CHANNELS: oe,
                VOICE_STATE_UPDATES: function(e) {
                    var t = e.voiceStates,
                        n = e.initial;
                    return t.reduce((function(e, t) {
                        var r = t.userId,
                            i = t.channelId;
                        return n && null != i && !G.includes(i) ? e : Q(r) || e
                    }), !1)
                },
                CHANNEL_CREATE: function(e) {
                    var t = e.channel;
                    if (t.type === C.d4z.GROUP_DM) {
                        var n = t.originChannelId;
                        if (null != n) {
                            var r, i;
                            j[t.id] = m({}, C.IlC.APP, null !== (i = null === (r = j[n]) || void 0 === r ? void 0 : r[C.IlC.APP]) && void 0 !== i ? i : C.AEg.NORMAL);
                            return !0
                        }
                        t.isBroadcastChannel() && (j[t.id] = m({}, C.IlC.APP, C.AEg.NO_CHAT))
                    }
                    return !1
                },
                CHANNEL_DELETE: ce,
                THREAD_DELETE: ce,
                CALL_CREATE: le,
                CALL_UPDATE: le,
                CALL_DELETE: function(e) {
                    return ie(e.channelId)
                },
                CHANNEL_RTC_SELECT_PARTICIPANT: function(e) {
                    var t = e.channelId,
                        n = e.id,
                        r = q(t);
                    null == n && r.toArray(y.sI.STREAM).forEach((function(e) {
                        (0, T._5)(e) && r.updateParticipant(e.user.id)
                    }));
                    var i = D(J(t), 2)[1];
                    ee(t, [null != n ? n : T.dF.NONE, i]);
                    if ((0, f.DB)(n)) {
                        try {
                            var o = (0, f.my)(n).ownerId;
                            o === E.default.getId() && Q(o, [t])
                        } catch (e) {
                            L.warn("INVALID STREAM KEY FORMAT ".concat(n), e)
                        }
                        te(r) || (V[t] = !1)
                    }
                },
                CHANNEL_RTC_UPDATE_LAYOUT: function(e) {
                    var t = e.channelId,
                        n = e.layout,
                        r = e.appContext;
                    j[t] = R(function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                            }))));
                            r.forEach((function(t) {
                                m(e, t, n[t])
                            }))
                        }
                        return e
                    }({}, j[t]), m({}, r, n))
                },
                CHANNEL_RTC_UPDATE_PARTICIPANTS_OPEN: function(e) {
                    var t = e.channelId,
                        n = e.participantsOpen;
                    V[t] = n
                },
                CHANNEL_RTC_UPDATE_VOICE_PARTICIPANTS_HIDDEN: function(e) {
                    var t = e.channelId,
                        n = e.voiceParticipantsHidden;
                    B[t] = n
                },
                CHANNEL_RTC_UPDATE_STAGE_STREAM_SIZE: function(e) {
                    var t = e.channelId,
                        n = e.large;
                    W[t] = n
                },
                CHANNEL_RTC_UPDATE_STAGE_VIDEO_LIMIT_BOOST_UPSELL_DISMISSED: function(e) {
                    var t = e.channelId,
                        n = e.dismissed;
                    K[t] = n
                },
                STREAM_UPDATE_SELF_HIDDEN: function(e) {
                    var t = e.channelId,
                        n = e.selfStreamHidden,
                        r = E.default.getId();
                    if (n) {
                        var i = D(J(t), 1)[0];
                        (0, f.DB)(i) && i.includes(r) && ee(t, null)
                    }
                    Q(r, [t])
                },
                CHANNEL_RTC_UPDATE_CHAT_OPEN: function(e) {
                    var t = e.channelId,
                        n = e.chatOpen;
                    x[t] = n
                },
                RTC_CONNECTION_VIDEO: function(e) {
                    var t = e.channelId;
                    return Q(e.userId, [t])
                },
                RTC_CONNECTION_PLATFORM: function(e) {
                    var t = e.channelId;
                    return Q(e.userId, [t])
                },
                AUDIO_SET_LOCAL_VIDEO_DISABLED: function(e) {
                    return Q(e.userId)
                },
                MEDIA_ENGINE_VIDEO_SOURCE_QUALITY_CHANGED: function(e) {
                    var t = e.channelId,
                        n = e.senderUserId,
                        r = e.maxResolution,
                        i = e.maxFrameRate;
                    return z((function(e) {
                        return e.updateParticipantQuality(n, r, i)
                    }), [t])
                },
                STREAM_CLOSE: de,
                STREAM_DELETE: de,
                STREAM_WATCH: function(e) {
                    var t = e.streamKey,
                        n = (0, f.my)(t),
                        r = n.channelId;
                    return Q(n.ownerId, [r])
                },
                SPEAKING: ae,
                GUILD_SOUNDBOARD_SOUND_PLAY_START: ae,
                GUILD_SOUNDBOARD_SOUND_PLAY_END: ae,
                USER_UPDATE: se,
                GUILD_MEMBER_UPDATE: se,
                GUILD_DELETE: function(e) {
                    var t = e.guild,
                        n = [];
                    u().forEach(G, (function(e) {
                        var r = p.Z.getChannel(e);
                        null != r && r.getGuildId() !== t.id || n.push(e)
                    }));
                    if (0 === n.length) return !1;
                    u().forEach(n, (function(e) {
                        return ie(e)
                    }))
                }
            })
        },
        327566: (e, t, n) => {
            n.d(t, {
                rd: () => s,
                HK: () => l,
                Do: () => c
            });
            var r = n(842227),
                i = n(202351),
                o = n(439683);

            function u(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function a(e) {
                return function(e) {
                    if (Array.isArray(e)) return u(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return u(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return u(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function s(e, t) {
                var n = a((0, i.e7)([o.Z], (function() {
                    return o.Z.getHighlightedMessageIds(e)
                }), [e]));
                n.sort(r.default.compare);
                return n.filter((function(e) {
                    return r.default.compare(e, t) > 0
                }))
            }

            function l(e, t) {
                var n = a(o.Z.getHighlightedMessageIds(e));
                n.sort(r.default.compare);
                return n.filter((function(e) {
                    return r.default.compare(e, t) > 0
                }))
            }

            function c(e, t) {
                var n = o.Z.getHighlightedMessageIds(e),
                    i = !0,
                    u = !1,
                    a = void 0;
                try {
                    for (var s, l = n[Symbol.iterator](); !(i = (s = l.next()).done); i = !0) {
                        var c = s.value;
                        if (r.default.compare(c, t) > 0) return !0
                    }
                } catch (e) {
                    u = !0;
                    a = e
                } finally {
                    try {
                        i || null == l.return || l.return()
                    } finally {
                        if (u) throw a
                    }
                }
                return !1
            }
        },
        350532: (e, t, n) => {
            n.d(t, {
                OL: () => i,
                hB: () => o
            });
            var r = (0, n(260561).B)({
                kind: "user",
                id: "2022-07_channel_highlights",
                label: "Channel Highlights",
                defaultConfig: {
                    showChannelHighlights: !1
                },
                treatments: [{
                    id: 1,
                    label: "Show Channel Highlights",
                    config: {
                        showChannelHighlights: !0
                    }
                }]
            });

            function i() {
                return r.useExperiment({
                    location: "9a5018_1"
                }, {
                    autoTrackExposure: !1
                }).showChannelHighlights
            }

            function o() {
                return r.getCurrentConfig({
                    location: "9a5018_2"
                }, {
                    autoTrackExposure: !1
                }).showChannelHighlights
            }
        },
        439683: (e, t, n) => {
            n.d(t, {
                Z: () => C
            });
            var r = n(202351),
                i = n(744564),
                o = n(841800),
                u = n(5544),
                a = n(9430),
                s = n(473903),
                l = n(652591),
                c = n(2590);

            function d(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function f(e) {
                f = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return f(e)
            }

            function _(e, t) {
                return !t || "object" !== h(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function E(e, t) {
                E = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return E(e, t)
            }
            var h = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function p(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = f(e);
                    if (t) {
                        var i = f(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return _(this, n)
                }
            }
            var g = new Set,
                v = {},
                I = {},
                N = {},
                O = {},
                y = {};
            var T = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && E(e, t)
                }(n, e);
                var t = p(n);

                function n() {
                    d(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    this.waitFor(a.Z, u.ZP)
                };
                r.getHighlightedMessageIds = function(e) {
                    var t;
                    return null !== (t = v[e]) && void 0 !== t ? t : g
                };
                r.getTempHighlightedMessageIds = function(e) {
                    var t;
                    return null !== (t = O[e]) && void 0 !== t ? t : g
                };
                r.getHighlightedMessageIdCount = function(e) {
                    var t, n;
                    return null !== (n = null === (t = v[e]) || void 0 === t ? void 0 : t.size) && void 0 !== n ? n : 0
                };
                r.getLastFetchedMillis = function(e) {
                    return N[e]
                };
                r.isLoading = function(e) {
                    return "loading" === I[e]
                };
                r.__getLocalVars = function() {
                    return {
                        MAX_HIGHLIGHTS_PER_CHANNEL: 5,
                        EMPTY_SET: g,
                        highlights: v,
                        fetchStatusByGuild: I,
                        lastFetchedMillisByGuild: N,
                        temporaryHighlights: O,
                        loadIds: y
                    }
                };
                return n
            }(r.ZP.Store);
            T.displayName = "ChannelHighlightsStore";
            const C = new T(i.Z, {
                CHANNEL_HIGHLIGHTS_FETCH_START: function(e) {
                    var t = e.guildId;
                    I[t] = "loading"
                },
                CHANNEL_HIGHLIGHTS_FETCH_SUCCESS: function(e) {
                    var t = e.guildId,
                        n = e.data;
                    N[t] = Date.now();
                    var r = s.default.getCurrentUser();
                    if (null == n || null == r) return !1;
                    y[t] = n.load_id;
                    n.channels.forEach((function(e) {
                        v[e.channel_id] = new Set(e.highlighted_message_ids.slice(0, 5))
                    }));
                    l.default.track(c.rMx.GUILD_CHANNEL_HIGHLIGHTS_LOADED, {
                        guild_id: t,
                        num_channels_highlighted: n.channels.length
                    });
                    delete I[t]
                },
                SIDEBAR_VIEW_CHANNEL: function(e) {
                    var t = e.guildId,
                        n = e.details;
                    (null == n ? void 0 : n.type) === o.Ff.HOME && null != t && (O[t] = new Set(n.highlightMessageIds))
                }
            })
        },
        520436: (e, t, n) => {
            n.d(t, {
                s6: () => C,
                ef: () => S,
                Vv: () => m,
                _: () => M,
                On: () => R,
                LO: () => Z,
                bp: () => L,
                sh: () => Y
            });
            var r = n(284157),
                i = n(349139),
                o = n(281110),
                u = n(744564),
                a = n(105783),
                s = n(704560),
                l = n(563367),
                c = n(679450),
                d = n(652591),
                f = n(22176),
                _ = n(412491),
                E = n(409125),
                h = n(919694),
                p = n(2590),
                g = n(473708);

            function v(e, t, n, r, i, o, u) {
                try {
                    var a = e[o](u),
                        s = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(s) : Promise.resolve(s).then(r, i)
            }

            function I(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(t, n);

                        function u(e) {
                            v(o, r, i, u, a, "next", e)
                        }

                        function a(e) {
                            v(o, r, i, u, a, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }

            function N(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function O(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        N(e, t, n[t])
                    }))
                }
                return e
            }
            var y = function(e, t) {
                var n, r, i, o, u = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function a(o) {
                    return function(a) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; u;) try {
                                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                (r = 0, i) && (o = [2 & o[0], i.value]);
                                switch (o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        u.label++;
                                        return {
                                            value: o[1], done: !1
                                        };
                                    case 5:
                                        u.label++;
                                        r = o[1];
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = u.ops.pop();
                                        u.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = u.trys, i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            u = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            u.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && u.label < i[1]) {
                                            u.label = i[1];
                                            i = o;
                                            break
                                        }
                                        if (i && u.label < i[2]) {
                                            u.label = i[2];
                                            u.ops.push(o);
                                            break
                                        }
                                        i[2] && u.ops.pop();
                                        u.trys.pop();
                                        continue
                                }
                                o = t.call(e, u)
                            } catch (e) {
                                o = [6, e];
                                r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, a])
                    }
                }
            };

            function T(e, t) {
                var n, r;
                d.default.track(p.rMx.REMOTE_COMMAND_SENT, {
                    command_type: e,
                    remote_platform: null === (n = c.Z.getSessionById(t)) || void 0 === n || null === (r = n.clientInfo) || void 0 === r ? void 0 : r.os
                })
            }

            function C() {
                return A.apply(this, arguments)
            }

            function A() {
                return (A = I((function() {
                    var e, t, n;
                    return y(this, (function(r) {
                        switch (r.label) {
                            case 0:
                                e = E.Z.getAwaitingRemoteSessionInfo();
                                t = null == e ? void 0 : e.nonce;
                                u.Z.dispatch({
                                    type: "REMOTE_SESSION_DISCONNECT"
                                });
                                n = [];
                                (null == e ? void 0 : e.type) !== p.ABu.PLAYSTATION && (null == e ? void 0 : e.type) !== p.ABu.PLAYSTATION_STAGING || null == (null == e ? void 0 : e.commandId) || null == (null == e ? void 0 : e.deviceId) || n.push(k(e.type, e.deviceId, e.commandId));
                                null != t && n.push(D(t));
                                r.label = 1;
                            case 1:
                                r.trys.push([1, 3, , 4]);
                                return [4, Promise.all(n)];
                            case 2:
                                r.sent();
                                return [3, 4];
                            case 3:
                                r.sent();
                                a.Z.show({
                                    title: g.Z.Messages.CANCEL_TRANSFER_VOICE_FAILED_TITLE,
                                    body: g.Z.Messages.CANCEL_TRANSFER_VOICE_FAILED_BODY
                                });
                                return [3, 4];
                            case 4:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function S(e) {
                u.Z.dispatch({
                    type: "REMOTE_SESSION_CONNECT",
                    sessionId: e
                })
            }

            function m(e, t) {
                var n = t.selfMute,
                    r = t.selfDeaf;
                u.Z.dispatch({
                    type: "REMOTE_COMMAND",
                    sessionId: e,
                    payload: {
                        type: "VOICE_STATE_UPDATE",
                        self_mute: n,
                        self_deaf: r
                    }
                });
                T("VOICE_STATE_UPDATE", e)
            }

            function M(e) {
                u.Z.dispatch({
                    type: "REMOTE_COMMAND",
                    sessionId: e,
                    payload: {
                        type: "DISCONNECT"
                    }
                });
                T("DISCONNECT", e);
                C()
            }

            function R(e, t, n, r) {
                var i = (0, s.z)(n);
                if (null != i) {
                    u.Z.dispatch({
                        type: "REMOTE_COMMAND",
                        sessionId: e,
                        payload: O({
                            type: "AUDIO_SETTINGS_UPDATE",
                            context: i,
                            id: t
                        }, r)
                    });
                    T("AUDIO_SETTINGS_UPDATE", e)
                }
            }

            function b() {
                return U.apply(this, arguments)
            }

            function U() {
                return (U = I((function() {
                    var e, t, n, r;
                    return y(this, (function(u) {
                        switch (u.label) {
                            case 0:
                                u.trys.push([0, 2, , 3]);
                                t = null != l.Z.getRTCConnectionId() ? i.o.TRANSFER_EXISTING_CALL : i.o.CREATE_NEW_CALL;
                                return [4, o.ZP.post({
                                    url: p.ANM.CONNECT_REQUEST_CREATE,
                                    body: {
                                        analytics_properties: {
                                            handoff_type: t
                                        }
                                    }
                                })];
                            case 1:
                                n = u.sent();
                                e = n.body.nonce;
                                return [3, 3];
                            case 2:
                                r = u.sent();
                                f.Z.captureException(r);
                                return [3, 3];
                            case 3:
                                return [2, e]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function D(e) {
                return o.ZP.delete({
                    url: p.ANM.CONNECT_REQUEST(e)
                })
            }

            function Z(e) {
                return P.apply(this, arguments)
            }

            function P() {
                return (P = I((function(e) {
                    var t, n, r;
                    return y(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                u.Z.dispatch({
                                    type: "GAME_CONSOLE_FETCH_DEVICES_START",
                                    platform: e
                                });
                                i.label = 1;
                            case 1:
                                i.trys.push([1, 3, , 4]);
                                return [4, o.ZP.get({
                                    url: p.ANM.CONSOLES_DEVICES(e)
                                })];
                            case 2:
                                t = i.sent();
                                return [3, 4];
                            case 3:
                                n = i.sent();
                                u.Z.dispatch({
                                    type: "GAME_CONSOLE_FETCH_DEVICES_FAIL",
                                    platform: e,
                                    error: n
                                });
                                throw n;
                            case 4:
                                r = t.body.devices;
                                u.Z.dispatch({
                                    type: "GAME_CONSOLE_FETCH_DEVICES_SUCCESS",
                                    platform: e,
                                    devices: r
                                });
                                return [2, r]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function L(e, t) {
                u.Z.dispatch({
                    type: "GAME_CONSOLE_SELECT_DEVICE",
                    platform: e,
                    deviceId: t
                })
            }

            function w(e, t, n, r) {
                return G.apply(this, arguments)
            }

            function G() {
                return (G = I((function(e, t, n, i) {
                    var a, s, l;
                    return y(this, (function(c) {
                        switch (c.label) {
                            case 0:
                                u.Z.dispatch({
                                    type: "GAME_CONSOLE_DEVICE_SEND_COMMAND_START",
                                    platform: e
                                });
                                c.label = 1;
                            case 1:
                                c.trys.push([1, 3, , 4]);
                                return [4, o.ZP.post({
                                    url: p.ANM.CONSOLES_DEVICES_COMMANDS(e, t),
                                    body: {
                                        command: r.n.CONNECT_VOICE,
                                        channel_id: n.id,
                                        guild_id: n.guild_id,
                                        nonce: i
                                    }
                                })];
                            case 2:
                                a = c.sent();
                                return [3, 4];
                            case 3:
                                s = c.sent();
                                u.Z.dispatch({
                                    type: "GAME_CONSOLE_DEVICE_SEND_COMMAND_FAIL",
                                    platform: e,
                                    error: s
                                });
                                throw s;
                            case 4:
                                l = a.body.id;
                                u.Z.dispatch({
                                    type: "WAIT_FOR_REMOTE_SESSION",
                                    sessionType: e,
                                    nonce: i,
                                    channelId: n.id,
                                    deviceId: t,
                                    commandId: l
                                });
                                return [2, l]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function k(e, t, n) {
                return H.apply(this, arguments)
            }

            function H() {
                return (H = I((function(e, t, n) {
                    var r;
                    return y(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                u.Z.dispatch({
                                    type: "GAME_CONSOLE_DEVICE_CANCEL_COMMAND_START",
                                    platform: e,
                                    deviceId: t,
                                    commandId: n
                                });
                                i.label = 1;
                            case 1:
                                i.trys.push([1, 3, , 4]);
                                return [4, o.ZP.delete({
                                    url: p.ANM.CONSOLES_DEVICES_COMMAND(e, t, n)
                                })];
                            case 2:
                                i.sent();
                                return [3, 4];
                            case 3:
                                r = i.sent();
                                u.Z.dispatch({
                                    type: "GAME_CONSOLE_DEVICE_CANCEL_COMMAND_FAIL",
                                    platform: e,
                                    deviceId: t,
                                    commandId: n,
                                    error: r
                                });
                                throw r;
                            case 4:
                                u.Z.dispatch({
                                    type: "GAME_CONSOLE_DEVICE_CANCEL_COMMAND_SUCCESS",
                                    platform: e,
                                    deviceId: t,
                                    commandId: n
                                });
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function Y(e, t, n) {
                return F.apply(this, arguments)
            }

            function F() {
                return (F = I((function(e, t, n) {
                    var r;
                    return y(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, _.Z.maybeShowPTTAlert(e)];
                            case 1:
                                i.sent();
                                return [4, C()];
                            case 2:
                                i.sent();
                                return [4, b()];
                            case 3:
                                r = i.sent();
                                return [4, w(e, t, n, r)];
                            case 4:
                                i.sent();
                                (0, h.Z)(n.id, e);
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }
        },
        412491: (e, t, n) => {
            n.d(t, {
                Z: () => r
            });
            const r = n(913413).Z
        },
        550677: (e, t, n) => {
            n.d(t, {
                bJ: () => o,
                X3: () => u,
                zM: () => a,
                tA: () => s,
                uu: () => l,
                KL: () => c,
                Lc: () => d,
                YE: () => r,
                al: () => _,
                Ry: () => f,
                e8: () => E,
                Lw: () => h
            });
            var r, i = n(2590),
                o = "xbox://communitylinking/donut/audio",
                u = "https://www.xbox.com/en-US/apps/xbox-app-for-mobile",
                a = "https://login.live.com",
                s = [i.xVR.VOICE, i.xVR.DM_CHANNELS_READ, i.xVR.GUILDS, i.xVR.GUILDS_MEMBERS_READ, i.xVR.IDENTIFY, i.xVR.CONNECTIONS],
                l = "https://my.account.sony.com",
                c = s,
                d = function(e) {
                    var t = e.guildId,
                        n = e.channelName,
                        r = e.guildName,
                        i = e.channelId,
                        o = e.muted,
                        u = e.deafened,
                        a = e.nonce,
                        s = {
                            channelid: i,
                            guildid: t,
                            channelname: n,
                            guildname: r,
                            muted: String(o),
                            deafened: String(u)
                        };
                    null != a && (s.nonce = a);
                    return new URLSearchParams(s)
                };
            ! function(e) {
                e.PLAYSTATION = "playstation";
                e.XBOX = "xbox"
            }(r || (r = {}));
            var f, _ = new Set([r.XBOX, r.PLAYSTATION]);
            new Set([i.M7m.XBOX, i.M7m.PS5]);
            ! function(e) {
                e[e.CONSOLE_DEVICE_PASSCODE_UNLOCK_REQUIRED = 27e4] = "CONSOLE_DEVICE_PASSCODE_UNLOCK_REQUIRED";
                e[e.CONSOLE_DEVICE_UNAVAILABLE = 270001] = "CONSOLE_DEVICE_UNAVAILABLE";
                e[e.CONSOLE_DEVICE_UNVAILABLE_FROM_OTHER_USERS = 270002] = "CONSOLE_DEVICE_UNVAILABLE_FROM_OTHER_USERS";
                e[e.CONSOLE_DEVICE_COMMUNICATION_RESTRICTED = 270003] = "CONSOLE_DEVICE_COMMUNICATION_RESTRICTED";
                e[e.CONSOLE_DEVICE_INVALID_POWER_MODE = 270004] = "CONSOLE_DEVICE_INVALID_POWER_MODE";
                e[e.CONSOLE_DEVICE_ACCOUNT_LINK_ERROR = 270005] = "CONSOLE_DEVICE_ACCOUNT_LINK_ERROR";
                e[e.CONSOLE_DEVICE_MAX_MEMBERS_REACHED = 270006] = "CONSOLE_DEVICE_MAX_MEMBERS_REACHED";
                e[e.CONSOLE_DEVICE_BAD_COMMAND = 270007] = "CONSOLE_DEVICE_BAD_COMMAND"
            }(f || (f = {}));
            var E = new Set([f.CONSOLE_DEVICE_PASSCODE_UNLOCK_REQUIRED]),
                h = "console error alert"
        },
        919694: (e, t, n) => {
            n.d(t, {
                Z: () => s
            });
            var r = n(61209),
                i = n(563367),
                o = n(679450),
                u = n(652591),
                a = n(2590);

            function s(e, t, n) {
                var s, l;
                u.default.track(a.rMx.VOICE_CALL_TRANSFER, {
                    source_platform: null != n ? null === (s = o.Z.getSessionById(n)) || void 0 === s ? void 0 : s.clientInfo.os : "discord_client",
                    guild_id: null === (l = r.Z.getChannel(e)) || void 0 === l ? void 0 : l.guild_id,
                    channel_id: e,
                    rtc_connection_id: i.Z.getRTCConnectionId(),
                    target_platform: t
                })
            }
        },
        913413: (e, t, n) => {
            n.d(t, {
                Z: () => m
            });
            var r = n(785893),
                i = n(667294),
                o = n(418705),
                u = n(264817),
                a = n(895303),
                s = n(497842),
                l = n(896490),
                c = n(52467),
                d = n(652591),
                f = n(202351),
                _ = n(409125),
                E = n(127442),
                h = n.n(E);

            function p(e) {
                var t = e.body,
                    n = e.dismissCallback,
                    o = e.errorCodeMessage,
                    u = (0, f.e7)([_.Z], (function() {
                        return _.Z.getRemoteSessionId()
                    }));
                i.useEffect((function() {
                    null != u && n()
                }), [u, n]);
                return null == o ? (0, r.jsx)(r.Fragment, {
                    children: t
                }) : (0, r.jsxs)(r.Fragment, {
                    children: [t, (0, r.jsx)("div", {
                        className: h().errorCodeMessage,
                        children: o
                    })]
                })
            }
            var g = n(550677),
                v = n(2590),
                I = n(473708),
                N = n(811339),
                O = n.n(N);

            function y(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function T(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        y(e, t, n[t])
                    }))
                }
                return e
            }

            function C(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }
            var A = "game_console_alert_modal",
                S = "game_console_ptt_alert_modal";
            const m = {
                maybeShowPTTAlert: function(e) {
                    if (c.Z.getMode() !== v.pM4.PUSH_TO_TALK || (0, l.un)(o.z$.CONSOLE_PTT_DISABLE_ALERT)) return Promise.resolve();
                    var t, n = (y(t = {}, v.ABu.XBOX, I.Z.Messages.PTT_NOT_SUPPORTED_XBOX), y(t, v.ABu.PLAYSTATION, I.Z.Messages.PTT_NOT_SUPPORTED_PLAYSTATION), y(t, v.ABu.PLAYSTATION_STAGING, I.Z.Messages.PTT_NOT_SUPPORTED_PLAYSTATION), t)[e];
                    return null == n ? Promise.resolve() : new Promise((function(e) {
                        var t = function() {
                                (0, l.EW)(o.z$.CONSOLE_PTT_DISABLE_ALERT);
                                e()
                            },
                            i = function(e) {
                                return (0, r.jsx)(a.default, C(T({}, e), {
                                    title: n,
                                    body: I.Z.Messages.PTT_NOT_SUPPORTED_ALERT_BODY,
                                    onConfirm: t,
                                    titleClassName: O().title
                                }))
                            };
                        (0, u.nf)(S) ? (0, u.o)(S, i) : (0, u.h7)(i, {
                            modalKey: S
                        })
                    }))
                },
                showSelfDismissableAlert: function(e) {
                    var t = e.title,
                        n = e.body,
                        i = e.errorCodeMessage,
                        o = e.reconnectPlatformType,
                        l = function() {
                            if (null != o) {
                                (0, s.Z)(o);
                                d.default.track(v.rMx.ACCOUNT_LINK_STEP, {
                                    previous_step: g.Lw,
                                    current_step: "desktop oauth",
                                    platform_type: o
                                })
                            }
                        },
                        c = (0, r.jsx)(p, {
                            body: n,
                            errorCodeMessage: i,
                            dismissCallback: function() {
                                return (0, u.Mr)(A)
                            }
                        }),
                        f = function(e) {
                            return (0, r.jsx)(a.default, C(T({}, e), {
                                title: t,
                                body: c,
                                onConfirm: l
                            }))
                        };
                    (0, u.nf)(A) ? (0, u.o)(A, f) : (0, u.h7)(f, {
                        modalKey: A
                    })
                }
            }
        },
        306263: (e, t, n) => {
            n.d(t, {
                DB: () => u,
                my: () => a,
                V9: () => s
            });
            var r = n(443132);

            function i(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function o(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, o = [],
                            u = !0,
                            a = !1;
                        try {
                            for (n = n.call(e); !(u = (r = n.next()).done); u = !0) {
                                o.push(r.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            a = !0;
                            i = e
                        } finally {
                            try {
                                u || null == n.return || n.return()
                            } finally {
                                if (a) throw i
                            }
                        }
                        return o
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return i(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return i(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function u(e) {
                return null != e && (e.startsWith(r.lo.GUILD) || e.startsWith(r.lo.CALL))
            }

            function a(e) {
                var t = e.split(":"),
                    n = t[0];
                switch (n) {
                    case r.lo.GUILD:
                        var i = o(t, 4);
                        return {
                            streamType: i[0], guildId: i[1], channelId: i[2], ownerId: i[3]
                        };
                    case r.lo.CALL:
                        var u = o(t, 3);
                        return {
                            streamType: u[0], channelId: u[1], ownerId: u[2]
                        };
                    default:
                        throw new Error("Unknown stream type ".concat(n))
                }
            }

            function s(e) {
                var t = e.streamType,
                    n = e.guildId,
                    i = e.channelId,
                    o = e.ownerId;
                switch (t) {
                    case r.lo.GUILD:
                        return [t, n, i, o].join(":");
                    case r.lo.CALL:
                        return [t, i, o].join(":");
                    default:
                        throw new Error("Unknown stream type ".concat(t))
                }
            }
        },
        924066: (e, t, n) => {
            n.d(t, {
                JL: () => h,
                P9: () => p,
                p9: () => g,
                wq: () => v,
                h_: () => I
            });
            var r, i = n(940060),
                o = n(202351),
                u = n(409125),
                a = n(5544),
                s = n(567403),
                l = n(682776),
                c = n(407561),
                d = n(176758),
                f = n(2590),
                _ = n(473708),
                E = function(e, t) {
                    return e.isPrivate() || t.can(i.Z.combine(f.Plq.CONNECT, f.Plq.VIEW_CHANNEL), e)
                };

            function h(e, t, n) {
                var r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
                if (e.isPrivate()) return !0;
                var i, o = t.getGuild(e.getGuildId()),
                    u = null !== (i = null == o ? void 0 : o.maxStageVideoChannelUsers) && void 0 !== i ? i : 0;
                return !(e.isGuildStageVoice() && u <= 0) && (!(r && !E(e, n)) && (!!n.can(f.Plq.STREAM, e) && (null != o && o.afkChannelId !== e.id)))
            }

            function p(e) {
                switch (e) {
                    case r.REMOTE_MODE:
                        return _.Z.Messages.CONSOLE_STREAM_UNAVAILABLE;
                    case r.CHANNEL_FULL:
                        return _.Z.Messages.UNABLE_TO_JOIN_CHANNEL_FULL_MODAL_HEADER;
                    case r.NO_PERMISSION:
                        return _.Z.Messages.STREAM_NO_PERMISSION_CTA;
                    default:
                        return _.Z.Messages.WATCH_STREAM
                }
            }! function(e) {
                e[e.REMOTE_MODE = 0] = "REMOTE_MODE";
                e[e.CHANNEL_FULL = 1] = "CHANNEL_FULL";
                e[e.NO_PERMISSION = 2] = "NO_PERMISSION"
            }(r || (r = {}));

            function g(e, t, n, i, o) {
                var u;
                if (null == e) return [!1, r.NO_PERMISSION];
                var a = t.isInChannel(e.id),
                    s = (0,
                        d.rY)(e, t, n),
                    l = E(e, i),
                    c = null != o.getAwaitingRemoteSessionInfo() || null != o.getRemoteSessionId();
                c ? u = r.REMOTE_MODE : l || a ? s && !a && (u = r.CHANNEL_FULL) : u = r.NO_PERMISSION;
                return [!__OVERLAY__ && !c && (a || l && !s), u]
            }

            function v(e) {
                return (0, o.Wu)([c.Z, s.Z, l.Z, u.Z], (function() {
                    return g(e, c.Z, s.Z, l.Z, u.Z)
                }))
            }

            function I(e, t, n) {
                var r = [],
                    i = !0,
                    o = !1,
                    u = void 0;
                try {
                    for (var s, l = e[a.Zb][Symbol.iterator](); !(i = (s = l.next()).done); i = !0) {
                        var c = s.value.channel;
                        h(c, t, n) && r.push(c)
                    }
                } catch (e) {
                    o = !0;
                    u = e
                } finally {
                    try {
                        i || null == l.return || l.return()
                    } finally {
                        if (o) throw u
                    }
                }
                return r
            }
        },
        39649: (e, t, n) => {
            n.d(t, {
                Z: () => i
            });
            var r = n(36256);

            function i(e) {
                return e.supportsInApp(r.AN.VIDEO)
            }
        },
        998918: (e, t, n) => {
            n.d(t, {
                RX: () => i,
                kC: () => o
            });
            var r = (0, n(260561).B)({
                kind: "user",
                id: "2022-08_guild_unreads",
                label: "Guild Unreads",
                defaultConfig: {
                    allowUnreadHighlightsOption: !1
                },
                treatments: [{
                    id: 1,
                    label: 'Allow "Highlights" as an Unreads Option',
                    config: {
                        allowUnreadHighlightsOption: !0
                    }
                }]
            });

            function i() {
                return r.useExperiment({
                    location: "6728b0_1"
                }, {
                    autoTrackExposure: !1
                }).allowUnreadHighlightsOption
            }

            function o() {
                return r.getCurrentConfig({
                    location: "6728b0_2"
                }, {
                    autoTrackExposure: !1
                }).allowUnreadHighlightsOption
            }
        },
        839266: (e, t, n) => {
            n.d(t, {
                LS: () => _,
                nH: () => E,
                j$: () => h
            });
            var r = n(441143),
                i = n.n(r),
                o = n(202351),
                u = n(487685),
                a = n(382060),
                s = n(61209),
                l = n(9430),
                c = n(998918),
                d = n(736401),
                f = n(2590);

            function _(e) {
                var t = e.isExperimentEnabled,
                    n = e.hasUserEnabledGuildUnreads,
                    r = e.channelNotificationOverrides,
                    i = e.categoryNotificationOverrides,
                    o = e.unreadSetting,
                    u = e.hasJoinedThread,
                    a = null != r && r.message_notifications !== f.bL.NULL || null != i && i.message_notifications !== f.bL.NULL;
                return t && n ? u ? d.N.ALL_MESSAGES : a ? null == o || o === d.N.NULL ? d.N.ALL_MESSAGES : o : null != o ? o : d.N.NULL : d.N.ALL_MESSAGES
            }

            function E(e) {
                var t = null == e ? void 0 : e.guild_id,
                    n = null == e ? void 0 : e.parent_id,
                    r = (0, o.e7)([s.Z], (function() {
                        return s.Z.getChannel(n)
                    }), [n]),
                    a = (null == e ? void 0 : e.isThread()) ? n : null == e ? void 0 : e.id;
                i()(null != a, "parent_id cannot be null for threads");
                var f = (null == e ? void 0 : e.isThread()) ? null == r ? void 0 : r.parent_id : n,
                    E = (0, c.RX)(),
                    h = (0, o.cj)([l.Z], (function() {
                        return {
                            channelNotificationOverrides: l.Z.getChannelOverrides(t)[a],
                            categoryNotificationOverrides: null != f ? l.Z.getChannelOverrides(t)[f] : null,
                            unreadSetting: null != t ? l.Z.getChannelUnreadSetting(t, a) : d.N.NULL,
                            hasUserEnabledGuildUnreads: null != t && l.Z.isGuildUnreadSettingEnabled(t)
                        }
                    }), [t, a, f]),
                    p = h.channelNotificationOverrides,
                    g = h.categoryNotificationOverrides,
                    v = h.unreadSetting;
                return _({
                    isExperimentEnabled: E,
                    hasUserEnabledGuildUnreads: h.hasUserEnabledGuildUnreads,
                    channelNotificationOverrides: p,
                    categoryNotificationOverrides: g,
                    unreadSetting: v,
                    hasJoinedThread: (0, o.e7)([u.Z], (function() {
                        return null != (null == e ? void 0 : e.id) && u.Z.hasJoined(e.id)
                    }))
                })
            }

            function h(e) {
                var t = e.guild_id,
                    n = s.Z.getBasicChannel(e.parent_id),
                    r = (0, a.Q5)(e.type) ? e.parent_id : e.id;
                i()(null != r, "parent_id cannot be null for threads");
                var o = (0, a.Q5)(e.type) ? null == n ? void 0 : n.parent_id : e.parent_id,
                    d = (0,
                        c.kC)(),
                    f = l.Z.isGuildUnreadSettingEnabled(t),
                    E = l.Z.getChannelUnreadSetting(t, r);
                return _({
                    isExperimentEnabled: d,
                    hasUserEnabledGuildUnreads: f,
                    channelNotificationOverrides: l.Z.getChannelOverrides(t)[r],
                    categoryNotificationOverrides: null != o ? l.Z.getChannelOverrides(t)[o] : null,
                    unreadSetting: E,
                    hasJoinedThread: u.Z.hasJoined(e.id)
                })
            }
        },
        335186: (e, t, n) => {
            n.d(t, {
                Zz: () => a,
                K4: () => s,
                q9: () => c
            });
            var r = n(441143),
                i = n.n(r),
                o = n(268335),
                u = n(473708);

            function a(e) {
                var t = o.Z.find((function(t) {
                    return t.alpha2 === e
                }));
                if (null != t) return {
                    name: t.name,
                    code: t.phoneCountryCode,
                    alpha2: t.alpha2
                }
            }

            function s() {
                var e = function(e) {
                    var t = o.Z.find((function(t) {
                        return t.name === e
                    }));
                    if (null != t) return {
                        name: t.name,
                        code: t.phoneCountryCode,
                        alpha2: t.alpha2
                    }
                }("United States");
                i()(e, "Default country code cannot be missing.");
                return e
            }
            var l = {
                AF: function() {
                    return u.Z.Messages.COUNTRY_NAME_AF
                },
                AX: function() {
                    return u.Z.Messages.COUNTRY_NAME_AX
                },
                AL: function() {
                    return u.Z.Messages.COUNTRY_NAME_AL
                },
                DZ: function() {
                    return u.Z.Messages.COUNTRY_NAME_DZ
                },
                AS: function() {
                    return u.Z.Messages.COUNTRY_NAME_AS
                },
                AD: function() {
                    return u.Z.Messages.COUNTRY_NAME_AD
                },
                AO: function() {
                    return u.Z.Messages.COUNTRY_NAME_AO
                },
                AI: function() {
                    return u.Z.Messages.COUNTRY_NAME_AI
                },
                AQ: function() {
                    return u.Z.Messages.COUNTRY_NAME_AQ
                },
                AG: function() {
                    return u.Z.Messages.COUNTRY_NAME_AG
                },
                AR: function() {
                    return u.Z.Messages.COUNTRY_NAME_AR
                },
                AM: function() {
                    return u.Z.Messages.COUNTRY_NAME_AM
                },
                AW: function() {
                    return u.Z.Messages.COUNTRY_NAME_AW
                },
                AC: function() {
                    return u.Z.Messages.COUNTRY_NAME_AC
                },
                AU: function() {
                    return u.Z.Messages.COUNTRY_NAME_AU
                },
                AT: function() {
                    return u.Z.Messages.COUNTRY_NAME_AT
                },
                AZ: function() {
                    return u.Z.Messages.COUNTRY_NAME_AZ
                },
                BS: function() {
                    return u.Z.Messages.COUNTRY_NAME_BS
                },
                BH: function() {
                    return u.Z.Messages.COUNTRY_NAME_BH
                },
                BD: function() {
                    return u.Z.Messages.COUNTRY_NAME_BD
                },
                BB: function() {
                    return u.Z.Messages.COUNTRY_NAME_BB
                },
                BY: function() {
                    return u.Z.Messages.COUNTRY_NAME_BY
                },
                BE: function() {
                    return u.Z.Messages.COUNTRY_NAME_BE
                },
                BZ: function() {
                    return u.Z.Messages.COUNTRY_NAME_BZ
                },
                BJ: function() {
                    return u.Z.Messages.COUNTRY_NAME_BJ
                },
                BM: function() {
                    return u.Z.Messages.COUNTRY_NAME_BM
                },
                BT: function() {
                    return u.Z.Messages.COUNTRY_NAME_BT
                },
                BO: function() {
                    return u.Z.Messages.COUNTRY_NAME_BO
                },
                BQ: function() {
                    return u.Z.Messages.COUNTRY_NAME_BQ
                },
                BA: function() {
                    return u.Z.Messages.COUNTRY_NAME_BA
                },
                BW: function() {
                    return u.Z.Messages.COUNTRY_NAME_BW
                },
                BV: function() {
                    return u.Z.Messages.COUNTRY_NAME_BV
                },
                BR: function() {
                    return u.Z.Messages.COUNTRY_NAME_BR
                },
                IO: function() {
                    return u.Z.Messages.COUNTRY_NAME_IO
                },
                BN: function() {
                    return u.Z.Messages.COUNTRY_NAME_BN
                },
                BG: function() {
                    return u.Z.Messages.COUNTRY_NAME_BG
                },
                BF: function() {
                    return u.Z.Messages.COUNTRY_NAME_BF
                },
                BI: function() {
                    return u.Z.Messages.COUNTRY_NAME_BI
                },
                KH: function() {
                    return u.Z.Messages.COUNTRY_NAME_KH
                },
                CM: function() {
                    return u.Z.Messages.COUNTRY_NAME_CM
                },
                CA: function() {
                    return u.Z.Messages.COUNTRY_NAME_CA
                },
                CV: function() {
                    return u.Z.Messages.COUNTRY_NAME_CV
                },
                KY: function() {
                    return u.Z.Messages.COUNTRY_NAME_KY
                },
                CF: function() {
                    return u.Z.Messages.COUNTRY_NAME_CF
                },
                TD: function() {
                    return u.Z.Messages.COUNTRY_NAME_TD
                },
                CL: function() {
                    return u.Z.Messages.COUNTRY_NAME_CL
                },
                CN: function() {
                    return u.Z.Messages.COUNTRY_NAME_CN
                },
                CX: function() {
                    return u.Z.Messages.COUNTRY_NAME_CX
                },
                CC: function() {
                    return u.Z.Messages.COUNTRY_NAME_CC
                },
                CO: function() {
                    return u.Z.Messages.COUNTRY_NAME_CO
                },
                KM: function() {
                    return u.Z.Messages.COUNTRY_NAME_KM
                },
                CG: function() {
                    return u.Z.Messages.COUNTRY_NAME_CG
                },
                CD: function() {
                    return u.Z.Messages.COUNTRY_NAME_CD
                },
                CK: function() {
                    return u.Z.Messages.COUNTRY_NAME_CK
                },
                CR: function() {
                    return u.Z.Messages.COUNTRY_NAME_CR
                },
                CI: function() {
                    return u.Z.Messages.COUNTRY_NAME_CI
                },
                HR: function() {
                    return u.Z.Messages.COUNTRY_NAME_HR
                },
                CU: function() {
                    return u.Z.Messages.COUNTRY_NAME_CU
                },
                CW: function() {
                    return u.Z.Messages.COUNTRY_NAME_CW
                },
                CY: function() {
                    return u.Z.Messages.COUNTRY_NAME_CY
                },
                CZ: function() {
                    return u.Z.Messages.COUNTRY_NAME_CZ
                },
                DK: function() {
                    return u.Z.Messages.COUNTRY_NAME_DK
                },
                DG: function() {
                    return u.Z.Messages.COUNTRY_NAME_DG
                },
                DJ: function() {
                    return u.Z.Messages.COUNTRY_NAME_DJ
                },
                DM: function() {
                    return u.Z.Messages.COUNTRY_NAME_DM
                },
                DO: function() {
                    return u.Z.Messages.COUNTRY_NAME_DO
                },
                TP: function() {
                    return u.Z.Messages.COUNTRY_NAME_TP
                },
                EC: function() {
                    return u.Z.Messages.COUNTRY_NAME_EC
                },
                EG: function() {
                    return u.Z.Messages.COUNTRY_NAME_EG
                },
                SV: function() {
                    return u.Z.Messages.COUNTRY_NAME_SV
                },
                GQ: function() {
                    return u.Z.Messages.COUNTRY_NAME_GQ
                },
                ER: function() {
                    return u.Z.Messages.COUNTRY_NAME_ER
                },
                EE: function() {
                    return u.Z.Messages.COUNTRY_NAME_EE
                },
                ET: function() {
                    return u.Z.Messages.COUNTRY_NAME_ET
                },
                FK: function() {
                    return u.Z.Messages.COUNTRY_NAME_FK
                },
                FO: function() {
                    return u.Z.Messages.COUNTRY_NAME_FO
                },
                FJ: function() {
                    return u.Z.Messages.COUNTRY_NAME_FJ
                },
                FI: function() {
                    return u.Z.Messages.COUNTRY_NAME_FI
                },
                FR: function() {
                    return u.Z.Messages.COUNTRY_NAME_FR
                },
                GF: function() {
                    return u.Z.Messages.COUNTRY_NAME_GF
                },
                PF: function() {
                    return u.Z.Messages.COUNTRY_NAME_PF
                },
                TF: function() {
                    return u.Z.Messages.COUNTRY_NAME_TF
                },
                GA: function() {
                    return u.Z.Messages.COUNTRY_NAME_GA
                },
                GM: function() {
                    return u.Z.Messages.COUNTRY_NAME_GM
                },
                GE: function() {
                    return u.Z.Messages.COUNTRY_NAME_GE
                },
                DE: function() {
                    return u.Z.Messages.COUNTRY_NAME_DE
                },
                GH: function() {
                    return u.Z.Messages.COUNTRY_NAME_GH
                },
                GI: function() {
                    return u.Z.Messages.COUNTRY_NAME_GI
                },
                GR: function() {
                    return u.Z.Messages.COUNTRY_NAME_GR
                },
                GL: function() {
                    return u.Z.Messages.COUNTRY_NAME_GL
                },
                GD: function() {
                    return u.Z.Messages.COUNTRY_NAME_GD
                },
                GP: function() {
                    return u.Z.Messages.COUNTRY_NAME_GP
                },
                GU: function() {
                    return u.Z.Messages.COUNTRY_NAME_GU
                },
                GT: function() {
                    return u.Z.Messages.COUNTRY_NAME_GT
                },
                GG: function() {
                    return u.Z.Messages.COUNTRY_NAME_GG
                },
                GN: function() {
                    return u.Z.Messages.COUNTRY_NAME_GN
                },
                GW: function() {
                    return u.Z.Messages.COUNTRY_NAME_GW
                },
                GY: function() {
                    return u.Z.Messages.COUNTRY_NAME_GY
                },
                HT: function() {
                    return u.Z.Messages.COUNTRY_NAME_HT
                },
                HM: function() {
                    return u.Z.Messages.COUNTRY_NAME_HM
                },
                VA: function() {
                    return u.Z.Messages.COUNTRY_NAME_VA
                },
                HN: function() {
                    return u.Z.Messages.COUNTRY_NAME_HN
                },
                HK: function() {
                    return u.Z.Messages.COUNTRY_NAME_HK
                },
                HU: function() {
                    return u.Z.Messages.COUNTRY_NAME_HU
                },
                IS: function() {
                    return u.Z.Messages.COUNTRY_NAME_IS
                },
                IN: function() {
                    return u.Z.Messages.COUNTRY_NAME_IN
                },
                ID: function() {
                    return u.Z.Messages.COUNTRY_NAME_ID
                },
                IR: function() {
                    return u.Z.Messages.COUNTRY_NAME_IR
                },
                IQ: function() {
                    return u.Z.Messages.COUNTRY_NAME_IQ
                },
                IE: function() {
                    return u.Z.Messages.COUNTRY_NAME_IE
                },
                IM: function() {
                    return u.Z.Messages.COUNTRY_NAME_IM
                },
                IL: function() {
                    return u.Z.Messages.COUNTRY_NAME_IL
                },
                IT: function() {
                    return u.Z.Messages.COUNTRY_NAME_IT
                },
                JM: function() {
                    return u.Z.Messages.COUNTRY_NAME_JM
                },
                JP: function() {
                    return u.Z.Messages.COUNTRY_NAME_JP
                },
                JE: function() {
                    return u.Z.Messages.COUNTRY_NAME_JE
                },
                JO: function() {
                    return u.Z.Messages.COUNTRY_NAME_JO
                },
                KZ: function() {
                    return u.Z.Messages.COUNTRY_NAME_KZ
                },
                KE: function() {
                    return u.Z.Messages.COUNTRY_NAME_KE
                },
                KI: function() {
                    return u.Z.Messages.COUNTRY_NAME_KI
                },
                XK: function() {
                    return u.Z.Messages.COUNTRY_NAME_XK
                },
                KP: function() {
                    return u.Z.Messages.COUNTRY_NAME_KP
                },
                KR: function() {
                    return u.Z.Messages.COUNTRY_NAME_KR
                },
                KW: function() {
                    return u.Z.Messages.COUNTRY_NAME_KW
                },
                KG: function() {
                    return u.Z.Messages.COUNTRY_NAME_KG
                },
                LA: function() {
                    return u.Z.Messages.COUNTRY_NAME_LA
                },
                LV: function() {
                    return u.Z.Messages.COUNTRY_NAME_LV
                },
                LB: function() {
                    return u.Z.Messages.COUNTRY_NAME_LB
                },
                LS: function() {
                    return u.Z.Messages.COUNTRY_NAME_LS
                },
                LR: function() {
                    return u.Z.Messages.COUNTRY_NAME_LR
                },
                LY: function() {
                    return u.Z.Messages.COUNTRY_NAME_LY
                },
                LI: function() {
                    return u.Z.Messages.COUNTRY_NAME_LI
                },
                LT: function() {
                    return u.Z.Messages.COUNTRY_NAME_LT
                },
                LU: function() {
                    return u.Z.Messages.COUNTRY_NAME_LU
                },
                MO: function() {
                    return u.Z.Messages.COUNTRY_NAME_MO
                },
                MK: function() {
                    return u.Z.Messages.COUNTRY_NAME_MK
                },
                MG: function() {
                    return u.Z.Messages.COUNTRY_NAME_MG
                },
                MW: function() {
                    return u.Z.Messages.COUNTRY_NAME_MW
                },
                MY: function() {
                    return u.Z.Messages.COUNTRY_NAME_MY
                },
                MV: function() {
                    return u.Z.Messages.COUNTRY_NAME_MV
                },
                ML: function() {
                    return u.Z.Messages.COUNTRY_NAME_ML
                },
                MT: function() {
                    return u.Z.Messages.COUNTRY_NAME_MT
                },
                MH: function() {
                    return u.Z.Messages.COUNTRY_NAME_MH
                },
                MQ: function() {
                    return u.Z.Messages.COUNTRY_NAME_MQ
                },
                MR: function() {
                    return u.Z.Messages.COUNTRY_NAME_MR
                },
                MU: function() {
                    return u.Z.Messages.COUNTRY_NAME_MU
                },
                YT: function() {
                    return u.Z.Messages.COUNTRY_NAME_YT
                },
                MX: function() {
                    return u.Z.Messages.COUNTRY_NAME_MX
                },
                FM: function() {
                    return u.Z.Messages.COUNTRY_NAME_FM
                },
                MI: function() {
                    return u.Z.Messages.COUNTRY_NAME_MI
                },
                MD: function() {
                    return u.Z.Messages.COUNTRY_NAME_MD
                },
                MC: function() {
                    return u.Z.Messages.COUNTRY_NAME_MC
                },
                MN: function() {
                    return u.Z.Messages.COUNTRY_NAME_MN
                },
                ME: function() {
                    return u.Z.Messages.COUNTRY_NAME_ME
                },
                MS: function() {
                    return u.Z.Messages.COUNTRY_NAME_MS
                },
                MA: function() {
                    return u.Z.Messages.COUNTRY_NAME_MA
                },
                MZ: function() {
                    return u.Z.Messages.COUNTRY_NAME_MZ
                },
                MM: function() {
                    return u.Z.Messages.COUNTRY_NAME_MM
                },
                NA: function() {
                    return u.Z.Messages.COUNTRY_NAME_NA
                },
                NR: function() {
                    return u.Z.Messages.COUNTRY_NAME_NR
                },
                NP: function() {
                    return u.Z.Messages.COUNTRY_NAME_NP
                },
                NL: function() {
                    return u.Z.Messages.COUNTRY_NAME_NL
                },
                AN: function() {
                    return u.Z.Messages.COUNTRY_NAME_AN
                },
                NC: function() {
                    return u.Z.Messages.COUNTRY_NAME_NC
                },
                NZ: function() {
                    return u.Z.Messages.COUNTRY_NAME_NZ
                },
                NI: function() {
                    return u.Z.Messages.COUNTRY_NAME_NI
                },
                NE: function() {
                    return u.Z.Messages.COUNTRY_NAME_NE
                },
                NG: function() {
                    return u.Z.Messages.COUNTRY_NAME_NG
                },
                NU: function() {
                    return u.Z.Messages.COUNTRY_NAME_NU
                },
                NF: function() {
                    return u.Z.Messages.COUNTRY_NAME_NF
                },
                MP: function() {
                    return u.Z.Messages.COUNTRY_NAME_MP
                },
                NO: function() {
                    return u.Z.Messages.COUNTRY_NAME_NO
                },
                OM: function() {
                    return u.Z.Messages.COUNTRY_NAME_OM
                },
                PK: function() {
                    return u.Z.Messages.COUNTRY_NAME_PK
                },
                PW: function() {
                    return u.Z.Messages.COUNTRY_NAME_PW
                },
                PS: function() {
                    return u.Z.Messages.COUNTRY_NAME_PS
                },
                PA: function() {
                    return u.Z.Messages.COUNTRY_NAME_PA
                },
                PG: function() {
                    return u.Z.Messages.COUNTRY_NAME_PG
                },
                PY: function() {
                    return u.Z.Messages.COUNTRY_NAME_PY
                },
                PE: function() {
                    return u.Z.Messages.COUNTRY_NAME_PE
                },
                PH: function() {
                    return u.Z.Messages.COUNTRY_NAME_PH
                },
                PN: function() {
                    return u.Z.Messages.COUNTRY_NAME_PN
                },
                PL: function() {
                    return u.Z.Messages.COUNTRY_NAME_PL
                },
                PT: function() {
                    return u.Z.Messages.COUNTRY_NAME_PT
                },
                PR: function() {
                    return u.Z.Messages.COUNTRY_NAME_PR
                },
                QA: function() {
                    return u.Z.Messages.COUNTRY_NAME_QA
                },
                RE: function() {
                    return u.Z.Messages.COUNTRY_NAME_RE
                },
                RO: function() {
                    return u.Z.Messages.COUNTRY_NAME_RO
                },
                RU: function() {
                    return u.Z.Messages.COUNTRY_NAME_RU
                },
                RW: function() {
                    return u.Z.Messages.COUNTRY_NAME_RW
                },
                BL: function() {
                    return u.Z.Messages.COUNTRY_NAME_BL
                },
                SH: function() {
                    return u.Z.Messages.COUNTRY_NAME_SH
                },
                KN: function() {
                    return u.Z.Messages.COUNTRY_NAME_KN
                },
                LC: function() {
                    return u.Z.Messages.COUNTRY_NAME_LC
                },
                MF: function() {
                    return u.Z.Messages.COUNTRY_NAME_MF
                },
                PM: function() {
                    return u.Z.Messages.COUNTRY_NAME_PM
                },
                VC: function() {
                    return u.Z.Messages.COUNTRY_NAME_VC
                },
                WS: function() {
                    return u.Z.Messages.COUNTRY_NAME_WS
                },
                SM: function() {
                    return u.Z.Messages.COUNTRY_NAME_SM
                },
                ST: function() {
                    return u.Z.Messages.COUNTRY_NAME_ST
                },
                SA: function() {
                    return u.Z.Messages.COUNTRY_NAME_SA
                },
                SN: function() {
                    return u.Z.Messages.COUNTRY_NAME_SN
                },
                RS: function() {
                    return u.Z.Messages.COUNTRY_NAME_RS
                },
                SC: function() {
                    return u.Z.Messages.COUNTRY_NAME_SC
                },
                SL: function() {
                    return u.Z.Messages.COUNTRY_NAME_SL
                },
                SG: function() {
                    return u.Z.Messages.COUNTRY_NAME_SG
                },
                SX: function() {
                    return u.Z.Messages.COUNTRY_NAME_SX
                },
                SK: function() {
                    return u.Z.Messages.COUNTRY_NAME_SK
                },
                SI: function() {
                    return u.Z.Messages.COUNTRY_NAME_SI
                },
                SB: function() {
                    return u.Z.Messages.COUNTRY_NAME_SB
                },
                SO: function() {
                    return u.Z.Messages.COUNTRY_NAME_SO
                },
                ZA: function() {
                    return u.Z.Messages.COUNTRY_NAME_ZA
                },
                GS: function() {
                    return u.Z.Messages.COUNTRY_NAME_GS
                },
                SS: function() {
                    return u.Z.Messages.COUNTRY_NAME_SS
                },
                ES: function() {
                    return u.Z.Messages.COUNTRY_NAME_ES
                },
                LK: function() {
                    return u.Z.Messages.COUNTRY_NAME_LK
                },
                SD: function() {
                    return u.Z.Messages.COUNTRY_NAME_SD
                },
                SR: function() {
                    return u.Z.Messages.COUNTRY_NAME_SR
                },
                SJ: function() {
                    return u.Z.Messages.COUNTRY_NAME_SJ
                },
                SZ: function() {
                    return u.Z.Messages.COUNTRY_NAME_SZ
                },
                SE: function() {
                    return u.Z.Messages.COUNTRY_NAME_SE
                },
                CH: function() {
                    return u.Z.Messages.COUNTRY_NAME_CH
                },
                SY: function() {
                    return u.Z.Messages.COUNTRY_NAME_SY
                },
                TW: function() {
                    return u.Z.Messages.COUNTRY_NAME_TW
                },
                TJ: function() {
                    return u.Z.Messages.COUNTRY_NAME_TJ
                },
                TZ: function() {
                    return u.Z.Messages.COUNTRY_NAME_TZ
                },
                TH: function() {
                    return u.Z.Messages.COUNTRY_NAME_TH
                },
                TL: function() {
                    return u.Z.Messages.COUNTRY_NAME_TL
                },
                TG: function() {
                    return u.Z.Messages.COUNTRY_NAME_TG
                },
                TK: function() {
                    return u.Z.Messages.COUNTRY_NAME_TK
                },
                TO: function() {
                    return u.Z.Messages.COUNTRY_NAME_TO
                },
                TT: function() {
                    return u.Z.Messages.COUNTRY_NAME_TT
                },
                TN: function() {
                    return u.Z.Messages.COUNTRY_NAME_TN
                },
                TR: function() {
                    return u.Z.Messages.COUNTRY_NAME_TR
                },
                TM: function() {
                    return u.Z.Messages.COUNTRY_NAME_TM
                },
                TC: function() {
                    return u.Z.Messages.COUNTRY_NAME_TC
                },
                TV: function() {
                    return u.Z.Messages.COUNTRY_NAME_TV
                },
                UG: function() {
                    return u.Z.Messages.COUNTRY_NAME_UG
                },
                UA: function() {
                    return u.Z.Messages.COUNTRY_NAME_UA
                },
                AE: function() {
                    return u.Z.Messages.COUNTRY_NAME_AE
                },
                GB: function() {
                    return u.Z.Messages.COUNTRY_NAME_GB
                },
                US: function() {
                    return u.Z.Messages.COUNTRY_NAME_US
                },
                UM: function() {
                    return u.Z.Messages.COUNTRY_NAME_UM
                },
                UY: function() {
                    return u.Z.Messages.COUNTRY_NAME_UY
                },
                UZ: function() {
                    return u.Z.Messages.COUNTRY_NAME_UZ
                },
                VU: function() {
                    return u.Z.Messages.COUNTRY_NAME_VU
                },
                VE: function() {
                    return u.Z.Messages.COUNTRY_NAME_VE
                },
                VN: function() {
                    return u.Z.Messages.COUNTRY_NAME_VN
                },
                VG: function() {
                    return u.Z.Messages.COUNTRY_NAME_VG
                },
                VI: function() {
                    return u.Z.Messages.COUNTRY_NAME_VI
                },
                WF: function() {
                    return u.Z.Messages.COUNTRY_NAME_WF
                },
                EH: function() {
                    return u.Z.Messages.COUNTRY_NAME_EH
                },
                YE: function() {
                    return u.Z.Messages.COUNTRY_NAME_YE
                },
                ZM: function() {
                    return u.Z.Messages.COUNTRY_NAME_ZM
                },
                ZW: function() {
                    return u.Z.Messages.COUNTRY_NAME_ZW
                }
            };

            function c(e) {
                return l[e]()
            }
        },
        996344: (e, t, n) => {
            n.d(t, {
                Z: () => S
            });
            var r = n(335186),
                i = n(61209),
                o = n(637493);

            function u(e) {
                u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return u(e)
            }

            function a(e, t) {
                return !t || "object" !== l(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function s(e, t) {
                s = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return s(e, t)
            }
            var l = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function c(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = u(e);
                    if (t) {
                        var i = u(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return a(this, n)
                }
            }
            var d = new Set,
                f = new Set,
                _ = !1,
                E = null;

            function h(e) {
                return e.isMessageRequest && !e.isSpam
            }

            function p(e) {
                var t = !1;
                if (h(e) && !d.has(e.id)) {
                    d.add(e.id);
                    t = !0
                }
                if (!h(e) && d.has(e.id)) {
                    d.delete(e.id);
                    t = !0
                }
                if (!h(e) && f.has(e.id)) {
                    f.delete(e.id);
                    t = !0
                }
                return t
            }

            function g(e) {
                if (null != e) {
                    var t;
                    E = null !== (t = (0, r.Zz)(e)) && void 0 !== t ? t : (0, r.K4)()
                }
            }

            function v(e) {
                "CONNECTION_OPEN" === e.type && g(e.countryCode);
                d.clear();
                f.clear();
                Object.values(i.Z.getMutablePrivateChannels()).forEach((function(e) {
                    p(e)
                }));
                _ = !0
            }

            function I(e) {
                var t = e.channelId;
                f.add(t)
            }

            function N(e) {
                return p(e.channel)
            }

            function O(e) {
                var t = e.channels,
                    n = !0,
                    r = !1,
                    i = void 0;
                try {
                    for (var o, u = t[Symbol.iterator](); !(n = (o = u.next()).done); n = !0) {
                        p(o.value)
                    }
                } catch (e) {
                    r = !0;
                    i = e
                } finally {
                    try {
                        n || null == u.return || u.return()
                    } finally {
                        if (r) throw i
                    }
                }
            }

            function y(e) {
                var t = e.channel;
                if (d.has(t.id)) {
                    d.delete(t.id);
                    return !0
                }
                return !1
            }

            function T(e) {
                e.messageRequestChannelIds.forEach((function(e) {
                    return d.add(e)
                }))
            }

            function C(e) {
                g(e.countryCode)
            }
            var A = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && s(e, t)
                }(n, e);
                var t = c(n);

                function n() {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, n);
                    var e;
                    (e = t.call(this)).loadCache = function() {
                        var t = e.readSnapshot(n.LATEST_SNAPSHOT_VERSION);
                        null != t && (d = new Set(t))
                    };
                    e.registerActionHandlers({
                        CONNECTION_OPEN: v,
                        CONNECTION_OPEN_SUPPLEMENTAL: v,
                        CACHE_LOADED_LAZY: e.loadCache,
                        OVERLAY_INITIALIZE: T,
                        CHANNEL_CREATE: N,
                        CHANNEL_UPDATES: O,
                        CHANNEL_DELETE: y,
                        SET_LOCATION_METADATA: C,
                        MESSAGE_REQUEST_ACCEPT_OPTIMISTIC: I
                    });
                    e.waitFor(i.Z);
                    return e
                }
                var r = n.prototype;
                r.takeSnapshot = function() {
                    return {
                        version: n.LATEST_SNAPSHOT_VERSION,
                        data: Array.from(d)
                    }
                };
                r.getMessageRequestChannelIds = function() {
                    return d
                };
                r.getMessageRequestsCount = function() {
                    return d.size
                };
                r.isMessageRequest = function(e) {
                    return d.has(e)
                };
                r.isAcceptedOptimistic = function(e) {
                    return f.has(e)
                };
                r.getUserCountryCode = function() {
                    return E
                };
                r.isReady = function() {
                    return _
                };
                r.__getLocalVars = function() {
                    return {
                        channelIds: d,
                        acceptedOptimistic: f,
                        isReady: _,
                        userCountryCode: E
                    }
                };
                return n
            }(o.Z);
            A.displayName = "MessageRequestStore";
            A.LATEST_SNAPSHOT_VERSION = 1;
            const S = new A
        },
        442658: (e, t, n) => {
            n.d(t, {
                k1: () => a,
                tU: () => c,
                h3: () => d,
                IO: () => f
            });
            var r = n(996344),
                i = n(48315);

            function o(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function u(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, o = [],
                            u = !0,
                            a = !1;
                        try {
                            for (n = n.call(e); !(u = (r = n.next()).done); u = !0) {
                                o.push(r.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            a = !0;
                            i = e
                        } finally {
                            try {
                                u || null == n.return || n.return()
                            } finally {
                                if (a) throw i
                            }
                        }
                        return o
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return o(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return o(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function a(e) {
                var t = u(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [r.Z, i.Z], 2),
                    n = t[0],
                    o = t[1],
                    a = s(e),
                    c = a.filter((function(e) {
                        var t = u(e, 2)[1];
                        return !n.isMessageRequest(t.id) && !o.isSpam(t.id)
                    }));
                return l(c)
            }

            function s(e) {
                return Object.keys(e).map((function(t) {
                    return [t, e[t]]
                }))
            }

            function l(e) {
                return Array.from(e).reduce((function(e, t) {
                    var n = u(t, 2),
                        r = n[0],
                        i = n[1];
                    return Object.assign(e, function(e, t, n) {
                        t in e ? Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = n;
                        return e
                    }({}, r, i))
                }), {})
            }

            function c(e) {
                var t = u(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [r.Z, i.Z], 2),
                    n = t[0],
                    o = t[1];
                return e.filter((function(e) {
                    return !n.isMessageRequest(e) && !o.isSpam(e)
                }))
            }

            function d(e) {
                var t = u(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [r.Z, i.Z], 2),
                    n = t[0],
                    o = t[1];
                return n.isMessageRequest(e) || o.isSpam(e)
            }

            function f() {
                var e = u(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [r.Z, i.Z], 2),
                    t = e[0],
                    n = e[1],
                    o = n.getSpamChannelsCount(),
                    a = t.getMessageRequestsCount(),
                    s = a > 0 || o > 0;
                return s
            }
        },
        48315: (e, t, n) => {
            n.d(t, {
                Z: () => O
            });
            var r = n(61209),
                i = n(637493);

            function o(e) {
                o = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return o(e)
            }

            function u(e, t) {
                return !t || "object" !== s(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function a(e, t) {
                a = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return a(e, t)
            }
            var s = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function l(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = o(e);
                    if (t) {
                        var i = o(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return u(this, n)
                }
            }
            var c = new Set,
                d = new Set,
                f = !1;

            function _(e) {
                return e.isSpam
            }

            function E(e) {
                var t = !1;
                if (_(e) && !c.has(e.id)) {
                    c.add(e.id);
                    t = !0
                }
                if (!_(e) && c.has(e.id)) {
                    c.delete(e.id);
                    t = !0
                }
                if (!_(e) && d.has(e.id)) {
                    d.delete(e.id);
                    t = !0
                }
                return t
            }

            function h() {
                c.clear();
                d.clear();
                Object.values(r.Z.getMutablePrivateChannels()).forEach((function(e) {
                    E(e)
                }));
                f = !0
            }

            function p(e) {
                var t = e.channelId;
                d.add(t)
            }

            function g(e) {
                return E(e.channel)
            }

            function v(e) {
                var t = e.channels,
                    n = !0,
                    r = !1,
                    i = void 0;
                try {
                    for (var o, u = t[Symbol.iterator](); !(n = (o = u.next()).done); n = !0) {
                        E(o.value)
                    }
                } catch (e) {
                    r = !0;
                    i = e
                } finally {
                    try {
                        n || null == u.return || u.return()
                    } finally {
                        if (r) throw i
                    }
                }
            }

            function I(e) {
                var t = e.channel,
                    n = !1;
                if (c.has(t.id)) {
                    c.delete(t.id);
                    n = !0
                }
                return n
            }
            var N = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && a(e, t)
                }(n, e);
                var t = l(n);

                function n() {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, n);
                    var e;
                    (e = t.call(this)).loadCache = function() {
                        var t = e.readSnapshot(n.LATEST_SNAPSHOT_VERSION);
                        null != t && (c = new Set(t))
                    };
                    e.registerActionHandlers({
                        CONNECTION_OPEN: h,
                        CONNECTION_OPEN_SUPPLEMENTAL: h,
                        CACHE_LOADED_LAZY: e.loadCache,
                        CHANNEL_CREATE: g,
                        CHANNEL_UPDATES: v,
                        CHANNEL_DELETE: I,
                        MESSAGE_REQUEST_ACCEPT_OPTIMISTIC: p
                    });
                    e.waitFor(r.Z);
                    return e
                }
                var i = n.prototype;
                i.takeSnapshot = function() {
                    return {
                        version: n.LATEST_SNAPSHOT_VERSION,
                        data: Array.from(c)
                    }
                };
                i.getSpamChannelIds = function() {
                    return c
                };
                i.getSpamChannelsCount = function() {
                    return c.size
                };
                i.isSpam = function(e) {
                    return c.has(e)
                };
                i.isAcceptedOptimistic = function(e) {
                    return d.has(e)
                };
                i.isReady = function() {
                    return f
                };
                i.__getLocalVars = function() {
                    return {
                        channelIds: c,
                        acceptedOptimistic: d,
                        isReady: f
                    }
                };
                return n
            }(i.Z);
            N.displayName = "SpamMessageRequestStore";
            N.LATEST_SNAPSHOT_VERSION = 1;
            const O = new N
        },
        725105: (e, t, n) => {
            n.d(t, {
                sv: () => o,
                Fl: () => u
            });
            var r = n(667294),
                i = (0, n(260561).B)({
                    kind: "user",
                    id: "2022-11_desktop_notification_center",
                    label: "Desktop notification center",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Notification center desktop enabled",
                        config: {
                            enabled: !0
                        }
                    }]
                }),
                o = function() {
                    var e = i.useExperiment({
                        location: "b8976e_1"
                    }, {
                        autoTrackExposure: !1
                    }).enabled;
                    r.useEffect((function() {
                        i.trackExposure({
                            location: "b8976e_2"
                        })
                    }), []);
                    return e
                },
                u = function() {
                    return i.getCurrentConfig({
                        location: "b8976e_3"
                    }, {
                        autoTrackExposure: !1
                    }).enabled
                }
        },
        858311: (e, t, n) => {
            n.d(t, {
                Z: () => Y
            });
            var r = n(202351),
                i = n(744564),
                o = n(269300),
                u = (n(339432), n(649536)),
                a = n(202958),
                s = n(4798),
                l = n(567403),
                c = n(840922),
                d = n(473903),
                f = n(102921),
                _ = n(421281),
                E = n(749565),
                h = n(369710),
                p = n(106673),
                g = n(2590),
                v = n(473708);

            function I(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function N(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function O(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(e, r.key, r)
                }
            }

            function y(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function T(e) {
                T = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return T(e)
            }

            function C(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        y(e, t, n[t])
                    }))
                }
                return e
            }

            function A(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function S(e, t) {
                return !t || "object" !== R(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function m(e, t) {
                m = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return m(e, t)
            }

            function M(e) {
                return function(e) {
                    if (Array.isArray(e)) return I(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return I(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return I(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var R = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function b(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = T(e);
                    if (t) {
                        var i = T(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return S(this, n)
                }
            }
            var U = 7776e6,
                D = {
                    loading: !1,
                    initialized: !1,
                    errored: !1,
                    isDataStale: !1,
                    notifCenterItems: [],
                    staleNotifCenterItems: [],
                    notifCenterIds: new Set,
                    notifCenterLocalItems: [],
                    paginationHasMore: !0,
                    paginationCursor: void 0,
                    notifCenterActive: !1,
                    notifCenterTabFocused: !1
                };

            function Z(e) {
                return null != e.id && null != e.body && null != e.type
            }

            function P() {
                D = {
                    loading: !1,
                    initialized: !1,
                    errored: !1,
                    isDataStale: !1,
                    notifCenterItems: [],
                    staleNotifCenterItems: [],
                    notifCenterIds: new Set,
                    notifCenterLocalItems: [],
                    paginationHasMore: !0,
                    paginationCursor: void 0,
                    notifCenterActive: !1,
                    notifCenterTabFocused: !1
                }
            }

            function L(e) {
                var t, n;
                if ((0,
                        a.bY)() && e.type === h.DY.FRIEND_SUGGESTION_CREATED && c.Z.getRelationshipType(null !== (n = null === (t = e.other_user) || void 0 === t ? void 0 : t.id) && void 0 !== n ? n : "") === g.OGo.PENDING_OUTGOING) {
                    var r = E.ZP.getName(e.other_user);
                    e = A(C({}, e), {
                        body: v.Z.Messages.NOTIF_CENTER_V2_ADD_FRIEND_REQUEST_SENT.format({
                            user: r
                        })
                    })
                }
                0;
                return A(C({}, e), {
                    kind: "notification-center-item",
                    message: null != e.message ? (0, u.e5)(e.message) : void 0
                })
            }

            function w(e) {
                var t = "NOTIFICATION_CENTER_ITEM_CREATE" === e.type ? L(e.item) : e.item;
                if (!D.initialized || !Z(t) || D.notifCenterIds.has(t.id)) return !1;
                D.notifCenterIds.add(t.id);
                D.notifCenterItems = [t].concat(M(D.notifCenterItems));
                D.notifCenterItems.sort((function(e, t) {
                    return f.Z.compare(t.id, e.id)
                }))
            }

            function G(e, t) {
                D.notifCenterItems = D.notifCenterItems.map((function(n) {
                    return e.includes(n.id) ? A(C({}, n), {
                        acked: t
                    }) : n
                })).filter(Z)
            }

            function k(e, t, n) {
                var r;
                return e.type === t && (null === (r = e.other_user) || void 0 === r ? void 0 : r.id) === n
            }
            var H = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && m(e, t)
                }(n, e);
                var t = b(n);

                function n() {
                    N(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function(e) {
                    this.waitFor(d.default);
                    if (null != e) {
                        var t = e.notifCenterItems.map((function(e) {
                            return A(C({}, e), {
                                message: null != e.message ? new s.Z(e.message) : void 0
                            })
                        }));
                        t.length > 0 && (D = A(C({}, D), {
                            initialized: !0,
                            isDataStale: !0,
                            notifCenterItems: [],
                            staleNotifCenterItems: t
                        }))
                    }
                };
                r.getState = function() {
                    var e = function(e) {
                        return A(C({}, e), {
                            message: null != e.message ? e.message.toJS() : void 0
                        })
                    };
                    return A(C({}, D), {
                        notifCenterItems: D.notifCenterItems.map(e),
                        staleNotifCenterItems: D.staleNotifCenterItems.map(e)
                    })
                };
                r.__getLocalVars = function() {
                    return {
                        NINETY_DAYS_MS: U,
                        state: D
                    }
                };
                ! function(e, t, n) {
                    t && O(e.prototype, t);
                    n && O(e, n)
                }(n, [{
                    key: "loading",
                    get: function() {
                        return D.loading
                    }
                }, {
                    key: "initialized",
                    get: function() {
                        return D.initialized
                    }
                }, {
                    key: "items",
                    get: function() {
                        return D.isDataStale ? D.staleNotifCenterItems : D.notifCenterItems
                    }
                }, {
                    key: "hasMore",
                    get: function() {
                        return D.paginationHasMore
                    }
                }, {
                    key: "cursor",
                    get: function() {
                        return D.paginationCursor
                    }
                }, {
                    key: "errored",
                    get: function() {
                        return D.errored
                    }
                }, {
                    key: "active",
                    get: function() {
                        return D.notifCenterActive
                    }
                }, {
                    key: "localItems",
                    get: function() {
                        return D.notifCenterLocalItems
                    }
                }, {
                    key: "tabFocused",
                    get: function() {
                        return D.notifCenterTabFocused
                    }
                }]);
                return n
            }(r.ZP.PersistedStore);
            H.displayName = "NotificationCenterItemsStore";
            H.persistKey = "NotificationCenterItemsStore_v2";
            const Y = new H(i.Z, {
                CONNECTION_OPEN: function(e) {
                    (0, a.bY)() || P();
                    var t = [];
                    e.relationships.forEach((function(e) {
                        var n = e.type,
                            r = e.user,
                            i = e.since;
                        if (n !== g.OGo.PENDING_INCOMING) return null;
                        if (null == r || null == i) return null;
                        var o = d.default.getUser(r.id);
                        if (null == o) return null;
                        var u = (0, p.mH)(o, i);
                        f.Z.age(u.id) > U || t.push(u)
                    }));
                    D.notifCenterLocalItems = t
                },
                LOGOUT: P,
                NOTIFICATION_CENTER_ITEMS_ACK: function(e) {
                    G(e.ids, !0)
                },
                NOTIFICATION_CENTER_ITEMS_ACK_FAILURE: function(e) {
                    G(e.ids, !1)
                },
                GUILD_SCHEDULED_EVENT_UPDATE: function(e) {
                    var t;
                    if ((0, o.Z2)(e.guildScheduledEvent)) {
                        var n = e.guildScheduledEvent.name,
                            r = null === (t = l.Z.getGuild(e.guildScheduledEvent.guild_id)) || void 0 === t ? void 0 : t.name;
                        D.notifCenterItems = D.notifCenterItems.map((function(t) {
                            return function(t) {
                                return t.type === h.DY.GUILD_SCHEDULED_EVENT_STARTED && t.guild_scheduled_event_id === e.guildScheduledEvent.id
                            }(t) ? A(C({}, t), {
                                disable_action: !0,
                                body: (0, _.Ew)(r) || (0, _.Ew)(n) ? t.body : v.Z.Messages.NOTIFICATION_CENTER_GUILD_SCHEDULED_EVENT_ENDED.format({
                                    event_name: n,
                                    guild_name: r
                                })
                            }) : t
                        }))
                    }
                },
                NOTIFICATION_CENTER_ITEM_CREATE: w,
                NOTIFICATION_CENTER_ITEM_DELETE: function(e) {
                    var t = e.id;
                    if (!D.notifCenterIds.has(t)) return !1;
                    D.notifCenterIds.delete(t);
                    D.notifCenterItems = D.notifCenterItems.filter((function(e) {
                        return e.id !== t
                    }))
                },
                NOTIFICATION_CENTER_ITEM_DELETE_FAILURE: w,
                LOAD_NOTIFICATION_CENTER_ITEMS: function() {
                    D.loading = !0
                },
                LOAD_NOTIFICATION_CENTER_ITEMS_FAILURE: function() {
                    D.loading = !1;
                    D.initialized = !0;
                    D.errored = !0
                },
                LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS: function(e) {
                    var t = e.items,
                        n = e.hasMore,
                        r = e.cursor;
                    if (D.loading) {
                        D.loading = !1;
                        D.initialized = !0;
                        D.errored = !1;
                        D.isDataStale = !1;
                        if (null == r || !D.notifCenterIds.has(r)) {
                            D.paginationHasMore = t.length > 0 && n;
                            D.paginationCursor = t.length > 0 ? r : void 0
                        }
                        D.notifCenterItems = M(D.notifCenterItems).concat(M(t.map(L).filter((function(e) {
                            return !D.notifCenterIds.has(e.id)
                        }))));
                        D.notifCenterItems.sort((function(e, t) {
                            return f.Z.compare(t.id, e.id)
                        }));
                        t.forEach((function(e) {
                            return D.notifCenterIds.add(e.id)
                        }))
                    }
                },
                RESET_NOTIFICATION_CENTER: P,
                NOTIFICATION_CENTER_SET_ACTIVE: function(e) {
                    var t = e.active;
                    D.notifCenterActive = t
                },
                NOTIFICATION_CENTER_TAB_FOCUSED: function(e) {
                    var t = e.focused;
                    D.notifCenterTabFocused = t
                },
                RELATIONSHIP_ADD: function(e) {
                    if (e.relationship.type === g.OGo.PENDING_INCOMING) {
                        var t = e.relationship,
                            n = t.user,
                            r = t.since;
                        if (null == r) return null;
                        var i = d.default.getUser(n.id);
                        if (null == i) return null;
                        D.notifCenterLocalItems = M(D.notifCenterLocalItems).concat([(0, p.mH)(i, r)])
                    }
                    e.relationship.type === g.OGo.FRIEND && (D.notifCenterLocalItems = D.notifCenterLocalItems.map((function(t) {
                        return k(t, h.O7.INCOMING_FRIEND_REQUESTS, e.relationship.user.id) ? A(C({}, t), {
                            acked: !0,
                            forceUnacked: !1,
                            local_id: "incoming_friend_requests_accepted_".concat(e.relationship.user.id, "_").concat(t.id),
                            type: h.O7.INCOMING_FRIEND_REQUESTS_ACCEPTED,
                            body: v.Z.Messages.NOTIFICATION_CENTER_INCOMING_FRIEND_REQUEST_ACCEPTED.format({
                                username: "**".concat(e.relationship.user.username, "**")
                            })
                        }) : t
                    })))
                },
                RELATIONSHIP_REMOVE: function(e) {
                    D.notifCenterLocalItems = D.notifCenterLocalItems.filter((function(t) {
                        return !k(t, h.O7.INCOMING_FRIEND_REQUESTS, e.relationship.id) && !k(t, h.O7.INCOMING_FRIEND_REQUESTS_ACCEPTED, e.relationship.id)
                    }))
                },
                NOTIFICATION_CENTER_ITEM_COMPLETED: function(e) {
                    var t = e.item_enum;
                    D.notifCenterItems = D.notifCenterItems.map((function(e) {
                        return e.item_enum === t ? A(C({}, e), {
                            completed: !0,
                            acked: !0
                        }) : e
                    })).filter(Z)
                },
                NOTIFICATION_CENTER_ITEM_UPDATE: function(e) {
                    var t = e.item;
                    D.notifCenterItems = D.notifCenterItems.map((function(e) {
                        return e.id === t.id ? t : e
                    })).filter(Z)
                },
                SET_RECENT_MENTIONS_FILTER: P
            })
        },
        369710: (e, t, n) => {
            n.d(t, {
                AM: () => i,
                ud: () => o,
                b1: () => u,
                DY: () => a,
                O7: () => s
            });
            var r, i, o, u, a, s;
            ! function(e) {
                e.LANDING = "notification_center_landing"
            }(r || (r = {}));
            ! function(e) {
                e[e.UPDATE_PROFILE = 0] = "UPDATE_PROFILE";
                e[e.FIND_FRIENDS = 1] = "FIND_FRIENDS";
                e[e.ADD_FRIEND = 2] = "ADD_FRIEND";
                e[e.FIRST_MESSAGE = 3] = "FIRST_MESSAGE"
            }(i || (i = {}));
            ! function(e) {
                e.MARK_ALL_READ = "mark_all_read";
                e.CLICKED = "clicked";
                e.FRIEND_REQUESTS_BUTTON_CLICK = "friend_requests_button_click";
                e.ACTION_BUTTON = "action_button"
            }(o || (o = {}));
            ! function(e) {
                e.ForYou = "ForYou";
                e.Mentions = "Mentions";
                e.MessageReminders = "MessageReminders"
            }(u || (u = {}));
            ! function(e) {
                e.GO_LIVE_PUSH = "go_live_push";
                e.FRIEND_REQUEST_ACCEPTED = "friend_request_accepted";
                e.FRIEND_REQUEST_PENDING = "friend_request_pending";
                e.FRIEND_SUGGESTION_CREATED = "friend_suggestion_created";
                e.FRIEND_REQUEST_REMINDER = "friend_request_reminder";
                e.DM_FRIEND_NUDGE = "dm_friend_nudge";
                e.RECENT_MENTION = "recent_mention";
                e.REPLY_MENTION = "reply_mention";
                e.GUILD_SCHEDULED_EVENT_STARTED = "scheduled_guild_event_started";
                e.SYSTEM_DEMO = "system_demo";
                e.MISSED_MESSAGES = "missed_messages";
                e.TOP_MESSAGES = "top_messages";
                e.LIFECYCLE_ITEM = "lifecycle_item"
            }(a || (a = {}));
            ! function(e) {
                e.INCOMING_FRIEND_REQUESTS = "INCOMING_FRIEND_REQUESTS";
                e.INCOMING_FRIEND_REQUESTS_ACCEPTED = "INCOMING_FRIEND_REQUESTS_ACCEPTED";
                e.FRIEND_REQUESTS_GROUPED = "FRIEND_REQUESTS_GROUPED"
            }(s || (s = {}))
        },
        106673: (e, t, n) => {
            n.d(t, {
                a3: () => p,
                $N: () => N,
                mH: () => v,
                RB: () => I,
                r: () => g
            });
            var r = n(842227),
                i = n(968449),
                o = n(725105),
                u = n(369710),
                a = n(730381),
                s = n.n(a),
                l = n(473708),
                c = 3600,
                d = 86400,
                f = 2592e3,
                _ = 31104e3,
                E = function() {
                    return {
                        minutes: l.Z.Messages.FOR_YOU_TIMESTAMP_MINUTES_AGO,
                        hours: l.Z.Messages.FOR_YOU_TIMESTAMP_HOURS_AGO,
                        days: l.Z.Messages.FOR_YOU_TIMESTAMP_DAYS_AGO,
                        months: l.Z.Messages.FOR_YOU_TIMESTAMP_MONTHS_AGO,
                        years: l.Z.Messages.FOR_YOU_TIMESTAMP_YEARS_AGO
                    }
                };

            function h(e, t) {
                var n = s()().diff(s()(e), "s"),
                    r = (null != t ? t : E)();
                s()(e).format("LL");
                return n < 60 ? r.minutes.format({
                    count: 1
                }) : n < c ? r.minutes.format({
                    count: Math.floor(n / 60)
                }) : n < d ? r.hours.format({
                    count: Math.floor(n / c)
                }) : n < f ? r.days.format({
                    count: Math.floor(n / d)
                }) : n < _ ? r.months.format({
                    count: Math.floor(n / f)
                }) : r.years.format({
                    count: Math.floor(n / _)
                })
            }
            var p = function(e) {
                    return h(e)
                },
                g = function(e, t) {
                    return e.acked || t !== i.uL && r.default.compare(t, e.id) >= 0
                };

            function v(e, t) {
                var n = r.default.fromTimestamp(new Date(t).getTime());
                return {
                    acked: !1,
                    forceUnacked: !0,
                    other_user: e,
                    kind: "notification-center-item",
                    local_id: "incoming_friend_requests_".concat(e.id, "_").concat(n),
                    deeplink: "https://discord.com/users/".concat(e.id),
                    type: u.O7.INCOMING_FRIEND_REQUESTS,
                    id: n,
                    body: l.Z.Messages.NOTIFICATION_CENTER_INCOMING_FRIEND_REQUEST.format({
                        username: "**".concat(e.username, "**")
                    })
                }
            }
            var I = function(e) {
                return e.type === u.DY.RECENT_MENTION || e.type === u.DY.REPLY_MENTION
            };

            function N() {
                0;
                return (0, o.Fl)()
            }
        },
        202958: (e, t, n) => {
            n.d(t, {
                ln: () => u,
                bY: () => a
            });
            var r = n(260561),
                i = n(339432),
                o = n(860535);

            function u() {
                return s.useExperiment({
                    location: "0721ad_1"
                }, {
                    autoTrackExposure: !0
                }).enabled
            }

            function a() {
                return !!(0, i.cn)() && (!!(0, o.n5)("showNewNotificationCenter") || l.getCurrentConfig({
                    location: "0721ad_3"
                }, {
                    autoTrackExposure: !1
                }).enabled)
            }
            var s = (0, r.B)({
                    kind: "user",
                    id: "2022-11_notification_redesign",
                    label: "NotificationRedesign",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Notification Redesign Enabled",
                        config: {
                            enabled: !0
                        }
                    }]
                }),
                l = (0, r.B)({
                    kind: "user",
                    id: "2023-04_notification_redesign_v2",
                    label: "NotificationRedesignV2",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Notification Redesign V2 Enabled",
                        config: {
                            enabled: !0
                        }
                    }]
                })
        },
        364269: (e, t, n) => {
            n.d(t, {
                DM: () => c,
                r1: () => d,
                sk: () => f,
                m7: () => _,
                te: () => E
            });
            var r = n(202351),
                i = n(350532),
                o = n(567403),
                u = n(682776),
                a = n(9430),
                s = n(473903),
                l = n(2590);

            function c(e) {
                var t = (0, r.e7)([a.Z], (function() {
                        return a.Z.isOptInEnabled(e)
                    })),
                    n = (0,
                        r.e7)([o.Z], (function() {
                        return o.Z.getGuild(e)
                    })),
                    i = (0, r.e7)([s.default], (function() {
                        return s.default.getCurrentUser()
                    }));
                return null != e && null != n && null != i && ((n.hasFeature(l.oNc.COMMUNITY) || i.isStaff()) && t)
            }

            function d(e) {
                var t = o.Z.getGuild(e),
                    n = s.default.getCurrentUser();
                return null != e && null != t && null != n && ((t.hasFeature(l.oNc.COMMUNITY) || n.isStaff()) && a.Z.isOptInEnabled(e))
            }

            function f(e) {
                return (0, i.OL)()
            }

            function _(e) {
                return (0, i.hB)()
            }

            function E(e) {
                var t = (0, r.e7)([o.Z], (function() {
                        return o.Z.getGuild(e)
                    })),
                    n = (0, r.cj)([u.Z], (function() {
                        return {
                            canManageGuild: u.Z.can(l.Plq.MANAGE_GUILD, t),
                            canManageRoles: u.Z.can(l.Plq.MANAGE_ROLES, t)
                        }
                    })),
                    i = n.canManageGuild,
                    a = n.canManageRoles;
                if (null == t) return !1;
                var s = t.hasFeature(l.oNc.GUILD_ONBOARDING_EVER_ENABLED);
                return i && a && !s
            }
        },
        15338: (e, t, n) => {
            n.d(t, {
                bA: () => a,
                hP: () => s,
                xv: () => l,
                hY: () => c
            });
            var r = n(744564);

            function i(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function o(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        i(e, t, n[t])
                    }))
                }
                return e
            }
            var u = {
                menubar: !1,
                toolbar: !1,
                location: !1,
                directories: !1
            };

            function a(e, t, n) {
                return r.Z.dispatch({
                    type: "POPOUT_WINDOW_OPEN",
                    key: e,
                    features: o({}, u, n),
                    render: t
                })
            }

            function s(e) {
                return r.Z.dispatch({
                    type: "CHANNEL_CALL_POPOUT_WINDOW_OPEN",
                    channel: e
                })
            }

            function l(e) {
                return r.Z.dispatch({
                    type: "POPOUT_WINDOW_CLOSE",
                    key: e
                })
            }

            function c(e, t) {
                return r.Z.dispatch({
                    type: "POPOUT_WINDOW_SET_ALWAYS_ON_TOP",
                    alwaysOnTop: t,
                    key: e
                })
            }
        },
        72675: (e, t, n) => {
            n.d(t, {
                _: () => r
            });
            var r = (0, n(260561).B)({
                kind: "user",
                id: "2023-08_decay_old_unreads",
                label: "Decay Unreads",
                defaultConfig: {
                    clearOldUnreads: !1
                },
                treatments: [{
                    id: 1,
                    label: "On",
                    config: {
                        clearOldUnreads: !0
                    }
                }]
            })
        },
        290679: (e, t, n) => {
            n.d(t, {
                W: () => r
            });
            var r;
            ! function(e) {
                e[e.CHANNEL = 0] = "CHANNEL";
                e[e.GUILD_EVENT = 1] = "GUILD_EVENT";
                e[e.NOTIFICATION_CENTER = 2] = "NOTIFICATION_CENTER";
                e[e.GUILD_HOME = 3] = "GUILD_HOME";
                e[e.GUILD_ONBOARDING_QUESTION = 4] = "GUILD_ONBOARDING_QUESTION"
            }(r || (r = {}))
        },
        841800: (e, t, n) => {
            n.d(t, {
                tI: () => r,
                jL: () => i,
                Ff: () => o
            });
            var r, i, o;
            ! function(e) {
                e[e.CREATE_THREAD = 0] = "CREATE_THREAD";
                e[e.VIEW_THREAD = 1] = "VIEW_THREAD";
                e[e.VIEW_CHANNEL = 2] = "VIEW_CHANNEL";
                e[e.VIEW_MESSAGE_REQUEST = 3] = "VIEW_MESSAGE_REQUEST"
            }(r || (r = {}));
            ! function(e) {
                e[e.GUILD_MEMBER_MOD_VIEW = 4] = "GUILD_MEMBER_MOD_VIEW"
            }(i || (i = {}));
            ! function(e) {
                e.THREAD = "thread";
                e.MESSAGE_REQUEST = "message-request";
                e.HOME = "home";
                e.GUILD_MEMBER_MOD_VIEW = "guild-member-mod-view"
            }(o || (o = {}))
        },
        460214: (e, t, n) => {
            n.d(t, {
                Ek: () => i,
                YW: () => o,
                X8: () => u,
                FW: () => a,
                D_: () => s,
                Hy: () => l,
                hY: () => c
            });
            var r, i = 32,
                o = 5,
                u = "DEFAULT";
            ! function(e) {
                e[e.SUCCESS = 0] = "SUCCESS";
                e[e.INTERRUPTED = 1] = "INTERRUPTED"
            }(r || (r = {}));
            new Set([r.SUCCESS, r.INTERRUPTED]);
            var a = {
                    width: 424,
                    height: 424,
                    padding: 100
                },
                s = "ctrl+`",
                l = [],
                c = "0"
        },
        656907: (e, t, n) => {
            n.d(t, {
                Z: () => k
            });
            var r = n(496486),
                i = n.n(r),
                o = n(202351),
                u = n(744564),
                a = n(968449),
                s = n(473419),
                l = n(473903),
                c = n(652591),
                d = n(615457),
                f = n(460214),
                _ = n(2590),
                E = n(131559);

            function h(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function p(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function g(e) {
                g = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return g(e)
            }

            function v(e, t) {
                return !t || "object" !== T(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function I(e, t) {
                I = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return I(e, t)
            }

            function N(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, o = [],
                            u = !0,
                            a = !1;
                        try {
                            for (n = n.call(e); !(u = (r = n.next()).done); u = !0) {
                                o.push(r.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            a = !0;
                            i = e
                        } finally {
                            try {
                                u || null == n.return || n.return()
                            } finally {
                                if (a) throw i
                            }
                        }
                        return o
                    }
                }(e, t) || C(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function O(e) {
                return function(e) {
                    if (Array.isArray(e)) return h(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || C(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var y, T = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function C(e, t) {
                if (e) {
                    if ("string" == typeof e) return h(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    return "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? h(e, t) : void 0
                }
            }

            function A(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = g(e);
                    if (t) {
                        var i = g(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return v(this, n)
                }
            }! function(e) {
                e[e.NOT_FETCHED = 0] = "NOT_FETCHED";
                e[e.FETCHING = 1] = "FETCHING";
                e[e.FETCHED = 2] = "FETCHED"
            }(y || (y = {}));
            var S = new Map,
                m = new Map,
                M = new Set,
                R = y.NOT_FETCHED,
                b = y.NOT_FETCHED,
                U = new Set,
                D = new Map,
                Z = !1;

            function P(e) {
                var t = e.sound,
                    n = S.get(t.guildId),
                    r = null == n ? void 0 : n.findIndex((function(e) {
                        return e.soundId === t.soundId
                    }));
                if (null != n && null != r && -1 !== r) {
                    n[r] = t;
                    S.set(t.guildId, O(n))
                } else if (null != n) {
                    null == n || n.push(t);
                    S.set(t.guildId, O(n))
                }
            }
            var L = i().debounce((function(e) {
                c.default.track(_.rMx.UPDATE_SOUNDBOARD_SETTINGS, {
                    volume: Math.round((0, d.P)(e))
                });
                a.kU.updateSetting({
                    volume: e
                })
            }), 1e3);

            function w(e) {
                var t, n, r = null !== (n = null == e || null === (t = e.audioContextSettings) || void 0 === t ? void 0 : t.user) && void 0 !== n ? n : {},
                    i = !0,
                    o = !1,
                    u = void 0;
                try {
                    for (var a, s = Object.entries(r)[Symbol.iterator](); !(i = (a = s.next()).done); i = !0) {
                        var l = N(a.value, 2),
                            c = l[0];
                        l[1].soundboardMuted ? M.add(c) : M.delete(c)
                    }
                } catch (e) {
                    o = !0;
                    u = e
                } finally {
                    try {
                        i || null == s.return || s.return()
                    } finally {
                        if (o) throw u
                    }
                }
                var d = !0,
                    f = !1,
                    _ = void 0;
                try {
                    for (var E, h = M.keys()[Symbol.iterator](); !(d = (E = h.next()).done); d = !0) {
                        var p = E.value;
                        null == r[p] && M.delete(p)
                    }
                } catch (e) {
                    f = !0;
                    _ = e
                } finally {
                    try {
                        d || null == h.return || h.return()
                    } finally {
                        if (f) throw _
                    }
                }
            }
            var G = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && I(e, t)
                }(n, e);
                var t = A(n);

                function n() {
                    p(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    this.waitFor(s.Z);
                    w(s.Z.settings)
                };
                r.getOverlaySerializedState = function() {
                    return {
                        soundboardSounds: Object.fromEntries(S),
                        favoritedSoundIds: Array.from(U),
                        localSoundboardMutes: Array.from(M)
                    }
                };
                r.getSounds = function() {
                    return S
                };
                r.getSoundsForGuild = function(e) {
                    return S.get(e)
                };
                r.getDefaultSounds = function() {
                    return this.getSoundsForGuild(f.X8)
                };
                r.getSound = function(e, t) {
                    var n;
                    return (null !== (n = S.get(e)) && void 0 !== n ? n : []).find((function(e) {
                        return e.soundId === t
                    }))
                };
                r.getSoundById = function(e) {
                    return Array.from(S.values()).flat().find((function(t) {
                        return t.soundId === e
                    }))
                };
                r.isFetchingSounds = function() {
                    return b === y.FETCHING
                };
                r.isFetchingDefaultSounds = function() {
                    return R === y.FETCHING
                };
                r.shouldFetchDefaultSounds = function() {
                    return R === y.NOT_FETCHED
                };
                r.hasFetchedDefaultSounds = function() {
                    return R === y.FETCHED
                };
                r.isUserPlayingSounds = function(e) {
                    var t = D.get(e);
                    return null != t && t > 0
                };
                r.isPlayingSound = function(e) {
                    return null != m.get(e)
                };
                r.isFavoriteSound = function(e) {
                    return U.has(e)
                };
                r.getFavorites = function() {
                    return U
                };
                r.isLocalSoundboardMuted = function(e) {
                    return M.has(e)
                };
                r.hasHadOtherUserPlaySoundInSession = function() {
                    return Z
                };
                r.hasFetchedAllSounds = function() {
                    return b === y.FETCHED && R === y.FETCHED
                };
                r.__getLocalVars = function() {
                    return {
                        soundboardSounds: S,
                        playingSoundboardSoundIds: m,
                        localSoundboardMutes: M,
                        defaultSoundFetchState: R,
                        fetchState: b,
                        favoritedSoundIds: U,
                        numSoundsPlayingForUser: D,
                        hasHadOtherUserPlaySoundInSession: Z,
                        debouncedProtoVolumeWrite: L
                    }
                };
                return n
            }(o.ZP.Store);
            G.displayName = "SoundboardStore";
            const k = new G(u.Z, {
                LOGOUT: function() {
                    S.clear();
                    m.clear();
                    D.clear();
                    Z = !1;
                    b = y.NOT_FETCHED;
                    R = y.NOT_FETCHED
                },
                GUILD_SOUNDBOARD_FETCH: function() {
                    b = y.FETCHING
                },
                GUILD_SOUNDBOARD_SOUND_CREATE: P,
                GUILD_SOUNDBOARD_SOUND_UPDATE: P,
                GUILD_SOUNDBOARD_SOUND_DELETE: function(e) {
                    var t = e.soundId,
                        n = e.guildId;
                    S.delete(t);
                    var r = S.get(n),
                        i = null == r ? void 0 : r.findIndex((function(e) {
                            return e.soundId === t
                        }));
                    if (!(null == r || null == i || i < 0)) {
                        r.splice(i, 1);
                        S.set(n, O(r))
                    }
                },
                GUILD_SOUNDBOARD_SOUND_PLAY_START: function(e) {
                    var t, n, r, i = e.soundId,
                        o = e.userId,
                        u = (null !== (n = m.get(i)) && void 0 !== n ? n : 0) + 1,
                        a = (null !== (r = D.get(o)) && void 0 !== r ? r : 0) + 1;
                    m.set(i, u);
                    D.set(o, a);
                    o !== (null === (t = l.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) && (Z = !0)
                },
                GUILD_SOUNDBOARD_SOUND_PLAY_END: function(e) {
                    var t, n, r = e.soundId,
                        i = e.userId,
                        o = (null !== (t = m.get(r)) && void 0 !== t ? t : 0) - 1,
                        u = (null !== (n = D.get(i)) && void 0 !== n ? n : 0) - 1;
                    o <= 0 ? m.delete(r) : m.set(r, o);
                    u <= 0 ? D.delete(i) : D.set(i, u)
                },
                USER_SOUNDBOARD_SET_VOLUME: function(e) {
                    var t = e.volume;
                    L(t)
                },
                VOICE_CHANNEL_SELECT: function() {
                    m.clear();
                    D.clear()
                },
                USER_SETTINGS_PROTO_UPDATE: function(e) {
                    var t = e.settings,
                        n = t.type,
                        r = t.proto;
                    if (n === E.yP.FRECENCY_AND_FAVORITES_SETTINGS) {
                        var i, o;
                        U = new Set(null !== (o = null == r || null === (i = r.favoriteSoundboardSounds) || void 0 === i ? void 0 : i.soundIds) && void 0 !== o ? o : [])
                    } else n === E.yP.PRELOADED_USER_SETTINGS && w(r)
                },
                SOUNDBOARD_FETCH_DEFAULT_SOUNDS: function() {
                    R = y.FETCHING
                },
                SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS: function(e) {
                    var t = e.soundboardSounds;
                    S.set(f.X8, t);
                    R = y.FETCHED
                },
                SOUNDBOARD_SOUNDS_RECEIVED: function(e) {
                    e.updates.forEach((function(e) {
                        var t = e.guildId,
                            n = e.sounds;
                        S.set(t, n)
                    }));
                    b = y.FETCHED
                },
                GUILD_DELETE: function(e) {
                    var t = e.guild;
                    S.delete(t.id)
                },
                AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE: function(e) {
                    var t = e.userId;
                    M.has(t) ? M.delete(t) : M.add(t)
                },
                OVERLAY_INITIALIZE: function(e) {
                    var t = e.soundboardStoreState;
                    S = new Map(Object.entries(t.soundboardSounds));
                    U = new Set(t.favoritedSoundIds);
                    M = new Set(t.localSoundboardMutes)
                },
                GUILD_SOUNDBOARD_SOUNDS_UPDATE: function(e) {
                    var t = e.guildId,
                        n = e.soundboardSounds;
                    S.set(t, n)
                }
            })
        },
        82274: (e, t, n) => {
            n.d(t, {
                Z: () => X
            });
            var r = n(110251),
                i = n.n(r),
                o = n(496486),
                u = n.n(o),
                a = n(202351),
                s = n(575626),
                l = n(744564),
                c = n(306263),
                d = n(177570),
                f = n(664625),
                _ = n(61209),
                E = n(567403),
                h = n(682776),
                p = n(840922),
                g = n(377128),
                v = n(473903),
                I = n(407561),
                N = n(602397),
                O = n(808194),
                y = n(933022),
                T = n(766496);

            function C(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function A(e) {
                A = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return A(e)
            }

            function S(e, t) {
                return !t || "object" !== M(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function m(e, t) {
                m = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return m(e, t)
            }
            var M = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function R(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = A(e);
                    if (t) {
                        var i = A(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return S(this, n)
                }
            }
            var b = "NO_GUILD",
                U = new s.Z((function(e) {
                    return [P(e)]
                }), (function(e) {
                    return e.id
                })),
                D = new Set,
                Z = {};

            function P(e) {
                var t;
                return null !== (t = e.getGuildId()) && void 0 !== t ? t : b
            }

            function L(e) {
                return U.values(null != e ? e : void 0, !0).map((function(e) {
                    return e.id
                }))
            }

            function w(e) {
                if (!D.has(e)) {
                    D.add(e);
                    u()(_.Z.getMutableGuildChannelsForGuild(e)).values().forEach((function(e) {
                        H(e) && U.set(e.id, e)
                    }))
                }
            }

            function G(e) {
                var t = Z[e];
                if (null != t) return t;
                var n = _.Z.getChannel(e);
                if (null == n || !n.isGuildStageVoice()) return null;
                w(n.guild_id);
                return H(n) ? k(e) : null
            }

            function k(e) {
                var t = Z[e];
                if (null == t) {
                    t = new O.ZP(e);
                    Z[e] = t;
                    t.rebuild()
                }
                return t
            }

            function H(e) {
                return null != e && e.isGuildStageVoice() && N.ZP.countVoiceStatesForChannel(e.id) > 0
            }

            function Y(e, t) {
                var n = _.Z.getChannel(e);
                return null != n && n.isGuildStageVoice() ? 0 === t.size() ? V(n.id) : null == U.get(n.id) && U.set(n.id, n) : V(e)
            }

            function F(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : L();
                return t.reduce((function(t, n) {
                    var r = k(n);
                    if (!e(r)) return t;
                    Y(n, r);
                    return !0
                }), !1)
            }

            function j(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : L();
                return F((function(t) {
                    return t.updateParticipant(e)
                }), t)
            }

            function V(e) {
                if (null == e) return !1;
                delete Z[e];
                U.delete(e);
                return !0
            }

            function B() {
                D.clear();
                U.clear();
                Z = {}
            }

            function x(e, t, n) {
                if (null != n && !e.has(n)) {
                    var r = _.Z.getChannel(n);
                    if (null == r ? void 0 : r.isGuildStageVoice()) {
                        t.add(n);
                        e.add(n)
                    }
                }
            }

            function W(e) {
                return j(e.user.id)
            }

            function K(e) {
                return j(e.relationship.id)
            }

            function q(e) {
                ! function(e) {
                    var t = U.values(e),
                        n = !0,
                        r = !1,
                        i = void 0;
                    try {
                        for (var o, u = t[Symbol.iterator](); !(n = (o = u.next()).done); n = !0) {
                            var a = o.value;
                            U.delete(a.id);
                            delete Z[a.id]
                        }
                    } catch (e) {
                        r = !0;
                        i = e
                    } finally {
                        try {
                            n || null == u.return || u.return()
                        } finally {
                            if (r) throw i
                        }
                    }
                    D.delete(e)
                }(e.guild.id)
            }

            function z(e) {
                var t = e.streamKey,
                    n = (0, c.my)(t),
                    r = n.channelId,
                    i = n.guildId,
                    o = n.ownerId;
                return !(null == i || !D.has(i)) && j(o, [r])
            }
            var Q = [],
                J = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        t && m(e, t)
                    }(n, e);
                    var t = R(n);

                    function n() {
                        C(this, n);
                        return t.apply(this, arguments)
                    }
                    var r = n.prototype;
                    r.initialize = function() {
                        this.waitFor(f.default, v.default, _.Z, g.Z, I.Z, h.Z, N.ZP, E.Z, y.ZP, p.Z, T.Z, d.Z)
                    };
                    r.getParticipantsVersion = function(e) {
                        var t, n;
                        return null == e ? -1 : null !== (n = null === (t = G(e)) || void 0 === t ? void 0 : t.version) && void 0 !== n ? n : -1
                    };
                    r.getMutableParticipants = function(e, t) {
                        var n, r;
                        return null == e ? Q : null !== (r = null === (n = G(e)) || void 0 === n ? void 0 : n.toArray(t)) && void 0 !== r ? r : Q
                    };
                    r.getMutableRequestToSpeakParticipants = function(e) {
                        var t, n;
                        return null !== (n = null === (t = G(e)) || void 0 === t ? void 0 : t.getRequestToSpeakParticipants()) && void 0 !== n ? n : Q
                    };
                    r.getRequestToSpeakParticipantsVersion = function(e) {
                        var t, n;
                        return null !== (n = null === (t = G(e)) || void 0 === t ? void 0 : t.requestToSpeakVersion) && void 0 !== n ? n : -1
                    };
                    r.getParticipantCount = function(e, t) {
                        var n, r;
                        return null !== (r = null === (n = G(e)) || void 0 === n ? void 0 : n.size(t)) && void 0 !== r ? r : 0
                    };
                    r.getChannels = function(e) {
                        w(null != e ? e : b);
                        return U.values(null != e ? e : b)
                    };
                    r.getChannelsVersion = function() {
                        return U.version
                    };
                    r.getParticipant = function(e, t) {
                        var n, r;
                        return null !== (r = null === (n = G(e)) || void 0 === n ? void 0 : n.getParticipant(t)) && void 0 !== r ? r : null
                    };
                    r.__getLocalVars = function() {
                        return {
                            GUILDLESS_GUILD_ID: b,
                            activeStageChannels: U,
                            trackedGuildIds: D,
                            stageParticipantsByChannelId: Z,
                            NO_PARTICIPANTS: Q
                        }
                    };
                    return n
                }(a.ZP.Store);
            J.displayName = "StageChannelParticipantStore";
            const X = new J(l.Z, {
                CONNECTION_OPEN: B,
                OVERLAY_INITIALIZE: B,
                VOICE_STATE_UPDATES: function(e) {
                    var t = e.voiceStates,
                        n = new Set;
                    return t.reduce((function(e, t) {
                        if (null == t.guildId || !D.has(t.guildId)) return e;
                        var r = new Set;
                        x(n, r, t.oldChannelId);
                        x(n, r, t.channelId);
                        return 0 === r.size ? e : j(t.userId, Array.from(r)) || e
                    }), !1)
                },
                CHANNEL_DELETE: function(e) {
                    return V(e.channel.id)
                },
                GUILD_MEMBERS_CHUNK: function(e) {
                    var t = e.members,
                        n = !1,
                        r = !0,
                        i = !1,
                        o = void 0;
                    try {
                        for (var u, a = t[Symbol.iterator](); !(r = (u = a.next()).done); r = !0) {
                            n = j(u.value.user.id) || n
                        }
                    } catch (e) {
                        i = !0;
                        o = e
                    } finally {
                        try {
                            r || null == a.return || a.return()
                        } finally {
                            if (i) throw o
                        }
                    }
                    return n
                },
                USER_UPDATE: W,
                GUILD_MEMBER_REMOVE: W,
                GUILD_MEMBER_UPDATE: W,
                CHANNEL_UPDATES: function(e) {
                    var t = e.channels.reduce((function(e, t) {
                        if (!t.isGuildStageVoice() || !D.has(t.guild_id)) return e;
                        var n = U.get(t.id);
                        if (null == n || i()(t.permissionOverwrites, n.permissionOverwrites)) return e;
                        e.push(t.id);
                        U.set(t.id, t);
                        return e
                    }), []);
                    F((function(e) {
                        return e.rebuild()
                    }), t);
                    return t.length > 0
                },
                GUILD_ROLE_UPDATE: function(e) {
                    var t = e.guildId;
                    if (D.has(t)) return F((function(e) {
                        return e.rebuild()
                    }), L(t))
                },
                RTC_CONNECTION_VIDEO: function(e) {
                    var t = e.channelId,
                        n = e.guildId,
                        r = e.userId;
                    return !(null == n || !D.has(n)) && j(r, [t])
                },
                STREAM_CLOSE: z,
                STREAM_DELETE: z,
                RELATIONSHIP_ADD: K,
                RELATIONSHIP_REMOVE: K,
                GUILD_CREATE: q,
                GUILD_DELETE: q,
                PASSIVE_UPDATE_V1: function(e) {
                    var t = !1,
                        n = !0,
                        r = !1,
                        i = void 0;
                    try {
                        for (var o, u = L(e.guildId)[Symbol.iterator](); !(n = (o = u.next()).done); n = !0) {
                            t = k(o.value).rebuild() || t
                        }
                    } catch (e) {
                        r = !0;
                        i = e
                    } finally {
                        try {
                            n || null == u.return || u.return()
                        } finally {
                            if (r) throw i
                        }
                    }
                    return t
                }
            })
        },
        808194: (e, t, n) => {
            n.d(t, {
                pV: () => S,
                Ui: () => m,
                ZP: () => D
            });
            var r = n(575626),
                i = n(306263),
                o = n(177570),
                u = n(61209),
                a = n(984216),
                s = n(21372),
                l = n(840922),
                c = n(473903),
                d = n(407561),
                f = n(773148),
                _ = n(933022),
                E = n(766496),
                h = n(525261),
                p = (n(202351), n(567403)),
                g = n(563135);

            function v(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function I(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, o = [],
                            u = !0,
                            a = !1;
                        try {
                            for (n = n.call(e); !(u = (r = n.next()).done); u = !0) {
                                o.push(r.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            a = !0;
                            i = e
                        } finally {
                            try {
                                u || null == n.return || n.return()
                            } finally {
                                if (a) throw i
                            }
                        }
                        return o
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return v(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return v(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var N = function(e, t) {
                var n = I(arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [p.Z, s.ZP], 2),
                    r = n[0],
                    i = n[1];
                if (null == e || null == t) return null;
                var o = r.getGuild(e);
                if (null == o) return null;
                var u = i.getMember(o.id, t);
                return null == u ? null : g.ZP.getHighestHoistedRole(o, u)
            };
            var O = n(2590);

            function y(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(e, r.key, r)
                }
            }

            function T(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function C(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        T(e, t, n[t])
                    }))
                }
                return e
            }

            function A(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }
            var S, m;
            ! function(e) {
                e.SPEAKER = "SPEAKER";
                e.AUDIENCE = "AUDIENCE";
                e.NO_ROLE = "NO_ROLE";
                e.ALL_REQUESTED_TO_SPEAK = "ALL_REQUESTED_TO_SPEAK";
                e.REQUESTED_TO_SPEAK_ONLY = "REQUESTED_TO_SPEAK_ONLY";
                e.BLOCKED = "BLOCKED";
                e.FRIEND = "FRIEND";
                e.SELECTED = "SELECTED";
                e.MEDIA = "MEDIA"
            }(S || (S = {}));
            ! function(e) {
                e.VOICE = "VOICE";
                e.STREAM = "STREAM"
            }(m || (m = {}));

            function M(e) {
                var t, n = e.speaker,
                    r = e.role,
                    i = e.user,
                    o = e.userNick,
                    u = e.connectedOn,
                    a = e.voiceState,
                    s = n ? "\0" : "",
                    l = e.type === m.STREAM ? "\0" : "",
                    c = a.selfMute ? "" : "\0",
                    d = a.selfVideo ? "\0" : "",
                    f = "".concat(null !== (t = null == r ? void 0 : r.position) && void 0 !== t ? t : 999).padStart(3, "0");
                return "".concat(s).concat(l).concat(c).concat(d).concat(f).concat(u).concat(function(e, t) {
                    return "".concat(e.toLowerCase().padEnd(32, "!")).concat(t.discriminator)
                }(o, i))
            }

            function R(e) {
                var t = e.user,
                    n = e.voiceState.requestToSpeakTimestamp;
                return null == n ? t.id : "".concat(Date.parse(n)).concat(t.id)
            }

            function b(e) {
                return e === h.xO.REQUESTED_TO_SPEAK || e === h.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK
            }

            function U(e) {
                var t = e.speaker,
                    n = e.role,
                    r = e.rtsState,
                    i = e.blocked,
                    o = e.isFriend,
                    u = [];
                b(r) && u.push(S.ALL_REQUESTED_TO_SPEAK);
                r === h.xO.REQUESTED_TO_SPEAK && u.push(S.REQUESTED_TO_SPEAK_ONLY);
                if (t) u.push(S.SPEAKER);
                else {
                    null != n ? u.push(n.id) : u.push(S.NO_ROLE);
                    u.push(S.AUDIENCE)
                }
                i && u.push(S.BLOCKED);
                o && u.push(S.FRIEND);
                return u
            }
            var D = function() {
                function e(t) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e);
                    var n;
                    this.participants = {};
                    this._participantsIndex = new r.Z(U, M);
                    this._requestToSpeakIndex = new r.Z((function() {
                        return []
                    }), R);
                    this.channelId = t;
                    this.guildId = null === (n = u.Z.getChannel(t)) || void 0 === n ? void 0 : n.getGuildId()
                }
                var t = e.prototype;
                t._getParticipantsForUser = function(e, t) {
                    var n = [],
                        r = d.Z.getVoiceStateForChannel(this.channelId, e);
                    if (null == r) return n;
                    var u = c.default.getUser(e);
                    if (null == u) {
                        null != this.guildId && E.Z.isPublic(this.channelId) && a.Z.requestMember(this.guildId, e);
                        return n
                    }
                    var p, g, v, I = null != t ? t[0] : null,
                        y = {
                            user: u,
                            userNick: f.ZP.getName(this.guildId, this.channelId, u),
                            voiceState: r,
                            role: N(this.guildId, e),
                            speaker: _.ZP.isSpeaker(e, this.channelId),
                            member: null != this.guildId ? s.ZP.getMember(this.guildId, e) : null,
                            blocked: l.Z.getRelationships()[u.id] === O.OGo.BLOCKED,
                            isFriend: l.Z.isFriend(u.id),
                            connectedOn: null !== (p = null == I ? void 0 : I.connectedOn) && void 0 !== p ? p : Date.now()
                        },
                        T = A(C({}, y), {
                            type: m.VOICE,
                            id: u.id,
                            rtsState: (0, h.gf)(r)
                        });
                    n.push(T);
                    var S = null !== (v = o.Z.getStreamForUser(e, this.guildId)) && void 0 !== v ? v : o.Z.getActiveStreamForUser(e, this.guildId);
                    if (null != S && S.channelId === this.channelId) {
                        var M = (0, i.V9)(S);
                        g = A(C({}, y), {
                            id: M,
                            type: m.STREAM,
                            rtsState: h.xO.NONE
                        });
                        n.push(g)
                    }
                    return n
                };
                t.updateParticipant = function(e) {
                    var t = this,
                        n = this.participants[e],
                        r = this._getParticipantsForUser(e, n);
                    if (null == n && 0 === r.length) return !1;
                    null == n || n.forEach((function(e) {
                        t._participantsIndex.delete(e.id);
                        t._requestToSpeakIndex.delete(e.id)
                    }));
                    r.forEach((function(n) {
                        t._participantsIndex.set(n.id, n);
                        n.id === e && b(n.rtsState) ? t._requestToSpeakIndex.set(e, n) : t._requestToSpeakIndex.delete(e)
                    }));
                    this.participants[e] = r;
                    return !0
                };
                t.rebuild = function() {
                    var e = this,
                        t = u.Z.getChannel(this.channelId);
                    if (null == t || !t.isGuildStageVoice()) return !1;
                    var n = new Set(Object.keys(d.Z.getVoiceStatesForChannel(t.id)));
                    this._participantsIndex.clear();
                    this._requestToSpeakIndex.clear();
                    this.participants = {};
                    n.forEach((function(t) {
                        return e.updateParticipant(t)
                    }));
                    return !0
                };
                t.size = function(e) {
                    return this._participantsIndex.size(e)
                };
                t.toArray = function(e) {
                    return this._participantsIndex.values(e, !0)
                };
                t.getParticipant = function(e) {
                    var t;
                    return null !== (t = this._participantsIndex.get(e)) && void 0 !== t ? t : null
                };
                t.getRequestToSpeakParticipants = function() {
                    return this._requestToSpeakIndex.values(void 0, !0)
                };
                ! function(e, t, n) {
                    t && y(e.prototype, t);
                    n && y(e, n)
                }(e, [{
                    key: "version",
                    get: function() {
                        return this._participantsIndex.version
                    }
                }, {
                    key: "requestToSpeakVersion",
                    get: function() {
                        return this._requestToSpeakIndex.version
                    }
                }]);
                return e
            }()
        },
        162723: (e, t, n) => {
            n.d(t, {
                _L: () => _,
                Os: () => E,
                nG: () => h,
                B: () => p,
                jU: () => g
            });
            var r = n(940060),
                i = n(202351),
                o = n(944522),
                u = (n(664625), n(61209)),
                a = n(567403),
                s = n(682776),
                l = n(563135),
                c = n(227202),
                d = n(766496),
                f = n(2590);

            function _(e, t, n) {
                var i, o, u = null == n ? void 0 : n.permissionOverwrites[e];
                return {
                    id: e,
                    type: t,
                    deny: null !== (i = null == u ? void 0 : u.deny) && void 0 !== i ? i : l.ZP.NONE,
                    allow: r.Z.remove(null !== (o = null == u ? void 0 : u.allow) && void 0 !== o ? o : l.ZP.NONE, c.yP)
                }
            }

            function E(e) {
                var t = e.allow,
                    n = e.deny;
                return r.Z.equals(t, l.ZP.NONE) && r.Z.equals(n, l.ZP.NONE)
            }

            function h(e) {
                return (0, i.e7)([s.Z, a.Z, u.Z], (function() {
                    var t = u.Z.getChannel(e),
                        n = a.Z.getGuild(null == t ? void 0 : t.getGuildId());
                    return !(!s.Z.can(f.Plq.ADMINISTRATOR, n) && !s.Z.can(f.Plq.MANAGE_ROLES, t, void 0, void 0, !0)) || !!s.Z.can(c.N, t)
                }), [e])
            }

            function p(e) {
                return (0, i.e7)([u.Z, s.Z], (function() {
                    return null != e && s.Z.can(f.Plq.MUTE_MEMBERS, u.Z.getChannel(e))
                }), [e])
            }

            function g(e) {
                return !(null == e || !e.isGuildStageVoice()) && (!!o.Z.isLurking(e.guild_id) && (!!d.Z.isPublic(e.id) && s.Z.can(c.gl, e)))
            }
        },
        933022: (e, t, n) => {
            n.d(t, {
                ZP: () => w
            });
            var r = n(496486),
                i = n.n(r),
                o = n(202351),
                u = n(744564),
                a = n(61209),
                s = n(5544),
                l = n(21372),
                c = n(567403),
                d = n(473903),
                f = n(407561),
                _ = n(563135),
                E = n(227202),
                h = n(525261);

            function p(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function g(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function v(e) {
                v = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return v(e)
            }

            function I(e, t) {
                return !t || "object" !== y(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function N(e, t) {
                N = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return N(e, t)
            }
            var O, y = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function T(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = v(e);
                    if (t) {
                        var i = v(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return I(this, n)
                }
            }! function(e) {
                e.SPEAKER = "speaker";
                e.MODERATOR = "moderator"
            }(O || (O = {}));
            var C, A = {},
                S = (g(C = {}, O.SPEAKER, !1), g(C, O.MODERATOR, !1), C);

            function m(e, t) {
                var n = f.Z.getVoiceStateForChannel(t, e);
                return (0, h.gf)(n) === h.xO.ON_STAGE
            }

            function M(e, t, n) {
                return _.ZP.can({
                    permission: E.yP,
                    user: e,
                    context: t,
                    overwrites: n.permissionOverwrites,
                    roles: t.roles
                })
            }

            function R(e, t) {
                var n, r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    i = a.Z.getChannel(t),
                    o = null == i ? void 0 : i.getGuildId(),
                    u = c.Z.getGuild(o);
                return null != u && null != i && i.isGuildStageVoice() ? (g(n = {}, O.SPEAKER, m(e, t)), g(n, O.MODERATOR, r ? M(e, u, i) : null), n) : S
            }

            function b(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                null == A[t] && (A[t] = {});
                var r = R(e, t, n);
                A[t][e] = r;
                return r
            }

            function U(e, t) {
                var n;
                if (null == t) return !1;
                var r = a.Z.getChannel(t);
                if (null == r || !r.isGuildStageVoice()) return !1;
                null === (n = A[t]) || void 0 === n || delete n[e];
                return !0
            }

            function D(e) {
                var t = s.ZP.getChannels(e)[s.Zb].filter((function(e) {
                        return e.channel.isGuildStageVoice()
                    })),
                    n = !0,
                    r = !1,
                    i = void 0;
                try {
                    for (var o, u = t[Symbol.iterator](); !(n = (o = u.next()).done); n = !0) {
                        var a = o.value.channel;
                        delete A[a.id]
                    }
                } catch (e) {
                    r = !0;
                    i = e
                } finally {
                    try {
                        n || null == u.return || u.return()
                    } finally {
                        if (r) throw i
                    }
                }
                return t.length > 0
            }

            function Z(e) {
                var t = e.guildId,
                    n = e.user;
                return null != n && null != t && function(e, t) {
                    for (var n in A) {
                        var r = a.Z.getBasicChannel(n);
                        null != r && r.guild_id === t && delete A[n][e]
                    }
                    return !0
                }(n.id, t)
            }

            function P(e) {
                var t = e.guild;
                for (var n in A) {
                    var r = a.Z.getBasicChannel(n);
                    null != r && r.guild_id !== t.id || delete A[n]
                }
            }
            var L = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && N(e, t)
                }(n, e);
                var t = T(n);

                function n() {
                    p(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    this.waitFor(l.ZP, a.Z, c.Z, d.default, f.Z)
                };
                r.isSpeaker = function(e, t) {
                    return this.getPermissionsForUser(e, t)[O.SPEAKER]
                };
                r.isModerator = function(e, t) {
                    var n;
                    return null !== (n = this.getPermissionsForUser(e, t, !0)[O.MODERATOR]) && void 0 !== n && n
                };
                r.isAudienceMember = function(e, t) {
                    var n = this.getPermissionsForUser(e, t);
                    return !n[O.SPEAKER] && !n[O.MODERATOR]
                };
                r.getPermissionsForUser = function(e, t) {
                    var n, r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    if (null == e || null == t) return S;
                    var i = null === (n = A[t]) || void 0 === n ? void 0 : n[e];
                    return null != i ? r && null == i[O.MODERATOR] ? b(e, t, !0) : i : b(e, t, r)
                };
                r.__getLocalVars = function() {
                    return {
                        userStageRoles: A
                    }
                };
                return n
            }(o.ZP.Store);
            L.displayName = "StageChannelRoleStore";
            const w = new L(u.Z, {
                CHANNEL_UPDATES: function(e) {
                    var t = e.channels,
                        n = !0,
                        r = !1,
                        i = void 0;
                    try {
                        for (var o, u = t[Symbol.iterator](); !(n = (o = u.next()).done); n = !0) {
                            var a = o.value;
                            delete A[a.id]
                        }
                    } catch (e) {
                        r = !0;
                        i = e
                    } finally {
                        try {
                            n || null == u.return || u.return()
                        } finally {
                            if (r) throw i
                        }
                    }
                },
                CONNECTION_OPEN: function() {
                    A = {}
                },
                GUILD_MEMBER_REMOVE: Z,
                GUILD_MEMBER_UPDATE: Z,
                GUILD_ROLE_UPDATE: function(e) {
                    D(e.guildId)
                },
                PASSIVE_UPDATE_V1: function(e) {
                    var t, n = D(e.guildId),
                        r = !0,
                        i = !1,
                        o = void 0;
                    try {
                        for (var u, a = (null !== (t = e.voiceStates) && void 0 !== t ? t : [])[Symbol.iterator](); !(r = (u = a.next()).done); r = !0) {
                            var s = u.value;
                            n = U(s.userId, s.channelId) || n
                        }
                    } catch (e) {
                        i = !0;
                        o = e
                    } finally {
                        try {
                            r || null == a.return || a.return()
                        } finally {
                            if (i) throw o
                        }
                    }
                    return n
                },
                VOICE_STATE_UPDATES: function(e) {
                    var t = e.voiceStates;
                    return !i().isEmpty(A) && t.reduce((function(e, t) {
                        return U(t.userId, t.channelId) || e
                    }), !1)
                },
                GUILD_CREATE: P,
                GUILD_DELETE: P
            })
        },
        713717: (e, t, n) => {
            n.d(t, {
                PK: () => l,
                xJ: () => c,
                tu: () => d,
                AI: () => f
            });
            var r = n(202351),
                i = n(260561),
                o = n(567403),
                u = n(407561),
                a = n(82274),
                s = n(808194);

            function l(e) {
                return (0, r.e7)([a.Z, u.Z], (function() {
                    return null != a.Z.getMutableParticipants(e, s.pV.SPEAKER).find((function(e) {
                        return e.type === s.Ui.STREAM
                    })) || u.Z.hasVideo(e)
                }), [e])
            }

            function c(e) {
                return null != a.Z.getMutableParticipants(e, s.pV.SPEAKER).find((function(e) {
                    return e.type === s.Ui.STREAM
                })) || u.Z.hasVideo(e)
            }

            function d(e) {
                var t, n = o.Z.getGuild(e);
                return null != n && (null !== (t = null == n ? void 0 : n.maxStageVideoChannelUsers) && void 0 !== t ? t : 0) > 0
            }
            var f = (0, i.B)({
                kind: "guild",
                id: "2023-02_stage_boosting",
                label: "Stage Boosting",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enabled",
                    config: {
                        enabled: !0
                    }
                }]
            })
        },
        536945: (e, t, n) => {
            n.d(t, {
                Z: () => M
            });
            var r = n(496486),
                i = n.n(r),
                o = n(202351),
                u = n(744564),
                a = n(382060),
                s = n(61209);

            function l(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function c(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function d(e) {
                d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return d(e)
            }

            function f(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        c(e, t, n[t])
                    }))
                }
                return e
            }

            function _(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function E(e, t) {
                return !t || "object" !== p(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function h(e, t) {
                h = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return h(e, t)
            }
            var p = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function g(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = d(e);
                    if (t) {
                        var i = d(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return E(this, n)
                }
            }
            var v = {},
                I = new Set;

            function N(e) {
                return {
                    id: e.id,
                    parentId: e.parent_id
                }
            }

            function O(e) {
                e in v && delete v[e]
            }

            function y(e) {
                if (null != e.threads && e.threads.length > 0) {
                    v[e.id] = {};
                    e.threads.filter((function(e) {
                        return a.AW.has(e.type)
                    })).forEach((function(t) {
                        return T(e.id, t)
                    }))
                }
                e.hasThreadsSubscription && I.add(e.id)
            }

            function T(e, t) {
                var n = v[e],
                    r = t.parent_id;
                r in n || (n[r] = {});
                v[e][r][t.id] = N(t)
            }

            function C(e) {
                var t, n = e.channel;
                if (!a.AW.has(n.type)) return !1;
                if (!0 === (null === (t = n.threadMetadata) || void 0 === t ? void 0 : t.archived)) return A(n);
                var r, i = null !== (r = v[n.guild_id]) && void 0 !== r ? r : {};
                v[n.guild_id] = _(f({}, i), c({}, n.parent_id, _(f({}, i[n.parent_id]), c({}, n.id, N(n)))))
            }

            function A(e) {
                var t = e.guild_id,
                    n = e.parent_id,
                    r = e.id;
                if (null == t || null == n) return !1;
                if (!(t in v)) return !1;
                if (!(n in v[t])) return !1;
                if (!(r in v[t][n])) return !1;
                v[t] = _(f({}, v[t]), c({}, n, f({}, v[t][n])));
                delete v[t][n][r];
                i().isEmpty(v[t][n]) && delete v[t][n]
            }
            var S = {},
                m = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        t && h(e, t)
                    }(n, e);
                    var t = g(n);

                    function n() {
                        l(this, n);
                        return t.apply(this, arguments)
                    }
                    var r = n.prototype;
                    r.initialize = function() {
                        this.waitFor(s.Z)
                    };
                    r.isActive = function(e, t, n) {
                        return null != e && null != this.getThreadsForParent(e, t)[n]
                    };
                    r.getThreadsForGuild = function(e) {
                        var t;
                        return null !== (t = v[e]) && void 0 !== t ? t : S
                    };
                    r.getThreadsForParent = function(e, t) {
                        var n;
                        return null !== (n = this.getThreadsForGuild(e)[t]) && void 0 !== n ? n : S
                    };
                    r.hasThreadsForChannel = function(e, t) {
                        return !i().isEmpty(this.getThreadsForParent(e, t))
                    };
                    r.forEachGuild = function(e) {
                        for (var t in v) e(t, v[t])
                    };
                    r.hasLoaded = function(e) {
                        return I.has(e)
                    };
                    r.__getLocalVars = function() {
                        return {
                            threadsByGuild: v,
                            loadedGuildIds: I,
                            NO_THREADS: S
                        }
                    };
                    return n
                }(o.ZP.Store);
            m.displayName = "ActiveThreadsStore";
            const M = new m(u.Z, {
                CONNECTION_OPEN: function(e) {
                    v = {};
                    I.clear();
                    e.guilds.forEach((function(e) {
                        y(e)
                    }))
                },
                OVERLAY_INITIALIZE: function(e) {
                    var t = e.channels;
                    v = {};
                    i()(t).filter((function(e) {
                        return a.Ec.has(e.type)
                    })).groupBy("guild_id").forEach((function(e, t) {
                        v[t] = {};
                        e.forEach((function(e) {
                            return T(t, e)
                        }))
                    }))
                },
                GUILD_CREATE: function(e) {
                    var t = e.guild;
                    O(t.id);
                    y(t)
                },
                GUILD_DELETE: function(e) {
                    O(e.guild.id)
                },
                THREAD_CREATE: C,
                THREAD_UPDATE: C,
                THREAD_LIST_SYNC: function(e) {
                    var t = e.guildId,
                        n = e.threads;
                    null == e.channelIds && I.add(t);
                    v[t] = f({}, v[t]);
                    for (var r in v[t]) v[t][r] = f({}, v[t][r]);
                    n.forEach((function(e) {
                        return T(t, e)
                    }))
                },
                THREAD_DELETE: function(e) {
                    return A(e.channel)
                },
                CHANNEL_DELETE: function(e) {
                    var t = e.channel;
                    if (null == t.guild_id || !(t.guild_id in v)) return !1;
                    v[t.guild_id] = f({}, v[t.guild_id]);
                    delete v[t.guild_id][t.id]
                }
            })
        },
        492628: (e, t, n) => {
            n.d(t, {
                Z: () => r
            });

            function r(e) {
                return {
                    id: e.id,
                    userId: e.user_id,
                    flags: e.flags,
                    muted: e.muted,
                    muteConfig: e.mute_config,
                    joinTimestamp: e.join_timestamp
                }
            }
        },
        166302: (e, t, n) => {
            n.d(t, {
                ur: () => r
            });

            function r(e) {
                return !1
            }
        },
        177570: (e, t, n) => {
            n.d(t, {
                Z: () => j
            });
            var r = n(202351),
                i = n(744564),
                o = n(409125),
                u = n(306263),
                a = n(924066),
                s = n(39649),
                l = n(664625),
                c = n(61209),
                d = n(567403),
                f = n(52467),
                _ = n(682776),
                E = n(563367),
                h = n(671723),
                p = n(715107),
                g = n(407561),
                v = n(2590),
                I = n(443132);

            function N(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function O(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function y(e) {
                y = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return y(e)
            }

            function T(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        O(e, t, n[t])
                    }))
                }
                return e
            }

            function C(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function A(e, t) {
                return !t || "object" !== U(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function S(e, t) {
                S = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return S(e, t)
            }
            var m, M, R, b, U = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function D(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = y(e);
                    if (t) {
                        var i = y(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return A(this, n)
                }
            }
            var Z = null,
                P = {};
            L();

            function L() {
                m = new Map;
                M = {};
                R = {};
                b = {};
                P = {}
            }

            function w(e) {
                m.delete(e)
            }

            function G() {
                var e = [];
                for (var t in M) {
                    var n = M[t];
                    for (var r in n) e.push(M[t][r])
                }
                return e
            }

            function k(e) {
                var t = e.streamKey,
                    n = e.region,
                    r = e.viewerIds,
                    i = e.paused;
                m.set(t, C(T({}, (0,
                    u.my)(t)), {
                    state: i ? v.jm8.PAUSED : v.jm8.ACTIVE
                }));
                R[t] = {
                    streamKey: t,
                    region: n,
                    viewerIds: r
                }
            }

            function H(e, t) {
                return e === I.lo.CALL || _.Z.canWithPartialContext(v.Plq.VIEW_CHANNEL, {
                    channelId: t
                })
            }

            function Y(e) {
                var t = c.Z.getChannel(e.channelId);
                return !!H(e.streamType, e.channelId) || null != t && (0, a.p9)(t, g.Z, d.Z, _.Z, o.Z)[0]
            }
            var F = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && S(e, t)
                }(n, e);
                var t = D(n);

                function n() {
                    N(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    this.syncWith([_.Z], (function() {
                        return !0
                    }));
                    this.waitFor(h.ZP, _.Z)
                };
                r.isSelfStreamHidden = function(e) {
                    var t;
                    return null !== (t = P[e]) && void 0 !== t && t
                };
                r.getLastActiveStream = function() {
                    return (0, s.Z)(f.Z) && null !== (e = Array.from(m.values()).pop()) && void 0 !== e ? e : null;
                    var e
                };
                r.getAllActiveStreams = function() {
                    return (0,
                        s.Z)(f.Z) ? Array.from(m.values()) : []
                };
                r.getAllActiveStreamsForChannel = function(e) {
                    return (0, s.Z)(f.Z) ? Array.from(m.values()).filter((function(t) {
                        return t.channelId === e
                    })) : []
                };
                r.getActiveStreamForStreamKey = function(e) {
                    return (0, s.Z)(f.Z) && null !== (t = m.get(e)) && void 0 !== t ? t : null;
                    var t
                };
                r.getActiveStreamForApplicationStream = function(e) {
                    if (!(0, s.Z)(f.Z) || null == e) return null;
                    var t, n = (0, u.V9)(e);
                    return null !== (t = this.getActiveStreamForStreamKey(n)) && void 0 !== t ? t : null
                };
                r.getCurrentUserActiveStream = function() {
                    var e = p.Z.getVoiceChannelId(),
                        t = c.Z.getChannel(e);
                    return null == t ? null : this.getActiveStreamForUser(l.default.getId(), t.getGuildId())
                };
                r.getActiveStreamForUser = function(e, t) {
                    var n, r = this.getStreamForUser(e, t);
                    return null != r ? this.getActiveStreamForApplicationStream(r) : null !== (n = this.getAllActiveStreams().find((function(t) {
                        return t.ownerId === e
                    }))) && void 0 !== n ? n : null
                };
                r.getStreamerActiveStreamMetadata = function() {
                    var e = p.Z.getVoiceChannelId(),
                        t = c.Z.getChannel(e);
                    if (null == t) return null;
                    var n, r = this.getActiveStreamForUser(l.default.getId(), t.getGuildId());
                    return null == r ? null : null !== (n = b[(0, u.V9)(r)]) && void 0 !== n ? n : null
                };
                r.getAnyStreamForUser = function(e) {
                    if (!(0, s.Z)(f.Z)) return null;
                    var t, n = M[e];
                    return null == n ? null : null !== (t = Object.values(n).find((function(e) {
                        return Y(e)
                    }))) && void 0 !== t ? t : null
                };
                r.getStreamForUser = function(e, t) {
                    var n;
                    if (!(0, s.Z)(f.Z)) return null;
                    var r = null === (n = M[e]) || void 0 === n ? void 0 : n[null != t ? t : "null"];
                    return null == r ? null : Y(r) ? r : null
                };
                r.getRTCStream = function(e) {
                    return (0, s.Z)(f.Z) && null !== (t = R[e]) && void 0 !== t ? t : null;
                    var t
                };
                r.getAllApplicationStreams = function() {
                    return (0, s.Z)(f.Z) ? G().filter((function(e) {
                        return null != e && H(e.streamType, e.channelId)
                    })) : []
                };
                r.getAllApplicationStreamsForChannel = function(e) {
                    return (0, s.Z)(f.Z) ? G().filter((function(t) {
                        return null != t && t.channelId === e && H(t.streamType, t.channelId)
                    })) : []
                };
                r.getViewerIds = function(e) {
                    if (!(0, s.Z)(f.Z)) return [];
                    var t = null,
                        n = null != (t = "string" == typeof e ? e : (0, u.V9)(e)) ? R[t] : null;
                    return null != n ? n.viewerIds : []
                };
                r.getState = function() {
                    return (0, s.Z)(f.Z) ? {
                        activeStreams: Array.from(m.entries()),
                        streamsByUserAndGuild: M,
                        rtcStreams: R,
                        streamerActiveStreamMetadatas: b
                    } : {
                        activeStreams: [],
                        streamsByUserAndGuild: {},
                        rtcStreams: {},
                        streamerActiveStreamMetadatas: {}
                    }
                };
                r.__getLocalVars = function() {
                    return {
                        activeStreams: m,
                        streamsByUserAndGuild: M,
                        rtcStreams: R,
                        streamerActiveStreamMetadatas: b,
                        selectedParticipantId: Z,
                        selfStreamParticipantsHidden: P
                    }
                };
                return n
            }(r.ZP.Store);
            F.displayName = "ApplicationStreamingStore";
            const j = new F(i.Z, {
                OVERLAY_INITIALIZE: function(e) {
                    var t = e.applicationStreamState;
                    M = t.streamsByUserAndGuild;
                    m = new Map(t.activeStreams);
                    R = t.rtcStreams;
                    b = t.streamerActiveStreamMetadatas
                },
                VOICE_STATE_UPDATES: function(e) {
                    return e.voiceStates.reduce((function(e, t) {
                        var n = t.userId,
                            r = t.guildId,
                            i = t.channelId,
                            o = t.sessionId;
                        if (t.selfStream && null != i) {
                            ! function(e) {
                                null == M[e.ownerId] && (M[e.ownerId] = {});
                                var t;
                                M[e.ownerId][null !== (t = e.guildId) && void 0 !== t ? t : "null"] = e
                            }({
                                streamType: null != r ? I.lo.GUILD : I.lo.CALL,
                                ownerId: n,
                                guildId: r,
                                channelId: i
                            });
                            return !0
                        }
                        var u = l.default.getSessionId();
                        return n === l.default.getId() && o !== u && null != E.Z.getChannelId() ? e : function(e, t) {
                            var n;
                            t = null != t ? t : "null";
                            if (null == (null === (n = M[e]) || void 0 === n ? void 0 : n[t])) return !1;
                            delete M[e][t];
                            return !0
                        }(n, r) || e
                    }), !1)
                },
                STREAM_WATCH: function(e) {
                    var t = e.streamKey,
                        n = (0, u.my)(t);
                    m.delete(t);
                    m.set(t, C(T({}, n), {
                        state: v.jm8.CONNECTING
                    }));
                    n.ownerId === l.default.getId() && (P[n.channelId] = !1)
                },
                STREAM_START: function(e) {
                    var t = e.streamType,
                        n = e.guildId,
                        r = e.channelId,
                        i = e.pid,
                        o = e.sourceName,
                        a = (0, u.V9)({
                            streamType: t,
                            guildId: n,
                            channelId: r,
                            ownerId: l.default.getId()
                        }),
                        s = null != i ? h.ZP.getGameForPID(i) : null;
                    b[a] = {
                        id: null == s ? void 0 : s.id,
                        pid: i,
                        sourceName: o
                    };
                    m.delete(a);
                    m.set(a, {
                        streamType: t,
                        guildId: n,
                        channelId: r,
                        ownerId: l.default.getId(),
                        state: v.jm8.CONNECTING
                    })
                },
                STREAM_STOP: function(e) {
                    var t = e.streamKey;
                    b[t] = null
                },
                STREAM_CREATE: k,
                STREAM_UPDATE: k,
                STREAM_TIMED_OUT: function(e) {
                    var t = e.streamKey,
                        n = m.get(t);
                    if (null == n) return !1;
                    m.set(t, C(T({}, n), {
                        state: v.jm8.FAILED
                    }))
                },
                STREAM_DELETE: function(e) {
                    var t = e.streamKey,
                        r = e.unavailable,
                        i = e.reason;
                    delete R[t];
                    var o = m.get(t);
                    if (null == o) return !1;
                    var a = v.jm8.ENDED;
                    if (r) a = v.jm8.RECONNECTING;
                    else if (i === v.si2.UNAUTHORIZED) a = v.jm8.FAILED;
                    else if (i === v.si2.SAFETY_GUILD_RATE_LIMITED) {
                        var s = (0, u.my)(t).guildId;
                        n.e(80853).then(n.bind(n, 980853)).then((function(e) {
                            (0, e.default)(s)
                        }));
                        a = v.jm8.ENDED
                    }
                    m.set(t, C(T({}, o), {
                        state: a
                    }));
                    a === v.jm8.ENDED && Z !== t && w(t)
                },
                STREAM_CLOSE: function(e) {
                    w(e.streamKey)
                },
                STREAM_UPDATE_SELF_HIDDEN: function(e) {
                    var t = e.channelId,
                        n = e.selfStreamHidden;
                    (0, u.DB)(Z) && (null == Z ? void 0 : Z.includes(l.default.getId())) && !1 === P[t] && !0 === n && (Z = null);
                    P[t] = n
                },
                RTC_CONNECTION_STATE: function(e) {
                    var t = e.streamKey,
                        n = e.state;
                    if (null == t) return !1;
                    var r = m.get(t);
                    if (null == r || r.state === v.jm8.ENDED) return !1;
                    var i = r.state;
                    switch (n) {
                        case v.hes.DISCONNECTED:
                            i = v.jm8.RECONNECTING;
                            break;
                        case v.hes.RTC_CONNECTED:
                            i = v.jm8.ACTIVE
                    }
                    if (i === r.state) return !1;
                    m.set(t, C(T({}, r), {
                        state: i
                    }))
                },
                CHANNEL_RTC_SELECT_PARTICIPANT: function(e) {
                    var t = e.id,
                        n = e.channelId;
                    Z = t;
                    Array.from(m.values()).forEach((function(e) {
                        (0, u.V9)(e) !== Z && e.state === v.jm8.ENDED && w((0, u.V9)(e))
                    }));
                    if (null != t) {
                        (0, u.DB)(t) && t.includes(l.default.getId()) && (P[n] = !1)
                    }
                },
                CONNECTION_OPEN: L,
                CONNECTION_CLOSED: L,
                LOGOUT: L
            })
        },
        610773: (e, t, n) => {
            n.d(t, {
                Z: () => A
            });
            var r = n(496486),
                i = n.n(r),
                o = n(202351),
                u = n(281110),
                a = n(744564),
                s = n(61209),
                l = n(715107),
                c = n(464187),
                d = n(2590);

            function f(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function _(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function E(e) {
                E = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return E(e)
            }

            function h(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        _(e, t, n[t])
                    }))
                }
                return e
            }

            function p(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function g(e, t) {
                return !t || "object" !== I(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function v(e, t) {
                v = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return v(e, t)
            }
            var I = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function N(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = E(e);
                    if (t) {
                        var i = E(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return g(this, n)
                }
            }
            var O = {},
                y = {};

            function T() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.Z.getChannelId(),
                    n = s.Z.getChannel(t);
                if (null != n && null == n.getGuildId() && null != t && (null == O[t] || e)) {
                    var r;
                    O[t] = null !== (r = O[t]) && void 0 !== r ? r : {
                        channelId: t,
                        ringing: []
                    };
                    a.Z.dispatch({
                        type: "CALL_CONNECT",
                        channelId: t
                    });
                    return !0
                }
                return !1
            }
            var C = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && v(e, t)
                }(n, e);
                var t = N(n);

                function n() {
                    f(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    this.waitFor(c.Z, l.Z)
                };
                r.getCall = function(e) {
                    return O[e]
                };
                r.getCalls = function() {
                    return Object.values(O)
                };
                r.getMessageId = function(e) {
                    var t = this.getCall(e);
                    return null != t ? t.messageId : null
                };
                r.isCallActive = function(e, t) {
                    var n = O[e];
                    return null != n && !n.unavailable && (null != t ? n.messageId === t : null != n.region)
                };
                r.isCallUnavailable = function(e) {
                    var t = O[e];
                    return null != t && t.unavailable
                };
                r.getInternalState = function() {
                    return {
                        calls: O,
                        enqueuedRings: y
                    }
                };
                r.__getLocalVars = function() {
                    return {
                        calls: O,
                        enqueuedRings: y
                    }
                };
                return n
            }(o.ZP.Store);
            C.displayName = "CallStore";
            const A = new C(a.Z, {
                CONNECTION_OPEN: function() {
                    return T(!0)
                },
                CONNECTION_CLOSED: function() {
                    O = {};
                    y = {}
                },
                OVERLAY_INITIALIZE: function(e) {
                    var t = e.callStoreInternalState;
                    O = h({}, t.calls);
                    y = h({}, t.enqueuedRings)
                },
                CONNECTION_RESUMED: function() {
                    return T(!0)
                },
                CHANNEL_SELECT: function(e) {
                    return T(!1, e.channelId)
                },
                CHANNEL_DELETE: function(e) {
                    var t = e.channel;
                    null != y[t.id] && delete y[t.id];
                    if (null == O[t.id]) return !1;
                    delete O[t.id]
                },
                CALL_CREATE: function(e) {
                    var t = e.channelId,
                        n = e.messageId,
                        r = e.region,
                        i = e.ringing;
                    O[t] = {
                        channelId: t,
                        messageId: n,
                        region: r,
                        ringing: i,
                        unavailable: !1,
                        regionUpdated: !1
                    };
                    if (null != y[t]) {
                        var o = y[t];
                        delete y[t];
                        1 !== o.indexOf("all") && (o = null);
                        u.ZP.post({
                            url: d.ANM.CALL_RING(t),
                            body: {
                                recipients: o
                            },
                            oldFormErrors: !0
                        })
                    }
                },
                CALL_UPDATE: function(e) {
                    var t = e.channelId,
                        n = e.messageId,
                        r = e.region,
                        i = e.ringing,
                        o = O[t],
                        u = null != o && (o.regionUpdated || o.region !== r);
                    O[t] = p(h({}, O[t]), {
                        messageId: n,
                        region: r,
                        ringing: i,
                        regionUpdated: u
                    })
                },
                CALL_DELETE: function(e) {
                    var t = e.channelId,
                        n = e.unavailable,
                        r = O[t];
                    O[t] = !0 === n && null != r ? p(h({}, r), {
                        unavailable: n
                    }) : {
                        channelId: t,
                        ringing: [],
                        messageId: null,
                        region: null,
                        regionUpdated: !1,
                        unavailable: n
                    };
                    null != y[t] && delete y[t]
                },
                CALL_ENQUEUE_RING: function(e) {
                    var t, n = e.channelId,
                        r = e.recipients;
                    y[n] = i().union(null !== (t = y[n]) && void 0 !== t ? t : [], null != r ? r : ["all"])
                },
                VOICE_CHANNEL_SELECT: function(e) {
                    null == e.channelId && (y = {})
                }
            })
        },
        804185: (e, t, n) => {
            n.d(t, {
                uZ: () => T,
                D5: () => U,
                ZP: () => w
            });
            var r = n(289283),
                i = n(202351),
                o = n(744564),
                u = n(841800),
                a = n(930948),
                s = n(61209),
                l = n(682776),
                c = n(923555),
                d = n(715107),
                f = n(464187),
                _ = n(473903),
                E = n(2590),
                h = n(897196),
                p = n(520453);

            function g(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function v(e) {
                v = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return v(e)
            }

            function I(e, t) {
                return !t || "object" !== O(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function N(e, t) {
                N = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return N(e, t)
            }
            var O = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function y(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = v(e);
                    if (t) {
                        var i = v(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return I(this, n)
                }
            }
            var T = "message_requests",
                C = !1,
                A = !1,
                S = !0,
                m = !1,
                M = {},
                R = {};

            function b(e) {
                if (null == e) return null;
                if ((0, h.AB)(e)) {
                    var t = f.Z.getGuildId();
                    if (null == t) return null;
                    e = (0, h.Qk)(e, t)
                }
                return e
            }

            function U(e) {
                return [u.tI.VIEW_CHANNEL, u.tI.VIEW_THREAD, u.tI.VIEW_MESSAGE_REQUEST].includes(e.type)
            }

            function D(e) {
                var t = !1;
                if (m) {
                    m = !1;
                    t = !0
                }
                var n = b(d.Z.getChannelId());
                if (null != n && n in M) {
                    delete M[n];
                    t = !0
                }
                return t && e ? e : !e
            }

            function Z() {
                var e = !1;
                for (var t in M) {
                    var n = M[t];
                    if (n.type === u.tI.VIEW_THREAD || n.type === u.tI.VIEW_CHANNEL) {
                        var r = s.Z.getChannel(n.channelId);
                        if (null == r || !l.Z.can(p.Pl.VIEW_CHANNEL, r)) {
                            delete M[t];
                            e = !0
                        }
                    }
                }
                return e
            }

            function P() {
                if (m === c.Z.isActive()) return !1;
                m = c.Z.isActive()
            }
            var L = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && N(e, t)
                }(n, e);
                var t = y(n);

                function n() {
                    g(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function(e) {
                    if (null != e) {
                        var t, n, r, i, o;
                        C = null !== (t = e.isMembersOpen) && void 0 !== t && t;
                        A = null !== (n = e.isSummariesOpen) && void 0 !== n && n;
                        S = null === (r = e.isProfileOpen) || void 0 === r || r;
                        M = null !== (i = e.sidebars) && void 0 !== i ? i : {};
                        R = null !== (o = e.guildSidebars) && void 0 !== o ? o : {}
                    }
                    this.syncWith([c.Z], P);
                    this.syncWith([l.Z], Z)
                };
                r.getState = function() {
                    return {
                        isMembersOpen: C,
                        isSummariesOpen: A,
                        isProfileOpen: S,
                        sidebars: M,
                        guildSidebars: R
                    }
                };
                r.getSection = function(e) {
                    var t = s.Z.getChannel(e);
                    return m ? E.ULH.SEARCH : null != (e = b(e)) && null != M[e] ? E.ULH.SIDEBAR_CHAT : (null == t ? void 0 : t.isDM()) && S ? E.ULH.PROFILE : A ? E.ULH.SUMMARIES : C ? E.ULH.MEMBERS : E.ULH.NONE
                };
                r.getSidebarState = function(e) {
                    return null == (e = b(e)) ? void 0 : M[e]
                };
                r.getGuildSidebarState = function(e) {
                    return null == e ? void 0 : R[e]
                };
                r.getCurrentSidebarChannelId = function(e) {
                    if (null == (e = b(e))) return null;
                    if (m) return null;
                    var t = M[e];
                    return null == t ? null : t.type === u.tI.VIEW_THREAD || t.type === u.tI.VIEW_CHANNEL ? t.channelId : null
                };
                r.getCurrentSidebarMessageId = function(e) {
                    var t;
                    if (null == (e = b(e))) return null;
                    if (m) return null;
                    var n = M[e];
                    return null == n ? null : n.type === u.tI.VIEW_THREAD || n.type === u.tI.VIEW_CHANNEL ? null === (t = n.details) || void 0 === t ? void 0 : t.initialMessageId : null
                };
                r.__getLocalVars = function() {
                    return {
                        isMembersOpen: C,
                        isSummariesOpen: A,
                        isProfileOpen: S,
                        isSearchOpen: m,
                        sidebars: M,
                        guildSidebars: R
                    }
                };
                return n
            }(i.ZP.PersistedStore);
            L.displayName = "ChannelSectionStore";
            L.persistKey = "ChannelSectionStore2";
            const w = new L(o.Z, {
                CHANNEL_TOGGLE_MEMBERS_SECTION: function() {
                    A && (A = D(A));
                    C = D(C)
                },
                PROFILE_PANEL_TOGGLE_SECTION: function() {
                    S || a.S.dispatch(E.CkL.SEARCH_RESULTS_CLOSE);
                    S = D(S)
                },
                CHANNEL_TOGGLE_SUMMARIES_SECTION: function() {
                    C && (C = D(C));
                    A = D(A)
                },
                SIDEBAR_VIEW_CHANNEL: function(e) {
                    var t = e.sidebarType,
                        n = e.baseChannelId,
                        r = e.channelId,
                        i = e.details,
                        o = b(n);
                    if (null == o) return !1;
                    M[o] = {
                        type: t,
                        channelId: r,
                        details: i
                    };
                    return !0
                },
                SIDEBAR_VIEW_GUILD: function(e) {
                    var t = e.sidebarType,
                        n = e.guildId,
                        r = e.baseChannelId,
                        i = e.details;
                    m = !1;
                    var o = b(r);
                    if (null == o) return !1;
                    R[n] = {
                        type: t,
                        baseChannelId: o,
                        guildId: n,
                        details: i
                    };
                    return !0
                },
                SIDEBAR_CREATE_THREAD: function(e) {
                    var t = e.parentChannelId,
                        n = e.parentMessageId,
                        r = e.location;
                    m = !1;
                    var i = b(t);
                    null != i && (M[i] = {
                        type: u.tI.CREATE_THREAD,
                        parentChannelId: t,
                        parentMessageId: n,
                        location: r
                    })
                },
                SIDEBAR_CLOSE: function(e) {
                    var t = b(e.baseChannelId);
                    null != t && delete M[t]
                },
                SIDEBAR_CLOSE_GUILD: function(e) {
                    var t = e.guildId;
                    if (null != R[t]) {
                        delete R[t];
                        return !0
                    }
                    return !1
                },
                CHANNEL_DELETE: function(e) {
                    var t = e.channel;
                    if (t.id in M) {
                        delete M[t.id];
                        return !0
                    }
                    var n = !1;
                    for (var r in M) {
                        var i = M[r];
                        if (null != i && i.type === u.tI.VIEW_CHANNEL && i.channelId === t.id) {
                            delete M[r];
                            n = !0
                        }
                    }
                    return n
                },
                CHANNEL_SELECT: function() {
                    if (r.tq && C) {
                        C = !1;
                        A = !1
                    }
                },
                THREAD_CREATE: function(e) {
                    var t, n = e.channel;
                    if (n.ownerId === (null === (t = _.default.getCurrentUser()) || void 0 === t ? void 0 : t.id)) return !1;
                    var r = M[n.parent_id];
                    null != r && r.type === u.tI.CREATE_THREAD && r.parentMessageId === n.id && (M[n.parent_id] = {
                        type: u.tI.VIEW_THREAD,
                        channelId: n.id
                    })
                },
                THREAD_DELETE: function(e) {
                    var t = e.channel,
                        n = M[t.parent_id];
                    if (null == n || n.type !== u.tI.VIEW_THREAD || n.channelId !== t.id) return !1;
                    delete M[t.parent_id]
                }
            })
        },
        984216: (e, t, n) => {
            n.d(t, {
                Z: () => S
            });
            var r = n(496486),
                i = n.n(r),
                o = n(202351),
                u = n(744564),
                a = n(513328);

            function s(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
            var l = function() {
                    function e(t, n) {
                        s(this, e);
                        this._pendingRequests = new Set;
                        this._sentRequests = new Set;
                        this._unacknowledgedRequests = new Set;
                        this._guildId = t;
                        this._guildMemberExists = function(e) {
                            return n(t, e)
                        }
                    }
                    var t = e.prototype;
                    t.acknowledge = function(e) {
                        this._unacknowledgedRequests.delete(e);
                        this._pendingRequests.delete(e)
                    };
                    t.flushRequests = function(e) {
                        var t = this;
                        if (0 !== this._pendingRequests.size) {
                            var n = [];
                            this._pendingRequests.forEach((function(e) {
                                if (!t._guildMemberExists(e)) {
                                    t._unacknowledgedRequests.add(e);
                                    t._sentRequests.add(e);
                                    n.push(e)
                                }
                            }));
                            n.length > 0 && e(this._guildId, n);
                            this._pendingRequests.clear()
                        }
                    };
                    t.requestUnacknowledged = function() {
                        var e = this;
                        if (0 === this._unacknowledgedRequests.size) return !1;
                        this._unacknowledgedRequests.forEach((function(t) {
                            e._guildMemberExists(t) ? e._unacknowledgedRequests.delete(t) : e._pendingRequests.add(t)
                        }));
                        return 0 !== this._pendingRequests.size && void 0
                    };
                    t.request = function(e) {
                        if (this._guildMemberExists(e) || this._sentRequests.has(e) || this._pendingRequests.has(e)) return !1;
                        this._pendingRequests.add(e)
                    };
                    return e
                }(),
                c = function() {
                    function e(t, n) {
                        var r = this;
                        s(this, e);
                        this._guildStates = {};
                        this._flush = new a.sW(0, (function() {
                            return r.flushRequests()
                        }));
                        this._guildMemberExists = t;
                        this._onChange = n
                    }
                    var t = e.prototype;
                    t.reset = function() {
                        this._guildStates = {};
                        this._flush.cancel()
                    };
                    t.request = function(e, t) {
                        !1 !== this._getGuildState(e).request(t) && this._flush.delay(!1)
                    };
                    t.acknowledge = function(e, t) {
                        this._getGuildState(e).acknowledge(t)
                    };
                    t.flushRequests = function() {
                        var e = this;
                        i().forEach(this._guildStates, (function(t) {
                            return t.flushRequests(e._onChange)
                        }))
                    };
                    t.requestUnacknowledged = function() {
                        i().reduce(this._guildStates, (function(e, t) {
                            return !1 !== t.requestUnacknowledged() || t
                        }), !1) && this._flush.delay()
                    };
                    t._getGuildState = function(e) {
                        var t = this._guildStates[e];
                        null == t && (t = this._guildStates[e] = new l(e, this._guildMemberExists));
                        return t
                    };
                    return e
                }(),
                d = n(659436),
                f = n(61209),
                _ = n(21372);

            function E(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function h(e) {
                h = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return h(e)
            }

            function p(e, t) {
                return !t || "object" !== v(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function g(e, t) {
                g = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return g(e, t)
            }
            var v = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function I(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = h(e);
                    if (t) {
                        var i = h(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return p(this, n)
                }
            }
            var N = new c(_.ZP.isMember, (function(e, t) {
                u.Z.dispatch({
                    type: "GUILD_MEMBERS_REQUEST",
                    guildIds: [e],
                    userIds: t
                })
            }));

            function O() {
                N.reset()
            }

            function y(e, t) {
                N.request(e, t);
                return !1
            }

            function T(e, t) {
                t.forEach((function(t) {
                    var n = t.author,
                        r = t.mentions;
                    null != n && y(e, n.id);
                    null == r || r.forEach((function(t) {
                        return y(e, t.id)
                    }))
                }));
                return !1
            }

            function C(e) {
                var t = e.channelId,
                    n = e.messages,
                    r = f.Z.getChannel(t);
                return null != r && null != r.guild_id && T(r.guild_id, n)
            }
            var A = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && g(e, t)
                }(n, e);
                var t = I(n);

                function n() {
                    E(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    this.waitFor(f.Z, _.ZP)
                };
                r.requestMember = function(e, t) {
                    y(e, t)
                };
                r.__getLocalVars = function() {
                    return {
                        requester: N
                    }
                };
                return n
            }(o.ZP.Store);
            A.displayName = "GuildMemberRequesterStore";
            const S = new A(u.Z, {
                CONNECTION_CLOSED: O,
                CONNECTION_OPEN: O,
                CONNECTION_RESUMED: function() {
                    N.requestUnacknowledged();
                    return !1
                },
                GUILD_MEMBERS_CHUNK: function(e) {
                    var t = e.guildId,
                        n = e.members,
                        r = e.notFound;
                    n.forEach((function(e) {
                        N.acknowledge(t, e.user.id)
                    }));
                    null != r && r.forEach((function(e) {
                        return N.acknowledge(t, e)
                    }));
                    return !1
                },
                SEARCH_FINISH: function(e) {
                    var t = e.guildId,
                        n = e.messages;
                    return null != t && T(t, i().flatten(n))
                },
                LOCAL_MESSAGES_LOADED: C,
                LOAD_MESSAGES_SUCCESS: C,
                LOAD_MESSAGES_AROUND_SUCCESS: C,
                LOAD_PINNED_MESSAGES_SUCCESS: C,
                LOAD_RECENT_MENTIONS_SUCCESS: C,
                GUILD_FEED_FETCH_SUCCESS: function(e) {
                    var t = e.guildId,
                        n = e.data;
                    return T(t, (0, d._)(n))
                }
            })
        },
        747126: (e, t, n) => {
            n.d(t, {
                Z: () => h
            });
            var r = n(202351),
                i = n(630631),
                o = n(744564);

            function u(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function a(e) {
                a = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return a(e)
            }

            function s(e, t) {
                return !t || "object" !== c(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function l(e, t) {
                l = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return l(e, t)
            }
            var c = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function d(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = a(e);
                    if (t) {
                        var i = a(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return s(this, n)
                }
            }
            var f = "GuildNSFWAgreeStore",
                _ = {};
            var E = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && l(e, t)
                }(n, e);
                var t = d(n);

                function n() {
                    u(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    var e;
                    _ = null !== (e = i.Z.get(f)) && void 0 !== e ? e : _
                };
                r.didAgree = function(e) {
                    return null != e && (_[e] || !1)
                };
                r.__getLocalVars = function() {
                    return {
                        STORAGE_KEY: f,
                        guilds: _
                    }
                };
                return n
            }(r.ZP.Store);
            E.displayName = "GuildNSFWAgreeStore";
            const h = new E(o.Z, {
                GUILD_NSFW_AGREE: function(e) {
                    var t = e.guildId;
                    _[t] = !0;
                    i.Z.set(f, _)
                }
            })
        },
        595970: (e, t, n) => {
            n.d(t, {
                Z: () => M
            });
            var r = n(202351),
                i = n(744564),
                o = n(116404),
                u = n(306472),
                a = n(968449),
                s = n(120415),
                l = n(664625),
                c = n(2590),
                d = n(36256);

            function f(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function _(e) {
                _ = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return _(e)
            }

            function E(e, t) {
                return !t || "object" !== p(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function h(e, t) {
                h = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return h(e, t)
            }
            var p = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function g(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = _(e);
                    if (t) {
                        var i = _(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return E(this, n)
                }
            }
            var v = Date.now(),
                I = !1,
                N = !1,
                O = !1,
                y = !1,
                T = !1;

            function C() {
                return O || y || (0, s.Dt)() && T
            }

            function A() {
                Date.now() - v > c.OSm || C() ? I || i.Z.dispatch({
                    type: "IDLE",
                    idle: !0,
                    idleSince: v
                }) : I && i.Z.dispatch({
                    type: "IDLE",
                    idle: !1
                });
                Date.now() - v > Math.min(1e3 * a.CM.getSetting(), c.OSm) || C() ? N || i.Z.dispatch({
                    type: "AFK",
                    afk: !0
                }) : N && i.Z.dispatch({
                    type: "AFK",
                    afk: !1
                })
            }
            if (!__OVERLAY__)
                if (s.FB && null != (null === u.Z || void 0 === u.Z ? void 0 : u.Z.remotePowerMonitor)) {
                    ! function e() {
                        var t, n = function(t) {
                            v = Math.max(Date.now() - t, v);
                            A();
                            setTimeout(e, 1e4)
                        };
                        if (null != (null === u.Z || void 0 === u.Z || null === (t = u.Z.remotePowerMonitor) || void 0 === t ? void 0 : t.getSystemIdleTimeMs)) {
                            var r = u.Z.remotePowerMonitor.getSystemIdleTimeMs();
                            r instanceof Promise ? r.then(n) : n(r)
                        }
                    }();
                    u.Z.remotePowerMonitor.on("resume", (function() {
                        O = !1;
                        S({})
                    }));
                    u.Z.remotePowerMonitor.on("suspend", (function() {
                        O = !0;
                        S({});
                        o.default.disconnect()
                    }));
                    u.Z.remotePowerMonitor.on("lock-screen", (function() {
                        y = !0;
                        S({})
                    }));
                    u.Z.remotePowerMonitor.on("unlock-screen", (function() {
                        y = !1;
                        S({})
                    }))
                } else setInterval(A, .25 * c.OSm);

            function S(e) {
                var t = e.timestamp,
                    n = "OVERLAY_SET_NOT_IDLE" === e.type && null != t;
                if (n && t <= v) return !1;
                v = n ? t : Date.now();
                __OVERLAY__ ? i.Z.dispatch({
                    type: "OVERLAY_SET_NOT_IDLE",
                    timestamp: v
                }) : A();
                return !1
            }
            var m = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && h(e, t)
                }(n, e);
                var t = g(n);

                function n() {
                    f(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.isIdle = function() {
                    return I
                };
                r.isAFK = function() {
                    return N
                };
                r.getIdleSince = function() {
                    return I ? v : null
                };
                r.__getLocalVars = function() {
                    return {
                        idleSince: v,
                        idle: I,
                        afk: N,
                        systemSuspended: O,
                        systemLocked: y,
                        appBackgrounded: T
                    }
                };
                return n
            }(r.ZP.Store);
            m.displayName = "IdleStore";
            const M = new m(i.Z, {
                IDLE: function(e) {
                    I = e.idle
                },
                AFK: function(e) {
                    N = e.afk
                },
                SPEAKING: function(e) {
                    var t = e.userId;
                    e.speakingFlags !== d.Dg.NONE && t === l.default.getId() && S({});
                    return !1
                },
                APP_STATE_UPDATE: function(e) {
                    var t = e.state;
                    T = t === c.$7l.BACKGROUND;
                    v = Date.now();
                    A();
                    return !1
                },
                OVERLAY_SET_NOT_IDLE: S,
                CHANNEL_SELECT: S,
                VOICE_CHANNEL_SELECT: S,
                WINDOW_FOCUS: S,
                OVERLAY_INITIALIZE: S,
                OVERLAY_SET_INPUT_LOCKED: S,
                USER_SETTINGS_PROTO_UPDATE: S
            })
        },
        179913: (e, t, n) => {
            n.d(t, {
                ZP: () => It,
                Ex: () => Ye
            });
            var r = n(441143),
                i = n.n(r),
                o = n(730381),
                u = n.n(o),
                a = n(202351),
                s = n(281110),
                l = n(513328),
                c = n(165695),
                d = n(744564),
                f = n(396043),
                _ = n(566706),
                E = n(747820),
                h = n(327566),
                p = n(296602),
                g = n(269300),
                v = n(839266),
                I = n(339432),
                N = n(996344),
                O = n(442658),
                y = n(48315),
                T = n(435949),
                C = n(858311),
                A = n(106673),
                S = n(202958),
                m = n(364269);
            var M = n(72675),
                R = n(536945),
                b = n(487685),
                U = n(113566),
                D = n(473419),
                Z = n(382060),
                P = n(884755),
                L = n(53452),
                w = n(661123),
                G = n(72580),
                k = n(387328),
                H = n(102921),
                Y = n(664625),
                F = n(804185),
                j = n(61209),
                V = n(953727),
                B = n(821229),
                x = n(837067),
                W = n(567403),
                K = n(595970),
                q = n(352980),
                z = n(682776),
                Q = n(840922),
                J = n(715107),
                X = n(9430),
                $ = n(473903),
                ee = n(901654),
                te = n(2590),
                ne = n(897196),
                re = n(3155),
                ie = n(736401),
                oe = n(290679);

            function ue(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function ae(e, t, n, r, i, o, u) {
                try {
                    var a = e[o](u),
                        s = a.value
                } catch (e) {
                    n(e);
                    return
                }
                a.done ? t(s) : Promise.resolve(s).then(r, i)
            }

            function se(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(t, n);

                        function u(e) {
                            ae(o, r, i, u, a, "next", e)
                        }

                        function a(e) {
                            ae(o, r, i, u, a, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }

            function le(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function ce(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(e, r.key, r)
                }
            }

            function de(e) {
                de = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return de(e)
            }

            function fe(e, t) {
                return !t || "object" !== pe(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function _e(e, t) {
                _e = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return _e(e, t)
            }

            function Ee(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, o = [],
                            u = !0,
                            a = !1;
                        try {
                            for (n = n.call(e); !(u = (r = n.next()).done); u = !0) {
                                o.push(r.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            a = !0;
                            i = e
                        } finally {
                            try {
                                u || null == n.return || n.return()
                            } finally {
                                if (a) throw i
                            }
                        }
                        return o
                    }
                }(e, t) || ge(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function he(e) {
                return function(e) {
                    if (Array.isArray(e)) return ue(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || ge(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var pe = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function ge(e, t) {
                if (e) {
                    if ("string" == typeof e) return ue(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    return "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? ue(e, t) : void 0
                }
            }

            function ve(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = de(e);
                    if (t) {
                        var i = de(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return fe(this, n)
                }
            }
            var Ie, Ne = function(e, t) {
                    var n, r, i, o, u = {
                        label: 0,
                        sent: function() {
                            if (1 & i[0]) throw i[1];
                            return i[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return o = {
                        next: a(0),
                        throw: a(1),
                        return: a(2)
                    }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                        return this
                    }), o;

                    function a(o) {
                        return function(a) {
                            return function(o) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; u;) try {
                                    if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r),
                                            0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                    (r = 0, i) && (o = [2 & o[0], i.value]);
                                    switch (o[0]) {
                                        case 0:
                                        case 1:
                                            i = o;
                                            break;
                                        case 4:
                                            u.label++;
                                            return {
                                                value: o[1], done: !1
                                            };
                                        case 5:
                                            u.label++;
                                            r = o[1];
                                            o = [0];
                                            continue;
                                        case 7:
                                            o = u.ops.pop();
                                            u.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = u.trys, i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                                u = 0;
                                                continue
                                            }
                                            if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                                u.label = o[1];
                                                break
                                            }
                                            if (6 === o[0] && u.label < i[1]) {
                                                u.label = i[1];
                                                i = o;
                                                break
                                            }
                                            if (i && u.label < i[2]) {
                                                u.label = i[2];
                                                u.ops.push(o);
                                                break
                                            }
                                            i[2] && u.ops.pop();
                                            u.trys.pop();
                                            continue
                                    }
                                    o = t.call(e, u)
                                } catch (e) {
                                    o = [6, e];
                                    r = 0
                                } finally {
                                    n = i = 0
                                }
                                if (5 & o[0]) throw o[1];
                                return {
                                    value: o[0] ? o[1] : void 0,
                                    done: !0
                                }
                            }([o, a])
                        }
                    }
                },
                Oe = new p.Z("ReadStateStore");
            __OVERLAY__ && (Ie = n(674482).Z);
            var ye = te.S7T.VIEW_CHANNEL | te.S7T.READ_MESSAGE_HISTORY,
                Te = null,
                Ce = null,
                Ae = null,
                Se = !1,
                me = [],
                Me = !1,
                Re = null,
                be = {},
                Ue = new Set,
                De = 2592e6;

            function Ze() {
                return H.Z.fromTimestamp(Date.now() - De)
            }
            var Pe = 0,
                Le = 0,
                we = 0,
                Ge = null;

            function ke() {
                Pe = Date.now() - 6048e5;
                Le = Date.now() - 2 * L.Z.Millis.WEEK;
                we = Date.now() - 2592e5;
                clearTimeout(Ge);
                Ge = setTimeout((function() {
                    d.Z.dispatch({
                        type: "DECAY_READ_STATES"
                    })
                }), 36e5)
            }

            function He(e) {
                if (null == e) return 0;
                var t = Date.parse(e);
                return isNaN(t) ? 0 : t
            }

            function Ye(e, t) {
                var n = j.Z.getChannel(e.channel_id);
                return null != n && (!Q.Z.isBlocked(e.author.id) && (!!(0, T.ZP)({
                    message: e,
                    userId: t.id,
                    suppressEveryone: X.Z.isSuppressEveryoneEnabled(n.guild_id),
                    suppressRoles: X.Z.isSuppressRolesEnabled(n.guild_id)
                }) || !!Fe(n)))
            }

            function Fe(e) {
                return null != e && e.isPrivate() && !X.Z.isGuildOrCategoryOrChannelMuted(e.guild_id, e.id)
            }

            function je() {
                return Ve.apply(this, arguments)
            }

            function Ve() {
                return (Ve = se((function() {
                    var e;
                    return Ne(this, (function(t) {
                        switch (t.label) {
                            case 0:
                                if (0 === me.length) {
                                    Me = !1;
                                    return [2]
                                }
                                Me = !0;
                                e = me.splice(0, 100);
                                return [4, xe((function() {
                                    return s.ZP.post({
                                        url: te.ANM.BULK_ACK,
                                        body: {
                                            read_states: e
                                        },
                                        oldFormErrors: !0
                                    })
                                }))];
                            case 1:
                                t.sent();
                                return [4, (0, l.GR)(1e3)];
                            case 2:
                                t.sent();
                                je();
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }
            var Be;

            function xe(e) {
                return We.apply(this, arguments)
            }

            function We() {
                return (We = se((function(e) {
                    var t, n, r;
                    return Ne(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                t = Y.default.getId();
                                n = 0;
                                i.label = 1;
                            case 1:
                                if (!(n < 3)) return [3, 9];
                                i.label = 2;
                            case 2:
                                i.trys.push([2, 4, , 8]);
                                return [4, e()];
                            case 3:
                                return [2, i.sent()];
                            case 4:
                                r = i.sent();
                                Oe.error("", r);
                                return n + 1 < 3 ? [4, (0, l.GR)(2e3 * (n + 1))] : [3, 7];
                            case 5:
                                i.sent();
                                return [4, k.Z.awaitOnline()];
                            case 6:
                                i.sent();
                                if (t !== Y.default.getId()) return [2, Promise.reject(new Error("User changed."))];
                                i.label = 7;
                            case 7:
                                return [3, 8];
                            case 8:
                                n++;
                                return [3, 1];
                            case 9:
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function Ke(e) {
                if (e.type !== oe.W.CHANNEL) return !1;
                var t = j.Z.getChannel(e.channelId),
                    n = null != t && t.isForumPost();
                if (K.Z.isIdle()) return !1;
                if (!e.canTrackUnreads()) return !1;
                if (!0 !== (null == t ? void 0 : t.isForumLikeChannel())) {
                    var r = be[e.channelId],
                        i = null != r && ee.Z.isFocused(r),
                        o = null != Ie && Ie.isInstanceFocused() && Ie.isPinned(te.Odu.TEXT);
                    if (!i && !o) return !1
                }
                if (n && !e._persisted) return !0;
                if (!e.hasUnreadOrMentions()) return !1;
                if (!0 === (null == t ? void 0 : t.isForumLikeChannel())) return !1;
                if (!(n && !e._isJoinedThread) && !V.Z.isAtBottom(e.channelId)) return !1;
                var u = _.Z.getLayout(e.channelId),
                    a = _.Z.getChatOpen(e.channelId);
                if (!a && (u === te.AEg.NO_CHAT || u === te.AEg.FULL_SCREEN)) return !1;
                if (null == be[e.channelId]) return !1;
                var s = q.Z.getMessages(e.channelId);
                if (null == s || !s.ready || s.loadingMore) return !1;
                0;
                return !0
            }! function(e) {
                e[e.IS_GUILD_CHANNEL = 1] = "IS_GUILD_CHANNEL";
                e[e.IS_THREAD = 2] = "IS_THREAD"
            }(Be || (Be = {}));
            var qe = function() {
                function e(t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : oe.W.CHANNEL;
                    le(this, e);
                    this.type = oe.W.CHANNEL;
                    this.outgoingAckTimer = null;
                    this.ackMessageIdAtChannelSelect = null;
                    this.channelId = t;
                    this.type = n;
                    this._guildId = null;
                    this._isThread = !1;
                    this._isActiveThread = !1;
                    this._isJoinedThread = !1;
                    this._isResourceChannel = !1;
                    this._persisted = !1;
                    this.loadedMessages = !1;
                    this._lastMessageId = null;
                    this._lastMessageTimestamp = 0;
                    this._ackMessageId = null;
                    this._ackMessageTimestamp = 0;
                    this.isManualAck = !1;
                    this.ackPinTimestamp = 0;
                    this.lastPinTimestamp = 0;
                    this._oldestUnreadMessageId = null;
                    this.oldestUnreadMessageIdStale = !1;
                    this.estimated = !1;
                    this._unreadCount = 0;
                    this._mentionCount = 0;
                    this.outgoingAck = null
                }
                var t = e.prototype;
                t.serialize = function(e) {
                    var t = this,
                        n = t.channelId,
                        r = t.type,
                        i = t._guildId,
                        o = t._isThread,
                        u = t._isActiveThread,
                        a = t._isJoinedThread,
                        s = t._persisted,
                        l = t.loadedMessages,
                        c = t._lastMessageId,
                        d = t._lastMessageTimestamp,
                        f = t._ackMessageId,
                        _ = t._ackMessageTimestamp,
                        E = t.ackPinTimestamp,
                        h = t.isManualAck,
                        p = t.lastPinTimestamp,
                        g = t._oldestUnreadMessageId,
                        v = t.oldestUnreadMessageIdStale,
                        I = t.estimated,
                        N = t._mentionCount,
                        O = t.flags,
                        y = t.lastViewed;
                    if (e) return {
                        channelId: n,
                        type: r,
                        _guildId: i,
                        _isThread: o,
                        _isActiveThread: u,
                        _isJoinedThread: a,
                        _persisted: s,
                        loadedMessages: l,
                        _lastMessageId: c,
                        _lastMessageTimestamp: d,
                        _ackMessageId: f,
                        _ackMessageTimestamp: _,
                        ackPinTimestamp: E,
                        isManualAck: h,
                        lastPinTimestamp: p,
                        _oldestUnreadMessageId: g,
                        oldestUnreadMessageIdStale: v,
                        estimated: I,
                        _mentionCount: N,
                        flags: O,
                        lastViewed: y
                    };
                    var T = {
                        channelId: n,
                        type: r,
                        _guildId: i,
                        _persisted: s,
                        _lastMessageId: c,
                        _lastMessageTimestamp: d,
                        _ackMessageId: f,
                        _ackMessageTimestamp: _,
                        ackPinTimestamp: E,
                        lastPinTimestamp: p,
                        _mentionCount: N,
                        flags: O
                    };
                    null != y && y > 0 && (T.lastViewed = y);
                    if (o) {
                        T._isThread = o;
                        T._isActiveThread = u;
                        T._isJoinedThread = a
                    }
                    return T
                };
                t.deserializeForOverlay = function(t) {
                    var n = t.channelId,
                        r = t.type,
                        i = t._guildId,
                        o = t._isThread,
                        u = t._isActiveJoinedThread,
                        a = t._isActiveThread,
                        s = t._isJoinedThread,
                        l = t._persisted,
                        c = t.loadedMessages,
                        d = t._lastMessageId,
                        f = t._lastMessageTimestamp,
                        _ = t._ackMessageId,
                        E = t._ackMessageTimestamp,
                        h = t.ackPinTimestamp,
                        p = t.isManualAck,
                        g = t.lastPinTimestamp,
                        v = t._oldestUnreadMessageId,
                        I = t.oldestUnreadMessageIdStale,
                        N = t.estimated,
                        O = t._unreadCount,
                        y = t._mentionCount,
                        T = t.flags,
                        C = t.lastViewed;
                    this.channelId = n;
                    this.type = null != r ? r : oe.W.CHANNEL;
                    this._guildId = i;
                    this._isThread = null != o && o;
                    if (null != u) {
                        this._isActiveThread = u;
                        this._isJoinedThread = u
                    } else {
                        this._isActiveThread = null != a && a;
                        this._isJoinedThread = null != s && s
                    }
                    this._persisted = !1 !== l;
                    this.loadedMessages = null != c && c;
                    this._lastMessageId = d;
                    this._lastMessageTimestamp = f;
                    this._ackMessageId = _;
                    this._ackMessageTimestamp = E;
                    this.ackPinTimestamp = h;
                    this.isManualAck = null != p && p;
                    this.lastPinTimestamp = g;
                    this._oldestUnreadMessageId = v;
                    this.oldestUnreadMessageIdStale = null != I && I;
                    this.estimated = null != N && N;
                    this._unreadCount = null != O ? O : 0;
                    this._mentionCount = y;
                    this.flags = T;
                    this.lastViewed = C;
                    e._mentionChannels.delete(this.channelId);
                    this._mentionCount > 0 && this.canHaveMentions() && e._mentionChannels.add(this.channelId)
                };
                t.incrementGuildUnreadsSentinel = function() {
                    null != this._guildId && e.getGuildSentinels(this._guildId).unreadsSentinel++
                };
                t.guessAckMessageId = function() {
                    var e = q.Z.getMessages(this.channelId);
                    if (null != this.ackMessageId || !this.isPrivate() || e.hasMoreAfter) return this.ackMessageId;
                    if (!this.hasMentions()) return this.lastMessageId;
                    var t = null,
                        n = this.mentionCount,
                        r = $.default.getCurrentUser();
                    e.forEach((function(e) {
                        if (n > 0 && e.author.id !== (null == r ? void 0 : r.id)) --n;
                        else if (0 === n) {
                            t = e.id;
                            return !1
                        }
                    }), this, !0);
                    return t
                };
                t.isPrivate = function() {
                    if (this.type !== oe.W.CHANNEL) return !1;
                    var e = j.Z.getChannel(this.channelId);
                    return null != e && e.isPrivate()
                };
                t.rebuildChannelState = function(e) {
                    var t, n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        r = arguments.length > 2 ? arguments[2] : void 0,
                        i = this;
                    this.ackMessageId = null !== (t = null != e ? e : this._ackMessageId) && void 0 !== t ? t : this.guessAckMessageId();
                    this.isManualAck = null != e;
                    this.oldestUnreadMessageId = null;
                    this.estimated = !1;
                    this.unreadCount = 0;
                    n && (this.mentionCount = 0);
                    if (this.hasUnread()) {
                        var o, u = $.default.getCurrentUser(),
                            a = this.getAckTimestamp(),
                            s = !1,
                            l = !1,
                            c = null,
                            d = q.Z.getMessages(this.channelId);
                        d.forAll((function(e) {
                            if (s) {
                                var t;
                                i.oldestUnreadMessageId = null !== (t = i._oldestUnreadMessageId) && void 0 !== t ? t : e.id
                            } else s = e.id === i._ackMessageId;
                            if (H.Z.extractTimestamp(e.id) > a) {
                                i.unreadCount++;
                                n && Ye(e, u) && i.mentionCount++;
                                c = null != c ? c : e.id
                            } else l = !0
                        }));
                        this.estimated = !d.hasPresent() || !(s || l) && d.length === this.unreadCount;
                        this.oldestUnreadMessageId = null !== (o = this._oldestUnreadMessageId) && void 0 !== o ? o : c
                    }
                    null != r && (this.mentionCount = r)
                };
                t.handleGuildEventRemoval = function(e, t) {
                    if (!(H.Z.compare(this.ackMessageId, t) >= 0)) {
                        var n = g.ZP.getGuildScheduledEventsForGuild(e),
                            r = this.getAckTimestamp();
                        if (!isNaN(r)) {
                            var i, o = null !== (i = this._ackMessageId) && void 0 !== i ? i : H.Z.fromTimestamp(r),
                                u = null,
                                a = 0;
                            n.forEach((function(e) {
                                if ((0, g.Ld)(e)) {
                                    H.Z.compare(e.id, u) > 0 && (u = e.id);
                                    H.Z.compare(e.id, o) > 0 && a++
                                }
                            }));
                            this.lastMessageId = u;
                            this.mentionCount = a
                        }
                    }
                };
                t.canTrackUnreads = function() {
                    if (this.type !== oe.W.CHANNEL) return !0;
                    if (this._isThread && !this._isActiveThread) return !1;
                    if (this._isResourceChannel) return !1;
                    var e = j.Z.getBasicChannel(this.channelId);
                    return null != e && ("basicPermissions" in e ? P.Z.has(e.basicPermissions, te.S7T.VIEW_CHANNEL) : !E.Z.isChannelGated(this.guildId, this.channelId) || z.Z.can(te.Plq.VIEW_CHANNEL, e))
                };
                t.canBeUnread = function() {
                    if (this._isThread && !this._isJoinedThread) return !1;
                    if ((0, O.h3)(this.channelId, [N.Z, y.Z])) return !1;
                    if (!this._isThread && (0, m.r1)(this._guildId)) {
                        if (this._lastMessageTimestamp < Pe) return !1;
                        if (!X.Z.isChannelOrParentOptedIn(this._guildId, this.channelId) && !this.hasRecentlyVisitedAndRead() && !this.hasMentions()) return !1
                    }
                    return this.canTrackUnreads()
                };
                t.canHaveMentions = function() {
                    return 0 !== this.mentionCount && (!(this._isThread && !this._isJoinedThread) && (!(0, O.h3)(this.channelId, [N.Z, y.Z]) && (!((0, m.r1)(this._guildId) && this._lastMessageTimestamp < Pe) && this.canTrackUnreads())))
                };
                t.getGuildChannelUnreadState = function(e, t, n, r, i, o) {
                    if (M._.getCurrentConfig({
                            location: "971208_1"
                        }, {
                            autoTrackExposure: !0
                        }).clearOldUnreads) {
                        if (this._ackMessageTimestamp < Le) return {
                            mentionCount: 0,
                            hasNotableUnread: !1
                        };
                        if (this._lastMessageTimestamp < Pe) return {
                            mentionCount: 0,
                            hasNotableUnread: !1
                        }
                    }
                    if (t) {
                        if (this._lastMessageTimestamp < Pe) return {
                            mentionCount: 0,
                            hasNotableUnread: !1
                        };
                        if (!X.Z.isChannelRecordOrParentOptedIn(e) && !this.hasRecentlyVisitedAndRead() && this.mentionCount <= 0) return {
                            mentionCount: 0,
                            hasNotableUnread: !1
                        }
                    }
                    if ("basicPermissions" in e) {
                        if (!P.Z.has(e.basicPermissions, te.S7T.VIEW_CHANNEL)) return {
                            mentionCount: 0,
                            hasNotableUnread: !1
                        }
                    } else if (E.Z.isChannelGated(this.guildId, this.channelId) && !z.Z.can(te.Plq.VIEW_CHANNEL, e)) return {
                        mentionCount: 0,
                        hasNotableUnread: !1
                    };
                    if (i || o) return {
                        mentionCount: this.mentionCount,
                        hasNotableUnread: !1
                    };
                    var u = (0, v.LS)({
                            isExperimentEnabled: n,
                            hasUserEnabledGuildUnreads: X.Z.isGuildUnreadSettingEnabled(e.guild_id),
                            channelNotificationOverrides: r[e.id],
                            categoryNotificationOverrides: null == e.parent_id ? null : r[e.parent_id],
                            unreadSetting: X.Z.getChannelUnreadSetting(e.guild_id, e.id),
                            hasJoinedThread: b.Z.hasJoined(e.id)
                        }),
                        a = !1;
                    a = u === ie.N.NULL || u === ie.N.MENTIONS_AND_HIGHLIGHTS ? this.mentionCount > 0 || (0, h.Do)(this.channelId, this._ackMessageId) : this.getAckTimestamp() < this._lastMessageTimestamp;
                    return {
                        mentionCount: this.mentionCount,
                        hasNotableUnread: a
                    }
                };
                t.hasUnread = function() {
                    return this.getAckTimestamp() < this._lastMessageTimestamp
                };
                t.hasNotableUnread = function() {
                    var e = j.Z.getBasicChannel(this.channelId),
                        t = null != e ? (0, v.j$)(e) : ie.N.ALL_MESSAGES;
                    if (t === ie.N.NULL || t === ie.N.MENTIONS_AND_HIGHLIGHTS) return (0, h.HK)(this.channelId, this._ackMessageId).length > 0 || this.hasMentions();
                    if (M._.getCurrentConfig({
                            location: "971208_2"
                        }, {
                            autoTrackExposure: !0
                        }).clearOldUnreads) {
                        if (this._lastMessageTimestamp < Pe) return !1;
                        if (this._ackMessageTimestamp < Le) return !1
                    }
                    return this.getAckTimestamp() < this._lastMessageTimestamp
                };
                t.hasRecentlyVisitedAndRead = function() {
                    return this._lastMessageTimestamp > 0 && null != this._ackMessageId && this.getAckTimestamp() > we && D.Z.getGuildRecentsDismissedAt(this._guildId) < this.getAckTimestamp()
                };
                t.isForumPostUnread = function() {
                    return !!this._isActiveThread && this.hasUnread()
                };
                t.hasMentions = function() {
                    return this.getMentionCount() > 0
                };
                t.getMentionCount = function() {
                    return this.mentionCount
                };
                t.hasUnreadOrMentions = function() {
                    return this.hasMentions() || this.hasUnread()
                };
                t.ackPins = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                        t = this;
                    if (this.type !== oe.W.CHANNEL) return !1;
                    if (!this.canTrackUnreads()) return !1;
                    if (null == e) {
                        if (this.lastPinTimestamp === this.ackPinTimestamp) return !1;
                        this._persisted = !0;
                        xe((function() {
                            return s.ZP.post({
                                url: te.ANM.PINS_ACK(t.channelId),
                                oldFormErrors: !0
                            })
                        }))
                    }
                    var n = He(e);
                    this.ackPinTimestamp = 0 !== n ? n : this.lastPinTimestamp;
                    return !0
                };
                t.ack = function(e) {
                    var t = e.messageId,
                        n = e.local,
                        r = void 0 !== n && n,
                        i = e.immediate,
                        o = void 0 !== i && i,
                        u = e.force,
                        a = void 0 !== u && u,
                        s = e.isExplicitUserAction,
                        l = void 0 !== s && s,
                        c = e.location,
                        d = void 0 === c ? {
                            section: te.jXE.CHANNEL
                        } : c,
                        f = e.trackAnalytics,
                        _ = void 0 === f || f,
                        E = this;
                    if (!this._shouldAck(a, r, l)) return !1;
                    if (!a && !this.canTrackUnreads()) return !1;
                    var h = this.hasMentions();
                    this.estimated = !1;
                    this.unreadCount = 0;
                    this.mentionCount = 0;
                    if (null == t && null == (t = this.lastMessageId)) return !1;
                    this.ackMessageId = t;
                    this.isManualAck = !1;
                    this._persisted = !0;
                    rt(this.channelId);
                    if (r) this.oldestUnreadMessageId = null;
                    else {
                        null == this.outgoingAck && (this.outgoingAckTimer = setTimeout((function() {
                            E.type === oe.W.CHANNEL ? E._ack(d, _) : E._nonChannelAck();
                            E.outgoingAck = null;
                            E.outgoingAckTimer = null
                        }), h || o ? 0 : 3e3));
                        this.outgoingAck = t
                    }
                    return !0
                };
                t.clearOutgoingAck = function() {
                    this.outgoingAck = null;
                    if (null != this.outgoingAckTimer) {
                        clearTimeout(this.outgoingAckTimer);
                        this.outgoingAckTimer = null
                    }
                };
                t._shouldAck = function(e, t, n) {
                    var r;
                    return !!e || (!!n || (!!t || !this.isManualAck && !(this.type === oe.W.CHANNEL && !this.loadedMessages && !(null === (r = j.Z.getChannel(this.channelId)) || void 0 === r ? void 0 : r.isForumLikeChannel()))))
                };
                t._ack = function(e, t) {
                    var n = this,
                        r = this.outgoingAck;
                    if (null != r) {
                        var i = Y.default.getId(),
                            o = Ae;
                        this._persisted = !0;
                        var u = this.recalculateFlags(),
                            a = u === this.flags ? void 0 : u;
                        xe((function() {
                            return s.ZP.post({
                                url: te.ANM.MESSAGE_ACK(n.channelId, r),
                                body: {
                                    token: Ae,
                                    last_viewed: n.lastViewed,
                                    flags: a
                                },
                                oldFormErrors: !0
                            })
                        })).then((function(r) {
                            if (null != r) {
                                Ae === o && i === Y.default.getId() && (Ae = r.body.token);
                                if (t) {
                                    var u = j.Z.getChannel(n.channelId);
                                    (0, f.yw)(te.rMx.ACK_MESSAGES, {
                                        channel_id: n.channelId,
                                        guild_id: null == u ? void 0 : u.getGuildId(),
                                        location: e
                                    })
                                }
                            }
                        }))
                    }
                };
                t.recalculateFlags = function() {
                    if (this.type === oe.W.CHANNEL) {
                        var e = j.Z.getChannel(this.channelId);
                        if (null != e) return e.isThread() ? Be.IS_THREAD : null != e.guild_id ? Be.IS_GUILD_CHANNEL : 0
                    }
                };
                t._nonChannelAck = function() {
                    var e = this,
                        t = e.outgoingAck,
                        n = e.channelId,
                        r = e.type;
                    if (null != t) {
                        var i;
                        switch (r) {
                            case oe.W.GUILD_HOME:
                            case oe.W.GUILD_EVENT:
                            case oe.W.GUILD_ONBOARDING_QUESTION:
                                i = te.ANM.GUILD_FEATURE_ACK(n, t, r);
                                break;
                            case oe.W.NOTIFICATION_CENTER:
                                i = te.ANM.USER_NON_CHANNEL_ACK(t, r);
                                break;
                            default:
                                return
                        }
                        this._persisted = !0;
                        xe((function() {
                            return s.ZP.post({
                                url: i,
                                body: {},
                                oldFormErrors: !0
                            })
                        }))
                    }
                };
                t.delete = function() {
                    var t, n = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                        r = j.Z.getBasicChannel(this.channelId);
                    Oe.log("Deleting ReadState", this.channelId, this.type, {
                        remote: n,
                        persisted: this._persisted,
                        channelMissing: null == r,
                        isOld: tt(this, Ze()),
                        validType: null != r && Z.AW.has(r.type),
                        readableType: null != r && (0, Z.Em)(r.type),
                        oldThreadCutoff: Ze(),
                        mentionCount: this.mentionCount,
                        channelId: this.channelId,
                        ackMessageId: this._ackMessageId,
                        lastMessageId: this._lastMessageId
                    });
                    n && this._persisted && s.ZP.delete({
                        url: te.ANM.CHANNEL_ACK(this.channelId),
                        body: {
                            version: 2,
                            read_state_type: this.type
                        },
                        oldFormErrors: !0
                    });
                    null === (t = e._readStates[this.type]) || void 0 === t || delete t[this.channelId];
                    e._mentionChannels.delete(this.channelId)
                };
                t.shouldDeleteReadState = function(e) {
                    if (0 !== x.Z.totalUnavailableGuilds) return !1;
                    if (null != this.type && this.type !== oe.W.CHANNEL) return ! function(e) {
                        switch (e.type) {
                            case oe.W.GUILD_HOME:
                            case oe.W.GUILD_EVENT:
                            case oe.W.GUILD_ONBOARDING_QUESTION:
                                return null != W.Z.getGuild(e.channelId);
                            case oe.W.NOTIFICATION_CENTER:
                                var t;
                                return (null === (t = $.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) === e.channelId;
                            default:
                                return !0
                        }
                    }(this);
                    var t = j.Z.getBasicChannel(this.channelId);
                    return null == t ? !!tt(this, e) : !!Z.AW.has(t.type) && (!(0, Z.Em)(t.type) || !(0, Z.hv)(t.type) && (!(!Z.Ec.has(t.type) || ! function(e, t, n) {
                        var r = e.guildId;
                        return (null == r || !R.Z.isActive(r, t.parent_id, e.channelId)) && tt(e, n)
                    }(this, t, e)) || this.mentionCount > 0 && !z.Z.canBasicChannel(ye, t)))
                };
                t.getAckTimestamp = function() {
                    if (0 !== this._ackMessageTimestamp) return this._ackMessageTimestamp;
                    if (this._isThread) {
                        this._ackMessageTimestamp = $e(this.guildId, this.channelId);
                        this._ackMessageId = H.Z.fromTimestamp(this._ackMessageTimestamp);
                        return this._ackMessageTimestamp
                    }
                    var e, t;
                    if (this.type === oe.W.GUILD_EVENT || this.type === oe.W.GUILD_ONBOARDING_QUESTION) e = W.Z.getGuild(this.channelId);
                    else if ((0, ne.AB)(this.channelId)) e = W.Z.getGuild(this.guildId);
                    else {
                        var n = j.Z.getChannel(this.channelId);
                        if (null != n) {
                            var r = n.getGuildId();
                            e = W.Z.getGuild(r)
                        }
                    }
                    t = null != e ? et(e) : H.Z.extractTimestamp(this.channelId);
                    this._ackMessageTimestamp = t;
                    return t
                };
                t.syncThreadSettings = function() {
                    this._isThread = !0;
                    var e = j.Z.getChannel(this.channelId);
                    if (null == e) {
                        Oe.warn("syncThreadSettings called with channel not in memory ".concat(this.channelId));
                        return !1
                    }
                    var t = this.guildId,
                        n = null != t && R.Z.isActive(t, e.parent_id, this.channelId),
                        r = b.Z.hasJoined(this.channelId);
                    if (this._isActiveThread === n && this._isJoinedThread === r) return !1;
                    this._isActiveThread = n;
                    this._isJoinedThread = r;
                    return !0
                };
                t.recordLastViewedTime = function() {
                    var e = Math.ceil((Date.now() - H.c) / L.Z.Millis.DAY);
                    if (e !== this.lastViewed) {
                        this.lastViewed = e;
                        this.canTrackUnreads() && !this.hasUnread() && this.ack({
                            force: !0,
                            trackAnalytics: !1
                        })
                    }
                };
                e.forEach = function(t) {
                    var n = !0,
                        r = !1,
                        i = void 0;
                    try {
                        for (var o, u = Object.keys(e._readStates)[Symbol.iterator](); !(n = (o = u.next()).done); n = !0) {
                            var a, s = o.value,
                                l = null !== (a = e._readStates[parseInt(s)]) && void 0 !== a ? a : {},
                                c = !0,
                                d = !1,
                                f = void 0;
                            try {
                                for (var _, E = Object.keys(l)[Symbol.iterator](); !(c = (_ = E.next()).done); c = !0) {
                                    if (!1 === t(l[_.value])) break
                                }
                            } catch (e) {
                                d = !0;
                                f = e
                            } finally {
                                try {
                                    c || null == E.return || E.return()
                                } finally {
                                    if (d) throw f
                                }
                            }
                        }
                    } catch (e) {
                        r = !0;
                        i = e
                    } finally {
                        try {
                            n || null == u.return || u.return()
                        } finally {
                            if (r) throw i
                        }
                    }
                };
                e.get = function(t) {
                    var n, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : oe.W.CHANNEL,
                        i = null === (n = e._readStates[r]) || void 0 === n ? void 0 : n[t];
                    if (null == i) {
                        i = new e(t, r);
                        null == e._readStates[r] && (e._readStates[r] = {});
                        e._readStates[r][t] = i
                    }
                    return i
                };
                e.getGuildSentinels = function(e) {
                    null == this._guildReadStateSentinels[e] && (this._guildReadStateSentinels[e] = {
                        unreadsSentinel: 0
                    });
                    return this._guildReadStateSentinels[e]
                };
                e.resetGuildSentinels = function() {
                    this._guildReadStateSentinels = {}
                };
                e.getIfExists = function(t) {
                    var n, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : oe.W.CHANNEL;
                    return null === (n = e._readStates[r]) || void 0 === n ? void 0 : n[t]
                };
                e.getMentionChannelIds = function() {
                    var t = [],
                        n = !0,
                        r = !1,
                        i = void 0;
                    try {
                        for (var o, u = e._mentionChannels[Symbol.iterator](); !(n = (o = u.next()).done); n = !0) {
                            var a = o.value,
                                s = e.getIfExists(a);
                            null != s && s.canHaveMentions() ? t.push(a) : e._mentionChannels.delete(a)
                        }
                    } catch (e) {
                        r = !0;
                        i = e
                    } finally {
                        try {
                            n || null == u.return || u.return()
                        } finally {
                            if (r) throw i
                        }
                    }
                    return t
                };
                e.getValue = function(t) {
                    var n, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : oe.W.CHANNEL,
                        i = arguments.length > 2 ? arguments[2] : void 0,
                        o = arguments.length > 3 ? arguments[3] : void 0,
                        u = null === (n = e._readStates[r]) || void 0 === n ? void 0 : n[t];
                    return null == u ? o : i(u)
                };
                e.clear = function(t) {
                    var n, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : oe.W.CHANNEL;
                    if (null != (null === (n = e._readStates[r]) || void 0 === n ? void 0 : n[t])) {
                        delete e._readStates[r][t];
                        e._mentionChannels.delete(t);
                        return !0
                    }
                    return !1
                };
                e.clearAll = function() {
                    e._readStates = {};
                    e._mentionChannels.clear()
                };
                ! function(e, t, n) {
                    t && ce(e.prototype, t);
                    n && ce(e, n)
                }(e, [{
                    key: "oldestUnreadMessageId",
                    get: function() {
                        return this._oldestUnreadMessageId
                    },
                    set: function(e) {
                        this._oldestUnreadMessageId = e;
                        this.oldestUnreadMessageIdStale = !1
                    }
                }, {
                    key: "lastMessageId",
                    get: function() {
                        return this._lastMessageId
                    },
                    set: function(e) {
                        this._lastMessageId = e;
                        this._lastMessageTimestamp = null != e ? H.Z.extractTimestamp(e) : 0
                    }
                }, {
                    key: "lastMessageTimestamp",
                    get: function() {
                        return this._lastMessageTimestamp
                    }
                }, {
                    key: "ackMessageId",
                    get: function() {
                        return this._ackMessageId
                    },
                    set: function(e) {
                        this._ackMessageId = e;
                        this._ackMessageTimestamp = null != e ? H.Z.extractTimestamp(e) : 0
                    }
                }, {
                    key: "unreadCount",
                    get: function() {
                        var e;
                        return null !== (e = this._unreadCount) && void 0 !== e ? e : 0
                    },
                    set: function(e) {
                        void 0 !== this._unreadCount && 0 !== this._unreadCount && 0 !== e || this.incrementGuildUnreadsSentinel();
                        this._unreadCount = e
                    }
                }, {
                    key: "mentionCount",
                    get: function() {
                        return this._mentionCount
                    },
                    set: function(t) {
                        0 !== this._mentionCount && 0 !== t || this._mentionCount === t || this.incrementGuildUnreadsSentinel();
                        this._mentionCount = t;
                        e._mentionChannels.delete(this.channelId);
                        this._mentionCount > 0 && this.canHaveMentions() && e._mentionChannels.add(this.channelId)
                    }
                }, {
                    key: "guildId",
                    get: function() {
                        if (null != this._guildId) return this._guildId;
                        var e = j.Z.getChannel(this.channelId);
                        return this._guildId = null != e ? e.getGuildId() : null
                    }
                }, {
                    key: "oldestUnreadTimestamp",
                    get: function() {
                        return null != this.oldestUnreadMessageId ? H.Z.extractTimestamp(this.oldestUnreadMessageId) : 0
                    }
                }]);
                return e
            }();
            qe._guildReadStateSentinels = {};
            qe._readStates = {};
            qe._mentionChannels = new Set;

            function ze(e) {
                e.forEach((function(e) {
                    if ((0, Z.Em)(e.type)) {
                        var t = qe.get(e.id);
                        t._guildId = e.guild_id;
                        t.lastMessageId = e.lastMessageId;
                        t.lastPinTimestamp = He(e.lastPinTimestamp);
                        t._isResourceChannel = e.hasFlag(ne.zZ.IS_GUILD_RESOURCE_CHANNEL);
                        Z.Ec.has(e.type) && t.syncThreadSettings()
                    }
                }))
            }

            function Qe(e) {
                e.forEach((function(e) {
                    if ((0, Z.Em)(e.type)) {
                        var t, n = qe.get(e.id);
                        n.lastMessageId = e.last_message_id;
                        n.lastPinTimestamp = He(e.last_pin_timestamp);
                        n._isResourceChannel = (0, w.yE)(null !== (t = e.flags) && void 0 !== t ? t : 0, ne.zZ.IS_GUILD_RESOURCE_CHANNEL);
                        Z.Ec.has(e.type) && n.syncThreadSettings()
                    }
                }))
            }

            function Je(e) {
                ! function(e) {
                    var t;
                    null === (t = e.threads) || void 0 === t || t.forEach((function(t) {
                        if (Z.AW.has(t.type)) {
                            var n = qe.get(t.id);
                            n.lastMessageId = t.lastMessageId;
                            n.lastPinTimestamp = He(t.lastPinTimestamp);
                            n._isThread = !0;
                            n._isActiveThread = !0;
                            n._isJoinedThread = null != t.member;
                            null == n.ackMessageId && (n.ackMessageId = H.Z.fromTimestamp($e(e.id, t.id)));
                            null == n.ackPinTimestamp && (n.ackPinTimestamp = $e(e.id, t.id))
                        }
                    }))
                }(e);
                ! function(e) {
                    var t;
                    if (0 === (null === (t = e.guild_scheduled_events) || void 0 === t ? void 0 : t.length) && null == qe.getIfExists(e.id, oe.W.GUILD_EVENT)) return;
                    var n = qe.get(e.id, oe.W.GUILD_EVENT);
                    n._guildId = e.id;
                    var r, i = 0,
                        o = null,
                        u = null !== (r = n._ackMessageId) && void 0 !== r ? r : H.Z.fromTimestamp(n.getAckTimestamp());
                    e.guild_scheduled_events.forEach((function(e) {
                        H.Z.compare(e.id, o) > 0 && (o = e.id);
                        H.Z.compare(e.id, u) > 0 && i++
                    }));
                    n.lastMessageId = o;
                    n.mentionCount = i
                }(e);
                ! function(e) {
                    var t = 24;
                    qe.get(e.id, oe.W.GUILD_HOME).lastMessageId = H.Z.fromTimestamp(u()(Date.now()).subtract(t, "h").valueOf())
                }(e);
                ! function(e) {
                    var t = e.properties.latest_onboarding_question_id;
                    if (null == t) return;
                    var n = qe.get(e.id, oe.W.GUILD_ONBOARDING_QUESTION);
                    n._guildId = e.id;
                    n.lastMessageId = t
                }(e)
            }

            function Xe(e) {
                ! function(e) {
                    var t = $.default.getCurrentUser();
                    if (!(0, A.$N)()) return !1;
                    if (null == t) return !1;
                    var n = qe.get(t.id, oe.W.NOTIFICATION_CENTER);
                    e.forEach((function(e) {
                        if (null != e.since && e.type === te.OGo.PENDING_INCOMING) {
                            var t = new Date(e.since).getTime();
                            if ((null != n.ackMessageId ? H.Z.extractTimestamp(n.ackMessageId) : 0) < t) {
                                n.mentionCount++;
                                n.lastMessageId = H.Z.fromTimestamp(t)
                            }
                        }
                    }))
                }(e)
            }

            function $e(e, t) {
                var n, r, i, o = j.Z.getChannel(t),
                    u = W.Z.getGuild(null != e ? e : null == o ? void 0 : o.guild_id),
                    a = (null == o ? void 0 : o.isForumPost()) ? 0 : et(u),
                    s = (null !== (i = null === (n = b.Z.joinTimestamp(t)) || void 0 === n ? void 0 : n.getTime()) && void 0 !== i ? i : 0) - 5e3,
                    l = null == o || null === (r = o.threadMetadata) || void 0 === r ? void 0 : r.archiveTimestamp,
                    c = null != l ? new Date(l).getTime() - 1 : 0,
                    d = Math.max(s, c);
                d <= 0 && (d = H.Z.extractTimestamp(t) - 1);
                return isNaN(a) ? d : Math.max(a, d)
            }

            function et(e) {
                if (null != e && null != e.joinedAt) {
                    if (e.joinedAt instanceof Date) return e.joinedAt.getTime();
                    if ("string" == typeof e.joinedAt) return new Date(e.joinedAt).getTime();
                    if ("number" == typeof e.joinedAt && !isNaN(e.joinedAt)) return e.joinedAt
                }
                return Date.now()
            }

            function tt(e, t) {
                return e.mentionCount > 0 || !(H.Z.compare(e.channelId, t) > 0) && (!(null != e._ackMessageId && H.Z.compare(e._ackMessageId, t) > 0) && !(null != e._lastMessageId && H.Z.compare(e._lastMessageId, t) > 0))
            }

            function nt(e) {
                if (null != e) {
                    var t = qe.get(e);
                    if (Ke(t)) return t.ack({})
                }
                return !1
            }

            function rt(e) {
                if (null != e) {
                    var t = qe.get(e);
                    if (t.type === oe.W.CHANNEL) {
                        var n = j.Z.getChannel(t.channelId);
                        if (null != n && n.isForumPost() && null != n.parent_id) {
                            var r = n.parent_id,
                                i = qe.get(r);
                            R.Z.hasLoaded(n.guild_id) && Object.keys(R.Z.getThreadsForParent(n.guild_id, r)).every((function(e) {
                                return vt.hasOpenedThread(e) || H.Z.compare(e, i.ackMessageId) < 0
                            })) && i.ack({})
                        }
                    }
                }
            }

            function it() {
                null != Re && clearTimeout(Re)
            }

            function ot(e) {
                if (null != e.channelUpdates) {
                    var t;
                    ze(null === (t = e.channelUpdates) || void 0 === t ? void 0 : t.writes)
                }
                if (null != e.channelTimestampUpdates) {
                    var n = !0,
                        r = !1,
                        i = void 0;
                    try {
                        for (var o, u = e.channelTimestampUpdates[Symbol.iterator](); !(n = (o = u.next()).done); n = !0) {
                            var a = o.value,
                                s = qe.get(a.id);
                            null != a.last_message_id && (s.lastMessageId = a.last_message_id);
                            null != a.last_pin_timestamp && (s.lastPinTimestamp = He(a.last_pin_timestamp))
                        }
                    } catch (e) {
                        r = !0;
                        i = e
                    } finally {
                        try {
                            n || null == u.return || u.return()
                        } finally {
                            if (r) throw i
                        }
                    }
                }
            }

            function ut(e) {
                var t = e.channelId;
                qe.get(t).rebuildChannelState()
            }

            function at(e) {
                Qe(e.threads)
            }

            function st(e) {
                var t = $.default.getCurrentUser();
                return null != e.creator_id && null != t && e.creator_id === t.id
            }

            function lt(e) {
                var t = e.channel;
                return qe.clear(t.id)
            }

            function ct() {
                var e = F.ZP.getCurrentSidebarChannelId(Te),
                    t = !1;
                if (Ce !== e) {
                    t = ft(Ce);
                    Ce = e
                } else t = nt(e) || t;
                return t
            }

            function dt(e) {
                if (null != e) {
                    qe.get(e).isManualAck = !1
                }
            }

            function ft(e) {
                if (null == e) return !1;
                var t = qe.get(e);
                if (!t.hasUnread()) {
                    t.oldestUnreadMessageId = null;
                    return !0
                }
                return !1
            }

            function _t(e, t) {
                if (null == e) return !1;
                var n = qe.get(e);
                t || n.hasUnread() || (n.oldestUnreadMessageIdStale = !0);
                return nt(e)
            }

            function Et(e) {
                var t = e.channelId,
                    n = e.messageId,
                    r = e.manual,
                    i = e.newMentionCount,
                    o = qe.get(t);
                if (r) {
                    o.rebuildChannelState(n, !0, i);
                    return !0
                }
                return n !== o._ackMessageId && o.ack({
                    messageId: n,
                    local: !0
                })
            }

            function ht(e) {
                return pt(e.id, e.ackType, e.ackedId, e.local)
            }

            function pt(e, t, n, r) {
                var i, o = qe.get(e, t);
                if (n === o.ackMessageId || o.lastMessageId === o.ackMessageId) return !1;
                if (null == o.lastMessageId && 0 === o.mentionCount) return !1;
                n = null !== (i = null != n ? n : o.lastMessageId) && void 0 !== i ? i : H.Z.fromTimestamp(o.getAckTimestamp());
                return o.ack({
                    messageId: n,
                    local: null == r || r
                })
            }
            var gt = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && _e(e, t)
                }(n, e);
                var t = ve(n);

                function n() {
                    le(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    this.waitFor(V.Z, $.default, W.Z, x.Z, j.Z, J.Z, q.Z, z.Z, _.Z, R.Z, b.Z, F.ZP, g.ZP, B.Z, E.Z, X.Z, ee.Z, C.Z, N.Z, D.Z, y.Z);
                    this.syncWith([F.ZP], ct)
                };
                r.getReadStatesByChannel = function() {
                    var e;
                    return null !== (e = qe._readStates[oe.W.CHANNEL]) && void 0 !== e ? e : {}
                };
                r.getForDebugging = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : oe.W.CHANNEL;
                    return qe.getIfExists(e, t)
                };
                r.getNotifCenterReadState = function(e) {
                    return qe._readStates[oe.W.NOTIFICATION_CENTER][e]
                };
                r.hasUnread = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : oe.W.CHANNEL;
                    return qe.getValue(e, t, (function(e) {
                        return e.canBeUnread() && e.hasUnread()
                    }), !1)
                };
                r.hasNotableUnread = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : oe.W.CHANNEL;
                    return qe.getValue(e, t, (function(e) {
                        return e.canBeUnread() && e.hasNotableUnread()
                    }), !1)
                };
                r.hasTrackedUnread = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : oe.W.CHANNEL;
                    return qe.getValue(e, t, (function(e) {
                        return e.canTrackUnreads() && e.hasUnread()
                    }), !1)
                };
                r.isForumPostUnread = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : oe.W.CHANNEL;
                    return qe.getValue(e, t, (function(e) {
                        return e.isForumPostUnread()
                    }), !1)
                };
                r.hasRelevantUnread = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : oe.W.CHANNEL;
                    return this.hasNotableUnread(e.id, t) && X.Z.isChannelRelevant(e)
                };
                r.getUnreadCount = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : oe.W.CHANNEL;
                    return qe.getValue(e, t, (function(e) {
                        return e.canBeUnread() ? e.unreadCount : 0
                    }), 0)
                };
                r.getMentionCount = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : oe.W.CHANNEL;
                    return qe.getValue(e, t, (function(e) {
                        return e.canHaveMentions() ? e.getMentionCount() : 0
                    }), 0)
                };
                r.getGuildChannelUnreadState = function(e, t, n, r, i, o) {
                    return qe.getValue(e.id, oe.W.CHANNEL, (function(u) {
                        return u.getGuildChannelUnreadState(e, t, n, r, i, o)
                    }), {
                        mentionCount: 0,
                        hasNotableUnread: !1
                    })
                };
                r.hasRecentlyVisitedAndRead = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : oe.W.CHANNEL;
                    return qe.getValue(e, t, (function(e) {
                        return e.hasRecentlyVisitedAndRead()
                    }), !1)
                };
                r.ackMessageId = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : oe.W.CHANNEL;
                    return qe.getValue(e, t, (function(e) {
                        return e.canBeUnread() ? e.ackMessageId : null
                    }), null)
                };
                r.getTrackedAckMessageId = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : oe.W.CHANNEL;
                    return qe.getValue(e, t, (function(e) {
                        return e.canTrackUnreads() ? e._ackMessageId : null
                    }), null)
                };
                r.lastMessageId = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : oe.W.CHANNEL;
                    return qe.getValue(e, t, (function(e) {
                        return e.lastMessageId
                    }), null)
                };
                r.lastMessageTimestamp = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : oe.W.CHANNEL;
                    return qe.getValue(e, t, (function(e) {
                        return e.lastMessageTimestamp
                    }), 0)
                };
                r.lastPinTimestamp = function(e) {
                    return qe.getValue(e, oe.W.CHANNEL, (function(e) {
                        return e.lastPinTimestamp
                    }), null)
                };
                r.getOldestUnreadMessageId = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : oe.W.CHANNEL;
                    return qe.getValue(e, t, (function(e) {
                        return e.canTrackUnreads() ? e.oldestUnreadMessageId : null
                    }), null)
                };
                r.getOldestUnreadTimestamp = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : oe.W.CHANNEL;
                    return qe.getValue(e, t, (function(e) {
                        return e.canTrackUnreads() ? e.oldestUnreadTimestamp : 0
                    }), 0)
                };
                r.isEstimated = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : oe.W.CHANNEL;
                    return qe.getValue(e, t, (function(e) {
                        return e.estimated
                    }), !1)
                };
                r.hasOpenedThread = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : oe.W.CHANNEL;
                    return qe.getValue(e, t, (function(e) {
                        return e._persisted
                    }), !1)
                };
                r.hasUnreadPins = function(e) {
                    return qe.getValue(e, oe.W.CHANNEL, (function(e) {
                        return e.canBeUnread() && e.lastPinTimestamp > e.ackPinTimestamp
                    }), !1)
                };
                r.isNewForumThread = function(e, t, n) {
                    var r = qe.get(t);
                    if (!0 === qe.get(e)._persisted || null == r.ackMessageIdAtChannelSelect || H.Z.compare(e, r.ackMessageIdAtChannelSelect) <= 0) return !1;
                    var i = et(n);
                    return H.Z.extractTimestamp(e) > i
                };
                r.getAllReadStates = function(e) {
                    var t = [];
                    qe.forEach((function(n) {
                        switch (n.type) {
                            case oe.W.GUILD_HOME:
                            case oe.W.GUILD_EVENT:
                            case oe.W.GUILD_ONBOARDING_QUESTION:
                                null != W.Z.getGuild(n.channelId) && t.push(n.serialize(e));
                                break;
                            case oe.W.NOTIFICATION_CENTER:
                                var r;
                                (null === (r = $.default.getCurrentUser()) || void 0 === r ? void 0 : r.id) === n.channelId && t.push(n.serialize(e));
                                break;
                            default:
                                t.push(n.serialize(e))
                        }
                    }));
                    return t
                };
                r.getGuildUnreadsSentinel = function(e) {
                    return qe.getGuildSentinels(e).unreadsSentinel
                };
                r.getMentionChannelIds = function() {
                    return qe.getMentionChannelIds()
                };
                r.__getLocalVars = function() {
                    return {
                        logger: Oe,
                        READ_STATE_PROTOCOL_VERSION: 2,
                        OverlayStore: Ie,
                        CAN_READ_HISTORY_PERMISSIONS: ye,
                        BULK_ACK_CHUNK_SIZE: 100,
                        BULK_ACK_REQ_PER_SEC: 1,
                        currentChannelId: Te,
                        currentSidebarChannelId: Ce,
                        ackToken: Ae,
                        hasCache: Se,
                        bulkAckQueue: me,
                        processingBulkAcks: Me,
                        deleteOldReadStatesTimer: Re,
                        autoAckableChannelWindowIds: be,
                        mobileAutoAckDisabledChannelIds: Ue,
                        OLD_THREAD_CUTOFF_MS: De,
                        decayedReadStateCutoff: Pe,
                        decayedReadStateBasedOnVisitCutoff: Le,
                        channelVisitAndReadCutoff: we,
                        decayedReadStateTimer: Ge,
                        MAX_RETRIES: 3,
                        ReadStateFlags: Be,
                        instance: vt
                    }
                };
                return n
            }(a.ZP.Store);
            gt.displayName = "ReadStateStore";
            var vt = new gt(d.Z, {
                CONNECTION_OPEN: function(e) {
                    var t, n = e.guilds,
                        r = e.relationships,
                        i = e.initialPrivateChannels,
                        o = e.readState;
                    ke();
                    Ae = null;
                    Se || o.partial || qe.clearAll();
                    Se = !1;
                    o.entries.forEach((function(e) {
                        var t, n = null !== (t = e.read_state_type) && void 0 !== t ? t : oe.W.CHANNEL;
                        n !== oe.W.CHANNEL && (e = function(e) {
                            return {
                                id: e.id,
                                read_state_type: e.read_state_type,
                                mention_count: e.badge_count,
                                last_message_id: e.last_acked_id
                            }
                        }(e));
                        var r, i = qe.get(e.id, n);
                        i._persisted = !0;
                        i._mentionCount = null !== (r = e.mention_count) && void 0 !== r ? r : 0;
                        i.flags = e.flags;
                        i.lastViewed = e.last_viewed;
                        var o = j.Z.getBasicChannel(e.id);
                        null == o || !(0, Z.Q5)(o.type) || null != e.last_message_id && 0 !== e.last_message_id ? i.ackMessageId = e.last_message_id : i.ackMessageId = H.Z.fromTimestamp($e(o.guild_id, o.id));
                        i.ackPinTimestamp = He(e.last_pin_timestamp);
                        qe._mentionChannels.delete(i.channelId);
                        i._mentionCount > 0 && i.canHaveMentions() && qe._mentionChannels.add(i.channelId)
                    }));
                    qe.resetGuildSentinels();
                    var u = null === (t = $.default.getCurrentUser()) || void 0 === t ? void 0 : t.id;
                    if (null != u) {
                        qe.get(u, oe.W.NOTIFICATION_CENTER).lastMessageId = H.Z.fromTimestamp(Date.now())
                    }
                    Xe(r);
                    ze(i);
                    var a = !0,
                        s = !1,
                        l = void 0;
                    try {
                        for (var c, d = n[Symbol.iterator](); !(a = (c = d.next()).done); a = !0) {
                            var f, _ = c.value;
                            ze(null !== (f = _.channels) && void 0 !== f ? f : []);
                            ot(_);
                            Je(_)
                        }
                    } catch (e) {
                        s = !0;
                        l = e
                    } finally {
                        try {
                            a || null == d.return || d.return()
                        } finally {
                            if (s) throw l
                        }
                    }
                    it();
                    Re = setTimeout((function() {
                        return function(e) {
                            var t = Ze(),
                                n = !0,
                                r = !1,
                                i = void 0;
                            try {
                                for (var o, u = e[Symbol.iterator](); !(n = (o = u.next()).done); n = !0) {
                                    var a, s = o.value,
                                        l = null !== (a = s.read_state_type) && void 0 !== a ? a : oe.W.CHANNEL,
                                        c = qe.get(s.id, l);
                                    c.shouldDeleteReadState(t) && c.delete()
                                }
                            } catch (e) {
                                r = !0;
                                i = e
                            } finally {
                                try {
                                    n || null == u.return || u.return()
                                } finally {
                                    if (r) throw i
                                }
                            }
                        }(o.entries)
                    }), 1e4)
                },
                CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
                    ze(e.lazyPrivateChannels)
                },
                LOGOUT: it,
                OVERLAY_INITIALIZE: function(e) {
                    var t = e.readStates,
                        n = e.selectedChannelId;
                    ke();
                    Ae = null;
                    Te = n;
                    Ce = F.ZP.getCurrentSidebarChannelId(Te);
                    qe.clearAll();
                    t.forEach((function(e) {
                        var t = qe.get(e.channelId);
                        t.deserializeForOverlay(e);
                        t.type === oe.W.CHANNEL && t.rebuildChannelState()
                    }))
                },
                CACHE_LOADED: function(e) {
                    var t = e.readStates;
                    Se = !0;
                    ke();
                    t.forEach((function(e) {
                        var t, n = null !== (t = e.type) && void 0 !== t ? t : oe.W.CHANNEL;
                        e.type = n;
                        null == qe._readStates[n] && (qe._readStates[n] = {});
                        qe._readStates[n][e.channelId] = (0, c.gh)(e, qe)
                    }))
                },
                GUILD_CREATE: function(e) {
                    var t, n = e.guild,
                        r = Ze();
                    qe.forEach((function(e) {
                        e.guildId === n.id && e.shouldDeleteReadState(r) && e.delete(!1)
                    }));
                    ze(null !== (t = n.channels) && void 0 !== t ? t : []);
                    ot(n);
                    Je(n)
                },
                LOAD_MESSAGES_SUCCESS: function(e) {
                    var t = e.channelId,
                        n = e.isAfter,
                        r = e.messages,
                        i = qe.get(t);
                    i.loadedMessages = !0;
                    var o = q.Z.getMessages(t);
                    if (null != o)
                        if (r.length > 0 && 1 === H.Z.compare(r[0].id, i.ackMessageId) && 0 === i.unreadCount) i.rebuildChannelState();
                        else if (o.hasPresent() || o.jumpTargetId === i.ackMessageId) i.rebuildChannelState();
                    else if (n && null != i.ackMessageId && o.has(i.ackMessageId, !0)) {
                        i.unreadCount += r.length;
                        null == i.oldestUnreadMessageId && i.rebuildChannelState()
                    }
                    Qe(r.map((function(e) {
                        return e.thread
                    })).filter(G.lm))
                },
                MESSAGE_CREATE: function(e) {
                    var t = e.channelId,
                        n = e.message,
                        r = e.isPushNotification,
                        i = qe.get(t);
                    i.lastMessageId = n.id;
                    var o, u, a = $.default.getCurrentUser(),
                        s = j.Z.getBasicChannel(t);
                    if (null != n.author && null != a && n.author.id === a.id) {
                        null != i.outgoingAck && i.clearOutgoingAck();
                        return Et({
                            channelId: t,
                            messageId: n.id,
                            manual: !1
                        })
                    }
                    var l = (0, I.PP)();
                    if (!0 === (null == l ? void 0 : l.isReady())) {
                        var c = l.getCurrentRoute();
                        _.Z.getChatOpen(i.channelId) ? o = i.channelId : "channel" === (null == c ? void 0 : c.name) && (o = c.params.channelId)
                    } else if (null == l) {
                        o = J.Z.getChannelId();
                        u = F.ZP.getCurrentSidebarChannelId(o)
                    }
                    var d = o === t || u === t;
                    if (d && Ke(i) && !r) return i.ack({
                        messageId: n.id
                    });
                    if (null != Ie && Ie.isInstanceFocused() && d && Ie.isInstanceUILocked() && Ie.isPinned(te.Odu.TEXT)) return i.ack({
                        messageId: n.id
                    });
                    (null == i.oldestUnreadMessageId || i.oldestUnreadMessageIdStale) && (i.oldestUnreadMessageId = n.id);
                    i.unreadCount++;
                    if (!(null != n.author && Q.Z.isBlocked(n.author.id) || n.type === te.uaV.RECIPIENT_REMOVE && (null == s ? void 0 : s.type) === te.d4z.GROUP_DM) && (null != a && (0, T.Hl)({
                            rawMessage: n,
                            userId: a.id,
                            suppressEveryone: X.Z.isSuppressEveryoneEnabled(i.guildId),
                            suppressRoles: X.Z.isSuppressRolesEnabled(i.guildId)
                        }) || Fe(j.Z.getChannel(t)))) {
                        i.mentionCount++;
                        if ((0, S.bY)() && null != a) {
                            qe.get(a.id, oe.W.NOTIFICATION_CENTER).lastMessageId = n.id;
                            C.Z.tabFocused && pt(a.id, oe.W.NOTIFICATION_CENTER, void 0, !1)
                        }
                    }
                },
                MESSAGE_DELETE: ut,
                MESSAGE_DELETE_BULK: ut,
                MESSAGE_ACK: Et,
                CHANNEL_ACK: function(e) {
                    var t = e.channelId,
                        n = e.messageId,
                        r = void 0 === n ? void 0 : n,
                        i = e.immediate,
                        o = void 0 !== i && i,
                        u = e.force,
                        a = void 0 !== u && u,
                        s = e.context,
                        l = e.location,
                        c = qe.get(t),
                        d = c.ack({
                            messageId: r,
                            local: s !== te.e3s,
                            immediate: o,
                            force: a,
                            isExplicitUserAction: !0,
                            location: l
                        });
                    if (null != r) {
                        c.rebuildChannelState();
                        return !0
                    }
                    return d
                },
                CHANNEL_LOCAL_ACK: function(e) {
                    var t = e.channelId;
                    return qe.get(t).ack({
                        messageId: void 0,
                        local: !0,
                        immediate: void 0,
                        force: void 0,
                        isExplicitUserAction: !0
                    })
                },
                CHANNEL_PINS_ACK: function(e) {
                    var t = e.channelId,
                        n = e.timestamp;
                    return qe.get(t).ackPins(n)
                },
                CHANNEL_PINS_UPDATE: function(e) {
                    var t = e.channelId,
                        n = e.lastPinTimestamp,
                        r = qe.get(t),
                        i = He(n);
                    if (r.lastPinTimestamp === i) return !1;
                    r.lastPinTimestamp = i;
                    return !0
                },
                CHANNEL_SELECT: function(e) {
                    var t = e.channelId,
                        n = F.ZP.getCurrentSidebarChannelId(t),
                        r = j.Z.getChannel(t);
                    if (null != r) {
                        var i, o = qe.get(r.id);
                        o.ackMessageIdAtChannelSelect = null !== (i = o.ackMessageId) && void 0 !== i ? i : H.Z.fromTimestamp(o.getAckTimestamp());
                        o.recordLastViewedTime()
                    }
                    dt(Te);
                    dt(Ce);
                    var u = !1;
                    if (Te !== t) {
                        u = ft(Te) || u;
                        u = ft(Ce) || u
                    }(Te === t || null != (null == r ? void 0 : r.type) && te.TPd.GUILD_THREADS_ONLY.has(r.type)) && (u = nt(t) || u);
                    Te === t && (u = nt(n) || u);
                    Te = t;
                    Ce = n;
                    return u
                },
                VOICE_CHANNEL_SELECT: function(e) {
                    var t = e.channelId;
                    if (null != t) {
                        var n = qe.get(t);
                        if (!n.hasMentions()) {
                            n.oldestUnreadMessageId = null;
                            return n.ack({
                                isExplicitUserAction: !0
                            })
                        }
                    }
                },
                CHANNEL_CREATE: function(e) {
                    var t = e.channel;
                    if (!(0, Z.Em)(t.type)) return !1;
                    var n = qe.get(t.id);
                    n.lastMessageId = t.lastMessageId;
                    n.lastPinTimestamp = He(t.lastPinTimestamp)
                },
                THREAD_CREATE: function(e) {
                    var t = e.channel;
                    ! function(e) {
                        if (!Z.AW.has(e.type)) return !1;
                        var t = qe.get(e.id);
                        t.lastMessageId = e.lastMessageId;
                        t.lastPinTimestamp = He(e.lastPinTimestamp);
                        t.syncThreadSettings();
                        e.ownerId === Y.default.getId() && (t.loadedMessages = !0)
                    }(t);
                    ! function(e) {
                        var t = e.parent_id;
                        qe.get(t).lastMessageId = e.id;
                        var n = $.default.getCurrentUser();
                        if (e.ownerId === (null == n ? void 0 : n.id)) {
                            qe.get(e.id)._persisted = !0;
                            Et({
                                channelId: t,
                                messageId: e.id,
                                manual: !1
                            })
                        }
                    }(t)
                },
                THREAD_UPDATE: function(e) {
                    var t = e.channel;
                    return !!Z.AW.has(t.type) && qe.get(t.id).syncThreadSettings()
                },
                THREAD_LIST_SYNC: function(e) {
                    e.threads.forEach((function(e) {
                        if (Z.AW.has(e.type)) {
                            var t = qe.get(e.id);
                            t.lastMessageId = e.lastMessageId;
                            t.lastPinTimestamp = He(e.lastPinTimestamp);
                            t._isThread = !0;
                            t._isActiveThread = !0;
                            t._isJoinedThread = b.Z.hasJoined(e.id);
                            if (e.isForumPost()) {
                                var n = qe.get(e.parent_id);
                                H.Z.compare(n.lastMessageId, e.id) < 0 && (n.lastMessageId = e.id)
                            }
                        }
                    }))
                },
                LOAD_THREADS_SUCCESS: at,
                LOAD_ARCHIVED_THREADS_SUCCESS: at,
                SEARCH_FINISH: function(e) {
                    var t = e.messages,
                        n = e.threads,
                        r = !0,
                        i = !1,
                        o = void 0;
                    try {
                        for (var u, a = t[Symbol.iterator](); !(r = (u = a.next()).done); r = !0) {
                            Qe(u.value.map((function(e) {
                                return e.thread
                            })).filter(G.lm))
                        }
                    } catch (e) {
                        i = !0;
                        o = e
                    } finally {
                        try {
                            r || null == a.return || a.return()
                        } finally {
                            if (i) throw o
                        }
                    }
                    Qe(n)
                },
                THREAD_MEMBER_UPDATE: function(e) {
                    var t = e.id;
                    return qe.get(t).syncThreadSettings()
                },
                THREAD_MEMBERS_UPDATE: function(e) {
                    return (0,
                        U.s)(e) && qe.get(e.id).syncThreadSettings()
                },
                CHANNEL_DELETE: lt,
                THREAD_DELETE: lt,
                WINDOW_FOCUS: function(e) {
                    var t = !1,
                        n = !0,
                        r = !1,
                        i = void 0;
                    try {
                        for (var o, u = Object.entries(be)[Symbol.iterator](); !(n = (o = u.next()).done); n = !0) {
                            var a = Ee(o.value, 2),
                                s = a[0];
                            a[1] === e.windowId && (t = _t(s, e.focused) || t)
                        }
                    } catch (e) {
                        r = !0;
                        i = e
                    } finally {
                        try {
                            n || null == u.return || u.return()
                        } finally {
                            if (r) throw i
                        }
                    }
                    return t
                },
                UPDATE_CHANNEL_DIMENSIONS: function(e) {
                    return nt(e.channelId)
                },
                CURRENT_USER_UPDATE: function() {
                    Ae = null
                },
                DRAWER_OPEN: function() {
                    if (null != Te) {
                        var e = qe.get(Te);
                        e.hasUnread() || (e.oldestUnreadMessageIdStale = !0)
                    }
                    return !1
                },
                DRAWER_CLOSE: function() {
                    return nt(Te)
                },
                BULK_ACK: function(e) {
                    var t = e.channels,
                        n = e.context;
                    ! function(e, t) {
                        var n;
                        e.forEach((function(e) {
                            var t = e.channelId,
                                n = e.messageId,
                                r = e.readStateType;
                            qe.get(t, r).ack({
                                messageId: n,
                                local: !0,
                                immediate: void 0,
                                force: void 0,
                                isExplicitUserAction: !0
                            })
                        }));
                        if (t === te.e3s) {
                            (n = me).push.apply(n, he(e.map((function(e) {
                                return {
                                    channel_id: e.channelId,
                                    message_id: e.messageId,
                                    read_state_type: e.readStateType
                                }
                            }))));
                            Me || je()
                        }
                    }(t.filter((function(e) {
                        return null != e.messageId && vt.hasUnread(e.channelId, e.readStateType)
                    })), n)
                },
                ENABLE_AUTOMATIC_ACK: function(e) {
                    var t = e.channelId,
                        n = e.windowId;
                    0;
                    if (be[t] === n) return !1;
                    i()(void 0 === be[t], "handleEnableAutomaticAck: channel already visible in another window");
                    be[t] = n;
                    return nt(t)
                },
                DISABLE_AUTOMATIC_ACK: function(e) {
                    var t = e.channelId;
                    0;
                    be[t] = void 0;
                    return !1
                },
                GUILD_FEATURE_ACK: ht,
                GUILD_SCHEDULED_EVENT_CREATE: function(e) {
                    var t = e.guildScheduledEvent,
                        n = t.guild_id,
                        r = qe.get(t.guild_id, oe.W.GUILD_EVENT);
                    r.lastMessageId = t.id;
                    st(t) ? ht({
                        type: "GUILD_FEATURE_ACK",
                        id: n,
                        ackType: oe.W.GUILD_EVENT,
                        ackedId: t.id,
                        local: !1
                    }) : X.Z.isMuteScheduledEventsEnabled(n) || r.mentionCount++
                },
                GUILD_SCHEDULED_EVENT_UPDATE: function(e) {
                    var t = e.guildScheduledEvent,
                        n = t.guild_id;
                    if (st(t)) return !1;
                    if (![re.p1.CANCELED, re.p1.COMPLETED].includes(t.status)) return !1;
                    qe.get(n, oe.W.GUILD_EVENT).handleGuildEventRemoval(n, t.id)
                },
                GUILD_SCHEDULED_EVENT_DELETE: function(e) {
                    var t = e.guildScheduledEvent,
                        n = t.guild_id;
                    if (st(t)) return !1;
                    qe.get(t.guild_id, oe.W.GUILD_EVENT).handleGuildEventRemoval(n, t.id)
                },
                GUILD_DELETE: function(e) {
                    var t = e.guild;
                    return qe.clear(t.id, oe.W.GUILD_EVENT)
                },
                GUILD_UPDATE: function(e) {
                    var t = e.guild,
                        n = t.latest_onboarding_question_id;
                    if (null != n) {
                        var r = qe.get(t.id, oe.W.GUILD_ONBOARDING_QUESTION);
                        r._guildId = t.id;
                        r.lastMessageId = n
                    }
                },
                RESORT_THREADS: function(e) {
                    return nt(e.channelId)
                },
                CHANNEL_RTC_UPDATE_CHAT_OPEN: function(e) {
                    e.channelId, e.chatOpen;
                    0
                },
                DECAY_READ_STATES: ke,
                NOTIFICATION_CENTER_ITEM_CREATE: function(e) {
                    var t, n = e.item;
                    if (!(0, A.$N)()) return !1;
                    var r = null === (t = $.default.getCurrentUser()) || void 0 === t ? void 0 : t.id;
                    if (null == r) return !1;
                    var i = qe.get(r, oe.W.NOTIFICATION_CENTER);
                    i.lastMessageId = n.id;
                    var o = (0, S.bY)();
                    !o && C.Z.active || o && C.Z.tabFocused ? pt(r, oe.W.NOTIFICATION_CENTER, n.id, !1) : i.mentionCount++
                },
                RELATIONSHIP_ADD: function(e) {
                    var t = $.default.getCurrentUser();
                    if (!(0, A.$N)()) return !1;
                    if (null == t) return !1;
                    if (null == e.relationship.since) return !1;
                    if (e.relationship.type !== te.OGo.PENDING_INCOMING && e.relationship.type !== te.OGo.FRIEND) return !1;
                    var n = qe.get(t.id, oe.W.NOTIFICATION_CENTER),
                        r = e.relationship.type === te.OGo.FRIEND,
                        i = r ? new Date(Date.now()).getTime() : new Date(e.relationship.since).getTime(),
                        o = null != n.ackMessageId ? H.Z.extractTimestamp(n.ackMessageId) : 0,
                        u = (0, S.bY)();
                    if (o < i) {
                        n.lastMessageId = H.Z.fromTimestamp(i);
                        !u && C.Z.active || u && C.Z.tabFocused ? pt(t.id, oe.W.NOTIFICATION_CENTER, void 0, !1) : r ? n.mentionCount-- : n.mentionCount++
                    }
                },
                RELATIONSHIP_REMOVE: function(e) {
                    var t = $.default.getCurrentUser();
                    if (!(0, A.$N)()) return !1;
                    if (null == t) return !1;
                    if (null == e.relationship.since) return !1;
                    if (e.relationship.type !== te.OGo.PENDING_INCOMING) return !1;
                    var n = qe.get(t.id, oe.W.NOTIFICATION_CENTER),
                        r = new Date(e.relationship.since).getTime();
                    (null != n.ackMessageId ? H.Z.extractTimestamp(n.ackMessageId) : 0) <= r && (n.mentionCount = Math.max(0, n.mentionCount - 1))
                },
                NOTIFICATION_CENTER_ITEMS_ACK: function(e) {
                    var t, n = e.ids;
                    if (e.optimistic || !(0, A.$N)() || C.Z.active) return !1;
                    var r = null === (t = $.default.getCurrentUser()) || void 0 === t ? void 0 : t.id;
                    if (null == r) return !1;
                    var i = qe.get(r, oe.W.NOTIFICATION_CENTER);
                    n.forEach((function(e) {
                        H.Z.compare(i.ackMessageId, e) < 0 && (i.mentionCount = Math.max(i.mentionCount - 1, 0))
                    }))
                },
                USER_NON_CHANNEL_ACK: function(e) {
                    var t, n = e.ackType,
                        r = e.ackedId,
                        i = e.local,
                        o = null === (t = $.default.getCurrentUser()) || void 0 === t ? void 0 : t.id;
                    return null != o && pt(o, n, r, i)
                },
                PASSIVE_UPDATE_V1: function(e) {
                    var t, n = !1,
                        r = !0,
                        i = !1,
                        o = void 0;
                    try {
                        for (var u, a = (null !== (t = e.channels) && void 0 !== t ? t : [])[Symbol.iterator](); !(r = (u = a.next()).done); r = !0) {
                            var s = u.value,
                                l = qe.get(s.id),
                                c = He(s.lastPinTimestamp);
                            if (l.lastMessageId !== s.lastMessageId || l.lastPinTimestamp !== c) {
                                n = !0;
                                l.lastMessageId = s.lastMessageId;
                                l.lastPinTimestamp = c
                            }
                        }
                    } catch (e) {
                        i = !0;
                        o = e
                    } finally {
                        try {
                            r || null == a.return || a.return()
                        } finally {
                            if (i) throw o
                        }
                    }
                    return n
                },
                CLEAR_OLDEST_UNREAD_MESSAGE: function(e) {
                    return ft(e.channelId)
                }
            });
            const It = vt
        },
        923555: (e, t, n) => {
            n.d(t, {
                Z: () => P
            });
            var r = n(496486),
                i = n.n(r),
                o = n(202351),
                u = n(630631),
                a = n(744564),
                s = n(955048),
                l = n(492628),
                c = n(61209),
                d = n(567403),
                f = n(715107),
                _ = n(2590);

            function E(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function h(e) {
                h = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return h(e)
            }

            function p(e, t) {
                return !t || "object" !== v(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function g(e, t) {
                g = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return g(e, t)
            }
            var v = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function I(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = h(e);
                    if (t) {
                        var i = h(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return p(this, n)
                }
            }
            var N = {},
                O = !1;

            function y(e) {
                null == N[e] && (N[e] = {
                    searchId: e,
                    searchType: T(e),
                    isIndexing: !1,
                    isHistoricalIndexing: !1,
                    isSearching: !1,
                    analyticsId: null,
                    editorState: null,
                    offset: 0,
                    query: null,
                    hasError: !1,
                    searchFetcher: null,
                    rawResults: null,
                    totalResults: 0,
                    documentsIndexed: 0,
                    resultsBlocked: 0,
                    showBlockedResults: !1,
                    showNoResultsAlt: !1
                });
                return N[e]
            }

            function T(e) {
                return e === _.aib.DMS ? _.aib.DMS : null != d.Z.getGuild(e) ? _.aib.GUILD : null != c.Z.getChannel(e) ? _.aib.CHANNEL : null
            }

            function C(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                if (null == e) return n;
                var r = N[e];
                return null == r ? n : t(r)
            }
            var A = "SearchStore",
                S = "tokenized",
                m = !1,
                M = {},
                R = null;

            function b(e) {
                var t = e.searchId,
                    n = e.query;
                if ("string" == typeof n && "" !== (n = n.trim())) {
                    var r, i = M[t] = null !== (r = M[t]) && void 0 !== r ? r : [],
                        o = i.indexOf(n);
                    if (-1 !== o) {
                        i.splice(o, 1);
                        i.unshift(n)
                    } else null != i[0] && "" !== i[0] && n.startsWith(i[0]) ? i[0] = n : o < 0 && i.unshift(n);
                    i.length > 5 && i.splice(5, i.length);
                    u.Z.set(A, {
                        history: M
                    })
                }
            }

            function U(e) {
                var t = e.searchId,
                    n = N[t];
                if (null == n) return !1;
                null != n.searchFetcher && n.searchFetcher.cancel();
                delete N[t]
            }

            function D(e) {
                if (e === R) return !1;
                null != e && null == N[e] && y(e);
                R = e
            }
            var Z = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && g(e, t)
                }(n, e);
                var t = I(n);

                function n() {
                    E(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    this.waitFor(d.Z, c.Z);
                    var e = u.Z.get(A);
                    null != (null == e ? void 0 : e.history) && (M = function(e) {
                        Object.keys(e).forEach((function(t) {
                            Array.isArray(e[t]) && (e[t] = e[t].filter((function(e) {
                                return "string" == typeof e && e.trim()
                            })));
                            Array.isArray(e[t]) && 0 !== e[t].length || delete e[t]
                        }));
                        return e
                    }(e.history));
                    m = !!u.Z.get(S) || !1
                };
                r.isOpen = function() {
                    return O
                };
                r.getCurrentSearchId = function() {
                    return R
                };
                r.isActive = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : R;
                    return null != e && (this.isIndexing(e) || this.isSearching(e) || this.hasResults(e))
                };
                r.isTokenized = function() {
                    return m
                };
                r.getSearchType = function(e) {
                    return C(null != e ? e : R, (function(e) {
                        return e.searchType
                    }))
                };
                r.getRawResults = function(e) {
                    return C(e, (function(e) {
                        return e.rawResults
                    }))
                };
                r.hasResults = function(e) {
                    return null != C(e, (function(e) {
                        return e.rawResults
                    }))
                };
                r.isIndexing = function(e) {
                    return C(e, (function(e) {
                        return e.isIndexing
                    })) || !1
                };
                r.isHistoricalIndexing = function(e) {
                    return C(e, (function(e) {
                        return e.isHistoricalIndexing
                    })) || !1
                };
                r.isSearching = function(e) {
                    return C(e, (function(e) {
                        return e.isSearching
                    })) || !1
                };
                r.getAnalyticsId = function(e) {
                    return C(e, (function(e) {
                        return e.analyticsId
                    }))
                };
                r.getResultsBlocked = function(e) {
                    return C(e, (function(e) {
                        return e.resultsBlocked
                    }))
                };
                r.getDocumentsIndexedCount = function(e) {
                    return C(e, (function(e) {
                        return e.documentsIndexed
                    }))
                };
                r.getSearchFetcher = function(e) {
                    return C(e, (function(e) {
                        return e.searchFetcher
                    }))
                };
                r.getTotalResults = function(e) {
                    var t;
                    return null !== (t = C(e, (function(e) {
                        return e.totalResults
                    }))) && void 0 !== t ? t : 0
                };
                r.getEditorState = function(e) {
                    return C(e, (function(e) {
                        return e.editorState
                    }))
                };
                r.getHistory = function(e) {
                    return M[e]
                };
                r.getOffset = function(e) {
                    var t;
                    return null !== (t = C(e, (function(e) {
                        return e.offset
                    }))) && void 0 !== t ? t : 0
                };
                r.getQuery = function(e) {
                    return C(e, (function(e) {
                        return e.query
                    }))
                };
                r.hasError = function(e) {
                    var t;
                    return null !== (t = C(e, (function(e) {
                        return e.hasError
                    }))) && void 0 !== t && t
                };
                r.shouldShowBlockedResults = function(e) {
                    var t;
                    return null !== (t = C(e, (function(e) {
                        return e.showBlockedResults
                    }), !1)) && void 0 !== t && t
                };
                r.shouldShowNoResultsAlt = function(e) {
                    var t;
                    return null !== (t = C(e, (function(e) {
                        return e.showNoResultsAlt
                    }), !1)) && void 0 !== t && t
                };
                r.getResultsState = function(e) {
                    return {
                        isSearching: this.isSearching(e),
                        isIndexing: this.isIndexing(e),
                        isHistoricalIndexing: this.isHistoricalIndexing(e),
                        documentsIndexed: this.getDocumentsIndexedCount(e),
                        offset: this.getOffset(e),
                        totalResults: this.getTotalResults(e),
                        hasError: this.hasError(e),
                        showBlockedResults: this.shouldShowBlockedResults(e),
                        showNoResultsAlt: this.shouldShowNoResultsAlt(e)
                    }
                };
                r.__getLocalVars = function() {
                    return {
                        NO_RESULTS_ALT_PERCENT: .05,
                        searchStates: N,
                        searchModalOpen: O,
                        STORAGE_KEY: A,
                        TOKENIZED_KEY: S,
                        isTokenized: m,
                        searchHistory: M,
                        selectedSearchId: R
                    }
                };
                return n
            }(o.ZP.Store);
            Z.displayName = "SearchStore";
            const P = new Z(a.Z, {
                SEARCH_START: function(e) {
                    var t, n = e.queryString,
                        r = e.searchId,
                        o = e.query,
                        u = y(r);
                    if (null != u.searchFetcher) {
                        u.searchFetcher.cancel();
                        u.searchFetcher = null
                    }
                    var d = r,
                        E = u.searchType;
                    if (r === _.I_8) {
                        var h;
                        d = null !== (h = f.Z.getChannelId()) && void 0 !== h ? h : r;
                        E = _.aib.CHANNEL
                    }
                    var p, g = new s.ZP(d, E, o);
                    u.searchFetcher = g;
                    u.isSearching = !0;
                    u.rawResults = null;
                    u.analyticsId = null;
                    u.query = i().omit(o, "type");
                    u.offset = null !== (p = o.offset) && void 0 !== p ? p : 0;
                    u.showBlockedResults = !1;
                    b({
                        type: "SEARCH_ADD_HISTORY",
                        searchId: r,
                        query: n
                    });
                    var v = r === _.I_8 ? null === (t = c.Z.getChannel(d)) || void 0 === t ? void 0 : t.guild_id : E === _.aib.GUILD ? r : null;
                    g.fetch((function(e) {
                        var t, n;
                        a.Z.dispatch({
                            type: "SEARCH_FINISH",
                            searchId: r,
                            guildId: v,
                            analyticsId: e.body.analytics_id,
                            totalResults: e.body.total_results,
                            messages: e.body.messages,
                            threads: null !== (t = e.body.threads) && void 0 !== t ? t : [],
                            members: (null !== (n = e.body.members) && void 0 !== n ? n : []).map((function(e) {
                                return (0, l.Z)(e)
                            })),
                            hasError: !1,
                            doingHistoricalIndex: e.body.doing_deep_historical_index,
                            documentsIndexed: e.body.documents_indexed
                        })
                    }), (function() {
                        a.Z.dispatch({
                            type: "SEARCH_INDEXING",
                            searchId: r
                        })
                    }), (function() {
                        a.Z.dispatch({
                            type: "SEARCH_FINISH",
                            searchId: r,
                            guildId: v,
                            messages: [],
                            threads: [],
                            members: [],
                            totalResults: 0,
                            analyticsId: null,
                            hasError: !0,
                            doingHistoricalIndex: !1,
                            documentsIndexed: 0
                        })
                    }))
                },
                SEARCH_INDEXING: function(e) {
                    var t = y(e.searchId);
                    t.isIndexing = !0;
                    t.isHistoricalIndexing = !0;
                    t.isSearching = !1
                },
                SEARCH_FINISH: function(e) {
                    var t = y(e.searchId);
                    t.isSearching = !1;
                    t.isIndexing = !1;
                    t.isHistoricalIndexing = e.doingHistoricalIndex || !1;
                    t.searchFetcher = null;
                    t.totalResults = e.totalResults;
                    t.hasError = e.hasError;
                    t.analyticsId = e.analyticsId;
                    t.documentsIndexed = null != e.documentsIndexed ? e.documentsIndexed : 0;
                    t.showNoResultsAlt = Math.random() < .05;
                    t.rawResults = e.messages;
                    null == t.query && (t.hasError = !0)
                },
                SEARCH_EDITOR_STATE_CLEAR: U,
                SEARCH_ENSURE_SEARCH_STATE: function(e) {
                    var t = e.searchId;
                    null != t && y(t)
                },
                SEARCH_EDITOR_STATE_CHANGE: function(e) {
                    var t = e.searchId,
                        n = e.editorState;
                    y(t).editorState = n
                },
                SEARCH_SET_SHOW_BLOCKED_RESULTS: function(e) {
                    var t = e.searchId,
                        n = e.showBlocked;
                    y(t).showBlockedResults = n
                },
                SEARCH_SCREEN_OPEN: function(e) {
                    D(e.searchId)
                },
                CHANNEL_SELECT: function(e) {
                    var t = e.guildId,
                        n = e.channelId;
                    D(null != t ? t : n)
                },
                CHANNEL_TOGGLE_MEMBERS_SECTION: function() {
                    return null != R && U({
                        searchId: R
                    })
                },
                SEARCH_CLEAR_HISTORY: function(e) {
                    var t = e.searchId;
                    if (null == t) {
                        u.Z.remove(A);
                        M = {}
                    } else {
                        delete M[t];
                        u.Z.set(A, {
                            history: M
                        })
                    }
                },
                SEARCH_REMOVE_HISTORY: function(e) {
                    var t = e.searchId,
                        n = e.query;
                    if (null != M[t]) {
                        M[t] = M[t].filter((function(e) {
                            return e !== n
                        }));
                        u.Z.set(A, {
                            history: M
                        })
                    }
                },
                SEARCH_ADD_HISTORY: b,
                LOGOUT: function() {
                    u.Z.remove(A);
                    M = {}
                },
                CONNECTION_OPEN: function() {
                    Object.keys(N).forEach((function(e) {
                        null != N[e] && (N[e].searchType = T(e))
                    }))
                },
                SEARCH_MODAL_OPEN: function(e) {
                    var t = e.searchId;
                    null != t && (R = t);
                    O = !0
                },
                SEARCH_MODAL_CLOSE: function() {
                    O = !1
                }
            })
        },
        377128: (e, t, n) => {
            n.d(t, {
                Z: () => b
            });
            var r = n(202351),
                i = n(744564),
                o = n(563135),
                u = n(61209),
                a = n(52467),
                s = n(563367),
                l = n(715107),
                c = n(2590),
                d = n(36256);

            function f(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function _(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function E(e) {
                E = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return E(e)
            }

            function h(e, t) {
                return !t || "object" !== v(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function p(e, t) {
                p = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return p(e, t)
            }

            function g(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, o = [],
                            u = !0,
                            a = !1;
                        try {
                            for (n = n.call(e); !(u = (r = n.next()).done); u = !0) {
                                o.push(r.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            a = !0;
                            i = e
                        } finally {
                            try {
                                u || null == n.return || n.return()
                            } finally {
                                if (a) throw i
                            }
                        }
                        return o
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return f(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return f(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var v = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function I(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = E(e);
                    if (t) {
                        var i = E(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return h(this, n)
                }
            }
            var N = new Map,
                O = null,
                y = null,
                T = null;

            function C(e, t) {
                var n = N.get(e);
                if (null == n) return !1;
                var r = n.delete(t);
                0 === n.size && N.delete(e);
                return r
            }

            function A(e, t, n) {
                var r, i, o;
                return ((null !== (o = null === (i = null === (r = N.get(e)) || void 0 === r ? void 0 : r.get(t)) || void 0 === i ? void 0 : i.flags) && void 0 !== o ? o : d.Dg.NONE) & n) === n
            }

            function S(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    r = N.get(e);
                if (null == r) return !1;
                var i = !0,
                    o = !1,
                    u = void 0;
                try {
                    for (var a, s = r[Symbol.iterator](); !(i = (a = s.next()).done); i = !0) {
                        var l = g(a.value, 2),
                            c = l[0],
                            d = l[1].flags;
                        if ((!n || c !== O) && (d & t) === t) return !0
                    }
                } catch (e) {
                    o = !0;
                    u = e
                } finally {
                    try {
                        i || null == s.return || s.return()
                    } finally {
                        if (o) throw u
                    }
                }
                return !1
            }

            function m(e, t, n) {
                var r, i = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d.Yn.DEFAULT,
                            t = N.get(e);
                        if (null == t) {
                            t = new Map;
                            N.set(e, t)
                        }
                        return t
                    }(e),
                    o = i.get(t),
                    u = null !== (r = null == o ? void 0 : o.flags) && void 0 !== r ? r : 0;
                if (0 === u && 0 === n) return !1;
                if (0 === n) {
                    i.delete(t);
                    0 === i.size && N.delete(e)
                } else {
                    var a, s = null !== (a = null == o ? void 0 : o.since) && void 0 !== a ? a : null,
                        l = (u & d.Dg.VOICE) === d.Dg.VOICE,
                        c = (n & d.Dg.VOICE) === d.Dg.VOICE;
                    l !== c && (s = c ? Date.now() : null);
                    i.set(t, {
                        flags: n,
                        since: s
                    })
                }
                return !0
            }

            function M(e) {
                var t = e.user,
                    n = e.sessionId;
                O = t.id;
                y = n;
                T = null
            }
            var R = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && p(e, t)
                }(n, e);
                var t = I(n);

                function n() {
                    _(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    this.mustEmitChanges((function(e) {
                        return "CONNECTION_OPEN" !== e.type && "VOICE_STATE_UPDATES" !== e.type
                    }));
                    this.waitFor(s.Z)
                };
                r.getSpeakingDuration = function(e, t) {
                    var n, r, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : d.Yn.DEFAULT,
                        o = null === (r = null === (n = N.get(i)) || void 0 === n ? void 0 : n.get(e)) || void 0 === r ? void 0 : r.since;
                    return null != o ? t - o : 0
                };
                r.getSpeakers = function() {
                    var e, t, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d.Yn.DEFAULT;
                    return Array.from(null !== (t = null === (e = N.get(n)) || void 0 === e ? void 0 : e.keys()) && void 0 !== t ? t : []).filter((function(e) {
                        return A(n, e, d.Dg.VOICE)
                    }))
                };
                r.isSpeaking = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.Yn.DEFAULT;
                    return A(t, e, d.Dg.VOICE)
                };
                r.isPrioritySpeaker = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.Yn.DEFAULT;
                    return A(t, e, d.Dg.PRIORITY)
                };
                r.isSoundSharing = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.Yn.DEFAULT;
                    return A(t, e, d.Dg.SOUNDSHARE)
                };
                r.isAnyoneElseSpeaking = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d.Yn.DEFAULT;
                    return S(e, d.Dg.VOICE, !0)
                };
                r.isCurrentUserSpeaking = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d.Yn.DEFAULT;
                    return null != O && this.isSpeaking(O, e)
                };
                r.isAnyonePrioritySpeaking = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d.Yn.DEFAULT;
                    return S(e, d.Dg.VOICE | d.Dg.PRIORITY)
                };
                r.isCurrentUserPrioritySpeaking = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d.Yn.DEFAULT;
                    return null != O && this.isPrioritySpeaker(O, e) && this.isSpeaking(O, e)
                };
                r.__getLocalVars = function() {
                    return {
                        speakersByContext: N,
                        currentUserId: O,
                        currentSessionId: y,
                        currentChannelId: T
                    }
                };
                return n
            }(r.ZP.Store);
            R.displayName = "SpeakingStore";
            const b = new R(i.Z, {
                CONNECTION_OPEN: M,
                OVERLAY_INITIALIZE: M,
                SPEAKING: function(e) {
                    var t = e.context,
                        n = e.userId,
                        r = e.speakingFlags;
                    if ((r & d.Dg.PRIORITY) === d.Dg.PRIORITY) {
                        var i = u.Z.getChannel(l.Z.getVoiceChannelId());
                        if (null != i && o.ZP.can({
                                permission: c.Plq.PRIORITY_SPEAKER,
                                user: n,
                                context: i
                            })) a.Z.setCanHavePriority(n, !0);
                        else {
                            a.Z.setCanHavePriority(n, !1);
                            r &= ~d.Dg.PRIORITY
                        }
                    }
                    return m(t, n, r)
                },
                VOICE_STATE_UPDATES: function(e) {
                    return e.voiceStates.reduce((function(e, t) {
                        var n = t.userId,
                            r = t.channelId,
                            i = t.sessionId,
                            o = !1,
                            u = T;
                        n === O && i === y && (T = null != r ? r : null);
                        u !== T && (o = N.delete(d.Yn.DEFAULT) || o);
                        null == r ? o = n === O && i === y ? N.delete(d.Yn.DEFAULT) || o : C(d.Yn.DEFAULT, n) || o : n === O && i !== y ? o = N.delete(d.Yn.DEFAULT) || o : n !== O && r !== s.Z.getChannelId() && (o = C(d.Yn.DEFAULT, n) || o);
                        return o || e
                    }), !1)
                },
                LOBBY_VOICE_STATE_UPDATE: function(e) {}
            })
        },
        256727: (e, t, n) => {
            n.d(t, {
                Z: () => N
            });
            var r = n(202351),
                i = n(744564),
                o = n(36256);

            function u(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function a(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function s(e) {
                s = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return s(e)
            }

            function l(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function c(e, t) {
                return !t || "object" !== f(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function d(e, t) {
                d = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return d(e, t)
            }
            var f = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function _(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = s(e);
                    if (t) {
                        var i = s(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return c(this, n)
                }
            }
            var E = null,
                h = null,
                p = {};

            function g(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                    r = p[e];
                if (null != r) {
                    var i = r[null != t ? t : "null"];
                    if (null != i) {
                        var u = !0,
                            a = !1,
                            s = void 0;
                        try {
                            for (var l, c = Object.values(o.Yn)[Symbol.iterator](); !(u = (l = c.next()).done); u = !0) {
                                var d = l.value;
                                n !== d && null != n || delete i[d]
                            }
                        } catch (e) {
                            a = !0;
                            s = e
                        } finally {
                            try {
                                u || null == c.return || c.return()
                            } finally {
                                if (a) throw s
                            }
                        }
                        p[e][null != t ? t : "null"] = i
                    }
                }
            }

            function v(e, t, n, r) {
                e in p || (p[e] = {});
                var i, o = null !== (i = p[e][null != t ? t : "null"]) && void 0 !== i ? i : {};
                p[e][null != t ? t : "null"] = l(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))));
                        r.forEach((function(t) {
                            a(e, t, n[t])
                        }))
                    }
                    return e
                }({}, o), a({}, r, {
                    streamId: n
                }))
            }
            var I = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && d(e, t)
                }(n, e);
                var t = _(n);

                function n() {
                    u(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.getStreamId = function(e, t) {
                    var n, r, i, u = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o.Yn.DEFAULT;
                    return null === (n = p[e]) || void 0 === n || null === (r = n[null != t ? t : "null"]) || void 0 === r || null === (i = r[u]) || void 0 === i ? void 0 : i.streamId
                };
                r.getUserStreamData = function(e, t) {
                    var n, r, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o.Yn.DEFAULT;
                    return null === (n = p[e]) || void 0 === n || null === (r = n[null != t ? t : "null"]) || void 0 === r ? void 0 : r[i]
                };
                r.__getLocalVars = function() {
                    return {
                        currentUserId: E,
                        currentSessionId: h,
                        streamsByUserAndGuild: p
                    }
                };
                return n
            }(r.ZP.Store);
            I.displayName = "VideoStreamStore";
            const N = new I(i.Z, {
                CONNECTION_OPEN: function(e) {
                    var t = e.user,
                        n = e.sessionId;
                    E = t.id;
                    h = n
                },
                OVERLAY_INITIALIZE: function(e) {
                    var t = e.user,
                        n = e.sessionId;
                    E = t.id;
                    h = n
                },
                RTC_CONNECTION_VIDEO: function(e) {
                    var t = e.userId,
                        n = e.guildId,
                        r = e.streamId,
                        i = e.context;
                    null != r ? v(t, n, r, i) : g(t, n, i)
                },
                VOICE_STATE_UPDATES: function(e) {
                    return e.voiceStates.reduce((function(e, t) {
                        var n, r = t.userId,
                            i = t.sessionId,
                            o = t.channelId,
                            u = t.guildId;
                        if (null == o && r === E) {
                            if (i !== h) return e;
                            p = {}
                        } else {
                            if (null != o || null == (null === (n = p[r]) || void 0 === n ? void 0 : n[null != u ? u : "null"])) return e;
                            g(r, u)
                        }
                        return !0
                    }), !1)
                }
            })
        }
    }
]);