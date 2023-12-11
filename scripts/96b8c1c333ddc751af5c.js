(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["99898"], {
        263436: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                LockUnlockedIcon: function() {
                    return u
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("669491"),
                s = n("75196");
            let u = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: u = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: i = "",
                    ...d
                } = e;
                return (0, a.jsx)("svg", {
                    ...(0, s.default)(d),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, a.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        fillRule: "evenodd",
                        d: "M8.7 2.25A4.98 4.98 0 0 1 17 6v3h1a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-8a3 3 0 0 1 3-3h9V6a3 3 0 0 0-4.98-2.25 1 1 0 0 1-1.33-1.5ZM14 14a2 2 0 0 1-1 1.73V18a1 1 0 1 1-2 0v-2.27A2 2 0 1 1 14 14Z",
                        clipRule: "evenodd",
                        className: i
                    })
                })
            }
        },
        715072: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                UserPlusIcon: function() {
                    return u
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("669491"),
                s = n("75196");
            let u = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: u = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: i = "",
                    ...d
                } = e;
                return (0, a.jsxs)("svg", {
                    ...(0, s.default)(d),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, a.jsx)("path", {
                        d: "M19 14a1 1 0 0 1 1 1v3h3a1 1 0 0 1 0 2h-3v3a1 1 0 0 1-2 0v-3h-3a1 1 0 1 1 0-2h3v-3a1 1 0 0 1 1-1Z",
                        fill: "string" == typeof u ? u : u.css,
                        className: i
                    }), (0, a.jsx)("path", {
                        d: "M16.83 12.93c.26-.27.26-.75-.08-.92A9.5 9.5 0 0 0 12.47 11h-.94A9.53 9.53 0 0 0 2 20.53c0 .81.66 1.47 1.47 1.47h.22c.24 0 .44-.17.5-.4.29-1.12.84-2.17 1.32-2.91.14-.21.43-.1.4.15l-.26 2.61c-.02.3.2.55.5.55h7.64c.12 0 .17-.31.06-.36C12.82 21.14 12 20.22 12 19a3 3 0 0 1 3-3h.5a.5.5 0 0 0 .5-.5V15c0-.8.31-1.53.83-2.07ZM12 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z",
                        fill: "string" == typeof u ? u : u.css,
                        className: i
                    })]
                })
            }
        },
        531674: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getMuteTimes: function() {
                    return _
                },
                default: function() {
                    return N
                }
            }), n("222007");
            var a = n("37983");
            n("884691");
            var l = n("866227"),
                s = n.n(l),
                u = n("446674"),
                i = n("77078"),
                d = n("820542"),
                r = n("519705"),
                o = n("319165"),
                c = n("282109"),
                f = n("679653"),
                M = n("49111"),
                S = n("468200"),
                E = n("782340");
            let _ = () => [{
                    value: S.MuteUntilSeconds.MINUTES_15,
                    label: E.default.Messages.MUTE_DURATION_15_MINUTES
                }, {
                    value: S.MuteUntilSeconds.HOURS_1,
                    label: E.default.Messages.MUTE_DURATION_1_HOUR
                }, {
                    value: S.MuteUntilSeconds.HOURS_3,
                    label: E.default.Messages.MUTE_DURATION_3_HOURS
                }, {
                    value: S.MuteUntilSeconds.HOURS_8,
                    label: E.default.Messages.MUTE_DURATION_8_HOURS
                }, {
                    value: S.MuteUntilSeconds.HOURS_24,
                    label: E.default.Messages.MUTE_DURATION_24_HOURS
                }, {
                    value: S.MuteUntilSeconds.ALWAYS,
                    label: E.default.Messages.MUTE_DURATION_ALWAYS
                }],
                g = e => {
                    let t = e > 0 ? s().add(e, "second").toISOString() : null;
                    return {
                        muted: !0,
                        mute_config: {
                            selected_time_window: e,
                            end_time: t
                        }
                    }
                };

            function N(e, t) {
                let [n, l] = (0, u.useStateFromStoresArray)([c.default], () => [c.default.isChannelMuted(e.guild_id, e.id), c.default.getChannelMuteConfig(e.guild_id, e.id)]), s = (0, o.useMutedUntilText)(l), S = (0, f.default)(e, !0);

                function N(t) {
                    t && e.type === M.ChannelTypes.GUILD_CATEGORY && (0, d.categoryCollapse)(e.id), r.default.updateChannelOverrideSettings(e.guild_id, e.id, {
                        muted: t
                    })
                }
                let A = E.default.Messages.MUTE_CHANNEL_GENERIC,
                    U = E.default.Messages.UNMUTE_CHANNEL_GENERIC;
                switch (e.type) {
                    case M.ChannelTypes.GUILD_CATEGORY:
                        A = E.default.Messages.MUTE_CATEGORY, U = E.default.Messages.UNMUTE_CATEGORY;
                        break;
                    case M.ChannelTypes.GROUP_DM:
                        A = E.default.Messages.MUTE_CONVERSATION, U = E.default.Messages.UNMUTE_CONVERSATION;
                        break;
                    case M.ChannelTypes.DM:
                        A = E.default.Messages.MUTE_CHANNEL.format({
                            name: S
                        }), U = E.default.Messages.UNMUTE_CHANNEL.format({
                            name: S
                        });
                        break;
                    default:
                        A = E.default.Messages.MUTE_CHANNEL_GENERIC, U = E.default.Messages.UNMUTE_CHANNEL_GENERIC
                }
                return n ? (0, a.jsx)(i.MenuItem, {
                    id: "unmute-channel",
                    label: U,
                    subtext: s,
                    action: () => N(!1)
                }) : (0, a.jsx)(i.MenuItem, {
                    id: "mute-channel",
                    label: A,
                    action: () => N(!0),
                    children: _().map(n => {
                        let {
                            value: l,
                            label: s
                        } = n;
                        return (0, a.jsx)(i.MenuItem, {
                            id: "".concat(l),
                            label: s,
                            action: () => (function(n) {
                                e.type === M.ChannelTypes.GUILD_CATEGORY && (0, d.categoryCollapse)(e.id);
                                let a = g(n);
                                r.default.updateChannelOverrideSettings(e.guild_id, e.id, a, t)
                            })(l)
                        }, l)
                    })
                })
            }
        },
        374705: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return x
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("627445"),
                s = n.n(l),
                u = n("446674"),
                i = n("77078"),
                d = n("272030"),
                r = n("812204"),
                o = n("685665"),
                c = n("861370"),
                f = n("255812"),
                M = n("529932"),
                S = n("724026"),
                E = n("271938"),
                _ = n("923959"),
                g = n("697218"),
                N = n("578411"),
                A = n("230947"),
                U = n("544955"),
                I = n("747867"),
                T = n("555914"),
                h = n("513472"),
                L = n("527660"),
                m = n("177508"),
                O = n("776458"),
                C = n("263673"),
                p = n("58622"),
                R = n("49111"),
                v = n("782340");

            function G(e) {
                let {
                    guild: t,
                    onSelect: l,
                    hideSettings: r
                } = e, o = t.id, G = _.default.getDefaultChannel(o), x = (0, M.useExpressionSourceGuildDataForGuildLeaveModal)(t), b = (0, u.useStateFromStores)([g.default], () => {
                    let e = g.default.getCurrentUser();
                    return s(null != e, "GuildContextMenu: user cannot be undefined"), t.isOwner(e)
                }, [t]), j = (0, p.default)({
                    guild: t,
                    source: R.InstantInviteSources.GUILD_CONTEXT_MENU,
                    channel: G
                }), H = (0, C.default)(o), D = (0, h.default)(t), y = (0, L.default)(t), F = (0, m.default)(t), V = (0, A.default)({
                    guildId: t.id,
                    userId: E.default.getId(),
                    analyticsLocation: {
                        page: R.AnalyticsPages.GUILD_CHANNEL,
                        section: R.AnalyticsSections.CHAT_USERNAME,
                        object: R.AnalyticsObjects.CONTEXT_MENU_ITEM
                    }
                }), P = (0, U.default)(t), w = (0, f.default)(t.id), Y = (0, c.default)({
                    id: t.id,
                    label: v.default.Messages.COPY_ID_GUILD
                }), k = (0, T.default)(t, {
                    section: R.AnalyticsSections.GUILD_LIST
                }), B = (0, S.default)(t.id), Z = (0, I.default)(t), X = (0, O.default)(t), W = t.hasFeature(R.GuildFeatures.HUB);

                function z() {
                    (0, i.openModal)(e => (0, a.jsx)(N.GuildLeaveConfirmModalContents, {
                        ...e,
                        guild: t,
                        discoverableGuildData: x
                    }))
                }
                return W ? (0, a.jsxs)(i.Menu, {
                    navId: "guild-context",
                    onClose: d.closeContextMenu,
                    "aria-label": v.default.Messages.GUILD_ACTIONS_MENU_LABEL,
                    onSelect: l,
                    children: [(0, a.jsxs)(i.MenuGroup, {
                        children: [j, (0, a.jsx)(i.MenuItem, {
                            id: "privacy",
                            label: v.default.Messages.HUB_PRIVACY_SETTINGS,
                            action: () => (0, i.openModalLazy)(async () => {
                                let {
                                    default: e
                                } = await n.el("349406").then(n.bind(n, "349406"));
                                return n => (0, a.jsx)(e, {
                                    ...n,
                                    guild: t
                                })
                            })
                        }), V]
                    }), b ? null : (0, a.jsx)(i.MenuGroup, {
                        children: (0, a.jsx)(i.MenuItem, {
                            id: "leave-guild",
                            label: v.default.Messages.LEAVE_HUB,
                            action: z,
                            color: "danger"
                        })
                    }), (0, a.jsx)(i.MenuGroup, {
                        children: Y
                    })]
                }) : (0, a.jsxs)(i.Menu, {
                    navId: "guild-context",
                    onClose: d.closeContextMenu,
                    "aria-label": v.default.Messages.GUILD_ACTIONS_MENU_LABEL,
                    onSelect: l,
                    children: [(0, a.jsx)(i.MenuGroup, {
                        children: k
                    }), (0, a.jsx)(i.MenuGroup, {
                        children: j
                    }), (0, a.jsxs)(i.MenuGroup, {
                        children: [D, __OVERLAY__ ? null : y, X, H, B]
                    }), (0, a.jsxs)(i.MenuGroup, {
                        children: [r ? null : F, __OVERLAY__ ? null : (0, a.jsx)(i.MenuItem, {
                            id: "privacy",
                            label: v.default.Messages.PRIVACY_SETTINGS,
                            action: () => (0, i.openModalLazy)(async () => {
                                let {
                                    default: e
                                } = await n.el("349406").then(n.bind(n, "349406"));
                                return n => (0, a.jsx)(e, {
                                    ...n,
                                    guild: t
                                })
                            })
                        }), V]
                    }), (0, a.jsxs)(i.MenuGroup, {
                        children: [P, w]
                    }), (0, a.jsxs)(i.MenuGroup, {
                        children: [Z, !b && (0, a.jsx)(i.MenuItem, {
                            id: "leave-guild",
                            label: v.default.Messages.LEAVE_SERVER,
                            action: z,
                            color: "danger"
                        })]
                    }), (0, a.jsx)(i.MenuGroup, {
                        children: Y
                    })]
                })
            }

            function x(e) {
                let {
                    AnalyticsLocationProvider: t
                } = (0, o.default)(r.default.CONTEXT_MENU);
                return (0, a.jsx)(t, {
                    children: (0, a.jsx)(G, {
                        ...e
                    })
                })
            }
        },
        544955: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("446674"),
                s = n("77078"),
                u = n("957255"),
                i = n("49111"),
                d = n("695838"),
                r = n("782340");

            function o(e) {
                let t = (0, l.useStateFromStores)([u.default], () => u.default.can(i.Permissions.MANAGE_CHANNELS, e));
                return __OVERLAY__ ? null : e.id === d.FAVORITES_RAW_GUILD_ID ? (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(s.MenuItem, {
                        id: "create-category",
                        label: r.default.Messages.CREATE_CATEGORY,
                        action: () => (0, s.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await n.el("515680").then(n.bind(n, "515680"));
                            return t => (0, a.jsx)(e, {
                                ...t
                            })
                        })
                    })
                }) : t ? [(0, a.jsx)(s.MenuItem, {
                    id: "create-channel",
                    label: r.default.Messages.CREATE_CHANNEL,
                    action: () => (0, s.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("581354").then(n.bind(n, "581354"));
                        return n => (0, a.jsx)(t, {
                            ...n,
                            channelType: i.ChannelTypes.GUILD_TEXT,
                            guildId: e.id
                        })
                    })
                }, "create-channel"), (0, a.jsx)(s.MenuItem, {
                    id: "create-category",
                    label: r.default.Messages.CREATE_CATEGORY,
                    action: () => (0, s.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("581354").then(n.bind(n, "581354"));
                        return n => (0, a.jsx)(t, {
                            ...n,
                            channelType: i.ChannelTypes.GUILD_CATEGORY,
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
                    return r
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("446674"),
                s = n("77078"),
                u = n("952451"),
                i = n("542827"),
                d = n("782340");

            function r(e, t) {
                let n = e.id,
                    r = (0, l.useStateFromStores)([u.default], () => u.default.getGuildHasUnreadIgnoreMuted(n), [n]);
                return (0, a.jsx)(s.MenuItem, {
                    id: "mark-guild-read",
                    label: d.default.Messages.MARK_AS_READ,
                    icon: void 0,
                    action: () => (0, i.default)([n], t.section),
                    disabled: !r
                })
            }
        },
        513472: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return M
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("866227"),
                s = n.n(l),
                u = n("446674"),
                i = n("77078"),
                d = n("519705"),
                r = n("531674"),
                o = n("319165"),
                c = n("282109"),
                f = n("782340");

            function M(e, t) {
                let n = null == e ? void 0 : e.id,
                    {
                        muted: l,
                        muteConfig: M
                    } = (0, u.useStateFromStoresObject)([c.default], () => ({
                        muted: null != n ? c.default.isMuted(n) : void 0,
                        muteConfig: null != n ? c.default.getMuteConfig(n) : void 0
                    }), [n]),
                    S = (0, o.useMutedUntilText)(M);
                return null == n ? null : l ? (0, a.jsx)(i.MenuItem, {
                    id: "unmute-guild",
                    label: f.default.Messages.UNMUTE_SERVER,
                    subtext: S,
                    action: () => d.default.updateGuildNotificationSettings(n, {
                        muted: !1
                    })
                }) : (0, a.jsx)(i.MenuItem, {
                    id: "mute-guild",
                    label: f.default.Messages.MUTE_SERVER,
                    action: () => d.default.updateGuildNotificationSettings(n, {
                        muted: !0
                    }),
                    children: (0, r.getMuteTimes)().map(e => {
                        let {
                            value: l,
                            label: u
                        } = e;
                        return (0, a.jsx)(i.MenuItem, {
                            id: "".concat(l),
                            label: u,
                            action: () => (function(e) {
                                if (null == n) return;
                                let a = e > 0 ? s().add(e, "second").toISOString() : null;
                                d.default.updateGuildNotificationSettings(n, {
                                    muted: !0,
                                    mute_config: {
                                        selected_time_window: e,
                                        end_time: a
                                    }
                                }, t)
                            })(l)
                        }, l)
                    })
                })
            }
        },
        527660: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("446674"),
                s = n("77078"),
                u = n("519705"),
                i = n("503950"),
                d = n("282109"),
                r = n("49111"),
                o = n("782340");

            function c() {
                return [{
                    setting: r.UserNotificationSettings.ALL_MESSAGES,
                    label: o.default.Messages.FORM_LABEL_ALL_MESSAGES
                }, {
                    setting: r.UserNotificationSettings.ONLY_MENTIONS,
                    label: o.default.Messages.FORM_LABEL_ONLY_MENTIONS.format()
                }, {
                    setting: r.UserNotificationSettings.NO_MESSAGES,
                    label: o.default.Messages.FORM_LABEL_NOTHING
                }]
            }

            function f(e) {
                var t, f;
                let M = function(e) {
                        let {
                            suppressEveryone: t,
                            suppressRoles: n,
                            mobilePush: f,
                            messageNotifications: M,
                            notifyHighlights: S
                        } = (0, l.useStateFromStoresObject)([d.default], () => ({
                            suppressEveryone: d.default.isSuppressEveryoneEnabled(e.id),
                            suppressRoles: d.default.isSuppressRolesEnabled(e.id),
                            mobilePush: d.default.isMobilePushEnabled(e.id),
                            messageNotifications: d.default.getMessageNotifications(e.id),
                            notifyHighlights: d.default.getNotifyHighlights(e.id)
                        }), [e.id]), E = S === r.HighlightSettings.DISABLED, _ = (0, i.default)(e.id);

                        function g(t) {
                            u.default.updateGuildNotificationSettings(e.id, t)
                        }
                        return (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(s.MenuGroup, {
                                children: c().map(e => {
                                    let {
                                        setting: t,
                                        label: n
                                    } = e;
                                    return (0, a.jsx)(s.MenuRadioItem, {
                                        group: "guild-notifications",
                                        id: "".concat(t),
                                        label: n,
                                        action: () => g({
                                            message_notifications: t
                                        }),
                                        checked: t === M
                                    }, t)
                                })
                            }), (0, a.jsxs)(s.MenuGroup, {
                                children: [(0, a.jsx)(s.MenuCheckboxItem, {
                                    id: "suppress-everyone",
                                    label: o.default.Messages.FORM_LABEL_SUPPRESS_EVERYONE.format(),
                                    action: () => g({
                                        suppress_everyone: !t
                                    }),
                                    checked: t
                                }), (0, a.jsx)(s.MenuCheckboxItem, {
                                    id: "suppress-roles",
                                    label: o.default.Messages.FORM_LABEL_SUPPRESS_ROLES,
                                    action: () => g({
                                        suppress_roles: !n
                                    }),
                                    checked: n
                                }), (0, a.jsx)(s.MenuCheckboxItem, {
                                    id: "suppress-highlights",
                                    label: o.default.Messages.FORM_LABEL_SUPPRESS_HIGHLIGHTS,
                                    action: () => {
                                        g({
                                            notify_highlights: E ? r.HighlightSettings.ENABLED : r.HighlightSettings.DISABLED
                                        })
                                    },
                                    checked: E
                                }), _]
                            }), (0, a.jsx)(s.MenuGroup, {
                                children: (0, a.jsx)(s.MenuCheckboxItem, {
                                    id: "mobile-push",
                                    label: o.default.Messages.FORM_LABEL_MOBILE_PUSH_NOTIFICATIONS,
                                    action: () => g({
                                        mobile_push: !f
                                    }),
                                    checked: f
                                })
                            })]
                        })
                    }(e),
                    S = (0, l.useStateFromStores)([d.default], () => d.default.getMessageNotifications(e.id), [e.id]),
                    E = null === (f = c()) || void 0 === f ? void 0 : null === (t = f.find(e => {
                        let {
                            setting: t
                        } = e;
                        return t === S
                    })) || void 0 === t ? void 0 : t.label;
                return null != M ? (0, a.jsx)(s.MenuItem, {
                    id: "guild-notifications",
                    label: o.default.Messages.NOTIFICATION_SETTINGS,
                    subtext: E,
                    action: () => (0, s.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("747593").then(n.bind(n, "747593"));
                        return n => (0, a.jsx)(t, {
                            ...n,
                            guildId: e.id
                        })
                    }),
                    children: M
                }) : null
            }
        },
        177508: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("446674"),
                s = n("77078"),
                u = n("412707"),
                i = n("646186"),
                d = n("592407"),
                r = n("148475"),
                o = n("725621"),
                c = n("923959"),
                f = n("49111"),
                M = n("782340");

            function S(e) {
                function t(t) {
                    d.default.open(e.id, t)
                }
                let n = (0, l.useStateFromStoresArray)([c.default], () => c.default.getChannels(e.id).SELECTABLE, [e]),
                    S = (0, r.default)(e);
                return __OVERLAY__ || !S ? null : (0, a.jsx)(s.MenuItem, {
                    id: "guild-settings",
                    label: M.default.Messages.SERVER_SETTINGS,
                    action: () => t(),
                    children: (0, o.getGuildSettingsSections)(e, n).map(n => {
                        let {
                            section: l,
                            label: d
                        } = n;
                        if (null == d) return null;
                        switch (l) {
                            case f.GuildSettingsSections.DELETE:
                                return null;
                            case f.GuildSettingsSections.COMMUNITY:
                                return (0, a.jsx)(s.MenuItem, {
                                    id: l,
                                    action: () => t(l),
                                    label: M.default.Messages.GUILD_SETTINGS_COMMUNITY
                                }, l);
                            case f.GuildSettingsSections.APP_DIRECTORY:
                                return (0, a.jsx)(s.MenuItem, {
                                    id: l,
                                    action: () => {
                                        (0, i.goToAppDirectory)({
                                            guildId: e.id,
                                            entrypoint: {
                                                name: u.ApplicationDirectoryEntrypointNames.GUILD_CONTEXT_MENU
                                            }
                                        })
                                    },
                                    label: d
                                }, l);
                            default:
                                return (0, a.jsx)(s.MenuItem, {
                                    id: l,
                                    action: () => t(l),
                                    label: d
                                }, l)
                        }
                    })
                })
            }
        },
        776458: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("446674"),
                s = n("77078"),
                u = n("47495"),
                i = n("831394"),
                d = n("282109"),
                r = n("133335"),
                o = n("782340");

            function c(e) {
                let t = (0, l.useStateFromStores)([d.default], () => d.default.getGuildUnreadSetting(e.id)),
                    n = (0, l.useStateFromStores)([d.default], () => d.default.getGuildUnreadMode(e));
                return (0, u.useShouldUseNewNotificationSystem)("useGuildUnreadItems") ? (0, a.jsx)(s.MenuItem, {
                    id: "guild-unreads",
                    label: o.default.Messages.UNREAD_SETTINGS,
                    subtext: n === r.UnreadMode.IMPORTANT ? o.default.Messages.FORM_LABEL_ALL_MESSAGES : o.default.Messages.HIGHLIGHTS_AND_MENTIONS,
                    children: [{
                        setting: null,
                        label: o.default.Messages.FORM_LABEL_DEFAULT
                    }, {
                        setting: r.UnreadSetting.ALL_MESSAGES,
                        label: o.default.Messages.FORM_LABEL_ALL_MESSAGES
                    }, {
                        setting: r.UnreadSetting.ONLY_MENTIONS,
                        label: o.default.Messages.HIGHLIGHTS_AND_MENTIONS
                    }].map(n => {
                        let {
                            setting: l,
                            label: u
                        } = n;
                        return (0, a.jsx)(s.MenuRadioItem, {
                            group: "guild-unreads",
                            id: "".concat(l),
                            label: u,
                            action: () => (0, i.setGuildUnreadSetting)(e.id, l),
                            checked: l === t
                        }, l)
                    })
                }) : null
            }
        },
        263673: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("446674"),
                s = n("77078"),
                u = n("126501"),
                i = n("282109"),
                d = n("782340");

            function r(e) {
                let t = (0, l.useStateFromStores)([i.default], () => i.default.isGuildCollapsed(e), [e]);
                return (0, a.jsx)(s.MenuCheckboxItem, {
                    id: "hide-muted-channels",
                    label: d.default.Messages.HIDE_MUTED_CHANNELS,
                    action: () => u.default.toggleCollapseGuild(e),
                    checked: t
                })
            }
        },
        334683: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            }), n("222007");
            var a = n("884691"),
                l = n("446674"),
                s = n("817963"),
                u = n("923959"),
                i = n("305961"),
                d = n("957255"),
                r = n("49111"),
                o = (e, t) => {
                    let n = (0, l.useStateFromStores)([i.default], () => i.default.getGuild(e), [e]),
                        {
                            canCreateGuildEvent: o
                        } = (0, s.useManageResourcePermissions)(n),
                        c = (0, l.useStateFromStores)([u.default], () => u.default.getChannels(e)[u.GUILD_VOCAL_CHANNELS_KEY], [e]),
                        f = a.useMemo(() => null != t ? c.filter(e => {
                            let {
                                channel: n
                            } = e;
                            return n.type === t
                        }) : c, [c, t]),
                        M = (0, l.useStateFromStores)([d.default], () => {
                            if (d.default.can(r.Permissions.ADMINISTRATOR, n) || o) return !0;
                            for (let {
                                    channel: e
                                }
                                of f) {
                                let {
                                    canCreateGuildEvent: t
                                } = (0, s.getManageResourcePermissions)(e);
                                if (t) return !0
                            }
                            return !1
                        }, [f, n, o]);
                    return M
                }
        },
        558286: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useGuildEventModalStore: function() {
                    return l
                }
            });
            var a = n("308503");
            let l = (0, a.default)(e => ({
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
                    return r
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("446674"),
                s = n("77078"),
                u = n("519705"),
                i = n("282109"),
                d = n("782340");

            function r(e) {
                let t = (0, l.useStateFromStores)([i.default], () => i.default.isMuteScheduledEventsEnabled(e), [e]);
                return (0, a.jsx)(s.MenuCheckboxItem, {
                    id: "mute-events",
                    label: d.default.Messages.FORM_LABEL_MUTE_SCHEDULED_EVENTS,
                    action: () => {
                        var n;
                        return n = {
                            mute_scheduled_events: !t
                        }, void u.default.updateGuildNotificationSettings(e, n)
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
            var a = n("77078"),
                l = n("244201"),
                s = n("558286"),
                u = n("49111");
            let i = "guild-event-modal";
            var d = () => {
                let e = (0, l.useAppContext)(),
                    t = e === u.AppContext.POPOUT ? a.POPOUT_MODAL_CONTEXT : a.DEFAULT_MODAL_CONTEXT;
                return {
                    modalKey: i,
                    contextKey: t,
                    onCloseRequest: () => {
                        s.useGuildEventModalStore.getState().canCloseModal && (0, a.closeModal)(i, t)
                    }
                }
            }
        },
        148475: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var a = n("446674"),
                l = n("957255"),
                s = n("49111");

            function u(e) {
                let {
                    canManageGuild: t,
                    canManageRoles: n,
                    canBanMembers: u,
                    canManageNicknames: i,
                    canCreateEmojisAndStickers: d,
                    canManageEmojisAndStickers: r,
                    canManageWebhooks: o,
                    canViewAuditLog: c
                } = (0, a.useStateFromStoresObject)([l.default], () => ({
                    canManageGuild: l.default.can(s.Permissions.MANAGE_GUILD, e),
                    canManageRoles: l.default.can(s.Permissions.MANAGE_ROLES, e),
                    canBanMembers: l.default.can(s.Permissions.BAN_MEMBERS, e),
                    canManageNicknames: l.default.can(s.Permissions.MANAGE_NICKNAMES, e),
                    canCreateEmojisAndStickers: l.default.can(s.Permissions.CREATE_GUILD_EXPRESSIONS, e),
                    canManageEmojisAndStickers: l.default.can(s.Permissions.MANAGE_GUILD_EXPRESSIONS, e),
                    canManageWebhooks: l.default.can(s.Permissions.MANAGE_WEBHOOKS, e),
                    canViewAuditLog: l.default.can(s.Permissions.VIEW_AUDIT_LOG, e)
                }), [e]);
                return t || n || u || i || d || r || o || c
            }
        },
        242757: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                canViewInviteModal: function() {
                    return l
                }
            });
            var a = n("49111");

            function l(e, t, n, l) {
                let s = null != n ? n : t,
                    u = null != s && e.can(a.Permissions.CREATE_INSTANT_INVITE, s);
                return u || null != t && null != t.vanityURLCode || (null == l ? void 0 : l.invite_code) != null
            }
        },
        47495: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getMuteTimeOptions: function() {
                    return o
                },
                filterOverrides: function() {
                    return c
                },
                useShouldUseNewNotificationSystem: function() {
                    return f
                }
            });
            var a = n("446674"),
                l = n("668597"),
                s = n("282109"),
                u = n("640497"),
                i = n("49111"),
                d = n("468200"),
                r = n("782340");

            function o() {
                return [{
                    label: r.default.Messages.MUTE_DURATION_15_MINUTES,
                    value: d.MuteUntilSeconds.MINUTES_15
                }, {
                    label: r.default.Messages.MUTE_DURATION_1_HOUR,
                    value: d.MuteUntilSeconds.HOURS_1
                }, {
                    label: r.default.Messages.MUTE_DURATION_3_HOURS,
                    value: d.MuteUntilSeconds.HOURS_3
                }, {
                    label: r.default.Messages.MUTE_DURATION_8_HOURS,
                    value: d.MuteUntilSeconds.HOURS_8
                }, {
                    label: r.default.Messages.MUTE_DURATION_24_HOURS,
                    value: d.MuteUntilSeconds.HOURS_24
                }, {
                    label: r.default.Messages.MUTE_DURATION_ALWAYS,
                    value: d.MuteUntilSeconds.ALWAYS
                }]
            }

            function c(e) {
                return Object.keys(e).filter(t => !!(0, l.computeIsMuted)(e[t]) || e[t].message_notifications !== i.UserNotificationSettings.NULL || !1)
            }

            function f(e) {
                let t = (0, a.useStateFromStores)([s.default], () => s.default.useNewNotifications);
                return u.default.useExperiment({
                    location: e
                }, {
                    autoTrackExposure: !1
                }).enabled && t
            }
        },
        831394: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                setChannelUnreadSetting: function() {
                    return d
                },
                setGuildUnreadSetting: function() {
                    return r
                }
            });
            var a = n("519705"),
                l = n("282109"),
                s = n("568734"),
                u = n("133335"),
                i = n("397336");

            function d(e, t, n) {
                let d = l.default.getChannelIdFlags(e, t);
                d = (0, s.setFlag)(d, i.ChannelNotificationSettingsFlags.UNREADS_ALL_MESSAGES, n === u.UnreadSetting.ALL_MESSAGES), d = (0, s.setFlag)(d, i.ChannelNotificationSettingsFlags.UNREADS_ONLY_MENTIONS, n === u.UnreadSetting.ONLY_MENTIONS), a.default.updateChannelOverrideSettings(e, t, {
                    flags: d
                })
            }

            function r(e, t) {
                let n = l.default.getGuildFlags(e);
                n = (0, s.setFlag)(n, i.GuildNotificationSettingsFlags.UNREADS_ALL_MESSAGES, t === u.UnreadSetting.ALL_MESSAGES), n = (0, s.setFlag)(n, i.GuildNotificationSettingsFlags.UNREADS_ONLY_MENTIONS, t === u.UnreadSetting.ONLY_MENTIONS), a.default.updateGuildNotificationSettings(e, {
                    flags: n
                })
            }
        },
        76539: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("469563"),
                s = n("715072"),
                u = n("75196"),
                i = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: l = "currentColor",
                        foreground: s,
                        ...i
                    } = e;
                    return 16 === t || 16 === n ? (0, a.jsxs)("svg", {
                        ...(0, u.default)(i),
                        width: t,
                        height: n,
                        viewBox: "0 0 16 16",
                        children: [(0, a.jsx)("path", {
                            className: s,
                            fill: l,
                            d: "M14 2H16V3H14V5H13V3H11V2H13V0H14V2Z"
                        }), (0, a.jsx)("path", {
                            className: s,
                            fill: l,
                            d: "M6.5 8.00667C7.88 8.00667 9 6.88667 9 5.50667C9 4.12667 7.88 3.00667 6.5 3.00667C5.12 3.00667 4 4.12667 4 5.50667C4 6.88667 5.12 8.00667 6.5 8.00667Z"
                        }), (0, a.jsx)("path", {
                            className: s,
                            fill: l,
                            d: "M6.5 8.34C3.26 8.34 1 9.98666 1 12.34V13.0067H12V12.34C12 9.98 9.74 8.34 6.5 8.34Z"
                        })]
                    }) : (0, a.jsx)("svg", {
                        ...(0, u.default)(i),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, a.jsx)("path", {
                            className: s,
                            fill: l,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M21 3H24V5H21V8H19V5H16V3H19V0H21V3ZM10 12C12.205 12 14 10.205 14 8C14 5.795 12.205 4 10 4C7.795 4 6 5.795 6 8C6 10.205 7.795 12 10 12ZM10 13C5.289 13 2 15.467 2 19V20H18V19C18 15.467 14.711 13 10 13Z"
                        })
                    })
                }, s.UserPlusIcon, void 0, {
                    size: 24
                })
        }
    }
]);