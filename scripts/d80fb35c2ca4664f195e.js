(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["63930"], {
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
                s = n("272030"),
                l = n("158534"),
                r = n("812204"),
                u = n("861370"),
                o = n("20209"),
                d = n("390008"),
                f = n("178261"),
                c = n("852275"),
                E = n("963150"),
                g = n("655235"),
                S = n("308798"),
                _ = n("47006"),
                N = n("44141"),
                C = n("531674"),
                L = n("619436"),
                M = n("339876"),
                A = n("809937"),
                h = n("782340");

            function v(e) {
                let {
                    channel: t,
                    onSelect: n
                } = e, l = (0, N.default)(t), r = (0, C.default)(t), o = (0, L.default)(t), E = (0, c.default)(t), S = (0, f.default)(t), _ = (0, d.default)(t), M = (0, g.default)(t), A = (0, u.default)({
                    id: t.id,
                    label: h.default.Messages.COPY_ID_CHANNEL
                });
                return (0, a.jsxs)(i.Menu, {
                    navId: "channel-context",
                    onClose: s.closeContextMenu,
                    "aria-label": h.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
                    onSelect: n,
                    children: [(0, a.jsx)(i.MenuGroup, {
                        children: l
                    }), (0, a.jsxs)(i.MenuGroup, {
                        children: [r, o]
                    }), (0, a.jsxs)(i.MenuGroup, {
                        children: [E, S, _]
                    }), (0, a.jsx)(i.MenuGroup, {
                        children: M
                    }), (0, a.jsx)(i.MenuGroup, {
                        children: A
                    })]
                })
            }

            function O(e) {
                let {
                    channel: t,
                    guild: n,
                    onSelect: l
                } = e, r = (0, N.default)(t), o = (0, C.default)(t), g = (0, L.default)(t), v = (0, c.default)(t), O = (0, f.default)(t), p = (0, _.default)(t), T = (0, d.default)(t), F = (0, E.default)(t, n), U = (0, S.default)(t), m = (0, u.default)({
                    id: t.id,
                    label: h.default.Messages.COPY_ID_CHANNEL
                }), I = (0, M.default)(t), G = (0, A.default)(t);
                return (0, a.jsxs)(i.Menu, {
                    navId: "channel-context",
                    onClose: s.closeContextMenu,
                    "aria-label": h.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
                    onSelect: l,
                    children: [(0, a.jsx)(i.MenuGroup, {
                        children: r
                    }, "mark-as-read"), (0, a.jsxs)(i.MenuGroup, {
                        children: [I, v, O]
                    }, "channel-actions"), (0, a.jsxs)(i.MenuGroup, {
                        children: [o, g, G]
                    }, "notifications"), (0, a.jsxs)(i.MenuGroup, {
                        children: [p, T, F, U]
                    }, "admin-actions"), (0, a.jsx)(i.MenuGroup, {
                        children: m
                    }, "developer-actions")]
                })
            }
            var p = (0, l.default)(function(e) {
                let t = (0, o.default)();
                return t ? (0, a.jsx)(v, {
                    ...e
                }) : (0, a.jsx)(O, {
                    ...e
                })
            }, [r.default.CONTEXT_MENU, r.default.CHANNEL_CATEGORY_MENU])
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
                r = n("870691"),
                u = n("42203"),
                o = n("49111"),
                d = n("782340");

            function f(e) {
                let t = (0, i.useStateFromStores)([r.default, u.default], () => {
                    let t = u.default.getMutableBasicGuildChannelsForGuild(e.guild_id),
                        n = Object.values(t).filter(e => e.type === o.ChannelTypes.GUILD_CATEGORY);
                    return 0 === n.length || n.every(e => r.default.isCollapsed(e.id))
                });
                return t ? null : (0, a.jsx)(s.MenuItem, {
                    id: "collapse-all-categories",
                    label: d.default.Messages.COLLAPSE_ALL_CATEGORIES,
                    action: () => (0, l.categoryCollapseAll)(e.guild_id)
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
                s = n("77078"),
                l = n("820542"),
                r = n("870691"),
                u = n("782340");

            function o(e) {
                let t = (0, i.useStateFromStores)([r.default], () => r.default.isCollapsed(e.id), [e.id]);
                return (0, a.jsx)(s.MenuCheckboxItem, {
                    id: "collapse-category",
                    label: u.default.Messages.COLLAPSE_CATEGORY,
                    action: () => t ? (0, l.categoryExpand)(e.id) : (0, l.categoryCollapse)(e.id),
                    checked: t
                })
            }
        },
        655235: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("77078"),
                s = n("200008"),
                l = n("782340");

            function r(e) {
                return (0, a.jsx)(i.MenuItem, {
                    id: "delete-channel",
                    label: l.default.Messages.DELETE_CATEGORY,
                    color: "danger",
                    action: () => (0, i.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("575351").then(n.bind(n, "575351"));
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
                    return g
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("446674"),
                s = n("77078"),
                l = n("18054"),
                r = n("819689"),
                u = n("430475"),
                o = n("610730"),
                d = n("271938"),
                f = n("957255"),
                c = n("49111"),
                E = n("782340");

            function g(e) {
                let t = e.isForumPost(),
                    g = (0, i.useStateFromStores)([d.default], () => e.isOwner(d.default.getId()), [e]),
                    {
                        canManageChannel: S,
                        canAccessChannel: _
                    } = (0, i.useStateFromStoresObject)([f.default], () => ({
                        canAccessChannel: f.default.can(e.accessPermissions, e),
                        canManageChannel: f.default.can(e.isThread() ? c.Permissions.MANAGE_THREADS : c.Permissions.MANAGE_CHANNELS, e)
                    }), [e]),
                    N = (0, i.useStateFromStores)([o.default], () => {
                        var t;
                        return null !== (t = o.default.getCount(e.id)) && void 0 !== t ? t : 0
                    }, [e.id]),
                    {
                        firstMessage: C
                    } = (0, i.useStateFromStores)([u.default], () => u.default.getMessage(e.id), [e.id]),
                    L = t && (S || g && N < 1),
                    M = t && g && !S && N > 0 && null != C;
                return _ && (S || L || M) ? (0, a.jsx)(s.MenuItem, {
                    id: "delete-channel",
                    label: (() => {
                        if (e.type === c.ChannelTypes.GUILD_CATEGORY) return E.default.Messages.DELETE_CATEGORY;
                        if (e.isForumPost()) return L ? E.default.Messages.DELETE_FORUM_POST : E.default.Messages.DELETE_MESSAGE;
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
                                n.onClose(), M ? r.default.deleteMessage(e.id, e.id) : l.default.deleteChannel(e.id)
                            },
                            channel: e
                        })
                    })
                }) : null
            }
        },
        619436: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useChannelNotificationRadioItems: function() {
                    return f
                },
                default: function() {
                    return c
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("446674"),
                s = n("77078"),
                l = n("519705"),
                r = n("282109"),
                u = n("49111"),
                o = n("782340");

            function d(e) {
                var t, n;
                switch (e.type) {
                    case u.ChannelTypes.GUILD_VOICE:
                        return null;
                    case u.ChannelTypes.GUILD_STAGE_VOICE:
                        ;
                        return t = e, [{
                            setting: u.UserNotificationSettings.NULL,
                            label: null != t.parent_id ? o.default.Messages.FORM_LABEL_DEFAULT_CATEGORY : o.default.Messages.FORM_LABEL_DEFAULT
                        }, {
                            setting: u.UserNotificationSettings.ONLY_MENTIONS,
                            label: o.default.Messages.FORM_LABEL_LIVE_STAGES_ONLY
                        }, {
                            setting: u.UserNotificationSettings.NO_MESSAGES,
                            label: o.default.Messages.FORM_LABEL_NOTHING
                        }];
                    default:
                        ;
                        return n = e, [{
                            setting: u.UserNotificationSettings.NULL,
                            label: null != n.parent_id ? o.default.Messages.FORM_LABEL_DEFAULT_CATEGORY : o.default.Messages.FORM_LABEL_DEFAULT
                        }, {
                            setting: u.UserNotificationSettings.ALL_MESSAGES,
                            label: o.default.Messages.FORM_LABEL_ALL_MESSAGES
                        }, {
                            setting: u.UserNotificationSettings.ONLY_MENTIONS,
                            label: o.default.Messages.FORM_LABEL_ONLY_MENTIONS.format()
                        }, {
                            setting: u.UserNotificationSettings.NO_MESSAGES,
                            label: o.default.Messages.FORM_LABEL_NOTHING
                        }]
                }
            }

            function f(e) {
                let t = e.getGuildId(),
                    n = e.id,
                    f = (0, i.useStateFromStores)([r.default], () => r.default.getChannelOverrides(t)[n], [t, n]),
                    c = (0, i.useStateFromStores)([r.default], () => {
                        let n = u.UserNotificationSettings.NULL;
                        return null != e.parent_id && (n = r.default.getChannelMessageNotifications(t, e.parent_id)), n !== u.UserNotificationSettings.NULL ? n : r.default.getMessageNotifications(t)
                    }, [t, e.parent_id]),
                    E = (0, i.useStateFromStores)([r.default], () => r.default.getNewForumThreadsCreated(e)),
                    g = null == f ? u.UserNotificationSettings.NULL : f.message_notifications,
                    S = d(e);
                return null == S ? null : (0, a.jsxs)(a.Fragment, {
                    children: [e.isForumLikeChannel() ? (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(s.MenuCheckboxItem, {
                            id: "new-forum-threads-created",
                            label: o.default.Messages.FORUM_NEW_POSTS_CREATED,
                            checked: E,
                            action: () => l.default.setForumThreadsCreated(e, !E)
                        }), (0, a.jsx)(s.MenuSeparator, {})]
                    }) : null, S.map(e => {
                        let {
                            setting: i,
                            label: r
                        } = e;
                        return (0, a.jsx)(s.MenuRadioItem, {
                            group: "channel-notifications",
                            id: "".concat(i),
                            label: r,
                            subtext: i === u.UserNotificationSettings.NULL ? function(e) {
                                switch (e) {
                                    case u.UserNotificationSettings.ALL_MESSAGES:
                                        return o.default.Messages.FORM_LABEL_ALL_MESSAGES;
                                    case u.UserNotificationSettings.ONLY_MENTIONS:
                                        return o.default.Messages.FORM_LABEL_ONLY_MENTIONS.format();
                                    case u.UserNotificationSettings.NO_MESSAGES:
                                        return o.default.Messages.FORM_LABEL_NOTHING;
                                    case u.UserNotificationSettings.NULL:
                                    default:
                                        return
                                }
                            }(c) : void 0,
                            action: () => {
                                var e;
                                return e = i, void(null != t && l.default.updateChannelOverrideSettings(t, n, {
                                    message_notifications: e
                                }))
                            },
                            checked: i === g
                        }, i)
                    })]
                })
            }

            function c(e) {
                var t, n;
                let l = f(e),
                    c = (0, i.useStateFromStores)([r.default], () => r.default.resolvedMessageNotifications(e), [e]),
                    E = (0, i.useStateFromStores)([r.default], () => r.default.getChannelOverrides(e.guild_id)[e.id], [e.guild_id, e.id]),
                    g = null == E ? u.UserNotificationSettings.NULL : E.message_notifications,
                    S = g === u.UserNotificationSettings.NULL && e.isGuildStageVoice() ? o.default.Messages.FORM_LABEL_ONLY_MENTIONS.format() : null === (n = d(e)) || void 0 === n ? void 0 : null === (t = n.find(e => {
                        let {
                            setting: t
                        } = e;
                        return t === c
                    })) || void 0 === t ? void 0 : t.label;
                return null != l ? (0, a.jsx)(s.MenuItem, {
                    id: "channel-notifications",
                    label: o.default.Messages.NOTIFICATION_SETTINGS,
                    subtext: S,
                    children: l
                }) : null
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
                    return g
                },
                addFavoriteCategory: function() {
                    return S
                },
                removeFavoriteCategory: function() {
                    return _
                },
                updateFavoriteChannels: function() {
                    return N
                },
                toggleFavoriteServerMuted: function() {
                    return C
                }
            }), n("222007");
            var a = n("249654"),
                i = n("151426"),
                s = n("872173"),
                l = n("42203"),
                r = n("957255"),
                u = n("379881"),
                o = n("843455");

            function d() {
                let e = u.default.getFavoriteChannels(),
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
                    if (null == a || !a.isPrivate() && !r.default.can(o.Permissions.VIEW_CHANNEL, a)) {
                        delete e[t];
                        continue
                    }
                }
            }

            function c(e, t) {
                let n = u.default.isFavorite(e);
                !n && s.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    n.favoriteChannels[e] = i.FavoriteChannel.create({
                        nickname: "",
                        type: i.FavoriteChannelType.REFERENCE_ORIGINAL,
                        position: d(),
                        parentId: null != t ? t : "0"
                    }), f(n.favoriteChannels)
                }, s.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function E(e) {
                let t = u.default.getFavorite(e);
                null != t && s.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    if (delete n.favoriteChannels[e], t.type === i.FavoriteChannelType.CATEGORY)
                        for (let t in n.favoriteChannels) n.favoriteChannels[t].parentId === e && (n.favoriteChannels[t].parentId = "0");
                    f(n.favoriteChannels)
                }, s.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function g(e, t) {
                let n = u.default.isFavorite(e);
                n && s.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    n.favoriteChannels[e].nickname = null != t ? t : ""
                }, s.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function S(e) {
                let t = a.default.fromTimestamp(Date.now());
                s.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    n.favoriteChannels[t] = i.FavoriteChannel.create({
                        nickname: e,
                        type: i.FavoriteChannelType.CATEGORY,
                        position: d(),
                        parentId: "0"
                    })
                }, s.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function _(e) {
                E(e)
            }

            function N(e) {
                s.PreloadedUserSettingsActionCreators.updateAsync("favorites", t => {
                    for (let a of e)
                        if (null != a.position && (t.favoriteChannels[a.id].position = a.position), void 0 !== a.parent_id) {
                            var n;
                            t.favoriteChannels[a.id].parentId = null !== (n = a.parent_id) && void 0 !== n ? n : "0"
                        }
                }, s.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function C() {
                s.PreloadedUserSettingsActionCreators.updateAsync("favorites", e => {
                    e.muted = !e.muted
                }, s.UserSettingsDelay.INFREQUENT_USER_ACTION)
            }
        }
    }
]);