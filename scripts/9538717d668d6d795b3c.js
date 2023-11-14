(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["9549"], {
        820542: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                categoryCollapse: function() {
                    return s
                },
                categoryExpand: function() {
                    return l
                },
                categoryCollapseAll: function() {
                    return u
                },
                categoryExpandAll: function() {
                    return i
                }
            });
            var a = n("913144");

            function s(e) {
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

            function u(e) {
                a.default.dispatch({
                    type: "CATEGORY_COLLAPSE_ALL",
                    guildId: e
                })
            }

            function i(e) {
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
            var s = n("685665");

            function l(e, t) {
                return function(n) {
                    let {
                        AnalyticsLocationProvider: l
                    } = (0, s.default)(t);
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
                    return r
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("446674"),
                l = n("77078"),
                u = n("957255"),
                i = n("49111"),
                d = n("782340");

            function r(e, t) {
                let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e.type,
                    o = (0, s.useStateFromStores)([u.default], () => u.default.can(i.Permissions.MANAGE_CHANNELS, e), [e]);
                if (__OVERLAY__ || !o) return null;
                let c = () => {
                    (0, l.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("581354").then(n.bind(n, "581354"));
                        return n => (0, a.jsx)(t, {
                            ...n,
                            channelType: r,
                            guildId: e.guild_id,
                            categoryId: e.parent_id
                        })
                    })
                };
                switch (r) {
                    case i.ChannelTypes.GUILD_TEXT:
                        return (0, a.jsx)(l.MenuItem, {
                            id: "create-text-channel",
                            label: d.default.Messages.CREATE_TEXT_CHANNEL,
                            action: c
                        });
                    case i.ChannelTypes.GUILD_VOICE:
                        return (0, a.jsx)(l.MenuItem, {
                            id: "create-voice-channel",
                            label: d.default.Messages.CREATE_VOICE_CHANNEL,
                            action: c
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
            var s = n("446674"),
                l = n("77078"),
                u = n("18054"),
                i = n("957255"),
                d = n("49111"),
                r = n("782340");

            function o(e) {
                let {
                    canManageChannels: t,
                    canManageRoles: n,
                    canManageWebhooks: o,
                    canAccessChannel: c
                } = (0, s.useStateFromStoresObject)([i.default], () => ({
                    canManageChannels: i.default.can(d.Permissions.MANAGE_CHANNELS, e),
                    canManageRoles: i.default.can(d.Permissions.MANAGE_ROLES, e),
                    canManageWebhooks: i.default.can(d.Permissions.MANAGE_WEBHOOKS, e),
                    canAccessChannel: i.default.can(e.accessPermissions, e)
                }), [e]);
                return !__OVERLAY__ && c && (t || n || o) ? (0, a.jsx)(l.MenuItem, {
                    id: "edit-channel",
                    label: e.type === d.ChannelTypes.GUILD_CATEGORY ? r.default.Messages.EDIT_CATEGORY : r.default.Messages.EDIT_CHANNEL,
                    action: () => u.default.open(e.id)
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
            var s = n("446674"),
                l = n("77078"),
                u = n("267363"),
                i = n("680986"),
                d = n("689275"),
                r = n("755624"),
                o = n("233069"),
                c = n("245997"),
                f = n("660478"),
                _ = n("49111"),
                E = n("782340");

            function S(e) {
                let t = function(e) {
                    let t = (0, i.useUnreadThreadsCountForParent)(e.guild_id, e.id),
                        n = (0, s.useStateFromStores)([f.default, c.default, d.default, r.default], () => {
                            if (e.isForumPost()) return f.default.isForumPostUnread(e.id);
                            if (e.type !== _.ChannelTypes.GUILD_CATEGORY) return f.default.hasUnread(e.id);
                            {
                                let t = c.default.getCategories(e.getGuildId());
                                if (null == t[e.id]) return !1;
                                let n = t[e.id].some(e => {
                                    let {
                                        channel: t
                                    } = e;
                                    return (0, o.isReadableType)(t.type) && f.default.hasUnread(t.id)
                                });
                                if (n) return !0;
                                let a = new Set(t[e.id].map(e => e.channel.id)),
                                    s = d.default.getThreadsForGuild(e.guild_id);
                                for (let e in s)
                                    if (a.has(e)) {
                                        for (let t in s[e])
                                            if (r.default.hasJoined(t) && !r.default.isMuted(t) && f.default.hasUnread(t)) return !0
                                    } return !1
                            }
                        }, [e]);
                    return e.isForumLikeChannel() ? t > 0 : n
                }(e);
                return (0, a.jsx)(l.MenuItem, {
                    id: "mark-channel-read",
                    label: E.default.Messages.MARK_AS_READ,
                    action: function() {
                        (0, u.ackChannel)(e)
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
                    return A
                }
            }), n("222007");
            var a = n("37983");
            n("884691");
            var s = n("866227"),
                l = n.n(s),
                u = n("446674"),
                i = n("77078"),
                d = n("820542"),
                r = n("519705"),
                o = n("319165"),
                c = n("282109"),
                f = n("679653"),
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
                M = e => {
                    let t = e > 0 ? l().add(e, "second").toISOString() : null;
                    return {
                        muted: !0,
                        mute_config: {
                            selected_time_window: e,
                            end_time: t
                        }
                    }
                };

            function A(e, t) {
                let [n, s] = (0, u.useStateFromStoresArray)([c.default], () => [c.default.isChannelMuted(e.guild_id, e.id), c.default.getChannelMuteConfig(e.guild_id, e.id)]), l = (0, o.useMutedUntilText)(s), E = (0, f.default)(e, !0);

                function A(t) {
                    t && e.type === _.ChannelTypes.GUILD_CATEGORY && (0, d.categoryCollapse)(e.id), r.default.updateChannelOverrideSettings(e.guild_id, e.id, {
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
                return n ? (0, a.jsx)(i.MenuItem, {
                    id: "unmute-channel",
                    label: T,
                    subtext: l,
                    action: () => A(!1)
                }) : (0, a.jsx)(i.MenuItem, {
                    id: "mute-channel",
                    label: N,
                    action: () => A(!0),
                    children: g().map(n => {
                        let {
                            value: s,
                            label: l
                        } = n;
                        return (0, a.jsx)(i.MenuItem, {
                            id: "".concat(s),
                            label: l,
                            action: () => (function(n) {
                                e.type === _.ChannelTypes.GUILD_CATEGORY && (0, d.categoryCollapse)(e.id);
                                let a = M(n);
                                r.default.updateChannelOverrideSettings(e.guild_id, e.id, a, t)
                            })(s)
                        }, s)
                    })
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
            var s = n("446674"),
                l = n("77078"),
                u = n("629220"),
                i = n("512395"),
                d = n("282109"),
                r = n("49111"),
                o = n("782340");

            function c(e) {
                let t = (0, i.useOptInEnabledForGuild)(e.guild_id),
                    n = (0, s.useStateFromStores)([d.default], () => d.default.isChannelOptedIn(e.guild_id, e.id)),
                    c = (0, s.useStateFromStores)([d.default], () => null != e.parent_id && d.default.isChannelOptedIn(e.guild_id, e.parent_id)),
                    f = (0, s.useStateFromStores)([d.default], () => d.default.isFavorite(e.guild_id, e.id)),
                    _ = () => {
                        (0, u.setOptInChannel)(e.guild_id, e.id, !n, {
                            section: r.AnalyticsSections.CONTEXT_MENU
                        })
                    },
                    E = () => {
                        null != e.parent_id && (0, u.setOptInChannel)(e.guild_id, e.parent_id, !1, {
                            section: r.AnalyticsSections.CONTEXT_MENU
                        })
                    };
                return !t || e.isThread() ? null : e.isCategory() ? (0, a.jsx)(l.MenuItem, {
                    id: "opt-into-category",
                    label: n ? o.default.Messages.CHANNEL_OPT_OUT : o.default.Messages.CHANNEL_OPT_IN,
                    action: () => _()
                }) : (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(l.MenuItem, {
                        id: "opt-in-favorite-channel",
                        label: f ? o.default.Messages.REMOVE_FAVORITE : o.default.Messages.ADD_FAVORITE,
                        action: () => {
                            (0, u.setIsFavorite)(e.guild_id, e.id, !f, {
                                section: r.AnalyticsSections.CONTEXT_MENU
                            })
                        }
                    }), c ? (0, a.jsx)(l.MenuItem, {
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
            var s = n("446674"),
                l = n("77078"),
                u = n("483226"),
                i = n("44574"),
                d = n("811400"),
                r = n("282109"),
                o = n("627869"),
                c = n("782340");

            function f(e) {
                let t = (0, d.useGuildUnreadSetting)(e),
                    n = (0, i.useGuildUnreadsExperiment)(),
                    f = (0, s.useStateFromStores)([r.default], () => r.default.isGuildUnreadSettingEnabled(e.guild_id)),
                    _ = function(e) {
                        var t;
                        let n = (0, d.useGuildUnreadSetting)(e);
                        let s = (t = e, [{
                                setting: o.UserUnreadSettings.NULL,
                                label: null != t.parent_id ? c.default.Messages.FORM_LABEL_DEFAULT_CATEGORY : c.default.Messages.FORM_LABEL_DEFAULT
                            }, {
                                setting: o.UserUnreadSettings.ALL_MESSAGES,
                                label: c.default.Messages.FORM_LABEL_ALL_MESSAGES
                            }, {
                                setting: o.UserUnreadSettings.MENTIONS_AND_HIGHLIGHTS,
                                label: c.default.Messages.HIGHLIGHTS_AND_MENTIONS
                            }]),
                            i = t => {
                                (0, u.setChannelUnreadSetting)(e.guild_id, e.id, t)
                            };
                        return (0, a.jsx)(a.Fragment, {
                            children: s.map(e => {
                                let {
                                    setting: t,
                                    label: s
                                } = e;
                                return (0, a.jsx)(l.MenuRadioItem, {
                                    group: "channel-unreads",
                                    id: "".concat(t),
                                    label: s,
                                    subtext: t === o.UserUnreadSettings.NULL ? c.default.Messages.HIGHLIGHTS_AND_MENTIONS : void 0,
                                    action: () => i(t),
                                    checked: t === n
                                }, t)
                            })
                        })
                    }(e);
                return n && f ? (0, a.jsx)(l.MenuItem, {
                    id: "channel-unreads",
                    label: c.default.Messages.UNREAD_SETTINGS,
                    subtext: t === o.UserUnreadSettings.ALL_MESSAGES ? c.default.Messages.FORM_LABEL_ALL_MESSAGES : c.default.Messages.HIGHLIGHTS_AND_MENTIONS,
                    children: _
                }) : null
            }
        },
        20209: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var a = n("446674"),
                s = n("162771"),
                l = n("49111");

            function u() {
                let e = (0, a.useStateFromStores)([s.default], () => s.default.getGuildId());
                return e === l.FAVORITES
            }
        },
        390008: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("446674"),
                l = n("77078"),
                u = n("162771"),
                i = n("49111"),
                d = n("782340");

            function r(e) {
                let t = (0, s.useStateFromStores)([u.default], () => u.default.getGuildId());
                return __OVERLAY__ || t !== i.FAVORITES ? null : (0, a.jsx)(l.MenuItem, {
                    id: "set-channel-nickname",
                    label: d.default.Messages.CHANGE_NICKNAME,
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
        483226: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                setChannelUnreadSetting: function() {
                    return r
                },
                setGuildUnreadSetting: function() {
                    return o
                },
                setGuildUnreadsLastCleared: function() {
                    return c
                }
            });
            var a = n("913144"),
                s = n("519705"),
                l = n("282109"),
                u = n("568734"),
                i = n("627869"),
                d = n("397336");

            function r(e, t, n) {
                let a = l.default.getGuildChannelFlags(e, t);
                a = (0, u.setFlag)(a, d.ChannelNotificationSettingsFlags.UNREADS_ALL_MESSAGES, n === i.UserUnreadSettings.ALL_MESSAGES), a = (0, u.setFlag)(a, d.ChannelNotificationSettingsFlags.UNREADS_MENTIONS_AND_HIGHLIGHTS, n === i.UserUnreadSettings.MENTIONS_AND_HIGHLIGHTS), s.default.updateChannelOverrideSettings(e, t, {
                    flags: a
                })
            }

            function o(e, t) {
                let n = l.default.getGuildFlags(e);
                n = (0, u.setFlag)(n, d.GuildNotificationSettingsFlags.UNREADS_MENTIONS_AND_HIGHLIGHTS, t), n = (0, u.setFlag)(n, d.GuildNotificationSettingsFlags.UNREADS_ALL_MESSAGES, !t), s.default.updateGuildNotificationSettings(e, {
                    flags: n
                })
            }

            function c(e) {
                a.default.dispatch({
                    type: "GUILD_UNREADS_SET_LAST_CLEARED",
                    guildId: e
                })
            }
        }
    }
]);