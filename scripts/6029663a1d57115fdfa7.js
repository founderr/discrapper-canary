(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["32156"], {
        820542: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                categoryCollapse: function() {
                    return i
                },
                categoryExpand: function() {
                    return r
                },
                categoryCollapseAll: function() {
                    return s
                },
                categoryExpandAll: function() {
                    return l
                }
            });
            var a = n("913144");

            function i(e) {
                a.default.dispatch({
                    type: "CATEGORY_COLLAPSE",
                    id: e
                })
            }

            function r(e) {
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

            function l(e) {
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
                    return r
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("685665");

            function r(e, t) {
                return function(n) {
                    let {
                        AnalyticsLocationProvider: r
                    } = (0, i.default)(t);
                    return (0, a.jsx)(r, {
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
                r = n("77078"),
                s = n("957255"),
                l = n("49111"),
                u = n("782340");

            function d(e, t) {
                let d = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e.type,
                    o = (0, i.useStateFromStores)([s.default], () => s.default.can(l.Permissions.MANAGE_CHANNELS, e), [e]);
                if (__OVERLAY__ || !o) return null;
                let f = () => {
                    (0, r.openModalLazy)(async () => {
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
                    case l.ChannelTypes.GUILD_TEXT:
                        return (0, a.jsx)(r.MenuItem, {
                            id: "create-text-channel",
                            label: u.default.Messages.CREATE_TEXT_CHANNEL,
                            action: f
                        });
                    case l.ChannelTypes.GUILD_VOICE:
                        return (0, a.jsx)(r.MenuItem, {
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
                r = n("77078"),
                s = n("18054"),
                l = n("957255"),
                u = n("49111"),
                d = n("782340");

            function o(e) {
                let {
                    canManageChannels: t,
                    canManageRoles: n,
                    canManageWebhooks: o,
                    canAccessChannel: f
                } = (0, i.useStateFromStoresObject)([l.default], () => ({
                    canManageChannels: l.default.can(u.Permissions.MANAGE_CHANNELS, e),
                    canManageRoles: l.default.can(u.Permissions.MANAGE_ROLES, e),
                    canManageWebhooks: l.default.can(u.Permissions.MANAGE_WEBHOOKS, e),
                    canAccessChannel: l.default.can(e.accessPermissions, e)
                }), [e]);
                return !__OVERLAY__ && f && (t || n || o) ? (0, a.jsx)(r.MenuItem, {
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
                    return A
                }
            }), n("222007");
            var a = n("37983");
            n("884691");
            var i = n("446674"),
                r = n("77078"),
                s = n("267363"),
                l = n("680986"),
                u = n("689275"),
                d = n("755624"),
                o = n("233069"),
                f = n("245997"),
                c = n("660478"),
                E = n("49111"),
                _ = n("782340");

            function A(e) {
                let t = function(e) {
                    let t = (0, l.useUnreadThreadsCountForParent)(e.guild_id, e.id),
                        n = (0, i.useStateFromStores)([c.default, f.default, u.default, d.default], () => {
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
                return (0, a.jsx)(r.MenuItem, {
                    id: "mark-channel-read",
                    label: _.default.Messages.MARK_AS_READ,
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
                r = n("77078"),
                s = n("629220"),
                l = n("512395"),
                u = n("282109"),
                d = n("49111"),
                o = n("782340");

            function f(e) {
                let t = (0, l.useOptInEnabledForGuild)(e.guild_id),
                    n = (0, i.useStateFromStores)([u.default], () => u.default.isChannelOptedIn(e.guild_id, e.id)),
                    f = (0, i.useStateFromStores)([u.default], () => null != e.parent_id && u.default.isChannelOptedIn(e.guild_id, e.parent_id)),
                    c = (0, i.useStateFromStores)([u.default], () => u.default.isFavorite(e.guild_id, e.id)),
                    E = () => {
                        (0, s.setOptInChannel)(e.guild_id, e.id, !n, {
                            section: d.AnalyticsSections.CONTEXT_MENU
                        })
                    },
                    _ = () => {
                        null != e.parent_id && (0, s.setOptInChannel)(e.guild_id, e.parent_id, !1, {
                            section: d.AnalyticsSections.CONTEXT_MENU
                        })
                    };
                return !t || e.isThread() ? null : e.isCategory() ? (0, a.jsx)(r.MenuItem, {
                    id: "opt-into-category",
                    label: n ? o.default.Messages.CHANNEL_OPT_OUT : o.default.Messages.CHANNEL_OPT_IN,
                    action: () => E()
                }) : (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(r.MenuItem, {
                        id: "opt-in-favorite-channel",
                        label: c ? o.default.Messages.REMOVE_FAVORITE : o.default.Messages.ADD_FAVORITE,
                        action: () => {
                            (0, s.setIsFavorite)(e.guild_id, e.id, !c, {
                                section: d.AnalyticsSections.CONTEXT_MENU
                            })
                        }
                    }), f ? (0, a.jsx)(r.MenuItem, {
                        id: "opt-out-category",
                        label: o.default.Messages.CHANNEL_OPT_OUT_PARENT_CATEGORY,
                        action: () => _()
                    }) : (0, a.jsx)(r.MenuItem, {
                        id: "opt-into-channel",
                        label: n ? o.default.Messages.CHANNEL_OPT_OUT : o.default.Messages.CHANNEL_OPT_IN,
                        action: () => E()
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
                r = n("77078"),
                s = n("483226"),
                l = n("44574"),
                u = n("811400"),
                d = n("282109"),
                o = n("627869"),
                f = n("782340");

            function c(e) {
                let t = (0, u.useGuildUnreadSetting)(e),
                    n = (0, l.useGuildUnreadsExperiment)(),
                    c = (0, i.useStateFromStores)([d.default], () => d.default.isGuildUnreadSettingEnabled(e.guild_id)),
                    E = function(e) {
                        var t;
                        let n = (0, u.useGuildUnreadSetting)(e);
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
                            l = t => {
                                (0, s.setChannelUnreadSetting)(e.guild_id, e.id, t)
                            };
                        return (0, a.jsx)(a.Fragment, {
                            children: i.map(e => {
                                let {
                                    setting: t,
                                    label: i
                                } = e;
                                return (0, a.jsx)(r.MenuRadioItem, {
                                    group: "channel-unreads",
                                    id: "".concat(t),
                                    label: i,
                                    subtext: t === o.UserUnreadSettings.NULL ? f.default.Messages.HIGHLIGHTS_AND_MENTIONS : void 0,
                                    action: () => l(t),
                                    checked: t === n
                                }, t)
                            })
                        })
                    }(e);
                return n && c ? (0, a.jsx)(r.MenuItem, {
                    id: "channel-unreads",
                    label: f.default.Messages.UNREAD_SETTINGS,
                    subtext: t === o.UserUnreadSettings.ALL_MESSAGES ? f.default.Messages.FORM_LABEL_ALL_MESSAGES : f.default.Messages.HIGHLIGHTS_AND_MENTIONS,
                    children: E
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
                    return _
                },
                addFavoriteCategory: function() {
                    return A
                },
                removeFavoriteCategory: function() {
                    return S
                },
                updateFavoriteChannels: function() {
                    return g
                },
                toggleFavoriteServerMuted: function() {
                    return C
                }
            }), n("222007");
            var a = n("249654"),
                i = n("151426"),
                r = n("872173"),
                s = n("42203"),
                l = n("957255"),
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
                    if (null == a || !a.isPrivate() && !l.default.can(d.Permissions.VIEW_CHANNEL, a)) {
                        delete e[t];
                        continue
                    }
                }
            }

            function c(e, t) {
                let n = u.default.isFavorite(e);
                !n && r.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    n.favoriteChannels[e] = i.FavoriteChannel.create({
                        nickname: "",
                        type: i.FavoriteChannelType.REFERENCE_ORIGINAL,
                        position: o(),
                        parentId: null != t ? t : "0"
                    }), f(n.favoriteChannels)
                }, r.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function E(e) {
                let t = u.default.getFavorite(e);
                null != t && r.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    if (delete n.favoriteChannels[e], t.type === i.FavoriteChannelType.CATEGORY)
                        for (let t in n.favoriteChannels) n.favoriteChannels[t].parentId === e && (n.favoriteChannels[t].parentId = "0");
                    f(n.favoriteChannels)
                }, r.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function _(e, t) {
                let n = u.default.isFavorite(e);
                n && r.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    n.favoriteChannels[e].nickname = null != t ? t : ""
                }, r.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function A(e) {
                let t = a.default.fromTimestamp(Date.now());
                r.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    n.favoriteChannels[t] = i.FavoriteChannel.create({
                        nickname: e,
                        type: i.FavoriteChannelType.CATEGORY,
                        position: o(),
                        parentId: "0"
                    })
                }, r.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function S(e) {
                E(e)
            }

            function g(e) {
                r.PreloadedUserSettingsActionCreators.updateAsync("favorites", t => {
                    for (let a of e)
                        if (null != a.position && (t.favoriteChannels[a.id].position = a.position), void 0 !== a.parent_id) {
                            var n;
                            t.favoriteChannels[a.id].parentId = null !== (n = a.parent_id) && void 0 !== n ? n : "0"
                        }
                }, r.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function C() {
                r.PreloadedUserSettingsActionCreators.updateAsync("favorites", e => {
                    e.muted = !e.muted
                }, r.UserSettingsDelay.INFREQUENT_USER_ACTION)
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
                r = n("49111");

            function s() {
                let e = (0, a.useStateFromStores)([i.default], () => i.default.getGuildId());
                return e === r.FAVORITES
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
                r = n("77078"),
                s = n("162771"),
                l = n("49111"),
                u = n("782340");

            function d(e) {
                let t = (0, i.useStateFromStores)([s.default], () => s.default.getGuildId());
                return __OVERLAY__ || t !== l.FAVORITES ? null : (0, a.jsx)(r.MenuItem, {
                    id: "set-channel-nickname",
                    label: u.default.Messages.CHANGE_NICKNAME,
                    action: function() {
                        (0, r.openModalLazy)(async () => {
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
                r = n("282109"),
                s = n("568734"),
                l = n("627869"),
                u = n("397336");

            function d(e, t, n) {
                let a = r.default.getGuildChannelFlags(e, t);
                a = (0, s.setFlag)(a, u.ChannelNotificationSettingsFlags.UNREADS_ALL_MESSAGES, n === l.UserUnreadSettings.ALL_MESSAGES), a = (0, s.setFlag)(a, u.ChannelNotificationSettingsFlags.UNREADS_MENTIONS_AND_HIGHLIGHTS, n === l.UserUnreadSettings.MENTIONS_AND_HIGHLIGHTS), i.default.updateChannelOverrideSettings(e, t, {
                    flags: a
                })
            }

            function o(e, t) {
                let n = r.default.getGuildFlags(e);
                n = (0, s.setFlag)(n, u.GuildNotificationSettingsFlags.UNREADS_MENTIONS_AND_HIGHLIGHTS, t), n = (0, s.setFlag)(n, u.GuildNotificationSettingsFlags.UNREADS_ALL_MESSAGES, !t), i.default.updateGuildNotificationSettings(e, {
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