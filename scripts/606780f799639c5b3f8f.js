(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["56287"], {
        308798: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("446674"),
                s = n("77078"),
                r = n("18054"),
                o = n("819689"),
                l = n("430475"),
                d = n("610730"),
                u = n("271938"),
                S = n("957255"),
                f = n("49111"),
                c = n("782340");

            function g(e) {
                let t = e.isForumPost(),
                    g = (0, a.useStateFromStores)([u.default], () => e.isOwner(u.default.getId()), [e]),
                    {
                        canManageChannel: N,
                        canAccessChannel: _
                    } = (0, a.useStateFromStoresObject)([S.default], () => ({
                        canAccessChannel: S.default.can(e.accessPermissions, e),
                        canManageChannel: S.default.can(e.isThread() ? f.Permissions.MANAGE_THREADS : f.Permissions.MANAGE_CHANNELS, e)
                    }), [e]),
                    E = (0, a.useStateFromStores)([d.default], () => {
                        var t;
                        return null !== (t = d.default.getCount(e.id)) && void 0 !== t ? t : 0
                    }, [e.id]),
                    {
                        firstMessage: h
                    } = (0, a.useStateFromStores)([l.default], () => l.default.getMessage(e.id), [e.id]),
                    T = t && (N || g && E < 1),
                    I = t && g && !N && E > 0 && null != h;
                return _ && (N || T || I) ? (0, i.jsx)(s.MenuItem, {
                    id: "delete-channel",
                    label: (() => {
                        if (e.type === f.ChannelTypes.GUILD_CATEGORY) return c.default.Messages.DELETE_CATEGORY;
                        if (e.isForumPost()) return T ? c.default.Messages.DELETE_FORUM_POST : c.default.Messages.DELETE_MESSAGE;
                        if (e.isThread()) return c.default.Messages.DELETE_THREAD;
                        return c.default.Messages.DELETE_CHANNEL
                    })(),
                    color: "danger",
                    action: () => (0, s.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("575351").then(n.bind(n, "575351"));
                        return n => (0, i.jsx)(t, {
                            ...n,
                            onConfirm: () => {
                                n.onClose(), I ? o.default.deleteMessage(e.id, e.id) : r.default.deleteChannel(e.id)
                            },
                            channel: e
                        })
                    })
                }) : null
            }
        },
        625399: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                },
                useChannelNotificationCustomSettingsItem: function() {
                    return E
                }
            }), n("222007"), n("702976");
            var i = n("37983"),
                a = n("884691"),
                s = n("77078"),
                r = n("519705"),
                o = n("437756"),
                l = n("277796"),
                d = n("507313"),
                u = n("282109"),
                S = n("34676"),
                f = n("49111"),
                c = n("133335"),
                g = n("397336"),
                N = n("782340");

            function _(e) {
                let t = (0, o.useChannelPresetSettings)(e),
                    n = (0, o.useChannelPresetInheritance)(e),
                    r = t.preset === d.Presets.CUSTOM && !n.inherited,
                    [l, u] = a.useState(r),
                    [S, c] = a.useState(!1),
                    g = S ? d.Presets.CUSTOM : t.preset,
                    _ = E(e, () => c(!1));
                if (e.type === f.ChannelTypes.GUILD_VOICE) return null;
                let h = "parent" === n.inheritedFrom ? N.default.Messages.FORM_LABEL_DEFAULT_CATEGORY : N.default.Messages.FORM_LABEL_DEFAULT;
                return e.type === f.ChannelTypes.GUILD_STAGE_VOICE ? (0, i.jsxs)(s.MenuItem, {
                    id: "channel_notification_settings",
                    label: N.default.Messages.NOTIFICATIONS,
                    children: [(0, i.jsx)(s.MenuRadioItem, {
                        id: "cns_default",
                        label: h,
                        checked: n.inherited,
                        group: "channel_notification_settings",
                        subtext: t.notification === f.UserNotificationSettings.NO_MESSAGES ? N.default.Messages.FORM_LABEL_NOTHING : N.default.Messages.FORM_LABEL_LIVE_STAGES_ONLY,
                        action: () => (0, o.updateChannelToGuildDefault)(e.guild_id, e.id)
                    }), (0, i.jsx)(s.MenuRadioItem, {
                        id: "cns_only_mention",
                        group: "channel_notification_settings",
                        checked: !n.inherited && t.notification !== f.UserNotificationSettings.NO_MESSAGES,
                        label: N.default.Messages.FORM_LABEL_LIVE_STAGES_ONLY,
                        action: () => (0, o.updateChannelNotificationSetting)(e.guild_id, e.id, f.UserNotificationSettings.ONLY_MENTIONS)
                    }), (0, i.jsx)(s.MenuRadioItem, {
                        id: "cns_no_message",
                        group: "channel_notification_settings",
                        label: N.default.Messages.FORM_LABEL_NOTHING,
                        checked: !n.inherited && t.notification === f.UserNotificationSettings.NO_MESSAGES,
                        action: () => (0, o.updateChannelNotificationSetting)(e.guild_id, e.id, f.UserNotificationSettings.NO_MESSAGES)
                    })]
                }) : (0, i.jsxs)(s.MenuItem, {
                    id: "channel_notification_settings",
                    label: N.default.Messages.NOTIFICATIONS,
                    children: [(0, i.jsx)(s.MenuRadioItem, {
                        id: "cns_default",
                        label: h,
                        group: "channel_notification_settings",
                        checked: n.inherited && !S,
                        subtext: n.inheritedPreset,
                        action: () => ((0, o.updateChannelToGuildDefault)(e.guild_id, e.id), c(!1))
                    }), (0, i.jsx)(s.MenuRadioItem, {
                        id: "cns_everything",
                        group: "channel_notification_settings",
                        label: N.default.Messages.NOTIFICATION_PRESET_1,
                        checked: !n.inherited && g === d.Presets.ALL_MESSAGES,
                        action: () => ((0, o.updateChannelPreset)(e.guild_id, e.id, d.Presets.ALL_MESSAGES), c(!1))
                    }), (0, i.jsx)(s.MenuRadioItem, {
                        id: "cns_essentials",
                        group: "channel_notification_settings",
                        label: N.default.Messages.NOTIFICATION_PRESET_2,
                        checked: !n.inherited && g === d.Presets.MENTIONS,
                        action: () => ((0, o.updateChannelPreset)(e.guild_id, e.id, d.Presets.MENTIONS), c(!1))
                    }), (0, i.jsx)(s.MenuRadioItem, {
                        id: "cns_nothing",
                        group: "channel_notification_settings",
                        label: N.default.Messages.NOTIFICATION_PRESET_3,
                        checked: !n.inherited && g === d.Presets.NOTHING,
                        action: () => ((0, o.updateChannelPreset)(e.guild_id, e.id, d.Presets.NOTHING), c(!1))
                    }), (0, i.jsx)(s.MenuRadioItem, {
                        id: "cns_custom",
                        group: "channel_notification_settings",
                        label: N.default.Messages.NOTIFICATION_PRESET_CUSTOM,
                        checked: S || !n.inherited && g === d.Presets.CUSTOM,
                        action: () => (u(!0), c(!0))
                    }), (l || r) && _]
                })
            }

            function E(e, t) {
                let {
                    notification: n,
                    unread: a
                } = (0, o.useChannelPresetSettings)(e), d = e => {
                    e(), t()
                }, _ = t => {
                    let n = {
                        message_notifications: t
                    };
                    t === f.UserNotificationSettings.ALL_MESSAGES && a !== c.UnreadSetting.ALL_MESSAGES && (n.flags = (0, l.withChannelUnreadFlags)(u.default.getChannelIdFlags(e.guild_id, e.id), g.ChannelNotificationSettingsFlags.UNREADS_ALL_MESSAGES)), r.default.updateChannelOverrideSettings(e.guild_id, e.id, n, S.NotificationLabel.notifications(t))
                };
                return (0, i.jsxs)(s.MenuGroup, {
                    children: [(0, i.jsxs)(s.MenuItem, {
                        id: "unread_setting",
                        label: "Unread Badges",
                        children: [(0, i.jsx)(s.MenuRadioItem, {
                            id: "unread_setting_all_messages",
                            group: "unread_setting",
                            checked: a === c.UnreadSetting.ALL_MESSAGES,
                            label: N.default.Messages.NOTIFICATION_SETTINGS_PRESETS_ALL_MESSAGES,
                            action: () => d(() => (0, o.updateChannelUnreadSetting)(e.guild_id, e.id, c.UnreadSetting.ALL_MESSAGES))
                        }), (0, i.jsx)(s.MenuRadioItem, {
                            id: "unread_setting_mention_only",
                            group: "unread_setting",
                            checked: a === c.UnreadSetting.ONLY_MENTIONS,
                            label: N.default.Messages.NOTIFICATION_SETTINGS_PRESETS_MENTION_ONLY,
                            disabled: a !== c.UnreadSetting.ONLY_MENTIONS && n === f.UserNotificationSettings.ALL_MESSAGES,
                            subtext: a !== c.UnreadSetting.ONLY_MENTIONS && n === f.UserNotificationSettings.ALL_MESSAGES ? N.default.Messages.NOTIFICATION_SETTINGS_UNREAD_MENTION_ONLY_DISABLED : void 0,
                            action: () => d(() => (0, o.updateChannelUnreadSetting)(e.guild_id, e.id, c.UnreadSetting.ONLY_MENTIONS))
                        })]
                    }, "unread_setting"), (0, i.jsxs)(s.MenuItem, {
                        id: "push_settings",
                        label: N.default.Messages.NOTIFICATIONS,
                        children: [(0, i.jsx)(s.MenuRadioItem, {
                            group: "notification-preset",
                            id: "push_settings_everything",
                            label: N.default.Messages.NOTIFICATION_SETTINGS_PRESETS_ALL_MESSAGES,
                            checked: n === f.UserNotificationSettings.ALL_MESSAGES,
                            subtext: a !== c.UnreadSetting.ALL_MESSAGES && n !== f.UserNotificationSettings.ALL_MESSAGES ? N.default.Messages.NOTIFICATION_SETTINGS_UNREAD_UPDATE_WARNING : void 0,
                            action: () => d(() => _(f.UserNotificationSettings.ALL_MESSAGES))
                        }), (0, i.jsx)(s.MenuRadioItem, {
                            group: "notification-preset",
                            id: "push_settings_everything_mention",
                            checked: n === f.UserNotificationSettings.ONLY_MENTIONS,
                            label: N.default.Messages.NOTIFICATION_SETTINGS_PRESETS_MENTION_ONLY,
                            action: () => d(() => _(f.UserNotificationSettings.ONLY_MENTIONS))
                        }), (0, i.jsx)(s.MenuRadioItem, {
                            group: "notification-preset",
                            id: "push_settings_everything_nothing",
                            label: N.default.Messages.NOTIFICATION_SETTINGS_PRESETS_NONE,
                            checked: n === f.UserNotificationSettings.NO_MESSAGES,
                            action: () => d(() => _(f.UserNotificationSettings.NO_MESSAGES))
                        })]
                    }, "push_settings")]
                })
            }
        },
        200008: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                addFavoriteChannel: function() {
                    return f
                },
                removeFavoriteChannel: function() {
                    return c
                },
                setFavoriteChannelNickname: function() {
                    return g
                },
                addFavoriteCategory: function() {
                    return N
                },
                removeFavoriteCategory: function() {
                    return _
                },
                updateFavoriteChannels: function() {
                    return E
                },
                updateFavoriteChannelParent: function() {
                    return h
                },
                toggleFavoriteServerMuted: function() {
                    return T
                }
            }), n("222007");
            var i = n("249654"),
                a = n("151426"),
                s = n("872173"),
                r = n("42203"),
                o = n("957255"),
                l = n("379881"),
                d = n("843455");

            function u() {
                let e = l.default.getFavoriteChannels(),
                    t = 1;
                for (let n in e) t = Math.max(t, e[n].order);
                return t + 1
            }

            function S(e) {
                for (let t in e) {
                    let n = e[t];
                    if (null == n) {
                        delete e[t];
                        continue
                    }
                    if (n.type === a.FavoriteChannelType.CATEGORY) continue;
                    let i = r.default.getChannel(t);
                    if (null == i || !i.isPrivate() && !o.default.can(d.Permissions.VIEW_CHANNEL, i)) {
                        delete e[t];
                        continue
                    }
                }
            }

            function f(e, t) {
                let n = l.default.isFavorite(e);
                !n && s.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    n.favoriteChannels[e] = a.FavoriteChannel.create({
                        nickname: "",
                        type: a.FavoriteChannelType.REFERENCE_ORIGINAL,
                        position: u(),
                        parentId: null != t ? t : "0"
                    }), S(n.favoriteChannels)
                }, s.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function c(e) {
                let t = l.default.getFavorite(e);
                null != t && s.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    if (delete n.favoriteChannels[e], t.type === a.FavoriteChannelType.CATEGORY)
                        for (let t in n.favoriteChannels) n.favoriteChannels[t].parentId === e && (n.favoriteChannels[t].parentId = "0");
                    S(n.favoriteChannels)
                }, s.UserSettingsDelay.INFREQUENT_USER_ACTION)
            }

            function g(e, t) {
                let n = l.default.isFavorite(e);
                n && s.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    n.favoriteChannels[e].nickname = null != t ? t : ""
                }, s.UserSettingsDelay.INFREQUENT_USER_ACTION)
            }

            function N(e) {
                let t = i.default.fromTimestamp(Date.now());
                s.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    n.favoriteChannels[t] = a.FavoriteChannel.create({
                        nickname: e,
                        type: a.FavoriteChannelType.CATEGORY,
                        position: u(),
                        parentId: "0"
                    })
                }, s.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function _(e) {
                c(e)
            }

            function E(e) {
                s.PreloadedUserSettingsActionCreators.updateAsync("favorites", t => {
                    for (let i of e)
                        if (null != i.position && (t.favoriteChannels[i.id].position = i.position), void 0 !== i.parent_id) {
                            var n;
                            t.favoriteChannels[i.id].parentId = null !== (n = i.parent_id) && void 0 !== n ? n : "0"
                        }
                }, s.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function h(e, t) {
                s.PreloadedUserSettingsActionCreators.updateAsync("favorites", n => {
                    n.favoriteChannels[e].parentId = null != t ? t : "0"
                }, s.UserSettingsDelay.FREQUENT_USER_ACTION)
            }

            function T() {
                s.PreloadedUserSettingsActionCreators.updateAsync("favorites", e => {
                    e.muted = !e.muted
                }, s.UserSettingsDelay.INFREQUENT_USER_ACTION)
            }
        },
        20209: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("446674"),
                a = n("162771"),
                s = n("49111");

            function r() {
                let e = (0, i.useStateFromStores)([a.default], () => a.default.getGuildId());
                return e === s.FAVORITES
            }
        },
        437756: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useChannelPresetSettings: function() {
                    return g
                },
                useChannelPresetInheritance: function() {
                    return N
                },
                updateChannelPreset: function() {
                    return _
                },
                updateChannelToGuildDefault: function() {
                    return E
                },
                updateChannelUnreadSetting: function() {
                    return h
                },
                updateChannelNotificationSetting: function() {
                    return T
                }
            }), n("222007");
            var i = n("65597"),
                a = n("519705"),
                s = n("42203"),
                r = n("282109"),
                o = n("34676"),
                l = n("47495"),
                d = n("277796"),
                u = n("507313"),
                S = n("49111"),
                f = n("133335"),
                c = n("397336");

            function g(e) {
                let t = (0, i.default)([r.default], () => r.default.resolveUnreadSetting(e)),
                    n = (0, i.default)([r.default], () => r.default.resolvedMessageNotifications(e));
                return {
                    unread: t,
                    notification: n,
                    preset: (0, u.presetFromSettings)(t, n)
                }
            }

            function N(e) {
                let t = (0, i.useStateFromStoresArray)([r.default], () => (0, l.filterOverrides)(r.default.getChannelOverrides(e.guild_id), {
                        ignoreMute: !0,
                        ignoreUnreadSetting: !1,
                        ignoreNotificationSetting: !1
                    })),
                    [n, a] = (0, i.useStateFromStoresArray)([r.default, s.default], () => {
                        let n = s.default.getChannel(e.parent_id);
                        return null != n && t.includes(n.id) ? ["parent", (0, u.presetName)((0, u.presetFromSettings)(r.default.resolveUnreadSetting(n), r.default.resolvedMessageNotifications(n)))] : ["guild", (0, u.presetName)((0, u.presetFromSettings)(r.default.getGuildUnreadSetting(e.guild_id), r.default.getMessageNotifications(e.guild_id)))]
                    }, [e.guild_id, e.parent_id, t]);
                return {
                    inherited: !t.includes(e.id),
                    inheritedFrom: n,
                    inheritedPreset: a
                }
            }

            function _(e, t, n) {
                let i = r.default.getChannelIdFlags(e, t);
                n === u.Presets.ALL_MESSAGES ? a.default.updateChannelOverrideSettings(e, t, {
                    message_notifications: S.UserNotificationSettings.ALL_MESSAGES,
                    flags: (0, d.withChannelUnreadFlags)(i, c.ChannelNotificationSettingsFlags.UNREADS_ALL_MESSAGES)
                }, o.NotificationLabels.PresetAll) : n === u.Presets.MENTIONS ? a.default.updateChannelOverrideSettings(e, t, {
                    message_notifications: S.UserNotificationSettings.ONLY_MENTIONS,
                    flags: (0, d.withChannelUnreadFlags)(i, c.ChannelNotificationSettingsFlags.UNREADS_ONLY_MENTIONS)
                }, o.NotificationLabels.PresetMentions) : n === u.Presets.NOTHING && a.default.updateChannelOverrideSettings(e, t, {
                    message_notifications: S.UserNotificationSettings.NO_MESSAGES,
                    flags: (0, d.withChannelUnreadFlags)(i, c.ChannelNotificationSettingsFlags.UNREADS_ONLY_MENTIONS)
                }, o.NotificationLabels.PresetNothing)
            }

            function E(e, t) {
                a.default.updateChannelOverrideSettings(e, t, {
                    message_notifications: S.UserNotificationSettings.NULL,
                    flags: (0, d.resetChannelUnreadFlags)(r.default.getChannelIdFlags(e, t))
                }, o.NotificationLabels.PresetDefault)
            }

            function h(e, t, n) {
                let i = r.default.getChannelIdFlags(e, t);
                a.default.updateChannelOverrideSettings(e, t, {
                    flags: (0, d.withChannelUnreadFlags)(i, n === f.UnreadSetting.ALL_MESSAGES ? c.ChannelNotificationSettingsFlags.UNREADS_ALL_MESSAGES : c.ChannelNotificationSettingsFlags.UNREADS_ONLY_MENTIONS)
                }, o.NotificationLabel.unreads(n))
            }

            function T(e, t, n) {
                a.default.updateChannelOverrideSettings(e, t, {
                    message_notifications: n
                }, o.NotificationLabel.notifications(n))
            }
        },
        507313: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                Presets: function() {
                    return i
                },
                presetFromSettings: function() {
                    return d
                },
                presetName: function() {
                    return u
                }
            }), n("794252");
            var i, a, s = n("506838"),
                r = n("49111"),
                o = n("133335"),
                l = n("782340");

            function d(e, t) {
                return (0, s.match)([t, e]).with([r.UserNotificationSettings.ALL_MESSAGES, o.UnreadSetting.ALL_MESSAGES], () => "all_messages").with([r.UserNotificationSettings.ONLY_MENTIONS, o.UnreadSetting.UNSET], () => "mentions").with([r.UserNotificationSettings.ONLY_MENTIONS, o.UnreadSetting.ONLY_MENTIONS], () => "mentions").with([r.UserNotificationSettings.NO_MESSAGES, o.UnreadSetting.UNSET], () => "nothing").with([r.UserNotificationSettings.NO_MESSAGES, o.UnreadSetting.ONLY_MENTIONS], () => "nothing").otherwise(() => "custom")
            }

            function u(e) {
                return (0, s.match)(e).with("all_messages", () => l.default.Messages.NOTIFICATION_PRESET_1).with("mentions", () => l.default.Messages.NOTIFICATION_PRESET_2).with("nothing", () => l.default.Messages.NOTIFICATION_PRESET_3).with("custom", () => l.default.Messages.NOTIFICATION_PRESET_CUSTOM).exhaustive()
            }(a = i || (i = {})).ALL_MESSAGES = "all_messages", a.MENTIONS = "mentions", a.NOTHING = "nothing", a.CUSTOM = "custom"
        }
    }
]);