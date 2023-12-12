(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["7264"], {
        18054: function(B, e, E) {
            "use strict";
            E.r(e), E.d(e, {
                init: function() {
                    return a
                },
                close: function() {
                    return r
                },
                setSection: function() {
                    return o
                },
                updateChannel: function() {
                    return D
                },
                saveChannel: function() {
                    return d
                },
                deleteChannel: function() {
                    return s
                },
                default: function() {
                    return A
                }
            }), E("702976");
            var t = E("872717"),
                l = E("913144"),
                n = E("81732");
            E("21121"), E("693051"), E("921245");
            var C = E("263024");
            E("492114");
            var F = E("42203"),
                i = E("54239"),
                u = E("49111");

            function a(B, e, E) {
                l.default.dispatch({
                    type: "CHANNEL_SETTINGS_INIT",
                    channelId: B,
                    location: e,
                    subsection: E
                })
            }

            function r() {
                l.default.dispatch({
                    type: "CHANNEL_SETTINGS_CLOSE"
                })
            }

            function o(B) {
                l.default.dispatch({
                    type: "CHANNEL_SETTINGS_SET_SECTION",
                    section: B
                })
            }

            function D(B) {
                let {
                    name: e,
                    type: E,
                    topic: t,
                    bitrate: n,
                    userLimit: C,
                    nsfw: F,
                    flags: i,
                    rateLimitPerUser: u,
                    defaultThreadRateLimitPerUser: a,
                    defaultAutoArchiveDuration: r,
                    template: o,
                    defaultReactionEmoji: D,
                    rtcRegion: d,
                    videoQualityMode: s,
                    autoArchiveDuration: A,
                    locked: c,
                    invitable: f,
                    availableTags: N,
                    defaultSortOrder: _,
                    defaultForumLayout: T,
                    iconEmoji: m,
                    themeColor: h
                } = B;
                l.default.dispatch({
                    type: "CHANNEL_SETTINGS_UPDATE",
                    name: e,
                    channelType: E,
                    topic: t,
                    bitrate: n,
                    userLimit: C,
                    nsfw: F,
                    flags: i,
                    rateLimitPerUser: u,
                    defaultThreadRateLimitPerUser: a,
                    defaultAutoArchiveDuration: r,
                    template: o,
                    defaultReactionEmoji: D,
                    rtcRegion: d,
                    videoQualityMode: s,
                    autoArchiveDuration: A,
                    locked: c,
                    invitable: f,
                    availableTags: N,
                    defaultSortOrder: _,
                    defaultForumLayout: T,
                    iconEmoji: m,
                    themeColor: h
                })
            }
            async function d(B, e) {
                let {
                    name: E,
                    type: i,
                    position: a,
                    topic: r,
                    bitrate: o,
                    userLimit: D,
                    nsfw: d,
                    flags: s,
                    permissionOverwrites: A,
                    rateLimitPerUser: c,
                    defaultThreadRateLimitPerUser: f,
                    defaultAutoArchiveDuration: N,
                    template: _,
                    defaultReactionEmoji: T,
                    rtcRegion: m,
                    videoQualityMode: h,
                    autoArchiveDuration: v,
                    locked: I,
                    invitable: S,
                    availableTags: p,
                    defaultSortOrder: L,
                    defaultForumLayout: g,
                    iconEmoji: O,
                    themeColor: U
                } = e, y = F.default.getChannel(B);
                return l.default.dispatch({
                    type: "CHANNEL_SETTINGS_SUBMIT"
                }), await C.default.unarchiveThreadIfNecessary(B), t.default.patch({
                    url: u.Endpoints.CHANNEL(B),
                    body: {
                        name: E,
                        type: i,
                        position: a,
                        topic: r,
                        bitrate: o,
                        user_limit: D,
                        nsfw: d,
                        flags: s,
                        permission_overwrites: A,
                        rate_limit_per_user: c,
                        default_thread_rate_limit_per_user: f,
                        default_auto_archive_duration: N,
                        template: _,
                        rtc_region: m,
                        video_quality_mode: h,
                        auto_archive_duration: v,
                        locked: I,
                        invitable: S,
                        default_reaction_emoji: null != T ? {
                            emoji_id: null == T ? void 0 : T.emojiId,
                            emoji_name: null == T ? void 0 : T.emojiName
                        } : null === T ? null : void 0,
                        available_tags: null == p ? void 0 : p.map(B => ({
                            id: B.id,
                            name: B.name,
                            emoji_id: B.emojiId,
                            emoji_name: B.emojiName,
                            moderated: B.moderated
                        })),
                        default_sort_order: L,
                        default_forum_layout: g,
                        icon_emoji: null != O ? {
                            id: O.id,
                            name: O.name
                        } : null === O ? null : void 0,
                        theme_color: U
                    },
                    oldFormErrors: !0
                }).then(e => {
                    l.default.dispatch({
                        type: "CHANNEL_SETTINGS_SUBMIT_SUCCESS",
                        channelId: B
                    });
                    let E = null == y ? void 0 : y.getGuildId();
                    return null != E && !(null == y ? void 0 : y.isThread()) && n.default.checkGuildTemplateDirty(E), e
                }, B => (l.default.dispatch({
                    type: "CHANNEL_SETTINGS_SUBMIT_FAILURE",
                    errors: B.body
                }), B))
            }

            function s(B) {
                let e = F.default.getChannel(B);
                t.default.delete({
                    url: u.Endpoints.CHANNEL(B),
                    oldFormErrors: !0
                }).then(() => {
                    let B = null == e ? void 0 : e.getGuildId();
                    null != B && !(null == e ? void 0 : e.isThread()) && n.default.checkGuildTemplateDirty(B), r()
                })
            }
            var A = {
                init: a,
                open: function(B, e, E) {
                    a(B, e, E), (0, i.pushLayer)(u.Layers.CHANNEL_SETTINGS)
                },
                close: r,
                setSection: o,
                selectPermissionOverwrite: function(B) {
                    l.default.dispatch({
                        type: "CHANNEL_SETTINGS_OVERWRITE_SELECT",
                        overwriteId: B
                    })
                },
                updateChannel: D,
                saveChannel: d,
                deleteChannel: s,
                updateVoiceChannelStatus: function(B, e) {
                    return t.default.put({
                        url: u.Endpoints.UPDATE_VOICE_CHANNEL_STATUS(B),
                        body: {
                            status: e
                        }
                    })
                }
            }
        },
        41594: function(B, e, E) {
            "use strict";
            E.r(e), E.d(e, {
                ChannelItemIcon: function() {
                    return R
                },
                default: function() {
                    return j
                }
            }), E("222007");
            var t = E("37983"),
                l = E("884691"),
                n = E("414456"),
                C = E.n(n),
                F = E("974667"),
                i = E("446674"),
                u = E("77078"),
                a = E("430568"),
                r = E("789394"),
                o = E("843962"),
                D = E("679653"),
                d = E("419830"),
                s = E("565298"),
                A = E("965381"),
                c = E("305961"),
                f = E("824563"),
                N = E("191542"),
                _ = E("697218"),
                T = E("37785"),
                m = E("98292"),
                h = E("587974"),
                v = E("50885"),
                I = E("49111"),
                S = E("133335"),
                p = E("404135");
            let L = (B, e, E) => {
                    l.useLayoutEffect(() => {
                        let t = null;
                        return B > 0 && (clearTimeout(t), t = setTimeout(() => {
                            E(), clearTimeout(t)
                        }, 4 * e)), () => clearTimeout(t)
                    }, [B, e, E])
                },
                g = {
                    SELECTED: p.modeSelected,
                    CONNECTED: p.modeConnected,
                    UNREAD_IMPORTANT: p.modeUnreadImportant,
                    UNREAD_LESS_IMPORTANT: p.modeUnreadLessImportant,
                    MUTED: p.modeMuted,
                    LOCKED: p.modeLocked
                };

            function O(B) {
                B.preventDefault(), B.stopPropagation()
            }
            let U = v.default.getEnableHardwareAcceleration() ? u.AnimatedAvatar : u.Avatar;

            function y(B) {
                let {
                    channel: e
                } = B;
                return (0, t.jsx)(U, {
                    src: (0, o.getChannelIconURL)(e),
                    "aria-hidden": !0,
                    size: u.AvatarSizes.SIZE_20
                })
            }

            function M(B) {
                let {
                    channel: e
                } = B, E = (0, i.useStateFromStores)([_.default], () => _.default.getUser(null == e ? void 0 : e.recipients[0])), l = (0, i.useStateFromStores)([N.default], () => !(null == E || null == e || e.isMultiUserDM()) && null != N.default.getTypingUsers(null == e ? void 0 : e.id)[null == E ? void 0 : E.id]), {
                    status: n,
                    isMobile: C
                } = (0, i.useStateFromStoresObject)([f.default], () => null == E || null == e || e.isMultiUserDM() ? {
                    status: null,
                    isMobile: !1
                } : {
                    status: f.default.getStatus(E.id),
                    isMobile: f.default.isMobileOnline(E.id)
                });
                return (0, t.jsx)(U, {
                    size: u.AvatarSizes.SIZE_20,
                    src: null == E ? void 0 : E.getAvatarURL(void 0, 40),
                    status: n,
                    isMobile: C,
                    isTyping: l,
                    "aria-label": null == E ? void 0 : E.username,
                    statusTooltip: !0
                })
            }
            let R = B => {
                let {
                    className: e,
                    channel: E,
                    guild: l,
                    locked: n,
                    hasActiveThreads: F,
                    withGuildIcon: a
                } = B, r = (0, i.useStateFromStores)([c.default], () => c.default.getGuild(E.guild_id), [E.guild_id]), o = a ? null == r ? void 0 : r.getIconURL(48) : null, D = null != o, s = function(B, e, E) {
                    switch (B.type) {
                        case I.ChannelTypes.DM:
                            return function() {
                                return (0, t.jsx)(M, {
                                    channel: B
                                })
                            };
                        case I.ChannelTypes.GROUP_DM:
                            return function() {
                                return (0, t.jsx)(y, {
                                    channel: B
                                })
                            };
                        default:
                            return (0, d.getChannelIconComponent)(B, e, E)
                    }
                }(E, l, {
                    locked: n,
                    hasActiveThreads: F
                });
                if (null == s) return null;
                let A = (0, d.getChannelIconTooltipText)(E, l, n, F),
                    f = D && null != r ? "".concat(r.name, " - ").concat(A, " icon") : "".concat(A, " icon");
                return (0, t.jsx)(u.Tooltip, {
                    text: A,
                    delay: 500,
                    children: B => (0, t.jsxs)("div", {
                        ...B,
                        role: "img",
                        "aria-label": f,
                        className: C(p.iconContainer, {
                            [p.iconContainerWithGuildIcon]: D
                        }),
                        children: [D && (0, t.jsx)(h.default, {
                            mask: h.MaskIDs.GUILD_ICON_WITH_CHANNEL_TYPE,
                            children: (0, t.jsx)("img", {
                                alt: "",
                                src: o,
                                className: p.channelGuildIcon
                            })
                        }), (0, t.jsx)(s, {
                            className: C(p.icon, {
                                [p.iconWithGuildIcon]: D
                            }, e)
                        })]
                    })
                })
            };

            function j(B) {
                var e;
                let {
                    channel: E,
                    name: n,
                    muted: i,
                    selected: o,
                    connected: d,
                    unread: c,
                    locked: f,
                    hasActiveThreads: N,
                    onClick: _,
                    onMouseDown: h,
                    onMouseUp: v,
                    onContextMenu: U,
                    connectDragPreview: y,
                    className: M,
                    iconClassName: j,
                    subtitle: G,
                    subtitleColor: H,
                    hangStatus: b,
                    channel: {
                        type: x
                    },
                    onMouseEnter: P,
                    onMouseLeave: w,
                    "aria-label": k,
                    children: V,
                    guild: J,
                    channelTypeOverride: K,
                    forceInteractable: W,
                    mentionCount: z,
                    unreadMode: Y,
                    isFavoriteSuggestion: q,
                    withGuildIcon: Z
                } = B, {
                    enabled: Q,
                    left: X
                } = r.ChannelEmojisExperiment.useExperiment({
                    location: "337985_1"
                }, {
                    autoTrackExposure: !1
                }), $ = Y === S.UnreadMode.IMPORTANT || null != z && z > 0, {
                    role: BB,
                    ...Be
                } = (0, F.useListItem)(E.id), BE = l.useRef(null), Bt = l.useRef(null), Bl = (0, s.default)(E), Bn = I.Routes.CHANNEL(Bl, E.id), BC = (0, D.default)(E), BF = E.isGuildVocal(), {
                    reducedMotion: Bi
                } = l.useContext(u.AccessibilityPreferencesContext), Bu = Bi.enabled, [Ba, Br] = l.useState([]);
                L(Ba.length, 500, () => {
                    Br([])
                });
                let Bo = B => {
                        if (Bu) return;
                        let e = B.currentTarget.getBoundingClientRect(),
                            E = e.width > e.height ? e.width : e.height,
                            t = B.pageX - e.x - E / 2,
                            l = B.pageY - e.y - E / 2;
                        Br([...Ba, {
                            x: t,
                            y: l,
                            size: E
                        }])
                    },
                    {
                        emoji: BD,
                        color: Bd
                    } = (0, A.useChannelEmojiAndColor)(E),
                    Bs = Q ? (0, t.jsx)(a.default, {
                        emojiName: BD.name,
                        emojiId: BD.id,
                        src: BD.url,
                        className: p.twemoji
                    }) : null,
                    BA = (0, t.jsx)("div", {
                        className: C({
                            [p.favoritesSuggestion]: q
                        }),
                        children: (0, t.jsxs)(T.default, {
                            role: BF && !d ? "button" : "link",
                            href: BF ? void 0 : Bn,
                            target: "_blank",
                            ref: BE,
                            className: C(p.link, {
                                [p.linkWithChannelEmoji]: null != Bs
                            }),
                            onMouseDown: B => {
                                Q && 0 === B.button && Bo(B)
                            },
                            onClick: () => null == _ ? void 0 : _(E),
                            ...Be,
                            "aria-label": k,
                            focusProps: {
                                enabled: !1
                            },
                            children: [Q && (0, t.jsx)("div", {
                                className: p.emojiColorFill,
                                style: {
                                    backgroundColor: Bd,
                                    opacity: o ? 1 : 0
                                }
                            }), (0, t.jsxs)("div", {
                                className: p.linkTop,
                                children: [null != Bs && X && (0, t.jsx)("div", {
                                    className: C(p.channelEmoji, p.channelEmojiLeftOfIcon),
                                    style: {
                                        backgroundColor: Bd
                                    },
                                    children: Bs
                                }), (0, t.jsx)(R, {
                                    className: j,
                                    channel: E,
                                    guild: J,
                                    hasActiveThreads: N,
                                    locked: f,
                                    withGuildIcon: Z
                                }), null != Bs && !X && (0, t.jsx)("div", {
                                    className: C(p.channelEmoji, p.channelEmojiRightOfIcon),
                                    style: {
                                        backgroundColor: Bd
                                    },
                                    children: Bs
                                }), (0, t.jsx)(m.default, {
                                    className: C(p.name),
                                    "aria-hidden": !0,
                                    children: null == n ? BC : n
                                }), l.Children.count(V) > 0 ? (0, t.jsx)("div", {
                                    onClick: O,
                                    className: p.children,
                                    children: V
                                }) : null]
                            }), null == b && null != G ? (0, t.jsx)("div", {
                                className: p.linkBottom,
                                children: (0, t.jsx)(u.Text, {
                                    color: null != H ? H : "text-muted",
                                    variant: "text-xs/medium",
                                    className: p.subtitle,
                                    children: G
                                })
                            }) : null, null != b ? b : null, Q && Ba.length > 0 && Ba.map((B, e) => (0, t.jsx)("span", {
                                className: p.ripple,
                                style: {
                                    top: B.y,
                                    left: B.x,
                                    width: B.size,
                                    height: B.size,
                                    backgroundColor: Bd,
                                    animationDuration: "".concat(500, "ms"),
                                    opacity: .36
                                }
                            }, "ripple-".concat(e)))]
                        })
                    });
                return (0, t.jsx)(u.FocusRing, {
                    focusTarget: BE,
                    ringTarget: Bt,
                    offset: {
                        top: 2,
                        bottom: 2,
                        right: 4
                    },
                    children: (0, t.jsxs)("div", {
                        className: C(M, null != _ || null != v || null != h || W ? p.wrapper : p.notInteractive, (() => {
                            if (o && !Q) return g.SELECTED;
                            if (d) return g.CONNECTED;
                            if (f) return g.LOCKED;
                            if (i) return g.MUTED;
                            if (c) return $ ? g.UNREAD_IMPORTANT : g.UNREAD_LESS_IMPORTANT;
                            return null
                        })(), function(B) {
                            switch (B) {
                                case I.ChannelTypes.GUILD_STAGE_VOICE:
                                case I.ChannelTypes.GUILD_VOICE:
                                    return p.typeVoice;
                                case I.ChannelTypes.ANNOUNCEMENT_THREAD:
                                case I.ChannelTypes.PUBLIC_THREAD:
                                case I.ChannelTypes.PRIVATE_THREAD:
                                    return p.typeThread;
                                case I.ChannelTypes.GUILD_ANNOUNCEMENT:
                                case I.ChannelTypes.GUILD_TEXT:
                                case I.ChannelTypes.GUILD_STORE:
                                case I.ChannelTypes.GUILD_FORUM:
                                case I.ChannelTypes.GUILD_MEDIA:
                                default:
                                    return p.typeDefault
                            }
                        }(null != K ? K : x)),
                        onMouseUp: B => null == v ? void 0 : v(B, E),
                        onMouseDown: B => null == h ? void 0 : h(B, E),
                        onContextMenu: B => null == U ? void 0 : U(B, E),
                        onMouseEnter: P,
                        onMouseLeave: w,
                        children: [i || !c || o && !BF ? null : (0, t.jsx)("div", {
                            className: C(p.unread, $ ? p.unreadImportant : void 0, null != b ? p.unreadWithHangStatus : void 0)
                        }), null !== (e = null == y ? void 0 : y(BA)) && void 0 !== e ? e : BA]
                    })
                })
            }
        },
        132568: function(B, e, E) {
            "use strict";
            E.r(e), E.d(e, {
                DEFAULT_CHANNEL_EMOJI: function() {
                    return t
                },
                CHANNEL_EMOJI_BACKGROUND_OPACITY_LIGHT: function() {
                    return l
                },
                CHANNEL_EMOJI_BACKGROUND_OPACITY_DARK: function() {
                    return n
                },
                DEFAULT_CHANNEL_EMOJI_BACKGROUND_COLOR: function() {
                    return C
                }
            });
            let t = "\uD83D\uDCAC",
                l = .16,
                n = .2,
                C = "#607D8B"
        },
        965381: function(B, e, E) {
            "use strict";
            E.r(e), E.d(e, {
                useChannelEmojiAndColor: function() {
                    return d
                }
            }), E("222007"), E("884691");
            var t = E("446674"),
                l = E("36763");
            E("18054");
            var n = E("362391"),
                C = E("385976");
            E("872173");
            var F = E("374363");
            E("42203");
            var i = E("284679"),
                u = E("21121"),
                a = E("934306"),
                r = E("807362"),
                o = E("132568");

            function D(B) {
                return "#" + B.toString(16).toUpperCase()
            }

            function d(B) {
                var e, E, d, s, A, c;
                let f, N, _ = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    T = function() {
                        let B = (0, n.default)("enable_channel_emojis"),
                            e = (0, a.useOnNewPanels)(),
                            E = (0, u.useInMainTabsExperiment)();
                        return B || E && !e
                    }(),
                    m = (0, n.default)("user_channel_emoji_overrides"),
                    {
                        emoji: h,
                        color: v
                    } = function(B) {
                        var e, E, l, n, C, i, u;
                        let a = (0, t.useStateFromStores)([F.default], () => {
                                var e, E, t;
                                let l = null === (e = F.default.settings.guilds) || void 0 === e ? void 0 : e.guilds;
                                return null != B ? null == l ? void 0 : null === (t = l[B.guild_id]) || void 0 === t ? void 0 : null === (E = t.channels) || void 0 === E ? void 0 : E[B.id] : null
                            }),
                            r = null == a ? void 0 : a.iconEmoji;
                        return {
                            emoji: (null == r ? void 0 : null === (e = r.id) || void 0 === e ? void 0 : e.value) != null || (null == r ? void 0 : null === (E = r.name) || void 0 === E ? void 0 : E.value) != null ? {
                                id: null !== (i = null == r ? void 0 : null === (l = r.id) || void 0 === l ? void 0 : l.value) && void 0 !== i ? i : null,
                                name: null !== (u = null == r ? void 0 : null === (n = r.name) || void 0 === n ? void 0 : n.value) && void 0 !== u ? u : null
                            } : null,
                            color: (null == r ? void 0 : null === (C = r.color) || void 0 === C ? void 0 : C.value) != null ? D(Number(r.color.value)) : null
                        }
                    }(B),
                    {
                        emoji: I,
                        color: S
                    } = function(B) {
                        var e, E, t;
                        let l = null !== (e = null == B ? void 0 : B.iconEmoji) && void 0 !== e ? e : null;
                        return {
                            emoji: null != l ? {
                                id: null !== (E = l.id) && void 0 !== E ? E : null,
                                name: null !== (t = l.name) && void 0 !== t ? t : null
                            } : null,
                            color: (null == B ? void 0 : B.themeColor) != null ? D(B.themeColor) : null
                        }
                    }(B),
                    p = function() {
                        let {
                            theme: B
                        } = (0, l.useThemeContext)();
                        return "dark" === B ? o.CHANNEL_EMOJI_BACKGROUND_OPACITY_DARK : o.CHANNEL_EMOJI_BACKGROUND_OPACITY_LIGHT
                    }();
                if ((null == h ? void 0 : h.name) != null && m) {
                    let B = null !== (e = null != v ? v : (null == h ? void 0 : h.id) == null ? r.default[h.name] : null) && void 0 !== e ? e : o.DEFAULT_CHANNEL_EMOJI_BACKGROUND_COLOR;
                    f = {
                        id: null !== (E = null == h ? void 0 : h.id) && void 0 !== E ? E : null,
                        name: null !== (d = null == h ? void 0 : h.name) && void 0 !== d ? d : o.DEFAULT_CHANNEL_EMOJI,
                        url: void 0
                    }, N = _ ? (0, i.hexWithOpacity)(B, p) : B
                } else {
                    let B = null !== (s = null != S ? S : (null == I ? void 0 : I.name) != null && (null == I ? void 0 : I.id) == null ? r.default[I.name] : null) && void 0 !== s ? s : o.DEFAULT_CHANNEL_EMOJI_BACKGROUND_COLOR;
                    f = {
                        id: null !== (A = null == I ? void 0 : I.id) && void 0 !== A ? A : null,
                        name: null !== (c = null == I ? void 0 : I.name) && void 0 !== c ? c : o.DEFAULT_CHANNEL_EMOJI,
                        url: void 0
                    }, N = _ ? (0, i.hexWithOpacity)(B, p) : B
                }
                let L = (0, t.useStateFromStores)([C.default], () => null != f.id ? C.default.getUsableCustomEmojiById(f.id) : null);
                return T ? {
                    emoji: null != f.id && null != L ? {
                        ...f,
                        url: L.url
                    } : f,
                    color: N
                } : {
                    color: _ ? (0, i.hexWithOpacity)(o.DEFAULT_CHANNEL_EMOJI_BACKGROUND_COLOR, p) : o.DEFAULT_CHANNEL_EMOJI_BACKGROUND_COLOR,
                    emoji: {
                        name: o.DEFAULT_CHANNEL_EMOJI,
                        id: null,
                        url: void 0
                    }
                }
            }
        },
        807362: function(B, e, E) {
            "use strict";
            E.r(e), E.d(e, {
                default: function() {
                    return l
                }
            });
            let t = Object.freeze({
                "\uD83D\uDE00": "#E67E22",
                "\uD83D\uDE03": "#E67E22",
                "\uD83D\uDE04": "#E67E22",
                "\uD83D\uDE01": "#E67E22",
                "\uD83D\uDE06": "#E67E22",
                "\uD83D\uDE05": "#E67E22",
                "\uD83E\uDD23": "#F1C40F",
                "\uD83D\uDE02": "#E67E22",
                "\uD83D\uDE42": "#F1C40F",
                "\uD83D\uDE43": "#F1C40F",
                "\uD83E\uDEE0": "#F1C40F",
                "\uD83D\uDE09": "#F1C40F",
                "\uD83D\uDE0A": "#F1C40F",
                "\uD83D\uDE07": "#3498DB",
                "\uD83E\uDD70": "#F1C40F",
                "\uD83D\uDE0D": "#E67E22",
                "\uD83E\uDD29": "#E67E22",
                "\uD83D\uDE18": "#F1C40F",
                "\uD83D\uDE17": "#F1C40F",
                "☺️": "#607D8B",
                "\uD83D\uDE1A": "#F1C40F",
                "\uD83D\uDE19": "#F1C40F",
                "\uD83E\uDD72": "#F1C40F",
                "\uD83D\uDE0B": "#F1C40F",
                "\uD83D\uDE1B": "#F1C40F",
                "\uD83D\uDE1C": "#F1C40F",
                "\uD83E\uDD2A": "#E67E22",
                "\uD83D\uDE1D": "#F1C40F",
                "\uD83E\uDD11": "#F1C40F",
                "\uD83E\uDD17": "#E67E22",
                "\uD83E\uDD2D": "#F1C40F",
                "\uD83E\uDEE2": "#F1C40F",
                "\uD83E\uDEE3": "#F1C40F",
                "\uD83E\uDD2B": "#F1C40F",
                "\uD83E\uDD14": "#F1C40F",
                "\uD83E\uDEE1": "#F1C40F",
                "\uD83E\uDD10": "#F1C40F",
                "\uD83E\uDD28": "#F1C40F",
                "\uD83D\uDE10": "#F1C40F",
                "\uD83D\uDE11": "#F1C40F",
                "\uD83D\uDE36": "#F1C40F",
                "\uD83E\uDEE5": "#F1C40F",
                "\uD83D\uDE36‍\uD83C\uDF2B️": "#9B59B6",
                "\uD83D\uDE0F": "#F1C40F",
                "\uD83D\uDE12": "#F1C40F",
                "\uD83D\uDE44": "#E67E22",
                "\uD83D\uDE2C": "#9B59B6",
                "\uD83D\uDE2E‍\uD83D\uDCA8": "#F1C40F",
                "\uD83E\uDD25": "#F1C40F",
                "\uD83D\uDE0C": "#F1C40F",
                "\uD83D\uDE14": "#F1C40F",
                "\uD83D\uDE2A": "#F1C40F",
                "\uD83E\uDD24": "#F1C40F",
                "\uD83D\uDE34": "#F1C40F",
                "\uD83D\uDE37": "#9B59B6",
                "\uD83E\uDD12": "#E67E22",
                "\uD83E\uDD15": "#9B59B6",
                "\uD83E\uDD22": "#E67E22",
                "\uD83E\uDD2E": "#11806A",
                "\uD83E\uDD27": "#9B59B6",
                "\uD83E\uDD75": "#E67E22",
                "\uD83E\uDD76": "#3498DB",
                "\uD83E\uDD74": "#F1C40F",
                "\uD83D\uDE35": "#F1C40F",
                "\uD83D\uDE35‍\uD83D\uDCAB": "#F1C40F",
                "\uD83E\uDD2F": "#E67E22",
                "\uD83E\uDD20": "#E67E22",
                "\uD83E\uDD73": "#F1C40F",
                "\uD83E\uDD78": "#E67E22",
                "\uD83D\uDE0E": "#11806A",
                "\uD83E\uDD13": "#E67E22",
                "\uD83E\uDDD0": "#F1C40F",
                "\uD83D\uDE15": "#F1C40F",
                "\uD83E\uDEE4": "#F1C40F",
                "\uD83D\uDE1F": "#F1C40F",
                "\uD83D\uDE41": "#F1C40F",
                "☹️": "#F1C40F",
                "\uD83D\uDE2E": "#F1C40F",
                "\uD83D\uDE2F": "#F1C40F",
                "\uD83D\uDE32": "#F1C40F",
                "\uD83D\uDE33": "#E67E22",
                "\uD83E\uDD7A": "#F1C40F",
                "\uD83E\uDD79": "#F1C40F",
                "\uD83D\uDE26": "#F1C40F",
                "\uD83D\uDE27": "#F1C40F",
                "\uD83D\uDE28": "#5865F2",
                "\uD83D\uDE30": "#E67E22",
                "\uD83D\uDE25": "#F1C40F",
                "\uD83D\uDE22": "#F1C40F",
                "\uD83D\uDE2D": "#F1C40F",
                "\uD83D\uDE31": "#9B59B6",
                "\uD83D\uDE16": "#F1C40F",
                "\uD83D\uDE23": "#F1C40F",
                "\uD83D\uDE1E": "#F1C40F",
                "\uD83D\uDE13": "#F1C40F",
                "\uD83D\uDE29": "#F1C40F",
                "\uD83D\uDE2B": "#F1C40F",
                "\uD83E\uDD71": "#F1C40F",
                "\uD83D\uDE24": "#F1C40F",
                "\uD83D\uDE21": "#E67E22",
                "\uD83D\uDE20": "#F1C40F",
                "\uD83E\uDD2C": "#992D22",
                "\uD83D\uDE08": "#9B59B6",
                "\uD83D\uDC7F": "#9B59B6",
                "\uD83D\uDC80": "#9B59B6",
                "☠️": "#9B59B6",
                "\uD83D\uDCA9": "#992D22",
                "\uD83E\uDD21": "#9B59B6",
                "\uD83D\uDC79": "#E74C3C",
                "\uD83D\uDC7A": "#E74C3C",
                "\uD83D\uDC7B": "#9B59B6",
                "\uD83D\uDC7D": "#9B59B6",
                "\uD83D\uDC7E": "#9B59B6",
                "\uD83E\uDD16": "#607D8B",
                "\uD83D\uDE3A": "#E67E22",
                "\uD83D\uDE38": "#E67E22",
                "\uD83D\uDE39": "#E67E22",
                "\uD83D\uDE3B": "#E67E22",
                "\uD83D\uDE3C": "#E67E22",
                "\uD83D\uDE3D": "#E67E22",
                "\uD83D\uDE40": "#E67E22",
                "\uD83D\uDE3F": "#E67E22",
                "\uD83D\uDE3E": "#E67E22",
                "\uD83D\uDE48": "#E67E22",
                "\uD83D\uDE49": "#E67E22",
                "\uD83D\uDE4A": "#E67E22",
                "\uD83D\uDC8B": "#992D22",
                "\uD83D\uDC8C": "#9B59B6",
                "\uD83D\uDC98": "#3498DB",
                "\uD83D\uDC9D": "#E91E63",
                "\uD83D\uDC96": "#E91E63",
                "\uD83D\uDC97": "#E91E63",
                "\uD83D\uDC93": "#E91E63",
                "\uD83D\uDC9E": "#E91E63",
                "\uD83D\uDC95": "#E91E63",
                "\uD83D\uDC9F": "#9B59B6",
                "❣️": "#E74C3C",
                "\uD83D\uDC94": "#E74C3C",
                "❤️‍\uD83D\uDD25": "#E74C3C",
                "❤️‍\uD83E\uDE79": "#9B59B6",
                "❤️": "#E74C3C",
                "\uD83E\uDDE1": "#E67E22",
                "\uD83D\uDC9B": "#F1C40F",
                "\uD83D\uDC9A": "#11806A",
                "\uD83D\uDC99": "#3498DB",
                "\uD83D\uDC9C": "#9B59B6",
                "\uD83E\uDD0E": "#992D22",
                "\uD83D\uDDA4": "#607D8B",
                "\uD83E\uDD0D": "#9B59B6",
                "\uD83D\uDCAF": "#992D22",
                "\uD83D\uDCA2": "#E74C3C",
                "\uD83D\uDCA5": "#E74C3C",
                "\uD83D\uDCAB": "#F1C40F",
                "\uD83D\uDCA6": "#9B59B6",
                "\uD83D\uDCA8": "#9B59B6",
                "\uD83D\uDD73️": "#9B59B6",
                "\uD83D\uDCA3": "#11806A",
                "\uD83D\uDCAC": "#9B59B6",
                "\uD83D\uDC41️‍\uD83D\uDDE8️": "#11806A",
                "\uD83D\uDDE8️": "#206694",
                "\uD83D\uDDEF️": "#9B59B6",
                "\uD83D\uDCAD": "#9B59B6",
                "\uD83D\uDCA4": "#206694",
                "\uD83D\uDC4B": "#F1C40F",
                "\uD83E\uDD1A": "#F1C40F",
                "\uD83D\uDD90️": "#F1C40F",
                "✋": "#F1C40F",
                "\uD83D\uDD96": "#F1C40F",
                "\uD83E\uDEF1": "#F1C40F",
                "\uD83E\uDEF2": "#F1C40F",
                "\uD83E\uDEF3": "#F1C40F",
                "\uD83E\uDEF4": "#F1C40F",
                "\uD83D\uDC4C": "#F1C40F",
                "\uD83E\uDD0C": "#F1C40F",
                "\uD83E\uDD0F": "#E67E22",
                "✌️": "#F1C40F",
                "\uD83E\uDD1E": "#F1C40F",
                "\uD83E\uDEF0": "#F1C40F",
                "\uD83E\uDD1F": "#F1C40F",
                "\uD83E\uDD18": "#F1C40F",
                "\uD83E\uDD19": "#F1C40F",
                "\uD83D\uDC48": "#F1C40F",
                "\uD83D\uDC49": "#F1C40F",
                "\uD83D\uDC46": "#F1C40F",
                "\uD83D\uDD95": "#F1C40F",
                "\uD83D\uDC47": "#E67E22",
                "☝️": "#F1C40F",
                "\uD83E\uDEF5": "#F1C40F",
                "\uD83D\uDC4D": "#F1C40F",
                "\uD83D\uDC4E": "#F1C40F",
                "✊": "#F1C40F",
                "\uD83D\uDC4A": "#E67E22",
                "\uD83E\uDD1B": "#F1C40F",
                "\uD83E\uDD1C": "#E67E22",
                "\uD83D\uDC4F": "#F1C40F",
                "\uD83D\uDE4C": "#F1C40F",
                "\uD83E\uDEF6": "#E67E22",
                "\uD83D\uDC50": "#F1C40F",
                "\uD83E\uDD32": "#F1C40F",
                "\uD83E\uDD1D": "#F1C40F",
                "\uD83D\uDE4F": "#F1C40F",
                "✍️": "#607D8B",
                "\uD83D\uDC85": "#F1C40F",
                "\uD83E\uDD33": "#9B59B6",
                "\uD83D\uDCAA": "#F1C40F",
                "\uD83E\uDDBE": "#11806A",
                "\uD83E\uDDBF": "#9B59B6",
                "\uD83E\uDDB5": "#E67E22",
                "\uD83E\uDDB6": "#F1C40F",
                "\uD83D\uDC42": "#F1C40F",
                "\uD83E\uDDBB": "#F1C40F",
                "\uD83D\uDC43": "#F1C40F",
                "\uD83E\uDDE0": "#9B59B6",
                "\uD83E\uDEC0": "#E74C3C",
                "\uD83E\uDEC1": "#E74C3C",
                "\uD83E\uDDB7": "#9B59B6",
                "\uD83E\uDDB4": "#9B59B6",
                "\uD83D\uDC40": "#9B59B6",
                "\uD83D\uDC41️": "#9B59B6",
                "\uD83D\uDC45": "#9B59B6",
                "\uD83D\uDC44": "#E74C3C",
                "\uD83E\uDEE6": "#E74C3C",
                "\uD83D\uDC76": "#F1C40F",
                "\uD83E\uDDD2": "#F1C40F",
                "\uD83D\uDC66": "#F1C40F",
                "\uD83D\uDC67": "#F1C40F",
                "\uD83E\uDDD1": "#F1C40F",
                "\uD83D\uDC71": "#F1C40F",
                "\uD83D\uDC68": "#F1C40F",
                "\uD83E\uDDD4": "#F1C40F",
                "\uD83E\uDDD4‍♂️": "#F1C40F",
                "\uD83E\uDDD4‍♀️": "#E67E22",
                "\uD83D\uDC68‍\uD83E\uDDB0": "#F1C40F",
                "\uD83D\uDC68‍\uD83E\uDDB1": "#F1C40F",
                "\uD83D\uDC68‍\uD83E\uDDB3": "#F1C40F",
                "\uD83D\uDC68‍\uD83E\uDDB2": "#F1C40F",
                "\uD83D\uDC69": "#F1C40F",
                "\uD83D\uDC69‍\uD83E\uDDB0": "#E67E22",
                "\uD83E\uDDD1‍\uD83E\uDDB0": "#F1C40F",
                "\uD83D\uDC69‍\uD83E\uDDB1": "#F1C40F",
                "\uD83E\uDDD1‍\uD83E\uDDB1": "#F1C40F",
                "\uD83D\uDC69‍\uD83E\uDDB3": "#F1C40F",
                "\uD83E\uDDD1‍\uD83E\uDDB3": "#F1C40F",
                "\uD83D\uDC69‍\uD83E\uDDB2": "#F1C40F",
                "\uD83E\uDDD1‍\uD83E\uDDB2": "#F1C40F",
                "\uD83D\uDC71‍♀️": "#F1C40F",
                "\uD83D\uDC71‍♂️": "#F1C40F",
                "\uD83E\uDDD3": "#F1C40F",
                "\uD83D\uDC74": "#F1C40F",
                "\uD83D\uDC75": "#F1C40F",
                "\uD83D\uDE4D": "#F1C40F",
                "\uD83D\uDE4D‍♂️": "#206694",
                "\uD83D\uDE4D‍♀️": "#F1C40F",
                "\uD83D\uDE4E": "#F1C40F",
                "\uD83D\uDE4E‍♂️": "#F1C40F",
                "\uD83D\uDE4E‍♀️": "#E67E22",
                "\uD83D\uDE45": "#9B59B6",
                "\uD83D\uDE45‍♂️": "#3498DB",
                "\uD83D\uDE45‍♀️": "#992D22",
                "\uD83D\uDE46": "#9B59B6",
                "\uD83D\uDE46‍♂️": "#206694",
                "\uD83D\uDE46‍♀️": "#992D22",
                "\uD83D\uDC81": "#F1C40F",
                "\uD83D\uDC81‍♂️": "#F1C40F",
                "\uD83D\uDC81‍♀️": "#F1C40F",
                "\uD83D\uDE4B": "#F1C40F",
                "\uD83D\uDE4B‍♂️": "#F1C40F",
                "\uD83D\uDE4B‍♀️": "#9B59B6",
                "\uD83E\uDDCF": "#F1C40F",
                "\uD83E\uDDCF‍♂️": "#206694",
                "\uD83E\uDDCF‍♀️": "#E67E22",
                "\uD83D\uDE47": "#F1C40F",
                "\uD83D\uDE47‍♂️": "#206694",
                "\uD83D\uDE47‍♀️": "#992D22",
                "\uD83E\uDD26": "#9B59B6",
                "\uD83E\uDD26‍♂️": "#206694",
                "\uD83E\uDD26‍♀️": "#992D22",
                "\uD83E\uDD37": "#E67E22",
                "\uD83E\uDD37‍♂️": "#F1C40F",
                "\uD83E\uDD37‍♀️": "#992D22",
                "\uD83E\uDDD1‍⚕️": "#9B59B6",
                "\uD83D\uDC68‍⚕️": "#F1C40F",
                "\uD83D\uDC69‍⚕️": "#9B59B6",
                "\uD83E\uDDD1‍\uD83C\uDF93": "#F1C40F",
                "\uD83D\uDC68‍\uD83C\uDF93": "#F1C40F",
                "\uD83D\uDC69‍\uD83C\uDF93": "#E67E22",
                "\uD83E\uDDD1‍\uD83C\uDFEB": "#E67E22",
                "\uD83D\uDC68‍\uD83C\uDFEB": "#E67E22",
                "\uD83D\uDC69‍\uD83C\uDFEB": "#E67E22",
                "\uD83E\uDDD1‍⚖️": "#F1C40F",
                "\uD83D\uDC68‍⚖️": "#F1C40F",
                "\uD83D\uDC69‍⚖️": "#E67E22",
                "\uD83E\uDDD1‍\uD83C\uDF3E": "#992D22",
                "\uD83D\uDC68‍\uD83C\uDF3E": "#E67E22",
                "\uD83D\uDC69‍\uD83C\uDF3E": "#992D22",
                "\uD83E\uDDD1‍\uD83C\uDF73": "#E67E22",
                "\uD83D\uDC68‍\uD83C\uDF73": "#E67E22",
                "\uD83D\uDC69‍\uD83C\uDF73": "#E67E22",
                "\uD83E\uDDD1‍\uD83D\uDD27": "#5865F2",
                "\uD83D\uDC68‍\uD83D\uDD27": "#206694",
                "\uD83D\uDC69‍\uD83D\uDD27": "#5865F2",
                "\uD83E\uDDD1‍\uD83C\uDFED": "#F1C40F",
                "\uD83D\uDC68‍\uD83C\uDFED": "#F1C40F",
                "\uD83D\uDC69‍\uD83C\uDFED": "#F1C40F",
                "\uD83E\uDDD1‍\uD83D\uDCBC": "#F1C40F",
                "\uD83D\uDC68‍\uD83D\uDCBC": "#F1C40F",
                "\uD83D\uDC69‍\uD83D\uDCBC": "#F1C40F",
                "\uD83E\uDDD1‍\uD83D\uDD2C": "#9B59B6",
                "\uD83D\uDC68‍\uD83D\uDD2C": "#9B59B6",
                "\uD83D\uDC69‍\uD83D\uDD2C": "#9B59B6",
                "\uD83E\uDDD1‍\uD83D\uDCBB": "#9B59B6",
                "\uD83D\uDC68‍\uD83D\uDCBB": "#9B59B6",
                "\uD83D\uDC69‍\uD83D\uDCBB": "#9B59B6",
                "\uD83E\uDDD1‍\uD83C\uDFA4": "#1ABC9C",
                "\uD83D\uDC68‍\uD83C\uDFA4": "#206694",
                "\uD83D\uDC69‍\uD83C\uDFA4": "#9B59B6",
                "\uD83E\uDDD1‍\uD83C\uDFA8": "#E67E22",
                "\uD83D\uDC68‍\uD83C\uDFA8": "#E67E22",
                "\uD83D\uDC69‍\uD83C\uDFA8": "#E67E22",
                "\uD83E\uDDD1‍✈️": "#992D22",
                "\uD83D\uDC68‍✈️": "#F1C40F",
                "\uD83D\uDC69‍✈️": "#992D22",
                "\uD83E\uDDD1‍\uD83D\uDE80": "#9B59B6",
                "\uD83D\uDC68‍\uD83D\uDE80": "#9B59B6",
                "\uD83D\uDC69‍\uD83D\uDE80": "#9B59B6",
                "\uD83E\uDDD1‍\uD83D\uDE92": "#992D22",
                "\uD83D\uDC68‍\uD83D\uDE92": "#992D22",
                "\uD83D\uDC69‍\uD83D\uDE92": "#992D22",
                "\uD83D\uDC6E": "#F1C40F",
                "\uD83D\uDC6E‍♂️": "#F1C40F",
                "\uD83D\uDC6E‍♀️": "#F1C40F",
                "\uD83D\uDD75️": "#992D22",
                "\uD83D\uDD75️‍♂️": "#992D22",
                "\uD83D\uDD75️‍♀️": "#992D22",
                "\uD83D\uDC82": "#E67E22",
                "\uD83D\uDC82‍♂️": "#E67E22",
                "\uD83D\uDC82‍♀️": "#E67E22",
                "\uD83E\uDD77": "#11806A",
                "\uD83D\uDC77": "#F1C40F",
                "\uD83D\uDC77‍♂️": "#F1C40F",
                "\uD83D\uDC77‍♀️": "#F1C40F",
                "\uD83E\uDEC5": "#E67E22",
                "\uD83E\uDD34": "#F1C40F",
                "\uD83D\uDC78": "#F1C40F",
                "\uD83D\uDC73": "#F1C40F",
                "\uD83D\uDC73‍♂️": "#9B59B6",
                "\uD83D\uDC73‍♀️": "#F1C40F",
                "\uD83D\uDC72": "#992D22",
                "\uD83E\uDDD5": "#206694",
                "\uD83E\uDD35": "#F1C40F",
                "\uD83E\uDD35‍♂️": "#992D22",
                "\uD83E\uDD35‍♀️": "#E67E22",
                "\uD83D\uDC70": "#F1C40F",
                "\uD83D\uDC70‍♂️": "#F1C40F",
                "\uD83D\uDC70‍♀️": "#F1C40F",
                "\uD83E\uDD30": "#9B59B6",
                "\uD83E\uDEC3": "#E67E22",
                "\uD83E\uDEC4": "#9B59B6",
                "\uD83E\uDD31": "#992D22",
                "\uD83D\uDC69‍\uD83C\uDF7C": "#992D22",
                "\uD83D\uDC68‍\uD83C\uDF7C": "#E67E22",
                "\uD83E\uDDD1‍\uD83C\uDF7C": "#E67E22",
                "\uD83D\uDC7C": "#F1C40F",
                "\uD83C\uDF85": "#9B59B6",
                "\uD83E\uDD36": "#9B59B6",
                "\uD83E\uDDD1‍\uD83C\uDF84": "#E67E22",
                "\uD83E\uDDB8": "#E67E22",
                "\uD83E\uDDB8‍♂️": "#E67E22",
                "\uD83E\uDDB8‍♀️": "#E67E22",
                "\uD83E\uDDB9": "#F1C40F",
                "\uD83E\uDDB9‍♂️": "#F1C40F",
                "\uD83E\uDDB9‍♀️": "#E67E22",
                "\uD83E\uDDD9": "#992D22",
                "\uD83E\uDDD9‍♂️": "#992D22",
                "\uD83E\uDDD9‍♀️": "#992D22",
                "\uD83E\uDDDA": "#E67E22",
                "\uD83E\uDDDA‍♂️": "#E67E22",
                "\uD83E\uDDDA‍♀️": "#3498DB",
                "\uD83E\uDDDB": "#F1C40F",
                "\uD83E\uDDDB‍♂️": "#607D8B",
                "\uD83E\uDDDB‍♀️": "#E67E22",
                "\uD83E\uDDDC": "#206694",
                "\uD83E\uDDDC‍♂️": "#E67E22",
                "\uD83E\uDDDC‍♀️": "#9B59B6",
                "\uD83E\uDDDD": "#11806A",
                "\uD83E\uDDDD‍♂️": "#F1C40F",
                "\uD83E\uDDDD‍♀️": "#9B59B6",
                "\uD83E\uDDDE": "#206694",
                "\uD83E\uDDDE‍♂️": "#3498DB",
                "\uD83E\uDDDE‍♀️": "#9B59B6",
                "\uD83E\uDDDF": "#11806A",
                "\uD83E\uDDDF‍♂️": "#11806A",
                "\uD83E\uDDDF‍♀️": "#11806A",
                "\uD83E\uDDCC": "#992D22",
                "\uD83D\uDC86": "#F1C40F",
                "\uD83D\uDC86‍♂️": "#F1C40F",
                "\uD83D\uDC86‍♀️": "#F1C40F",
                "\uD83D\uDC87": "#F1C40F",
                "\uD83D\uDC87‍♂️": "#F1C40F",
                "\uD83D\uDC87‍♀️": "#F1C40F",
                "\uD83D\uDEB6": "#206694",
                "\uD83D\uDEB6‍♂️": "#206694",
                "\uD83D\uDEB6‍♀️": "#206694",
                "\uD83E\uDDCD": "#9B59B6",
                "\uD83E\uDDCD‍♂️": "#992D22",
                "\uD83E\uDDCD‍♀️": "#F1C40F",
                "\uD83E\uDDCE": "#E67E22",
                "\uD83E\uDDCE‍♂️": "#F1C40F",
                "\uD83E\uDDCE‍♀️": "#E67E22",
                "\uD83E\uDDD1‍\uD83E\uDDAF": "#206694",
                "\uD83D\uDC68‍\uD83E\uDDAF": "#206694",
                "\uD83D\uDC69‍\uD83E\uDDAF": "#206694",
                "\uD83E\uDDD1‍\uD83E\uDDBC": "#11806A",
                "\uD83D\uDC68‍\uD83E\uDDBC": "#992D22",
                "\uD83D\uDC69‍\uD83E\uDDBC": "#992D22",
                "\uD83E\uDDD1‍\uD83E\uDDBD": "#11806A",
                "\uD83D\uDC68‍\uD83E\uDDBD": "#11806A",
                "\uD83D\uDC69‍\uD83E\uDDBD": "#206694",
                "\uD83C\uDFC3": "#F1C40F",
                "\uD83C\uDFC3‍♂️": "#206694",
                "\uD83C\uDFC3‍♀️": "#3498DB",
                "\uD83D\uDC83": "#F1C40F",
                "\uD83D\uDD7A": "#992D22",
                "\uD83D\uDD74️": "#607D8B",
                "\uD83D\uDC6F": "#E67E22",
                "\uD83D\uDC6F‍♂️": "#992D22",
                "\uD83D\uDC6F‍♀️": "#E67E22",
                "\uD83E\uDDD6": "#9B59B6",
                "\uD83E\uDDD6‍♂️": "#9B59B6",
                "\uD83E\uDDD6‍♀️": "#F1C40F",
                "\uD83E\uDDD7": "#9B59B6",
                "\uD83E\uDDD7‍♂️": "#9B59B6",
                "\uD83E\uDDD7‍♀️": "#9B59B6",
                "\uD83E\uDD3A": "#9B59B6",
                "\uD83C\uDFC7": "#992D22",
                "⛷️": "#992D22",
                "\uD83C\uDFC2": "#206694",
                "\uD83C\uDFCC️": "#9B59B6",
                "\uD83C\uDFCC️‍♂️": "#607D8B",
                "\uD83C\uDFCC️‍♀️": "#E67E22",
                "\uD83C\uDFC4": "#E67E22",
                "\uD83C\uDFC4‍♂️": "#F1C40F",
                "\uD83C\uDFC4‍♀️": "#9B59B6",
                "\uD83D\uDEA3": "#E74C3C",
                "\uD83D\uDEA3‍♂️": "#E74C3C",
                "\uD83D\uDEA3‍♀️": "#E74C3C",
                "\uD83C\uDFCA": "#9B59B6",
                "\uD83C\uDFCA‍♂️": "#9B59B6",
                "\uD83C\uDFCA‍♀️": "#9B59B6",
                "⛹️": "#E67E22",
                "⛹️‍♂️": "#206694",
                "⛹️‍♀️": "#E67E22",
                "\uD83C\uDFCB️": "#E67E22",
                "\uD83C\uDFCB️‍♂️": "#E67E22",
                "\uD83C\uDFCB️‍♀️": "#992D22",
                "\uD83D\uDEB4": "#11806A",
                "\uD83D\uDEB4‍♂️": "#11806A",
                "\uD83D\uDEB4‍♀️": "#992D22",
                "\uD83D\uDEB5": "#9B59B6",
                "\uD83D\uDEB5‍♂️": "#9B59B6",
                "\uD83D\uDEB5‍♀️": "#992D22",
                "\uD83E\uDD38": "#F1C40F",
                "\uD83E\uDD38‍♂️": "#206694",
                "\uD83E\uDD38‍♀️": "#F1C40F",
                "\uD83E\uDD3C": "#E67E22",
                "\uD83E\uDD3C‍♂️": "#E67E22",
                "\uD83E\uDD3C‍♀️": "#E67E22",
                "\uD83E\uDD3D": "#E67E22",
                "\uD83E\uDD3D‍♂️": "#E67E22",
                "\uD83E\uDD3D‍♀️": "#E67E22",
                "\uD83E\uDD3E": "#9B59B6",
                "\uD83E\uDD3E‍♂️": "#E67E22",
                "\uD83E\uDD3E‍♀️": "#E67E22",
                "\uD83E\uDD39": "#E67E22",
                "\uD83E\uDD39‍♂️": "#F1C40F",
                "\uD83E\uDD39‍♀️": "#E67E22",
                "\uD83E\uDDD8": "#F1C40F",
                "\uD83E\uDDD8‍♂️": "#E67E22",
                "\uD83E\uDDD8‍♀️": "#F1C40F",
                "\uD83D\uDEC0": "#9B59B6",
                "\uD83D\uDECC": "#9B59B6",
                "\uD83E\uDDD1‍\uD83E\uDD1D‍\uD83E\uDDD1": "#9B59B6",
                "\uD83D\uDC6D": "#F1C40F",
                "\uD83D\uDC6B": "#F1C40F",
                "\uD83D\uDC6C": "#E67E22",
                "\uD83D\uDC8F": "#9B59B6",
                "\uD83D\uDC69‍❤️‍\uD83D\uDC8B‍\uD83D\uDC68": "#9B59B6",
                "\uD83D\uDC68‍❤️‍\uD83D\uDC8B‍\uD83D\uDC68": "#9B59B6",
                "\uD83D\uDC69‍❤️‍\uD83D\uDC8B‍\uD83D\uDC69": "#9B59B6",
                "\uD83D\uDC91": "#9B59B6",
                "\uD83D\uDC69‍❤️‍\uD83D\uDC68": "#9B59B6",
                "\uD83D\uDC68‍❤️‍\uD83D\uDC68": "#9B59B6",
                "\uD83D\uDC69‍❤️‍\uD83D\uDC69": "#9B59B6",
                "\uD83D\uDC6A": "#F1C40F",
                "\uD83D\uDC68‍\uD83D\uDC69‍\uD83D\uDC66": "#206694",
                "\uD83D\uDC68‍\uD83D\uDC69‍\uD83D\uDC67": "#F1C40F",
                "\uD83D\uDC68‍\uD83D\uDC69‍\uD83D\uDC67‍\uD83D\uDC66": "#F1C40F",
                "\uD83D\uDC68‍\uD83D\uDC69‍\uD83D\uDC66‍\uD83D\uDC66": "#F1C40F",
                "\uD83D\uDC68‍\uD83D\uDC69‍\uD83D\uDC67‍\uD83D\uDC67": "#F1C40F",
                "\uD83D\uDC68‍\uD83D\uDC68‍\uD83D\uDC66": "#206694",
                "\uD83D\uDC68‍\uD83D\uDC68‍\uD83D\uDC67": "#F1C40F",
                "\uD83D\uDC68‍\uD83D\uDC68‍\uD83D\uDC67‍\uD83D\uDC66": "#206694",
                "\uD83D\uDC68‍\uD83D\uDC68‍\uD83D\uDC66‍\uD83D\uDC66": "#206694",
                "\uD83D\uDC68‍\uD83D\uDC68‍\uD83D\uDC67‍\uD83D\uDC67": "#F1C40F",
                "\uD83D\uDC69‍\uD83D\uDC69‍\uD83D\uDC66": "#E67E22",
                "\uD83D\uDC69‍\uD83D\uDC69‍\uD83D\uDC67": "#E67E22",
                "\uD83D\uDC69‍\uD83D\uDC69‍\uD83D\uDC67‍\uD83D\uDC66": "#E67E22",
                "\uD83D\uDC69‍\uD83D\uDC69‍\uD83D\uDC66‍\uD83D\uDC66": "#F1C40F",
                "\uD83D\uDC69‍\uD83D\uDC69‍\uD83D\uDC67‍\uD83D\uDC67": "#E67E22",
                "\uD83D\uDC68‍\uD83D\uDC66": "#F1C40F",
                "\uD83D\uDC68‍\uD83D\uDC66‍\uD83D\uDC66": "#206694",
                "\uD83D\uDC68‍\uD83D\uDC67": "#206694",
                "\uD83D\uDC68‍\uD83D\uDC67‍\uD83D\uDC66": "#F1C40F",
                "\uD83D\uDC68‍\uD83D\uDC67‍\uD83D\uDC67": "#F1C40F",
                "\uD83D\uDC69‍\uD83D\uDC66": "#F1C40F",
                "\uD83D\uDC69‍\uD83D\uDC66‍\uD83D\uDC66": "#F1C40F",
                "\uD83D\uDC69‍\uD83D\uDC67": "#F1C40F",
                "\uD83D\uDC69‍\uD83D\uDC67‍\uD83D\uDC66": "#F1C40F",
                "\uD83D\uDC69‍\uD83D\uDC67‍\uD83D\uDC67": "#F1C40F",
                "\uD83D\uDDE3️": "#607D8B",
                "\uD83D\uDC64": "#607D8B",
                "\uD83D\uDC65": "#607D8B",
                "\uD83E\uDEC2": "#607D8B",
                "\uD83D\uDC63": "#11806A",
                "\uD83D\uDC35": "#E67E22",
                "\uD83D\uDC12": "#E67E22",
                "\uD83E\uDD8D": "#206694",
                "\uD83E\uDDA7": "#992D22",
                "\uD83D\uDC36": "#9B59B6",
                "\uD83D\uDC15": "#E67E22",
                "\uD83E\uDDAE": "#E67E22",
                "\uD83D\uDC15‍\uD83E\uDDBA": "#992D22",
                "\uD83D\uDC29": "#9B59B6",
                "\uD83D\uDC3A": "#9B59B6",
                "\uD83E\uDD8A": "#E67E22",
                "\uD83E\uDD9D": "#992D22",
                "\uD83D\uDC31": "#F1C40F",
                "\uD83D\uDC08": "#9B59B6",
                "\uD83D\uDC08‍⬛": "#11806A",
                "\uD83E\uDD81": "#E67E22",
                "\uD83D\uDC2F": "#F1C40F",
                "\uD83D\uDC05": "#992D22",
                "\uD83D\uDC06": "#E67E22",
                "\uD83D\uDC34": "#992D22",
                "\uD83D\uDC0E": "#992D22",
                "\uD83E\uDD84": "#9B59B6",
                "\uD83E\uDD93": "#206694",
                "\uD83E\uDD8C": "#E67E22",
                "\uD83E\uDDAC": "#992D22",
                "\uD83D\uDC2E": "#9B59B6",
                "\uD83D\uDC02": "#E74C3C",
                "\uD83D\uDC03": "#992D22",
                "\uD83D\uDC04": "#9B59B6",
                "\uD83D\uDC37": "#9B59B6",
                "\uD83D\uDC16": "#9B59B6",
                "\uD83D\uDC17": "#992D22",
                "\uD83D\uDC3D": "#9B59B6",
                "\uD83D\uDC0F": "#9B59B6",
                "\uD83D\uDC11": "#9B59B6",
                "\uD83D\uDC10": "#9B59B6",
                "\uD83D\uDC2A": "#E67E22",
                "\uD83D\uDC2B": "#E67E22",
                "\uD83E\uDD99": "#9B59B6",
                "\uD83E\uDD92": "#E67E22",
                "\uD83D\uDC18": "#9B59B6",
                "\uD83E\uDDA3": "#992D22",
                "\uD83E\uDD8F": "#9B59B6",
                "\uD83E\uDD9B": "#9B59B6",
                "\uD83D\uDC2D": "#9B59B6",
                "\uD83D\uDC01": "#9B59B6",
                "\uD83D\uDC00": "#9B59B6",
                "\uD83D\uDC39": "#9B59B6",
                "\uD83D\uDC30": "#9B59B6",
                "\uD83D\uDC07": "#9B59B6",
                "\uD83D\uDC3F️": "#992D22",
                "\uD83E\uDDAB": "#992D22",
                "\uD83E\uDD94": "#992D22",
                "\uD83E\uDD87": "#992D22",
                "\uD83D\uDC3B": "#992D22",
                "\uD83D\uDC3B‍❄️": "#9B59B6",
                "\uD83D\uDC28": "#9B59B6",
                "\uD83D\uDC3C": "#11806A",
                "\uD83E\uDDA5": "#992D22",
                "\uD83E\uDDA6": "#992D22",
                "\uD83E\uDDA8": "#9B59B6",
                "\uD83E\uDD98": "#E67E22",
                "\uD83E\uDDA1": "#9B59B6",
                "\uD83D\uDC3E": "#11806A",
                "\uD83E\uDD83": "#992D22",
                "\uD83D\uDC14": "#E74C3C",
                "\uD83D\uDC13": "#9B59B6",
                "\uD83D\uDC23": "#F1C40F",
                "\uD83D\uDC24": "#F1C40F",
                "\uD83D\uDC25": "#F1C40F",
                "\uD83D\uDC26": "#9B59B6",
                "\uD83D\uDC27": "#E67E22",
                "\uD83D\uDD4A️": "#9B59B6",
                "\uD83E\uDD85": "#992D22",
                "\uD83E\uDD86": "#9B59B6",
                "\uD83E\uDDA2": "#9B59B6",
                "\uD83E\uDD89": "#992D22",
                "\uD83E\uDDA4": "#E67E22",
                "\uD83E\uDEB6": "#992D22",
                "\uD83E\uDDA9": "#E74C3C",
                "\uD83E\uDD9A": "#11806A",
                "\uD83E\uDD9C": "#11806A",
                "\uD83D\uDC38": "#11806A",
                "\uD83D\uDC0A": "#11806A",
                "\uD83D\uDC22": "#11806A",
                "\uD83E\uDD8E": "#11806A",
                "\uD83D\uDC0D": "#992D22",
                "\uD83D\uDC32": "#F1C40F",
                "\uD83D\uDC09": "#992D22",
                "\uD83E\uDD95": "#206694",
                "\uD83E\uDD96": "#11806A",
                "\uD83D\uDC33": "#3498DB",
                "\uD83D\uDC0B": "#9B59B6",
                "\uD83D\uDC2C": "#3498DB",
                "\uD83E\uDDAD": "#9B59B6",
                "\uD83D\uDC1F": "#3498DB",
                "\uD83D\uDC20": "#F1C40F",
                "\uD83D\uDC21": "#E67E22",
                "\uD83E\uDD88": "#9B59B6",
                "\uD83D\uDC19": "#992D22",
                "\uD83D\uDC1A": "#9B59B6",
                "\uD83E\uDEB8": "#E74C3C",
                "\uD83D\uDC0C": "#E67E22",
                "\uD83E\uDD8B": "#11806A",
                "\uD83D\uDC1B": "#992D22",
                "\uD83D\uDC1C": "#992D22",
                "\uD83D\uDC1D": "#607D8B",
                "\uD83E\uDEB2": "#11806A",
                "\uD83D\uDC1E": "#992D22",
                "\uD83E\uDD97": "#992D22",
                "\uD83E\uDEB3": "#992D22",
                "\uD83D\uDD77️": "#11806A",
                "\uD83D\uDD78️": "#9B59B6",
                "\uD83E\uDD82": "#992D22",
                "\uD83E\uDD9F": "#992D22",
                "\uD83E\uDEB0": "#E67E22",
                "\uD83E\uDEB1": "#E74C3C",
                "\uD83E\uDDA0": "#11806A",
                "\uD83D\uDC90": "#F1C40F",
                "\uD83C\uDF38": "#9B59B6",
                "\uD83D\uDCAE": "#9B59B6",
                "\uD83E\uDEB7": "#9B59B6",
                "\uD83C\uDFF5️": "#E67E22",
                "\uD83C\uDF39": "#992D22",
                "\uD83E\uDD40": "#9B59B6",
                "\uD83C\uDF3A": "#E91E63",
                "\uD83C\uDF3B": "#F1C40F",
                "\uD83C\uDF3C": "#F1C40F",
                "\uD83C\uDF37": "#E74C3C",
                "\uD83C\uDF31": "#11806A",
                "\uD83E\uDEB4": "#11806A",
                "\uD83C\uDF32": "#11806A",
                "\uD83C\uDF33": "#11806A",
                "\uD83C\uDF34": "#11806A",
                "\uD83C\uDF35": "#11806A",
                "\uD83C\uDF3E": "#E67E22",
                "\uD83C\uDF3F": "#11806A",
                "☘️": "#11806A",
                "\uD83C\uDF40": "#11806A",
                "\uD83C\uDF41": "#992D22",
                "\uD83C\uDF42": "#992D22",
                "\uD83C\uDF43": "#11806A",
                "\uD83E\uDEB9": "#992D22",
                "\uD83E\uDEBA": "#3498DB",
                "\uD83C\uDF47": "#992D22",
                "\uD83C\uDF48": "#9B59B6",
                "\uD83C\uDF49": "#E74C3C",
                "\uD83C\uDF4A": "#E67E22",
                "\uD83C\uDF4B": "#F1C40F",
                "\uD83C\uDF4C": "#9B59B6",
                "\uD83C\uDF4D": "#992D22",
                "\uD83E\uDD6D": "#E67E22",
                "\uD83C\uDF4E": "#E74C3C",
                "\uD83C\uDF4F": "#11806A",
                "\uD83C\uDF50": "#E67E22",
                "\uD83C\uDF51": "#E74C3C",
                "\uD83C\uDF52": "#E74C3C",
                "\uD83C\uDF53": "#992D22",
                "\uD83E\uDED0": "#206694",
                "\uD83E\uDD5D": "#F1C40F",
                "\uD83C\uDF45": "#E74C3C",
                "\uD83E\uDED2": "#992D22",
                "\uD83E\uDD65": "#9B59B6",
                "\uD83E\uDD51": "#F1C40F",
                "\uD83C\uDF46": "#992D22",
                "\uD83E\uDD54": "#992D22",
                "\uD83E\uDD55": "#E67E22",
                "\uD83C\uDF3D": "#992D22",
                "\uD83C\uDF36️": "#E74C3C",
                "\uD83E\uDED1": "#11806A",
                "\uD83E\uDD52": "#F1C40F",
                "\uD83E\uDD6C": "#11806A",
                "\uD83E\uDD66": "#11806A",
                "\uD83E\uDDC4": "#9B59B6",
                "\uD83E\uDDC5": "#E67E22",
                "\uD83C\uDF44": "#E74C3C",
                "\uD83E\uDD5C": "#E67E22",
                "\uD83E\uDED8": "#992D22",
                "\uD83C\uDF30": "#992D22",
                "\uD83C\uDF5E": "#E67E22",
                "\uD83E\uDD50": "#E67E22",
                "\uD83E\uDD56": "#F1C40F",
                "\uD83E\uDED3": "#9B59B6",
                "\uD83E\uDD68": "#E74C3C",
                "\uD83E\uDD6F": "#E67E22",
                "\uD83E\uDD5E": "#F1C40F",
                "\uD83E\uDDC7": "#E67E22",
                "\uD83E\uDDC0": "#F1C40F",
                "\uD83C\uDF56": "#992D22",
                "\uD83C\uDF57": "#992D22",
                "\uD83E\uDD69": "#992D22",
                "\uD83E\uDD53": "#E74C3C",
                "\uD83C\uDF54": "#E67E22",
                "\uD83C\uDF5F": "#F1C40F",
                "\uD83C\uDF55": "#E67E22",
                "\uD83C\uDF2D": "#E67E22",
                "\uD83E\uDD6A": "#F1C40F",
                "\uD83C\uDF2E": "#F1C40F",
                "\uD83C\uDF2F": "#9B59B6",
                "\uD83E\uDED4": "#E67E22",
                "\uD83E\uDD59": "#E67E22",
                "\uD83E\uDDC6": "#992D22",
                "\uD83E\uDD5A": "#9B59B6",
                "\uD83C\uDF73": "#11806A",
                "\uD83E\uDD58": "#E67E22",
                "\uD83C\uDF72": "#9B59B6",
                "\uD83E\uDED5": "#992D22",
                "\uD83E\uDD63": "#3498DB",
                "\uD83E\uDD57": "#11806A",
                "\uD83C\uDF7F": "#E74C3C",
                "\uD83E\uDDC8": "#F1C40F",
                "\uD83E\uDDC2": "#9B59B6",
                "\uD83E\uDD6B": "#E74C3C",
                "\uD83C\uDF71": "#992D22",
                "\uD83C\uDF58": "#992D22",
                "\uD83C\uDF59": "#9B59B6",
                "\uD83C\uDF5A": "#9B59B6",
                "\uD83C\uDF5B": "#9B59B6",
                "\uD83C\uDF5C": "#9B59B6",
                "\uD83C\uDF5D": "#F1C40F",
                "\uD83C\uDF60": "#E74C3C",
                "\uD83C\uDF62": "#E67E22",
                "\uD83C\uDF63": "#E74C3C",
                "\uD83C\uDF64": "#E67E22",
                "\uD83C\uDF65": "#9B59B6",
                "\uD83E\uDD6E": "#992D22",
                "\uD83C\uDF61": "#9B59B6",
                "\uD83E\uDD5F": "#F1C40F",
                "\uD83E\uDD60": "#E67E22",
                "\uD83E\uDD61": "#9B59B6",
                "\uD83E\uDD80": "#E74C3C",
                "\uD83E\uDD9E": "#992D22",
                "\uD83E\uDD90": "#E74C3C",
                "\uD83E\uDD91": "#E74C3C",
                "\uD83E\uDDAA": "#9B59B6",
                "\uD83C\uDF66": "#E67E22",
                "\uD83C\uDF67": "#9B59B6",
                "\uD83C\uDF68": "#9B59B6",
                "\uD83C\uDF69": "#992D22",
                "\uD83C\uDF6A": "#E67E22",
                "\uD83C\uDF82": "#9B59B6",
                "\uD83C\uDF70": "#9B59B6",
                "\uD83E\uDDC1": "#E67E22",
                "\uD83E\uDD67": "#E67E22",
                "\uD83C\uDF6B": "#E74C3C",
                "\uD83C\uDF6C": "#9B59B6",
                "\uD83C\uDF6D": "#9B59B6",
                "\uD83C\uDF6E": "#9B59B6",
                "\uD83C\uDF6F": "#F1C40F",
                "\uD83C\uDF7C": "#9B59B6",
                "\uD83E\uDD5B": "#9B59B6",
                "☕": "#9B59B6",
                "\uD83E\uDED6": "#9B59B6",
                "\uD83C\uDF75": "#9B59B6",
                "\uD83C\uDF76": "#9B59B6",
                "\uD83C\uDF7E": "#992D22",
                "\uD83C\uDF77": "#9B59B6",
                "\uD83C\uDF78": "#9B59B6",
                "\uD83C\uDF79": "#F1C40F",
                "\uD83C\uDF7A": "#E67E22",
                "\uD83C\uDF7B": "#E67E22",
                "\uD83E\uDD42": "#9B59B6",
                "\uD83E\uDD43": "#9B59B6",
                "\uD83E\uDED7": "#9B59B6",
                "\uD83E\uDD64": "#E74C3C",
                "\uD83E\uDDCB": "#E67E22",
                "\uD83E\uDDC3": "#9B59B6",
                "\uD83E\uDDC9": "#992D22",
                "\uD83E\uDDCA": "#3498DB",
                "\uD83E\uDD62": "#992D22",
                "\uD83C\uDF7D️": "#9B59B6",
                "\uD83C\uDF74": "#9B59B6",
                "\uD83E\uDD44": "#607D8B",
                "\uD83D\uDD2A": "#9B59B6",
                "\uD83E\uDED9": "#9B59B6",
                "\uD83C\uDFFA": "#992D22",
                "\uD83C\uDF0D": "#F1C40F",
                "\uD83C\uDF0E": "#206694",
                "\uD83C\uDF0F": "#F1C40F",
                "\uD83C\uDF10": "#3498DB",
                "\uD83D\uDDFA️": "#3498DB",
                "\uD83D\uDDFE": "#3498DB",
                "\uD83E\uDDED": "#9B59B6",
                "\uD83C\uDFD4️": "#11806A",
                "⛰️": "#11806A",
                "\uD83C\uDF0B": "#11806A",
                "\uD83D\uDDFB": "#9B59B6",
                "\uD83C\uDFD5️": "#992D22",
                "\uD83C\uDFD6️": "#E67E22",
                "\uD83C\uDFDC️": "#992D22",
                "\uD83C\uDFDD️": "#3498DB",
                "\uD83C\uDFDE️": "#3498DB",
                "\uD83C\uDFDF️": "#9B59B6",
                "\uD83C\uDFDB️": "#9B59B6",
                "\uD83C\uDFD7️": "#F1C40F",
                "\uD83E\uDDF1": "#992D22",
                "\uD83E\uDEA8": "#11806A",
                "\uD83E\uDEB5": "#992D22",
                "\uD83D\uDED6": "#992D22",
                "\uD83C\uDFD8️": "#9B59B6",
                "\uD83C\uDFDA️": "#9B59B6",
                "\uD83C\uDFE0": "#9B59B6",
                "\uD83C\uDFE1": "#11806A",
                "\uD83C\uDFE2": "#9B59B6",
                "\uD83C\uDFE3": "#9B59B6",
                "\uD83C\uDFE4": "#9B59B6",
                "\uD83C\uDFE5": "#9B59B6",
                "\uD83C\uDFE6": "#9B59B6",
                "\uD83C\uDFE8": "#9B59B6",
                "\uD83C\uDFE9": "#9B59B6",
                "\uD83C\uDFEA": "#607D8B",
                "\uD83C\uDFEB": "#9B59B6",
                "\uD83C\uDFEC": "#607D8B",
                "\uD83C\uDFED": "#9B59B6",
                "\uD83C\uDFEF": "#206694",
                "\uD83C\uDFF0": "#9B59B6",
                "\uD83D\uDC92": "#9B59B6",
                "\uD83D\uDDFC": "#992D22",
                "\uD83D\uDDFD": "#607D8B",
                "⛪": "#9B59B6",
                "\uD83D\uDD4C": "#E67E22",
                "\uD83D\uDED5": "#E67E22",
                "\uD83D\uDD4D": "#E67E22",
                "⛩️": "#992D22",
                "\uD83D\uDD4B": "#992D22",
                "⛲": "#9B59B6",
                "⛺": "#E74C3C",
                "\uD83C\uDF01": "#9B59B6",
                "\uD83C\uDF03": "#206694",
                "\uD83C\uDFD9️": "#206694",
                "\uD83C\uDF04": "#9B59B6",
                "\uD83C\uDF05": "#E67E22",
                "\uD83C\uDF06": "#E67E22",
                "\uD83C\uDF07": "#E67E22",
                "\uD83C\uDF09": "#206694",
                "♨️": "#992D22",
                "\uD83C\uDFA0": "#9B59B6",
                "\uD83D\uDEDD": "#206694",
                "\uD83C\uDFA1": "#992D22",
                "\uD83C\uDFA2": "#E67E22",
                "\uD83D\uDC88": "#9B59B6",
                "\uD83C\uDFAA": "#9B59B6",
                "\uD83D\uDE82": "#992D22",
                "\uD83D\uDE83": "#607D8B",
                "\uD83D\uDE84": "#9B59B6",
                "\uD83D\uDE85": "#206694",
                "\uD83D\uDE86": "#607D8B",
                "\uD83D\uDE87": "#11806A",
                "\uD83D\uDE88": "#206694",
                "\uD83D\uDE89": "#206694",
                "\uD83D\uDE8A": "#11806A",
                "\uD83D\uDE9D": "#206694",
                "\uD83D\uDE9E": "#9B59B6",
                "\uD83D\uDE8B": "#11806A",
                "\uD83D\uDE8C": "#3498DB",
                "\uD83D\uDE8D": "#607D8B",
                "\uD83D\uDE8E": "#206694",
                "\uD83D\uDE90": "#9B59B6",
                "\uD83D\uDE91": "#11806A",
                "\uD83D\uDE92": "#11806A",
                "\uD83D\uDE93": "#11806A",
                "\uD83D\uDE94": "#11806A",
                "\uD83D\uDE95": "#E67E22",
                "\uD83D\uDE96": "#992D22",
                "\uD83D\uDE97": "#9B59B6",
                "\uD83D\uDE98": "#E74C3C",
                "\uD83D\uDE99": "#3498DB",
                "\uD83D\uDEFB": "#206694",
                "\uD83D\uDE9A": "#E67E22",
                "\uD83D\uDE9B": "#11806A",
                "\uD83D\uDE9C": "#F1C40F",
                "\uD83C\uDFCE️": "#E74C3C",
                "\uD83C\uDFCD️": "#11806A",
                "\uD83D\uDEF5": "#E67E22",
                "\uD83E\uDDBD": "#11806A",
                "\uD83E\uDDBC": "#992D22",
                "\uD83D\uDEFA": "#F1C40F",
                "\uD83D\uDEB2": "#11806A",
                "\uD83D\uDEF4": "#607D8B",
                "\uD83D\uDEF9": "#11806A",
                "\uD83D\uDEFC": "#3498DB",
                "\uD83D\uDE8F": "#9B59B6",
                "\uD83D\uDEE3️": "#11806A",
                "\uD83D\uDEE4️": "#992D22",
                "\uD83D\uDEE2️": "#992D22",
                "⛽": "#E74C3C",
                "\uD83D\uDEDE": "#11806A",
                "\uD83D\uDEA8": "#E74C3C",
                "\uD83D\uDEA5": "#9B59B6",
                "\uD83D\uDEA6": "#11806A",
                "\uD83D\uDED1": "#9B59B6",
                "\uD83D\uDEA7": "#607D8B",
                "⚓": "#206694",
                "\uD83D\uDEDF": "#9B59B6",
                "⛵": "#992D22",
                "\uD83D\uDEF6": "#992D22",
                "\uD83D\uDEA4": "#9B59B6",
                "\uD83D\uDEF3️": "#9B59B6",
                "⛴️": "#206694",
                "\uD83D\uDEE5️": "#9B59B6",
                "\uD83D\uDEA2": "#9B59B6",
                "✈️": "#3498DB",
                "\uD83D\uDEE9️": "#9B59B6",
                "\uD83D\uDEEB": "#206694",
                "\uD83D\uDEEC": "#206694",
                "\uD83E\uDE82": "#992D22",
                "\uD83D\uDCBA": "#607D8B",
                "\uD83D\uDE81": "#E74C3C",
                "\uD83D\uDE9F": "#9B59B6",
                "\uD83D\uDEA0": "#992D22",
                "\uD83D\uDEA1": "#F1C40F",
                "\uD83D\uDEF0️": "#206694",
                "\uD83D\uDE80": "#9B59B6",
                "\uD83D\uDEF8": "#206694",
                "\uD83D\uDECE️": "#992D22",
                "\uD83E\uDDF3": "#992D22",
                "⌛": "#9B59B6",
                "⏳": "#9B59B6",
                "⌚": "#992D22",
                "⏰": "#9B59B6",
                "⏱️": "#9B59B6",
                "⏲️": "#9B59B6",
                "\uD83D\uDD70️": "#9B59B6",
                "\uD83D\uDD5B": "#9B59B6",
                "\uD83D\uDD67": "#9B59B6",
                "\uD83D\uDD50": "#9B59B6",
                "\uD83D\uDD5C": "#9B59B6",
                "\uD83D\uDD51": "#9B59B6",
                "\uD83D\uDD5D": "#9B59B6",
                "\uD83D\uDD52": "#9B59B6",
                "\uD83D\uDD5E": "#9B59B6",
                "\uD83D\uDD53": "#9B59B6",
                "\uD83D\uDD5F": "#9B59B6",
                "\uD83D\uDD54": "#9B59B6",
                "\uD83D\uDD60": "#9B59B6",
                "\uD83D\uDD55": "#9B59B6",
                "\uD83D\uDD61": "#9B59B6",
                "\uD83D\uDD56": "#9B59B6",
                "\uD83D\uDD62": "#9B59B6",
                "\uD83D\uDD57": "#9B59B6",
                "\uD83D\uDD63": "#9B59B6",
                "\uD83D\uDD58": "#9B59B6",
                "\uD83D\uDD64": "#9B59B6",
                "\uD83D\uDD59": "#9B59B6",
                "\uD83D\uDD65": "#9B59B6",
                "\uD83D\uDD5A": "#9B59B6",
                "\uD83D\uDD66": "#9B59B6",
                "\uD83C\uDF11": "#11806A",
                "\uD83C\uDF12": "#11806A",
                "\uD83C\uDF13": "#11806A",
                "\uD83C\uDF14": "#11806A",
                "\uD83C\uDF15": "#F1C40F",
                "\uD83C\uDF16": "#11806A",
                "\uD83C\uDF17": "#11806A",
                "\uD83C\uDF18": "#11806A",
                "\uD83C\uDF19": "#F1C40F",
                "\uD83C\uDF1A": "#206694",
                "\uD83C\uDF1B": "#F1C40F",
                "\uD83C\uDF1C": "#F1C40F",
                "\uD83C\uDF21️": "#9B59B6",
                "☀️": "#F1C40F",
                "\uD83C\uDF1D": "#F1C40F",
                "\uD83C\uDF1E": "#F1C40F",
                "\uD83E\uDE90": "#E67E22",
                "⭐": "#9B59B6",
                "\uD83C\uDF1F": "#9B59B6",
                "\uD83C\uDF20": "#206694",
                "\uD83C\uDF0C": "#9B59B6",
                "☁️": "#9B59B6",
                "⛅": "#9B59B6",
                "⛈️": "#9B59B6",
                "\uD83C\uDF24️": "#9B59B6",
                "\uD83C\uDF25️": "#9B59B6",
                "\uD83C\uDF26️": "#F1C40F",
                "\uD83C\uDF27️": "#9B59B6",
                "\uD83C\uDF28️": "#9B59B6",
                "\uD83C\uDF29️": "#9B59B6",
                "\uD83C\uDF2A️": "#607D8B",
                "\uD83C\uDF2B️": "#9B59B6",
                "\uD83C\uDF2C️": "#9B59B6",
                "\uD83C\uDF00": "#206694",
                "\uD83C\uDF08": "#1ABC9C",
                "\uD83C\uDF02": "#206694",
                "☂️": "#9B59B6",
                "☔": "#5865F2",
                "⛱️": "#F1C40F",
                "⚡": "#F1C40F",
                "❄️": "#3498DB",
                "☃️": "#9B59B6",
                "⛄": "#9B59B6",
                "☄️": "#E67E22",
                "\uD83D\uDD25": "#E67E22",
                "\uD83D\uDCA7": "#3498DB",
                "\uD83C\uDF0A": "#9B59B6",
                "\uD83C\uDF83": "#E67E22",
                "\uD83C\uDF84": "#11806A",
                "\uD83C\uDF86": "#9B59B6",
                "\uD83C\uDF87": "#992D22",
                "\uD83E\uDDE8": "#992D22",
                "✨": "#F1C40F",
                "\uD83C\uDF88": "#E74C3C",
                "\uD83C\uDF89": "#E67E22",
                "\uD83C\uDF8A": "#E67E22",
                "\uD83C\uDF8B": "#E67E22",
                "\uD83C\uDF8D": "#E67E22",
                "\uD83C\uDF8E": "#206694",
                "\uD83C\uDF8F": "#E67E22",
                "\uD83C\uDF90": "#9B59B6",
                "\uD83C\uDF91": "#11806A",
                "\uD83E\uDDE7": "#E74C3C",
                "\uD83C\uDF80": "#9B59B6",
                "\uD83C\uDF81": "#E67E22",
                "\uD83C\uDF97️": "#F1C40F",
                "\uD83C\uDF9F️": "#E74C3C",
                "\uD83C\uDFAB": "#F1C40F",
                "\uD83C\uDF96️": "#F1C40F",
                "\uD83C\uDFC6": "#E67E22",
                "\uD83C\uDFC5": "#F1C40F",
                "\uD83E\uDD47": "#F1C40F",
                "\uD83E\uDD48": "#9B59B6",
                "\uD83E\uDD49": "#992D22",
                "⚽": "#9B59B6",
                "⚾": "#9B59B6",
                "\uD83E\uDD4E": "#F1C40F",
                "\uD83C\uDFC0": "#E67E22",
                "\uD83C\uDFD0": "#9B59B6",
                "\uD83C\uDFC8": "#E74C3C",
                "\uD83C\uDFC9": "#E67E22",
                "\uD83C\uDFBE": "#F1C40F",
                "\uD83E\uDD4F": "#3498DB",
                "\uD83C\uDFB3": "#9B59B6",
                "\uD83C\uDFCF": "#F1C40F",
                "\uD83C\uDFD1": "#9B59B6",
                "\uD83C\uDFD2": "#E67E22",
                "\uD83E\uDD4D": "#206694",
                "\uD83C\uDFD3": "#E74C3C",
                "\uD83C\uDFF8": "#E67E22",
                "\uD83E\uDD4A": "#E74C3C",
                "\uD83E\uDD4B": "#9B59B6",
                "\uD83E\uDD45": "#992D22",
                "⛳": "#11806A",
                "⛸️": "#9B59B6",
                "\uD83C\uDFA3": "#607D8B",
                "\uD83E\uDD3F": "#11806A",
                "\uD83C\uDFBD": "#3498DB",
                "\uD83C\uDFBF": "#3498DB",
                "\uD83D\uDEF7": "#992D22",
                "\uD83E\uDD4C": "#11806A",
                "\uD83C\uDFAF": "#9B59B6",
                "\uD83E\uDE80": "#11806A",
                "\uD83E\uDE81": "#206694",
                "\uD83C\uDFB1": "#11806A",
                "\uD83D\uDD2E": "#9B59B6",
                "\uD83E\uDE84": "#9B59B6",
                "\uD83E\uDDFF": "#206694",
                "\uD83E\uDEAC": "#206694",
                "\uD83C\uDFAE": "#11806A",
                "\uD83D\uDD79️": "#11806A",
                "\uD83C\uDFB0": "#9B59B6",
                "\uD83C\uDFB2": "#9B59B6",
                "\uD83E\uDDE9": "#1ABC9C",
                "\uD83E\uDDF8": "#E67E22",
                "\uD83E\uDE85": "#9B59B6",
                "\uD83E\uDEA9": "#9B59B6",
                "\uD83E\uDE86": "#E67E22",
                "♠️": "#607D8B",
                "♥️": "#607D8B",
                "♦️": "#607D8B",
                "♣️": "#607D8B",
                "♟️": "#607D8B",
                "\uD83C\uDCCF": "#9B59B6",
                "\uD83C\uDC04": "#9B59B6",
                "\uD83C\uDFB4": "#992D22",
                "\uD83C\uDFAD": "#992D22",
                "\uD83D\uDDBC️": "#F1C40F",
                "\uD83C\uDFA8": "#E67E22",
                "\uD83E\uDDF5": "#E67E22",
                "\uD83E\uDEA1": "#206694",
                "\uD83E\uDDF6": "#E67E22",
                "\uD83E\uDEA2": "#206694",
                "\uD83D\uDC53": "#9B59B6",
                "\uD83D\uDD76️": "#607D8B",
                "\uD83E\uDD7D": "#9B59B6",
                "\uD83E\uDD7C": "#9B59B6",
                "\uD83E\uDDBA": "#E74C3C",
                "\uD83D\uDC54": "#3498DB",
                "\uD83D\uDC55": "#3498DB",
                "\uD83D\uDC56": "#206694",
                "\uD83E\uDDE3": "#992D22",
                "\uD83E\uDDE4": "#1ABC9C",
                "\uD83E\uDDE5": "#E67E22",
                "\uD83E\uDDE6": "#9B59B6",
                "\uD83D\uDC57": "#1ABC9C",
                "\uD83D\uDC58": "#E67E22",
                "\uD83E\uDD7B": "#E67E22",
                "\uD83E\uDE71": "#11806A",
                "\uD83E\uDE72": "#11806A",
                "\uD83E\uDE73": "#E67E22",
                "\uD83D\uDC59": "#9B59B6",
                "\uD83D\uDC5A": "#9B59B6",
                "\uD83D\uDC5B": "#9B59B6",
                "\uD83D\uDC5C": "#E74C3C",
                "\uD83D\uDC5D": "#992D22",
                "\uD83D\uDECD️": "#9B59B6",
                "\uD83C\uDF92": "#E74C3C",
                "\uD83E\uDE74": "#3498DB",
                "\uD83D\uDC5E": "#992D22",
                "\uD83D\uDC5F": "#9B59B6",
                "\uD83E\uDD7E": "#992D22",
                "\uD83E\uDD7F": "#206694",
                "\uD83D\uDC60": "#E74C3C",
                "\uD83D\uDC61": "#9B59B6",
                "\uD83E\uDE70": "#9B59B6",
                "\uD83D\uDC62": "#E67E22",
                "\uD83D\uDC51": "#E67E22",
                "\uD83D\uDC52": "#E67E22",
                "\uD83C\uDFA9": "#11806A",
                "\uD83C\uDF93": "#992D22",
                "\uD83E\uDDE2": "#3498DB",
                "\uD83E\uDE96": "#11806A",
                "⛑️": "#992D22",
                "\uD83D\uDCFF": "#992D22",
                "\uD83D\uDC84": "#E74C3C",
                "\uD83D\uDC8D": "#9B59B6",
                "\uD83D\uDC8E": "#3498DB",
                "\uD83D\uDD07": "#11806A",
                "\uD83D\uDD08": "#11806A",
                "\uD83D\uDD09": "#607D8B",
                "\uD83D\uDD0A": "#11806A",
                "\uD83D\uDCE2": "#9B59B6",
                "\uD83D\uDCE3": "#992D22",
                "\uD83D\uDCEF": "#E74C3C",
                "\uD83D\uDD14": "#992D22",
                "\uD83D\uDD15": "#992D22",
                "\uD83C\uDFBC": "#9B59B6",
                "\uD83C\uDFB5": "#11806A",
                "\uD83C\uDFB6": "#11806A",
                "\uD83C\uDF99️": "#11806A",
                "\uD83C\uDF9A️": "#9B59B6",
                "\uD83C\uDF9B️": "#9B59B6",
                "\uD83C\uDFA4": "#9B59B6",
                "\uD83C\uDFA7": "#9B59B6",
                "\uD83D\uDCFB": "#E67E22",
                "\uD83C\uDFB7": "#E67E22",
                "\uD83E\uDE97": "#992D22",
                "\uD83C\uDFB8": "#E74C3C",
                "\uD83C\uDFB9": "#607D8B",
                "\uD83C\uDFBA": "#E67E22",
                "\uD83C\uDFBB": "#992D22",
                "\uD83E\uDE95": "#9B59B6",
                "\uD83E\uDD41": "#E74C3C",
                "\uD83E\uDE98": "#992D22",
                "\uD83D\uDCF1": "#607D8B",
                "\uD83D\uDCF2": "#607D8B",
                "☎️": "#E74C3C",
                "\uD83D\uDCDE": "#11806A",
                "\uD83D\uDCDF": "#11806A",
                "\uD83D\uDCE0": "#9B59B6",
                "\uD83D\uDD0B": "#11806A",
                "\uD83E\uDEAB": "#9B59B6",
                "\uD83D\uDD0C": "#11806A",
                "\uD83D\uDCBB": "#607D8B",
                "\uD83D\uDDA5️": "#11806A",
                "\uD83D\uDDA8️": "#607D8B",
                "⌨️": "#9B59B6",
                "\uD83D\uDDB1️": "#9B59B6",
                "\uD83D\uDDB2️": "#11806A",
                "\uD83D\uDCBD": "#9B59B6",
                "\uD83D\uDCBE": "#11806A",
                "\uD83D\uDCBF": "#9B59B6",
                "\uD83D\uDCC0": "#9B59B6",
                "\uD83E\uDDEE": "#992D22",
                "\uD83C\uDFA5": "#11806A",
                "\uD83C\uDF9E️": "#9B59B6",
                "\uD83D\uDCFD️": "#206694",
                "\uD83C\uDFAC": "#11806A",
                "\uD83D\uDCFA": "#992D22",
                "\uD83D\uDCF7": "#11806A",
                "\uD83D\uDCF8": "#11806A",
                "\uD83D\uDCF9": "#607D8B",
                "\uD83D\uDCFC": "#11806A",
                "\uD83D\uDD0D": "#11806A",
                "\uD83D\uDD0E": "#11806A",
                "\uD83D\uDD6F️": "#9B59B6",
                "\uD83D\uDCA1": "#9B59B6",
                "\uD83D\uDD26": "#607D8B",
                "\uD83C\uDFEE": "#E74C3C",
                "\uD83E\uDE94": "#992D22",
                "\uD83D\uDCD4": "#F1C40F",
                "\uD83D\uDCD5": "#992D22",
                "\uD83D\uDCD6": "#206694",
                "\uD83D\uDCD7": "#E67E22",
                "\uD83D\uDCD8": "#206694",
                "\uD83D\uDCD9": "#E67E22",
                "\uD83D\uDCDA": "#11806A",
                "\uD83D\uDCD3": "#9B59B6",
                "\uD83D\uDCD2": "#F1C40F",
                "\uD83D\uDCC3": "#9B59B6",
                "\uD83D\uDCDC": "#9B59B6",
                "\uD83D\uDCC4": "#9B59B6",
                "\uD83D\uDCF0": "#9B59B6",
                "\uD83D\uDDDE️": "#9B59B6",
                "\uD83D\uDCD1": "#9B59B6",
                "\uD83D\uDD16": "#9B59B6",
                "\uD83C\uDFF7️": "#F1C40F",
                "\uD83D\uDCB0": "#E67E22",
                "\uD83E\uDE99": "#206694",
                "\uD83D\uDCB4": "#9B59B6",
                "\uD83D\uDCB5": "#9B59B6",
                "\uD83D\uDCB6": "#9B59B6",
                "\uD83D\uDCB7": "#9B59B6",
                "\uD83D\uDCB8": "#9B59B6",
                "\uD83D\uDCB3": "#9B59B6",
                "\uD83E\uDDFE": "#9B59B6",
                "\uD83D\uDCB9": "#9B59B6",
                "✉️": "#9B59B6",
                "\uD83D\uDCE7": "#9B59B6",
                "\uD83D\uDCE8": "#9B59B6",
                "\uD83D\uDCE9": "#9B59B6",
                "\uD83D\uDCE4": "#3498DB",
                "\uD83D\uDCE5": "#3498DB",
                "\uD83D\uDCE6": "#E67E22",
                "\uD83D\uDCEB": "#206694",
                "\uD83D\uDCEA": "#3498DB",
                "\uD83D\uDCEC": "#607D8B",
                "\uD83D\uDCED": "#11806A",
                "\uD83D\uDCEE": "#E74C3C",
                "\uD83D\uDDF3️": "#3498DB",
                "✏️": "#E67E22",
                "✒️": "#11806A",
                "\uD83D\uDD8B️": "#11806A",
                "\uD83D\uDD8A️": "#11806A",
                "\uD83D\uDD8C️": "#206694",
                "\uD83D\uDD8D️": "#E74C3C",
                "\uD83D\uDCDD": "#9B59B6",
                "\uD83D\uDCBC": "#992D22",
                "\uD83D\uDCC1": "#9B59B6",
                "\uD83D\uDCC2": "#9B59B6",
                "\uD83D\uDDC2️": "#E67E22",
                "\uD83D\uDCC5": "#E74C3C",
                "\uD83D\uDCC6": "#9B59B6",
                "\uD83D\uDDD2️": "#9B59B6",
                "\uD83D\uDDD3️": "#9B59B6",
                "\uD83D\uDCC7": "#9B59B6",
                "\uD83D\uDCC8": "#9B59B6",
                "\uD83D\uDCC9": "#9B59B6",
                "\uD83D\uDCCA": "#9B59B6",
                "\uD83D\uDCCB": "#9B59B6",
                "\uD83D\uDCCC": "#E74C3C",
                "\uD83D\uDCCD": "#E74C3C",
                "\uD83D\uDCCE": "#9B59B6",
                "\uD83D\uDD87️": "#9B59B6",
                "\uD83D\uDCCF": "#9B59B6",
                "\uD83D\uDCD0": "#9B59B6",
                "✂️": "#9B59B6",
                "\uD83D\uDDC3️": "#11806A",
                "\uD83D\uDDC4️": "#206694",
                "\uD83D\uDDD1️": "#9B59B6",
                "\uD83D\uDD12": "#E67E22",
                "\uD83D\uDD13": "#E67E22",
                "\uD83D\uDD0F": "#9B59B6",
                "\uD83D\uDD10": "#E67E22",
                "\uD83D\uDD11": "#F1C40F",
                "\uD83D\uDDDD️": "#11806A",
                "\uD83D\uDD28": "#9B59B6",
                "\uD83E\uDE93": "#992D22",
                "⛏️": "#9B59B6",
                "⚒️": "#11806A",
                "\uD83D\uDEE0️": "#11806A",
                "\uD83D\uDDE1️": "#9B59B6",
                "⚔️": "#11806A",
                "\uD83D\uDD2B": "#1ABC9C",
                "\uD83E\uDE83": "#E74C3C",
                "\uD83C\uDFF9": "#9B59B6",
                "\uD83D\uDEE1️": "#9B59B6",
                "\uD83E\uDE9A": "#9B59B6",
                "\uD83D\uDD27": "#206694",
                "\uD83E\uDE9B": "#1ABC9C",
                "\uD83D\uDD29": "#9B59B6",
                "⚙️": "#9B59B6",
                "\uD83D\uDDDC️": "#607D8B",
                "⚖️": "#607D8B",
                "\uD83E\uDDAF": "#9B59B6",
                "\uD83D\uDD17": "#206694",
                "⛓️": "#9B59B6",
                "\uD83E\uDE9D": "#E67E22",
                "\uD83E\uDDF0": "#E74C3C",
                "\uD83E\uDDF2": "#E74C3C",
                "\uD83E\uDE9C": "#992D22",
                "⚗️": "#9B59B6",
                "\uD83E\uDDEA": "#11806A",
                "\uD83E\uDDEB": "#9B59B6",
                "\uD83E\uDDEC": "#3498DB",
                "\uD83D\uDD2C": "#9B59B6",
                "\uD83D\uDD2D": "#9B59B6",
                "\uD83D\uDCE1": "#9B59B6",
                "\uD83D\uDC89": "#9B59B6",
                "\uD83E\uDE78": "#E74C3C",
                "\uD83D\uDC8A": "#F1C40F",
                "\uD83E\uDE79": "#9B59B6",
                "\uD83E\uDE7C": "#9B59B6",
                "\uD83E\uDE7A": "#11806A",
                "\uD83E\uDE7B": "#3498DB",
                "\uD83D\uDEAA": "#992D22",
                "\uD83D\uDED7": "#3498DB",
                "\uD83E\uDE9E": "#E67E22",
                "\uD83E\uDE9F": "#992D22",
                "\uD83D\uDECF️": "#992D22",
                "\uD83D\uDECB️": "#3498DB",
                "\uD83E\uDE91": "#E74C3C",
                "\uD83D\uDEBD": "#9B59B6",
                "\uD83E\uDEA0": "#E74C3C",
                "\uD83D\uDEBF": "#9B59B6",
                "\uD83D\uDEC1": "#9B59B6",
                "\uD83E\uDEA4": "#F1C40F",
                "\uD83E\uDE92": "#9B59B6",
                "\uD83E\uDDF4": "#9B59B6",
                "\uD83E\uDDF7": "#9B59B6",
                "\uD83E\uDDF9": "#992D22",
                "\uD83E\uDDFA": "#992D22",
                "\uD83E\uDDFB": "#9B59B6",
                "\uD83E\uDEA3": "#206694",
                "\uD83E\uDDFC": "#1ABC9C",
                "\uD83E\uDEE7": "#9B59B6",
                "\uD83E\uDEA5": "#9B59B6",
                "\uD83E\uDDFD": "#F1C40F",
                "\uD83E\uDDEF": "#E74C3C",
                "\uD83D\uDED2": "#9B59B6",
                "\uD83D\uDEAC": "#9B59B6",
                "⚰️": "#992D22",
                "\uD83E\uDEA6": "#9B59B6",
                "⚱️": "#E67E22",
                "\uD83D\uDDFF": "#206694",
                "\uD83E\uDEA7": "#9B59B6",
                "\uD83E\uDEAA": "#9B59B6",
                "\uD83C\uDFE7": "#3498DB",
                "\uD83D\uDEAE": "#9B59B6",
                "\uD83D\uDEB0": "#9B59B6",
                "♿": "#9B59B6",
                "\uD83D\uDEB9": "#3498DB",
                "\uD83D\uDEBA": "#9B59B6",
                "\uD83D\uDEBB": "#607D8B",
                "\uD83D\uDEBC": "#E67E22",
                "\uD83D\uDEBE": "#9B59B6",
                "\uD83D\uDEC2": "#9B59B6",
                "\uD83D\uDEC3": "#9B59B6",
                "\uD83D\uDEC4": "#9B59B6",
                "\uD83D\uDEC5": "#9B59B6",
                "⚠️": "#F1C40F",
                "\uD83D\uDEB8": "#F1C40F",
                "⛔": "#9B59B6",
                "\uD83D\uDEAB": "#E74C3C",
                "\uD83D\uDEB3": "#11806A",
                "\uD83D\uDEAD": "#E74C3C",
                "\uD83D\uDEAF": "#E74C3C",
                "\uD83D\uDEB1": "#E74C3C",
                "\uD83D\uDEB7": "#E74C3C",
                "\uD83D\uDCF5": "#E74C3C",
                "\uD83D\uDD1E": "#607D8B",
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
                "\uD83D\uDD03": "#607D8B",
                "\uD83D\uDD04": "#607D8B",
                "\uD83D\uDD19": "#11806A",
                "\uD83D\uDD1A": "#11806A",
                "\uD83D\uDD1B": "#11806A",
                "\uD83D\uDD1C": "#206694",
                "\uD83D\uDD1D": "#11806A",
                "\uD83D\uDED0": "#9B59B6",
                "⚛️": "#9B59B6",
                "\uD83D\uDD49️": "#9B59B6",
                "✡️": "#9B59B6",
                "☸️": "#9B59B6",
                "☯️": "#9B59B6",
                "✝️": "#9B59B6",
                "☦️": "#9B59B6",
                "☪️": "#9B59B6",
                "☮️": "#9B59B6",
                "\uD83D\uDD4E": "#9B59B6",
                "\uD83D\uDD2F": "#9B59B6",
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
                "\uD83D\uDD00": "#607D8B",
                "\uD83D\uDD01": "#607D8B",
                "\uD83D\uDD02": "#607D8B",
                "▶️": "#607D8B",
                "⏩": "#607D8B",
                "⏭️": "#607D8B",
                "⏯️": "#607D8B",
                "◀️": "#607D8B",
                "⏪": "#607D8B",
                "⏮️": "#607D8B",
                "\uD83D\uDD3C": "#607D8B",
                "⏫": "#607D8B",
                "\uD83D\uDD3D": "#607D8B",
                "⏬": "#607D8B",
                "⏸️": "#607D8B",
                "⏹️": "#607D8B",
                "⏺️": "#607D8B",
                "⏏️": "#607D8B",
                "\uD83C\uDFA6": "#607D8B",
                "\uD83D\uDD05": "#F1C40F",
                "\uD83D\uDD06": "#F1C40F",
                "\uD83D\uDCF6": "#9B59B6",
                "\uD83D\uDCF3": "#F1C40F",
                "\uD83D\uDCF4": "#9B59B6",
                "♀️": "#607D8B",
                "♂️": "#607D8B",
                "⚧️": "#607D8B",
                "✖️": "#11806A",
                "➕": "#11806A",
                "➖": "#11806A",
                "➗": "#11806A",
                "\uD83D\uDFF0": "#9B59B6",
                "♾️": "#607D8B",
                "‼️": "#607D8B",
                "⁉️": "#E74C3C",
                "❓": "#992D22",
                "❔": "#9B59B6",
                "❕": "#9B59B6",
                "❗": "#992D22",
                "〰️": "#11806A",
                "\uD83D\uDCB1": "#206694",
                "\uD83D\uDCB2": "#206694",
                "⚕️": "#607D8B",
                "♻️": "#11806A",
                "⚜️": "#992D22",
                "\uD83D\uDD31": "#E67E22",
                "\uD83D\uDCDB": "#9B59B6",
                "\uD83D\uDD30": "#F1C40F",
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
                "\xa9️": "#607D8B",
                "\xae️": "#607D8B",
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
                "\uD83D\uDD1F": "#607D8B",
                "\uD83D\uDD20": "#607D8B",
                "\uD83D\uDD21": "#607D8B",
                "\uD83D\uDD22": "#607D8B",
                "\uD83D\uDD23": "#607D8B",
                "\uD83D\uDD24": "#607D8B",
                "\uD83C\uDD70️": "#E74C3C",
                "\uD83C\uDD8E": "#E74C3C",
                "\uD83C\uDD71️": "#9B59B6",
                "\uD83C\uDD91": "#E74C3C",
                "\uD83C\uDD92": "#607D8B",
                "\uD83C\uDD93": "#607D8B",
                ℹ️: "#9B59B6",
                "\uD83C\uDD94": "#9B59B6",
                "Ⓜ️": "#9B59B6",
                "\uD83C\uDD95": "#607D8B",
                "\uD83C\uDD96": "#607D8B",
                "\uD83C\uDD7E️": "#E74C3C",
                "\uD83C\uDD97": "#607D8B",
                "\uD83C\uDD7F️": "#3498DB",
                "\uD83C\uDD98": "#9B59B6",
                "\uD83C\uDD99": "#607D8B",
                "\uD83C\uDD9A": "#9B59B6",
                "\uD83C\uDE01": "#607D8B",
                "\uD83C\uDE02️": "#3498DB",
                "\uD83C\uDE37️": "#9B59B6",
                "\uD83C\uDE36": "#9B59B6",
                "\uD83C\uDE2F": "#9B59B6",
                "\uD83C\uDE50": "#9B59B6",
                "\uD83C\uDE39": "#9B59B6",
                "\uD83C\uDE1A": "#9B59B6",
                "\uD83C\uDE32": "#9B59B6",
                "\uD83C\uDE51": "#9B59B6",
                "\uD83C\uDE38": "#9B59B6",
                "\uD83C\uDE34": "#E74C3C",
                "\uD83C\uDE33": "#9B59B6",
                "㊗️": "#9B59B6",
                "㊙️": "#9B59B6",
                "\uD83C\uDE3A": "#9B59B6",
                "\uD83C\uDE35": "#9B59B6",
                "\uD83D\uDD34": "#992D22",
                "\uD83D\uDFE0": "#F1C40F",
                "\uD83D\uDFE1": "#F1C40F",
                "\uD83D\uDFE2": "#11806A",
                "\uD83D\uDD35": "#206694",
                "\uD83D\uDFE3": "#9B59B6",
                "\uD83D\uDFE4": "#992D22",
                "⚫": "#607D8B",
                "⚪": "#9B59B6",
                "\uD83D\uDFE5": "#E74C3C",
                "\uD83D\uDFE7": "#E67E22",
                "\uD83D\uDFE8": "#F1C40F",
                "\uD83D\uDFE9": "#11806A",
                "\uD83D\uDFE6": "#3498DB",
                "\uD83D\uDFEA": "#9B59B6",
                "\uD83D\uDFEB": "#9B59B6",
                "⬛": "#11806A",
                "⬜": "#9B59B6",
                "◼️": "#607D8B",
                "◻️": "#9B59B6",
                "◾": "#607D8B",
                "◽": "#9B59B6",
                "▪️": "#607D8B",
                "▫️": "#607D8B",
                "\uD83D\uDD36": "#F1C40F",
                "\uD83D\uDD37": "#206694",
                "\uD83D\uDD38": "#E67E22",
                "\uD83D\uDD39": "#206694",
                "\uD83D\uDD3A": "#E74C3C",
                "\uD83D\uDD3B": "#E74C3C",
                "\uD83D\uDCA0": "#3498DB",
                "\uD83D\uDD18": "#206694",
                "\uD83D\uDD33": "#9B59B6",
                "\uD83D\uDD32": "#607D8B",
                "\uD83C\uDFC1": "#9B59B6",
                "\uD83D\uDEA9": "#992D22",
                "\uD83C\uDF8C": "#9B59B6",
                "\uD83C\uDFF4": "#11806A",
                "\uD83C\uDFF3️": "#9B59B6",
                "\uD83C\uDFF3️‍\uD83C\uDF08": "#E67E22",
                "\uD83C\uDFF3️‍⚧️": "#9B59B6",
                "\uD83C\uDFF4‍☠️": "#11806A",
                "\uD83C\uDDE6\uD83C\uDDE8": "#206694",
                "\uD83C\uDDE6\uD83C\uDDE9": "#206694",
                "\uD83C\uDDE6\uD83C\uDDEA": "#E74C3C",
                "\uD83C\uDDE6\uD83C\uDDEB": "#E74C3C",
                "\uD83C\uDDE6\uD83C\uDDEC": "#992D22",
                "\uD83C\uDDE6\uD83C\uDDEE": "#206694",
                "\uD83C\uDDE6\uD83C\uDDF1": "#992D22",
                "\uD83C\uDDE6\uD83C\uDDF2": "#E74C3C",
                "\uD83C\uDDE6\uD83C\uDDF4": "#607D8B",
                "\uD83C\uDDE6\uD83C\uDDF6": "#206694",
                "\uD83C\uDDE6\uD83C\uDDF7": "#3498DB",
                "\uD83C\uDDE6\uD83C\uDDF8": "#9B59B6",
                "\uD83C\uDDE6\uD83C\uDDF9": "#9B59B6",
                "\uD83C\uDDE6\uD83C\uDDFA": "#206694",
                "\uD83C\uDDE6\uD83C\uDDFC": "#3498DB",
                "\uD83C\uDDE6\uD83C\uDDFD": "#206694",
                "\uD83C\uDDE6\uD83C\uDDFF": "#E91E63",
                "\uD83C\uDDE7\uD83C\uDDE6": "#F1C40F",
                "\uD83C\uDDE7\uD83C\uDDE7": "#206694",
                "\uD83C\uDDE7\uD83C\uDDE9": "#E74C3C",
                "\uD83C\uDDE7\uD83C\uDDEA": "#F1C40F",
                "\uD83C\uDDE7\uD83C\uDDEB": "#11806A",
                "\uD83C\uDDE7\uD83C\uDDEC": "#992D22",
                "\uD83C\uDDE7\uD83C\uDDED": "#9B59B6",
                "\uD83C\uDDE7\uD83C\uDDEE": "#11806A",
                "\uD83C\uDDE7\uD83C\uDDEF": "#E74C3C",
                "\uD83C\uDDE7\uD83C\uDDF1": "#9B59B6",
                "\uD83C\uDDE7\uD83C\uDDF2": "#992D22",
                "\uD83C\uDDE7\uD83C\uDDF3": "#F1C40F",
                "\uD83C\uDDE7\uD83C\uDDF4": "#11806A",
                "\uD83C\uDDE7\uD83C\uDDF6": "#206694",
                "\uD83C\uDDE7\uD83C\uDDF7": "#F1C40F",
                "\uD83C\uDDE7\uD83C\uDDF8": "#3498DB",
                "\uD83C\uDDE7\uD83C\uDDF9": "#E67E22",
                "\uD83C\uDDE7\uD83C\uDDFB": "#E74C3C",
                "\uD83C\uDDE7\uD83C\uDDFC": "#3498DB",
                "\uD83C\uDDE7\uD83C\uDDFE": "#11806A",
                "\uD83C\uDDE7\uD83C\uDDFF": "#206694",
                "\uD83C\uDDE8\uD83C\uDDE6": "#992D22",
                "\uD83C\uDDE8\uD83C\uDDE8": "#11806A",
                "\uD83C\uDDE8\uD83C\uDDE9": "#E74C3C",
                "\uD83C\uDDE8\uD83C\uDDEB": "#11806A",
                "\uD83C\uDDE8\uD83C\uDDEC": "#F1C40F",
                "\uD83C\uDDE8\uD83C\uDDED": "#9B59B6",
                "\uD83C\uDDE8\uD83C\uDDEE": "#E67E22",
                "\uD83C\uDDE8\uD83C\uDDF0": "#206694",
                "\uD83C\uDDE8\uD83C\uDDF1": "#E74C3C",
                "\uD83C\uDDE8\uD83C\uDDF2": "#E74C3C",
                "\uD83C\uDDE8\uD83C\uDDF3": "#992D22",
                "\uD83C\uDDE8\uD83C\uDDF4": "#206694",
                "\uD83C\uDDE8\uD83C\uDDF5": "#206694",
                "\uD83C\uDDE8\uD83C\uDDF7": "#206694",
                "\uD83C\uDDE8\uD83C\uDDFA": "#206694",
                "\uD83C\uDDE8\uD83C\uDDFB": "#206694",
                "\uD83C\uDDE8\uD83C\uDDFC": "#206694",
                "\uD83C\uDDE8\uD83C\uDDFD": "#11806A",
                "\uD83C\uDDE8\uD83C\uDDFE": "#9B59B6",
                "\uD83C\uDDE8\uD83C\uDDFF": "#992D22",
                "\uD83C\uDDE9\uD83C\uDDEA": "#E74C3C",
                "\uD83C\uDDE9\uD83C\uDDEC": "#9B59B6",
                "\uD83C\uDDE9\uD83C\uDDEF": "#11806A",
                "\uD83C\uDDE9\uD83C\uDDF0": "#992D22",
                "\uD83C\uDDE9\uD83C\uDDF2": "#E67E22",
                "\uD83C\uDDE9\uD83C\uDDF4": "#206694",
                "\uD83C\uDDE9\uD83C\uDDFF": "#11806A",
                "\uD83C\uDDEA\uD83C\uDDE6": "#F1C40F",
                "\uD83C\uDDEA\uD83C\uDDE8": "#F1C40F",
                "\uD83C\uDDEA\uD83C\uDDEA": "#9B59B6",
                "\uD83C\uDDEA\uD83C\uDDEC": "#9B59B6",
                "\uD83C\uDDEA\uD83C\uDDED": "#9B59B6",
                "\uD83C\uDDEA\uD83C\uDDF7": "#11806A",
                "\uD83C\uDDEA\uD83C\uDDF8": "#F1C40F",
                "\uD83C\uDDEA\uD83C\uDDF9": "#11806A",
                "\uD83C\uDDEA\uD83C\uDDFA": "#206694",
                "\uD83C\uDDEB\uD83C\uDDEE": "#206694",
                "\uD83C\uDDEB\uD83C\uDDEF": "#3498DB",
                "\uD83C\uDDEB\uD83C\uDDF0": "#206694",
                "\uD83C\uDDEB\uD83C\uDDF2": "#3498DB",
                "\uD83C\uDDEB\uD83C\uDDF4": "#3498DB",
                "\uD83C\uDDEB\uD83C\uDDF7": "#206694",
                "\uD83C\uDDEC\uD83C\uDDE6": "#11806A",
                "\uD83C\uDDEC\uD83C\uDDE7": "#206694",
                "\uD83C\uDDEC\uD83C\uDDE9": "#11806A",
                "\uD83C\uDDEC\uD83C\uDDEA": "#E74C3C",
                "\uD83C\uDDEC\uD83C\uDDEB": "#11806A",
                "\uD83C\uDDEC\uD83C\uDDEC": "#9B59B6",
                "\uD83C\uDDEC\uD83C\uDDED": "#11806A",
                "\uD83C\uDDEC\uD83C\uDDEE": "#9B59B6",
                "\uD83C\uDDEC\uD83C\uDDF1": "#992D22",
                "\uD83C\uDDEC\uD83C\uDDF2": "#11806A",
                "\uD83C\uDDEC\uD83C\uDDF3": "#F1C40F",
                "\uD83C\uDDEC\uD83C\uDDF5": "#F1C40F",
                "\uD83C\uDDEC\uD83C\uDDF6": "#11806A",
                "\uD83C\uDDEC\uD83C\uDDF7": "#9B59B6",
                "\uD83C\uDDEC\uD83C\uDDF8": "#206694",
                "\uD83C\uDDEC\uD83C\uDDF9": "#3498DB",
                "\uD83C\uDDEC\uD83C\uDDFA": "#206694",
                "\uD83C\uDDEC\uD83C\uDDFC": "#F1C40F",
                "\uD83C\uDDEC\uD83C\uDDFE": "#E67E22",
                "\uD83C\uDDED\uD83C\uDDF0": "#992D22",
                "\uD83C\uDDED\uD83C\uDDF2": "#206694",
                "\uD83C\uDDED\uD83C\uDDF3": "#9B59B6",
                "\uD83C\uDDED\uD83C\uDDF7": "#206694",
                "\uD83C\uDDED\uD83C\uDDF9": "#E91E63",
                "\uD83C\uDDED\uD83C\uDDFA": "#11806A",
                "\uD83C\uDDEE\uD83C\uDDE8": "#206694",
                "\uD83C\uDDEE\uD83C\uDDE9": "#992D22",
                "\uD83C\uDDEE\uD83C\uDDEA": "#11806A",
                "\uD83C\uDDEE\uD83C\uDDF1": "#206694",
                "\uD83C\uDDEE\uD83C\uDDF2": "#992D22",
                "\uD83C\uDDEE\uD83C\uDDF3": "#9B59B6",
                "\uD83C\uDDEE\uD83C\uDDF4": "#9B59B6",
                "\uD83C\uDDEE\uD83C\uDDF6": "#607D8B",
                "\uD83C\uDDEE\uD83C\uDDF7": "#992D22",
                "\uD83C\uDDEE\uD83C\uDDF8": "#9B59B6",
                "\uD83C\uDDEE\uD83C\uDDF9": "#992D22",
                "\uD83C\uDDEF\uD83C\uDDEA": "#9B59B6",
                "\uD83C\uDDEF\uD83C\uDDF2": "#11806A",
                "\uD83C\uDDEF\uD83C\uDDF4": "#E74C3C",
                "\uD83C\uDDEF\uD83C\uDDF5": "#9B59B6",
                "\uD83C\uDDF0\uD83C\uDDEA": "#E74C3C",
                "\uD83C\uDDF0\uD83C\uDDEC": "#E74C3C",
                "\uD83C\uDDF0\uD83C\uDDED": "#992D22",
                "\uD83C\uDDF0\uD83C\uDDEE": "#E74C3C",
                "\uD83C\uDDF0\uD83C\uDDF2": "#11806A",
                "\uD83C\uDDF0\uD83C\uDDF3": "#E74C3C",
                "\uD83C\uDDF0\uD83C\uDDF5": "#206694",
                "\uD83C\uDDF0\uD83C\uDDF7": "#9B59B6",
                "\uD83C\uDDF0\uD83C\uDDFC": "#1ABC9C",
                "\uD83C\uDDF0\uD83C\uDDFE": "#206694",
                "\uD83C\uDDF0\uD83C\uDDFF": "#1ABC9C",
                "\uD83C\uDDF1\uD83C\uDDE6": "#E74C3C",
                "\uD83C\uDDF1\uD83C\uDDE7": "#9B59B6",
                "\uD83C\uDDF1\uD83C\uDDE8": "#3498DB",
                "\uD83C\uDDF1\uD83C\uDDEE": "#206694",
                "\uD83C\uDDF1\uD83C\uDDF0": "#E74C3C",
                "\uD83C\uDDF1\uD83C\uDDF7": "#E74C3C",
                "\uD83C\uDDF1\uD83C\uDDF8": "#9B59B6",
                "\uD83C\uDDF1\uD83C\uDDF9": "#11806A",
                "\uD83C\uDDF1\uD83C\uDDFA": "#E74C3C",
                "\uD83C\uDDF1\uD83C\uDDFB": "#992D22",
                "\uD83C\uDDF1\uD83C\uDDFE": "#E74C3C",
                "\uD83C\uDDF2\uD83C\uDDE6": "#992D22",
                "\uD83C\uDDF2\uD83C\uDDE8": "#9B59B6",
                "\uD83C\uDDF2\uD83C\uDDE9": "#206694",
                "\uD83C\uDDF2\uD83C\uDDEA": "#992D22",
                "\uD83C\uDDF2\uD83C\uDDEB": "#206694",
                "\uD83C\uDDF2\uD83C\uDDEC": "#E74C3C",
                "\uD83C\uDDF2\uD83C\uDDED": "#206694",
                "\uD83C\uDDF2\uD83C\uDDF0": "#992D22",
                "\uD83C\uDDF2\uD83C\uDDF1": "#F1C40F",
                "\uD83C\uDDF2\uD83C\uDDF2": "#F1C40F",
                "\uD83C\uDDF2\uD83C\uDDF3": "#206694",
                "\uD83C\uDDF2\uD83C\uDDF4": "#11806A",
                "\uD83C\uDDF2\uD83C\uDDF5": "#9B59B6",
                "\uD83C\uDDF2\uD83C\uDDF6": "#206694",
                "\uD83C\uDDF2\uD83C\uDDF7": "#E74C3C",
                "\uD83C\uDDF2\uD83C\uDDF8": "#206694",
                "\uD83C\uDDF2\uD83C\uDDF9": "#9B59B6",
                "\uD83C\uDDF2\uD83C\uDDFA": "#E74C3C",
                "\uD83C\uDDF2\uD83C\uDDFB": "#11806A",
                "\uD83C\uDDF2\uD83C\uDDFC": "#992D22",
                "\uD83C\uDDF2\uD83C\uDDFD": "#9B59B6",
                "\uD83C\uDDF2\uD83C\uDDFE": "#9B59B6",
                "\uD83C\uDDF2\uD83C\uDDFF": "#E67E22",
                "\uD83C\uDDF3\uD83C\uDDE6": "#E74C3C",
                "\uD83C\uDDF3\uD83C\uDDE8": "#E67E22",
                "\uD83C\uDDF3\uD83C\uDDEA": "#11806A",
                "\uD83C\uDDF3\uD83C\uDDEB": "#9B59B6",
                "\uD83C\uDDF3\uD83C\uDDEC": "#9B59B6",
                "\uD83C\uDDF3\uD83C\uDDEE": "#5865F2",
                "\uD83C\uDDF3\uD83C\uDDF1": "#206694",
                "\uD83C\uDDF3\uD83C\uDDF4": "#E74C3C",
                "\uD83C\uDDF3\uD83C\uDDF5": "#992D22",
                "\uD83C\uDDF3\uD83C\uDDF7": "#206694",
                "\uD83C\uDDF3\uD83C\uDDFA": "#F1C40F",
                "\uD83C\uDDF3\uD83C\uDDFF": "#206694",
                "\uD83C\uDDF4\uD83C\uDDF2": "#11806A",
                "\uD83C\uDDF5\uD83C\uDDE6": "#206694",
                "\uD83C\uDDF5\uD83C\uDDEA": "#9B59B6",
                "\uD83C\uDDF5\uD83C\uDDEB": "#992D22",
                "\uD83C\uDDF5\uD83C\uDDEC": "#E74C3C",
                "\uD83C\uDDF5\uD83C\uDDED": "#992D22",
                "\uD83C\uDDF5\uD83C\uDDF0": "#11806A",
                "\uD83C\uDDF5\uD83C\uDDF1": "#E74C3C",
                "\uD83C\uDDF5\uD83C\uDDF2": "#206694",
                "\uD83C\uDDF5\uD83C\uDDF3": "#206694",
                "\uD83C\uDDF5\uD83C\uDDF7": "#992D22",
                "\uD83C\uDDF5\uD83C\uDDF8": "#9B59B6",
                "\uD83C\uDDF5\uD83C\uDDF9": "#E74C3C",
                "\uD83C\uDDF5\uD83C\uDDFC": "#F1C40F",
                "\uD83C\uDDF5\uD83C\uDDFE": "#9B59B6",
                "\uD83C\uDDF6\uD83C\uDDE6": "#9B59B6",
                "\uD83C\uDDF7\uD83C\uDDEA": "#E74C3C",
                "\uD83C\uDDF7\uD83C\uDDF4": "#F1C40F",
                "\uD83C\uDDF7\uD83C\uDDF8": "#206694",
                "\uD83C\uDDF7\uD83C\uDDFA": "#992D22",
                "\uD83C\uDDF7\uD83C\uDDFC": "#F1C40F",
                "\uD83C\uDDF8\uD83C\uDDE6": "#11806A",
                "\uD83C\uDDF8\uD83C\uDDE7": "#11806A",
                "\uD83C\uDDF8\uD83C\uDDE8": "#11806A",
                "\uD83C\uDDF8\uD83C\uDDE9": "#9B59B6",
                "\uD83C\uDDF8\uD83C\uDDEA": "#F1C40F",
                "\uD83C\uDDF8\uD83C\uDDEC": "#E74C3C",
                "\uD83C\uDDF8\uD83C\uDDED": "#206694",
                "\uD83C\uDDF8\uD83C\uDDEE": "#E74C3C",
                "\uD83C\uDDF8\uD83C\uDDEF": "#E74C3C",
                "\uD83C\uDDF8\uD83C\uDDF0": "#992D22",
                "\uD83C\uDDF8\uD83C\uDDF1": "#9B59B6",
                "\uD83C\uDDF8\uD83C\uDDF2": "#9B59B6",
                "\uD83C\uDDF8\uD83C\uDDF3": "#F1C40F",
                "\uD83C\uDDF8\uD83C\uDDF4": "#3498DB",
                "\uD83C\uDDF8\uD83C\uDDF7": "#11806A",
                "\uD83C\uDDF8\uD83C\uDDF8": "#E74C3C",
                "\uD83C\uDDF8\uD83C\uDDF9": "#E67E22",
                "\uD83C\uDDF8\uD83C\uDDFB": "#9B59B6",
                "\uD83C\uDDF8\uD83C\uDDFD": "#E74C3C",
                "\uD83C\uDDF8\uD83C\uDDFE": "#992D22",
                "\uD83C\uDDF8\uD83C\uDDFF": "#992D22",
                "\uD83C\uDDF9\uD83C\uDDE6": "#206694",
                "\uD83C\uDDF9\uD83C\uDDE8": "#206694",
                "\uD83C\uDDF9\uD83C\uDDE9": "#F1C40F",
                "\uD83C\uDDF9\uD83C\uDDEB": "#206694",
                "\uD83C\uDDF9\uD83C\uDDEC": "#11806A",
                "\uD83C\uDDF9\uD83C\uDDED": "#992D22",
                "\uD83C\uDDF9\uD83C\uDDEF": "#E91E63",
                "\uD83C\uDDF9\uD83C\uDDF0": "#F1C40F",
                "\uD83C\uDDF9\uD83C\uDDF1": "#E74C3C",
                "\uD83C\uDDF9\uD83C\uDDF2": "#11806A",
                "\uD83C\uDDF9\uD83C\uDDF3": "#992D22",
                "\uD83C\uDDF9\uD83C\uDDF4": "#992D22",
                "\uD83C\uDDF9\uD83C\uDDF7": "#E74C3C",
                "\uD83C\uDDF9\uD83C\uDDF9": "#992D22",
                "\uD83C\uDDF9\uD83C\uDDFB": "#607D8B",
                "\uD83C\uDDF9\uD83C\uDDFC": "#3498DB",
                "\uD83C\uDDF9\uD83C\uDDFF": "#11806A",
                "\uD83C\uDDFA\uD83C\uDDE6": "#F1C40F",
                "\uD83C\uDDFA\uD83C\uDDEC": "#607D8B",
                "\uD83C\uDDFA\uD83C\uDDF2": "#E74C3C",
                "\uD83C\uDDFA\uD83C\uDDF3": "#3498DB",
                "\uD83C\uDDFA\uD83C\uDDF8": "#E74C3C",
                "\uD83C\uDDFA\uD83C\uDDFE": "#9B59B6",
                "\uD83C\uDDFA\uD83C\uDDFF": "#1ABC9C",
                "\uD83C\uDDFB\uD83C\uDDE6": "#9B59B6",
                "\uD83C\uDDFB\uD83C\uDDE8": "#F1C40F",
                "\uD83C\uDDFB\uD83C\uDDEA": "#206694",
                "\uD83C\uDDFB\uD83C\uDDEC": "#206694",
                "\uD83C\uDDFB\uD83C\uDDEE": "#9B59B6",
                "\uD83C\uDDFB\uD83C\uDDF3": "#992D22",
                "\uD83C\uDDFB\uD83C\uDDFA": "#11806A",
                "\uD83C\uDDFC\uD83C\uDDEB": "#E74C3C",
                "\uD83C\uDDFC\uD83C\uDDF8": "#E74C3C",
                "\uD83C\uDDFD\uD83C\uDDF0": "#206694",
                "\uD83C\uDDFE\uD83C\uDDEA": "#E74C3C",
                "\uD83C\uDDFE\uD83C\uDDF9": "#9B59B6",
                "\uD83C\uDDFF\uD83C\uDDE6": "#E67E22",
                "\uD83C\uDDFF\uD83C\uDDF2": "#11806A",
                "\uD83C\uDDFF\uD83C\uDDFC": "#11806A",
                "\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67\uDB40\uDC7F": "#992D22",
                "\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74\uDB40\uDC7F": "#206694",
                "\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73\uDB40\uDC7F": "#11806A"
            });
            var l = t
        },
        921245: function(B, e, E) {
            "use strict";
            E.r(e), E("21121")
        },
        492114: function(B, e, E) {
            "use strict";
            let t, l, n, C, F, i;
            E.r(e), E.d(e, {
                default: function() {
                    return G
                }
            }), E("808653"), E("702976"), E("222007");
            var u = E("917351"),
                a = E.n(u),
                r = E("866227"),
                o = E.n(r),
                D = E("446674"),
                d = E("872717"),
                s = E("913144"),
                A = E("233069"),
                c = E("813006"),
                f = E("517763"),
                N = E("766274"),
                _ = E("42203"),
                T = E("49111");
            let m = T.FormStates.CLOSED,
                h = {},
                v = {},
                I = !1,
                S = !1,
                p = null,
                L = ["name", "type", "topic_", "bitrate_", "userLimit_", "nsfw_", "flags_", "rateLimitPerUser_", "defaultThreadRateLimitPerUser", "defaultAutoArchiveDuration", "template", "defaultReactionEmoji", "rtcRegion", "videoQualityMode", "threadMetadata", "banner", "availableTags", "defaultSortOrder", "defaultForumLayout", "iconEmoji", "themeColor"];

            function g(B) {
                let e = _.default.getChannel(B.channelId);
                if (null == e) return U();
                m = T.FormStates.OPEN, C = n = e, p = "location" in B && null != B.location ? B.location : null, l = "subsection" in B ? B.subsection : null, null != C && (C = C.set("nsfw", C.isNSFW())), F = _.default.getChannel(C.parent_id), i = C.getGuildId(), h = {}, O({
                    type: "CHANNEL_SETTINGS_SET_SECTION",
                    section: null != t ? t : T.ChannelSettingsSections.OVERVIEW,
                    subsection: l
                })
            }

            function O(B) {
                t = B.section, l = B.subsection, null != C && t === T.ChannelSettingsSections.INSTANT_INVITES && (I = !0, d.default.get({
                    url: T.Endpoints.INSTANT_INVITES(C.id),
                    oldFormErrors: !0
                }).then(B => {
                    I = !1, s.default.dispatch({
                        type: "CHANNEL_SETTINGS_LOADED_INVITES",
                        invites: B.body
                    })
                }, () => I = !1))
            }

            function U() {
                S = !1, m = T.FormStates.CLOSED, t = null, C = n = null, F = null, v = {}
            }
            let y = a.debounce(() => {
                if (null == C || null == n) return !1;
                let B = C.toJS(),
                    e = n.toJS(),
                    E = L.every(E => B[E] === e[E]);
                E && C !== n && (C = n, j.emitChange())
            }, 500);

            function M(B) {
                return new f.default({
                    code: B.code,
                    temporary: B.temporary,
                    revoked: B.revoked,
                    inviter: null != B.inviter ? new N.default(B.inviter) : null,
                    channel: (0, A.createChannelRecordFromInvite)(B.channel),
                    guild: null != B.guild ? new c.default(B.guild) : null,
                    uses: B.uses,
                    maxUses: B.max_uses,
                    maxAge: B.max_age,
                    createdAt: o(B.created_at),
                    type: B.type
                })
            }
            class R extends D.default.Store {
                initialize() {
                    this.waitFor(_.default)
                }
                hasChanges() {
                    return C !== n
                }
                isOpen() {
                    return S
                }
                getSection() {
                    return t
                }
                getInvites() {
                    return {
                        invites: v,
                        loading: I
                    }
                }
                showNotice() {
                    return this.hasChanges()
                }
                getChannel() {
                    return C
                }
                getFormState() {
                    return m
                }
                getCategory() {
                    return F
                }
                getProps() {
                    return {
                        submitting: m === T.FormStates.SUBMITTING,
                        errors: h,
                        channel: C,
                        section: t,
                        subsection: l,
                        invites: v,
                        selectedOverwriteId: i,
                        hasChanges: this.hasChanges(),
                        analyticsLocation: p
                    }
                }
            }
            R.displayName = "ChannelSettingsStore";
            let j = new R(s.default, {
                CHANNEL_SETTINGS_INIT: g,
                CHANNEL_SETTINGS_OPEN: function(B) {
                    S = !0, g(B)
                },
                CHANNEL_SETTINGS_SUBMIT: function() {
                    m = T.FormStates.SUBMITTING, h = {}
                },
                CHANNEL_SETTINGS_SUBMIT_SUCCESS: function() {
                    n = C, m = T.FormStates.OPEN
                },
                CHANNEL_SETTINGS_SUBMIT_FAILURE: function(B) {
                    var e;
                    m = T.FormStates.OPEN, h = Object.keys(null !== (e = B.errors) && void 0 !== e ? e : {}).reduce((e, E) => {
                        let t = B.errors[E];
                        return (0, u.isArray)(t) ? e[E] = t.join("\n") : e[E] = t, e
                    }, {})
                },
                CHANNEL_SETTINGS_CLOSE: U,
                CHANNEL_SETTINGS_OVERWRITE_SELECT: function(B) {
                    let {
                        overwriteId: e
                    } = B;
                    i = e
                },
                CHANNEL_SETTINGS_UPDATE: function(B) {
                    let {
                        name: e,
                        channelType: E,
                        topic: t,
                        bitrate: l,
                        userLimit: n,
                        nsfw: F,
                        flags: i,
                        rateLimitPerUser: u,
                        defaultThreadRateLimitPerUser: a,
                        autoArchiveDuration: r,
                        locked: o,
                        invitable: D,
                        defaultAutoArchiveDuration: d,
                        template: s,
                        defaultReactionEmoji: A,
                        rtcRegion: c,
                        videoQualityMode: f,
                        availableTags: N,
                        defaultSortOrder: _,
                        defaultForumLayout: T,
                        iconEmoji: m,
                        themeColor: h
                    } = B;
                    if (null == C) return !1;
                    null != e && (C = C.set("name", e)), null != t && (C = C.set("topic", t)), null != l && (C = C.set("bitrate", l)), null != n && (C = C.set("userLimit", n)), null != F && (C = C.set("nsfw", F)), null != i && (C = C.set("flags", i)), null != u && (C = C.set("rateLimitPerUser", u)), null != a && (C = C.set("defaultThreadRateLimitPerUser", a)), null != r && (C = C.set("threadMetadata", {
                        ...C.threadMetadata,
                        autoArchiveDuration: r
                    })), null != o && (C = C.set("threadMetadata", {
                        ...C.threadMetadata,
                        locked: o
                    })), null != D && (C = C.set("threadMetadata", {
                        ...C.threadMetadata,
                        invitable: D
                    })), null != d && (C = C.set("defaultAutoArchiveDuration", d)), null != s && (C = C.set("template", s)), null != E && (C = C.set("type", E)), void 0 !== c && (C = C.set("rtcRegion", c)), null != f && (C = C.set("videoQualityMode", f)), void 0 !== A && (C = C.set("defaultReactionEmoji", A)), null != N && (C = C.set("availableTags", N)), null != _ && (C = C.set("defaultSortOrder", _)), null != T && (C = C.set("defaultForumLayout", T)), void 0 !== m && (C = C.set("iconEmoji", m)), null != h && (C = C.set("themeColor", h)), y()
                },
                CHANNEL_SETTINGS_SET_SECTION: O,
                CHANNEL_SETTINGS_LOADED_INVITES: function(B) {
                    v = {}, B.invites.forEach(B => {
                        v[B.code] = M(B)
                    })
                },
                CHANNEL_UPDATES: function(B) {
                    let {
                        channels: e
                    } = B;
                    if (null == C) return !1;
                    let E = !1;
                    for (let B of e)(function(B) {
                        if (null == n || n.id !== B) return !1;
                        if (n === C) {
                            let e = _.default.getChannel(B);
                            if (null == e) return !1;
                            C = n = e, F = _.default.getChannel(C.parent_id)
                        } else {
                            let e = _.default.getChannel(B);
                            if (null == e) return !1;
                            n = e, null != C && (C = C.set("permissionOverwrites", n.permissionOverwrites), F = _.default.getChannel(C.parent_id))
                        }
                        return !0
                    })(B.id) && null != C && (null != i && null == C.permissionOverwrites[i] && (i = C.getGuildId()), E = !0);
                    return E
                },
                CHANNEL_DELETE: function(B) {
                    let {
                        channel: {
                            id: e
                        }
                    } = B;
                    if (null == C || C.id !== e) return !1;
                    m = T.FormStates.CLOSED
                },
                INSTANT_INVITE_REVOKE_SUCCESS: function(B) {
                    v = {
                        ...v
                    }, delete v[B.code]
                },
                INSTANT_INVITE_CREATE_SUCCESS: function(B) {
                    v = {
                        ...v,
                        [B.invite.code]: M(B.invite)
                    }
                }
            });
            var G = j
        },
        287850: function(B, e, E) {
            "use strict";
            let t, l, n;
            E.r(e), E.d(e, {
                default: function() {
                    return U
                }
            }), E("222007"), E("424973");
            var C, F, i = E("866227"),
                u = E.n(i),
                a = E("446674"),
                r = E("407846"),
                o = E("913144"),
                D = E("21121"),
                d = E("934306"),
                s = E("288518"),
                A = E("486503"),
                c = E("233069"),
                f = E("42203"),
                N = E("305961"),
                _ = E("660478"),
                T = E("282109"),
                m = E("697218"),
                h = E("299039"),
                v = E("724210");
            (F = C || (C = {})).DEFAULT = "DEFAULT", F.FAVORITE = "FAVORITE";
            let I = new r.default(B => {
                let {
                    isRequest: e,
                    isFavorite: E
                } = B;
                return e ? [] : [E ? "FAVORITE" : "DEFAULT"]
            }, B => {
                let {
                    lastMessageId: e
                } = B;
                return -e
            });

            function S(B) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(B) {
                    var e, E;
                    let t = null !== (E = null !== (e = _.default.lastMessageId(B.id)) && void 0 !== e ? e : B.lastMessageId) && void 0 !== E ? E : B.id,
                        l = B.isMessageRequestTimestamp;
                    if (null != l) {
                        let B = u(l).valueOf(),
                            e = h.default.fromTimestamp(B);
                        return h.default.compare(t, e) > 0 ? t : e
                    }
                    return t
                }(B);
                return {
                    channelId: B.id,
                    lastMessageId: e,
                    isFavorite: T.default.isMessagesFavorite(B.id) && (0, D.isInMainTabsExperiment)(),
                    isRequest: s.default.isMessageRequest(B.id) || A.default.isSpam(B.id)
                }
            }

            function p() {
                I.clear(), Object.values(f.default.getMutablePrivateChannels()).forEach(B => {
                    I.set(B.id, S(B))
                }), (0, D.isInMainTabsExperiment)() && (0, d.isSplitMessagesTab)() && T.default.getAddedToMessages().forEach(B => {
                    let e = f.default.getChannel(B);
                    null != e && (0, c.isGuildTextChannelType)(e.type) && I.set(e.id, S(e))
                })
            }

            function L() {
                let B = f.default.getMutablePrivateChannels();
                for (let e in B) I.set(e, S(B[e]))
            }
            let g = (t = [], l = [], n = [], () => {
                let B = I.values("FAVORITE"),
                    e = I.values("DEFAULT");
                return (t !== B || l !== e) && (n = [], B.forEach(B => {
                    let {
                        channelId: e
                    } = B;
                    return n.push(e)
                }), t = B, e.forEach(B => {
                    let {
                        channelId: e
                    } = B;
                    return n.push(e)
                }), l = e), n
            });
            class O extends a.default.Store {
                initialize() {
                    this.waitFor(f.default, N.default, m.default, s.default, T.default), this.syncWith([T.default, s.default], p)
                }
                getPrivateChannelIds() {
                    return g()
                }
                getSortedChannels() {
                    return [I.values("FAVORITE"), I.values("DEFAULT")]
                }
                serializeForOverlay() {
                    let B = {};
                    return I.values().forEach(e => {
                        let {
                            channelId: E,
                            lastMessageId: t
                        } = e;
                        B[E] = t
                    }), B
                }
            }
            O.displayName = "PrivateChannelSortStore";
            var U = new O(o.default, {
                CONNECTION_OPEN: p,
                CONNECTION_OPEN_SUPPLEMENTAL: p,
                OVERLAY_INITIALIZE: p,
                CACHE_LOADED: L,
                CACHE_LOADED_LAZY: L,
                CHANNEL_UPDATES: function(B) {
                    let {
                        channels: e
                    } = B;
                    e.forEach(B => {
                        ((0, c.isPrivate)(B.type) || I.has(B.id)) && I.set(B.id, S(B))
                    })
                },
                CHANNEL_CREATE: function(B) {
                    let {
                        channel: e
                    } = B;
                    if (!(0, c.isPrivate)(e.type) || e.id === v.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) return !1;
                    I.set(e.id, S(e))
                },
                CHANNEL_DELETE: function(B) {
                    let {
                        channel: e
                    } = B;
                    return I.delete(e.id)
                },
                MESSAGE_CREATE: function(B) {
                    let {
                        channelId: e,
                        message: E
                    } = B;
                    if (!I.has(e)) return !1;
                    let t = f.default.getChannel(e);
                    return null != t && I.set(e, S(t, E.id))
                },
                GUILD_CREATE: function(B) {
                    let e = B.guild.id;
                    return I.delete(e)
                }
            })
        }
    }
]);