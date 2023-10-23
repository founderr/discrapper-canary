"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [75442], {
        87127: (B, e, t) => {
            t.d(e, {
                S1: () => c,
                ZP: () => m,
                pW: () => d,
                wk: () => f,
                xv: () => D,
                zc: () => s,
                zz: () => p
            });
            var n = t(281110),
                r = t(744564),
                o = t(10390),
                i = t(457581),
                l = t(61209),
                E = t(735885),
                C = t(2590);

            function F(B, e, t, n, r, o, i) {
                try {
                    var l = B[o](i),
                        E = l.value
                } catch (B) {
                    t(B);
                    return
                }
                l.done ? e(E) : Promise.resolve(E).then(n, r)
            }

            function u(B) {
                return function() {
                    var e = this,
                        t = arguments;
                    return new Promise((function(n, r) {
                        var o = B.apply(e, t);

                        function i(B) {
                            F(o, n, r, i, l, "next", B)
                        }

                        function l(B) {
                            F(o, n, r, i, l, "throw", B)
                        }
                        i(void 0)
                    }))
                }
            }
            var a = function(B, e) {
                var t, n, r, o, i = {
                    label: 0,
                    sent: function() {
                        if (1 & r[0]) throw r[1];
                        return r[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: l(0),
                    throw: l(1),
                    return: l(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function l(o) {
                    return function(l) {
                        return function(o) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; i;) try {
                                if (t = 1, n && (r = 2 & o[0] ? n.return : o[0] ? n.throw || ((r = n.return) && r.call(n),
                                        0) : n.next) && !(r = r.call(n, o[1])).done) return r;
                                (n = 0, r) && (o = [2 & o[0], r.value]);
                                switch (o[0]) {
                                    case 0:
                                    case 1:
                                        r = o;
                                        break;
                                    case 4:
                                        i.label++;
                                        return {
                                            value: o[1], done: !1
                                        };
                                    case 5:
                                        i.label++;
                                        n = o[1];
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = i.ops.pop();
                                        i.trys.pop();
                                        continue;
                                    default:
                                        if (!(r = i.trys, r = r.length > 0 && r[r.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            i = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                            i.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && i.label < r[1]) {
                                            i.label = r[1];
                                            r = o;
                                            break
                                        }
                                        if (r && i.label < r[2]) {
                                            i.label = r[2];
                                            i.ops.push(o);
                                            break
                                        }
                                        r[2] && i.ops.pop();
                                        i.trys.pop();
                                        continue
                                }
                                o = e.call(B, i)
                            } catch (B) {
                                o = [6, B];
                                n = 0
                            } finally {
                                t = r = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, l])
                    }
                }
            };

            function c(B, e, t) {
                r.Z.dispatch({
                    type: "CHANNEL_SETTINGS_INIT",
                    channelId: B,
                    location: e,
                    subsection: t
                })
            }

            function D() {
                r.Z.dispatch({
                    type: "CHANNEL_SETTINGS_CLOSE"
                })
            }

            function s(B) {
                r.Z.dispatch({
                    type: "CHANNEL_SETTINGS_SET_SECTION",
                    section: B
                })
            }

            function d(B) {
                var e = B.name,
                    t = B.type,
                    n = B.topic,
                    o = B.bitrate,
                    i = B.userLimit,
                    l = B.nsfw,
                    E = B.flags,
                    C = B.rateLimitPerUser,
                    F = B.defaultThreadRateLimitPerUser,
                    u = B.defaultAutoArchiveDuration,
                    a = B.template,
                    c = B.defaultReactionEmoji,
                    D = B.rtcRegion,
                    s = B.videoQualityMode,
                    d = B.autoArchiveDuration,
                    f = B.locked,
                    A = B.invitable,
                    p = B.availableTags,
                    m = B.defaultSortOrder,
                    v = B.defaultForumLayout,
                    h = B.iconEmoji,
                    y = B.themeColor;
                r.Z.dispatch({
                    type: "CHANNEL_SETTINGS_UPDATE",
                    name: e,
                    channelType: t,
                    topic: n,
                    bitrate: o,
                    userLimit: i,
                    nsfw: l,
                    flags: E,
                    rateLimitPerUser: C,
                    defaultThreadRateLimitPerUser: F,
                    defaultAutoArchiveDuration: u,
                    template: a,
                    defaultReactionEmoji: c,
                    rtcRegion: D,
                    videoQualityMode: s,
                    autoArchiveDuration: d,
                    locked: f,
                    invitable: A,
                    availableTags: p,
                    defaultSortOrder: m,
                    defaultForumLayout: v,
                    iconEmoji: h,
                    themeColor: y
                })
            }

            function f(B, e) {
                return A.apply(this, arguments)
            }

            function A() {
                return (A = u((function(B, e) {
                    var t, E, F, u, c, D, s, d, f, A, p, m, v, h, y, b, j, g, O, T, N, _, w, S, P;
                    return a(this, (function(a) {
                        switch (a.label) {
                            case 0:
                                t = e.name, E = e.type, F = e.position, u = e.topic,
                                    c = e.bitrate, D = e.userLimit, s = e.nsfw, d = e.flags, f = e.permissionOverwrites, A = e.rateLimitPerUser, p = e.defaultThreadRateLimitPerUser, m = e.defaultAutoArchiveDuration, v = e.template, h = e.defaultReactionEmoji, y = e.rtcRegion, b = e.videoQualityMode, j = e.autoArchiveDuration, g = e.locked, O = e.invitable, T = e.availableTags, N = e.defaultSortOrder, _ = e.defaultForumLayout, w = e.iconEmoji, S = e.themeColor;
                                P = l.Z.getChannel(B);
                                r.Z.dispatch({
                                    type: "CHANNEL_SETTINGS_SUBMIT"
                                });
                                return [4, i.Z.unarchiveThreadIfNecessary(B)];
                            case 1:
                                a.sent();
                                return [2, n.ZP.patch({
                                    url: C.ANM.CHANNEL(B),
                                    body: {
                                        name: t,
                                        type: E,
                                        position: F,
                                        topic: u,
                                        bitrate: c,
                                        user_limit: D,
                                        nsfw: s,
                                        flags: d,
                                        permission_overwrites: f,
                                        rate_limit_per_user: A,
                                        default_thread_rate_limit_per_user: p,
                                        default_auto_archive_duration: m,
                                        template: v,
                                        rtc_region: y,
                                        video_quality_mode: b,
                                        auto_archive_duration: j,
                                        locked: g,
                                        invitable: O,
                                        default_reaction_emoji: null != h ? {
                                            emoji_id: null == h ? void 0 : h.emojiId,
                                            emoji_name: null == h ? void 0 : h.emojiName
                                        } : null === h ? null : void 0,
                                        available_tags: null == T ? void 0 : T.map((function(B) {
                                            return {
                                                id: B.id,
                                                name: B.name,
                                                emoji_id: B.emojiId,
                                                emoji_name: B.emojiName,
                                                moderated: B.moderated
                                            }
                                        })),
                                        default_sort_order: N,
                                        default_forum_layout: _,
                                        icon_emoji: null != w ? {
                                            id: w.id,
                                            name: w.name
                                        } : null === w ? null : void 0,
                                        theme_color: S
                                    },
                                    oldFormErrors: !0
                                }).then((function(e) {
                                    r.Z.dispatch({
                                        type: "CHANNEL_SETTINGS_SUBMIT_SUCCESS",
                                        channelId: B
                                    });
                                    var t = null == P ? void 0 : P.getGuildId();
                                    null == t || (null == P ? void 0 : P.isThread()) || o.Z.checkGuildTemplateDirty(t);
                                    return e
                                }), (function(B) {
                                    r.Z.dispatch({
                                        type: "CHANNEL_SETTINGS_SUBMIT_FAILURE",
                                        errors: B.body
                                    });
                                    return B
                                }))]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function p(B) {
                var e = l.Z.getChannel(B);
                n.ZP.delete({
                    url: C.ANM.CHANNEL(B),
                    oldFormErrors: !0
                }).then((function() {
                    var B = null == e ? void 0 : e.getGuildId();
                    null == B || (null == e ? void 0 : e.isThread()) || o.Z.checkGuildTemplateDirty(B);
                    D()
                }))
            }
            const m = {
                init: c,
                open: function(B, e, t) {
                    c(B, e, t);
                    (0, E.jN)(C.S9g.CHANNEL_SETTINGS)
                },
                close: D,
                setSection: s,
                selectPermissionOverwrite: function(B) {
                    r.Z.dispatch({
                        type: "CHANNEL_SETTINGS_OVERWRITE_SELECT",
                        overwriteId: B
                    })
                },
                updateChannel: d,
                saveChannel: f,
                deleteChannel: p,
                updateVoiceChannelStatus: function(B, e) {
                    return n.ZP.put({
                        url: C.ANM.UPDATE_VOICE_CHANNEL_STATUS(B),
                        body: {
                            status: e
                        }
                    })
                }
            }
        },
        630203: (B, e, t) => {
            t.d(e, {
                Z: () => M,
                _: () => R
            });
            var n = t(785893),
                r = t(667294),
                o = t(294184),
                i = t.n(o),
                l = t(457217),
                E = t(202351),
                C = t(70418),
                F = t(77413),
                u = t(218190),
                a = t(621647),
                c = t(773011),
                D = t(344832),
                s = t(201521),
                d = t(96233),
                f = t(491260),
                A = t(788169),
                p = t(473903),
                m = t(319086),
                v = t(971611),
                h = t(310126),
                y = t(2590),
                b = t(887630),
                j = t.n(b);

            function g(B, e) {
                (null == e || e > B.length) && (e = B.length);
                for (var t = 0, n = new Array(e); t < e; t++) n[t] = B[t];
                return n
            }

            function O(B, e, t) {
                e in B ? Object.defineProperty(B, e, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : B[e] = t;
                return B
            }

            function T(B) {
                for (var e = 1; e < arguments.length; e++) {
                    var t = null != arguments[e] ? arguments[e] : {},
                        n = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter((function(B) {
                        return Object.getOwnPropertyDescriptor(t, B).enumerable
                    }))));
                    n.forEach((function(e) {
                        O(B, e, t[e])
                    }))
                }
                return B
            }

            function N(B, e) {
                e = null != e ? e : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(B, Object.getOwnPropertyDescriptors(e)) : function(B, e) {
                    var t = Object.keys(B);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(B);
                        e && (n = n.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(B, e).enumerable
                        })));
                        t.push.apply(t, n)
                    }
                    return t
                }(Object(e)).forEach((function(t) {
                    Object.defineProperty(B, t, Object.getOwnPropertyDescriptor(e, t))
                }));
                return B
            }

            function _(B, e) {
                if (null == B) return {};
                var t, n, r = function(B, e) {
                    if (null == B) return {};
                    var t, n, r = {},
                        o = Object.keys(B);
                    for (n = 0; n < o.length; n++) {
                        t = o[n];
                        e.indexOf(t) >= 0 || (r[t] = B[t])
                    }
                    return r
                }(B, e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(B);
                    for (n = 0; n < o.length; n++) {
                        t = o[n];
                        e.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(B, t) && (r[t] = B[t])
                    }
                }
                return r
            }

            function w(B, e) {
                return function(B) {
                    if (Array.isArray(B)) return B
                }(B) || function(B, e) {
                    var t = null == B ? null : "undefined" != typeof Symbol && B[Symbol.iterator] || B["@@iterator"];
                    if (null != t) {
                        var n, r, o = [],
                            i = !0,
                            l = !1;
                        try {
                            for (t = t.call(B); !(i = (n = t.next()).done); i = !0) {
                                o.push(n.value);
                                if (e && o.length === e) break
                            }
                        } catch (B) {
                            l = !0;
                            r = B
                        } finally {
                            try {
                                i || null == t.return || t.return()
                            } finally {
                                if (l) throw r
                            }
                        }
                        return o
                    }
                }(B, e) || P(B, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function S(B) {
                return function(B) {
                    if (Array.isArray(B)) return g(B)
                }(B) || function(B) {
                    if ("undefined" != typeof Symbol && null != B[Symbol.iterator] || null != B["@@iterator"]) return Array.from(B)
                }(B) || P(B) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function P(B, e) {
                if (B) {
                    if ("string" == typeof B) return g(B, e);
                    var t = Object.prototype.toString.call(B).slice(8, -1);
                    "Object" === t && B.constructor && (t = B.constructor.name);
                    return "Map" === t || "Set" === t ? Array.from(t) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? g(B, e) : void 0
                }
            }
            var I = {
                SELECTED: j().modeSelected,
                CONNECTED: j().modeConnected,
                UNREAD_HIGHLIGHT: j().modeUnread,
                UNREAD: j().modeUnreadNormal,
                MUTED: j().modeMuted,
                LOCKED: j().modeLocked
            };

            function x(B) {
                B.preventDefault();
                B.stopPropagation()
            }

            function L(B) {
                switch (B) {
                    case y.d4z.GUILD_STAGE_VOICE:
                    case y.d4z.GUILD_VOICE:
                        return j().typeVoice;
                    case y.d4z.ANNOUNCEMENT_THREAD:
                    case y.d4z.PUBLIC_THREAD:
                    case y.d4z.PRIVATE_THREAD:
                        return j().typeThread;
                    case y.d4z.GUILD_ANNOUNCEMENT:
                    case y.d4z.GUILD_TEXT:
                    case y.d4z.GUILD_STORE:
                    case y.d4z.GUILD_FORUM:
                    case y.d4z.GUILD_MEDIA:
                    default:
                        return j().typeDefault
                }
            }
            var Z = h.ZP.getEnableHardwareAcceleration() ? C.AnimatedAvatar : C.Avatar;

            function k(B) {
                var e = B.channel;
                return (0, n.jsx)(Z, {
                    src: (0, a.x)(e),
                    "aria-hidden": !0,
                    size: C.AvatarSizes.SIZE_20
                })
            }

            function U(B) {
                var e = B.channel,
                    t = (0, E.e7)([p.default], (function() {
                        return p.default.getUser(null == e ? void 0 : e.recipients[0])
                    })),
                    r = (0, E.e7)([A.Z], (function() {
                        return null != t && null != e && !e.isMultiUserDM() && null != A.Z.getTypingUsers(null == e ? void 0 : e.id)[null == t ? void 0 : t.id]
                    })),
                    o = (0, E.cj)([f.Z], (function() {
                        return null == t || null == e || e.isMultiUserDM() ? {
                            status: null,
                            isMobile: !1
                        } : {
                            status: f.Z.getStatus(t.id),
                            isMobile: f.Z.isMobileOnline(t.id)
                        }
                    })),
                    i = o.status,
                    l = o.isMobile;
                return (0, n.jsx)(Z, {
                    size: C.AvatarSizes.SIZE_20,
                    src: null == t ? void 0 : t.getAvatarURL(void 0, 40),
                    status: i,
                    isMobile: l,
                    isTyping: r,
                    "aria-label": null == t ? void 0 : t.username,
                    statusTooltip: !0
                })
            }
            var R = function(B) {
                var e = B.className,
                    t = B.channel,
                    r = B.guild,
                    o = B.locked,
                    l = B.hasActiveThreads,
                    E = function(B, e, t) {
                        switch (B.type) {
                            case y.d4z.DM:
                                return function() {
                                    return (0, n.jsx)(U, {
                                        channel: B
                                    })
                                };
                            case y.d4z.GROUP_DM:
                                return function() {
                                    return (0, n.jsx)(k, {
                                        channel: B
                                    })
                                };
                            default:
                                return (0, D.KS)(B, e, t)
                        }
                    }(t, r, {
                        locked: o,
                        hasActiveThreads: l
                    });
                if (null == E) return null;
                var F = (0, D.bT)(t, r, o, l);
                return (0, n.jsx)(C.Tooltip, {
                    text: F,
                    delay: 500,
                    children: function(B) {
                        return (0, n.jsx)("div", N(T({}, B), {
                            role: "img",
                            className: j().iconContainer,
                            children: (0, n.jsx)(E, {
                                className: i()(j().icon, e)
                            })
                        }))
                    }
                })
            };

            function M(B) {
                var e, t, o, E = B.channel,
                    a = B.name,
                    D = B.muted,
                    f = B.selected,
                    A = B.connected,
                    p = B.unread,
                    h = B.canHaveDot,
                    b = B.mentionCount,
                    g = B.relevant,
                    P = B.locked,
                    Z = B.hasActiveThreads,
                    k = B.onClick,
                    U = B.onMouseDown,
                    M = B.onMouseUp,
                    G = B.onContextMenu,
                    H = B.connectDragPreview,
                    z = B.className,
                    V = B.iconClassName,
                    K = B.subtitle,
                    Q = B.subtitleColor,
                    W = B.channel.type,
                    X = B.onMouseEnter,
                    J = B.onMouseLeave,
                    Y = B["aria-label"],
                    q = B.children,
                    $ = B.guild,
                    BB = B.channelTypeOverride,
                    eB = B.forceInteractable,
                    tB = B.isFavoriteSuggestion,
                    nB = u.G.useExperiment({
                        location: "337985_1"
                    }, {
                        autoTrackExposure: !1
                    }),
                    rB = nB.enabled,
                    oB = nB.left,
                    iB = (0, l.JA)(E.id),
                    lB = (iB.role, _(iB, ["role"])),
                    EB = r.useRef(null),
                    CB = r.useRef(null),
                    FB = (0, s.Z)(E),
                    uB = y.Z5c.CHANNEL(FB, E.id),
                    aB = (0,
                        c.ZP)(E),
                    cB = E.isGuildVocal(),
                    DB = cB && !A,
                    sB = r.useContext(C.AccessibilityPreferencesContext).reducedMotion.enabled,
                    dB = w(r.useState([]), 2),
                    fB = dB[0],
                    AB = dB[1];
                e = fB.length, t = 500, o = function() {
                    AB([])
                }, r.useLayoutEffect((function() {
                    var B = null;
                    if (e > 0) {
                        clearTimeout(B);
                        B = setTimeout((function() {
                            o();
                            clearTimeout(B)
                        }), 4 * t)
                    }
                    return function() {
                        return clearTimeout(B)
                    }
                }), [e, t, o]);
                var pB, mB = (0, d.oB)(E),
                    vB = mB.emoji,
                    hB = mB.color,
                    yB = rB ? (0, n.jsx)(F.Z, {
                        emojiName: vB.name,
                        emojiId: vB.id,
                        src: vB.url,
                        className: j().twemoji
                    }) : null,
                    bB = null != k || null != M || null != U || eB,
                    jB = (0, n.jsx)("div", {
                        className: i()(O({}, j().favoritesSuggestion, tB)),
                        children: (0, n.jsxs)(m.Z, N(T({
                            role: DB ? "button" : "link",
                            href: cB ? void 0 : uB,
                            target: "_blank",
                            ref: EB,
                            className: i()(j().link, O({}, j().linkWithChannelEmoji, null != yB)),
                            onMouseDown: function(B) {
                                rB && 0 === B.button && function(B) {
                                    if (!sB) {
                                        var e = B.currentTarget.getBoundingClientRect(),
                                            t = e.width > e.height ? e.width : e.height,
                                            n = {
                                                x: B.pageX - e.x - t / 2,
                                                y: B.pageY - e.y - t / 2,
                                                size: t
                                            };
                                        AB(S(fB).concat([n]))
                                    }
                                }(B)
                            },
                            onClick: function() {
                                return null == k ? void 0 : k(E)
                            }
                        }, lB), {
                            "aria-label": Y,
                            focusProps: {
                                enabled: !1
                            },
                            children: [rB && (0, n.jsx)("div", {
                                className: j().emojiColorFill,
                                style: {
                                    backgroundColor: hB,
                                    opacity: f ? 1 : 0
                                }
                            }), (0, n.jsxs)("div", {
                                className: j().linkTop,
                                children: [null != yB && oB && (0, n.jsx)("div", {
                                    className: i()(j().channelEmoji, j().channelEmojiLeftOfIcon),
                                    style: {
                                        backgroundColor: hB
                                    },
                                    children: yB
                                }), (0, n.jsx)(R, {
                                    className: V,
                                    channel: E,
                                    guild: $,
                                    hasActiveThreads: Z,
                                    locked: P
                                }), null != yB && !oB && (0, n.jsx)("div", {
                                    className: i()(j().channelEmoji, j().channelEmojiRightOfIcon),
                                    style: {
                                        backgroundColor: hB
                                    },
                                    children: yB
                                }), (0, n.jsx)(v.Z, {
                                    className: i()(j().name),
                                    "aria-hidden": !0,
                                    children: null == a ? aB : a
                                }), r.Children.count(q) > 0 ? (0, n.jsx)("div", {
                                    onClick: x,
                                    className: j().children,
                                    children: q
                                }) : null]
                            }), null != K ? (0, n.jsx)("div", {
                                className: j().linkBottom,
                                children: (0, n.jsx)(C.Text, {
                                    color: null != Q ? Q : "text-muted",
                                    variant: "text-xs/medium",
                                    className: j().subtitle,
                                    children: K
                                })
                            }) : null, rB && fB.length > 0 && fB.map((function(B, e) {
                                return (0, n.jsx)("span", {
                                    className: j().ripple,
                                    style: {
                                        top: B.y,
                                        left: B.x,
                                        width: B.size,
                                        height: B.size,
                                        backgroundColor: hB,
                                        animationDuration: "".concat(500, "ms"),
                                        opacity: .36
                                    }
                                }, "ripple-".concat(e))
                            }))]
                        }))
                    });
                return (0, n.jsx)(C.FocusRing, {
                    focusTarget: EB,
                    ringTarget: CB,
                    offset: {
                        top: 2,
                        bottom: 2,
                        right: 4
                    },
                    children: (0, n.jsxs)("div", {
                        className: i()(z, bB ? j().wrapper : j().notInteractive, f && !rB ? I.SELECTED : A ? I.CONNECTED : P ? I.LOCKED : D ? I.MUTED : p ? g || null != b && b > 0 ? I.UNREAD_HIGHLIGHT : I.UNREAD : null, L(null != BB ? BB : W)),
                        onMouseUp: function(B) {
                            return null == M ? void 0 : M(B, E)
                        },
                        onMouseDown: function(B) {
                            return null == U ? void 0 : U(B, E)
                        },
                        onContextMenu: function(B) {
                            return null == G ? void 0 : G(B, E)
                        },
                        onMouseEnter: X,
                        onMouseLeave: J,
                        children: [D || !h || !p || f && !cB ? null : (0, n.jsx)("div", {
                            className: i()(j().unread, (g || (null != b ? b : 0) > 0) && j().unreadRelevant)
                        }), null !== (pB = null == H ? void 0 : H(jB)) && void 0 !== pB ? pB : jB]
                    })
                })
            }
        },
        96233: (B, e, t) => {
            t.d(e, {
                oB: () => p
            });
            t(667294);
            var n = t(202351),
                r = t(709105),
                o = (t(87127), t(86171)),
                i = t(245353),
                l = (t(917019), t(473419)),
                E = (t(61209), t(362660));
            const C = Object.freeze({
                "😀": "#E67E22",
                "😃": "#E67E22",
                "😄": "#E67E22",
                "😁": "#E67E22",
                "😆": "#E67E22",
                "😅": "#E67E22",
                "🤣": "#F1C40F",
                "😂": "#E67E22",
                "🙂": "#F1C40F",
                "🙃": "#F1C40F",
                "🫠": "#F1C40F",
                "😉": "#F1C40F",
                "😊": "#F1C40F",
                "😇": "#3498DB",
                "🥰": "#F1C40F",
                "😍": "#E67E22",
                "🤩": "#E67E22",
                "😘": "#F1C40F",
                "😗": "#F1C40F",
                "☺️": "#607D8B",
                "😚": "#F1C40F",
                "😙": "#F1C40F",
                "🥲": "#F1C40F",
                "😋": "#F1C40F",
                "😛": "#F1C40F",
                "😜": "#F1C40F",
                "🤪": "#E67E22",
                "😝": "#F1C40F",
                "🤑": "#F1C40F",
                "🤗": "#E67E22",
                "🤭": "#F1C40F",
                "🫢": "#F1C40F",
                "🫣": "#F1C40F",
                "🤫": "#F1C40F",
                "🤔": "#F1C40F",
                "🫡": "#F1C40F",
                "🤐": "#F1C40F",
                "🤨": "#F1C40F",
                "😐": "#F1C40F",
                "😑": "#F1C40F",
                "😶": "#F1C40F",
                "🫥": "#F1C40F",
                "😶‍🌫️": "#9B59B6",
                "😏": "#F1C40F",
                "😒": "#F1C40F",
                "🙄": "#E67E22",
                "😬": "#9B59B6",
                "😮‍💨": "#F1C40F",
                "🤥": "#F1C40F",
                "😌": "#F1C40F",
                "😔": "#F1C40F",
                "😪": "#F1C40F",
                "🤤": "#F1C40F",
                "😴": "#F1C40F",
                "😷": "#9B59B6",
                "🤒": "#E67E22",
                "🤕": "#9B59B6",
                "🤢": "#E67E22",
                "🤮": "#11806A",
                "🤧": "#9B59B6",
                "🥵": "#E67E22",
                "🥶": "#3498DB",
                "🥴": "#F1C40F",
                "😵": "#F1C40F",
                "😵‍💫": "#F1C40F",
                "🤯": "#E67E22",
                "🤠": "#E67E22",
                "🥳": "#F1C40F",
                "🥸": "#E67E22",
                "😎": "#11806A",
                "🤓": "#E67E22",
                "🧐": "#F1C40F",
                "😕": "#F1C40F",
                "🫤": "#F1C40F",
                "😟": "#F1C40F",
                "🙁": "#F1C40F",
                "☹️": "#F1C40F",
                "😮": "#F1C40F",
                "😯": "#F1C40F",
                "😲": "#F1C40F",
                "😳": "#E67E22",
                "🥺": "#F1C40F",
                "🥹": "#F1C40F",
                "😦": "#F1C40F",
                "😧": "#F1C40F",
                "😨": "#5865F2",
                "😰": "#E67E22",
                "😥": "#F1C40F",
                "😢": "#F1C40F",
                "😭": "#F1C40F",
                "😱": "#9B59B6",
                "😖": "#F1C40F",
                "😣": "#F1C40F",
                "😞": "#F1C40F",
                "😓": "#F1C40F",
                "😩": "#F1C40F",
                "😫": "#F1C40F",
                "🥱": "#F1C40F",
                "😤": "#F1C40F",
                "😡": "#E67E22",
                "😠": "#F1C40F",
                "🤬": "#992D22",
                "😈": "#9B59B6",
                "👿": "#9B59B6",
                "💀": "#9B59B6",
                "☠️": "#9B59B6",
                "💩": "#992D22",
                "🤡": "#9B59B6",
                "👹": "#E74C3C",
                "👺": "#E74C3C",
                "👻": "#9B59B6",
                "👽": "#9B59B6",
                "👾": "#9B59B6",
                "🤖": "#607D8B",
                "😺": "#E67E22",
                "😸": "#E67E22",
                "😹": "#E67E22",
                "😻": "#E67E22",
                "😼": "#E67E22",
                "😽": "#E67E22",
                "🙀": "#E67E22",
                "😿": "#E67E22",
                "😾": "#E67E22",
                "🙈": "#E67E22",
                "🙉": "#E67E22",
                "🙊": "#E67E22",
                "💋": "#992D22",
                "💌": "#9B59B6",
                "💘": "#3498DB",
                "💝": "#E91E63",
                "💖": "#E91E63",
                "💗": "#E91E63",
                "💓": "#E91E63",
                "💞": "#E91E63",
                "💕": "#E91E63",
                "💟": "#9B59B6",
                "❣️": "#E74C3C",
                "💔": "#E74C3C",
                "❤️‍🔥": "#E74C3C",
                "❤️‍🩹": "#9B59B6",
                "❤️": "#E74C3C",
                "🧡": "#E67E22",
                "💛": "#F1C40F",
                "💚": "#11806A",
                "💙": "#3498DB",
                "💜": "#9B59B6",
                "🤎": "#992D22",
                "🖤": "#607D8B",
                "🤍": "#9B59B6",
                "💯": "#992D22",
                "💢": "#E74C3C",
                "💥": "#E74C3C",
                "💫": "#F1C40F",
                "💦": "#9B59B6",
                "💨": "#9B59B6",
                "🕳️": "#9B59B6",
                "💣": "#11806A",
                "💬": "#9B59B6",
                "👁️‍🗨️": "#11806A",
                "🗨️": "#206694",
                "🗯️": "#9B59B6",
                "💭": "#9B59B6",
                "💤": "#206694",
                "👋": "#F1C40F",
                "🤚": "#F1C40F",
                "🖐️": "#F1C40F",
                "✋": "#F1C40F",
                "🖖": "#F1C40F",
                "🫱": "#F1C40F",
                "🫲": "#F1C40F",
                "🫳": "#F1C40F",
                "🫴": "#F1C40F",
                "👌": "#F1C40F",
                "🤌": "#F1C40F",
                "🤏": "#E67E22",
                "✌️": "#F1C40F",
                "🤞": "#F1C40F",
                "🫰": "#F1C40F",
                "🤟": "#F1C40F",
                "🤘": "#F1C40F",
                "🤙": "#F1C40F",
                "👈": "#F1C40F",
                "👉": "#F1C40F",
                "👆": "#F1C40F",
                "🖕": "#F1C40F",
                "👇": "#E67E22",
                "☝️": "#F1C40F",
                "🫵": "#F1C40F",
                "👍": "#F1C40F",
                "👎": "#F1C40F",
                "✊": "#F1C40F",
                "👊": "#E67E22",
                "🤛": "#F1C40F",
                "🤜": "#E67E22",
                "👏": "#F1C40F",
                "🙌": "#F1C40F",
                "🫶": "#E67E22",
                "👐": "#F1C40F",
                "🤲": "#F1C40F",
                "🤝": "#F1C40F",
                "🙏": "#F1C40F",
                "✍️": "#607D8B",
                "💅": "#F1C40F",
                "🤳": "#9B59B6",
                "💪": "#F1C40F",
                "🦾": "#11806A",
                "🦿": "#9B59B6",
                "🦵": "#E67E22",
                "🦶": "#F1C40F",
                "👂": "#F1C40F",
                "🦻": "#F1C40F",
                "👃": "#F1C40F",
                "🧠": "#9B59B6",
                "🫀": "#E74C3C",
                "🫁": "#E74C3C",
                "🦷": "#9B59B6",
                "🦴": "#9B59B6",
                "👀": "#9B59B6",
                "👁️": "#9B59B6",
                "👅": "#9B59B6",
                "👄": "#E74C3C",
                "🫦": "#E74C3C",
                "👶": "#F1C40F",
                "🧒": "#F1C40F",
                "👦": "#F1C40F",
                "👧": "#F1C40F",
                "🧑": "#F1C40F",
                "👱": "#F1C40F",
                "👨": "#F1C40F",
                "🧔": "#F1C40F",
                "🧔‍♂️": "#F1C40F",
                "🧔‍♀️": "#E67E22",
                "👨‍🦰": "#F1C40F",
                "👨‍🦱": "#F1C40F",
                "👨‍🦳": "#F1C40F",
                "👨‍🦲": "#F1C40F",
                "👩": "#F1C40F",
                "👩‍🦰": "#E67E22",
                "🧑‍🦰": "#F1C40F",
                "👩‍🦱": "#F1C40F",
                "🧑‍🦱": "#F1C40F",
                "👩‍🦳": "#F1C40F",
                "🧑‍🦳": "#F1C40F",
                "👩‍🦲": "#F1C40F",
                "🧑‍🦲": "#F1C40F",
                "👱‍♀️": "#F1C40F",
                "👱‍♂️": "#F1C40F",
                "🧓": "#F1C40F",
                "👴": "#F1C40F",
                "👵": "#F1C40F",
                "🙍": "#F1C40F",
                "🙍‍♂️": "#206694",
                "🙍‍♀️": "#F1C40F",
                "🙎": "#F1C40F",
                "🙎‍♂️": "#F1C40F",
                "🙎‍♀️": "#E67E22",
                "🙅": "#9B59B6",
                "🙅‍♂️": "#3498DB",
                "🙅‍♀️": "#992D22",
                "🙆": "#9B59B6",
                "🙆‍♂️": "#206694",
                "🙆‍♀️": "#992D22",
                "💁": "#F1C40F",
                "💁‍♂️": "#F1C40F",
                "💁‍♀️": "#F1C40F",
                "🙋": "#F1C40F",
                "🙋‍♂️": "#F1C40F",
                "🙋‍♀️": "#9B59B6",
                "🧏": "#F1C40F",
                "🧏‍♂️": "#206694",
                "🧏‍♀️": "#E67E22",
                "🙇": "#F1C40F",
                "🙇‍♂️": "#206694",
                "🙇‍♀️": "#992D22",
                "🤦": "#9B59B6",
                "🤦‍♂️": "#206694",
                "🤦‍♀️": "#992D22",
                "🤷": "#E67E22",
                "🤷‍♂️": "#F1C40F",
                "🤷‍♀️": "#992D22",
                "🧑‍⚕️": "#9B59B6",
                "👨‍⚕️": "#F1C40F",
                "👩‍⚕️": "#9B59B6",
                "🧑‍🎓": "#F1C40F",
                "👨‍🎓": "#F1C40F",
                "👩‍🎓": "#E67E22",
                "🧑‍🏫": "#E67E22",
                "👨‍🏫": "#E67E22",
                "👩‍🏫": "#E67E22",
                "🧑‍⚖️": "#F1C40F",
                "👨‍⚖️": "#F1C40F",
                "👩‍⚖️": "#E67E22",
                "🧑‍🌾": "#992D22",
                "👨‍🌾": "#E67E22",
                "👩‍🌾": "#992D22",
                "🧑‍🍳": "#E67E22",
                "👨‍🍳": "#E67E22",
                "👩‍🍳": "#E67E22",
                "🧑‍🔧": "#5865F2",
                "👨‍🔧": "#206694",
                "👩‍🔧": "#5865F2",
                "🧑‍🏭": "#F1C40F",
                "👨‍🏭": "#F1C40F",
                "👩‍🏭": "#F1C40F",
                "🧑‍💼": "#F1C40F",
                "👨‍💼": "#F1C40F",
                "👩‍💼": "#F1C40F",
                "🧑‍🔬": "#9B59B6",
                "👨‍🔬": "#9B59B6",
                "👩‍🔬": "#9B59B6",
                "🧑‍💻": "#9B59B6",
                "👨‍💻": "#9B59B6",
                "👩‍💻": "#9B59B6",
                "🧑‍🎤": "#1ABC9C",
                "👨‍🎤": "#206694",
                "👩‍🎤": "#9B59B6",
                "🧑‍🎨": "#E67E22",
                "👨‍🎨": "#E67E22",
                "👩‍🎨": "#E67E22",
                "🧑‍✈️": "#992D22",
                "👨‍✈️": "#F1C40F",
                "👩‍✈️": "#992D22",
                "🧑‍🚀": "#9B59B6",
                "👨‍🚀": "#9B59B6",
                "👩‍🚀": "#9B59B6",
                "🧑‍🚒": "#992D22",
                "👨‍🚒": "#992D22",
                "👩‍🚒": "#992D22",
                "👮": "#F1C40F",
                "👮‍♂️": "#F1C40F",
                "👮‍♀️": "#F1C40F",
                "🕵️": "#992D22",
                "🕵️‍♂️": "#992D22",
                "🕵️‍♀️": "#992D22",
                "💂": "#E67E22",
                "💂‍♂️": "#E67E22",
                "💂‍♀️": "#E67E22",
                "🥷": "#11806A",
                "👷": "#F1C40F",
                "👷‍♂️": "#F1C40F",
                "👷‍♀️": "#F1C40F",
                "🫅": "#E67E22",
                "🤴": "#F1C40F",
                "👸": "#F1C40F",
                "👳": "#F1C40F",
                "👳‍♂️": "#9B59B6",
                "👳‍♀️": "#F1C40F",
                "👲": "#992D22",
                "🧕": "#206694",
                "🤵": "#F1C40F",
                "🤵‍♂️": "#992D22",
                "🤵‍♀️": "#E67E22",
                "👰": "#F1C40F",
                "👰‍♂️": "#F1C40F",
                "👰‍♀️": "#F1C40F",
                "🤰": "#9B59B6",
                "🫃": "#E67E22",
                "🫄": "#9B59B6",
                "🤱": "#992D22",
                "👩‍🍼": "#992D22",
                "👨‍🍼": "#E67E22",
                "🧑‍🍼": "#E67E22",
                "👼": "#F1C40F",
                "🎅": "#9B59B6",
                "🤶": "#9B59B6",
                "🧑‍🎄": "#E67E22",
                "🦸": "#E67E22",
                "🦸‍♂️": "#E67E22",
                "🦸‍♀️": "#E67E22",
                "🦹": "#F1C40F",
                "🦹‍♂️": "#F1C40F",
                "🦹‍♀️": "#E67E22",
                "🧙": "#992D22",
                "🧙‍♂️": "#992D22",
                "🧙‍♀️": "#992D22",
                "🧚": "#E67E22",
                "🧚‍♂️": "#E67E22",
                "🧚‍♀️": "#3498DB",
                "🧛": "#F1C40F",
                "🧛‍♂️": "#607D8B",
                "🧛‍♀️": "#E67E22",
                "🧜": "#206694",
                "🧜‍♂️": "#E67E22",
                "🧜‍♀️": "#9B59B6",
                "🧝": "#11806A",
                "🧝‍♂️": "#F1C40F",
                "🧝‍♀️": "#9B59B6",
                "🧞": "#206694",
                "🧞‍♂️": "#3498DB",
                "🧞‍♀️": "#9B59B6",
                "🧟": "#11806A",
                "🧟‍♂️": "#11806A",
                "🧟‍♀️": "#11806A",
                "🧌": "#992D22",
                "💆": "#F1C40F",
                "💆‍♂️": "#F1C40F",
                "💆‍♀️": "#F1C40F",
                "💇": "#F1C40F",
                "💇‍♂️": "#F1C40F",
                "💇‍♀️": "#F1C40F",
                "🚶": "#206694",
                "🚶‍♂️": "#206694",
                "🚶‍♀️": "#206694",
                "🧍": "#9B59B6",
                "🧍‍♂️": "#992D22",
                "🧍‍♀️": "#F1C40F",
                "🧎": "#E67E22",
                "🧎‍♂️": "#F1C40F",
                "🧎‍♀️": "#E67E22",
                "🧑‍🦯": "#206694",
                "👨‍🦯": "#206694",
                "👩‍🦯": "#206694",
                "🧑‍🦼": "#11806A",
                "👨‍🦼": "#992D22",
                "👩‍🦼": "#992D22",
                "🧑‍🦽": "#11806A",
                "👨‍🦽": "#11806A",
                "👩‍🦽": "#206694",
                "🏃": "#F1C40F",
                "🏃‍♂️": "#206694",
                "🏃‍♀️": "#3498DB",
                "💃": "#F1C40F",
                "🕺": "#992D22",
                "🕴️": "#607D8B",
                "👯": "#E67E22",
                "👯‍♂️": "#992D22",
                "👯‍♀️": "#E67E22",
                "🧖": "#9B59B6",
                "🧖‍♂️": "#9B59B6",
                "🧖‍♀️": "#F1C40F",
                "🧗": "#9B59B6",
                "🧗‍♂️": "#9B59B6",
                "🧗‍♀️": "#9B59B6",
                "🤺": "#9B59B6",
                "🏇": "#992D22",
                "⛷️": "#992D22",
                "🏂": "#206694",
                "🏌️": "#9B59B6",
                "🏌️‍♂️": "#607D8B",
                "🏌️‍♀️": "#E67E22",
                "🏄": "#E67E22",
                "🏄‍♂️": "#F1C40F",
                "🏄‍♀️": "#9B59B6",
                "🚣": "#E74C3C",
                "🚣‍♂️": "#E74C3C",
                "🚣‍♀️": "#E74C3C",
                "🏊": "#9B59B6",
                "🏊‍♂️": "#9B59B6",
                "🏊‍♀️": "#9B59B6",
                "⛹️": "#E67E22",
                "⛹️‍♂️": "#206694",
                "⛹️‍♀️": "#E67E22",
                "🏋️": "#E67E22",
                "🏋️‍♂️": "#E67E22",
                "🏋️‍♀️": "#992D22",
                "🚴": "#11806A",
                "🚴‍♂️": "#11806A",
                "🚴‍♀️": "#992D22",
                "🚵": "#9B59B6",
                "🚵‍♂️": "#9B59B6",
                "🚵‍♀️": "#992D22",
                "🤸": "#F1C40F",
                "🤸‍♂️": "#206694",
                "🤸‍♀️": "#F1C40F",
                "🤼": "#E67E22",
                "🤼‍♂️": "#E67E22",
                "🤼‍♀️": "#E67E22",
                "🤽": "#E67E22",
                "🤽‍♂️": "#E67E22",
                "🤽‍♀️": "#E67E22",
                "🤾": "#9B59B6",
                "🤾‍♂️": "#E67E22",
                "🤾‍♀️": "#E67E22",
                "🤹": "#E67E22",
                "🤹‍♂️": "#F1C40F",
                "🤹‍♀️": "#E67E22",
                "🧘": "#F1C40F",
                "🧘‍♂️": "#E67E22",
                "🧘‍♀️": "#F1C40F",
                "🛀": "#9B59B6",
                "🛌": "#9B59B6",
                "🧑‍🤝‍🧑": "#9B59B6",
                "👭": "#F1C40F",
                "👫": "#F1C40F",
                "👬": "#E67E22",
                "💏": "#9B59B6",
                "👩‍❤️‍💋‍👨": "#9B59B6",
                "👨‍❤️‍💋‍👨": "#9B59B6",
                "👩‍❤️‍💋‍👩": "#9B59B6",
                "💑": "#9B59B6",
                "👩‍❤️‍👨": "#9B59B6",
                "👨‍❤️‍👨": "#9B59B6",
                "👩‍❤️‍👩": "#9B59B6",
                "👪": "#F1C40F",
                "👨‍👩‍👦": "#206694",
                "👨‍👩‍👧": "#F1C40F",
                "👨‍👩‍👧‍👦": "#F1C40F",
                "👨‍👩‍👦‍👦": "#F1C40F",
                "👨‍👩‍👧‍👧": "#F1C40F",
                "👨‍👨‍👦": "#206694",
                "👨‍👨‍👧": "#F1C40F",
                "👨‍👨‍👧‍👦": "#206694",
                "👨‍👨‍👦‍👦": "#206694",
                "👨‍👨‍👧‍👧": "#F1C40F",
                "👩‍👩‍👦": "#E67E22",
                "👩‍👩‍👧": "#E67E22",
                "👩‍👩‍👧‍👦": "#E67E22",
                "👩‍👩‍👦‍👦": "#F1C40F",
                "👩‍👩‍👧‍👧": "#E67E22",
                "👨‍👦": "#F1C40F",
                "👨‍👦‍👦": "#206694",
                "👨‍👧": "#206694",
                "👨‍👧‍👦": "#F1C40F",
                "👨‍👧‍👧": "#F1C40F",
                "👩‍👦": "#F1C40F",
                "👩‍👦‍👦": "#F1C40F",
                "👩‍👧": "#F1C40F",
                "👩‍👧‍👦": "#F1C40F",
                "👩‍👧‍👧": "#F1C40F",
                "🗣️": "#607D8B",
                "👤": "#607D8B",
                "👥": "#607D8B",
                "🫂": "#607D8B",
                "👣": "#11806A",
                "🐵": "#E67E22",
                "🐒": "#E67E22",
                "🦍": "#206694",
                "🦧": "#992D22",
                "🐶": "#9B59B6",
                "🐕": "#E67E22",
                "🦮": "#E67E22",
                "🐕‍🦺": "#992D22",
                "🐩": "#9B59B6",
                "🐺": "#9B59B6",
                "🦊": "#E67E22",
                "🦝": "#992D22",
                "🐱": "#F1C40F",
                "🐈": "#9B59B6",
                "🐈‍⬛": "#11806A",
                "🦁": "#E67E22",
                "🐯": "#F1C40F",
                "🐅": "#992D22",
                "🐆": "#E67E22",
                "🐴": "#992D22",
                "🐎": "#992D22",
                "🦄": "#9B59B6",
                "🦓": "#206694",
                "🦌": "#E67E22",
                "🦬": "#992D22",
                "🐮": "#9B59B6",
                "🐂": "#E74C3C",
                "🐃": "#992D22",
                "🐄": "#9B59B6",
                "🐷": "#9B59B6",
                "🐖": "#9B59B6",
                "🐗": "#992D22",
                "🐽": "#9B59B6",
                "🐏": "#9B59B6",
                "🐑": "#9B59B6",
                "🐐": "#9B59B6",
                "🐪": "#E67E22",
                "🐫": "#E67E22",
                "🦙": "#9B59B6",
                "🦒": "#E67E22",
                "🐘": "#9B59B6",
                "🦣": "#992D22",
                "🦏": "#9B59B6",
                "🦛": "#9B59B6",
                "🐭": "#9B59B6",
                "🐁": "#9B59B6",
                "🐀": "#9B59B6",
                "🐹": "#9B59B6",
                "🐰": "#9B59B6",
                "🐇": "#9B59B6",
                "🐿️": "#992D22",
                "🦫": "#992D22",
                "🦔": "#992D22",
                "🦇": "#992D22",
                "🐻": "#992D22",
                "🐻‍❄️": "#9B59B6",
                "🐨": "#9B59B6",
                "🐼": "#11806A",
                "🦥": "#992D22",
                "🦦": "#992D22",
                "🦨": "#9B59B6",
                "🦘": "#E67E22",
                "🦡": "#9B59B6",
                "🐾": "#11806A",
                "🦃": "#992D22",
                "🐔": "#E74C3C",
                "🐓": "#9B59B6",
                "🐣": "#F1C40F",
                "🐤": "#F1C40F",
                "🐥": "#F1C40F",
                "🐦": "#9B59B6",
                "🐧": "#E67E22",
                "🕊️": "#9B59B6",
                "🦅": "#992D22",
                "🦆": "#9B59B6",
                "🦢": "#9B59B6",
                "🦉": "#992D22",
                "🦤": "#E67E22",
                "🪶": "#992D22",
                "🦩": "#E74C3C",
                "🦚": "#11806A",
                "🦜": "#11806A",
                "🐸": "#11806A",
                "🐊": "#11806A",
                "🐢": "#11806A",
                "🦎": "#11806A",
                "🐍": "#992D22",
                "🐲": "#F1C40F",
                "🐉": "#992D22",
                "🦕": "#206694",
                "🦖": "#11806A",
                "🐳": "#3498DB",
                "🐋": "#9B59B6",
                "🐬": "#3498DB",
                "🦭": "#9B59B6",
                "🐟": "#3498DB",
                "🐠": "#F1C40F",
                "🐡": "#E67E22",
                "🦈": "#9B59B6",
                "🐙": "#992D22",
                "🐚": "#9B59B6",
                "🪸": "#E74C3C",
                "🐌": "#E67E22",
                "🦋": "#11806A",
                "🐛": "#992D22",
                "🐜": "#992D22",
                "🐝": "#607D8B",
                "🪲": "#11806A",
                "🐞": "#992D22",
                "🦗": "#992D22",
                "🪳": "#992D22",
                "🕷️": "#11806A",
                "🕸️": "#9B59B6",
                "🦂": "#992D22",
                "🦟": "#992D22",
                "🪰": "#E67E22",
                "🪱": "#E74C3C",
                "🦠": "#11806A",
                "💐": "#F1C40F",
                "🌸": "#9B59B6",
                "💮": "#9B59B6",
                "🪷": "#9B59B6",
                "🏵️": "#E67E22",
                "🌹": "#992D22",
                "🥀": "#9B59B6",
                "🌺": "#E91E63",
                "🌻": "#F1C40F",
                "🌼": "#F1C40F",
                "🌷": "#E74C3C",
                "🌱": "#11806A",
                "🪴": "#11806A",
                "🌲": "#11806A",
                "🌳": "#11806A",
                "🌴": "#11806A",
                "🌵": "#11806A",
                "🌾": "#E67E22",
                "🌿": "#11806A",
                "☘️": "#11806A",
                "🍀": "#11806A",
                "🍁": "#992D22",
                "🍂": "#992D22",
                "🍃": "#11806A",
                "🪹": "#992D22",
                "🪺": "#3498DB",
                "🍇": "#992D22",
                "🍈": "#9B59B6",
                "🍉": "#E74C3C",
                "🍊": "#E67E22",
                "🍋": "#F1C40F",
                "🍌": "#9B59B6",
                "🍍": "#992D22",
                "🥭": "#E67E22",
                "🍎": "#E74C3C",
                "🍏": "#11806A",
                "🍐": "#E67E22",
                "🍑": "#E74C3C",
                "🍒": "#E74C3C",
                "🍓": "#992D22",
                "🫐": "#206694",
                "🥝": "#F1C40F",
                "🍅": "#E74C3C",
                "🫒": "#992D22",
                "🥥": "#9B59B6",
                "🥑": "#F1C40F",
                "🍆": "#992D22",
                "🥔": "#992D22",
                "🥕": "#E67E22",
                "🌽": "#992D22",
                "🌶️": "#E74C3C",
                "🫑": "#11806A",
                "🥒": "#F1C40F",
                "🥬": "#11806A",
                "🥦": "#11806A",
                "🧄": "#9B59B6",
                "🧅": "#E67E22",
                "🍄": "#E74C3C",
                "🥜": "#E67E22",
                "🫘": "#992D22",
                "🌰": "#992D22",
                "🍞": "#E67E22",
                "🥐": "#E67E22",
                "🥖": "#F1C40F",
                "🫓": "#9B59B6",
                "🥨": "#E74C3C",
                "🥯": "#E67E22",
                "🥞": "#F1C40F",
                "🧇": "#E67E22",
                "🧀": "#F1C40F",
                "🍖": "#992D22",
                "🍗": "#992D22",
                "🥩": "#992D22",
                "🥓": "#E74C3C",
                "🍔": "#E67E22",
                "🍟": "#F1C40F",
                "🍕": "#E67E22",
                "🌭": "#E67E22",
                "🥪": "#F1C40F",
                "🌮": "#F1C40F",
                "🌯": "#9B59B6",
                "🫔": "#E67E22",
                "🥙": "#E67E22",
                "🧆": "#992D22",
                "🥚": "#9B59B6",
                "🍳": "#11806A",
                "🥘": "#E67E22",
                "🍲": "#9B59B6",
                "🫕": "#992D22",
                "🥣": "#3498DB",
                "🥗": "#11806A",
                "🍿": "#E74C3C",
                "🧈": "#F1C40F",
                "🧂": "#9B59B6",
                "🥫": "#E74C3C",
                "🍱": "#992D22",
                "🍘": "#992D22",
                "🍙": "#9B59B6",
                "🍚": "#9B59B6",
                "🍛": "#9B59B6",
                "🍜": "#9B59B6",
                "🍝": "#F1C40F",
                "🍠": "#E74C3C",
                "🍢": "#E67E22",
                "🍣": "#E74C3C",
                "🍤": "#E67E22",
                "🍥": "#9B59B6",
                "🥮": "#992D22",
                "🍡": "#9B59B6",
                "🥟": "#F1C40F",
                "🥠": "#E67E22",
                "🥡": "#9B59B6",
                "🦀": "#E74C3C",
                "🦞": "#992D22",
                "🦐": "#E74C3C",
                "🦑": "#E74C3C",
                "🦪": "#9B59B6",
                "🍦": "#E67E22",
                "🍧": "#9B59B6",
                "🍨": "#9B59B6",
                "🍩": "#992D22",
                "🍪": "#E67E22",
                "🎂": "#9B59B6",
                "🍰": "#9B59B6",
                "🧁": "#E67E22",
                "🥧": "#E67E22",
                "🍫": "#E74C3C",
                "🍬": "#9B59B6",
                "🍭": "#9B59B6",
                "🍮": "#9B59B6",
                "🍯": "#F1C40F",
                "🍼": "#9B59B6",
                "🥛": "#9B59B6",
                "☕": "#9B59B6",
                "🫖": "#9B59B6",
                "🍵": "#9B59B6",
                "🍶": "#9B59B6",
                "🍾": "#992D22",
                "🍷": "#9B59B6",
                "🍸": "#9B59B6",
                "🍹": "#F1C40F",
                "🍺": "#E67E22",
                "🍻": "#E67E22",
                "🥂": "#9B59B6",
                "🥃": "#9B59B6",
                "🫗": "#9B59B6",
                "🥤": "#E74C3C",
                "🧋": "#E67E22",
                "🧃": "#9B59B6",
                "🧉": "#992D22",
                "🧊": "#3498DB",
                "🥢": "#992D22",
                "🍽️": "#9B59B6",
                "🍴": "#9B59B6",
                "🥄": "#607D8B",
                "🔪": "#9B59B6",
                "🫙": "#9B59B6",
                "🏺": "#992D22",
                "🌍": "#F1C40F",
                "🌎": "#206694",
                "🌏": "#F1C40F",
                "🌐": "#3498DB",
                "🗺️": "#3498DB",
                "🗾": "#3498DB",
                "🧭": "#9B59B6",
                "🏔️": "#11806A",
                "⛰️": "#11806A",
                "🌋": "#11806A",
                "🗻": "#9B59B6",
                "🏕️": "#992D22",
                "🏖️": "#E67E22",
                "🏜️": "#992D22",
                "🏝️": "#3498DB",
                "🏞️": "#3498DB",
                "🏟️": "#9B59B6",
                "🏛️": "#9B59B6",
                "🏗️": "#F1C40F",
                "🧱": "#992D22",
                "🪨": "#11806A",
                "🪵": "#992D22",
                "🛖": "#992D22",
                "🏘️": "#9B59B6",
                "🏚️": "#9B59B6",
                "🏠": "#9B59B6",
                "🏡": "#11806A",
                "🏢": "#9B59B6",
                "🏣": "#9B59B6",
                "🏤": "#9B59B6",
                "🏥": "#9B59B6",
                "🏦": "#9B59B6",
                "🏨": "#9B59B6",
                "🏩": "#9B59B6",
                "🏪": "#607D8B",
                "🏫": "#9B59B6",
                "🏬": "#607D8B",
                "🏭": "#9B59B6",
                "🏯": "#206694",
                "🏰": "#9B59B6",
                "💒": "#9B59B6",
                "🗼": "#992D22",
                "🗽": "#607D8B",
                "⛪": "#9B59B6",
                "🕌": "#E67E22",
                "🛕": "#E67E22",
                "🕍": "#E67E22",
                "⛩️": "#992D22",
                "🕋": "#992D22",
                "⛲": "#9B59B6",
                "⛺": "#E74C3C",
                "🌁": "#9B59B6",
                "🌃": "#206694",
                "🏙️": "#206694",
                "🌄": "#9B59B6",
                "🌅": "#E67E22",
                "🌆": "#E67E22",
                "🌇": "#E67E22",
                "🌉": "#206694",
                "♨️": "#992D22",
                "🎠": "#9B59B6",
                "🛝": "#206694",
                "🎡": "#992D22",
                "🎢": "#E67E22",
                "💈": "#9B59B6",
                "🎪": "#9B59B6",
                "🚂": "#992D22",
                "🚃": "#607D8B",
                "🚄": "#9B59B6",
                "🚅": "#206694",
                "🚆": "#607D8B",
                "🚇": "#11806A",
                "🚈": "#206694",
                "🚉": "#206694",
                "🚊": "#11806A",
                "🚝": "#206694",
                "🚞": "#9B59B6",
                "🚋": "#11806A",
                "🚌": "#3498DB",
                "🚍": "#607D8B",
                "🚎": "#206694",
                "🚐": "#9B59B6",
                "🚑": "#11806A",
                "🚒": "#11806A",
                "🚓": "#11806A",
                "🚔": "#11806A",
                "🚕": "#E67E22",
                "🚖": "#992D22",
                "🚗": "#9B59B6",
                "🚘": "#E74C3C",
                "🚙": "#3498DB",
                "🛻": "#206694",
                "🚚": "#E67E22",
                "🚛": "#11806A",
                "🚜": "#F1C40F",
                "🏎️": "#E74C3C",
                "🏍️": "#11806A",
                "🛵": "#E67E22",
                "🦽": "#11806A",
                "🦼": "#992D22",
                "🛺": "#F1C40F",
                "🚲": "#11806A",
                "🛴": "#607D8B",
                "🛹": "#11806A",
                "🛼": "#3498DB",
                "🚏": "#9B59B6",
                "🛣️": "#11806A",
                "🛤️": "#992D22",
                "🛢️": "#992D22",
                "⛽": "#E74C3C",
                "🛞": "#11806A",
                "🚨": "#E74C3C",
                "🚥": "#9B59B6",
                "🚦": "#11806A",
                "🛑": "#9B59B6",
                "🚧": "#607D8B",
                "⚓": "#206694",
                "🛟": "#9B59B6",
                "⛵": "#992D22",
                "🛶": "#992D22",
                "🚤": "#9B59B6",
                "🛳️": "#9B59B6",
                "⛴️": "#206694",
                "🛥️": "#9B59B6",
                "🚢": "#9B59B6",
                "✈️": "#3498DB",
                "🛩️": "#9B59B6",
                "🛫": "#206694",
                "🛬": "#206694",
                "🪂": "#992D22",
                "💺": "#607D8B",
                "🚁": "#E74C3C",
                "🚟": "#9B59B6",
                "🚠": "#992D22",
                "🚡": "#F1C40F",
                "🛰️": "#206694",
                "🚀": "#9B59B6",
                "🛸": "#206694",
                "🛎️": "#992D22",
                "🧳": "#992D22",
                "⌛": "#9B59B6",
                "⏳": "#9B59B6",
                "⌚": "#992D22",
                "⏰": "#9B59B6",
                "⏱️": "#9B59B6",
                "⏲️": "#9B59B6",
                "🕰️": "#9B59B6",
                "🕛": "#9B59B6",
                "🕧": "#9B59B6",
                "🕐": "#9B59B6",
                "🕜": "#9B59B6",
                "🕑": "#9B59B6",
                "🕝": "#9B59B6",
                "🕒": "#9B59B6",
                "🕞": "#9B59B6",
                "🕓": "#9B59B6",
                "🕟": "#9B59B6",
                "🕔": "#9B59B6",
                "🕠": "#9B59B6",
                "🕕": "#9B59B6",
                "🕡": "#9B59B6",
                "🕖": "#9B59B6",
                "🕢": "#9B59B6",
                "🕗": "#9B59B6",
                "🕣": "#9B59B6",
                "🕘": "#9B59B6",
                "🕤": "#9B59B6",
                "🕙": "#9B59B6",
                "🕥": "#9B59B6",
                "🕚": "#9B59B6",
                "🕦": "#9B59B6",
                "🌑": "#11806A",
                "🌒": "#11806A",
                "🌓": "#11806A",
                "🌔": "#11806A",
                "🌕": "#F1C40F",
                "🌖": "#11806A",
                "🌗": "#11806A",
                "🌘": "#11806A",
                "🌙": "#F1C40F",
                "🌚": "#206694",
                "🌛": "#F1C40F",
                "🌜": "#F1C40F",
                "🌡️": "#9B59B6",
                "☀️": "#F1C40F",
                "🌝": "#F1C40F",
                "🌞": "#F1C40F",
                "🪐": "#E67E22",
                "⭐": "#9B59B6",
                "🌟": "#9B59B6",
                "🌠": "#206694",
                "🌌": "#9B59B6",
                "☁️": "#9B59B6",
                "⛅": "#9B59B6",
                "⛈️": "#9B59B6",
                "🌤️": "#9B59B6",
                "🌥️": "#9B59B6",
                "🌦️": "#F1C40F",
                "🌧️": "#9B59B6",
                "🌨️": "#9B59B6",
                "🌩️": "#9B59B6",
                "🌪️": "#607D8B",
                "🌫️": "#9B59B6",
                "🌬️": "#9B59B6",
                "🌀": "#206694",
                "🌈": "#1ABC9C",
                "🌂": "#206694",
                "☂️": "#9B59B6",
                "☔": "#5865F2",
                "⛱️": "#F1C40F",
                "⚡": "#F1C40F",
                "❄️": "#3498DB",
                "☃️": "#9B59B6",
                "⛄": "#9B59B6",
                "☄️": "#E67E22",
                "🔥": "#E67E22",
                "💧": "#3498DB",
                "🌊": "#9B59B6",
                "🎃": "#E67E22",
                "🎄": "#11806A",
                "🎆": "#9B59B6",
                "🎇": "#992D22",
                "🧨": "#992D22",
                "✨": "#F1C40F",
                "🎈": "#E74C3C",
                "🎉": "#E67E22",
                "🎊": "#E67E22",
                "🎋": "#E67E22",
                "🎍": "#E67E22",
                "🎎": "#206694",
                "🎏": "#E67E22",
                "🎐": "#9B59B6",
                "🎑": "#11806A",
                "🧧": "#E74C3C",
                "🎀": "#9B59B6",
                "🎁": "#E67E22",
                "🎗️": "#F1C40F",
                "🎟️": "#E74C3C",
                "🎫": "#F1C40F",
                "🎖️": "#F1C40F",
                "🏆": "#E67E22",
                "🏅": "#F1C40F",
                "🥇": "#F1C40F",
                "🥈": "#9B59B6",
                "🥉": "#992D22",
                "⚽": "#9B59B6",
                "⚾": "#9B59B6",
                "🥎": "#F1C40F",
                "🏀": "#E67E22",
                "🏐": "#9B59B6",
                "🏈": "#E74C3C",
                "🏉": "#E67E22",
                "🎾": "#F1C40F",
                "🥏": "#3498DB",
                "🎳": "#9B59B6",
                "🏏": "#F1C40F",
                "🏑": "#9B59B6",
                "🏒": "#E67E22",
                "🥍": "#206694",
                "🏓": "#E74C3C",
                "🏸": "#E67E22",
                "🥊": "#E74C3C",
                "🥋": "#9B59B6",
                "🥅": "#992D22",
                "⛳": "#11806A",
                "⛸️": "#9B59B6",
                "🎣": "#607D8B",
                "🤿": "#11806A",
                "🎽": "#3498DB",
                "🎿": "#3498DB",
                "🛷": "#992D22",
                "🥌": "#11806A",
                "🎯": "#9B59B6",
                "🪀": "#11806A",
                "🪁": "#206694",
                "🎱": "#11806A",
                "🔮": "#9B59B6",
                "🪄": "#9B59B6",
                "🧿": "#206694",
                "🪬": "#206694",
                "🎮": "#11806A",
                "🕹️": "#11806A",
                "🎰": "#9B59B6",
                "🎲": "#9B59B6",
                "🧩": "#1ABC9C",
                "🧸": "#E67E22",
                "🪅": "#9B59B6",
                "🪩": "#9B59B6",
                "🪆": "#E67E22",
                "♠️": "#607D8B",
                "♥️": "#607D8B",
                "♦️": "#607D8B",
                "♣️": "#607D8B",
                "♟️": "#607D8B",
                "🃏": "#9B59B6",
                "🀄": "#9B59B6",
                "🎴": "#992D22",
                "🎭": "#992D22",
                "🖼️": "#F1C40F",
                "🎨": "#E67E22",
                "🧵": "#E67E22",
                "🪡": "#206694",
                "🧶": "#E67E22",
                "🪢": "#206694",
                "👓": "#9B59B6",
                "🕶️": "#607D8B",
                "🥽": "#9B59B6",
                "🥼": "#9B59B6",
                "🦺": "#E74C3C",
                "👔": "#3498DB",
                "👕": "#3498DB",
                "👖": "#206694",
                "🧣": "#992D22",
                "🧤": "#1ABC9C",
                "🧥": "#E67E22",
                "🧦": "#9B59B6",
                "👗": "#1ABC9C",
                "👘": "#E67E22",
                "🥻": "#E67E22",
                "🩱": "#11806A",
                "🩲": "#11806A",
                "🩳": "#E67E22",
                "👙": "#9B59B6",
                "👚": "#9B59B6",
                "👛": "#9B59B6",
                "👜": "#E74C3C",
                "👝": "#992D22",
                "🛍️": "#9B59B6",
                "🎒": "#E74C3C",
                "🩴": "#3498DB",
                "👞": "#992D22",
                "👟": "#9B59B6",
                "🥾": "#992D22",
                "🥿": "#206694",
                "👠": "#E74C3C",
                "👡": "#9B59B6",
                "🩰": "#9B59B6",
                "👢": "#E67E22",
                "👑": "#E67E22",
                "👒": "#E67E22",
                "🎩": "#11806A",
                "🎓": "#992D22",
                "🧢": "#3498DB",
                "🪖": "#11806A",
                "⛑️": "#992D22",
                "📿": "#992D22",
                "💄": "#E74C3C",
                "💍": "#9B59B6",
                "💎": "#3498DB",
                "🔇": "#11806A",
                "🔈": "#11806A",
                "🔉": "#607D8B",
                "🔊": "#11806A",
                "📢": "#9B59B6",
                "📣": "#992D22",
                "📯": "#E74C3C",
                "🔔": "#992D22",
                "🔕": "#992D22",
                "🎼": "#9B59B6",
                "🎵": "#11806A",
                "🎶": "#11806A",
                "🎙️": "#11806A",
                "🎚️": "#9B59B6",
                "🎛️": "#9B59B6",
                "🎤": "#9B59B6",
                "🎧": "#9B59B6",
                "📻": "#E67E22",
                "🎷": "#E67E22",
                "🪗": "#992D22",
                "🎸": "#E74C3C",
                "🎹": "#607D8B",
                "🎺": "#E67E22",
                "🎻": "#992D22",
                "🪕": "#9B59B6",
                "🥁": "#E74C3C",
                "🪘": "#992D22",
                "📱": "#607D8B",
                "📲": "#607D8B",
                "☎️": "#E74C3C",
                "📞": "#11806A",
                "📟": "#11806A",
                "📠": "#9B59B6",
                "🔋": "#11806A",
                "🪫": "#9B59B6",
                "🔌": "#11806A",
                "💻": "#607D8B",
                "🖥️": "#11806A",
                "🖨️": "#607D8B",
                "⌨️": "#9B59B6",
                "🖱️": "#9B59B6",
                "🖲️": "#11806A",
                "💽": "#9B59B6",
                "💾": "#11806A",
                "💿": "#9B59B6",
                "📀": "#9B59B6",
                "🧮": "#992D22",
                "🎥": "#11806A",
                "🎞️": "#9B59B6",
                "📽️": "#206694",
                "🎬": "#11806A",
                "📺": "#992D22",
                "📷": "#11806A",
                "📸": "#11806A",
                "📹": "#607D8B",
                "📼": "#11806A",
                "🔍": "#11806A",
                "🔎": "#11806A",
                "🕯️": "#9B59B6",
                "💡": "#9B59B6",
                "🔦": "#607D8B",
                "🏮": "#E74C3C",
                "🪔": "#992D22",
                "📔": "#F1C40F",
                "📕": "#992D22",
                "📖": "#206694",
                "📗": "#E67E22",
                "📘": "#206694",
                "📙": "#E67E22",
                "📚": "#11806A",
                "📓": "#9B59B6",
                "📒": "#F1C40F",
                "📃": "#9B59B6",
                "📜": "#9B59B6",
                "📄": "#9B59B6",
                "📰": "#9B59B6",
                "🗞️": "#9B59B6",
                "📑": "#9B59B6",
                "🔖": "#9B59B6",
                "🏷️": "#F1C40F",
                "💰": "#E67E22",
                "🪙": "#206694",
                "💴": "#9B59B6",
                "💵": "#9B59B6",
                "💶": "#9B59B6",
                "💷": "#9B59B6",
                "💸": "#9B59B6",
                "💳": "#9B59B6",
                "🧾": "#9B59B6",
                "💹": "#9B59B6",
                "✉️": "#9B59B6",
                "📧": "#9B59B6",
                "📨": "#9B59B6",
                "📩": "#9B59B6",
                "📤": "#3498DB",
                "📥": "#3498DB",
                "📦": "#E67E22",
                "📫": "#206694",
                "📪": "#3498DB",
                "📬": "#607D8B",
                "📭": "#11806A",
                "📮": "#E74C3C",
                "🗳️": "#3498DB",
                "✏️": "#E67E22",
                "✒️": "#11806A",
                "🖋️": "#11806A",
                "🖊️": "#11806A",
                "🖌️": "#206694",
                "🖍️": "#E74C3C",
                "📝": "#9B59B6",
                "💼": "#992D22",
                "📁": "#9B59B6",
                "📂": "#9B59B6",
                "🗂️": "#E67E22",
                "📅": "#E74C3C",
                "📆": "#9B59B6",
                "🗒️": "#9B59B6",
                "🗓️": "#9B59B6",
                "📇": "#9B59B6",
                "📈": "#9B59B6",
                "📉": "#9B59B6",
                "📊": "#9B59B6",
                "📋": "#9B59B6",
                "📌": "#E74C3C",
                "📍": "#E74C3C",
                "📎": "#9B59B6",
                "🖇️": "#9B59B6",
                "📏": "#9B59B6",
                "📐": "#9B59B6",
                "✂️": "#9B59B6",
                "🗃️": "#11806A",
                "🗄️": "#206694",
                "🗑️": "#9B59B6",
                "🔒": "#E67E22",
                "🔓": "#E67E22",
                "🔏": "#9B59B6",
                "🔐": "#E67E22",
                "🔑": "#F1C40F",
                "🗝️": "#11806A",
                "🔨": "#9B59B6",
                "🪓": "#992D22",
                "⛏️": "#9B59B6",
                "⚒️": "#11806A",
                "🛠️": "#11806A",
                "🗡️": "#9B59B6",
                "⚔️": "#11806A",
                "🔫": "#1ABC9C",
                "🪃": "#E74C3C",
                "🏹": "#9B59B6",
                "🛡️": "#9B59B6",
                "🪚": "#9B59B6",
                "🔧": "#206694",
                "🪛": "#1ABC9C",
                "🔩": "#9B59B6",
                "⚙️": "#9B59B6",
                "🗜️": "#607D8B",
                "⚖️": "#607D8B",
                "🦯": "#9B59B6",
                "🔗": "#206694",
                "⛓️": "#9B59B6",
                "🪝": "#E67E22",
                "🧰": "#E74C3C",
                "🧲": "#E74C3C",
                "🪜": "#992D22",
                "⚗️": "#9B59B6",
                "🧪": "#11806A",
                "🧫": "#9B59B6",
                "🧬": "#3498DB",
                "🔬": "#9B59B6",
                "🔭": "#9B59B6",
                "📡": "#9B59B6",
                "💉": "#9B59B6",
                "🩸": "#E74C3C",
                "💊": "#F1C40F",
                "🩹": "#9B59B6",
                "🩼": "#9B59B6",
                "🩺": "#11806A",
                "🩻": "#3498DB",
                "🚪": "#992D22",
                "🛗": "#3498DB",
                "🪞": "#E67E22",
                "🪟": "#992D22",
                "🛏️": "#992D22",
                "🛋️": "#3498DB",
                "🪑": "#E74C3C",
                "🚽": "#9B59B6",
                "🪠": "#E74C3C",
                "🚿": "#9B59B6",
                "🛁": "#9B59B6",
                "🪤": "#F1C40F",
                "🪒": "#9B59B6",
                "🧴": "#9B59B6",
                "🧷": "#9B59B6",
                "🧹": "#992D22",
                "🧺": "#992D22",
                "🧻": "#9B59B6",
                "🪣": "#206694",
                "🧼": "#1ABC9C",
                "🫧": "#9B59B6",
                "🪥": "#9B59B6",
                "🧽": "#F1C40F",
                "🧯": "#E74C3C",
                "🛒": "#9B59B6",
                "🚬": "#9B59B6",
                "⚰️": "#992D22",
                "🪦": "#9B59B6",
                "⚱️": "#E67E22",
                "🗿": "#206694",
                "🪧": "#9B59B6",
                "🪪": "#9B59B6",
                "🏧": "#3498DB",
                "🚮": "#9B59B6",
                "🚰": "#9B59B6",
                "♿": "#9B59B6",
                "🚹": "#3498DB",
                "🚺": "#9B59B6",
                "🚻": "#607D8B",
                "🚼": "#E67E22",
                "🚾": "#9B59B6",
                "🛂": "#9B59B6",
                "🛃": "#9B59B6",
                "🛄": "#9B59B6",
                "🛅": "#9B59B6",
                "⚠️": "#F1C40F",
                "🚸": "#F1C40F",
                "⛔": "#9B59B6",
                "🚫": "#E74C3C",
                "🚳": "#11806A",
                "🚭": "#E74C3C",
                "🚯": "#E74C3C",
                "🚱": "#E74C3C",
                "🚷": "#E74C3C",
                "📵": "#E74C3C",
                "🔞": "#607D8B",
                "☢️": "#E67E22",
                "☣️": "#E67E22",
                "⬆️": "#607D8B",
                "↗️": "#607D8B",
                "➡️": "#607D8B",
                "↘️": "#607D8B",
                "⬇️": "#607D8B",
                "↙️": "#607D8B",
                "⬅️": "#607D8B",
                "↖️": "#607D8B",
                "↕️": "#607D8B",
                "↔️": "#607D8B",
                "↩️": "#607D8B",
                "↪️": "#607D8B",
                "⤴️": "#607D8B",
                "⤵️": "#607D8B",
                "🔃": "#607D8B",
                "🔄": "#607D8B",
                "🔙": "#11806A",
                "🔚": "#11806A",
                "🔛": "#11806A",
                "🔜": "#206694",
                "🔝": "#11806A",
                "🛐": "#9B59B6",
                "⚛️": "#9B59B6",
                "🕉️": "#9B59B6",
                "✡️": "#9B59B6",
                "☸️": "#9B59B6",
                "☯️": "#9B59B6",
                "✝️": "#9B59B6",
                "☦️": "#9B59B6",
                "☪️": "#9B59B6",
                "☮️": "#9B59B6",
                "🕎": "#9B59B6",
                "🔯": "#9B59B6",
                "♈": "#9B59B6",
                "♉": "#9B59B6",
                "♊": "#9B59B6",
                "♋": "#9B59B6",
                "♌": "#9B59B6",
                "♍": "#9B59B6",
                "♎": "#9B59B6",
                "♏": "#9B59B6",
                "♐": "#9B59B6",
                "♑": "#9B59B6",
                "♒": "#9B59B6",
                "♓": "#9B59B6",
                "⛎": "#9B59B6",
                "🔀": "#607D8B",
                "🔁": "#607D8B",
                "🔂": "#607D8B",
                "▶️": "#607D8B",
                "⏩": "#607D8B",
                "⏭️": "#607D8B",
                "⏯️": "#607D8B",
                "◀️": "#607D8B",
                "⏪": "#607D8B",
                "⏮️": "#607D8B",
                "🔼": "#607D8B",
                "⏫": "#607D8B",
                "🔽": "#607D8B",
                "⏬": "#607D8B",
                "⏸️": "#607D8B",
                "⏹️": "#607D8B",
                "⏺️": "#607D8B",
                "⏏️": "#607D8B",
                "🎦": "#607D8B",
                "🔅": "#F1C40F",
                "🔆": "#F1C40F",
                "📶": "#9B59B6",
                "📳": "#F1C40F",
                "📴": "#9B59B6",
                "♀️": "#607D8B",
                "♂️": "#607D8B",
                "⚧️": "#607D8B",
                "✖️": "#11806A",
                "➕": "#11806A",
                "➖": "#11806A",
                "➗": "#11806A",
                "🟰": "#9B59B6",
                "♾️": "#607D8B",
                "‼️": "#607D8B",
                "⁉️": "#E74C3C",
                "❓": "#992D22",
                "❔": "#9B59B6",
                "❕": "#9B59B6",
                "❗": "#992D22",
                "〰️": "#11806A",
                "💱": "#206694",
                "💲": "#206694",
                "⚕️": "#607D8B",
                "♻️": "#11806A",
                "⚜️": "#992D22",
                "🔱": "#E67E22",
                "📛": "#9B59B6",
                "🔰": "#F1C40F",
                "⭕": "#992D22",
                "✅": "#11806A",
                "☑️": "#206694",
                "✔️": "#11806A",
                "❌": "#E74C3C",
                "❎": "#11806A",
                "➰": "#11806A",
                "➿": "#206694",
                "〽️": "#F1C40F",
                "✳️": "#11806A",
                "✴️": "#9B59B6",
                "❇️": "#11806A",
                "©️": "#607D8B",
                "®️": "#607D8B",
                "™️": "#607D8B",
                "#️⃣": "#607D8B",
                "*️⃣": "#607D8B",
                "0️⃣": "#607D8B",
                "1️⃣": "#607D8B",
                "2️⃣": "#607D8B",
                "3️⃣": "#607D8B",
                "4️⃣": "#607D8B",
                "5️⃣": "#607D8B",
                "6️⃣": "#607D8B",
                "7️⃣": "#607D8B",
                "8️⃣": "#607D8B",
                "9️⃣": "#607D8B",
                "🔟": "#607D8B",
                "🔠": "#607D8B",
                "🔡": "#607D8B",
                "🔢": "#607D8B",
                "🔣": "#607D8B",
                "🔤": "#607D8B",
                "🅰️": "#E74C3C",
                "🆎": "#E74C3C",
                "🅱️": "#9B59B6",
                "🆑": "#E74C3C",
                "🆒": "#607D8B",
                "🆓": "#607D8B",
                ℹ️: "#9B59B6",
                "🆔": "#9B59B6",
                "Ⓜ️": "#9B59B6",
                "🆕": "#607D8B",
                "🆖": "#607D8B",
                "🅾️": "#E74C3C",
                "🆗": "#607D8B",
                "🅿️": "#3498DB",
                "🆘": "#9B59B6",
                "🆙": "#607D8B",
                "🆚": "#9B59B6",
                "🈁": "#607D8B",
                "🈂️": "#3498DB",
                "🈷️": "#9B59B6",
                "🈶": "#9B59B6",
                "🈯": "#9B59B6",
                "🉐": "#9B59B6",
                "🈹": "#9B59B6",
                "🈚": "#9B59B6",
                "🈲": "#9B59B6",
                "🉑": "#9B59B6",
                "🈸": "#9B59B6",
                "🈴": "#E74C3C",
                "🈳": "#9B59B6",
                "㊗️": "#9B59B6",
                "㊙️": "#9B59B6",
                "🈺": "#9B59B6",
                "🈵": "#9B59B6",
                "🔴": "#992D22",
                "🟠": "#F1C40F",
                "🟡": "#F1C40F",
                "🟢": "#11806A",
                "🔵": "#206694",
                "🟣": "#9B59B6",
                "🟤": "#992D22",
                "⚫": "#607D8B",
                "⚪": "#9B59B6",
                "🟥": "#E74C3C",
                "🟧": "#E67E22",
                "🟨": "#F1C40F",
                "🟩": "#11806A",
                "🟦": "#3498DB",
                "🟪": "#9B59B6",
                "🟫": "#9B59B6",
                "⬛": "#11806A",
                "⬜": "#9B59B6",
                "◼️": "#607D8B",
                "◻️": "#9B59B6",
                "◾": "#607D8B",
                "◽": "#9B59B6",
                "▪️": "#607D8B",
                "▫️": "#607D8B",
                "🔶": "#F1C40F",
                "🔷": "#206694",
                "🔸": "#E67E22",
                "🔹": "#206694",
                "🔺": "#E74C3C",
                "🔻": "#E74C3C",
                "💠": "#3498DB",
                "🔘": "#206694",
                "🔳": "#9B59B6",
                "🔲": "#607D8B",
                "🏁": "#9B59B6",
                "🚩": "#992D22",
                "🎌": "#9B59B6",
                "🏴": "#11806A",
                "🏳️": "#9B59B6",
                "🏳️‍🌈": "#E67E22",
                "🏳️‍⚧️": "#9B59B6",
                "🏴‍☠️": "#11806A",
                "🇦🇨": "#206694",
                "🇦🇩": "#206694",
                "🇦🇪": "#E74C3C",
                "🇦🇫": "#E74C3C",
                "🇦🇬": "#992D22",
                "🇦🇮": "#206694",
                "🇦🇱": "#992D22",
                "🇦🇲": "#E74C3C",
                "🇦🇴": "#607D8B",
                "🇦🇶": "#206694",
                "🇦🇷": "#3498DB",
                "🇦🇸": "#9B59B6",
                "🇦🇹": "#9B59B6",
                "🇦🇺": "#206694",
                "🇦🇼": "#3498DB",
                "🇦🇽": "#206694",
                "🇦🇿": "#E91E63",
                "🇧🇦": "#F1C40F",
                "🇧🇧": "#206694",
                "🇧🇩": "#E74C3C",
                "🇧🇪": "#F1C40F",
                "🇧🇫": "#11806A",
                "🇧🇬": "#992D22",
                "🇧🇭": "#9B59B6",
                "🇧🇮": "#11806A",
                "🇧🇯": "#E74C3C",
                "🇧🇱": "#9B59B6",
                "🇧🇲": "#992D22",
                "🇧🇳": "#F1C40F",
                "🇧🇴": "#11806A",
                "🇧🇶": "#206694",
                "🇧🇷": "#F1C40F",
                "🇧🇸": "#3498DB",
                "🇧🇹": "#E67E22",
                "🇧🇻": "#E74C3C",
                "🇧🇼": "#3498DB",
                "🇧🇾": "#11806A",
                "🇧🇿": "#206694",
                "🇨🇦": "#992D22",
                "🇨🇨": "#11806A",
                "🇨🇩": "#E74C3C",
                "🇨🇫": "#11806A",
                "🇨🇬": "#F1C40F",
                "🇨🇭": "#9B59B6",
                "🇨🇮": "#E67E22",
                "🇨🇰": "#206694",
                "🇨🇱": "#E74C3C",
                "🇨🇲": "#E74C3C",
                "🇨🇳": "#992D22",
                "🇨🇴": "#206694",
                "🇨🇵": "#206694",
                "🇨🇷": "#206694",
                "🇨🇺": "#206694",
                "🇨🇻": "#206694",
                "🇨🇼": "#206694",
                "🇨🇽": "#11806A",
                "🇨🇾": "#9B59B6",
                "🇨🇿": "#992D22",
                "🇩🇪": "#E74C3C",
                "🇩🇬": "#9B59B6",
                "🇩🇯": "#11806A",
                "🇩🇰": "#992D22",
                "🇩🇲": "#E67E22",
                "🇩🇴": "#206694",
                "🇩🇿": "#11806A",
                "🇪🇦": "#F1C40F",
                "🇪🇨": "#F1C40F",
                "🇪🇪": "#9B59B6",
                "🇪🇬": "#9B59B6",
                "🇪🇭": "#9B59B6",
                "🇪🇷": "#11806A",
                "🇪🇸": "#F1C40F",
                "🇪🇹": "#11806A",
                "🇪🇺": "#206694",
                "🇫🇮": "#206694",
                "🇫🇯": "#3498DB",
                "🇫🇰": "#206694",
                "🇫🇲": "#3498DB",
                "🇫🇴": "#3498DB",
                "🇫🇷": "#206694",
                "🇬🇦": "#11806A",
                "🇬🇧": "#206694",
                "🇬🇩": "#11806A",
                "🇬🇪": "#E74C3C",
                "🇬🇫": "#11806A",
                "🇬🇬": "#9B59B6",
                "🇬🇭": "#11806A",
                "🇬🇮": "#9B59B6",
                "🇬🇱": "#992D22",
                "🇬🇲": "#11806A",
                "🇬🇳": "#F1C40F",
                "🇬🇵": "#F1C40F",
                "🇬🇶": "#11806A",
                "🇬🇷": "#9B59B6",
                "🇬🇸": "#206694",
                "🇬🇹": "#3498DB",
                "🇬🇺": "#206694",
                "🇬🇼": "#F1C40F",
                "🇬🇾": "#E67E22",
                "🇭🇰": "#992D22",
                "🇭🇲": "#206694",
                "🇭🇳": "#9B59B6",
                "🇭🇷": "#206694",
                "🇭🇹": "#E91E63",
                "🇭🇺": "#11806A",
                "🇮🇨": "#206694",
                "🇮🇩": "#992D22",
                "🇮🇪": "#11806A",
                "🇮🇱": "#206694",
                "🇮🇲": "#992D22",
                "🇮🇳": "#9B59B6",
                "🇮🇴": "#9B59B6",
                "🇮🇶": "#607D8B",
                "🇮🇷": "#992D22",
                "🇮🇸": "#9B59B6",
                "🇮🇹": "#992D22",
                "🇯🇪": "#9B59B6",
                "🇯🇲": "#11806A",
                "🇯🇴": "#E74C3C",
                "🇯🇵": "#9B59B6",
                "🇰🇪": "#E74C3C",
                "🇰🇬": "#E74C3C",
                "🇰🇭": "#992D22",
                "🇰🇮": "#E74C3C",
                "🇰🇲": "#11806A",
                "🇰🇳": "#E74C3C",
                "🇰🇵": "#206694",
                "🇰🇷": "#9B59B6",
                "🇰🇼": "#1ABC9C",
                "🇰🇾": "#206694",
                "🇰🇿": "#1ABC9C",
                "🇱🇦": "#E74C3C",
                "🇱🇧": "#9B59B6",
                "🇱🇨": "#3498DB",
                "🇱🇮": "#206694",
                "🇱🇰": "#E74C3C",
                "🇱🇷": "#E74C3C",
                "🇱🇸": "#9B59B6",
                "🇱🇹": "#11806A",
                "🇱🇺": "#E74C3C",
                "🇱🇻": "#992D22",
                "🇱🇾": "#E74C3C",
                "🇲🇦": "#992D22",
                "🇲🇨": "#9B59B6",
                "🇲🇩": "#206694",
                "🇲🇪": "#992D22",
                "🇲🇫": "#206694",
                "🇲🇬": "#E74C3C",
                "🇲🇭": "#206694",
                "🇲🇰": "#992D22",
                "🇲🇱": "#F1C40F",
                "🇲🇲": "#F1C40F",
                "🇲🇳": "#206694",
                "🇲🇴": "#11806A",
                "🇲🇵": "#9B59B6",
                "🇲🇶": "#206694",
                "🇲🇷": "#E74C3C",
                "🇲🇸": "#206694",
                "🇲🇹": "#9B59B6",
                "🇲🇺": "#E74C3C",
                "🇲🇻": "#11806A",
                "🇲🇼": "#992D22",
                "🇲🇽": "#9B59B6",
                "🇲🇾": "#9B59B6",
                "🇲🇿": "#E67E22",
                "🇳🇦": "#E74C3C",
                "🇳🇨": "#E67E22",
                "🇳🇪": "#11806A",
                "🇳🇫": "#9B59B6",
                "🇳🇬": "#9B59B6",
                "🇳🇮": "#5865F2",
                "🇳🇱": "#206694",
                "🇳🇴": "#E74C3C",
                "🇳🇵": "#992D22",
                "🇳🇷": "#206694",
                "🇳🇺": "#F1C40F",
                "🇳🇿": "#206694",
                "🇴🇲": "#11806A",
                "🇵🇦": "#206694",
                "🇵🇪": "#9B59B6",
                "🇵🇫": "#992D22",
                "🇵🇬": "#E74C3C",
                "🇵🇭": "#992D22",
                "🇵🇰": "#11806A",
                "🇵🇱": "#E74C3C",
                "🇵🇲": "#206694",
                "🇵🇳": "#206694",
                "🇵🇷": "#992D22",
                "🇵🇸": "#9B59B6",
                "🇵🇹": "#E74C3C",
                "🇵🇼": "#F1C40F",
                "🇵🇾": "#9B59B6",
                "🇶🇦": "#9B59B6",
                "🇷🇪": "#E74C3C",
                "🇷🇴": "#F1C40F",
                "🇷🇸": "#206694",
                "🇷🇺": "#992D22",
                "🇷🇼": "#F1C40F",
                "🇸🇦": "#11806A",
                "🇸🇧": "#11806A",
                "🇸🇨": "#11806A",
                "🇸🇩": "#9B59B6",
                "🇸🇪": "#F1C40F",
                "🇸🇬": "#E74C3C",
                "🇸🇭": "#206694",
                "🇸🇮": "#E74C3C",
                "🇸🇯": "#E74C3C",
                "🇸🇰": "#992D22",
                "🇸🇱": "#9B59B6",
                "🇸🇲": "#9B59B6",
                "🇸🇳": "#F1C40F",
                "🇸🇴": "#3498DB",
                "🇸🇷": "#11806A",
                "🇸🇸": "#E74C3C",
                "🇸🇹": "#E67E22",
                "🇸🇻": "#9B59B6",
                "🇸🇽": "#E74C3C",
                "🇸🇾": "#992D22",
                "🇸🇿": "#992D22",
                "🇹🇦": "#206694",
                "🇹🇨": "#206694",
                "🇹🇩": "#F1C40F",
                "🇹🇫": "#206694",
                "🇹🇬": "#11806A",
                "🇹🇭": "#992D22",
                "🇹🇯": "#E91E63",
                "🇹🇰": "#F1C40F",
                "🇹🇱": "#E74C3C",
                "🇹🇲": "#11806A",
                "🇹🇳": "#992D22",
                "🇹🇴": "#992D22",
                "🇹🇷": "#E74C3C",
                "🇹🇹": "#992D22",
                "🇹🇻": "#607D8B",
                "🇹🇼": "#3498DB",
                "🇹🇿": "#11806A",
                "🇺🇦": "#F1C40F",
                "🇺🇬": "#607D8B",
                "🇺🇲": "#E74C3C",
                "🇺🇳": "#3498DB",
                "🇺🇸": "#E74C3C",
                "🇺🇾": "#9B59B6",
                "🇺🇿": "#1ABC9C",
                "🇻🇦": "#9B59B6",
                "🇻🇨": "#F1C40F",
                "🇻🇪": "#206694",
                "🇻🇬": "#206694",
                "🇻🇮": "#9B59B6",
                "🇻🇳": "#992D22",
                "🇻🇺": "#11806A",
                "🇼🇫": "#E74C3C",
                "🇼🇸": "#E74C3C",
                "🇽🇰": "#206694",
                "🇾🇪": "#E74C3C",
                "🇾🇹": "#9B59B6",
                "🇿🇦": "#E67E22",
                "🇿🇲": "#11806A",
                "🇿🇼": "#11806A",
                "🏴󠁧󠁢󠁥󠁮󠁧󠁿": "#992D22",
                "🏴󠁧󠁢󠁳󠁣󠁴󠁿": "#206694",
                "🏴󠁧󠁢󠁷󠁬󠁳󠁿": "#11806A"
            });
            var F = "💬",
                u = "#607D8B";

            function a(B, e, t) {
                e in B ? Object.defineProperty(B, e, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : B[e] = t;
                return B
            }

            function c(B) {
                for (var e = 1; e < arguments.length; e++) {
                    var t = null != arguments[e] ? arguments[e] : {},
                        n = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter((function(B) {
                        return Object.getOwnPropertyDescriptor(t, B).enumerable
                    }))));
                    n.forEach((function(e) {
                        a(B, e, t[e])
                    }))
                }
                return B
            }

            function D(B, e) {
                e = null != e ? e : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(B, Object.getOwnPropertyDescriptors(e)) : function(B, e) {
                    var t = Object.keys(B);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(B);
                        e && (n = n.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(B, e).enumerable
                        })));
                        t.push.apply(t, n)
                    }
                    return t
                }(Object(e)).forEach((function(t) {
                    Object.defineProperty(B, t, Object.getOwnPropertyDescriptor(e, t))
                }));
                return B
            }

            function s(B) {
                return "#" + B.toString(16).toUpperCase()
            }

            function d(B) {
                var e, t, r, o, i, E, C, F = (0, n.e7)([l.Z], (function() {
                        var e, t, n, r = null === (e = l.Z.settings.guilds) || void 0 === e ? void 0 : e.guilds;
                        return null != B ? null == r || null === (t = r[B.guild_id]) || void 0 === t || null === (n = t.channels) || void 0 === n ? void 0 : n[B.id] : null
                    })),
                    u = null == F ? void 0 : F.iconEmoji;
                return {
                    emoji: null != (null == u || null === (e = u.id) || void 0 === e ? void 0 : e.value) || null != (null == u || null === (t = u.name) || void 0 === t ? void 0 : t.value) ? {
                        id: null !== (E = null == u || null === (r = u.id) || void 0 === r ? void 0 : r.value) && void 0 !== E ? E : null,
                        name: null !== (C = null == u || null === (o = u.name) || void 0 === o ? void 0 : o.value) && void 0 !== C ? C : null
                    } : null,
                    color: null != (null == u || null === (i = u.color) || void 0 === i ? void 0 : i.value) ? s(Number(u.color.value)) : null
                }
            }

            function f(B) {
                var e, t, n, r = null !== (e = null == B ? void 0 : B.iconEmoji) && void 0 !== e ? e : null;
                return {
                    emoji: null != r ? {
                        id: null !== (t = r.id) && void 0 !== t ? t : null,
                        name: null !== (n = r.name) && void 0 !== n ? n : null
                    } : null,
                    color: null != (null == B ? void 0 : B.themeColor) ? s(B.themeColor) : null
                }
            }

            function A() {
                return "dark" === (0, r.TC)().theme ? .2 : .16
            }

            function p(B) {
                var e, t, r = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                    l = (0, o.Z)("user_channel_emoji_overrides"),
                    a = d(B),
                    s = a.emoji,
                    p = a.color,
                    m = f(B),
                    v = m.emoji,
                    h = m.color,
                    y = A();
                if (null != (null == s ? void 0 : s.name) && l) {
                    var b, j, g, O = null !== (b = null != p ? p : null == (null == s ? void 0 : s.id) ? C[s.name] : null) && void 0 !== b ? b : u;
                    e = {
                        id: null !== (j = null == s ? void 0 : s.id) && void 0 !== j ? j : null,
                        name: null !== (g = null == s ? void 0 : s.name) && void 0 !== g ? g : F,
                        url: void 0
                    };
                    t = r ? (0, E.Cj)(O, y) : O
                } else {
                    var T, N, _, w = null !== (T = null != h ? h : null != (null == v ? void 0 : v.name) && null == (null == v ? void 0 : v.id) ? C[v.name] : null) && void 0 !== T ? T : u;
                    e = {
                        id: null !== (N = null == v ? void 0 : v.id) && void 0 !== N ? N : null,
                        name: null !== (_ = null == v ? void 0 : v.name) && void 0 !== _ ? _ : F,
                        url: void 0
                    };
                    t = r ? (0, E.Cj)(w, y) : w
                }
                var S = (0, n.e7)([i.Z], (function() {
                    return null != e.id ? i.Z.getUsableCustomEmojiById(e.id) : null
                }));
                return {
                    emoji: null != e.id && null != S ? D(c({}, e), {
                        url: S.url
                    }) : e,
                    color: t
                }
            }
        },
        327860: (B, e, t) => {
            t.d(e, {
                OZ: () => N,
                ZP: () => _,
                ox: () => T
            });
            var n = t(785893),
                r = t(667294),
                o = t(294184),
                i = t.n(o),
                l = t(575945),
                E = t(70418),
                C = t(107364),
                F = t(2590),
                u = t(643193),
                a = t.n(u),
                c = t(380203),
                D = t.n(c);

            function s(B, e) {
                if (!(B instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function d(B, e, t) {
                e in B ? Object.defineProperty(B, e, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : B[e] = t;
                return B
            }

            function f(B) {
                f = Object.setPrototypeOf ? Object.getPrototypeOf : function(B) {
                    return B.__proto__ || Object.getPrototypeOf(B)
                };
                return f(B)
            }

            function A(B, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                B.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: B,
                        writable: !0,
                        configurable: !0
                    }
                });
                e && h(B, e)
            }

            function p(B) {
                for (var e = 1; e < arguments.length; e++) {
                    var t = null != arguments[e] ? arguments[e] : {},
                        n = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter((function(B) {
                        return Object.getOwnPropertyDescriptor(t, B).enumerable
                    }))));
                    n.forEach((function(e) {
                        d(B, e, t[e])
                    }))
                }
                return B
            }

            function m(B, e) {
                e = null != e ? e : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(B, Object.getOwnPropertyDescriptors(e)) : function(B, e) {
                    var t = Object.keys(B);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(B);
                        e && (n = n.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(B, e).enumerable
                        })));
                        t.push.apply(t, n)
                    }
                    return t
                }(Object(e)).forEach((function(t) {
                    Object.defineProperty(B, t, Object.getOwnPropertyDescriptor(e, t))
                }));
                return B
            }

            function v(B, e) {
                return !e || "object" !== y(e) && "function" != typeof e ? function(B) {
                    if (void 0 === B) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return B
                }(B) : e
            }

            function h(B, e) {
                h = Object.setPrototypeOf || function(B, e) {
                    B.__proto__ = e;
                    return B
                };
                return h(B, e)
            }
            var y = function(B) {
                return B && "undefined" != typeof Symbol && B.constructor === Symbol ? "symbol" : typeof B
            };

            function b(B) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (B) {
                        return !1
                    }
                }();
                return function() {
                    var t, n = f(B);
                    if (e) {
                        var r = f(this).constructor;
                        t = Reflect.construct(n, arguments, r)
                    } else t = n.apply(this, arguments);
                    return v(this, t)
                }
            }
            var j = r.createContext(F.BRd.DARK),
                g = j.Provider,
                O = j.Consumer,
                T = function(B) {
                    A(t, B);
                    var e = b(t);

                    function t() {
                        s(this, t);
                        return e.apply(this, arguments)
                    }
                    t.prototype.render = function() {
                        var B = this.props,
                            e = B.lightSrc,
                            t = B.darkSrc,
                            r = B.width,
                            o = B.height,
                            E = B.offsetX,
                            F = B.offsetY,
                            u = B.style;
                        return (0, n.jsx)(O, {
                            children: function(B) {
                                return (0, n.jsx)(C.Z.Child, {
                                    grow: 0,
                                    className: i()(a().image, D().marginBottom40),
                                    style: m(p({}, u), {
                                        width: r,
                                        height: o,
                                        marginLeft: E,
                                        marginTop: F,
                                        backgroundImage: "url(".concat((0, l.wj)(B) ? t : e, ")")
                                    })
                                })
                            }
                        })
                    };
                    return t
                }(r.PureComponent),
                N = function(B) {
                    var e = B.children,
                        t = B.className,
                        r = B.noteClassName,
                        o = B.note,
                        l = B.style;
                    return (0, n.jsxs)(C.Z.Child, {
                        grow: 0,
                        direction: C.Z.Direction.VERTICAL,
                        style: l,
                        children: [null != e && (0, n.jsx)(E.H, {
                            className: i()(t, a().title),
                            children: e
                        }), null != o ? (0, n.jsx)("div", {
                            className: i()(r, a().text, D().marginTop8),
                            children: o
                        }) : null]
                    })
                },
                _ = function(B) {
                    A(t, B);
                    var e = b(t);

                    function t() {
                        s(this, t);
                        return e.apply(this, arguments)
                    }
                    t.prototype.render = function() {
                        var B = this.props,
                            e = B.children,
                            t = B.theme,
                            r = B.className,
                            o = B.style;
                        return (0, n.jsx)(g, {
                            value: t,
                            children: (0, n.jsx)(C.Z, {
                                direction: C.Z.Direction.VERTICAL,
                                align: C.Z.Align.CENTER,
                                justify: C.Z.Justify.CENTER,
                                className: i()(a().wrapper, r),
                                style: o,
                                children: e
                            })
                        })
                    };
                    return t
                }(r.PureComponent);
            _.Text = N;
            _.Image = T
        }
    }
]);