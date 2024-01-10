(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["67031"], {
        820542: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                categoryCollapse: function() {
                    return i
                },
                categoryExpand: function() {
                    return s
                },
                categoryCollapseAll: function() {
                    return l
                },
                categoryExpandAll: function() {
                    return u
                }
            });
            var a = n("913144");

            function i(e) {
                a.default.dispatch({
                    type: "CATEGORY_COLLAPSE",
                    id: e
                })
            }

            function s(e) {
                a.default.dispatch({
                    type: "CATEGORY_EXPAND",
                    id: e
                })
            }

            function l(e) {
                a.default.dispatch({
                    type: "CATEGORY_COLLAPSE_ALL",
                    guildId: e
                })
            }

            function u(e) {
                a.default.dispatch({
                    type: "CATEGORY_EXPAND_ALL",
                    guildId: e
                })
            }
        },
        158534: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("685665");

            function s(e, t) {
                return function(n) {
                    let {
                        AnalyticsLocationProvider: s
                    } = (0, i.default)(t);
                    return (0, a.jsx)(s, {
                        children: (0, a.jsx)(e, {
                            ...n
                        })
                    })
                }
            }
        },
        142047: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("77078"),
                s = n("272030"),
                l = n("158534"),
                u = n("812204"),
                r = n("861370"),
                d = n("20209"),
                o = n("390008"),
                c = n("47495"),
                f = n("178261"),
                _ = n("852275"),
                E = n("963150"),
                N = n("308798"),
                g = n("47006"),
                M = n("44141"),
                S = n("531674"),
                A = n("619436"),
                O = n("625399"),
                C = n("339876"),
                L = n("295189"),
                T = n("782340");

            function U(e) {
                let {
                    channel: t,
                    onSelect: n
                } = e, l = (0, M.default)(t), u = (0, S.default)(t), d = (0, A.default)(t), E = (0, _.default)(t), N = (0, f.default)(t), g = (0, o.default)(t), C = (0, L.default)(t), U = (0, r.default)({
                    id: t.id,
                    label: T.default.Messages.COPY_ID_CHANNEL
                }), h = (0, c.useShouldUseNewNotificationSystem)("ChannelCategoryFavoritesMenu"), I = (0, O.default)(t);
                return (0, a.jsxs)(i.Menu, {
                    navId: "channel-context",
                    onClose: s.closeContextMenu,
                    "aria-label": T.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
                    onSelect: n,
                    children: [(0, a.jsx)(i.MenuGroup, {
                        children: l
                    }), (0, a.jsxs)(i.MenuGroup, {
                        children: [u, h ? I : d]
                    }), (0, a.jsxs)(i.MenuGroup, {
                        children: [E, N, g]
                    }), (0, a.jsx)(i.MenuGroup, {
                        children: C
                    }), (0, a.jsx)(i.MenuGroup, {
                        children: U
                    })]
                })
            }

            function h(e) {
                let {
                    channel: t,
                    guild: n,
                    onSelect: l
                } = e, u = (0, M.default)(t), d = (0, S.default)(t), L = (0, A.default)(t), U = (0, _.default)(t), h = (0, f.default)(t), I = (0, g.default)(t), p = (0, o.default)(t), v = (0, E.default)(t, n), R = (0, N.default)(t), m = (0, r.default)({
                    id: t.id,
                    label: T.default.Messages.COPY_ID_CHANNEL
                }), G = (0, C.default)(t), b = (0, c.useShouldUseNewNotificationSystem)("ChannelCategoryNormalMenu"), y = (0, O.default)(t);
                return (0, a.jsxs)(i.Menu, {
                    navId: "channel-context",
                    onClose: s.closeContextMenu,
                    "aria-label": T.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
                    onSelect: l,
                    children: [(0, a.jsx)(i.MenuGroup, {
                        children: u
                    }, "mark-as-read"), (0, a.jsxs)(i.MenuGroup, {
                        children: [G, U, h]
                    }, "channel-actions"), (0, a.jsxs)(i.MenuGroup, {
                        children: [d, b ? y : L]
                    }, "notifications"), (0, a.jsxs)(i.MenuGroup, {
                        children: [I, p, v, R]
                    }, "admin-actions"), (0, a.jsx)(i.MenuGroup, {
                        children: m
                    }, "developer-actions")]
                })
            }
            var I = (0, l.default)(function(e) {
                let t = (0, d.default)();
                return t ? (0, a.jsx)(U, {
                    ...e
                }) : (0, a.jsx)(h, {
                    ...e
                })
            }, [u.default.CONTEXT_MENU, u.default.CHANNEL_CATEGORY_MENU])
        },
        178261: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("446674"),
                s = n("77078"),
                l = n("820542"),
                u = n("870691"),
                r = n("42203"),
                d = n("49111"),
                o = n("782340");

            function c(e) {
                let t = (0, i.useStateFromStores)([u.default, r.default], () => {
                    let t = r.default.getMutableBasicGuildChannelsForGuild(e.guild_id),
                        n = Object.values(t).filter(e => e.type === d.ChannelTypes.GUILD_CATEGORY);
                    return 0 === n.length || n.every(e => u.default.isCollapsed(e.id))
                });
                return t ? null : (0, a.jsx)(s.MenuItem, {
                    id: "collapse-all-categories",
                    label: o.default.Messages.COLLAPSE_ALL_CATEGORIES,
                    action: () => (0, l.categoryCollapseAll)(e.guild_id)
                })
            }
        },
        852275: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("446674"),
                s = n("77078"),
                l = n("820542"),
                u = n("870691"),
                r = n("782340");

            function d(e) {
                let t = (0, i.useStateFromStores)([u.default], () => u.default.isCollapsed(e.id), [e.id]);
                return (0, a.jsx)(s.MenuCheckboxItem, {
                    id: "collapse-category",
                    label: r.default.Messages.COLLAPSE_CATEGORY,
                    action: () => t ? (0, l.categoryExpand)(e.id) : (0, l.categoryCollapse)(e.id),
                    checked: t
                })
            }
        },
        963150: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("446674"),
                s = n("77078"),
                l = n("957255"),
                u = n("49111"),
                r = n("782340");

            function d(e, t) {
                let d = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e.type,
                    o = (0, i.useStateFromStores)([l.default], () => l.default.can(u.Permissions.MANAGE_CHANNELS, e), [e]);
                if (__OVERLAY__ || !o) return null;
                let c = () => {
                    (0, s.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("581354").then(n.bind(n, "581354"));
                        return n => (0, a.jsx)(t, {
                            ...n,
                            channelType: d,
                            guildId: e.guild_id,
                            categoryId: e.parent_id
                        })
                    })
                };
                switch (d) {
                    case u.ChannelTypes.GUILD_TEXT:
                        return (0, a.jsx)(s.MenuItem, {
                            id: "create-text-channel",
                            label: r.default.Messages.CREATE_TEXT_CHANNEL,
                            action: c
                        });
                    case u.ChannelTypes.GUILD_VOICE:
                        return (0, a.jsx)(s.MenuItem, {
                            id: "create-voice-channel",
                            label: r.default.Messages.CREATE_VOICE_CHANNEL,
                            action: c
                        });
                    default:
                        return null
                }
            }
        },
        47006: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("446674"),
                s = n("77078"),
                l = n("18054"),
                u = n("957255"),
                r = n("49111"),
                d = n("782340");

            function o(e) {
                let {
                    canManageChannels: t,
                    canManageRoles: n,
                    canManageWebhooks: o,
                    canAccessChannel: c
                } = (0, i.useStateFromStoresObject)([u.default], () => ({
                    canManageChannels: u.default.can(r.Permissions.MANAGE_CHANNELS, e),
                    canManageRoles: u.default.can(r.Permissions.MANAGE_ROLES, e),
                    canManageWebhooks: u.default.can(r.Permissions.MANAGE_WEBHOOKS, e),
                    canAccessChannel: u.default.can(e.accessPermissions, e)
                }), [e]);
                return !__OVERLAY__ && c && (t || n || o) ? (0, a.jsx)(s.MenuItem, {
                    id: "edit-channel",
                    label: e.type === r.ChannelTypes.GUILD_CATEGORY ? d.default.Messages.EDIT_CATEGORY : d.default.Messages.EDIT_CHANNEL,
                    action: () => l.default.open(e.id)
                }) : null
            }
        },
        44141: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return N
                }
            }), n("222007");
            var a = n("37983");
            n("884691");
            var i = n("446674"),
                s = n("77078"),
                l = n("267363"),
                u = n("680986"),
                r = n("689275"),
                d = n("755624"),
                o = n("233069"),
                c = n("245997"),
                f = n("660478"),
                _ = n("49111"),
                E = n("782340");

            function N(e) {
                let t = function(e) {
                    let t = (0, u.useUnreadThreadsCountForParent)(e.guild_id, e.id),
                        n = (0, i.useStateFromStores)([f.default, c.default, r.default, d.default], () => {
                            if (e.isForumPost()) return f.default.isForumPostUnread(e.id);
                            if (e.type !== _.ChannelTypes.GUILD_CATEGORY) return f.default.hasUnread(e.id);
                            {
                                let t = c.default.getCategories(e.getGuildId());
                                if (null == t[e.id]) return !1;
                                let n = t[e.id].some(e => {
                                    let {
                                        channel: t
                                    } = e;
                                    return (0, o.isReadableType)(t.type) && f.default.hasUnread(t.id)
                                });
                                if (n) return !0;
                                let a = new Set(t[e.id].map(e => e.channel.id)),
                                    i = r.default.getThreadsForGuild(e.guild_id);
                                for (let e in i)
                                    if (a.has(e)) {
                                        for (let t in i[e])
                                            if (d.default.hasJoined(t) && !d.default.isMuted(t) && f.default.hasUnread(t)) return !0
                                    } return !1
                            }
                        }, [e]);
                    return e.isForumLikeChannel() ? t > 0 : n
                }(e);
                return (0, a.jsx)(s.MenuItem, {
                    id: "mark-channel-read",
                    label: E.default.Messages.MARK_AS_READ,
                    action: function() {
                        (0, l.ackChannel)(e)
                    },
                    disabled: !t
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
                    return A
                }
            }), n("222007");
            var a = n("37983");
            n("884691");
            var i = n("866227"),
                s = n.n(i),
                l = n("446674"),
                u = n("77078"),
                r = n("820542"),
                d = n("519705"),
                o = n("319165"),
                c = n("282109"),
                f = n("34676"),
                _ = n("679653"),
                E = n("49111"),
                N = n("468200"),
                g = n("782340");
            let M = () => [{
                    value: N.MuteUntilSeconds.MINUTES_15,
                    label: g.default.Messages.MUTE_DURATION_15_MINUTES
                }, {
                    value: N.MuteUntilSeconds.HOURS_1,
                    label: g.default.Messages.MUTE_DURATION_1_HOUR
                }, {
                    value: N.MuteUntilSeconds.HOURS_3,
                    label: g.default.Messages.MUTE_DURATION_3_HOURS
                }, {
                    value: N.MuteUntilSeconds.HOURS_8,
                    label: g.default.Messages.MUTE_DURATION_8_HOURS
                }, {
                    value: N.MuteUntilSeconds.HOURS_24,
                    label: g.default.Messages.MUTE_DURATION_24_HOURS
                }, {
                    value: N.MuteUntilSeconds.ALWAYS,
                    label: g.default.Messages.MUTE_DURATION_ALWAYS
                }],
                S = e => {
                    let t = e > 0 ? s().add(e, "second").toISOString() : null;
                    return {
                        muted: !0,
                        mute_config: {
                            selected_time_window: e,
                            end_time: t
                        }
                    }
                };

            function A(e, t) {
                let [n, i] = (0, l.useStateFromStoresArray)([c.default], () => [c.default.isChannelMuted(e.guild_id, e.id), c.default.getChannelMuteConfig(e.guild_id, e.id)]), s = (0, o.useMutedUntilText)(i), N = (0, _.default)(e, !0);

                function A(t) {
                    t && e.type === E.ChannelTypes.GUILD_CATEGORY && (0, r.categoryCollapse)(e.id), d.default.updateChannelOverrideSettings(e.guild_id, e.id, {
                        muted: t
                    }, f.NotificationLabel.muted(t))
                }
                let O = g.default.Messages.MUTE_CHANNEL_GENERIC,
                    C = g.default.Messages.UNMUTE_CHANNEL_GENERIC;
                switch (e.type) {
                    case E.ChannelTypes.GUILD_CATEGORY:
                        O = g.default.Messages.MUTE_CATEGORY, C = g.default.Messages.UNMUTE_CATEGORY;
                        break;
                    case E.ChannelTypes.GROUP_DM:
                        O = g.default.Messages.MUTE_CONVERSATION, C = g.default.Messages.UNMUTE_CONVERSATION;
                        break;
                    case E.ChannelTypes.DM:
                        O = g.default.Messages.MUTE_CHANNEL.format({
                            name: N
                        }), C = g.default.Messages.UNMUTE_CHANNEL.format({
                            name: N
                        });
                        break;
                    default:
                        O = g.default.Messages.MUTE_CHANNEL_GENERIC, C = g.default.Messages.UNMUTE_CHANNEL_GENERIC
                }
                return n ? (0, a.jsx)(u.MenuItem, {
                    id: "unmute-channel",
                    label: C,
                    subtext: s,
                    action: () => A(!1)
                }) : (0, a.jsx)(u.MenuItem, {
                    id: "mute-channel",
                    label: O,
                    action: () => A(!0),
                    children: M().map(n => {
                        let {
                            value: i,
                            label: s
                        } = n;
                        return (0, a.jsx)(u.MenuItem, {
                            id: "".concat(i),
                            label: s,
                            action: () => (function(n) {
                                e.type === E.ChannelTypes.GUILD_CATEGORY && (0, r.categoryCollapse)(e.id);
                                let a = S(n);
                                d.default.updateChannelOverrideSettings(e.guild_id, e.id, a, f.NotificationLabels.Muted, t)
                            })(i)
                        }, i)
                    })
                })
            }
        },
        619436: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useChannelNotificationRadioItems: function() {
                    return _
                },
                default: function() {
                    return E
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("446674"),
                s = n("77078"),
                l = n("519705"),
                u = n("721281"),
                r = n("282109"),
                d = n("34676"),
                o = n("49111"),
                c = n("782340");

            function f(e) {
                var t, n, a;
                let i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                switch (e.type) {
                    case o.ChannelTypes.GUILD_VOICE:
                        ;
                        return i ? (t = e, [{
                            setting: o.UserNotificationSettings.NULL,
                            label: null != t.parent_id ? c.default.Messages.FORM_LABEL_DEFAULT_CATEGORY : c.default.Messages.FORM_LABEL_DEFAULT
                        }, {
                            setting: o.UserNotificationSettings.ALL_MESSAGES,
                            label: c.default.Messages.FORM_LABEL_ALL_VOICE_ACTIVITY
                        }, {
                            setting: o.UserNotificationSettings.ONLY_MENTIONS,
                            label: c.default.Messages.FORM_LABEL_ONLY_TEXT_MENTIONS.format()
                        }, {
                            setting: o.UserNotificationSettings.NO_MESSAGES,
                            label: c.default.Messages.FORM_LABEL_NOTHING
                        }]) : null;
                    case o.ChannelTypes.GUILD_STAGE_VOICE:
                        ;
                        return n = e, [{
                            setting: o.UserNotificationSettings.NULL,
                            label: null != n.parent_id ? c.default.Messages.FORM_LABEL_DEFAULT_CATEGORY : c.default.Messages.FORM_LABEL_DEFAULT
                        }, {
                            setting: o.UserNotificationSettings.ONLY_MENTIONS,
                            label: c.default.Messages.FORM_LABEL_LIVE_STAGES_ONLY
                        }, {
                            setting: o.UserNotificationSettings.NO_MESSAGES,
                            label: c.default.Messages.FORM_LABEL_NOTHING
                        }];
                    default:
                        ;
                        return a = e, [{
                            setting: o.UserNotificationSettings.NULL,
                            label: null != a.parent_id ? c.default.Messages.FORM_LABEL_DEFAULT_CATEGORY : c.default.Messages.FORM_LABEL_DEFAULT
                        }, {
                            setting: o.UserNotificationSettings.ALL_MESSAGES,
                            label: c.default.Messages.FORM_LABEL_ALL_MESSAGES
                        }, {
                            setting: o.UserNotificationSettings.ONLY_MENTIONS,
                            label: c.default.Messages.FORM_LABEL_ONLY_MENTIONS.format()
                        }, {
                            setting: o.UserNotificationSettings.NO_MESSAGES,
                            label: c.default.Messages.FORM_LABEL_NOTHING
                        }]
                }
            }

            function _(e) {
                let t = e.getGuildId(),
                    n = e.id,
                    _ = (0, i.useStateFromStores)([r.default], () => {
                        let n = o.UserNotificationSettings.NULL;
                        return null != e.parent_id && (n = r.default.getChannelMessageNotifications(t, e.parent_id)), n !== o.UserNotificationSettings.NULL ? n : r.default.getMessageNotifications(t)
                    }, [t, e.parent_id]),
                    E = (0, i.useStateFromStores)([r.default], () => r.default.getNewForumThreadsCreated(e)),
                    N = (0, i.useStateFromStores)([r.default], () => r.default.getChannelOverrides(t)[n], [t, n]),
                    g = null == N ? o.UserNotificationSettings.NULL : N.message_notifications,
                    M = (0, u.useVoiceActivityNotificationSettingsExperiment)(e),
                    S = f(e, M);
                return null == S ? null : (0, a.jsxs)(a.Fragment, {
                    children: [e.isForumLikeChannel() ? (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(s.MenuCheckboxItem, {
                            id: "new-forum-threads-created",
                            label: c.default.Messages.FORUM_NEW_POSTS_CREATED,
                            checked: E,
                            action: () => l.default.setForumThreadsCreated(e, !E)
                        }), (0, a.jsx)(s.MenuSeparator, {})]
                    }) : null, S.map(i => {
                        let {
                            setting: u,
                            label: r
                        } = i;
                        return (0, a.jsx)(s.MenuRadioItem, {
                            group: "channel-notifications",
                            id: "".concat(u),
                            label: r,
                            subtext: u === o.UserNotificationSettings.NULL ? function(e, t) {
                                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                                switch (e) {
                                    case o.UserNotificationSettings.ALL_MESSAGES:
                                        return t.type === o.ChannelTypes.GUILD_VOICE && n ? c.default.Messages.FORM_LABEL_ALL_VOICE_ACTIVITY : c.default.Messages.FORM_LABEL_ALL_MESSAGES;
                                    case o.UserNotificationSettings.ONLY_MENTIONS:
                                        return c.default.Messages.FORM_LABEL_ONLY_MENTIONS.format();
                                    case o.UserNotificationSettings.NO_MESSAGES:
                                        return c.default.Messages.FORM_LABEL_NOTHING;
                                    case o.UserNotificationSettings.NULL:
                                    default:
                                        return
                                }
                            }(_, e, M) : void 0,
                            action: () => {
                                var e;
                                return e = u, void(null != t && l.default.updateChannelOverrideSettings(t, n, {
                                    message_notifications: e
                                }, d.NotificationLabel.notifications(e)))
                            },
                            checked: u === g
                        }, u)
                    })]
                })
            }

            function E(e) {
                var t, n;
                let l = _(e),
                    d = (0, i.useStateFromStores)([r.default], () => r.default.resolvedMessageNotifications(e), [e]),
                    E = (0, i.useStateFromStores)([r.default], () => r.default.getChannelOverrides(e.guild_id)[e.id], [e.guild_id, e.id]),
                    N = null == E ? o.UserNotificationSettings.NULL : E.message_notifications,
                    g = (0, u.useVoiceActivityNotificationSettingsExperiment)(e),
                    M = N === o.UserNotificationSettings.NULL && e.isGuildStageVoice() ? c.default.Messages.FORM_LABEL_ONLY_MENTIONS.format() : null === (n = f(e, g)) || void 0 === n ? void 0 : null === (t = n.find(e => {
                        let {
                            setting: t
                        } = e;
                        return t === d
                    })) || void 0 === t ? void 0 : t.label;
                return null != l ? (0, a.jsx)(s.MenuItem, {
                    id: "channel-notifications",
                    label: c.default.Messages.NOTIFICATION_SETTINGS,
                    subtext: M,
                    children: l
                }) : null
            }
        },
        339876: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("446674"),
                s = n("77078"),
                l = n("498139"),
                u = n("629220"),
                r = n("512395"),
                d = n("282109"),
                o = n("49111"),
                c = n("782340");

            function f(e) {
                let {
                    isFavoritesPerk: t
                } = (0, l.useFavoritesServerExperiment)("useChannelOptInItems"), n = (0, r.useOptInEnabledForGuild)(e.guild_id), f = (0, i.useStateFromStores)([d.default], () => d.default.isChannelOptedIn(e.guild_id, e.id)), _ = (0, i.useStateFromStores)([d.default], () => null != e.parent_id && d.default.isChannelOptedIn(e.guild_id, e.parent_id)), E = (0, i.useStateFromStores)([d.default], () => d.default.isFavorite(e.guild_id, e.id)), N = () => {
                    (0, u.setOptInChannel)(e.guild_id, e.id, !f, {
                        section: o.AnalyticsSections.CONTEXT_MENU
                    })
                }, g = () => {
                    null != e.parent_id && (0, u.setOptInChannel)(e.guild_id, e.parent_id, !1, {
                        section: o.AnalyticsSections.CONTEXT_MENU
                    })
                };
                if (!n || e.isThread()) return null;
                if (e.isCategory()) return (0, a.jsx)(s.MenuItem, {
                    id: "opt-into-category",
                    label: f ? c.default.Messages.CHANNEL_OPT_OUT : c.default.Messages.CHANNEL_OPT_IN,
                    action: () => N()
                });
                let M = E ? c.default.Messages.REMOVE_FAVORITE : c.default.Messages.ADD_FAVORITE,
                    S = E ? c.default.Messages.UNPIN_CHANNEL : c.default.Messages.PIN_CHANNEL_TO_TOP;
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(s.MenuItem, {
                        id: "opt-in-favorite-channel",
                        label: t ? S : M,
                        action: () => {
                            (0, u.setIsFavorite)(e.guild_id, e.id, !E, {
                                section: o.AnalyticsSections.CONTEXT_MENU
                            })
                        }
                    }), _ ? (0, a.jsx)(s.MenuItem, {
                        id: "opt-out-category",
                        label: c.default.Messages.CHANNEL_OPT_OUT_PARENT_CATEGORY,
                        action: () => g()
                    }) : (0, a.jsx)(s.MenuItem, {
                        id: "opt-into-channel",
                        label: f ? c.default.Messages.CHANNEL_OPT_OUT : c.default.Messages.CHANNEL_OPT_IN,
                        action: () => N()
                    })]
                })
            }
        },
        295189: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("77078"),
                s = n("200008"),
                l = n("782340");

            function u(e) {
                return (0, a.jsx)(i.MenuItem, {
                    id: "delete-channel",
                    label: l.default.Messages.REMOVE_CATEGORY,
                    subtext: l.default.Messages.DELETE_CATEGORY_SUBTEXT,
                    color: "danger",
                    action: () => (0, i.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("338052").then(n.bind(n, "338052"));
                        return n => (0, a.jsx)(t, {
                            ...n,
                            onConfirm: () => {
                                n.onClose(), (0, s.removeFavoriteCategory)(e.id)
                            },
                            channel: e
                        })
                    })
                })
            }
        },
        390008: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("446674"),
                s = n("77078"),
                l = n("162771"),
                u = n("498139"),
                r = n("49111"),
                d = n("782340");

            function o(e) {
                let t = (0, i.useStateFromStores)([l.default], () => l.default.getGuildId()),
                    o = e.type === r.ChannelTypes.GUILD_CATEGORY,
                    {
                        isFavoritesPerk: c
                    } = (0, u.useFavoritesServerExperiment)("useChannelFavoriteSetNickname");
                return __OVERLAY__ || t !== r.FAVORITES ? null : (0, a.jsx)(s.MenuItem, {
                    id: "set-channel-nickname",
                    label: c && o ? d.default.Messages.FAVORITES_RENAME_CATEGORY : d.default.Messages.CHANGE_NICKNAME,
                    action: function() {
                        (0, s.openModalLazy)(async () => {
                            let {
                                default: t
                            } = await n.el("353228").then(n.bind(n, "353228"));
                            return n => (0, a.jsx)(t, {
                                ...n,
                                channelId: e.id,
                                heading: c && o ? d.default.Messages.FAVORITES_RENAME_CATEGORY : d.default.Messages.CHANGE_NICKNAME,
                                formTitle: c && o ? d.default.Messages.CATEGORY_NAME : d.default.Messages.NICKNAME,
                                allowReset: !(c && o)
                            })
                        })
                    }
                })
            }
        },
        47495: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getMuteTimeOptions: function() {
                    return f
                },
                filterOverrides: function() {
                    return E
                },
                useShouldUseNewNotificationSystem: function() {
                    return N
                }
            }), n("702976");
            var a = n("446674"),
                i = n("668597"),
                s = n("282109"),
                l = n("568734"),
                u = n("640497"),
                r = n("49111"),
                d = n("468200"),
                o = n("397336"),
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
            let _ = {
                ignoreMute: !1,
                ignoreUnreadSetting: !0,
                ignoreNotificationSetting: !1
            };

            function E(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _;
                return Object.keys(e).filter(n => {
                    var a, s;
                    let u = e[n].message_notifications !== r.UserNotificationSettings.NULL,
                        d = l.hasFlag(null !== (a = e[n].flags) && void 0 !== a ? a : 0, o.ChannelNotificationSettingsFlags.UNREADS_ALL_MESSAGES) || l.hasFlag(null !== (s = e[n].flags) && void 0 !== s ? s : 0, o.ChannelNotificationSettingsFlags.UNREADS_ONLY_MENTIONS);
                    return !t.ignoreUnreadSetting && d || !t.ignoreNotificationSetting && u || !t.ignoreMute && (0, i.computeIsMuted)(e[n])
                })
            }

            function N(e) {
                let t = (0, a.useStateFromStores)([s.default], () => s.default.useNewNotifications);
                return u.default.useExperiment({
                    location: e
                }, {
                    autoTrackExposure: !1
                }).enabled && t
            }
        },
        721281: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useVoiceActivityNotificationSettingsExperiment: function() {
                    return u
                },
                hasVoiceChannelActivityNotifsEnabled: function() {
                    return r
                }
            });
            var a = n("862205"),
                i = n("49111");
            let s = (0, a.createExperiment)({
                    kind: "user",
                    id: "2023-11_voice_activity_notification_user",
                    label: "Voice Activity Notifications for User",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Voice Activity Notifications are enabled for user",
                        config: {
                            enabled: !0
                        }
                    }, {
                        id: 2,
                        label: "Control for AA test. Voice Activity Notifications are NOT enabled for user.",
                        config: {
                            enabled: !1
                        }
                    }]
                }),
                l = (0, a.createExperiment)({
                    kind: "guild",
                    id: "2023-11_voice_activity_notification_guild",
                    label: "General Voice Channel Notifications for Guild",
                    defaultConfig: {
                        voiceChannelActivityNotifsEnabled: !1
                    },
                    treatments: [{
                        id: 2,
                        label: "Deadchat notifs disabled, voice channel activity notifs enabled",
                        config: {
                            voiceChannelActivityNotifsEnabled: !0
                        }
                    }]
                });

            function u(e) {
                var t;
                let {
                    voiceChannelActivityNotifsEnabled: n
                } = l.useExperiment({
                    location: "useVoiceActivityNotificationSettingsExperiment",
                    guildId: null !== (t = null == e ? void 0 : e.getGuildId()) && void 0 !== t ? t : ""
                }, {
                    disable: (null == e ? void 0 : e.type) !== i.ChannelTypes.GUILD_VOICE,
                    autoTrackExposure: !1
                }), {
                    enabled: a
                } = s.useExperiment({
                    location: "useVoiceActivityNotificationSettingsExperiment"
                }, {
                    disable: (null == e ? void 0 : e.type) !== i.ChannelTypes.GUILD_VOICE || !n,
                    autoTrackExposure: !0
                });
                return (null == e ? void 0 : e.type) === i.ChannelTypes.GUILD_VOICE && n && a
            }

            function r(e) {
                var t;
                let {
                    voiceChannelActivityNotifsEnabled: n
                } = l.getCurrentConfig({
                    guildId: null !== (t = null == e ? void 0 : e.getGuildId()) && void 0 !== t ? t : "",
                    location: "hasVoiceChannelActivityNotifsEnabled"
                });
                return n
            }
        },
        277796: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                withGuildUnreadFlags: function() {
                    return s
                },
                resetChannelUnreadFlags: function() {
                    return l
                },
                withChannelUnreadFlags: function() {
                    return u
                }
            });
            var a = n("568734"),
                i = n("397336");

            function s(e, t) {
                var n;
                return a.addFlag((n = e, a.removeFlags(n, i.GuildNotificationSettingsFlags.UNREADS_ALL_MESSAGES, i.GuildNotificationSettingsFlags.UNREADS_ONLY_MENTIONS)), t)
            }
            let l = e => a.removeFlags(e, i.ChannelNotificationSettingsFlags.UNREADS_ALL_MESSAGES, i.ChannelNotificationSettingsFlags.UNREADS_ONLY_MENTIONS);

            function u(e, t) {
                return a.addFlag(l(e), t)
            }
        }
    }
]);