"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [16239], {
        716239: (e, t, n) => {
            n.d(t, {
                Z: () => Re
            });
            var r = n(496486),
                o = n.n(r),
                a = n(289283),
                i = n(281110),
                u = n(575945),
                l = n(744564),
                s = n(815678),
                c = n(769915),
                f = n(396043),
                d = n(247075),
                h = n(114643),
                E = n(983622),
                p = n(773011),
                y = n(327566),
                g = n(664625),
                v = n(61209),
                _ = n(352980),
                m = n(260561),
                b = (0, m.B)({
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

            function O(e) {
                var t, n;
                if (! function(e, t) {
                        return b.getCurrentConfig({
                            guildId: e,
                            location: t
                        }, {
                            autoTrackExposure: !1
                        }).isProactiveClydeEnabled
                    }(null !== (n = null === (t = v.Z.getBasicChannel(e)) || void 0 === t ? void 0 : t.guild_id) && void 0 !== n ? n : "", "allowProactiveClydeReply")) return !1;
                var r, o = _.Z.getMessages(e),
                    a = o.last();
                if (null == a) return !1;
                var i = null !== (r = o.getManyBefore(a.id, 10)) && void 0 !== r ? r : [],
                    u = g.default.getId();
                return i.some((function(t) {
                    var n;
                    if (!t.author.isClyde() || null == t.messageReference) return !1;
                    var r = _.Z.getMessage(e, t.messageReference.message_id);
                    return (null == r || null === (n = r.author) || void 0 === n ? void 0 : n.id) === u
                }))
            }
            var S = n(890607),
                I = n(861323),
                M = n(296602),
                A = n(652555),
                T = n(179678),
                D = n(201891),
                L = n(158434),
                C = n(641453),
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
                },
                N = function(e, t) {};
            var Z = n(358624),
                U = n(723029),
                j = n(438285),
                G = n(364269),
                k = n(214142),
                B = n(785085),
                x = n(761953),
                V = n(897196);

            function F(e) {
                if (e !== V.V) return null;
                var t = v.Z.getChannel(e);
                return null == t ? null : x.Z.ensurePrivateChannel(t.recipients)
            }
            var H = n(490355),
                Y = n(78551),
                K = n(331055),
                W = n(671293),
                J = n(55609),
                z = n(177570),
                q = n(567403),
                X = n(757753),
                $ = n(682776),
                Q = n(491260),
                ee = n(717091),
                te = n(840922),
                ne = n(715107),
                re = n(464187),
                oe = n(539273),
                ae = n(473903),
                ie = n(652591),
                ue = n(661123),
                le = n(644144),
                se = n(348592),
                ce = n(116094),
                fe = n(102921),
                de = n(105783),
                he = n(2590),
                Ee = n(335150),
                pe = n(473708);

            function ye(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function ge(e, t, n, r, o, a, i) {
                try {
                    var u = e[a](i),
                        l = u.value
                } catch (e) {
                    n(e);
                    return
                }
                u.done ? t(l) : Promise.resolve(l).then(r, o)
            }

            function ve(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var a = e.apply(t, n);

                        function i(e) {
                            ge(a, r, o, i, u, "next", e)
                        }

                        function u(e) {
                            ge(a, r, o, i, u, "throw", e)
                        }
                        i(void 0)
                    }))
                }
            }

            function _e(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function me(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        _e(e, t, n[t])
                    }))
                }
                return e
            }

            function be(e, t) {
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

            function Oe(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, a = [],
                            i = !0,
                            u = !1;
                        try {
                            for (n = n.call(e); !(i = (r = n.next()).done); i = !0) {
                                a.push(r.value);
                                if (t && a.length === t) break
                            }
                        } catch (e) {
                            u = !0;
                            o = e
                        } finally {
                            try {
                                i || null == n.return || n.return()
                            } finally {
                                if (u) throw o
                            }
                        }
                        return a
                    }
                }(e, t) || Ie(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Se(e) {
                return function(e) {
                    if (Array.isArray(e)) return ye(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || Ie(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Ie(e, t) {
                if (e) {
                    if ("string" == typeof e) return ye(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    return "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? ye(e, t) : void 0
                }
            }
            var Me, Ae = function(e, t) {
                    var n, r, o, a, i = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return a = {
                        next: u(0),
                        throw: u(1),
                        return: u(2)
                    }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                        return this
                    }), a;

                    function u(a) {
                        return function(u) {
                            return function(a) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; i;) try {
                                    if (n = 1, r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, a[1])).done) return o;
                                    (r = 0, o) && (a = [2 & a[0], o.value]);
                                    switch (a[0]) {
                                        case 0:
                                        case 1:
                                            o = a;
                                            break;
                                        case 4:
                                            i.label++;
                                            return {
                                                value: a[1], done: !1
                                            };
                                        case 5:
                                            i.label++;
                                            r = a[1];
                                            a = [0];
                                            continue;
                                        case 7:
                                            a = i.ops.pop();
                                            i.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = i.trys, o = o.length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                                i = 0;
                                                continue
                                            }
                                            if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                                i.label = a[1];
                                                break
                                            }
                                            if (6 === a[0] && i.label < o[1]) {
                                                i.label = o[1];
                                                o = a;
                                                break
                                            }
                                            if (o && i.label < o[2]) {
                                                i.label = o[2];
                                                i.ops.push(a);
                                                break
                                            }
                                            o[2] && i.ops.pop();
                                            i.trys.pop();
                                            continue
                                    }
                                    a = t.call(e, i)
                                } catch (e) {
                                    a = [6, e];
                                    r = 0
                                } finally {
                                    n = o = 0
                                }
                                if (5 & a[0]) throw a[1];
                                return {
                                    value: a[0] ? a[1] : void 0,
                                    done: !0
                                }
                            }([a, u])
                        }
                    }
                },
                Te = new M.Z("MessageActionCreators"),
                De = !1,
                Le = function() {
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

            function Ce(e) {
                var t = e.inviteKey,
                    n = e.channelId,
                    r = e.messageId,
                    o = e.location,
                    a = e.suggested,
                    i = void 0 === a ? null : a,
                    u = e.overrideProperties,
                    l = void 0 === u ? {} : u,
                    s = (0, C.fU)(t),
                    c = v.Z.getChannel(n);
                if (null != c) {
                    var d = null;
                    c.isMultiUserDM() ? d = he.dAT.GDM_INVITE : c.isPrivate() || (d = he.dAT.SERVER_INVITE);
                    var h = {},
                        E = X.Z.getInvite(t);
                    if (null != E && E.state === he.r2o.RESOLVED && null != E.channel) {
                        var p, y = E.channel;
                        h.invite_channel_id = y.id;
                        h.invite_guild_id = null === (p = E.guild) || void 0 === p ? void 0 : p.id;
                        h.invite_channel_type = y.type;
                        null != E.inviter && (h.invite_inviter_id = E.inviter.id);
                        var g = z.Z.getLastActiveStream();
                        if (null != g && g.channelId === y.id) {
                            d = he.dAT.STREAM;
                            h.destination_user_id = g.ownerId;
                            var _ = (0, T.L2)(g, Q.Z);
                            h.application_id = null != _ ? _.id : null
                        }
                    }
                    if (null != i) {
                        h.is_suggested = i.isAffinitySuggestion;
                        h.row_num = i.rowNum;
                        h.num_total = i.numTotal;
                        h.num_affinity_connections = i.numAffinityConnections;
                        h.is_filtered = i.isFiltered
                    }
                    h = me(be(me({}, h), {
                        location: o,
                        invite_type: d,
                        invite_code: s.baseCode,
                        guild_id: c.getGuildId(),
                        channel_id: c.id,
                        message_id: r,
                        send_type: he.a5g.DIRECT_MESSAGE,
                        invite_guild_scheduled_event_id: s.guildScheduledEventId
                    }), l);
                    f.ZP.trackWithMetadata(he.rMx.INVITE_SENT, h)
                } else {
                    var m = {},
                        b = X.Z.getInvite(t);
                    if (null != b && b.state === he.r2o.RESOLVED && null != b.inviter) {
                        m.invite_inviter_id = b.inviter.id;
                        m = me(be(me({}, m), {
                            location: o,
                            invite_type: he.dAT.FRIEND_INVITE,
                            invite_code: s.baseCode,
                            message_id: r,
                            send_type: he.a5g.DIRECT_MESSAGE,
                            invite_guild_scheduled_event_id: s.guildScheduledEventId
                        }), l);
                        f.ZP.trackWithMetadata(he.rMx.INVITE_SENT, m)
                    }
                }
            }
            var we = (_e(Me = {}, he.evJ.EMAIL_VERIFICATION_REQUIRED, {
                    messageName: "BOT_REQUIRES_EMAIL_VERIFICATION",
                    messageGetter: function() {
                        return pe.Z.Messages.BOT_REQUIRES_EMAIL_VERIFICATION
                    }
                }), _e(Me, he.evJ.INVALID_MESSAGE_SEND_USER, {
                    messageName: "BOT_DM_SEND_FAILED_WITH_HELP_LINK",
                    messageGetter: function() {
                        return pe.Z.Messages.BOT_DM_SEND_FAILED_WITH_HELP_LINK.format({
                            helpUrl: se.Z.getArticleURL(he.BhN.DM_COULD_NOT_BE_DELIVERED)
                        })
                    }
                }), _e(Me, he.evJ.RATE_LIMIT_DM_OPEN, {
                    messageName: "BOT_DM_RATE_LIMITED",
                    messageGetter: function() {
                        return pe.Z.Messages.BOT_DM_RATE_LIMITED
                    }
                }), _e(Me, he.evJ.SEND_MESSAGE_TEMPORARILY_DISABLED, {
                    messageName: "BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED",
                    messageGetter: function() {
                        return pe.Z.Messages.BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED
                    }
                }), _e(Me, he.evJ.SLOWMODE_RATE_LIMITED, {
                    messageName: "BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED",
                    messageGetter: function() {
                        return pe.Z.Messages.BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED
                    }
                }), Me),
                Pe = (o().memoize((function(e) {
                    return e.limit
                }), (function(e) {
                    var t = o().pick(e, ["channelId", "before", "after", "truncate", "jump", "focus"]);
                    return JSON.stringify(t)
                })), {
                    receiveMessage: function(e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                        l.Z.dispatch({
                            type: "MESSAGE_CREATE",
                            channelId: e,
                            message: t,
                            optimistic: n,
                            sendMessageOptions: r,
                            isPushNotification: !1
                        })
                    },
                    sendBotMessage: function(e, t, n) {
                        null != n && f.ZP.trackWithMetadata(he.rMx.AUTOMATED_MESSAGE_RECEIVED, {
                            message_author: "Clyde",
                            message_name: n
                        });
                        Pe.receiveMessage(e, (0, Z.cs)({
                            channelId: e,
                            content: t,
                            loggingName: n
                        }))
                    },
                    sendClydeError: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                            n = v.Z.getChannel(e);
                        if (null != n) {
                            var r, o;
                            if (t === he.evJ.EXPLICIT_CONTENT)
                                if (n.isDM()) {
                                    r = pe.Z.Messages.BOT_DM_EXPLICIT_CONTENT.format({
                                        name: (0, p.F6)(n, ae.default, te.Z)
                                    });
                                    o = "BOT_DM_EXPLICIT_CONTENT"
                                } else if (n.isMultiUserDM()) {
                                r = pe.Z.Messages.BOT_GDM_EXPLICIT_CONTENT.format({
                                    name: (0, p.F6)(n, ae.default, te.Z)
                                });
                                o = "BOT_GDM_EXPLICIT_CONTENT"
                            } else {
                                var a = q.Z.getGuild(n.getGuildId());
                                if (null == a) return;
                                r = pe.Z.Messages.BOT_GUILD_EXPLICIT_CONTENT.format({
                                    name: a.toString()
                                });
                                o = "BOT_GUILD_EXPLICIT_CONTENT"
                            } else if (t === he.evJ.SLOWMODE_RATE_LIMITED) {
                                r = pe.Z.Messages.CHANNEL_SLOWMODE_DESC.format({
                                    seconds: n.rateLimitPerUser
                                });
                                o = "SLOWMODE_RATE_LIMITED"
                            } else if (t === he.evJ.INVALID_MESSAGE_SEND_USER) {
                                r = pe.Z.Messages.BOT_DM_SEND_FAILED_WITH_HELP_LINK.format({
                                    helpUrl: se.Z.getArticleURL(he.BhN.DM_COULD_NOT_BE_DELIVERED)
                                });
                                o = "INVALID_MESSAGE_SEND_USER"
                            } else if (t === he.evJ.TOO_MANY_THREADS) {
                                var i = n.isForumLikeChannel() || n.isForumPost();
                                r = i ? pe.Z.Messages.BOT_DM_TOO_MANY_POSTS : pe.Z.Messages.BOT_DM_TOO_MANY_THREADS;
                                o = "TOO_MANY_THREADS"
                            } else if (t === he.evJ.TOO_MANY_ANNOUNCEMENT_THREADS) {
                                r = pe.Z.Messages.BOT_DM_TOO_MANY_ANNOUNCEMENT_THREADS;
                                o = "TOO_MANY_ANNOUNCEMENT_THREADS"
                            } else if (t === he.evJ.HARMFUL_LINK_MESSAGE_BLOCKED) {
                                r = pe.Z.Messages.HARMFUL_LINK_MESSAGE_BLOCKED_ERROR.format({
                                    helpUrl: he.EYA.HARMFUL_LINKS
                                });
                                o = "HARMFUL_LINK_MESSAGE_BLOCKED"
                            } else if (t in we) {
                                o = we[t].messageName;
                                r = we[t].messageGetter()
                            } else {
                                r = pe.Z.Messages.BOT_DM_SEND_FAILED_WITH_HELP_LINK.format({
                                    helpUrl: se.Z.getArticleURL(he.BhN.DM_COULD_NOT_BE_DELIVERED)
                                });
                                o = "SEND_FAILED (".concat(t, ")")
                            }
                            Pe.sendBotMessage(e, r, o)
                        }
                    },
                    truncateMessages: function(e, t, n) {
                        l.Z.dispatch({
                            type: "TRUNCATE_MESSAGES",
                            channelId: e,
                            truncateBottom: t,
                            truncateTop: n
                        })
                    },
                    clearChannel: function(e) {
                        l.Z.dispatch({
                            type: "CLEAR_MESSAGES",
                            channelId: e
                        })
                    },
                    jumpToPresent: function(e, t) {
                        Pe.trackJump(e, null, "Present");
                        var n = {
                            present: !0
                        };
                        _.Z.hasPresent(e) ? l.Z.dispatch({
                            type: "LOAD_MESSAGES_SUCCESS_CACHED",
                            jump: n,
                            channelId: e,
                            limit: t
                        }) : Pe.fetchMessages({
                            channelId: e,
                            limit: t,
                            jump: n
                        })
                    },
                    trackJump: function(e, t, n, r) {
                        f.ZP.trackWithMetadata(he.rMx.JUMP, me({
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
                            a = e.offset,
                            i = e.context,
                            u = e.extraProperties,
                            l = void 0 === u ? null : u,
                            s = e.isPreload,
                            c = e.returnMessageId,
                            f = e.skipLocalFetch,
                            d = e.jumpType;
                        "string" == typeof i && Pe.trackJump(t, n, i, l);
                        return Pe.fetchMessages({
                            channelId: t,
                            limit: he.Z8P,
                            jump: {
                                messageId: n,
                                flash: o,
                                offset: a,
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
                        Pe.fetchMessages({
                            channelId: t,
                            limit: he.Z8P,
                            focus: {
                                messageId: n
                            }
                        })
                    },
                    fetchMessages: function(e) {
                        var t = e.channelId,
                            n = e.before,
                            r = e.after,
                            o = e.jump,
                            a = e.focus,
                            u = e.isPreload,
                            c = e.skipLocalFetch,
                            f = e.truncate,
                            d = e.limit,
                            h = v.Z.getChannel(t),
                            E = A.Z.isConnectedOrOverlay(),
                            p = Date.now();
                        if (null != h && h.type === he.d4z.GUILD_STORE) return !1;
                        if (t !== V.V) {
                            Te.log("Fetching messages for ".concat(t, " between ").concat(n, " and ").concat(r, ". jump=").concat(JSON.stringify(o)));
                            if (!Pe._tryFetchMessagesCached({
                                    channelId: t,
                                    before: n,
                                    after: r,
                                    limit: d,
                                    jump: o,
                                    focus: a,
                                    truncate: f
                                })) {
                                J.Z.fetchMessages.recordStart();
                                var g = null != o ? o : void 0;
                                null == g && null != a && (g = me({}, a));
                                var _ = s.Z.getOrCreate(t).loadStart(g);
                                s.Z.commit(_);
                                l.Z.dispatch({
                                    type: "LOAD_MESSAGES"
                                });
                                var m = null == g ? void 0 : g.messageId,
                                    b = new Le;
                                c || this.fetchLocalMessages(t, n, r, d, b);
                                return i.ZP.get({
                                    url: he.ANM.MESSAGES(t),
                                    query: {
                                        before: n,
                                        after: r,
                                        limit: d,
                                        around: m,
                                        preload: u
                                    },
                                    retries: 2,
                                    oldFormErrors: !0
                                }).then((function(e) {
                                    J.Z.fetchMessages.recordEnd();
                                    J.Z.dispatchMessages.measure((function() {
                                        var a, i = e.body,
                                            u = null != n,
                                            s = null != r,
                                            c = null == n && null == r,
                                            g = null != m || i.length === d && (u || c),
                                            v = null != m || s && i.length === d;
                                        if (null != m) {
                                            var _ = Math.floor(d / 2),
                                                O = [m].concat(Se(i.map((function(e) {
                                                    return e.id
                                                })))).filter((function(e, t, n) {
                                                    return n.indexOf(e) === t
                                                })).sort(fe.Z.compare).indexOf(m);
                                            O < _ && (g = !1);
                                            i.length - O < _ && (v = !1);
                                            if (v && i.length > 0) {
                                                var S = ee.ZP.lastMessageId(t);
                                                i[0].id === S && (v = !1)
                                            }
                                        }
                                        Te.log("Fetched ".concat(i.length, " messages for ").concat(t, " isBefore:").concat(u, " isAfter:").concat(s));
                                        b.markComplete();
                                        if ((0, G.m7)(null !== (a = null == h ? void 0 : h.guild_id) && void 0 !== a ? a : "") && (null == o ? void 0 : o.isHighlight)) {
                                            var I = (0, y.HK)(t, ee.ZP.ackMessageId(t));
                                            if (I.length >= 0) {
                                                var M = I[0];
                                                if (null == i.find((function(e) {
                                                        return e.id === M
                                                    }))) {
                                                    Pe.jumpToMessage({
                                                        channelId: t,
                                                        messageId: M,
                                                        flash: null == o ? void 0 : o.flash,
                                                        jumpType: null == o ? void 0 : o.jumpType
                                                    });
                                                    return !0
                                                }
                                            }
                                        }
                                        l.Z.dispatch({
                                            type: "LOAD_MESSAGES_SUCCESS",
                                            channelId: t,
                                            messages: i,
                                            isBefore: u,
                                            isAfter: s,
                                            hasMoreBefore: g,
                                            hasMoreAfter: v,
                                            limit: d,
                                            jump: o,
                                            isStale: !E || A.Z.lastTimeConnectedChanged() >= p,
                                            truncate: f
                                        })
                                    }));
                                    return !0
                                }), (function() {
                                    Te.log("Failed to fetch messages for ".concat(t));
                                    l.Z.dispatch({
                                        type: "LOAD_MESSAGES_FAILURE",
                                        channelId: t
                                    });
                                    return !1
                                }))
                            }
                        }
                    },
                    fetchLocalMessages: function(e, t, n, r, o) {
                        return ve((function() {
                            var a, i, u, c, f;
                            return Ae(this, (function(p) {
                                switch (p.label) {
                                    case 0:
                                        a = v.Z.getBasicChannel(e);
                                        i = s.Z.getOrCreate(e);
                                        if (null == (u = d.Z.database()) || null == a || null != t || null != n) {
                                            J.Z.addLocalMessages(e, -1);
                                            return [2]
                                        }
                                        if (i.ready && !i.cached) {
                                            J.Z.addLocalMessages(e, -2);
                                            return [2]
                                        }
                                        return [4, (0, h.dI)((function() {
                                            return E.ZP.load(u, e, r)
                                        }))];
                                    case 1:
                                        if (null == (c = p.sent())) {
                                            J.Z.addLocalMessages(e, -3);
                                            return [2]
                                        }
                                        Te.log("fetched ".concat(c.messages.length, " messages from local database (channel_id: ").concat(e, ", remote_fetch_completed: ").concat(o.completed, ")"));
                                        J.Z.addLocalMessages(e, c.messages.length);
                                        if (!o.completed && c.messages.length > 0) {
                                            f = c.messages.length >= r && c.connectionId === A.Z.lastTimeConnectedChanged();
                                            l.Z.dispatch({
                                                type: "LOCAL_MESSAGES_LOADED",
                                                guildId: a.guild_id,
                                                channelId: e,
                                                users: c.users,
                                                members: c.members,
                                                messages: c.messages,
                                                stale: !f
                                            })
                                        }
                                        return [2]
                                }
                            }))
                        }))()
                    },
                    fetchNewLocalMessages: function(e, t) {
                        return ve((function() {
                            var n, r, o, a, i, u, c;
                            return Ae(this, (function(f) {
                                switch (f.label) {
                                    case 0:
                                        r = v.Z.getBasicChannel(e);
                                        return null == (o = d.Z.database()) || null == r || (a = s.Z.getOrCreate(e)).hasMoreAfter ? [2] : [4, (0, h.dI)((function() {
                                            return E.ZP.load(o, e, t)
                                        }))];
                                    case 1:
                                        if (null == (i = f.sent())) return [2];
                                        a = s.Z.getOrCreate(e);
                                        u = null === (n = a.last()) || void 0 === n ? void 0 : n.id;
                                        c = null == u ? i.messages : i.messages.filter((function(e) {
                                            return fe.Z.compare(e.id, u) > 0
                                        }));
                                        Te.log("Fetched ".concat(i.messages.length, " messages from the cache after foregrounding. ").concat(c.length, " are new"));
                                        if (0 === c.length) return [2];
                                        l.Z.dispatch({
                                            type: "LOCAL_MESSAGES_LOADED",
                                            guildId: r.guild_id,
                                            channelId: e,
                                            users: i.users,
                                            members: i.members,
                                            messages: c,
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
                            a = e.jump,
                            i = e.focus,
                            u = e.truncate,
                            s = _.Z.getMessages(t);
                        if (s.cached || !s.ready) return !1;
                        if (null != (null == a ? void 0 : a.messageId) || null != (null == i ? void 0 : i.messageId)) {
                            if (null != (null == a ? void 0 : a.messageId) && s.has(a.messageId, !1)) {
                                l.Z.dispatch({
                                    type: "LOAD_MESSAGES_SUCCESS_CACHED",
                                    channelId: t,
                                    jump: a,
                                    limit: o,
                                    truncate: u
                                });
                                return !0
                            }
                            if (null != (null == i ? void 0 : i.messageId)) {
                                if (s.has(i.messageId, !1)) {
                                    l.Z.dispatch({
                                        type: "LOAD_MESSAGES_SUCCESS_CACHED",
                                        channelId: t,
                                        focus: i,
                                        limit: o,
                                        truncate: u
                                    });
                                    return !0
                                }
                                a = me({}, i)
                            }
                            var c = null != (null == a ? void 0 : a.messageId) ? fe.Z.extractTimestamp(null == a ? void 0 : a.messageId) : 0,
                                f = s.first(),
                                d = s.last();
                            if (!s.hasMoreBefore && null != f && fe.Z.extractTimestamp(f.id) >= c || !s.hasMoreAfter && null != d && fe.Z.extractTimestamp(d.id) <= c) {
                                l.Z.dispatch({
                                    type: "LOAD_MESSAGES_SUCCESS_CACHED",
                                    channelId: t,
                                    jump: a,
                                    limit: he.Z8P
                                });
                                return !0
                            }
                            if (null != f && null != d && fe.Z.extractTimestamp(f.id) < c && fe.Z.extractTimestamp(d.id) > c) {
                                l.Z.dispatch({
                                    type: "LOAD_MESSAGES_SUCCESS_CACHED",
                                    channelId: t,
                                    jump: a,
                                    limit: he.Z8P
                                });
                                return !0
                            }
                            return !1
                        }
                        if (null != n && s.hasBeforeCached(n)) {
                            l.Z.dispatch({
                                type: "LOAD_MESSAGES_SUCCESS_CACHED",
                                channelId: t,
                                before: n,
                                limit: o,
                                truncate: u
                            });
                            return !0
                        }
                        if (null != r && s.hasAfterCached(r)) {
                            l.Z.dispatch({
                                type: "LOAD_MESSAGES_SUCCESS_CACHED",
                                channelId: t,
                                after: r,
                                limit: o,
                                truncate: u
                            });
                            return !0
                        }
                        return !1
                    },
                    sendMessage: function(e, t) {
                        var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                        return ve((function() {
                            var o, a, i;
                            return Ae(this, (function(u) {
                                switch (u.label) {
                                    case 0:
                                        return t.reaction ? [2, Promise.resolve()] : [4, F(e)];
                                    case 1:
                                        if (null != (o = u.sent())) return [2, Pe.sendMessage(o, t, n, r)];
                                        a = function() {
                                            return Pe._sendMessage(e, t, r)
                                        };
                                        i = P.getCurrentConfig({
                                            location: "8e1e29_1"
                                        }).enableBackgroundSending ? R.backgroundify(a, void 0) : a;
                                        return n && e !== V.V ? [2, new Promise((function(t, n) {
                                            _.Z.whenReady(e, (function() {
                                                return i().then(t, n)
                                            }))
                                        }))] : [2, i()]
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
                                parse: Object.values(he.hCA),
                                replied_user: !1
                            }
                        };
                        var t
                    },
                    sendInvite: function(e, t, n, r) {
                        return Pe._sendMessage(e, {
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
                        return Pe._sendMessage(e, {
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
                        return Pe._sendMessage(e, {
                            content: n,
                            invalidEmojis: [],
                            validNonShortcutEmojis: [],
                            tts: o
                        }, be(me({}, r), {
                            stickerIds: t
                        }))
                    },
                    sendGreetMessage: function(e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            r = n.messageReference,
                            o = n.allowedMentions;
                        return i.ZP.post({
                            url: he.ANM.MESSAGES_GREET(e),
                            body: {
                                sticker_ids: [t],
                                allowed_mentions: o,
                                message_reference: r
                            },
                            oldFormErrors: !0
                        }).then((function(n) {
                            N(n.body.content, e);
                            Pe.receiveMessage(e, n.body);
                            l.Z.dispatch({
                                type: "STICKER_TRACK_USAGE",
                                stickerIds: [t]
                            });
                            return n
                        }), (function(t) {
                            Te.log("Failed to send greeting");
                            429 !== t.status && Pe.sendClydeError(e, t.body.code);
                            l.Z.dispatch({
                                type: "MESSAGE_SEND_FAILED",
                                messageId: t.body.id,
                                channelId: e
                            });
                            throw t
                        }))
                    },
                    _sendMessage: function(e, t, n) {
                        var r = F(e);
                        if (null != r) return r.then((function(e) {
                            return Pe._sendMessage(e, t, n)
                        }));
                        var o, i = t.content,
                            u = t.invalidEmojis,
                            s = t.validNonShortcutEmojis,
                            d = t.tts,
                            h = void 0 !== d && d,
                            E = n.activityAction,
                            p = n.location,
                            y = n.suggestedInvite,
                            _ = n.stickerIds,
                            m = n.messageReference,
                            b = n.allowedMentions,
                            M = null !== (o = n.flags) && void 0 !== o ? o : 0,
                            A = Oe((0, K.ZP)(i), 2),
                            T = A[0],
                            C = A[1];
                        if (T) {
                            i = C;
                            M = (0, ue.pj)(M, he.iLy.SUPPRESS_NOTIFICATIONS)
                        }
                        if ("" === i && null == E && null == _) return Promise.reject(new Error("not sending empty message"));
                        var w, P = null != m ? he.uaV.REPLY : he.uaV.DEFAULT,
                            R = null !== (w = n.nonce) && void 0 !== w ? w : (0, Z.rv)(),
                            j = R;
                        if (!1 !== n.eagerDispatch) {
                            var G = (0, Z.ZP)({
                                channelId: e,
                                content: i,
                                tts: h,
                                type: P,
                                messageReference: m,
                                allowedMentions: b,
                                flags: 0 !== M ? M : void 0,
                                nonce: R
                            });
                            (0, k.EL)(e, G.id);
                            null != _ && (G.sticker_items = _.map((function(e) {
                                return Y.Z.getStickerById(e)
                            })).filter((function(e) {
                                return null != e
                            })));
                            Pe.receiveMessage(e, G, !0, n)
                        }
                        if (!De && null != u && u.length > 0) {
                            De = !0;
                            var x, V, H = ae.default.getCurrentUser();
                            if (u.some((function(e) {
                                    return e.animated
                                })) && !ce.ZP.canUseAnimatedEmojis(H)) {
                                x = pe.Z.Messages.INVALID_ANIMATED_EMOJI_BODY_UPGRADE;
                                V = "INVALID_ANIMATED_EMOJI_BODY"
                            } else if ($.Z.canWithPartialContext(he.Plq.USE_EXTERNAL_EMOJIS, {
                                    channelId: e
                                })) {
                                x = pe.Z.Messages.INVALID_EXTERNAL_EMOJI_BODY_UPGRADE;
                                V = "INVALID_EXTERNAL_EMOJI_BODY_UPGRADE"
                            } else {
                                x = pe.Z.Messages.INVALID_EXTERNAL_EMOJI_BODY;
                                V = "INVALID_EXTERNAL_EMOJI_BODY"
                            }
                            Pe.sendBotMessage(e, x, V)
                        }
                        var W = {
                            type: c.$V.SEND,
                            message: {
                                channelId: e,
                                content: i,
                                nonce: R,
                                tts: h,
                                message_reference: m,
                                allowed_mentions: b,
                                flags: M
                            }
                        };
                        if (null != E) {
                            var J = E.type === he.mFx.JOIN_REQUEST ? null == E ? void 0 : E.activity.session_id : g.default.getSessionId();
                            if (null != J) {
                                var z = {
                                        type: E.type,
                                        session_id: J
                                    },
                                    q = E.activity;
                                null != q.party && null != q.party.id && (z.party_id = q.party.id);
                                W.message.application_id = q.application_id;
                                W.message.activity = z
                            }
                        }
                        null != _ && (W.message.sticker_ids = _);
                        B.Z.isEnabled() && (W.message.has_poggermode_enabled = !0);
                        O(e) && (W.message.allow_proactive_clyde_reply = !0);
                        return new Promise((function(t, r) {
                            var o = Date.now(),
                                u = c.ZP.length;
                            c.ZP.enqueue(W, (function(c) {
                                var d = Date.now() - o;
                                if (c.ok) {
                                    N(i, e);
                                    Pe.receiveMessage(e, c.body, !0, {
                                        sendAnalytics: {
                                            duration: d,
                                            queueSize: u
                                        }
                                    });
                                    l.Z.dispatch({
                                        type: "SLOWMODE_RESET_COOLDOWN",
                                        slowmodeType: oe.S.SendMessage,
                                        channelId: e
                                    });
                                    l.Z.dispatch({
                                        type: "EMOJI_TRACK_USAGE",
                                        emojiUsed: s
                                    });
                                    l.Z.dispatch({
                                        type: "STICKER_TRACK_USAGE",
                                        stickerIds: _
                                    });
                                    ! function(e) {
                                        var t = e.content,
                                            n = e.channelId,
                                            r = e.messageId,
                                            o = e.location,
                                            i = e.suggested,
                                            u = void 0 === i ? null : i,
                                            l = e.overrideProperties,
                                            s = void 0 === l ? {} : l;
                                        (0, I.ZP)(t).forEach((function(e) {
                                            var t = e.type,
                                                i = e.code;
                                            if (t === S.g.INVITE) Ce({
                                                inviteKey: i,
                                                channelId: n,
                                                messageId: r,
                                                location: o,
                                                suggested: u,
                                                overrideProperties: s
                                            });
                                            else if (t === S.g.TEMPLATE) {
                                                var l = L.Z.getGuildTemplate(i);
                                                if (null == l || l.state === Ee.Rj.RESOLVING) return;
                                                f.ZP.trackWithMetadata(he.rMx.GUILD_TEMPLATE_LINK_SENT, {
                                                    guild_template_code: i,
                                                    guild_template_name: l.name,
                                                    guild_template_description: l.description,
                                                    guild_template_guild_id: l.sourceGuildId
                                                })
                                            } else if (t === S.g.BUILD_OVERRIDE);
                                            else if (t === S.g.EVENT);
                                            else if (t === S.g.CHANNEL_LINK);
                                            else if (t === S.g.APP_DIRECTORY_PROFILE) ie.default.track(he.rMx.APP_DIRECTORY_PROFILE_EMBED_SENT, {
                                                application_id: i,
                                                device_platform: a.tq ? "mobile_web" : "desktop_web",
                                                guild_id: re.Z.getGuildId(),
                                                channel_id: ne.Z.getChannelId()
                                            });
                                            else if (t === S.g.ACTIVITY_BOOKMARK);
                                            else if (t === S.g.EMBEDDED_ACTIVITY_INVITE);
                                            else if (t !== S.g.GUILD_PRODUCT) throw Error("Unknown coded link type: ".concat(t))
                                        }))
                                    }({
                                        content: i,
                                        channelId: e,
                                        messageId: c.body.id,
                                        location: null != p ? p : "chat_input",
                                        suggested: y
                                    });
                                    ! function(e, t, n, r, o) {
                                        (0, le.Q_)(e).forEach((function(e) {
                                            var a = v.Z.getChannel(t);
                                            null != a && f.ZP.trackWithMetadata(he.rMx.GIFT_CODE_SENT, {
                                                location: r,
                                                gift_code: e,
                                                guild_id: a.getGuildId(),
                                                channel_id: a.id,
                                                channel_type: a.type,
                                                message_id: n,
                                                automatic_send: o
                                            })
                                        }))
                                    }(i, e, c.body.id, null != p ? p : "chat_input", !!n.isGiftLinkSentOnBehalfOfUser);
                                    t(c)
                                } else {
                                    var h;
                                    Te.log("Failed to send message", {
                                        hasErr: c.hasErr,
                                        status: c.status,
                                        code: null === (h = c.body) || void 0 === h ? void 0 : h.code,
                                        error: c.err
                                    });
                                    var E = !1;
                                    if (c.hasErr) "ABORTED" === c.err.code && (E = !0);
                                    else if (c.status >= 400 && c.status < 500 && c.body)
                                        if (c.body.code === he.evJ.SLOWMODE_RATE_LIMITED) {
                                            var g = c.body.retry_after;
                                            null != g && g > 0 && l.Z.dispatch({
                                                type: "SLOWMODE_SET_COOLDOWN",
                                                channelId: e,
                                                slowmodeType: oe.S.SendMessage,
                                                cooldownMs: 1e3 * g
                                            })
                                        } else D.U8.has(c.body.code) ? l.Z.dispatch({
                                            type: "MESSAGE_SEND_FAILED_AUTOMOD",
                                            messageData: W,
                                            errorResponseBody: {
                                                code: c.body.code,
                                                message: c.body.message
                                            }
                                        }) : c.body.code === he.evJ.POGGERMODE_TEMPORARILY_DISABLED ? l.Z.dispatch({
                                            type: "POGGERMODE_TEMPORARILY_DISABLED"
                                        }) : c.body.code === he.evJ.CLYDE_CONSENT_REQUIRED ? l.Z.dispatch({
                                            type: "MESSAGE_FAILED_CLYDE_CONSENT",
                                            messageId: j,
                                            channelId: e
                                        }) : Pe.sendClydeError(e, c.body.code);
                                    if (E) Pe.deleteMessage(e, j, !0);
                                    else {
                                        l.Z.dispatch({
                                            type: "MESSAGE_SEND_FAILED",
                                            messageId: j,
                                            channelId: e
                                        });
                                        (0, U.x)({
                                            failureCode: c.hasErr ? void 0 : c.status,
                                            errorMessage: c.hasErr ? c.err.message : void 0
                                        })
                                    }
                                    r(c)
                                }
                            }))
                        }))
                    },
                    startEditMessage: function(e, t, n) {
                        l.Z.dispatch({
                            type: "MESSAGE_START_EDIT",
                            channelId: e,
                            messageId: t,
                            content: n
                        })
                    },
                    updateEditMessage: function(e, t, n) {
                        l.Z.dispatch({
                            type: "MESSAGE_UPDATE_EDIT",
                            channelId: e,
                            textValue: t,
                            richValue: n
                        })
                    },
                    endEditMessage: function(e, t) {
                        l.Z.dispatch({
                            type: "MESSAGE_END_EDIT",
                            channelId: e,
                            response: t
                        })
                    },
                    editMessage: function(e, t, n) {
                        var r = n.content;
                        return ve((function() {
                            var n, o;
                            return Ae(this, (function(a) {
                                switch (a.label) {
                                    case 0:
                                        return [4, W.Z.unarchiveThreadIfNecessary(e)];
                                    case 1:
                                        a.sent();
                                        n = function(e, t) {
                                            var n = _.Z.getMessage(e, t);
                                            if (null != n && n.type === he.uaV.REPLY) {
                                                var r = H.Z.getMessageByReference(n.messageReference);
                                                if (r.state === H.Y.LOADED && !n.mentions.includes(r.message.author.id)) return {
                                                    parse: Object.values(he.hCA),
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
                                        c.ZP.enqueue({
                                            type: c.$V.EDIT,
                                            message: o
                                        }, (function(n) {
                                            var r = !n.hasErr && D.U8.has(n.body.code);
                                            if (r) {
                                                var a = {
                                                    type: c.$V.EDIT,
                                                    message: o
                                                };
                                                l.Z.dispatch({
                                                    type: "MESSAGE_EDIT_FAILED_AUTOMOD",
                                                    messageData: a,
                                                    errorResponseBody: {
                                                        code: n.body.code,
                                                        message: n.body.message
                                                    }
                                                })
                                            }
                                            n.hasErr ? u.uv.announce(pe.Z.Messages.A11Y_ANNOUNCEMENT_MESSAGE_EDITED_FAILED) : r ? u.uv.announce(pe.Z.Messages.A11Y_ANNOUNCEMENT_MESSAGE_EDITED_AUTOMOD_BLOCKED) : u.uv.announce(pe.Z.Messages.A11Y_ANNOUNCEMENT_MESSAGE_EDITED);
                                            Pe.endEditMessage(e, n.hasErr ? void 0 : n);
                                            Pe.focusMessage({
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
                        return ve((function() {
                            return Ae(this, (function(n) {
                                switch (n.label) {
                                    case 0:
                                        return [4, W.Z.unarchiveThreadIfNecessary(e)];
                                    case 1:
                                        n.sent();
                                        i.ZP.patch({
                                            url: he.ANM.MESSAGE(e, t),
                                            body: {
                                                flags: he.iLy.SUPPRESS_EMBEDS
                                            },
                                            oldFormErrors: !0
                                        });
                                        return [2]
                                }
                            }))
                        }))()
                    },
                    patchMessageAttachments: function(e, t, n) {
                        return ve((function() {
                            return Ae(this, (function(r) {
                                switch (r.label) {
                                    case 0:
                                        return [4, W.Z.unarchiveThreadIfNecessary(e)];
                                    case 1:
                                        r.sent();
                                        i.ZP.patch({
                                            url: he.ANM.MESSAGE(e, t),
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
                        return ve((function() {
                            var r, o;
                            return Ae(this, (function(a) {
                                switch (a.label) {
                                    case 0:
                                        r = function() {
                                            l.Z.dispatch({
                                                type: "MESSAGE_DELETE",
                                                id: t,
                                                channelId: e
                                            }).then((function() {
                                                u.uv.announce(pe.Z.Messages.A11Y_ANNOUNCEMENT_MESSAGE_DELETED)
                                            }))
                                        };
                                        if (!n) return [3, 1];
                                        r();
                                        return [3, 3];
                                    case 1:
                                        return [4, W.Z.unarchiveThreadIfNecessary(e)];
                                    case 2:
                                        a.sent();
                                        i.ZP.delete({
                                            url: he.ANM.MESSAGE(e, t),
                                            oldFormErrors: !0
                                        }).then((function() {
                                            r()
                                        }));
                                        a.label = 3;
                                    case 3:
                                        (null == (o = _.Z.getMessage(e, t)) ? void 0 : o.type) === he.uaV.GUILD_INVITE_REMINDER && (0, j.O)();
                                        return [2]
                                }
                            }))
                        }))()
                    },
                    dismissAutomatedMessage: function(e) {
                        null != e.loggingName && f.ZP.trackWithMetadata(he.rMx.AUTOMATED_MESSAGE_DISMISSED, {
                            message_name: e.loggingName,
                            message_author: e.author.username
                        });
                        this.deleteMessage(e.channel_id, e.id, !0)
                    },
                    revealMessage: function(e, t) {
                        l.Z.dispatch({
                            type: "MESSAGE_REVEAL",
                            channelId: e,
                            messageId: t
                        })
                    },
                    crosspostMessage: function(e, t) {
                        return i.ZP.post({
                            url: he.ANM.MESSAGE_CROSSPOST(e, t),
                            oldFormErrors: !0
                        }).catch((function(e) {
                            var t;
                            t = 429 === e.status ? pe.Z.Messages.PUBLISH_FOLLOWED_NEWS_FAIL_BODY.format({
                                retryAfter: Math.floor(e.body.retry_after / 60)
                            }) : pe.Z.Messages.PUBLISH_FOLLOWED_NEWS_GENERIC_BODY;
                            de.Z.show({
                                title: pe.Z.Messages.PUBLISH_FOLLOWED_NEWS_FAIL_TITLE,
                                body: t,
                                confirmText: pe.Z.Messages.OKAY
                            })
                        }))
                    },
                    trackInvite: Ce
                });
            const Re = Pe
        },
        983622: (e, t, n) => {
            n.d(t, {
                ZP: () => D
            });
            var r = n(112916),
                o = n(296602),
                a = n(652555),
                i = n(61209),
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
                        var r, o, a = [],
                            i = !0,
                            u = !1;
                        try {
                            for (n = n.call(e); !(i = (r = n.next()).done); i = !0) {
                                a.push(r.value);
                                if (t && a.length === t) break
                            }
                        } catch (e) {
                            u = !0;
                            o = e
                        } finally {
                            try {
                                i || null == n.return || n.return()
                            } finally {
                                if (u) throw o
                            }
                        }
                        return a
                    }
                }(e, t) || E(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function h(e) {
                return function(e) {
                    if (Array.isArray(e)) return f(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || E(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function E(e, t) {
                if (e) {
                    if ("string" == typeof e) return f(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    return "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? f(e, t) : void 0
                }
            }
            var p = function() {
                    function e() {
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e)
                    }
                    e.fromMessage = function(t, n, r, o) {
                        var a = d(e.deriveMemberUsers(t, r), 2),
                            i = a[0],
                            u = a[1];
                        return {
                            id: r.id,
                            channelId: n,
                            message: r,
                            members: i,
                            users: u,
                            connectionId: o
                        }
                    };
                    e.deriveMemberUsers = function(e, t) {
                        var n, r, o, a = new Set([t.author.id, null === (n = t.interaction) || void 0 === n ? void 0 : n.user.id].concat(h(null !== (o = null === (r = t.mentions) || void 0 === r ? void 0 : r.map((function(e) {
                                return e.id
                            }))) && void 0 !== o ? o : []))),
                            i = [],
                            u = [],
                            l = !0,
                            f = !1,
                            d = void 0;
                        try {
                            for (var E, p = a[Symbol.iterator](); !(l = (E = p.next()).done); l = !0) {
                                var y = E.value;
                                if (null != y) {
                                    var g = c.default.getUser(y),
                                        v = s.ZP.getTrueMember(null != e ? e : "", y);
                                    null != g && u.push(g);
                                    null != v && i.push(v)
                                }
                            }
                        } catch (e) {
                            f = !0;
                            d = e
                        } finally {
                            try {
                                l || null == p.return || p.return()
                            } finally {
                                if (f) throw d
                            }
                        }
                        return [i, u]
                    };
                    return e
                }(),
                y = n(996246),
                g = n(345551),
                v = n(994130);

            function _(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function m(e, t, n, r, o, a, i) {
                try {
                    var u = e[a](i),
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
                        var a = e.apply(t, n);

                        function i(e) {
                            m(a, r, o, i, u, "next", e)
                        }

                        function u(e) {
                            m(a, r, o, i, u, "throw", e)
                        }
                        i(void 0)
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
                        var r, o, a = [],
                            i = !0,
                            u = !1;
                        try {
                            for (n = n.call(e); !(i = (r = n.next()).done); i = !0) {
                                a.push(r.value);
                                if (t && a.length === t) break
                            }
                        } catch (e) {
                            u = !0;
                            o = e
                        } finally {
                            try {
                                i || null == n.return || n.return()
                            } finally {
                                if (u) throw o
                            }
                        }
                        return a
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return _(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var M = function(e, t) {
                    var n, r, o, a, i = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return a = {
                        next: u(0),
                        throw: u(1),
                        return: u(2)
                    }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                        return this
                    }), a;

                    function u(a) {
                        return function(u) {
                            return function(a) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; i;) try {
                                    if (n = 1, r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, a[1])).done) return o;
                                    (r = 0, o) && (a = [2 & a[0], o.value]);
                                    switch (a[0]) {
                                        case 0:
                                        case 1:
                                            o = a;
                                            break;
                                        case 4:
                                            i.label++;
                                            return {
                                                value: a[1], done: !1
                                            };
                                        case 5:
                                            i.label++;
                                            r = a[1];
                                            a = [0];
                                            continue;
                                        case 7:
                                            a = i.ops.pop();
                                            i.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = i.trys, o = o.length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                                i = 0;
                                                continue
                                            }
                                            if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                                i.label = a[1];
                                                break
                                            }
                                            if (6 === a[0] && i.label < o[1]) {
                                                i.label = o[1];
                                                o = a;
                                                break
                                            }
                                            if (o && i.label < o[2]) {
                                                i.label = o[2];
                                                i.ops.push(a);
                                                break
                                            }
                                            o[2] && i.ops.pop();
                                            i.trys.pop();
                                            continue
                                    }
                                    a = t.call(e, i)
                                } catch (e) {
                                    a = [6, e];
                                    r = 0
                                } finally {
                                    n = o = 0
                                }
                                if (5 & a[0]) throw a[1];
                                return {
                                    value: a[0] ? a[1] : void 0,
                                    done: !0
                                }
                            }([a, u])
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
                                a = o[0],
                                i = o[1];
                            t.length > 0 && t.every((function(e) {
                                return e.connectionId === r
                            })) && (this.connectionId = r);
                            this.users = a;
                            this.members = i;
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
                            a = void 0;
                        try {
                            for (var i, u = e[Symbol.iterator](); !(r = (i = u.next()).done); r = !0) {
                                var l = i.value;
                                this.addIntoMap(t, l.users, (function(e) {
                                    return e.id
                                }));
                                this.addIntoMap(n, l.members, (function(e) {
                                    return e.userId
                                }))
                            }
                        } catch (e) {
                            o = !0;
                            a = e
                        } finally {
                            try {
                                r || null == u.return || u.return()
                            } finally {
                                if (o) throw a
                            }
                        }
                        return [Array.from(t.values()), Array.from(n.values())]
                    };
                    e.addIntoMap = function(e, t, n) {
                        var r = !0,
                            o = !1,
                            a = void 0;
                        try {
                            for (var i, u = t[Symbol.iterator](); !(r = (i = u.next()).done); r = !0) {
                                var l = i.value,
                                    s = n(l),
                                    c = e.get(s);
                                (null == c || c.incomplete && !l.incomplete) && e.set(s, l)
                            }
                        } catch (e) {
                            o = !0;
                            a = e
                        } finally {
                            try {
                                r || null == u.return || u.return()
                            } finally {
                                if (o) throw a
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
                        return M(this, (function(a) {
                            switch (a.label) {
                                case 0:
                                    return [4, l.Z.messages(e).getLatest(t, n, r)];
                                case 1:
                                    o = a.sent();
                                    return [2, new T(o)]
                            }
                        }))
                    }))()
                };
                t.load = function(e, t, n) {
                    return b((function() {
                        var r, o;
                        return M(this, (function(a) {
                            switch (a.label) {
                                case 0:
                                    r = i.Z.getBasicChannel(t);
                                    return null != t && null != r && (0, g.v)(r) ? [3, 1] : [2, new T([])];
                                case 1:
                                    return [4, l.Z.messages(e).getLatest(r.guild_id, t, n)];
                                case 2:
                                    o = a.sent();
                                    return [2, new T(o)];
                                case 3:
                                    return [2]
                            }
                        }))
                    }))()
                };
                t.canSaveChannel = function(e) {
                    return null != e && i.Z.hasChannel(e) && y.ZP.canSave(e)
                };
                t.handleMessageCreate = function(e, t) {
                    e.optimistic || e.isPushNotification || null != e.sendMessageOptions || this.canSaveChannel(e.channelId) && this.upsertOne(e.guildId, e.channelId, e.message, t)
                };
                t.handleMessageUpdate = function(e, t) {
                    if (null != e.message.id && null != e.message.channel_id && this.canSaveChannel(e.message.channel_id)) {
                        null != (n = e.message).author && null != n.content && null != n.mentions && null != n.timestamp ? this.upsertOne(e.guildId, e.message.channel_id, e.message, t) : this.updateOne(e.guildId, e.message.channel_id, e.message, t);
                        var n
                    }
                };
                t.handleMessagePreviewsLoaded = function(e, t) {
                    var n = !0,
                        r = !1,
                        o = void 0;
                    try {
                        for (var a, i = e.messages[Symbol.iterator](); !(n = (a = i.next()).done); n = !0) {
                            var u = a.value;
                            this.insertStale(e.guildId, u.channel_id, u, t)
                        }
                    } catch (e) {
                        r = !0;
                        o = e
                    } finally {
                        try {
                            n || null == i.return || i.return()
                        } finally {
                            if (r) throw o
                        }
                    }
                };
                t.handleLoadMessagesSuccess = function(e, t) {
                    var n = i.Z.getBasicChannel(e.channelId);
                    this.canSaveChannel(e.channelId) && null != n && this.upsertMany(n.guild_id, e.channelId, e.messages, t)
                };
                t.handleMessageDelete = function(e, t) {
                    null != e.id ? this.deleteOne(e.guildId, e.channelId, e.id, t) : u.Z.captureException(new Error("MESSAGE_DELETE with a null id (guild_id: ".concat(e.guildId, ", channel_id: ").concat(e.channelId, ").")))
                };
                t.handleMessageDeleteBulk = function(e, t) {
                    var n = !0,
                        r = !1,
                        o = void 0;
                    try {
                        for (var a, i = e.ids[Symbol.iterator](); !(n = (a = i.next()).done); n = !0) {
                            var u = a.value;
                            this.deleteOne(e.guildId, e.channelId, u, t)
                        }
                    } catch (e) {
                        r = !0;
                        o = e
                    } finally {
                        try {
                            n || null == i.return || i.return()
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
                    var i = l.Z.messagesTransaction(o),
                        u = a.Z.lastTimeConnectedChanged();
                    i.put(e, t, p.fromMessage(e, t, n, u), r.Sn.Skip)
                };
                t.upsertOne = function(e, t, n, o) {
                    var i = l.Z.messagesTransaction(o),
                        u = a.Z.lastTimeConnectedChanged();
                    i.put(e, t, p.fromMessage(e, t, n, u), r.Sn.Replace);
                    i.trimChannel(e, t, y.ZP.saveLimit(t))
                };
                t.upsertMany = function(e, t, n, r) {
                    var o = l.Z.messagesTransaction(r),
                        i = a.Z.lastTimeConnectedChanged(),
                        u = !0,
                        s = !1,
                        c = void 0;
                    try {
                        for (var f, d = n[Symbol.iterator](); !(u = (f = d.next()).done); u = !0) {
                            var h = f.value;
                            o.put(e, t, p.fromMessage(e, t, h, i))
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
                    o.trimChannel(e, t, y.ZP.saveLimit(t))
                };
                t.updateOne = function(e, t, n, r) {
                    return b((function() {
                        var o, i, u;
                        return M(this, (function(s) {
                            switch (s.label) {
                                case 0:
                                    if (null == n.id) {
                                        A.warn("updateOne: message.id is null; cannot update a message if we do not know its id.");
                                        return [2]
                                    }
                                    return [4, (o = l.Z.messages(r.database)).get(e, t, n.id)];
                                case 1:
                                    i = s.sent();
                                    u = a.Z.lastTimeConnectedChanged();
                                    null != i && o.put(e, t, p.fromMessage(e, t, function(e) {
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
                                    }({}, i.message, n), u));
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
        996246: (e, t, n) => {
            n.d(t, {
                ZP: () => H
            });
            var r = n(202351),
                o = n(744564),
                a = n(61209),
                i = n(27851),
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
            var E = function() {
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

            function p(e, t) {
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

            function g(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, a = [],
                            i = !0,
                            u = !1;
                        try {
                            for (n = n.call(e); !(i = (r = n.next()).done); i = !0) {
                                a.push(r.value);
                                if (t && a.length === t) break
                            }
                        } catch (e) {
                            u = !0;
                            o = e
                        } finally {
                            try {
                                i || null == n.return || n.return()
                            } finally {
                                if (u) throw o
                            }
                        }
                        return a
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return p(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return p(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var v = function() {
                    function e(t, n) {
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e);
                        this.primary = new E(t);
                        this.extended = new E(n)
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
                                    var a = g(r.value, 2),
                                        i = a[0],
                                        u = a[1];
                                    this.primary.put(i, u);
                                    this.extended.delete(i);
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
                        t && y(e.prototype, t);
                        n && y(e, n)
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
                _ = n(2590);

            function m(e) {
                var t, n = null !== (t = i.Z.getMemberCount(null == e ? void 0 : e.guild_id)) && void 0 !== t ? t : 0;
                return null != e && e.type !== _.d4z.DM && e.type !== _.d4z.GROUP_DM && n >= 1e4
            }
            var b = n(345551),
                O = n(107218),
                S = n(102921);

            function I(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function M(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, a = [],
                            i = !0,
                            u = !1;
                        try {
                            for (n = n.call(e); !(i = (r = n.next()).done); i = !0) {
                                a.push(r.value);
                                if (t && a.length === t) break
                            }
                        } catch (e) {
                            u = !0;
                            o = e
                        } finally {
                            try {
                                i || null == n.return || n.return()
                            } finally {
                                if (u) throw o
                            }
                        }
                        return a
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return I(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return I(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function A(e) {
                return e.type === _.d4z.DM || e.type === _.d4z.GROUP_DM || e.type === _.d4z.GUILD_TEXT
            }

            function T(e, t, n) {
                n.hasExtended(t.id) || n.put(t.id, {
                    guildId: e,
                    channelId: t.id,
                    channelType: t.type,
                    fallback: !0
                })
            }

            function D(e, t) {
                var n = !0,
                    r = !1,
                    o = void 0;
                try {
                    for (var a, i = t.allEntries()[Symbol.iterator](); !(n = (a = i.next()).done); n = !0) {
                        var u = M(a.value, 2),
                            l = u[0],
                            s = u[1];
                        e.put(l, s)
                    }
                } catch (e) {
                    r = !0;
                    o = e
                } finally {
                    try {
                        n || null == i.return || i.return()
                    } finally {
                        if (r) throw o
                    }
                }
                return e
            }

            function L(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function C(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function w(e) {
                w = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return w(e)
            }

            function P(e, t) {
                return !t || "object" !== Z(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function R(e, t) {
                R = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return R(e, t)
            }

            function N(e) {
                return function(e) {
                    if (Array.isArray(e)) return L(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return L(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return L(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var Z = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function U(e) {
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
                    var n, r = w(e);
                    if (t) {
                        var o = w(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return P(this, n)
                }
            }
            Math.max(25, 25, 25);
            var j = null,
                G = new v(750, 500),
                k = new E(15),
                B = !1,
                x = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        t && R(e, t)
                    }(n, e);
                    var t = U(n);

                    function n() {
                        C(this, n);
                        return t.apply(this, arguments)
                    }
                    var r = n.prototype;
                    r.initialize = function() {
                        this.waitFor(a.Z);
                        this.waitFor(u.Z);
                        this.waitFor(i.Z);
                        this.syncWith([l.Z], (function() {
                            return !0
                        }));
                        this.syncWith([u.Z], V)
                    };
                    r.canEvictOrphans = function() {
                        return B
                    };
                    r.canSave = function(e) {
                        return l.Z.isLowDisk ? (null == j ? void 0 : j.channelId) === e : G.has(e)
                    };
                    r.saveLimit = function(e) {
                        var t = G.get(e);
                        return null != t && this.canSave(e) ? (t.channelType === _.d4z.DM || (t.channelType, _.d4z.GROUP_DM), 25) : 25
                    };
                    r.getSaveableChannels = function() {
                        return l.Z.isLowDisk ? null != j ? [j] : [] : G.values()
                    };
                    r.toSnapshot = function() {
                        return {
                            v: 1,
                            channels: N(G.allValues()).filter((function(e) {
                                return !e.fallback
                            })),
                            penalized: N(k.keys()),
                            lastChannel: j
                        }
                    };
                    r.__getLocalVars = function() {
                        return {
                            MAXIMUM_SAVED_CHANNELS: 750,
                            MAXIMUM_SAVED_PENALIZED_CHANNELS: 15,
                            MAXIMUM_ADDITIONAL_TRACKED_CHANNELS: 500,
                            lastChannel: j,
                            lru: G,
                            penalizations: k,
                            snapshotLoaded: B
                        }
                    };
                    n.mergeSnapshot = function(e) {
                        var t = G,
                            n = k;
                        G = new v(G.primaryCapacity, G.extendedCapacity);
                        k = new E(k.capacity);
                        j = null != j ? j : e.lastChannel;
                        for (var r = 0, o = [e.channels, t.values()]; r < o.length; r++) {
                            var a = o[r],
                                i = !0,
                                u = !1,
                                l = void 0;
                            try {
                                for (var s, c = a[Symbol.iterator](); !(i = (s = c.next()).done); i = !0) {
                                    var f = s.value;
                                    f.fallback || G.put(f.channelId, f)
                                }
                            } catch (e) {
                                u = !0;
                                l = e
                            } finally {
                                try {
                                    i || null == c.return || c.return()
                                } finally {
                                    if (u) throw l
                                }
                            }
                        }
                        for (var d = 0, h = [e.penalized, n.keys()]; d < h.length; d++) {
                            var p = h[d],
                                y = !0,
                                g = !1,
                                _ = void 0;
                            try {
                                for (var m, b = p[Symbol.iterator](); !(y = (m = b.next()).done); y = !0) {
                                    var O = m.value;
                                    k.put(O, null)
                                }
                            } catch (e) {
                                g = !0;
                                _ = e
                            } finally {
                                try {
                                    y || null == b.return || b.return()
                                } finally {
                                    if (g) throw _
                                }
                            }
                        }
                    };
                    n.recordChannel = function(e) {
                        var t = a.Z.getBasicChannel(e);
                        if (null != t && (0, b.v)(t)) {
                            var n, r = {
                                guildId: null !== (n = t.guild_id) && void 0 !== n ? n : null,
                                channelId: e,
                                channelType: t.type
                            };
                            j = r;
                            G.put(e, r);
                            if (m(t)) {
                                null != k.put(e, null) && G.delete(e)
                            }
                        }
                    };
                    n.deleteChannel = function(e) {
                        G.delete(e)
                    };
                    n.deleteGuild = function(e) {
                        var t = !0,
                            n = !1,
                            r = void 0;
                        try {
                            for (var o, a = G.allValues()[Symbol.iterator](); !(t = (o = a.next()).done); t = !0) {
                                var i = o.value;
                                i.guildId === e && G.delete(i.channelId)
                            }
                        } catch (e) {
                            n = !0;
                            r = e
                        } finally {
                            try {
                                t || null == a.return || a.return()
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
                            for (var o, i = G.keys()[Symbol.iterator](); !(e = (o = i.next()).done); e = !0) {
                                var u = o.value,
                                    l = a.Z.getBasicChannel(u);
                                (0, b.v)(l) || n.deleteChannel(u)
                            }
                        } catch (e) {
                            t = !0;
                            r = e
                        } finally {
                            try {
                                e || null == i.return || i.return()
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
                            for (var a, i = G.values()[Symbol.iterator](); !(t = (a = i.next()).done); t = !0) {
                                var u = a.value;
                                e !== u.guildId || (0, b.$)(u.channelId) || n.deleteChannel(u.channelId)
                            }
                        } catch (e) {
                            r = !0;
                            o = e
                        } finally {
                            try {
                                t || null == i.return || i.return()
                            } finally {
                                if (r) throw o
                            }
                        }
                    };
                    n.replaceLru = function(e) {
                        G = e
                    };
                    return n
                }(r.ZP.Store);

            function V() {
                var e = u.Z.getChannelId();
                null != e && x.recordChannel(e)
            }

            function F(e) {
                var t = e.id,
                    n = (0,
                        b.v)(e),
                    r = u.Z.getChannelId();
                n && t === r && x.recordChannel(t);
                n || x.deleteChannel(t)
            }
            const H = new x(o.Z, {
                CACHE_LOADED_LAZY_NO_CACHE: function(e) {
                    B = !0
                },
                CACHE_LOADED_LAZY: function(e) {
                    B = !0;
                    null != e.saveableChannels && x.mergeSnapshot(e.saveableChannels)
                },
                CHANNEL_DELETE: function(e) {
                    x.deleteChannel(e.channel.id)
                },
                CHANNEL_UPDATES: function(e) {
                    var t = !0,
                        n = !1,
                        r = void 0;
                    try {
                        for (var o, a = e.channels[Symbol.iterator](); !(t = (o = a.next()).done); t = !0) {
                            F(o.value)
                        }
                    } catch (e) {
                        n = !0;
                        r = e
                    } finally {
                        try {
                            t || null == a.return || a.return()
                        } finally {
                            if (n) throw r
                        }
                    }
                },
                CONNECTION_OPEN_SUPPLEMENTAL: function() {
                    x.dropUnreachableChannels();
                    x.replaceLru(function(e, t) {
                        if (e.totalLength >= t) return e;
                        var n = new v(e.primaryCapacity, e.extendedCapacity),
                            r = t - e.totalLength,
                            o = !0,
                            i = !1,
                            u = void 0;
                        try {
                            for (var l, s = a.Z.getSortedPrivateChannels()[Symbol.iterator](); !(o = (l = s.next()).done); o = !0) {
                                var c = l.value;
                                if (null != c.lastMessageId) {
                                    if (Date.now() - S.Z.extractTimestamp(c.lastMessageId) >= 7776e6) break;
                                    T(null, c, n);
                                    if (n.totalLength >= r) return D(n, e)
                                }
                            }
                        } catch (e) {
                            i = !0;
                            u = e
                        } finally {
                            try {
                                o || null == s.return || s.return()
                            } finally {
                                if (i) throw u
                            }
                        }
                        var f = !0,
                            d = !1,
                            h = void 0;
                        try {
                            for (var E, p = O.Z.getGuildFolders()[Symbol.iterator](); !(f = (E = p.next()).done); f = !0) {
                                var y = E.value,
                                    g = !0,
                                    _ = !1,
                                    I = void 0;
                                try {
                                    for (var M, L = y.guildIds[Symbol.iterator](); !(g = (M = L.next()).done); g = !0) {
                                        var C = M.value,
                                            w = !0,
                                            P = !1,
                                            R = void 0;
                                        try {
                                            for (var N, Z = Object.values(a.Z.getMutableBasicGuildChannelsForGuild(C))[Symbol.iterator](); !(w = (N = Z.next()).done); w = !0) {
                                                var U = N.value;
                                                A(U) && (0, b.v)(U) && !m(U) && T(C, U, n);
                                                if (n.totalLength >= r) return D(n, e)
                                            }
                                        } catch (e) {
                                            P = !0;
                                            R = e
                                        } finally {
                                            try {
                                                w || null == Z.return || Z.return()
                                            } finally {
                                                if (P) throw R
                                            }
                                        }
                                    }
                                } catch (e) {
                                    _ = !0;
                                    I = e
                                } finally {
                                    try {
                                        g || null == L.return || L.return()
                                    } finally {
                                        if (_) throw I
                                    }
                                }
                            }
                        } catch (e) {
                            d = !0;
                            h = e
                        } finally {
                            try {
                                f || null == p.return || p.return()
                            } finally {
                                if (d) throw h
                            }
                        }
                        return D(n, e)
                    }(G, 1250))
                },
                GUILD_DELETE: function(e) {
                    if (!e.guild.unavailable) {
                        x.deleteGuild(e.guild.id);
                        return !0
                    }
                    return !1
                },
                LOGIN_SUCCESS: function(e) {
                    G.clear();
                    k.clear();
                    B = !1
                },
                THREAD_DELETE: function(e) {
                    x.deleteChannel(e.channel.id)
                },
                THREAD_UPDATE: function(e) {
                    F(e.channel)
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
                a = n(682776),
                i = n(2590),
                u = i.S7T.VIEW_CHANNEL | i.S7T.READ_MESSAGE_HISTORY;

            function l(e) {
                return null != e && (e.type === i.d4z.DM || e.type === i.d4z.GROUP_DM || (0, r.Qm)(e.type) && a.Z.canBasicChannel(u, e))
            }

            function s(e) {
                return l(o.Z.getBasicChannel(null != e ? e : ""))
            }
        },
        431187: (e, t, n) => {
            n.d(t, {
                Z: () => p
            });
            var r = n(95560),
                o = n(744564),
                a = n(296602),
                i = n(247075);

            function u(e, t, n, r, o, a, i) {
                try {
                    var u = e[a](i),
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
                    var n, r, o, a, i = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return a = {
                        next: u(0),
                        throw: u(1),
                        return: u(2)
                    }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                        return this
                    }), a;

                    function u(a) {
                        return function(u) {
                            return function(a) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; i;) try {
                                    if (n = 1, r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, a[1])).done) return o;
                                    (r = 0, o) && (a = [2 & a[0], o.value]);
                                    switch (a[0]) {
                                        case 0:
                                        case 1:
                                            o = a;
                                            break;
                                        case 4:
                                            i.label++;
                                            return {
                                                value: a[1], done: !1
                                            };
                                        case 5:
                                            i.label++;
                                            r = a[1];
                                            a = [0];
                                            continue;
                                        case 7:
                                            a = i.ops.pop();
                                            i.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = i.trys, o = o.length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                                i = 0;
                                                continue
                                            }
                                            if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                                i.label = a[1];
                                                break
                                            }
                                            if (6 === a[0] && i.label < o[1]) {
                                                i.label = o[1];
                                                o = a;
                                                break
                                            }
                                            if (o && i.label < o[2]) {
                                                i.label = o[2];
                                                i.ops.push(a);
                                                break
                                            }
                                            o[2] && i.ops.pop();
                                            i.trys.pop();
                                            continue
                                    }
                                    a = t.call(e, i)
                                } catch (e) {
                                    a = [6, e];
                                    r = 0
                                } finally {
                                    n = o = 0
                                }
                                if (5 & a[0]) throw a[1];
                                return {
                                    value: a[0] ? a[1] : void 0,
                                    done: !0
                                }
                            }([a, u])
                        }
                    }
                },
                E = new a.Z("FileSystemStore");
            const p = new(function(e) {
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
                    e.waitFor(i.Z);
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
                        var e, n, r, o, a, u;
                        return h(this, (function(l) {
                            switch (l.label) {
                                case 0:
                                    return [4, null === (n = null === (e = i.Z.database()) || void 0 === e ? void 0 : e.fsInfo()) || void 0 === n ? void 0 : n.catch((function(e) {
                                        return E.warn("couldn't get fs info", e)
                                    }))];
                                case 1:
                                    if (null != (r = l.sent())) {
                                        o = r.fs.available < 268435456 || r.fs.available < 3 * r.database.used || r.fs.available < 2 * r.database.total;
                                        a = r.fs.available > 805306368 && r.fs.available > 4 * r.database.used && r.fs.available > 4 * r.database.total;
                                        if (null != (u = !!o || !a && null) && t.isLowDisk !== u) {
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
                            var a = e.apply(t, n);

                            function i(e) {
                                u(a, r, o, i, l, "next", e)
                            }

                            function l(e) {
                                u(a, r, o, i, l, "throw", e)
                            }
                            i(void 0)
                        }))
                    })()
                };
                return n
            }(r.Z))
        },
        201891: (e, t, n) => {
            n.d(t, {
                V6: () => g,
                uS: () => v,
                U8: () => _,
                $q: () => m,
                uF: () => b
            });
            var r = n(769915),
                o = n(61209),
                a = n(2590),
                i = n(473708);

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
                return !t || "object" !== E(t) && "function" != typeof t ? function(e) {
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
            var E = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function p(e) {
                var t = "function" == typeof Map ? new Map : void 0;
                p = function(e) {
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
                return p(e)
            }

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
            var g = function(e) {
                    f(n, e);
                    var t = y(n);

                    function n() {
                        u(this, n);
                        return t.apply(this, arguments)
                    }
                    return n
                }(p(Error)),
                v = function(e) {
                    f(n, e);
                    var t = y(n);

                    function n() {
                        u(this, n);
                        return t.apply(this, arguments)
                    }
                    return n
                }(p(Error)),
                _ = new Set([a.evJ.AUTOMOD_MESSAGE_BLOCKED, a.evJ.AUTOMOD_TITLE_BLOCKED, a.evJ.AUTOMOD_INVALID_RUST_SERVICE_RESPONSE]);

            function m(e, t) {
                if (null == e) return null;
                var n = e.code,
                    r = e.message;
                if (!_.has(n)) return null;
                if (null != r) return r;
                if (null == t) return null;
                var u = o.Z.getChannel(t);
                if (null == u ? void 0 : u.isThread()) return i.Z.Messages.THREAD_AUTOMOD_ERROR;
                if ((null == u ? void 0 : u.isForumPost()) || (null == u ? void 0 : u.isForumLikeChannel())) {
                    if (n === a.evJ.AUTOMOD_TITLE_BLOCKED) return i.Z.Messages.FORUM_POST_AUTOMOD_ERROR;
                    if (n === a.evJ.AUTOMOD_MESSAGE_BLOCKED) return i.Z.Messages.FORUM_POST_AUTOMOD_ERROR
                }
                return null
            }

            function b(e, t) {
                var n = m(t);
                return null != n ? n : null == e ? i.Z.Messages.GUILD_AUTOMOD_BLOCKED_MESSAGE_SEND_NOTICE : function(e) {
                    var t = o.Z.getChannel(e.message.channelId);
                    return (0, r.Bz)(e) ? i.Z.Messages.GUILD_AUTOMOD_BLOCKED_MESSAGE_EDIT_NOTICE : (null == t ? void 0 : t.isThread()) ? i.Z.Messages.THREAD_AUTOMOD_ERROR : (null == t ? void 0 : t.isForumPost()) || (null == t ? void 0 : t.isForumLikeChannel()) ? i.Z.Messages.FORUM_POST_AUTOMOD_ERROR : i.Z.Messages.GUILD_AUTOMOD_BLOCKED_MESSAGE_SEND_NOTICE
                }(e)
            }
        },
        158434: (e, t, n) => {
            n.d(t, {
                Z: () => S
            });
            var r = n(202351),
                o = n(744564),
                a = n(652991),
                i = n(335150);

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
                return !t || "object" !== E(t) && "function" != typeof t ? function(e) {
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
            var E = function(e) {
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
                    var n, r = s(e);
                    if (t) {
                        var o = s(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return d(this, n)
                }
            }
            var y = {},
                g = null;

            function v(e, t) {
                var n, r = null !== (n = y[e]) && void 0 !== n ? n : {
                    code: e,
                    state: i.Rj.RESOLVING
                };
                t(r = c({}, r));
                y = f(c({}, y), l({}, e, r))
            }

            function _(e) {
                m(e.guildTemplate)
            }

            function m(e) {
                return v(e.code, (function(t) {
                    var n = (0, a.Z)(e);
                    for (var r in n) t[r] = n[r]
                }))
            }

            function b(e) {
                return v(e.code, (function(e) {
                    e.state = i.Rj.EXPIRED
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
                var t = p(n);

                function n() {
                    u(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.getGuildTemplate = function(e) {
                    return null != e ? y[e] : null
                };
                r.getGuildTemplates = function() {
                    return y
                };
                r.getForGuild = function(e) {
                    for (var t in y) {
                        var n = y[t];
                        if ("sourceGuildId" in n && n.sourceGuildId === e && n.state !== i.Rj.EXPIRED) return n
                    }
                };
                r.getDisplayedGuildTemplateCode = function() {
                    return g
                };
                r.__getLocalVars = function() {
                    return {
                        guildTemplates: y,
                        displayedGuildTemplateCode: g
                    }
                };
                return n
            }(r.ZP.Store);
            O.displayName = "GuildTemplateStore";
            const S = new O(o.Z, {
                GUILD_TEMPLATE_RESOLVE: function(e) {
                    var t = e.code;
                    y = f(c({}, y), l({}, t, {
                        code: t,
                        state: i.Rj.RESOLVING
                    }))
                },
                GUILD_TEMPLATE_CREATE_SUCCESS: _,
                GUILD_TEMPLATE_SYNC_SUCCESS: _,
                GUILD_TEMPLATE_RESOLVE_SUCCESS: _,
                GUILD_TEMPLATE_LOAD_FOR_GUILD_SUCCESS: function(e) {
                    e.guildTemplates.forEach((function(e) {
                        return m(e)
                    }))
                },
                GUILD_TEMPLATE_RESOLVE_FAILURE: b,
                GUILD_TEMPLATE_DELETE_SUCCESS: b,
                GUILD_TEMPLATE_ACCEPT: function(e) {
                    return v(e.code, (function(e) {
                        e.state = i.Rj.ACCEPTING
                    }))
                },
                GUILD_TEMPLATE_ACCEPT_SUCCESS: function(e) {
                    return v(e.code, (function(e) {
                        e.state = i.Rj.ACCEPTED;
                        var t;
                        e.usageCount = (null !== (t = e.usageCount) && void 0 !== t ? t : 0) + 1
                    }))
                },
                GUILD_TEMPLATE_ACCEPT_FAILURE: function(e) {
                    return v(e.code, (function(e) {
                        e.state = i.Rj.RESOLVED
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
                Z: () => r
            });

            function r() {
                var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                    n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                    r = window.GLOBAL_ENV.INVITE_HOST;
                e = "/".concat(t);
                return "".concat(n ? "".concat(location.protocol, "//") : "").concat(r).concat(e)
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
                a = n(490355),
                i = n(722406),
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
                    E = e.messageReference,
                    p = e.allowedMentions,
                    y = e.author,
                    g = e.flags,
                    v = e.nonce,
                    _ = [];
                if (h === s.uaV.REPLY) {
                    o()(null != E, "Replies must have a message reference");
                    if (null == p || p.replied_user) {
                        var m = a.Z.getMessageByReference(E);
                        (null == m ? void 0 : m.state) === a.Y.LOADED && _.push(f(m.message.author))
                    }
                }
                null == y && (y = u.default.getCurrentUser());
                y instanceof i.Z && (y = f(y));
                o()(null != y, "createMessage: author cannot be undefined");
                return {
                    id: null != v ? v : c(),
                    type: h,
                    content: n,
                    channel_id: t,
                    author: y,
                    attachments: [],
                    embeds: [],
                    pinned: !1,
                    mentions: _,
                    mention_channels: [],
                    mention_roles: [],
                    mention_everyone: !1,
                    timestamp: (new Date).toISOString(),
                    state: s.yb.SENDING,
                    tts: l,
                    message_reference: E,
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
                        avatar: "clyde_ai",
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
                x: () => a
            });
            var r = n(396043),
                o = n(2590);

            function a(e) {
                var t, n, a, i = null != e.fileItems ? e.fileItems.map((function(e) {
                        return null !== (t = e.mimeType) && void 0 !== t ? t : "unknown"
                    })) : [],
                    u = null !== (n = e.errorMessage) && void 0 !== n ? n : void 0,
                    l = null !== (a = e.failureCode) && void 0 !== a ? a : void 0;
                (0, r.yw)(o.rMx.SEND_MESSAGE_FAILURE, {
                    failure_code: l,
                    error_message: u,
                    attachment_mimetypes: i
                })
            }
        },
        438285: (e, t, n) => {
            n.d(t, {
                w: () => u,
                O: () => l
            });
            var r, o, a = n(396043),
                i = n(2590);
            ! function(e) {
                e.REMINDER_NOTIFICATION = "Reminder Notification"
            }(r || (r = {}));
            ! function(e) {
                e.GUILD_INVITE = "Guild Invite"
            }(o || (o = {}));

            function u() {
                a.ZP.trackWithMetadata(i.rMx.NOTIFICATION_CTA_CLICKED, {
                    notification_type: r.REMINDER_NOTIFICATION,
                    action: o.GUILD_INVITE,
                    dismissed: !1
                })
            }

            function l() {
                a.ZP.trackWithMetadata(i.rMx.NOTIFICATION_CTA_CLICKED, {
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
                a = n(785085),
                i = n(44616),
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
                        var r, o, a = [],
                            i = !0,
                            u = !1;
                        try {
                            for (n = n.call(e); !(i = (r = n.next()).done); i = !0) {
                                a.push(r.value);
                                if (t && a.length === t) break
                            }
                        } catch (e) {
                            u = !0;
                            o = e
                        } finally {
                            try {
                                i || null == n.return || n.return()
                            } finally {
                                if (u) throw o
                            }
                        }
                        return a
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

            function E(e) {
                switch (e) {
                    case c.oZ.CHAT_INPUT:
                        return "chat_input";
                    case c.oZ.MENTION:
                        return "mention";
                    case c.oZ.VOICE_USER:
                        return "voice_user"
                }
            }

            function p(e) {
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

            function y(e, t) {
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
                    a = e.shakeIntensity,
                    i = e.screenshakeEnabledLocations,
                    u = e.confettiEnabled,
                    l = e.confettiSize,
                    c = e.confettiCount,
                    d = e.confettiEnabledLocations;
                s.default.track(f.rMx.POGGERMODE_SETTINGS_UPDATED, {
                    enabled: t,
                    combos_enabled: n,
                    combos_required_count: r,
                    screenshake_enabled: o,
                    shake_intensity: a,
                    screenshake_enabled_locations: y(i, E),
                    confetti_enabled: u,
                    confetti_size: l,
                    confetti_count: c,
                    confetti_enabled_locations: y(d, p)
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

            function _(e) {
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

            function m(e, t) {
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
                var t = _({}, a.Z.getState(), e);
                g(t)
            }

            function O(e) {
                r.Z.dispatch(_({
                    type: "POGGERMODE_UPDATE_COMBO"
                }, e))
            }

            function S(e) {
                r.Z.dispatch({
                    type: "POGGERMODE_UPDATE_MESSAGE_COMBO",
                    comboMessage: m(_({}, e), {
                        displayed: !0
                    })
                })
            }

            function I(e, t) {
                var n, a = o.default.getId(),
                    u = i.ZP.getUserCombo(a, e);
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
                    userId: a,
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
                JR: () => p,
                u4: () => y
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

            function a(e) {
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

            function i(e, t) {
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
                        var r, o, a = [],
                            i = !0,
                            u = !1;
                        try {
                            for (n = n.call(e); !(i = (r = n.next()).done); i = !0) {
                                a.push(r.value);
                                if (t && a.length === t) break
                            }
                        } catch (e) {
                            u = !0;
                            o = e
                        } finally {
                            try {
                                i || null == n.return || n.return()
                            } finally {
                                if (u) throw o
                            }
                        }
                        return a
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
            var d, h, E = (o(f = {}, c.LEVEL_1, [
                        [1, 1e-4],
                        [25, .05],
                        [50, .1],
                        [100, .5],
                        [250, 1],
                        [500, 2],
                        [1e3, 3],
                        [9001, 4]
                    ]),
                    o(f, c.LEVEL_2, [
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
                    ]), o(f, c.LEVEL_5, [
                        [1, .001],
                        [25, .5],
                        [50, 1],
                        [100, 2],
                        [250, 5],
                        [500, 10],
                        [1e3, 100],
                        [9001, 1e4]
                    ]), f),
                p = Object.keys(E).reduce((function(e, t) {
                    return i(a({}, e), o({}, t, E[t].map((function(e) {
                        return u(e, 1)[0]
                    }))))
                }), (o(d = {}, c.LEVEL_1, []), o(d, c.LEVEL_2, []), o(d, c.LEVEL_3, []), o(d, c.LEVEL_4, []), o(d, c.LEVEL_5, []), d)),
                y = Object.keys(E).reduce((function(e, t) {
                    return i(a({}, e), o({}, t, E[t].map((function(e) {
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
                a = n(744564),
                i = n(69540);

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
                return !t || "object" !== E(t) && "function" != typeof t ? function(e) {
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
            var E = function(e) {
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
                    var n, r = c(e);
                    if (t) {
                        var o = c(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return d(this, n)
                }
            }
            var y, g, v = !1,
                _ = {
                    settingsVisible: !1,
                    enabled: !1,
                    combosEnabled: !0,
                    combosRequiredCount: 5,
                    comboSoundsEnabled: !0,
                    screenshakeEnabled: !0,
                    screenshakeEnabledLocations: (y = {}, s(y, i.oZ.CHAT_INPUT, !0), s(y, i.oZ.VOICE_USER, !1), s(y, i.oZ.MENTION, !1), y),
                    shakeIntensity: 1,
                    confettiEnabled: !0,
                    confettiEnabledLocations: (g = {}, s(g, i.Hn.CHAT_INPUT, !0), s(g, i.Hn.REACTION, !0), s(g, i.Hn.MEMBER_USER, !0), s(g, i.Hn.CALL_TILE, !0), g),
                    confettiSize: 16,
                    confettiCount: 5,
                    warningSeen: !1
                },
                m = (0, r.cloneDeep)(_);
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
                var t = p(n);

                function n() {
                    u(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function(e) {
                    m = f({}, m, e)
                };
                r.getUserAgnosticState = function() {
                    return m
                };
                r.isEnabled = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = e.confettiLocation,
                        n = e.shakeLocation,
                        r = null == t || m.confettiEnabled && m.confettiEnabledLocations[t],
                        o = null == n || m.screenshakeEnabled && m.screenshakeEnabledLocations[n];
                    return this.settingsVisible && !v && m.enabled && r && o
                };
                r.__getLocalVars = function() {
                    return {
                        temporarilyDisabled: v,
                        state: m
                    }
                };
                ! function(e, t, n) {
                    t && l(e.prototype, t);
                    n && l(e, n)
                }(n, [{
                    key: "settingsVisible",
                    get: function() {
                        return m.settingsVisible
                    }
                }, {
                    key: "shakeIntensity",
                    get: function() {
                        return this.isEnabled() ? m.shakeIntensity : 0
                    }
                }, {
                    key: "combosRequiredCount",
                    get: function() {
                        return this.isEnabled() ? m.combosRequiredCount : 0
                    }
                }, {
                    key: "screenshakeEnabled",
                    get: function() {
                        return m.screenshakeEnabled
                    }
                }, {
                    key: "screenshakeEnabledLocations",
                    get: function() {
                        return m.screenshakeEnabledLocations
                    }
                }, {
                    key: "combosEnabled",
                    get: function() {
                        return m.combosEnabled
                    }
                }, {
                    key: "comboSoundsEnabled",
                    get: function() {
                        return m.comboSoundsEnabled
                    }
                }]);
                return n
            }(o.ZP.DeviceSettingsStore);
            b.displayName = "PoggermodeSettingsStore";
            b.persistKey = "PoggermodeSettingsStore";
            const O = new b(a.Z, {
                POGGERMODE_SETTINGS_UPDATE: function(e) {
                    var t = e.settings;
                    m = f({}, m, t)
                },
                POGGERMODE_TEMPORARILY_DISABLED: function() {
                    v = !0
                }
            })
        },
        44616: (e, t, n) => {
            n.d(t, {
                wU: () => C,
                ZP: () => R
            });
            var r = n(202351),
                o = n(575626),
                a = n(513328),
                i = n(744564),
                u = n(664625),
                l = n(715107),
                s = n(930948),
                c = n(785085),
                f = n(673383),
                d = n(69540),
                h = n(2590);

            function E(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function p(e, t, n) {
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

            function g(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        p(e, t, n[t])
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

            function _(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++) {
                        n = a[r];
                        t.indexOf(n) >= 0 || (o[n] = e[n])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < a.length; r++) {
                        n = a[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }

            function m(e, t) {
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
                    var n, r = y(e);
                    if (t) {
                        var o = y(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return m(this, n)
                }
            }
            var I = 1e3,
                M = new Set,
                A = new o.Z((function(e) {
                    return [e.userId, e.channelId]
                }), (function(e) {
                    var t = e.userId,
                        n = e.channelId;
                    return "".concat(n, "-").concat(t)
                }));
            var T = new o.Z((function(e) {
                    return [e.messageId, e.channelId, e.combo.userId]
                }), (function(e) {
                    var t = e.messageId,
                        n = e.channelId,
                        r = e.combo.userId;
                    return "".concat(n, "-").concat(r, "-").concat(t)
                })),
                D = function(e) {
                    var t = e.userId,
                        n = e.channelId;
                    return "".concat(t, "-").concat(n)
                };

            function L(e) {
                var t, n, r, o, i, u = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                    l = A.get(D(e)),
                    s = v(g({}, l, e), {
                        value: null !== (n = null !== (t = e.value) && void 0 !== t ? t : null == l ? void 0 : l.value) && void 0 !== n ? n : 0,
                        multiplier: Math.min(null !== (o = null !== (r = e.multiplier) && void 0 !== r ? r : null == l ? void 0 : l.multiplier) && void 0 !== o ? o : 1, 7),
                        decayInterval: null !== (i = null == l ? void 0 : l.decayInterval) && void 0 !== i ? i : new a.Xp
                    });
                A.set(D(e), s);
                if (u) {
                    var c;
                    null === (c = s.decayInterval) || void 0 === c || c.start(I, (function() {
                        var e = A.get(D(s));
                        if (null != e) {
                            var t = s.multiplier !== e.multiplier && s.value !== e.value;
                            if (e.value <= 0 || t) {
                                var n;
                                null === (n = e.decayInterval) || void 0 === n || n.stop();
                                if (e.value <= 0) {
                                    L(v(g({}, e), {
                                        value: 0,
                                        multiplier: 1
                                    }));
                                    P.emitChange()
                                }
                            } else {
                                L(v(g({}, e), {
                                    value: e.value - 1
                                }));
                                P.emitChange()
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
            var w = function(e) {
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
                    E(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    this.waitFor(u.default, l.Z)
                };
                r.getComboScore = function(e, t) {
                    var n = A.get(D({
                        userId: e,
                        channelId: t
                    }));
                    return null == n ? 0 : (0, f.Eo)(n)
                };
                r.getUserCombo = function(e, t) {
                    return A.get(D({
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
                    var t, n = T.get(e);
                    return null !== (t = null == n ? void 0 : n.combo) && void 0 !== t ? t : void 0
                };
                r.getMostRecentMessageCombo = function(e) {
                    var t = T.values(e);
                    return t[t.length - 1]
                };
                r.getUserComboShakeIntensity = function(e, t, n, r) {
                    var o = this.getUserCombo(e, t);
                    return null != o ? (0, f.KH)(o, r) * n : 0
                };
                r.__getLocalVars = function() {
                    return {
                        MAX_MULTIPLIER: 7,
                        DECAY_DELAY: I,
                        trackedMessageNonces: M,
                        comboStore: A,
                        messageComboStore: T,
                        store: P
                    }
                };
                return n
            }(r.ZP.Store);
            w.displayName = "PoggermodeStore";
            var P = new w(i.Z, {
                POGGERMODE_UPDATE_COMBO: function(e) {
                    e.type;
                    var t = _(e, ["type"]);
                    if (!c.Z.isEnabled()) return !1;
                    L(t)
                },
                POGGERMODE_UPDATE_MESSAGE_COMBO: function(e) {
                    var t, n = e.comboMessage;
                    if (!c.Z.isEnabled()) return !1;
                    t = n, T.set(t.messageId, t)
                },
                MESSAGE_CREATE: function(e) {
                    var t = e.channelId,
                        n = e.message,
                        r = n.mentions,
                        o = n.author,
                        a = n.nonce;
                    if (!c.Z.isEnabled()) return !1;
                    var i = u.default.getId();
                    if (!C(o.id, i, a, M)) return !1;
                    var l = A.get(D({
                        userId: o.id,
                        channelId: t
                    }));
                    if (c.Z.screenshakeEnabled && c.Z.screenshakeEnabledLocations[d.oZ.MENTION] && null != r && null != r.find((function(e) {
                            return e.id === i
                        }))) {
                        var E, p = null != l ? null !== (E = (0, f.KH)(l, d.qi.LEVEL_4)) && void 0 !== E ? E : .001 : 4 * Math.random();
                        s.S.dispatch(h.CkL.SHAKE_APP, {
                            duration: 1e3,
                            intensity: p
                        });
                        return !0
                    }
                    return !1
                }
            });
            const R = P
        },
        673383: (e, t, n) => {
            n.d(t, {
                KH: () => l,
                nc: () => d,
                yz: () => h,
                Eo: () => E
            });
            var r = n(69540),
                o = n(2590);

            function a(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function i(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, a = [],
                            i = !0,
                            u = !1;
                        try {
                            for (n = n.call(e); !(i = (r = n.next()).done); i = !0) {
                                a.push(r.value);
                                if (t && a.length === t) break
                            }
                        } catch (e) {
                            u = !0;
                            o = e
                        } finally {
                            try {
                                i || null == n.return || n.return()
                            } finally {
                                if (u) throw o
                            }
                        }
                        return a
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return a(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return a(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var u = function(e, t) {
                    var n = e.multiplier,
                        r = e.value,
                        o = i(t, 2),
                        a = o[0],
                        u = o[1],
                        l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                        s = r * n;
                    if (s <= 0) return 0;
                    var c = a.reduce((function(e, t, n) {
                        if (s > t) {
                            var r = u[n];
                            if (n + 1 === a.length) return u[n];
                            var o = a[n + 1],
                                i = u[n + 1];
                            return (s - t) / (o - t) * (i - r) + r
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
                    return i(e, 1)[0]
                })),
                f = s.map((function(e) {
                    var t = i(e, 2);
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

            function E(e) {
                var t;
                return e.value * (null !== (t = e.multiplier) && void 0 !== t ? t : 1)
            }
        },
        490355: (e, t, n) => {
            n.d(t, {
                Y: () => v,
                Z: () => N
            });
            var r = n(5387),
                o = n.n(r),
                a = n(202351),
                i = n(744564),
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

            function E(e) {
                E = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return E(e)
            }

            function p(e, t) {
                return !t || "object" !== _(t) && "function" != typeof t ? function(e) {
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

            function g(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, o, a = [],
                            i = !0,
                            u = !1;
                        try {
                            for (n = n.call(e); !(i = (r = n.next()).done); i = !0) {
                                a.push(r.value);
                                if (t && a.length === t) break
                            }
                        } catch (e) {
                            u = !0;
                            o = e
                        } finally {
                            try {
                                i || null == n.return || n.return()
                            } finally {
                                if (u) throw o
                            }
                        }
                        return a
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
            var v, _ = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

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
                    var n, r = E(e);
                    if (t) {
                        var o = E(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return p(this, n)
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
                            for (var a, i = this._channelCaches[Symbol.iterator](); !(n = (a = i.next()).done); n = !0) {
                                var u = g(a.value, 1)[0];
                                e(u) || t.push(u)
                            }
                        } catch (e) {
                            r = !0;
                            o = e
                        } finally {
                            try {
                                n || null == i.return || i.return()
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
                        var a = c.Z.getMessage(n.channel_id, r);
                        null != a ? I.set(n.channel_id, r, {
                            state: v.LOADED,
                            message: a
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
                    a = void 0;
                try {
                    for (var i, u = e[Symbol.iterator](); !(r = (i = u.next()).done); r = !0) {
                        n = !1 !== t(i.value) || n
                    }
                } catch (e) {
                    o = !0;
                    a = e
                } finally {
                    try {
                        r || null == u.return || u.return()
                    } finally {
                        if (o) throw a
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

            function L(e, t) {
                if (!I.has(e, t)) return !1;
                I.set(e, t, {
                    state: v.DELETED
                })
            }

            function C() {
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
                    t && y(e, t)
                }(n, e);
                var t = m(n);

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
                r.__getLocalVars = function() {
                    return {
                        NOT_LOADED: b,
                        NO_IDS: O,
                        referencedMessageCache: I,
                        instance: R
                    }
                };
                return n
            }(a.ZP.Store);
            P.displayName = "ReferencedMessageStore";
            var R = new P(i.Z, {
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
                    return L(e.channelId, t)
                },
                MESSAGE_DELETE_BULK: function(e) {
                    var t = e.ids,
                        n = e.channelId;
                    return A(t, (function(e) {
                        return L(n, e)
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
                CONNECTION_OPEN: C,
                LOGOUT: C
            });
            const N = R
        },
        331055: (e, t, n) => {
            n.d(t, {
                vD: () => a,
                BH: () => i,
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
                a = new RegExp("^".concat(o, "(\\s|$)"));

            function i() {
                return r.getCurrentConfig({
                    location: "456bd9_1"
                }, {
                    autoTrackExposure: !1
                }).allowSending
            }

            function u(e) {
                return i() ? null == e.match(a) ? [!1, e] : [!0, e.substring(o.length).trim()] : [!1, e]
            }
        },
        539273: (e, t, n) => {
            n.d(t, {
                S: () => y,
                Z: () => S
            });
            var r = n(202351),
                o = n(513328),
                a = n(744564),
                i = n(61209),
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
                return !t || "object" !== E(t) && "function" != typeof t ? function(e) {
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
            var E = function(e) {
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
                        var o = f(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return d(this, n)
                }
            }
            var y, g;
            ! function(e) {
                e[e.SendMessage = 0] = "SendMessage";
                e[e.CreateThread = 1] = "CreateThread"
            }(y || (y = {}));
            var v = (c(g = {}, y.SendMessage, {}), c(g, y.CreateThread, {}), g);

            function _(e, t, n) {
                ! function(e, t) {
                    if (null != v[t][e.id]) {
                        v[t][e.id].timer.stop();
                        delete v[t][e.id]
                    }
                }(e, t);
                if (!(function(e, t) {
                        return t === y.SendMessage ? u.Z.can(l.Plq.MANAGE_CHANNELS, e) || u.Z.can(l.Plq.MANAGE_MESSAGES, e) : u.Z.can(l.Plq.MANAGE_THREADS, e)
                    }(e, t) || n <= 0)) {
                    var r = n + Date.now();
                    v[t][e.id] = {
                        rateLimitPerUser: e.rateLimitPerUser,
                        cooldownMs: n,
                        cooldownEndTimestamp: r,
                        timer: new o.V7
                    };
                    v[t][e.id].timer.start(1e3, (function() {
                        a.Z.dispatch({
                            type: "SLOWMODE_SET_COOLDOWN",
                            channelId: e.id,
                            slowmodeType: t,
                            cooldownMs: Math.max(r - Date.now(), 0)
                        })
                    }), !0)
                }
            }

            function m(e, t) {
                var n = i.Z.getChannel(e);
                if (null == n) return !1;
                _(n, t, 0 === n.rateLimitPerUser ? 0 : 1e3 * n.rateLimitPerUser + 100)
            }

            function b(e) {
                var t = e.file,
                    n = i.Z.getChannel(t.channelId);
                return null != n && _(n, y.SendMessage, 0)
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
                var t = p(n);

                function n() {
                    s(this, n);
                    return t.apply(this, arguments)
                }
                var r = n.prototype;
                r.initialize = function() {
                    this.waitFor(i.Z)
                };
                r.getSlowmodeCooldownGuess = function(e, t) {
                    var n = v[null != t ? t : y.SendMessage][e];
                    return null != n ? n.cooldownMs : 0
                };
                r.__getLocalVars = function() {
                    return {
                        SLOWMODE_COOLDOWN_BUFFER_MS: 100,
                        slowmodeCooldownGuessByChannel: v
                    }
                };
                return n
            }(r.ZP.Store);
            O.displayName = "SlowmodeStore";
            const S = new O(a.Z, {
                SLOWMODE_RESET_COOLDOWN: function(e) {
                    return m(e.channelId, e.slowmodeType)
                },
                SLOWMODE_SET_COOLDOWN: function(e) {
                    var t = e.channelId,
                        n = e.slowmodeType,
                        r = e.cooldownMs,
                        o = i.Z.getChannel(t);
                    if (null == o) return !1;
                    _(o, n, 0 === r ? 0 : r + 100)
                },
                UPLOAD_START: function(e) {
                    return m(e.channelId, y.SendMessage)
                },
                UPLOAD_FAIL: b,
                UPLOAD_CANCEL_REQUEST: b,
                CHANNEL_UPDATES: function(e) {
                    var t = e.channels;
                    [y.SendMessage, y.CreateThread].forEach((function(e) {
                        var n = !0,
                            r = !1,
                            o = void 0;
                        try {
                            for (var a, i = t[Symbol.iterator](); !(n = (a = i.next()).done); n = !0) {
                                var u = a.value,
                                    l = v[e][u.id],
                                    s = u.rateLimitPerUser;
                                if (null != l && l.rateLimitPerUser !== s) {
                                    var c;
                                    _(u, e, Math.min(null !== (c = null == l ? void 0 : l.cooldownMs) && void 0 !== c ? c : 0, 1e3 * s))
                                }
                            }
                        } catch (e) {
                            r = !0;
                            o = e
                        } finally {
                            try {
                                n || null == i.return || i.return()
                            } finally {
                                if (r) throw o
                            }
                        }
                    }))
                },
                LOGOUT: function() {
                    [y.SendMessage, y.CreateThread].forEach((function(e) {
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
//# sourceMappingURL=a0620215e3b7b1ec5be4.js.map