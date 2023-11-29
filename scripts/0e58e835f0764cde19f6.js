(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["77576"], {
        126501: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return u
                }
            });
            var l = a("913144"),
                n = a("679428"),
                s = a("282109"),
                u = {
                    update(e) {
                        l.default.dispatch({
                            type: "CHANNEL_COLLAPSE",
                            channelId: e
                        })
                    },
                    toggleCollapseGuild(e) {
                        n.default.saveUserGuildSettings(e, {
                            hide_muted_channels: !s.default.isGuildCollapsed(e)
                        }), l.default.dispatch({
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
                    return u
                }
            });
            var l = a("37983");
            a("884691");
            var n = a("669491"),
                s = a("75196");
            let u = e => {
                let {
                    width: t = 24,
                    height: a = 24,
                    color: u = n.default.colors.INTERACTIVE_NORMAL,
                    colorClass: i = "",
                    ...d
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, s.default)(d),
                    width: t,
                    height: a,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, l.jsx)("path", {
                        d: "M19 14C19.5522 14 20 14.4477 20 15L20 18H23C23.5522 18 24 18.4477 24 19C24 19.5523 23.5522 20 23 20H20V23C20 23.5523 19.5522 24 19 24C18.4477 24 18 23.5523 18 23L18 20L15 20C14.4477 20 14 19.5523 14 19C14 18.4477 14.4477 18 15 18L18 18V15C18 14.4477 18.4477 14 19 14Z",
                        fill: "string" == typeof u ? u : u.css,
                        className: i
                    }), (0, l.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M22 13.6671C22 13.7908 21.6651 13.8416 21.6106 13.7305C21.1089 12.7082 20.2031 12 19 12C17.3431 12 16 13.3432 16 15L16 15.5C16 15.7762 15.7761 16 15.5 16H15C13.3431 16 12 17.3432 12 19C12 20.2031 12.7081 21.109 13.7304 21.6106C13.8414 21.6651 13.7907 22 13.667 22L5 22C3.34315 22 2 20.6569 2 19L2 10C2 9.44775 2.44772 9.00003 3 9.00003L21 9.00003C21.5523 9.00003 22 9.44775 22 10L22 13.6671ZM5.5 12C5.22386 12 5 12.2239 5 12.5L5 15.5C5 15.7762 5.22386 16 5.5 16L8.5 16C8.77614 16 9 15.7762 9 15.5L9 12.5C9 12.2239 8.77614 12 8.5 12L5.5 12Z",
                        fill: "string" == typeof u ? u : u.css,
                        className: i
                    }), (0, l.jsx)("path", {
                        d: "M7 1.00003C7.55229 1.00003 8 1.44775 8 2.00003V2.75003C8 2.8881 8.11193 3.00003 8.25 3.00003L15.75 3.00003C15.8881 3.00003 16 2.8881 16 2.75003V2.00003C16 1.44775 16.4477 1.00003 17 1.00003C17.5523 1.00003 18 1.44775 18 2.00003L18 2.75003C18 2.8881 18.1119 3.00003 18.25 3.00003L19 3.00003C20.6569 3.00003 22 4.34318 22 6.00003C22 6.55232 21.5523 7.00003 21 7.00003L3 7.00003C2.44772 7.00003 2 6.55232 2 6.00003C2 4.34318 3.34315 3.00003 5 3.00003H5.75C5.88807 3.00003 6 2.8881 6 2.75003V2.00003C6 1.44775 6.44772 1.00003 7 1.00003Z",
                        fill: "string" == typeof u ? u : u.css,
                        className: i
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
            var l = a("37983"),
                n = a("884691"),
                s = a("414456"),
                u = a.n(s),
                i = a("65597"),
                d = a("151426"),
                r = a("77078"),
                o = a("10641"),
                c = a("298878"),
                f = a("592407"),
                C = a("13162"),
                E = a("529932"),
                I = a("166465"),
                N = a("267567"),
                _ = a("412745"),
                h = a("393414"),
                L = a("476765"),
                m = a("216422"),
                g = a("599110"),
                M = a("49111"),
                v = a("365058"),
                p = a("782340"),
                A = a("866351");
            let S = e => {
                let {
                    guild: t,
                    discoverableGuildData: s
                } = e, S = t.id, {
                    isPremium: T,
                    collectEnabled: x,
                    hasReachedMaxPacksCollected: V
                } = (0, E.usePackCollectionData)({
                    expressionSourceGuild: s
                }), O = (0, L.useUID)(), D = (0, i.default)([I.default], () => null != I.default.getPackByPackId({
                    packId: t.id,
                    allowDuplicateGuildPack: !0
                })), G = x && !D, [H, P] = n.useState(!1), b = async () => {
                    let e = N.default.isLurking(S);
                    await f.default.leaveGuild(S), H && (g.default.track(M.AnalyticEvents.INVENTORY_PACK_ACTION_COMPLETED, {
                        type: _.EmojiPopoutType.ADD_PACK,
                        inventory_pack_id: S,
                        nonce: O
                    }), await (0, C.collectPack)({
                        packId: S
                    })), e ? (0, h.transitionTo)(M.Routes.GUILD_DISCOVERY) : !(0, o.isDismissibleContentDismissed)(d.DismissibleContent.GUILD_LEAVE_FEEDBACK) && (0, r.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await a.el("953750").then(a.bind(a, "953750"));
                        return a => (0, l.jsx)(e, {
                            ...a,
                            guildId: S,
                            guildName: t.name
                        })
                    })
                };
                return (0, l.jsxs)(r.ConfirmModal, {
                    className: u(A.confirmModal, {
                        [A.widthForAddPack]: G
                    }),
                    bodyClassName: u(A.confirmModalBody, {
                        [A.widthForAddPack]: G
                    }),
                    header: p.default.Messages.LEAVE_SERVER_TITLE.format({
                        name: t.name
                    }),
                    confirmText: t.hasFeature(M.GuildFeatures.HUB) ? p.default.Messages.LEAVE_HUB : p.default.Messages.LEAVE_SERVER,
                    cancelText: p.default.Messages.CANCEL,
                    onConfirm: b,
                    ...e,
                    children: [(0, l.jsx)(r.Text, {
                        variant: "text-md/normal",
                        children: t.hasFeature(M.GuildFeatures.HUB) ? p.default.Messages.LEAVE_HUB_BODY.format({
                            name: t.name
                        }) : p.default.Messages.LEAVE_SERVER_BODY.format({
                            name: t.name
                        })
                    }), G && (0, l.jsxs)("div", {
                        className: A.addPackSection,
                        children: [(0, l.jsxs)(r.FormSwitch, {
                            className: A.addPackHeader,
                            value: H,
                            disabled: V,
                            onChange: e => {
                                P(e)
                            },
                            hideBorder: !0,
                            children: [p.default.Messages.INVENTORY_ADD_PACK, " ", (0, l.jsx)(c.default, {
                                className: A.betaTag,
                                color: "white"
                            })]
                        }), (0, l.jsxs)(r.Text, {
                            variant: "text-sm/medium",
                            className: A.inventoryLeaveServerDescription,
                            children: [(0, l.jsx)(m.default, {
                                className: A.nitroWheel
                            }), p.default.Messages.INVENTORY_LEAVE_SERVER_DESCRIPTION]
                        }), V && !T && (0, l.jsx)(r.Text, {
                            variant: "text-sm/normal",
                            className: A.maxPacksNoticeText,
                            children: p.default.Messages.INVENTORY_ADD_NITRO_DESCRIPTION_WITH_PLURAL.format({
                                maxFreePacks: v.INVENTORY_MAX_FREE_PACKS,
                                maxPacks: v.INVENTORY_MAX_PACKS
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
                    return h
                }
            });
            var l = a("37983"),
                n = a("884691"),
                s = a("446674"),
                u = a("77078"),
                i = a("750560"),
                d = a("38766"),
                r = a("506885"),
                o = a("271938"),
                c = a("26989"),
                f = a("305961"),
                C = a("957255"),
                E = a("697218"),
                I = a("49111"),
                N = a("782340"),
                _ = a("460856");

            function h(e) {
                let {
                    guildId: t,
                    userId: h,
                    analyticsLocation: L,
                    analyticsLocations: m,
                    context: g,
                    icon: M
                } = e, v = f.default.getGuild(t), p = o.default.getId(), A = (0, s.useStateFromStores)([E.default], () => E.default.getUser(h)), S = (0, s.useStateFromStores)([c.default], () => c.default.isGuestOrLurker(t, h), [t, h]);
                (0, s.useStateFromStores)([C.default], () => C.default.getGuildVersion(t), [t]);
                let T = n.useMemo(() => ({
                    [t]: [h]
                }), [t, h]);
                (0, i.useSubscribeGuildMembers)(T);
                let x = g === I.AppContext.POPOUT,
                    V = (0, d.default)({
                        guild: v,
                        analyticsLocation: L
                    });
                if (null == v || x) return null;
                let O = p === h && (C.default.can(I.Permissions.CHANGE_NICKNAME, v) || C.default.can(I.Permissions.MANAGE_NICKNAMES, v)),
                    D = p === h,
                    G = C.default.canManageUser(I.Permissions.MANAGE_NICKNAMES, h, v);
                if (!(O || G || D) || null == A || S) return null;
                let H = v.hasFeature(I.GuildFeatures.HUB),
                    P = H ? N.default.Messages.HUB_EDIT_PROFILE : N.default.Messages.CHANGE_IDENTITY,
                    b = D ? P : N.default.Messages.CHANGE_NICKNAME;
                return (0, l.jsx)(u.MenuItem, {
                    id: "change-nickname",
                    label: (0, l.jsx)("div", {
                        className: _.labelWrapper,
                        children: (0, l.jsx)("span", {
                            className: _.label,
                            children: b
                        })
                    }),
                    icon: M,
                    action: () => {
                        D ? ((0, r.default)(A.id, A.getAvatarURL(t, 80), {
                            guildId: t
                        }), V()) : (0, u.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await a.el("59709").then(a.bind(a, "59709"));
                            return a => (0, l.jsx)(e, {
                                ...a,
                                guildId: t,
                                user: A,
                                analyticsSource: L,
                                analyticsLocations: m
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
            var l = a("37983"),
                n = a("884691"),
                s = a("77078"),
                u = a("398654"),
                i = a("712125"),
                d = a("311161"),
                r = a("45029"),
                o = a("372624"),
                c = a("782340");

            function f(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    {
                        shouldShowIncidentActions: f,
                        isUnderLockdown: C,
                        incidentData: E
                    } = (0, u.useGuildIncidentsState)(e.id),
                    I = n.useCallback(() => {
                        let t = {
                            source: i.GuildIncidentActionSources.CONTEXT_MENU,
                            alertType: (0, d.getIncidentAlertType)(E)
                        };
                        (0, s.openModalLazy)(async () => {
                            let {
                                default: n
                            } = await a.el("186638").then(a.bind(a, "186638"));
                            return a => (0, l.jsx)(n, {
                                ...a,
                                guildId: e.id,
                                analyticsData: t
                            })
                        })
                    }, [e.id, E]);
                return e.isCommunity() && f ? (0, l.jsx)(s.MenuItem, {
                    id: "server-lockdown",
                    label: C ? c.default.Messages.GUILD_SERVER_LOCKDOWN_CONTEXT_MENU_UNLOCK : c.default.Messages.GUILD_SERVER_LOCKDOWN_CONTEXT_MENU_LOCK,
                    icon: t ? C ? o.default : r.default : void 0,
                    action: I,
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
            var l = a("37983");
            a("884691");
            var n = a("446674"),
                s = a("77078"),
                u = a("242757"),
                i = a("923959"),
                d = a("957255"),
                r = a("76539"),
                o = a("49111"),
                c = a("782340");

            function f(e) {
                let {
                    source: t,
                    guild: a,
                    channel: l,
                    stageInstance: s
                } = e, r = (0, n.useStateFromStores)([i.default, d.default], () => {
                    var e;
                    let t = i.default.getChannels(a.id);
                    return null === (e = t[0, i.GUILD_SELECTABLE_CHANNELS_KEY].find(e => d.default.can(o.Permissions.CREATE_INSTANT_INVITE, e.channel))) || void 0 === e ? void 0 : e.channel
                }), c = (0, n.useStateFromStores)([d.default], () => (0, u.canViewInviteModal)(d.default, a, l, s)), f = C(t, a, c && null != l ? l : r), I = E(t);
                return null == l && t === o.InstantInviteSources.GUILD_CONTEXT_MENU ? null : c || null != r ? f : I
            }
            let C = (e, t, n) => (0, l.jsx)(s.MenuItem, {
                    id: "invite-people",
                    label: c.default.Messages.INVITE_PEOPLE,
                    color: "brand",
                    icon: e === o.InstantInviteSources.GUILD_HEADER ? r.default : void 0,
                    action: () => (0, s.openModalLazy)(async () => {
                        let {
                            default: s
                        } = await a.el("310688").then(a.bind(a, "310688"));
                        return a => (0, l.jsx)(s, {
                            ...a,
                            guild: t,
                            channel: n,
                            source: e
                        })
                    })
                }),
                E = e => (0, l.jsx)(s.MenuItem, {
                    id: "invite-people",
                    label: c.default.Messages.INVITE_PEOPLE,
                    color: "brand",
                    icon: e === o.InstantInviteSources.GUILD_HEADER ? r.default : void 0,
                    action: () => (0, s.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await a.el("973132").then(a.bind(a, "973132"));
                        return t => (0, l.jsx)(e, {
                            ...t
                        })
                    })
                })
        },
        255812: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return r
                }
            });
            var l = a("37983");
            a("884691");
            var n = a("77078"),
                s = a("70025"),
                u = a("334683"),
                i = a("842672"),
                d = a("782340");

            function r(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    r = (0, u.default)(e),
                    o = (0, i.default)();
                return r ? (0, l.jsx)(n.MenuItem, {
                    id: "create-event",
                    label: d.default.Messages.SCHEDULE_EVENT,
                    icon: t ? s.default : void 0,
                    action: () => {
                        (0, n.openModalLazy)(async () => {
                            let {
                                default: t
                            } = await a.el("590942").then(a.bind(a, "590942"));
                            return a => (0, l.jsx)(t, {
                                ...a,
                                guildId: e
                            })
                        }, o)
                    }
                }) : null
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
                    return C
                }
            }), a("702976"), a("222007"), a("424973"), a("151426");
            var l = a("921031");
            a("374363");
            var n = a("923959"),
                s = a("26989"),
                u = a("282109"),
                i = a("568734"),
                d = a("629220"),
                r = a("512395"),
                o = a("657944");

            function c(e) {
                var t, a;
                let l = (0, r.isOptInEnabledForGuild)(e),
                    n = null !== (a = null === (t = s.default.getSelfMember(e)) || void 0 === t ? void 0 : t.flags) && void 0 !== a ? a : 0,
                    d = (0, i.hasFlag)(n, o.GuildMemberFlags.COMPLETED_ONBOARDING),
                    c = u.default.getOptedInChannels(e).size > 0;
                return !l && !d && !c
            }

            function f(e) {
                if (c(e)) {
                    C(e);
                    return
                } {
                    let t = (0, r.isOptInEnabledForGuild)(e);
                    (0, d.setGuildOptIn)(e, !t)
                }
            }

            function C(e) {
                let {
                    include: t = new Set,
                    exclude: a = new Set
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, s = n.default.getChannels(e), u = [...s[0, n.GUILD_SELECTABLE_CHANNELS_KEY], ...s[0, n.GUILD_VOCAL_CHANNELS_KEY]].filter(e => {
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
                t.forEach(e => u.push(e)), l.default.onboardExistingMember(e, new Set(u))
            }
        },
        724026: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return f
                }
            });
            var l = a("37983");
            a("884691");
            var n = a("446674"),
                s = a("77078"),
                u = a("305961"),
                i = a("697218"),
                d = a("986003"),
                r = a("512395"),
                o = a("49111"),
                c = a("782340");

            function f(e) {
                let t = (0, r.useOptInEnabledForGuild)(e),
                    a = (0, n.useStateFromStores)([u.default], () => u.default.getGuild(e)),
                    f = (0, n.useStateFromStores)([i.default], () => i.default.getCurrentUser());
                return null != f && null != a && (a.hasFeature(o.GuildFeatures.COMMUNITY) || f.isStaff()) ? (0, l.jsx)(s.MenuCheckboxItem, {
                    id: "opt-in",
                    label: c.default.Messages.GUILD_CHANNEL_OPT_IN,
                    checked: !t,
                    action: () => {
                        (0, d.toggleShowAllChannels)(e)
                    }
                }) : null
            }
        },
        70025: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return i
                }
            });
            var l = a("37983");
            a("884691");
            var n = a("469563"),
                s = a("969553"),
                u = a("75196"),
                i = (0, n.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: a = 24,
                        color: n = "currentColor",
                        ...s
                    } = e;
                    return (0, l.jsxs)("svg", {
                        ...(0, u.default)(s),
                        width: t,
                        height: a,
                        viewBox: "0 0 24 24",
                        children: [(0, l.jsx)("path", {
                            d: "M21 4V1H19V4H16V6H19V9H21V6H24V4H21Z",
                            fill: n
                        }), (0, l.jsx)("path", {
                            d: "M8 4H14V9H5V20H19V11H21V20C21 21.1 20.1 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20L3.01 6C3.01 4.9 3.89 4 5 4H6V2H8V4Z",
                            fill: n
                        }), (0, l.jsx)("path", {
                            d: "M7 11H12V16H7V11Z",
                            fill: n
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
                    return i
                }
            });
            var l = a("37983");
            a("884691");
            var n = a("469563"),
                s = a("263436"),
                u = a("75196"),
                i = (0, n.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: a = 24,
                        color: n = "currentColor",
                        className: s,
                        foreground: i,
                        ...d
                    } = e;
                    return (0, l.jsx)("svg", {
                        width: t,
                        height: a,
                        className: s,
                        viewBox: "0 0 24 24",
                        ...(0, u.default)(d),
                        children: (0, l.jsx)("path", {
                            className: i,
                            fill: n,
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