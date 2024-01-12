(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["67714"], {
        625399: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                },
                useChannelNotificationSettingsItemInner: function() {
                    return E
                },
                useChannelNotificationCustomSettingsItem: function() {
                    return M
                }
            }), n("222007"), n("702976");
            var i = n("37983"),
                a = n("884691"),
                s = n("77078"),
                l = n("519705"),
                o = n("437756"),
                d = n("277796"),
                r = n("507313"),
                u = n("282109"),
                S = n("34676"),
                g = n("49111"),
                _ = n("133335"),
                c = n("397336"),
                N = n("782340");

            function f(e) {
                return (0, i.jsx)(s.MenuItem, {
                    id: "channel_notification_settings",
                    label: N.default.Messages.NOTIFICATIONS,
                    children: E(e)
                })
            }

            function E(e) {
                let t = (0, o.useChannelPresetSettings)(e),
                    n = (0, o.useChannelPresetInheritance)(e),
                    l = t.preset === r.Presets.CUSTOM && !n.inherited,
                    [d, u] = a.useState(l),
                    [S, _] = a.useState(!1),
                    c = S ? r.Presets.CUSTOM : t.preset,
                    f = M(e, () => _(!1));
                if (e.type === g.ChannelTypes.GUILD_VOICE) return null;
                let E = "parent" === n.inheritedFrom ? N.default.Messages.FORM_LABEL_DEFAULT_CATEGORY : N.default.Messages.FORM_LABEL_DEFAULT;
                return e.type === g.ChannelTypes.GUILD_STAGE_VOICE ? (0, i.jsxs)(s.MenuGroup, {
                    children: [(0, i.jsx)(s.MenuRadioItem, {
                        id: "cns_default",
                        label: E,
                        checked: n.inherited,
                        group: "channel_notification_settings",
                        subtext: t.notification === g.UserNotificationSettings.NO_MESSAGES ? N.default.Messages.FORM_LABEL_NOTHING : N.default.Messages.FORM_LABEL_LIVE_STAGES_ONLY,
                        action: () => (0, o.updateChannelToGuildDefault)(e.guild_id, e.id)
                    }), (0, i.jsx)(s.MenuRadioItem, {
                        id: "cns_only_mention",
                        group: "channel_notification_settings",
                        checked: !n.inherited && t.notification !== g.UserNotificationSettings.NO_MESSAGES,
                        label: N.default.Messages.FORM_LABEL_LIVE_STAGES_ONLY,
                        action: () => (0, o.updateChannelNotificationSetting)(e.guild_id, e.id, g.UserNotificationSettings.ONLY_MENTIONS)
                    }), (0, i.jsx)(s.MenuRadioItem, {
                        id: "cns_no_message",
                        group: "channel_notification_settings",
                        label: N.default.Messages.FORM_LABEL_NOTHING,
                        checked: !n.inherited && t.notification === g.UserNotificationSettings.NO_MESSAGES,
                        action: () => (0, o.updateChannelNotificationSetting)(e.guild_id, e.id, g.UserNotificationSettings.NO_MESSAGES)
                    })]
                }) : (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsxs)(s.MenuGroup, {
                        children: [(0, i.jsx)(s.MenuRadioItem, {
                            id: "cns_default",
                            label: E,
                            group: "channel_notification_settings",
                            checked: n.inherited && !S,
                            subtext: n.inheritedPreset,
                            action: () => ((0, o.updateChannelToGuildDefault)(e.guild_id, e.id), _(!1))
                        }), (0, i.jsx)(s.MenuRadioItem, {
                            id: "cns_everything",
                            group: "channel_notification_settings",
                            label: N.default.Messages.NOTIFICATION_PRESET_1,
                            checked: !n.inherited && c === r.Presets.ALL_MESSAGES,
                            action: () => ((0, o.updateChannelPreset)(e.guild_id, e.id, r.Presets.ALL_MESSAGES), _(!1))
                        }), (0, i.jsx)(s.MenuRadioItem, {
                            id: "cns_essentials",
                            group: "channel_notification_settings",
                            label: N.default.Messages.NOTIFICATION_PRESET_2,
                            checked: !n.inherited && c === r.Presets.MENTIONS,
                            action: () => ((0, o.updateChannelPreset)(e.guild_id, e.id, r.Presets.MENTIONS), _(!1))
                        }), (0, i.jsx)(s.MenuRadioItem, {
                            id: "cns_nothing",
                            group: "channel_notification_settings",
                            label: N.default.Messages.NOTIFICATION_PRESET_3,
                            checked: !n.inherited && c === r.Presets.NOTHING,
                            action: () => ((0, o.updateChannelPreset)(e.guild_id, e.id, r.Presets.NOTHING), _(!1))
                        }), (0, i.jsx)(s.MenuRadioItem, {
                            id: "cns_custom",
                            group: "channel_notification_settings",
                            label: N.default.Messages.NOTIFICATION_PRESET_CUSTOM,
                            checked: S || !n.inherited && c === r.Presets.CUSTOM,
                            action: () => (u(!0), _(!0))
                        })]
                    }), (d || l) && f]
                })
            }

            function M(e, t) {
                let {
                    notification: n,
                    unread: a
                } = (0, o.useChannelPresetSettings)(e), r = e => {
                    e(), t()
                }, f = t => {
                    let n = {
                        message_notifications: t
                    };
                    t === g.UserNotificationSettings.ALL_MESSAGES && a !== _.UnreadSetting.ALL_MESSAGES && (n.flags = (0, d.withChannelUnreadFlags)(u.default.getChannelIdFlags(e.guild_id, e.id), c.ChannelNotificationSettingsFlags.UNREADS_ALL_MESSAGES)), l.default.updateChannelOverrideSettings(e.guild_id, e.id, n, S.NotificationLabel.notifications(t))
                };
                return (0, i.jsxs)(s.MenuGroup, {
                    children: [(0, i.jsxs)(s.MenuItem, {
                        id: "unread_setting",
                        label: "Unread Badges",
                        children: [(0, i.jsx)(s.MenuRadioItem, {
                            id: "unread_setting_all_messages",
                            group: "unread_setting",
                            checked: a === _.UnreadSetting.ALL_MESSAGES,
                            label: N.default.Messages.NOTIFICATION_SETTINGS_PRESETS_ALL_MESSAGES,
                            action: () => r(() => (0, o.updateChannelUnreadSetting)(e.guild_id, e.id, _.UnreadSetting.ALL_MESSAGES))
                        }), (0, i.jsx)(s.MenuRadioItem, {
                            id: "unread_setting_mention_only",
                            group: "unread_setting",
                            checked: a === _.UnreadSetting.ONLY_MENTIONS,
                            label: N.default.Messages.NOTIFICATION_SETTINGS_PRESETS_MENTION_ONLY,
                            disabled: a !== _.UnreadSetting.ONLY_MENTIONS && n === g.UserNotificationSettings.ALL_MESSAGES,
                            subtext: a !== _.UnreadSetting.ONLY_MENTIONS && n === g.UserNotificationSettings.ALL_MESSAGES ? N.default.Messages.NOTIFICATION_SETTINGS_UNREAD_MENTION_ONLY_DISABLED : void 0,
                            action: () => r(() => (0, o.updateChannelUnreadSetting)(e.guild_id, e.id, _.UnreadSetting.ONLY_MENTIONS))
                        })]
                    }, "unread_setting"), (0, i.jsxs)(s.MenuItem, {
                        id: "push_settings",
                        label: N.default.Messages.NOTIFICATIONS,
                        children: [(0, i.jsx)(s.MenuRadioItem, {
                            group: "notification-preset",
                            id: "push_settings_everything",
                            label: N.default.Messages.NOTIFICATION_SETTINGS_PRESETS_ALL_MESSAGES,
                            checked: n === g.UserNotificationSettings.ALL_MESSAGES,
                            subtext: a !== _.UnreadSetting.ALL_MESSAGES && n !== g.UserNotificationSettings.ALL_MESSAGES ? N.default.Messages.NOTIFICATION_SETTINGS_UNREAD_UPDATE_WARNING : void 0,
                            action: () => r(() => f(g.UserNotificationSettings.ALL_MESSAGES))
                        }), (0, i.jsx)(s.MenuRadioItem, {
                            group: "notification-preset",
                            id: "push_settings_everything_mention",
                            checked: n === g.UserNotificationSettings.ONLY_MENTIONS,
                            label: N.default.Messages.NOTIFICATION_SETTINGS_PRESETS_MENTION_ONLY,
                            action: () => r(() => f(g.UserNotificationSettings.ONLY_MENTIONS))
                        }), (0, i.jsx)(s.MenuRadioItem, {
                            group: "notification-preset",
                            id: "push_settings_everything_nothing",
                            label: N.default.Messages.NOTIFICATION_SETTINGS_PRESETS_NONE,
                            checked: n === g.UserNotificationSettings.NO_MESSAGES,
                            action: () => r(() => f(g.UserNotificationSettings.NO_MESSAGES))
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
                    return c
                },
                useShouldUseNewNotificationSystem: function() {
                    return N
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

            function N(e) {
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
                    return c
                },
                useChannelPresetInheritance: function() {
                    return N
                },
                updateChannelPreset: function() {
                    return f
                },
                updateChannelToGuildDefault: function() {
                    return E
                },
                updateChannelUnreadSetting: function() {
                    return M
                },
                updateChannelNotificationSetting: function() {
                    return h
                }
            }), n("222007");
            var i = n("65597"),
                a = n("519705"),
                s = n("42203"),
                l = n("282109"),
                o = n("34676"),
                d = n("47495"),
                r = n("277796"),
                u = n("507313"),
                S = n("49111"),
                g = n("133335"),
                _ = n("397336");

            function c(e) {
                let t = (0, i.default)([l.default], () => l.default.resolveUnreadSetting(e)),
                    n = (0, i.default)([l.default], () => l.default.resolvedMessageNotifications(e));
                return {
                    unread: t,
                    notification: n,
                    preset: (0, u.presetFromSettings)(t, n)
                }
            }

            function N(e) {
                let t = (0, i.useStateFromStoresArray)([l.default], () => (0, d.filterOverrides)(l.default.getChannelOverrides(e.guild_id), {
                        ignoreMute: !0,
                        ignoreUnreadSetting: !1,
                        ignoreNotificationSetting: !1
                    })),
                    [n, a] = (0, i.useStateFromStoresArray)([l.default, s.default], () => {
                        let n = s.default.getChannel(e.parent_id);
                        return null != n && t.includes(n.id) ? ["parent", (0, u.presetName)((0, u.presetFromSettings)(l.default.resolveUnreadSetting(n), l.default.resolvedMessageNotifications(n)))] : ["guild", (0, u.presetName)((0, u.presetFromSettings)(l.default.getGuildUnreadSetting(e.guild_id), l.default.getMessageNotifications(e.guild_id)))]
                    }, [e.guild_id, e.parent_id, t]);
                return {
                    inherited: !t.includes(e.id),
                    inheritedFrom: n,
                    inheritedPreset: a
                }
            }

            function f(e, t, n) {
                let i = l.default.getChannelIdFlags(e, t);
                n === u.Presets.ALL_MESSAGES ? a.default.updateChannelOverrideSettings(e, t, {
                    message_notifications: S.UserNotificationSettings.ALL_MESSAGES,
                    flags: (0, r.withChannelUnreadFlags)(i, _.ChannelNotificationSettingsFlags.UNREADS_ALL_MESSAGES)
                }, o.NotificationLabels.PresetAll) : n === u.Presets.MENTIONS ? a.default.updateChannelOverrideSettings(e, t, {
                    message_notifications: S.UserNotificationSettings.ONLY_MENTIONS,
                    flags: (0, r.withChannelUnreadFlags)(i, _.ChannelNotificationSettingsFlags.UNREADS_ONLY_MENTIONS)
                }, o.NotificationLabels.PresetMentions) : n === u.Presets.NOTHING && a.default.updateChannelOverrideSettings(e, t, {
                    message_notifications: S.UserNotificationSettings.NO_MESSAGES,
                    flags: (0, r.withChannelUnreadFlags)(i, _.ChannelNotificationSettingsFlags.UNREADS_ONLY_MENTIONS)
                }, o.NotificationLabels.PresetNothing)
            }

            function E(e, t) {
                a.default.updateChannelOverrideSettings(e, t, {
                    message_notifications: S.UserNotificationSettings.NULL,
                    flags: (0, r.resetChannelUnreadFlags)(l.default.getChannelIdFlags(e, t))
                }, o.NotificationLabels.PresetDefault)
            }

            function M(e, t, n) {
                let i = l.default.getChannelIdFlags(e, t);
                a.default.updateChannelOverrideSettings(e, t, {
                    flags: (0, r.withChannelUnreadFlags)(i, n === g.UnreadSetting.ALL_MESSAGES ? _.ChannelNotificationSettingsFlags.UNREADS_ALL_MESSAGES : _.ChannelNotificationSettingsFlags.UNREADS_ONLY_MENTIONS)
                }, o.NotificationLabel.unreads(n))
            }

            function h(e, t, n) {
                a.default.updateChannelOverrideSettings(e, t, {
                    message_notifications: n
                }, o.NotificationLabel.notifications(n))
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
        }
    }
]);