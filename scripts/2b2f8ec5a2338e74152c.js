(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["25940"], {
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
                    return S
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
                _ = n("49111"),
                E = n("782340");

            function S(e) {
                let t = function(e) {
                    let t = (0, u.useUnreadThreadsCountForParent)(e.guild_id, e.id),
                        n = (0, i.useStateFromStores)([c.default, f.default, r.default, d.default], () => {
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
                    return g
                },
                default: function() {
                    return C
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
                _ = n("49111"),
                E = n("468200"),
                S = n("782340");
            let g = () => [{
                    value: E.MuteUntilSeconds.MINUTES_15,
                    label: S.default.Messages.MUTE_DURATION_15_MINUTES
                }, {
                    value: E.MuteUntilSeconds.HOURS_1,
                    label: S.default.Messages.MUTE_DURATION_1_HOUR
                }, {
                    value: E.MuteUntilSeconds.HOURS_3,
                    label: S.default.Messages.MUTE_DURATION_3_HOURS
                }, {
                    value: E.MuteUntilSeconds.HOURS_8,
                    label: S.default.Messages.MUTE_DURATION_8_HOURS
                }, {
                    value: E.MuteUntilSeconds.HOURS_24,
                    label: S.default.Messages.MUTE_DURATION_24_HOURS
                }, {
                    value: E.MuteUntilSeconds.ALWAYS,
                    label: S.default.Messages.MUTE_DURATION_ALWAYS
                }],
                A = e => {
                    let t = e > 0 ? s().add(e, "second").toISOString() : null;
                    return {
                        muted: !0,
                        mute_config: {
                            selected_time_window: e,
                            end_time: t
                        }
                    }
                };

            function C(e, t) {
                let [n, i] = (0, l.useStateFromStoresArray)([f.default], () => [f.default.isChannelMuted(e.guild_id, e.id), f.default.getChannelMuteConfig(e.guild_id, e.id)]), s = (0, o.useMutedUntilText)(i), E = (0, c.default)(e, !0);

                function C(t) {
                    t && e.type === _.ChannelTypes.GUILD_CATEGORY && (0, r.categoryCollapse)(e.id), d.default.updateChannelOverrideSettings(e.guild_id, e.id, {
                        muted: t
                    })
                }
                let N = S.default.Messages.MUTE_CHANNEL_GENERIC,
                    T = S.default.Messages.UNMUTE_CHANNEL_GENERIC;
                switch (e.type) {
                    case _.ChannelTypes.GUILD_CATEGORY:
                        N = S.default.Messages.MUTE_CATEGORY, T = S.default.Messages.UNMUTE_CATEGORY;
                        break;
                    case _.ChannelTypes.GROUP_DM:
                        N = S.default.Messages.MUTE_CONVERSATION, T = S.default.Messages.UNMUTE_CONVERSATION;
                        break;
                    case _.ChannelTypes.DM:
                        N = S.default.Messages.MUTE_CHANNEL.format({
                            name: E
                        }), T = S.default.Messages.UNMUTE_CHANNEL.format({
                            name: E
                        });
                        break;
                    default:
                        N = S.default.Messages.MUTE_CHANNEL_GENERIC, T = S.default.Messages.UNMUTE_CHANNEL_GENERIC
                }
                return n ? (0, a.jsx)(u.MenuItem, {
                    id: "unmute-channel",
                    label: T,
                    subtext: s,
                    action: () => C(!1)
                }) : (0, a.jsx)(u.MenuItem, {
                    id: "mute-channel",
                    label: N,
                    action: () => C(!0),
                    children: g().map(n => {
                        let {
                            value: i,
                            label: s
                        } = n;
                        return (0, a.jsx)(u.MenuItem, {
                            id: "".concat(i),
                            label: s,
                            action: () => (function(n) {
                                e.type === _.ChannelTypes.GUILD_CATEGORY && (0, r.categoryCollapse)(e.id);
                                let a = A(n);
                                d.default.updateChannelOverrideSettings(e.guild_id, e.id, a, t)
                            })(i)
                        }, i)
                    })
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
                s = n("77078"),
                l = n("629220"),
                u = n("512395"),
                r = n("282109"),
                d = n("49111"),
                o = n("782340");

            function f(e) {
                let t = (0, u.useOptInEnabledForGuild)(e.guild_id),
                    n = (0, i.useStateFromStores)([r.default], () => r.default.isChannelOptedIn(e.guild_id, e.id)),
                    f = (0, i.useStateFromStores)([r.default], () => null != e.parent_id && r.default.isChannelOptedIn(e.guild_id, e.parent_id)),
                    c = (0, i.useStateFromStores)([r.default], () => r.default.isFavorite(e.guild_id, e.id)),
                    _ = () => {
                        (0, l.setOptInChannel)(e.guild_id, e.id, !n, {
                            section: d.AnalyticsSections.CONTEXT_MENU
                        })
                    },
                    E = () => {
                        null != e.parent_id && (0, l.setOptInChannel)(e.guild_id, e.parent_id, !1, {
                            section: d.AnalyticsSections.CONTEXT_MENU
                        })
                    };
                return !t || e.isThread() ? null : e.isCategory() ? (0, a.jsx)(s.MenuItem, {
                    id: "opt-into-category",
                    label: n ? o.default.Messages.CHANNEL_OPT_OUT : o.default.Messages.CHANNEL_OPT_IN,
                    action: () => _()
                }) : (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(s.MenuItem, {
                        id: "opt-in-favorite-channel",
                        label: c ? o.default.Messages.REMOVE_FAVORITE : o.default.Messages.ADD_FAVORITE,
                        action: () => {
                            (0, l.setIsFavorite)(e.guild_id, e.id, !c, {
                                section: d.AnalyticsSections.CONTEXT_MENU
                            })
                        }
                    }), f ? (0, a.jsx)(s.MenuItem, {
                        id: "opt-out-category",
                        label: o.default.Messages.CHANNEL_OPT_OUT_PARENT_CATEGORY,
                        action: () => E()
                    }) : (0, a.jsx)(s.MenuItem, {
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
                    return c
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("446674"),
                s = n("77078"),
                l = n("483226"),
                u = n("44574"),
                r = n("811400"),
                d = n("282109"),
                o = n("627869"),
                f = n("782340");

            function c(e) {
                let t = (0, r.useGuildUnreadSetting)(e),
                    n = (0, u.useGuildUnreadsExperiment)(),
                    c = (0, i.useStateFromStores)([d.default], () => d.default.isGuildUnreadSettingEnabled(e.guild_id)),
                    _ = function(e) {
                        var t;
                        let n = (0, r.useGuildUnreadSetting)(e);
                        let i = (t = e, [{
                                setting: o.UserUnreadSettings.NULL,
                                label: null != t.parent_id ? f.default.Messages.FORM_LABEL_DEFAULT_CATEGORY : f.default.Messages.FORM_LABEL_DEFAULT
                            }, {
                                setting: o.UserUnreadSettings.ALL_MESSAGES,
                                label: f.default.Messages.FORM_LABEL_ALL_MESSAGES
                            }, {
                                setting: o.UserUnreadSettings.MENTIONS_AND_HIGHLIGHTS,
                                label: f.default.Messages.HIGHLIGHTS_AND_MENTIONS
                            }]),
                            u = t => {
                                (0, l.setChannelUnreadSetting)(e.guild_id, e.id, t)
                            };
                        return (0, a.jsx)(a.Fragment, {
                            children: i.map(e => {
                                let {
                                    setting: t,
                                    label: i
                                } = e;
                                return (0, a.jsx)(s.MenuRadioItem, {
                                    group: "channel-unreads",
                                    id: "".concat(t),
                                    label: i,
                                    subtext: t === o.UserUnreadSettings.NULL ? f.default.Messages.HIGHLIGHTS_AND_MENTIONS : void 0,
                                    action: () => u(t),
                                    checked: t === n
                                }, t)
                            })
                        })
                    }(e);
                return n && c ? (0, a.jsx)(s.MenuItem, {
                    id: "channel-unreads",
                    label: f.default.Messages.UNREAD_SETTINGS,
                    subtext: t === o.UserUnreadSettings.ALL_MESSAGES ? f.default.Messages.FORM_LABEL_ALL_MESSAGES : f.default.Messages.HIGHLIGHTS_AND_MENTIONS,
                    children: _
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
                    return _
                },
                setFavoriteChannelNickname: function() {
                    return E
                },
                addFavoriteCategory: function() {
                    return S
                },
                removeFavoriteCategory: function() {
                    return g
                },
                updateFavoriteChannels: function() {
                    return A
                },
                toggleFavoriteServerMuted: function() {
                    return C
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

            function _(e) {
                let t = r.default.getFavorite(e);
                null != t && s.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    if (delete n.favoriteChannels[e], t.type === i.FavoriteChannelType.CATEGORY)
                        for (let t in n.favoriteChannels) n.favoriteChannels[t].parentId === e && (n.favoriteChannels[t].parentId = "0");
                    f(n.favoriteChannels)
                }, s.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function E(e, t) {
                let n = r.default.isFavorite(e);
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

            function g(e) {
                _(e)
            }

            function A(e) {
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
        483226: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                setChannelUnreadSetting: function() {
                    return d
                },
                setGuildUnreadSetting: function() {
                    return o
                },
                setGuildUnreadsLastCleared: function() {
                    return f
                }
            });
            var a = n("913144"),
                i = n("519705"),
                s = n("282109"),
                l = n("568734"),
                u = n("627869"),
                r = n("397336");

            function d(e, t, n) {
                let a = s.default.getGuildChannelFlags(e, t);
                a = (0, l.setFlag)(a, r.ChannelNotificationSettingsFlags.UNREADS_ALL_MESSAGES, n === u.UserUnreadSettings.ALL_MESSAGES), a = (0, l.setFlag)(a, r.ChannelNotificationSettingsFlags.UNREADS_MENTIONS_AND_HIGHLIGHTS, n === u.UserUnreadSettings.MENTIONS_AND_HIGHLIGHTS), i.default.updateChannelOverrideSettings(e, t, {
                    flags: a
                })
            }

            function o(e, t) {
                let n = s.default.getGuildFlags(e);
                n = (0, l.setFlag)(n, r.GuildNotificationSettingsFlags.UNREADS_MENTIONS_AND_HIGHLIGHTS, t), n = (0, l.setFlag)(n, r.GuildNotificationSettingsFlags.UNREADS_ALL_MESSAGES, !t), i.default.updateGuildNotificationSettings(e, {
                    flags: n
                })
            }

            function f(e) {
                a.default.dispatch({
                    type: "GUILD_UNREADS_SET_LAST_CLEARED",
                    guildId: e
                })
            }
        }
    }
]);