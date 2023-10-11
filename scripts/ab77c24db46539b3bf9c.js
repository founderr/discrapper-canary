"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [20419], {
        720419: (e, t, n) => {
            n.d(t, {
                Z: () => qe
            });
            var r = n(289283),
                o = n(281110),
                i = n(575945),
                a = n(744564),
                u = n(815678),
                l = n(769915),
                s = n(396043),
                c = n(247075),
                f = n(114643),
                d = n(983622),
                h = n(773011),
                p = n(327566),
                y = n(664625),
                E = n(61209),
                g = n(567403),
                v = n(352980),
                m = n(260561),
                _ = (0, m.B)({
                    kind: "guild",
                    id: "2023-07_clyde_ai_proactive_guilds",
                    label: "Proactive Clyde",
                    defaultConfig: {
                        isProactiveClydeEnabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "enable proactive clyde",
                        config: {
                            isProactiveClydeEnabled: !0
                        }
                    }]
                });
            var b = n(23925);

            function O(e) {
                var t, n, r = null !== (n = null === (t = E.Z.getBasicChannel(e)) || void 0 === t ? void 0 : t.guild_id) && void 0 !== n ? n : "",
                    o = g.Z.getGuild(r);
                if (! function(e, t) {
                        return _.getCurrentConfig({
                            guildId: e,
                            location: t
                        }, {
                            autoTrackExposure: !1
                        }).isProactiveClydeEnabled
                    }(r, "allowProactiveClydeReply") && !(0, b.g0)(o)) return !1;
                var i, a = v.Z.getMessages(e),
                    u = a.last();
                if (null == u) return !1;
                var l = null !== (i = a.getManyBefore(u.id, 10)) && void 0 !== i ? i : [],
                    s = y.default.getId();
                return l.some((function(t) {
                    var n;
                    if (!t.author.isClyde() || null == t.messageReference) return !1;
                    var r = v.Z.getMessage(e, t.messageReference.message_id);
                    return (null == r || null === (n = r.author) || void 0 === n ? void 0 : n.id) === s
                }))
            }
            var S = n(890607),
                I = n(861323),
                M = n(296602),
                A = n(652555),
                T = n(179678),
                D = n(201891),
                C = n(158434),
                L = n(641453),
                w = n(625751),
                P = (0, m.B)({
                    kind: "user",
                    id: "2023-08_local_message_background_sending",
                    label: "Send Messages In The Backgrounded",
                    defaultConfig: {
                        enableBackgroundSending: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Enable Background Sending",
                        config: {
                            enableBackgroundSending: !0
                        }
                    }]
                });
            const R = {
                backgroundTaskIdentifierInvalid: -1,
                backgroundify: function(e, t) {
                    return e
                },
                startBackgroundTask: function(e) {
                    return new Promise((function(e) {
                        return e(-1)
                    }))
                },
                endBackgroundTask: function(e) {}
            };
            var Z = n(495414),
                N = n(202351);
            var j = n(863579),
                U = n(27851),
                G = n(584690),
                k = n(652591),
                B = n(2590);

            function x(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function V(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function F(e) {
                F = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return F(e)
            }

            function H(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        V(e, t, n[t])
                    }))
                }
                return e
            }

            function Y(e, t) {
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

            function K(e, t) {
                return !t || "object" !== J(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function W(e, t) {
                W = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return W(e, t)
            }
            var J = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function z(e) {
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
                    var n, r = F(e);
                    if (t) {
                        var o = F(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return K(this, n)
                }
            }
            var $ = new Z.Z("MessageRoundtripTrackerStore");

            function q(e) {
                return null != e.apiResponseTimestamp && null != e.gatewaySeenTimestamp
            }

            function X(e) {
                var t = E.Z.getBasicChannel(e.channelId);
                if (null != t) {
                    if (!(Math.random() > .1)) {
                        var n = null == e.apiResponseTimestamp ? null : e.apiResponseTimestamp - e.initialSendTimestamp,
                            r = null == e.gatewaySeenTimestamp ? null : e.gatewaySeenTimestamp - e.initialSendTimestamp,
                            o = (0, j.d)();
                        k.default.track(B.rMx.SEND_MESSAGE_ROUNDTRIP, H(Y(H({}, {}), {
                            api_latency_ms: n,
                            gateway_latency_ms: r,
                            channel_id: t.id,
                            channel_type: t.type,
                            guild_id: t.guild_id,
                            guild_size: U.Z.getMemberCount(t.guild_id),
                            mobile_network_type: G.Z.getType()
                        }), null != o && {
                            mobile_signal_strength_level: o
                        }))
                    }
                } else $.warn("Ignoring a messageData for channel ".concat(e.channelId, " because we can't find that channel."))
            }
            var Q = new(function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && W(e, t)
                }(n, e);
                var t = z(n);

                function n() {
                    x(this, n);
                    var e;
                    (e = t.apply(this, arguments)).pendingMessages = new Map;
                    return e
                }
                var r = n.prototype;
                r.recordMessageSendAttempt = function(e, t) {
                    var n = this,
                        r = {
                            initialSendTimestamp: Date.now(),
                            apiResponseTimestamp: null,
                            gatewaySeenTimestamp: null,
                            channelId: e
                        };
                    this.pendingMessages.set(t, r);
                    setTimeout((function() {
                        var e = n.pendingMessages.get(t);
                        if (null != e) {
                            X(e);
                            n.pendingMessages.delete(t)
                        }
                    }), 3e4)
                };
                r.recordMessageSendApiResponse = function(e) {
                    var t = this.pendingMessages.get(e);
                    if (null != t) {
                        var n = Y(H({}, t), {
                            apiResponseTimestamp: Date.now()
                        });
                        if (q(n)) {
                            X(n);
                            this.pendingMessages.delete(e)
                        } else this.pendingMessages.set(e, n)
                    }
                };
                r.recordGatewayResponse = function(e) {
                    var t = this.pendingMessages.get(e);
                    if (null != t) {
                        var n = Y(H({}, t), {
                            gatewaySeenTimestamp: Date.now()
                        });
                        if (q(n)) {
                            X(n);
                            this.pendingMessages.delete(e)
                        } else this.pendingMessages.set(e, n)
                    }
                };
                return n
            }(N.ZP.Store))(a.Z, {
                MESSAGE_CREATE: function(e) {
                    var t = e.optimistic,
                        n = e.message.nonce;
                    t || null == n || Q.recordGatewayResponse(n)
                }
            });
            const ee = Q,
                te = function(e, t) {};
            var ne = n(358624),
                re = n(723029),
                oe = n(438285),
                ie = n(364269),
                ae = n(214142),
                ue = n(785085),
                le = n(761953),
                se = n(897196);

            function ce(e) {
                if (e !== se.V) return null;
                var t = E.Z.getChannel(e);
                return null == t ? null : le.Z.ensurePrivateChannel(t.recipients)
            }
            var fe = n(490355),
                de = n(78551),
                he = n(331055),
                pe = n(671293),
                ye = n(55609),
                Ee = n(177570),
                ge = n(757753),
                ve = n(682776),
                me = n(491260),
                _e = n(179913),
                be = n(840922),
                Oe = n(715107),
                Se = n(464187),
                Ie = n(539273),
                Me = n(473903),
                Ae = n(661123),
                Te = n(644144),
                De = n(348592),
                Ce = n(116094),
                Le = n(102921),
                we = n(105783),
                Pe = n(335150),
                Re = n(473708);

            function Ze(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function Ne(e, t, n, r, o, i, a) {
                try {
                    var u = e[i](a),
                        l = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(l) : Promise.resolve(l).then(r, o)
            }

            function je(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function a(e) {
                            Ne(i, r, o, a, u, "next", e)
                        }

                        function u(e) {
                            Ne(i, r, o, a, u, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function Ue(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function Ge(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        Ue(e, t, n[t])
                    }))
                }
                return e
            }

            function ke(e, t) {
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

            function Be(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            a = !0,
                            u = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            u = !0;
                            o = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (u) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || Ve(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function xe(e) {
                return function(e) {
                    if (Array.isArray(e)) return Ze(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || Ve(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Ve(e, t) {
                if (e) {
                    if ("string" == typeof e) return Ze(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    return "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Ze(e, t) : void 0
                }
            }
            var Fe, He = function(e, t) {
                    var n, r, o, i, a = {
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
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function u(i) {
                        return function(u) {
                            return function(i) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                    (r = 0, o) && (i = [2 & i[0], o.value]);
                                    switch (i[0]) {
                                        case 0:
                                        case 1:
                                            o = i;
                                            break;
                                        case 4:
                                            a.label++;
                                            return {
                                                value: i[1], done: !1
                                            };
                                        case 5:
                                            a.label++;
                                            r = i[1];
                                            i = [0];
                                            continue;
                                        case 7:
                                            i = a.ops.pop();
                                            a.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = a.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                a.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && a.label < o[1]) {
                                                a.label = o[1];
                                                o = i;
                                                break
                                            }
                                            if (o && a.label < o[2]) {
                                                a.label = o[2];
                                                a.ops.push(i);
                                                break
                                            }
                                            o[2] && a.ops.pop();
                                            a.trys.pop();
                                            continue
                                    }
                                    i = t.call(e, a)
                                } catch (e) {
                                    i = [6, e];
                                    r = 0
                                } finally {
                                    n = o = 0
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
                Ye = new M.Z("MessageActionCreators"),
                Ke = !1,
                We = function() {
                    function e() {
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e);
                        this.completed = !1
                    }
                    e.prototype.markComplete = function() {
                        this.completed = !0
                    };
                    return e
                }();

            function Je(e) {
                var t = e.inviteKey,
                    n = e.channelId,
                    r = e.messageId,
                    o = e.location,
                    i = e.suggested,
                    a = void 0 === i ? null : i,
                    u = e.overrideProperties,
                    l = void 0 === u ? {} : u,
                    c = (0, L.fU)(t),
                    f = E.Z.getChannel(n);
                if (null != f) {
                    var d = null;
                    f.isMultiUserDM() ? d = B.dAT.GDM_INVITE : f.isPrivate() || (d = B.dAT.SERVER_INVITE);
                    var h = {},
                        p = ge.Z.getInvite(t);
                    if (null != p && p.state === B.r2o.RESOLVED && null != p.channel) {
                        var y, g = p.channel;
                        h.invite_channel_id = g.id;
                        h.invite_guild_id = null === (y = p.guild) || void 0 === y ? void 0 : y.id;
                        h.invite_channel_type = g.type;
                        null != p.inviter && (h.invite_inviter_id = p.inviter.id);
                        var v = Ee.Z.getLastActiveStream();
                        if (null != v && v.channelId === g.id) {
                            d = B.dAT.STREAM;
                            h.destination_user_id = v.ownerId;
                            var m = (0, T.L2)(v, me.Z);
                            h.application_id = null != m ? m.id : null
                        }
                    }
                    if (null != a) {
                        h.is_suggested = a.isAffinitySuggestion;
                        h.row_num = a.rowNum;
                        h.num_total = a.numTotal;
                        h.num_affinity_connections = a.numAffinityConnections;
                        h.is_filtered = a.isFiltered
                    }
                    h = Ge(ke(Ge({}, h), {
                        location: o,
                        invite_type: d,
                        invite_code: c.baseCode,
                        guild_id: f.getGuildId(),
                        channel_id: f.id,
                        message_id: r,
                        send_type: B.a5g.DIRECT_MESSAGE,
                        invite_guild_scheduled_event_id: c.guildScheduledEventId
                    }), l);
                    s.ZP.trackWithMetadata(B.rMx.INVITE_SENT, h)
                } else {
                    var _ = {},
                        b = ge.Z.getInvite(t);
                    if (null != b && b.state === B.r2o.RESOLVED && null != b.inviter) {
                        _.invite_inviter_id = b.inviter.id;
                        _ = Ge(ke(Ge({}, _), {
                            location: o,
                            invite_type: B.dAT.FRIEND_INVITE,
                            invite_code: c.baseCode,
                            message_id: r,
                            send_type: B.a5g.DIRECT_MESSAGE,
                            invite_guild_scheduled_event_id: c.guildScheduledEventId
                        }), l);
                        s.ZP.trackWithMetadata(B.rMx.INVITE_SENT, _)
                    }
                }
            }
            var ze = (Ue(Fe = {}, B.evJ.EMAIL_VERIFICATION_REQUIRED, {
                    messageName: "BOT_REQUIRES_EMAIL_VERIFICATION",
                    messageGetter: function() {
                        return Re.Z.Messages.BOT_REQUIRES_EMAIL_VERIFICATION
                    }
                }), Ue(Fe, B.evJ.INVALID_MESSAGE_SEND_USER, {
                    messageName: "BOT_DM_SEND_FAILED_WITH_HELP_LINK",
                    messageGetter: function() {
                        return Re.Z.Messages.BOT_DM_SEND_FAILED_WITH_HELP_LINK.format({
                            helpUrl: De.Z.getArticleURL(B.BhN.DM_COULD_NOT_BE_DELIVERED)
                        })
                    }
                }), Ue(Fe, B.evJ.RATE_LIMIT_DM_OPEN, {
                    messageName: "BOT_DM_RATE_LIMITED",
                    messageGetter: function() {
                        return Re.Z.Messages.BOT_DM_RATE_LIMITED
                    }
                }), Ue(Fe, B.evJ.SEND_MESSAGE_TEMPORARILY_DISABLED, {
                    messageName: "BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED",
                    messageGetter: function() {
                        return Re.Z.Messages.BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED
                    }
                }), Ue(Fe, B.evJ.SLOWMODE_RATE_LIMITED, {
                    messageName: "BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED",
                    messageGetter: function() {
                        return Re.Z.Messages.BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED
                    }
                }), Fe),
                $e = {
                    receiveMessage: function(e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                        a.Z.dispatch({
                            type: "MESSAGE_CREATE",
                            channelId: e,
                            message: t,
                            optimistic: n,
                            sendMessageOptions: r,
                            isPushNotification: !1
                        })
                    },
                    sendBotMessage: function(e, t, n) {
                        null != n && s.ZP.trackWithMetadata(B.rMx.AUTOMATED_MESSAGE_RECEIVED, {
                            message_author: "Clyde",
                            message_name: n
                        });
                        $e.receiveMessage(e, (0, ne.cs)({
                            channelId: e,
                            content: t,
                            loggingName: n
                        }))
                    },
                    sendClydeError: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                            n = E.Z.getChannel(e);
                        if (null != n) {
                            var r, o;
                            if (t === B.evJ.EXPLICIT_CONTENT)
                                if (n.isDM()) {
                                    r = Re.Z.Messages.BOT_DM_EXPLICIT_CONTENT.format({
                                        name: (0, h.F6)(n, Me.default, be.Z)
                                    });
                                    o = "BOT_DM_EXPLICIT_CONTENT"
                                } else if (n.isMultiUserDM()) {
                                r = Re.Z.Messages.BOT_GDM_EXPLICIT_CONTENT.format({
                                    name: (0, h.F6)(n, Me.default, be.Z)
                                });
                                o = "BOT_GDM_EXPLICIT_CONTENT"
                            } else {
                                var i = g.Z.getGuild(n.getGuildId());
                                if (null == i) return;
                                r = Re.Z.Messages.BOT_GUILD_EXPLICIT_CONTENT.format({
                                    name: i.toString()
                                });
                                o = "BOT_GUILD_EXPLICIT_CONTENT"
                            } else if (t === B.evJ.SLOWMODE_RATE_LIMITED) {
                                r = Re.Z.Messages.CHANNEL_SLOWMODE_DESC.format({
                                    seconds: n.rateLimitPerUser
                                });
                                o = "SLOWMODE_RATE_LIMITED"
                            } else if (t === B.evJ.INVALID_MESSAGE_SEND_USER) {
                                r = Re.Z.Messages.BOT_DM_SEND_FAILED_WITH_HELP_LINK.format({
                                    helpUrl: De.Z.getArticleURL(B.BhN.DM_COULD_NOT_BE_DELIVERED)
                                });
                                o = "INVALID_MESSAGE_SEND_USER"
                            } else if (t === B.evJ.TOO_MANY_THREADS) {
                                var a = n.isForumLikeChannel() || n.isForumPost();
                                r = a ? Re.Z.Messages.BOT_DM_TOO_MANY_POSTS : Re.Z.Messages.BOT_DM_TOO_MANY_THREADS;
                                o = "TOO_MANY_THREADS"
                            } else if (t === B.evJ.TOO_MANY_ANNOUNCEMENT_THREADS) {
                                r = Re.Z.Messages.BOT_DM_TOO_MANY_ANNOUNCEMENT_THREADS;
                                o = "TOO_MANY_ANNOUNCEMENT_THREADS"
                            } else if (t === B.evJ.HARMFUL_LINK_MESSAGE_BLOCKED) {
                                r = Re.Z.Messages.HARMFUL_LINK_MESSAGE_BLOCKED_ERROR.format({
                                    helpUrl: B.EYA.HARMFUL_LINKS
                                });
                                o = "HARMFUL_LINK_MESSAGE_BLOCKED"
                            } else if (t in ze) {
                                o = ze[t].messageName;
                                r = ze[t].messageGetter()
                            } else {
                                r = Re.Z.Messages.BOT_DM_SEND_FAILED_WITH_HELP_LINK.format({
                                    helpUrl: De.Z.getArticleURL(B.BhN.DM_COULD_NOT_BE_DELIVERED)
                                });
                                o = "SEND_FAILED (".concat(t, ")")
                            }
                            $e.sendBotMessage(e, r, o)
                        }
                    },
                    truncateMessages: function(e, t, n) {
                        a.Z.dispatch({
                            type: "TRUNCATE_MESSAGES",
                            channelId: e,
                            truncateBottom: t,
                            truncateTop: n
                        })
                    },
                    clearChannel: function(e) {
                        a.Z.dispatch({
                            type: "CLEAR_MESSAGES",
                            channelId: e
                        })
                    },
                    jumpToPresent: function(e, t) {
                        $e.trackJump(e, null, "Present");
                        var n = {
                            present: !0
                        };
                        v.Z.hasPresent(e) ? a.Z.dispatch({
                            type: "LOAD_MESSAGES_SUCCESS_CACHED",
                            jump: n,
                            channelId: e,
                            limit: t
                        }) : $e.fetchMessages({
                            channelId: e,
                            limit: t,
                            jump: n
                        })
                    },
                    trackJump: function(e, t, n, r) {
                        s.ZP.trackWithMetadata(B.rMx.JUMP, Ge({
                            context: n,
                            channel_id: e,
                            message_id: t
                        }, r))
                    },
                    jumpToMessage: function(e) {
                        var t = e.channelId,
                            n = e.messageId,
                            r = e.flash,
                            o = void 0 !== r && r,
                            i = e.offset,
                            a = e.context,
                            u = e.extraProperties,
                            l = void 0 === u ? null : u,
                            s = e.isPreload,
                            c = e.returnMessageId,
                            f = e.skipLocalFetch,
                            d = e.jumpType;
                        "string" == typeof a && $e.trackJump(t, n, a, l);
                        return $e.fetchMessages({
                            channelId: t,
                            limit: B.Z8P,
                            jump: {
                                messageId: n,
                                flash: o,
                                offset: i,
                                returnMessageId: c,
                                jumpType: d
                            },
                            isPreload: s,
                            skipLocalFetch: f
                        })
                    },
                    focusMessage: function(e) {
                        var t = e.channelId,
                            n = e.messageId;
                        $e.fetchMessages({
                            channelId: t,
                            limit: B.Z8P,
                            focus: {
                                messageId: n
                            }
                        })
                    },
                    fetchMessages: function(e) {
                        var t = e.channelId,
                            n = e.before,
                            r = e.after,
                            i = e.limit,
                            l = e.jump,
                            s = e.focus,
                            c = e.isPreload,
                            f = e.skipLocalFetch,
                            d = e.truncate,
                            h = E.Z.getChannel(t),
                            y = A.Z.isConnectedOrOverlay(),
                            g = Date.now();
                        if (null != h && h.type === B.d4z.GUILD_STORE) return !1;
                        if (t !== se.V) {
                            Ye.log("Fetching messages for ".concat(t, " between ").concat(n, " and ").concat(r, ". jump=").concat(JSON.stringify(l)));
                            if (!$e._tryFetchMessagesCached({
                                    channelId: t,
                                    before: n,
                                    after: r,
                                    limit: i,
                                    jump: l,
                                    focus: s,
                                    truncate: d
                                })) {
                                ye.Z.fetchMessages.recordStart();
                                var v = null != l ? l : void 0;
                                null == v && null != s && (v = Ge({}, s));
                                var m = u.Z.getOrCreate(t).loadStart(v);
                                u.Z.commit(m);
                                a.Z.dispatch({
                                    type: "LOAD_MESSAGES"
                                });
                                var _ = null == v ? void 0 : v.messageId,
                                    b = new We;
                                f || this.fetchLocalMessages(t, n, r, i, b);
                                return o.ZP.get({
                                    url: B.ANM.MESSAGES(t),
                                    query: {
                                        before: n,
                                        after: r,
                                        limit: i,
                                        around: _,
                                        preload: c
                                    },
                                    retries: 2,
                                    oldFormErrors: !0
                                }).then((function(e) {
                                    ye.Z.fetchMessages.recordEnd();
                                    ye.Z.dispatchMessages.measure((function() {
                                        var o, u = e.body,
                                            s = null != n,
                                            c = null != r,
                                            f = null == n && null == r,
                                            E = null != _ || u.length === i && (s || f),
                                            v = null != _ || c && u.length === i;
                                        if (null != _) {
                                            var m = Math.floor(i / 2),
                                                O = [_].concat(xe(u.map((function(e) {
                                                    return e.id
                                                })))).filter((function(e, t, n) {
                                                    return n.indexOf(e) === t
                                                })).sort(Le.Z.compare),
                                                S = O.indexOf(_);
                                            S < m && (E = !1);
                                            u.length - S < m && (v = !1);
                                            if (v && u.length > 0) {
                                                var I = _e.ZP.lastMessageId(t);
                                                u[0].id === I && (v = !1)
                                            }
                                        }
                                        Ye.log("Fetched ".concat(u.length, " messages for ").concat(t, " isBefore:").concat(s, " isAfter:").concat(c));
                                        b.markComplete();
                                        if ((0, ie.m7)(null !== (o = null == h ? void 0 : h.guild_id) && void 0 !== o ? o : "") && (null == l ? void 0 : l.isHighlight)) {
                                            var M = (0, p.HK)(t, _e.ZP.ackMessageId(t));
                                            if (M.length >= 0) {
                                                var T = M[0];
                                                if (null == u.find((function(e) {
                                                        return e.id === T
                                                    }))) {
                                                    $e.jumpToMessage({
                                                        channelId: t,
                                                        messageId: T,
                                                        flash: null == l ? void 0 : l.flash,
                                                        jumpType: null == l ? void 0 : l.jumpType
                                                    });
                                                    return !0
                                                }
                                            }
                                        }
                                        a.Z.dispatch({
                                            type: "LOAD_MESSAGES_SUCCESS",
                                            channelId: t,
                                            messages: u,
                                            isBefore: s,
                                            isAfter: c,
                                            hasMoreBefore: E,
                                            hasMoreAfter: v,
                                            limit: i,
                                            jump: l,
                                            isStale: !y || A.Z.lastTimeConnectedChanged() >= g,
                                            truncate: d
                                        })
                                    }));
                                    return !0
                                }), (function() {
                                    Ye.log("Failed to fetch messages for ".concat(t));
                                    a.Z.dispatch({
                                        type: "LOAD_MESSAGES_FAILURE",
                                        channelId: t
                                    });
                                    return !1
                                }))
                            }
                        }
                    },
                    fetchLocalMessages: function(e, t, n, r, o) {
                        return je((function() {
                            var i, l, s, h, p;
                            return He(this, (function(y) {
                                switch (y.label) {
                                    case 0:
                                        i = E.Z.getBasicChannel(e);
                                        l = u.Z.getOrCreate(e);
                                        if (null == (s = c.Z.database()) || null == i || null != t || null != n) {
                                            ye.Z.addLocalMessages(e, -1);
                                            return [2]
                                        }
                                        if (l.ready && !l.cached) {
                                            ye.Z.addLocalMessages(e, -2);
                                            return [2]
                                        }
                                        return [4, (0, f.dI)((function() {
                                            return d.ZP.load(s, e, r)
                                        }))];
                                    case 1:
                                        if (null == (h = y.sent())) {
                                            ye.Z.addLocalMessages(e, -3);
                                            return [2]
                                        }
                                        Ye.log("fetched ".concat(h.messages.length, " messages from local database (channel_id: ").concat(e, ", remote_fetch_completed: ").concat(o.completed, ")"));
                                        ye.Z.addLocalMessages(e, h.messages.length);
                                        if (!o.completed && h.messages.length > 0) {
                                            p = h.messages.length >= r && h.connectionId === A.Z.lastTimeConnectedChanged();
                                            a.Z.dispatch({
                                                type: "LOCAL_MESSAGES_LOADED",
                                                guildId: i.guild_id,
                                                channelId: e,
                                                users: h.users,
                                                members: h.members,
                                                messages: h.messages,
                                                stale: !p
                                            })
                                        }
                                        return [2]
                                }
                            }))
                        }))()
                    },
                    fetchNewLocalMessages: function(e, t) {
                        return je((function() {
                            var n, r, o, i, l, s, h;
                            return He(this, (function(p) {
                                switch (p.label) {
                                    case 0:
                                        r = E.Z.getBasicChannel(e);
                                        return null == (o = c.Z.database()) || null == r || (i = u.Z.getOrCreate(e)).hasMoreAfter ? [2] : [4, (0, f.dI)((function() {
                                            return d.ZP.load(o, e, t)
                                        }))];
                                    case 1:
                                        if (null == (l = p.sent())) return [2];
                                        i = u.Z.getOrCreate(e);
                                        s = null === (n = i.last()) || void 0 === n ? void 0 : n.id;
                                        h = null == s ? l.messages : l.messages.filter((function(e) {
                                            return Le.Z.compare(e.id, s) > 0
                                        }));
                                        Ye.log("Fetched ".concat(l.messages.length, " messages from the cache after foregrounding. ").concat(h.length, " are new"));
                                        if (0 === h.length) return [2];
                                        a.Z.dispatch({
                                            type: "LOCAL_MESSAGES_LOADED",
                                            guildId: r.guild_id,
                                            channelId: e,
                                            users: l.users,
                                            members: l.members,
                                            messages: h,
                                            stale: !0
                                        });
                                        return [2]
                                }
                            }))
                        }))()
                    },
                    _tryFetchMessagesCached: function(e) {
                        var t = e.channelId,
                            n = e.before,
                            r = e.after,
                            o = e.limit,
                            i = e.jump,
                            u = e.focus,
                            l = e.truncate,
                            s = v.Z.getMessages(t);
                        if (s.cached || !s.ready) return !1;
                        if (null != (null == i ? void 0 : i.messageId) || null != (null == u ? void 0 : u.messageId)) {
                            if (null != (null == i ? void 0 : i.messageId) && s.has(i.messageId, !1)) {
                                a.Z.dispatch({
                                    type: "LOAD_MESSAGES_SUCCESS_CACHED",
                                    channelId: t,
                                    jump: i,
                                    limit: o,
                                    truncate: l
                                });
                                return !0
                            }
                            if (null != (null == u ? void 0 : u.messageId)) {
                                if (s.has(u.messageId, !1)) {
                                    a.Z.dispatch({
                                        type: "LOAD_MESSAGES_SUCCESS_CACHED",
                                        channelId: t,
                                        focus: u,
                                        limit: o,
                                        truncate: l
                                    });
                                    return !0
                                }
                                i = Ge({}, u)
                            }
                            var c = null != (null == i ? void 0 : i.messageId) ? Le.Z.extractTimestamp(null == i ? void 0 : i.messageId) : 0,
                                f = s.first(),
                                d = s.last();
                            if (!s.hasMoreBefore && null != f && Le.Z.extractTimestamp(f.id) >= c || !s.hasMoreAfter && null != d && Le.Z.extractTimestamp(d.id) <= c) {
                                a.Z.dispatch({
                                    type: "LOAD_MESSAGES_SUCCESS_CACHED",
                                    channelId: t,
                                    jump: i,
                                    limit: B.Z8P
                                });
                                return !0
                            }
                            if (null != f && null != d && Le.Z.extractTimestamp(f.id) < c && Le.Z.extractTimestamp(d.id) > c) {
                                a.Z.dispatch({
                                    type: "LOAD_MESSAGES_SUCCESS_CACHED",
                                    channelId: t,
                                    jump: i,
                                    limit: B.Z8P
                                });
                                return !0
                            }
                            return !1
                        }
                        if (null != n && s.hasBeforeCached(n)) {
                            a.Z.dispatch({
                                type: "LOAD_MESSAGES_SUCCESS_CACHED",
                                channelId: t,
                                before: n,
                                limit: o,
                                truncate: l
                            });
                            return !0
                        }
                        if (null != r && s.hasAfterCached(r)) {
                            a.Z.dispatch({
                                type: "LOAD_MESSAGES_SUCCESS_CACHED",
                                channelId: t,
                                after: r,
                                limit: o,
                                truncate: l
                            });
                            return !0
                        }
                        return !1
                    },
                    sendMessage: function(e, t) {
                        var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                        return je((function() {
                            var o, i, a, u, l;
                            return He(this, (function(s) {
                                switch (s.label) {
                                    case 0:
                                        return t.reaction ? [2, Promise.resolve()] : [4, ce(e)];
                                    case 1:
                                        if (null != (o = s.sent())) return [2, $e.sendMessage(o, t, n, r)];
                                        i = function() {
                                            return $e._sendMessage(e, t, r)
                                        };
                                        a = P.getCurrentConfig({
                                            location: "8e1e29_1"
                                        }).enableBackgroundSending ? R.backgroundify(i, void 0) : i;
                                        l = null !== (u = r.nonce) && void 0 !== u ? u : (0, ne.rv)();
                                        r = ke(Ge({}, r), {
                                            nonce: l
                                        });
                                        ee.recordMessageSendAttempt(e, l);
                                        return n && e !== se.V ? [2, new Promise((function(t, n) {
                                            v.Z.whenReady(e, (function() {
                                                return a().then(t, n)
                                            }))
                                        }))] : [2, a()]
                                }
                            }))
                        }))()
                    },
                    getSendMessageOptionsForReply: function(e) {
                        return null == e ? {} : {
                            messageReference: {
                                guild_id: null !== (t = e.channel.getGuildId()) && void 0 !== t ? t : void 0,
                                channel_id: e.channel.id,
                                message_id: e.message.id
                            },
                            allowedMentions: e.shouldMention ? void 0 : {
                                parse: Object.values(B.hCA),
                                replied_user: !1
                            }
                        };
                        var t
                    },
                    sendInvite: function(e, t, n, r) {
                        return $e._sendMessage(e, {
                            content: (0, w.Z)(t),
                            tts: !1,
                            validNonShortcutEmojis: [],
                            invalidEmojis: []
                        }, {
                            location: n,
                            suggestedInvite: null != r ? r : void 0
                        })
                    },
                    sendActivityBookmark: function(e, t, n, r) {
                        return $e._sendMessage(e, {
                            content: t,
                            tts: !1,
                            validNonShortcutEmojis: [],
                            invalidEmojis: []
                        }, {
                            location: n,
                            suggestedInvite: null != r ? r : void 0
                        })
                    },
                    sendClydeProfileOverride: function(e, t, n, r) {
                        return $e._sendMessage(e, {
                            content: t,
                            tts: !1,
                            validNonShortcutEmojis: [],
                            invalidEmojis: []
                        }, {
                            location: n,
                            suggestedInvite: null != r ? r : void 0
                        })
                    },
                    sendStickers: function(e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
                            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                            o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                        return $e._sendMessage(e, {
                            content: n,
                            invalidEmojis: [],
                            validNonShortcutEmojis: [],
                            tts: o
                        }, ke(Ge({}, r), {
                            stickerIds: t
                        }))
                    },
                    sendGreetMessage: function(e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            r = n.messageReference,
                            i = n.allowedMentions;
                        return o.ZP.post({
                            url: B.ANM.MESSAGES_GREET(e),
                            body: {
                                sticker_ids: [t],
                                allowed_mentions: i,
                                message_reference: r
                            },
                            oldFormErrors: !0
                        }).then((function(n) {
                            te(n.body.content, e);
                            $e.receiveMessage(e, n.body);
                            a.Z.dispatch({
                                type: "STICKER_TRACK_USAGE",
                                stickerIds: [t]
                            });
                            return n
                        }), (function(t) {
                            Ye.log("Failed to send greeting");
                            429 !== t.status && $e.sendClydeError(e, t.body.code);
                            a.Z.dispatch({
                                type: "MESSAGE_SEND_FAILED",
                                messageId: t.body.id,
                                channelId: e
                            });
                            throw t
                        }))
                    },
                    _sendMessage: function(e, t, n) {
                        var o = ce(e);
                        if (null != o) return o.then((function(e) {
                            return $e._sendMessage(e, t, n)
                        }));
                        var i, u = t.content,
                            c = t.invalidEmojis,
                            f = t.validNonShortcutEmojis,
                            d = t.tts,
                            h = void 0 !== d && d,
                            p = n.activityAction,
                            g = n.location,
                            v = n.suggestedInvite,
                            m = n.stickerIds,
                            _ = n.messageReference,
                            b = n.allowedMentions,
                            M = null !== (i = n.flags) && void 0 !== i ? i : 0,
                            A = Be((0, he.ZP)(u), 2),
                            T = A[0],
                            L = A[1];
                        if (T) {
                            u = L;
                            M = (0, Ae.pj)(M, B.iLy.SUPPRESS_NOTIFICATIONS)
                        }
                        if ("" === u && null == p && null == m) return Promise.reject(new Error("not sending empty message"));
                        var w, P = null != _ ? B.uaV.REPLY : B.uaV.DEFAULT,
                            R = null !== (w = n.nonce) && void 0 !== w ? w : (0, ne.rv)(),
                            Z = R;
                        if (!1 !== n.eagerDispatch) {
                            var N = (0, ne.ZP)({
                                channelId: e,
                                content: u,
                                tts: h,
                                type: P,
                                messageReference: _,
                                allowedMentions: b,
                                flags: 0 !== M ? M : void 0,
                                nonce: R
                            });
                            (0, ae.EL)(e, N.id);
                            null != m && (N.sticker_items = m.map((function(e) {
                                return de.Z.getStickerById(e)
                            })).filter((function(e) {
                                return null != e
                            })));
                            $e.receiveMessage(e, N, !0, n)
                        }
                        if (!Ke && null != c && c.length > 0) {
                            Ke = !0;
                            var j, U, G = Me.default.getCurrentUser();
                            if (c.some((function(e) {
                                    return e.animated
                                })) && !Ce.ZP.canUseAnimatedEmojis(G)) {
                                j = Re.Z.Messages.INVALID_ANIMATED_EMOJI_BODY_UPGRADE;
                                U = "INVALID_ANIMATED_EMOJI_BODY"
                            } else if (ve.Z.canWithPartialContext(B.Plq.USE_EXTERNAL_EMOJIS, {
                                    channelId: e
                                })) {
                                j = Re.Z.Messages.INVALID_EXTERNAL_EMOJI_BODY_UPGRADE;
                                U = "INVALID_EXTERNAL_EMOJI_BODY_UPGRADE"
                            } else {
                                j = Re.Z.Messages.INVALID_EXTERNAL_EMOJI_BODY;
                                U = "INVALID_EXTERNAL_EMOJI_BODY"
                            }
                            $e.sendBotMessage(e, j, U)
                        }
                        var x = {
                            type: l.$V.SEND,
                            message: {
                                channelId: e,
                                content: u,
                                nonce: R,
                                tts: h,
                                message_reference: _,
                                allowed_mentions: b,
                                flags: M
                            }
                        };
                        if (null != p) {
                            var V = p.type === B.mFx.JOIN_REQUEST ? null == p ? void 0 : p.activity.session_id : y.default.getSessionId();
                            if (null != V) {
                                var F = {
                                        type: p.type,
                                        session_id: V
                                    },
                                    H = p.activity;
                                null != H.party && null != H.party.id && (F.party_id = H.party.id);
                                x.message.application_id = H.application_id;
                                x.message.activity = F
                            }
                        }
                        null != m && (x.message.sticker_ids = m);
                        ue.Z.isEnabled() && (x.message.has_poggermode_enabled = !0);
                        O(e) && (x.message.allow_proactive_clyde_reply = !0);
                        return new Promise((function(t, o) {
                            var i = Date.now(),
                                c = l.ZP.length;
                            l.ZP.enqueue(x, (function(l) {
                                var d = Date.now() - i;
                                if (l.ok) {
                                    te(u, e);
                                    $e.receiveMessage(e, l.body, !0, {
                                        sendAnalytics: {
                                            duration: d,
                                            queueSize: c
                                        }
                                    });
                                    ee.recordMessageSendApiResponse(R);
                                    a.Z.dispatch({
                                        type: "SLOWMODE_RESET_COOLDOWN",
                                        slowmodeType: Ie.S.SendMessage,
                                        channelId: e
                                    });
                                    a.Z.dispatch({
                                        type: "EMOJI_TRACK_USAGE",
                                        emojiUsed: f
                                    });
                                    a.Z.dispatch({
                                        type: "STICKER_TRACK_USAGE",
                                        stickerIds: m
                                    });
                                    ! function(e) {
                                        var t = e.content,
                                            n = e.channelId,
                                            o = e.messageId,
                                            i = e.location,
                                            a = e.suggested,
                                            u = void 0 === a ? null : a,
                                            l = e.overrideProperties,
                                            c = void 0 === l ? {} : l;
                                        (0, I.ZP)(t).forEach((function(e) {
                                            var t = e.type,
                                                a = e.code;
                                            if (t === S.g.INVITE) Je({
                                                inviteKey: a,
                                                channelId: n,
                                                messageId: o,
                                                location: i,
                                                suggested: u,
                                                overrideProperties: c
                                            });
                                            else if (t === S.g.TEMPLATE) {
                                                var l = C.Z.getGuildTemplate(a);
                                                if (null == l || l.state === Pe.Rj.RESOLVING) return;
                                                s.ZP.trackWithMetadata(B.rMx.GUILD_TEMPLATE_LINK_SENT, {
                                                    guild_template_code: a,
                                                    guild_template_name: l.name,
                                                    guild_template_description: l.description,
                                                    guild_template_guild_id: l.sourceGuildId
                                                })
                                            } else if (t === S.g.BUILD_OVERRIDE);
                                            else if (t === S.g.EVENT);
                                            else if (t === S.g.CHANNEL_LINK);
                                            else if (t === S.g.APP_DIRECTORY_PROFILE) k.default.track(B.rMx.APP_DIRECTORY_PROFILE_EMBED_SENT, {
                                                application_id: a,
                                                device_platform: r.tq ? "mobile_web" : "desktop_web",
                                                guild_id: Se.Z.getGuildId(),
                                                channel_id: Oe.Z.getChannelId()
                                            });
                                            else if (t === S.g.ACTIVITY_BOOKMARK);
                                            else if (t === S.g.EMBEDDED_ACTIVITY_INVITE);
                                            else if (t === S.g.GUILD_PRODUCT);
                                            else if (t === S.g.SERVER_SHOP);
                                            else if (t !== S.g.CLYDE_PROFILE) throw Error("Unknown coded link type: ".concat(t))
                                        }))
                                    }({
                                        content: u,
                                        channelId: e,
                                        messageId: l.body.id,
                                        location: null != g ? g : "chat_input",
                                        suggested: v
                                    });
                                    ! function(e, t, n, r, o) {
                                        (0, Te.Q_)(e).forEach((function(e) {
                                            var i = E.Z.getChannel(t);
                                            null != i && s.ZP.trackWithMetadata(B.rMx.GIFT_CODE_SENT, {
                                                location: r,
                                                gift_code: e,
                                                guild_id: i.getGuildId(),
                                                channel_id: i.id,
                                                channel_type: i.type,
                                                message_id: n,
                                                automatic_send: o
                                            })
                                        }))
                                    }(u, e, l.body.id, null != g ? g : "chat_input", !!n.isGiftLinkSentOnBehalfOfUser);
                                    t(l)
                                } else {
                                    var h;
                                    Ye.log("Failed to send message", {
                                        hasErr: l.hasErr,
                                        status: l.status,
                                        code: null === (h = l.body) || void 0 === h ? void 0 : h.code,
                                        error: l.err
                                    });
                                    var p = !1;
                                    if (l.hasErr) "ABORTED" === l.err.code && (p = !0);
                                    else if (l.status >= 400 && l.status < 500 && l.body)
                                        if (l.body.code === B.evJ.SLOWMODE_RATE_LIMITED) {
                                            var y = l.body.retry_after;
                                            null != y && y > 0 && a.Z.dispatch({
                                                type: "SLOWMODE_SET_COOLDOWN",
                                                channelId: e,
                                                slowmodeType: Ie.S.SendMessage,
                                                cooldownMs: 1e3 * y
                                            })
                                        } else D.U8.has(l.body.code) ? a.Z.dispatch({
                                            type: "MESSAGE_SEND_FAILED_AUTOMOD",
                                            messageData: x,
                                            errorResponseBody: {
                                                code: l.body.code,
                                                message: l.body.message
                                            }
                                        }) : l.body.code === B.evJ.POGGERMODE_TEMPORARILY_DISABLED ? a.Z.dispatch({
                                            type: "POGGERMODE_TEMPORARILY_DISABLED"
                                        }) : l.body.code === B.evJ.CLYDE_CONSENT_REQUIRED ? a.Z.dispatch({
                                            type: "MESSAGE_FAILED_CLYDE_CONSENT",
                                            messageId: Z,
                                            channelId: e
                                        }) : $e.sendClydeError(e, l.body.code);
                                    if (p) $e.deleteMessage(e, Z, !0);
                                    else {
                                        a.Z.dispatch({
                                            type: "MESSAGE_SEND_FAILED",
                                            messageId: Z,
                                            channelId: e
                                        });
                                        (0, re.x)({
                                            failureCode: l.hasErr ? void 0 : l.status,
                                            errorMessage: l.hasErr ? l.err.message : void 0
                                        })
                                    }
                                    o(l)
                                }
                            }))
                        }))
                    },
                    startEditMessage: function(e, t, n) {
                        a.Z.dispatch({
                            type: "MESSAGE_START_EDIT",
                            channelId: e,
                            messageId: t,
                            content: n
                        })
                    },
                    updateEditMessage: function(e, t, n) {
                        a.Z.dispatch({
                            type: "MESSAGE_UPDATE_EDIT",
                            channelId: e,
                            textValue: t,
                            richValue: n
                        })
                    },
                    endEditMessage: function(e, t) {
                        a.Z.dispatch({
                            type: "MESSAGE_END_EDIT",
                            channelId: e,
                            response: t
                        })
                    },
                    editMessage: function(e, t, n) {
                        var r = n.content;
                        return je((function() {
                            var n, o;
                            return He(this, (function(u) {
                                switch (u.label) {
                                    case 0:
                                        return [4, pe.Z.unarchiveThreadIfNecessary(e)];
                                    case 1:
                                        u.sent();
                                        n = function(e, t) {
                                            var n = v.Z.getMessage(e, t);
                                            if (null != n && n.type === B.uaV.REPLY) {
                                                var r = fe.Z.getMessageByReference(n.messageReference);
                                                if (r.state === fe.Y.LOADED && !n.mentions.includes(r.message.author.id)) return {
                                                    parse: Object.values(B.hCA),
                                                    replied_user: !1
                                                }
                                            }
                                        }(e, t);
                                        o = {
                                            channelId: e,
                                            messageId: t,
                                            content: r,
                                            allowed_mentions: n
                                        };
                                        l.ZP.enqueue({
                                            type: l.$V.EDIT,
                                            message: o
                                        }, (function(n) {
                                            var r = !n.hasErr && D.U8.has(n.body.code);
                                            if (r) {
                                                var u = {
                                                    type: l.$V.EDIT,
                                                    message: o
                                                };
                                                a.Z.dispatch({
                                                    type: "MESSAGE_EDIT_FAILED_AUTOMOD",
                                                    messageData: u,
                                                    errorResponseBody: {
                                                        code: n.body.code,
                                                        message: n.body.message
                                                    }
                                                })
                                            }
                                            n.hasErr ? i.uv.announce(Re.Z.Messages.A11Y_ANNOUNCEMENT_MESSAGE_EDITED_FAILED) : r ? i.uv.announce(Re.Z.Messages.A11Y_ANNOUNCEMENT_MESSAGE_EDITED_AUTOMOD_BLOCKED) : i.uv.announce(Re.Z.Messages.A11Y_ANNOUNCEMENT_MESSAGE_EDITED);
                                            $e.endEditMessage(e, n.hasErr ? void 0 : n);
                                            $e.focusMessage({
                                                channelId: e,
                                                messageId: t
                                            })
                                        }));
                                        return [2]
                                }
                            }))
                        }))()
                    },
                    suppressEmbeds: function(e, t) {
                        return je((function() {
                            return He(this, (function(n) {
                                switch (n.label) {
                                    case 0:
                                        return [4, pe.Z.unarchiveThreadIfNecessary(e)];
                                    case 1:
                                        n.sent();
                                        o.ZP.patch({
                                            url: B.ANM.MESSAGE(e, t),
                                            body: {
                                                flags: B.iLy.SUPPRESS_EMBEDS
                                            },
                                            oldFormErrors: !0
                                        });
                                        return [2]
                                }
                            }))
                        }))()
                    },
                    patchMessageAttachments: function(e, t, n) {
                        return je((function() {
                            return He(this, (function(r) {
                                switch (r.label) {
                                    case 0:
                                        return [4, pe.Z.unarchiveThreadIfNecessary(e)];
                                    case 1:
                                        r.sent();
                                        o.ZP.patch({
                                            url: B.ANM.MESSAGE(e, t),
                                            body: {
                                                attachments: n
                                            },
                                            oldFormErrors: !0
                                        });
                                        return [2]
                                }
                            }))
                        }))()
                    },
                    deleteMessage: function(e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        return je((function() {
                            var r, u;
                            return He(this, (function(l) {
                                switch (l.label) {
                                    case 0:
                                        r = function() {
                                            a.Z.dispatch({
                                                type: "MESSAGE_DELETE",
                                                id: t,
                                                channelId: e
                                            }).then((function() {
                                                i.uv.announce(Re.Z.Messages.A11Y_ANNOUNCEMENT_MESSAGE_DELETED)
                                            }))
                                        };
                                        if (!n) return [3, 1];
                                        r();
                                        return [3, 3];
                                    case 1:
                                        return [4, pe.Z.unarchiveThreadIfNecessary(e)];
                                    case 2:
                                        l.sent();
                                        o.ZP.delete({
                                            url: B.ANM.MESSAGE(e, t),
                                            oldFormErrors: !0
                                        }).then((function() {
                                            r()
                                        }));
                                        l.label = 3;
                                    case 3:
                                        (null == (u = v.Z.getMessage(e, t)) ? void 0 : u.type) === B.uaV.GUILD_INVITE_REMINDER && (0, oe.O)();
                                        return [2]
                                }
                            }))
                        }))()
                    },
                    dismissAutomatedMessage: function(e) {
                        null != e.loggingName && s.ZP.trackWithMetadata(B.rMx.AUTOMATED_MESSAGE_DISMISSED, {
                            message_name: e.loggingName,
                            message_author: e.author.username
                        });
                        this.deleteMessage(e.channel_id, e.id, !0)
                    },
                    revealMessage: function(e, t) {
                        a.Z.dispatch({
                            type: "MESSAGE_REVEAL",
                            channelId: e,
                            messageId: t
                        })
                    },
                    crosspostMessage: function(e, t) {
                        return o.ZP.post({
                            url: B.ANM.MESSAGE_CROSSPOST(e, t),
                            oldFormErrors: !0
                        }).catch((function(e) {
                            var t;
                            t = 429 === e.status ? Re.Z.Messages.PUBLISH_FOLLOWED_NEWS_FAIL_BODY.format({
                                retryAfter: Math.floor(e.body.retry_after / 60)
                            }) : Re.Z.Messages.PUBLISH_FOLLOWED_NEWS_GENERIC_BODY;
                            we.Z.show({
                                title: Re.Z.Messages.PUBLISH_FOLLOWED_NEWS_FAIL_TITLE,
                                body: t,
                                confirmText: Re.Z.Messages.OKAY
                            })
                        }))
                    },
                    trackInvite: Je
                };
            const qe = $e
        },
        983622: (e, t, n) => {
            n.d(t, {
                ZP: () => D
            });
            var r = n(112916),
                o = n(296602),
                i = n(652555),
                a = n(61209),
                u = n(22176),
                l = n(247075),
                s = n(21372),
                c = n(473903);

            function f(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function d(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            a = !0,
                            u = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            u = !0;
                            o = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (u) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || p(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function h(e) {
                return function(e) {
                    if (Array.isArray(e)) return f(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || p(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function p(e, t) {
                if (e) {
                    if ("string" == typeof e) return f(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    return "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? f(e, t) : void 0
                }
            }
            var y = function() {
                    function e() {
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e)
                    }
                    e.fromMessage = function(t, n, r, o) {
                        var i = d(e.deriveMemberUsers(t, r), 2),
                            a = i[0],
                            u = i[1];
                        return {
                            id: r.id,
                            channelId: n,
                            message: r,
                            members: a,
                            users: u,
                            connectionId: o
                        }
                    };
                    e.deriveMemberUsers = function(e, t) {
                        var n, r, o, i = new Set([t.author.id, null === (n = t.interaction) || void 0 === n ? void 0 : n.user.id].concat(h(null !== (o = null === (r = t.mentions) || void 0 === r ? void 0 : r.map((function(e) {
                                return e.id
                            }))) && void 0 !== o ? o : []))),
                            a = [],
                            u = [],
                            l = !0,
                            f = !1,
                            d = void 0;
                        try {
                            for (var p, y = i[Symbol.iterator](); !(l = (p = y.next()).done); l = !0) {
                                var E = p.value;
                                if (null != E) {
                                    var g = c.default.getUser(E),
                                        v = s.ZP.getTrueMember(null != e ? e : "", E);
                                    null != g && u.push(g);
                                    null != v && a.push(v)
                                }
                            }
                        } catch (e) {
                            f = !0;
                            d = e
                        } finally {
                            try {
                                l || null == y.return || y.return()
                            } finally {
                                if (f) throw d
                            }
                        }
                        return [a, u]
                    };
                    return e
                }(),
                E = n(524391),
                g = n(345551),
                v = n(994130);

            function m(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function _(e, t, n, r, o, i, a) {
                try {
                    var u = e[i](a),
                        l = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(l) : Promise.resolve(l).then(r, o)
            }

            function b(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);

                        function a(e) {
                            _(i, r, o, a, u, "next", e)
                        }

                        function u(e) {
                            _(i, r, o, a, u, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function O(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function S(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function I(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            a = !0,
                            u = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            u = !0;
                            o = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (u) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return m(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return m(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var M = function(e, t) {
                    var n, r, o, i, a = {
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
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function u(i) {
                        return function(u) {
                            return function(i) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                    (r = 0, o) && (i = [2 & i[0], o.value]);
                                    switch (i[0]) {
                                        case 0:
                                        case 1:
                                            o = i;
                                            break;
                                        case 4:
                                            a.label++;
                                            return {
                                                value: i[1], done: !1
                                            };
                                        case 5:
                                            a.label++;
                                            r = i[1];
                                            i = [0];
                                            continue;
                                        case 7:
                                            i = a.ops.pop();
                                            a.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = a.trys,
                                                    o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                a.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && a.label < o[1]) {
                                                a.label = o[1];
                                                o = i;
                                                break
                                            }
                                            if (o && a.label < o[2]) {
                                                a.label = o[2];
                                                a.ops.push(i);
                                                break
                                            }
                                            o[2] && a.ops.pop();
                                            a.trys.pop();
                                            continue
                                    }
                                    i = t.call(e, a)
                                } catch (e) {
                                    i = [6, e];
                                    r = 0
                                } finally {
                                    n = o = 0
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
                A = new o.Z("Messages"),
                T = function() {
                    function e(t) {
                        O(this, e);
                        this.connectionId = null;
                        this.users = [];
                        this.members = [];
                        this.messages = [];
                        if (t.length > 0) {
                            var n, r = null === (n = t[0]) || void 0 === n ? void 0 : n.connectionId,
                                o = I(e.computeUsersAndMembers(t), 2),
                                i = o[0],
                                a = o[1];
                            t.length > 0 && t.every((function(e) {
                                return e.connectionId === r
                            })) && (this.connectionId = r);
                            this.users = i;
                            this.members = a;
                            this.messages = t.map((function(e) {
                                return e.message
                            }))
                        }
                    }
                    e.computeUsersAndMembers = function(e) {
                        (0, v.Z)(e);
                        var t = new Map,
                            n = new Map,
                            r = !0,
                            o = !1,
                            i = void 0;
                        try {
                            for (var a, u = e[Symbol.iterator](); !(r = (a = u.next()).done); r = !0) {
                                var l = a.value;
                                this.addIntoMap(t, l.users, (function(e) {
                                    return e.id
                                }));
                                this.addIntoMap(n, l.members, (function(e) {
                                    return e.userId
                                }))
                            }
                        } catch (e) {
                            o = !0;
                            i = e
                        } finally {
                            try {
                                r || null == u.return || u.return()
                            } finally {
                                if (o) throw i
                            }
                        }
                        return [Array.from(t.values()), Array.from(n.values())]
                    };
                    e.addIntoMap = function(e, t, n) {
                        var r = !0,
                            o = !1,
                            i = void 0;
                        try {
                            for (var a, u = t[Symbol.iterator](); !(r = (a = u.next()).done); r = !0) {
                                var l = a.value,
                                    s = n(l),
                                    c = e.get(s);
                                (null == c || c.incomplete && !l.incomplete) && e.set(s, l)
                            }
                        } catch (e) {
                            o = !0;
                            i = e
                        } finally {
                            try {
                                r || null == u.return || u.return()
                            } finally {
                                if (o) throw i
                            }
                        }
                    };
                    return e
                }();
            const D = new(function() {
                function e() {
                    var t = this;
                    O(this, e);
                    this.actions = {
                        CHANNEL_DELETE: function(e, n) {
                            return t.handleChannelDelete(e, n)
                        },
                        GUILD_DELETE: function(e, n) {
                            return t.handleGuildDelete(e, n)
                        },
                        LOAD_MESSAGES_SUCCESS: function(e, n) {
                            return t.handleLoadMessagesSuccess(e, n)
                        },
                        MESSAGE_CREATE: function(e, n) {
                            return t.handleMessageCreate(e, n)
                        },
                        MESSAGE_DELETE_BULK: function(e, n) {
                            return t.handleMessageDeleteBulk(e, n)
                        },
                        MESSAGE_DELETE: function(e, n) {
                            return t.handleMessageDelete(e, n)
                        },
                        MESSAGE_PREVIEWS_LOADED: function(e, n) {
                            return t.handleMessagePreviewsLoaded(e, n)
                        },
                        MESSAGE_UPDATE: function(e, n) {
                            return t.handleMessageUpdate(e, n)
                        }
                    }
                }
                var t = e.prototype;
                t.startupLoad = function(e, t, n, r) {
                    return b((function() {
                        var o;
                        return M(this, (function(i) {
                            switch (i.label) {
                                case 0:
                                    return [4, l.Z.messages(e).getLatest(t, n, r)];
                                case 1:
                                    o = i.sent();
                                    return [2, new T(o)]
                            }
                        }))
                    }))()
                };
                t.load = function(e, t, n) {
                    return b((function() {
                        var r, o;
                        return M(this, (function(i) {
                            switch (i.label) {
                                case 0:
                                    r = a.Z.getBasicChannel(t);
                                    return null != t && null != r && (0, g.v)(r) ? [3, 1] : [2, new T([])];
                                case 1:
                                    return [4, l.Z.messages(e).getLatest(r.guild_id, t, n)];
                                case 2:
                                    o = i.sent();
                                    return [2, new T(o)];
                                case 3:
                                    return [2]
                            }
                        }))
                    }))()
                };
                t.handleMessageCreate = function(e, t) {
                    e.optimistic || e.isPushNotification || null != e.sendMessageOptions || (0, g.$)(e.channelId) && this.upsertOne(e.guildId, e.channelId, e.message, t)
                };
                t.handleMessageUpdate = function(e, t) {
                    if (null != e.message.id && null != e.message.channel_id && (0, g.$)(e.message.channel_id)) {
                        null != (n = e.message).author && null != n.content && null != n.mentions && null != n.timestamp ? this.upsertOne(e.guildId, e.message.channel_id, e.message, t) : this.updateOne(e.guildId, e.message.channel_id, e.message, t);
                        var n
                    }
                };
                t.handleMessagePreviewsLoaded = function(e, t) {
                    var n = !0,
                        r = !1,
                        o = void 0;
                    try {
                        for (var i, a = e.messages[Symbol.iterator](); !(n = (i = a.next()).done); n = !0) {
                            var u = i.value;
                            (0, g.$)(u.channel_id) && this.insertStale(e.guildId, u.channel_id, u, t)
                        }
                    } catch (e) {
                        r = !0;
                        o = e
                    } finally {
                        try {
                            n || null == a.return || a.return()
                        } finally {
                            if (r) throw o
                        }
                    }
                };
                t.handleLoadMessagesSuccess = function(e, t) {
                    var n = a.Z.getBasicChannel(e.channelId);
                    null != n && (0, g.$)(e.channelId) && this.upsertMany(n.guild_id, e.channelId, e.messages, t)
                };
                t.handleMessageDelete = function(e, t) {
                    null != e.id ? this.deleteOne(e.guildId, e.channelId, e.id, t) : u.Z.captureException(new Error("MESSAGE_DELETE with a null id (guild_id: ".concat(e.guildId, ", channel_id: ").concat(e.channelId, ").")))
                };
                t.handleMessageDeleteBulk = function(e, t) {
                    var n = !0,
                        r = !1,
                        o = void 0;
                    try {
                        for (var i, a = e.ids[Symbol.iterator](); !(n = (i = a.next()).done); n = !0) {
                            var u = i.value;
                            this.deleteOne(e.guildId, e.channelId, u, t)
                        }
                    } catch (e) {
                        r = !0;
                        o = e
                    } finally {
                        try {
                            n || null == a.return || a.return()
                        } finally {
                            if (r) throw o
                        }
                    }
                };
                t.handleChannelDelete = function(e, t) {
                    this.deleteChannel(e.channel.guild_id, e.channel.id, t)
                };
                t.handleGuildDelete = function(e, t) {
                    e.guild.unavailable || this.deleteGuild(e.guild.id, t)
                };
                t.handleReset = function() {};
                t.insertStale = function(e, t, n, o) {
                    var a = l.Z.messagesTransaction(o),
                        u = i.Z.lastTimeConnectedChanged();
                    a.put(e, t, y.fromMessage(e, t, n, u), r.Sn.Skip)
                };
                t.upsertOne = function(e, t, n, o) {
                    var a = l.Z.messagesTransaction(o),
                        u = i.Z.lastTimeConnectedChanged();
                    a.put(e, t, y.fromMessage(e, t, n, u), r.Sn.Replace);
                    a.trimChannel(e, t, E.ZP.saveLimit(t))
                };
                t.upsertMany = function(e, t, n, r) {
                    var o = l.Z.messagesTransaction(r),
                        a = i.Z.lastTimeConnectedChanged(),
                        u = !0,
                        s = !1,
                        c = void 0;
                    try {
                        for (var f, d = n[Symbol.iterator](); !(u = (f = d.next()).done); u = !0) {
                            var h = f.value;
                            o.put(e, t, y.fromMessage(e, t, h, a))
                        }
                    } catch (e) {
                        s = !0;
                        c = e
                    } finally {
                        try {
                            u || null == d.return || d.return()
                        } finally {
                            if (s) throw c
                        }
                    }
                    o.trimChannel(e, t, E.ZP.saveLimit(t))
                };
                t.updateOne = function(e, t, n, r) {
                    return b((function() {
                        var o, a, u;
                        return M(this, (function(s) {
                            switch (s.label) {
                                case 0:
                                    if (null == n.id) {
                                        A.warn("updateOne: message.id is null; cannot update a message if we do not know its id.");
                                        return [2]
                                    }
                                    return [4, (o = l.Z.messages(r.database)).get(e, t, n.id)];
                                case 1:
                                    a = s.sent();
                                    u = i.Z.lastTimeConnectedChanged();
                                    null != a && o.put(e, t, y.fromMessage(e, t, function(e) {
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
                                    }({}, a.message, n), u));
                                    return [2]
                            }
                        }))
                    }))()
                };
                t.deleteOne = function(e, t, n, r) {
                    l.Z.messagesTransaction(r).deleteMessage(e, t, n)
                };
                t.deleteChannel = function(e, t, n) {
                    l.Z.messagesTransaction(n).deleteChannel(e, t)
                };
                t.deleteGuild = function(e, t) {
                    l.Z.messagesTransaction(t).deleteGuild(e)
                };
                return e
            }())
        },
        524391: (e, t, n) => {
            n.d(t, {
                ZP: () => F
            });
            var r = n(202351),
                o = n(744564),
                i = n(61209),
                a = n(27851),
                u = n(715107),
                l = n(431187);
            var s = function() {
                function e(t) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e);
                    this.index = 0;
                    this.items = t
                }
                var t = e.prototype;
                t[Symbol.iterator] = function() {
                    return this
                };
                t.next = function() {
                    for (; this.index < this.items.length;) {
                        var e = this.items[this.index].next();
                        if (!e.done) return e;
                        this.index += 1
                    }
                    return {
                        done: !0,
                        value: void 0
                    }
                };
                return e
            }();

            function c() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return new s(t)
            }

            function f(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function d(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(e, r.key, r)
                }
            }

            function h(e) {
                return function(e) {
                    if (Array.isArray(e)) return f(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return f(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return f(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var p = function() {
                function e(t) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e);
                    this.items = new Map;
                    this.limit = t
                }
                var t = e.prototype;
                t[Symbol.iterator] = function() {
                    return this.items.entries()
                };
                t.entries = function() {
                    return this.items.entries()
                };
                t.keys = function() {
                    return this.items.keys()
                };
                t.values = function() {
                    return this.items.values()
                };
                t.ordered = function() {
                    return h(this.items.values()).reverse()
                };
                t.clear = function() {
                    this.items.clear()
                };
                t.has = function(e) {
                    return this.items.has(e)
                };
                t.get = function(e) {
                    return this.items.get(e)
                };
                t.put = function(e, t) {
                    this.items.delete(e);
                    this.items.set(e, t);
                    if (this.items.size > this.limit) {
                        var n = this.oldestKey(),
                            r = this.items.get(n);
                        this.items.delete(n);
                        return [n, r]
                    }
                };
                t.delete = function(e) {
                    return this.items.delete(e)
                };
                t.oldestKey = function() {
                    return this.items.keys().next().value
                };
                ! function(e, t, n) {
                    t && d(e.prototype, t);
                    n && d(e, n)
                }(e, [{
                    key: "length",
                    get: function() {
                        return this.items.size
                    }
                }, {
                    key: "capacity",
                    get: function() {
                        return this.limit
                    }
                }]);
                return e
            }();

            function y(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function E(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(e, r.key, r)
                }
            }

            function g(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            a = !0,
                            u = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            u = !0;
                            o = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (u) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return y(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return y(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var v = function() {
                    function e(t, n) {
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e);
                        this.primary = new p(t);
                        this.extended = new p(n)
                    }
                    var t = e.prototype;
                    t.clear = function() {
                        this.primary.clear();
                        this.extended.clear()
                    };
                    t.has = function(e) {
                        return this.primary.has(e)
                    };
                    t.hasExtended = function(e) {
                        return this.primary.has(e) || this.extended.has(e)
                    };
                    t.get = function(e) {
                        return this.primary.get(e)
                    };
                    t.put = function(e, t) {
                        var n = this.primary.put(e, t);
                        void 0 !== n && this.extended.put(n[0], n[1])
                    };
                    t.delete = function(e) {
                        var t = this.primary.delete(e),
                            n = this.extended.delete(e);
                        this.upstreamItems();
                        return t || n
                    };
                    t.upstreamItems = function() {
                        if (this.canUpstreamItems()) {
                            var e = !0,
                                t = !1,
                                n = void 0;
                            try {
                                for (var r, o = this.extended.entries()[Symbol.iterator](); !(e = (r = o.next()).done); e = !0) {
                                    var i = g(r.value, 2),
                                        a = i[0],
                                        u = i[1];
                                    this.primary.put(a, u);
                                    this.extended.delete(a);
                                    if (!this.canUpstreamItems()) break
                                }
                            } catch (e) {
                                t = !0;
                                n = e
                            } finally {
                                try {
                                    e || null == o.return || o.return()
                                } finally {
                                    if (t) throw n
                                }
                            }
                        }
                    };
                    t.canUpstreamItems = function() {
                        return this.primary.length < this.primary.capacity && this.extended.length > 0
                    };
                    t.entries = function() {
                        return this.primary.entries()
                    };
                    t.keys = function() {
                        return this.primary.keys()
                    };
                    t.values = function() {
                        return this.primary.values()
                    };
                    t.allEntries = function() {
                        return c(this.extended.entries(), this.primary.entries())
                    };
                    t.allKeys = function() {
                        return c(this.extended.keys(), this.primary.keys())
                    };
                    t.allValues = function() {
                        return c(this.extended.values(), this.primary.values())
                    };
                    ! function(e, t, n) {
                        t && E(e.prototype, t);
                        n && E(e, n)
                    }(e, [{
                        key: "totalLength",
                        get: function() {
                            return this.primary.length + this.extended.length
                        }
                    }, {
                        key: "primaryCapacity",
                        get: function() {
                            return this.primary.capacity
                        }
                    }, {
                        key: "extendedCapacity",
                        get: function() {
                            return this.extended.capacity
                        }
                    }]);
                    return e
                }(),
                m = n(2590);

            function _(e) {
                var t, n = null !== (t = a.Z.getMemberCount(null == e ? void 0 : e.guild_id)) && void 0 !== t ? t : 0;
                return null != e && e.type !== m.d4z.DM && e.type !== m.d4z.GROUP_DM && n >= 1e4
            }
            var b = n(345551),
                O = n(107218);

            function S(e, t) {
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
                        var r, o, i = [],
                            a = !0,
                            u = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            u = !0;
                            o = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (u) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return S(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return S(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function M(e) {
                return e.type === m.d4z.DM || e.type === m.d4z.GROUP_DM || e.type === m.d4z.GUILD_TEXT
            }

            function A(e, t, n) {
                n.hasExtended(t.id) || n.put(t.id, {
                    guildId: e,
                    channelId: t.id,
                    channelType: t.type,
                    fallback: !0
                })
            }

            function T(e, t) {
                var n = !0,
                    r = !1,
                    o = void 0;
                try {
                    for (var i, a = t.allEntries()[Symbol.iterator](); !(n = (i = a.next()).done); n = !0) {
                        var u = I(i.value, 2),
                            l = u[0],
                            s = u[1];
                        e.put(l, s)
                    }
                } catch (e) {
                    r = !0;
                    o = e
                } finally {
                    try {
                        n || null == a.return || a.return()
                    } finally {
                        if (r) throw o
                    }
                }
                return e
            }

            function D(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function C(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function L(e) {
                L = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return L(e)
            }

            function w(e, t) {
                return !t || "object" !== Z(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function P(e, t) {
                P = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return P(e, t)
            }

            function R(e) {
                return function(e) {
                    if (Array.isArray(e)) return D(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return D(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return D(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var Z = function(e) {
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
                    var n, r = L(e);
                    if (t) {
                        var o = L(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return w(this, n)
                }
            }
            Math.max(25, 25, 1);
            var j = null,
                U = new v(750, 500),
                G = new p(15),
                k = !1,
                B = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        t && P(e, t)
                    }(n, e);
                    var t = N(n);

                    function n() {
                        C(this, n);
                        return t.apply(this, arguments)
                    }
                    var r = n.prototype;
                    r.initialize = function() {
                        this.waitFor(i.Z);
                        this.waitFor(u.Z);
                        this.waitFor(a.Z);
                        this.syncWith([l.Z], (function() {
                            return !0
                        }));
                        this.syncWith([u.Z], x)
                    };
                    r.canEvictOrphans = function() {
                        return k
                    };
                    r.saveLimit = function(e) {
                        var t = i.Z.getBasicChannel(e);
                        return null != t && function(e) {
                            return null == e.guild_id
                        }(t) || null != t && U.has(e) ? 25 : 1
                    };
                    r.getSaveableChannels = function() {
                        var e = i.Z.getChannelIds(null).map((function(e) {
                            return {
                                guildId: null,
                                channelId: e
                            }
                        }));
                        return l.Z.isLowDisk ? null != j ? R(e).concat([j]) : e : R(e).concat(R(U.values()))
                    };
                    r.toSnapshot = function() {
                        return {
                            v: 1,
                            channels: R(U.allValues()).filter((function(e) {
                                return !e.fallback
                            })),
                            penalized: R(G.keys()),
                            lastChannel: j
                        }
                    };
                    n.mergeSnapshot = function(e) {
                        var t = U,
                            n = G;
                        U = new v(U.primaryCapacity, U.extendedCapacity);
                        G = new p(G.capacity);
                        j = null != j ? j : e.lastChannel;
                        for (var r = 0, o = [e.channels, t.values()]; r < o.length; r++) {
                            var i = o[r],
                                a = !0,
                                u = !1,
                                l = void 0;
                            try {
                                for (var s, c = i[Symbol.iterator](); !(a = (s = c.next()).done); a = !0) {
                                    var f = s.value;
                                    f.fallback || U.put(f.channelId, f)
                                }
                            } catch (e) {
                                u = !0;
                                l = e
                            } finally {
                                try {
                                    a || null == c.return || c.return()
                                } finally {
                                    if (u) throw l
                                }
                            }
                        }
                        for (var d = 0, h = [e.penalized, n.keys()]; d < h.length; d++) {
                            var y = h[d],
                                E = !0,
                                g = !1,
                                m = void 0;
                            try {
                                for (var _, b = y[Symbol.iterator](); !(E = (_ = b.next()).done); E = !0) {
                                    var O = _.value;
                                    G.put(O, null)
                                }
                            } catch (e) {
                                g = !0;
                                m = e
                            } finally {
                                try {
                                    E || null == b.return || b.return()
                                } finally {
                                    if (g) throw m
                                }
                            }
                        }
                    };
                    n.recordChannel = function(e) {
                        var t = i.Z.getBasicChannel(e);
                        if (null != t && (0, b.v)(t)) {
                            var n, r = {
                                guildId: null !== (n = t.guild_id) && void 0 !== n ? n : null,
                                channelId: e,
                                channelType: t.type
                            };
                            j = r;
                            U.put(e, r);
                            if (_(t)) {
                                null != G.put(e, null) && U.delete(e)
                            }
                        }
                    };
                    n.deleteChannel = function(e) {
                        U.delete(e)
                    };
                    n.deleteGuild = function(e) {
                        var t = !0,
                            n = !1,
                            r = void 0;
                        try {
                            for (var o, i = U.allValues()[Symbol.iterator](); !(t = (o = i.next()).done); t = !0) {
                                var a = o.value;
                                a.guildId === e && U.delete(a.channelId)
                            }
                        } catch (e) {
                            n = !0;
                            r = e
                        } finally {
                            try {
                                t || null == i.return || i.return()
                            } finally {
                                if (n) throw r
                            }
                        }
                    };
                    n.dropUnreachableChannels = function() {
                        var e = !0,
                            t = !1,
                            r = void 0;
                        try {
                            for (var o, a = U.keys()[Symbol.iterator](); !(e = (o = a.next()).done); e = !0) {
                                var u = o.value,
                                    l = i.Z.getBasicChannel(u);
                                (0, b.v)(l) || n.deleteChannel(u)
                            }
                        } catch (e) {
                            t = !0;
                            r = e
                        } finally {
                            try {
                                e || null == a.return || a.return()
                            } finally {
                                if (t) throw r
                            }
                        }
                    };
                    n.deleteUnreadableGuildChannels = function(e) {
                        var t = !0,
                            r = !1,
                            o = void 0;
                        try {
                            for (var i, a = U.values()[Symbol.iterator](); !(t = (i = a.next()).done); t = !0) {
                                var u = i.value;
                                e !== u.guildId || (0, b.$)(u.channelId) || n.deleteChannel(u.channelId)
                            }
                        } catch (e) {
                            r = !0;
                            o = e
                        } finally {
                            try {
                                t || null == a.return || a.return()
                            } finally {
                                if (r) throw o
                            }
                        }
                    };
                    n.replaceLru = function(e) {
                        U = e
                    };
                    return n
                }(r.ZP.Store);

            function x() {
                var e = u.Z.getChannelId();
                null != e && B.recordChannel(e)
            }

            function V(e) {
                var t = e.id,
                    n = (0, b.v)(e),
                    r = u.Z.getChannelId();
                n && t === r && B.recordChannel(t);
                n || B.deleteChannel(t)
            }
            const F = new B(o.Z, {
                CACHE_LOADED_LAZY_NO_CACHE: function(e) {
                    k = !0
                },
                CACHE_LOADED_LAZY: function(e) {
                    k = !0;
                    null != e.saveableChannels && B.mergeSnapshot(e.saveableChannels)
                },
                CHANNEL_DELETE: function(e) {
                    B.deleteChannel(e.channel.id)
                },
                CHANNEL_UPDATES: function(e) {
                    var t = !0,
                        n = !1,
                        r = void 0;
                    try {
                        for (var o, i = e.channels[Symbol.iterator](); !(t = (o = i.next()).done); t = !0) {
                            V(o.value)
                        }
                    } catch (e) {
                        n = !0;
                        r = e
                    } finally {
                        try {
                            t || null == i.return || i.return()
                        } finally {
                            if (n) throw r
                        }
                    }
                },
                CONNECTION_OPEN_SUPPLEMENTAL: function() {
                    B.dropUnreachableChannels();
                    B.replaceLru(function(e, t) {
                        if (e.totalLength >= t) return e;
                        var n = new v(e.primaryCapacity, e.extendedCapacity),
                            r = t - e.totalLength,
                            o = !0,
                            a = !1,
                            u = void 0;
                        try {
                            for (var l, s = O.Z.getGuildFolders()[Symbol.iterator](); !(o = (l = s.next()).done); o = !0) {
                                var c = l.value,
                                    f = !0,
                                    d = !1,
                                    h = void 0;
                                try {
                                    for (var p, y = c.guildIds[Symbol.iterator](); !(f = (p = y.next()).done); f = !0) {
                                        var E = p.value,
                                            g = !0,
                                            m = !1,
                                            S = void 0;
                                        try {
                                            for (var I, D = Object.values(i.Z.getMutableBasicGuildChannelsForGuild(E))[Symbol.iterator](); !(g = (I = D.next()).done); g = !0) {
                                                var C = I.value;
                                                M(C) && (0, b.v)(C) && !_(C) && A(E, C, n);
                                                if (n.totalLength >= r) return T(n, e)
                                            }
                                        } catch (e) {
                                            m = !0;
                                            S = e
                                        } finally {
                                            try {
                                                g || null == D.return || D.return()
                                            } finally {
                                                if (m) throw S
                                            }
                                        }
                                    }
                                } catch (e) {
                                    d = !0;
                                    h = e
                                } finally {
                                    try {
                                        f || null == y.return || y.return()
                                    } finally {
                                        if (d) throw h
                                    }
                                }
                            }
                        } catch (e) {
                            a = !0;
                            u = e
                        } finally {
                            try {
                                o || null == s.return || s.return()
                            } finally {
                                if (a) throw u
                            }
                        }
                        return T(n, e)
                    }(U, 1250))
                },
                GUILD_DELETE: function(e) {
                    if (!e.guild.unavailable) {
                        B.deleteGuild(e.guild.id);
                        return !0
                    }
                    return !1
                },
                LOGIN_SUCCESS: function(e) {
                    U.clear();
                    G.clear();
                    k = !1
                },
                THREAD_DELETE: function(e) {
                    B.deleteChannel(e.channel.id)
                },
                THREAD_UPDATE: function(e) {
                    V(e.channel)
                }
            })
        },
        345551: (e, t, n) => {
            n.d(t, {
                v: () => l,
                $: () => s
            });
            var r = n(382060),
                o = n(61209),
                i = n(682776),
                a = n(2590),
                u = a.S7T.VIEW_CHANNEL | a.S7T.READ_MESSAGE_HISTORY;

            function l(e) {
                return null != e && (e.type === a.d4z.DM || e.type === a.d4z.GROUP_DM || (0, r.Qm)(e.type) && i.Z.canBasicChannel(u, e))
            }

            function s(e) {
                return null != e && l(o.Z.getBasicChannel(e))
            }
        },
        431187: (e, t, n) => {
            n.d(t, {
                Z: () => y
            });
            var r = n(95560),
                o = n(744564),
                i = n(296602),
                a = n(247075);

            function u(e, t, n, r, o, i, a) {
                try {
                    var u = e[i](a),
                        l = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(l) : Promise.resolve(l).then(r, o)
            }

            function l(e) {
                l = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return l(e)
            }

            function s(e, t) {
                return !t || "object" !== f(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function c(e, t) {
                c = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return c(e, t)
            }
            var f = function(e) {
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
                    var n, r = l(e);
                    if (t) {
                        var o = l(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return s(this, n)
                }
            }
            var h = function(e, t) {
                    var n, r, o, i, a = {
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
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function u(i) {
                        return function(u) {
                            return function(i) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                    (r = 0, o) && (i = [2 & i[0], o.value]);
                                    switch (i[0]) {
                                        case 0:
                                        case 1:
                                            o = i;
                                            break;
                                        case 4:
                                            a.label++;
                                            return {
                                                value: i[1], done: !1
                                            };
                                        case 5:
                                            a.label++;
                                            r = i[1];
                                            i = [0];
                                            continue;
                                        case 7:
                                            i = a.ops.pop();
                                            a.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = a.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                a.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && a.label < o[1]) {
                                                a.label = o[1];
                                                o = i;
                                                break
                                            }
                                            if (o && a.label < o[2]) {
                                                a.label = o[2];
                                                a.ops.push(i);
                                                break
                                            }
                                            o[2] && a.ops.pop();
                                            a.trys.pop();
                                            continue
                                    }
                                    i = t.call(e, a)
                                } catch (e) {
                                    i = [6, e];
                                    r = 0
                                } finally {
                                    n = o = 0
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
                p = new i.Z("FileSystemStore");
            const y = new(function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && c(e, t)
                }(n, e);
                var t = d(n);

                function n() {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, n);
                    var e;
                    (e = t.call(this, o.Z, {
                        APP_STATE_UPDATE: function(t) {
                            return e.handleAppStateUpdate(t)
                        },
                        POST_CONNECTION_OPEN: function() {
                            return e.handlePostConnectionOpen()
                        }
                    })).isLowDisk = !1;
                    e.refresh();
                    e.waitFor(a.Z);
                    setInterval((function() {
                        return e.refresh()
                    }), 6e5);
                    return e
                }
                var r = n.prototype;
                r.handlePostConnectionOpen = function() {
                    this.refresh();
                    return !1
                };
                r.handleAppStateUpdate = function(e) {
                    "active" !== e.state && this.refresh();
                    return !1
                };
                r.refresh = function() {
                    var e, t = this;
                    return (e = function() {
                        var e, n, r, o, i, u;
                        return h(this, (function(l) {
                            switch (l.label) {
                                case 0:
                                    return [4, null === (n = null === (e = a.Z.database()) || void 0 === e ? void 0 : e.fsInfo()) || void 0 === n ? void 0 : n.catch((function(e) {
                                        return p.warn("couldn't get fs info", e)
                                    }))];
                                case 1:
                                    if (null != (r = l.sent())) {
                                        o = r.fs.available < 268435456 || r.fs.available < 3 * r.database.used || r.fs.available < 2 * r.database.total;
                                        i = r.fs.available > 805306368 && r.fs.available > 4 * r.database.used && r.fs.available > 4 * r.database.total;
                                        if (null != (u = !!o || !i && null) && t.isLowDisk !== u) {
                                            t.isLowDisk = u;
                                            t.emitChange()
                                        }
                                    }
                                    return [2]
                            }
                        }))
                    }, function() {
                        var t = this,
                            n = arguments;
                        return new Promise((function(r, o) {
                            var i = e.apply(t, n);

                            function a(e) {
                                u(i, r, o, a, l, "next", e)
                            }

                            function l(e) {
                                u(i, r, o, a, l, "throw", e)
                            }
                            a(void 0)
                        }))
                    })()
                };
                return n
            }(r.Z))
        },
        525177: (e, t, n) => {
            n.d(t, {
                P: () => r,
                Z: () => i
            });
            var r, o = n(260561);
            ! function(e) {
                e[e.None = 0] = "None";
                e[e.DefaultOn = 1] = "DefaultOn";
                e[e.DefaultOff = 2] = "DefaultOff";
                e[e.ComingSoon = 3] = "ComingSoon";
                e[e.ClydeProfiles = 4] = "ClydeProfiles"
            }(r || (r = {}));
            const i = (0, o.B)({
                kind: "guild",
                id: "2023-03_clyde_ai",
                label: "ClydeAI",
                defaultConfig: {
                    experimentState: r.None
                },
                treatments: [{
                    id: 1,
                    label: "Enabled (Default Off)",
                    config: {
                        experimentState: r.DefaultOff
                    }
                }, {
                    id: 3,
                    label: "Enabled (Default On)",
                    config: {
                        experimentState: r.DefaultOn
                    }
                }, {
                    id: 4,
                    label: "Coming Soon",
                    config: {
                        experimentState: r.ComingSoon
                    }
                }, {
                    id: 5,
                    label: "Clyde Profiles",
                    config: {
                        experimentState: r.ClydeProfiles
                    }
                }]
            })
        },
        23925: (e, t, n) => {
            n.d(t, {
                g0: () => v,
                gJ: () => E,
                M9: () => g,
                Ib: () => h,
                lT: () => f,
                OR: () => d,
                GS: () => p
            });
            var r = n(667294),
                o = n(202351),
                i = n(567403),
                a = n(682776),
                u = n(525177),
                l = (0, n(260561).B)({
                    kind: "user",
                    id: "2023-06_clyde_ai_gdm",
                    label: "Clyde in DMs/GDMs",
                    defaultConfig: {
                        isClydeEnabledinGdms: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "enable clyde in gdms",
                        config: {
                            isClydeEnabledinGdms: !0
                        }
                    }]
                });
            var s = n(2590),
                c = n(897196);

            function f(e) {
                var t, n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    r = null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : "",
                    o = u.Z.useExperiment({
                        guildId: r,
                        location: "1e9ccc_1"
                    }, {
                        autoTrackExposure: n
                    }).experimentState;
                return o
            }

            function d(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = f(e, t);
                return n === u.P.ClydeProfiles
            }

            function h(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    r = f(e, n);
                return y(r, e, t)
            }

            function p() {
                var e = (0, o.Wu)([i.Z], i.Z.getGuildIds);
                return (0, r.useMemo)((function() {
                    return e.some((function(e) {
                        return m(i.Z.getGuild(e), !1) === u.P.ClydeProfiles
                    }))
                }), [e])
            }

            function y(e, t, n) {
                if (null == t) {
                    if (null != n && n.isPrivate()) {
                        return !!n.hasFlag(c.zZ.CLYDE_AI) || !!l.getCurrentConfig({
                            location: "38acdb_1"
                        }, {
                            autoTrackExposure: !1
                        }).isClydeEnabledinGdms && i.Z.getGuildIds().some((function(e) {
                            return g(i.Z.getGuild(e))
                        }))
                    }
                    return !1
                }
                return null != e && e !== u.P.None && a.Z.can(s.Plq.USE_CLYDE_AI, n)
            }

            function E(e, t) {
                var n, r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    o = null !== (n = null == e ? void 0 : e.id) && void 0 !== n ? n : "",
                    i = u.Z.getCurrentConfig({
                        guildId: o,
                        location: "1e9ccc_2"
                    }, {
                        autoTrackExposure: r
                    }).experimentState;
                return y(i, e, t)
            }

            function g(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = m(e, t);
                return n !== u.P.None
            }

            function v(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return m(e, t) === u.P.ClydeProfiles
            }

            function m(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                if (null == e) return !1;
                var n = e.id;
                return u.Z.getCurrentConfig({
                    guildId: n,
                    location: "1e9ccc_4"
                }, {
                    autoTrackExposure: t
                }).experimentState
            }
        },
        201891: (e, t, n) => {
            n.d(t, {
                V6: () => g,
                uS: () => v,
                U8: () => m,
                $q: () => _,
                uF: () => b
            });
            var r = n(769915),
                o = n(61209),
                i = n(2590),
                a = n(473708);

            function u(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function l() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    Date.prototype.toString.call(Reflect.construct(Date, [], (function() {})));
                    return !0
                } catch (e) {
                    return !1
                }
            }

            function s(e, t, n) {
                s = l() ? Reflect.construct : function(e, t, n) {
                    var r = [null];
                    r.push.apply(r, t);
                    var o = new(Function.bind.apply(e, r));
                    n && h(o, n.prototype);
                    return o
                };
                return s.apply(null, arguments)
            }

            function c(e) {
                c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return c(e)
            }

            function f(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                });
                t && h(e, t)
            }

            function d(e, t) {
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

            function y(e) {
                var t = "function" == typeof Map ? new Map : void 0;
                y = function(e) {
                    if (null === e || !(n = e, -1 !== Function.toString.call(n).indexOf("[native code]"))) return e;
                    var n;
                    if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
                    if (void 0 !== t) {
                        if (t.has(e)) return t.get(e);
                        t.set(e, r)
                    }

                    function r() {
                        return s(e, arguments, c(this).constructor)
                    }
                    r.prototype = Object.create(e.prototype, {
                        constructor: {
                            value: r,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    return h(r, e)
                };
                return y(e)
            }

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
                    var n, r = c(e);
                    if (t) {
                        var o = c(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return d(this, n)
                }
            }
            var g = function(e) {
                    f(n, e);
                    var t = E(n);

                    function n() {
                        u(this, n);
                        return t.apply(this, arguments)
                    }
                    return n
                }(y(Error)),
                v = function(e) {
                    f(n, e);
                    var t = E(n);

                    function n() {
                        u(this, n);
                        return t.apply(this, arguments)
                    }
                    return n
                }(y(Error)),
                m = new Set([i.evJ.AUTOMOD_MESSAGE_BLOCKED, i.evJ.AUTOMOD_TITLE_BLOCKED, i.evJ.AUTOMOD_INVALID_RUST_SERVICE_RESPONSE]);

            function _(e, t) {
                if (null == e) return null;
                var n = e.code,
                    r = e.message;
                if (!m.has(n)) return null;
                if (null != r) return r;
                if (null == t) return null;
                var u = o.Z.getChannel(t);
                if (null == u ? void 0 : u.isThread()) return a.Z.Messages.THREAD_AUTOMOD_ERROR;
                if ((null == u ? void 0 : u.isForumPost()) || (null == u ? void 0 : u.isForumLikeChannel())) {
                    if (n === i.evJ.AUTOMOD_TITLE_BLOCKED) return a.Z.Messages.FORUM_POST_AUTOMOD_ERROR;
                    if (n === i.evJ.AUTOMOD_MESSAGE_BLOCKED) return a.Z.Messages.FORUM_POST_AUTOMOD_ERROR
                }
                return null
            }

            function b(e, t) {
                var n = _(t);
                return null != n ? n : null == e ? a.Z.Messages.GUILD_AUTOMOD_BLOCKED_MESSAGE_SEND_NOTICE : function(e) {
                    var t = o.Z.getChannel(e.message.channelId);
                    return (0, r.Bz)(e) ? a.Z.Messages.GUILD_AUTOMOD_BLOCKED_MESSAGE_EDIT_NOTICE : (null == t ? void 0 : t.isThread()) ? a.Z.Messages.THREAD_AUTOMOD_ERROR : (null == t ? void 0 : t.isForumPost()) || (null == t ? void 0 : t.isForumLikeChannel()) ? a.Z.Messages.FORUM_POST_AUTOMOD_ERROR : a.Z.Messages.GUILD_AUTOMOD_BLOCKED_MESSAGE_SEND_NOTICE
                }(e)
            }
        },
        158434: (e, t, n) => {
            n.d(t, {
                Z: () => S
            });
            var r = n(202351),
                o = n(744564),
                i = n(652991),
                a = n(335150);

            function u(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function l(e, t, n) {
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

            function c(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        l(e, t, n[t])
                    }))
                }
                return e
            }

            function f(e, t) {
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

            function d(e, t) {
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
                    var n, r = s(e);
                    if (t) {
                        var o = s(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return d(this, n)
                }
            }
            var E = {},
                g = null;

            function v(e, t) {
                var n, r = null !== (n = E[e]) && void 0 !== n ? n : {
                    code: e,
                    state: a.Rj.RESOLVING
                };
                t(r = c({}, r));
                E = f(c({}, E), l({}, e, r))
            }

            function m(e) {
                _(e.guildTemplate)
            }

            function _(e) {
                return v(e.code, (function(t) {
                    var n = (0, i.Z)(e);
                    for (var r in n) t[r] = n[r]
                }))
            }

            function b(e) {
                return v(e.code, (function(e) {
                    e.state = a.Rj.EXPIRED
                }))
            }
            var O = function(e) {
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
                var t = y(n);

                function n() {
                    u(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.getGuildTemplate = function(e) {
                    return null != e ? E[e] : null
                };
                r.getGuildTemplates = function() {
                    return E
                };
                r.getForGuild = function(e) {
                    for (var t in E) {
                        var n = E[t];
                        if ("sourceGuildId" in n && n.sourceGuildId === e && n.state !== a.Rj.EXPIRED) return n
                    }
                };
                r.getDisplayedGuildTemplateCode = function() {
                    return g
                };
                return n
            }(r.ZP.Store);
            O.displayName = "GuildTemplateStore";
            const S = new O(o.Z, {
                GUILD_TEMPLATE_RESOLVE: function(e) {
                    var t = e.code;
                    E = f(c({}, E), l({}, t, {
                        code: t,
                        state: a.Rj.RESOLVING
                    }))
                },
                GUILD_TEMPLATE_CREATE_SUCCESS: m,
                GUILD_TEMPLATE_SYNC_SUCCESS: m,
                GUILD_TEMPLATE_RESOLVE_SUCCESS: m,
                GUILD_TEMPLATE_LOAD_FOR_GUILD_SUCCESS: function(e) {
                    e.guildTemplates.forEach((function(e) {
                        return _(e)
                    }))
                },
                GUILD_TEMPLATE_RESOLVE_FAILURE: b,
                GUILD_TEMPLATE_DELETE_SUCCESS: b,
                GUILD_TEMPLATE_ACCEPT: function(e) {
                    return v(e.code, (function(e) {
                        e.state = a.Rj.ACCEPTING
                    }))
                },
                GUILD_TEMPLATE_ACCEPT_SUCCESS: function(e) {
                    return v(e.code, (function(e) {
                        e.state = a.Rj.ACCEPTED;
                        var t;
                        e.usageCount = (null !== (t = e.usageCount) && void 0 !== t ? t : 0) + 1
                    }))
                },
                GUILD_TEMPLATE_ACCEPT_FAILURE: function(e) {
                    return v(e.code, (function(e) {
                        e.state = a.Rj.RESOLVED
                    }))
                },
                GUILD_TEMPLATE_MODAL_SHOW: function(e) {
                    g = e.code
                },
                GUILD_TEMPLATE_MODAL_HIDE: function(e) {
                    g = null
                }
            })
        },
        625751: (e, t, n) => {
            n.d(t, {
                Z: () => o
            });
            var r = n(120415);

            function o() {
                var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                    n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                    o = window.GLOBAL_ENV.INVITE_HOST;
                if ((0, r.Dt)()) {
                    o = location.host;
                    e = "/invite/".concat(t)
                } else e = "/".concat(t);
                return "".concat(n ? "".concat(location.protocol, "//") : "").concat(o).concat(e)
            }
        },
        358624: (e, t, n) => {
            n.d(t, {
                rv: () => c,
                pe: () => f,
                ZP: () => d,
                cs: () => h
            });
            var r = n(441143),
                o = n.n(r),
                i = n(490355),
                a = n(722406),
                u = n(473903),
                l = n(102921),
                s = n(2590);

            function c() {
                return l.Z.fromTimestamp(Date.now())
            }

            function f(e) {
                return {
                    id: e.id,
                    username: e.username,
                    avatar: e.avatar,
                    discriminator: e.discriminator,
                    bot: e.bot,
                    global_name: e.globalName
                }
            }

            function d(e) {
                var t = e.channelId,
                    n = e.content,
                    r = e.tts,
                    l = void 0 !== r && r,
                    d = e.type,
                    h = void 0 === d ? s.uaV.DEFAULT : d,
                    p = e.messageReference,
                    y = e.allowedMentions,
                    E = e.author,
                    g = e.flags,
                    v = e.nonce,
                    m = [];
                if (h === s.uaV.REPLY) {
                    o()(null != p, "Replies must have a message reference");
                    if (null == y || y.replied_user) {
                        var _ = i.Z.getMessageByReference(p);
                        (null == _ ? void 0 : _.state) === i.Y.LOADED && m.push(f(_.message.author))
                    }
                }
                null == E && (E = u.default.getCurrentUser());
                E instanceof a.Z && (E = f(E));
                o()(null != E, "createMessage: author cannot be undefined");
                return {
                    id: null != v ? v : c(),
                    type: h,
                    content: n,
                    channel_id: t,
                    author: E,
                    attachments: [],
                    embeds: [],
                    pinned: !1,
                    mentions: m,
                    mention_channels: [],
                    mention_roles: [],
                    mention_everyone: !1,
                    timestamp: (new Date).toISOString(),
                    state: s.yb.SENDING,
                    tts: l,
                    message_reference: p,
                    flags: g,
                    nonce: v
                }
            }

            function h(e) {
                var t = e.channelId,
                    n = e.content,
                    r = e.embeds,
                    o = e.loggingName;
                return {
                    id: c(),
                    type: s.uaV.DEFAULT,
                    flags: s.iLy.EPHEMERAL,
                    content: n,
                    channel_id: t,
                    author: {
                        id: s.LAt,
                        username: "Clyde",
                        discriminator: s.fo$,
                        avatar: "clyde",
                        bot: !0
                    },
                    attachments: [],
                    embeds: null != r ? r : [],
                    pinned: !1,
                    mentions: [],
                    mention_channels: [],
                    mention_roles: [],
                    mention_everyone: !1,
                    timestamp: (new Date).toISOString(),
                    state: s.yb.SENT,
                    tts: !1,
                    loggingName: o
                }
            }
        },
        723029: (e, t, n) => {
            n.d(t, {
                x: () => i
            });
            var r = n(396043),
                o = n(2590);

            function i(e) {
                var t, n, i, a = null != e.fileItems ? e.fileItems.map((function(e) {
                        return null !== (t = e.mimeType) && void 0 !== t ? t : "unknown"
                    })) : [],
                    u = null !== (n = e.errorMessage) && void 0 !== n ? n : void 0,
                    l = null !== (i = e.failureCode) && void 0 !== i ? i : void 0;
                (0, r.yw)(o.rMx.SEND_MESSAGE_FAILURE, {
                    failure_code: l,
                    error_message: u,
                    attachment_mimetypes: a
                })
            }
        },
        438285: (e, t, n) => {
            n.d(t, {
                w: () => u,
                O: () => l
            });
            var r, o, i = n(396043),
                a = n(2590);
            ! function(e) {
                e.REMINDER_NOTIFICATION = "Reminder Notification"
            }(r || (r = {}));
            ! function(e) {
                e.GUILD_INVITE = "Guild Invite"
            }(o || (o = {}));

            function u() {
                i.ZP.trackWithMetadata(a.rMx.NOTIFICATION_CTA_CLICKED, {
                    notification_type: r.REMINDER_NOTIFICATION,
                    action: o.GUILD_INVITE,
                    dismissed: !1
                })
            }

            function l() {
                i.ZP.trackWithMetadata(a.rMx.NOTIFICATION_CTA_CLICKED, {
                    notification_type: r.REMINDER_NOTIFICATION,
                    action: o.GUILD_INVITE,
                    dismissed: !0
                })
            }
        },
        214142: (e, t, n) => {
            n.d(t, {
                ew: () => S,
                SE: () => O,
                EL: () => I,
                AI: () => b
            });
            var r = n(744564),
                o = n(664625),
                i = n(785085),
                a = n(44616),
                u = n(496486),
                l = n.n(u),
                s = n(652591),
                c = n(69540),
                f = n(2590);

            function d(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function h(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            a = !0,
                            u = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            u = !0;
                            o = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (u) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return d(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return d(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function p(e) {
                switch (e) {
                    case c.oZ.CHAT_INPUT:
                        return "chat_input";
                    case c.oZ.MENTION:
                        return "mention";
                    case c.oZ.VOICE_USER:
                        return "voice_user"
                }
            }

            function y(e) {
                switch (e) {
                    case c.Hn.CHAT_INPUT:
                        return "chat_input";
                    case c.Hn.MEMBER_USER:
                        return "member_user";
                    case c.Hn.REACTION:
                        return "reaction";
                    case c.Hn.CALL_TILE:
                        return "call_tile"
                }
            }

            function E(e, t) {
                return Object.entries(e).filter((function(e) {
                    var t = h(e, 2);
                    t[0];
                    return t[1]
                })).map((function(e) {
                    var n = h(e, 1)[0];
                    return t(Number.parseInt(n))
                }))
            }
            const g = l().throttle((function(e) {
                var t = e.enabled,
                    n = e.combosEnabled,
                    r = e.combosRequiredCount,
                    o = e.screenshakeEnabled,
                    i = e.shakeIntensity,
                    a = e.screenshakeEnabledLocations,
                    u = e.confettiEnabled,
                    l = e.confettiSize,
                    c = e.confettiCount,
                    d = e.confettiEnabledLocations;
                s.default.track(f.rMx.POGGERMODE_SETTINGS_UPDATED, {
                    enabled: t,
                    combos_enabled: n,
                    combos_required_count: r,
                    screenshake_enabled: o,
                    shake_intensity: i,
                    screenshake_enabled_locations: E(a, p),
                    confetti_enabled: u,
                    confetti_size: l,
                    confetti_count: c,
                    confetti_enabled_locations: E(d, y)
                })
            }), 5e3);

            function v(e, t, n) {
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
                        v(e, t, n[t])
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

            function b(e) {
                r.Z.dispatch({
                    type: "POGGERMODE_SETTINGS_UPDATE",
                    settings: e
                });
                var t = m({}, i.Z.getState(), e);
                g(t)
            }

            function O(e) {
                r.Z.dispatch(m({
                    type: "POGGERMODE_UPDATE_COMBO"
                }, e))
            }

            function S(e) {
                r.Z.dispatch({
                    type: "POGGERMODE_UPDATE_MESSAGE_COMBO",
                    comboMessage: _(m({}, e), {
                        displayed: !0
                    })
                })
            }

            function I(e, t) {
                var n, i = o.default.getId(),
                    u = a.ZP.getUserCombo(i, e);
                null != u && r.Z.dispatch({
                    type: "POGGERMODE_UPDATE_MESSAGE_COMBO",
                    comboMessage: {
                        combo: u,
                        channelId: e,
                        messageId: t,
                        displayed: !1
                    }
                });
                var l = null != u && (null == u ? void 0 : u.value) > 0 ? (null !== (n = null == u ? void 0 : u.multiplier) && void 0 !== n ? n : 0) + 1 : 1;
                r.Z.dispatch({
                    type: "POGGERMODE_UPDATE_COMBO",
                    channelId: e,
                    userId: i,
                    multiplier: l,
                    value: 0
                })
            }
        },
        69540: (e, t, n) => {
            n.d(t, {
                Hn: () => l,
                oZ: () => s,
                qi: () => c,
                JR: () => y,
                u4: () => E
            });

            function r(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function o(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function i(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        o(e, t, n[t])
                    }))
                }
                return e
            }

            function a(e, t) {
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

            function u(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            a = !0,
                            u = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            u = !0;
                            o = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (u) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return r(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return r(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var l, s, c, f;
            ! function(e) {
                e[e.CHAT_INPUT = 0] = "CHAT_INPUT";
                e[e.REACTION = 1] = "REACTION";
                e[e.MEMBER_USER = 2] = "MEMBER_USER";
                e[e.CALL_TILE = 3] = "CALL_TILE"
            }(l || (l = {}));
            ! function(e) {
                e[e.CHAT_INPUT = 0] = "CHAT_INPUT";
                e[e.VOICE_USER = 1] = "VOICE_USER";
                e[e.MENTION = 2] = "MENTION"
            }(s || (s = {}));
            ! function(e) {
                e[e.LEVEL_1 = 0] = "LEVEL_1";
                e[e.LEVEL_2 = 1] = "LEVEL_2";
                e[e.LEVEL_3 = 2] = "LEVEL_3";
                e[e.LEVEL_4 = 3] = "LEVEL_4";
                e[e.LEVEL_5 = 4] = "LEVEL_5"
            }(c || (c = {}));
            var d, h, p = (o(f = {}, c.LEVEL_1, [
                        [1, 1e-4],
                        [25, .05],
                        [50, .1],
                        [100, .5],
                        [250, 1],
                        [500, 2],
                        [1e3, 3],
                        [9001, 4]
                    ]), o(f, c.LEVEL_2, [
                        [1, 1e-4],
                        [25, .25],
                        [50, .5],
                        [100, 1],
                        [250, 2.5],
                        [500, 5],
                        [1e3, 7.5],
                        [9001, 10]
                    ]), o(f, c.LEVEL_3, [
                        [1, .001],
                        [25, .5],
                        [50, 1],
                        [100, 2],
                        [250, 4],
                        [500, 8],
                        [1e3, 12],
                        [9001, 16]
                    ]), o(f, c.LEVEL_4, [
                        [1, .25],
                        [25, .75],
                        [50, 1],
                        [100, 2],
                        [250, 4],
                        [500, 8],
                        [1e3, 20],
                        [9001, 50]
                    ]),
                    o(f, c.LEVEL_5, [
                        [1, .001],
                        [25, .5],
                        [50, 1],
                        [100, 2],
                        [250, 5],
                        [500, 10],
                        [1e3, 100],
                        [9001, 1e4]
                    ]), f),
                y = Object.keys(p).reduce((function(e, t) {
                    return a(i({}, e), o({}, t, p[t].map((function(e) {
                        return u(e, 1)[0]
                    }))))
                }), (o(d = {}, c.LEVEL_1, []), o(d, c.LEVEL_2, []), o(d, c.LEVEL_3, []), o(d, c.LEVEL_4, []), o(d, c.LEVEL_5, []), d)),
                E = Object.keys(p).reduce((function(e, t) {
                    return a(i({}, e), o({}, t, p[t].map((function(e) {
                        var t = u(e, 2);
                        t[0];
                        return t[1]
                    }))))
                }), (o(h = {}, c.LEVEL_1, []), o(h, c.LEVEL_2, []), o(h, c.LEVEL_3, []), o(h, c.LEVEL_4, []), o(h, c.LEVEL_5, []), h))
        },
        785085: (e, t, n) => {
            n.d(t, {
                Z: () => O
            });
            var r = n(496486),
                o = n(202351),
                i = n(744564),
                a = n(69540);

            function u(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function l(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(e, r.key, r)
                }
            }

            function s(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function c(e) {
                c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return c(e)
            }

            function f(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        s(e, t, n[t])
                    }))
                }
                return e
            }

            function d(e, t) {
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
                    var n, r = c(e);
                    if (t) {
                        var o = c(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return d(this, n)
                }
            }
            var E, g, v = !1,
                m = {
                    settingsVisible: !1,
                    enabled: !1,
                    combosEnabled: !0,
                    combosRequiredCount: 5,
                    comboSoundsEnabled: !0,
                    screenshakeEnabled: !0,
                    screenshakeEnabledLocations: (E = {}, s(E, a.oZ.CHAT_INPUT, !0), s(E, a.oZ.VOICE_USER, !1), s(E, a.oZ.MENTION, !1), E),
                    shakeIntensity: 1,
                    confettiEnabled: !0,
                    confettiEnabledLocations: (g = {}, s(g, a.Hn.CHAT_INPUT, !0), s(g, a.Hn.REACTION, !0), s(g, a.Hn.MEMBER_USER, !0), s(g, a.Hn.CALL_TILE, !0), g),
                    confettiSize: 16,
                    confettiCount: 5,
                    warningSeen: !1
                },
                _ = (0, r.cloneDeep)(m);
            var b = function(e) {
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
                var t = y(n);

                function n() {
                    u(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function(e) {
                    _ = f({}, _, e)
                };
                r.getUserAgnosticState = function() {
                    return _
                };
                r.isEnabled = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = e.confettiLocation,
                        n = e.shakeLocation,
                        r = null == t || _.confettiEnabled && _.confettiEnabledLocations[t],
                        o = null == n || _.screenshakeEnabled && _.screenshakeEnabledLocations[n];
                    return this.settingsVisible && !v && _.enabled && r && o
                };
                ! function(e, t, n) {
                    t && l(e.prototype, t);
                    n && l(e, n)
                }(n, [{
                    key: "settingsVisible",
                    get: function() {
                        return _.settingsVisible
                    }
                }, {
                    key: "shakeIntensity",
                    get: function() {
                        return this.isEnabled() ? _.shakeIntensity : 0
                    }
                }, {
                    key: "combosRequiredCount",
                    get: function() {
                        return this.isEnabled() ? _.combosRequiredCount : 0
                    }
                }, {
                    key: "screenshakeEnabled",
                    get: function() {
                        return _.screenshakeEnabled
                    }
                }, {
                    key: "screenshakeEnabledLocations",
                    get: function() {
                        return _.screenshakeEnabledLocations
                    }
                }, {
                    key: "combosEnabled",
                    get: function() {
                        return _.combosEnabled
                    }
                }, {
                    key: "comboSoundsEnabled",
                    get: function() {
                        return _.comboSoundsEnabled
                    }
                }]);
                return n
            }(o.ZP.DeviceSettingsStore);
            b.displayName = "PoggermodeSettingsStore";
            b.persistKey = "PoggermodeSettingsStore";
            const O = new b(i.Z, {
                POGGERMODE_SETTINGS_UPDATE: function(e) {
                    var t = e.settings;
                    _ = f({}, _, t)
                },
                POGGERMODE_TEMPORARILY_DISABLED: function() {
                    v = !0
                }
            })
        },
        44616: (e, t, n) => {
            n.d(t, {
                wU: () => C,
                ZP: () => P
            });
            var r = n(202351),
                o = n(575626),
                i = n(513328),
                a = n(744564),
                u = n(664625),
                l = n(715107),
                s = n(930948),
                c = n(785085),
                f = n(673383),
                d = n(69540),
                h = n(2590);

            function p(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
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

            function E(e) {
                E = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return E(e)
            }

            function g(e) {
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

            function v(e, t) {
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

            function m(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        n = i[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }

            function _(e, t) {
                return !t || "object" !== O(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function b(e, t) {
                b = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return b(e, t)
            }
            var O = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function S(e) {
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
                        var o = E(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return _(this, n)
                }
            }
            var I = new Set,
                M = new o.Z((function(e) {
                    return [e.userId, e.channelId]
                }), (function(e) {
                    var t = e.userId,
                        n = e.channelId;
                    return "".concat(n, "-").concat(t)
                }));
            var A = new o.Z((function(e) {
                    return [e.messageId, e.channelId, e.combo.userId]
                }), (function(e) {
                    var t = e.messageId,
                        n = e.channelId,
                        r = e.combo.userId;
                    return "".concat(n, "-").concat(r, "-").concat(t)
                })),
                T = function(e) {
                    var t = e.userId,
                        n = e.channelId;
                    return "".concat(t, "-").concat(n)
                };

            function D(e) {
                var t, n, r, o, a, u = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                    l = M.get(T(e)),
                    s = v(g({}, l, e), {
                        value: null !== (n = null !== (t = e.value) && void 0 !== t ? t : null == l ? void 0 : l.value) && void 0 !== n ? n : 0,
                        multiplier: Math.min(null !== (o = null !== (r = e.multiplier) && void 0 !== r ? r : null == l ? void 0 : l.multiplier) && void 0 !== o ? o : 1, 7),
                        decayInterval: null !== (a = null == l ? void 0 : l.decayInterval) && void 0 !== a ? a : new i.Xp
                    });
                M.set(T(e), s);
                if (u) {
                    var c;
                    null === (c = s.decayInterval) || void 0 === c || c.start(1e3, (function() {
                        var e = M.get(T(s));
                        if (null != e) {
                            var t = s.multiplier !== e.multiplier && s.value !== e.value;
                            if (e.value <= 0 || t) {
                                var n;
                                null === (n = e.decayInterval) || void 0 === n || n.stop();
                                if (e.value <= 0) {
                                    D(v(g({}, e), {
                                        value: 0,
                                        multiplier: 1
                                    }));
                                    w.emitChange()
                                }
                            } else {
                                D(v(g({}, e), {
                                    value: e.value - 1
                                }));
                                w.emitChange()
                            }
                        }
                    }))
                }
            }

            function C(e, t, n, r) {
                if (e !== t) return !1;
                if (null == n || r.has(n)) return !1;
                r.add(n);
                return !0
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
                    t && b(e, t)
                }(n, e);
                var t = S(n);

                function n() {
                    p(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    this.waitFor(u.default, l.Z)
                };
                r.getComboScore = function(e, t) {
                    var n = M.get(T({
                        userId: e,
                        channelId: t
                    }));
                    return null == n ? 0 : (0, f.Eo)(n)
                };
                r.getUserCombo = function(e, t) {
                    return M.get(T({
                        userId: e,
                        channelId: t
                    }))
                };
                r.isComboing = function(e, t) {
                    var n = this.getUserCombo(e, t);
                    return null != n && n.value >= c.Z.combosRequiredCount && function(e) {
                        return null != e && (e.value > 0 || (null == e ? void 0 : e.multiplier) > 1)
                    }(n)
                };
                r.getMessageCombo = function(e) {
                    var t, n = A.get(e);
                    return null !== (t = null == n ? void 0 : n.combo) && void 0 !== t ? t : void 0
                };
                r.getMostRecentMessageCombo = function(e) {
                    var t = A.values(e);
                    return t[t.length - 1]
                };
                r.getUserComboShakeIntensity = function(e, t, n, r) {
                    var o = this.getUserCombo(e, t);
                    return null != o ? (0, f.KH)(o, r) * n : 0
                };
                return n
            }(r.ZP.Store);
            L.displayName = "PoggermodeStore";
            var w = new L(a.Z, {
                POGGERMODE_UPDATE_COMBO: function(e) {
                    e.type;
                    var t = m(e, ["type"]);
                    if (!c.Z.isEnabled()) return !1;
                    D(t)
                },
                POGGERMODE_UPDATE_MESSAGE_COMBO: function(e) {
                    var t, n = e.comboMessage;
                    if (!c.Z.isEnabled()) return !1;
                    t = n, A.set(t.messageId, t)
                },
                MESSAGE_CREATE: function(e) {
                    var t = e.channelId,
                        n = e.message,
                        r = n.mentions,
                        o = n.author,
                        i = n.nonce;
                    if (!c.Z.isEnabled()) return !1;
                    var a = u.default.getId();
                    if (!C(o.id, a, i, I)) return !1;
                    var l = M.get(T({
                        userId: o.id,
                        channelId: t
                    }));
                    if (c.Z.screenshakeEnabled && c.Z.screenshakeEnabledLocations[d.oZ.MENTION] && null != r && null != r.find((function(e) {
                            return e.id === a
                        }))) {
                        var p, y = null != l ? null !== (p = (0, f.KH)(l, d.qi.LEVEL_4)) && void 0 !== p ? p : .001 : 4 * Math.random();
                        s.S.dispatch(h.CkL.SHAKE_APP, {
                            duration: 1e3,
                            intensity: y
                        });
                        return !0
                    }
                    return !1
                }
            });
            const P = w
        },
        673383: (e, t, n) => {
            n.d(t, {
                KH: () => l,
                nc: () => d,
                yz: () => h,
                Eo: () => p
            });
            var r = n(69540),
                o = n(2590);

            function i(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function a(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            a = !0,
                            u = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            u = !0;
                            o = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (u) throw o
                            }
                        }
                        return i
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
            var u = function(e, t) {
                    var n = e.multiplier,
                        r = e.value,
                        o = a(t, 2),
                        i = o[0],
                        u = o[1],
                        l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                        s = r * n;
                    if (s <= 0) return 0;
                    var c = i.reduce((function(e, t, n) {
                        if (s > t) {
                            var r = u[n];
                            if (n + 1 === i.length) return u[n];
                            var o = i[n + 1],
                                a = u[n + 1];
                            return (s - t) / (o - t) * (a - r) + r
                        }
                        return s === t ? u[n] : e
                    }), 0);
                    return Math.min(l, c)
                },
                l = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.qi.LEVEL_3;
                    return u(e, [r.JR[t], r.u4[t]], 1e5)
                },
                s = [
                    [1, .001],
                    [25, .3],
                    [100, .5],
                    [250, .8],
                    [500, .9],
                    [2500, .95],
                    [9001, 1]
                ],
                c = s.map((function(e) {
                    return a(e, 1)[0]
                })),
                f = s.map((function(e) {
                    var t = a(e, 2);
                    t[0];
                    return t[1]
                })),
                d = function(e) {
                    return u(e, [c, f], 1)
                },
                h = function(e) {
                    return 1 === e ? {
                        color: o.Ilk.BRAND_500
                    } : 2 === e || 3 === e ? {
                        color: o.Ilk.GREEN_360
                    } : 4 === e || 5 === e ? {
                        color: o.Ilk.YELLOW_300,
                        square: !0
                    } : 6 === e ? {
                        color: o.Ilk.RED_400,
                        square: !0
                    } : {
                        color: o.Ilk.ORANGE_345,
                        flair: !0
                    }
                };

            function p(e) {
                var t;
                return e.value * (null !== (t = e.multiplier) && void 0 !== t ? t : 1)
            }
        },
        490355: (e, t, n) => {
            n.d(t, {
                Y: () => v,
                Z: () => R
            });
            var r = n(5387),
                o = n.n(r),
                i = n(202351),
                a = n(744564),
                u = n(659436),
                l = n(649536),
                s = n(61209),
                c = n(352980),
                f = n(2590);

            function d(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function h(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function p(e) {
                p = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return p(e)
            }

            function y(e, t) {
                return !t || "object" !== m(t) && "function" != typeof t ? function(e) {
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

            function g(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, i = [],
                            a = !0,
                            u = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                i.push(r.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            u = !0;
                            o = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (u) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return d(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return d(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var v, m = function(e) {
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
                    var n, r = p(e);
                    if (t) {
                        var o = p(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return y(this, n)
                }
            }! function(e) {
                e[e.LOADED = 0] = "LOADED";
                e[e.NOT_LOADED = 1] = "NOT_LOADED";
                e[e.DELETED = 2] = "DELETED"
            }(v || (v = {}));
            var b = Object.freeze({
                    state: v.NOT_LOADED
                }),
                O = new Set,
                S = function() {
                    function e() {
                        var t = this;
                        h(this, e);
                        this._cachedMessages = new(o())({
                            max: 100,
                            dispose: function(e, n) {
                                return t.handleCacheDisposed(e, n)
                            }
                        });
                        this._cachedMessageIds = new Set
                    }
                    var t = e.prototype;
                    t.handleCacheDisposed = function(e, t) {
                        if (this._cachedMessageIds.has(e)) {
                            this._cachedMessageIds = new Set(this._cachedMessageIds);
                            this._cachedMessageIds.delete(e)
                        }
                    };
                    t.set = function(e, t) {
                        this._cachedMessages.set(e, t);
                        if (!this._cachedMessageIds.has(e)) {
                            this._cachedMessageIds = new Set(this._cachedMessageIds);
                            this._cachedMessageIds.add(e)
                        }
                    };
                    t.has = function(e) {
                        return this._cachedMessageIds.has(e)
                    };
                    t.get = function(e) {
                        return this._cachedMessages.get(e)
                    };
                    t.getCachedMessageIds = function() {
                        return this._cachedMessageIds
                    };
                    return e
                }(),
                I = new(function() {
                    function e() {
                        h(this, e);
                        this._channelCaches = new Map
                    }
                    var t = e.prototype;
                    t.has = function(e, t) {
                        var n, r;
                        return null !== (r = null === (n = this._channelCaches.get(e)) || void 0 === n ? void 0 : n.has(t)) && void 0 !== r && r
                    };
                    t.get = function(e, t) {
                        var n;
                        return null === (n = this._channelCaches.get(e)) || void 0 === n ? void 0 : n.get(t)
                    };
                    t.set = function(e, t, n) {
                        var r = this._channelCaches.get(e);
                        if (null == r) {
                            r = new S;
                            this._channelCaches.set(e, r)
                        }
                        r.set(t, n)
                    };
                    t.updateExistingMessageIfCached = function(e) {
                        var t = this._channelCaches.get(e.channel_id);
                        if (null == t) return !1;
                        if (!t.has(e.id)) return !1;
                        t.set(e.id, {
                            state: v.LOADED,
                            message: (0, l.e5)(e)
                        });
                        return !0
                    };
                    t.deleteChannelCache = function(e) {
                        return this._channelCaches.delete(e)
                    };
                    t.retainWhere = function(e) {
                        var t = [],
                            n = !0,
                            r = !1,
                            o = void 0;
                        try {
                            for (var i, a = this._channelCaches[Symbol.iterator](); !(n = (i = a.next()).done); n = !0) {
                                var u = g(i.value, 1)[0];
                                e(u) || t.push(u)
                            }
                        } catch (e) {
                            r = !0;
                            o = e
                        } finally {
                            try {
                                n || null == a.return || a.return()
                            } finally {
                                if (r) throw o
                            }
                        }
                        var l = !0,
                            s = !1,
                            c = void 0;
                        try {
                            for (var f, d = t[Symbol.iterator](); !(l = (f = d.next()).done); l = !0) {
                                var h = f.value;
                                this.deleteChannelCache(h)
                            }
                        } catch (e) {
                            s = !0;
                            c = e
                        } finally {
                            try {
                                l || null == d.return || d.return()
                            } finally {
                                if (s) throw c
                            }
                        }
                        return t.length
                    };
                    t.getCachedMessageIdsForChannel = function(e) {
                        var t = this._channelCaches.get(e);
                        return null == t ? null : t.getCachedMessageIds()
                    };
                    t.clear = function() {
                        this._channelCaches.clear()
                    };
                    return e
                }());

            function M(e) {
                var t = !1;
                I.updateExistingMessageIfCached(e) && (t = !0);
                if (f.OBS.has(e.type)) {
                    var n = e.message_reference;
                    if (null == n) return t;
                    var r = n.message_id;
                    if (null == r) return t;
                    if ("referenced_message" in e) {
                        var o = e.referenced_message;
                        if (null != o) {
                            I.set(o.channel_id, o.id, {
                                state: v.LOADED,
                                message: (0, l.e5)(o)
                            });
                            e.type === f.uaV.THREAD_STARTER_MESSAGE && M(o)
                        } else I.set(e.channel_id, r, {
                            state: v.DELETED
                        })
                    } else {
                        var i = c.Z.getMessage(n.channel_id, r);
                        null != i ? I.set(n.channel_id, r, {
                            state: v.LOADED,
                            message: i
                        }) : I.set(n.channel_id, r, b)
                    }
                    t = !0
                }
                return t
            }

            function A(e, t) {
                var n = !1,
                    r = !0,
                    o = !1,
                    i = void 0;
                try {
                    for (var a, u = e[Symbol.iterator](); !(r = (a = u.next()).done); r = !0) {
                        n = !1 !== t(a.value) || n
                    }
                } catch (e) {
                    o = !0;
                    i = e
                } finally {
                    try {
                        r || null == u.return || u.return()
                    } finally {
                        if (o) throw i
                    }
                }
                return n
            }

            function T(e) {
                return A(e.messages, (function(e) {
                    return M(e)
                }))
            }

            function D(e) {
                return I.deleteChannelCache(e.channel.id)
            }

            function C(e, t) {
                if (!I.has(e, t)) return !1;
                I.set(e, t, {
                    state: v.DELETED
                })
            }

            function L() {
                I.clear()
            }

            function w(e) {
                var t = e.firstMessages;
                return null != t && A(t, (function(e) {
                    return M(e)
                }))
            }
            var P = function(e) {
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
                var t = _(n);

                function n() {
                    h(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    this.waitFor(c.Z, s.Z)
                };
                r.getMessageByReference = function(e) {
                    var t;
                    null != e && (t = I.get(e.channel_id, e.message_id));
                    return null != t ? t : b
                };
                r.getMessage = function(e, t) {
                    var n;
                    return null !== (n = I.get(e, t)) && void 0 !== n ? n : b
                };
                r.getReplyIdsForChannel = function(e) {
                    var t;
                    null != e && (t = I.getCachedMessageIdsForChannel(e));
                    return null != t ? t : O
                };
                return n
            }(i.ZP.Store);
            P.displayName = "ReferencedMessageStore";
            const R = new P(a.Z, {
                CACHE_LOADED: function(e) {
                    var t = e.messages;
                    return A(Object.values(t), (function(e) {
                        return A(Object.values(e), (function(e) {
                            return M(e)
                        }))
                    }))
                },
                LOCAL_MESSAGES_LOADED: T,
                LOAD_MESSAGES_SUCCESS: T,
                LOAD_MESSAGES_AROUND_SUCCESS: T,
                SEARCH_FINISH: function(e) {
                    return A(e.messages, (function(e) {
                        return A(e, (function(e) {
                            return M(e)
                        }))
                    }))
                },
                GUILD_FEED_FETCH_SUCCESS: function(e) {
                    var t = e.data;
                    return A((0, u._)(t), (function(e) {
                        return M(e)
                    }))
                },
                LOAD_THREADS_SUCCESS: w,
                LOAD_ARCHIVED_THREADS_SUCCESS: w,
                LOAD_FORUM_POSTS: function(e) {
                    var t = e.threads;
                    return A(Object.values(t), (function(e) {
                        var t = e.first_message;
                        return null != t && M(t)
                    }))
                },
                MESSAGE_CREATE: function(e) {
                    var t = e.message;
                    return !!c.Z.getMessages(t.channel_id).ready && M(t)
                },
                MESSAGE_UPDATE: function(e) {
                    var t = e.message,
                        n = t.id,
                        r = t.channel_id;
                    if (!I.has(r, n)) return !1;
                    var o = I.get(r, n);
                    if (null == o || o.state !== v.LOADED) return !1;
                    I.set(r, n, {
                        state: v.LOADED,
                        message: (0, l.wi)(o.message, t)
                    })
                },
                MESSAGE_DELETE: function(e) {
                    var t = e.id;
                    return C(e.channelId, t)
                },
                MESSAGE_DELETE_BULK: function(e) {
                    var t = e.ids,
                        n = e.channelId;
                    return A(t, (function(e) {
                        return C(n, e)
                    }))
                },
                CREATE_PENDING_REPLY: function(e) {
                    var t = e.message;
                    I.set(t.channel_id, t.id, {
                        state: v.LOADED,
                        message: t
                    })
                },
                CHANNEL_DELETE: D,
                THREAD_DELETE: D,
                GUILD_DELETE: function() {
                    if (0 === I.retainWhere((function(e) {
                            return null != s.Z.getChannel(e)
                        }))) return !1
                },
                CONNECTION_OPEN: L,
                LOGOUT: L
            })
        },
        331055: (e, t, n) => {
            n.d(t, {
                vD: () => i,
                BH: () => a,
                ZP: () => u
            });
            var r = (0, n(260561).B)({
                    kind: "user",
                    id: "2023-01_silent_messages",
                    label: "Silent Messages",
                    defaultConfig: {
                        allowSending: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Allow sending @silent messages",
                        config: {
                            allowSending: !0
                        }
                    }]
                }),
                o = "@silent",
                i = new RegExp("^".concat(o, "(\\s|$)"));

            function a() {
                return r.getCurrentConfig({
                    location: "456bd9_1"
                }, {
                    autoTrackExposure: !1
                }).allowSending
            }

            function u(e) {
                return a() ? null == e.match(i) ? [!1, e] : [!0, e.substring(o.length).trim()] : [!1, e]
            }
        },
        539273: (e, t, n) => {
            n.d(t, {
                S: () => E,
                Z: () => S
            });
            var r = n(202351),
                o = n(513328),
                i = n(744564),
                a = n(61209),
                u = n(682776),
                l = n(2590);

            function s(e, t) {
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

            function f(e) {
                f = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return f(e)
            }

            function d(e, t) {
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
                    var n, r = f(e);
                    if (t) {
                        var o = f(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return d(this, n)
                }
            }
            var E, g;
            ! function(e) {
                e[e.SendMessage = 0] = "SendMessage";
                e[e.CreateThread = 1] = "CreateThread"
            }(E || (E = {}));
            var v = (c(g = {}, E.SendMessage, {}), c(g, E.CreateThread, {}), g);

            function m(e, t, n) {
                ! function(e, t) {
                    if (null != v[t][e.id]) {
                        v[t][e.id].timer.stop();
                        delete v[t][e.id]
                    }
                }(e, t);
                if (!(function(e, t) {
                        return t === E.SendMessage ? u.Z.can(l.Plq.MANAGE_CHANNELS, e) || u.Z.can(l.Plq.MANAGE_MESSAGES, e) : u.Z.can(l.Plq.MANAGE_THREADS, e)
                    }(e, t) || n <= 0)) {
                    var r = n + Date.now();
                    v[t][e.id] = {
                        rateLimitPerUser: e.rateLimitPerUser,
                        cooldownMs: n,
                        cooldownEndTimestamp: r,
                        timer: new o.V7
                    };
                    v[t][e.id].timer.start(1e3, (function() {
                        i.Z.dispatch({
                            type: "SLOWMODE_SET_COOLDOWN",
                            channelId: e.id,
                            slowmodeType: t,
                            cooldownMs: Math.max(r - Date.now(), 0)
                        })
                    }), !0)
                }
            }

            function _(e, t) {
                var n = a.Z.getChannel(e);
                if (null == n) return !1;
                m(n, t, 0 === n.rateLimitPerUser ? 0 : 1e3 * n.rateLimitPerUser + 100)
            }

            function b(e) {
                var t = e.file,
                    n = a.Z.getChannel(t.channelId);
                return null != n && m(n, E.SendMessage, 0)
            }
            var O = function(e) {
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
                var t = y(n);

                function n() {
                    s(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    this.waitFor(a.Z)
                };
                r.getSlowmodeCooldownGuess = function(e, t) {
                    var n = v[null != t ? t : E.SendMessage][e];
                    return null != n ? n.cooldownMs : 0
                };
                return n
            }(r.ZP.Store);
            O.displayName = "SlowmodeStore";
            const S = new O(i.Z, {
                SLOWMODE_RESET_COOLDOWN: function(e) {
                    return _(e.channelId, e.slowmodeType)
                },
                SLOWMODE_SET_COOLDOWN: function(e) {
                    var t = e.channelId,
                        n = e.slowmodeType,
                        r = e.cooldownMs,
                        o = a.Z.getChannel(t);
                    if (null == o) return !1;
                    m(o, n, 0 === r ? 0 : r + 100)
                },
                UPLOAD_START: function(e) {
                    return _(e.channelId, E.SendMessage)
                },
                UPLOAD_FAIL: b,
                UPLOAD_CANCEL_REQUEST: b,
                CHANNEL_UPDATES: function(e) {
                    var t = e.channels;
                    [E.SendMessage, E.CreateThread].forEach((function(e) {
                        var n = !0,
                            r = !1,
                            o = void 0;
                        try {
                            for (var i, a = t[Symbol.iterator](); !(n = (i = a.next()).done); n = !0) {
                                var u = i.value,
                                    l = v[e][u.id],
                                    s = u.rateLimitPerUser;
                                if (null != l && l.rateLimitPerUser !== s) {
                                    var c;
                                    m(u, e, Math.min(null !== (c = null == l ? void 0 : l.cooldownMs) && void 0 !== c ? c : 0, 1e3 * s))
                                }
                            }
                        } catch (e) {
                            r = !0;
                            o = e
                        } finally {
                            try {
                                n || null == a.return || a.return()
                            } finally {
                                if (r) throw o
                            }
                        }
                    }))
                },
                LOGOUT: function() {
                    [E.SendMessage, E.CreateThread].forEach((function(e) {
                        Object.keys(v[e]).forEach((function(t) {
                            return v[e][t].timer.stop()
                        }));
                        v[e] = {}
                    }))
                }
            })
        }
    }
]);