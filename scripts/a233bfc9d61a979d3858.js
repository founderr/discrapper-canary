"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [92822], {
        362310: (e, n, t) => {
            t.d(n, {
                d: () => r,
                t: () => u
            });
            var r;
            ! function(e) {
                e[e.SET_COMPLETED = 1] = "SET_COMPLETED";
                e[e.UNSET_COMPLETED = 2] = "UNSET_COMPLETED";
                e[e.DELETE_USER_MESSAGE = 3] = "DELETE_USER_MESSAGE";
                e[e.SUBMIT_FEEDBACK = 4] = "SUBMIT_FEEDBACK"
            }(r || (r = {}));

            function u(e) {
                if (null == e) return null;
                var n = function(e) {
                    if (null == e) return null;
                    try {
                        return JSON.parse(e)
                    } catch (e) {
                        return null
                    }
                }(e);
                if (null == n || null == n.actions) return null;
                Object.keys(n.actions).forEach((function(e) {
                    n.actions[e].actionType = e
                }));
                return n
            }
        },
        65162: (e, n, t) => {
            t.d(n, {
                x2: () => r,
                wR: () => u,
                $l: () => o,
                J$: () => a,
                C2: () => i
            });
            var r, u, o, i;
            t(473708);
            ! function(e) {
                e.BUG = "BUG";
                e.ALLOWED = "ALLOWED";
                e.MENTION_RAID_REMOVE_RESTRICTION = "MENTION_RAID_REMOVE_RESTRICTION"
            }(r || (r = {}));
            ! function(e) {
                e.JOIN_RAID = "JOIN_RAID";
                e.MENTION_RAID = "MENTION_RAID"
            }(u || (u = {}));
            ! function(e) {
                e.LEGITIMATE_ACTIVITY = "LEGITIMATE_ACTIVITY";
                e.LEGITIMATE_ACCOUNTS = "LEGITIMATE_ACCOUNTS";
                e.LEGITIMATE_DMS = "LEGITIMATE_DMS";
                e.DM_SPAM = "DM_SPAM";
                e.JOIN_RAID = "JOIN_RAID";
                e.OTHER = "OTHER"
            }(o || (o = {}));

            function a(e) {
                return e.includes(o.LEGITIMATE_ACTIVITY) ? o.LEGITIMATE_ACTIVITY : e.includes(o.DM_SPAM) ? o.DM_SPAM : e.includes(o.JOIN_RAID) ? o.JOIN_RAID : o.OTHER
            }! function(e) {
                e.DM_SPAM = "DM_SPAM";
                e.MENTION_SPAM = "MENTION_SPAM";
                e.CHANNEL_SPAM = "CHANNEL_SPAM";
                e.SUS_NEW_MEMBERS = "SUS_NEW_MEMBERS";
                e.CHANGING_SETTINGS = "CHANGING_SETTINGS";
                e.OTHER = "OTHER"
            }(i || (i = {}))
        },
        190084: (e, n, t) => {
            t.d(n, {
                nY: () => D,
                OP: () => p,
                Mq: () => g,
                hU: () => m,
                FL: () => G,
                ZP: () => w,
                NK: () => j,
                ge: () => H
            });
            var r = t(667294),
                u = t(813701),
                o = t(986468),
                i = t(901399),
                a = t(945481),
                l = t(824244),
                c = t(216829),
                s = t(202351),
                _ = t(61209),
                E = t(682776),
                O = t(362310),
                f = t(65162),
                A = t(2590),
                T = t(473708);

            function I(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function N(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function d(e, n) {
                n = null != n ? n : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : function(e, n) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n && (r = r.filter((function(n) {
                            return Object.getOwnPropertyDescriptor(e, n).enumerable
                        })));
                        t.push.apply(t, r)
                    }
                    return t
                }(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }));
                return e
            }

            function M(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, u, o = [],
                            i = !0,
                            a = !1;
                        try {
                            for (t = t.call(e); !(i = (r = t.next()).done); i = !0) {
                                o.push(r.value);
                                if (n && o.length === n) break
                            }
                        } catch (e) {
                            a = !0;
                            u = e
                        } finally {
                            try {
                                i || null == t.return || t.return()
                            } finally {
                                if (a) throw u
                            }
                        }
                        return o
                    }
                }(e, n) || function(e, n) {
                    if (!e) return;
                    if ("string" == typeof e) return I(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return I(e, n)
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function D(e) {
                return e.type === A.uaV.AUTO_MODERATION_ACTION
            }

            function p(e) {
                var n;
                return null === (n = e.embeds) || void 0 === n ? void 0 : n.some((function(e) {
                    return e.type === A.hBH.AUTO_MODERATION_NOTIFICATION
                }))
            }

            function S(e, n) {
                var t, r = M(null !== (t = e.embeds) && void 0 !== t ? t : [], 1)[0];
                if (null != r) {
                    if (r.type === A.hBH.AUTO_MODERATION_MESSAGE) {
                        var u, o;
                        return null === (o = null == r || null === (u = r.fields) || void 0 === u ? void 0 : u.find((function(e) {
                            return e.rawName === n
                        }))) || void 0 === o ? void 0 : o.rawValue
                    }
                    if (function(e) {
                            return e.type === A.hBH.AUTO_MODERATION_NOTIFICATION
                        }(r)) {
                        var i, a;
                        return null === (a = null == r || null === (i = r.fields) || void 0 === i ? void 0 : i.find((function(e) {
                            return e.rawName === n
                        }))) || void 0 === a ? void 0 : a.rawValue
                    }
                }
            }

            function y(e) {
                var n, t, r = M(null !== (n = e.embeds) && void 0 !== n ? n : [], 1)[0];
                return null !== (t = null == r ? void 0 : r.rawDescription) && void 0 !== t ? t : ""
            }

            function L(e) {
                var n = S(e, o.G.QUARANTINE_USER);
                if (null != n) return n
            }

            function U(e) {
                var n = S(e, o.G.QUARANTINE_USER_ACTION);
                if (null != n) return n
            }

            function b(e) {
                var n = S(e, o.G.BLOCK_PROFILE_UPDATE_TYPE);
                if (null != n) return n
            }

            function R(e) {
                var n = S(e, o.G.QUARANTINE_EVENT);
                if (null != n) return n
            }

            function h(e, n, t) {
                switch (n) {
                    case l.z.BLOCK_PROFILE_UPDATE:
                        return function(e) {
                            switch (e) {
                                case u.J.NICKNAME_UPDATE:
                                    return T.Z.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_BLOCK_NICKNAME_UPDATE;
                                case u.J.NICKNAME_RESET:
                                    return T.Z.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_BLOCK_NICKNAME_RESET;
                                default:
                                    return
                            }
                        }(e);
                    case l.z.QUARANTINE_USER:
                        return function(e) {
                            switch (e) {
                                case a.B.MESSAGE_SEND:
                                    return T.Z.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_QUARANTINE_USER_MESSAGE_SEND;
                                case a.B.GUILD_JOIN:
                                    return T.Z.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_QUARANTINE_USER_ON_GUILD_JOIN;
                                case a.B.USERNAME_UPDATE:
                                    return T.Z.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_QUARANTINE_USERNAME_UPDATE;
                                default:
                                    return
                            }
                        }(t);
                    case l.z.BLOCK_GUEST_JOIN:
                        return T.Z.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_BLOCK_GUEST_ON_GUILD_JOIN
                }
            }

            function C(e, n) {
                return n ? null !== (t = null == e ? void 0 : e.name) && void 0 !== t ? t : "#".concat(T.Z.Messages.UNKNOWN_CHANNEL_PLACEHOLDER) : "#".concat(T.Z.Messages.NO_ACCESS);
                var t
            }

            function v(e, n, t) {
                var r = S(e, o.G.VOICE_CHANNEL_STATUS_OUTCOME);
                return null == r ? null : ("blocked" === r ? T.Z.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_ACTION_BLOCKED_VOICE_CHANNEL_STATUS_HOOK : T.Z.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_ACTION_FLAGGED_VOICE_CHANNEL_STATUS_HOOK).format({
                    channelName: n,
                    channelHook: t
                })
            }

            function g(e, n) {
                var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : A.VqG,
                    r = b(e),
                    u = U(e),
                    i = R(e),
                    a = L(e);
                if (null != a) {
                    var l = h(r, u, i);
                    if (null != l) return l
                }
                var c = S(e, o.G.FLAGGED_MESSAGE_ID),
                    s = E.Z.can(A.Plq.VIEW_CHANNEL, n),
                    _ = C(n, s),
                    O = null != n && s ? t : A.VqG,
                    f = v(e, _, t);
                return null != f ? f : null != c ? T.Z.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_ACTION_FLAGGED_HOOK.format({
                    channelName: _,
                    channelHook: O
                }) : T.Z.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_ACTION_BLOCKED_HOOK.format({
                    channelName: _,
                    channelHook: O
                })
            }

            function m(e) {
                switch (e) {
                    case c.i.NICKNAME:
                        return T.Z.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_REASON_NICKNAME;
                    case c.i.USERNAME:
                        return T.Z.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_REASON_USERNAME;
                    case c.i.GLOBAL_NAME:
                        return T.Z.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_REASON_GLOBAL_NAME;
                    default:
                        return T.Z.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_REASON_USERNAME
                }
            }

            function G(e) {
                var n = S(e, i.D.JOIN_ATTEMPTS),
                    t = S(e, i.D.RAID_DATETIME),
                    r = S(e, i.D.DMS_SENT),
                    u = S(e, i.D.RAID_TYPE),
                    o = S(e, i.D.RESOLVED_REASON);
                return {
                    joinAttempts: null != n ? parseInt(n) : void 0,
                    raidDatetime: null != t ? new Date(t) : void 0,
                    dmsSent: null != r ? parseInt(r) : void 0,
                    raidType: null != u ? u : void 0,
                    resolvedReason: null != o ? o : void 0
                }
            }

            function P(e) {
                var n = S(e, o.G.CHANNEL_ID),
                    t = S(e, o.G.ALERT_ACTIONS_EXECUTION),
                    r = (0, O.t)(t);
                return {
                    content: y(e),
                    ruleName: S(e, o.G.RULE_NAME),
                    decisionId: S(e, o.G.DECISION_ID),
                    keyword: S(e, o.G.KEYWORD),
                    keywordMatchedContent: S(e, o.G.KEYWORD_MATCHED_CONTENT),
                    flaggedMessageId: S(e, o.G.FLAGGED_MESSAGE_ID),
                    timeoutDuration: S(e, o.G.TIMEOUT_DURATION),
                    quarantineType: S(e, o.G.QUARANTINE_USER),
                    quarantineAction: S(e, o.G.QUARANTINE_USER_ACTION),
                    decisionReason: S(e, o.G.DECISION_REASON),
                    embedChannel: _.Z.getChannel(n),
                    embedChannelId: n,
                    alertActionsExecution: null != r ? r : void 0
                }
            }

            function w(e) {
                var n = r.useMemo((function() {
                        return P(e)
                    }), [e]),
                    t = (0, s.e7)([_.Z], (function() {
                        return _.Z.getChannel(n.embedChannelId)
                    }), [n.embedChannelId]);
                return d(function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = null != arguments[n] ? arguments[n] : {},
                            r = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))));
                        r.forEach((function(n) {
                            N(e, n, t[n])
                        }))
                    }
                    return e
                }({}, n), {
                    embedChannel: t
                })
            }

            function j(e) {
                if (null == e) return null;
                var n = P(e).alertActionsExecution;
                return null != n ? n : null
            }

            function H(e) {
                if (null == e) return T.Z.Messages.GUILD_AUTOMOD_NOTIFICATION_MARK_AS_RESOLVED;
                switch (e) {
                    case f.$l.LEGITIMATE_ACTIVITY:
                        return T.Z.Messages.GUILD_ANTIRAID_EMBED_RESOLVE_REASON_NO_ACTION;
                    case f.$l.DM_SPAM:
                        return T.Z.Messages.GUILD_ANTIRAID_EMBED_RESOLVE_REASON_DM_SPAM;
                    case f.$l.JOIN_RAID:
                        return T.Z.Messages.GUILD_ANTIRAID_EMBED_RESOLVE_REASON_JOIN_RAID;
                    default:
                        return T.Z.Messages.GUILD_ANTIRAID_EMBED_RESOLVE_REASON_OTHER
                }
            }
        },
        292327: (e, n, t) => {
            t.d(n, {
                q4: () => o.q,
                fX: () => i.f,
                jj: () => u.j,
                Ux: () => r,
                RH: () => a,
                n4: () => l,
                I3: () => c,
                VW: () => s,
                hu: () => _,
                Vk: () => E,
                uE: () => O,
                aj: () => f,
                OU: () => A,
                Vg: () => T,
                Lg: () => I,
                Ic: () => N,
                _6: () => d,
                dc: () => M
            });
            var r, u = t(16455),
                o = t(921354),
                i = t(828153);
            ! function(e) {
                e[e.PROFANITY = 1] = "PROFANITY";
                e[e.SEXUAL_CONTENT = 2] = "SEXUAL_CONTENT";
                e[e.SLURS = 3] = "SLURS"
            }(r || (r = {}));
            i.f.USER_PROFILE, i.f.SERVER_POLICY, i.f.MENTION_SPAM, i.f.ML_SPAM, i.f.DEFAULT_KEYWORD_LIST, i.f.KEYWORD;
            var a = 1e3,
                l = 100,
                c = 1e3,
                s = 10,
                _ = 60,
                E = 1,
                O = 1,
                f = 260,
                A = 100,
                T = 1,
                I = 50,
                N = 20,
                d = 150,
                M = "automod-profile-quarantine-alert"
        },
        509044: (e, n, t) => {
            t.d(n, {
                km: () => O,
                _s: () => f,
                kW: () => A,
                UV: () => T
            });
            var r = t(785893),
                u = (t(667294), t(882723)),
                o = t(292327),
                i = t(473708);

            function a(e, n, t, r, u, o, i) {
                try {
                    var a = e[o](i),
                        l = a.value
                } catch (e) {
                    t(e);
                    return
                }
                a.done ? n(l) : Promise.resolve(l).then(r, u)
            }

            function l(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, u) {
                        var o = e.apply(n, t);

                        function i(e) {
                            a(o, r, u, i, l, "next", e)
                        }

                        function l(e) {
                            a(o, r, u, i, l, "throw", e)
                        }
                        i(void 0)
                    }))
                }
            }

            function c(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function s(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        c(e, n, t[n])
                    }))
                }
                return e
            }

            function _(e, n) {
                n = null != n ? n : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : function(e, n) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n && (r = r.filter((function(n) {
                            return Object.getOwnPropertyDescriptor(e, n).enumerable
                        })));
                        t.push.apply(t, r)
                    }
                    return t
                }(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }));
                return e
            }
            var E = function(e, n) {
                var t, r, u, o, i = {
                    label: 0,
                    sent: function() {
                        if (1 & u[0]) throw u[1];
                        return u[1]
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
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; i;) try {
                                if (t = 1, r && (u = 2 & o[0] ? r.return : o[0] ? r.throw || ((u = r.return) && u.call(r), 0) : r.next) && !(u = u.call(r, o[1])).done) return u;
                                (r = 0, u) && (o = [2 & o[0], u.value]);
                                switch (o[0]) {
                                    case 0:
                                    case 1:
                                        u = o;
                                        break;
                                    case 4:
                                        i.label++;
                                        return {
                                            value: o[1], done: !1
                                        };
                                    case 5:
                                        i.label++;
                                        r = o[1];
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = i.ops.pop();
                                        i.trys.pop();
                                        continue;
                                    default:
                                        if (!(u = i.trys, u = u.length > 0 && u[u.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            i = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!u || o[1] > u[0] && o[1] < u[3])) {
                                            i.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && i.label < u[1]) {
                                            i.label = u[1];
                                            u = o;
                                            break
                                        }
                                        if (u && i.label < u[2]) {
                                            i.label = u[2];
                                            i.ops.push(o);
                                            break
                                        }
                                        u[2] && i.ops.pop();
                                        i.trys.pop();
                                        continue
                                }
                                o = n.call(e, i)
                            } catch (e) {
                                o = [6, e];
                                r = 0
                            } finally {
                                t = u = 0
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

            function O(e) {
                var n;
                return c(n = {}, o.jj.BLOCK_MESSAGE, (function(e, n) {
                    return new Promise((function(e) {
                        (0, u.openModalLazy)(l((function() {
                            var u, o, i;
                            return E(this, (function(a) {
                                switch (a.label) {
                                    case 0:
                                        return [4, Promise.all([t.e(40532), t.e(47405), t.e(43586), t.e(19507)]).then(t.bind(t, 319507))];
                                    case 1:
                                        u = a.sent(), o = u.default;
                                        return [2, function(t) {
                                            return (0, r.jsx)(o, _(s({
                                                initialCustomMessage: null !== (i = n.metadata.customMessage) && void 0 !== i ? i : "",
                                                onSubmit: function(r) {
                                                    n.metadata.customMessage = r;
                                                    e(n);
                                                    t.onClose()
                                                }
                                            }, t), {
                                                onClose: function() {
                                                    e(null);
                                                    return t.onClose()
                                                }
                                            }))
                                        }]
                                }
                            }))
                        })))
                    }))
                })), c(n, o.jj.FLAG_TO_CHANNEL, (function(n, i) {
                    return new Promise((function(a) {
                        (0, u.openModalLazy)(l((function() {
                            var u, l, c;
                            return E(this, (function(E) {
                                switch (E.label) {
                                    case 0:
                                        return [4, Promise.all([t.e(40532), t.e(47405), t.e(43586), t.e(53685)]).then(t.bind(t, 953685))];
                                    case 1:
                                        u = E.sent(), l = u.default;
                                        c = n.actions.find((function(e) {
                                            return e.type === o.jj.FLAG_TO_CHANNEL
                                        }));
                                        return [2, function(t) {
                                            return (0, r.jsx)(l, _(s({
                                                action: i,
                                                isEdit: null != c,
                                                triggerType: n.triggerType,
                                                guildId: e,
                                                onEditChannel: function(e) {
                                                    i.metadata.channelId = e;
                                                    n.exemptChannels.add(e);
                                                    a(i);
                                                    t.onClose()
                                                }
                                            }, t), {
                                                onClose: function() {
                                                    a(null);
                                                    return t.onClose()
                                                }
                                            }))
                                        }]
                                }
                            }))
                        })))
                    }))
                })), c(n, o.jj.USER_COMMUNICATION_DISABLED, (function(e, n) {
                    return new Promise((function(i) {
                        (0, u.openModalLazy)(l((function() {
                            var u, a, l;
                            return E(this, (function(c) {
                                switch (c.label) {
                                    case 0:
                                        return [4, Promise.all([t.e(40532), t.e(47405), t.e(43586), t.e(42193)]).then(t.bind(t, 242193))];
                                    case 1:
                                        u = c.sent(), a = u.default;
                                        l = e.actions.find((function(e) {
                                            return e.type === o.jj.USER_COMMUNICATION_DISABLED
                                        }));
                                        return [2, function(t) {
                                            return (0, r.jsx)(a, _(s({
                                                action: n,
                                                isEdit: null != l,
                                                triggerType: e.triggerType,
                                                onUpdateDuration: function(e) {
                                                    null != e && (n.metadata.durationSeconds = e);
                                                    i(n);
                                                    t.onClose()
                                                }
                                            }, t), {
                                                onClose: function() {
                                                    i(null);
                                                    return t.onClose()
                                                }
                                            }))
                                        }]
                                }
                            }))
                        })))
                    }))
                })), n
            }

            function f(e, n, o, i) {
                (0, u.openModalLazy)(l((function() {
                    var u, a;
                    return E(this, (function(l) {
                        switch (l.label) {
                            case 0:
                                return [4, Promise.all([t.e(40532), t.e(47405), t.e(43586), t.e(96043), t.e(71363)]).then(t.bind(t, 371363))];
                            case 1:
                                u = l.sent(), a = u.default;
                                return [2, function(t) {
                                    return (0, r.jsx)(a, _(s({}, t), {
                                        automodDecision: {
                                            messageId: e,
                                            messageContent: n,
                                            decisionId: o,
                                            channel: i
                                        }
                                    }))
                                }]
                        }
                    }))
                })))
            }

            function A(e, n) {
                (0, u.openModalLazy)(l((function() {
                    var u, o;
                    return E(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, Promise.all([t.e(40532), t.e(47405), t.e(43586), t.e(27499), t.e(3790), t.e(96043), t.e(83207)]).then(t.bind(t, 217326))];
                            case 1:
                                u = i.sent(), o = u.default;
                                return [2, function(t) {
                                    return (0, r.jsx)(o, _(s({}, t), {
                                        messageId: e,
                                        guildId: n
                                    }))
                                }]
                        }
                    }))
                })))
            }

            function T(e) {
                (0, u.openModal)((function(n) {
                    return (0, r.jsx)(u.ConfirmModal, _(s({
                        header: i.Z.Messages.GUILD_AUTOMOD_REMOVE_MENTION_RAID_MODAL_TITLE,
                        confirmText: i.Z.Messages.CONFIRM,
                        onConfirm: e,
                        cancelText: i.Z.Messages.CANCEL
                    }, n), {
                        children: (0, r.jsx)(u.Text, {
                            variant: "text-md/normal",
                            children: i.Z.Messages.GUILD_AUTOMOD_REMOVE_MENTION_RAID_MODAL_BODY
                        })
                    }))
                }))
            }
        },
        11414: (e, n, t) => {
            t.d(n, {
                T9: () => w,
                JK: () => L,
                mm: () => h,
                Xx: () => m,
                $Y: () => v,
                UE: () => P,
                Je: () => b,
                qY: () => S
            });
            var r = t(281110),
                u = t(744564),
                o = t(396043),
                i = t(567403),
                a = t(682776),
                l = t(72580),
                c = t(102921),
                s = t(65162),
                _ = t(496486);

            function E(e) {
                return null == e ? e : Object.keys(e).reduce((function(n, t) {
                    var r = (0, _.camelCase)(t);
                    "object" != typeof e[t] || Array.isArray(e[t]) ? n[r] = e[t] : n[r] = E(e[t]);
                    return n
                }), {})
            }

            function O(e) {
                return null == e ? e : Object.keys(e).reduce((function(n, t) {
                    var r = (0, _.snakeCase)(t);
                    "object" != typeof e[t] || Array.isArray(e[t]) ? n[r] = e[t] : n[r] = O(e[t]);
                    n[r] = e[t];
                    return n
                }), {})
            }
            var f = t(509044),
                A = t(2590);

            function T(e, n, t, r, u, o, i) {
                try {
                    var a = e[o](i),
                        l = a.value
                } catch (e) {
                    t(e);
                    return
                }
                a.done ? n(l) : Promise.resolve(l).then(r, u)
            }

            function I(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, u) {
                        var o = e.apply(n, t);

                        function i(e) {
                            T(o, r, u, i, a, "next", e)
                        }

                        function a(e) {
                            T(o, r, u, i, a, "throw", e)
                        }
                        i(void 0)
                    }))
                }
            }
            var N = function(e, n) {
                var t, r, u, o, i = {
                    label: 0,
                    sent: function() {
                        if (1 & u[0]) throw u[1];
                        return u[1]
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
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; i;) try {
                                if (t = 1, r && (u = 2 & o[0] ? r.return : o[0] ? r.throw || ((u = r.return) && u.call(r), 0) : r.next) && !(u = u.call(r, o[1])).done) return u;
                                (r = 0, u) && (o = [2 & o[0], u.value]);
                                switch (o[0]) {
                                    case 0:
                                    case 1:
                                        u = o;
                                        break;
                                    case 4:
                                        i.label++;
                                        return {
                                            value: o[1], done: !1
                                        };
                                    case 5:
                                        i.label++;
                                        r = o[1];
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = i.ops.pop();
                                        i.trys.pop();
                                        continue;
                                    default:
                                        if (!(u = i.trys, u = u.length > 0 && u[u.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            i = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!u || o[1] > u[0] && o[1] < u[3])) {
                                            i.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && i.label < u[1]) {
                                            i.label = u[1];
                                            u = o;
                                            break
                                        }
                                        if (u && i.label < u[2]) {
                                            i.label = u[2];
                                            i.ops.push(o);
                                            break
                                        }
                                        u[2] && i.ops.pop();
                                        i.trys.pop();
                                        continue
                                }
                                o = n.call(e, i)
                            } catch (e) {
                                o = [6, e];
                                r = 0
                            } finally {
                                t = u = 0
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

            function d(e) {
                return {
                    type: e.type,
                    metadata: O(e.metadata)
                }
            }

            function M(e) {
                var n, t, r = O(e.triggerMetadata);
                null != r && delete r.keywordLists;
                return {
                    id: e.id,
                    name: e.name,
                    guild_id: e.guildId,
                    event_type: e.eventType,
                    trigger_type: e.triggerType,
                    trigger_metadata: r,
                    actions: e.actions.filter(l.lm).map(d),
                    enabled: e.enabled,
                    creator_id: e.creatorId,
                    position: e.position,
                    exempt_channels: Array.from(null !== (n = e.exemptChannels) && void 0 !== n ? n : []),
                    exempt_roles: Array.from(null !== (t = e.exemptRoles) && void 0 !== t ? t : [])
                }
            }

            function D(e) {
                return {
                    type: e.type,
                    metadata: E(e.metadata)
                }
            }

            function p(e) {
                var n, t, r, u = {
                    id: null !== (n = e.id) && void 0 !== n ? n : c.Z.fromTimestamp(Date.now()),
                    name: e.name,
                    guildId: e.guild_id,
                    eventType: e.event_type,
                    triggerType: e.trigger_type,
                    triggerMetadata: E(e.trigger_metadata),
                    actions: e.actions.filter(l.lm).map(D),
                    enabled: e.enabled,
                    creatorId: e.creator_id,
                    position: e.position,
                    exemptChannels: new Set(null !== (t = e.exempt_channels) && void 0 !== t ? t : []),
                    exemptRoles: new Set(null !== (r = e.exempt_roles) && void 0 !== r ? r : [])
                };
                null != u.triggerMetadata && delete u.triggerMetadata.keywordLists;
                return u
            }

            function S(e) {
                return y.apply(this, arguments)
            }

            function y() {
                return (y = I((function(e) {
                    var n;
                    return N(this, (function(t) {
                        switch (t.label) {
                            case 0:
                                n = M(e);
                                return [4, r.ZP.post({
                                    url: A.ANM.GUILD_AUTOMOD_VALIDATE_RULE(e.guildId),
                                    body: n
                                })];
                            case 1:
                                return [2, E(t.sent().body)]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function L(e) {
                return U.apply(this, arguments)
            }

            function U() {
                return (U = I((function(e) {
                    var n;
                    return N(this, (function(t) {
                        switch (t.label) {
                            case 0:
                                delete(n = M(e)).id;
                                return [4, r.ZP.post({
                                    url: A.ANM.GUILD_AUTOMOD_RULES(e.guildId),
                                    body: n
                                })];
                            case 1:
                                return [2, p(t.sent().body)]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function b(e) {
                return R.apply(this, arguments)
            }

            function R() {
                return (R = I((function(e) {
                    var n;
                    return N(this, (function(t) {
                        switch (t.label) {
                            case 0:
                                n = M(e);
                                return [4, r.ZP.patch({
                                    url: A.ANM.GUILD_AUTOMOD_RULE(e.guildId, e.id),
                                    body: n
                                })];
                            case 1:
                                return [2, p(t.sent().body)]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function h(e, n) {
                return C.apply(this, arguments)
            }

            function C() {
                return (C = I((function(e, n) {
                    return N(this, (function(t) {
                        switch (t.label) {
                            case 0:
                                return [4, r.ZP.delete({
                                    url: A.ANM.GUILD_AUTOMOD_RULE(n, e)
                                })];
                            case 1:
                                t.sent();
                                return [2, !0]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function v(e) {
                return g.apply(this, arguments)
            }

            function g() {
                return (g = I((function(e) {
                    var n;
                    return N(this, (function(t) {
                        switch (t.label) {
                            case 0:
                                return [4, r.ZP.get({
                                    url: A.ANM.GUILD_AUTOMOD_RULES(e)
                                })];
                            case 1:
                                n = t.sent();
                                return Array.isArray(n.body) ? [2, n.body.map(p)] : [2, []]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function m(e, n, t) {
                return G.apply(this, arguments)
            }

            function G() {
                return (G = I((function(e, n, t) {
                    return N(this, (function(u) {
                        switch (u.label) {
                            case 0:
                                return a.Z.can(A.Plq.MANAGE_MESSAGES, n) ? [4, r.ZP.post({
                                    url: A.ANM.GUILD_AUTOMOD_ALERT_ACTION(n.guild_id),
                                    body: {
                                        message_id: e,
                                        channel_id: n.id,
                                        alert_action_type: t
                                    }
                                })] : [2];
                            case 1:
                                u.sent();
                                return [2]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function P(e, n, t) {
                var u = i.Z.getGuild(e);
                if (null != u && a.Z.can(A.Plq.MANAGE_GUILD, u)) {
                    (0, f.UV)((function() {
                        (0, o.yw)(A.rMx.GUILD_AUTOMOD_FEEDBACK, {
                            feedback_type: s.x2.MENTION_RAID_REMOVE_RESTRICTION,
                            decision_id: n
                        });
                        r.ZP.post({
                            url: A.ANM.GUILD_AUTOMOD_CLEAR_MENTION_RAID(e)
                        });
                        t()
                    }))
                }
            }

            function w(e) {
                u.Z.dispatch({
                    type: "AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS",
                    guildId: e
                })
            }
        }
    }
]);