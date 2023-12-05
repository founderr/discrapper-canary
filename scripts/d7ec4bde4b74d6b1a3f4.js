(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["20833"], {
        283196: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                FolderPlusIcon: function() {
                    return d
                }
            });
            var n = a("37983");
            a("884691");
            var i = a("669491"),
                l = a("75196");
            let d = e => {
                let {
                    width: t = 24,
                    height: a = 24,
                    color: d = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...u
                } = e;
                return (0, n.jsx)("svg", {
                    ...(0, l.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: a,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3h-7l-1.4-2.1A2 2 0 0 0 8.92 2H5Zm7 7a1 1 0 0 1 1 1v3h3a1 1 0 0 1 0 2h-3v3a1 1 0 0 1-2 0v-3H8a1 1 0 1 1 0-2h3v-3a1 1 0 0 1 1-1Z",
                        clipRule: "evenodd",
                        className: s
                    })
                })
            }
        },
        473528: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                GamingStatsPromptExperiment: function() {
                    return i
                }
            });
            var n = a("862205");
            let i = (0, n.createExperiment)({
                kind: "guild",
                id: "2023-09_gaming_stats_prompt_guild",
                label: "Gaming stats prompt",
                defaultConfig: {
                    triggerGamingStats: !1
                },
                treatments: [{
                    id: 1,
                    label: "ability to trigger gaming stats prompt",
                    config: {
                        triggerGamingStats: !0
                    }
                }, {
                    id: 2,
                    label: "ability to trigger gaming stats prompt (leaderboard)",
                    config: {
                        triggerGamingStats: !0
                    }
                }]
            })
        },
        578899: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                SimpleDeadchatPromptExperiment: function() {
                    return i
                }
            });
            var n = a("862205");
            let i = (0, n.createExperiment)({
                kind: "guild",
                id: "2023-08_deadchat_simple_prompt_guild",
                label: "Simple deadchat prompt",
                defaultConfig: {
                    triggerDeadchat: !1,
                    enableDeadchat: !1
                },
                treatments: [{
                    id: 0,
                    label: "Control",
                    config: {
                        triggerDeadchat: !0,
                        enableDeadchat: !1
                    }
                }, {
                    id: 1,
                    label: "trigger deadchat upon connection open",
                    config: {
                        triggerDeadchat: !0,
                        enableDeadchat: !0
                    }
                }]
            })
        },
        383292: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return f
                }
            });
            var n = a("37983");
            a("884691");
            var i = a("917351"),
                l = a.n(i),
                d = a("446674"),
                s = a("77078"),
                u = a("689275"),
                r = a("300322"),
                o = a("109264"),
                c = a("782340");

            function f(e) {
                let t = (0, r.useIsThreadModerator)(e),
                    i = (0, d.useStateFromStores)([u.default], () => !l.isEmpty(u.default.getThreadsForGuild(e.id)));
                return t && i ? (0, n.jsx)(s.MenuItem, {
                    id: "active-threads",
                    label: c.default.Messages.ACTIVE_THREADS,
                    icon: o.default,
                    action: () => {
                        (0, s.openModalLazy)(async () => {
                            let {
                                default: t
                            } = await a.el("469755").then(a.bind(a, "469755"));
                            return a => (0, n.jsx)(t, {
                                guildId: e.id,
                                ...a
                            })
                        })
                    }
                }) : null
            }
        },
        163139: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return r
                }
            });
            var n = a("37983");
            a("884691");
            var i = a("77078"),
                l = a("412707"),
                d = a("646186"),
                s = a("71216"),
                u = a("782340");

            function r(e) {
                return (0, n.jsx)(i.MenuItem, {
                    id: "application-directory",
                    label: (0, n.jsx)(n.Fragment, {
                        children: u.default.Messages.APP_DIRECTORY
                    }),
                    icon: s.default,
                    action: () => {
                        (0, d.goToAppDirectory)({
                            guildId: e.id,
                            entrypoint: {
                                name: l.ApplicationDirectoryEntrypointNames.GUILD_HEADER_POPOUT
                            }
                        })
                    }
                })
            }
        },
        992996: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return et
                }
            });
            var n = a("37983"),
                i = a("884691"),
                l = a("414456"),
                d = a.n(l),
                s = a("627445"),
                u = a.n(s),
                r = a("446674"),
                o = a("77078"),
                c = a("126501"),
                f = a("388142"),
                g = a("473528"),
                p = a("578899"),
                I = a("685058"),
                E = a("578411"),
                M = a("383292"),
                h = a("163139"),
                m = a("230947"),
                _ = a("747867"),
                S = a("58622"),
                x = a("413266"),
                G = a("701203"),
                T = a("95039"),
                C = a("255812"),
                A = a("199938"),
                L = a("592407"),
                D = a("529932"),
                b = a("267567"),
                R = a("724026"),
                j = a("921228"),
                v = a("393414"),
                N = a("26989"),
                y = a("957255"),
                U = a("282109"),
                O = a("697218"),
                P = a("756609"),
                H = a("660279"),
                V = a("171710"),
                w = a("796454"),
                F = a("919765"),
                k = a("474571"),
                B = a("118503"),
                Y = a("987772"),
                z = a("351825"),
                W = a("561359"),
                Z = a("148337"),
                X = a("599110"),
                q = a("49111"),
                J = a("695838"),
                K = a("782340"),
                Q = a("480260");

            function $(e, t) {
                (0, o.openModal)(a => (0, n.jsx)(E.GuildLeaveConfirmModalContents, {
                    ...a,
                    guild: e,
                    discoverableGuildData: t
                }))
            }
            let ee = i.memo(function(e) {
                let {
                    guild: t,
                    onClose: l,
                    onSelect: s
                } = e, E = (0, r.useStateFromStores)([O.default], () => O.default.getCurrentUser());
                u(null != E, "GuildHeaderPopout: user cannot be undefined"), i.useEffect(() => {
                    X.default.track(q.AnalyticEvents.GUILD_DROPDOWN_MENU_VIEWED, {
                        guild_id: t.id
                    })
                });
                let ee = (0, r.useStateFromStores)([U.default], () => U.default.isGuildCollapsed(t.id), [t.id]),
                    {
                        canAccessSettings: et,
                        canManageChannels: ea,
                        showGuildAnalytics: en
                    } = (0, r.useStateFromStoresObject)([y.default], () => {
                        let e = y.default.can(q.Permissions.VIEW_GUILD_ANALYTICS, t) && t.hasFeature(q.GuildFeatures.COMMUNITY);
                        return {
                            canAccessSettings: y.default.canAccessGuildSettings(t),
                            canManageChannels: y.default.can(q.Permissions.MANAGE_CHANNELS, t),
                            showGuildAnalytics: (0, A.staffOnlyGuildSettingsAccess)(t.id) || e
                        }
                    }, [t]),
                    ei = (0, G.useCanReportRaid)(t),
                    el = t.isOwner(E),
                    ed = (0, r.useStateFromStores)([b.default], () => b.default.isLurking(t.id), [t.id]),
                    es = (0, r.useStateFromStores)([N.default], () => N.default.isCurrentUserGuest(t.id)),
                    eu = (0, C.default)(t.id, !0),
                    er = (0, I.default)(t),
                    eo = (0, S.default)({
                        source: q.InstantInviteSources.GUILD_HEADER,
                        guild: t
                    }),
                    ec = (0, m.default)({
                        guildId: t.id,
                        userId: E.id,
                        analyticsLocation: {
                            page: q.AnalyticsPages.GUILD_CHANNEL,
                            section: q.AnalyticsSections.GUILD_DROPDOWN_MENU
                        },
                        icon: Y.default
                    }),
                    ef = t.hasFeature(q.GuildFeatures.HUB),
                    eg = t.id === J.FAVORITES_RAW_GUILD_ID,
                    ep = (0, R.default)(t.id),
                    eI = (0, M.default)(t),
                    eE = (0, h.default)(t),
                    eM = (0, j.useIsPremiumTutorialEnabled)("GuildHeaderPopout"),
                    eh = (0, _.default)(t, !0),
                    {
                        triggerDeadchat: em
                    } = p.SimpleDeadchatPromptExperiment.useExperiment({
                        guildId: t.id,
                        location: "guild header"
                    }, {
                        autoTrackExposure: !1
                    }),
                    {
                        triggerGamingStats: e_
                    } = g.GamingStatsPromptExperiment.useExperiment({
                        guildId: t.id,
                        location: "guild header"
                    }, {
                        autoTrackExposure: !1
                    }),
                    eS = (0, D.useExpressionSourceGuildDataForGuildLeaveModal)(t);
                return ed || es ? (0, n.jsx)(o.Menu, {
                    onSelect: s,
                    navId: "guild-header-popout",
                    variant: "fixed",
                    onClose: l,
                    "aria-label": K.default.Messages.GUILD_ACTIONS_MENU_LABEL,
                    children: (0, n.jsx)(o.MenuItem, {
                        id: "leave-guild",
                        label: K.default.Messages.LEAVE_SERVER,
                        icon: w.default,
                        action: () => {
                            L.default.leaveGuild(t.id), !es && (0, v.transitionTo)(q.Routes.GUILD_DISCOVERY)
                        }
                    })
                }) : eg ? (0, n.jsxs)(o.Menu, {
                    onSelect: s,
                    navId: "favorites-header-popout",
                    variant: "fixed",
                    onClose: l,
                    "aria-label": K.default.Messages.GUILD_ACTIONS_MENU_LABEL,
                    children: [(0, n.jsx)(o.MenuGroup, {
                        children: (0, n.jsx)(o.MenuItem, {
                            id: "create-category",
                            label: K.default.Messages.CREATE_CATEGORY,
                            icon: F.default,
                            action: () => (0, o.openModalLazy)(async () => {
                                let {
                                    default: e
                                } = await a.el("515680").then(a.bind(a, "515680"));
                                return t => (0, n.jsx)(e, {
                                    ...t
                                })
                            })
                        })
                    }), (0, n.jsx)(o.MenuGroup, {
                        children: (0, n.jsx)(o.MenuCheckboxItem, {
                            id: "hide-muted-channels",
                            label: K.default.Messages.HIDE_MUTED_CHANNELS,
                            checked: ee,
                            action: () => c.default.toggleCollapseGuild(t.id)
                        })
                    })]
                }) : ef ? (0, n.jsxs)(o.Menu, {
                    onSelect: s,
                    navId: "guild-header-popout",
                    variant: "fixed",
                    onClose: l,
                    "aria-label": K.default.Messages.GUILD_ACTIONS_MENU_LABEL,
                    children: [(0, n.jsxs)(o.MenuGroup, {
                        children: [et ? (0, n.jsx)(o.MenuItem, {
                            id: "settings",
                            label: K.default.Messages.SERVER_SETTINGS,
                            icon: k.default,
                            action: () => {
                                L.default.open(t.id, q.GuildSettingsSections.OVERVIEW)
                            }
                        }) : null, eo, (0, n.jsx)(o.MenuItem, {
                            id: "privacy",
                            label: K.default.Messages.PRIVACY_SETTINGS,
                            icon: Z.default,
                            action: () => (0, o.openModalLazy)(async () => {
                                let {
                                    default: e
                                } = await a.el("349406").then(a.bind(a, "349406"));
                                return a => (0, n.jsx)(e, {
                                    ...a,
                                    guild: t
                                })
                            })
                        }), ec]
                    }), el ? null : (0, n.jsx)(o.MenuGroup, {
                        children: (0, n.jsx)(o.MenuItem, {
                            id: "leave",
                            label: K.default.Messages.LEAVE_HUB,
                            icon: w.default,
                            color: "danger",
                            action: () => $(t, eS)
                        })
                    })]
                }) : (0, n.jsxs)(o.Menu, {
                    onSelect: s,
                    navId: "guild-header-popout",
                    variant: "fixed",
                    onClose: l,
                    "aria-label": K.default.Messages.GUILD_ACTIONS_MENU_LABEL,
                    children: [(0, n.jsx)(o.MenuGroup, {
                        children: (0, n.jsx)(o.MenuItem, {
                            id: "premium-subscribe",
                            label: K.default.Messages.PREMIUM_GUILD_HEADER_DROPDOWN_NITRO_SERVER_SUBSCRIBE,
                            icon: B.default,
                            action: () => {
                                (0, T.openGuildBoostingMarketingModal)({
                                    guildId: t.id,
                                    location: {
                                        section: q.AnalyticsSections.GUILD_HEADER_POPOUT
                                    }
                                })
                            },
                            className: d({
                                [Q.boostingMenuItemHighlight]: eM
                            })
                        })
                    }), (0, n.jsxs)(o.MenuGroup, {
                        children: [el && E.isStaff() && em ? (0, n.jsx)(o.MenuItem, {
                            id: "create-deadchat",
                            label: "Deadchat Ping",
                            icon: V.default,
                            action: () => {
                                (0, f.forcePrompt)(t.id, q.MessageTypes.GUILD_DEADCHAT_REVIVE_PROMPT)
                            }
                        }) : null, el && E.isStaff() && e_ ? (0, n.jsx)(o.MenuItem, {
                            id: "create-gaming-ping",
                            label: "Gaming Stats Ping",
                            icon: V.default,
                            action: () => {
                                (0, f.forcePrompt)(t.id, q.MessageTypes.GUILD_GAMING_STATS_PROMPT)
                            }
                        }) : null, eo, et ? (0, n.jsx)(o.MenuItem, {
                            id: "settings",
                            label: K.default.Messages.SERVER_SETTINGS,
                            icon: k.default,
                            action: () => {
                                L.default.open(t.id, q.GuildSettingsSections.OVERVIEW)
                            }
                        }) : null, en ? (0, n.jsx)(o.MenuItem, {
                            id: "insights",
                            label: K.default.Messages.SERVER_INSIGHTS,
                            icon: P.default,
                            action: () => L.default.open(t.id, q.GuildSettingsSections.ANALYTICS)
                        }) : null, ea ? (0, n.jsxs)(n.Fragment, {
                            children: [(0, n.jsx)(o.MenuItem, {
                                id: "create-channel",
                                label: K.default.Messages.CREATE_CHANNEL,
                                icon: z.default,
                                action: () => (0, o.openModalLazy)(async () => {
                                    let {
                                        default: e
                                    } = await a.el("581354").then(a.bind(a, "581354"));
                                    return a => (0, n.jsx)(e, {
                                        ...a,
                                        channelType: q.ChannelTypes.GUILD_TEXT,
                                        guildId: t.id
                                    })
                                })
                            }), (0, n.jsx)(o.MenuItem, {
                                id: "create-category",
                                label: K.default.Messages.CREATE_CATEGORY,
                                icon: F.default,
                                action: () => (0, o.openModalLazy)(async () => {
                                    let {
                                        default: e
                                    } = await a.el("581354").then(a.bind(a, "581354"));
                                    return a => (0, n.jsx)(e, {
                                        ...a,
                                        channelType: q.ChannelTypes.GUILD_CATEGORY,
                                        guildId: t.id
                                    })
                                })
                            })]
                        }) : null, eu, eI, eE, er]
                    }), (0, n.jsxs)(o.MenuGroup, {
                        children: [ep, (0, n.jsx)(o.MenuItem, {
                            id: "notifications",
                            label: K.default.Messages.NOTIFICATION_SETTINGS,
                            icon: H.default,
                            action: () => (0, o.openModalLazy)(async () => {
                                let {
                                    default: e
                                } = await a.el("747593").then(a.bind(a, "747593"));
                                return a => (0, n.jsx)(e, {
                                    ...a,
                                    guildId: t.id
                                })
                            })
                        }), (0, n.jsx)(o.MenuItem, {
                            id: "privacy",
                            label: K.default.Messages.PRIVACY_SETTINGS,
                            icon: Z.default,
                            action: () => (0, o.openModalLazy)(async () => {
                                let {
                                    default: e
                                } = await a.el("349406").then(a.bind(a, "349406"));
                                return a => (0, n.jsx)(e, {
                                    ...a,
                                    guild: t
                                })
                            })
                        })]
                    }), (0, n.jsxs)(o.MenuGroup, {
                        children: [ec, (0, n.jsx)(o.MenuCheckboxItem, {
                            id: "hide-muted-channels",
                            label: K.default.Messages.HIDE_MUTED_CHANNELS,
                            checked: ee,
                            action: () => c.default.toggleCollapseGuild(t.id)
                        })]
                    }), (0, n.jsxs)(o.MenuGroup, {
                        children: [eh, ei && t.isCommunity() ? (0, n.jsx)(o.MenuItem, {
                            id: "report-raid",
                            label: K.default.Messages.GUILD_REPORT_RAID_BUTTON_TITLE,
                            icon: W.default,
                            color: "danger",
                            action: () => (0, x.openReportRaidModal)(t.id)
                        }) : null, el ? null : (0, n.jsx)(o.MenuItem, {
                            id: "leave",
                            label: K.default.Messages.LEAVE_SERVER,
                            icon: w.default,
                            color: "danger",
                            action: () => $(t, eS)
                        })]
                    })]
                })
            });
            var et = ee
        },
        796454: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return s
                }
            });
            var n = a("37983");
            a("884691");
            var i = a("469563"),
                l = a("354087"),
                d = a("75196"),
                s = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 18,
                        height: a = 18,
                        color: i = "currentColor",
                        foreground: l,
                        ...s
                    } = e;
                    return (0, n.jsx)("svg", {
                        ...(0, d.default)(s),
                        width: t,
                        height: a,
                        viewBox: "0 0 24 24",
                        children: (0, n.jsx)("path", {
                            className: l,
                            fill: i,
                            d: "M10.418 13L12.708 15.294L11.292 16.706L6.586 11.991L11.294 7.292L12.707 8.708L10.41 11H21.949C21.446 5.955 17.177 2 12 2C6.486 2 2 6.487 2 12C2 17.513 6.486 22 12 22C17.177 22 21.446 18.046 21.949 13H10.418Z"
                        })
                    })
                }, l.DoorExitIcon, void 0, {
                    size: 18
                })
        },
        919765: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return s
                }
            });
            var n = a("37983");
            a("884691");
            var i = a("469563"),
                l = a("283196"),
                d = a("75196"),
                s = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 18,
                        height: a = 18,
                        color: i = "currentColor",
                        foreground: l,
                        ...s
                    } = e;
                    return (0, n.jsx)("svg", {
                        ...(0, d.default)(s),
                        width: t,
                        height: a,
                        viewBox: "0 0 24 24",
                        children: (0, n.jsx)("path", {
                            className: l,
                            fill: i,
                            d: "M20 7H12L10.553 5.106C10.214 4.428 9.521 4 8.764 4H3C2.447 4 2 4.447 2 5V19C2 20.104 2.895 21 4 21H20C21.104 21 22 20.104 22 19V9C22 7.896 21.104 7 20 7ZM16 15H13V18H11V15H8V13H11V10H13V13H16V15Z"
                        })
                    })
                }, l.FolderPlusIcon, void 0, {
                    size: 18
                })
        }
    }
]);