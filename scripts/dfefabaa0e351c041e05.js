(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["63930"], {
        820542: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                categoryCollapse: function() {
                    return a
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
            var i = n("913144");

            function a(e) {
                i.default.dispatch({
                    type: "CATEGORY_COLLAPSE",
                    id: e
                })
            }

            function s(e) {
                i.default.dispatch({
                    type: "CATEGORY_EXPAND",
                    id: e
                })
            }

            function l(e) {
                i.default.dispatch({
                    type: "CATEGORY_COLLAPSE_ALL",
                    guildId: e
                })
            }

            function u(e) {
                i.default.dispatch({
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
            var i = n("37983");
            n("884691");
            var a = n("685665");

            function s(e, t) {
                return function(n) {
                    let {
                        AnalyticsLocationProvider: s
                    } = (0, a.default)(t);
                    return (0, i.jsx)(s, {
                        children: (0, i.jsx)(e, {
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
                    return U
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("77078"),
                s = n("272030"),
                l = n("158534"),
                u = n("812204"),
                r = n("861370"),
                o = n("20209"),
                d = n("390008"),
                f = n("47495"),
                c = n("178261"),
                _ = n("852275"),
                S = n("963150"),
                g = n("308798"),
                E = n("47006"),
                N = n("44141"),
                M = n("531674"),
                A = n("619436"),
                T = n("625399"),
                O = n("339876"),
                C = n("295189"),
                h = n("782340");

            function L(e) {
                let {
                    channel: t,
                    onSelect: n
                } = e, l = (0, N.default)(t), u = (0, M.default)(t), o = (0, A.default)(t), S = (0, _.default)(t), g = (0, c.default)(t), E = (0, d.default)(t), O = (0, C.default)(t), L = (0, r.default)({
                    id: t.id,
                    label: h.default.Messages.COPY_ID_CHANNEL
                }), I = (0, f.useShouldUseNewNotificationSystem)("ChannelCategoryFavoritesMenu"), U = (0, T.default)(t);
                return (0, i.jsxs)(a.Menu, {
                    navId: "channel-context",
                    onClose: s.closeContextMenu,
                    "aria-label": h.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
                    onSelect: n,
                    children: [(0, i.jsx)(a.MenuGroup, {
                        children: l
                    }), (0, i.jsxs)(a.MenuGroup, {
                        children: [u, I ? U : o]
                    }), (0, i.jsxs)(a.MenuGroup, {
                        children: [S, g, E]
                    }), (0, i.jsx)(a.MenuGroup, {
                        children: O
                    }), (0, i.jsx)(a.MenuGroup, {
                        children: L
                    })]
                })
            }

            function I(e) {
                let {
                    channel: t,
                    guild: n,
                    onSelect: l
                } = e, u = (0, N.default)(t), o = (0, M.default)(t), C = (0, A.default)(t), L = (0, _.default)(t), I = (0, c.default)(t), U = (0, E.default)(t), p = (0, d.default)(t), v = (0, S.default)(t, n), m = (0, g.default)(t), R = (0, r.default)({
                    id: t.id,
                    label: h.default.Messages.COPY_ID_CHANNEL
                }), F = (0, O.default)(t), G = (0, f.useShouldUseNewNotificationSystem)("ChannelCategoryNormalMenu"), y = (0, T.default)(t);
                return (0, i.jsxs)(a.Menu, {
                    navId: "channel-context",
                    onClose: s.closeContextMenu,
                    "aria-label": h.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
                    onSelect: l,
                    children: [(0, i.jsx)(a.MenuGroup, {
                        children: u
                    }, "mark-as-read"), (0, i.jsxs)(a.MenuGroup, {
                        children: [F, L, I]
                    }, "channel-actions"), (0, i.jsxs)(a.MenuGroup, {
                        children: [o, G ? y : C]
                    }, "notifications"), (0, i.jsxs)(a.MenuGroup, {
                        children: [U, p, v, m]
                    }, "admin-actions"), (0, i.jsx)(a.MenuGroup, {
                        children: R
                    }, "developer-actions")]
                })
            }
            var U = (0, l.default)(function(e) {
                let t = (0, o.default)();
                return t ? (0, i.jsx)(L, {
                    ...e
                }) : (0, i.jsx)(I, {
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
            var i = n("37983");
            n("884691");
            var a = n("446674"),
                s = n("77078"),
                l = n("820542"),
                u = n("870691"),
                r = n("42203"),
                o = n("49111"),
                d = n("782340");

            function f(e) {
                let t = (0, a.useStateFromStores)([u.default, r.default], () => {
                    let t = r.default.getMutableBasicGuildChannelsForGuild(e.guild_id),
                        n = Object.values(t).filter(e => e.type === o.ChannelTypes.GUILD_CATEGORY);
                    return 0 === n.length || n.every(e => u.default.isCollapsed(e.id))
                });
                return t ? null : (0, i.jsx)(s.MenuItem, {
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
            var i = n("37983");
            n("884691");
            var a = n("446674"),
                s = n("77078"),
                l = n("820542"),
                u = n("870691"),
                r = n("782340");

            function o(e) {
                let t = (0, a.useStateFromStores)([u.default], () => u.default.isCollapsed(e.id), [e.id]);
                return (0, i.jsx)(s.MenuCheckboxItem, {
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
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("446674"),
                s = n("77078"),
                l = n("957255"),
                u = n("49111"),
                r = n("782340");

            function o(e, t) {
                let o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e.type,
                    d = (0, a.useStateFromStores)([l.default], () => l.default.can(u.Permissions.MANAGE_CHANNELS, e), [e]);
                if (__OVERLAY__ || !d) return null;
                let f = () => {
                    (0, s.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("581354").then(n.bind(n, "581354"));
                        return n => (0, i.jsx)(t, {
                            ...n,
                            channelType: o,
                            guildId: e.guild_id,
                            categoryId: e.parent_id
                        })
                    })
                };
                switch (o) {
                    case u.ChannelTypes.GUILD_TEXT:
                        return (0, i.jsx)(s.MenuItem, {
                            id: "create-text-channel",
                            label: r.default.Messages.CREATE_TEXT_CHANNEL,
                            action: f
                        });
                    case u.ChannelTypes.GUILD_VOICE:
                        return (0, i.jsx)(s.MenuItem, {
                            id: "create-voice-channel",
                            label: r.default.Messages.CREATE_VOICE_CHANNEL,
                            action: f
                        });
                    default:
                        return null
                }
            }
        },
        308798: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("446674"),
                s = n("77078"),
                l = n("18054"),
                u = n("819689"),
                r = n("430475"),
                o = n("610730"),
                d = n("271938"),
                f = n("957255"),
                c = n("49111"),
                _ = n("782340");

            function S(e) {
                let t = e.isForumPost(),
                    S = (0, a.useStateFromStores)([d.default], () => e.isOwner(d.default.getId()), [e]),
                    {
                        canManageChannel: g,
                        canAccessChannel: E
                    } = (0, a.useStateFromStoresObject)([f.default], () => ({
                        canAccessChannel: f.default.can(e.accessPermissions, e),
                        canManageChannel: f.default.can(e.isThread() ? c.Permissions.MANAGE_THREADS : c.Permissions.MANAGE_CHANNELS, e)
                    }), [e]),
                    N = (0, a.useStateFromStores)([o.default], () => {
                        var t;
                        return null !== (t = o.default.getCount(e.id)) && void 0 !== t ? t : 0
                    }, [e.id]),
                    {
                        firstMessage: M
                    } = (0, a.useStateFromStores)([r.default], () => r.default.getMessage(e.id), [e.id]),
                    A = t && (g || S && N < 1),
                    T = t && S && !g && N > 0 && null != M;
                return E && (g || A || T) ? (0, i.jsx)(s.MenuItem, {
                    id: "delete-channel",
                    label: (() => {
                        if (e.type === c.ChannelTypes.GUILD_CATEGORY) return _.default.Messages.DELETE_CATEGORY;
                        if (e.isForumPost()) return A ? _.default.Messages.DELETE_FORUM_POST : _.default.Messages.DELETE_MESSAGE;
                        if (e.isThread()) return _.default.Messages.DELETE_THREAD;
                        return _.default.Messages.DELETE_CHANNEL
                    })(),
                    color: "danger",
                    action: () => (0, s.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("575351").then(n.bind(n, "575351"));
                        return n => (0, i.jsx)(t, {
                            ...n,
                            onConfirm: () => {
                                n.onClose(), T ? u.default.deleteMessage(e.id, e.id) : l.default.deleteChannel(e.id)
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
                    return d
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("446674"),
                s = n("77078"),
                l = n("18054"),
                u = n("957255"),
                r = n("49111"),
                o = n("782340");

            function d(e) {
                let {
                    canManageChannels: t,
                    canManageRoles: n,
                    canManageWebhooks: d,
                    canAccessChannel: f
                } = (0, a.useStateFromStoresObject)([u.default], () => ({
                    canManageChannels: u.default.can(r.Permissions.MANAGE_CHANNELS, e),
                    canManageRoles: u.default.can(r.Permissions.MANAGE_ROLES, e),
                    canManageWebhooks: u.default.can(r.Permissions.MANAGE_WEBHOOKS, e),
                    canAccessChannel: u.default.can(e.accessPermissions, e)
                }), [e]);
                return !__OVERLAY__ && f && (t || n || d) ? (0, i.jsx)(s.MenuItem, {
                    id: "edit-channel",
                    label: e.type === r.ChannelTypes.GUILD_CATEGORY ? o.default.Messages.EDIT_CATEGORY : o.default.Messages.EDIT_CHANNEL,
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
            var i = n("37983");
            n("884691");
            var a = n("446674"),
                s = n("77078"),
                l = n("267363"),
                u = n("680986"),
                r = n("689275"),
                o = n("755624"),
                d = n("233069"),
                f = n("245997"),
                c = n("660478"),
                _ = n("49111"),
                S = n("782340");

            function g(e) {
                let t = function(e) {
                    let t = (0, u.useUnreadThreadsCountForParent)(e.guild_id, e.id),
                        n = (0, a.useStateFromStores)([c.default, f.default, r.default, o.default], () => {
                            if (e.isForumPost()) return c.default.isForumPostUnread(e.id);
                            if (e.type !== _.ChannelTypes.GUILD_CATEGORY) return c.default.hasUnread(e.id);
                            {
                                let t = f.default.getCategories(e.getGuildId());
                                if (null == t[e.id]) return !1;
                                let n = t[e.id].some(e => {
                                    let {
                                        channel: t
                                    } = e;
                                    return (0, d.isReadableType)(t.type) && c.default.hasUnread(t.id)
                                });
                                if (n) return !0;
                                let i = new Set(t[e.id].map(e => e.channel.id)),
                                    a = r.default.getThreadsForGuild(e.guild_id);
                                for (let e in a)
                                    if (i.has(e)) {
                                        for (let t in a[e])
                                            if (o.default.hasJoined(t) && !o.default.isMuted(t) && c.default.hasUnread(t)) return !0
                                    } return !1
                            }
                        }, [e]);
                    return e.isForumLikeChannel() ? t > 0 : n
                }(e);
                return (0, i.jsx)(s.MenuItem, {
                    id: "mark-channel-read",
                    label: S.default.Messages.MARK_AS_READ,
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
                    return A
                }
            }), n("222007");
            var i = n("37983");
            n("884691");
            var a = n("866227"),
                s = n.n(a),
                l = n("446674"),
                u = n("77078"),
                r = n("820542"),
                o = n("519705"),
                d = n("319165"),
                f = n("282109"),
                c = n("34676"),
                _ = n("679653"),
                S = n("49111"),
                g = n("468200"),
                E = n("782340");
            let N = () => [{
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
                M = e => {
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
                let [n, a] = (0, l.useStateFromStoresArray)([f.default], () => [f.default.isChannelMuted(e.guild_id, e.id), f.default.getChannelMuteConfig(e.guild_id, e.id)]), s = (0, d.useMutedUntilText)(a), g = (0, _.default)(e, !0);

                function A(t) {
                    t && e.type === S.ChannelTypes.GUILD_CATEGORY && (0, r.categoryCollapse)(e.id), o.default.updateChannelOverrideSettings(e.guild_id, e.id, {
                        muted: t
                    }, c.NotificationLabel.muted(t))
                }
                let T = E.default.Messages.MUTE_CHANNEL_GENERIC,
                    O = E.default.Messages.UNMUTE_CHANNEL_GENERIC;
                switch (e.type) {
                    case S.ChannelTypes.GUILD_CATEGORY:
                        T = E.default.Messages.MUTE_CATEGORY, O = E.default.Messages.UNMUTE_CATEGORY;
                        break;
                    case S.ChannelTypes.GROUP_DM:
                        T = E.default.Messages.MUTE_CONVERSATION, O = E.default.Messages.UNMUTE_CONVERSATION;
                        break;
                    case S.ChannelTypes.DM:
                        T = E.default.Messages.MUTE_CHANNEL.format({
                            name: g
                        }), O = E.default.Messages.UNMUTE_CHANNEL.format({
                            name: g
                        });
                        break;
                    default:
                        T = E.default.Messages.MUTE_CHANNEL_GENERIC, O = E.default.Messages.UNMUTE_CHANNEL_GENERIC
                }
                return n ? (0, i.jsx)(u.MenuItem, {
                    id: "unmute-channel",
                    label: O,
                    subtext: s,
                    action: () => A(!1)
                }) : (0, i.jsx)(u.MenuItem, {
                    id: "mute-channel",
                    label: T,
                    action: () => A(!0),
                    children: N().map(n => {
                        let {
                            value: a,
                            label: s
                        } = n;
                        return (0, i.jsx)(u.MenuItem, {
                            id: "".concat(a),
                            label: s,
                            action: () => (function(n) {
                                e.type === S.ChannelTypes.GUILD_CATEGORY && (0, r.categoryCollapse)(e.id);
                                let i = M(n);
                                o.default.updateChannelOverrideSettings(e.guild_id, e.id, i, c.NotificationLabels.Muted, t)
                            })(a)
                        }, a)
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
                    return S
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("446674"),
                s = n("77078"),
                l = n("519705"),
                u = n("721281"),
                r = n("282109"),
                o = n("34676"),
                d = n("49111"),
                f = n("782340");

            function c(e) {
                var t, n, i;
                let a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                switch (e.type) {
                    case d.ChannelTypes.GUILD_VOICE:
                        ;
                        return a ? (t = e, [{
                            setting: d.UserNotificationSettings.NULL,
                            label: null != t.parent_id ? f.default.Messages.FORM_LABEL_DEFAULT_CATEGORY : f.default.Messages.FORM_LABEL_DEFAULT
                        }, {
                            setting: d.UserNotificationSettings.ALL_MESSAGES,
                            label: f.default.Messages.FORM_LABEL_ALL_VOICE_ACTIVITY
                        }, {
                            setting: d.UserNotificationSettings.ONLY_MENTIONS,
                            label: f.default.Messages.FORM_LABEL_ONLY_TEXT_MENTIONS.format()
                        }, {
                            setting: d.UserNotificationSettings.NO_MESSAGES,
                            label: f.default.Messages.FORM_LABEL_NOTHING
                        }]) : null;
                    case d.ChannelTypes.GUILD_STAGE_VOICE:
                        ;
                        return n = e, [{
                            setting: d.UserNotificationSettings.NULL,
                            label: null != n.parent_id ? f.default.Messages.FORM_LABEL_DEFAULT_CATEGORY : f.default.Messages.FORM_LABEL_DEFAULT
                        }, {
                            setting: d.UserNotificationSettings.ONLY_MENTIONS,
                            label: f.default.Messages.FORM_LABEL_LIVE_STAGES_ONLY
                        }, {
                            setting: d.UserNotificationSettings.NO_MESSAGES,
                            label: f.default.Messages.FORM_LABEL_NOTHING
                        }];
                    default:
                        ;
                        return i = e, [{
                            setting: d.UserNotificationSettings.NULL,
                            label: null != i.parent_id ? f.default.Messages.FORM_LABEL_DEFAULT_CATEGORY : f.default.Messages.FORM_LABEL_DEFAULT
                        }, {
                            setting: d.UserNotificationSettings.ALL_MESSAGES,
                            label: f.default.Messages.FORM_LABEL_ALL_MESSAGES
                        }, {
                            setting: d.UserNotificationSettings.ONLY_MENTIONS,
                            label: f.default.Messages.FORM_LABEL_ONLY_MENTIONS.format()
                        }, {
                            setting: d.UserNotificationSettings.NO_MESSAGES,
                            label: f.default.Messages.FORM_LABEL_NOTHING
                        }]
                }
            }

            function _(e) {
                let t = e.getGuildId(),
                    n = e.id,
                    _ = (0, a.useStateFromStores)([r.default], () => {
                        let n = d.UserNotificationSettings.NULL;
                        return null != e.parent_id && (n = r.default.getChannelMessageNotifications(t, e.parent_id)), n !== d.UserNotificationSettings.NULL ? n : r.default.getMessageNotifications(t)
                    }, [t, e.parent_id]),
                    S = (0, a.useStateFromStores)([r.default], () => r.default.getNewForumThreadsCreated(e)),
                    g = (0, a.useStateFromStores)([r.default], () => r.default.getChannelOverrides(t)[n], [t, n]),
                    E = null == g ? d.UserNotificationSettings.NULL : g.message_notifications,
                    N = (0, u.useVoiceActivityNotificationSettingsExperiment)(e),
                    M = c(e, N);
                return null == M ? null : (0, i.jsxs)(i.Fragment, {
                    children: [e.isForumLikeChannel() ? (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(s.MenuCheckboxItem, {
                            id: "new-forum-threads-created",
                            label: f.default.Messages.FORUM_NEW_POSTS_CREATED,
                            checked: S,
                            action: () => l.default.setForumThreadsCreated(e, !S)
                        }), (0, i.jsx)(s.MenuSeparator, {})]
                    }) : null, M.map(a => {
                        let {
                            setting: u,
                            label: r
                        } = a;
                        return (0, i.jsx)(s.MenuRadioItem, {
                            group: "channel-notifications",
                            id: "".concat(u),
                            label: r,
                            subtext: u === d.UserNotificationSettings.NULL ? function(e, t) {
                                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                                switch (e) {
                                    case d.UserNotificationSettings.ALL_MESSAGES:
                                        return t.type === d.ChannelTypes.GUILD_VOICE && n ? f.default.Messages.FORM_LABEL_ALL_VOICE_ACTIVITY : f.default.Messages.FORM_LABEL_ALL_MESSAGES;
                                    case d.UserNotificationSettings.ONLY_MENTIONS:
                                        return f.default.Messages.FORM_LABEL_ONLY_MENTIONS.format();
                                    case d.UserNotificationSettings.NO_MESSAGES:
                                        return f.default.Messages.FORM_LABEL_NOTHING;
                                    case d.UserNotificationSettings.NULL:
                                    default:
                                        return
                                }
                            }(_, e, N) : void 0,
                            action: () => {
                                var e;
                                return e = u, void(null != t && l.default.updateChannelOverrideSettings(t, n, {
                                    message_notifications: e
                                }, o.NotificationLabel.notifications(e)))
                            },
                            checked: u === E
                        }, u)
                    })]
                })
            }

            function S(e) {
                var t, n;
                let l = _(e),
                    o = (0, a.useStateFromStores)([r.default], () => r.default.resolvedMessageNotifications(e), [e]),
                    S = (0, a.useStateFromStores)([r.default], () => r.default.getChannelOverrides(e.guild_id)[e.id], [e.guild_id, e.id]),
                    g = null == S ? d.UserNotificationSettings.NULL : S.message_notifications,
                    E = (0, u.useVoiceActivityNotificationSettingsExperiment)(e),
                    N = g === d.UserNotificationSettings.NULL && e.isGuildStageVoice() ? f.default.Messages.FORM_LABEL_ONLY_MENTIONS.format() : null === (n = c(e, E)) || void 0 === n ? void 0 : null === (t = n.find(e => {
                        let {
                            setting: t
                        } = e;
                        return t === o
                    })) || void 0 === t ? void 0 : t.label;
                return null != l ? (0, i.jsx)(s.MenuItem, {
                    id: "channel-notifications",
                    label: f.default.Messages.NOTIFICATION_SETTINGS,
                    subtext: N,
                    children: l
                }) : null
            }
        },
        625399: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                },
                useChannelNotificationCustomSettingsItem: function() {
                    return N
                }
            }), n("222007"), n("702976");
            var i = n("37983"),
                a = n("884691"),
                s = n("77078"),
                l = n("519705"),
                u = n("437756"),
                r = n("277796"),
                o = n("507313"),
                d = n("282109"),
                f = n("34676"),
                c = n("49111"),
                _ = n("133335"),
                S = n("397336"),
                g = n("782340");

            function E(e) {
                let t = (0, u.useChannelPresetSettings)(e),
                    n = (0, u.useChannelPresetInheritance)(e),
                    l = t.preset === o.Presets.CUSTOM && !n.inherited,
                    [r, d] = a.useState(l),
                    [f, _] = a.useState(!1),
                    S = f ? o.Presets.CUSTOM : t.preset,
                    E = N(e, () => _(!1));
                if (e.type === c.ChannelTypes.GUILD_VOICE) return null;
                let M = "parent" === n.inheritedFrom ? g.default.Messages.FORM_LABEL_DEFAULT_CATEGORY : g.default.Messages.FORM_LABEL_DEFAULT;
                return e.type === c.ChannelTypes.GUILD_STAGE_VOICE ? (0, i.jsxs)(s.MenuItem, {
                    id: "channel_notification_settings",
                    label: g.default.Messages.NOTIFICATIONS,
                    children: [(0, i.jsx)(s.MenuRadioItem, {
                        id: "cns_default",
                        label: M,
                        checked: n.inherited,
                        group: "channel_notification_settings",
                        subtext: t.notification === c.UserNotificationSettings.NO_MESSAGES ? g.default.Messages.FORM_LABEL_NOTHING : g.default.Messages.FORM_LABEL_LIVE_STAGES_ONLY,
                        action: () => (0, u.updateChannelToGuildDefault)(e.guild_id, e.id)
                    }), (0, i.jsx)(s.MenuRadioItem, {
                        id: "cns_only_mention",
                        group: "channel_notification_settings",
                        checked: !n.inherited && t.notification !== c.UserNotificationSettings.NO_MESSAGES,
                        label: g.default.Messages.FORM_LABEL_LIVE_STAGES_ONLY,
                        action: () => (0, u.updateChannelNotificationSetting)(e.guild_id, e.id, c.UserNotificationSettings.ONLY_MENTIONS)
                    }), (0, i.jsx)(s.MenuRadioItem, {
                        id: "cns_no_message",
                        group: "channel_notification_settings",
                        label: g.default.Messages.FORM_LABEL_NOTHING,
                        checked: !n.inherited && t.notification === c.UserNotificationSettings.NO_MESSAGES,
                        action: () => (0, u.updateChannelNotificationSetting)(e.guild_id, e.id, c.UserNotificationSettings.NO_MESSAGES)
                    })]
                }) : (0, i.jsxs)(s.MenuItem, {
                    id: "channel_notification_settings",
                    label: g.default.Messages.NOTIFICATIONS,
                    children: [(0, i.jsx)(s.MenuRadioItem, {
                        id: "cns_default",
                        label: M,
                        group: "channel_notification_settings",
                        checked: n.inherited && !f,
                        subtext: n.inheritedPreset,
                        action: () => ((0, u.updateChannelToGuildDefault)(e.guild_id, e.id), _(!1))
                    }), (0, i.jsx)(s.MenuRadioItem, {
                        id: "cns_everything",
                        group: "channel_notification_settings",
                        label: g.default.Messages.NOTIFICATION_PRESET_1,
                        checked: !n.inherited && S === o.Presets.ALL_MESSAGES,
                        action: () => ((0, u.updateChannelPreset)(e.guild_id, e.id, o.Presets.ALL_MESSAGES), _(!1))
                    }), (0, i.jsx)(s.MenuRadioItem, {
                        id: "cns_essentials",
                        group: "channel_notification_settings",
                        label: g.default.Messages.NOTIFICATION_PRESET_2,
                        checked: !n.inherited && S === o.Presets.MENTIONS,
                        action: () => ((0, u.updateChannelPreset)(e.guild_id, e.id, o.Presets.MENTIONS), _(!1))
                    }), (0, i.jsx)(s.MenuRadioItem, {
                        id: "cns_nothing",
                        group: "channel_notification_settings",
                        label: g.default.Messages.NOTIFICATION_PRESET_3,
                        checked: !n.inherited && S === o.Presets.NOTHING,
                        action: () => ((0, u.updateChannelPreset)(e.guild_id, e.id, o.Presets.NOTHING), _(!1))
                    }), (0, i.jsx)(s.MenuRadioItem, {
                        id: "cns_custom",
                        group: "channel_notification_settings",
                        label: g.default.Messages.NOTIFICATION_PRESET_CUSTOM,
                        checked: f || !n.inherited && S === o.Presets.CUSTOM,
                        action: () => (d(!0), _(!0))
                    }), (r || l) && E]
                })
            }

            function N(e, t) {
                let {
                    notification: n,
                    unread: a
                } = (0, u.useChannelPresetSettings)(e), o = e => {
                    e(), t()
                }, E = t => {
                    let n = {
                        message_notifications: t
                    };
                    t === c.UserNotificationSettings.ALL_MESSAGES && a !== _.UnreadSetting.ALL_MESSAGES && (n.flags = (0, r.withChannelUnreadFlags)(d.default.getChannelIdFlags(e.guild_id, e.id), S.ChannelNotificationSettingsFlags.UNREADS_ALL_MESSAGES)), l.default.updateChannelOverrideSettings(e.guild_id, e.id, n, f.NotificationLabel.notifications(t))
                };
                return (0, i.jsxs)(s.MenuGroup, {
                    children: [(0, i.jsxs)(s.MenuItem, {
                        id: "unread_setting",
                        label: "Unread Badges",
                        children: [(0, i.jsx)(s.MenuRadioItem, {
                            id: "unread_setting_all_messages",
                            group: "unread_setting",
                            checked: a === _.UnreadSetting.ALL_MESSAGES,
                            label: g.default.Messages.NOTIFICATION_SETTINGS_PRESETS_ALL_MESSAGES,
                            action: () => o(() => (0, u.updateChannelUnreadSetting)(e.guild_id, e.id, _.UnreadSetting.ALL_MESSAGES))
                        }), (0, i.jsx)(s.MenuRadioItem, {
                            id: "unread_setting_mention_only",
                            group: "unread_setting",
                            checked: a === _.UnreadSetting.ONLY_MENTIONS,
                            label: g.default.Messages.NOTIFICATION_SETTINGS_PRESETS_MENTION_ONLY,
                            disabled: a !== _.UnreadSetting.ONLY_MENTIONS && n === c.UserNotificationSettings.ALL_MESSAGES,
                            subtext: a !== _.UnreadSetting.ONLY_MENTIONS && n === c.UserNotificationSettings.ALL_MESSAGES ? g.default.Messages.NOTIFICATION_SETTINGS_UNREAD_MENTION_ONLY_DISABLED : void 0,
                            action: () => o(() => (0, u.updateChannelUnreadSetting)(e.guild_id, e.id, _.UnreadSetting.ONLY_MENTIONS))
                        })]
                    }, "unread_setting"), (0, i.jsxs)(s.MenuItem, {
                        id: "push_settings",
                        label: g.default.Messages.NOTIFICATIONS,
                        children: [(0, i.jsx)(s.MenuRadioItem, {
                            group: "notification-preset",
                            id: "push_settings_everything",
                            label: g.default.Messages.NOTIFICATION_SETTINGS_PRESETS_ALL_MESSAGES,
                            checked: n === c.UserNotificationSettings.ALL_MESSAGES,
                            subtext: a !== _.UnreadSetting.ALL_MESSAGES && n !== c.UserNotificationSettings.ALL_MESSAGES ? g.default.Messages.NOTIFICATION_SETTINGS_UNREAD_UPDATE_WARNING : void 0,
                            action: () => o(() => E(c.UserNotificationSettings.ALL_MESSAGES))
                        }), (0, i.jsx)(s.MenuRadioItem, {
                            group: "notification-preset",
                            id: "push_settings_everything_mention",
                            checked: n === c.UserNotificationSettings.ONLY_MENTIONS,
                            label: g.default.Messages.NOTIFICATION_SETTINGS_PRESETS_MENTION_ONLY,
                            action: () => o(() => E(c.UserNotificationSettings.ONLY_MENTIONS))
                        }), (0, i.jsx)(s.MenuRadioItem, {
                            group: "notification-preset",
                            id: "push_settings_everything_nothing",
                            label: g.default.Messages.NOTIFICATION_SETTINGS_PRESETS_NONE,
                            checked: n === c.UserNotificationSettings.NO_MESSAGES,
                            action: () => o(() => E(c.UserNotificationSettings.NO_MESSAGES))
                        })]
                    }, "push_settings")]
                })
            }
        },
        339876: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("446674"),
                s = n("77078"),
                l = n("498139"),
                u = n("629220"),
                r = n("512395"),
                o = n("282109"),
                d = n("49111"),
                f = n("782340");

            function c(e) {
                let {
                    isFavoritesPerk: t
                } = (0, l.useFavoritesServerExperiment)("useChannelOptInItems"), n = (0, r.useOptInEnabledForGuild)(e.guild_id), c = (0, a.useStateFromStores)([o.default], () => o.default.isChannelOptedIn(e.guild_id, e.id)), _ = (0, a.useStateFromStores)([o.default], () => null != e.parent_id && o.default.isChannelOptedIn(e.guild_id, e.parent_id)), S = (0, a.useStateFromStores)([o.default], () => o.default.isFavorite(e.guild_id, e.id)), g = () => {
                    (0, u.setOptInChannel)(e.guild_id, e.id, !c, {
                        section: d.AnalyticsSections.CONTEXT_MENU
                    })
                }, E = () => {
                    null != e.parent_id && (0, u.setOptInChannel)(e.guild_id, e.parent_id, !1, {
                        section: d.AnalyticsSections.CONTEXT_MENU
                    })
                };
                if (!n || e.isThread()) return null;
                if (e.isCategory()) return (0, i.jsx)(s.MenuItem, {
                    id: "opt-into-category",
                    label: c ? f.default.Messages.CHANNEL_OPT_OUT : f.default.Messages.CHANNEL_OPT_IN,
                    action: () => g()
                });
                let N = S ? f.default.Messages.REMOVE_FAVORITE : f.default.Messages.ADD_FAVORITE,
                    M = S ? f.default.Messages.UNPIN_CHANNEL : f.default.Messages.PIN_CHANNEL_TO_TOP;
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(s.MenuItem, {
                        id: "opt-in-favorite-channel",
                        label: t ? M : N,
                        action: () => {
                            (0, u.setIsFavorite)(e.guild_id, e.id, !S, {
                                section: d.AnalyticsSections.CONTEXT_MENU
                            })
                        }
                    }), _ ? (0, i.jsx)(s.MenuItem, {
                        id: "opt-out-category",
                        label: f.default.Messages.CHANNEL_OPT_OUT_PARENT_CATEGORY,
                        action: () => E()
                    }) : (0, i.jsx)(s.MenuItem, {
                        id: "opt-into-channel",
                        label: c ? f.default.Messages.CHANNEL_OPT_OUT : f.default.Messages.CHANNEL_OPT_IN,
                        action: () => g()
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
            var i = n("37983");
            n("884691");
            var a = n("77078"),
                s = n("200008"),
                l = n("782340");

            function u(e) {
                return (0, i.jsx)(a.MenuItem, {
                    id: "delete-channel",
                    label: l.default.Messages.REMOVE_CATEGORY,
                    subtext: l.default.Messages.DELETE_CATEGORY_SUBTEXT,
                    color: "danger",
                    action: () => (0, a.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("338052").then(n.bind(n, "338052"));
                        return n => (0, i.jsx)(t, {
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
        200008: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                addFavoriteChannel: function() {
                    return c
                },
                removeFavoriteChannel: function() {
                    return _
                },
                setFavoriteChannelNickname: function() {
                    return S
                },
                addFavoriteCategory: function() {
                    return g
                },
                removeFavoriteCategory: function() {
                    return E
                },
                updateFavoriteChannels: function() {
                    return N
                },
                updateFavoriteChannelParent: function() {
                    return M
                },
                toggleFavoriteServerMuted: function() {
                    return A
                }
            }), n("222007");
            var i = n("249654"),
                a = n("151426"),
                s = n("872173"),
                l = n("42203"),
                u = n("957255"),
                r = n("379881"),
                o = n("843455");

            function d() {
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
                    if (n.type === a.FavoriteChannelType.CATEGORY) continue;
                    let i = l.default.getChannel(t);
                    if (null == i || !i.isPrivate() && !u.default.can(o.Permissions.VIEW_CHANNEL, i)) {
                        delete e[t];
                        continue
                    }
                }
            }

            function c(e, t) {
                let n = r.default.isFavorite(e);
                !n && s.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    n.favoriteChannels[e] = a.FavoriteChannel.create({
                        nickname: "",
                        type: a.FavoriteChannelType.REFERENCE_ORIGINAL,
                        position: d(),
                        parentId: null != t ? t : "0"
                    }), f(n.favoriteChannels)
                }, s.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function _(e) {
                let t = r.default.getFavorite(e);
                null != t && s.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    if (delete n.favoriteChannels[e], t.type === a.FavoriteChannelType.CATEGORY)
                        for (let t in n.favoriteChannels) n.favoriteChannels[t].parentId === e && (n.favoriteChannels[t].parentId = "0");
                    f(n.favoriteChannels)
                }, s.UserSettingsDelay.INFREQUENT_USER_ACTION)
            }

            function S(e, t) {
                let n = r.default.isFavorite(e);
                n && s.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    n.favoriteChannels[e].nickname = null != t ? t : ""
                }, s.UserSettingsDelay.INFREQUENT_USER_ACTION)
            }

            function g(e) {
                let t = i.default.fromTimestamp(Date.now());
                s.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    n.favoriteChannels[t] = a.FavoriteChannel.create({
                        nickname: e,
                        type: a.FavoriteChannelType.CATEGORY,
                        position: d(),
                        parentId: "0"
                    })
                }, s.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function E(e) {
                _(e)
            }

            function N(e) {
                s.PreloadedUserSettingsActionCreators.updateAsync("favorites", t => {
                    for (let i of e)
                        if (null != i.position && (t.favoriteChannels[i.id].position = i.position), void 0 !== i.parent_id) {
                            var n;
                            t.favoriteChannels[i.id].parentId = null !== (n = i.parent_id) && void 0 !== n ? n : "0"
                        }
                }, s.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function M(e, t) {
                s.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    n.favoriteChannels[e].parentId = null != t ? t : "0"
                }, s.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function A() {
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
            var i = n("446674"),
                a = n("162771"),
                s = n("49111");

            function l() {
                let e = (0, i.useStateFromStores)([a.default], () => a.default.getGuildId());
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
            var i = n("37983");
            n("884691");
            var a = n("446674"),
                s = n("77078"),
                l = n("162771"),
                u = n("498139"),
                r = n("49111"),
                o = n("782340");

            function d(e) {
                let t = (0, a.useStateFromStores)([l.default], () => l.default.getGuildId()),
                    d = e.type === r.ChannelTypes.GUILD_CATEGORY,
                    {
                        isFavoritesPerk: f
                    } = (0, u.useFavoritesServerExperiment)("useChannelFavoriteSetNickname");
                return __OVERLAY__ || t !== r.FAVORITES ? null : (0, i.jsx)(s.MenuItem, {
                    id: "set-channel-nickname",
                    label: f && d ? o.default.Messages.FAVORITES_RENAME_CATEGORY : o.default.Messages.CHANGE_NICKNAME,
                    action: function() {
                        (0, s.openModalLazy)(async () => {
                            let {
                                default: t
                            } = await n.el("353228").then(n.bind(n, "353228"));
                            return n => (0, i.jsx)(t, {
                                ...n,
                                channelId: e.id,
                                heading: f && d ? o.default.Messages.FAVORITES_RENAME_CATEGORY : o.default.Messages.CHANGE_NICKNAME,
                                formTitle: f && d ? o.default.Messages.CATEGORY_NAME : o.default.Messages.NICKNAME,
                                allowReset: !(f && d)
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
                    return c
                },
                filterOverrides: function() {
                    return S
                },
                useShouldUseNewNotificationSystem: function() {
                    return g
                }
            }), n("702976");
            var i = n("446674"),
                a = n("668597"),
                s = n("282109"),
                l = n("568734"),
                u = n("640497"),
                r = n("49111"),
                o = n("468200"),
                d = n("397336"),
                f = n("782340");

            function c() {
                return [{
                    label: f.default.Messages.MUTE_DURATION_15_MINUTES,
                    value: o.MuteUntilSeconds.MINUTES_15
                }, {
                    label: f.default.Messages.MUTE_DURATION_1_HOUR,
                    value: o.MuteUntilSeconds.HOURS_1
                }, {
                    label: f.default.Messages.MUTE_DURATION_3_HOURS,
                    value: o.MuteUntilSeconds.HOURS_3
                }, {
                    label: f.default.Messages.MUTE_DURATION_8_HOURS,
                    value: o.MuteUntilSeconds.HOURS_8
                }, {
                    label: f.default.Messages.MUTE_DURATION_24_HOURS,
                    value: o.MuteUntilSeconds.HOURS_24
                }, {
                    label: f.default.Messages.MUTE_DURATION_ALWAYS,
                    value: o.MuteUntilSeconds.ALWAYS
                }]
            }
            let _ = {
                ignoreMute: !1,
                ignoreUnreadSetting: !0,
                ignoreNotificationSetting: !1
            };

            function S(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _;
                return Object.keys(e).filter(n => {
                    var i, s;
                    let u = e[n].message_notifications !== r.UserNotificationSettings.NULL,
                        o = l.hasFlag(null !== (i = e[n].flags) && void 0 !== i ? i : 0, d.ChannelNotificationSettingsFlags.UNREADS_ALL_MESSAGES) || l.hasFlag(null !== (s = e[n].flags) && void 0 !== s ? s : 0, d.ChannelNotificationSettingsFlags.UNREADS_ONLY_MENTIONS);
                    return !t.ignoreUnreadSetting && o || !t.ignoreNotificationSetting && u || !t.ignoreMute && (0, a.computeIsMuted)(e[n])
                })
            }

            function g(e) {
                let t = (0, i.useStateFromStores)([s.default], () => s.default.useNewNotifications);
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
            var i = n("862205"),
                a = n("49111");
            let s = (0, i.createExperiment)({
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
                l = (0, i.createExperiment)({
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
                    disable: (null == e ? void 0 : e.type) !== a.ChannelTypes.GUILD_VOICE,
                    autoTrackExposure: !1
                }), {
                    enabled: i
                } = s.useExperiment({
                    location: "useVoiceActivityNotificationSettingsExperiment"
                }, {
                    disable: (null == e ? void 0 : e.type) !== a.ChannelTypes.GUILD_VOICE || !n,
                    autoTrackExposure: !0
                });
                return (null == e ? void 0 : e.type) === a.ChannelTypes.GUILD_VOICE && n && i
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
        437756: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useChannelPresetSettings: function() {
                    return S
                },
                useChannelPresetInheritance: function() {
                    return g
                },
                updateChannelPreset: function() {
                    return E
                },
                updateChannelToGuildDefault: function() {
                    return N
                },
                updateChannelUnreadSetting: function() {
                    return M
                },
                updateChannelNotificationSetting: function() {
                    return A
                }
            }), n("222007");
            var i = n("65597"),
                a = n("519705"),
                s = n("42203"),
                l = n("282109"),
                u = n("34676"),
                r = n("47495"),
                o = n("277796"),
                d = n("507313"),
                f = n("49111"),
                c = n("133335"),
                _ = n("397336");

            function S(e) {
                let t = (0, i.default)([l.default], () => l.default.resolveUnreadSetting(e)),
                    n = (0, i.default)([l.default], () => l.default.resolvedMessageNotifications(e));
                return {
                    unread: t,
                    notification: n,
                    preset: (0, d.presetFromSettings)(t, n)
                }
            }

            function g(e) {
                let t = (0, i.useStateFromStoresArray)([l.default], () => (0, r.filterOverrides)(l.default.getChannelOverrides(e.guild_id), {
                        ignoreMute: !0,
                        ignoreUnreadSetting: !1,
                        ignoreNotificationSetting: !1
                    })),
                    [n, a] = (0, i.useStateFromStoresArray)([l.default, s.default], () => {
                        let n = s.default.getChannel(e.parent_id);
                        return null != n && t.includes(n.id) ? ["parent", (0, d.presetName)((0, d.presetFromSettings)(l.default.resolveUnreadSetting(n), l.default.resolvedMessageNotifications(n)))] : ["guild", (0, d.presetName)((0, d.presetFromSettings)(l.default.getGuildUnreadSetting(e.guild_id), l.default.getMessageNotifications(e.guild_id)))]
                    }, [e.guild_id, e.parent_id, t]);
                return {
                    inherited: !t.includes(e.id),
                    inheritedFrom: n,
                    inheritedPreset: a
                }
            }

            function E(e, t, n) {
                let i = l.default.getChannelIdFlags(e, t);
                n === d.Presets.ALL_MESSAGES ? a.default.updateChannelOverrideSettings(e, t, {
                    message_notifications: f.UserNotificationSettings.ALL_MESSAGES,
                    flags: (0, o.withChannelUnreadFlags)(i, _.ChannelNotificationSettingsFlags.UNREADS_ALL_MESSAGES)
                }, u.NotificationLabels.PresetAll) : n === d.Presets.MENTIONS ? a.default.updateChannelOverrideSettings(e, t, {
                    message_notifications: f.UserNotificationSettings.ONLY_MENTIONS,
                    flags: (0, o.withChannelUnreadFlags)(i, _.ChannelNotificationSettingsFlags.UNREADS_ONLY_MENTIONS)
                }, u.NotificationLabels.PresetMentions) : n === d.Presets.NOTHING && a.default.updateChannelOverrideSettings(e, t, {
                    message_notifications: f.UserNotificationSettings.NO_MESSAGES,
                    flags: (0, o.withChannelUnreadFlags)(i, _.ChannelNotificationSettingsFlags.UNREADS_ONLY_MENTIONS)
                }, u.NotificationLabels.PresetNothing)
            }

            function N(e, t) {
                a.default.updateChannelOverrideSettings(e, t, {
                    message_notifications: f.UserNotificationSettings.NULL,
                    flags: (0, o.resetChannelUnreadFlags)(l.default.getChannelIdFlags(e, t))
                }, u.NotificationLabels.PresetDefault)
            }

            function M(e, t, n) {
                let i = l.default.getChannelIdFlags(e, t);
                a.default.updateChannelOverrideSettings(e, t, {
                    flags: (0, o.withChannelUnreadFlags)(i, n === c.UnreadSetting.ALL_MESSAGES ? _.ChannelNotificationSettingsFlags.UNREADS_ALL_MESSAGES : _.ChannelNotificationSettingsFlags.UNREADS_ONLY_MENTIONS)
                }, u.NotificationLabel.unreads(n))
            }

            function A(e, t, n) {
                a.default.updateChannelOverrideSettings(e, t, {
                    message_notifications: n
                }, u.NotificationLabel.notifications(n))
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
            var i = n("568734"),
                a = n("397336");

            function s(e, t) {
                var n;
                return i.addFlag((n = e, i.removeFlags(n, a.GuildNotificationSettingsFlags.UNREADS_ALL_MESSAGES, a.GuildNotificationSettingsFlags.UNREADS_ONLY_MENTIONS)), t)
            }
            let l = e => i.removeFlags(e, a.ChannelNotificationSettingsFlags.UNREADS_ALL_MESSAGES, a.ChannelNotificationSettingsFlags.UNREADS_ONLY_MENTIONS);

            function u(e, t) {
                return i.addFlag(l(e), t)
            }
        },
        507313: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                Presets: function() {
                    return i
                },
                presetFromSettings: function() {
                    return o
                },
                presetName: function() {
                    return d
                }
            }), n("794252");
            var i, a, s = n("506838"),
                l = n("49111"),
                u = n("133335"),
                r = n("782340");

            function o(e, t) {
                return (0, s.match)([t, e]).with([l.UserNotificationSettings.ALL_MESSAGES, u.UnreadSetting.ALL_MESSAGES], () => "all_messages").with([l.UserNotificationSettings.ONLY_MENTIONS, u.UnreadSetting.UNSET], () => "mentions").with([l.UserNotificationSettings.ONLY_MENTIONS, u.UnreadSetting.ONLY_MENTIONS], () => "mentions").with([l.UserNotificationSettings.NO_MESSAGES, u.UnreadSetting.UNSET], () => "nothing").with([l.UserNotificationSettings.NO_MESSAGES, u.UnreadSetting.ONLY_MENTIONS], () => "nothing").otherwise(() => "custom")
            }

            function d(e) {
                return (0, s.match)(e).with("all_messages", () => r.default.Messages.NOTIFICATION_PRESET_1).with("mentions", () => r.default.Messages.NOTIFICATION_PRESET_2).with("nothing", () => r.default.Messages.NOTIFICATION_PRESET_3).with("custom", () => r.default.Messages.NOTIFICATION_PRESET_CUSTOM).exhaustive()
            }(a = i || (i = {})).ALL_MESSAGES = "all_messages", a.MENTIONS = "mentions", a.NOTHING = "nothing", a.CUSTOM = "custom"
        }
    }
]);