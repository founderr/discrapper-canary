"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [43244], {
        224134: (e, t, r) => {
            r.d(t, {
                Z: () => i
            });
            var n = r(744564);
            const i = {
                startTyping: function(e) {
                    n.Z.dispatch({
                        type: "TYPING_START_LOCAL",
                        channelId: e
                    })
                },
                stopTyping: function(e) {
                    n.Z.dispatch({
                        type: "TYPING_STOP_LOCAL",
                        channelId: e
                    })
                }
            }
        },
        665144: (e, t, r) => {
            r.d(t, {
                y: () => a
            });
            var n = r(667294),
                i = r(318715),
                o = r(702264),
                l = r(755550);

            function a(e) {
                var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                    r = (0, i.ZP)([l.Z], (function() {
                        return l.Z.getSettings(e)
                    }));
                n.useEffect((function() {
                    null != e && t && (0, o.Bn)(e)
                }), [e, t]);
                return null != e && (null != (null == r ? void 0 : r.personality) && "" !== (null == r ? void 0 : r.personality))
            }
        },
        338935: (e, t, r) => {
            r.d(t, {
                s$: () => h,
                Am: () => p,
                ZP: () => m
            });
            var n = r(785893),
                i = (r(667294), r(304548)),
                o = r(316388),
                l = r(53645),
                a = r(473708);

            function c(e, t, r, n, i, o, l) {
                try {
                    var a = e[o](l),
                        c = a.value
                } catch (e) {
                    r(e);
                    return
                }
                a.done ? t(c) : Promise.resolve(c).then(n, i)
            }

            function s(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(n, i) {
                        var o = e.apply(t, r);

                        function l(e) {
                            c(o, n, i, l, a, "next", e)
                        }

                        function a(e) {
                            c(o, n, i, l, a, "throw", e)
                        }
                        l(void 0)
                    }))
                }
            }

            function u(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function f(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, n)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }));
                return e
            }
            var d = function(e, t) {
                    var r, n, i, o, l = {
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
                                if (r) throw new TypeError("Generator is already executing.");
                                for (; l;) try {
                                    if (r = 1, n && (i = 2 & o[0] ? n.return : o[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, o[1])).done) return i;
                                    (n = 0, i) && (o = [2 & o[0], i.value]);
                                    switch (o[0]) {
                                        case 0:
                                        case 1:
                                            i = o;
                                            break;
                                        case 4:
                                            l.label++;
                                            return {
                                                value: o[1], done: !1
                                            };
                                        case 5:
                                            l.label++;
                                            n = o[1];
                                            o = [0];
                                            continue;
                                        case 7:
                                            o = l.ops.pop();
                                            l.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = l.trys, i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                                l = 0;
                                                continue
                                            }
                                            if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                                l.label = o[1];
                                                break
                                            }
                                            if (6 === o[0] && l.label < i[1]) {
                                                l.label = i[1];
                                                i = o;
                                                break
                                            }
                                            if (i && l.label < i[2]) {
                                                l.label = i[2];
                                                l.ops.push(o);
                                                break
                                            }
                                            i[2] && l.ops.pop();
                                            l.trys.pop();
                                            continue
                                    }
                                    o = t.call(e, l)
                                } catch (e) {
                                    o = [6, e];
                                    n = 0
                                } finally {
                                    r = i = 0
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
                h = "guild-connection-roles";

            function p(e) {
                (0, i.openModalLazy)(s((function() {
                    var t, i;
                    return d(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                return [4, Promise.all([r.e(40532), r.e(85157), r.e(62419), r.e(29392), r.e(39685), r.e(47007), r.e(79249), r.e(69876), r.e(6543), r.e(29342), r.e(96259), r.e(1960), r.e(13185), r.e(89975), r.e(27499), r.e(79913), r.e(19493), r.e(64466), r.e(92465), r.e(45353), r.e(10675), r.e(73679), r.e(73727), r.e(87440), r.e(52555), r.e(54602), r.e(61953), r.e(6565), r.e(20419), r.e(24251), r.e(3790), r.e(84441), r.e(30027), r.e(36952), r.e(94302), r.e(28629), r.e(70535), r.e(82786), r.e(67367), r.e(31520), r.e(75700), r.e(77579), r.e(80980), r.e(33227), r.e(44832), r.e(24417), r.e(95839), r.e(30144), r.e(89984), r.e(92766), r.e(24501), r.e(35796), r.e(25978), r.e(67783), r.e(3963), r.e(49719)]).then(r.bind(r, 738999))];
                            case 1:
                                t = o.sent(), i = t.default;
                                return [2, function(t) {
                                    return (0, n.jsx)(i, f(function(e) {
                                        for (var t = 1; t < arguments.length; t++) {
                                            var r = null != arguments[t] ? arguments[t] : {},
                                                n = Object.keys(r);
                                            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                                                return Object.getOwnPropertyDescriptor(r, e).enumerable
                                            }))));
                                            n.forEach((function(t) {
                                                u(e, t, r[t])
                                            }))
                                        }
                                        return e
                                    }({}, t), {
                                        guildId: e
                                    }))
                                }]
                        }
                    }))
                })), {
                    modalKey: h,
                    contextKey: i.DEFAULT_MODAL_CONTEXT,
                    onCloseRequest: function() {
                        (0, i.closeModal)(h, i.DEFAULT_MODAL_CONTEXT)
                    }
                })
            }

            function m(e) {
                return (0, l.kQ)(e) ? (0, n.jsx)(i.MenuItem, {
                    id: "guild-connection-roles",
                    label: a.Z.Messages.CONNECTIONS_ROLES_CHANNEL_NAME,
                    icon: o.Z,
                    action: function() {
                        return p(e.id)
                    }
                }) : null
            }
        },
        198265: (e, t, r) => {
            r.d(t, {
                g: () => n,
                t: () => i
            });
            var n, i;
            ! function(e) {
                e[e.NORMAL = 0] = "NORMAL";
                e[e.LOADING = 1] = "LOADING";
                e[e.DISABLED = 2] = "DISABLED"
            }(n || (n = {}));
            ! function(e) {
                e[e.STRING = 1] = "STRING";
                e[e.USER = 2] = "USER";
                e[e.ROLE = 3] = "ROLE";
                e[e.CHANNEL = 4] = "CHANNEL";
                e[e.GUILD = 5] = "GUILD"
            }(i || (i = {}))
        },
        303907: (e, t, r) => {
            r.d(t, {
                h: () => m,
                J: () => g
            });
            var n = r(496486),
                i = r.n(n),
                o = r(73904),
                l = r(457896),
                a = r(775173),
                c = r(198265),
                s = r(622219),
                u = r(919622),
                f = r(473708),
                d = ["934240649153220678", "936929561302675456", "762275850782900254", "1022952195194359889"],
                h = /MJ::Inpaint::\d(::[0-9a-f]{8}\b-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-\b[0-9a-f]{12})?(::SOLO)?/,
                p = function(e, t) {
                    return {
                        id: e.id,
                        name: e.name,
                        animated: e.animated,
                        src: t && null != e.id ? a.ZP.getEmojiURL({
                            id: e.id,
                            animated: e.animated || !1,
                            size: 48
                        }) : void 0
                    }
                },
                m = function(e, t, r) {
                    var n = (null == e ? void 0 : e.data.interactionType) === o.B8.MESSAGE_COMPONENT && (null == e ? void 0 : e.state) === l.F.FAILED ? e.data.indices : null;
                    if (null != n && i().isEqual(n.slice(0, n.length - 1), r.indices)) {
                        var a;
                        return null !== (a = null == t ? void 0 : t.interactionError) && void 0 !== a ? a : function(e) {
                            return 429 === (null == e ? void 0 : e.errorCode) ? f.Z.Messages.INTERACTION_RATE_LIMITED : f.Z.Messages.APPLICATION_COMMAND_FAILED
                        }(e)
                    }
                },
                y = function(e) {
                    switch (e) {
                        case o.re.ACTION_ROW:
                        case o.re.BUTTON:
                        case o.re.STRING_SELECT:
                        case o.re.INPUT_TEXT:
                        case o.re.USER_SELECT:
                        case o.re.ROLE_SELECT:
                        case o.re.MENTIONABLE_SELECT:
                        case o.re.CHANNEL_SELECT:
                            return !0
                    }
                };

            function g(e, t) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
                    n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                    i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [],
                    l = n.includeEmojiSrc;
                return e.map((function(e, a) {
                    if (!y(e.type)) return null;
                    var m = i.concat(a);
                    switch (e.type) {
                        case o.re.ACTION_ROW:
                            var O = null != e.components ? g(e.components, t, r, n, m) : void 0;
                            return {
                                type: o.re.ACTION_ROW, indices: m, components: O
                            };
                        case o.re.BUTTON:
                            if (d.includes(t) && null != e.custom_id && h.test(e.custom_id) && !(0, u.Z)(r)) return null;
                            var b = null != e.emoji ? p(e.emoji, l) : void 0;
                            return {
                                type: o.re.BUTTON, customId: e.custom_id, style: e.style, disabled: e.disabled, url: e.url, label: e.label, emoji: b, indices: m, applicationId: t
                            };
                        case o.re.STRING_SELECT:
                            var j;
                            return {
                                type: o.re.STRING_SELECT, customId: e.custom_id, disabled: e.disabled, options: e.options.map((function(e) {
                                    return {
                                        type: c.t.STRING,
                                        label: e.label,
                                        value: e.value,
                                        default: e.default,
                                        description: e.description,
                                        emoji: null != e.emoji ? p(e.emoji, l) : void 0
                                    }
                                })), placeholder: null !== (j = e.placeholder) && void 0 !== j ? j : f.Z.Messages.MESSAGE_SELECT_COMPONENT_DEFAULT_PLACEHOLDER, minValues: e.min_values, maxValues: e.max_values, indices: m, applicationId: t
                            };
                        case o.re.INPUT_TEXT:
                            return {
                                type: e.type, style: e.style, customId: e.custom_id, label: e.label, value: e.value, placeholder: e.placeholder, disabled: e.disabled, required: e.required, minLength: e.min_length, maxLength: e.max_length, indices: m
                            };
                        case o.re.USER_SELECT:
                            var x;
                            return {
                                type: o.re.USER_SELECT, customId: e.custom_id, disabled: e.disabled, placeholder: null !== (x = e.placeholder) && void 0 !== x ? x : f.Z.Messages.MESSAGE_SELECT_COMPONENT_DEFAULT_PLACEHOLDER, minValues: e.min_values, maxValues: e.max_values, defaultValues: e.default_values, indices: m, applicationId: t, selectedOptions: (0, s.tx)(e.default_values, r)
                            };
                        case o.re.ROLE_SELECT:
                            var v;
                            return {
                                type: o.re.ROLE_SELECT, customId: e.custom_id, disabled: e.disabled,
                                    placeholder: null !== (v = e.placeholder) && void 0 !== v ? v : f.Z.Messages.MESSAGE_SELECT_COMPONENT_DEFAULT_PLACEHOLDER, minValues: e.min_values, maxValues: e.max_values, defaultValues: e.default_values, indices: m, applicationId: t, selectedOptions: (0, s.tx)(e.default_values, r)
                            };
                        case o.re.MENTIONABLE_SELECT:
                            var w;
                            return {
                                type: o.re.MENTIONABLE_SELECT, customId: e.custom_id, disabled: e.disabled, placeholder: null !== (w = e.placeholder) && void 0 !== w ? w : f.Z.Messages.MESSAGE_SELECT_COMPONENT_DEFAULT_PLACEHOLDER, minValues: e.min_values, maxValues: e.max_values, defaultValues: e.default_values, indices: m, applicationId: t, selectedOptions: (0, s.tx)(e.default_values, r)
                            };
                        case o.re.CHANNEL_SELECT:
                            var E, P;
                            return {
                                type: o.re.CHANNEL_SELECT, customId: e.custom_id, disabled: e.disabled, placeholder: null !== (E = e.placeholder) && void 0 !== E ? E : f.Z.Messages.MESSAGE_SELECT_COMPONENT_DEFAULT_PLACEHOLDER, minValues: e.min_values, maxValues: e.max_values, indices: m, channelTypes: e.channel_types, defaultValues: e.default_values, applicationId: t, selectedOptions: (0,
                                    s.tx)(e.default_values, r, null !== (P = e.channel_types) && void 0 !== P ? P : [])
                            };
                        default:
                            return null
                    }
                })).filter((function(e) {
                    return null != e
                }))
            }
        },
        622219: (e, t, r) => {
            r.d(t, {
                HI: () => p,
                _H: () => m,
                af: () => y,
                tx: () => g
            });
            var n = r(954358),
                i = r(73904),
                o = r(61209),
                l = r(21372),
                a = r(567403),
                c = r(473903),
                s = r(504275),
                u = r(773148),
                f = r(198265);

            function d(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function h(e) {
                return function(e) {
                    if (Array.isArray(e)) return d(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return d(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return d(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var p = 1e3;

            function m(e, t, r) {
                var n = o.Z.getChannel(r);
                if (null == n) return [];
                var l = e === i.re.USER_SELECT || e === i.re.MENTIONABLE_SELECT,
                    a = e === i.re.ROLE_SELECT || e === i.re.MENTIONABLE_SELECT,
                    c = s.ZP.queryMentionResults({
                        query: t,
                        channel: n,
                        canMentionEveryone: !1,
                        canMentionHere: !1,
                        canMentionUsers: l,
                        canMentionRoles: a,
                        includeAllGuildUsers: !0,
                        includeNonMentionableRoles: !0,
                        checkRecentlyTalkedOnEmptyQuery: !1,
                        limit: 15
                    }),
                    d = c.users,
                    p = c.roles,
                    m = d.map((function(e) {
                        var t, i = u.ZP.getNickname(n.getGuildId(), r, e.user);
                        return {
                            type: f.t.USER,
                            value: e.user.id,
                            label: null !== (t = null != i ? i : e.user.globalName) && void 0 !== t ? t : e.user.username
                        }
                    })),
                    y = p.map((function(e) {
                        return {
                            type: f.t.ROLE,
                            value: e.id,
                            label: e.name
                        }
                    }));
                return h(m).concat(h(y))
            }

            function y(e, t, r) {
                var n = o.Z.getChannel(t);
                return null == n ? [] : s.ZP.queryApplicationCommandChannelResults({
                    query: e,
                    channel: n,
                    channelTypes: r,
                    limit: 15
                }).channels.map((function(e) {
                    return {
                        type: f.t.CHANNEL,
                        value: e.id,
                        label: e.name
                    }
                }))
            }

            function g(e, t) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                if (null != e) {
                    var i = a.Z.getGuild(t);
                    return e.map((function(e) {
                        switch (e.type) {
                            case n.$.USER:
                                var t = c.default.getUser(e.id);
                                if (null == t) return null;
                                var a, s = null != i ? l.ZP.getNick(i.id, t.id) : void 0;
                                return {
                                    type: f.t.USER, value: t.id, label: null !== (a = null != s ? s : t.globalName) && void 0 !== a ? a : t.username
                                };
                            case n.$.ROLE:
                                if (null == i) return null;
                                var u = i.getRole(e.id);
                                return null == u ? null : {
                                    type: f.t.ROLE,
                                    value: u.id,
                                    label: u.name
                                };
                            case n.$.CHANNEL:
                                if (null == i) return null;
                                var d = o.Z.getChannel(e.id);
                                return null == d || d.guild_id !== i.id || r.length > 0 && !r.includes(d.type) ? null : {
                                    type: f.t.CHANNEL,
                                    value: d.id,
                                    label: d.name
                                }
                        }
                    })).filter((function(e) {
                        return null !== e
                    }))
                }
            }
        },
        283285: (e, t, r) => {
            r.d(t, {
                Z: () => c
            });
            var n = r(667294),
                i = r(804808),
                o = r(785893),
                l = r(613749);
            var a = r(2590);

            function c(e, t) {
                var r = t.hideSimpleEmbedContent,
                    c = t.formatInline,
                    s = void 0 !== c && c,
                    u = t.noStyleAndInteraction,
                    f = void 0 !== u && u,
                    d = t.isInteracting,
                    h = void 0 !== d && d,
                    p = t.allowHeading,
                    m = void 0 !== p && p,
                    y = t.allowList,
                    g = void 0 !== y && y,
                    O = t.allowLinks,
                    b = void 0 !== O && O,
                    j = t.previewLinkTarget,
                    x = void 0 !== j && j;
                return n.useMemo((function() {
                    return null != e.customRenderedContent ? e.customRenderedContent : e.isCommandType() && 0 === e.content.length || e.hasFlag(a.iLy.LOADING) ? function(e) {
                        return {
                            content: (0, o.jsx)(l.ZP, {
                                message: e
                            }),
                            hasSpoilerEmbeds: !1
                        }
                    }(e) : (0, i.ZP)(e, {
                        hideSimpleEmbedContent: r,
                        formatInline: s,
                        noStyleAndInteraction: f,
                        isInteracting: h,
                        allowHeading: m,
                        allowList: g,
                        allowLinks: b,
                        previewLinkTarget: x
                    })
                }), [e.content, e.customRenderedContent, e.embeds, e.interaction, e.state, e.type, r, s, f, h, m, g, b, x])
            }
        },
        827991: (e, t, r) => {
            r.d(t, {
                q: () => y,
                Z: () => g
            });
            var n = r(785893),
                i = (r(667294), r(202351)),
                o = r(304548),
                l = r(224134),
                a = r(61209),
                c = r(682776),
                s = r(715107),
                u = r(930948),
                f = r(749565),
                d = r(2590),
                h = r(473708);

            function p(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function m(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, i, o = [],
                            l = !0,
                            a = !1;
                        try {
                            for (r = r.call(e); !(l = (n = r.next()).done); l = !0) {
                                o.push(n.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            a = !0;
                            i = e
                        } finally {
                            try {
                                l || null == r.return || r.return()
                            } finally {
                                if (a) throw i
                            }
                        }
                        return o
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return p(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return p(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function y(e, t) {
                var r = e.id,
                    n = "@".concat(f.ZP.getUserTag(e, {
                        decoration: "never"
                    })),
                    i = "<@".concat(r, ">");
                u.S.dispatchToLastSubscribed(d.CkL.INSERT_TEXT, {
                    plainText: n,
                    rawText: i
                });
                null != t && l.Z.startTyping(t)
            }

            function g(e, t, r) {
                var l = m((0, i.Wu)([s.Z, a.Z, c.Z], (function() {
                        var e = s.Z.getChannelId(t),
                            r = a.Z.getChannel(e);
                        return [e, null != r && (r.isMultiUserDM() || c.Z.can(d.Plq.SEND_MESSAGES, r))]
                    }), [t]), 2),
                    u = l[0],
                    f = l[1],
                    p = r === d.IlC.POPOUT;
                return !f || p ? null : (0, n.jsx)(o.MenuItem, {
                    id: "mention",
                    label: h.Z.Messages.MENTION,
                    action: function() {
                        y(e, u)
                    }
                })
            }
        },
        64875: (e, t, r) => {
            r.d(t, {
                Z: () => h
            });
            var n = r(785893),
                i = (r(667294), r(168075)),
                o = r(795308),
                l = r(633878);

            function a(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function c(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, n)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }));
                return e
            }

            function s(e, t) {
                if (null == e) return {};
                var r, n, i = function(e, t) {
                    if (null == e) return {};
                    var r, n, i = {},
                        o = Object.keys(e);
                    for (n = 0; n < o.length; n++) {
                        r = o[n];
                        t.indexOf(r) >= 0 || (i[r] = e[r])
                    }
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < o.length; n++) {
                        r = o[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r])
                    }
                }
                return i
            }

            function u(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function f(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, n)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }));
                return e
            }

            function d(e, t) {
                if (null == e) return {};
                var r, n, i = function(e, t) {
                    if (null == e) return {};
                    var r, n, i = {},
                        o = Object.keys(e);
                    for (n = 0; n < o.length; n++) {
                        r = o[n];
                        t.indexOf(r) >= 0 || (i[r] = e[r])
                    }
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < o.length; n++) {
                        r = o[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r])
                    }
                }
                return i
            }
            const h = (0, i.hN)((function(e) {
                var t = e.color,
                    r = void 0 === t ? "currentColor" : t,
                    i = e.height,
                    o = void 0 === i ? 24 : i,
                    a = e.width,
                    c = void 0 === a ? 24 : a,
                    s = d(e, ["color", "height", "width"]);
                return (0, n.jsxs)("svg", f(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            u(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, l.Z)(s)), {
                    width: c,
                    height: o,
                    viewBox: "0 0 20 20",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, n.jsx)("path", {
                        d: "M12.83 14.24L9.29006 10.71C9.19737 10.6165 9.124 10.5057 9.07424 10.3839C9.02447 10.2621 8.99926 10.1316 9.00002 10V4H11V9.58997L14.24 12.83L12.83 14.24Z",
                        fill: r
                    }), (0, n.jsx)("path", {
                        d: "M13.3101 2L18 6.69V13.3101L13.3101 18H6.68994L2 13.3101V6.69L6.68994 2H13.3101V2ZM13.73 0H6.27002C6.00525 0.00368349 5.75169 0.107244 5.56006 0.289978L0.290039 5.56C0.107305 5.75163 0.00368349 6.00525 0 6.27002V13.73C0.00368349 13.9947 0.107305 14.2483 0.290039 14.4399L5.56006 19.71C5.75169 19.8927 6.00525 19.9963 6.27002 20H13.73C13.9947 19.9963 14.2483 19.8927 14.4399 19.71L19.71 14.4399C19.8927 14.2483 19.9963 13.9947 20 13.73V6.27002C19.9963 6.00525 19.8927 5.75163 19.71 5.56L14.4399 0.289978C14.2483 0.107244 13.9947 0.00368349 13.73 0V0Z",
                        fill: r
                    })]
                }))
            }), (function(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    i = e.height,
                    u = void 0 === i ? 24 : i,
                    f = e.color,
                    d = void 0 === f ? o.Z.colors.INTERACTIVE_NORMAL : f,
                    h = e.colorClass,
                    p = void 0 === h ? "" : h,
                    m = s(e, ["width", "height", "color", "colorClass"]);
                return (0, n.jsx)("svg", c(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            a(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, l.Z)(m)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: r,
                    height: u,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        fillRule: "evenodd",
                        d: "M12 23c.08 0 .135-.08.111-.157-.22-.715-.166-1.53.285-2.315l2.21-3.851c.174-.302-.067-.724-.313-.97l-3-3A1 1 0 0 1 11 12V5a1 1 0 1 1 2 0v6.379a.5.5 0 0 0 .146.353l2.561 2.56c.08.08.223.078.28-.02l.368-.64c1.163-2.028 4.127-2.028 5.29 0l.311.54c.218.381.771.311.853-.12.125-.665.191-1.35.191-2.052 0-6.075-4.925-11-11-11S1 5.925 1 12s4.925 11 11 11Zm6.09-8.373c.394-.688 1.426-.688 1.82 0l3.96 6.897c.38.664-.12 1.476-.911 1.476h-7.918c-.79 0-1.292-.812-.91-1.476l3.958-6.897Zm.464 1.873h.892a.5.5 0 0 1 .497.551l-.208 2.017c-.017.16-.177.262-.334.228A1.928 1.928 0 0 0 19 19.25c-.137 0-.274.019-.4.046-.158.034-.318-.068-.335-.228l-.208-2.017a.5.5 0 0 1 .497-.551ZM19 22a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
                        clipRule: "evenodd",
                        className: p
                    })
                }))
            }))
        },
        613749: (e, t, r) => {
            r.d(t, {
                c4: () => j,
                st: () => x,
                ZP: () => w
            });
            var n = r(785893),
                i = r(667294),
                o = r(294184),
                l = r.n(o),
                a = r(283151),
                c = r(202351),
                s = r(304548),
                u = r(303907),
                f = r(873934),
                d = r(838956),
                h = r(818417),
                p = r(98265),
                m = r(2590),
                y = r(473708),
                g = r(983803),
                O = r.n(g);

            function b(e) {
                return {
                    text: e,
                    icon: (0, n.jsx)(s.Dots, {
                        className: O().icon,
                        dotRadius: 3.5,
                        themed: !0
                    })
                }
            }

            function j(e) {
                return {
                    text: null != e ? e : y.Z.Messages.APPLICATION_COMMAND_FAILED,
                    color: p.Z.Colors.ERROR,
                    icon: (0, n.jsx)(h.Z, {
                        width: 16,
                        height: 16,
                        className: l()(O().icon, O().errorIcon)
                    })
                }
            }

            function x(e) {
                var t = e.className,
                    r = e.icon,
                    i = e.text,
                    o = e.color;
                return (0, n.jsxs)("div", {
                    className: l()(O().wrapper, t),
                    children: [r, (0, n.jsx)(p.Z, {
                        size: p.Z.Sizes.SIZE_14,
                        color: o,
                        children: i
                    })]
                })
            }

            function v(e) {
                var t = e.message,
                    r = e.className,
                    o = e.component,
                    l = (0, a.Z)(),
                    s = (0, c.e7)([f.Z], (function() {
                        return f.Z.getInteraction(t)
                    }), [t]);
                i.useEffect((function() {
                    var e = null;
                    if (t.hasFlag(m.iLy.LOADING) && null != s) {
                        var r = (0, d.ow)(t.id) - Date.now();
                        r > 0 && (e = setTimeout((function() {
                            return l()
                        }), 1e3 + r))
                    }
                    return function() {
                        clearTimeout(e)
                    }
                }), [l, s, t]);
                var h = null;
                if (null == o) h = function(e, t) {
                    switch ((0, d.t$)(t, e)) {
                        case d.rQ.SENDING:
                            return b(y.Z.Messages.APPLICATION_COMMAND_SENDING);
                        case d.rQ.CREATED:
                            return b(y.Z.Messages.APPLICATION_COMMAND_WAITING.format({
                                applicationName: t.author.username
                            }));
                        case d.rQ.TIMED_OUT:
                            return j(y.Z.Messages.APPLICATION_COMMAND_TIMED_OUT);
                        case d.rQ.FAILED:
                            return j(t.interactionError)
                    }
                }(s, t);
                else {
                    var p = (0, u.h)(s, t, o);
                    null != p && (h = j(p))
                }
                if (null == h) return null;
                var g = h.text,
                    O = h.icon,
                    v = h.color;
                return (0, n.jsx)(x, {
                    icon: O,
                    text: g,
                    className: r,
                    color: v
                })
            }
            const w = i.memo(v)
        },
        508754: (e, t, r) => {
            r.d(t, {
                Z: () => h
            });
            var n = r(785893),
                i = (r(667294), r(294184)),
                o = r.n(i),
                l = r(304548),
                a = r(927570),
                c = r.n(a);

            function s(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function u(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))));
                    n.forEach((function(t) {
                        s(e, t, r[t])
                    }))
                }
                return e
            }

            function f(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, n)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }));
                return e
            }

            function d(e, t) {
                if (null == e) return {};
                var r, n, i = function(e, t) {
                    if (null == e) return {};
                    var r, n, i = {},
                        o = Object.keys(e);
                    for (n = 0; n < o.length; n++) {
                        r = o[n];
                        t.indexOf(r) >= 0 || (i[r] = e[r])
                    }
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < o.length; n++) {
                        r = o[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r])
                    }
                }
                return i
            }
            const h = function(e) {
                var t, r = e.className,
                    i = e.compact,
                    a = void 0 !== i && i,
                    h = e.contentOnly,
                    p = void 0 !== h && h,
                    m = e.zalgo,
                    y = void 0 === m || m,
                    g = e.disableInteraction,
                    O = void 0 !== g && g,
                    b = e.childrenHighlight,
                    j = e.childrenRepliedMessage,
                    x = e.childrenExecutedCommand,
                    v = e.childrenHeader,
                    w = e.childrenSystemMessage,
                    E = e.childrenButtons,
                    P = e.childrenMessageContent,
                    S = e.childrenAccessories,
                    C = e.messageRef,
                    N = e.focusProps,
                    _ = void 0 === N ? {
                        offset: {
                            left: 4,
                            right: 4
                        }
                    } : N,
                    T = e.hasThread,
                    I = e.isSystemMessage,
                    A = e.hasReply,
                    L = d(e, ["className", "compact", "contentOnly", "zalgo", "disableInteraction", "childrenHighlight", "childrenRepliedMessage", "childrenExecutedCommand", "childrenHeader", "childrenSystemMessage", "childrenButtons", "childrenMessageContent", "childrenAccessories", "messageRef", "focusProps", "hasThread", "isSystemMessage", "hasReply"]),
                    M = (0, n.jsx)(l.FocusRing, f(u({}, _), {
                        children: (0, n.jsxs)("div", f(u({
                            className: o()(r, (t = {}, s(t, c().wrapper, !0), s(t, c().contentOnly, p), s(t, c().compact, a), s(t, c().cozy, !a), s(t, c().zalgo, y), s(t, c().hasThread, T),
                                s(t, c().isSystemMessage, I), s(t, c().hasReply, A), t)),
                            ref: C
                        }, L), {
                            role: "article",
                            children: [!a && b, j, x, (0, n.jsxs)("div", {
                                className: c().contents,
                                children: [w, v, null == w && P]
                            }), S, null != E ? (0, n.jsx)("div", {
                                className: c().buttonContainer,
                                children: E
                            }) : null]
                        }))
                    }));
                return O ? (0, n.jsx)(l.FocusBlock, {
                    children: M
                }) : M
            }
        },
        728118: (e, t, r) => {
            r.d(t, {
                nD: () => Dt,
                ZP: () => Rt,
                F2: () => Mt,
                xP: () => Lt
            });
            var n = r(785893),
                i = r(667294),
                o = r(294184),
                l = r.n(o),
                a = r(289283),
                c = r(202351),
                s = r(304548),
                u = r(665144),
                f = r(472034),
                d = r(473708),
                h = r(244192),
                p = r.n(h);

            function m(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function y(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, n)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }));
                return e
            }

            function g() {
                return (0, n.jsx)(s.Tooltip, {
                    text: d.Z.Messages.CLYDE_PERSONALITY_BADGE_TOOLTIP,
                    tooltipClassName: p().tooltip,
                    children: function(e) {
                        return (0, n.jsx)("div", y(function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var r = null != arguments[t] ? arguments[t] : {},
                                    n = Object.keys(r);
                                "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                                    return Object.getOwnPropertyDescriptor(r, e).enumerable
                                }))));
                                n.forEach((function(t) {
                                    m(e, t, r[t])
                                }))
                            }
                            return e
                        }({
                            className: p().personalityBadge
                        }, e), {
                            children: (0, n.jsx)(f.Z, {
                                width: 12,
                                height: 12
                            })
                        }))
                    }
                })
            }
            var O = r(441143),
                b = r.n(O),
                j = r(496486),
                x = r.n(j),
                v = r(795308),
                w = r(575945),
                E = r(327499),
                P = r(385028),
                S = r(74535),
                C = r(265688),
                N = r(396043),
                _ = r(924417),
                T = r(722406),
                I = r(21372),
                A = r(609853),
                L = r(621329),
                M = r(652591),
                D = r(53645),
                R = r(744564);

            function Z(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function k(e) {
                k = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return k(e)
            }

            function U(e, t) {
                return !t || "object" !== G(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function B(e, t) {
                B = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return B(e, t)
            }
            var G = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function H(e) {
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
                    var r, n = k(e);
                    if (t) {
                        var i = k(this).constructor;
                        r = Reflect.construct(n, arguments, i)
                    } else r = n.apply(this, arguments);
                    return U(this, r)
                }
            }
            var V = new Map,
                F = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        });
                        t && B(e, t)
                    }(r, e);
                    var t = H(r);

                    function r() {
                        Z(this, r);
                        return t.apply(this, arguments)
                    }
                    r.prototype.getGuildRoleConnectionEligibility = function(e) {
                        return null != e ? V.get(e) : void 0
                    };
                    return r
                }(c.ZP.Store);
            F.displayName = "GuildRoleConnectionEligibilityStore";
            const q = new F(R.Z, {
                GUILD_ROLE_CONNECTION_ELIGIBILITY_FETCH_SUCCESS: function(e) {
                    var t = e.roleId,
                        r = e.roleConnectionEligibility;
                    V.set(t, r)
                }
            });
            var z = r(979422),
                W = r(566500),
                X = r(491984),
                K = r(338935),
                Y = r(678005),
                $ = r(2590),
                J = r(960412),
                Q = r(645110),
                ee = r.n(Q);

            function te(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function re(e, t, r, n, i, o, l) {
                try {
                    var a = e[o](l),
                        c = a.value
                } catch (e) {
                    r(e);
                    return
                }
                a.done ? t(c) : Promise.resolve(c).then(n, i)
            }

            function ne(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(n, i) {
                        var o = e.apply(t, r);

                        function l(e) {
                            re(o, n, i, l, a, "next", e)
                        }

                        function a(e) {
                            re(o, n, i, l, a, "throw", e)
                        }
                        l(void 0)
                    }))
                }
            }

            function ie(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function oe(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))));
                    n.forEach((function(t) {
                        ie(e, t, r[t])
                    }))
                }
                return e
            }

            function le(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, n)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }));
                return e
            }

            function ae(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, i, o = [],
                            l = !0,
                            a = !1;
                        try {
                            for (r = r.call(e); !(l = (n = r.next()).done); l = !0) {
                                o.push(n.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            a = !0;
                            i = e
                        } finally {
                            try {
                                l || null == r.return || r.return()
                            } finally {
                                if (a) throw i
                            }
                        }
                        return o
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return te(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return te(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var ce = function(e, t) {
                var r, n, i, o, l = {
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
                            if (r) throw new TypeError("Generator is already executing.");
                            for (; l;) try {
                                if (r = 1, n && (i = 2 & o[0] ? n.return : o[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, o[1])).done) return i;
                                (n = 0, i) && (o = [2 & o[0], i.value]);
                                switch (o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        l.label++;
                                        return {
                                            value: o[1], done: !1
                                        };
                                    case 5:
                                        l.label++;
                                        n = o[1];
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = l.ops.pop();
                                        l.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = l.trys, i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            l = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            l.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && l.label < i[1]) {
                                            l.label = i[1];
                                            i = o;
                                            break
                                        }
                                        if (i && l.label < i[2]) {
                                            l.label = i[2];
                                            l.ops.push(o);
                                            break
                                        }
                                        i[2] && l.ops.pop();
                                        l.trys.pop();
                                        continue
                                }
                                o = t.call(e, l)
                            } catch (e) {
                                o = [6, e];
                                n = 0
                            } finally {
                                r = i = 0
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

            function se(e) {
                var t, r = e.connectionType,
                    i = e.connectionMetadataField,
                    o = e.operator,
                    l = e.value,
                    a = e.description;
                if (null != a) switch (o) {
                    case Y.iO.LESS_THAN:
                        t = d.Z.Messages.CONNECTIONS_ROLE_RULE_GENERIC.format({
                            description: a,
                            count: Math.max(0, Number(l) - 1)
                        });
                        break;
                    case Y.iO.GREATER_THAN:
                        t = d.Z.Messages.CONNECTIONS_ROLE_RULE_GENERIC.format({
                            description: a,
                            count: Math.max(0, Number(l) + 1)
                        });
                        break;
                    default:
                        t = a
                } else t = (0, D.n_)({
                    connectionType: r,
                    connectionMetadataField: i,
                    operator: o,
                    value: l
                });
                return null == t ? null : (0, n.jsxs)("div", {
                    className: ee().popoutCheck,
                    children: [(0, n.jsx)(L.Z, {
                        className: ee().popoutCheckIcon
                    }), (0, n.jsx)(s.Text, {
                        variant: "text-xs/medium",
                        color: "header-primary",
                        children: t
                    })]
                })
            }

            function ue(e) {
                var t = e.eligibilityStates,
                    r = (0, S.ZP)(),
                    i = (0, s.useToken)(v.Z.unsafe_rawColors.GREEN_330).hex(),
                    o = x().groupBy(t, (function(e) {
                        return "".concat(e.connection_type).concat(null != e.application_id ? ":".concat(e.application_id) : "")
                    }));
                return (0,
                    n.jsx)(n.Fragment, {
                    children: Object.keys(o).map((function(e) {
                        var t, l, a, c = o[e],
                            u = c.filter((function(e) {
                                return null != e.operator
                            })),
                            f = c.find((function(e) {
                                return null != e.application
                            })),
                            d = C.Z.get(e),
                            h = null == f ? void 0 : f.application,
                            p = null != (null == h ? void 0 : h.bot) ? new T.Z(h.bot) : null;
                        D.SJ.includes(null !== (t = null == h ? void 0 : h.id) && void 0 !== t ? t : "") ? l = (0, n.jsx)(X.Z, {
                            className: ee().botTag,
                            color: i,
                            size: 16
                        }) : null != p && (l = (0, n.jsx)(A.Z, {
                            className: ee().botTag,
                            verified: p.isVerifiedBot()
                        }));
                        return (0, n.jsxs)("div", {
                            className: ee().popoutChecksGroup,
                            children: [(0, n.jsxs)("div", {
                                className: ee().popoutCheckGroupName,
                                children: [null != d ? (0, n.jsx)("img", {
                                    src: (0, w.wj)(r) ? d.icon.darkSVG : d.icon.lightSVG,
                                    alt: "",
                                    className: ee().popoutCheckGroupPlatformIcon
                                }) : null, null != p ? (0, n.jsx)(P.Z, {
                                    user: p,
                                    size: s.AvatarSizes.SIZE_20,
                                    className: ee().popoutCheckGroupPlatformIcon
                                }) : null, (0, n.jsx)(s.Text, {
                                    variant: "text-sm/medium",
                                    color: "interactive-active",
                                    children: null !== (a = null == d ? void 0 : d.name) && void 0 !== a ? a : null == h ? void 0 : h.name
                                }), l]
                            }), u.map((function(e) {
                                var t = e.connection_type,
                                    r = e.connection_metadata_field,
                                    i = e.operator,
                                    o = e.value,
                                    l = e.description;
                                b()(null != r, "connectionMetadataField is null");
                                b()(null != i, "operator is null");
                                b()(null != o, "value is null");
                                return (0, n.jsx)(se, {
                                    connectionType: t,
                                    connectionMetadataField: r,
                                    operator: i,
                                    value: o,
                                    description: l
                                }, "".concat(t, ":").concat(r, ":").concat(i, ":").concat(o))
                            }))]
                        }, e)
                    }))
                })
            }

            function fe(e) {
                var t, r = e.onGetRolesClicked,
                    o = e.onOpenProfile,
                    l = e.eligibilityStates,
                    a = e.userId,
                    u = e.roleId,
                    f = e.channelId,
                    h = e.guildId;
                i.useEffect((function() {
                    M.default.track($.rMx.PASSPORT_ROLE_POPOUT_VIEWED, oe({
                        other_user_id: a,
                        role_id: u
                    }, (0, N.JS)(f), (0, N.hH)(h)))
                }), [a, u, f, h]);
                var p, m = (0, c.e7)([I.ZP], (function() {
                    var e;
                    return null !== (t = null === (e = I.ZP.getSelfMember(h)) || void 0 === e ? void 0 : e.roles.includes(u)) && void 0 !== t && t
                }), [h, u]);
                p = 1 === l.length && 1 === l[0].length ? d.Z.Messages.CONNECTIONS_ROLE_POPOUT_HEADER_ONE : 1 === l.length ? d.Z.Messages.CONNECTIONS_ROLE_POPOUT_HEADER_ALL.format() : d.Z.Messages.CONNECTIONS_ROLE_POPOUT_HEADER_OR.format();
                return (0, n.jsxs)("div", {
                    className: ee().popout,
                    children: [(0, n.jsx)("div", {
                        className: ee().popoutHeaderContainer,
                        children: (0, n.jsx)(s.Text, {
                            variant: "text-xs/normal",
                            color: "text-normal",
                            className: ee().popoutHeaderText,
                            children: p
                        })
                    }), (0, n.jsx)("div", {
                        className: ee().popoutChecks,
                        children: (0, n.jsx)(ue, {
                            eligibilityStates: l.flat()
                        })
                    }), (0, n.jsxs)("div", {
                        className: ee().buttonContainer,
                        children: [m ? null : (0, n.jsx)(s.Button, {
                            className: ee().getRolesButton,
                            onClick: r,
                            children: d.Z.Messages.CONNECTIONS_ROLE_POPOUT_GET_ROLES
                        }), (0, n.jsx)(s.Button, {
                            className: ee().viewConnectionsButton,
                            color: s.Button.Colors.PRIMARY,
                            onClick: o,
                            children: d.Z.Messages.CONNECTIONS_ROLE_POPOUT_VIEW_CONNECTIONS
                        })]
                    })]
                })
            }

            function de(e) {
                var t = e.userId,
                    r = e.guild,
                    o = e.channel,
                    l = (0, z.Z)(r, t, o.id, !0),
                    a = (0, c.e7)([q], (function() {
                        return q.getGuildRoleConnectionEligibility(null == l ? void 0 : l.id)
                    })),
                    u = ae(i.useState(null == a), 2),
                    f = u[0],
                    h = u[1];
                if (null == l) return null;

                function p() {
                    return (p = ne((function() {
                        return ce(this, (function(e) {
                            switch (e.label) {
                                case 0:
                                    b()(null != l, "visibleConnectionsRole is null");
                                    return f && null == a ? [4, E.Z.fetchGuildRoleConnectionsEligibility(r.id, l.id)] : [2];
                                case 1:
                                    e.sent();
                                    h(!1);
                                    return [2]
                            }
                        }))
                    }))).apply(this, arguments)
                }
                return (0, n.jsx)(s.LazyPopout, {
                    onRequestOpen: function() {
                        return p.apply(this, arguments)
                    },
                    renderPopout: function() {
                        return Promise.resolve((function(e) {
                            var i = e.closePopout;
                            if (null == a) return (0, n.jsx)(n.Fragment, {});
                            b()(null != l, "visibleConnectionsRole is null");
                            return (0, n.jsx)(fe, {
                                eligibilityStates: a,
                                userId: t,
                                roleId: l.id,
                                channelId: o.id,
                                guildId: r.id,
                                onGetRolesClicked: function() {
                                    (0, K.Am)(r.id)
                                },
                                onOpenProfile: function() {
                                    (0, _.m)({
                                        userId: t,
                                        guildId: r.id,
                                        channelId: o.id,
                                        section: J.oh.USER_INFO_CONNECTIONS,
                                        analyticsLocation: {
                                            section: $.jXE.CHANNEL
                                        }
                                    });
                                    i()
                                }
                            })
                        }))
                    },
                    align: "top",
                    nudgeAlignIntoViewport: !0,
                    children: function(e) {
                        return (0, n.jsx)(s.Tooltip, {
                            text: d.Z.Messages.CONNECTIONS_ROLE_POPOUT_CLICK_TO_VIEW,
                            children: function(t) {
                                return (0, n.jsxs)("div", le(oe({
                                    className: ee().badge
                                }, t, e), {
                                    children: [(0, n.jsx)(W.Z, {
                                        className: ee().badgeVerifiedIcon,
                                        size: 16,
                                        color: l.colorString
                                    }), (0, n.jsx)(s.Text, {
                                        variant: "text-xs/bold",
                                        color: "header-primary",
                                        className: ee().roleName,
                                        children: l.name
                                    })]
                                }))
                            }
                        })
                    }
                })
            }
            var he = r(872017),
                pe = r(168075),
                me = r(633878);

            function ye(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function ge(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, n)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }));
                return e
            }

            function Oe(e, t) {
                if (null == e) return {};
                var r, n, i = function(e, t) {
                    if (null == e) return {};
                    var r, n, i = {},
                        o = Object.keys(e);
                    for (n = 0; n < o.length; n++) {
                        r = o[n];
                        t.indexOf(r) >= 0 || (i[r] = e[r])
                    }
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < o.length; n++) {
                        r = o[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r])
                    }
                }
                return i
            }

            function be(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function je(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, n)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }));
                return e
            }

            function xe(e, t) {
                if (null == e) return {};
                var r, n, i = function(e, t) {
                    if (null == e) return {};
                    var r, n, i = {},
                        o = Object.keys(e);
                    for (n = 0; n < o.length; n++) {
                        r = o[n];
                        t.indexOf(r) >= 0 || (i[r] = e[r])
                    }
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < o.length; n++) {
                        r = o[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r])
                    }
                }
                return i
            }
            const ve = (0, pe.hN)((function(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    i = e.height,
                    o = void 0 === i ? 24 : i,
                    l = e.color,
                    a = void 0 === l ? "currentColor" : l,
                    c = xe(e, ["width", "height", "color"]);
                return (0, n.jsxs)("svg", je(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            be(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, me.Z)(c)), {
                    width: r,
                    height: o,
                    viewBox: "0 0 64 64",
                    fill: "none",
                    children: [(0, n.jsx)("rect", {
                        width: "8",
                        height: "8",
                        fill: a
                    }), (0,
                        n.jsx)("rect", {
                        x: "56",
                        y: "56",
                        width: "8",
                        height: "8",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "28",
                        y: "21.6453",
                        width: "2.66667",
                        height: "2.66667",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "30.6667",
                        y: "21.6453",
                        width: "2.66667",
                        height: "2.66667",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "28",
                        y: "18.9785",
                        width: "2.66667",
                        height: "2.66667",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "25.3335",
                        y: "18.9785",
                        width: "2.66667",
                        height: "2.66667",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "30.6667",
                        y: "18.9785",
                        width: "2.66667",
                        height: "2.66667",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "28",
                        y: "16.3119",
                        width: "2.66667",
                        height: "2.66667",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "25.3335",
                        y: "16.3119",
                        width: "2.66667",
                        height: "2.66667",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "22.6667",
                        y: "16.3119",
                        width: "2.66667",
                        height: "2.66667",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "30.6667",
                        y: "16.3119",
                        width: "2.66667",
                        height: "2.66667",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "28",
                        y: "13.6453",
                        width: "2.66667",
                        height: "2.66667",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "25.3335",
                        y: "13.6453",
                        width: "2.66667",
                        height: "2.66667",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "22.6667",
                        y: "13.6453",
                        width: "2.66667",
                        height: "2.66667",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "30.6667",
                        y: "13.6453",
                        width: "2.66667",
                        height: "2.66667",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "28",
                        y: "10.9785",
                        width: "2.66667",
                        height: "2.66667",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "25.3335",
                        y: "10.9785",
                        width: "2.66667",
                        height: "2.66667",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "22.6667",
                        y: "10.9785",
                        width: "2.66667",
                        height: "2.66667",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        opacity: "0.2",
                        x: "30.6667",
                        y: "10.9785",
                        width: "2.66667",
                        height: "2.66667",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "28",
                        y: "8.31189",
                        width: "2.66667",
                        height: "2.66667",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "25.3335",
                        y: "8.31189",
                        width: "2.66667",
                        height: "2.66667",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        width: "2.66667",
                        height: "2.66667",
                        transform: "matrix(-1 0 0 1 36 21.6453)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        width: "2.66667",
                        height: "2.66667",
                        transform: "matrix(-1 0 0 1 36 18.9785)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        width: "2.66667",
                        height: "2.66667",
                        transform: "matrix(-1 0 0 1 38.6667 18.9785)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        width: "2.66667",
                        height: "2.66667",
                        transform: "matrix(-1 0 0 1 36 16.3119)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        width: "2.66667",
                        height: "2.66667",
                        transform: "matrix(-1 0 0 1 38.6667 16.3119)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        width: "2.66666",
                        height: "2.66667",
                        transform: "matrix(-1 0 0 1 41.3335 16.3119)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        width: "2.66667",
                        height: "2.66667",
                        transform: "matrix(-1 0 0 1 36 13.6453)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        width: "2.66667",
                        height: "2.66667",
                        transform: "matrix(-1 0 0 1 38.6667 13.6453)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        width: "2.66666",
                        height: "2.66667",
                        transform: "matrix(-1 0 0 1 41.3335 13.6453)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        width: "2.66667",
                        height: "2.66667",
                        transform: "matrix(-1 0 0 1 36 10.9785)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        width: "2.66667",
                        height: "2.66667",
                        transform: "matrix(-1 0 0 1 38.6667 10.9785)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        width: "2.66666",
                        height: "2.66667",
                        transform: "matrix(-1 0 0 1 41.3335 10.9785)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        width: "2.66667",
                        height: "2.66667",
                        transform: "matrix(-1 0 0 1 36 8.31189)",
                        fill: a
                    }), (0,
                        n.jsx)("rect", {
                        width: "2.66667",
                        height: "2.66667",
                        transform: "matrix(-1 0 0 1 38.6667 8.31189)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "30.6667",
                        y: "24.3119",
                        width: "2.66667",
                        height: "2.66667",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "30.6394",
                        y: "47.6882",
                        width: "2.66667",
                        height: "2.66666",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "30.6394",
                        y: "45.0215",
                        width: "2.66667",
                        height: "2.66667",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "28.0273",
                        y: "45.0215",
                        width: "2.66667",
                        height: "2.66667",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "17.5796",
                        y: "34.3549",
                        width: "2.66667",
                        height: "2.66667",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "28.0273",
                        y: "42.3549",
                        width: "2.66667",
                        height: "2.66667",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "17.5796",
                        y: "31.6882",
                        width: "2.66667",
                        height: "2.66667",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "28.0273",
                        y: "39.6882",
                        width: "2.66667",
                        height: "2.66666",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "17.5796",
                        y: "29.0215",
                        width: "2.66667",
                        height: "2.66667",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "28.0273",
                        y: "37.0215",
                        width: "2.66667",
                        height: "2.66667",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "17.5796",
                        y: "26.3549",
                        width: "2.66667",
                        height: "2.66667",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "25.4155",
                        y: "45.0215",
                        width: "2.66667",
                        height: "2.66667",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "14.9675",
                        y: "34.3549",
                        width: "2.66667",
                        height: "2.66667",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "25.4155",
                        y: "42.3549",
                        width: "2.66667",
                        height: "2.66667",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "14.9675",
                        y: "31.6882",
                        width: "2.66667",
                        height: "2.66667",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "25.4155",
                        y: "39.6882",
                        width: "2.66667",
                        height: "2.66666",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "14.9675",
                        y: "29.0215",
                        width: "2.66667",
                        height: "2.66667",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "25.4155",
                        y: "37.0215",
                        width: "2.66667",
                        height: "2.66667",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "14.9675",
                        y: "26.3549",
                        width: "2.66667",
                        height: "2.66667",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "22.8035",
                        y: "45.0215",
                        width: "2.66667",
                        height: "2.66667",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "12.3555",
                        y: "34.3549",
                        width: "2.66667",
                        height: "2.66667",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "22.8035",
                        y: "42.3549",
                        width: "2.66667",
                        height: "2.66667",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "12.3555",
                        y: "31.6882",
                        width: "2.66667",
                        height: "2.66667",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "22.8035",
                        y: "39.6882",
                        width: "2.66667",
                        height: "2.66666",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "12.3555",
                        y: "29.0215",
                        width: "2.66667",
                        height: "2.66667",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "22.8035",
                        y: "37.0215",
                        width: "2.66667",
                        height: "2.66667",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "12.3555",
                        y: "26.3549",
                        width: "2.66667",
                        height: "2.66667",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "20.1914",
                        y: "45.0215",
                        width: "2.66667",
                        height: "2.66667",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "9.74365",
                        y: "34.3549",
                        width: "2.66667",
                        height: "2.66667",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "20.1914",
                        y: "42.3549",
                        width: "2.66667",
                        height: "2.66667",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "9.74365",
                        y: "31.6882",
                        width: "2.66667",
                        height: "2.66667",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "20.1914",
                        y: "39.6882",
                        width: "2.66667",
                        height: "2.66666",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "9.74365",
                        y: "29.0215",
                        width: "2.66667",
                        height: "2.66667",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "20.1914",
                        y: "37.0215",
                        width: "2.66667",
                        height: "2.66667",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "9.74365",
                        y: "26.3549",
                        width: "2.66667",
                        height: "2.66667",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "17.5796",
                        y: "45.0215",
                        width: "2.66667",
                        height: "2.66667",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "7.13159",
                        y: "34.3549",
                        width: "2.66667",
                        height: "2.66667",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "17.5796",
                        y: "42.3549",
                        width: "2.66667",
                        height: "2.66667",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "7.13159",
                        y: "31.6882",
                        width: "2.66667",
                        height: "2.66667",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "14.9128",
                        y: "42.3549",
                        width: "2.66667",
                        height: "2.66667",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "22.9128",
                        y: "31.6882",
                        width: "2.66667",
                        height: "2.66667",
                        transform: "rotate(-180 22.9128 31.6882)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "17.5796",
                        y: "39.6882",
                        width: "2.66667",
                        height: "2.66666",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "7.13159",
                        y: "29.0215",
                        width: "2.66667",
                        height: "2.66667",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "14.9128",
                        y: "39.6882",
                        width: "2.66667",
                        height: "2.66666",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "22.9128",
                        y: "34.3549",
                        width: "2.66667",
                        height: "2.66667",
                        transform: "rotate(-180 22.9128 34.3549)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "12.2461",
                        y: "39.6882",
                        width: "2.66667",
                        height: "2.66666",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "25.5796",
                        y: "34.3549",
                        width: "2.66667",
                        height: "2.66667",
                        transform: "rotate(-180 25.5796 34.3549)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "17.5796",
                        y: "37.0215",
                        width: "2.66667",
                        height: "2.66667",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "7.13159",
                        y: "26.3549",
                        width: "2.66667",
                        height: "2.66667",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "14.9128",
                        y: "37.0215",
                        width: "2.66667",
                        height: "2.66667",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "22.9128",
                        y: "37.0215",
                        width: "2.66667",
                        height: "2.66667",
                        transform: "rotate(-180 22.9128 37.0215)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "12.2461",
                        y: "37.0215",
                        width: "2.66667",
                        height: "2.66667",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "25.5796",
                        y: "37.0215",
                        width: "2.66667",
                        height: "2.66667",
                        transform: "rotate(-180 25.5796 37.0215)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "9.57959",
                        y: "37.0215",
                        width: "2.66667",
                        height: "2.66667",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "28.2461",
                        y: "37.0215",
                        width: "2.66667",
                        height: "2.66667",
                        transform: "rotate(-180 28.2461 37.0215)",
                        fill: a
                    }), (0,
                        n.jsx)("rect", {
                        width: "2.66667",
                        height: "2.66667",
                        transform: "matrix(-1 0 0 1 35.9727 45.0215)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        width: "2.66667",
                        height: "2.66667",
                        transform: "matrix(-1 0 0 1 46.4207 34.3549)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        width: "2.66667",
                        height: "2.66667",
                        transform: "matrix(-1 0 0 1 35.9727 42.3549)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        width: "2.66667",
                        height: "2.66667",
                        transform: "matrix(-1 0 0 1 46.4207 31.6882)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        width: "2.66667",
                        height: "2.66666",
                        transform: "matrix(-1 0 0 1 35.9727 39.6882)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        width: "2.66667",
                        height: "2.66667",
                        transform: "matrix(-1 0 0 1 46.4207 29.0215)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        width: "2.66667",
                        height: "2.66667",
                        transform: "matrix(-1 0 0 1 35.9727 37.0215)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        width: "2.66667",
                        height: "2.66667",
                        transform: "matrix(-1 0 0 1 46.4207 26.3549)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        width: "2.66667",
                        height: "2.66667",
                        transform: "matrix(-1 0 0 1 38.5847 45.0215)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        width: "2.66666",
                        height: "2.66667",
                        transform: "matrix(-1 0 0 1 49.0327 34.3549)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        width: "2.66667",
                        height: "2.66667",
                        transform: "matrix(-1 0 0 1 38.5847 42.3549)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        width: "2.66666",
                        height: "2.66667",
                        transform: "matrix(-1 0 0 1 49.0327 31.6882)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        width: "2.66667",
                        height: "2.66666",
                        transform: "matrix(-1 0 0 1 38.5847 39.6882)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        width: "2.66666",
                        height: "2.66667",
                        transform: "matrix(-1 0 0 1 49.0327 29.0215)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        width: "2.66667",
                        height: "2.66667",
                        transform: "matrix(-1 0 0 1 38.5847 37.0215)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        width: "2.66666",
                        height: "2.66667",
                        transform: "matrix(-1 0 0 1 49.0327 26.3549)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        width: "2.66666",
                        height: "2.66667",
                        transform: "matrix(-1 0 0 1 41.1968 45.0215)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        width: "2.66667",
                        height: "2.66667",
                        transform: "matrix(-1 0 0 1 51.6445 34.3549)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        width: "2.66666",
                        height: "2.66667",
                        transform: "matrix(-1 0 0 1 41.1968 42.3549)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        width: "2.66667",
                        height: "2.66667",
                        transform: "matrix(-1 0 0 1 51.6445 31.6882)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        width: "2.66666",
                        height: "2.66666",
                        transform: "matrix(-1 0 0 1 41.1968 39.6882)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        width: "2.66667",
                        height: "2.66667",
                        transform: "matrix(-1 0 0 1 51.6445 29.0215)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        width: "2.66666",
                        height: "2.66667",
                        transform: "matrix(-1 0 0 1 41.1968 37.0215)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        width: "2.66667",
                        height: "2.66667",
                        transform: "matrix(-1 0 0 1 51.6445 26.3549)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        width: "2.66667",
                        height: "2.66667",
                        transform: "matrix(-1 0 0 1 43.8086 45.0215)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        width: "2.66667",
                        height: "2.66667",
                        transform: "matrix(-1 0 0 1 54.2566 34.3549)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        width: "2.66667",
                        height: "2.66667",
                        transform: "matrix(-1 0 0 1 43.8086 42.3549)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        width: "2.66667",
                        height: "2.66667",
                        transform: "matrix(-1 0 0 1 54.2566 31.6882)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        width: "2.66667",
                        height: "2.66666",
                        transform: "matrix(-1 0 0 1 43.8086 39.6882)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        width: "2.66667",
                        height: "2.66667",
                        transform: "matrix(-1 0 0 1 54.2566 29.0215)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        width: "2.66667",
                        height: "2.66667",
                        transform: "matrix(-1 0 0 1 43.8086 37.0215)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        width: "2.66667",
                        height: "2.66667",
                        transform: "matrix(-1 0 0 1 54.2566 26.3549)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        width: "2.66667",
                        height: "2.66667",
                        transform: "matrix(-1 0 0 1 46.4207 45.0215)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        width: "2.66666",
                        height: "2.66667",
                        transform: "matrix(-1 0 0 1 56.8687 34.3549)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        width: "2.66667",
                        height: "2.66667",
                        transform: "matrix(-1 0 0 1 46.4207 42.3549)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        width: "2.66666",
                        height: "2.66667",
                        transform: "matrix(-1 0 0 1 56.8687 31.6882)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        width: "2.66666",
                        height: "2.66667",
                        transform: "matrix(-1 0 0 1 49.0874 42.3549)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        width: "2.66667",
                        height: "2.66667",
                        transform: "matrix(1 0 0 -1 41.0874 31.6882)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        width: "2.66667",
                        height: "2.66666",
                        transform: "matrix(-1 0 0 1 46.4207 39.6882)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        width: "2.66666",
                        height: "2.66667",
                        transform: "matrix(-1 0 0 1 56.8687 29.0215)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        width: "2.66666",
                        height: "2.66666",
                        transform: "matrix(-1 0 0 1 49.0874 39.6882)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        width: "2.66667",
                        height: "2.66667",
                        transform: "matrix(1 0 0 -1 41.0874 34.3549)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        width: "2.66667",
                        height: "2.66666",
                        transform: "matrix(-1 0 0 1 51.7539 39.6882)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        width: "2.66666",
                        height: "2.66667",
                        transform: "matrix(1 0 0 -1 38.4207 34.3549)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        width: "2.66667",
                        height: "2.66667",
                        transform: "matrix(-1 0 0 1 46.4207 37.0215)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        width: "2.66666",
                        height: "2.66667",
                        transform: "matrix(-1 0 0 1 56.8687 26.3549)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        width: "2.66666",
                        height: "2.66667",
                        transform: "matrix(-1 0 0 1 49.0874 37.0215)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        width: "2.66667",
                        height: "2.66667",
                        transform: "matrix(1 0 0 -1 41.0874 37.0215)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        width: "2.66667",
                        height: "2.66667",
                        transform: "matrix(-1 0 0 1 51.7539 37.0215)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        width: "2.66666",
                        height: "2.66667",
                        transform: "matrix(1 0 0 -1 38.4207 37.0215)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        width: "2.66667",
                        height: "2.66667",
                        transform: "matrix(-1 0 0 1 54.4207 37.0215)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        width: "2.66667",
                        height: "2.66667",
                        transform: "matrix(1 0 0 -1 35.7539 37.0215)",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "30.6394",
                        y: "50.3549",
                        width: "2.66667",
                        height: "2.66667",
                        fill: a
                    }), (0, n.jsx)("rect", {
                        x: "30.6394",
                        y: "53.0215",
                        width: "2.66667",
                        height: "2.66667",
                        fill: a
                    })]
                }))
            }), (function(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    i = e.height,
                    o = void 0 === i ? 24 : i,
                    l = e.color,
                    a = void 0 === l ? v.Z.colors.INTERACTIVE_NORMAL : l,
                    c = e.colorClass,
                    s = void 0 === c ? "" : c,
                    u = Oe(e, ["width", "height", "color", "colorClass"]);
                return (0, n.jsx)("svg", ge(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            ye(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, me.Z)(u)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: r,
                    height: o,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        fillRule: "evenodd",
                        d: "M4.667 5.833c0 4.105 5.29 7.61 6.883 8.572.28.168.62.168.9 0 1.594-.963 6.883-4.467 6.883-8.572A3.833 3.833 0 0 0 15.5 2c-1.56 0-2.583.603-3.5 1.508C11.083 2.603 10.06 2 8.5 2a3.833 3.833 0 0 0-3.833 3.833ZM3.112 14.86a1 1 0 0 0-.829 1.243l.23.884a6 6 0 0 0 6.455 4.454L11 21.22V22a1 1 0 1 0 2 0v-.78l2.032.22a6 6 0 0 0 6.455-4.453l.23-.884a1 1 0 0 0-.83-1.243l-2.05-.286a6 6 0 0 0-6.097 3.07L12 19l-.74-1.357a6 6 0 0 0-6.097-3.069l-2.05.287Zm-.181-5.464a.607.607 0 0 1 1.138 0l.096.258a2 2 0 0 0 1.181 1.181l.258.096a.607.607 0 0 1 0 1.138l-.258.096a2 2 0 0 0-1.181 1.181l-.096.258a.607.607 0 0 1-1.138 0l-.096-.258a2 2 0 0 0-1.181-1.181l-.258-.096a.607.607 0 0 1 0-1.138l.258-.096a2 2 0 0 0 1.181-1.181l.096-.258Zm18.524.421a.486.486 0 0 0-.91 0l-.013.034a2 2 0 0 1-1.181 1.181l-.034.013a.486.486 0 0 0 0 .91l.034.013a2 2 0 0 1 1.181 1.181l.013.034a.486.486 0 0 0 .91 0l.013-.034a2 2 0 0 1 1.181-1.181l.034-.013a.486.486 0 0 0 0-.91l-.034-.013a2 2 0 0 1-1.181-1.181l-.013-.034Z",
                        clipRule: "evenodd",
                        className: s
                    })
                }))
            }));
            var we = r(567403),
                Ee = r(473903),
                Pe = r(661123),
                Se = r(589677),
                Ce = 864e5;

            function Ne(e, t, r) {
                return (0, c.e7)([], (function() {
                    return function(e, t, r) {
                        var n = t.maxDaysOld,
                            i = t.minDaysOld,
                            o = void 0 === i ? 0 : i,
                            l = we.Z.getGuild(e),
                            a = null == l ? void 0 : l.joinedAt;
                        if (null != r) {
                            var c = I.ZP.getMember(e, r);
                            a = null == (null == c ? void 0 : c.joinedAt) ? null : new Date(c.joinedAt)
                        }
                        if (null == a) return !1;
                        var s = Date.now() - a.getTime();
                        return (null == n || s <= Ce * n) && s >= Ce * o
                    }(e, t, r)
                }), [t, e, r])
            }
            var _e = r(386364),
                Te = r(827991),
                Ie = r(61209),
                Ae = r(715107),
                Le = r(731808),
                Me = r.n(Le);
            const De = function(e) {
                var t = e.guild,
                    r = e.message,
                    o = e.onClose,
                    l = Ie.Z.getChannel(Ae.Z.getChannelId(t.id));
                i.useEffect((function() {
                    M.default.track($.rMx.OPEN_POPOUT, {
                        type: "New Member Badge Popout",
                        guild_id: t.id,
                        channel_id: null == l ? void 0 : l.id
                    })
                }), []);
                return null == l ? null : (0, n.jsx)(_e.W_, {
                    children: (0, n.jsxs)("div", {
                        className: Me().popoutContainer,
                        children: [(0, n.jsxs)("div", {
                            className: Me().mainContent,
                            children: [(0, n.jsx)("div", {
                                className: Me().iconContainer,
                                children: (0, n.jsx)(ve, {
                                    width: 40,
                                    height: 40
                                })
                            }), (0, n.jsxs)("div", {
                                children: [(0, n.jsx)(s.Heading, {
                                    variant: "heading-md/semibold",
                                    className: Me().header,
                                    children: d.Z.Messages.NEW_MEMBER_BADGE_TOOLTIP_TEXT
                                }), (0, n.jsx)(s.Text, {
                                    variant: "text-sm/normal",
                                    children: d.Z.Messages.NEW_MEMBER_BADGE_POPOUT_TEXT
                                })]
                            })]
                        }), (0, n.jsx)(s.Button, {
                            size: s.Button.Sizes.SMALL,
                            color: s.Button.Colors.BRAND,
                            className: Me().ctaButton,
                            innerClassName: Me().ctaButtonContent,
                            fullWidth: !0,
                            onClick: function() {
                                N.ZP.trackWithMetadata($.rMx.NEW_MEMBER_MENTION_CTA_CLICKED, {
                                    target_user_id: r.author.id
                                });
                                o();
                                (0, Te.q)(r.author, l.id)
                            },
                            children: d.Z.Messages.MENTION_USER.format({
                                username: r.author.username
                            })
                        })]
                    })
                })
            };
            var Re = r(231283),
                Ze = r.n(Re);

            function ke(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function Ue(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, n)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }));
                return e
            }

            function Be(e) {
                var t, r, i, o, l, a, u = e.guild,
                    f = e.message;
                return (t = u.id, r = f.author.id, o = (0, c.e7)([I.ZP], (function() {
                    var e;
                    return (0, Pe.yE)(null !== (i = null === (e = I.ZP.getMember(t, r)) || void 0 === e ? void 0 : e.flags) && void 0 !== i ? i : 0, Se.q.DID_REJOIN)
                })), l = (0, c.e7)([we.Z], (function() {
                    var e;
                    return null === (e = we.Z.getGuild(t)) || void 0 === e ? void 0 : e.isNew()
                })), a = (0, c.e7)([Ee.default], (function() {
                    var e;
                    return null === (e = Ee.default.getUser(r)) || void 0 === e ? void 0 : e.bot
                })), Ne(t, {
                    maxDaysOld: 7
                }, r) && !l && !a && !o) ? (0, n.jsx)(s.Popout, {
                    animation: s.Popout.Animation.TRANSLATE,
                    align: "center",
                    autoInvert: !0,
                    nudgeAlignIntoViewport: !0,
                    position: "right",
                    renderPopout: function(e) {
                        var t = e.closePopout;
                        return (0, n.jsx)(De, {
                            guild: u,
                            message: f,
                            onClose: t
                        })
                    },
                    children: function(e) {
                        var t = e.onClick;
                        return (0, n.jsx)(s.Clickable, {
                            onClick: t,
                            tag: "span",
                            children: (0, n.jsx)(s.Tooltip, {
                                text: d.Z.Messages.NEW_MEMBER_BADGE_TOOLTIP_TEXT,
                                children: function(e) {
                                    return (0, n.jsx)("div", Ue(function(e) {
                                        for (var t = 1; t < arguments.length; t++) {
                                            var r = null != arguments[t] ? arguments[t] : {},
                                                n = Object.keys(r);
                                            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                                                return Object.getOwnPropertyDescriptor(r, e).enumerable
                                            }))));
                                            n.forEach((function(t) {
                                                ke(e, t, r[t])
                                            }))
                                        }
                                        return e
                                    }({
                                        className: Ze().newMemberBadge
                                    }, e), {
                                        children: (0, n.jsx)(ve, {
                                            width: 20,
                                            height: 20
                                        })
                                    }))
                                }
                            })
                        })
                    }
                }) : null
            }
            var Ge = r(834876),
                He = r(440922),
                Ve = r(591406),
                Fe = r(396580),
                qe = r(784426),
                ze = r(971611),
                We = r(217674),
                Xe = r(380652),
                Ke = r(897196),
                Ye = r(996038),
                $e = r.n(Ye);

            function Je(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function Qe(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))));
                    n.forEach((function(t) {
                        Je(e, t, r[t])
                    }))
                }
                return e
            }

            function et(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, n)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }));
                return e
            }
            const tt = function(e) {
                var t = e.roleIcon,
                    r = e.guild,
                    o = t.name;
                i.useEffect((function() {
                    M.default.track($.rMx.OPEN_POPOUT, Qe({
                        type: "Role Icon Popout",
                        guild_id: r.id
                    }, (0, N.v_)(Ie.Z.getChannel(Ae.Z.getChannelId(r.id)))))
                }), []);
                var l = null != t.roleId ? r.roles[t.roleId] : void 0,
                    a = (0, Fe.Z)(l),
                    c = a ? d.Z.Messages.ROLE_ICON_POPOUT_DESCRIPTION_ROLE_SUBSCRIPTIONS.format({
                        name: o
                    }) : d.Z.Messages.ROLE_ICON_POPOUT_DESCRIPTION.format({
                        name: o
                    }),
                    u = et(Qe({}, t), {
                        src: null == t.src ? t.src : (0, He.o)(t.src, 40),
                        size: 40
                    }),
                    f = a ? function() {
                        (0, qe.uL)($.Z5c.CHANNEL(r.id, Ke.oC.ROLE_SUBSCRIPTIONS))
                    } : function() {
                        (0, Ve.f)({
                            guildId: r.id,
                            location: {
                                section: $.jXE.ROLE_ICON_POPOUT
                            }
                        })
                    };
                return (0, n.jsx)(s.Dialog, {
                    children: (0, n.jsx)(_e.W_, {
                        children: (0, n.jsxs)("div", {
                            className: $e().popoutContainer,
                            children: [(0, n.jsxs)("div", {
                                className: $e().mainContent,
                                children: [(0, n.jsx)("div", {
                                    className: $e().roleIconContainer,
                                    children: (0, n.jsx)(Xe.Z, et(Qe({}, u), {
                                        enableTooltip: !1,
                                        className: $e().roleIcon,
                                        enableHeight: !1
                                    }))
                                }), (0, n.jsxs)("div", {
                                    className: $e().truncatingText,
                                    children: [(0, n.jsx)(s.Heading, {
                                        variant: "heading-md/semibold",
                                        className: $e().roleName,
                                        children: (0, n.jsx)(ze.Z, {
                                            children: o
                                        })
                                    }), (0, n.jsx)(s.Text, {
                                        variant: "text-sm/normal",
                                        children: c
                                    })]
                                })]
                            }), (0, n.jsxs)(s.Button, {
                                size: s.Button.Sizes.SMALL,
                                color: s.Button.Colors.PRIMARY,
                                className: $e().ctaButton,
                                innerClassName: $e().ctaButtonContent,
                                fullWidth: !0,
                                onClick: f,
                                autoFocus: !0,
                                children: [(0, n.jsx)(We.Z, {
                                    width: 14,
                                    height: 14,
                                    className: $e().boosterBadge
                                }), d.Z.Messages.ROLE_ICON_POPOUT_CTA]
                            })]
                        })
                    })
                })
            };
            var rt = r(490355);

            function nt(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function it(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, n)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }));
                return e
            }

            function ot(e, t) {
                if (null == e) return {};
                var r, n, i = function(e, t) {
                    if (null == e) return {};
                    var r, n, i = {},
                        o = Object.keys(e);
                    for (n = 0; n < o.length; n++) {
                        r = o[n];
                        t.indexOf(r) >= 0 || (i[r] = e[r])
                    }
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < o.length; n++) {
                        r = o[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r])
                    }
                }
                return i
            }

            function lt(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function at(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, n)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }));
                return e
            }

            function ct(e, t) {
                if (null == e) return {};
                var r, n, i = function(e, t) {
                    if (null == e) return {};
                    var r, n, i = {},
                        o = Object.keys(e);
                    for (n = 0; n < o.length; n++) {
                        r = o[n];
                        t.indexOf(r) >= 0 || (i[r] = e[r])
                    }
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < o.length; n++) {
                        r = o[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r])
                    }
                }
                return i
            }
            const st = (0, pe.hN)((function(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    i = e.height,
                    o = void 0 === i ? 24 : i,
                    l = e.color,
                    a = void 0 === l ? "currentColor" : l,
                    c = e.foreground,
                    s = ct(e, ["width", "height", "color", "foreground"]);
                return (0, n.jsxs)("svg", at(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            lt(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0, me.Z)(s)), {
                    width: r,
                    height: o,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    children: [(0, n.jsx)("path", {
                        className: c,
                        fill: a,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M18 10.7101C15.1085 9.84957 13 7.17102 13 4C13 3.69264 13.0198 3.3899 13.0582 3.093C12.7147 3.03189 12.3611 3 12 3C8.686 3 6 5.686 6 9V14C6 15.657 4.656 17 3 17V18H21V17C19.344 17 18 15.657 18 14V10.7101ZM8.55493 19C9.24793 20.19 10.5239 21 11.9999 21C13.4759 21 14.7519 20.19 15.4449 19H8.55493Z"
                    }), (0, n.jsx)("path", {
                        d: "M18.2624 5.50209L21 2.5V1H16.0349V2.49791H18.476L16 5.61088V7H21V5.50209H18.2624Z",
                        fill: a
                    })]
                }))
            }), (function(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    i = e.height,
                    o = void 0 === i ? 24 : i,
                    l = e.color,
                    a = void 0 === l ? v.Z.colors.INTERACTIVE_NORMAL : l,
                    c = e.colorClass,
                    s = void 0 === c ? "" : c,
                    u = ot(e, ["width", "height", "color", "colorClass"]);
                return (0, n.jsx)("svg", it(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            nt(e, t, r[t])
                        }))
                    }
                    return e
                }({}, (0,
                    me.Z)(u)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: r,
                    height: o,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        fillRule: "evenodd",
                        d: "m16.988 5.486 1.98-2.489H16.5a.5.5 0 0 1-.5-.5V1.5a.5.5 0 0 1 .5-.5h5.333a.5.5 0 0 1 .5.5v1.112a1 1 0 0 1-.26.674l-3.39 3.717H21.5a.5.5 0 0 1 .5.5V8.5a.5.5 0 0 1-.5.5h-5.333a.5.5 0 0 1-.5-.5V7.496a1.009 1.009 0 0 1 .217-.623l1.103-1.386ZM19 11.5a.5.5 0 0 0-.5-.5h-2.333a2.5 2.5 0 0 1-2.5-2.5V7.496a3 3 0 0 1 .652-1.868l.479-.601c.183-.231.124-.568-.083-.78a2.492 2.492 0 0 1-.701-1.483.944.944 0 0 0-.066-.24.744.744 0 0 1-.022-.065 2 2 0 0 0-3.852 0 .623.623 0 0 1-.38.43A7.003 7.003 0 0 0 5 9.5v2.086a.5.5 0 0 1-.128.334L3.77 13.144A3 3 0 0 0 3 15.151v.279c0 .668.336 1.29.946 1.564 1.315.593 4 1.506 8.054 1.506 4.055 0 6.74-.913 8.054-1.506.61-.274.946-.896.946-1.564v-.279a3 3 0 0 0-.77-2.007l-1.102-1.224a.5.5 0 0 1-.128-.334V11.5Zm-9.82 8.344A.16.16 0 0 0 9 20a3 3 0 1 0 6 0 .16.16 0 0 0-.18-.156c-.852.097-1.792.156-2.82.156a24.86 24.86 0 0 1-2.82-.156Z",
                        clipRule: "evenodd",
                        className: s
                    })
                }))
            }));
            var ut = r(574948),
                ft = r.n(ut);

            function dt(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function ht(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, n)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }));
                return e
            }

            function pt() {
                return (0, n.jsx)(s.Tooltip, {
                    text: d.Z.Messages.SUPPRESS_NOTIFICATIONS_TOOLTIP,
                    children: function(e) {
                        return (0, n.jsx)("div", ht(function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var r = null != arguments[t] ? arguments[t] : {},
                                    n = Object.keys(r);
                                "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                                    return Object.getOwnPropertyDescriptor(r, e).enumerable
                                }))));
                                n.forEach((function(t) {
                                    dt(e, t, r[t])
                                }))
                            }
                            return e
                        }({
                            className: ft().badge
                        }, e), {
                            children: (0, n.jsx)(st, {
                                width: "1rem",
                                height: "1rem"
                            })
                        }))
                    }
                })
            }
            var mt = r(736626),
                yt = r(169844),
                gt = r(379991),
                Ot = r(682776),
                bt = r(64875),
                jt = r(775173),
                xt = r(930948),
                vt = r(42028),
                wt = r(694278),
                Et = r(185759),
                Pt = r(927570),
                St = r.n(Pt);

            function Ct(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function Nt(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function _t(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))));
                    n.forEach((function(t) {
                        Nt(e, t, r[t])
                    }))
                }
                return e
            }

            function Tt(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, n)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }));
                return e
            }

            function It(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, i, o = [],
                            l = !0,
                            a = !1;
                        try {
                            for (r = r.call(e); !(l = (n = r.next()).done); l = !0) {
                                o.push(n.value);
                                if (t && o.length === t) break
                            }
                        } catch (e) {
                            a = !0;
                            i = e
                        } finally {
                            try {
                                l || null == r.return || r.return()
                            } finally {
                                if (a) throw i
                            }
                        }
                        return o
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return Ct(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Ct(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function At(e) {
                var t, r = e.avatarSrc,
                    i = e.avatarDecorationSrc,
                    o = e.compact,
                    a = e.onClick,
                    c = e.onContextMenu,
                    s = e.onMouseDown,
                    u = e.onMouseEnter,
                    f = e.onMouseLeave,
                    d = e.onKeyDown,
                    h = e.showCommunicationDisabledStyles,
                    p = void 0 !== h && h,
                    m = e.className;
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)("img", {
                        onClick: a,
                        onContextMenu: c,
                        onMouseDown: s,
                        onKeyDown: d,
                        onMouseEnter: u,
                        onMouseLeave: f,
                        src: r,
                        "aria-hidden": !0,
                        className: l()(m, St().avatar, (t = {}, Nt(t, St().compact, o), Nt(t, St().clickable, null != a), Nt(t, St().communicationDisabledOpacity, p), t)),
                        alt: " "
                    }), null == i || o ? null : (0, n.jsx)("img", {
                        className: St().avatarDecoration,
                        src: i,
                        alt: " ",
                        "aria-hidden": !0
                    })]
                })
            }

            function Lt(e, t, r) {
                var i = e.message,
                    o = e.channel,
                    l = e.author,
                    a = e.compact,
                    c = void 0 !== a && a,
                    s = e.onContextMenu,
                    u = e.showUsernamePopout,
                    f = e.onClickUsername,
                    d = e.onPopoutRequestClose;
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(Et.Z, {
                        message: i,
                        channel: o,
                        author: l,
                        compact: c,
                        showPopout: u,
                        renderPopout: t,
                        onClick: f,
                        onContextMenu: s,
                        onPopoutRequestClose: d,
                        decorations: r,
                        renderRemixTag: !0
                    }), c && (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)("i", {
                            className: St().separator,
                            children: ":"
                        }), " "]
                    })]
                })
            }

            function Mt(e) {
                var t, r = e.props,
                    o = e.guildId,
                    l = e.handleRenderPopout,
                    u = e.showCommunicationDisabledStyles,
                    f = void 0 !== u && u,
                    d = e.className,
                    h = r.message,
                    p = r.author,
                    m = r.compact,
                    y = void 0 !== m && m,
                    g = r.subscribeToGroupId,
                    O = r.animate,
                    b = void 0 === O || O,
                    j = r.onContextMenu,
                    x = r.onClickAvatar,
                    v = r.onPopoutRequestClose,
                    w = r.showAvatarPopout,
                    E = It(i.useState(!1), 2),
                    P = E[0],
                    S = E[1],
                    C = (0, c.e7)([gt.ZP], (function() {
                        return null !== (t = r.displayCompactAvatars) && void 0 !== t ? t : gt.ZP.displayCompactAvatars
                    })),
                    N = null != h.messageReference && null != h.webhookId,
                    _ = h.author.id,
                    T = h.author,
                    I = (0, yt.Z)({
                        user: T,
                        guildId: o,
                        size: y ? 32 : 80,
                        animateOnHover: null != g ? !P : !b
                    }),
                    A = I.avatarSrc,
                    L = I.avatarDecorationSrc,
                    M = I.eventHandlers;
                i.useEffect((function() {
                    if (null != g) {
                        xt.S.subscribeKeyed($.LPv.ANIMATE_CHAT_AVATAR, "".concat(g, ":").concat(_), S);
                        return function() {
                            xt.S.unsubscribeKeyed($.LPv.ANIMATE_CHAT_AVATAR, "".concat(g, ":").concat(_), S)
                        }
                    }
                }), [_, g]);
                if (!y || C) return null != l && null != w ? (0, n.jsx)(s.Popout, {
                    preload: N ? void 0 : function() {
                        return (0, mt.Z)(h.author.id, null != p.guildMemberAvatar && null != o ? (0, jt.JM)({
                            guildId: o,
                            userId: h.author.id,
                            avatar: p.guildMemberAvatar,
                            size: 80
                        }) : h.author.getAvatarURL(void 0, 80, !1), {
                            guildId: o,
                            channelId: h.channel_id
                        })
                    },
                    renderPopout: l,
                    shouldShow: w,
                    position: a.tq ? "window_center" : "right",
                    onRequestClose: v,
                    children: function(e) {
                        return At(Tt(_t({}, M), {
                            avatarSrc: A,
                            avatarDecorationSrc: L,
                            compact: y,
                            onClick: x,
                            onContextMenu: j,
                            onMouseDown: e.onMouseDown,
                            onKeyDown: e.onKeyDown,
                            showCommunicationDisabledStyles: f,
                            className: d
                        }))
                    }
                }) : At(Tt(_t({}, M), {
                    avatarSrc: A,
                    avatarDecorationSrc: L,
                    compact: y,
                    onClick: x,
                    onContextMenu: j,
                    onMouseDown: void 0,
                    onKeyDown: void 0,
                    showCommunicationDisabledStyles: f,
                    className: d
                }))
            }

            function Dt(e) {
                var t = e.message,
                    r = e.avatar,
                    i = e.username,
                    o = e.usernameSpanId,
                    a = e.usernameClassName,
                    c = e.compact,
                    u = e.showTimestamp,
                    f = e.showTimestampOnHover,
                    d = e.ariaLabelledBy,
                    h = e.ariaDescribedBy,
                    p = e.className,
                    m = e.messageClassname,
                    y = e.badges;
                return (0, n.jsxs)(n.Fragment, {
                    children: [!c && r, (0, n.jsxs)(s.H, {
                        className: l()(St().header, p),
                        "aria-describedby": h,
                        "aria-labelledby": d,
                        children: [u && c && (0, n.jsx)(vt.Z, {
                            id: (0, Ge.Dv)(t),
                            compact: !0,
                            timestamp: t.timestamp,
                            isVisibleOnlyOnHover: f,
                            className: m,
                            isInline: !1
                        }), c && r, (0, n.jsx)("span", {
                            id: o,
                            className: a,
                            children: i
                        }), u && !c && (0, n.jsx)(vt.Z, {
                            id: (0, Ge.Dv)(t),
                            timestamp: t.timestamp,
                            className: m
                        }), null != y && y.length > 0 ? (0, n.jsx)("div", {
                            className: St().badgesContainer,
                            children: y
                        }) : null]
                    })]
                })
            }

            function Rt(e) {
                var t, r, o, a = e.message,
                    f = e.repliedMessage,
                    h = e.compact,
                    p = void 0 !== h && h,
                    m = e.renderPopout,
                    y = e.showTimestampOnHover,
                    O = e.roleIcon,
                    b = e.subscribeToGroupId,
                    j = e.hideTimestamp,
                    x = e.className,
                    v = e.channel,
                    w = i.useMemo((function() {
                        return null != m ? function(e) {
                            return m(e, a)
                        } : void 0
                    }), [m, a]),
                    E = It((0,
                        he.ZP)(a.author.id, e.guildId), 2)[1],
                    P = (0, c.e7)([we.Z], (function() {
                        return we.Z.getGuild(e.guildId)
                    }), [e.guildId]),
                    S = (0, u.y)(null !== (t = null == P ? void 0 : P.id) && void 0 !== t ? t : "", !1),
                    C = null != a.author && null != P && Ot.Z.canManageUser($.Plq.MODERATE_MEMBERS, a.author, P),
                    N = E && C,
                    _ = Mt({
                        props: e,
                        guildId: e.guildId,
                        handleRenderPopout: w,
                        showCommunicationDisabledStyles: N
                    }),
                    T = (0, c.e7)([gt.ZP], (function() {
                        return null !== (r = e.displayCompactAvatars) && void 0 !== r ? r : gt.ZP.displayCompactAvatars
                    })),
                    I = p && !T || null == O || null == P ? p && !T || null == O ? null : (0, n.jsx)(Xe.Z, Tt(_t({}, O), {
                        className: St().roleIcon
                    }), "role-icon-children") : (0, n.jsx)(s.Popout, {
                        animation: s.Popout.Animation.TRANSLATE,
                        align: "center",
                        autoInvert: !0,
                        nudgeAlignIntoViewport: !0,
                        position: "right",
                        renderPopout: function() {
                            return (0, n.jsx)(tt, {
                                roleIcon: O,
                                guild: P
                            })
                        },
                        children: function(e) {
                            var t = e.onClick;
                            return (0, n.jsx)(Xe.Z, Tt(_t({}, O), {
                                className: St().roleIcon,
                                onClick: t
                            }))
                        }
                    }, "role-icon-children");
                o = null != P && a.author.isClyde() && S ? (0, wt.x)({
                    message: a,
                    channel: v,
                    user: null == a ? void 0 : a.author,
                    compact: p,
                    hideIcon: !0,
                    isRepliedMessage: !1,
                    children: (0, n.jsx)(g, {}, "clyde-personality")
                }) : (0, wt.x)({
                    message: a,
                    channel: v,
                    user: null == a ? void 0 : a.author,
                    compact: p,
                    isRepliedMessage: !1
                });
                var A = [];
                null != I && A.push(I);
                null != P && A.push((0, n.jsx)(Be, {
                    guild: P,
                    message: a
                }, "new-member"));
                null != v && null != P && A.push((0, n.jsx)(de, {
                    guild: P,
                    channel: v,
                    userId: a.author.id
                }, "connections"));
                var L = [];
                (0, Pe.yE)(a.flags, $.iLy.SUPPRESS_NOTIFICATIONS) && L.push((0, n.jsx)(pt, {}, "suppress-notifications"));
                var M = {};
                M[Et.a.SYSTEM_TAG] = o;
                M[Et.a.BADGES] = A;
                var D, R = Lt(e, w, M),
                    Z = (0, Ge.XX)(a, b),
                    k = (0, Ge.Dv)(a),
                    U = j ? "".concat(Z) : "".concat(Z, " ").concat(k),
                    B = (null == f ? void 0 : f.state) === rt.Y.LOADED ? (0, Ge.Gq)(a) : void 0,
                    G = !0 !== j;
                return (0, n.jsx)(Dt, {
                    message: a,
                    avatar: _,
                    username: (0, n.jsxs)(n.Fragment, {
                        children: [N && (0, n.jsx)(s.Tooltip, {
                            text: d.Z.Messages.GUILD_COMMUNICATION_DISABLED_ICON_TOOLTIP_BODY,
                            children: function(e) {
                                return (0, n.jsxs)(n.Fragment, {
                                    children: [(0, n.jsx)(bt.Z, Tt(_t({}, e), {
                                        width: 12,
                                        height: 12,
                                        className: p ? St().compactCommunicationDisabled : St().communicationDisabled
                                    })), (0, n.jsx)(s.HiddenVisually, {
                                        children: d.Z.Messages.GUILD_COMMUNICATION_DISABLED_BOTTOM_SHEET_TITLE
                                    })]
                                })
                            }
                        }), R]
                    }),
                    usernameSpanId: (0, Ge.XX)(a, b),
                    usernameClassName: l()(St().headerText, (D = {}, Nt(D, St().hasRoleIcon, null != I), Nt(D, St().hasBadges, null != o || L.length > 0), D)),
                    compact: p,
                    showTimestamp: G,
                    showTimestampOnHover: y,
                    ariaLabelledBy: U,
                    ariaDescribedBy: B,
                    className: x,
                    badges: L
                })
            }
        }
    }
]);