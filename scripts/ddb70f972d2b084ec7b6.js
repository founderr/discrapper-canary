(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["63930"], {
        142047: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return p
                }
            });
            var n = a("37983");
            a("884691");
            var s = a("77078"),
                l = a("272030"),
                i = a("158534"),
                u = a("812204"),
                r = a("861370"),
                d = a("20209"),
                o = a("390008"),
                f = a("178261"),
                c = a("852275"),
                E = a("963150"),
                L = a("655235"),
                M = a("308798"),
                _ = a("47006"),
                g = a("44141"),
                S = a("531674"),
                N = a("619436"),
                A = a("339876"),
                O = a("809937"),
                C = a("782340");

            function h(e) {
                let {
                    channel: t,
                    onSelect: a
                } = e, i = (0, g.default)(t), u = (0, S.default)(t), d = (0, N.default)(t), E = (0, c.default)(t), M = (0, f.default)(t), _ = (0, o.default)(t), A = (0, L.default)(t), O = (0, r.default)({
                    id: t.id,
                    label: C.default.Messages.COPY_ID_CHANNEL
                });
                return (0, n.jsxs)(s.Menu, {
                    navId: "channel-context",
                    onClose: l.closeContextMenu,
                    "aria-label": C.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
                    onSelect: a,
                    children: [(0, n.jsx)(s.MenuGroup, {
                        children: i
                    }), (0, n.jsxs)(s.MenuGroup, {
                        children: [u, d]
                    }), (0, n.jsxs)(s.MenuGroup, {
                        children: [E, M, _]
                    }), (0, n.jsx)(s.MenuGroup, {
                        children: A
                    }), (0, n.jsx)(s.MenuGroup, {
                        children: O
                    })]
                })
            }

            function T(e) {
                let {
                    channel: t,
                    guild: a,
                    onSelect: i
                } = e, u = (0, g.default)(t), d = (0, S.default)(t), L = (0, N.default)(t), h = (0, c.default)(t), T = (0, f.default)(t), p = (0, _.default)(t), G = (0, o.default)(t), m = (0, E.default)(t, a), F = (0, M.default)(t), U = (0, r.default)({
                    id: t.id,
                    label: C.default.Messages.COPY_ID_CHANNEL
                }), I = (0, A.default)(t), v = (0, O.default)(t);
                return (0, n.jsxs)(s.Menu, {
                    navId: "channel-context",
                    onClose: l.closeContextMenu,
                    "aria-label": C.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
                    onSelect: i,
                    children: [(0, n.jsx)(s.MenuGroup, {
                        children: u
                    }, "mark-as-read"), (0, n.jsxs)(s.MenuGroup, {
                        children: [I, h, T]
                    }, "channel-actions"), (0, n.jsxs)(s.MenuGroup, {
                        children: [d, L, v]
                    }, "notifications"), (0, n.jsxs)(s.MenuGroup, {
                        children: [p, G, m, F]
                    }, "admin-actions"), (0, n.jsx)(s.MenuGroup, {
                        children: U
                    }, "developer-actions")]
                })
            }
            var p = (0, i.default)(function(e) {
                let t = (0, d.default)();
                return t ? (0, n.jsx)(h, {
                    ...e
                }) : (0, n.jsx)(T, {
                    ...e
                })
            }, [u.default.CONTEXT_MENU, u.default.CHANNEL_CATEGORY_MENU])
        },
        178261: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return f
                }
            });
            var n = a("37983");
            a("884691");
            var s = a("446674"),
                l = a("77078"),
                i = a("820542"),
                u = a("870691"),
                r = a("42203"),
                d = a("49111"),
                o = a("782340");

            function f(e) {
                let t = (0, s.useStateFromStores)([u.default, r.default], () => {
                    let t = r.default.getMutableBasicGuildChannelsForGuild(e.guild_id),
                        a = Object.values(t).filter(e => e.type === d.ChannelTypes.GUILD_CATEGORY);
                    return 0 === a.length || a.every(e => u.default.isCollapsed(e.id))
                });
                return t ? null : (0, n.jsx)(l.MenuItem, {
                    id: "collapse-all-categories",
                    label: o.default.Messages.COLLAPSE_ALL_CATEGORIES,
                    action: () => (0, i.categoryCollapseAll)(e.guild_id)
                })
            }
        },
        852275: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return d
                }
            });
            var n = a("37983");
            a("884691");
            var s = a("446674"),
                l = a("77078"),
                i = a("820542"),
                u = a("870691"),
                r = a("782340");

            function d(e) {
                let t = (0, s.useStateFromStores)([u.default], () => u.default.isCollapsed(e.id), [e.id]);
                return (0, n.jsx)(l.MenuCheckboxItem, {
                    id: "collapse-category",
                    label: r.default.Messages.COLLAPSE_CATEGORY,
                    action: () => t ? (0, i.categoryExpand)(e.id) : (0, i.categoryCollapse)(e.id),
                    checked: t
                })
            }
        },
        655235: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return u
                }
            });
            var n = a("37983");
            a("884691");
            var s = a("77078"),
                l = a("200008"),
                i = a("782340");

            function u(e) {
                return (0, n.jsx)(s.MenuItem, {
                    id: "delete-channel",
                    label: i.default.Messages.DELETE_CATEGORY,
                    color: "danger",
                    action: () => (0, s.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await a.el("575351").then(a.bind(a, "575351"));
                        return a => (0, n.jsx)(t, {
                            ...a,
                            onConfirm: () => {
                                a.onClose(), (0, l.removeFavoriteCategory)(e.id)
                            },
                            channel: e
                        })
                    })
                })
            }
        },
        308798: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return L
                }
            });
            var n = a("37983");
            a("884691");
            var s = a("446674"),
                l = a("77078"),
                i = a("18054"),
                u = a("819689"),
                r = a("430475"),
                d = a("610730"),
                o = a("271938"),
                f = a("957255"),
                c = a("49111"),
                E = a("782340");

            function L(e) {
                let t = e.isForumPost(),
                    L = (0, s.useStateFromStores)([o.default], () => e.isOwner(o.default.getId()), [e]),
                    {
                        canManageChannel: M,
                        canAccessChannel: _
                    } = (0, s.useStateFromStoresObject)([f.default], () => ({
                        canAccessChannel: f.default.can(e.accessPermissions, e),
                        canManageChannel: f.default.can(e.isThread() ? c.Permissions.MANAGE_THREADS : c.Permissions.MANAGE_CHANNELS, e)
                    }), [e]),
                    g = (0, s.useStateFromStores)([d.default], () => {
                        var t;
                        return null !== (t = d.default.getCount(e.id)) && void 0 !== t ? t : 0
                    }, [e.id]),
                    {
                        firstMessage: S
                    } = (0, s.useStateFromStores)([r.default], () => r.default.getMessage(e.id), [e.id]),
                    N = t && (M || L && g < 1),
                    A = t && L && !M && g > 0 && null != S;
                return _ && (M || N || A) ? (0, n.jsx)(l.MenuItem, {
                    id: "delete-channel",
                    label: (() => {
                        if (e.type === c.ChannelTypes.GUILD_CATEGORY) return E.default.Messages.DELETE_CATEGORY;
                        if (e.isForumPost()) return N ? E.default.Messages.DELETE_FORUM_POST : E.default.Messages.DELETE_MESSAGE;
                        if (e.isThread()) return E.default.Messages.DELETE_THREAD;
                        return E.default.Messages.DELETE_CHANNEL
                    })(),
                    color: "danger",
                    action: () => (0, l.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await a.el("575351").then(a.bind(a, "575351"));
                        return a => (0, n.jsx)(t, {
                            ...a,
                            onConfirm: () => {
                                a.onClose(), A ? u.default.deleteMessage(e.id, e.id) : i.default.deleteChannel(e.id)
                            },
                            channel: e
                        })
                    })
                }) : null
            }
        },
        619436: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                useChannelNotificationRadioItems: function() {
                    return f
                },
                default: function() {
                    return c
                }
            });
            var n = a("37983");
            a("884691");
            var s = a("446674"),
                l = a("77078"),
                i = a("519705"),
                u = a("282109"),
                r = a("49111"),
                d = a("782340");

            function o(e) {
                var t, a;
                switch (e.type) {
                    case r.ChannelTypes.GUILD_VOICE:
                        return null;
                    case r.ChannelTypes.GUILD_STAGE_VOICE:
                        ;
                        return t = e, [{
                            setting: r.UserNotificationSettings.NULL,
                            label: null != t.parent_id ? d.default.Messages.FORM_LABEL_DEFAULT_CATEGORY : d.default.Messages.FORM_LABEL_DEFAULT
                        }, {
                            setting: r.UserNotificationSettings.ONLY_MENTIONS,
                            label: d.default.Messages.FORM_LABEL_LIVE_STAGES_ONLY
                        }, {
                            setting: r.UserNotificationSettings.NO_MESSAGES,
                            label: d.default.Messages.FORM_LABEL_NOTHING
                        }];
                    default:
                        ;
                        return a = e, [{
                            setting: r.UserNotificationSettings.NULL,
                            label: null != a.parent_id ? d.default.Messages.FORM_LABEL_DEFAULT_CATEGORY : d.default.Messages.FORM_LABEL_DEFAULT
                        }, {
                            setting: r.UserNotificationSettings.ALL_MESSAGES,
                            label: d.default.Messages.FORM_LABEL_ALL_MESSAGES
                        }, {
                            setting: r.UserNotificationSettings.ONLY_MENTIONS,
                            label: d.default.Messages.FORM_LABEL_ONLY_MENTIONS.format()
                        }, {
                            setting: r.UserNotificationSettings.NO_MESSAGES,
                            label: d.default.Messages.FORM_LABEL_NOTHING
                        }]
                }
            }

            function f(e) {
                let t = e.getGuildId(),
                    a = e.id,
                    f = (0, s.useStateFromStores)([u.default], () => u.default.getChannelOverrides(t)[a], [t, a]),
                    c = (0, s.useStateFromStores)([u.default], () => {
                        let a = r.UserNotificationSettings.NULL;
                        return null != e.parent_id && (a = u.default.getChannelMessageNotifications(t, e.parent_id)), a !== r.UserNotificationSettings.NULL ? a : u.default.getMessageNotifications(t)
                    }, [t, e.parent_id]),
                    E = (0, s.useStateFromStores)([u.default], () => u.default.getNewForumThreadsCreated(e)),
                    L = null == f ? r.UserNotificationSettings.NULL : f.message_notifications,
                    M = o(e);
                return null == M ? null : (0, n.jsxs)(n.Fragment, {
                    children: [e.isForumLikeChannel() ? (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)(l.MenuCheckboxItem, {
                            id: "new-forum-threads-created",
                            label: d.default.Messages.FORUM_NEW_POSTS_CREATED,
                            checked: E,
                            action: () => i.default.setForumThreadsCreated(e, !E)
                        }), (0, n.jsx)(l.MenuSeparator, {})]
                    }) : null, M.map(e => {
                        let {
                            setting: s,
                            label: u
                        } = e;
                        return (0, n.jsx)(l.MenuRadioItem, {
                            group: "channel-notifications",
                            id: "".concat(s),
                            label: u,
                            subtext: s === r.UserNotificationSettings.NULL ? function(e) {
                                switch (e) {
                                    case r.UserNotificationSettings.ALL_MESSAGES:
                                        return d.default.Messages.FORM_LABEL_ALL_MESSAGES;
                                    case r.UserNotificationSettings.ONLY_MENTIONS:
                                        return d.default.Messages.FORM_LABEL_ONLY_MENTIONS.format();
                                    case r.UserNotificationSettings.NO_MESSAGES:
                                        return d.default.Messages.FORM_LABEL_NOTHING;
                                    case r.UserNotificationSettings.NULL:
                                    default:
                                        return
                                }
                            }(c) : void 0,
                            action: () => {
                                var e;
                                return e = s, void(null != t && i.default.updateChannelOverrideSettings(t, a, {
                                    message_notifications: e
                                }))
                            },
                            checked: s === L
                        }, s)
                    })]
                })
            }

            function c(e) {
                var t, a;
                let i = f(e),
                    c = (0, s.useStateFromStores)([u.default], () => u.default.resolvedMessageNotifications(e), [e]),
                    E = (0, s.useStateFromStores)([u.default], () => u.default.getChannelOverrides(e.guild_id)[e.id], [e.guild_id, e.id]),
                    L = null == E ? r.UserNotificationSettings.NULL : E.message_notifications,
                    M = L === r.UserNotificationSettings.NULL && e.isGuildStageVoice() ? d.default.Messages.FORM_LABEL_ONLY_MENTIONS.format() : null === (a = o(e)) || void 0 === a ? void 0 : null === (t = a.find(e => {
                        let {
                            setting: t
                        } = e;
                        return t === c
                    })) || void 0 === t ? void 0 : t.label;
                return null != i ? (0, n.jsx)(l.MenuItem, {
                    id: "channel-notifications",
                    label: d.default.Messages.NOTIFICATION_SETTINGS,
                    subtext: M,
                    children: i
                }) : null
            }
        }
    }
]);