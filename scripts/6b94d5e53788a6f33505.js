(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["63930"], {
        142047: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return h
                }
            });
            var n = a("37983");
            a("884691");
            var i = a("77078"),
                s = a("272030"),
                l = a("158534"),
                u = a("812204"),
                d = a("861370"),
                o = a("20209"),
                r = a("390008"),
                c = a("178261"),
                f = a("852275"),
                E = a("963150"),
                _ = a("655235"),
                M = a("308798"),
                N = a("47006"),
                g = a("44141"),
                L = a("531674"),
                S = a("619436"),
                A = a("339876"),
                C = a("809937"),
                T = a("782340");

            function O(e) {
                let {
                    channel: t,
                    onSelect: a
                } = e, l = (0, g.default)(t), u = (0, L.default)(t), o = (0, S.default)(t), E = (0, f.default)(t), M = (0, c.default)(t), N = (0, r.default)(t), A = (0, _.default)(t), C = (0, d.default)({
                    id: t.id,
                    label: T.default.Messages.COPY_ID_CHANNEL
                });
                return (0, n.jsxs)(i.Menu, {
                    navId: "channel-context",
                    onClose: s.closeContextMenu,
                    "aria-label": T.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
                    onSelect: a,
                    children: [(0, n.jsx)(i.MenuGroup, {
                        children: l
                    }), (0, n.jsxs)(i.MenuGroup, {
                        children: [u, o]
                    }), (0, n.jsxs)(i.MenuGroup, {
                        children: [E, M, N]
                    }), (0, n.jsx)(i.MenuGroup, {
                        children: A
                    }), (0, n.jsx)(i.MenuGroup, {
                        children: C
                    })]
                })
            }

            function U(e) {
                let {
                    channel: t,
                    guild: a,
                    onSelect: l
                } = e, u = (0, g.default)(t), o = (0, L.default)(t), _ = (0, S.default)(t), O = (0, f.default)(t), U = (0, c.default)(t), h = (0, N.default)(t), v = (0, r.default)(t), p = (0, E.default)(t, a), b = (0, M.default)(t), I = (0, d.default)({
                    id: t.id,
                    label: T.default.Messages.COPY_ID_CHANNEL
                }), m = (0, A.default)(t);
                return (0, n.jsxs)(i.Menu, {
                    navId: "channel-context",
                    onClose: s.closeContextMenu,
                    "aria-label": T.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
                    onSelect: l,
                    children: [(0, n.jsx)(i.MenuGroup, {
                        children: u
                    }, "mark-as-read"), (0, n.jsxs)(i.MenuGroup, {
                        children: [m, O, U]
                    }, "channel-actions"), (0, n.jsxs)(i.MenuGroup, {
                        children: [o, _, (0, C.default)(t)]
                    }, "notifications"), (0, n.jsxs)(i.MenuGroup, {
                        children: [h, v, p, b]
                    }, "admin-actions"), (0, n.jsx)(i.MenuGroup, {
                        children: I
                    }, "developer-actions")]
                })
            }
            var h = (0, l.default)(function(e) {
                let t = (0, o.default)();
                return t ? (0, n.jsx)(O, {
                    ...e
                }) : (0, n.jsx)(U, {
                    ...e
                })
            }, [u.default.CONTEXT_MENU, u.default.CHANNEL_CATEGORY_MENU])
        },
        178261: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return c
                }
            });
            var n = a("37983");
            a("884691");
            var i = a("446674"),
                s = a("77078"),
                l = a("820542"),
                u = a("870691"),
                d = a("42203"),
                o = a("49111"),
                r = a("782340");

            function c(e) {
                let t = (0, i.useStateFromStores)([u.default, d.default], () => {
                    let t = d.default.getMutableBasicGuildChannelsForGuild(e.guild_id),
                        a = Object.values(t).filter(e => e.type === o.ChannelTypes.GUILD_CATEGORY);
                    return 0 === a.length || a.every(e => u.default.isCollapsed(e.id))
                });
                return t ? null : (0, n.jsx)(s.MenuItem, {
                    id: "collapse-all-categories",
                    label: r.default.Messages.COLLAPSE_ALL_CATEGORIES,
                    action: () => (0, l.categoryCollapseAll)(e.guild_id)
                })
            }
        },
        852275: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return o
                }
            });
            var n = a("37983");
            a("884691");
            var i = a("446674"),
                s = a("77078"),
                l = a("820542"),
                u = a("870691"),
                d = a("782340");

            function o(e) {
                let t = (0, i.useStateFromStores)([u.default], () => u.default.isCollapsed(e.id), [e.id]);
                return (0, n.jsx)(s.MenuCheckboxItem, {
                    id: "collapse-category",
                    label: d.default.Messages.COLLAPSE_CATEGORY,
                    action: () => t ? (0, l.categoryExpand)(e.id) : (0, l.categoryCollapse)(e.id),
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
            var i = a("77078"),
                s = a("200008"),
                l = a("782340");

            function u(e) {
                return (0, n.jsx)(i.MenuItem, {
                    id: "delete-channel",
                    label: l.default.Messages.DELETE_CATEGORY,
                    subtext: l.default.Messages.DELETE_CATEGORY_SUBTEXT,
                    color: "danger",
                    action: () => (0, i.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await a.el("338052").then(a.bind(a, "338052"));
                        return a => (0, n.jsx)(t, {
                            ...a,
                            onConfirm: () => {
                                a.onClose(), (0, s.removeFavoriteCategory)(e.id)
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
                    return _
                }
            });
            var n = a("37983");
            a("884691");
            var i = a("446674"),
                s = a("77078"),
                l = a("18054"),
                u = a("819689"),
                d = a("430475"),
                o = a("610730"),
                r = a("271938"),
                c = a("957255"),
                f = a("49111"),
                E = a("782340");

            function _(e) {
                let t = e.isForumPost(),
                    _ = (0, i.useStateFromStores)([r.default], () => e.isOwner(r.default.getId()), [e]),
                    {
                        canManageChannel: M,
                        canAccessChannel: N
                    } = (0, i.useStateFromStoresObject)([c.default], () => ({
                        canAccessChannel: c.default.can(e.accessPermissions, e),
                        canManageChannel: c.default.can(e.isThread() ? f.Permissions.MANAGE_THREADS : f.Permissions.MANAGE_CHANNELS, e)
                    }), [e]),
                    g = (0, i.useStateFromStores)([o.default], () => {
                        var t;
                        return null !== (t = o.default.getCount(e.id)) && void 0 !== t ? t : 0
                    }, [e.id]),
                    {
                        firstMessage: L
                    } = (0, i.useStateFromStores)([d.default], () => d.default.getMessage(e.id), [e.id]),
                    S = t && (M || _ && g < 1),
                    A = t && _ && !M && g > 0 && null != L;
                return N && (M || S || A) ? (0, n.jsx)(s.MenuItem, {
                    id: "delete-channel",
                    label: (() => {
                        if (e.type === f.ChannelTypes.GUILD_CATEGORY) return E.default.Messages.DELETE_CATEGORY;
                        if (e.isForumPost()) return S ? E.default.Messages.DELETE_FORUM_POST : E.default.Messages.DELETE_MESSAGE;
                        if (e.isThread()) return E.default.Messages.DELETE_THREAD;
                        return E.default.Messages.DELETE_CHANNEL
                    })(),
                    color: "danger",
                    action: () => (0, s.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await a.el("575351").then(a.bind(a, "575351"));
                        return a => (0, n.jsx)(t, {
                            ...a,
                            onConfirm: () => {
                                a.onClose(), A ? u.default.deleteMessage(e.id, e.id) : l.default.deleteChannel(e.id)
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
                    return L
                }
            }), a("222007");
            var n = a("37983");
            a("884691");
            var i = a("866227"),
                s = a.n(i),
                l = a("446674"),
                u = a("77078"),
                d = a("820542"),
                o = a("519705"),
                r = a("319165"),
                c = a("282109"),
                f = a("679653"),
                E = a("49111"),
                _ = a("468200"),
                M = a("782340");
            let N = () => [{
                    value: _.MuteUntilSeconds.MINUTES_15,
                    label: M.default.Messages.MUTE_DURATION_15_MINUTES
                }, {
                    value: _.MuteUntilSeconds.HOURS_1,
                    label: M.default.Messages.MUTE_DURATION_1_HOUR
                }, {
                    value: _.MuteUntilSeconds.HOURS_3,
                    label: M.default.Messages.MUTE_DURATION_3_HOURS
                }, {
                    value: _.MuteUntilSeconds.HOURS_8,
                    label: M.default.Messages.MUTE_DURATION_8_HOURS
                }, {
                    value: _.MuteUntilSeconds.HOURS_24,
                    label: M.default.Messages.MUTE_DURATION_24_HOURS
                }, {
                    value: _.MuteUntilSeconds.ALWAYS,
                    label: M.default.Messages.MUTE_DURATION_ALWAYS
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

            function L(e, t) {
                let [a, i] = (0, l.useStateFromStoresArray)([c.default], () => [c.default.isChannelMuted(e.guild_id, e.id), c.default.getChannelMuteConfig(e.guild_id, e.id)]), s = (0, r.useMutedUntilText)(i), _ = (0, f.default)(e, !0);

                function L(t) {
                    t && e.type === E.ChannelTypes.GUILD_CATEGORY && (0, d.categoryCollapse)(e.id), o.default.updateChannelOverrideSettings(e.guild_id, e.id, {
                        muted: t
                    })
                }
                let S = M.default.Messages.MUTE_CHANNEL_GENERIC,
                    A = M.default.Messages.UNMUTE_CHANNEL_GENERIC;
                switch (e.type) {
                    case E.ChannelTypes.GUILD_CATEGORY:
                        S = M.default.Messages.MUTE_CATEGORY, A = M.default.Messages.UNMUTE_CATEGORY;
                        break;
                    case E.ChannelTypes.GROUP_DM:
                        S = M.default.Messages.MUTE_CONVERSATION, A = M.default.Messages.UNMUTE_CONVERSATION;
                        break;
                    case E.ChannelTypes.DM:
                        S = M.default.Messages.MUTE_CHANNEL.format({
                            name: _
                        }), A = M.default.Messages.UNMUTE_CHANNEL.format({
                            name: _
                        });
                        break;
                    default:
                        S = M.default.Messages.MUTE_CHANNEL_GENERIC, A = M.default.Messages.UNMUTE_CHANNEL_GENERIC
                }
                return a ? (0, n.jsx)(u.MenuItem, {
                    id: "unmute-channel",
                    label: A,
                    subtext: s,
                    action: () => L(!1)
                }) : (0, n.jsx)(u.MenuItem, {
                    id: "mute-channel",
                    label: S,
                    action: () => L(!0),
                    children: N().map(a => {
                        let {
                            value: i,
                            label: s
                        } = a;
                        return (0, n.jsx)(u.MenuItem, {
                            id: "".concat(i),
                            label: s,
                            action: () => (function(a) {
                                e.type === E.ChannelTypes.GUILD_CATEGORY && (0, d.categoryCollapse)(e.id);
                                let n = g(a);
                                o.default.updateChannelOverrideSettings(e.guild_id, e.id, n, t)
                            })(i)
                        }, i)
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
                    return E
                }
            });
            var n = a("37983");
            a("884691");
            var i = a("446674"),
                s = a("77078"),
                l = a("519705"),
                u = a("721281"),
                d = a("282109"),
                o = a("49111"),
                r = a("782340");

            function c(e) {
                var t, a, n;
                let i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                switch (e.type) {
                    case o.ChannelTypes.GUILD_VOICE:
                        ;
                        return i ? (t = e, [{
                            setting: o.UserNotificationSettings.NULL,
                            label: null != t.parent_id ? r.default.Messages.FORM_LABEL_DEFAULT_CATEGORY : r.default.Messages.FORM_LABEL_DEFAULT
                        }, {
                            setting: o.UserNotificationSettings.ALL_MESSAGES,
                            label: r.default.Messages.FORM_LABEL_ALL_ACTIVITY
                        }, {
                            setting: o.UserNotificationSettings.ONLY_MENTIONS,
                            label: r.default.Messages.FORM_LABEL_ONLY_MENTIONS.format()
                        }, {
                            setting: o.UserNotificationSettings.NO_MESSAGES,
                            label: r.default.Messages.FORM_LABEL_NOTHING
                        }]) : null;
                    case o.ChannelTypes.GUILD_STAGE_VOICE:
                        ;
                        return a = e, [{
                            setting: o.UserNotificationSettings.NULL,
                            label: null != a.parent_id ? r.default.Messages.FORM_LABEL_DEFAULT_CATEGORY : r.default.Messages.FORM_LABEL_DEFAULT
                        }, {
                            setting: o.UserNotificationSettings.ONLY_MENTIONS,
                            label: r.default.Messages.FORM_LABEL_LIVE_STAGES_ONLY
                        }, {
                            setting: o.UserNotificationSettings.NO_MESSAGES,
                            label: r.default.Messages.FORM_LABEL_NOTHING
                        }];
                    default:
                        ;
                        return n = e, [{
                            setting: o.UserNotificationSettings.NULL,
                            label: null != n.parent_id ? r.default.Messages.FORM_LABEL_DEFAULT_CATEGORY : r.default.Messages.FORM_LABEL_DEFAULT
                        }, {
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
            }

            function f(e) {
                let t = e.getGuildId(),
                    a = e.id,
                    f = (0, i.useStateFromStores)([d.default], () => {
                        let a = o.UserNotificationSettings.NULL;
                        return null != e.parent_id && (a = d.default.getChannelMessageNotifications(t, e.parent_id)), a !== o.UserNotificationSettings.NULL ? a : d.default.getMessageNotifications(t)
                    }, [t, e.parent_id]),
                    E = (0, i.useStateFromStores)([d.default], () => d.default.getNewForumThreadsCreated(e)),
                    _ = (0, i.useStateFromStores)([d.default], () => d.default.getChannelOverrides(t)[a], [t, a]),
                    M = null == _ ? o.UserNotificationSettings.NULL : _.message_notifications,
                    N = (0, u.useVoiceActivityNotificationSettingsExperiment)(e),
                    g = c(e, N);
                return null == g ? null : (0, n.jsxs)(n.Fragment, {
                    children: [e.isForumLikeChannel() ? (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)(s.MenuCheckboxItem, {
                            id: "new-forum-threads-created",
                            label: r.default.Messages.FORUM_NEW_POSTS_CREATED,
                            checked: E,
                            action: () => l.default.setForumThreadsCreated(e, !E)
                        }), (0, n.jsx)(s.MenuSeparator, {})]
                    }) : null, g.map(i => {
                        let {
                            setting: u,
                            label: d
                        } = i;
                        return (0, n.jsx)(s.MenuRadioItem, {
                            group: "channel-notifications",
                            id: "".concat(u),
                            label: d,
                            subtext: u === o.UserNotificationSettings.NULL ? function(e, t) {
                                let a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                                switch (e) {
                                    case o.UserNotificationSettings.ALL_MESSAGES:
                                        return t.type === o.ChannelTypes.GUILD_VOICE && a ? r.default.Messages.FORM_LABEL_ALL_ACTIVITY : r.default.Messages.FORM_LABEL_ALL_MESSAGES;
                                    case o.UserNotificationSettings.ONLY_MENTIONS:
                                        return r.default.Messages.FORM_LABEL_ONLY_MENTIONS.format();
                                    case o.UserNotificationSettings.NO_MESSAGES:
                                        return r.default.Messages.FORM_LABEL_NOTHING;
                                    case o.UserNotificationSettings.NULL:
                                    default:
                                        return
                                }
                            }(f, e, N) : void 0,
                            action: () => {
                                var e;
                                return e = u, void(null != t && l.default.updateChannelOverrideSettings(t, a, {
                                    message_notifications: e
                                }))
                            },
                            checked: u === M
                        }, u)
                    })]
                })
            }

            function E(e) {
                var t, a;
                let l = f(e),
                    E = (0, i.useStateFromStores)([d.default], () => d.default.resolvedMessageNotifications(e), [e]),
                    _ = (0, i.useStateFromStores)([d.default], () => d.default.getChannelOverrides(e.guild_id)[e.id], [e.guild_id, e.id]),
                    M = null == _ ? o.UserNotificationSettings.NULL : _.message_notifications,
                    N = (0, u.useVoiceActivityNotificationSettingsExperiment)(e),
                    g = M === o.UserNotificationSettings.NULL && e.isGuildStageVoice() ? r.default.Messages.FORM_LABEL_ONLY_MENTIONS.format() : null === (a = c(e, N)) || void 0 === a ? void 0 : null === (t = a.find(e => {
                        let {
                            setting: t
                        } = e;
                        return t === E
                    })) || void 0 === t ? void 0 : t.label;
                return null != l ? (0, n.jsx)(s.MenuItem, {
                    id: "channel-notifications",
                    label: r.default.Messages.NOTIFICATION_SETTINGS,
                    subtext: g,
                    children: l
                }) : null
            }
        },
        721281: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                VoiceActivityNotificationGuildExperiment: function() {
                    return l
                },
                useVoiceActivityNotificationSettingsExperiment: function() {
                    return u
                }
            });
            var n = a("862205"),
                i = a("49111");
            let s = (0, n.createExperiment)({
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
                l = (0, n.createExperiment)({
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
                    voiceChannelActivityNotifsEnabled: a
                } = l.useExperiment({
                    location: "useVoiceActivityNotificationSettingsExperiment",
                    guildId: null !== (t = e.getGuildId()) && void 0 !== t ? t : ""
                }, {
                    disable: e.type !== i.ChannelTypes.GUILD_VOICE,
                    autoTrackExposure: !1
                }), {
                    enabled: n
                } = s.useExperiment({
                    location: "useVoiceActivityNotificationSettingsExperiment"
                }, {
                    disable: e.type !== i.ChannelTypes.GUILD_VOICE || !a,
                    autoTrackExposure: !0
                });
                return e.type === i.ChannelTypes.GUILD_VOICE && a && n
            }
        }
    }
]);