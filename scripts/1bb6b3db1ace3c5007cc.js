(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["63930"], {
        142047: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return h
                }
            });
            var s = a("37983");
            a("884691");
            var n = a("77078"),
                l = a("272030"),
                u = a("158534"),
                i = a("812204"),
                d = a("861370"),
                r = a("20209"),
                o = a("390008"),
                f = a("178261"),
                c = a("852275"),
                M = a("963150"),
                E = a("655235"),
                _ = a("308798"),
                N = a("47006"),
                g = a("44141"),
                S = a("531674"),
                L = a("619436"),
                T = a("339876"),
                C = a("809937"),
                O = a("782340");

            function A(e) {
                let {
                    channel: t,
                    onSelect: a
                } = e, u = (0, g.default)(t), i = (0, S.default)(t), r = (0, L.default)(t), M = (0, c.default)(t), _ = (0, f.default)(t), N = (0, o.default)(t), T = (0, E.default)(t), C = (0, d.default)({
                    id: t.id,
                    label: O.default.Messages.COPY_ID_CHANNEL
                });
                return (0, s.jsxs)(n.Menu, {
                    navId: "channel-context",
                    onClose: l.closeContextMenu,
                    "aria-label": O.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
                    onSelect: a,
                    children: [(0, s.jsx)(n.MenuGroup, {
                        children: u
                    }), (0, s.jsxs)(n.MenuGroup, {
                        children: [i, r]
                    }), (0, s.jsxs)(n.MenuGroup, {
                        children: [M, _, N]
                    }), (0, s.jsx)(n.MenuGroup, {
                        children: T
                    }), (0, s.jsx)(n.MenuGroup, {
                        children: C
                    })]
                })
            }

            function U(e) {
                let {
                    channel: t,
                    guild: a,
                    onSelect: u
                } = e, i = (0, g.default)(t), r = (0, S.default)(t), E = (0, L.default)(t), A = (0, c.default)(t), U = (0, f.default)(t), h = (0, N.default)(t), m = (0, o.default)(t), I = (0, M.default)(t, a), G = (0, _.default)(t), p = (0, d.default)({
                    id: t.id,
                    label: O.default.Messages.COPY_ID_CHANNEL
                }), R = (0, T.default)(t);
                return (0, s.jsxs)(n.Menu, {
                    navId: "channel-context",
                    onClose: l.closeContextMenu,
                    "aria-label": O.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
                    onSelect: u,
                    children: [(0, s.jsx)(n.MenuGroup, {
                        children: i
                    }, "mark-as-read"), (0, s.jsxs)(n.MenuGroup, {
                        children: [R, A, U]
                    }, "channel-actions"), (0, s.jsxs)(n.MenuGroup, {
                        children: [r, E, (0, C.default)(t)]
                    }, "notifications"), (0, s.jsxs)(n.MenuGroup, {
                        children: [h, m, I, G]
                    }, "admin-actions"), (0, s.jsx)(n.MenuGroup, {
                        children: p
                    }, "developer-actions")]
                })
            }
            var h = (0, u.default)(function(e) {
                let t = (0, r.default)();
                return t ? (0, s.jsx)(A, {
                    ...e
                }) : (0, s.jsx)(U, {
                    ...e
                })
            }, [i.default.CONTEXT_MENU, i.default.CHANNEL_CATEGORY_MENU])
        },
        178261: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return f
                }
            });
            var s = a("37983");
            a("884691");
            var n = a("446674"),
                l = a("77078"),
                u = a("820542"),
                i = a("870691"),
                d = a("42203"),
                r = a("49111"),
                o = a("782340");

            function f(e) {
                let t = (0, n.useStateFromStores)([i.default, d.default], () => {
                    let t = d.default.getMutableBasicGuildChannelsForGuild(e.guild_id),
                        a = Object.values(t).filter(e => e.type === r.ChannelTypes.GUILD_CATEGORY);
                    return 0 === a.length || a.every(e => i.default.isCollapsed(e.id))
                });
                return t ? null : (0, s.jsx)(l.MenuItem, {
                    id: "collapse-all-categories",
                    label: o.default.Messages.COLLAPSE_ALL_CATEGORIES,
                    action: () => (0, u.categoryCollapseAll)(e.guild_id)
                })
            }
        },
        852275: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return r
                }
            });
            var s = a("37983");
            a("884691");
            var n = a("446674"),
                l = a("77078"),
                u = a("820542"),
                i = a("870691"),
                d = a("782340");

            function r(e) {
                let t = (0, n.useStateFromStores)([i.default], () => i.default.isCollapsed(e.id), [e.id]);
                return (0, s.jsx)(l.MenuCheckboxItem, {
                    id: "collapse-category",
                    label: d.default.Messages.COLLAPSE_CATEGORY,
                    action: () => t ? (0, u.categoryExpand)(e.id) : (0, u.categoryCollapse)(e.id),
                    checked: t
                })
            }
        },
        655235: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return i
                }
            });
            var s = a("37983");
            a("884691");
            var n = a("77078"),
                l = a("200008"),
                u = a("782340");

            function i(e) {
                return (0, s.jsx)(n.MenuItem, {
                    id: "delete-channel",
                    label: u.default.Messages.DELETE_CATEGORY,
                    subtext: u.default.Messages.DELETE_CATEGORY_SUBTEXT,
                    color: "danger",
                    action: () => (0, n.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await a.el("575351").then(a.bind(a, "575351"));
                        return a => (0, s.jsx)(t, {
                            ...a,
                            onConfirm: () => {
                                a.onClose(), (0, l.removeFavoriteCategory)(e.id)
                            },
                            channel: e,
                            isFavorites: !0
                        })
                    })
                })
            }
        },
        308798: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return E
                }
            });
            var s = a("37983");
            a("884691");
            var n = a("446674"),
                l = a("77078"),
                u = a("18054"),
                i = a("819689"),
                d = a("430475"),
                r = a("610730"),
                o = a("271938"),
                f = a("957255"),
                c = a("49111"),
                M = a("782340");

            function E(e) {
                let t = e.isForumPost(),
                    E = (0, n.useStateFromStores)([o.default], () => e.isOwner(o.default.getId()), [e]),
                    {
                        canManageChannel: _,
                        canAccessChannel: N
                    } = (0, n.useStateFromStoresObject)([f.default], () => ({
                        canAccessChannel: f.default.can(e.accessPermissions, e),
                        canManageChannel: f.default.can(e.isThread() ? c.Permissions.MANAGE_THREADS : c.Permissions.MANAGE_CHANNELS, e)
                    }), [e]),
                    g = (0, n.useStateFromStores)([r.default], () => {
                        var t;
                        return null !== (t = r.default.getCount(e.id)) && void 0 !== t ? t : 0
                    }, [e.id]),
                    {
                        firstMessage: S
                    } = (0, n.useStateFromStores)([d.default], () => d.default.getMessage(e.id), [e.id]),
                    L = t && (_ || E && g < 1),
                    T = t && E && !_ && g > 0 && null != S;
                return N && (_ || L || T) ? (0, s.jsx)(l.MenuItem, {
                    id: "delete-channel",
                    label: (() => {
                        if (e.type === c.ChannelTypes.GUILD_CATEGORY) return M.default.Messages.DELETE_CATEGORY;
                        if (e.isForumPost()) return L ? M.default.Messages.DELETE_FORUM_POST : M.default.Messages.DELETE_MESSAGE;
                        if (e.isThread()) return M.default.Messages.DELETE_THREAD;
                        return M.default.Messages.DELETE_CHANNEL
                    })(),
                    color: "danger",
                    action: () => (0, l.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await a.el("575351").then(a.bind(a, "575351"));
                        return a => (0, s.jsx)(t, {
                            ...a,
                            onConfirm: () => {
                                a.onClose(), T ? i.default.deleteMessage(e.id, e.id) : u.default.deleteChannel(e.id)
                            },
                            channel: e
                        })
                    })
                }) : null
            }
        },
        531674: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                getMuteTimes: function() {
                    return N
                },
                default: function() {
                    return S
                }
            }), a("222007");
            var s = a("37983");
            a("884691");
            var n = a("866227"),
                l = a.n(n),
                u = a("446674"),
                i = a("77078"),
                d = a("820542"),
                r = a("519705"),
                o = a("319165"),
                f = a("282109"),
                c = a("679653"),
                M = a("49111"),
                E = a("468200"),
                _ = a("782340");
            let N = () => [{
                    value: E.MuteUntilSeconds.MINUTES_15,
                    label: _.default.Messages.MUTE_DURATION_15_MINUTES
                }, {
                    value: E.MuteUntilSeconds.HOURS_1,
                    label: _.default.Messages.MUTE_DURATION_1_HOUR
                }, {
                    value: E.MuteUntilSeconds.HOURS_3,
                    label: _.default.Messages.MUTE_DURATION_3_HOURS
                }, {
                    value: E.MuteUntilSeconds.HOURS_8,
                    label: _.default.Messages.MUTE_DURATION_8_HOURS
                }, {
                    value: E.MuteUntilSeconds.HOURS_24,
                    label: _.default.Messages.MUTE_DURATION_24_HOURS
                }, {
                    value: E.MuteUntilSeconds.ALWAYS,
                    label: _.default.Messages.MUTE_DURATION_ALWAYS
                }],
                g = e => {
                    let t = e > 0 ? l().add(e, "second").toISOString() : null;
                    return {
                        muted: !0,
                        mute_config: {
                            selected_time_window: e,
                            end_time: t
                        }
                    }
                };

            function S(e, t) {
                let [a, n] = (0, u.useStateFromStoresArray)([f.default], () => [f.default.isChannelMuted(e.guild_id, e.id), f.default.getChannelMuteConfig(e.guild_id, e.id)]), l = (0, o.useMutedUntilText)(n), E = (0, c.default)(e, !0);

                function S(t) {
                    t && e.type === M.ChannelTypes.GUILD_CATEGORY && (0, d.categoryCollapse)(e.id), r.default.updateChannelOverrideSettings(e.guild_id, e.id, {
                        muted: t
                    })
                }
                let L = _.default.Messages.MUTE_CHANNEL_GENERIC,
                    T = _.default.Messages.UNMUTE_CHANNEL_GENERIC;
                switch (e.type) {
                    case M.ChannelTypes.GUILD_CATEGORY:
                        L = _.default.Messages.MUTE_CATEGORY, T = _.default.Messages.UNMUTE_CATEGORY;
                        break;
                    case M.ChannelTypes.GROUP_DM:
                        L = _.default.Messages.MUTE_CONVERSATION, T = _.default.Messages.UNMUTE_CONVERSATION;
                        break;
                    case M.ChannelTypes.DM:
                        L = _.default.Messages.MUTE_CHANNEL.format({
                            name: E
                        }), T = _.default.Messages.UNMUTE_CHANNEL.format({
                            name: E
                        });
                        break;
                    default:
                        L = _.default.Messages.MUTE_CHANNEL_GENERIC, T = _.default.Messages.UNMUTE_CHANNEL_GENERIC
                }
                return a ? (0, s.jsx)(i.MenuItem, {
                    id: "unmute-channel",
                    label: T,
                    subtext: l,
                    action: () => S(!1)
                }) : (0, s.jsx)(i.MenuItem, {
                    id: "mute-channel",
                    label: L,
                    action: () => S(!0),
                    children: N().map(a => {
                        let {
                            value: n,
                            label: l
                        } = a;
                        return (0, s.jsx)(i.MenuItem, {
                            id: "".concat(n),
                            label: l,
                            action: () => (function(a) {
                                e.type === M.ChannelTypes.GUILD_CATEGORY && (0, d.categoryCollapse)(e.id);
                                let s = g(a);
                                r.default.updateChannelOverrideSettings(e.guild_id, e.id, s, t)
                            })(n)
                        }, n)
                    })
                })
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
            var s = a("37983");
            a("884691");
            var n = a("446674"),
                l = a("77078"),
                u = a("519705"),
                i = a("282109"),
                d = a("49111"),
                r = a("782340");

            function o(e) {
                var t, a;
                switch (e.type) {
                    case d.ChannelTypes.GUILD_VOICE:
                        return null;
                    case d.ChannelTypes.GUILD_STAGE_VOICE:
                        ;
                        return t = e, [{
                            setting: d.UserNotificationSettings.NULL,
                            label: null != t.parent_id ? r.default.Messages.FORM_LABEL_DEFAULT_CATEGORY : r.default.Messages.FORM_LABEL_DEFAULT
                        }, {
                            setting: d.UserNotificationSettings.ONLY_MENTIONS,
                            label: r.default.Messages.FORM_LABEL_LIVE_STAGES_ONLY
                        }, {
                            setting: d.UserNotificationSettings.NO_MESSAGES,
                            label: r.default.Messages.FORM_LABEL_NOTHING
                        }];
                    default:
                        ;
                        return a = e, [{
                            setting: d.UserNotificationSettings.NULL,
                            label: null != a.parent_id ? r.default.Messages.FORM_LABEL_DEFAULT_CATEGORY : r.default.Messages.FORM_LABEL_DEFAULT
                        }, {
                            setting: d.UserNotificationSettings.ALL_MESSAGES,
                            label: r.default.Messages.FORM_LABEL_ALL_MESSAGES
                        }, {
                            setting: d.UserNotificationSettings.ONLY_MENTIONS,
                            label: r.default.Messages.FORM_LABEL_ONLY_MENTIONS.format()
                        }, {
                            setting: d.UserNotificationSettings.NO_MESSAGES,
                            label: r.default.Messages.FORM_LABEL_NOTHING
                        }]
                }
            }

            function f(e) {
                let t = e.getGuildId(),
                    a = e.id,
                    f = (0, n.useStateFromStores)([i.default], () => i.default.getChannelOverrides(t)[a], [t, a]),
                    c = (0, n.useStateFromStores)([i.default], () => {
                        let a = d.UserNotificationSettings.NULL;
                        return null != e.parent_id && (a = i.default.getChannelMessageNotifications(t, e.parent_id)), a !== d.UserNotificationSettings.NULL ? a : i.default.getMessageNotifications(t)
                    }, [t, e.parent_id]),
                    M = (0, n.useStateFromStores)([i.default], () => i.default.getNewForumThreadsCreated(e)),
                    E = null == f ? d.UserNotificationSettings.NULL : f.message_notifications,
                    _ = o(e);
                return null == _ ? null : (0, s.jsxs)(s.Fragment, {
                    children: [e.isForumLikeChannel() ? (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)(l.MenuCheckboxItem, {
                            id: "new-forum-threads-created",
                            label: r.default.Messages.FORUM_NEW_POSTS_CREATED,
                            checked: M,
                            action: () => u.default.setForumThreadsCreated(e, !M)
                        }), (0, s.jsx)(l.MenuSeparator, {})]
                    }) : null, _.map(e => {
                        let {
                            setting: n,
                            label: i
                        } = e;
                        return (0, s.jsx)(l.MenuRadioItem, {
                            group: "channel-notifications",
                            id: "".concat(n),
                            label: i,
                            subtext: n === d.UserNotificationSettings.NULL ? function(e) {
                                switch (e) {
                                    case d.UserNotificationSettings.ALL_MESSAGES:
                                        return r.default.Messages.FORM_LABEL_ALL_MESSAGES;
                                    case d.UserNotificationSettings.ONLY_MENTIONS:
                                        return r.default.Messages.FORM_LABEL_ONLY_MENTIONS.format();
                                    case d.UserNotificationSettings.NO_MESSAGES:
                                        return r.default.Messages.FORM_LABEL_NOTHING;
                                    case d.UserNotificationSettings.NULL:
                                    default:
                                        return
                                }
                            }(c) : void 0,
                            action: () => {
                                var e;
                                return e = n, void(null != t && u.default.updateChannelOverrideSettings(t, a, {
                                    message_notifications: e
                                }))
                            },
                            checked: n === E
                        }, n)
                    })]
                })
            }

            function c(e) {
                var t, a;
                let u = f(e),
                    c = (0, n.useStateFromStores)([i.default], () => i.default.resolvedMessageNotifications(e), [e]),
                    M = (0, n.useStateFromStores)([i.default], () => i.default.getChannelOverrides(e.guild_id)[e.id], [e.guild_id, e.id]),
                    E = null == M ? d.UserNotificationSettings.NULL : M.message_notifications,
                    _ = E === d.UserNotificationSettings.NULL && e.isGuildStageVoice() ? r.default.Messages.FORM_LABEL_ONLY_MENTIONS.format() : null === (a = o(e)) || void 0 === a ? void 0 : null === (t = a.find(e => {
                        let {
                            setting: t
                        } = e;
                        return t === c
                    })) || void 0 === t ? void 0 : t.label;
                return null != u ? (0, s.jsx)(l.MenuItem, {
                    id: "channel-notifications",
                    label: r.default.Messages.NOTIFICATION_SETTINGS,
                    subtext: _,
                    children: u
                }) : null
            }
        }
    }
]);