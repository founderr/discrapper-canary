(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["39548"], {
        601248: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ChatMarkUnreadIcon: function() {
                    return i
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("669491"),
                u = n("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: i = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...d
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, u.default)(d),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, l.jsx)("path", {
                        d: "M12.93 21.96c.25-.03.43-.23.47-.47a3 3 0 0 1 .08-.35.66.66 0 0 0-.24-.71A3 3 0 0 1 12 18v-3a3 3 0 0 1 4.35-2.68c.14.07.3.09.44.04a7 7 0 0 1 4.58.05c.3.1.63-.1.63-.41a10 10 0 1 0-18.45 5.36c.13.19.11.44-.04.61l-2.06 2.37A1 1 0 0 0 2.2 22H12c.32 0 .63-.01.93-.04Z",
                        fill: "string" == typeof i ? i : i.css,
                        className: s
                    }), (0, l.jsx)("path", {
                        d: "M18 17h-1.24a3 3 0 1 1 .26 4.25 1 1 0 1 0-1.33 1.5A4.98 4.98 0 0 0 24 19a5 5 0 0 0-8-4 1 1 0 0 0-2 0v3a1 1 0 0 0 1 1h3a1 1 0 1 0 0-2Z",
                        fill: "string" == typeof i ? i : i.css,
                        className: s
                    })]
                })
            }
        },
        633043: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("77078"),
                u = n("850572"),
                i = () => (0, l.jsx)("div", {
                    className: u.loadingWrapper,
                    children: (0, l.jsx)(a.Dots, {
                        dotRadius: 4,
                        themed: !0
                    })
                })
        },
        823026: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            }), n("424973");
            var l = n("37983"),
                a = n("884691"),
                u = n("446674"),
                i = n("77078"),
                s = n("713841"),
                d = n("79112"),
                r = n("988721"),
                o = n("592407"),
                c = n("305961"),
                f = n("957255"),
                v = n("49111"),
                p = n("782340");

            function h(e) {
                let {
                    user: t,
                    guildId: n,
                    channel: h,
                    context: m
                } = e, M = c.default.getGuild(n), g = (0, u.useStateFromStores)([f.default], () => null != M ? f.default.can(v.Permissions.MANAGE_GUILD, M) : null), I = (0, r.useContextIndexState)(h, !0, !0), E = (0, r.useUserIndexState)(!0, !0), {
                    isUserApp: A,
                    isGuildApp: C
                } = a.useMemo(() => {
                    var e, n, l, a;
                    if ((null == t ? void 0 : t.id) == null) return {
                        isGuildApp: !1,
                        isUserApp: !1
                    };
                    let u = Object.values(null !== (l = null === (e = I.result) || void 0 === e ? void 0 : e.sections) && void 0 !== l ? l : {}),
                        i = Object.values(null !== (a = null === (n = E.result) || void 0 === n ? void 0 : n.sections) && void 0 !== a ? a : {});
                    return {
                        isGuildApp: u.some(e => {
                            var n;
                            return (null === (n = e.descriptor.application) || void 0 === n ? void 0 : n.id) === (null == t ? void 0 : t.id)
                        }),
                        isUserApp: i.some(e => {
                            var n;
                            return (null === (n = e.descriptor.application) || void 0 === n ? void 0 : n.id) === (null == t ? void 0 : t.id)
                        })
                    }
                }, [I, E, null == t ? void 0 : t.id]), N = a.useCallback(() => {
                    (null == M ? void 0 : M.id) != null && (o.default.open(M.id, v.GuildSettingsSections.INTEGRATIONS), s.default.setSection(v.IntegrationSettingsSections.APPLICATION, null == t ? void 0 : t.id))
                }, [null == t ? void 0 : t.id, null == M ? void 0 : M.id]), S = a.useCallback(() => {
                    d.default.open(v.UserSettingsSections.AUTHORIZED_APPS)
                }, []), _ = m === v.AppContext.POPOUT;
                if (!(null == t ? void 0 : t.bot) || !g || _ || !C && !A) return null;
                let x = [];
                return C && x.push((0, l.jsx)(i.MenuItem, {
                    id: "manage-integration",
                    label: p.default.Messages.MANAGE_INTEGRATION,
                    action: N
                }, "manage-integration")), A && x.push((0, l.jsx)(i.MenuItem, {
                    id: "manage-authorized-app",
                    label: p.default.Messages.MANAGE_AUTHORIZED_APP,
                    action: S
                }, "manage-authorized-app")), x
            }
        },
        518155: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("281071"),
                u = n("77078"),
                i = n("83900"),
                s = n("599110"),
                d = n("306160"),
                r = n("49111"),
                o = n("782340");

            function c(e, t) {
                return d.SUPPORTS_COPY && e.type !== r.MessageTypes.GUILD_INVITE_REMINDER ? (0, l.jsx)(u.MenuItem, {
                    id: "copy-link",
                    label: o.default.Messages.COPY_MESSAGE_LINK,
                    icon: i.default,
                    action: () => {
                        (0, a.copy)("".concat(location.protocol, "//").concat(location.host).concat(r.Routes.CHANNEL(t.guild_id, t.id, e.id))), s.default.track(r.AnalyticEvents.MESSAGE_LINK_COPIED, {
                            message_id: e.id,
                            channel: e.channel_id
                        })
                    }
                }) : null
            }
        },
        718381: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("446674"),
                u = n("77078"),
                i = n("819689"),
                s = n("249561"),
                d = n("300322"),
                r = n("957255"),
                o = n("697218"),
                c = n("228220"),
                f = n("49111"),
                v = n("782340");

            function p(e, t) {
                let n = (0, a.useStateFromStores)([o.default], () => o.default.getCurrentUser()),
                    p = (0, d.useIsActiveChannelOrUnarchivableThread)(t),
                    h = (0, a.useStateFromStores)([r.default], () => r.default.can(f.Permissions.MANAGE_MESSAGES, t), [t]);
                return e.state !== f.MessageStates.SENDING && (e.author.id === (null == n ? void 0 : n.id) || h) && e.type in f.MessageTypesDeletable && p ? (0, l.jsx)(u.MenuItem, {
                    id: "delete",
                    label: v.default.Messages.DELETE_MESSAGE,
                    action: function(n) {
                        e.state === f.MessageStates.SEND_FAILED ? i.default.deleteMessage(t.id, e.id, !0) : n.shiftKey ? i.default.deleteMessage(t.id, e.id) : s.default.confirmDelete(t, e, !0)
                    },
                    color: "danger",
                    icon: c.default
                }) : null
            }
        },
        875834: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("77078"),
                u = n("300322"),
                i = n("993477"),
                s = n("456936"),
                d = n("782340");

            function r(e, t) {
                let n = (0, u.useIsActiveChannelOrUnarchivableThread)(t);
                return n ? (0, l.jsx)(a.MenuItem, {
                    id: "mark-unread",
                    label: d.default.Messages.MARK_UNREAD,
                    action: () => (0, s.default)(t.id, e.id),
                    icon: i.default
                }) : null
            }
        },
        146574: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getNativeContextMenuChannelAnalytics: function() {
                    return u
                }
            });
            var l = n("18494"),
                a = n("724210");

            function u() {
                var e;
                let t = null !== (e = l.default.getCurrentlySelectedChannelId()) && void 0 !== e ? e : void 0;
                return null != t && (0, a.isStaticChannelRoute)(t) ? {
                    channel_static_route: t
                } : {
                    channel_id: t
                }
            }
        },
        152298: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("77078"),
                u = n("773336"),
                i = n("50885"),
                s = n("782340");

            function d(e, t) {
                return u.isPlatformEmbedded && (null == e ? void 0 : e.length) !== 0 ? (0, l.jsx)(a.MenuItem, {
                    id: "copy",
                    label: s.default.Messages.COPY,
                    hint: (0, u.isMac)() ? "⌘C" : "Ctrl+C",
                    action: () => {
                        i.default.copy(e), null == t || t.focus()
                    }
                }) : null
            }
        },
        26051: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("77078"),
                u = n("689226"),
                i = n("467475"),
                s = n("24373"),
                d = n("48703"),
                r = n("599110"),
                o = n("128259"),
                c = n("773336"),
                f = n("50885"),
                v = n("146574"),
                p = n("49111"),
                h = n("782340");

            function m(e, t, n, m) {
                let M = (0, i.default)(null == n ? void 0 : n.getChannelId());
                if (!c.isPlatformEmbedded || null == e || "" === e || M || (null == m ? void 0 : m.shouldHideMediaOptions) === !0 || null != e && null != (0, s.isStickerAssetUrl)(e) || null != e && (0, u.isRoleIconAssetUrl)(e)) return null;
                let g = (0, d.getHostname)(e),
                    I = n => {
                        r.default.track(p.AnalyticEvents.CONTEXT_MENU_LINK_OPENED, {
                            hostname: g,
                            ...(0, v.getNativeContextMenuChannelAnalytics)()
                        }), (0, o.handleClick)({
                            href: e,
                            trusted: (0, o.isLinkTrusted)(e, t),
                            shouldConfirm: !0
                        }, n)
                    };
                return [(0, l.jsx)(a.MenuItem, {
                    id: "copy-native-link",
                    label: h.default.Messages.COPY_LINK,
                    action: () => {
                        r.default.track(p.AnalyticEvents.CONTEXT_MENU_LINK_COPIED, {
                            hostname: g,
                            ...(0, v.getNativeContextMenuChannelAnalytics)()
                        }), f.default.copy(e)
                    }
                }, "copy-native-link"), (0, l.jsx)(a.MenuItem, {
                    id: "open-native-link",
                    label: h.default.Messages.OPEN_LINK,
                    action: e => I(e)
                }, "open-native-link")]
            }
        },
        667358: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var l = n("37983"),
                a = n("884691"),
                u = n("627445"),
                i = n.n(u),
                s = n("77078"),
                d = n("599110"),
                r = n("773336"),
                o = n("49111"),
                c = n("782340");

            function f(e) {
                let t = a.useCallback(() => {
                    i(null != e, "text cannot be null"), d.default.track(o.AnalyticEvents.MESSAGE_MENU_GOOGLE_SEARCHED), window.open("https://www.google.com/search?q=".concat(encodeURIComponent(e)), "_blank")
                }, [e]);
                return r.isPlatformEmbedded && null != e && (null == e ? void 0 : e.length) !== 0 ? [(0, l.jsx)(s.MenuItem, {
                    id: "search-google",
                    label: c.default.Messages.SEARCH_WITH_GOOGLE,
                    action: t
                }, "search-google")] : null
            }
        },
        563816: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            });
            var l = n("37983"),
                a = n("884691"),
                u = n("627445"),
                i = n.n(u),
                s = n("446674"),
                d = n("77078"),
                r = n("240249"),
                o = n("916565"),
                c = n("355263"),
                f = n("633043"),
                v = n("823026"),
                p = n("305961"),
                h = n("697218"),
                m = n("317041"),
                M = n("782340"),
                g = n("205735"),
                I = e => {
                    let t, {
                            commandType: n,
                            commandTargetId: u,
                            channel: I,
                            guildId: E,
                            onHeightUpdate: A,
                            context: C
                        } = e,
                        N = (0, s.useStateFromStores)([p.default], () => p.default.getGuild(null != E ? E : I.guild_id)),
                        S = (0, s.useStateFromStores)([h.default], () => h.default.getUser(u)),
                        _ = (0, v.default)({
                            user: S,
                            guildId: null == N ? void 0 : N.id,
                            channel: I,
                            context: C
                        }),
                        {
                            commands: x,
                            sectionDescriptors: O,
                            loading: b
                        } = r.useDiscovery(I, {
                            commandType: n
                        }, {
                            limit: m.CONTEXT_MENU_COMMANDS_QUERY_LIMIT
                        }),
                        {
                            sections: P
                        } = a.useMemo(() => {
                            let e = {};
                            return O.forEach(t => {
                                e[t.id] = t
                            }), {
                                sections: e
                            }
                        }, [O]),
                        T = a.useRef(b.current);
                    a.useEffect(() => {
                        b.current !== T.current && (T.current = b.current, null == A || A())
                    }, [b, A]);
                    let j = a.useCallback(e => {
                        i(null != I, "menu item should not show if channel is null");
                        let t = P[e.applicationId],
                            n = null != t ? (0, c.getIconComponent)(t) : void 0;
                        return (0, l.jsx)(d.MenuItem, {
                            id: e.id,
                            label: e.displayName,
                            showIconFirst: !0,
                            icon: () => null != n ? (0, l.jsx)(n, {
                                channel: I,
                                section: t,
                                width: 18,
                                height: 18,
                                selectable: !1
                            }) : null,
                            action: () => {
                                (0, o.default)({
                                    command: e,
                                    optionValues: {},
                                    context: {
                                        channel: I,
                                        guild: N
                                    },
                                    commandTargetId: u
                                })
                            }
                        }, e.id)
                    }, [I, N, u, P]);
                    return b.current ? t = (0, l.jsx)(d.MenuItem, {
                        id: "menu-commands-placeholder",
                        render: () => (0, l.jsx)(f.default, {}),
                        disabled: !0
                    }, "menu-commands-placeholder") : (t = 0 === x.length ? (0, l.jsx)(d.MenuItem, {
                        id: "menu-commands-empty",
                        label: M.default.Messages.APPLICATION_COMMAND_NO_COMMANDS,
                        disabled: !0
                    }, "menu-commands-empty") : x.map(j), null != _ && (t = (0, l.jsxs)(l.Fragment, {
                        children: [t, (0, l.jsx)(d.MenuSeparator, {}, "separator"), _]
                    }))), (0, l.jsx)(d.MenuItem, {
                        id: "apps",
                        label: M.default.Messages.APPS,
                        listClassName: g.list,
                        children: t
                    })
                }
        },
        993477: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("469563"),
                u = n("601248"),
                i = n("75196"),
                s = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: a = "currentColor",
                        foreground: u,
                        ...s
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, i.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, l.jsx)("path", {
                            className: u,
                            fill: a,
                            d: "M14 3H20C21 3 22.0001 4 22.0001 5V19.0003C22.0001 20 21 21 20 21H14C13 21 6 13 6 13H2V11H6C6 11 13 3 14 3Z"
                        })
                    })
                }, u.ChatMarkUnreadIcon, void 0, {
                    size: 24
                })
        }
    }
]);