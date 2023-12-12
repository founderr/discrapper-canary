(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["32156"], {
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
                r = n("49111"),
                u = n("782340");

            function d(e, t) {
                let d = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e.type,
                    o = (0, i.useStateFromStores)([l.default], () => l.default.can(r.Permissions.MANAGE_CHANNELS, e), [e]);
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
                    case r.ChannelTypes.GUILD_TEXT:
                        return (0, a.jsx)(s.MenuItem, {
                            id: "create-text-channel",
                            label: u.default.Messages.CREATE_TEXT_CHANNEL,
                            action: f
                        });
                    case r.ChannelTypes.GUILD_VOICE:
                        return (0, a.jsx)(s.MenuItem, {
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
                s = n("77078"),
                l = n("18054"),
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
                return !__OVERLAY__ && f && (t || n || o) ? (0, a.jsx)(s.MenuItem, {
                    id: "edit-channel",
                    label: e.type === u.ChannelTypes.GUILD_CATEGORY ? d.default.Messages.EDIT_CATEGORY : d.default.Messages.EDIT_CHANNEL,
                    action: () => l.default.open(e.id)
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
                s = n("77078"),
                l = n("267363"),
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
                r = n("629220"),
                u = n("512395"),
                d = n("282109"),
                o = n("49111"),
                f = n("782340");

            function c(e) {
                let {
                    isFavoritesPerk: t
                } = (0, l.useFavoritesServerExperiment)("useChannelOptInItems"), n = (0, u.useOptInEnabledForGuild)(e.guild_id), c = (0, i.useStateFromStores)([d.default], () => d.default.isChannelOptedIn(e.guild_id, e.id)), _ = (0, i.useStateFromStores)([d.default], () => null != e.parent_id && d.default.isChannelOptedIn(e.guild_id, e.parent_id)), E = (0, i.useStateFromStores)([d.default], () => d.default.isFavorite(e.guild_id, e.id)), S = () => {
                    (0, r.setOptInChannel)(e.guild_id, e.id, !c, {
                        section: o.AnalyticsSections.CONTEXT_MENU
                    })
                }, A = () => {
                    null != e.parent_id && (0, r.setOptInChannel)(e.guild_id, e.parent_id, !1, {
                        section: o.AnalyticsSections.CONTEXT_MENU
                    })
                };
                if (!n || e.isThread()) return null;
                if (e.isCategory()) return (0, a.jsx)(s.MenuItem, {
                    id: "opt-into-category",
                    label: c ? f.default.Messages.CHANNEL_OPT_OUT : f.default.Messages.CHANNEL_OPT_IN,
                    action: () => S()
                });
                let g = E ? f.default.Messages.REMOVE_FAVORITE : f.default.Messages.ADD_FAVORITE,
                    N = E ? f.default.Messages.UNPIN_CHANNEL : f.default.Messages.PIN_CHANNEL_TO_TOP;
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(s.MenuItem, {
                        id: "opt-in-favorite-channel",
                        label: t ? N : g,
                        action: () => {
                            (0, r.setIsFavorite)(e.guild_id, e.id, !E, {
                                section: o.AnalyticsSections.CONTEXT_MENU
                            })
                        }
                    }), _ ? (0, a.jsx)(s.MenuItem, {
                        id: "opt-out-category",
                        label: f.default.Messages.CHANNEL_OPT_OUT_PARENT_CATEGORY,
                        action: () => A()
                    }) : (0, a.jsx)(s.MenuItem, {
                        id: "opt-into-channel",
                        label: c ? f.default.Messages.CHANNEL_OPT_OUT : f.default.Messages.CHANNEL_OPT_IN,
                        action: () => S()
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
                r = n("831394"),
                u = n("282109"),
                d = n("133335"),
                o = n("782340");

            function f(e) {
                var t;
                let n = (0, i.useStateFromStores)([u.default], () => u.default.getChannelRecordUnreadSetting(e)),
                    f = (0, i.useStateFromStores)([u.default], () => u.default.getChannelUnreadMode(e));
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
                s = n("872173"),
                l = n("42203"),
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
                    let a = l.default.getChannel(t);
                    if (null == a || !a.isPrivate() && !r.default.can(d.Permissions.VIEW_CHANNEL, a)) {
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
                        position: o(),
                        parentId: null != t ? t : "0"
                    }), f(n.favoriteChannels)
                }, s.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function _(e) {
                let t = u.default.getFavorite(e);
                null != t && s.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    if (delete n.favoriteChannels[e], t.type === i.FavoriteChannelType.CATEGORY)
                        for (let t in n.favoriteChannels) n.favoriteChannels[t].parentId === e && (n.favoriteChannels[t].parentId = "0");
                    f(n.favoriteChannels)
                }, s.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function E(e, t) {
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
                        position: o(),
                        parentId: "0"
                    })
                }, s.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function A(e) {
                _(e)
            }

            function g(e) {
                s.PreloadedUserSettingsActionCreators.updateAsync("favorites", t => {
                    for (let a of e)
                        if (null != a.position && (t.favoriteChannels[a.id].position = a.position), void 0 !== a.parent_id) {
                            var n;
                            t.favoriteChannels[a.id].parentId = null !== (n = a.parent_id) && void 0 !== n ? n : "0"
                        }
                }, s.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function N() {
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
                r = n("49111"),
                u = n("782340");

            function d(e) {
                let t = (0, i.useStateFromStores)([l.default], () => l.default.getGuildId());
                return __OVERLAY__ || t !== r.FAVORITES ? null : (0, a.jsx)(s.MenuItem, {
                    id: "set-channel-nickname",
                    label: u.default.Messages.CHANGE_NICKNAME,
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
                let t = (0, a.useStateFromStores)([s.default], () => s.default.useNewNotifications);
                return l.default.useExperiment({
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
                s = n("568734"),
                l = n("133335"),
                r = n("397336");

            function u(e, t, n) {
                let u = i.default.getChannelIdFlags(e, t);
                u = (0, s.setFlag)(u, r.ChannelNotificationSettingsFlags.UNREADS_ALL_MESSAGES, n === l.UnreadSetting.ALL_MESSAGES), u = (0, s.setFlag)(u, r.ChannelNotificationSettingsFlags.UNREADS_ONLY_MENTIONS, n === l.UnreadSetting.ONLY_MENTIONS), a.default.updateChannelOverrideSettings(e, t, {
                    flags: u
                })
            }

            function d(e, t) {
                let n = i.default.getGuildFlags(e);
                n = (0, s.setFlag)(n, r.GuildNotificationSettingsFlags.UNREADS_ALL_MESSAGES, t === l.UnreadSetting.ALL_MESSAGES), n = (0, s.setFlag)(n, r.GuildNotificationSettingsFlags.UNREADS_ONLY_MENTIONS, t === l.UnreadSetting.ONLY_MENTIONS), a.default.updateGuildNotificationSettings(e, {
                    flags: n
                })
            }
        }
    }
]);