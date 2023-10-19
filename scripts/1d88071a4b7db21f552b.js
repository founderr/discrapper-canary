"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [84715, 46738], {
        846738: (e, n, t) => {
            t.r(n);
            t.d(n, {
                FeatureForumPostConfirmationModal: () => v,
                FeatureItemConfirmationModal: () => b,
                FeatureMessageConfirmationModal: () => D,
                UnfeatureItemConfirmationModal: () => g
            });
            var r = t(785893),
                a = t(667294),
                o = t(730381),
                i = t.n(o),
                u = t(349289),
                l = t(70418),
                c = t(539381),
                s = t(487868),
                d = t(504698),
                E = t(473708),
                _ = t(202945),
                f = t.n(_);

            function I(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function p(e, n, t, r, a, o, i) {
                try {
                    var u = e[o](i),
                        l = u.value
                } catch (e) {
                    t(e);
                    return
                }
                u.done ? n(l) : Promise.resolve(l).then(r, a)
            }

            function O(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(r, a) {
                        var o = e.apply(n, t);

                        function i(e) {
                            p(o, r, a, i, u, "next", e)
                        }

                        function u(e) {
                            p(o, r, a, i, u, "throw", e)
                        }
                        i(void 0)
                    }))
                }
            }

            function S(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }

            function m(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    r.forEach((function(n) {
                        S(e, n, t[n])
                    }))
                }
                return e
            }

            function h(e, n) {
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

            function A(e, n) {
                if (null == e) return {};
                var t, r, a = function(e, n) {
                    if (null == e) return {};
                    var t, r, a = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) {
                        t = o[r];
                        n.indexOf(t) >= 0 || (a[t] = e[t])
                    }
                    return a
                }(e, n);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < o.length; r++) {
                        t = o[r];
                        n.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (a[t] = e[t])
                    }
                }
                return a
            }

            function N(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, a, o = [],
                            i = !0,
                            u = !1;
                        try {
                            for (t = t.call(e); !(i = (r = t.next()).done); i = !0) {
                                o.push(r.value);
                                if (n && o.length === n) break
                            }
                        } catch (e) {
                            u = !0;
                            a = e
                        } finally {
                            try {
                                i || null == t.return || t.return()
                            } finally {
                                if (u) throw a
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
            var T = function(e, n) {
                var t, r, a, o, i = {
                    label: 0,
                    sent: function() {
                        if (1 & a[0]) throw a[1];
                        return a[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function u(o) {
                    return function(u) {
                        return function(o) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; i;) try {
                                if (t = 1, r && (a = 2 & o[0] ? r.return : o[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, o[1])).done) return a;
                                (r = 0, a) && (o = [2 & o[0], a.value]);
                                switch (o[0]) {
                                    case 0:
                                    case 1:
                                        a = o;
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
                                        if (!(a = i.trys, a = a.length > 0 && a[a.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            i = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!a || o[1] > a[0] && o[1] < a[3])) {
                                            i.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && i.label < a[1]) {
                                            i.label = a[1];
                                            a = o;
                                            break
                                        }
                                        if (a && i.label < a[2]) {
                                            i.label = a[2];
                                            i.ops.push(o);
                                            break
                                        }
                                        a[2] && i.ops.pop();
                                        i.trys.pop();
                                        continue
                                }
                                o = n.call(e, i)
                            } catch (e) {
                                o = [6, e];
                                r = 0
                            } finally {
                                t = a = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, u])
                    }
                }
            };

            function g(e) {
                var n = e.featureableItem,
                    t = e.header,
                    o = e.body,
                    i = A(e, ["featureableItem", "header", "body"]),
                    u = N(a.useState(null), 2),
                    s = u[0],
                    _ = u[1],
                    f = N(a.useState(!1), 2),
                    I = f[0],
                    p = f[1];
                return (0, r.jsxs)(l.ConfirmModal, h(m({
                    header: t,
                    confirmText: E.Z.Messages.GUILD_FEED_UNFEATURE_BUTTON_TEXT,
                    confirmButtonColor: l.Button.Colors.RED,
                    cancelText: E.Z.Messages.CANCEL,
                    loading: I,
                    onConfirm: O((function() {
                        var e;
                        return T(this, (function(t) {
                            switch (t.label) {
                                case 0:
                                    t.trys.push([0, 2, , 3]);
                                    p(!0);
                                    return [4, (0, d.Pe)(n)];
                                case 1:
                                    t.sent();
                                    p(!1);
                                    return [3, 3];
                                case 2:
                                    e = t.sent();
                                    _(new c.Z(e));
                                    p(!1);
                                    throw e;
                                case 3:
                                    return [2]
                            }
                        }))
                    }))
                }, i), {
                    children: [(0, r.jsx)(l.Text, {
                        variant: "text-md/normal",
                        children: o
                    }), null != s && (0, r.jsx)(l.Text, {
                        color: "text-danger",
                        variant: "text-xs/normal",
                        children: s.message
                    })]
                }))
            }

            function b(e) {
                var n = e.featureableItem,
                    t = e.expiresSeconds,
                    o = e.header,
                    u = e.children,
                    s = e.options,
                    _ = A(e, ["featureableItem", "expiresSeconds", "header", "children", "options"]),
                    I = N(a.useState(null), 2),
                    p = I[0],
                    S = I[1],
                    g = N(a.useState(!1), 2),
                    b = g[0],
                    D = g[1];
                return (0, r.jsxs)(l.ConfirmModal, h(m({
                    header: o,
                    confirmText: E.Z.Messages.GUILD_FEED_FEATURE_BUTTON_TEXT,
                    cancelText: E.Z.Messages.CANCEL,
                    confirmButtonColor: l.Button.Colors.BRAND,
                    loading: b,
                    onConfirm: O((function() {
                        var e, r;
                        return T(this, (function(a) {
                            switch (a.label) {
                                case 0:
                                    a.trys.push([0, 2, 3, 4]);
                                    e = i()().add(t, "second").toDate();
                                    D(!0);
                                    return [4, (0, d.pl)(n, e, s)];
                                case 1:
                                    a.sent();
                                    return [3, 4];
                                case 2:
                                    r = a.sent();
                                    S(new c.Z(r));
                                    throw r;
                                case 3:
                                    D(!1);
                                    return [7];
                                case 4:
                                    return [2]
                            }
                        }))
                    }))
                }, _), {
                    children: [null != p && (0, r.jsx)(l.Text, {
                        className: f().featureModalError,
                        color: "text-danger",
                        variant: "text-xs/normal",
                        children: p.message
                    }), u]
                }))
            }

            function D(e) {
                var n = e.message,
                    t = e.guildId,
                    a = e.channel,
                    o = e.expiresSeconds,
                    i = e.timePeriod,
                    c = e.options,
                    d = A(e, ["message", "guildId", "channel", "expiresSeconds", "timePeriod", "options"]);
                return (0, r.jsxs)(b, h(m({}, d), {
                    featureableItem: {
                        guildId: t,
                        entity: n,
                        entityType: u.w.MESSAGE
                    },
                    header: E.Z.Messages.GUILD_FEED_FEATURED_MESSAGE_MODAL_HEADER,
                    expiresSeconds: o,
                    options: c,
                    children: [(0, r.jsx)(l.Text, {
                        className: f().featureModalText,
                        variant: "text-md/normal",
                        children: E.Z.Messages.GUILD_FEED_FEATURE_MESSAGE_MODAL_BODY.format({
                            timePeriod: i
                        })
                    }), (0, r.jsx)("div", {
                        className: f().featureModalMessage,
                        children: (0, r.jsx)(s.Z, {
                            channel: a,
                            message: n,
                            disableInteraction: !0
                        })
                    })]
                }))
            }

            function v(e) {
                var n = e.thread,
                    t = e.guildId,
                    a = e.expiresSeconds,
                    o = e.timePeriod,
                    i = e.options,
                    c = A(e, ["thread", "guildId", "expiresSeconds", "timePeriod", "options"]);
                return (0, r.jsx)(b, h(m({}, c), {
                    featureableItem: {
                        guildId: t,
                        entity: n,
                        entityType: u.w.FORUM_POST
                    },
                    header: E.Z.Messages.GUILD_FEED_FEATURED_FORUM_POST_MODAL_HEADER,
                    expiresSeconds: a,
                    options: i,
                    children: (0,
                        r.jsx)(l.Text, {
                        className: f().featureModalText,
                        variant: "text-md/normal",
                        children: E.Z.Messages.GUILD_FEED_FEATURE_FORUM_POST_MODAL_BODY.format({
                            threadName: n.name,
                            timePeriod: o
                        })
                    })
                }))
            }
        },
        628486: (e, n, t) => {
            t.d(n, {
                Z: () => u
            });
            var r = t(751615),
                a = t(38736),
                o = t(2590);

            function i(e) {
                var n = (0, r.LX)(null != e ? e : "", {
                    path: o.Z5c.CHANNEL(":guildId", ":channelId?", ":messageId?")
                });
                if (null != n) {
                    var t = n.params,
                        a = t.guildId,
                        i = t.channelId;
                    return {
                        guildId: a === o.ME ? null : a,
                        channelId: null != i ? i : null
                    }
                }
                var u = (0, r.LX)(null != e ? e : "", {
                    path: o.Z5c.GUILD_BOOSTING_MARKETING(":guildId")
                });
                return null != u ? {
                    guildId: u.params.guildId,
                    channelId: null
                } : {
                    guildId: null,
                    channelId: null
                }
            }
            const u = (0, a.Z)((function(e) {
                return {
                    path: null,
                    basePath: "/",
                    guildId: null,
                    channelId: null,
                    updatePath: function(n) {
                        var t = i(n),
                            r = t.guildId,
                            a = t.channelId;
                        e({
                            path: n,
                            guildId: r,
                            channelId: a
                        })
                    },
                    resetPath: function(n) {
                        var t = i(n),
                            r = t.guildId,
                            a = t.channelId;
                        e({
                            path: null,
                            guildId: r,
                            channelId: a,
                            basePath: n
                        })
                    }
                }
            }))
        },
        646161: (e, n, t) => {
            t.d(n, {
                DW: () => N,
                Gn: () => g,
                t3: () => T,
                w4: () => h
            });
            var r, a = t(131795),
                o = t.n(a),
                i = t(58964),
                u = t(664625),
                l = t(2590);

            function c(e, n, t) {
                n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t;
                return e
            }
            var s = "Ubuntu",
                d = "Debian",
                E = "Fedora",
                _ = "Red Hat",
                f = "SuSE",
                I = "Linux",
                p = "OS X",
                O = "win",
                S = "osx",
                m = "linux";

            function h(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    t = arguments.length > 2 ? arguments[2] : void 0,
                    r = n ? "/ptb" : "",
                    a = null != t ? "&format=".concat(t) : "";
                return "".concat(l.fzT.DESKTOP).concat(r, "?platform=").concat(e).concat(a)
            }

            function A() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null === (r = o().os) || void 0 === r ? void 0 : r.family;
                return null == e ? O : -1 !== e.indexOf(s) || -1 !== e.indexOf(d) || -1 !== e.indexOf(E) || -1 !== e.indexOf(_) || -1 !== e.indexOf(f) || -1 !== e.indexOf(I) ? m : -1 !== e.indexOf(p) ? S : O
            }

            function N(e) {
                var n;
                return (c(n = {}, O, "Windows"), c(n, S, "Mac"), c(n, m, "Linux"), n)[A(e)]
            }

            function T() {
                var e = A();
                return h(e, !1, e === m ? "tar.gz" : null)
            }

            function g(e, n, t) {
                var r = null != t ? t.toString() : null;
                switch (n) {
                    case "iOS":
                        return (0, i.ZP)(null != r ? r : "https://itunes.apple.com/us/app/discord-chat-for-games/id985746746", {
                            utmSource: e,
                            fingerprint: u.default.getFingerprint(),
                            attemptId: (0, i.WS)()
                        });
                    case "Android":
                        return (0, i.ZP)(null != r ? r : "https://play.google.com/store/apps/details", {
                            utmSource: e,
                            id: "com.discord",
                            fingerprint: u.default.getFingerprint(),
                            attemptId: (0, i.WS)()
                        });
                    default:
                        return null != r ? r : "https://www.discord.com"
                }
            }
        },
        16455: (e, n, t) => {
            t.d(n, {
                j: () => r
            });
            var r;
            ! function(e) {
                e[e.BLOCK_MESSAGE = 1] = "BLOCK_MESSAGE";
                e[e.FLAG_TO_CHANNEL = 2] = "FLAG_TO_CHANNEL";
                e[e.USER_COMMUNICATION_DISABLED = 3] = "USER_COMMUNICATION_DISABLED";
                e[e.QUARANTINE_USER = 4] = "QUARANTINE_USER"
            }(r || (r = {}))
        },
        813701: (e, n, t) => {
            t.d(n, {
                J: () => r
            });
            var r;
            ! function(e) {
                e.NICKNAME_UPDATE = "nickname_update";
                e.NICKNAME_RESET = "nickname_reset"
            }(r || (r = {}))
        },
        921354: (e, n, t) => {
            t.d(n, {
                q: () => r
            });
            var r;
            ! function(e) {
                e[e.UNKNOWN = 0] = "UNKNOWN";
                e[e.MESSAGE_SEND = 1] = "MESSAGE_SEND";
                e[e.GUILD_MEMBER_JOIN_OR_UPDATE = 2] = "GUILD_MEMBER_JOIN_OR_UPDATE"
            }(r || (r = {}))
        },
        986468: (e, n, t) => {
            t.d(n, {
                G: () => r
            });
            var r;
            ! function(e) {
                e.RULE_NAME = "rule_name";
                e.CHANNEL_ID = "channel_id";
                e.DECISION_ID = "decision_id";
                e.KEYWORD = "keyword";
                e.KEYWORD_MATCHED_CONTENT = "keyword_matched_content";
                e.FLAGGED_MESSAGE_ID = "flagged_message_id";
                e.TIMEOUT_DURATION = "timeout_duration";
                e.QUARANTINE_USER = "quarantine_user";
                e.QUARANTINE_USER_ACTION = "quarantine_user_action";
                e.DECISION_REASON = "decision_reason";
                e.ALERT_ACTIONS_EXECUTION = "alert_actions_execution";
                e.QUARANTINE_EVENT = "quarantine_event";
                e.BLOCK_PROFILE_UPDATE_TYPE = "block_profile_update_type";
                e.VOICE_CHANNEL_STATUS_OUTCOME = "voice_channel_status_outcome"
            }(r || (r = {}))
        },
        901399: (e, n, t) => {
            t.d(n, {
                D: () => r
            });
            var r;
            ! function(e) {
                e.JOIN_ATTEMPTS = "join_attempts";
                e.RAID_DATETIME = "raid_datetime";
                e.DMS_SENT = "dms_sent";
                e.RAID_TYPE = "raid_type";
                e.RESOLVED_REASON = "resolved_reason"
            }(r || (r = {}))
        },
        945481: (e, n, t) => {
            t.d(n, {
                B: () => r
            });
            var r;
            ! function(e) {
                e.MESSAGE_SEND = "message_send";
                e.GUILD_JOIN = "guild_join";
                e.USERNAME_UPDATE = "username_update"
            }(r || (r = {}))
        },
        824244: (e, n, t) => {
            t.d(n, {
                z: () => r
            });
            var r;
            ! function(e) {
                e.BLOCK_PROFILE_UPDATE = "block_profile_update";
                e.QUARANTINE_USER = "quarantine_user";
                e.BLOCK_GUEST_JOIN = "block_guest_join"
            }(r || (r = {}))
        },
        216829: (e, n, t) => {
            t.d(n, {
                i: () => r
            });
            var r;
            ! function(e) {
                e.BIO = "bio";
                e.USERNAME = "username";
                e.NICKNAME = "nickname";
                e.GLOBAL_NAME = "display_name"
            }(r || (r = {}))
        },
        828153: (e, n, t) => {
            t.d(n, {
                f: () => r
            });
            var r;
            ! function(e) {
                e[e.KEYWORD = 1] = "KEYWORD";
                e[e.SPAM_LINK = 2] = "SPAM_LINK";
                e[e.ML_SPAM = 3] = "ML_SPAM";
                e[e.DEFAULT_KEYWORD_LIST = 4] = "DEFAULT_KEYWORD_LIST";
                e[e.MENTION_SPAM = 5] = "MENTION_SPAM";
                e[e.USER_PROFILE = 6] = "USER_PROFILE";
                e[e.SERVER_POLICY = 7] = "SERVER_POLICY"
            }(r || (r = {}))
        },
        816810: (e, n, t) => {
            t.d(n, {
                $: () => r
            });
            var r;
            ! function(e) {
                e[e.IS_GUEST_INVITE = 1] = "IS_GUEST_INVITE";
                e[e.IS_VIEWED = 2] = "IS_VIEWED";
                e[e.IS_ENHANCED = 4] = "IS_ENHANCED"
            }(r || (r = {}));
            new Set([1, 2, 4])
        },
        508151: (e, n, t) => {
            t.d(n, {
                C: () => r
            });
            var r;
            ! function(e) {
                e[e.UNKNOWN = 0] = "UNKNOWN";
                e[e.DEFAULT = 1] = "DEFAULT";
                e[e.IMAGE_ONLY_ANSWERS = 2] = "IMAGE_ONLY_ANSWERS"
            }(r || (r = {}))
        },
        954358: (e, n, t) => {
            t.d(n, {
                $: () => r
            });
            var r;
            ! function(e) {
                e.USER = "user";
                e.ROLE = "role";
                e.CHANNEL = "channel"
            }(r || (r = {}))
        }
    }
]);