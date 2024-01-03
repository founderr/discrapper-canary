(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["67714"], {
        625399: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                },
                useChannelNotificationCustomSettingsItem: function() {
                    return g
                }
            }), n("222007");
            var i = n("37983"),
                a = n("884691"),
                s = n("77078"),
                o = n("437756"),
                l = n("507313"),
                r = n("49111"),
                u = n("133335"),
                d = n("782340");

            function S(e) {
                let t = (0, o.useChannelPresetSettings)(e),
                    n = (0, o.useChannelPresetInheritance)(e),
                    u = t.preset === l.Presets.CUSTOM && !n.inherited,
                    [S, _] = a.useState(u),
                    [N, c] = a.useState(!1),
                    f = N ? l.Presets.CUSTOM : t.preset,
                    E = g(e, () => c(!1));
                if (e.type === r.ChannelTypes.GUILD_VOICE) return null;
                let h = "parent" === n.inheritedFrom ? d.default.Messages.FORM_LABEL_DEFAULT_CATEGORY : d.default.Messages.FORM_LABEL_DEFAULT;
                return e.type === r.ChannelTypes.GUILD_STAGE_VOICE ? (0, i.jsxs)(s.MenuItem, {
                    id: "channel_notification_settings",
                    label: d.default.Messages.NOTIFICATIONS,
                    children: [(0, i.jsx)(s.MenuRadioItem, {
                        id: "cns_default",
                        label: h,
                        checked: n.inherited,
                        group: "channel_notification_settings",
                        subtext: t.notification === r.UserNotificationSettings.NO_MESSAGES ? d.default.Messages.FORM_LABEL_NOTHING : d.default.Messages.FORM_LABEL_LIVE_STAGES_ONLY,
                        action: () => (0, o.updateChannelToGuildDefault)(e.guild_id, e.id)
                    }), (0, i.jsx)(s.MenuRadioItem, {
                        id: "cns_only_mention",
                        group: "channel_notification_settings",
                        checked: !n.inherited && t.notification !== r.UserNotificationSettings.NO_MESSAGES,
                        label: d.default.Messages.FORM_LABEL_LIVE_STAGES_ONLY,
                        action: () => (0, o.updateChannelNotificationSetting)(e.guild_id, e.id, r.UserNotificationSettings.ONLY_MENTIONS)
                    }), (0, i.jsx)(s.MenuRadioItem, {
                        id: "cns_no_message",
                        group: "channel_notification_settings",
                        label: d.default.Messages.FORM_LABEL_NOTHING,
                        checked: !n.inherited && t.notification === r.UserNotificationSettings.NO_MESSAGES,
                        action: () => (0, o.updateChannelNotificationSetting)(e.guild_id, e.id, r.UserNotificationSettings.NO_MESSAGES)
                    })]
                }) : (0, i.jsxs)(s.MenuItem, {
                    id: "channel_notification_settings",
                    label: d.default.Messages.NOTIFICATIONS,
                    children: [(0, i.jsx)(s.MenuRadioItem, {
                        id: "cns_default",
                        label: h,
                        group: "channel_notification_settings",
                        checked: n.inherited && !N,
                        subtext: n.inheritedPreset,
                        action: () => ((0, o.updateChannelToGuildDefault)(e.guild_id, e.id), c(!1))
                    }), (0, i.jsx)(s.MenuRadioItem, {
                        id: "cns_everything",
                        group: "channel_notification_settings",
                        label: d.default.Messages.NOTIFICATION_PRESET_1,
                        checked: !n.inherited && f === l.Presets.ALL_MESSAGES,
                        action: () => ((0, o.updateChannelPreset)(e.guild_id, e.id, l.Presets.ALL_MESSAGES), c(!1))
                    }), (0, i.jsx)(s.MenuRadioItem, {
                        id: "cns_essentials",
                        group: "channel_notification_settings",
                        label: d.default.Messages.NOTIFICATION_PRESET_2,
                        checked: !n.inherited && f === l.Presets.MENTIONS,
                        action: () => ((0, o.updateChannelPreset)(e.guild_id, e.id, l.Presets.MENTIONS), c(!1))
                    }), (0, i.jsx)(s.MenuRadioItem, {
                        id: "cns_nothing",
                        group: "channel_notification_settings",
                        label: d.default.Messages.NOTIFICATION_PRESET_3,
                        checked: !n.inherited && f === l.Presets.NOTHING,
                        action: () => ((0, o.updateChannelPreset)(e.guild_id, e.id, l.Presets.NOTHING), c(!1))
                    }), (0, i.jsx)(s.MenuRadioItem, {
                        id: "cns_custom",
                        group: "channel_notification_settings",
                        label: d.default.Messages.NOTIFICATION_PRESET_CUSTOM,
                        checked: N || !n.inherited && f === l.Presets.CUSTOM,
                        action: () => (_(!0), c(!0))
                    }), (S || u) && E]
                })
            }

            function g(e, t) {
                let {
                    notification: n,
                    unread: a
                } = (0, o.useChannelPresetSettings)(e), l = e => {
                    e(), t()
                };
                return (0, i.jsxs)(s.MenuGroup, {
                    children: [(0, i.jsxs)(s.MenuItem, {
                        id: "unread_setting",
                        label: "Unread Badges",
                        children: [(0, i.jsx)(s.MenuRadioItem, {
                            id: "unread_setting_all_messages",
                            group: "unread_setting",
                            checked: a === u.UnreadSetting.ALL_MESSAGES,
                            label: d.default.Messages.NOTIFICATION_SETTINGS_PRESETS_ALL_MESSAGES,
                            action: () => l(() => (0, o.updateChannelUnreadSetting)(e.guild_id, e.id, u.UnreadSetting.ALL_MESSAGES))
                        }), (0, i.jsx)(s.MenuRadioItem, {
                            id: "unread_setting_mention_only",
                            group: "unread_setting",
                            checked: a === u.UnreadSetting.ONLY_MENTIONS,
                            label: d.default.Messages.NOTIFICATION_SETTINGS_PRESETS_MENTION_ONLY,
                            action: () => l(() => (0, o.updateChannelUnreadSetting)(e.guild_id, e.id, u.UnreadSetting.ONLY_MENTIONS))
                        })]
                    }, "unread_setting"), (0, i.jsxs)(s.MenuItem, {
                        id: "push_settings",
                        label: d.default.Messages.NOTIFICATIONS,
                        children: [(0, i.jsx)(s.MenuRadioItem, {
                            group: "notification-preset",
                            id: "push_settings_everything",
                            label: d.default.Messages.NOTIFICATION_SETTINGS_PRESETS_ALL_MESSAGES,
                            checked: n === r.UserNotificationSettings.ALL_MESSAGES,
                            action: () => l(() => (0, o.updateChannelNotificationSetting)(e.guild_id, e.id, r.UserNotificationSettings.ALL_MESSAGES))
                        }), (0, i.jsx)(s.MenuRadioItem, {
                            group: "notification-preset",
                            id: "push_settings_everything_mention",
                            checked: n === r.UserNotificationSettings.ONLY_MENTIONS,
                            label: d.default.Messages.NOTIFICATION_SETTINGS_PRESETS_MENTION_ONLY,
                            action: () => l(() => (0, o.updateChannelNotificationSetting)(e.guild_id, e.id, r.UserNotificationSettings.ONLY_MENTIONS))
                        }), (0, i.jsx)(s.MenuRadioItem, {
                            group: "notification-preset",
                            id: "push_settings_everything_nothing",
                            label: d.default.Messages.NOTIFICATION_SETTINGS_PRESETS_NONE,
                            checked: n === r.UserNotificationSettings.NO_MESSAGES,
                            action: () => l(() => (0, o.updateChannelNotificationSetting)(e.guild_id, e.id, r.UserNotificationSettings.NO_MESSAGES))
                        })]
                    }, "push_settings")]
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
                    return N
                },
                useShouldUseNewNotificationSystem: function() {
                    return c
                }
            }), n("702976");
            var i = n("446674"),
                a = n("668597"),
                s = n("282109"),
                o = n("568734"),
                l = n("640497"),
                r = n("49111"),
                u = n("468200"),
                d = n("397336"),
                S = n("782340");

            function g() {
                return [{
                    label: S.default.Messages.MUTE_DURATION_15_MINUTES,
                    value: u.MuteUntilSeconds.MINUTES_15
                }, {
                    label: S.default.Messages.MUTE_DURATION_1_HOUR,
                    value: u.MuteUntilSeconds.HOURS_1
                }, {
                    label: S.default.Messages.MUTE_DURATION_3_HOURS,
                    value: u.MuteUntilSeconds.HOURS_3
                }, {
                    label: S.default.Messages.MUTE_DURATION_8_HOURS,
                    value: u.MuteUntilSeconds.HOURS_8
                }, {
                    label: S.default.Messages.MUTE_DURATION_24_HOURS,
                    value: u.MuteUntilSeconds.HOURS_24
                }, {
                    label: S.default.Messages.MUTE_DURATION_ALWAYS,
                    value: u.MuteUntilSeconds.ALWAYS
                }]
            }
            let _ = {
                ignoreMute: !1,
                ignoreUnreadSetting: !0,
                ignoreNotificationSetting: !1
            };

            function N(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _;
                return Object.keys(e).filter(n => {
                    var i, s;
                    let l = e[n].message_notifications !== r.UserNotificationSettings.NULL,
                        u = o.hasFlag(null !== (i = e[n].flags) && void 0 !== i ? i : 0, d.ChannelNotificationSettingsFlags.UNREADS_ALL_MESSAGES) || o.hasFlag(null !== (s = e[n].flags) && void 0 !== s ? s : 0, d.ChannelNotificationSettingsFlags.UNREADS_ONLY_MENTIONS);
                    return !t.ignoreUnreadSetting && u || !t.ignoreNotificationSetting && l || !t.ignoreMute && (0, a.computeIsMuted)(e[n])
                })
            }

            function c(e) {
                let t = (0, i.useStateFromStores)([s.default], () => s.default.useNewNotifications);
                return l.default.useExperiment({
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
                    return N
                },
                useChannelPresetInheritance: function() {
                    return c
                },
                updateChannelPreset: function() {
                    return f
                },
                updateChannelToGuildDefault: function() {
                    return E
                },
                updateChannelUnreadSetting: function() {
                    return h
                },
                updateChannelNotificationSetting: function() {
                    return M
                }
            }), n("222007");
            var i = n("65597"),
                a = n("519705"),
                s = n("42203"),
                o = n("282109"),
                l = n("34676"),
                r = n("47495"),
                u = n("277796"),
                d = n("507313"),
                S = n("49111"),
                g = n("133335"),
                _ = n("397336");

            function N(e) {
                let t = (0, i.default)([o.default], () => o.default.resolveUnreadSetting(e)),
                    n = (0, i.default)([o.default], () => o.default.resolvedMessageNotifications(e));
                return {
                    unread: t,
                    notification: n,
                    preset: (0, d.presetFromSettings)(t, n)
                }
            }

            function c(e) {
                let t = (0, i.useStateFromStoresArray)([o.default], () => (0, r.filterOverrides)(o.default.getChannelOverrides(e.guild_id), {
                        ignoreMute: !0,
                        ignoreUnreadSetting: !1,
                        ignoreNotificationSetting: !1
                    })),
                    [n, a] = (0, i.useStateFromStoresArray)([o.default, s.default], () => {
                        let n = s.default.getChannel(e.parent_id);
                        return null != n && t.includes(n.id) ? ["parent", (0, d.presetName)((0, d.presetFromSettings)(o.default.resolveUnreadSetting(n), o.default.resolvedMessageNotifications(n)))] : ["guild", (0, d.presetName)((0, d.presetFromSettings)(o.default.getGuildUnreadSetting(e.guild_id), o.default.getMessageNotifications(e.guild_id)))]
                    }, [e.guild_id, e.parent_id, t]);
                return {
                    inherited: !t.includes(e.id),
                    inheritedFrom: n,
                    inheritedPreset: a
                }
            }

            function f(e, t, n) {
                let i = o.default.getChannelIdFlags(e, t);
                n === d.Presets.ALL_MESSAGES ? a.default.updateChannelOverrideSettings(e, t, {
                    message_notifications: S.UserNotificationSettings.ALL_MESSAGES,
                    flags: (0, u.withChannelUnreadFlags)(i, _.ChannelNotificationSettingsFlags.UNREADS_ALL_MESSAGES)
                }, l.NotificationLabels.PresetAll) : n === d.Presets.MENTIONS ? a.default.updateChannelOverrideSettings(e, t, {
                    message_notifications: S.UserNotificationSettings.ONLY_MENTIONS,
                    flags: (0, u.withChannelUnreadFlags)(i, _.ChannelNotificationSettingsFlags.UNREADS_ONLY_MENTIONS)
                }, l.NotificationLabels.PresetMentions) : n === d.Presets.NOTHING && a.default.updateChannelOverrideSettings(e, t, {
                    message_notifications: S.UserNotificationSettings.NO_MESSAGES,
                    flags: (0, u.withChannelUnreadFlags)(i, _.ChannelNotificationSettingsFlags.UNREADS_ONLY_MENTIONS)
                }, l.NotificationLabels.PresetNothing)
            }

            function E(e, t) {
                a.default.updateChannelOverrideSettings(e, t, {
                    message_notifications: S.UserNotificationSettings.NULL,
                    flags: (0, u.resetChannelUnreadFlags)(o.default.getChannelIdFlags(e, t))
                }, l.NotificationLabels.PresetDefault)
            }

            function h(e, t, n) {
                let i = o.default.getChannelIdFlags(e, t);
                a.default.updateChannelOverrideSettings(e, t, {
                    flags: (0, u.withChannelUnreadFlags)(i, n === g.UnreadSetting.ALL_MESSAGES ? _.ChannelNotificationSettingsFlags.UNREADS_ALL_MESSAGES : _.ChannelNotificationSettingsFlags.UNREADS_ONLY_MENTIONS)
                }, l.NotificationLabel.unreads(n))
            }

            function M(e, t, n) {
                a.default.updateChannelOverrideSettings(e, t, {
                    message_notifications: n
                }, l.NotificationLabel.notifications(n))
            }
        },
        277796: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                withGuildUnreadFlags: function() {
                    return s
                },
                resetChannelUnreadFlags: function() {
                    return o
                },
                withChannelUnreadFlags: function() {
                    return l
                }
            });
            var i = n("568734"),
                a = n("397336");

            function s(e, t) {
                var n;
                return i.addFlag((n = e, i.removeFlags(n, a.GuildNotificationSettingsFlags.UNREADS_ALL_MESSAGES, a.GuildNotificationSettingsFlags.UNREADS_ONLY_MENTIONS)), t)
            }
            let o = e => i.removeFlags(e, a.ChannelNotificationSettingsFlags.UNREADS_ALL_MESSAGES, a.ChannelNotificationSettingsFlags.UNREADS_ONLY_MENTIONS);

            function l(e, t) {
                return i.addFlag(o(e), t)
            }
        },
        507313: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                Presets: function() {
                    return i
                },
                presetFromSettings: function() {
                    return u
                },
                presetName: function() {
                    return d
                }
            }), n("794252");
            var i, a, s = n("506838"),
                o = n("49111"),
                l = n("133335"),
                r = n("782340");

            function u(e, t) {
                return (0, s.match)([t, e]).with([o.UserNotificationSettings.ALL_MESSAGES, l.UnreadSetting.ALL_MESSAGES], () => "all_messages").with([o.UserNotificationSettings.ONLY_MENTIONS, l.UnreadSetting.UNSET], () => "mentions").with([o.UserNotificationSettings.ONLY_MENTIONS, l.UnreadSetting.ONLY_MENTIONS], () => "mentions").with([o.UserNotificationSettings.NO_MESSAGES, l.UnreadSetting.UNSET], () => "nothing").with([o.UserNotificationSettings.NO_MESSAGES, l.UnreadSetting.ONLY_MENTIONS], () => "nothing").otherwise(() => "custom")
            }

            function d(e) {
                return (0, s.match)(e).with("all_messages", () => r.default.Messages.NOTIFICATION_PRESET_1).with("mentions", () => r.default.Messages.NOTIFICATION_PRESET_2).with("nothing", () => r.default.Messages.NOTIFICATION_PRESET_3).with("custom", () => r.default.Messages.NOTIFICATION_PRESET_CUSTOM).exhaustive()
            }(a = i || (i = {})).ALL_MESSAGES = "all_messages", a.MENTIONS = "mentions", a.NOTHING = "nothing", a.CUSTOM = "custom"
        }
    }
]);