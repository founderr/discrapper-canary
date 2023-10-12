"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [83064], {
        742224: (e, t, r) => {
            r.d(t, {
                x: () => ne,
                Z: () => oe
            });
            var n = r(785893),
                o = r(667294),
                i = r(294184),
                l = r.n(i),
                a = r(142643),
                c = r(304548),
                u = r(503370),
                s = r(245353),
                f = r(382060),
                p = r(38004),
                d = r(563135),
                b = r(2590);
            var y = r(202351),
                h = r(901654),
                O = r(367299),
                m = r(757730),
                v = r(919031);

            function j(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function g(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))));
                    n.forEach((function(t) {
                        j(e, t, r[t])
                    }))
                }
                return e
            }

            function w(e) {
                var t = e.confettiSpawnRef,
                    r = e.shouldFire,
                    n = (0, y.e7)([h.Z], (function() {
                        return h.Z.isFocused()
                    })),
                    i = (0, v.Z)(),
                    l = (0, m.Z)(t);
                o.useEffect((function() {
                    n && r && null != l && i.fire(l.x, l.y)
                }), [i, n, l, r]);
                return null
            }

            function P(e) {
                return (0, n.jsx)(O.Z, {
                    confettiLocation: e.confettiLocation,
                    children: (0, n.jsx)(w, g({}, e))
                })
            }
            var S = r(169844),
                x = r(609853),
                I = r(107364),
                E = r(133782),
                Z = r.n(E);

            function N(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function C(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function T(e) {
                T = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return T(e)
            }

            function A(e, t) {
                return !t || "object" !== M(t) && "function" != typeof t ? function(e) {
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
            var k, _, M = function(e) {
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
                    var r, n = T(e);
                    if (t) {
                        var o = T(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return A(this, r)
                }
            }! function(e) {
                e.SINGLE_AVATAR = "1";
                e.MULTIPLE_AVATAR = "2"
            }(k || (k = {}));
            var L = (C(_ = {}, c.AvatarSizes.SIZE_32, Z().avatarSmall), C(_, c.AvatarSizes.SIZE_40, Z().avatarLarge), _),
                U = function(e) {
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
                    }(r, e);
                    var t = D(r);

                    function r() {
                        N(this, r);
                        var e;
                        (e = t.apply(this, arguments)).placeholderMaxWidth = "".concat(Math.floor(40 * Math.random()) + 40, "%");
                        return e
                    }
                    r.prototype.render = function() {
                        var e = this.props,
                            t = e.type,
                            r = e.avatarSize,
                            o = e.className;
                        return t === k.MULTIPLE_AVATAR ? (0, n.jsxs)("div", {
                            className: l()(Z().multiplePlaceholder, o),
                            children: [(0, n.jsxs)(I.Z, {
                                children: [(0, n.jsx)("div", {
                                    className: l()(Z().placeholderAvatar, L[r], Z().avatarMasked)
                                }), (0, n.jsx)("div", {
                                    className: l()(Z().placeholderAvatar, L[r], Z().avatarMasked)
                                }), (0, n.jsx)("div", {
                                    className: l()(Z().placeholderAvatar, L[r])
                                })]
                            }), (0, n.jsx)(I.Z, {
                                grow: 1,
                                className: Z().mulitplePlaceholderUsername,
                                style: {
                                    maxWidth: this.placeholderMaxWidth
                                }
                            })]
                        }) : (0, n.jsxs)(I.Z, {
                            className: l()(Z().placeholder, o),
                            children: [(0, n.jsx)("div", {
                                className: l()(Z().placeholderAvatar, L[r])
                            }), (0, n.jsx)(I.Z, {
                                grow: 1,
                                className: Z().placeholderUsername,
                                style: {
                                    maxWidth: this.placeholderMaxWidth
                                }
                            })]
                        })
                    };
                    return r
                }(o.Component);
            U.defaultProps = {
                type: k.SINGLE_AVATAR
            };
            U.Types = k;
            const G = U;
            var B = r(640645),
                F = r(217674),
                H = r(651034),
                V = r(421281),
                z = r(749565),
                W = r(106555),
                Y = r(175072),
                q = r(69540),
                K = r(473708),
                $ = r(203799),
                J = r.n($);

            function X(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function Q(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function ee(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))));
                    n.forEach((function(t) {
                        Q(e, t, r[t])
                    }))
                }
                return e
            }

            function te(e, t) {
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

            function re(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, o, i = [],
                            l = !0,
                            a = !1;
                        try {
                            for (r = r.call(e); !(l = (n = r.next()).done); l = !0) {
                                i.push(n.value);
                                if (t && i.length === t) break
                            }
                        } catch (e) {
                            a = !0;
                            o = e
                        } finally {
                            try {
                                l || null == r.return || r.return()
                            } finally {
                                if (a) throw o
                            }
                        }
                        return i
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return X(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return X(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var ne = (0, V.Mg)(a.Z.MEMBER_LIST_ITEM_AVATAR_DECORATION_PADDING);
            const oe = function(e) {
                var t, r, i, a = e.selected,
                    y = void 0 !== a && a,
                    h = e.colorString,
                    O = e.colorRoleName,
                    m = e.isOwner,
                    v = e.ownerTooltipText,
                    j = e.lostPermissionTooltipText,
                    g = e.isTyping,
                    w = void 0 !== g && g,
                    I = e.nick,
                    E = e.user,
                    Z = e.currentUser,
                    N = e.activities,
                    C = e.applicationStream,
                    T = e.status,
                    A = e.shouldAnimateStatus,
                    R = void 0 !== A && A,
                    k = e.isMobile,
                    _ = e.premiumSince,
                    M = e.channel,
                    D = e.guildId,
                    L = e.className,
                    U = e.onMouseDown,
                    V = e.onKeyDown,
                    $ = e.onClick,
                    X = e.onContextMenu,
                    ne = e.onClickPremiumGuildIcon,
                    oe = e.onFocus,
                    ie = e["aria-controls"],
                    le = e["aria-expanded"],
                    ae = e["aria-posinset"],
                    ce = e["aria-setsize"],
                    ue = e.id,
                    se = e.tabIndex,
                    fe = e.itemProps,
                    pe = z.ZP.useName(E),
                    de = re(o.useState(!1), 2),
                    be = de[0],
                    ye = de[1],
                    he = re(o.useState(null), 2),
                    Oe = he[0],
                    me = he[1],
                    ve = (0, S.Z)({
                        user: E,
                        size: c.AvatarSizes.SIZE_32,
                        animateOnHover: !(y || be),
                        guildId: D
                    }),
                    je = ve.avatarDecorationSrc,
                    ge = ve.avatarSrc,
                    we = ve.eventHandlers,
                    Pe = function(e) {
                        me(e)
                    },
                    Se = function() {
                        return (0, n.jsx)(c.NameWithRole, {
                            roleName: O,
                            color: null != h ? h : void 0,
                            name: null != I ? I : pe
                        })
                    },
                    xe = T === b.Skl.OFFLINE;
                return null == E ? (0,
                    n.jsx)(G, {
                    avatarSize: c.AvatarSizes.SIZE_32,
                    className: J().placeholder
                }) : (0, n.jsx)(H.Z, ee({
                    selected: y,
                    className: l()(J().member, L, Q({}, J().offline, xe && !y)),
                    innerClassName: J().memberInner,
                    onClick: $,
                    onKeyDown: V,
                    onMouseDown: U,
                    onContextMenu: X,
                    onMouseEnter: function() {
                        ye(!0)
                    },
                    onMouseLeave: function() {
                        ye(!1)
                    },
                    name: null == j ? (0, n.jsx)("span", {
                        className: J().username,
                        children: Se()
                    }) : (0, n.jsx)(c.Tooltip, {
                        text: j,
                        children: function(e) {
                            return (0, n.jsx)("span", te(ee({}, e), {
                                className: l()(J().username, J().lostPermission),
                                children: Se()
                            }))
                        }
                    }),
                    avatar: function(e, t) {
                        var r = R ? c.AnimatedAvatar : c.Avatar,
                            o = (0, u.Z)(N) ? b.Skl.STREAMING : T;
                        o = t ? void 0 : o;
                        return (0, n.jsxs)(n.Fragment, {
                            children: [(0, n.jsx)(r, te(ee({}, we), {
                                size: c.AvatarSizes.SIZE_32,
                                src: ge,
                                isMobile: k,
                                isTyping: w,
                                status: o,
                                "aria-label": e.username,
                                statusTooltip: !0,
                                avatarDecoration: je,
                                typingIndicatorRef: Pe
                            })), (0, n.jsx)(P, {
                                confettiSpawnRef: Oe,
                                shouldFire: w && null != Z && e.id !== Z.id,
                                confettiLocation: q.Hn.MEMBER_USER
                            })]
                        })
                    }(E, xe),
                    subText: (r = null != N ? N.find((function(e) {
                        return e.type === b.IIU.CUSTOM_STATUS
                    })) : null, i = null != r && null != E && function(e, t, r) {
                        if (e.type !== b.IIU.CUSTOM_STATUS || null == e.emoji) return !1;
                        var n = e.emoji;
                        if (null == n.id || null == r || !(0, f.zi)(r.type)) return !0;
                        var o = s.Z.getUsableCustomEmojiById(n.id),
                            i = p.ZP.isInternalEmojiForGuildId(o, r.getGuildId()),
                            l = d.ZP.can({
                                permission: b.Plq.USE_EXTERNAL_EMOJIS,
                                user: t,
                                context: r
                            });
                        return !i || l
                    }(r, E, M), (0, n.jsx)(W.Z, {
                        className: J().activity,
                        textClassName: J().activityText,
                        emojiClassName: J().activityEmoji,
                        activities: N,
                        applicationStream: C,
                        animate: be,
                        hideEmoji: !i,
                        hideTooltip: !0
                    })),
                    decorators: (0, n.jsxs)(n.Fragment, {
                        children: [(t = (null == E ? void 0 : E.isClyde()) ? Y.H.AI : Y.H.BOT, null != E && E.bot ? (0, n.jsx)(x.Z, {
                            className: J().botTag,
                            type: t,
                            verified: E.isVerifiedBot()
                        }) : null), null != m && m ? null != j ? null : (0, n.jsx)(c.Tooltip, {
                            text: null != v ? v : K.Z.Messages.GUILD_OWNER,
                            children: function(e) {
                                return (0, n.jsx)(B.Z, te(ee({}, e), {
                                    className: J().ownerIcon
                                }))
                            }
                        }) : null, null == _ ? null : (0, n.jsx)(c.Tooltip, {
                            text: K.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_TOOLTIP.format({
                                date: _
                            }),
                            children: function(e) {
                                return (0, n.jsx)(c.Clickable, {
                                    onClick: ne,
                                    tabIndex: -1,
                                    children: (0, n.jsx)(F.Z, te(ee({}, e), {
                                        className: J().premiumIcon
                                    }))
                                })
                            }
                        })]
                    }),
                    "aria-controls": ie,
                    "aria-expanded": le,
                    "aria-setsize": ce,
                    "aria-posinset": ae,
                    id: ue,
                    tabIndex: se,
                    onFocus: oe,
                    focusProps: {
                        offset: {
                            top: 4,
                            bottom: 4,
                            left: 4,
                            right: 4
                        }
                    }
                }, fe))
            }
        },
        883064: (e, t, r) => {
            r.d(t, {
                Z: () => Z
            });
            var n = r(496486),
                o = r.n(n),
                i = r(894012),
                l = r(784412),
                a = r(766281),
                c = r(844494);

            function u(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function s(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function f(e) {
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

            function p(e, t) {
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

            function d(e) {
                return function(e) {
                    if (Array.isArray(e)) return u(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return u(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return u(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var b = null;
            b = r(837054).Z;

            function y(e, t) {
                var r = {};
                null != e.mention && null != b && (r = {
                    mention: b
                });
                return (0, c.Z)([e].concat(d(t), [r]))
            }
            var h = {
                    enableBuildOverrides: !1,
                    enableEmojiClick: !0
                },
                O = y(a.Z.RULES, [(0, l.Z)({
                    enableBuildOverrides: !0
                })]),
                m = o().omit(y(a.Z.RULES, [(0, l.Z)(h)]), "paragraph", "newline"),
                v = y(a.Z.CHANNEL_TOPIC_RULES, [(0, l.Z)(p(f({}, h), {
                    emojiTooltipPosition: "bottom"
                })), {
                    codeBlock: {
                        react: a.Z.RULES.text.react
                    }
                }]),
                j = y(a.Z.VOICE_CHANNEL_STATUS_RULES, [(0, l.Z)(p(f({}, h), {
                    enableEmojiClick: !1
                }))]),
                g = y(a.Z.EMBED_TITLE_RULES, [(0, l.Z)(h)]),
                w = y(a.Z.INLINE_REPLY_RULES, [(0, l.Z)(h)]),
                P = y(a.Z.GUILD_VERIFICATION_FORM_RULES, [(0, l.Z)(h)]),
                S = y(a.Z.GUILD_EVENT_RULES, [(0, l.Z)(h)]),
                x = y(a.Z.INLINE_REPLY_RULES, [(0, l.Z)(p(f({}, h), {
                    emoji: {
                        height: 14,
                        width: 14,
                        lineHeight: 18
                    }
                }))]),
                I = y(a.Z.AUTO_MODERATION_SYSTEM_MESSAGE_RULES, [(0,
                    l.Z)(h)]),
                E = o().omit(y(a.Z.RULES, [(0, l.Z)(p(f({}, h), {
                    emoji: {
                        height: 14,
                        width: 14
                    }
                }))]), "paragraph", "newline", "strong", "codeBlock", "inlineCode", "u", "link", "url", "autolink", "list", "heading");
            const Z = {
                combineAndInjectMentionRule: y,
                createReactRules: l.Z,
                defaultReactRuleOptions: h,
                defaultRules: O,
                guildEventRules: S,
                notifCenterV2MessagePreviewRules: E,
                astParserFor: i._p,
                reactParserFor: i.w4,
                parse: i.w4(O),
                parseTopic: i.w4(v),
                parseVoiceChannelStatus: i.w4(j),
                parseEmbedTitle: i.w4(g),
                parseInlineReply: i.w4(w),
                parseGuildVerificationFormRule: i.w4(P),
                parseGuildEventDescription: i.w4(S),
                parseAutoModerationSystemMessage: i.w4(I),
                parseForumPostGuidelines: i.w4(m),
                parseForumPostMostRecentMessage: i.w4(x),
                parseNotifCenterMessagePreview: i.w4(E),
                parseToAST: i._p(O),
                parseTopicToAST: i._p(v),
                parseEmbedTitleToAST: i._p(g),
                parseInlineReplyToAST: i._p(w),
                parseAutoModerationSystemMessageToAST: i._p(I)
            }
        },
        837054: (e, t, r) => {
            r.d(t, {
                Z: () => ie
            });
            var n = r(785893),
                o = (r(667294),
                    r(971402)),
                i = r(294184),
                l = r.n(i),
                a = r(496486),
                c = r.n(a),
                u = r(547308),
                s = r(202351),
                f = r(304548),
                p = r(742224),
                d = r(316878),
                b = r(260561),
                y = r(302685),
                h = r(736626),
                O = r(203963),
                m = r(61209),
                v = r(21372),
                j = r(567403),
                g = r(473903),
                w = r(107364),
                P = r(966935),
                S = r(202237),
                x = r(473708),
                I = r(662344),
                E = r.n(I),
                Z = r(169595),
                N = r.n(Z);

            function C(e, t, r, n, o, i, l) {
                try {
                    var a = e[i](l),
                        c = a.value
                } catch (e) {
                    r(e);
                    return
                }
                a.done ? t(c) : Promise.resolve(c).then(n, o)
            }

            function T(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(n, o) {
                        var i = e.apply(t, r);

                        function l(e) {
                            C(i, n, o, l, a, "next", e)
                        }

                        function a(e) {
                            C(i, n, o, l, a, "throw", e)
                        }
                        l(void 0)
                    }))
                }
            }

            function A(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function R(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))));
                    n.forEach((function(t) {
                        A(e, t, r[t])
                    }))
                }
                return e
            }

            function k(e, t) {
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
            var _ = function(e, t) {
                    var r, n, o, i, l = {
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
                                if (r) throw new TypeError("Generator is already executing.");
                                for (; l;) try {
                                    if (r = 1, n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n),
                                            0) : n.next) && !(o = o.call(n, i[1])).done) return o;
                                    (n = 0, o) && (i = [2 & i[0], o.value]);
                                    switch (i[0]) {
                                        case 0:
                                        case 1:
                                            o = i;
                                            break;
                                        case 4:
                                            l.label++;
                                            return {
                                                value: i[1], done: !1
                                            };
                                        case 5:
                                            l.label++;
                                            n = i[1];
                                            i = [0];
                                            continue;
                                        case 7:
                                            i = l.ops.pop();
                                            l.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = l.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                l = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                l.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && l.label < o[1]) {
                                                l.label = o[1];
                                                o = i;
                                                break
                                            }
                                            if (o && l.label < o[2]) {
                                                l.label = o[2];
                                                l.ops.push(i);
                                                break
                                            }
                                            o[2] && l.ops.pop();
                                            l.trys.pop();
                                            continue
                                    }
                                    i = t.call(e, l)
                                } catch (e) {
                                    i = [6, e];
                                    n = 0
                                } finally {
                                    r = o = 0
                                }
                                if (5 & i[0]) throw i[1];
                                return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0
                                }
                            }([i, a])
                        }
                    }
                },
                M = (0, b.B)({
                    kind: "user",
                    id: "2021-07_role_popout",
                    label: "Role Popout",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Enable Popout",
                        config: {
                            enabled: !0
                        }
                    }]
                });

            function D(e) {
                var t = e.roleColor,
                    i = e.roleId,
                    a = e.channelId,
                    b = e.roleName,
                    I = e.guildId,
                    Z = e.children,
                    C = e.inlinePreview,
                    A = void 0 !== C && C,
                    D = (0, s.e7)([d.Z], (function() {
                        return d.Z.roleStyle
                    })),
                    L = null != t && 0 !== t && !A,
                    U = L && "dot" === D,
                    G = function(e) {
                        return (0, n.jsxs)(P.Z, k(R({
                            className: l()(N().roleMention),
                            color: "username" === D && L ? t : null
                        }, e), {
                            children: [U && (0, n.jsx)(f.RoleDot, {
                                color: (0, u.Rf)(t),
                                className: E().roleDot,
                                background: !1,
                                tooltip: !1
                            }), Z]
                        }))
                    };
                return !M.getCurrentConfig({
                    location: "2ec235_1"
                }, {
                    autoTrackExposure: !1
                }).enabled || A || null == a || null == I || null == i && "@everyone" !== b ? G() : (0, n.jsx)(f.Popout, {
                    preload: T((function() {
                        return _(this, (function(e) {
                            switch (e.label) {
                                case 0:
                                    return null == i ? [3, 2] : [4, (0, y.H)(I, i)];
                                case 1:
                                    e.sent();
                                    e.label = 2;
                                case 2:
                                    return [2]
                            }
                        }))
                    })),
                    renderPopout: function(e) {
                        var t = m.Z.getChannel(a),
                            l = j.Z.getGuild(I),
                            u = v.ZP.getMembers(l.id),
                            s = null == i ? l.roles[l.id] : l.roles[i],
                            d = c()(u).filter((function(e) {
                                if ("@everyone" === b || e.roles.includes(i)) {
                                    return null != g.default.getUser(e.userId)
                                }
                                return !1
                            })).sortBy((function(e) {
                                var t, r = g.default.getUser(e.userId);
                                return (null != r ? null !== (t = e.nick) && void 0 !== t ? t : r.username : "").toLocaleLowerCase()
                            })).map((function(e) {
                                var i = g.default.getUser(e.userId);
                                return (0, n.jsx)(f.Popout, {
                                    preload: function() {
                                        return (0, h.Z)(i.id, i.getAvatarURL(t.guild_id, 80), {
                                            guildId: t.guild_id,
                                            channelId: t.id
                                        })
                                    },
                                    renderPopout: function(r) {
                                        return (0, n.jsx)(O.Z, k(R({}, r), {
                                            userId: e.userId,
                                            guildId: l.id,
                                            channelId: t.id
                                        }))
                                    },
                                    spacing: 14,
                                    children: function(a, c) {
                                        var u = c.isShown;
                                        return (0, n.jsx)(p.Z, R({
                                            selected: u,
                                            colorString: e.colorString,
                                            colorRoleName: s.name,
                                            user: i,
                                            isOwner: e.userId === l.ownerId,
                                            nick: e.nick,
                                            premiumSince: null == e.premiumSince ? null : new Date(e.premiumSince),
                                            channel: t,
                                            guildId: l.id,
                                            onContextMenu: function(e) {
                                                (0, o.jW)(e, T((function() {
                                                    var e, o;
                                                    return _(this, (function(a) {
                                                        switch (a.label) {
                                                            case 0:
                                                                return [4, Promise.all([r.e(40532), r.e(71575), r.e(49244), r.e(98847), r.e(52171), r.e(7427), r.e(77357), r.e(14136), r.e(56645), r.e(38440)]).then(r.bind(r, 914136))];
                                                            case 1:
                                                                e = a.sent(), o = e.default;
                                                                return [2, function(e) {
                                                                    return (0, n.jsx)(o, k(R({}, e), {
                                                                        user: i,
                                                                        guildId: l.id,
                                                                        channel: t,
                                                                        showMediaItems: !0
                                                                    }))
                                                                }]
                                                        }
                                                    }))
                                                })))
                                            }
                                        }, a), e.userId)
                                    }
                                }, i.id)
                            })).value();
                        return (0,
                            n.jsx)(w.Z, k(R({
                            className: N().rolePopout
                        }, e), {
                            children: (0, n.jsxs)(f.Scroller, {
                                className: N().roleScroller,
                                children: [(0, n.jsx)(S.Z, {
                                    className: N().roleHeader,
                                    "aria-label": x.Z.Messages.CHANNEL_MEMBERS_A11Y_LABEL.format({
                                        title: s.name,
                                        count: d.length
                                    }),
                                    children: (0, n.jsxs)("span", {
                                        "aria-hidden": !0,
                                        children: [s.name, " — ", d.length]
                                    })
                                }), d]
                            })
                        }))
                    },
                    position: "right",
                    children: G
                })
            }
            var L = r(441143),
                U = r.n(L),
                G = r(289283),
                B = r(23925),
                F = r(840922),
                H = r(773148),
                V = r(749565),
                z = r(876986);

            function W(e, t, r, n, o, i, l) {
                try {
                    var a = e[i](l),
                        c = a.value
                } catch (e) {
                    r(e);
                    return
                }
                a.done ? t(c) : Promise.resolve(c).then(n, o)
            }

            function Y(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(n, o) {
                        var i = e.apply(t, r);

                        function l(e) {
                            W(i, n, o, l, a, "next", e)
                        }

                        function a(e) {
                            W(i, n, o, l, a, "throw", e)
                        }
                        l(void 0)
                    }))
                }
            }

            function q(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function K(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))));
                    n.forEach((function(t) {
                        q(e, t, r[t])
                    }))
                }
                return e
            }

            function $(e, t) {
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
            var J = function(e, t) {
                var r, n, o, i, l = {
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
                            if (r) throw new TypeError("Generator is already executing.");
                            for (; l;) try {
                                if (r = 1, n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, i[1])).done) return o;
                                (n = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        l.label++;
                                        return {
                                            value: i[1], done: !1
                                        };
                                    case 5:
                                        l.label++;
                                        n = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = l.ops.pop();
                                        l.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = l.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            l = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            l.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && l.label < o[1]) {
                                            l.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && l.label < o[2]) {
                                            l.label = o[2];
                                            l.ops.push(i);
                                            break
                                        }
                                        o[2] && l.ops.pop();
                                        l.trys.pop();
                                        continue
                                }
                                i = t.call(e, l)
                            } catch (e) {
                                i = [6, e];
                                n = 0
                            } finally {
                                r = o = 0
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

            function X(e) {
                var t = e.className,
                    i = e.userId,
                    l = e.channelId,
                    a = e.inlinePreview,
                    c = void 0 !== a && a,
                    u = (0, s.e7)([g.default], (function() {
                        return g.default.getUser(i)
                    })),
                    p = (0, s.e7)([m.Z], (function() {
                        return m.Z.getChannel(l)
                    })),
                    d = null != p ? p.getGuildId() : null,
                    b = c || null == u || null == d || null == l ? void 0 : function(e) {
                        null != p && (0, o.jW)(e, Y((function() {
                            var e, t;
                            return J(this, (function(o) {
                                switch (o.label) {
                                    case 0:
                                        return [4, Promise.all([r.e(40532), r.e(71575), r.e(49244), r.e(98847), r.e(52171), r.e(7427), r.e(77357), r.e(14136), r.e(56645), r.e(38440)]).then(r.bind(r, 914136))];
                                    case 1:
                                        e = o.sent(), t = e.default;
                                        return [2, function(e) {
                                            return (0, n.jsx)(t, $(K({}, e), {
                                                user: u,
                                                channel: p,
                                                guildId: d
                                            }))
                                        }]
                                }
                            }))
                        })))
                    },
                    y = V.ZP.useName(u),
                    w = (0, s.e7)([m.Z, v.ZP, F.Z], (function() {
                        return H.ZP.getNickname(d, l, u)
                    })),
                    S = j.Z.getGuild(d),
                    x = (0, B.Ib)(S, p) && i === z.fL ? z.jM : null,
                    I = function(e) {
                        return (0, n.jsx)(P.Z, $(K({
                            className: t,
                            onContextMenu: b,
                            color: x
                        }, e), {
                            children: "@".concat(null != w ? w : y)
                        }))
                    };
                return c ? I() : (0, n.jsx)(f.Popout, {
                    preload: null == u ? void 0 : function() {
                        return (0, h.Z)(u.id, u.getAvatarURL(d, 80), {
                            guildId: null != d ? d : void 0,
                            channelId: null != l ? l : void 0
                        })
                    },
                    renderPopout: function(e) {
                        U()(null != u, "Unexpected missing user");
                        return (0, n.jsx)(O.Z, K({
                            userId: u.id,
                            guildId: null != d ? d : void 0,
                            channelId: l
                        }, e))
                    },
                    position: G.tq ? "top" : "right",
                    children: function(e) {
                        return I(e)
                    }
                })
            }

            function Q(e, t, r, n, o, i, l) {
                try {
                    var a = e[i](l),
                        c = a.value
                } catch (e) {
                    r(e);
                    return
                }
                a.done ? t(c) : Promise.resolve(c).then(n, o)
            }

            function ee(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(n, o) {
                        var i = e.apply(t, r);

                        function l(e) {
                            Q(i, n, o, l, a, "next", e)
                        }

                        function a(e) {
                            Q(i, n, o, l, a, "throw", e)
                        }
                        l(void 0)
                    }))
                }
            }

            function te(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function re(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))));
                    n.forEach((function(t) {
                        te(e, t, r[t])
                    }))
                }
                return e
            }

            function ne(e, t) {
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
            var oe = function(e, t) {
                var r, n, o, i, l = {
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
                            if (r) throw new TypeError("Generator is already executing.");
                            for (; l;) try {
                                if (r = 1, n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, i[1])).done) return o;
                                (n = 0, o) && (i = [2 & i[0], o.value]);
                                switch (i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        l.label++;
                                        return {
                                            value: i[1],
                                                done: !1
                                        };
                                    case 5:
                                        l.label++;
                                        n = i[1];
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = l.ops.pop();
                                        l.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = l.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            l = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            l.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && l.label < o[1]) {
                                            l.label = o[1];
                                            o = i;
                                            break
                                        }
                                        if (o && l.label < o[2]) {
                                            l.label = o[2];
                                            l.ops.push(i);
                                            break
                                        }
                                        o[2] && l.ops.pop();
                                        l.trys.pop();
                                        continue
                                }
                                i = t.call(e, l)
                            } catch (e) {
                                i = [6, e];
                                n = 0
                            } finally {
                                r = o = 0
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
            const ie = {
                handleUserContextMenu: function(e, t, i, l) {
                    var a = m.Z.getChannel(t);
                    null != a && (0, o.jW)(l, ee((function() {
                        var t, o;
                        return oe(this, (function(l) {
                            switch (l.label) {
                                case 0:
                                    return [4, Promise.all([r.e(40532), r.e(71575), r.e(49244), r.e(98847), r.e(52171), r.e(7427), r.e(77357), r.e(14136), r.e(56645), r.e(38440)]).then(r.bind(r, 914136))];
                                case 1:
                                    t = l.sent(), o = t.default;
                                    return [2, function(t) {
                                        return (0, n.jsx)(o, ne(re({}, t), {
                                            user: e,
                                            channel: a,
                                            guildId: i
                                        }))
                                    }]
                            }
                        }))
                    })))
                },
                react: function(e, t, r) {
                    var o = e.userId,
                        i = e.channelId;
                    return null == o ? (0, n.jsx)(D, ne(re({
                        inlinePreview: r.formatInline
                    }, e), {
                        children: t(e.content, r)
                    }), r.key) : (0, n.jsx)(X, {
                        className: "mention",
                        userId: o,
                        channelId: i,
                        inlinePreview: r.noStyleAndInteraction
                    }, r.key)
                }
            }
        },
        757730: (e, t, r) => {
            r.d(t, {
                Z: () => o
            });
            var n = r(667294);

            function o(e) {
                var t = null == e ? void 0 : e.getBoundingClientRect(),
                    r = null == t ? void 0 : t.left,
                    o = null == t ? void 0 : t.top;
                return (0, n.useMemo)((function() {
                    return null != r && null != o ? {
                        x: r,
                        y: o
                    } : null
                }), [r, o])
            }
        },
        640645: (e, t, r) => {
            r.d(t, {
                Z: () => d
            });
            var n = r(785893),
                o = (r(667294), r(168075)),
                i = r(795308),
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

            function u(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
            }

            function s(e, t, r) {
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

            function p(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
            }
            const d = (0, o.hN)((function(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    o = e.height,
                    i = void 0 === o ? 24 : o,
                    a = e.color,
                    c = void 0 === a ? "currentColor" : a,
                    u = p(e, ["width", "height", "color"]);
                return (0, n.jsx)("svg", f(function(e) {
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
                }({}, (0, l.Z)(u)), {
                    width: r,
                    height: i,
                    viewBox: "0 0 16 16",
                    children: (0, n.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M13.6572 5.42868C13.8879 5.29002 14.1806 5.30402 14.3973 5.46468C14.6133 5.62602 14.7119 5.90068 14.6473 6.16202L13.3139 11.4954C13.2393 11.7927 12.9726 12.0007 12.6666 12.0007H3.33325C3.02725 12.0007 2.76058 11.792 2.68592 11.4954L1.35258 6.16202C1.28792 5.90068 1.38658 5.62602 1.60258 5.46468C1.81992 5.30468 2.11192 5.29068 2.34325 5.42868L5.13192 7.10202L7.44592 3.63068C7.46173 3.60697 7.48377 3.5913 7.50588 3.57559C7.5192 3.56612 7.53255 3.55663 7.54458 3.54535L6.90258 2.90268C6.77325 2.77335 6.77325 2.56068 6.90258 2.43135L7.76458 1.56935C7.89392 1.44002 8.10658 1.44002 8.23592 1.56935L9.09792 2.43135C9.22725 2.56068 9.22725 2.77335 9.09792 2.90268L8.45592 3.54535C8.46794 3.55686 8.48154 3.56651 8.49516 3.57618C8.51703 3.5917 8.53897 3.60727 8.55458 3.63068L10.8686 7.10202L13.6572 5.42868ZM2.66667 12.6673H13.3333V14.0007H2.66667V12.6673Z",
                        fill: c,
                        "aria-hidden": !0
                    })
                }))
            }), (function(e) {
                var t = e.width,
                    r = void 0 === t ? 24 : t,
                    o = e.height,
                    s = void 0 === o ? 24 : o,
                    f = e.color,
                    p = void 0 === f ? i.Z.colors.INTERACTIVE_NORMAL : f,
                    d = e.colorClass,
                    b = void 0 === d ? "" : d,
                    y = u(e, ["width", "height", "color", "colorClass"]);
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
                }({}, (0, l.Z)(y)), {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: r,
                    height: s,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof p ? p : p.css,
                        fillRule: "evenodd",
                        d: "M5 18a1 1 0 0 0-1 1 3 3 0 0 0 3 3h10a3 3 0 0 0 3-3 1 1 0 0 0-1-1H5ZM3.035 7.764C2.24 7.21 1.2 8 1.52 8.914l2.246 6.416a1 1 0 0 0 .943.67h14.547a1 1 0 0 0 .958-.713l1.934-6.447c.275-.917-.772-1.66-1.546-1.096l-4.112 2.99-3.553-5.328.82-.82a.828.828 0 0 0 0-1.172l-1.171-1.171a.828.828 0 0 0-1.172 0l-1.171 1.171a.828.828 0 0 0 0 1.172l.82.82-3.617 5.426-4.41-3.068Z",
                        clipRule: "evenodd",
                        className: b
                    })
                }))
            }))
        },
        651034: (e, t, r) => {
            r.d(t, {
                Z: () => y
            });
            var n = r(785893),
                o = r(667294),
                i = r(294184),
                l = r.n(i),
                a = r(473727),
                c = r(304548),
                u = r(635809),
                s = r.n(u);

            function f(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function p(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))));
                    n.forEach((function(t) {
                        f(e, t, r[t])
                    }))
                }
                return e
            }

            function d(e, t) {
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

            function b(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
            }
            const y = o.forwardRef((function(e, t) {
                var r, o, i, u = e.avatar,
                    y = e.name,
                    h = e.children,
                    O = e.subText,
                    m = e.decorators,
                    v = e.onClick,
                    j = e.selected,
                    g = e.muted,
                    w = e.to,
                    P = e.avatarClassName,
                    S = e.selectedClassName,
                    x = e.innerClassName,
                    I = e.wrapContent,
                    E = e.highlighted,
                    Z = e.focusProps,
                    N = b(e, ["avatar", "name", "children", "subText", "decorators", "onClick", "selected", "muted", "to", "avatarClassName", "selectedClassName", "innerClassName", "wrapContent", "highlighted", "focusProps"]);
                N.className = l()(N.className, s().container, (f(r = {}, s().selected, j), f(r, s().highlighted, E), f(r, null != S ? S : "", j), f(r, s().clickable, !j && (null != w || null != v)), r));
                N["aria-selected"] = null !== (o = N["aria-selected"]) && void 0 !== o ? o : j;
                var C = (0, n.jsxs)("div", {
                    className: l()(x, s().layout, (i = {}, f(i, s().muted, !j && g), f(i, s().wrappedLayout, I), i)),
                    children: [(0, n.jsx)("div", {
                        className: l()(s().avatar, P),
                        children: u
                    }), (0, n.jsxs)("div", {
                        className: s().content,
                        children: [(0, n.jsxs)("div", {
                            className: s().nameAndDecorators,
                            children: [(0, n.jsx)("div", {
                                className: l()(s().name, f({}, s().wrappedName, I)),
                                children: y
                            }), m]
                        }), null != O ? (0, n.jsx)("div", {
                            className: s().subText,
                            children: O
                        }) : null]
                    }), null != h ? (0, n.jsx)("div", {
                        className: s().children,
                        children: h
                    }) : null]
                });
                return null != w ? (0, n.jsx)(c.FocusRing, d(p({}, Z), {
                    children: (0, n.jsx)(a.rU, d(p({
                        to: w,
                        onClick: v
                    }, N), {
                        role: "listitem",
                        ref: t,
                        children: C
                    }))
                })) : null != v ? (0, n.jsx)(c.Clickable, d(p({
                    onClick: v,
                    focusProps: Z
                }, N), {
                    role: "listitem",
                    innerRef: t,
                    children: C
                })) : (0, n.jsx)(c.FocusRing, d(p({}, Z), {
                    children: (0, n.jsx)("div", d(p({}, N), {
                        role: "listitem",
                        ref: t,
                        children: C
                    }))
                }))
            }))
        },
        202237: (e, t, r) => {
            r.d(t, {
                Z: () => u
            });
            var n = r(785893),
                o = (r(667294), r(294184)),
                i = r.n(o),
                l = r(304548),
                a = r(990154),
                c = r.n(a);
            const u = function(e) {
                var t = e.className,
                    r = e.children,
                    o = e["aria-label"],
                    a = e.id;
                return (0, n.jsx)(l.H, {
                    className: i()(t, c().container),
                    "aria-label": o,
                    id: a,
                    children: r
                })
            }
        }
    }
]);