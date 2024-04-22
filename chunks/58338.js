"use strict";
i.r(t), i.d(t, {
  default: function() {
    return _
  }
}), i("47120"), i("789020");
var n = i("735250"),
  s = i("470079"),
  a = i("442837"),
  l = i("481060"),
  u = i("92114"),
  o = i("113449"),
  d = i("748756"),
  r = i("686660"),
  c = i("9156"),
  S = i("621600"),
  f = i("981631"),
  E = i("490897"),
  g = i("526761"),
  N = i("689938");

function _(e) {
  return (0, n.jsxs)(l.MenuItem, {
    id: "notification",
    label: N.default.Messages.NOTIFICATIONS,
    action: () => {
      (0, l.openModalLazy)(async () => {
        let {
          default: t
        } = await Promise.all([i.e("99387"), i.e("70205"), i.e("5863"), i.e("37918")]).then(i.bind(i, "751212"));
        return i => (0, n.jsx)(t, {
          ...i,
          guildId: e
        })
      })
    },
    children: [function(e) {
      let [t, i] = s.useState(!1), [_, M] = s.useState(!1), I = (0, a.useStateFromStores)([c.default], () => c.default.getGuildUnreadSetting(e)), h = (0, a.useStateFromStores)([c.default], () => c.default.getMessageNotifications(e)), A = _ ? r.Presets.CUSTOM : (0, r.presetFromSettings)(I, h), L = t => {
        M(!1);
        let i = {
          message_notifications: t
        };
        t === f.UserNotificationSettings.ALL_MESSAGES && I !== E.UnreadSetting.ALL_MESSAGES && (i.flags = (0, o.withGuildUnreadFlags)(c.default.getGuildFlags(e), g.GuildNotificationSettingsFlags.UNREADS_ALL_MESSAGES)), u.default.updateGuildNotificationSettings(e, i, S.NotificationLabel.notifications(t))
      }, m = t => {
        M(!1);
        let i = c.default.getGuildFlags(e);
        u.default.updateGuildNotificationSettings(e, {
          flags: (0, o.withGuildUnreadFlags)(i, t === E.UnreadSetting.ALL_MESSAGES ? g.GuildNotificationSettingsFlags.UNREADS_ALL_MESSAGES : g.GuildNotificationSettingsFlags.UNREADS_ONLY_MENTIONS)
        }, S.NotificationLabel.unreads(t))
      };
      return (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsxs)(l.MenuGroup, {
          children: [(0, n.jsx)(l.MenuRadioItem, {
            id: "everything",
            group: "notification-preset",
            checked: A === r.Presets.ALL_MESSAGES,
            label: N.default.Messages.NOTIFICATION_PRESET_1,
            action: () => ((0, d.updateGuildPreset)(e, r.Presets.ALL_MESSAGES), M(!1))
          }), (0, n.jsx)(l.MenuRadioItem, {
            id: "essentials",
            group: "notification-preset",
            checked: A === r.Presets.MENTIONS,
            label: N.default.Messages.NOTIFICATION_PRESET_2,
            action: () => ((0, d.updateGuildPreset)(e, r.Presets.MENTIONS), M(!1))
          }), (0, n.jsx)(l.MenuRadioItem, {
            id: "nothing",
            group: "notification-preset",
            checked: A === r.Presets.NOTHING,
            label: N.default.Messages.NOTIFICATION_PRESET_3,
            action: () => ((0, d.updateGuildPreset)(e, r.Presets.NOTHING), M(!1))
          }), (0, n.jsx)(l.MenuRadioItem, {
            id: "custom",
            group: "notification-preset",
            checked: A === r.Presets.CUSTOM,
            action: () => (i(!0), M(!0)),
            label: N.default.Messages.NOTIFICATION_PRESET_CUSTOM
          })]
        }), (A === r.Presets.CUSTOM || t) && (0, n.jsxs)(l.MenuGroup, {
          children: [(0, n.jsxs)(l.MenuItem, {
            id: "unread_setting",
            label: "Unread Badges",
            children: [(0, n.jsx)(l.MenuRadioItem, {
              id: "unread_setting_all_messages",
              group: "unread_setting",
              checked: I === E.UnreadSetting.ALL_MESSAGES,
              label: N.default.Messages.NOTIFICATION_SETTINGS_PRESETS_ALL_MESSAGES,
              action: () => m(E.UnreadSetting.ALL_MESSAGES)
            }), (0, n.jsx)(l.MenuRadioItem, {
              id: "unread_setting_mention_only",
              group: "unread_setting",
              checked: I === E.UnreadSetting.ONLY_MENTIONS,
              label: N.default.Messages.NOTIFICATION_SETTINGS_PRESETS_MENTION_ONLY,
              action: () => m(E.UnreadSetting.ONLY_MENTIONS),
              disabled: I !== E.UnreadSetting.ONLY_MENTIONS && h === f.UserNotificationSettings.ALL_MESSAGES,
              subtext: I !== E.UnreadSetting.ONLY_MENTIONS && h === f.UserNotificationSettings.ALL_MESSAGES ? N.default.Messages.NOTIFICATION_SETTINGS_UNREAD_MENTION_ONLY_DISABLED : void 0
            })]
          }, "unread_setting"), (0, n.jsxs)(l.MenuItem, {
            id: "push_settings",
            label: N.default.Messages.NOTIFICATIONS,
            children: [(0, n.jsx)(l.MenuRadioItem, {
              group: "notification-preset",
              id: "push_settings_everything",
              label: N.default.Messages.NOTIFICATION_SETTINGS_PRESETS_ALL_MESSAGES,
              checked: h === f.UserNotificationSettings.ALL_MESSAGES,
              action: () => L(f.UserNotificationSettings.ALL_MESSAGES),
              subtext: I !== E.UnreadSetting.ALL_MESSAGES && h !== f.UserNotificationSettings.ALL_MESSAGES ? N.default.Messages.NOTIFICATION_SETTINGS_UNREAD_UPDATE_WARNING : void 0
            }), (0, n.jsx)(l.MenuRadioItem, {
              group: "notification-preset",
              id: "push_settings_everything_mention",
              checked: h === f.UserNotificationSettings.ONLY_MENTIONS,
              label: N.default.Messages.NOTIFICATION_SETTINGS_PRESETS_MENTION_ONLY,
              action: () => L(f.UserNotificationSettings.ONLY_MENTIONS)
            }), (0, n.jsx)(l.MenuRadioItem, {
              group: "notification-preset",
              id: "push_settings_everything_nothing",
              label: N.default.Messages.NOTIFICATION_SETTINGS_PRESETS_NONE,
              checked: h === f.UserNotificationSettings.NO_MESSAGES,
              action: () => L(f.UserNotificationSettings.NO_MESSAGES)
            })]
          }, "push_settings")]
        })]
      })
    }(e), function(e) {
      let t = (0, a.useStateFromStoresObject)([c.default], () => ({
          highligths: c.default.getNotifyHighlights(e),
          mobilePush: c.default.isMobilePushEnabled(e),
          suppressRoles: c.default.isSuppressRolesEnabled(e),
          suppressEveryone: c.default.isSuppressEveryoneEnabled(e),
          muteScheduledEvents: c.default.isMuteScheduledEventsEnabled(e)
        })),
        i = u.default.updateGuildNotificationSettings;
      return (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsxs)(l.MenuGroup, {
          children: [(0, n.jsx)(l.MenuCheckboxItem, {
            id: "mention",
            checked: t.suppressEveryone,
            label: N.default.Messages.FORM_LABEL_SUPPRESS_EVERYONE.format(),
            action: () => i(e, {
              suppress_everyone: !t.suppressEveryone
            }, S.NotificationLabel.suppressEveryone(!t.suppressEveryone))
          }), (0, n.jsx)(l.MenuCheckboxItem, {
            id: "roles",
            checked: t.suppressRoles,
            label: N.default.Messages.FORM_LABEL_SUPPRESS_ROLES,
            action: () => i(e, {
              suppress_roles: !t.suppressRoles
            }, S.NotificationLabel.suppressRoles(!t.suppressRoles))
          }), (0, n.jsx)(l.MenuCheckboxItem, {
            id: "hightlight",
            label: N.default.Messages.FORM_LABEL_SUPPRESS_HIGHLIGHTS,
            checked: t.highligths === f.HighlightSettings.ENABLED,
            action: () => i(e, {
              notify_highlights: t.highligths === f.HighlightSettings.ENABLED ? f.HighlightSettings.DISABLED : f.HighlightSettings.ENABLED
            }, S.NotificationLabel.highlights(t.highligths !== f.HighlightSettings.ENABLED))
          })]
        }), (0, n.jsxs)(l.MenuGroup, {
          children: [(0, n.jsx)(l.MenuCheckboxItem, {
            id: "event",
            checked: t.muteScheduledEvents,
            label: N.default.Messages.FORM_LABEL_MUTE_SCHEDULED_EVENTS,
            action: () => i(e, {
              mute_scheduled_events: !t.muteScheduledEvents
            }, S.NotificationLabel.mutedEvents(!t.muteScheduledEvents))
          }), (0, n.jsx)(l.MenuCheckboxItem, {
            id: "mobile_push",
            checked: t.mobilePush,
            label: N.default.Messages.FORM_LABEL_MOBILE_PUSH_NOTIFICATIONS,
            action: () => i(e, {
              mobile_push: !t.mobilePush
            }, S.NotificationLabel.mobilePush(!t.mobilePush))
          })]
        })]
      })
    }(e)]
  })
}