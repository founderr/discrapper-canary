(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["99898"], {
        263436: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                LockUnlockedIcon: function() {
                    return l
                }
            });
            var s = n("37983");
            n("884691");
            var i = n("669491"),
                a = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...d
                } = e;
                return (0, s.jsx)("svg", {
                    ...(0, a.default)(d),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, s.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        fillRule: "evenodd",
                        d: "M8.7 2.25A4.98 4.98 0 0 1 17 6v3h1a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-8a3 3 0 0 1 3-3h9V6a3 3 0 0 0-4.98-2.25 1 1 0 0 1-1.33-1.5ZM14 14a2 2 0 0 1-1 1.73V18a1 1 0 1 1-2 0v-2.27A2 2 0 1 1 14 14Z",
                        clipRule: "evenodd",
                        className: u
                    })
                })
            }
        },
        715072: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                UserPlusIcon: function() {
                    return l
                }
            });
            var s = n("37983");
            n("884691");
            var i = n("669491"),
                a = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...d
                } = e;
                return (0, s.jsxs)("svg", {
                    ...(0, a.default)(d),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, s.jsx)("path", {
                        d: "M19 14a1 1 0 0 1 1 1v3h3a1 1 0 0 1 0 2h-3v3a1 1 0 0 1-2 0v-3h-3a1 1 0 1 1 0-2h3v-3a1 1 0 0 1 1-1Z",
                        fill: "string" == typeof l ? l : l.css,
                        className: u
                    }), (0, s.jsx)("path", {
                        d: "M16.83 12.93c.26-.27.26-.75-.08-.92A9.5 9.5 0 0 0 12.47 11h-.94A9.53 9.53 0 0 0 2 20.53c0 .81.66 1.47 1.47 1.47h.22c.24 0 .44-.17.5-.4.29-1.12.84-2.17 1.32-2.91.14-.21.43-.1.4.15l-.26 2.61c-.02.3.2.55.5.55h7.64c.12 0 .17-.31.06-.36C12.82 21.14 12 20.22 12 19a3 3 0 0 1 3-3h.5a.5.5 0 0 0 .5-.5V15c0-.8.31-1.53.83-2.07ZM12 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z",
                        fill: "string" == typeof l ? l : l.css,
                        className: u
                    })]
                })
            }
        },
        531674: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getMuteTimes: function() {
                    return M
                },
                default: function() {
                    return N
                }
            }), n("222007");
            var s = n("37983");
            n("884691");
            var i = n("866227"),
                a = n.n(i),
                l = n("446674"),
                u = n("77078"),
                d = n("820542"),
                o = n("519705"),
                r = n("319165"),
                c = n("282109"),
                S = n("679653"),
                f = n("49111"),
                g = n("468200"),
                E = n("782340");
            let M = () => [{
                    value: g.MuteUntilSeconds.MINUTES_15,
                    label: E.default.Messages.MUTE_DURATION_15_MINUTES
                }, {
                    value: g.MuteUntilSeconds.HOURS_1,
                    label: E.default.Messages.MUTE_DURATION_1_HOUR
                }, {
                    value: g.MuteUntilSeconds.HOURS_3,
                    label: E.default.Messages.MUTE_DURATION_3_HOURS
                }, {
                    value: g.MuteUntilSeconds.HOURS_8,
                    label: E.default.Messages.MUTE_DURATION_8_HOURS
                }, {
                    value: g.MuteUntilSeconds.HOURS_24,
                    label: E.default.Messages.MUTE_DURATION_24_HOURS
                }, {
                    value: g.MuteUntilSeconds.ALWAYS,
                    label: E.default.Messages.MUTE_DURATION_ALWAYS
                }],
                _ = e => {
                    let t = e > 0 ? a().add(e, "second").toISOString() : null;
                    return {
                        muted: !0,
                        mute_config: {
                            selected_time_window: e,
                            end_time: t
                        }
                    }
                };

            function N(e, t) {
                let [n, i] = (0, l.useStateFromStoresArray)([c.default], () => [c.default.isChannelMuted(e.guild_id, e.id), c.default.getChannelMuteConfig(e.guild_id, e.id)]), a = (0, r.useMutedUntilText)(i), g = (0, S.default)(e, !0);

                function N(t) {
                    t && e.type === f.ChannelTypes.GUILD_CATEGORY && (0, d.categoryCollapse)(e.id), o.default.updateChannelOverrideSettings(e.guild_id, e.id, {
                        muted: t
                    })
                }
                let h = E.default.Messages.MUTE_CHANNEL_GENERIC,
                    I = E.default.Messages.UNMUTE_CHANNEL_GENERIC;
                switch (e.type) {
                    case f.ChannelTypes.GUILD_CATEGORY:
                        h = E.default.Messages.MUTE_CATEGORY, I = E.default.Messages.UNMUTE_CATEGORY;
                        break;
                    case f.ChannelTypes.GROUP_DM:
                        h = E.default.Messages.MUTE_CONVERSATION, I = E.default.Messages.UNMUTE_CONVERSATION;
                        break;
                    case f.ChannelTypes.DM:
                        h = E.default.Messages.MUTE_CHANNEL.format({
                            name: g
                        }), I = E.default.Messages.UNMUTE_CHANNEL.format({
                            name: g
                        });
                        break;
                    default:
                        h = E.default.Messages.MUTE_CHANNEL_GENERIC, I = E.default.Messages.UNMUTE_CHANNEL_GENERIC
                }
                return n ? (0, s.jsx)(u.MenuItem, {
                    id: "unmute-channel",
                    label: I,
                    subtext: a,
                    action: () => N(!1)
                }) : (0, s.jsx)(u.MenuItem, {
                    id: "mute-channel",
                    label: h,
                    action: () => N(!0),
                    children: M().map(n => {
                        let {
                            value: i,
                            label: a
                        } = n;
                        return (0, s.jsx)(u.MenuItem, {
                            id: "".concat(i),
                            label: a,
                            action: () => (function(n) {
                                e.type === f.ChannelTypes.GUILD_CATEGORY && (0, d.categoryCollapse)(e.id);
                                let s = _(n);
                                o.default.updateChannelOverrideSettings(e.guild_id, e.id, s, t)
                            })(i)
                        }, i)
                    })
                })
            }
        },
        374705: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return b
                }
            });
            var s = n("37983");
            n("884691");
            var i = n("627445"),
                a = n.n(i),
                l = n("446674"),
                u = n("77078"),
                d = n("272030"),
                o = n("812204"),
                r = n("685665"),
                c = n("861370"),
                S = n("255812"),
                f = n("529932"),
                g = n("47495"),
                E = n("724026"),
                M = n("271938"),
                _ = n("923959"),
                N = n("697218"),
                h = n("578411"),
                I = n("230947"),
                T = n("544955"),
                A = n("747867"),
                O = n("555914"),
                U = n("513472"),
                m = n("527660"),
                L = n("823772"),
                p = n("177508"),
                R = n("263673"),
                C = n("58622"),
                G = n("49111"),
                v = n("782340");

            function x(e) {
                let {
                    guild: t,
                    onSelect: i,
                    hideSettings: o
                } = e, r = t.id, x = _.default.getDefaultChannel(r), b = (0, f.useExpressionSourceGuildDataForGuildLeaveModal)(t), j = (0, l.useStateFromStores)([N.default], () => {
                    let e = N.default.getCurrentUser();
                    return a(null != e, "GuildContextMenu: user cannot be undefined"), t.isOwner(e)
                }, [t]), F = (0, C.default)({
                    guild: t,
                    source: G.InstantInviteSources.GUILD_CONTEXT_MENU,
                    channel: x
                }), P = (0, R.default)(r), H = (0, U.default)(t), D = (0, m.default)(t), y = (0, p.default)(t), w = (0, I.default)({
                    guildId: t.id,
                    userId: M.default.getId(),
                    analyticsLocation: {
                        page: G.AnalyticsPages.GUILD_CHANNEL,
                        section: G.AnalyticsSections.CHAT_USERNAME,
                        object: G.AnalyticsObjects.CONTEXT_MENU_ITEM
                    }
                }), k = (0, T.default)(t), V = (0, S.default)(t.id), Y = (0, c.default)({
                    id: t.id,
                    label: v.default.Messages.COPY_ID_GUILD
                }), B = (0, O.default)(t, {
                    section: G.AnalyticsSections.GUILD_LIST
                }), Z = (0, E.default)(t.id), X = (0, L.default)(t.id), z = (0, A.default)(t), W = (0, g.useShouldUseNewNotificationSystem)("GuildContextMenu"), K = t.hasFeature(G.GuildFeatures.HUB);

                function q() {
                    (0, u.openModal)(e => (0, s.jsx)(h.GuildLeaveConfirmModalContents, {
                        ...e,
                        guild: t,
                        discoverableGuildData: b
                    }))
                }
                return K ? (0, s.jsxs)(u.Menu, {
                    navId: "guild-context",
                    onClose: d.closeContextMenu,
                    "aria-label": v.default.Messages.GUILD_ACTIONS_MENU_LABEL,
                    onSelect: i,
                    children: [(0, s.jsxs)(u.MenuGroup, {
                        children: [F, (0, s.jsx)(u.MenuItem, {
                            id: "privacy",
                            label: v.default.Messages.HUB_PRIVACY_SETTINGS,
                            action: () => (0, u.openModalLazy)(async () => {
                                let {
                                    default: e
                                } = await n.el("349406").then(n.bind(n, "349406"));
                                return n => (0, s.jsx)(e, {
                                    ...n,
                                    guild: t
                                })
                            })
                        }), w]
                    }), j ? null : (0, s.jsx)(u.MenuGroup, {
                        children: (0, s.jsx)(u.MenuItem, {
                            id: "leave-guild",
                            label: v.default.Messages.LEAVE_HUB,
                            action: q,
                            color: "danger"
                        })
                    }), (0, s.jsx)(u.MenuGroup, {
                        children: Y
                    })]
                }) : (0, s.jsxs)(u.Menu, {
                    navId: "guild-context",
                    onClose: d.closeContextMenu,
                    "aria-label": v.default.Messages.GUILD_ACTIONS_MENU_LABEL,
                    onSelect: i,
                    children: [(0, s.jsx)(u.MenuGroup, {
                        children: B
                    }), (0, s.jsx)(u.MenuGroup, {
                        children: F
                    }), (0, s.jsxs)(u.MenuGroup, {
                        children: [H, W || __OVERLAY__ ? null : D, W && !__OVERLAY__ ? X : null, P, Z]
                    }), (0, s.jsxs)(u.MenuGroup, {
                        children: [o ? null : y, __OVERLAY__ ? null : (0, s.jsx)(u.MenuItem, {
                            id: "privacy",
                            label: v.default.Messages.PRIVACY_SETTINGS,
                            action: () => (0, u.openModalLazy)(async () => {
                                let {
                                    default: e
                                } = await n.el("349406").then(n.bind(n, "349406"));
                                return n => (0, s.jsx)(e, {
                                    ...n,
                                    guild: t
                                })
                            })
                        }), w]
                    }), (0, s.jsxs)(u.MenuGroup, {
                        children: [k, V]
                    }), (0, s.jsxs)(u.MenuGroup, {
                        children: [z, !j && (0, s.jsx)(u.MenuItem, {
                            id: "leave-guild",
                            label: v.default.Messages.LEAVE_SERVER,
                            action: q,
                            color: "danger"
                        })]
                    }), (0, s.jsx)(u.MenuGroup, {
                        children: Y
                    })]
                })
            }

            function b(e) {
                let {
                    AnalyticsLocationProvider: t
                } = (0, r.default)(o.default.CONTEXT_MENU);
                return (0, s.jsx)(t, {
                    children: (0, s.jsx)(x, {
                        ...e
                    })
                })
            }
        },
        544955: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var s = n("37983");
            n("884691");
            var i = n("446674"),
                a = n("77078"),
                l = n("957255"),
                u = n("49111"),
                d = n("695838"),
                o = n("782340");

            function r(e) {
                let t = (0, i.useStateFromStores)([l.default], () => l.default.can(u.Permissions.MANAGE_CHANNELS, e));
                return __OVERLAY__ ? null : e.id === d.FAVORITES_RAW_GUILD_ID ? (0, s.jsx)(s.Fragment, {
                    children: (0, s.jsx)(a.MenuItem, {
                        id: "create-category",
                        label: o.default.Messages.CREATE_CATEGORY,
                        action: () => (0, a.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await n.el("515680").then(n.bind(n, "515680"));
                            return t => (0, s.jsx)(e, {
                                ...t
                            })
                        })
                    })
                }) : t ? [(0, s.jsx)(a.MenuItem, {
                    id: "create-channel",
                    label: o.default.Messages.CREATE_CHANNEL,
                    action: () => (0, a.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("581354").then(n.bind(n, "581354"));
                        return n => (0, s.jsx)(t, {
                            ...n,
                            channelType: u.ChannelTypes.GUILD_TEXT,
                            guildId: e.id
                        })
                    })
                }, "create-channel"), (0, s.jsx)(a.MenuItem, {
                    id: "create-category",
                    label: o.default.Messages.CREATE_CATEGORY,
                    action: () => (0, a.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("581354").then(n.bind(n, "581354"));
                        return n => (0, s.jsx)(t, {
                            ...n,
                            channelType: u.ChannelTypes.GUILD_CATEGORY,
                            guildId: e.id
                        })
                    })
                }, "create-category")] : null
            }
        },
        555914: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var s = n("37983");
            n("884691");
            var i = n("446674"),
                a = n("77078"),
                l = n("952451"),
                u = n("542827"),
                d = n("782340");

            function o(e, t) {
                let n = e.id,
                    o = (0, i.useStateFromStores)([l.default], () => l.default.getGuildHasUnreadIgnoreMuted(n), [n]);
                return (0, s.jsx)(a.MenuItem, {
                    id: "mark-guild-read",
                    label: d.default.Messages.MARK_AS_READ,
                    icon: void 0,
                    action: () => (0, u.default)([n], t.section),
                    disabled: !o
                })
            }
        },
        513472: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var s = n("37983");
            n("884691");
            var i = n("866227"),
                a = n.n(i),
                l = n("446674"),
                u = n("77078"),
                d = n("519705"),
                o = n("531674"),
                r = n("319165"),
                c = n("282109"),
                S = n("782340");

            function f(e, t) {
                let n = null == e ? void 0 : e.id,
                    {
                        muted: i,
                        muteConfig: f
                    } = (0, l.useStateFromStoresObject)([c.default], () => ({
                        muted: null != n ? c.default.isMuted(n) : void 0,
                        muteConfig: null != n ? c.default.getMuteConfig(n) : void 0
                    }), [n]),
                    g = (0, r.useMutedUntilText)(f);
                return null == n ? null : i ? (0, s.jsx)(u.MenuItem, {
                    id: "unmute-guild",
                    label: S.default.Messages.UNMUTE_SERVER,
                    subtext: g,
                    action: () => d.default.updateGuildNotificationSettings(n, {
                        muted: !1
                    })
                }) : (0, s.jsx)(u.MenuItem, {
                    id: "mute-guild",
                    label: S.default.Messages.MUTE_SERVER,
                    action: () => d.default.updateGuildNotificationSettings(n, {
                        muted: !0
                    }),
                    children: (0, o.getMuteTimes)().map(e => {
                        let {
                            value: i,
                            label: l
                        } = e;
                        return (0, s.jsx)(u.MenuItem, {
                            id: "".concat(i),
                            label: l,
                            action: () => (function(e) {
                                if (null == n) return;
                                let s = e > 0 ? a().add(e, "second").toISOString() : null;
                                d.default.updateGuildNotificationSettings(n, {
                                    muted: !0,
                                    mute_config: {
                                        selected_time_window: e,
                                        end_time: s
                                    }
                                }, t)
                            })(i)
                        }, i)
                    })
                })
            }
        },
        527660: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            });
            var s = n("37983");
            n("884691");
            var i = n("446674"),
                a = n("77078"),
                l = n("519705"),
                u = n("503950"),
                d = n("282109"),
                o = n("49111"),
                r = n("782340");

            function c() {
                return [{
                    setting: o.UserNotificationSettings.ALL_MESSAGES,
                    label: r.default.Messages.FORM_LABEL_ALL_MESSAGES
                }, {
                    setting: o.UserNotificationSettings.ONLY_MENTIONS,
                    label: r.default.Messages.FORM_LABEL_ONLY_MENTIONS.format()
                }, {
                    setting: o.UserNotificationSettings.NO_MESSAGES,
                    label: r.default.Messages.FORM_LABEL_NOTHING
                }]
            }

            function S(e) {
                var t, S;
                let f = function(e) {
                        let {
                            suppressEveryone: t,
                            suppressRoles: n,
                            mobilePush: S,
                            messageNotifications: f,
                            notifyHighlights: g
                        } = (0, i.useStateFromStoresObject)([d.default], () => ({
                            suppressEveryone: d.default.isSuppressEveryoneEnabled(e.id),
                            suppressRoles: d.default.isSuppressRolesEnabled(e.id),
                            mobilePush: d.default.isMobilePushEnabled(e.id),
                            messageNotifications: d.default.getMessageNotifications(e.id),
                            notifyHighlights: d.default.getNotifyHighlights(e.id)
                        }), [e.id]), E = g === o.HighlightSettings.DISABLED, M = (0, u.default)(e.id);

                        function _(t) {
                            l.default.updateGuildNotificationSettings(e.id, t)
                        }
                        return (0, s.jsxs)(s.Fragment, {
                            children: [(0, s.jsx)(a.MenuGroup, {
                                children: c().map(e => {
                                    let {
                                        setting: t,
                                        label: n
                                    } = e;
                                    return (0, s.jsx)(a.MenuRadioItem, {
                                        group: "guild-notifications",
                                        id: "".concat(t),
                                        label: n,
                                        action: () => _({
                                            message_notifications: t
                                        }),
                                        checked: t === f
                                    }, t)
                                })
                            }), (0, s.jsxs)(a.MenuGroup, {
                                children: [(0, s.jsx)(a.MenuCheckboxItem, {
                                    id: "suppress-everyone",
                                    label: r.default.Messages.FORM_LABEL_SUPPRESS_EVERYONE.format(),
                                    action: () => _({
                                        suppress_everyone: !t
                                    }),
                                    checked: t
                                }), (0, s.jsx)(a.MenuCheckboxItem, {
                                    id: "suppress-roles",
                                    label: r.default.Messages.FORM_LABEL_SUPPRESS_ROLES,
                                    action: () => _({
                                        suppress_roles: !n
                                    }),
                                    checked: n
                                }), (0, s.jsx)(a.MenuCheckboxItem, {
                                    id: "suppress-highlights",
                                    label: r.default.Messages.FORM_LABEL_SUPPRESS_HIGHLIGHTS,
                                    action: () => {
                                        _({
                                            notify_highlights: E ? o.HighlightSettings.ENABLED : o.HighlightSettings.DISABLED
                                        })
                                    },
                                    checked: E
                                }), M]
                            }), (0, s.jsx)(a.MenuGroup, {
                                children: (0, s.jsx)(a.MenuCheckboxItem, {
                                    id: "mobile-push",
                                    label: r.default.Messages.FORM_LABEL_MOBILE_PUSH_NOTIFICATIONS,
                                    action: () => _({
                                        mobile_push: !S
                                    }),
                                    checked: S
                                })
                            })]
                        })
                    }(e),
                    g = (0, i.useStateFromStores)([d.default], () => d.default.getMessageNotifications(e.id), [e.id]),
                    E = null === (S = c()) || void 0 === S ? void 0 : null === (t = S.find(e => {
                        let {
                            setting: t
                        } = e;
                        return t === g
                    })) || void 0 === t ? void 0 : t.label;
                return null != f ? (0, s.jsx)(a.MenuItem, {
                    id: "guild-notifications",
                    label: r.default.Messages.NOTIFICATION_SETTINGS,
                    subtext: E,
                    action: () => (0, a.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("747593").then(n.bind(n, "747593"));
                        return n => (0, s.jsx)(t, {
                            ...n,
                            guildId: e.id
                        })
                    }),
                    children: f
                }) : null
            }
        },
        823772: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return M
                }
            }), n("222007");
            var s = n("37983"),
                i = n("884691"),
                a = n("446674"),
                l = n("77078"),
                u = n("519705"),
                d = n("277796"),
                o = n("546770"),
                r = n("507313"),
                c = n("282109"),
                S = n("49111"),
                f = n("133335"),
                g = n("397336"),
                E = n("782340");

            function M(e) {
                return (0, s.jsxs)(l.MenuItem, {
                    id: "notification",
                    label: E.default.Messages.NOTIFICATIONS,
                    action: () => {
                        (0, l.openModalLazy)(async () => {
                            let {
                                default: t
                            } = await n.el("747593").then(n.bind(n, "747593"));
                            return n => (0, s.jsx)(t, {
                                ...n,
                                guildId: e
                            })
                        })
                    },
                    children: [function(e) {
                        let [t, n] = i.useState(!1), [M, _] = i.useState(!1), N = (0, a.useStateFromStores)([c.default], () => c.default.getGuildUnreadSetting(e)), h = (0, a.useStateFromStores)([c.default], () => c.default.getMessageNotifications(e)), I = M ? r.Presets.CUSTOM : (0, r.presetFromSettings)(N, h), T = t => {
                            _(!1), u.default.updateGuildNotificationSettings(e, {
                                message_notifications: t
                            })
                        }, A = t => {
                            _(!1);
                            let n = c.default.getGuildFlags(e);
                            u.default.updateGuildNotificationSettings(e, {
                                flags: (0, d.withGuildUnreadFlags)(n, t === f.UnreadSetting.ALL_MESSAGES ? g.GuildNotificationSettingsFlags.UNREADS_ALL_MESSAGES : g.GuildNotificationSettingsFlags.UNREADS_ONLY_MENTIONS)
                            })
                        };
                        return (0, s.jsxs)(s.Fragment, {
                            children: [(0, s.jsxs)(l.MenuGroup, {
                                children: [(0, s.jsx)(l.MenuRadioItem, {
                                    id: "everything",
                                    group: "notification-preset",
                                    checked: I === r.Presets.ALL_MESSAGES,
                                    label: E.default.Messages.NOTIFICATION_PRESET_1,
                                    action: () => ((0, o.updateGuildPreset)(e, r.Presets.ALL_MESSAGES), _(!1))
                                }), (0, s.jsx)(l.MenuRadioItem, {
                                    id: "essentials",
                                    group: "notification-preset",
                                    checked: I === r.Presets.MENTIONS,
                                    label: E.default.Messages.NOTIFICATION_PRESET_2,
                                    action: () => ((0, o.updateGuildPreset)(e, r.Presets.MENTIONS), _(!1))
                                }), (0, s.jsx)(l.MenuRadioItem, {
                                    id: "nothing",
                                    group: "notification-preset",
                                    checked: I === r.Presets.NOTHING,
                                    label: E.default.Messages.NOTIFICATION_PRESET_3,
                                    action: () => ((0, o.updateGuildPreset)(e, r.Presets.NOTHING), _(!1))
                                }), (0, s.jsx)(l.MenuRadioItem, {
                                    id: "custom",
                                    group: "notification-preset",
                                    checked: I === r.Presets.CUSTOM,
                                    action: () => (n(!0), _(!0)),
                                    label: E.default.Messages.NOTIFICATION_PRESET_CUSTOM
                                })]
                            }), (I === r.Presets.CUSTOM || t) && (0, s.jsxs)(l.MenuGroup, {
                                children: [(0, s.jsxs)(l.MenuItem, {
                                    id: "unread_setting",
                                    label: "Unread Badges",
                                    children: [(0, s.jsx)(l.MenuRadioItem, {
                                        id: "unread_setting_all_messages",
                                        group: "unread_setting",
                                        checked: N === f.UnreadSetting.ALL_MESSAGES,
                                        label: E.default.Messages.NOTIFICATION_SETTINGS_PRESETS_ALL_MESSAGES,
                                        action: () => A(f.UnreadSetting.ALL_MESSAGES)
                                    }), (0, s.jsx)(l.MenuRadioItem, {
                                        id: "unread_setting_mention_only",
                                        group: "unread_setting",
                                        checked: N === f.UnreadSetting.ONLY_MENTIONS,
                                        label: E.default.Messages.NOTIFICATION_SETTINGS_PRESETS_MENTION_ONLY,
                                        action: () => A(f.UnreadSetting.ONLY_MENTIONS)
                                    })]
                                }, "unread_setting"), (0, s.jsxs)(l.MenuItem, {
                                    id: "push_settings",
                                    label: E.default.Messages.NOTIFICATIONS,
                                    children: [(0, s.jsx)(l.MenuRadioItem, {
                                        group: "notification-preset",
                                        id: "push_settings_everything",
                                        label: E.default.Messages.NOTIFICATION_SETTINGS_PRESETS_ALL_MESSAGES,
                                        checked: h === S.UserNotificationSettings.ALL_MESSAGES,
                                        action: () => T(S.UserNotificationSettings.ALL_MESSAGES)
                                    }), (0, s.jsx)(l.MenuRadioItem, {
                                        group: "notification-preset",
                                        id: "push_settings_everything_mention",
                                        checked: h === S.UserNotificationSettings.ONLY_MENTIONS,
                                        label: E.default.Messages.NOTIFICATION_SETTINGS_PRESETS_MENTION_ONLY,
                                        action: () => T(S.UserNotificationSettings.ONLY_MENTIONS)
                                    }), (0, s.jsx)(l.MenuRadioItem, {
                                        group: "notification-preset",
                                        id: "push_settings_everything_nothing",
                                        label: E.default.Messages.NOTIFICATION_SETTINGS_PRESETS_NONE,
                                        checked: h === S.UserNotificationSettings.NO_MESSAGES,
                                        action: () => T(S.UserNotificationSettings.NO_MESSAGES)
                                    })]
                                }, "push_settings")]
                            })]
                        })
                    }(e), function(e) {
                        let t = (0, a.useStateFromStoresObject)([c.default], () => ({
                                highligths: c.default.getNotifyHighlights(e),
                                mobilePush: c.default.isMobilePushEnabled(e),
                                suppressRoles: c.default.isSuppressRolesEnabled(e),
                                suppressEveryone: c.default.isSuppressEveryoneEnabled(e),
                                muteScheduledEvents: c.default.isMuteScheduledEventsEnabled(e)
                            })),
                            n = u.default.updateGuildNotificationSettings;
                        return (0, s.jsxs)(s.Fragment, {
                            children: [(0, s.jsxs)(l.MenuGroup, {
                                children: [(0, s.jsx)(l.MenuCheckboxItem, {
                                    id: "mention",
                                    checked: t.suppressEveryone,
                                    label: E.default.Messages.FORM_LABEL_SUPPRESS_EVERYONE.format(),
                                    action: () => n(e, {
                                        suppress_everyone: !t.suppressEveryone
                                    })
                                }), (0, s.jsx)(l.MenuCheckboxItem, {
                                    id: "roles",
                                    checked: t.suppressRoles,
                                    label: E.default.Messages.FORM_LABEL_SUPPRESS_ROLES,
                                    action: () => n(e, {
                                        suppress_roles: !t.suppressRoles
                                    })
                                }), (0, s.jsx)(l.MenuCheckboxItem, {
                                    id: "hightlight",
                                    label: E.default.Messages.FORM_LABEL_SUPPRESS_HIGHLIGHTS,
                                    checked: t.highligths === S.HighlightSettings.ENABLED,
                                    action: () => n(e, {
                                        notify_highlights: t.highligths === S.HighlightSettings.ENABLED ? S.HighlightSettings.DISABLED : S.HighlightSettings.ENABLED
                                    })
                                })]
                            }), (0, s.jsxs)(l.MenuGroup, {
                                children: [(0, s.jsx)(l.MenuCheckboxItem, {
                                    id: "event",
                                    checked: t.muteScheduledEvents,
                                    label: E.default.Messages.FORM_LABEL_MUTE_SCHEDULED_EVENTS,
                                    action: () => n(e, {
                                        mute_scheduled_events: !t.muteScheduledEvents
                                    })
                                }), (0, s.jsx)(l.MenuCheckboxItem, {
                                    id: "mobile_push",
                                    checked: t.mobilePush,
                                    label: E.default.Messages.FORM_LABEL_MOBILE_PUSH_NOTIFICATIONS,
                                    action: () => n(e, {
                                        mobile_push: !t.mobilePush
                                    })
                                })]
                            })]
                        })
                    }(e)]
                })
            }
        },
        177508: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            });
            var s = n("37983");
            n("884691");
            var i = n("446674"),
                a = n("77078"),
                l = n("412707"),
                u = n("646186"),
                d = n("592407"),
                o = n("148475"),
                r = n("725621"),
                c = n("923959"),
                S = n("49111"),
                f = n("782340");

            function g(e) {
                function t(t) {
                    d.default.open(e.id, t)
                }
                let n = (0, i.useStateFromStoresArray)([c.default], () => c.default.getChannels(e.id).SELECTABLE, [e]),
                    g = (0, o.default)(e);
                return __OVERLAY__ || !g ? null : (0, s.jsx)(a.MenuItem, {
                    id: "guild-settings",
                    label: f.default.Messages.SERVER_SETTINGS,
                    action: () => t(),
                    children: (0, r.getGuildSettingsSections)(e, n).map(n => {
                        let {
                            section: i,
                            label: d
                        } = n;
                        if (null == d) return null;
                        switch (i) {
                            case S.GuildSettingsSections.DELETE:
                                return null;
                            case S.GuildSettingsSections.COMMUNITY:
                                return (0, s.jsx)(a.MenuItem, {
                                    id: i,
                                    action: () => t(i),
                                    label: f.default.Messages.GUILD_SETTINGS_COMMUNITY
                                }, i);
                            case S.GuildSettingsSections.APP_DIRECTORY:
                                return (0, s.jsx)(a.MenuItem, {
                                    id: i,
                                    action: () => {
                                        (0, u.goToAppDirectory)({
                                            guildId: e.id,
                                            entrypoint: {
                                                name: l.ApplicationDirectoryEntrypointNames.GUILD_CONTEXT_MENU
                                            }
                                        })
                                    },
                                    label: d
                                }, i);
                            default:
                                return (0, s.jsx)(a.MenuItem, {
                                    id: i,
                                    action: () => t(i),
                                    label: d
                                }, i)
                        }
                    })
                })
            }
        },
        263673: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var s = n("37983");
            n("884691");
            var i = n("446674"),
                a = n("77078"),
                l = n("126501"),
                u = n("282109"),
                d = n("782340");

            function o(e) {
                let t = (0, i.useStateFromStores)([u.default], () => u.default.isGuildCollapsed(e), [e]);
                return (0, s.jsx)(a.MenuCheckboxItem, {
                    id: "hide-muted-channels",
                    label: d.default.Messages.HIDE_MUTED_CHANNELS,
                    action: () => l.default.toggleCollapseGuild(e),
                    checked: t
                })
            }
        },
        334683: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            }), n("222007");
            var s = n("884691"),
                i = n("446674"),
                a = n("817963"),
                l = n("923959"),
                u = n("305961"),
                d = n("957255"),
                o = n("49111"),
                r = (e, t) => {
                    let n = (0, i.useStateFromStores)([u.default], () => u.default.getGuild(e), [e]),
                        {
                            canCreateGuildEvent: r
                        } = (0, a.useManageResourcePermissions)(n),
                        c = (0, i.useStateFromStores)([l.default], () => l.default.getChannels(e)[l.GUILD_VOCAL_CHANNELS_KEY], [e]),
                        S = s.useMemo(() => null != t ? c.filter(e => {
                            let {
                                channel: n
                            } = e;
                            return n.type === t
                        }) : c, [c, t]),
                        f = (0, i.useStateFromStores)([d.default], () => {
                            if (d.default.can(o.Permissions.ADMINISTRATOR, n) || r) return !0;
                            for (let {
                                    channel: e
                                }
                                of S) {
                                let {
                                    canCreateGuildEvent: t
                                } = (0, a.getManageResourcePermissions)(e);
                                if (t) return !0
                            }
                            return !1
                        }, [S, n, r]);
                    return f
                }
        },
        558286: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useGuildEventModalStore: function() {
                    return i
                }
            });
            var s = n("308503");
            let i = (0, s.default)(e => ({
                canCloseModal: !0,
                onUpdateCanCloseModal(t) {
                    e({
                        canCloseModal: t
                    })
                }
            }))
        },
        503950: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var s = n("37983");
            n("884691");
            var i = n("446674"),
                a = n("77078"),
                l = n("519705"),
                u = n("282109"),
                d = n("782340");

            function o(e) {
                let t = (0, i.useStateFromStores)([u.default], () => u.default.isMuteScheduledEventsEnabled(e), [e]);
                return (0, s.jsx)(a.MenuCheckboxItem, {
                    id: "mute-events",
                    label: d.default.Messages.FORM_LABEL_MUTE_SCHEDULED_EVENTS,
                    action: () => {
                        var n;
                        return n = {
                            mute_scheduled_events: !t
                        }, void l.default.updateGuildNotificationSettings(e, n)
                    },
                    checked: t
                })
            }
        },
        842672: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var s = n("77078"),
                i = n("244201"),
                a = n("558286"),
                l = n("49111");
            let u = "guild-event-modal";
            var d = () => {
                let e = (0, i.useAppContext)(),
                    t = e === l.AppContext.POPOUT ? s.POPOUT_MODAL_CONTEXT : s.DEFAULT_MODAL_CONTEXT;
                return {
                    modalKey: u,
                    contextKey: t,
                    onCloseRequest: () => {
                        a.useGuildEventModalStore.getState().canCloseModal && (0, s.closeModal)(u, t)
                    }
                }
            }
        },
        148475: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var s = n("446674"),
                i = n("957255"),
                a = n("49111");

            function l(e) {
                let {
                    canManageGuild: t,
                    canManageRoles: n,
                    canBanMembers: l,
                    canManageNicknames: u,
                    canCreateEmojisAndStickers: d,
                    canManageEmojisAndStickers: o,
                    canManageWebhooks: r,
                    canViewAuditLog: c
                } = (0, s.useStateFromStoresObject)([i.default], () => ({
                    canManageGuild: i.default.can(a.Permissions.MANAGE_GUILD, e),
                    canManageRoles: i.default.can(a.Permissions.MANAGE_ROLES, e),
                    canBanMembers: i.default.can(a.Permissions.BAN_MEMBERS, e),
                    canManageNicknames: i.default.can(a.Permissions.MANAGE_NICKNAMES, e),
                    canCreateEmojisAndStickers: i.default.can(a.Permissions.CREATE_GUILD_EXPRESSIONS, e),
                    canManageEmojisAndStickers: i.default.can(a.Permissions.MANAGE_GUILD_EXPRESSIONS, e),
                    canManageWebhooks: i.default.can(a.Permissions.MANAGE_WEBHOOKS, e),
                    canViewAuditLog: i.default.can(a.Permissions.VIEW_AUDIT_LOG, e)
                }), [e]);
                return t || n || l || u || d || o || r || c
            }
        },
        242757: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                canViewInviteModal: function() {
                    return i
                }
            });
            var s = n("49111");

            function i(e, t, n, i) {
                let a = null != n ? n : t,
                    l = null != a && e.can(s.Permissions.CREATE_INSTANT_INVITE, a);
                return l || null != t && null != t.vanityURLCode || (null == i ? void 0 : i.invite_code) != null
            }
        },
        47495: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getMuteTimeOptions: function() {
                    return S
                },
                filterOverrides: function() {
                    return g
                },
                useShouldUseNewNotificationSystem: function() {
                    return E
                }
            }), n("702976");
            var s = n("446674"),
                i = n("668597"),
                a = n("282109"),
                l = n("568734"),
                u = n("640497"),
                d = n("49111"),
                o = n("468200"),
                r = n("397336"),
                c = n("782340");

            function S() {
                return [{
                    label: c.default.Messages.MUTE_DURATION_15_MINUTES,
                    value: o.MuteUntilSeconds.MINUTES_15
                }, {
                    label: c.default.Messages.MUTE_DURATION_1_HOUR,
                    value: o.MuteUntilSeconds.HOURS_1
                }, {
                    label: c.default.Messages.MUTE_DURATION_3_HOURS,
                    value: o.MuteUntilSeconds.HOURS_3
                }, {
                    label: c.default.Messages.MUTE_DURATION_8_HOURS,
                    value: o.MuteUntilSeconds.HOURS_8
                }, {
                    label: c.default.Messages.MUTE_DURATION_24_HOURS,
                    value: o.MuteUntilSeconds.HOURS_24
                }, {
                    label: c.default.Messages.MUTE_DURATION_ALWAYS,
                    value: o.MuteUntilSeconds.ALWAYS
                }]
            }
            let f = {
                ignoreMute: !1,
                ignoreUnreadSetting: !0,
                ignoreNotificationSetting: !1
            };

            function g(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : f;
                return Object.keys(e).filter(n => {
                    var s, a;
                    let u = e[n].message_notifications !== d.UserNotificationSettings.NULL,
                        o = l.hasFlag(null !== (s = e[n].flags) && void 0 !== s ? s : 0, r.ChannelNotificationSettingsFlags.UNREADS_ALL_MESSAGES) || l.hasFlag(null !== (a = e[n].flags) && void 0 !== a ? a : 0, r.ChannelNotificationSettingsFlags.UNREADS_ONLY_MENTIONS);
                    return !t.ignoreUnreadSetting && o || !t.ignoreNotificationSetting && u || !t.ignoreMute && (0, i.computeIsMuted)(e[n])
                })
            }

            function E(e) {
                let t = (0, s.useStateFromStores)([a.default], () => a.default.useNewNotifications);
                return u.default.useExperiment({
                    location: e
                }, {
                    autoTrackExposure: !1
                }).enabled && t
            }
        },
        277796: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                withGuildUnreadFlags: function() {
                    return a
                },
                resetChannelUnreadFlags: function() {
                    return l
                },
                withChannelUnreadFlags: function() {
                    return u
                }
            });
            var s = n("568734"),
                i = n("397336");

            function a(e, t) {
                var n;
                return s.addFlag((n = e, s.removeFlags(n, i.GuildNotificationSettingsFlags.UNREADS_ALL_MESSAGES, i.GuildNotificationSettingsFlags.UNREADS_ONLY_MENTIONS)), t)
            }
            let l = e => s.removeFlags(e, i.ChannelNotificationSettingsFlags.UNREADS_ALL_MESSAGES, i.ChannelNotificationSettingsFlags.UNREADS_ONLY_MENTIONS);

            function u(e, t) {
                return s.addFlag(l(e), t)
            }
        },
        546770: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                updateGuildPreset: function() {
                    return o
                }
            }), n("65597");
            var s = n("519705"),
                i = n("282109"),
                a = n("277796"),
                l = n("507313"),
                u = n("49111"),
                d = n("397336");

            function o(e, t) {
                let n = i.default.getGuildFlags(e);
                t === l.Presets.ALL_MESSAGES ? s.default.updateGuildNotificationSettings(e, {
                    message_notifications: u.UserNotificationSettings.ALL_MESSAGES,
                    flags: (0, a.withGuildUnreadFlags)(n, d.GuildNotificationSettingsFlags.UNREADS_ALL_MESSAGES)
                }) : t === l.Presets.MENTIONS ? s.default.updateGuildNotificationSettings(e, {
                    message_notifications: u.UserNotificationSettings.ONLY_MENTIONS,
                    flags: (0, a.withGuildUnreadFlags)(n, d.GuildNotificationSettingsFlags.UNREADS_ONLY_MENTIONS)
                }) : t === l.Presets.NOTHING && s.default.updateGuildNotificationSettings(e, {
                    message_notifications: u.UserNotificationSettings.NO_MESSAGES,
                    flags: (0, a.withGuildUnreadFlags)(n, d.GuildNotificationSettingsFlags.UNREADS_ONLY_MENTIONS)
                })
            }
        },
        507313: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                Presets: function() {
                    return s
                },
                presetFromSettings: function() {
                    return o
                },
                presetName: function() {
                    return r
                }
            }), n("794252");
            var s, i, a = n("506838"),
                l = n("49111"),
                u = n("133335"),
                d = n("782340");

            function o(e, t) {
                return (0, a.match)([t, e]).with([l.UserNotificationSettings.ALL_MESSAGES, u.UnreadSetting.ALL_MESSAGES], () => "all_messages").with([l.UserNotificationSettings.ONLY_MENTIONS, u.UnreadSetting.UNSET], () => "mentions").with([l.UserNotificationSettings.ONLY_MENTIONS, u.UnreadSetting.ONLY_MENTIONS], () => "mentions").with([l.UserNotificationSettings.NO_MESSAGES, u.UnreadSetting.UNSET], () => "nothing").with([l.UserNotificationSettings.NO_MESSAGES, u.UnreadSetting.ONLY_MENTIONS], () => "nothing").otherwise(() => "custom")
            }

            function r(e) {
                return (0, a.match)(e).with("all_messages", () => d.default.Messages.NOTIFICATION_PRESET_1).with("mentions", () => d.default.Messages.NOTIFICATION_PRESET_2).with("nothing", () => d.default.Messages.NOTIFICATION_PRESET_3).with("custom", () => d.default.Messages.NOTIFICATION_PRESET_CUSTOM).exhaustive()
            }(i = s || (s = {})).ALL_MESSAGES = "all_messages", i.MENTIONS = "mentions", i.NOTHING = "nothing", i.CUSTOM = "custom"
        },
        76539: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var s = n("37983");
            n("884691");
            var i = n("469563"),
                a = n("715072"),
                l = n("75196"),
                u = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: a,
                        ...u
                    } = e;
                    return 16 === t || 16 === n ? (0, s.jsxs)("svg", {
                        ...(0, l.default)(u),
                        width: t,
                        height: n,
                        viewBox: "0 0 16 16",
                        children: [(0, s.jsx)("path", {
                            className: a,
                            fill: i,
                            d: "M14 2H16V3H14V5H13V3H11V2H13V0H14V2Z"
                        }), (0, s.jsx)("path", {
                            className: a,
                            fill: i,
                            d: "M6.5 8.00667C7.88 8.00667 9 6.88667 9 5.50667C9 4.12667 7.88 3.00667 6.5 3.00667C5.12 3.00667 4 4.12667 4 5.50667C4 6.88667 5.12 8.00667 6.5 8.00667Z"
                        }), (0, s.jsx)("path", {
                            className: a,
                            fill: i,
                            d: "M6.5 8.34C3.26 8.34 1 9.98666 1 12.34V13.0067H12V12.34C12 9.98 9.74 8.34 6.5 8.34Z"
                        })]
                    }) : (0, s.jsx)("svg", {
                        ...(0, l.default)(u),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, s.jsx)("path", {
                            className: a,
                            fill: i,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M21 3H24V5H21V8H19V5H16V3H19V0H21V3ZM10 12C12.205 12 14 10.205 14 8C14 5.795 12.205 4 10 4C7.795 4 6 5.795 6 8C6 10.205 7.795 12 10 12ZM10 13C5.289 13 2 15.467 2 19V20H18V19C18 15.467 14.711 13 10 13Z"
                        })
                    })
                }, a.UserPlusIcon, void 0, {
                    size: 24
                })
        }
    }
]);