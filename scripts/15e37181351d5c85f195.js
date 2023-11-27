(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["32156"], {
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
                    return r
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

            function r(e) {
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
                l = n("77078"),
                s = n("957255"),
                r = n("49111"),
                u = n("782340");

            function d(e, t) {
                let d = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e.type,
                    o = (0, i.useStateFromStores)([s.default], () => s.default.can(r.Permissions.MANAGE_CHANNELS, e), [e]);
                if (__OVERLAY__ || !o) return null;
                let f = () => {
                    (0, l.openModalLazy)(async () => {
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
                    case r.ChannelTypes.GUILD_TEXT:
                        return (0, a.jsx)(l.MenuItem, {
                            id: "create-text-channel",
                            label: u.default.Messages.CREATE_TEXT_CHANNEL,
                            action: f
                        });
                    case r.ChannelTypes.GUILD_VOICE:
                        return (0, a.jsx)(l.MenuItem, {
                            id: "create-voice-channel",
                            label: u.default.Messages.CREATE_VOICE_CHANNEL,
                            action: f
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
                l = n("77078"),
                s = n("18054"),
                r = n("957255"),
                u = n("49111"),
                d = n("782340");

            function o(e) {
                let {
                    canManageChannels: t,
                    canManageRoles: n,
                    canManageWebhooks: o,
                    canAccessChannel: f
                } = (0, i.useStateFromStoresObject)([r.default], () => ({
                    canManageChannels: r.default.can(u.Permissions.MANAGE_CHANNELS, e),
                    canManageRoles: r.default.can(u.Permissions.MANAGE_ROLES, e),
                    canManageWebhooks: r.default.can(u.Permissions.MANAGE_WEBHOOKS, e),
                    canAccessChannel: r.default.can(e.accessPermissions, e)
                }), [e]);
                return !__OVERLAY__ && f && (t || n || o) ? (0, a.jsx)(l.MenuItem, {
                    id: "edit-channel",
                    label: e.type === u.ChannelTypes.GUILD_CATEGORY ? d.default.Messages.EDIT_CATEGORY : d.default.Messages.EDIT_CHANNEL,
                    action: () => s.default.open(e.id)
                }) : null
            }
        },
        44141: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            }), n("222007");
            var a = n("37983");
            n("884691");
            var i = n("446674"),
                l = n("77078"),
                s = n("267363"),
                r = n("680986"),
                u = n("689275"),
                d = n("755624"),
                o = n("233069"),
                f = n("245997"),
                c = n("660478"),
                _ = n("49111"),
                E = n("782340");

            function S(e) {
                let t = function(e) {
                    let t = (0, r.useUnreadThreadsCountForParent)(e.guild_id, e.id),
                        n = (0, i.useStateFromStores)([c.default, f.default, u.default, d.default], () => {
                            if (e.isForumPost()) return c.default.isForumPostUnread(e.id);
                            if (e.type !== _.ChannelTypes.GUILD_CATEGORY) return c.default.hasUnread(e.id);
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
                                    i = u.default.getThreadsForGuild(e.guild_id);
                                for (let e in i)
                                    if (a.has(e)) {
                                        for (let t in i[e])
                                            if (d.default.hasJoined(t) && !d.default.isMuted(t) && c.default.hasUnread(t)) return !0
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
                s = n("629220"),
                r = n("512395"),
                u = n("282109"),
                d = n("49111"),
                o = n("782340");

            function f(e) {
                let t = (0, r.useOptInEnabledForGuild)(e.guild_id),
                    n = (0, i.useStateFromStores)([u.default], () => u.default.isChannelOptedIn(e.guild_id, e.id)),
                    f = (0, i.useStateFromStores)([u.default], () => null != e.parent_id && u.default.isChannelOptedIn(e.guild_id, e.parent_id)),
                    c = (0, i.useStateFromStores)([u.default], () => u.default.isFavorite(e.guild_id, e.id)),
                    _ = () => {
                        (0, s.setOptInChannel)(e.guild_id, e.id, !n, {
                            section: d.AnalyticsSections.CONTEXT_MENU
                        })
                    },
                    E = () => {
                        null != e.parent_id && (0, s.setOptInChannel)(e.guild_id, e.parent_id, !1, {
                            section: d.AnalyticsSections.CONTEXT_MENU
                        })
                    };
                return !t || e.isThread() ? null : e.isCategory() ? (0, a.jsx)(l.MenuItem, {
                    id: "opt-into-category",
                    label: n ? o.default.Messages.CHANNEL_OPT_OUT : o.default.Messages.CHANNEL_OPT_IN,
                    action: () => _()
                }) : (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(l.MenuItem, {
                        id: "opt-in-favorite-channel",
                        label: c ? o.default.Messages.REMOVE_FAVORITE : o.default.Messages.ADD_FAVORITE,
                        action: () => {
                            (0, s.setIsFavorite)(e.guild_id, e.id, !c, {
                                section: d.AnalyticsSections.CONTEXT_MENU
                            })
                        }
                    }), f ? (0, a.jsx)(l.MenuItem, {
                        id: "opt-out-category",
                        label: o.default.Messages.CHANNEL_OPT_OUT_PARENT_CATEGORY,
                        action: () => E()
                    }) : (0, a.jsx)(l.MenuItem, {
                        id: "opt-into-channel",
                        label: n ? o.default.Messages.CHANNEL_OPT_OUT : o.default.Messages.CHANNEL_OPT_IN,
                        action: () => _()
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
                l = n("77078"),
                s = n("47495"),
                r = n("831394"),
                u = n("282109"),
                d = n("133335"),
                o = n("782340");

            function f(e) {
                var t;
                let n = (0, i.useStateFromStores)([u.default], () => u.default.getChannelRecordUnreadSetting(e)),
                    f = (0, i.useStateFromStores)([u.default], () => u.default.getChannelUnreadMode(e));
                if (!(0, s.useShouldUseNewNotificationSystem)("useChannelUnreadItems")) return null;
                return (0, a.jsx)(l.MenuItem, {
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
                            label: s
                        } = t;
                        return (0, a.jsx)(l.MenuRadioItem, {
                            group: "channel-unreads",
                            id: "".concat(i),
                            label: s,
                            action: () => (0, r.setChannelUnreadSetting)(e.guild_id, e.id, i),
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
                    return _
                },
                setFavoriteChannelNickname: function() {
                    return E
                },
                addFavoriteCategory: function() {
                    return S
                },
                removeFavoriteCategory: function() {
                    return A
                },
                updateFavoriteChannels: function() {
                    return g
                },
                toggleFavoriteServerMuted: function() {
                    return N
                }
            }), n("222007");
            var a = n("249654"),
                i = n("151426"),
                l = n("872173"),
                s = n("42203"),
                r = n("957255"),
                u = n("379881"),
                d = n("843455");

            function o() {
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
                    let a = s.default.getChannel(t);
                    if (null == a || !a.isPrivate() && !r.default.can(d.Permissions.VIEW_CHANNEL, a)) {
                        delete e[t];
                        continue
                    }
                }
            }

            function c(e, t) {
                let n = u.default.isFavorite(e);
                !n && l.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    n.favoriteChannels[e] = i.FavoriteChannel.create({
                        nickname: "",
                        type: i.FavoriteChannelType.REFERENCE_ORIGINAL,
                        position: o(),
                        parentId: null != t ? t : "0"
                    }), f(n.favoriteChannels)
                }, l.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function _(e) {
                let t = u.default.getFavorite(e);
                null != t && l.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    if (delete n.favoriteChannels[e], t.type === i.FavoriteChannelType.CATEGORY)
                        for (let t in n.favoriteChannels) n.favoriteChannels[t].parentId === e && (n.favoriteChannels[t].parentId = "0");
                    f(n.favoriteChannels)
                }, l.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function E(e, t) {
                let n = u.default.isFavorite(e);
                n && l.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    n.favoriteChannels[e].nickname = null != t ? t : ""
                }, l.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function S(e) {
                let t = a.default.fromTimestamp(Date.now());
                l.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    n.favoriteChannels[t] = i.FavoriteChannel.create({
                        nickname: e,
                        type: i.FavoriteChannelType.CATEGORY,
                        position: o(),
                        parentId: "0"
                    })
                }, l.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function A(e) {
                _(e)
            }

            function g(e) {
                l.PreloadedUserSettingsActionCreators.updateAsync("favorites", t => {
                    for (let a of e)
                        if (null != a.position && (t.favoriteChannels[a.id].position = a.position), void 0 !== a.parent_id) {
                            var n;
                            t.favoriteChannels[a.id].parentId = null !== (n = a.parent_id) && void 0 !== n ? n : "0"
                        }
                }, l.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function N() {
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
                    return d
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("446674"),
                l = n("77078"),
                s = n("162771"),
                r = n("49111"),
                u = n("782340");

            function d(e) {
                let t = (0, i.useStateFromStores)([s.default], () => s.default.getGuildId());
                return __OVERLAY__ || t !== r.FAVORITES ? null : (0, a.jsx)(l.MenuItem, {
                    id: "set-channel-nickname",
                    label: u.default.Messages.CHANGE_NICKNAME,
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
                l = n("282109"),
                s = n("640497"),
                r = n("49111"),
                u = n("468200"),
                d = n("782340");

            function o() {
                return [{
                    label: d.default.Messages.MUTE_DURATION_15_MINUTES,
                    value: u.MuteUntilSeconds.MINUTES_15
                }, {
                    label: d.default.Messages.MUTE_DURATION_1_HOUR,
                    value: u.MuteUntilSeconds.HOURS_1
                }, {
                    label: d.default.Messages.MUTE_DURATION_3_HOURS,
                    value: u.MuteUntilSeconds.HOURS_3
                }, {
                    label: d.default.Messages.MUTE_DURATION_8_HOURS,
                    value: u.MuteUntilSeconds.HOURS_8
                }, {
                    label: d.default.Messages.MUTE_DURATION_24_HOURS,
                    value: u.MuteUntilSeconds.HOURS_24
                }, {
                    label: d.default.Messages.MUTE_DURATION_ALWAYS,
                    value: u.MuteUntilSeconds.ALWAYS
                }]
            }

            function f(e) {
                return Object.keys(e).filter(t => !!(0, i.computeIsMuted)(e[t]) || e[t].message_notifications !== r.UserNotificationSettings.NULL || !1)
            }

            function c(e) {
                let t = (0, a.useStateFromStores)([l.default], () => l.default.useNewNotifications);
                return s.default.useExperiment({
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
                    return u
                },
                setGuildUnreadSetting: function() {
                    return d
                }
            });
            var a = n("519705"),
                i = n("282109"),
                l = n("568734"),
                s = n("133335"),
                r = n("397336");

            function u(e, t, n) {
                let u = i.default.getChannelIdFlags(e, t);
                u = (0, l.setFlag)(u, r.ChannelNotificationSettingsFlags.UNREADS_ALL_MESSAGES, n === s.UnreadSetting.ALL_MESSAGES), u = (0, l.setFlag)(u, r.ChannelNotificationSettingsFlags.UNREADS_ONLY_MENTIONS, n === s.UnreadSetting.ONLY_MENTIONS), a.default.updateChannelOverrideSettings(e, t, {
                    flags: u
                })
            }

            function d(e, t) {
                let n = i.default.getGuildFlags(e);
                n = (0, l.setFlag)(n, r.GuildNotificationSettingsFlags.UNREADS_ALL_MESSAGES, t === s.UnreadSetting.ALL_MESSAGES), n = (0, l.setFlag)(n, r.GuildNotificationSettingsFlags.UNREADS_ONLY_MENTIONS, t === s.UnreadSetting.ONLY_MENTIONS), a.default.updateGuildNotificationSettings(e, {
                    flags: n
                })
            }
        }
    }
]);