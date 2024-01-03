(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["99898"], {
        263436: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                LockUnlockedIcon: function() {
                    return l
                }
            });
            var i = n("37983");
            n("884691");
            var s = n("669491"),
                a = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = s.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...o
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, a.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
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
            var i = n("37983");
            n("884691");
            var s = n("669491"),
                a = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = s.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...o
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, a.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, i.jsx)("path", {
                        d: "M19 14a1 1 0 0 1 1 1v3h3a1 1 0 0 1 0 2h-3v3a1 1 0 0 1-2 0v-3h-3a1 1 0 1 1 0-2h3v-3a1 1 0 0 1 1-1Z",
                        fill: "string" == typeof l ? l : l.css,
                        className: u
                    }), (0, i.jsx)("path", {
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
                    return _
                },
                default: function() {
                    return h
                }
            }), n("222007");
            var i = n("37983");
            n("884691");
            var s = n("866227"),
                a = n.n(s),
                l = n("446674"),
                u = n("77078"),
                o = n("820542"),
                d = n("519705"),
                r = n("319165"),
                c = n("282109"),
                f = n("34676"),
                S = n("679653"),
                g = n("49111"),
                E = n("468200"),
                M = n("782340");
            let _ = () => [{
                    value: E.MuteUntilSeconds.MINUTES_15,
                    label: M.default.Messages.MUTE_DURATION_15_MINUTES
                }, {
                    value: E.MuteUntilSeconds.HOURS_1,
                    label: M.default.Messages.MUTE_DURATION_1_HOUR
                }, {
                    value: E.MuteUntilSeconds.HOURS_3,
                    label: M.default.Messages.MUTE_DURATION_3_HOURS
                }, {
                    value: E.MuteUntilSeconds.HOURS_8,
                    label: M.default.Messages.MUTE_DURATION_8_HOURS
                }, {
                    value: E.MuteUntilSeconds.HOURS_24,
                    label: M.default.Messages.MUTE_DURATION_24_HOURS
                }, {
                    value: E.MuteUntilSeconds.ALWAYS,
                    label: M.default.Messages.MUTE_DURATION_ALWAYS
                }],
                N = e => {
                    let t = e > 0 ? a().add(e, "second").toISOString() : null;
                    return {
                        muted: !0,
                        mute_config: {
                            selected_time_window: e,
                            end_time: t
                        }
                    }
                };

            function h(e, t) {
                let [n, s] = (0, l.useStateFromStoresArray)([c.default], () => [c.default.isChannelMuted(e.guild_id, e.id), c.default.getChannelMuteConfig(e.guild_id, e.id)]), a = (0, r.useMutedUntilText)(s), E = (0, S.default)(e, !0);

                function h(t) {
                    t && e.type === g.ChannelTypes.GUILD_CATEGORY && (0, o.categoryCollapse)(e.id), d.default.updateChannelOverrideSettings(e.guild_id, e.id, {
                        muted: t
                    }, f.NotificationLabel.muted(t))
                }
                let I = M.default.Messages.MUTE_CHANNEL_GENERIC,
                    T = M.default.Messages.UNMUTE_CHANNEL_GENERIC;
                switch (e.type) {
                    case g.ChannelTypes.GUILD_CATEGORY:
                        I = M.default.Messages.MUTE_CATEGORY, T = M.default.Messages.UNMUTE_CATEGORY;
                        break;
                    case g.ChannelTypes.GROUP_DM:
                        I = M.default.Messages.MUTE_CONVERSATION, T = M.default.Messages.UNMUTE_CONVERSATION;
                        break;
                    case g.ChannelTypes.DM:
                        I = M.default.Messages.MUTE_CHANNEL.format({
                            name: E
                        }), T = M.default.Messages.UNMUTE_CHANNEL.format({
                            name: E
                        });
                        break;
                    default:
                        I = M.default.Messages.MUTE_CHANNEL_GENERIC, T = M.default.Messages.UNMUTE_CHANNEL_GENERIC
                }
                return n ? (0, i.jsx)(u.MenuItem, {
                    id: "unmute-channel",
                    label: T,
                    subtext: a,
                    action: () => h(!1)
                }) : (0, i.jsx)(u.MenuItem, {
                    id: "mute-channel",
                    label: I,
                    action: () => h(!0),
                    children: _().map(n => {
                        let {
                            value: s,
                            label: a
                        } = n;
                        return (0, i.jsx)(u.MenuItem, {
                            id: "".concat(s),
                            label: a,
                            action: () => (function(n) {
                                e.type === g.ChannelTypes.GUILD_CATEGORY && (0, o.categoryCollapse)(e.id);
                                let i = N(n);
                                d.default.updateChannelOverrideSettings(e.guild_id, e.id, i, f.NotificationLabels.Muted, t)
                            })(s)
                        }, s)
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
            var i = n("37983");
            n("884691");
            var s = n("627445"),
                a = n.n(s),
                l = n("446674"),
                u = n("77078"),
                o = n("272030"),
                d = n("812204"),
                r = n("685665"),
                c = n("861370"),
                f = n("255812"),
                S = n("529932"),
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
                L = n("513472"),
                U = n("527660"),
                m = n("823772"),
                p = n("177508"),
                R = n("263673"),
                C = n("58622"),
                G = n("49111"),
                b = n("782340");

            function v(e) {
                let {
                    guild: t,
                    onSelect: s,
                    hideSettings: d
                } = e, r = t.id, v = _.default.getDefaultChannel(r), x = (0, S.useExpressionSourceGuildDataForGuildLeaveModal)(t), j = (0, l.useStateFromStores)([N.default], () => {
                    let e = N.default.getCurrentUser();
                    return a(null != e, "GuildContextMenu: user cannot be undefined"), t.isOwner(e)
                }, [t]), F = (0, C.default)({
                    guild: t,
                    source: G.InstantInviteSources.GUILD_CONTEXT_MENU,
                    channel: v
                }), P = (0, R.default)(r), y = (0, L.default)(t), H = (0, U.default)(t), D = (0, p.default)(t), w = (0, I.default)({
                    guildId: t.id,
                    userId: M.default.getId(),
                    analyticsLocation: {
                        page: G.AnalyticsPages.GUILD_CHANNEL,
                        section: G.AnalyticsSections.CHAT_USERNAME,
                        object: G.AnalyticsObjects.CONTEXT_MENU_ITEM
                    }
                }), k = (0, T.default)(t), V = (0, f.default)(t.id), Y = (0, c.default)({
                    id: t.id,
                    label: b.default.Messages.COPY_ID_GUILD
                }), B = (0, O.default)(t, {
                    section: G.AnalyticsSections.GUILD_LIST
                }), Z = (0, E.default)(t.id), X = (0, m.default)(t.id), z = (0, A.default)(t), W = (0, g.useShouldUseNewNotificationSystem)("GuildContextMenu"), K = t.hasFeature(G.GuildFeatures.HUB);

                function q() {
                    (0, u.openModal)(e => (0, i.jsx)(h.GuildLeaveConfirmModalContents, {
                        ...e,
                        guild: t,
                        discoverableGuildData: x
                    }))
                }
                return K ? (0, i.jsxs)(u.Menu, {
                    navId: "guild-context",
                    onClose: o.closeContextMenu,
                    "aria-label": b.default.Messages.GUILD_ACTIONS_MENU_LABEL,
                    onSelect: s,
                    children: [(0, i.jsxs)(u.MenuGroup, {
                        children: [F, (0, i.jsx)(u.MenuItem, {
                            id: "privacy",
                            label: b.default.Messages.HUB_PRIVACY_SETTINGS,
                            action: () => (0, u.openModalLazy)(async () => {
                                let {
                                    default: e
                                } = await n.el("349406").then(n.bind(n, "349406"));
                                return n => (0, i.jsx)(e, {
                                    ...n,
                                    guild: t
                                })
                            })
                        }), w]
                    }), j ? null : (0, i.jsx)(u.MenuGroup, {
                        children: (0, i.jsx)(u.MenuItem, {
                            id: "leave-guild",
                            label: b.default.Messages.LEAVE_HUB,
                            action: q,
                            color: "danger"
                        })
                    }), (0, i.jsx)(u.MenuGroup, {
                        children: Y
                    })]
                }) : (0, i.jsxs)(u.Menu, {
                    navId: "guild-context",
                    onClose: o.closeContextMenu,
                    "aria-label": b.default.Messages.GUILD_ACTIONS_MENU_LABEL,
                    onSelect: s,
                    children: [(0, i.jsx)(u.MenuGroup, {
                        children: B
                    }), (0, i.jsx)(u.MenuGroup, {
                        children: F
                    }), (0, i.jsxs)(u.MenuGroup, {
                        children: [y, W || __OVERLAY__ ? null : H, W && !__OVERLAY__ ? X : null, P, Z]
                    }), (0, i.jsxs)(u.MenuGroup, {
                        children: [d ? null : D, __OVERLAY__ ? null : (0, i.jsx)(u.MenuItem, {
                            id: "privacy",
                            label: b.default.Messages.PRIVACY_SETTINGS,
                            action: () => (0, u.openModalLazy)(async () => {
                                let {
                                    default: e
                                } = await n.el("349406").then(n.bind(n, "349406"));
                                return n => (0, i.jsx)(e, {
                                    ...n,
                                    guild: t
                                })
                            })
                        }), w]
                    }), (0, i.jsxs)(u.MenuGroup, {
                        children: [k, V]
                    }), (0, i.jsxs)(u.MenuGroup, {
                        children: [z, !j && (0, i.jsx)(u.MenuItem, {
                            id: "leave-guild",
                            label: b.default.Messages.LEAVE_SERVER,
                            action: q,
                            color: "danger"
                        })]
                    }), (0, i.jsx)(u.MenuGroup, {
                        children: Y
                    })]
                })
            }

            function x(e) {
                let {
                    AnalyticsLocationProvider: t
                } = (0, r.default)(d.default.CONTEXT_MENU);
                return (0, i.jsx)(t, {
                    children: (0, i.jsx)(v, {
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
            var i = n("37983");
            n("884691");
            var s = n("446674"),
                a = n("77078"),
                l = n("957255"),
                u = n("49111"),
                o = n("695838"),
                d = n("782340");

            function r(e) {
                let t = (0, s.useStateFromStores)([l.default], () => l.default.can(u.Permissions.MANAGE_CHANNELS, e));
                return __OVERLAY__ ? null : e.id === o.FAVORITES_RAW_GUILD_ID ? (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsx)(a.MenuItem, {
                        id: "create-category",
                        label: d.default.Messages.CREATE_CATEGORY,
                        action: () => (0, a.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await n.el("515680").then(n.bind(n, "515680"));
                            return t => (0, i.jsx)(e, {
                                ...t
                            })
                        })
                    })
                }) : t ? [(0, i.jsx)(a.MenuItem, {
                    id: "create-channel",
                    label: d.default.Messages.CREATE_CHANNEL,
                    action: () => (0, a.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("581354").then(n.bind(n, "581354"));
                        return n => (0, i.jsx)(t, {
                            ...n,
                            channelType: u.ChannelTypes.GUILD_TEXT,
                            guildId: e.id
                        })
                    })
                }, "create-channel"), (0, i.jsx)(a.MenuItem, {
                    id: "create-category",
                    label: d.default.Messages.CREATE_CATEGORY,
                    action: () => (0, a.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("581354").then(n.bind(n, "581354"));
                        return n => (0, i.jsx)(t, {
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
                    return d
                }
            });
            var i = n("37983");
            n("884691");
            var s = n("446674"),
                a = n("77078"),
                l = n("952451"),
                u = n("542827"),
                o = n("782340");

            function d(e, t) {
                let n = e.id,
                    d = (0, s.useStateFromStores)([l.default], () => l.default.getGuildHasUnreadIgnoreMuted(n), [n]);
                return (0, i.jsx)(a.MenuItem, {
                    id: "mark-guild-read",
                    label: o.default.Messages.MARK_AS_READ,
                    icon: void 0,
                    action: () => (0, u.default)([n], t.section),
                    disabled: !d
                })
            }
        },
        513472: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            });
            var i = n("37983");
            n("884691");
            var s = n("866227"),
                a = n.n(s),
                l = n("446674"),
                u = n("77078"),
                o = n("519705"),
                d = n("531674"),
                r = n("319165"),
                c = n("282109"),
                f = n("34676"),
                S = n("782340");

            function g(e, t) {
                let n = null == e ? void 0 : e.id,
                    {
                        muted: s,
                        muteConfig: g
                    } = (0, l.useStateFromStoresObject)([c.default], () => ({
                        muted: null != n ? c.default.isMuted(n) : void 0,
                        muteConfig: null != n ? c.default.getMuteConfig(n) : void 0
                    }), [n]),
                    E = (0, r.useMutedUntilText)(g);
                return null == n ? null : s ? (0, i.jsx)(u.MenuItem, {
                    id: "unmute-guild",
                    label: S.default.Messages.UNMUTE_SERVER,
                    subtext: E,
                    action: () => o.default.updateGuildNotificationSettings(n, {
                        muted: !1
                    }, f.NotificationLabels.Unmuted)
                }) : (0, i.jsx)(u.MenuItem, {
                    id: "mute-guild",
                    label: S.default.Messages.MUTE_SERVER,
                    action: () => o.default.updateGuildNotificationSettings(n, {
                        muted: !0
                    }, f.NotificationLabels.Unmuted),
                    children: (0, d.getMuteTimes)().map(e => {
                        let {
                            value: s,
                            label: l
                        } = e;
                        return (0, i.jsx)(u.MenuItem, {
                            id: "".concat(s),
                            label: l,
                            action: () => (function(e) {
                                if (null == n) return;
                                let i = e > 0 ? a().add(e, "second").toISOString() : null;
                                o.default.updateGuildNotificationSettings(n, {
                                    muted: !0,
                                    mute_config: {
                                        selected_time_window: e,
                                        end_time: i
                                    }
                                }, f.NotificationLabels.Muted, t)
                            })(s)
                        }, s)
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
            var i = n("37983");
            n("884691");
            var s = n("446674"),
                a = n("77078"),
                l = n("519705"),
                u = n("503950"),
                o = n("282109"),
                d = n("34676"),
                r = n("49111"),
                c = n("782340");

            function f() {
                return [{
                    setting: r.UserNotificationSettings.ALL_MESSAGES,
                    label: c.default.Messages.FORM_LABEL_ALL_MESSAGES
                }, {
                    setting: r.UserNotificationSettings.ONLY_MENTIONS,
                    label: c.default.Messages.FORM_LABEL_ONLY_MENTIONS.format()
                }, {
                    setting: r.UserNotificationSettings.NO_MESSAGES,
                    label: c.default.Messages.FORM_LABEL_NOTHING
                }]
            }

            function S(e) {
                var t, S;
                let g = function(e) {
                        let {
                            suppressEveryone: t,
                            suppressRoles: n,
                            mobilePush: S,
                            messageNotifications: g,
                            notifyHighlights: E
                        } = (0, s.useStateFromStoresObject)([o.default], () => ({
                            suppressEveryone: o.default.isSuppressEveryoneEnabled(e.id),
                            suppressRoles: o.default.isSuppressRolesEnabled(e.id),
                            mobilePush: o.default.isMobilePushEnabled(e.id),
                            messageNotifications: o.default.getMessageNotifications(e.id),
                            notifyHighlights: o.default.getNotifyHighlights(e.id)
                        }), [e.id]), M = E === r.HighlightSettings.DISABLED, _ = (0, u.default)(e.id);

                        function N(t, n) {
                            l.default.updateGuildNotificationSettings(e.id, t, n)
                        }
                        return (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsx)(a.MenuGroup, {
                                children: f().map(e => {
                                    let {
                                        setting: t,
                                        label: n
                                    } = e;
                                    return (0, i.jsx)(a.MenuRadioItem, {
                                        group: "guild-notifications",
                                        id: "".concat(t),
                                        label: n,
                                        action: () => N({
                                            message_notifications: t
                                        }, d.NotificationLabel.notifications(t)),
                                        checked: t === g
                                    }, t)
                                })
                            }), (0, i.jsxs)(a.MenuGroup, {
                                children: [(0, i.jsx)(a.MenuCheckboxItem, {
                                    id: "suppress-everyone",
                                    label: c.default.Messages.FORM_LABEL_SUPPRESS_EVERYONE.format(),
                                    action: () => N({
                                        suppress_everyone: !t
                                    }, d.NotificationLabel.suppressEveryone(!t)),
                                    checked: t
                                }), (0, i.jsx)(a.MenuCheckboxItem, {
                                    id: "suppress-roles",
                                    label: c.default.Messages.FORM_LABEL_SUPPRESS_ROLES,
                                    action: () => N({
                                        suppress_roles: !n
                                    }, d.NotificationLabel.suppressRoles(!n)),
                                    checked: n
                                }), (0, i.jsx)(a.MenuCheckboxItem, {
                                    id: "suppress-highlights",
                                    label: c.default.Messages.FORM_LABEL_SUPPRESS_HIGHLIGHTS,
                                    action: () => {
                                        N({
                                            notify_highlights: M ? r.HighlightSettings.ENABLED : r.HighlightSettings.DISABLED
                                        }, d.NotificationLabel.highlights(M))
                                    },
                                    checked: M
                                }), _]
                            }), (0, i.jsx)(a.MenuGroup, {
                                children: (0, i.jsx)(a.MenuCheckboxItem, {
                                    id: "mobile-push",
                                    label: c.default.Messages.FORM_LABEL_MOBILE_PUSH_NOTIFICATIONS,
                                    action: () => N({
                                        mobile_push: !S
                                    }, d.NotificationLabel.mobilePush(!S)),
                                    checked: S
                                })
                            })]
                        })
                    }(e),
                    E = (0, s.useStateFromStores)([o.default], () => o.default.getMessageNotifications(e.id), [e.id]),
                    M = null === (S = f()) || void 0 === S ? void 0 : null === (t = S.find(e => {
                        let {
                            setting: t
                        } = e;
                        return t === E
                    })) || void 0 === t ? void 0 : t.label;
                return null != g ? (0, i.jsx)(a.MenuItem, {
                    id: "guild-notifications",
                    label: c.default.Messages.NOTIFICATION_SETTINGS,
                    subtext: M,
                    action: () => (0, a.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("747593").then(n.bind(n, "747593"));
                        return n => (0, i.jsx)(t, {
                            ...n,
                            guildId: e.id
                        })
                    }),
                    children: g
                }) : null
            }
        },
        823772: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            }), n("222007");
            var i = n("37983"),
                s = n("884691"),
                a = n("446674"),
                l = n("77078"),
                u = n("519705"),
                o = n("277796"),
                d = n("546770"),
                r = n("507313"),
                c = n("282109"),
                f = n("34676"),
                S = n("49111"),
                g = n("133335"),
                E = n("397336"),
                M = n("782340");

            function _(e) {
                return (0, i.jsxs)(l.MenuItem, {
                    id: "notification",
                    label: M.default.Messages.NOTIFICATIONS,
                    action: () => {
                        (0, l.openModalLazy)(async () => {
                            let {
                                default: t
                            } = await n.el("747593").then(n.bind(n, "747593"));
                            return n => (0, i.jsx)(t, {
                                ...n,
                                guildId: e
                            })
                        })
                    },
                    children: [function(e) {
                        let [t, n] = s.useState(!1), [_, N] = s.useState(!1), h = (0, a.useStateFromStores)([c.default], () => c.default.getGuildUnreadSetting(e)), I = (0, a.useStateFromStores)([c.default], () => c.default.getMessageNotifications(e)), T = _ ? r.Presets.CUSTOM : (0, r.presetFromSettings)(h, I), A = t => {
                            N(!1), u.default.updateGuildNotificationSettings(e, {
                                message_notifications: t
                            }, f.NotificationLabel.notifications(t))
                        }, O = t => {
                            N(!1);
                            let n = c.default.getGuildFlags(e);
                            u.default.updateGuildNotificationSettings(e, {
                                flags: (0, o.withGuildUnreadFlags)(n, t === g.UnreadSetting.ALL_MESSAGES ? E.GuildNotificationSettingsFlags.UNREADS_ALL_MESSAGES : E.GuildNotificationSettingsFlags.UNREADS_ONLY_MENTIONS)
                            }, f.NotificationLabel.unreads(t))
                        };
                        return (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsxs)(l.MenuGroup, {
                                children: [(0, i.jsx)(l.MenuRadioItem, {
                                    id: "everything",
                                    group: "notification-preset",
                                    checked: T === r.Presets.ALL_MESSAGES,
                                    label: M.default.Messages.NOTIFICATION_PRESET_1,
                                    action: () => ((0, d.updateGuildPreset)(e, r.Presets.ALL_MESSAGES), N(!1))
                                }), (0, i.jsx)(l.MenuRadioItem, {
                                    id: "essentials",
                                    group: "notification-preset",
                                    checked: T === r.Presets.MENTIONS,
                                    label: M.default.Messages.NOTIFICATION_PRESET_2,
                                    action: () => ((0, d.updateGuildPreset)(e, r.Presets.MENTIONS), N(!1))
                                }), (0, i.jsx)(l.MenuRadioItem, {
                                    id: "nothing",
                                    group: "notification-preset",
                                    checked: T === r.Presets.NOTHING,
                                    label: M.default.Messages.NOTIFICATION_PRESET_3,
                                    action: () => ((0, d.updateGuildPreset)(e, r.Presets.NOTHING), N(!1))
                                }), (0, i.jsx)(l.MenuRadioItem, {
                                    id: "custom",
                                    group: "notification-preset",
                                    checked: T === r.Presets.CUSTOM,
                                    action: () => (n(!0), N(!0)),
                                    label: M.default.Messages.NOTIFICATION_PRESET_CUSTOM
                                })]
                            }), (T === r.Presets.CUSTOM || t) && (0, i.jsxs)(l.MenuGroup, {
                                children: [(0, i.jsxs)(l.MenuItem, {
                                    id: "unread_setting",
                                    label: "Unread Badges",
                                    children: [(0, i.jsx)(l.MenuRadioItem, {
                                        id: "unread_setting_all_messages",
                                        group: "unread_setting",
                                        checked: h === g.UnreadSetting.ALL_MESSAGES,
                                        label: M.default.Messages.NOTIFICATION_SETTINGS_PRESETS_ALL_MESSAGES,
                                        action: () => O(g.UnreadSetting.ALL_MESSAGES)
                                    }), (0, i.jsx)(l.MenuRadioItem, {
                                        id: "unread_setting_mention_only",
                                        group: "unread_setting",
                                        checked: h === g.UnreadSetting.ONLY_MENTIONS,
                                        label: M.default.Messages.NOTIFICATION_SETTINGS_PRESETS_MENTION_ONLY,
                                        action: () => O(g.UnreadSetting.ONLY_MENTIONS)
                                    })]
                                }, "unread_setting"), (0, i.jsxs)(l.MenuItem, {
                                    id: "push_settings",
                                    label: M.default.Messages.NOTIFICATIONS,
                                    children: [(0, i.jsx)(l.MenuRadioItem, {
                                        group: "notification-preset",
                                        id: "push_settings_everything",
                                        label: M.default.Messages.NOTIFICATION_SETTINGS_PRESETS_ALL_MESSAGES,
                                        checked: I === S.UserNotificationSettings.ALL_MESSAGES,
                                        action: () => A(S.UserNotificationSettings.ALL_MESSAGES)
                                    }), (0, i.jsx)(l.MenuRadioItem, {
                                        group: "notification-preset",
                                        id: "push_settings_everything_mention",
                                        checked: I === S.UserNotificationSettings.ONLY_MENTIONS,
                                        label: M.default.Messages.NOTIFICATION_SETTINGS_PRESETS_MENTION_ONLY,
                                        action: () => A(S.UserNotificationSettings.ONLY_MENTIONS)
                                    }), (0, i.jsx)(l.MenuRadioItem, {
                                        group: "notification-preset",
                                        id: "push_settings_everything_nothing",
                                        label: M.default.Messages.NOTIFICATION_SETTINGS_PRESETS_NONE,
                                        checked: I === S.UserNotificationSettings.NO_MESSAGES,
                                        action: () => A(S.UserNotificationSettings.NO_MESSAGES)
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
                        return (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsxs)(l.MenuGroup, {
                                children: [(0, i.jsx)(l.MenuCheckboxItem, {
                                    id: "mention",
                                    checked: t.suppressEveryone,
                                    label: M.default.Messages.FORM_LABEL_SUPPRESS_EVERYONE.format(),
                                    action: () => n(e, {
                                        suppress_everyone: !t.suppressEveryone
                                    }, f.NotificationLabel.suppressEveryone(!t.suppressEveryone))
                                }), (0, i.jsx)(l.MenuCheckboxItem, {
                                    id: "roles",
                                    checked: t.suppressRoles,
                                    label: M.default.Messages.FORM_LABEL_SUPPRESS_ROLES,
                                    action: () => n(e, {
                                        suppress_roles: !t.suppressRoles
                                    }, f.NotificationLabel.suppressRoles(!t.suppressRoles))
                                }), (0, i.jsx)(l.MenuCheckboxItem, {
                                    id: "hightlight",
                                    label: M.default.Messages.FORM_LABEL_SUPPRESS_HIGHLIGHTS,
                                    checked: t.highligths === S.HighlightSettings.ENABLED,
                                    action: () => n(e, {
                                        notify_highlights: t.highligths === S.HighlightSettings.ENABLED ? S.HighlightSettings.DISABLED : S.HighlightSettings.ENABLED
                                    }, f.NotificationLabel.highlights(t.highligths !== S.HighlightSettings.ENABLED))
                                })]
                            }), (0, i.jsxs)(l.MenuGroup, {
                                children: [(0, i.jsx)(l.MenuCheckboxItem, {
                                    id: "event",
                                    checked: t.muteScheduledEvents,
                                    label: M.default.Messages.FORM_LABEL_MUTE_SCHEDULED_EVENTS,
                                    action: () => n(e, {
                                        mute_scheduled_events: !t.muteScheduledEvents
                                    }, f.NotificationLabel.mutedEvents(!t.muteScheduledEvents))
                                }), (0, i.jsx)(l.MenuCheckboxItem, {
                                    id: "mobile_push",
                                    checked: t.mobilePush,
                                    label: M.default.Messages.FORM_LABEL_MOBILE_PUSH_NOTIFICATIONS,
                                    action: () => n(e, {
                                        mobile_push: !t.mobilePush
                                    }, f.NotificationLabel.mobilePush(!t.mobilePush))
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
            var i = n("37983");
            n("884691");
            var s = n("446674"),
                a = n("77078"),
                l = n("412707"),
                u = n("646186"),
                o = n("592407"),
                d = n("148475"),
                r = n("725621"),
                c = n("923959"),
                f = n("49111"),
                S = n("782340");

            function g(e) {
                function t(t) {
                    o.default.open(e.id, t)
                }
                let n = (0, s.useStateFromStoresArray)([c.default], () => c.default.getChannels(e.id).SELECTABLE, [e]),
                    g = (0, d.default)(e);
                return __OVERLAY__ || !g ? null : (0, i.jsx)(a.MenuItem, {
                    id: "guild-settings",
                    label: S.default.Messages.SERVER_SETTINGS,
                    action: () => t(),
                    children: (0, r.getGuildSettingsSections)(e, n).map(n => {
                        let {
                            section: s,
                            label: o
                        } = n;
                        if (null == o) return null;
                        switch (s) {
                            case f.GuildSettingsSections.DELETE:
                                return null;
                            case f.GuildSettingsSections.COMMUNITY:
                                return (0, i.jsx)(a.MenuItem, {
                                    id: s,
                                    action: () => t(s),
                                    label: S.default.Messages.GUILD_SETTINGS_COMMUNITY
                                }, s);
                            case f.GuildSettingsSections.APP_DIRECTORY:
                                return (0, i.jsx)(a.MenuItem, {
                                    id: s,
                                    action: () => {
                                        (0, u.goToAppDirectory)({
                                            guildId: e.id,
                                            entrypoint: {
                                                name: l.ApplicationDirectoryEntrypointNames.GUILD_CONTEXT_MENU
                                            }
                                        })
                                    },
                                    label: o
                                }, s);
                            default:
                                return (0, i.jsx)(a.MenuItem, {
                                    id: s,
                                    action: () => t(s),
                                    label: o
                                }, s)
                        }
                    })
                })
            }
        },
        263673: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var i = n("37983");
            n("884691");
            var s = n("446674"),
                a = n("77078"),
                l = n("126501"),
                u = n("282109"),
                o = n("782340");

            function d(e) {
                let t = (0, s.useStateFromStores)([u.default], () => u.default.isGuildCollapsed(e), [e]);
                return (0, i.jsx)(a.MenuCheckboxItem, {
                    id: "hide-muted-channels",
                    label: o.default.Messages.HIDE_MUTED_CHANNELS,
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
            var i = n("884691"),
                s = n("446674"),
                a = n("817963"),
                l = n("923959"),
                u = n("305961"),
                o = n("957255"),
                d = n("49111"),
                r = (e, t) => {
                    let n = (0, s.useStateFromStores)([u.default], () => u.default.getGuild(e), [e]),
                        {
                            canCreateGuildEvent: r
                        } = (0, a.useManageResourcePermissions)(n),
                        c = (0, s.useStateFromStores)([l.default], () => l.default.getChannels(e)[l.GUILD_VOCAL_CHANNELS_KEY], [e]),
                        f = i.useMemo(() => null != t ? c.filter(e => {
                            let {
                                channel: n
                            } = e;
                            return n.type === t
                        }) : c, [c, t]),
                        S = (0, s.useStateFromStores)([o.default], () => {
                            if (o.default.can(d.Permissions.ADMINISTRATOR, n) || r) return !0;
                            for (let {
                                    channel: e
                                }
                                of f) {
                                let {
                                    canCreateGuildEvent: t
                                } = (0, a.getManageResourcePermissions)(e);
                                if (t) return !0
                            }
                            return !1
                        }, [f, n, r]);
                    return S
                }
        },
        558286: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useGuildEventModalStore: function() {
                    return s
                }
            });
            var i = n("308503");
            let s = (0, i.default)(e => ({
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
            var i = n("37983");
            n("884691");
            var s = n("446674"),
                a = n("77078"),
                l = n("519705"),
                u = n("282109"),
                o = n("34676"),
                d = n("782340");

            function r(e) {
                let t = (0, s.useStateFromStores)([u.default], () => u.default.isMuteScheduledEventsEnabled(e), [e]);
                return (0, i.jsx)(a.MenuCheckboxItem, {
                    id: "mute-events",
                    label: d.default.Messages.FORM_LABEL_MUTE_SCHEDULED_EVENTS,
                    action: () => {
                        var n;
                        return n = {
                            mute_scheduled_events: !t
                        }, void l.default.updateGuildNotificationSettings(e, n, o.NotificationLabel.mutedEvents(n.mute_scheduled_events))
                    },
                    checked: t
                })
            }
        },
        842672: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("77078"),
                s = n("244201"),
                a = n("558286"),
                l = n("49111");
            let u = "guild-event-modal";
            var o = () => {
                let e = (0, s.useAppContext)(),
                    t = e === l.AppContext.POPOUT ? i.POPOUT_MODAL_CONTEXT : i.DEFAULT_MODAL_CONTEXT;
                return {
                    modalKey: u,
                    contextKey: t,
                    onCloseRequest: () => {
                        a.useGuildEventModalStore.getState().canCloseModal && (0, i.closeModal)(u, t)
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
            var i = n("446674"),
                s = n("957255"),
                a = n("49111");

            function l(e) {
                let {
                    canManageGuild: t,
                    canManageRoles: n,
                    canBanMembers: l,
                    canManageNicknames: u,
                    canCreateEmojisAndStickers: o,
                    canManageEmojisAndStickers: d,
                    canManageWebhooks: r,
                    canViewAuditLog: c
                } = (0, i.useStateFromStoresObject)([s.default], () => ({
                    canManageGuild: s.default.can(a.Permissions.MANAGE_GUILD, e),
                    canManageRoles: s.default.can(a.Permissions.MANAGE_ROLES, e),
                    canBanMembers: s.default.can(a.Permissions.BAN_MEMBERS, e),
                    canManageNicknames: s.default.can(a.Permissions.MANAGE_NICKNAMES, e),
                    canCreateEmojisAndStickers: s.default.can(a.Permissions.CREATE_GUILD_EXPRESSIONS, e),
                    canManageEmojisAndStickers: s.default.can(a.Permissions.MANAGE_GUILD_EXPRESSIONS, e),
                    canManageWebhooks: s.default.can(a.Permissions.MANAGE_WEBHOOKS, e),
                    canViewAuditLog: s.default.can(a.Permissions.VIEW_AUDIT_LOG, e)
                }), [e]);
                return t || n || l || u || o || d || r || c
            }
        },
        242757: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                canViewInviteModal: function() {
                    return s
                }
            });
            var i = n("49111");

            function s(e, t, n, s) {
                let a = null != n ? n : t,
                    l = null != a && e.can(i.Permissions.CREATE_INSTANT_INVITE, a);
                return l || null != t && null != t.vanityURLCode || (null == s ? void 0 : s.invite_code) != null
            }
        },
        47495: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getMuteTimeOptions: function() {
                    return f
                },
                filterOverrides: function() {
                    return g
                },
                useShouldUseNewNotificationSystem: function() {
                    return E
                }
            }), n("702976");
            var i = n("446674"),
                s = n("668597"),
                a = n("282109"),
                l = n("568734"),
                u = n("640497"),
                o = n("49111"),
                d = n("468200"),
                r = n("397336"),
                c = n("782340");

            function f() {
                return [{
                    label: c.default.Messages.MUTE_DURATION_15_MINUTES,
                    value: d.MuteUntilSeconds.MINUTES_15
                }, {
                    label: c.default.Messages.MUTE_DURATION_1_HOUR,
                    value: d.MuteUntilSeconds.HOURS_1
                }, {
                    label: c.default.Messages.MUTE_DURATION_3_HOURS,
                    value: d.MuteUntilSeconds.HOURS_3
                }, {
                    label: c.default.Messages.MUTE_DURATION_8_HOURS,
                    value: d.MuteUntilSeconds.HOURS_8
                }, {
                    label: c.default.Messages.MUTE_DURATION_24_HOURS,
                    value: d.MuteUntilSeconds.HOURS_24
                }, {
                    label: c.default.Messages.MUTE_DURATION_ALWAYS,
                    value: d.MuteUntilSeconds.ALWAYS
                }]
            }
            let S = {
                ignoreMute: !1,
                ignoreUnreadSetting: !0,
                ignoreNotificationSetting: !1
            };

            function g(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : S;
                return Object.keys(e).filter(n => {
                    var i, a;
                    let u = e[n].message_notifications !== o.UserNotificationSettings.NULL,
                        d = l.hasFlag(null !== (i = e[n].flags) && void 0 !== i ? i : 0, r.ChannelNotificationSettingsFlags.UNREADS_ALL_MESSAGES) || l.hasFlag(null !== (a = e[n].flags) && void 0 !== a ? a : 0, r.ChannelNotificationSettingsFlags.UNREADS_ONLY_MENTIONS);
                    return !t.ignoreUnreadSetting && d || !t.ignoreNotificationSetting && u || !t.ignoreMute && (0, s.computeIsMuted)(e[n])
                })
            }

            function E(e) {
                let t = (0, i.useStateFromStores)([a.default], () => a.default.useNewNotifications);
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
            var i = n("568734"),
                s = n("397336");

            function a(e, t) {
                var n;
                return i.addFlag((n = e, i.removeFlags(n, s.GuildNotificationSettingsFlags.UNREADS_ALL_MESSAGES, s.GuildNotificationSettingsFlags.UNREADS_ONLY_MENTIONS)), t)
            }
            let l = e => i.removeFlags(e, s.ChannelNotificationSettingsFlags.UNREADS_ALL_MESSAGES, s.ChannelNotificationSettingsFlags.UNREADS_ONLY_MENTIONS);

            function u(e, t) {
                return i.addFlag(l(e), t)
            }
        },
        546770: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                updateGuildPreset: function() {
                    return r
                }
            }), n("65597");
            var i = n("519705"),
                s = n("282109"),
                a = n("34676"),
                l = n("277796"),
                u = n("507313"),
                o = n("49111"),
                d = n("397336");

            function r(e, t) {
                let n = s.default.getGuildFlags(e);
                t === u.Presets.ALL_MESSAGES ? i.default.updateGuildNotificationSettings(e, {
                    message_notifications: o.UserNotificationSettings.ALL_MESSAGES,
                    flags: (0, l.withGuildUnreadFlags)(n, d.GuildNotificationSettingsFlags.UNREADS_ALL_MESSAGES)
                }, a.NotificationLabels.PresetAll) : t === u.Presets.MENTIONS ? i.default.updateGuildNotificationSettings(e, {
                    message_notifications: o.UserNotificationSettings.ONLY_MENTIONS,
                    flags: (0, l.withGuildUnreadFlags)(n, d.GuildNotificationSettingsFlags.UNREADS_ONLY_MENTIONS)
                }, a.NotificationLabels.PresetMentions) : t === u.Presets.NOTHING && i.default.updateGuildNotificationSettings(e, {
                    message_notifications: o.UserNotificationSettings.NO_MESSAGES,
                    flags: (0, l.withGuildUnreadFlags)(n, d.GuildNotificationSettingsFlags.UNREADS_ONLY_MENTIONS)
                }, a.NotificationLabels.PresetNothing)
            }
        },
        507313: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                Presets: function() {
                    return i
                },
                presetFromSettings: function() {
                    return d
                },
                presetName: function() {
                    return r
                }
            }), n("794252");
            var i, s, a = n("506838"),
                l = n("49111"),
                u = n("133335"),
                o = n("782340");

            function d(e, t) {
                return (0, a.match)([t, e]).with([l.UserNotificationSettings.ALL_MESSAGES, u.UnreadSetting.ALL_MESSAGES], () => "all_messages").with([l.UserNotificationSettings.ONLY_MENTIONS, u.UnreadSetting.UNSET], () => "mentions").with([l.UserNotificationSettings.ONLY_MENTIONS, u.UnreadSetting.ONLY_MENTIONS], () => "mentions").with([l.UserNotificationSettings.NO_MESSAGES, u.UnreadSetting.UNSET], () => "nothing").with([l.UserNotificationSettings.NO_MESSAGES, u.UnreadSetting.ONLY_MENTIONS], () => "nothing").otherwise(() => "custom")
            }

            function r(e) {
                return (0, a.match)(e).with("all_messages", () => o.default.Messages.NOTIFICATION_PRESET_1).with("mentions", () => o.default.Messages.NOTIFICATION_PRESET_2).with("nothing", () => o.default.Messages.NOTIFICATION_PRESET_3).with("custom", () => o.default.Messages.NOTIFICATION_PRESET_CUSTOM).exhaustive()
            }(s = i || (i = {})).ALL_MESSAGES = "all_messages", s.MENTIONS = "mentions", s.NOTHING = "nothing", s.CUSTOM = "custom"
        },
        76539: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("37983");
            n("884691");
            var s = n("469563"),
                a = n("715072"),
                l = n("75196"),
                u = (0, s.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: s = "currentColor",
                        foreground: a,
                        ...u
                    } = e;
                    return 16 === t || 16 === n ? (0, i.jsxs)("svg", {
                        ...(0, l.default)(u),
                        width: t,
                        height: n,
                        viewBox: "0 0 16 16",
                        children: [(0, i.jsx)("path", {
                            className: a,
                            fill: s,
                            d: "M14 2H16V3H14V5H13V3H11V2H13V0H14V2Z"
                        }), (0, i.jsx)("path", {
                            className: a,
                            fill: s,
                            d: "M6.5 8.00667C7.88 8.00667 9 6.88667 9 5.50667C9 4.12667 7.88 3.00667 6.5 3.00667C5.12 3.00667 4 4.12667 4 5.50667C4 6.88667 5.12 8.00667 6.5 8.00667Z"
                        }), (0, i.jsx)("path", {
                            className: a,
                            fill: s,
                            d: "M6.5 8.34C3.26 8.34 1 9.98666 1 12.34V13.0067H12V12.34C12 9.98 9.74 8.34 6.5 8.34Z"
                        })]
                    }) : (0, i.jsx)("svg", {
                        ...(0, l.default)(u),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            className: a,
                            fill: s,
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