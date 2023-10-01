"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [75442], {
        87127: (e, B, t) => {
            t.d(B, {
                S1: () => c,
                xv: () => s,
                zc: () => D,
                pW: () => d,
                wk: () => f,
                zz: () => A,
                ZP: () => m
            });
            var n = t(281110),
                r = t(744564),
                o = t(10390),
                l = t(671293),
                i = t(61209),
                E = t(735885),
                C = t(2590);

            function u(e, B, t, n, r, o, l) {
                try {
                    var i = e[o](l),
                        E = i.value
                } catch (e) {
                    t(e);
                    return
                }
                i.done ? B(E) : Promise.resolve(E).then(n, r)
            }

            function F(e) {
                return function() {
                    var B = this,
                        t = arguments;
                    return new Promise((function(n, r) {
                        var o = e.apply(B, t);

                        function l(e) {
                            u(o, n, r, l, i, "next", e)
                        }

                        function i(e) {
                            u(o, n, r, l, i, "throw", e)
                        }
                        l(void 0)
                    }))
                }
            }
            var a = function(e, B) {
                var t, n, r, o, l = {
                    label: 0,
                    sent: function() {
                        if (1 & r[0]) throw r[1];
                        return r[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: i(0),
                    throw: i(1),
                    return: i(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function i(o) {
                    return function(i) {
                        return function(o) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; l;) try {
                                if (t = 1, n && (r = 2 & o[0] ? n.return : o[0] ? n.throw || ((r = n.return) && r.call(n),
                                        0) : n.next) && !(r = r.call(n, o[1])).done) return r;
                                (n = 0, r) && (o = [2 & o[0], r.value]);
                                switch (o[0]) {
                                    case 0:
                                    case 1:
                                        r = o;
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
                                        if (!(r = l.trys, r = r.length > 0 && r[r.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            l = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                            l.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && l.label < r[1]) {
                                            l.label = r[1];
                                            r = o;
                                            break
                                        }
                                        if (r && l.label < r[2]) {
                                            l.label = r[2];
                                            l.ops.push(o);
                                            break
                                        }
                                        r[2] && l.ops.pop();
                                        l.trys.pop();
                                        continue
                                }
                                o = B.call(e, l)
                            } catch (e) {
                                o = [6, e];
                                n = 0
                            } finally {
                                t = r = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, i])
                    }
                }
            };

            function c(e, B, t) {
                r.Z.dispatch({
                    type: "CHANNEL_SETTINGS_INIT",
                    channelId: e,
                    location: B,
                    subsection: t
                })
            }

            function s() {
                r.Z.dispatch({
                    type: "CHANNEL_SETTINGS_CLOSE"
                })
            }

            function D(e) {
                r.Z.dispatch({
                    type: "CHANNEL_SETTINGS_SET_SECTION",
                    section: e
                })
            }

            function d(e) {
                var B = e.name,
                    t = e.type,
                    n = e.topic,
                    o = e.bitrate,
                    l = e.userLimit,
                    i = e.nsfw,
                    E = e.flags,
                    C = e.rateLimitPerUser,
                    u = e.defaultThreadRateLimitPerUser,
                    F = e.defaultAutoArchiveDuration,
                    a = e.template,
                    c = e.defaultReactionEmoji,
                    s = e.rtcRegion,
                    D = e.videoQualityMode,
                    d = e.autoArchiveDuration,
                    f = e.locked,
                    p = e.invitable,
                    A = e.availableTags,
                    m = e.defaultSortOrder,
                    v = e.defaultForumLayout,
                    y = e.iconEmoji,
                    h = e.themeColor;
                r.Z.dispatch({
                    type: "CHANNEL_SETTINGS_UPDATE",
                    name: B,
                    channelType: t,
                    topic: n,
                    bitrate: o,
                    userLimit: l,
                    nsfw: i,
                    flags: E,
                    rateLimitPerUser: C,
                    defaultThreadRateLimitPerUser: u,
                    defaultAutoArchiveDuration: F,
                    template: a,
                    defaultReactionEmoji: c,
                    rtcRegion: s,
                    videoQualityMode: D,
                    autoArchiveDuration: d,
                    locked: f,
                    invitable: p,
                    availableTags: A,
                    defaultSortOrder: m,
                    defaultForumLayout: v,
                    iconEmoji: y,
                    themeColor: h
                })
            }

            function f(e, B) {
                return p.apply(this, arguments)
            }

            function p() {
                return (p = F((function(e, B) {
                    var t, E, u, F, c, s, D, d, f, p, A, m, v, y, h, b, j, O, g, w, T, N, P, S, _;
                    return a(this, (function(a) {
                        switch (a.label) {
                            case 0:
                                t = B.name, E = B.type, u = B.position, F = B.topic,
                                    c = B.bitrate, s = B.userLimit, D = B.nsfw, d = B.flags, f = B.permissionOverwrites, p = B.rateLimitPerUser, A = B.defaultThreadRateLimitPerUser, m = B.defaultAutoArchiveDuration, v = B.template, y = B.defaultReactionEmoji, h = B.rtcRegion, b = B.videoQualityMode, j = B.autoArchiveDuration, O = B.locked, g = B.invitable, w = B.availableTags, T = B.defaultSortOrder, N = B.defaultForumLayout, P = B.iconEmoji, S = B.themeColor;
                                _ = i.Z.getChannel(e);
                                r.Z.dispatch({
                                    type: "CHANNEL_SETTINGS_SUBMIT"
                                });
                                return [4, l.Z.unarchiveThreadIfNecessary(e)];
                            case 1:
                                a.sent();
                                return [2, n.ZP.patch({
                                    url: C.ANM.CHANNEL(e),
                                    body: {
                                        name: t,
                                        type: E,
                                        position: u,
                                        topic: F,
                                        bitrate: c,
                                        user_limit: s,
                                        nsfw: D,
                                        flags: d,
                                        permission_overwrites: f,
                                        rate_limit_per_user: p,
                                        default_thread_rate_limit_per_user: A,
                                        default_auto_archive_duration: m,
                                        template: v,
                                        rtc_region: h,
                                        video_quality_mode: b,
                                        auto_archive_duration: j,
                                        locked: O,
                                        invitable: g,
                                        default_reaction_emoji: null != y ? {
                                            emoji_id: null == y ? void 0 : y.emojiId,
                                            emoji_name: null == y ? void 0 : y.emojiName
                                        } : null === y ? null : void 0,
                                        available_tags: null == w ? void 0 : w.map((function(e) {
                                            return {
                                                id: e.id,
                                                name: e.name,
                                                emoji_id: e.emojiId,
                                                emoji_name: e.emojiName,
                                                moderated: e.moderated
                                            }
                                        })),
                                        default_sort_order: T,
                                        default_forum_layout: N,
                                        icon_emoji: null != P ? {
                                            id: P.id,
                                            name: P.name
                                        } : null === P ? null : void 0,
                                        theme_color: S
                                    },
                                    oldFormErrors: !0
                                }).then((function(B) {
                                    r.Z.dispatch({
                                        type: "CHANNEL_SETTINGS_SUBMIT_SUCCESS",
                                        channelId: e
                                    });
                                    var t = null == _ ? void 0 : _.getGuildId();
                                    null == t || (null == _ ? void 0 : _.isThread()) || o.Z.checkGuildTemplateDirty(t);
                                    return B
                                }), (function(e) {
                                    r.Z.dispatch({
                                        type: "CHANNEL_SETTINGS_SUBMIT_FAILURE",
                                        errors: e.body
                                    });
                                    return e
                                }))]
                        }
                    }))
                }))).apply(this, arguments)
            }

            function A(e) {
                var B = i.Z.getChannel(e);
                n.ZP.delete({
                    url: C.ANM.CHANNEL(e),
                    oldFormErrors: !0
                }).then((function() {
                    var e = null == B ? void 0 : B.getGuildId();
                    null == e || (null == B ? void 0 : B.isThread()) || o.Z.checkGuildTemplateDirty(e);
                    s()
                }))
            }
            const m = {
                init: c,
                open: function(e, B, t) {
                    c(e, B, t);
                    (0, E.jN)(C.S9g.CHANNEL_SETTINGS)
                },
                close: s,
                setSection: D,
                selectPermissionOverwrite: function(e) {
                    r.Z.dispatch({
                        type: "CHANNEL_SETTINGS_OVERWRITE_SELECT",
                        overwriteId: e
                    })
                },
                updateChannel: d,
                saveChannel: f,
                deleteChannel: A,
                updateVoiceChannelStatus: function(e, B) {
                    return n.ZP.put({
                        url: C.ANM.UPDATE_VOICE_CHANNEL_STATUS(e),
                        body: {
                            status: B
                        }
                    })
                }
            }
        },
        630203: (e, B, t) => {
            t.d(B, {
                _: () => U,
                Z: () => M
            });
            var n = t(785893),
                r = t(667294),
                o = t(294184),
                l = t.n(o),
                i = t(457217),
                E = t(202351),
                C = t(304548),
                u = t(77413),
                F = t(218190),
                a = t(621647),
                c = t(773011),
                s = t(344832),
                D = t(201521),
                d = t(96233),
                f = t(491260),
                p = t(788169),
                A = t(473903),
                m = t(319086),
                v = t(971611),
                y = t(310126),
                h = t(2590),
                b = t(887630),
                j = t.n(b);

            function O(e, B) {
                (null == B || B > e.length) && (B = e.length);
                for (var t = 0, n = new Array(B); t < B; t++) n[t] = e[t];
                return n
            }

            function g(e, B, t) {
                B in e ? Object.defineProperty(e, B, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[B] = t;
                return e
            }

            function w(e) {
                for (var B = 1; B < arguments.length; B++) {
                    var t = null != arguments[B] ? arguments[B] : {},
                        n = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    n.forEach((function(B) {
                        g(e, B, t[B])
                    }))
                }
                return e
            }

            function T(e, B) {
                B = null != B ? B : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(B)) : function(e, B) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        B && (n = n.filter((function(B) {
                            return Object.getOwnPropertyDescriptor(e, B).enumerable
                        })));
                        t.push.apply(t, n)
                    }
                    return t
                }(Object(B)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(B, t))
                }));
                return e
            }

            function N(e, B) {
                if (null == e) return {};
                var t, n, r = function(e, B) {
                    if (null == e) return {};
                    var t, n, r = {},
                        o = Object.keys(e);
                    for (n = 0; n < o.length; n++) {
                        t = o[n];
                        B.indexOf(t) >= 0 || (r[t] = e[t])
                    }
                    return r
                }(e, B);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < o.length; n++) {
                        t = o[n];
                        B.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t])
                    }
                }
                return r
            }

            function P(e, B) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, B) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var n, r, o = [],
                            l = !0,
                            i = !1;
                        try {
                            for (t = t.call(e); !(l = (n = t.next()).done); l = !0) {
                                o.push(n.value);
                                if (B && o.length === B) break
                            }
                        } catch (e) {
                            i = !0;
                            r = e
                        } finally {
                            try {
                                l || null == t.return || t.return()
                            } finally {
                                if (i) throw r
                            }
                        }
                        return o
                    }
                }(e, B) || _(e, B) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function S(e) {
                return function(e) {
                    if (Array.isArray(e)) return O(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || _(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function _(e, B) {
                if (e) {
                    if ("string" == typeof e) return O(e, B);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    return "Map" === t || "Set" === t ? Array.from(t) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? O(e, B) : void 0
                }
            }
            var x = {
                SELECTED: j().modeSelected,
                CONNECTED: j().modeConnected,
                UNREAD_HIGHLIGHT: j().modeUnread,
                UNREAD: j().modeUnreadNormal,
                MUTED: j().modeMuted,
                LOCKED: j().modeLocked
            };

            function I(e) {
                e.preventDefault();
                e.stopPropagation()
            }

            function L(e) {
                switch (e) {
                    case h.d4z.GUILD_STAGE_VOICE:
                    case h.d4z.GUILD_VOICE:
                        return j().typeVoice;
                    case h.d4z.ANNOUNCEMENT_THREAD:
                    case h.d4z.PUBLIC_THREAD:
                    case h.d4z.PRIVATE_THREAD:
                        return j().typeThread;
                    case h.d4z.GUILD_ANNOUNCEMENT:
                    case h.d4z.GUILD_TEXT:
                    case h.d4z.GUILD_STORE:
                    case h.d4z.GUILD_FORUM:
                    case h.d4z.GUILD_MEDIA:
                    default:
                        return j().typeDefault
                }
            }
            var k = y.ZP.getEnableHardwareAcceleration() ? C.AnimatedAvatar : C.Avatar;

            function Z(e) {
                var B = e.channel;
                return (0, n.jsx)(k, {
                    src: (0, a.x)(B),
                    "aria-hidden": !0,
                    size: C.AvatarSizes.SIZE_20
                })
            }

            function R(e) {
                var B = e.channel,
                    t = (0, E.e7)([A.default], (function() {
                        return A.default.getUser(null == B ? void 0 : B.recipients[0])
                    })),
                    r = (0, E.e7)([p.Z], (function() {
                        return null != t && null != B && !B.isMultiUserDM() && null != p.Z.getTypingUsers(null == B ? void 0 : B.id)[null == t ? void 0 : t.id]
                    })),
                    o = (0, E.cj)([f.Z], (function() {
                        return null == t || null == B || B.isMultiUserDM() ? {
                            status: null,
                            isMobile: !1
                        } : {
                            status: f.Z.getStatus(t.id),
                            isMobile: f.Z.isMobileOnline(t.id)
                        }
                    })),
                    l = o.status,
                    i = o.isMobile;
                return (0, n.jsx)(k, {
                    size: C.AvatarSizes.SIZE_20,
                    src: null == t ? void 0 : t.getAvatarURL(void 0, 40),
                    status: l,
                    isMobile: i,
                    isTyping: r,
                    "aria-label": null == t ? void 0 : t.username,
                    statusTooltip: !0
                })
            }
            var U = function(e) {
                var B = e.className,
                    t = e.channel,
                    r = e.guild,
                    o = e.locked,
                    i = e.hasActiveThreads,
                    E = function(e, B, t) {
                        switch (e.type) {
                            case h.d4z.DM:
                                return function() {
                                    return (0, n.jsx)(R, {
                                        channel: e
                                    })
                                };
                            case h.d4z.GROUP_DM:
                                return function() {
                                    return (0, n.jsx)(Z, {
                                        channel: e
                                    })
                                };
                            default:
                                return (0, s.KS)(e, B, t)
                        }
                    }(t, r, {
                        locked: o,
                        hasActiveThreads: i
                    });
                if (null == E) return null;
                var u = (0, s.bT)(t, r, o, i);
                return (0, n.jsx)(C.Tooltip, {
                    text: u,
                    delay: 500,
                    children: function(e) {
                        return (0, n.jsx)("div", T(w({}, e), {
                            role: "img",
                            className: j().iconContainer,
                            children: (0, n.jsx)(E, {
                                className: l()(j().icon, B)
                            })
                        }))
                    }
                })
            };

            function M(e) {
                var B, t, o, E = e.channel,
                    a = e.name,
                    s = e.muted,
                    f = e.selected,
                    p = e.connected,
                    A = e.unread,
                    y = e.canHaveDot,
                    b = e.mentionCount,
                    O = e.relevant,
                    _ = e.locked,
                    k = e.hasActiveThreads,
                    Z = e.onClick,
                    R = e.onMouseDown,
                    M = e.onMouseUp,
                    G = e.onContextMenu,
                    H = e.connectDragPreview,
                    z = e.className,
                    V = e.iconClassName,
                    K = e.subtitle,
                    X = e.subtitleColor,
                    Q = e.channel.type,
                    W = e.onMouseEnter,
                    J = e.onMouseLeave,
                    Y = e["aria-label"],
                    q = e.children,
                    $ = e.guild,
                    ee = e.channelTypeOverride,
                    Be = e.forceInteractable,
                    te = e.isFavoriteSuggestion,
                    ne = (0, i.JA)(E.id),
                    re = (ne.role, N(ne, ["role"])),
                    oe = r.useRef(null),
                    le = r.useRef(null),
                    ie = (0, D.Z)(E),
                    Ee = h.Z5c.CHANNEL(ie, E.id),
                    Ce = (0, c.ZP)(E),
                    ue = E.isGuildVocal(),
                    Fe = ue && !p,
                    ae = F.G.useExperiment({
                        location: "337985_1"
                    }, {
                        autoTrackExposure: !1
                    }),
                    ce = ae.enabled,
                    se = ae.left,
                    De = r.useContext(C.AccessibilityPreferencesContext).reducedMotion.enabled,
                    de = P(r.useState([]), 2),
                    fe = de[0],
                    pe = de[1];
                B = fe.length, t = 500, o = function() {
                    pe([])
                }, r.useLayoutEffect((function() {
                    var e = null;
                    if (B > 0) {
                        clearTimeout(e);
                        e = setTimeout((function() {
                            o();
                            clearTimeout(e)
                        }), 4 * t)
                    }
                    return function() {
                        return clearTimeout(e)
                    }
                }), [B, t, o]);
                var Ae, me, ve = (0, d.oB)(E),
                    ye = ve.emoji,
                    he = ve.color,
                    be = ce ? (0, n.jsx)(u.Z, {
                        emojiName: ye.name,
                        emojiId: ye.id,
                        src: ye.url,
                        className: j().twemoji
                    }) : null,
                    je = null != Z || null != M || null != R || Be,
                    Oe = (0, n.jsx)("div", {
                        className: l()(g({}, j().favoritesSuggestion, te)),
                        children: (0, n.jsxs)(m.Z, T(w({
                            role: Fe ? "button" : "link",
                            href: ue ? void 0 : Ee,
                            ref: oe,
                            className: l()(j().link, g({}, j().linkWithChannelEmoji, null != be)),
                            onMouseDown: function(e) {
                                ce && 0 === e.button && function(e) {
                                    if (!De) {
                                        var B = e.currentTarget.getBoundingClientRect(),
                                            t = B.width > B.height ? B.width : B.height,
                                            n = {
                                                x: e.pageX - B.x - t / 2,
                                                y: e.pageY - B.y - t / 2,
                                                size: t
                                            };
                                        pe(S(fe).concat([n]))
                                    }
                                }(e)
                            },
                            onClick: function() {
                                return null == Z ? void 0 : Z(E)
                            }
                        }, re), {
                            "aria-label": Y,
                            focusProps: {
                                enabled: !1
                            },
                            children: [ce && (0, n.jsx)("div", {
                                className: j().emojiColorFill,
                                style: {
                                    backgroundColor: he,
                                    opacity: f ? 1 : 0
                                }
                            }), (0, n.jsxs)("div", {
                                className: j().linkTop,
                                children: [null != be && se && (0, n.jsx)("div", {
                                    className: l()(j().channelEmoji, j().channelEmojiLeftOfIcon),
                                    style: {
                                        backgroundColor: he
                                    },
                                    children: be
                                }), (0, n.jsx)(U, {
                                    className: V,
                                    channel: E,
                                    guild: $,
                                    hasActiveThreads: k,
                                    locked: _
                                }), null != be && !se && (0, n.jsx)("div", {
                                    className: l()(j().channelEmoji, j().channelEmojiRightOfIcon),
                                    style: {
                                        backgroundColor: he
                                    },
                                    children: be
                                }), (0, n.jsx)(v.Z, {
                                    className: l()(j().name),
                                    "aria-hidden": !0,
                                    children: null == a ? Ce : a
                                }), r.Children.count(q) > 0 ? (0, n.jsx)("div", {
                                    onClick: I,
                                    className: j().children,
                                    children: q
                                }) : null]
                            }), null != K ? (0, n.jsx)("div", {
                                className: j().linkBottom,
                                children: (0, n.jsx)(C.Text, {
                                    color: null != X ? X : "text-muted",
                                    variant: "text-xs/medium",
                                    className: j().subtitle,
                                    children: K
                                })
                            }) : null, ce && fe.length > 0 && fe.map((function(e, B) {
                                return (0, n.jsx)("span", {
                                    className: j().ripple,
                                    style: {
                                        top: e.y,
                                        left: e.x,
                                        width: e.size,
                                        height: e.size,
                                        backgroundColor: he,
                                        animationDuration: "".concat(500, "ms"),
                                        opacity: .36
                                    }
                                }, "ripple-".concat(B))
                            }))]
                        }))
                    });
                return (0, n.jsx)(C.FocusRing, {
                    focusTarget: oe,
                    ringTarget: le,
                    offset: {
                        top: 2,
                        bottom: 2,
                        right: 4
                    },
                    children: (0, n.jsxs)("div", {
                        className: l()(z, je ? j().wrapper : j().notInteractive, (me = null != ye, f && !me ? x.SELECTED : p ? x.CONNECTED : _ ? x.LOCKED : s ? x.MUTED : A ? O || null != b && b > 0 ? x.UNREAD_HIGHLIGHT : x.UNREAD : null), L(null != ee ? ee : Q)),
                        onMouseUp: function(e) {
                            return null == M ? void 0 : M(e, E)
                        },
                        onMouseDown: function(e) {
                            return null == R ? void 0 : R(e, E)
                        },
                        onContextMenu: function(e) {
                            return null == G ? void 0 : G(e, E)
                        },
                        onMouseEnter: W,
                        onMouseLeave: J,
                        children: [s || !y || !A || f && !ue ? null : (0, n.jsx)("div", {
                            className: l()(j().unread, (O || (null != b ? b : 0) > 0) && j().unreadRelevant)
                        }), null !== (Ae = null == H ? void 0 : H(Oe)) && void 0 !== Ae ? Ae : Oe]
                    })
                })
            }
        },
        96233: (e, B, t) => {
            t.d(B, {
                oB: () => A
            });
            t(667294);
            var n = t(202351),
                r = t(709105),
                o = (t(87127), t(86171)),
                l = t(245353),
                i = (t(917019), t(473419)),
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
            var u = "💬",
                F = "#607D8B";

            function a(e, B, t) {
                B in e ? Object.defineProperty(e, B, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[B] = t;
                return e
            }

            function c(e) {
                for (var B = 1; B < arguments.length; B++) {
                    var t = null != arguments[B] ? arguments[B] : {},
                        n = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    n.forEach((function(B) {
                        a(e, B, t[B])
                    }))
                }
                return e
            }

            function s(e, B) {
                B = null != B ? B : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(B)) : function(e, B) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        B && (n = n.filter((function(B) {
                            return Object.getOwnPropertyDescriptor(e, B).enumerable
                        })));
                        t.push.apply(t, n)
                    }
                    return t
                }(Object(B)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(B, t))
                }));
                return e
            }

            function D(e) {
                return "#" + e.toString(16).toUpperCase()
            }

            function d(e) {
                var B, t, r, o, l, E, C, u = (0, n.e7)([i.Z], (function() {
                        var B, t, n, r = null === (B = i.Z.settings.guilds) || void 0 === B ? void 0 : B.guilds;
                        return null != e ? null == r || null === (t = r[e.guild_id]) || void 0 === t || null === (n = t.channels) || void 0 === n ? void 0 : n[e.id] : null
                    })),
                    F = null == u ? void 0 : u.iconEmoji;
                return {
                    emoji: null != (null == F || null === (B = F.id) || void 0 === B ? void 0 : B.value) || null != (null == F || null === (t = F.name) || void 0 === t ? void 0 : t.value) ? {
                        id: null !== (E = null == F || null === (r = F.id) || void 0 === r ? void 0 : r.value) && void 0 !== E ? E : null,
                        name: null !== (C = null == F || null === (o = F.name) || void 0 === o ? void 0 : o.value) && void 0 !== C ? C : null
                    } : null,
                    color: null != (null == F || null === (l = F.color) || void 0 === l ? void 0 : l.value) ? D(Number(F.color.value)) : null
                }
            }

            function f(e) {
                var B, t, n, r = null !== (B = null == e ? void 0 : e.iconEmoji) && void 0 !== B ? B : null;
                return {
                    emoji: null != r ? {
                        id: null !== (t = r.id) && void 0 !== t ? t : null,
                        name: null !== (n = r.name) && void 0 !== n ? n : null
                    } : null,
                    color: null != (null == e ? void 0 : e.themeColor) ? D(e.themeColor) : null
                }
            }

            function p() {
                return "dark" === (0, r.TC)().theme ? .2 : .16
            }

            function A(e) {
                var B, t, r = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                    i = (0, o.Z)("user_channel_emoji_overrides"),
                    a = d(e),
                    D = a.emoji,
                    A = a.color,
                    m = f(e),
                    v = m.emoji,
                    y = m.color,
                    h = p();
                if (null != (null == D ? void 0 : D.name) && i) {
                    var b, j, O, g = null !== (b = null != A ? A : null == (null == D ? void 0 : D.id) ? C[D.name] : null) && void 0 !== b ? b : F;
                    B = {
                        id: null !== (j = null == D ? void 0 : D.id) && void 0 !== j ? j : null,
                        name: null !== (O = null == D ? void 0 : D.name) && void 0 !== O ? O : u,
                        url: void 0
                    };
                    t = r ? (0, E.Cj)(g, h) : g
                } else {
                    var w, T, N, P = null !== (w = null != y ? y : null != (null == v ? void 0 : v.name) && null == (null == v ? void 0 : v.id) ? C[v.name] : null) && void 0 !== w ? w : F;
                    B = {
                        id: null !== (T = null == v ? void 0 : v.id) && void 0 !== T ? T : null,
                        name: null !== (N = null == v ? void 0 : v.name) && void 0 !== N ? N : u,
                        url: void 0
                    };
                    t = r ? (0, E.Cj)(P, h) : P
                }
                var S = (0, n.e7)([l.Z], (function() {
                    return null != B.id ? l.Z.getUsableCustomEmojiById(B.id) : null
                }));
                return {
                    emoji: null != B.id && null != S ? s(c({}, B), {
                        url: S.url
                    }) : B,
                    color: t
                }
            }
        },
        327860: (e, B, t) => {
            t.d(B, {
                ox: () => w,
                OZ: () => T,
                ZP: () => N
            });
            var n = t(785893),
                r = t(667294),
                o = t(294184),
                l = t.n(o),
                i = t(575945),
                E = t(304548),
                C = t(107364),
                u = t(2590),
                F = t(643193),
                a = t.n(F),
                c = t(380203),
                s = t.n(c);

            function D(e, B) {
                if (!(e instanceof B)) throw new TypeError("Cannot call a class as a function")
            }

            function d(e, B, t) {
                B in e ? Object.defineProperty(e, B, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[B] = t;
                return e
            }

            function f(e) {
                f = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return f(e)
            }

            function p(e, B) {
                if ("function" != typeof B && null !== B) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(B && B.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                });
                B && y(e, B)
            }

            function A(e) {
                for (var B = 1; B < arguments.length; B++) {
                    var t = null != arguments[B] ? arguments[B] : {},
                        n = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    n.forEach((function(B) {
                        d(e, B, t[B])
                    }))
                }
                return e
            }

            function m(e, B) {
                B = null != B ? B : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(B)) : function(e, B) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        B && (n = n.filter((function(B) {
                            return Object.getOwnPropertyDescriptor(e, B).enumerable
                        })));
                        t.push.apply(t, n)
                    }
                    return t
                }(Object(B)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(B, t))
                }));
                return e
            }

            function v(e, B) {
                return !B || "object" !== h(B) && "function" != typeof B ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : B
            }

            function y(e, B) {
                y = Object.setPrototypeOf || function(e, B) {
                    e.__proto__ = B;
                    return e
                };
                return y(e, B)
            }
            var h = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function b(e) {
                var B = function() {
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
                    var t, n = f(e);
                    if (B) {
                        var r = f(this).constructor;
                        t = Reflect.construct(n, arguments, r)
                    } else t = n.apply(this, arguments);
                    return v(this, t)
                }
            }
            var j = r.createContext(u.BRd.DARK),
                O = j.Provider,
                g = j.Consumer,
                w = function(e) {
                    p(t, e);
                    var B = b(t);

                    function t() {
                        D(this, t);
                        return B.apply(this, arguments)
                    }
                    t.prototype.render = function() {
                        var e = this.props,
                            B = e.lightSrc,
                            t = e.darkSrc,
                            r = e.width,
                            o = e.height,
                            E = e.offsetX,
                            u = e.offsetY,
                            F = e.style;
                        return (0, n.jsx)(g, {
                            children: function(e) {
                                return (0, n.jsx)(C.Z.Child, {
                                    grow: 0,
                                    className: l()(a().image, s().marginBottom40),
                                    style: m(A({}, F), {
                                        width: r,
                                        height: o,
                                        marginLeft: E,
                                        marginTop: u,
                                        backgroundImage: "url(".concat((0, i.wj)(e) ? t : B, ")")
                                    })
                                })
                            }
                        })
                    };
                    return t
                }(r.PureComponent),
                T = function(e) {
                    var B = e.children,
                        t = e.className,
                        r = e.noteClassName,
                        o = e.note,
                        i = e.style;
                    return (0, n.jsxs)(C.Z.Child, {
                        grow: 0,
                        direction: C.Z.Direction.VERTICAL,
                        style: i,
                        children: [null != B && (0, n.jsx)(E.H, {
                            className: l()(t, a().title),
                            children: B
                        }), null != o ? (0, n.jsx)("div", {
                            className: l()(r, a().text, s().marginTop8),
                            children: o
                        }) : null]
                    })
                },
                N = function(e) {
                    p(t, e);
                    var B = b(t);

                    function t() {
                        D(this, t);
                        return B.apply(this, arguments)
                    }
                    t.prototype.render = function() {
                        var e = this.props,
                            B = e.children,
                            t = e.theme,
                            r = e.className,
                            o = e.style;
                        return (0, n.jsx)(O, {
                            value: t,
                            children: (0, n.jsx)(C.Z, {
                                direction: C.Z.Direction.VERTICAL,
                                align: C.Z.Align.CENTER,
                                justify: C.Z.Justify.CENTER,
                                className: l()(a().wrapper, r),
                                style: o,
                                children: B
                            })
                        })
                    };
                    return t
                }(r.PureComponent);
            N.Text = T;
            N.Image = w
        },
        319086: (e, B, t) => {
            t.d(B, {
                Z: () => a
            });
            var n = t(785893),
                r = t(667294),
                o = t(304548),
                l = t(784426),
                i = t(2590);

            function E(e, B, t) {
                B in e ? Object.defineProperty(e, B, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[B] = t;
                return e
            }

            function C(e) {
                for (var B = 1; B < arguments.length; B++) {
                    var t = null != arguments[B] ? arguments[B] : {},
                        n = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    n.forEach((function(B) {
                        E(e, B, t[B])
                    }))
                }
                return e
            }

            function u(e, B) {
                B = null != B ? B : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(B)) : function(e, B) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        B && (n = n.filter((function(B) {
                            return Object.getOwnPropertyDescriptor(e, B).enumerable
                        })));
                        t.push.apply(t, n)
                    }
                    return t
                }(Object(B)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(B, t))
                }));
                return e
            }

            function F(e, B) {
                if (null == e) return {};
                var t, n, r = function(e, B) {
                    if (null == e) return {};
                    var t, n, r = {},
                        o = Object.keys(e);
                    for (n = 0; n < o.length; n++) {
                        t = o[n];
                        B.indexOf(t) >= 0 || (r[t] = e[t])
                    }
                    return r
                }(e, B);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < o.length; n++) {
                        t = o[n];
                        B.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t])
                    }
                }
                return r
            }
            const a = r.forwardRef((function(e, B) {
                var t = e.href,
                    E = e.children,
                    a = e.onClick,
                    c = e.onKeyPress,
                    s = e.focusProps,
                    D = F(e, ["href", "children", "onClick", "onKeyPress", "focusProps"]),
                    d = r.useCallback((function(e) {
                        if (!e.repeat) {
                            if (e.charCode === i.yXg.SPACE || e.charCode === i.yXg.ENTER) {
                                e.preventDefault();
                                null != t && (0, l.uL)(t);
                                null == a || a()
                            }
                            null == c || c(e)
                        }
                    }), [t, c, a]),
                    f = r.useCallback((function(e) {
                        if (!e.metaKey && !e.shiftKey && 0 === e.button) {
                            e.preventDefault();
                            e.stopPropagation();
                            null != t && (0, l.uL)(t);
                            null == a || a()
                        }
                    }), [t, a]),
                    p = (0, n.jsx)("a", u(C({
                        ref: B,
                        href: t,
                        onClick: f,
                        onKeyPress: d
                    }, D), {
                        children: E
                    }));
                return (0, n.jsx)(o.FocusRing, u(C({}, s), {
                    children: p
                }))
            }))
        }
    }
]);