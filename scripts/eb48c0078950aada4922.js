(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["83533"], {
        308798: function(e, t, n) {
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
                l = n("18054"),
                o = n("819689"),
                d = n("430475"),
                r = n("610730"),
                u = n("271938"),
                S = n("957255"),
                g = n("49111"),
                _ = n("782340");

            function c(e) {
                let t = e.isForumPost(),
                    c = (0, a.useStateFromStores)([u.default], () => e.isOwner(u.default.getId()), [e]),
                    {
                        canManageChannel: f,
                        canAccessChannel: N
                    } = (0, a.useStateFromStoresObject)([S.default], () => ({
                        canAccessChannel: S.default.can(e.accessPermissions, e),
                        canManageChannel: S.default.can(e.isThread() ? g.Permissions.MANAGE_THREADS : g.Permissions.MANAGE_CHANNELS, e)
                    }), [e]),
                    E = (0, a.useStateFromStores)([r.default], () => {
                        var t;
                        return null !== (t = r.default.getCount(e.id)) && void 0 !== t ? t : 0
                    }, [e.id]),
                    {
                        firstMessage: h
                    } = (0, a.useStateFromStores)([d.default], () => d.default.getMessage(e.id), [e.id]),
                    M = t && (f || c && E < 1),
                    O = t && c && !f && E > 0 && null != h;
                return N && (f || M || O) ? (0, i.jsx)(s.MenuItem, {
                    id: "delete-channel",
                    label: (() => {
                        if (e.type === g.ChannelTypes.GUILD_CATEGORY) return _.default.Messages.DELETE_CATEGORY;
                        if (e.isForumPost()) return M ? _.default.Messages.DELETE_FORUM_POST : _.default.Messages.DELETE_MESSAGE;
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
                                n.onClose(), O ? o.default.deleteMessage(e.id, e.id) : l.default.deleteChannel(e.id)
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
                    return S
                }
            }), n("222007");
            var i = n("37983"),
                a = n("884691"),
                s = n("77078"),
                l = n("437756"),
                o = n("507313"),
                d = n("49111"),
                r = n("133335"),
                u = n("782340");

            function S(e) {
                let t = (0, l.useChannelPresetSettings)(e),
                    n = (0, l.useChannelPresetInheritance)(e),
                    [S, g] = a.useState(t.preset === o.Presets.CUSTOM),
                    [_, c] = a.useState(!1),
                    f = _ ? o.Presets.CUSTOM : t.preset;
                if (e.type === d.ChannelTypes.GUILD_VOICE) return null;
                let N = "parent" === n.inheritedFrom ? u.default.Messages.FORM_LABEL_DEFAULT_CATEGORY : u.default.Messages.FORM_LABEL_DEFAULT;
                return e.type === d.ChannelTypes.GUILD_STAGE_VOICE ? (0, i.jsxs)(s.MenuItem, {
                    id: "channel_notification_settings",
                    label: u.default.Messages.NOTIFICATIONS,
                    children: [(0, i.jsx)(s.MenuRadioItem, {
                        id: "cns_default",
                        label: N,
                        checked: n.inherited,
                        group: "channel_notification_settings",
                        subtext: t.notification === d.UserNotificationSettings.NO_MESSAGES ? u.default.Messages.FORM_LABEL_NOTHING : u.default.Messages.FORM_LABEL_LIVE_STAGES_ONLY,
                        action: () => (0, l.updateChannelToGuildDefault)(e.guild_id, e.id)
                    }), (0, i.jsx)(s.MenuRadioItem, {
                        id: "cns_only_mention",
                        group: "channel_notification_settings",
                        checked: !n.inherited && t.notification !== d.UserNotificationSettings.NO_MESSAGES,
                        label: u.default.Messages.FORM_LABEL_LIVE_STAGES_ONLY,
                        action: () => (0, l.updateChannelNotificationSetting)(e.guild_id, e.id, d.UserNotificationSettings.ONLY_MENTIONS)
                    }), (0, i.jsx)(s.MenuRadioItem, {
                        id: "cns_no_message",
                        group: "channel_notification_settings",
                        label: u.default.Messages.FORM_LABEL_NOTHING,
                        checked: !n.inherited && t.notification === d.UserNotificationSettings.NO_MESSAGES,
                        action: () => (0, l.updateChannelNotificationSetting)(e.guild_id, e.id, d.UserNotificationSettings.NO_MESSAGES)
                    })]
                }) : (0, i.jsxs)(s.MenuItem, {
                    id: "channel_notification_settings",
                    label: u.default.Messages.NOTIFICATIONS,
                    children: [(0, i.jsx)(s.MenuRadioItem, {
                        id: "cns_default",
                        label: N,
                        group: "channel_notification_settings",
                        checked: n.inherited && !_,
                        subtext: n.inheritedPreset,
                        action: () => ((0, l.updateChannelToGuildDefault)(e.guild_id, e.id), c(!1))
                    }), (0, i.jsx)(s.MenuRadioItem, {
                        id: "cns_everything",
                        group: "channel_notification_settings",
                        label: u.default.Messages.NOTIFICATION_PRESET_1,
                        checked: !n.inherited && f === o.Presets.ALL_MESSAGES,
                        action: () => ((0, l.updateChannelPreset)(e.guild_id, e.id, o.Presets.ALL_MESSAGES), c(!1))
                    }), (0, i.jsx)(s.MenuRadioItem, {
                        id: "cns_essentials",
                        group: "channel_notification_settings",
                        label: u.default.Messages.NOTIFICATION_PRESET_2,
                        checked: !n.inherited && f === o.Presets.MENTIONS,
                        action: () => ((0, l.updateChannelPreset)(e.guild_id, e.id, o.Presets.MENTIONS), c(!1))
                    }), (0, i.jsx)(s.MenuRadioItem, {
                        id: "cns_nothing",
                        group: "channel_notification_settings",
                        label: u.default.Messages.NOTIFICATION_PRESET_3,
                        checked: !n.inherited && f === o.Presets.NOTHING,
                        action: () => ((0, l.updateChannelPreset)(e.guild_id, e.id, o.Presets.NOTHING), c(!1))
                    }), (0, i.jsx)(s.MenuRadioItem, {
                        id: "cns_custom",
                        group: "channel_notification_settings",
                        label: u.default.Messages.NOTIFICATION_PRESET_CUSTOM,
                        checked: _ || !n.inherited && f === o.Presets.CUSTOM,
                        action: () => (g(!0), c(!0))
                    }), (S || f === o.Presets.CUSTOM) && (0, i.jsxs)(s.MenuGroup, {
                        children: [(0, i.jsxs)(s.MenuItem, {
                            id: "unread_setting",
                            label: "Unread Badges",
                            children: [(0, i.jsx)(s.MenuRadioItem, {
                                id: "unread_setting_all_messages",
                                group: "unread_setting",
                                checked: t.unread === r.UnreadSetting.ALL_MESSAGES,
                                label: u.default.Messages.NOTIFICATION_SETTINGS_PRESETS_ALL_MESSAGES,
                                action: () => ((0, l.updateChannelUnreadSetting)(e.guild_id, e.id, r.UnreadSetting.ALL_MESSAGES), c(!1))
                            }), (0, i.jsx)(s.MenuRadioItem, {
                                id: "unread_setting_mention_only",
                                group: "unread_setting",
                                checked: t.unread === r.UnreadSetting.ONLY_MENTIONS,
                                label: u.default.Messages.NOTIFICATION_SETTINGS_PRESETS_MENTION_ONLY,
                                action: () => ((0, l.updateChannelUnreadSetting)(e.guild_id, e.id, r.UnreadSetting.ONLY_MENTIONS), c(!1))
                            })]
                        }, "unread_setting"), (0, i.jsxs)(s.MenuItem, {
                            id: "push_settings",
                            label: "Push Notifications",
                            children: [(0, i.jsx)(s.MenuRadioItem, {
                                group: "notification-preset",
                                id: "push_settings_everything",
                                label: u.default.Messages.NOTIFICATION_SETTINGS_PRESETS_ALL_MESSAGES,
                                checked: t.notification === d.UserNotificationSettings.ALL_MESSAGES,
                                action: () => ((0, l.updateChannelNotificationSetting)(e.guild_id, e.id, d.UserNotificationSettings.ALL_MESSAGES), c(!1))
                            }), (0, i.jsx)(s.MenuRadioItem, {
                                group: "notification-preset",
                                id: "push_settings_everything_mention",
                                checked: t.notification === d.UserNotificationSettings.ONLY_MENTIONS,
                                label: u.default.Messages.NOTIFICATION_SETTINGS_PRESETS_MENTION_ONLY,
                                action: () => ((0, l.updateChannelNotificationSetting)(e.guild_id, e.id, d.UserNotificationSettings.ONLY_MENTIONS), c(!1))
                            }), (0, i.jsx)(s.MenuRadioItem, {
                                group: "notification-preset",
                                id: "push_settings_everything_nothing",
                                label: u.default.Messages.NOTIFICATION_SETTINGS_PRESETS_NONE,
                                checked: t.notification === d.UserNotificationSettings.NO_MESSAGES,
                                action: () => ((0, l.updateChannelNotificationSetting)(e.guild_id, e.id, d.UserNotificationSettings.NO_MESSAGES), c(!1))
                            })]
                        }, "push_settings")]
                    })]
                })
            }
        },
        47495: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getMuteTimeOptions: function() {
                    return g
                },
                filterOverrides: function() {
                    return c
                },
                useShouldUseNewNotificationSystem: function() {
                    return f
                }
            }), n("702976");
            var i = n("446674"),
                a = n("668597"),
                s = n("282109"),
                l = n("568734"),
                o = n("640497"),
                d = n("49111"),
                r = n("468200"),
                u = n("397336"),
                S = n("782340");

            function g() {
                return [{
                    label: S.default.Messages.MUTE_DURATION_15_MINUTES,
                    value: r.MuteUntilSeconds.MINUTES_15
                }, {
                    label: S.default.Messages.MUTE_DURATION_1_HOUR,
                    value: r.MuteUntilSeconds.HOURS_1
                }, {
                    label: S.default.Messages.MUTE_DURATION_3_HOURS,
                    value: r.MuteUntilSeconds.HOURS_3
                }, {
                    label: S.default.Messages.MUTE_DURATION_8_HOURS,
                    value: r.MuteUntilSeconds.HOURS_8
                }, {
                    label: S.default.Messages.MUTE_DURATION_24_HOURS,
                    value: r.MuteUntilSeconds.HOURS_24
                }, {
                    label: S.default.Messages.MUTE_DURATION_ALWAYS,
                    value: r.MuteUntilSeconds.ALWAYS
                }]
            }
            let _ = {
                ignoreMute: !1,
                ignoreUnreadSetting: !0,
                ignoreNotificationSetting: !1
            };

            function c(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _;
                return Object.keys(e).filter(n => {
                    var i, s;
                    let o = e[n].message_notifications !== d.UserNotificationSettings.NULL,
                        r = l.hasFlag(null !== (i = e[n].flags) && void 0 !== i ? i : 0, u.ChannelNotificationSettingsFlags.UNREADS_ALL_MESSAGES) || l.hasFlag(null !== (s = e[n].flags) && void 0 !== s ? s : 0, u.ChannelNotificationSettingsFlags.UNREADS_ONLY_MENTIONS);
                    return !t.ignoreUnreadSetting && r || !t.ignoreNotificationSetting && o || !t.ignoreMute && (0, a.computeIsMuted)(e[n])
                })
            }

            function f(e) {
                let t = (0, i.useStateFromStores)([s.default], () => s.default.useNewNotifications);
                return o.default.useExperiment({
                    location: e
                }, {
                    autoTrackExposure: !1
                }).enabled && t
            }
        },
        437756: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useChannelPresetSettings: function() {
                    return _
                },
                useChannelPresetInheritance: function() {
                    return c
                },
                updateChannelPreset: function() {
                    return f
                },
                updateChannelToGuildDefault: function() {
                    return N
                },
                updateChannelUnreadSetting: function() {
                    return E
                },
                updateChannelNotificationSetting: function() {
                    return h
                }
            }), n("222007");
            var i = n("65597"),
                a = n("519705"),
                s = n("42203"),
                l = n("282109"),
                o = n("47495"),
                d = n("277796"),
                r = n("507313"),
                u = n("49111"),
                S = n("133335"),
                g = n("397336");

            function _(e) {
                let t = (0, i.default)([l.default], () => l.default.resolveUnreadSetting(e)),
                    n = (0, i.default)([l.default], () => l.default.resolvedMessageNotifications(e));
                return {
                    unread: t,
                    notification: n,
                    preset: (0, r.presetFromSettings)(t, n)
                }
            }

            function c(e) {
                let t = (0, i.useStateFromStoresArray)([l.default], () => (0, o.filterOverrides)(l.default.getChannelOverrides(e.guild_id), {
                        ignoreMute: !0,
                        ignoreUnreadSetting: !1,
                        ignoreNotificationSetting: !1
                    })),
                    [n, a] = (0, i.useStateFromStoresArray)([l.default, s.default], () => {
                        let n = s.default.getChannel(e.parent_id);
                        return null != n && t.includes(n.id) ? ["parent", (0, r.presetName)((0, r.presetFromSettings)(l.default.resolveUnreadSetting(n), l.default.resolvedMessageNotifications(n)))] : ["guild", (0, r.presetName)((0, r.presetFromSettings)(l.default.getGuildUnreadSetting(e.guild_id), l.default.getMessageNotifications(e.guild_id)))]
                    }, [e.guild_id, e.parent_id, t]);
                return {
                    inherited: !t.includes(e.id),
                    inheritedFrom: n,
                    inheritedPreset: a
                }
            }

            function f(e, t, n) {
                let i = l.default.getChannelIdFlags(e, t);
                n === r.Presets.ALL_MESSAGES ? a.default.updateChannelOverrideSettings(e, t, {
                    message_notifications: u.UserNotificationSettings.ALL_MESSAGES,
                    flags: (0, d.withChannelUnreadFlags)(i, g.ChannelNotificationSettingsFlags.UNREADS_ALL_MESSAGES)
                }) : n === r.Presets.MENTIONS ? a.default.updateChannelOverrideSettings(e, t, {
                    message_notifications: u.UserNotificationSettings.ONLY_MENTIONS,
                    flags: (0, d.withChannelUnreadFlags)(i, g.ChannelNotificationSettingsFlags.UNREADS_ONLY_MENTIONS)
                }) : n === r.Presets.NOTHING && a.default.updateChannelOverrideSettings(e, t, {
                    message_notifications: u.UserNotificationSettings.NO_MESSAGES,
                    flags: (0, d.withChannelUnreadFlags)(i, g.ChannelNotificationSettingsFlags.UNREADS_ONLY_MENTIONS)
                })
            }

            function N(e, t) {
                a.default.updateChannelOverrideSettings(e, t, {
                    message_notifications: u.UserNotificationSettings.NULL,
                    flags: (0, d.resetChannelUnreadFlags)(l.default.getChannelIdFlags(e, t))
                })
            }

            function E(e, t, n) {
                let i = l.default.getChannelIdFlags(e, t);
                a.default.updateChannelOverrideSettings(e, t, {
                    flags: (0, d.withChannelUnreadFlags)(i, n === S.UnreadSetting.ALL_MESSAGES ? g.ChannelNotificationSettingsFlags.UNREADS_ALL_MESSAGES : g.ChannelNotificationSettingsFlags.UNREADS_ONLY_MENTIONS)
                })
            }

            function h(e, t, n) {
                a.default.updateChannelOverrideSettings(e, t, {
                    message_notifications: n
                })
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
                    return o
                }
            });
            var i = n("568734"),
                a = n("397336");

            function s(e, t) {
                var n;
                return i.addFlag((n = e, i.removeFlags(n, a.GuildNotificationSettingsFlags.UNREADS_ALL_MESSAGES, a.GuildNotificationSettingsFlags.UNREADS_ONLY_MENTIONS)), t)
            }
            let l = e => i.removeFlags(e, a.ChannelNotificationSettingsFlags.UNREADS_ALL_MESSAGES, a.ChannelNotificationSettingsFlags.UNREADS_ONLY_MENTIONS);

            function o(e, t) {
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
                    return r
                },
                presetName: function() {
                    return u
                }
            }), n("794252");
            var i, a, s = n("506838"),
                l = n("49111"),
                o = n("133335"),
                d = n("782340");

            function r(e, t) {
                return (0, s.match)([t, e]).with([l.UserNotificationSettings.ALL_MESSAGES, o.UnreadSetting.ALL_MESSAGES], () => "all_messages").with([l.UserNotificationSettings.ONLY_MENTIONS, o.UnreadSetting.UNSET], () => "mentions").with([l.UserNotificationSettings.ONLY_MENTIONS, o.UnreadSetting.ONLY_MENTIONS], () => "mentions").with([l.UserNotificationSettings.NO_MESSAGES, o.UnreadSetting.UNSET], () => "nothing").with([l.UserNotificationSettings.NO_MESSAGES, o.UnreadSetting.ONLY_MENTIONS], () => "nothing").otherwise(() => "custom")
            }

            function u(e) {
                return (0, s.match)(e).with("all_messages", () => d.default.Messages.NOTIFICATION_PRESET_1).with("mentions", () => d.default.Messages.NOTIFICATION_PRESET_2).with("nothing", () => d.default.Messages.NOTIFICATION_PRESET_3).with("custom", () => d.default.Messages.NOTIFICATION_PRESET_CUSTOM).exhaustive()
            }(a = i || (i = {})).ALL_MESSAGES = "all_messages", a.MENTIONS = "mentions", a.NOTHING = "nothing", a.CUSTOM = "custom"
        }
    }
]);