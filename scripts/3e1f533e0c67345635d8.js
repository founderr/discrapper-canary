(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["63930"], {
        820542: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                categoryCollapse: function() {
                    return i
                },
                categoryExpand: function() {
                    return l
                },
                categoryCollapseAll: function() {
                    return s
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

            function l(e) {
                a.default.dispatch({
                    type: "CATEGORY_EXPAND",
                    id: e
                })
            }

            function s(e) {
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
                    return l
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("685665");

            function l(e, t) {
                return function(n) {
                    let {
                        AnalyticsLocationProvider: l
                    } = (0, i.default)(t);
                    return (0, a.jsx)(l, {
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
                    return p
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("77078"),
                l = n("272030"),
                s = n("158534"),
                u = n("812204"),
                r = n("861370"),
                o = n("20209"),
                d = n("390008"),
                c = n("47495"),
                f = n("178261"),
                _ = n("852275"),
                E = n("963150"),
                g = n("655235"),
                N = n("308798"),
                C = n("47006"),
                A = n("44141"),
                M = n("531674"),
                S = n("619436"),
                T = n("625399"),
                v = n("339876"),
                h = n("782340");

            function O(e) {
                let {
                    channel: t,
                    onSelect: n
                } = e, s = (0, A.default)(t), u = (0, M.default)(t), o = (0, S.default)(t), E = (0, _.default)(t), N = (0, f.default)(t), C = (0, d.default)(t), v = (0, g.default)(t), O = (0, r.default)({
                    id: t.id,
                    label: h.default.Messages.COPY_ID_CHANNEL
                }), L = (0, c.useShouldUseNewNotificationSystem)("ChannelCategoryFavoritesMenu"), p = (0, T.default)(t);
                return (0, a.jsxs)(i.Menu, {
                    navId: "channel-context",
                    onClose: l.closeContextMenu,
                    "aria-label": h.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
                    onSelect: n,
                    children: [(0, a.jsx)(i.MenuGroup, {
                        children: s
                    }), (0, a.jsxs)(i.MenuGroup, {
                        children: [u, L ? p : o]
                    }), (0, a.jsxs)(i.MenuGroup, {
                        children: [E, N, C]
                    }), (0, a.jsx)(i.MenuGroup, {
                        children: v
                    }), (0, a.jsx)(i.MenuGroup, {
                        children: O
                    })]
                })
            }

            function L(e) {
                let {
                    channel: t,
                    guild: n,
                    onSelect: s
                } = e, u = (0, A.default)(t), o = (0, M.default)(t), g = (0, S.default)(t), O = (0, _.default)(t), L = (0, f.default)(t), p = (0, C.default)(t), U = (0, d.default)(t), I = (0, E.default)(t, n), y = (0, N.default)(t), m = (0, r.default)({
                    id: t.id,
                    label: h.default.Messages.COPY_ID_CHANNEL
                }), R = (0, v.default)(t), G = (0, c.useShouldUseNewNotificationSystem)("ChannelCategoryNormalMenu"), b = (0, T.default)(t);
                return (0, a.jsxs)(i.Menu, {
                    navId: "channel-context",
                    onClose: l.closeContextMenu,
                    "aria-label": h.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
                    onSelect: s,
                    children: [(0, a.jsx)(i.MenuGroup, {
                        children: u
                    }, "mark-as-read"), (0, a.jsxs)(i.MenuGroup, {
                        children: [R, O, L]
                    }, "channel-actions"), (0, a.jsxs)(i.MenuGroup, {
                        children: [o, G ? b : g]
                    }, "notifications"), (0, a.jsxs)(i.MenuGroup, {
                        children: [p, U, I, y]
                    }, "admin-actions"), (0, a.jsx)(i.MenuGroup, {
                        children: m
                    }, "developer-actions")]
                })
            }
            var p = (0, s.default)(function(e) {
                let t = (0, o.default)();
                return t ? (0, a.jsx)(O, {
                    ...e
                }) : (0, a.jsx)(L, {
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
                l = n("77078"),
                s = n("820542"),
                u = n("870691"),
                r = n("42203"),
                o = n("49111"),
                d = n("782340");

            function c(e) {
                let t = (0, i.useStateFromStores)([u.default, r.default], () => {
                    let t = r.default.getMutableBasicGuildChannelsForGuild(e.guild_id),
                        n = Object.values(t).filter(e => e.type === o.ChannelTypes.GUILD_CATEGORY);
                    return 0 === n.length || n.every(e => u.default.isCollapsed(e.id))
                });
                return t ? null : (0, a.jsx)(l.MenuItem, {
                    id: "collapse-all-categories",
                    label: d.default.Messages.COLLAPSE_ALL_CATEGORIES,
                    action: () => (0, s.categoryCollapseAll)(e.guild_id)
                })
            }
        },
        852275: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("446674"),
                l = n("77078"),
                s = n("820542"),
                u = n("870691"),
                r = n("782340");

            function o(e) {
                let t = (0, i.useStateFromStores)([u.default], () => u.default.isCollapsed(e.id), [e.id]);
                return (0, a.jsx)(l.MenuCheckboxItem, {
                    id: "collapse-category",
                    label: r.default.Messages.COLLAPSE_CATEGORY,
                    action: () => t ? (0, s.categoryExpand)(e.id) : (0, s.categoryCollapse)(e.id),
                    checked: t
                })
            }
        },
        963150: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("446674"),
                l = n("77078"),
                s = n("957255"),
                u = n("49111"),
                r = n("782340");

            function o(e, t) {
                let o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e.type,
                    d = (0, i.useStateFromStores)([s.default], () => s.default.can(u.Permissions.MANAGE_CHANNELS, e), [e]);
                if (__OVERLAY__ || !d) return null;
                let c = () => {
                    (0, l.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("581354").then(n.bind(n, "581354"));
                        return n => (0, a.jsx)(t, {
                            ...n,
                            channelType: o,
                            guildId: e.guild_id,
                            categoryId: e.parent_id
                        })
                    })
                };
                switch (o) {
                    case u.ChannelTypes.GUILD_TEXT:
                        return (0, a.jsx)(l.MenuItem, {
                            id: "create-text-channel",
                            label: r.default.Messages.CREATE_TEXT_CHANNEL,
                            action: c
                        });
                    case u.ChannelTypes.GUILD_VOICE:
                        return (0, a.jsx)(l.MenuItem, {
                            id: "create-voice-channel",
                            label: r.default.Messages.CREATE_VOICE_CHANNEL,
                            action: c
                        });
                    default:
                        return null
                }
            }
        },
        655235: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("77078"),
                l = n("200008"),
                s = n("782340");

            function u(e) {
                return (0, a.jsx)(i.MenuItem, {
                    id: "delete-channel",
                    label: s.default.Messages.DELETE_CATEGORY,
                    subtext: s.default.Messages.DELETE_CATEGORY_SUBTEXT,
                    color: "danger",
                    action: () => (0, i.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("338052").then(n.bind(n, "338052"));
                        return n => (0, a.jsx)(t, {
                            ...n,
                            onConfirm: () => {
                                n.onClose(), (0, l.removeFavoriteCategory)(e.id)
                            },
                            channel: e
                        })
                    })
                })
            }
        },
        47006: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("446674"),
                l = n("77078"),
                s = n("18054"),
                u = n("957255"),
                r = n("49111"),
                o = n("782340");

            function d(e) {
                let {
                    canManageChannels: t,
                    canManageRoles: n,
                    canManageWebhooks: d,
                    canAccessChannel: c
                } = (0, i.useStateFromStoresObject)([u.default], () => ({
                    canManageChannels: u.default.can(r.Permissions.MANAGE_CHANNELS, e),
                    canManageRoles: u.default.can(r.Permissions.MANAGE_ROLES, e),
                    canManageWebhooks: u.default.can(r.Permissions.MANAGE_WEBHOOKS, e),
                    canAccessChannel: u.default.can(e.accessPermissions, e)
                }), [e]);
                return !__OVERLAY__ && c && (t || n || d) ? (0, a.jsx)(l.MenuItem, {
                    id: "edit-channel",
                    label: e.type === r.ChannelTypes.GUILD_CATEGORY ? o.default.Messages.EDIT_CATEGORY : o.default.Messages.EDIT_CHANNEL,
                    action: () => s.default.open(e.id)
                }) : null
            }
        },
        44141: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            }), n("222007");
            var a = n("37983");
            n("884691");
            var i = n("446674"),
                l = n("77078"),
                s = n("267363"),
                u = n("680986"),
                r = n("689275"),
                o = n("755624"),
                d = n("233069"),
                c = n("245997"),
                f = n("660478"),
                _ = n("49111"),
                E = n("782340");

            function g(e) {
                let t = function(e) {
                    let t = (0, u.useUnreadThreadsCountForParent)(e.guild_id, e.id),
                        n = (0, i.useStateFromStores)([f.default, c.default, r.default, o.default], () => {
                            if (e.isForumPost()) return f.default.isForumPostUnread(e.id);
                            if (e.type !== _.ChannelTypes.GUILD_CATEGORY) return f.default.hasUnread(e.id);
                            {
                                let t = c.default.getCategories(e.getGuildId());
                                if (null == t[e.id]) return !1;
                                let n = t[e.id].some(e => {
                                    let {
                                        channel: t
                                    } = e;
                                    return (0, d.isReadableType)(t.type) && f.default.hasUnread(t.id)
                                });
                                if (n) return !0;
                                let a = new Set(t[e.id].map(e => e.channel.id)),
                                    i = r.default.getThreadsForGuild(e.guild_id);
                                for (let e in i)
                                    if (a.has(e)) {
                                        for (let t in i[e])
                                            if (o.default.hasJoined(t) && !o.default.isMuted(t) && f.default.hasUnread(t)) return !0
                                    } return !1
                            }
                        }, [e]);
                    return e.isForumLikeChannel() ? t > 0 : n
                }(e);
                return (0, a.jsx)(l.MenuItem, {
                    id: "mark-channel-read",
                    label: E.default.Messages.MARK_AS_READ,
                    action: function() {
                        (0, s.ackChannel)(e)
                    },
                    disabled: !t
                })
            }
        },
        531674: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getMuteTimes: function() {
                    return N
                },
                default: function() {
                    return A
                }
            }), n("222007");
            var a = n("37983");
            n("884691");
            var i = n("866227"),
                l = n.n(i),
                s = n("446674"),
                u = n("77078"),
                r = n("820542"),
                o = n("519705"),
                d = n("319165"),
                c = n("282109"),
                f = n("679653"),
                _ = n("49111"),
                E = n("468200"),
                g = n("782340");
            let N = () => [{
                    value: E.MuteUntilSeconds.MINUTES_15,
                    label: g.default.Messages.MUTE_DURATION_15_MINUTES
                }, {
                    value: E.MuteUntilSeconds.HOURS_1,
                    label: g.default.Messages.MUTE_DURATION_1_HOUR
                }, {
                    value: E.MuteUntilSeconds.HOURS_3,
                    label: g.default.Messages.MUTE_DURATION_3_HOURS
                }, {
                    value: E.MuteUntilSeconds.HOURS_8,
                    label: g.default.Messages.MUTE_DURATION_8_HOURS
                }, {
                    value: E.MuteUntilSeconds.HOURS_24,
                    label: g.default.Messages.MUTE_DURATION_24_HOURS
                }, {
                    value: E.MuteUntilSeconds.ALWAYS,
                    label: g.default.Messages.MUTE_DURATION_ALWAYS
                }],
                C = e => {
                    let t = e > 0 ? l().add(e, "second").toISOString() : null;
                    return {
                        muted: !0,
                        mute_config: {
                            selected_time_window: e,
                            end_time: t
                        }
                    }
                };

            function A(e, t) {
                let [n, i] = (0, s.useStateFromStoresArray)([c.default], () => [c.default.isChannelMuted(e.guild_id, e.id), c.default.getChannelMuteConfig(e.guild_id, e.id)]), l = (0, d.useMutedUntilText)(i), E = (0, f.default)(e, !0);

                function A(t) {
                    t && e.type === _.ChannelTypes.GUILD_CATEGORY && (0, r.categoryCollapse)(e.id), o.default.updateChannelOverrideSettings(e.guild_id, e.id, {
                        muted: t
                    })
                }
                let M = g.default.Messages.MUTE_CHANNEL_GENERIC,
                    S = g.default.Messages.UNMUTE_CHANNEL_GENERIC;
                switch (e.type) {
                    case _.ChannelTypes.GUILD_CATEGORY:
                        M = g.default.Messages.MUTE_CATEGORY, S = g.default.Messages.UNMUTE_CATEGORY;
                        break;
                    case _.ChannelTypes.GROUP_DM:
                        M = g.default.Messages.MUTE_CONVERSATION, S = g.default.Messages.UNMUTE_CONVERSATION;
                        break;
                    case _.ChannelTypes.DM:
                        M = g.default.Messages.MUTE_CHANNEL.format({
                            name: E
                        }), S = g.default.Messages.UNMUTE_CHANNEL.format({
                            name: E
                        });
                        break;
                    default:
                        M = g.default.Messages.MUTE_CHANNEL_GENERIC, S = g.default.Messages.UNMUTE_CHANNEL_GENERIC
                }
                return n ? (0, a.jsx)(u.MenuItem, {
                    id: "unmute-channel",
                    label: S,
                    subtext: l,
                    action: () => A(!1)
                }) : (0, a.jsx)(u.MenuItem, {
                    id: "mute-channel",
                    label: M,
                    action: () => A(!0),
                    children: N().map(n => {
                        let {
                            value: i,
                            label: l
                        } = n;
                        return (0, a.jsx)(u.MenuItem, {
                            id: "".concat(i),
                            label: l,
                            action: () => (function(n) {
                                e.type === _.ChannelTypes.GUILD_CATEGORY && (0, r.categoryCollapse)(e.id);
                                let a = C(n);
                                o.default.updateChannelOverrideSettings(e.guild_id, e.id, a, t)
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
                    return f
                },
                default: function() {
                    return _
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("446674"),
                l = n("77078"),
                s = n("519705"),
                u = n("721281"),
                r = n("282109"),
                o = n("49111"),
                d = n("782340");

            function c(e) {
                var t, n, a;
                let i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                switch (e.type) {
                    case o.ChannelTypes.GUILD_VOICE:
                        ;
                        return i ? (t = e, [{
                            setting: o.UserNotificationSettings.NULL,
                            label: null != t.parent_id ? d.default.Messages.FORM_LABEL_DEFAULT_CATEGORY : d.default.Messages.FORM_LABEL_DEFAULT
                        }, {
                            setting: o.UserNotificationSettings.ALL_MESSAGES,
                            label: d.default.Messages.FORM_LABEL_ALL_VOICE_ACTIVITY
                        }, {
                            setting: o.UserNotificationSettings.ONLY_MENTIONS,
                            label: d.default.Messages.FORM_LABEL_ONLY_TEXT_MENTIONS.format()
                        }, {
                            setting: o.UserNotificationSettings.NO_MESSAGES,
                            label: d.default.Messages.FORM_LABEL_NOTHING
                        }]) : null;
                    case o.ChannelTypes.GUILD_STAGE_VOICE:
                        ;
                        return n = e, [{
                            setting: o.UserNotificationSettings.NULL,
                            label: null != n.parent_id ? d.default.Messages.FORM_LABEL_DEFAULT_CATEGORY : d.default.Messages.FORM_LABEL_DEFAULT
                        }, {
                            setting: o.UserNotificationSettings.ONLY_MENTIONS,
                            label: d.default.Messages.FORM_LABEL_LIVE_STAGES_ONLY
                        }, {
                            setting: o.UserNotificationSettings.NO_MESSAGES,
                            label: d.default.Messages.FORM_LABEL_NOTHING
                        }];
                    default:
                        ;
                        return a = e, [{
                            setting: o.UserNotificationSettings.NULL,
                            label: null != a.parent_id ? d.default.Messages.FORM_LABEL_DEFAULT_CATEGORY : d.default.Messages.FORM_LABEL_DEFAULT
                        }, {
                            setting: o.UserNotificationSettings.ALL_MESSAGES,
                            label: d.default.Messages.FORM_LABEL_ALL_MESSAGES
                        }, {
                            setting: o.UserNotificationSettings.ONLY_MENTIONS,
                            label: d.default.Messages.FORM_LABEL_ONLY_MENTIONS.format()
                        }, {
                            setting: o.UserNotificationSettings.NO_MESSAGES,
                            label: d.default.Messages.FORM_LABEL_NOTHING
                        }]
                }
            }

            function f(e) {
                let t = e.getGuildId(),
                    n = e.id,
                    f = (0, i.useStateFromStores)([r.default], () => {
                        let n = o.UserNotificationSettings.NULL;
                        return null != e.parent_id && (n = r.default.getChannelMessageNotifications(t, e.parent_id)), n !== o.UserNotificationSettings.NULL ? n : r.default.getMessageNotifications(t)
                    }, [t, e.parent_id]),
                    _ = (0, i.useStateFromStores)([r.default], () => r.default.getNewForumThreadsCreated(e)),
                    E = (0, i.useStateFromStores)([r.default], () => r.default.getChannelOverrides(t)[n], [t, n]),
                    g = null == E ? o.UserNotificationSettings.NULL : E.message_notifications,
                    N = (0, u.useVoiceActivityNotificationSettingsExperiment)(e),
                    C = c(e, N);
                return null == C ? null : (0, a.jsxs)(a.Fragment, {
                    children: [e.isForumLikeChannel() ? (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(l.MenuCheckboxItem, {
                            id: "new-forum-threads-created",
                            label: d.default.Messages.FORUM_NEW_POSTS_CREATED,
                            checked: _,
                            action: () => s.default.setForumThreadsCreated(e, !_)
                        }), (0, a.jsx)(l.MenuSeparator, {})]
                    }) : null, C.map(i => {
                        let {
                            setting: u,
                            label: r
                        } = i;
                        return (0, a.jsx)(l.MenuRadioItem, {
                            group: "channel-notifications",
                            id: "".concat(u),
                            label: r,
                            subtext: u === o.UserNotificationSettings.NULL ? function(e, t) {
                                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                                switch (e) {
                                    case o.UserNotificationSettings.ALL_MESSAGES:
                                        return t.type === o.ChannelTypes.GUILD_VOICE && n ? d.default.Messages.FORM_LABEL_ALL_VOICE_ACTIVITY : d.default.Messages.FORM_LABEL_ALL_MESSAGES;
                                    case o.UserNotificationSettings.ONLY_MENTIONS:
                                        return d.default.Messages.FORM_LABEL_ONLY_MENTIONS.format();
                                    case o.UserNotificationSettings.NO_MESSAGES:
                                        return d.default.Messages.FORM_LABEL_NOTHING;
                                    case o.UserNotificationSettings.NULL:
                                    default:
                                        return
                                }
                            }(f, e, N) : void 0,
                            action: () => {
                                var e;
                                return e = u, void(null != t && s.default.updateChannelOverrideSettings(t, n, {
                                    message_notifications: e
                                }))
                            },
                            checked: u === g
                        }, u)
                    })]
                })
            }

            function _(e) {
                var t, n;
                let s = f(e),
                    _ = (0, i.useStateFromStores)([r.default], () => r.default.resolvedMessageNotifications(e), [e]),
                    E = (0, i.useStateFromStores)([r.default], () => r.default.getChannelOverrides(e.guild_id)[e.id], [e.guild_id, e.id]),
                    g = null == E ? o.UserNotificationSettings.NULL : E.message_notifications,
                    N = (0, u.useVoiceActivityNotificationSettingsExperiment)(e),
                    C = g === o.UserNotificationSettings.NULL && e.isGuildStageVoice() ? d.default.Messages.FORM_LABEL_ONLY_MENTIONS.format() : null === (n = c(e, N)) || void 0 === n ? void 0 : null === (t = n.find(e => {
                        let {
                            setting: t
                        } = e;
                        return t === _
                    })) || void 0 === t ? void 0 : t.label;
                return null != s ? (0, a.jsx)(l.MenuItem, {
                    id: "channel-notifications",
                    label: d.default.Messages.NOTIFICATION_SETTINGS,
                    subtext: C,
                    children: s
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
                l = n("77078"),
                s = n("498139"),
                u = n("629220"),
                r = n("512395"),
                o = n("282109"),
                d = n("49111"),
                c = n("782340");

            function f(e) {
                let {
                    isFavoritesPerk: t
                } = (0, s.useFavoritesServerExperiment)("useChannelOptInItems"), n = (0, r.useOptInEnabledForGuild)(e.guild_id), f = (0, i.useStateFromStores)([o.default], () => o.default.isChannelOptedIn(e.guild_id, e.id)), _ = (0, i.useStateFromStores)([o.default], () => null != e.parent_id && o.default.isChannelOptedIn(e.guild_id, e.parent_id)), E = (0, i.useStateFromStores)([o.default], () => o.default.isFavorite(e.guild_id, e.id)), g = () => {
                    (0, u.setOptInChannel)(e.guild_id, e.id, !f, {
                        section: d.AnalyticsSections.CONTEXT_MENU
                    })
                }, N = () => {
                    null != e.parent_id && (0, u.setOptInChannel)(e.guild_id, e.parent_id, !1, {
                        section: d.AnalyticsSections.CONTEXT_MENU
                    })
                };
                if (!n || e.isThread()) return null;
                if (e.isCategory()) return (0, a.jsx)(l.MenuItem, {
                    id: "opt-into-category",
                    label: f ? c.default.Messages.CHANNEL_OPT_OUT : c.default.Messages.CHANNEL_OPT_IN,
                    action: () => g()
                });
                let C = E ? c.default.Messages.REMOVE_FAVORITE : c.default.Messages.ADD_FAVORITE,
                    A = E ? c.default.Messages.UNPIN_CHANNEL : c.default.Messages.PIN_CHANNEL_TO_TOP;
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(l.MenuItem, {
                        id: "opt-in-favorite-channel",
                        label: t ? A : C,
                        action: () => {
                            (0, u.setIsFavorite)(e.guild_id, e.id, !E, {
                                section: d.AnalyticsSections.CONTEXT_MENU
                            })
                        }
                    }), _ ? (0, a.jsx)(l.MenuItem, {
                        id: "opt-out-category",
                        label: c.default.Messages.CHANNEL_OPT_OUT_PARENT_CATEGORY,
                        action: () => N()
                    }) : (0, a.jsx)(l.MenuItem, {
                        id: "opt-into-channel",
                        label: f ? c.default.Messages.CHANNEL_OPT_OUT : c.default.Messages.CHANNEL_OPT_IN,
                        action: () => g()
                    })]
                })
            }
        },
        200008: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                addFavoriteChannel: function() {
                    return f
                },
                removeFavoriteChannel: function() {
                    return _
                },
                setFavoriteChannelNickname: function() {
                    return E
                },
                addFavoriteCategory: function() {
                    return g
                },
                removeFavoriteCategory: function() {
                    return N
                },
                updateFavoriteChannels: function() {
                    return C
                },
                toggleFavoriteServerMuted: function() {
                    return A
                }
            }), n("222007");
            var a = n("249654"),
                i = n("151426"),
                l = n("872173"),
                s = n("42203"),
                u = n("957255"),
                r = n("379881"),
                o = n("843455");

            function d() {
                let e = r.default.getFavoriteChannels(),
                    t = 1;
                for (let n in e) t = Math.max(t, e[n].order);
                return t + 1
            }

            function c(e) {
                for (let t in e) {
                    let n = e[t];
                    if (null == n) {
                        delete e[t];
                        continue
                    }
                    if (n.type === i.FavoriteChannelType.CATEGORY) continue;
                    let a = s.default.getChannel(t);
                    if (null == a || !a.isPrivate() && !u.default.can(o.Permissions.VIEW_CHANNEL, a)) {
                        delete e[t];
                        continue
                    }
                }
            }

            function f(e, t) {
                let n = r.default.isFavorite(e);
                !n && l.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    n.favoriteChannels[e] = i.FavoriteChannel.create({
                        nickname: "",
                        type: i.FavoriteChannelType.REFERENCE_ORIGINAL,
                        position: d(),
                        parentId: null != t ? t : "0"
                    }), c(n.favoriteChannels)
                }, l.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function _(e) {
                let t = r.default.getFavorite(e);
                null != t && l.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    if (delete n.favoriteChannels[e], t.type === i.FavoriteChannelType.CATEGORY)
                        for (let t in n.favoriteChannels) n.favoriteChannels[t].parentId === e && (n.favoriteChannels[t].parentId = "0");
                    c(n.favoriteChannels)
                }, l.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function E(e, t) {
                let n = r.default.isFavorite(e);
                n && l.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    n.favoriteChannels[e].nickname = null != t ? t : ""
                }, l.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function g(e) {
                let t = a.default.fromTimestamp(Date.now());
                l.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    n.favoriteChannels[t] = i.FavoriteChannel.create({
                        nickname: e,
                        type: i.FavoriteChannelType.CATEGORY,
                        position: d(),
                        parentId: "0"
                    })
                }, l.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function N(e) {
                _(e)
            }

            function C(e) {
                l.PreloadedUserSettingsActionCreators.updateAsync("favorites", t => {
                    for (let a of e)
                        if (null != a.position && (t.favoriteChannels[a.id].position = a.position), void 0 !== a.parent_id) {
                            var n;
                            t.favoriteChannels[a.id].parentId = null !== (n = a.parent_id) && void 0 !== n ? n : "0"
                        }
                }, l.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function A() {
                l.PreloadedUserSettingsActionCreators.updateAsync("favorites", e => {
                    e.muted = !e.muted
                }, l.UserSettingsDelay.INFREQUENT_USER_ACTION)
            }
        },
        20209: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var a = n("446674"),
                i = n("162771"),
                l = n("49111");

            function s() {
                let e = (0, a.useStateFromStores)([i.default], () => i.default.getGuildId());
                return e === l.FAVORITES
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
                l = n("77078"),
                s = n("162771"),
                u = n("49111"),
                r = n("782340");

            function o(e) {
                let t = (0, i.useStateFromStores)([s.default], () => s.default.getGuildId());
                return __OVERLAY__ || t !== u.FAVORITES ? null : (0, a.jsx)(l.MenuItem, {
                    id: "set-channel-nickname",
                    label: r.default.Messages.CHANGE_NICKNAME,
                    action: function() {
                        (0, l.openModalLazy)(async () => {
                            let {
                                default: t
                            } = await n.el("353228").then(n.bind(n, "353228"));
                            return n => (0, a.jsx)(t, {
                                ...n,
                                channelId: e.id
                            })
                        })
                    }
                })
            }
        },
        567707: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var a = (0, n("862205").createExperiment)({
                kind: "guild",
                id: "2023-12_voice_lockscreen_widget",
                label: "Voice live activity (guild)",
                defaultConfig: {
                    showWidget: !1,
                    voiceChannelActivityNotifsEnabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Off (notif only)",
                    config: {
                        showWidget: !1,
                        voiceChannelActivityNotifsEnabled: !1
                    }
                }, {
                    id: 2,
                    label: "On (widget + notif)",
                    config: {
                        showWidget: !0,
                        voiceChannelActivityNotifsEnabled: !1
                    }
                }, {
                    id: 3,
                    label: "On (widget + notifs++)",
                    config: {
                        showWidget: !0,
                        voiceChannelActivityNotifsEnabled: !0
                    }
                }]
            })
        },
        721281: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useVoiceActivityNotificationSettingsExperiment: function() {
                    return r
                },
                hasVoiceChannelActivityNotifsEnabled: function() {
                    return o
                }
            });
            var a = n("862205"),
                i = n("567707"),
                l = n("49111");
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
                    }]
                }),
                u = (0, a.createExperiment)({
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

            function r(e) {
                var t, n;
                let {
                    voiceChannelActivityNotifsEnabled: a
                } = u.useExperiment({
                    location: "useVoiceActivityNotificationSettingsExperiment",
                    guildId: null !== (t = null == e ? void 0 : e.getGuildId()) && void 0 !== t ? t : ""
                }, {
                    disable: (null == e ? void 0 : e.type) !== l.ChannelTypes.GUILD_VOICE,
                    autoTrackExposure: !1
                }), {
                    voiceChannelActivityNotifsEnabled: r
                } = i.default.useExperiment({
                    location: "useVoiceActivityNotificationSettingsExperiment",
                    guildId: null !== (n = null == e ? void 0 : e.getGuildId()) && void 0 !== n ? n : ""
                }, {
                    disable: (null == e ? void 0 : e.type) !== l.ChannelTypes.GUILD_VOICE,
                    autoTrackExposure: !1
                }), {
                    enabled: o
                } = s.useExperiment({
                    location: "useVoiceActivityNotificationSettingsExperiment"
                }, {
                    disable: (null == e ? void 0 : e.type) !== l.ChannelTypes.GUILD_VOICE || !a,
                    autoTrackExposure: !0
                });
                return (null == e ? void 0 : e.type) === l.ChannelTypes.GUILD_VOICE && (r || a && o)
            }

            function o(e) {
                var t, n;
                let {
                    voiceChannelActivityNotifsEnabled: a
                } = u.getCurrentConfig({
                    guildId: null !== (t = null == e ? void 0 : e.getGuildId()) && void 0 !== t ? t : "",
                    location: "hasVoiceChannelActivityNotifsEnabled"
                }), {
                    voiceChannelActivityNotifsEnabled: l
                } = i.default.getCurrentConfig({
                    guildId: null !== (n = null == e ? void 0 : e.getGuildId()) && void 0 !== n ? n : "",
                    location: "hasVoiceChannelActivityNotifsEnabled"
                });
                return a || l
            }
        }
    }
]);