(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["28516"], {
        126501: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return i
                }
            });
            var n = a("913144"),
                l = a("679428"),
                s = a("282109"),
                i = {
                    update(e) {
                        n.default.dispatch({
                            type: "CHANNEL_COLLAPSE",
                            channelId: e
                        })
                    },
                    toggleCollapseGuild(e) {
                        l.default.saveUserGuildSettings(e, {
                            hide_muted_channels: !s.default.isGuildCollapsed(e)
                        }), n.default.dispatch({
                            type: "GUILD_TOGGLE_COLLAPSE_MUTED",
                            guildId: e
                        })
                    }
                }
        },
        969553: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                CalendarPlusIcon: function() {
                    return i
                }
            });
            var n = a("37983");
            a("884691");
            var l = a("669491"),
                s = a("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: a = 24,
                    color: i = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...r
                } = e;
                return (0, n.jsxs)("svg", {
                    ...(0, s.default)(r),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: a,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, n.jsx)("path", {
                        d: "M19 14a1 1 0 0 1 1 1v3h3a1 1 0 0 1 0 2h-3v3a1 1 0 0 1-2 0v-3h-3a1 1 0 1 1 0-2h3v-3a1 1 0 0 1 1-1Z",
                        fill: "string" == typeof i ? i : i.css,
                        className: u
                    }), (0, n.jsx)("path", {
                        fillRule: "evenodd",
                        d: "M22 13.67c0 .12-.33.17-.39.06A2.87 2.87 0 0 0 19 12a3 3 0 0 0-3 3v.5a.5.5 0 0 1-.5.5H15a3 3 0 0 0-3 3c0 1.2.7 2.1 1.73 2.61.11.06.06.39-.06.39H5a3 3 0 0 1-3-3v-9a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v3.67ZM5.5 12a.5.5 0 0 0-.5.5v3c0 .28.22.5.5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3Z",
                        clipRule: "evenodd",
                        fill: "string" == typeof i ? i : i.css,
                        className: u
                    }), (0, n.jsx)("path", {
                        d: "M7 1a1 1 0 0 1 1 1v.75c0 .14.11.25.25.25h7.5c.14 0 .25-.11.25-.25V2a1 1 0 1 1 2 0v.75c0 .14.11.25.25.25H19a3 3 0 0 1 3 3 1 1 0 0 1-1 1H3a1 1 0 0 1-1-1 3 3 0 0 1 3-3h.75c.14 0 .25-.11.25-.25V2a1 1 0 0 1 1-1Z",
                        fill: "string" == typeof i ? i : i.css,
                        className: u
                    })]
                })
            }
        },
        578411: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                GuildLeaveConfirmModalContents: function() {
                    return S
                }
            }), a("222007");
            var n = a("37983"),
                l = a("884691"),
                s = a("414456"),
                i = a.n(s),
                u = a("65597"),
                r = a("151426"),
                d = a("77078"),
                o = a("10641"),
                c = a("298878"),
                f = a("592407"),
                E = a("13162"),
                h = a("529932"),
                v = a("166465"),
                C = a("267567"),
                m = a("412745"),
                _ = a("393414"),
                I = a("476765"),
                p = a("216422"),
                g = a("599110"),
                N = a("49111"),
                M = a("365058"),
                A = a("782340"),
                x = a("866351");
            let S = e => {
                let {
                    guild: t,
                    discoverableGuildData: s
                } = e, S = t.id, {
                    isPremium: L,
                    collectEnabled: T,
                    hasReachedMaxPacksCollected: G
                } = (0, h.usePackCollectionData)({
                    expressionSourceGuild: s
                }), R = (0, I.useUID)(), V = (0, u.default)([v.default], () => null != v.default.getPackByPackId({
                    packId: t.id,
                    allowDuplicateGuildPack: !0
                })), b = T && !V, [H, O] = l.useState(!1), D = async () => {
                    let e = C.default.isLurking(S);
                    await f.default.leaveGuild(S), H && (g.default.track(N.AnalyticEvents.INVENTORY_PACK_ACTION_COMPLETED, {
                        type: m.EmojiPopoutType.ADD_PACK,
                        inventory_pack_id: S,
                        nonce: R
                    }), await (0, E.collectPack)({
                        packId: S
                    })), e ? (0, _.transitionTo)(N.Routes.GUILD_DISCOVERY) : !(0, o.isDismissibleContentDismissed)(r.DismissibleContent.GUILD_LEAVE_FEEDBACK) && (0, d.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await a.el("953750").then(a.bind(a, "953750"));
                        return a => (0, n.jsx)(e, {
                            ...a,
                            guildId: S,
                            guildName: t.name
                        })
                    })
                };
                return (0, n.jsxs)(d.ConfirmModal, {
                    className: i(x.confirmModal, {
                        [x.widthForAddPack]: b
                    }),
                    bodyClassName: i(x.confirmModalBody, {
                        [x.widthForAddPack]: b
                    }),
                    header: A.default.Messages.LEAVE_SERVER_TITLE.format({
                        name: t.name
                    }),
                    confirmText: t.hasFeature(N.GuildFeatures.HUB) ? A.default.Messages.LEAVE_HUB : A.default.Messages.LEAVE_SERVER,
                    cancelText: A.default.Messages.CANCEL,
                    onConfirm: D,
                    ...e,
                    children: [(0, n.jsx)(d.Text, {
                        variant: "text-md/normal",
                        children: t.hasFeature(N.GuildFeatures.HUB) ? A.default.Messages.LEAVE_HUB_BODY.format({
                            name: t.name
                        }) : A.default.Messages.LEAVE_SERVER_BODY.format({
                            name: t.name
                        })
                    }), b && (0, n.jsxs)("div", {
                        className: x.addPackSection,
                        children: [(0, n.jsxs)(d.FormSwitch, {
                            className: x.addPackHeader,
                            value: H,
                            disabled: G,
                            onChange: e => {
                                O(e)
                            },
                            hideBorder: !0,
                            children: [A.default.Messages.INVENTORY_ADD_PACK, " ", (0, n.jsx)(c.default, {
                                className: x.betaTag,
                                color: "white"
                            })]
                        }), (0, n.jsxs)(d.Text, {
                            variant: "text-sm/medium",
                            className: x.inventoryLeaveServerDescription,
                            children: [(0, n.jsx)(p.default, {
                                className: x.nitroWheel
                            }), A.default.Messages.INVENTORY_LEAVE_SERVER_DESCRIPTION]
                        }), G && !L && (0, n.jsx)(d.Text, {
                            variant: "text-sm/normal",
                            className: x.maxPacksNoticeText,
                            children: A.default.Messages.INVENTORY_ADD_NITRO_DESCRIPTION_WITH_PLURAL.format({
                                maxFreePacks: M.INVENTORY_MAX_FREE_PACKS,
                                maxPacks: M.INVENTORY_MAX_PACKS
                            })
                        })]
                    })]
                })
            }
        },
        230947: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return _
                }
            });
            var n = a("37983"),
                l = a("884691"),
                s = a("446674"),
                i = a("77078"),
                u = a("750560"),
                r = a("38766"),
                d = a("506885"),
                o = a("271938"),
                c = a("26989"),
                f = a("305961"),
                E = a("957255"),
                h = a("697218"),
                v = a("49111"),
                C = a("782340"),
                m = a("460856");

            function _(e) {
                let {
                    guildId: t,
                    userId: _,
                    analyticsLocation: I,
                    analyticsLocations: p,
                    context: g,
                    icon: N
                } = e, M = f.default.getGuild(t), A = o.default.getId(), x = (0, s.useStateFromStores)([h.default], () => h.default.getUser(_)), S = (0, s.useStateFromStores)([c.default], () => c.default.isGuestOrLurker(t, _), [t, _]);
                (0, s.useStateFromStores)([E.default], () => E.default.getGuildVersion(t), [t]);
                let L = l.useMemo(() => ({
                    [t]: [_]
                }), [t, _]);
                (0, u.useSubscribeGuildMembers)(L);
                let T = g === v.AppContext.POPOUT,
                    G = (0, r.default)({
                        guild: M,
                        analyticsLocation: I
                    });
                if (null == M || T) return null;
                let R = A === _ && (E.default.can(v.Permissions.CHANGE_NICKNAME, M) || E.default.can(v.Permissions.MANAGE_NICKNAMES, M)),
                    V = A === _,
                    b = E.default.canManageUser(v.Permissions.MANAGE_NICKNAMES, _, M);
                if (!(R || b || V) || null == x || S) return null;
                let H = M.hasFeature(v.GuildFeatures.HUB),
                    O = H ? C.default.Messages.HUB_EDIT_PROFILE : C.default.Messages.CHANGE_IDENTITY,
                    D = V ? O : C.default.Messages.CHANGE_NICKNAME;
                return (0, n.jsx)(i.MenuItem, {
                    id: "change-nickname",
                    label: (0, n.jsx)("div", {
                        className: m.labelWrapper,
                        children: (0, n.jsx)("span", {
                            className: m.label,
                            children: D
                        })
                    }),
                    icon: N,
                    action: () => {
                        V ? ((0, d.default)(x.id, x.getAvatarURL(t, 80), {
                            guildId: t
                        }), G()) : (0, i.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await a.el("59709").then(a.bind(a, "59709"));
                            return a => (0, n.jsx)(e, {
                                ...a,
                                guildId: t,
                                user: x,
                                analyticsSource: I,
                                analyticsLocations: p
                            })
                        })
                    }
                })
            }
        },
        747867: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return f
                }
            });
            var n = a("37983"),
                l = a("884691"),
                s = a("77078"),
                i = a("398654"),
                u = a("712125"),
                r = a("311161"),
                d = a("45029"),
                o = a("372624"),
                c = a("782340");

            function f(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    {
                        shouldShowIncidentActions: f,
                        isUnderLockdown: E,
                        incidentData: h
                    } = (0, i.useGuildIncidentsState)(e.id),
                    v = l.useCallback(() => {
                        let t = {
                            source: u.GuildIncidentActionSources.CONTEXT_MENU,
                            alertType: (0, r.getIncidentAlertType)(h)
                        };
                        (0, s.openModalLazy)(async () => {
                            let {
                                default: l
                            } = await a.el("186638").then(a.bind(a, "186638"));
                            return a => (0, n.jsx)(l, {
                                ...a,
                                guildId: e.id,
                                analyticsData: t
                            })
                        })
                    }, [e.id, h]);
                return e.isCommunity() && f ? (0, n.jsx)(s.MenuItem, {
                    id: "server-lockdown",
                    label: E ? c.default.Messages.GUILD_SERVER_LOCKDOWN_CONTEXT_MENU_UNLOCK : c.default.Messages.GUILD_SERVER_LOCKDOWN_CONTEXT_MENU_LOCK,
                    icon: t ? E ? o.default : d.default : void 0,
                    action: v,
                    color: "danger"
                }) : null
            }
        },
        58622: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return f
                }
            });
            var n = a("37983");
            a("884691");
            var l = a("446674"),
                s = a("77078"),
                i = a("242757"),
                u = a("923959"),
                r = a("957255"),
                d = a("76539"),
                o = a("49111"),
                c = a("782340");

            function f(e) {
                let {
                    source: t,
                    guild: a,
                    channel: n,
                    stageInstance: s
                } = e, d = (0, l.useStateFromStores)([u.default, r.default], () => {
                    var e;
                    let t = u.default.getChannels(a.id);
                    return null === (e = t[0, u.GUILD_SELECTABLE_CHANNELS_KEY].find(e => r.default.can(o.Permissions.CREATE_INSTANT_INVITE, e.channel))) || void 0 === e ? void 0 : e.channel
                }), c = (0, l.useStateFromStores)([r.default], () => (0, i.canViewInviteModal)(r.default, a, n, s)), f = E(t, a, c && null != n ? n : d), v = h(t);
                return null == n && t === o.InstantInviteSources.GUILD_CONTEXT_MENU ? null : c || null != d ? f : v
            }
            let E = (e, t, l) => (0, n.jsx)(s.MenuItem, {
                    id: "invite-people",
                    label: c.default.Messages.INVITE_PEOPLE,
                    color: "brand",
                    icon: e === o.InstantInviteSources.GUILD_HEADER ? d.default : void 0,
                    action: () => (0, s.openModalLazy)(async () => {
                        let {
                            default: s
                        } = await a.el("310688").then(a.bind(a, "310688"));
                        return a => (0, n.jsx)(s, {
                            ...a,
                            guild: t,
                            channel: l,
                            source: e
                        })
                    })
                }),
                h = e => (0, n.jsx)(s.MenuItem, {
                    id: "invite-people",
                    label: c.default.Messages.INVITE_PEOPLE,
                    color: "brand",
                    icon: e === o.InstantInviteSources.GUILD_HEADER ? d.default : void 0,
                    action: () => (0, s.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await a.el("973132").then(a.bind(a, "973132"));
                        return t => (0, n.jsx)(e, {
                            ...t
                        })
                    })
                })
        },
        413266: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                openReportRaidModal: function() {
                    return s
                },
                openSafetyChannelSetupModal: function() {
                    return i
                }
            });
            var n = a("37983");
            a("884691");
            var l = a("77078");

            function s(e) {
                (0, l.openModalLazy)(async () => {
                    let {
                        default: t
                    } = await a.el("423588").then(a.bind(a, "423588"));
                    return a => (0, n.jsx)(t, {
                        ...a,
                        guildId: e
                    })
                })
            }

            function i(e) {
                (0, l.openModalLazy)(async () => {
                    let {
                        default: t
                    } = await a.el("982537").then(a.bind(a, "982537"));
                    return a => (0, n.jsx)(t, {
                        ...a,
                        guildId: e
                    })
                })
            }
        },
        701203: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                useCanReportRaid: function() {
                    return c
                },
                useCanEnableRaidAlerts: function() {
                    return f
                }
            });
            var n = a("884691"),
                l = a("446674");
            a("926809");
            var s = a("957255"),
                i = a("610174"),
                u = a("413476"),
                r = a("311161"),
                d = a("54346"),
                o = a("49111");

            function c(e) {
                var t;
                let a = null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : "",
                    {
                        enableRaidReporting: i
                    } = u.ReportRaidExperiment.useExperiment({
                        guildId: a,
                        location: "4467c7_1"
                    }, {
                        autoTrackExposure: !1
                    }),
                    c = (0, l.useStateFromStores)([s.default], () => (function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.default;
                        return t.can(o.Permissions.BAN_MEMBERS, e) || t.can(o.Permissions.KICK_MEMBERS, e) || t.can(o.Permissions.MANAGE_GUILD, e)
                    })(e, s.default), [e]),
                    f = (0, l.useStateFromStores)([d.default], () => null != e ? d.default.getGuildIncident(e.id) : null, [e]),
                    E = null != f && (0, r.hasDetectedActivity)(f);
                return n.useEffect(() => {
                    !E && c && u.ReportRaidExperiment.trackExposure({
                        guildId: a,
                        location: "4467c7_2"
                    })
                }, [E, c, a]), !E && c && i
            }

            function f(e) {
                var t;
                let a = null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : "",
                    n = (0, l.useStateFromStores)([s.default], () => (function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.default;
                        return t.can(o.Permissions.MANAGE_GUILD, e)
                    })(e, s.default), [e]),
                    {
                        enableRaidAlerts: r
                    } = u.RaidAlertExperiment.useExperiment({
                        guildId: a,
                        location: "4467c7_3"
                    }, {
                        autoTrackExposure: n
                    }),
                    {
                        showAlertMode: d
                    } = (0, i.useGuildAlertModeEnabled)(a);
                return n && (r || d)
            }
        },
        255812: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return d
                }
            });
            var n = a("37983");
            a("884691");
            var l = a("77078"),
                s = a("70025"),
                i = a("334683"),
                u = a("842672"),
                r = a("782340");

            function d(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    d = (0, i.default)(e),
                    o = (0, u.default)();
                return d ? (0, n.jsx)(l.MenuItem, {
                    id: "create-event",
                    label: r.default.Messages.SCHEDULE_EVENT,
                    icon: t ? s.default : void 0,
                    action: () => {
                        (0, l.openModalLazy)(async () => {
                            let {
                                default: t
                            } = await a.el("590942").then(a.bind(a, "590942"));
                            return a => (0, n.jsx)(t, {
                                ...a,
                                guildId: e
                            })
                        }, o)
                    }
                }) : null
            }
        },
        199938: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                staffOnlyGuildSettingsAccess: function() {
                    return u
                },
                useGuildAccessRateInsightExperiment: function() {
                    return r
                }
            });
            var n = a("884691"),
                l = a("862205"),
                s = a("697218");
            let i = (0, l.createExperiment)({
                kind: "guild",
                id: "2022-03_guild_access_rate_insight_experiment",
                label: "Guild Access Rate Insight Experiment",
                defaultConfig: {
                    showAccessRate: !1
                },
                treatments: [{
                    id: 1,
                    label: "Show guild access rate in insights",
                    config: {
                        showAccessRate: !0
                    }
                }]
            });

            function u(e) {
                var t;
                let a = null === (t = s.default.getCurrentUser()) || void 0 === t ? void 0 : t.isStaff();
                return a && i.getCurrentConfig({
                    guildId: e,
                    location: "77b4b2_1"
                }).showAccessRate
            }

            function r(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return n.useEffect(() => {
                    !t && null != e && i.trackExposure({
                        guildId: e,
                        location: "77b4b2_2"
                    })
                }, [e, t]), i.useExperiment({
                    guildId: null != e ? e : "",
                    location: "77b4b2_3"
                }, {
                    autoTrackExposure: !1,
                    disable: t || null == e
                })
            }
        },
        986003: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                hasNotSetUpChannelOptIn: function() {
                    return c
                },
                toggleShowAllChannels: function() {
                    return f
                },
                optIntoAllChannelsForExistingMember: function() {
                    return E
                }
            }), a("702976"), a("222007"), a("424973"), a("151426");
            var n = a("921031");
            a("374363");
            var l = a("923959"),
                s = a("26989"),
                i = a("282109"),
                u = a("568734"),
                r = a("629220"),
                d = a("512395"),
                o = a("657944");

            function c(e) {
                var t, a;
                let n = (0, d.isOptInEnabledForGuild)(e),
                    l = null !== (a = null === (t = s.default.getSelfMember(e)) || void 0 === t ? void 0 : t.flags) && void 0 !== a ? a : 0,
                    r = (0, u.hasFlag)(l, o.GuildMemberFlags.COMPLETED_ONBOARDING),
                    c = i.default.getOptedInChannels(e).size > 0;
                return !n && !r && !c
            }

            function f(e) {
                if (c(e)) {
                    E(e);
                    return
                } {
                    let t = (0, d.isOptInEnabledForGuild)(e);
                    (0, r.setGuildOptIn)(e, !t)
                }
            }

            function E(e) {
                let {
                    include: t = new Set,
                    exclude: a = new Set
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, s = l.default.getChannels(e), i = [...s[0, l.GUILD_SELECTABLE_CHANNELS_KEY], ...s[0, l.GUILD_VOCAL_CHANNELS_KEY]].filter(e => {
                    let {
                        channel: t
                    } = e;
                    return !t.isThread() && !a.has(t.id)
                }).map(e => {
                    let {
                        channel: t
                    } = e;
                    return t.id
                });
                t.forEach(e => i.push(e)), n.default.onboardExistingMember(e, new Set(i))
            }
        },
        724026: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return f
                }
            });
            var n = a("37983");
            a("884691");
            var l = a("446674"),
                s = a("77078"),
                i = a("305961"),
                u = a("697218"),
                r = a("986003"),
                d = a("512395"),
                o = a("49111"),
                c = a("782340");

            function f(e) {
                let t = (0, d.useOptInEnabledForGuild)(e),
                    a = (0, l.useStateFromStores)([i.default], () => i.default.getGuild(e)),
                    f = (0, l.useStateFromStores)([u.default], () => u.default.getCurrentUser());
                return null != f && null != a && (a.hasFeature(o.GuildFeatures.COMMUNITY) || f.isStaff()) ? (0, n.jsx)(s.MenuCheckboxItem, {
                    id: "opt-in",
                    label: c.default.Messages.GUILD_CHANNEL_OPT_IN,
                    checked: !t,
                    action: () => {
                        (0, r.toggleShowAllChannels)(e)
                    }
                }) : null
            }
        },
        756609: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return u
                }
            });
            var n = a("37983");
            a("884691");
            var l = a("469563"),
                s = a("308472"),
                i = a("75196"),
                u = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 18,
                        height: a = 18,
                        color: l = "currentColor",
                        foreground: s,
                        ...u
                    } = e;
                    return (0, n.jsxs)("svg", {
                        ...(0, i.default)(u),
                        width: t,
                        height: a,
                        viewBox: "0 0 18 18",
                        children: [(0, n.jsx)("path", {
                            fill: l,
                            className: s,
                            d: "M4.5,16.5v-3H3A1.5,1.5,0,0,1,1.5,12V3A1.5,1.5,0,0,1,3,1.5H15A1.5,1.5,0,0,1,16.5,3v9A1.5,1.5,0,0,1,15,13.5H8.5ZM3,3v9H6v1.5L8,12h7V3Z"
                        }), (0, n.jsx)("path", {
                            fill: l,
                            className: s,
                            d: "M6.75,4.5H5.25v6h1.5Z"
                        }), (0, n.jsx)("path", {
                            fill: l,
                            className: s,
                            d: "M9.75,7.5H8.25v3h1.5Z"
                        }), (0, n.jsx)("path", {
                            fill: l,
                            className: s,
                            d: "M12.75,6h-1.5v4.5h1.5Z"
                        })]
                    })
                }, s.AnalyticsIcon, void 0, {
                    size: 18
                })
        },
        70025: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return u
                }
            });
            var n = a("37983");
            a("884691");
            var l = a("469563"),
                s = a("969553"),
                i = a("75196"),
                u = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: a = 24,
                        color: l = "currentColor",
                        ...s
                    } = e;
                    return (0, n.jsxs)("svg", {
                        ...(0, i.default)(s),
                        width: t,
                        height: a,
                        viewBox: "0 0 24 24",
                        children: [(0, n.jsx)("path", {
                            d: "M21 4V1H19V4H16V6H19V9H21V6H24V4H21Z",
                            fill: l
                        }), (0, n.jsx)("path", {
                            d: "M8 4H14V9H5V20H19V11H21V20C21 21.1 20.1 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20L3.01 6C3.01 4.9 3.89 4 5 4H6V2H8V4Z",
                            fill: l
                        }), (0, n.jsx)("path", {
                            d: "M7 11H12V16H7V11Z",
                            fill: l
                        })]
                    })
                }, s.CalendarPlusIcon, void 0, {
                    size: 24
                })
        },
        372624: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return u
                }
            });
            var n = a("37983");
            a("884691");
            var l = a("469563"),
                s = a("263436"),
                i = a("75196"),
                u = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: a = 24,
                        color: l = "currentColor",
                        className: s,
                        foreground: u,
                        ...r
                    } = e;
                    return (0, n.jsx)("svg", {
                        width: t,
                        height: a,
                        className: s,
                        viewBox: "0 0 24 24",
                        ...(0, i.default)(r),
                        children: (0, n.jsx)("path", {
                            className: u,
                            fill: l,
                            d: "M18.8571 9.54956H8.57143V6.46015C8.57143 4.86218 9.71429 3.47727 11.3143 3.15768C13.4857 2.83808 15.4286 4.32952 15.4286 6.35362C15.4286 6.99281 16 7.41893 16.5714 7.41893C17.1429 7.41893 17.7143 6.99281 17.7143 6.35362C17.7143 3.26421 14.8571 0.707455 11.4286 1.02705C8.45714 1.34664 6.28571 3.79687 6.28571 6.56668V9.54956H5.14286C4.57143 9.54956 4 9.97569 4 10.6149V21.268C4 21.8007 4.57143 22.3333 5.14286 22.3333H18.8571C19.5429 22.3333 20 21.8007 20 21.268V10.6149C20 9.97569 19.5429 9.54956 18.8571 9.54956ZM13.1429 16.6872V18.0721C13.1429 18.7113 12.6857 19.1374 12 19.1374C11.3143 19.1374 10.8571 18.7113 10.8571 18.0721V16.6872C10.1714 16.261 9.71429 15.6219 9.71429 14.8761C9.71429 13.4912 11.0857 12.5324 12.5714 12.852C13.3714 13.0651 14.0571 13.7043 14.2857 14.45C14.5143 15.4088 13.9429 16.261 13.1429 16.6872Z",
                            "aria-hidden": !0
                        })
                    })
                }, s.LockUnlockedIcon, void 0, {
                    size: 24
                })
        }
    }
]);