(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["63930"], {
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
                    return h
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
                f = n("178261"),
                c = n("852275"),
                E = n("963150"),
                _ = n("655235"),
                g = n("308798"),
                N = n("47006"),
                S = n("44141"),
                M = n("531674"),
                A = n("619436"),
                C = n("339876"),
                T = n("809937"),
                L = n("782340");

            function O(e) {
                let {
                    channel: t,
                    onSelect: n
                } = e, l = (0, S.default)(t), u = (0, M.default)(t), d = (0, A.default)(t), E = (0, c.default)(t), g = (0, f.default)(t), N = (0, o.default)(t), C = (0, _.default)(t), T = (0, r.default)({
                    id: t.id,
                    label: L.default.Messages.COPY_ID_CHANNEL
                });
                return (0, a.jsxs)(i.Menu, {
                    navId: "channel-context",
                    onClose: s.closeContextMenu,
                    "aria-label": L.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
                    onSelect: n,
                    children: [(0, a.jsx)(i.MenuGroup, {
                        children: l
                    }), (0, a.jsxs)(i.MenuGroup, {
                        children: [u, d]
                    }), (0, a.jsxs)(i.MenuGroup, {
                        children: [E, g, N]
                    }), (0, a.jsx)(i.MenuGroup, {
                        children: C
                    }), (0, a.jsx)(i.MenuGroup, {
                        children: T
                    })]
                })
            }

            function U(e) {
                let {
                    channel: t,
                    guild: n,
                    onSelect: l
                } = e, u = (0, S.default)(t), d = (0, M.default)(t), _ = (0, A.default)(t), O = (0, c.default)(t), U = (0, f.default)(t), h = (0, N.default)(t), p = (0, o.default)(t), I = (0, E.default)(t, n), v = (0, g.default)(t), R = (0, r.default)({
                    id: t.id,
                    label: L.default.Messages.COPY_ID_CHANNEL
                }), m = (0, C.default)(t);
                return (0, a.jsxs)(i.Menu, {
                    navId: "channel-context",
                    onClose: s.closeContextMenu,
                    "aria-label": L.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
                    onSelect: l,
                    children: [(0, a.jsx)(i.MenuGroup, {
                        children: u
                    }, "mark-as-read"), (0, a.jsxs)(i.MenuGroup, {
                        children: [m, O, U]
                    }, "channel-actions"), (0, a.jsxs)(i.MenuGroup, {
                        children: [d, _, (0, T.default)(t)]
                    }, "notifications"), (0, a.jsxs)(i.MenuGroup, {
                        children: [h, p, I, v]
                    }, "admin-actions"), (0, a.jsx)(i.MenuGroup, {
                        children: R
                    }, "developer-actions")]
                })
            }
            var h = (0, l.default)(function(e) {
                let t = (0, d.default)();
                return t ? (0, a.jsx)(O, {
                    ...e
                }) : (0, a.jsx)(U, {
                    ...e
                })
            }, [u.default.CONTEXT_MENU, u.default.CHANNEL_CATEGORY_MENU])
        },
        178261: function(e, t, n) {
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
                l = n("820542"),
                u = n("870691"),
                r = n("42203"),
                d = n("49111"),
                o = n("782340");

            function f(e) {
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
                let f = () => {
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
                            action: f
                        });
                    case u.ChannelTypes.GUILD_VOICE:
                        return (0, a.jsx)(s.MenuItem, {
                            id: "create-voice-channel",
                            label: r.default.Messages.CREATE_VOICE_CHANNEL,
                            action: f
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
                s = n("200008"),
                l = n("782340");

            function u(e) {
                return (0, a.jsx)(i.MenuItem, {
                    id: "delete-channel",
                    label: l.default.Messages.DELETE_CATEGORY,
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
        308798: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("446674"),
                s = n("77078"),
                l = n("18054"),
                u = n("819689"),
                r = n("430475"),
                d = n("610730"),
                o = n("271938"),
                f = n("957255"),
                c = n("49111"),
                E = n("782340");

            function _(e) {
                let t = e.isForumPost(),
                    _ = (0, i.useStateFromStores)([o.default], () => e.isOwner(o.default.getId()), [e]),
                    {
                        canManageChannel: g,
                        canAccessChannel: N
                    } = (0, i.useStateFromStoresObject)([f.default], () => ({
                        canAccessChannel: f.default.can(e.accessPermissions, e),
                        canManageChannel: f.default.can(e.isThread() ? c.Permissions.MANAGE_THREADS : c.Permissions.MANAGE_CHANNELS, e)
                    }), [e]),
                    S = (0, i.useStateFromStores)([d.default], () => {
                        var t;
                        return null !== (t = d.default.getCount(e.id)) && void 0 !== t ? t : 0
                    }, [e.id]),
                    {
                        firstMessage: M
                    } = (0, i.useStateFromStores)([r.default], () => r.default.getMessage(e.id), [e.id]),
                    A = t && (g || _ && S < 1),
                    C = t && _ && !g && S > 0 && null != M;
                return N && (g || A || C) ? (0, a.jsx)(s.MenuItem, {
                    id: "delete-channel",
                    label: (() => {
                        if (e.type === c.ChannelTypes.GUILD_CATEGORY) return E.default.Messages.DELETE_CATEGORY;
                        if (e.isForumPost()) return A ? E.default.Messages.DELETE_FORUM_POST : E.default.Messages.DELETE_MESSAGE;
                        if (e.isThread()) return E.default.Messages.DELETE_THREAD;
                        return E.default.Messages.DELETE_CHANNEL
                    })(),
                    color: "danger",
                    action: () => (0, s.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("575351").then(n.bind(n, "575351"));
                        return n => (0, a.jsx)(t, {
                            ...n,
                            onConfirm: () => {
                                n.onClose(), C ? u.default.deleteMessage(e.id, e.id) : l.default.deleteChannel(e.id)
                            },
                            channel: e
                        })
                    })
                }) : null
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
                    canAccessChannel: f
                } = (0, i.useStateFromStoresObject)([u.default], () => ({
                    canManageChannels: u.default.can(r.Permissions.MANAGE_CHANNELS, e),
                    canManageRoles: u.default.can(r.Permissions.MANAGE_ROLES, e),
                    canManageWebhooks: u.default.can(r.Permissions.MANAGE_WEBHOOKS, e),
                    canAccessChannel: u.default.can(e.accessPermissions, e)
                }), [e]);
                return !__OVERLAY__ && f && (t || n || o) ? (0, a.jsx)(s.MenuItem, {
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
                    return g
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
                f = n("245997"),
                c = n("660478"),
                E = n("49111"),
                _ = n("782340");

            function g(e) {
                let t = function(e) {
                    let t = (0, u.useUnreadThreadsCountForParent)(e.guild_id, e.id),
                        n = (0, i.useStateFromStores)([c.default, f.default, r.default, d.default], () => {
                            if (e.isForumPost()) return c.default.isForumPostUnread(e.id);
                            if (e.type !== E.ChannelTypes.GUILD_CATEGORY) return c.default.hasUnread(e.id);
                            {
                                let t = f.default.getCategories(e.getGuildId());
                                if (null == t[e.id]) return !1;
                                let n = t[e.id].some(e => {
                                    let {
                                        channel: t
                                    } = e;
                                    return (0, o.isReadableType)(t.type) && c.default.hasUnread(t.id)
                                });
                                if (n) return !0;
                                let a = new Set(t[e.id].map(e => e.channel.id)),
                                    i = r.default.getThreadsForGuild(e.guild_id);
                                for (let e in i)
                                    if (a.has(e)) {
                                        for (let t in i[e])
                                            if (d.default.hasJoined(t) && !d.default.isMuted(t) && c.default.hasUnread(t)) return !0
                                    } return !1
                            }
                        }, [e]);
                    return e.isForumLikeChannel() ? t > 0 : n
                }(e);
                return (0, a.jsx)(s.MenuItem, {
                    id: "mark-channel-read",
                    label: _.default.Messages.MARK_AS_READ,
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
                    return N
                },
                default: function() {
                    return M
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
                f = n("282109"),
                c = n("679653"),
                E = n("49111"),
                _ = n("468200"),
                g = n("782340");
            let N = () => [{
                    value: _.MuteUntilSeconds.MINUTES_15,
                    label: g.default.Messages.MUTE_DURATION_15_MINUTES
                }, {
                    value: _.MuteUntilSeconds.HOURS_1,
                    label: g.default.Messages.MUTE_DURATION_1_HOUR
                }, {
                    value: _.MuteUntilSeconds.HOURS_3,
                    label: g.default.Messages.MUTE_DURATION_3_HOURS
                }, {
                    value: _.MuteUntilSeconds.HOURS_8,
                    label: g.default.Messages.MUTE_DURATION_8_HOURS
                }, {
                    value: _.MuteUntilSeconds.HOURS_24,
                    label: g.default.Messages.MUTE_DURATION_24_HOURS
                }, {
                    value: _.MuteUntilSeconds.ALWAYS,
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

            function M(e, t) {
                let [n, i] = (0, l.useStateFromStoresArray)([f.default], () => [f.default.isChannelMuted(e.guild_id, e.id), f.default.getChannelMuteConfig(e.guild_id, e.id)]), s = (0, o.useMutedUntilText)(i), _ = (0, c.default)(e, !0);

                function M(t) {
                    t && e.type === E.ChannelTypes.GUILD_CATEGORY && (0, r.categoryCollapse)(e.id), d.default.updateChannelOverrideSettings(e.guild_id, e.id, {
                        muted: t
                    })
                }
                let A = g.default.Messages.MUTE_CHANNEL_GENERIC,
                    C = g.default.Messages.UNMUTE_CHANNEL_GENERIC;
                switch (e.type) {
                    case E.ChannelTypes.GUILD_CATEGORY:
                        A = g.default.Messages.MUTE_CATEGORY, C = g.default.Messages.UNMUTE_CATEGORY;
                        break;
                    case E.ChannelTypes.GROUP_DM:
                        A = g.default.Messages.MUTE_CONVERSATION, C = g.default.Messages.UNMUTE_CONVERSATION;
                        break;
                    case E.ChannelTypes.DM:
                        A = g.default.Messages.MUTE_CHANNEL.format({
                            name: _
                        }), C = g.default.Messages.UNMUTE_CHANNEL.format({
                            name: _
                        });
                        break;
                    default:
                        A = g.default.Messages.MUTE_CHANNEL_GENERIC, C = g.default.Messages.UNMUTE_CHANNEL_GENERIC
                }
                return n ? (0, a.jsx)(u.MenuItem, {
                    id: "unmute-channel",
                    label: C,
                    subtext: s,
                    action: () => M(!1)
                }) : (0, a.jsx)(u.MenuItem, {
                    id: "mute-channel",
                    label: A,
                    action: () => M(!0),
                    children: N().map(n => {
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
                                d.default.updateChannelOverrideSettings(e.guild_id, e.id, a, t)
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
                    return c
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
                d = n("49111"),
                o = n("782340");

            function f(e) {
                var t, n, a;
                let i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                switch (e.type) {
                    case d.ChannelTypes.GUILD_VOICE:
                        ;
                        return i ? (t = e, [{
                            setting: d.UserNotificationSettings.NULL,
                            label: null != t.parent_id ? o.default.Messages.FORM_LABEL_DEFAULT_CATEGORY : o.default.Messages.FORM_LABEL_DEFAULT
                        }, {
                            setting: d.UserNotificationSettings.ALL_MESSAGES,
                            label: o.default.Messages.FORM_LABEL_ALL_ACTIVITY
                        }, {
                            setting: d.UserNotificationSettings.ONLY_MENTIONS,
                            label: o.default.Messages.FORM_LABEL_ONLY_MENTIONS.format()
                        }, {
                            setting: d.UserNotificationSettings.NO_MESSAGES,
                            label: o.default.Messages.FORM_LABEL_NOTHING
                        }]) : null;
                    case d.ChannelTypes.GUILD_STAGE_VOICE:
                        ;
                        return n = e, [{
                            setting: d.UserNotificationSettings.NULL,
                            label: null != n.parent_id ? o.default.Messages.FORM_LABEL_DEFAULT_CATEGORY : o.default.Messages.FORM_LABEL_DEFAULT
                        }, {
                            setting: d.UserNotificationSettings.ONLY_MENTIONS,
                            label: o.default.Messages.FORM_LABEL_LIVE_STAGES_ONLY
                        }, {
                            setting: d.UserNotificationSettings.NO_MESSAGES,
                            label: o.default.Messages.FORM_LABEL_NOTHING
                        }];
                    default:
                        ;
                        return a = e, [{
                            setting: d.UserNotificationSettings.NULL,
                            label: null != a.parent_id ? o.default.Messages.FORM_LABEL_DEFAULT_CATEGORY : o.default.Messages.FORM_LABEL_DEFAULT
                        }, {
                            setting: d.UserNotificationSettings.ALL_MESSAGES,
                            label: o.default.Messages.FORM_LABEL_ALL_MESSAGES
                        }, {
                            setting: d.UserNotificationSettings.ONLY_MENTIONS,
                            label: o.default.Messages.FORM_LABEL_ONLY_MENTIONS.format()
                        }, {
                            setting: d.UserNotificationSettings.NO_MESSAGES,
                            label: o.default.Messages.FORM_LABEL_NOTHING
                        }]
                }
            }

            function c(e) {
                let t = e.getGuildId(),
                    n = e.id,
                    c = (0, i.useStateFromStores)([r.default], () => {
                        let n = d.UserNotificationSettings.NULL;
                        return null != e.parent_id && (n = r.default.getChannelMessageNotifications(t, e.parent_id)), n !== d.UserNotificationSettings.NULL ? n : r.default.getMessageNotifications(t)
                    }, [t, e.parent_id]),
                    E = (0, i.useStateFromStores)([r.default], () => r.default.getNewForumThreadsCreated(e)),
                    _ = (0, i.useStateFromStores)([r.default], () => r.default.getChannelOverrides(t)[n], [t, n]),
                    g = null == _ ? d.UserNotificationSettings.NULL : _.message_notifications,
                    N = (0, u.useVoiceActivityNotificationSettingsExperiment)(e),
                    S = f(e, N);
                return null == S ? null : (0, a.jsxs)(a.Fragment, {
                    children: [e.isForumLikeChannel() ? (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(s.MenuCheckboxItem, {
                            id: "new-forum-threads-created",
                            label: o.default.Messages.FORUM_NEW_POSTS_CREATED,
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
                            subtext: u === d.UserNotificationSettings.NULL ? function(e, t) {
                                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                                switch (e) {
                                    case d.UserNotificationSettings.ALL_MESSAGES:
                                        return t.type === d.ChannelTypes.GUILD_VOICE && n ? o.default.Messages.FORM_LABEL_ALL_ACTIVITY : o.default.Messages.FORM_LABEL_ALL_MESSAGES;
                                    case d.UserNotificationSettings.ONLY_MENTIONS:
                                        return o.default.Messages.FORM_LABEL_ONLY_MENTIONS.format();
                                    case d.UserNotificationSettings.NO_MESSAGES:
                                        return o.default.Messages.FORM_LABEL_NOTHING;
                                    case d.UserNotificationSettings.NULL:
                                    default:
                                        return
                                }
                            }(c, e, N) : void 0,
                            action: () => {
                                var e;
                                return e = u, void(null != t && l.default.updateChannelOverrideSettings(t, n, {
                                    message_notifications: e
                                }))
                            },
                            checked: u === g
                        }, u)
                    })]
                })
            }

            function E(e) {
                var t, n;
                let l = c(e),
                    E = (0, i.useStateFromStores)([r.default], () => r.default.resolvedMessageNotifications(e), [e]),
                    _ = (0, i.useStateFromStores)([r.default], () => r.default.getChannelOverrides(e.guild_id)[e.id], [e.guild_id, e.id]),
                    g = null == _ ? d.UserNotificationSettings.NULL : _.message_notifications,
                    N = (0, u.useVoiceActivityNotificationSettingsExperiment)(e),
                    S = g === d.UserNotificationSettings.NULL && e.isGuildStageVoice() ? o.default.Messages.FORM_LABEL_ONLY_MENTIONS.format() : null === (n = f(e, N)) || void 0 === n ? void 0 : null === (t = n.find(e => {
                        let {
                            setting: t
                        } = e;
                        return t === E
                    })) || void 0 === t ? void 0 : t.label;
                return null != l ? (0, a.jsx)(s.MenuItem, {
                    id: "channel-notifications",
                    label: o.default.Messages.NOTIFICATION_SETTINGS,
                    subtext: S,
                    children: l
                }) : null
            }
        },
        339876: function(e, t, n) {
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
                l = n("498139"),
                u = n("629220"),
                r = n("512395"),
                d = n("282109"),
                o = n("49111"),
                f = n("782340");

            function c(e) {
                let {
                    isFavoritesPerk: t
                } = (0, l.useFavoritesServerExperiment)("useChannelOptInItems"), n = (0, r.useOptInEnabledForGuild)(e.guild_id), c = (0, i.useStateFromStores)([d.default], () => d.default.isChannelOptedIn(e.guild_id, e.id)), E = (0, i.useStateFromStores)([d.default], () => null != e.parent_id && d.default.isChannelOptedIn(e.guild_id, e.parent_id)), _ = (0, i.useStateFromStores)([d.default], () => d.default.isFavorite(e.guild_id, e.id)), g = () => {
                    (0, u.setOptInChannel)(e.guild_id, e.id, !c, {
                        section: o.AnalyticsSections.CONTEXT_MENU
                    })
                }, N = () => {
                    null != e.parent_id && (0, u.setOptInChannel)(e.guild_id, e.parent_id, !1, {
                        section: o.AnalyticsSections.CONTEXT_MENU
                    })
                };
                if (!n || e.isThread()) return null;
                if (e.isCategory()) return (0, a.jsx)(s.MenuItem, {
                    id: "opt-into-category",
                    label: c ? f.default.Messages.CHANNEL_OPT_OUT : f.default.Messages.CHANNEL_OPT_IN,
                    action: () => g()
                });
                let S = _ ? f.default.Messages.REMOVE_FAVORITE : f.default.Messages.ADD_FAVORITE,
                    M = _ ? f.default.Messages.UNPIN_CHANNEL : f.default.Messages.PIN_CHANNEL_TO_TOP;
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(s.MenuItem, {
                        id: "opt-in-favorite-channel",
                        label: t ? M : S,
                        action: () => {
                            (0, u.setIsFavorite)(e.guild_id, e.id, !_, {
                                section: o.AnalyticsSections.CONTEXT_MENU
                            })
                        }
                    }), E ? (0, a.jsx)(s.MenuItem, {
                        id: "opt-out-category",
                        label: f.default.Messages.CHANNEL_OPT_OUT_PARENT_CATEGORY,
                        action: () => N()
                    }) : (0, a.jsx)(s.MenuItem, {
                        id: "opt-into-channel",
                        label: c ? f.default.Messages.CHANNEL_OPT_OUT : f.default.Messages.CHANNEL_OPT_IN,
                        action: () => g()
                    })]
                })
            }
        },
        809937: function(e, t, n) {
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
                l = n("47495"),
                u = n("831394"),
                r = n("282109"),
                d = n("133335"),
                o = n("782340");

            function f(e) {
                var t;
                let n = (0, i.useStateFromStores)([r.default], () => r.default.getChannelRecordUnreadSetting(e)),
                    f = (0, i.useStateFromStores)([r.default], () => r.default.getChannelUnreadMode(e));
                if (!(0, l.useShouldUseNewNotificationSystem)("useChannelUnreadItems")) return null;
                return (0, a.jsx)(s.MenuItem, {
                    id: "channel-unreads",
                    label: o.default.Messages.UNREAD_SETTINGS,
                    subtext: f === d.UnreadMode.IMPORTANT ? o.default.Messages.FORM_LABEL_ALL_MESSAGES : o.default.Messages.HIGHLIGHTS_AND_MENTIONS,
                    children: (t = e, [{
                        setting: d.UnreadSetting.UNSET,
                        label: null != t.parent_id ? o.default.Messages.FORM_LABEL_DEFAULT_CATEGORY : o.default.Messages.FORM_LABEL_DEFAULT
                    }, {
                        setting: d.UnreadSetting.ALL_MESSAGES,
                        label: o.default.Messages.FORM_LABEL_ALL_MESSAGES
                    }, {
                        setting: d.UnreadSetting.ONLY_MENTIONS,
                        label: o.default.Messages.HIGHLIGHTS_AND_MENTIONS
                    }]).map(t => {
                        let {
                            setting: i,
                            label: l
                        } = t;
                        return (0, a.jsx)(s.MenuRadioItem, {
                            group: "channel-unreads",
                            id: "".concat(i),
                            label: l,
                            action: () => (0, u.setChannelUnreadSetting)(e.guild_id, e.id, i),
                            checked: i === n
                        }, i)
                    })
                })
            }
        },
        200008: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                addFavoriteChannel: function() {
                    return c
                },
                removeFavoriteChannel: function() {
                    return E
                },
                setFavoriteChannelNickname: function() {
                    return _
                },
                addFavoriteCategory: function() {
                    return g
                },
                removeFavoriteCategory: function() {
                    return N
                },
                updateFavoriteChannels: function() {
                    return S
                },
                toggleFavoriteServerMuted: function() {
                    return M
                }
            }), n("222007");
            var a = n("249654"),
                i = n("151426"),
                s = n("872173"),
                l = n("42203"),
                u = n("957255"),
                r = n("379881"),
                d = n("843455");

            function o() {
                let e = r.default.getFavoriteChannels(),
                    t = 1;
                for (let n in e) t = Math.max(t, e[n].order);
                return t + 1
            }

            function f(e) {
                for (let t in e) {
                    let n = e[t];
                    if (null == n) {
                        delete e[t];
                        continue
                    }
                    if (n.type === i.FavoriteChannelType.CATEGORY) continue;
                    let a = l.default.getChannel(t);
                    if (null == a || !a.isPrivate() && !u.default.can(d.Permissions.VIEW_CHANNEL, a)) {
                        delete e[t];
                        continue
                    }
                }
            }

            function c(e, t) {
                let n = r.default.isFavorite(e);
                !n && s.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    n.favoriteChannels[e] = i.FavoriteChannel.create({
                        nickname: "",
                        type: i.FavoriteChannelType.REFERENCE_ORIGINAL,
                        position: o(),
                        parentId: null != t ? t : "0"
                    }), f(n.favoriteChannels)
                }, s.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function E(e) {
                let t = r.default.getFavorite(e);
                null != t && s.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    if (delete n.favoriteChannels[e], t.type === i.FavoriteChannelType.CATEGORY)
                        for (let t in n.favoriteChannels) n.favoriteChannels[t].parentId === e && (n.favoriteChannels[t].parentId = "0");
                    f(n.favoriteChannels)
                }, s.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function _(e, t) {
                let n = r.default.isFavorite(e);
                n && s.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    n.favoriteChannels[e].nickname = null != t ? t : ""
                }, s.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function g(e) {
                let t = a.default.fromTimestamp(Date.now());
                s.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    n.favoriteChannels[t] = i.FavoriteChannel.create({
                        nickname: e,
                        type: i.FavoriteChannelType.CATEGORY,
                        position: o(),
                        parentId: "0"
                    })
                }, s.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function N(e) {
                E(e)
            }

            function S(e) {
                s.PreloadedUserSettingsActionCreators.updateAsync("favorites", t => {
                    for (let a of e)
                        if (null != a.position && (t.favoriteChannels[a.id].position = a.position), void 0 !== a.parent_id) {
                            var n;
                            t.favoriteChannels[a.id].parentId = null !== (n = a.parent_id) && void 0 !== n ? n : "0"
                        }
                }, s.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function M() {
                s.PreloadedUserSettingsActionCreators.updateAsync("favorites", e => {
                    e.muted = !e.muted
                }, s.UserSettingsDelay.INFREQUENT_USER_ACTION)
            }
        },
        20209: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var a = n("446674"),
                i = n("162771"),
                s = n("49111");

            function l() {
                let e = (0, a.useStateFromStores)([i.default], () => i.default.getGuildId());
                return e === s.FAVORITES
            }
        },
        390008: function(e, t, n) {
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
                l = n("162771"),
                u = n("49111"),
                r = n("782340");

            function d(e) {
                let t = (0, i.useStateFromStores)([l.default], () => l.default.getGuildId());
                return __OVERLAY__ || t !== u.FAVORITES ? null : (0, a.jsx)(s.MenuItem, {
                    id: "set-channel-nickname",
                    label: r.default.Messages.CHANGE_NICKNAME,
                    action: function() {
                        (0, s.openModalLazy)(async () => {
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
        47495: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getMuteTimeOptions: function() {
                    return o
                },
                filterOverrides: function() {
                    return f
                },
                useShouldUseNewNotificationSystem: function() {
                    return c
                }
            });
            var a = n("446674"),
                i = n("668597"),
                s = n("282109"),
                l = n("640497"),
                u = n("49111"),
                r = n("468200"),
                d = n("782340");

            function o() {
                return [{
                    label: d.default.Messages.MUTE_DURATION_15_MINUTES,
                    value: r.MuteUntilSeconds.MINUTES_15
                }, {
                    label: d.default.Messages.MUTE_DURATION_1_HOUR,
                    value: r.MuteUntilSeconds.HOURS_1
                }, {
                    label: d.default.Messages.MUTE_DURATION_3_HOURS,
                    value: r.MuteUntilSeconds.HOURS_3
                }, {
                    label: d.default.Messages.MUTE_DURATION_8_HOURS,
                    value: r.MuteUntilSeconds.HOURS_8
                }, {
                    label: d.default.Messages.MUTE_DURATION_24_HOURS,
                    value: r.MuteUntilSeconds.HOURS_24
                }, {
                    label: d.default.Messages.MUTE_DURATION_ALWAYS,
                    value: r.MuteUntilSeconds.ALWAYS
                }]
            }

            function f(e) {
                return Object.keys(e).filter(t => !!(0, i.computeIsMuted)(e[t]) || e[t].message_notifications !== u.UserNotificationSettings.NULL || !1)
            }

            function c(e) {
                let t = (0, a.useStateFromStores)([s.default], () => s.default.useNewNotifications);
                return l.default.useExperiment({
                    location: e
                }, {
                    autoTrackExposure: !1
                }).enabled && t
            }
        },
        721281: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                VoiceActivityNotificationGuildExperiment: function() {
                    return l
                },
                useVoiceActivityNotificationSettingsExperiment: function() {
                    return u
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
                    }]
                }),
                l = (0, a.createExperiment)({
                    kind: "guild",
                    id: "2023-11_voice_activity_notification_guild",
                    label: "General Voice Channel Notifications for Guild",
                    defaultConfig: {
                        deadchatNotifsEnabled: !1,
                        voiceChannelActivityNotifsEnabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Deadchat notifs enabled, voice channel activity notifs disabled",
                        config: {
                            deadchatNotifsEnabled: !0,
                            voiceChannelActivityNotifsEnabled: !1
                        }
                    }, {
                        id: 2,
                        label: "Deadchat notifs disabled, voice channel activity notifs enabled",
                        config: {
                            deadchatNotifsEnabled: !1,
                            voiceChannelActivityNotifsEnabled: !0
                        }
                    }, {
                        id: 3,
                        label: "Deadchat notifs enabled, voice channel activity notifs enabled",
                        config: {
                            deadchatNotifsEnabled: !0,
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
                    guildId: null !== (t = e.getGuildId()) && void 0 !== t ? t : ""
                }, {
                    disable: e.type !== i.ChannelTypes.GUILD_VOICE,
                    autoTrackExposure: !1
                }), {
                    enabled: a
                } = s.useExperiment({
                    location: "useVoiceActivityNotificationSettingsExperiment"
                }, {
                    disable: e.type !== i.ChannelTypes.GUILD_VOICE || !n,
                    autoTrackExposure: !0
                });
                return e.type === i.ChannelTypes.GUILD_VOICE && n && a
            }
        },
        831394: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                setChannelUnreadSetting: function() {
                    return r
                },
                setGuildUnreadSetting: function() {
                    return d
                }
            });
            var a = n("519705"),
                i = n("282109"),
                s = n("568734"),
                l = n("133335"),
                u = n("397336");

            function r(e, t, n) {
                let r = i.default.getChannelIdFlags(e, t);
                r = (0, s.setFlag)(r, u.ChannelNotificationSettingsFlags.UNREADS_ALL_MESSAGES, n === l.UnreadSetting.ALL_MESSAGES), r = (0, s.setFlag)(r, u.ChannelNotificationSettingsFlags.UNREADS_ONLY_MENTIONS, n === l.UnreadSetting.ONLY_MENTIONS), a.default.updateChannelOverrideSettings(e, t, {
                    flags: r
                })
            }

            function d(e, t) {
                let n = i.default.getGuildFlags(e);
                n = (0, s.setFlag)(n, u.GuildNotificationSettingsFlags.UNREADS_ALL_MESSAGES, t === l.UnreadSetting.ALL_MESSAGES), n = (0, s.setFlag)(n, u.GuildNotificationSettingsFlags.UNREADS_ONLY_MENTIONS, t === l.UnreadSetting.ONLY_MENTIONS), a.default.updateGuildNotificationSettings(e, {
                    flags: n
                })
            }
        }
    }
]);