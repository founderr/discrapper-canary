"use strict";
s.r(t), s.d(t, {
  default: function() {
    return v
  }
}), s("47120"), s("789020");
var i = s("735250"),
  n = s("470079"),
  a = s("120356"),
  l = s.n(a),
  r = s("399606"),
  o = s("882485"),
  d = s("344740"),
  u = s("481060"),
  c = s("92114"),
  h = s("9156"),
  S = s("93879"),
  N = s("26290"),
  f = s("621600"),
  g = s("113449"),
  m = s("748756"),
  E = s("732760"),
  _ = s("686660"),
  T = s("981631"),
  x = s("490897"),
  p = s("526761"),
  C = s("689938"),
  I = s("911420"),
  O = s("650455");
let M = () => [{
  value: _.Presets.ALL_MESSAGES,
  name: C.default.Messages.NOTIFICATION_PRESET_1
}, {
  value: _.Presets.MENTIONS,
  name: C.default.Messages.NOTIFICATION_PRESET_2
}, {
  value: _.Presets.NOTHING,
  name: C.default.Messages.NOTIFICATION_PRESET_3
}, {
  value: _.Presets.CUSTOM,
  name: C.default.Messages.NOTIFICATION_PRESET_CUSTOM
}];

function v(e) {
  let {
    guildId: t
  } = e, s = (0, r.useStateFromStores)([h.default], () => h.default.getGuildFlags(t)), a = (0, r.useStateFromStores)([h.default], () => {
    let e = h.default.getGuildUnreadSetting(t),
      s = h.default.getMessageNotifications(t);
    return e === x.UnreadSetting.UNSET ? s === T.UserNotificationSettings.ALL_MESSAGES ? x.UnreadSetting.ALL_MESSAGES : x.UnreadSetting.ONLY_MENTIONS : e
  }), l = (0, r.useStateFromStores)([h.default], () => h.default.getMessageNotifications(t)), [S, N] = (0, n.useState)(!1), O = S ? _.Presets.CUSTOM : (0, _.presetFromSettings)(a, l), v = e => {
    if (e === _.Presets.CUSTOM) {
      N(!0);
      return
    }
    N(!1), (0, m.updateGuildPreset)(t, e)
  };
  return (0, i.jsxs)("div", {
    children: [(0, i.jsx)("div", {
      className: I.segmentedControlsContainer,
      children: (0, i.jsx)(u.SegmentedControl, {
        value: O,
        options: M(),
        onChange: e => {
          let {
            value: t
          } = e;
          return v(t)
        },
        className: I.segmentedControl,
        look: "pill"
      })
    }), (0, i.jsx)("div", {
      className: I.presetSeparator
    }), (0, i.jsxs)("div", {
      className: I.customPresetsContainer,
      children: [(0, i.jsxs)("div", {
        className: I.grid,
        children: [(0, i.jsx)(L, {
          unreadSetting: a
        }), (0, i.jsx)(j, {
          notificationSetting: l
        })]
      }), (0, i.jsxs)("div", {
        className: I.grid,
        children: [(0, i.jsxs)("div", {
          children: [(0, i.jsx)(u.Text, {
            variant: "text-sm/semibold",
            color: "header-primary",
            children: C.default.Messages.NOTIFICATION_SETTINGS_PRESETS_UNREAD_TITLE
          }), (0, i.jsx)(u.Text, {
            variant: "text-xs/medium",
            color: "text-muted",
            children: C.default.Messages.NOTIFICATION_SETTINGS_PRESETS_UNREAD_SUBTITLE
          })]
        }), (0, i.jsxs)("div", {
          children: [(0, i.jsx)(u.Text, {
            variant: "text-sm/semibold",
            color: "header-primary",
            children: C.default.Messages.NOTIFICATION_SETTINGS_PRESETS_NOTIFICATION_TITLE
          }), (0, i.jsx)(u.Text, {
            variant: "text-xs/medium",
            color: "text-muted",
            children: C.default.Messages.NOTIFICATION_SETTINGS_PRESETS_NOTIFICATION_SUBTITLE
          })]
        })]
      }), (0, i.jsxs)("div", {
        className: I.grid,
        children: [(0, i.jsx)(u.SingleSelect, {
          value: a,
          className: I.input,
          onChange: e => {
            N(!1), c.default.updateGuildNotificationSettings(t, {
              flags: (0, g.withGuildUnreadFlags)(s, e === x.UnreadSetting.ALL_MESSAGES ? p.GuildNotificationSettingsFlags.UNREADS_ALL_MESSAGES : p.GuildNotificationSettingsFlags.UNREADS_ONLY_MENTIONS)
            }, f.NotificationLabel.unreads(e))
          },
          options: (0, E.getUnreadSelectOptions)({
            notificationSetting: l
          }),
          renderOptionLabel: e => {
            let t = e.disabled && e.value === x.UnreadSetting.ONLY_MENTIONS && a !== x.UnreadSetting.ONLY_MENTIONS;
            return (0, i.jsxs)(i.Fragment, {
              children: [(0, i.jsx)("div", {
                children: (0, i.jsx)(u.Text, {
                  variant: "text-md/normal",
                  color: e.disabled ? "text-muted" : void 0,
                  children: e.label
                })
              }), t && (0, i.jsx)(u.Tooltip, {
                text: C.default.Messages.NOTIFICATION_SETTINGS_UNREAD_MENTION_ONLY_DISABLED,
                children: e => (0, i.jsx)(d.DenyIcon, {
                  ...e,
                  width: 20,
                  height: 20,
                  className: I.muted
                })
              })]
            })
          }
        }), (0, i.jsx)(u.SingleSelect, {
          className: I.input,
          value: l,
          onChange: e => {
            N(!1);
            let s = {
              message_notifications: e
            };
            e === T.UserNotificationSettings.ALL_MESSAGES && a !== x.UnreadSetting.ALL_MESSAGES && (s.flags = (0, g.withGuildUnreadFlags)(h.default.getGuildFlags(t), p.GuildNotificationSettingsFlags.UNREADS_ALL_MESSAGES)), c.default.updateGuildNotificationSettings(t, s, f.NotificationLabel.notifications(e))
          },
          options: (0, E.getPushNotificationSelectOptions)({
            notificationSetting: l
          }),
          renderOptionLabel: e => {
            let t = e.value === T.UserNotificationSettings.ALL_MESSAGES && a !== x.UnreadSetting.ALL_MESSAGES && l !== T.UserNotificationSettings.ALL_MESSAGES;
            return (0, i.jsxs)(i.Fragment, {
              children: [(0, i.jsx)(u.Text, {
                variant: "text-md/normal",
                children: e.label
              }), t && (0, i.jsx)(u.Tooltip, {
                text: C.default.Messages.NOTIFICATION_SETTINGS_UNREAD_UPDATE_WARNING,
                children: e => (0, i.jsx)(o.CircleInformationIcon, {
                  ...e,
                  width: 20,
                  height: 20,
                  className: I.muted
                })
              })]
            })
          }
        })]
      })]
    })]
  })
}

function L(e) {
  let {
    unreadSetting: t
  } = e, s = [{
    badged: !0,
    unread: !0,
    muted: !1,
    name: C.default.Messages.NOTIFICATION_SETTINGS_PRESETS_UNREAD_CHANNEL_1
  }, {
    badged: !1,
    unread: !0,
    muted: !0,
    name: C.default.Messages.NOTIFICATION_SETTINGS_PRESETS_UNREAD_CHANNEL_2
  }, {
    badged: !1,
    unread: !1,
    muted: !0,
    name: C.default.Messages.NOTIFICATION_SETTINGS_PRESETS_UNREAD_CHANNEL_3
  }];
  return t === x.UnreadSetting.ALL_MESSAGES && (s[1].muted = !1), (0, i.jsx)("div", {
    className: I.channeList,
    children: s.map(e => (0, i.jsxs)("div", {
      className: I.channelListChannel,
      children: [(0, i.jsxs)("div", {
        className: I.channelListChannelName,
        children: [(0, i.jsx)("div", {
          className: l()(I.unread, {
            [I.hidden]: !e.unread,
            [I.unreadMuted]: e.muted
          })
        }), (0, i.jsx)(S.default, {
          height: 12,
          width: 12,
          className: l()(I.channelListChannelIcon, {
            [I.muted]: e.muted
          })
        }), (0, i.jsx)(u.Text, {
          variant: "text-xs/normal",
          color: e.muted ? "text-muted" : void 0,
          children: e.name
        })]
      }), (0, i.jsx)("div", {
        className: l()(I.badge, {
          [I.hidden]: !e.badged
        }),
        children: (0, i.jsx)(N.NumberBadge, {
          count: 1
        })
      })]
    }, e.name))
  })
}

function j(e) {
  return (0, i.jsxs)("div", {
    className: I.mockMessage,
    children: [e.notificationSetting === T.UserNotificationSettings.NO_MESSAGES && (0, i.jsx)("div", {
      className: I.mockMessageDisabled
    }), (0, i.jsx)("div", {
      children: (0, i.jsx)("img", {
        className: I.mockMessageAvatar,
        src: O,
        alt: ""
      })
    }), (0, i.jsxs)("div", {
      children: [(0, i.jsx)(u.Text, {
        variant: "text-xs/medium",
        children: C.default.Messages.NOTIFICATION_SETTINGS_PRESETS_NOTIFICATION_AUTHOR
      }), e.notificationSetting === T.UserNotificationSettings.ALL_MESSAGES && (0, i.jsx)(u.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: C.default.Messages.NOTIFICATION_SETTINGS_PRESETS_NOTIFICATION_MESSAGE
      }), e.notificationSetting !== T.UserNotificationSettings.ALL_MESSAGES && (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsxs)(u.Text, {
          variant: "text-xs/normal",
          color: "text-link",
          tag: "span",
          children: ["@Roka", " "]
        }), (0, i.jsx)(u.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          tag: "span",
          children: C.default.Messages.NOTIFICATION_SETTINGS_PRESETS_NOTIFICATION_MESSAGE
        })]
      })]
    })]
  })
}