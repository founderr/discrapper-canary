"use strict";
s.r(t), s.d(t, {
  default: function() {
    return v
  }
}), s("47120"), s("789020");
var i = s("735250"),
  a = s("470079"),
  n = s("120356"),
  l = s.n(n),
  r = s("399606"),
  o = s("882485"),
  d = s("344740"),
  u = s("481060"),
  c = s("92114"),
  h = s("9156"),
  S = s("93879"),
  N = s("26290"),
  g = s("621600"),
  f = s("113449"),
  m = s("748756"),
  E = s("732760"),
  T = s("686660"),
  _ = s("981631"),
  I = s("490897"),
  x = s("526761"),
  C = s("689938"),
  O = s("515296"),
  p = s("650455");
let M = () => [{
  value: T.Presets.ALL_MESSAGES,
  name: C.default.Messages.NOTIFICATION_PRESET_1
}, {
  value: T.Presets.MENTIONS,
  name: C.default.Messages.NOTIFICATION_PRESET_2
}, {
  value: T.Presets.NOTHING,
  name: C.default.Messages.NOTIFICATION_PRESET_3
}, {
  value: T.Presets.CUSTOM,
  name: C.default.Messages.NOTIFICATION_PRESET_CUSTOM
}];

function v(e) {
  let {
    guildId: t
  } = e, s = (0, r.useStateFromStores)([h.default], () => h.default.getGuildFlags(t)), n = (0, r.useStateFromStores)([h.default], () => {
    let e = h.default.getGuildUnreadSetting(t),
      s = h.default.getMessageNotifications(t);
    return e === I.UnreadSetting.UNSET ? s === _.UserNotificationSettings.ALL_MESSAGES ? I.UnreadSetting.ALL_MESSAGES : I.UnreadSetting.ONLY_MENTIONS : e
  }), l = (0, r.useStateFromStores)([h.default], () => h.default.getMessageNotifications(t)), [S, N] = (0, a.useState)(!1), p = S ? T.Presets.CUSTOM : (0, T.presetFromSettings)(n, l), v = e => {
    if (e === T.Presets.CUSTOM) {
      N(!0);
      return
    }
    N(!1), (0, m.updateGuildPreset)(t, e)
  };
  return (0, i.jsxs)("div", {
    children: [(0, i.jsx)("div", {
      className: O.segmentedControlsContainer,
      children: (0, i.jsx)(u.SegmentedControl, {
        value: p,
        options: M(),
        onChange: e => {
          let {
            value: t
          } = e;
          return v(t)
        },
        className: O.segmentedControl,
        look: "pill"
      })
    }), (0, i.jsx)("div", {
      className: O.presetSeparator
    }), (0, i.jsxs)("div", {
      className: O.customPresetsContainer,
      children: [(0, i.jsxs)("div", {
        className: O.grid,
        children: [(0, i.jsx)(L, {
          unreadSetting: n
        }), (0, i.jsx)(A, {
          notificationSetting: l
        })]
      }), (0, i.jsxs)("div", {
        className: O.grid,
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
        className: O.grid,
        children: [(0, i.jsx)(u.SingleSelect, {
          value: n,
          className: O.input,
          onChange: e => {
            N(!1), c.default.updateGuildNotificationSettings(t, {
              flags: (0, f.withGuildUnreadFlags)(s, e === I.UnreadSetting.ALL_MESSAGES ? x.GuildNotificationSettingsFlags.UNREADS_ALL_MESSAGES : x.GuildNotificationSettingsFlags.UNREADS_ONLY_MENTIONS)
            }, g.NotificationLabel.unreads(e))
          },
          options: (0, E.getUnreadSelectOptions)({
            notificationSetting: l
          }),
          renderOptionLabel: e => {
            let t = e.disabled && e.value === I.UnreadSetting.ONLY_MENTIONS && n !== I.UnreadSetting.ONLY_MENTIONS;
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
                  className: O.muted
                })
              })]
            })
          }
        }), (0, i.jsx)(u.SingleSelect, {
          className: O.input,
          value: l,
          onChange: e => {
            N(!1);
            let s = {
              message_notifications: e
            };
            e === _.UserNotificationSettings.ALL_MESSAGES && n !== I.UnreadSetting.ALL_MESSAGES && (s.flags = (0, f.withGuildUnreadFlags)(h.default.getGuildFlags(t), x.GuildNotificationSettingsFlags.UNREADS_ALL_MESSAGES)), c.default.updateGuildNotificationSettings(t, s, g.NotificationLabel.notifications(e))
          },
          options: (0, E.getPushNotificationSelectOptions)({
            notificationSetting: l
          }),
          renderOptionLabel: e => {
            let t = e.value === _.UserNotificationSettings.ALL_MESSAGES && n !== I.UnreadSetting.ALL_MESSAGES && l !== _.UserNotificationSettings.ALL_MESSAGES;
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
                  className: O.muted
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
  return t === I.UnreadSetting.ALL_MESSAGES && (s[1].muted = !1), (0, i.jsx)("div", {
    className: O.channeList,
    children: s.map(e => (0, i.jsxs)("div", {
      className: O.channelListChannel,
      children: [(0, i.jsxs)("div", {
        className: O.channelListChannelName,
        children: [(0, i.jsx)("div", {
          className: l()(O.unread, {
            [O.hidden]: !e.unread,
            [O.unreadMuted]: e.muted
          })
        }), (0, i.jsx)(S.default, {
          height: 12,
          width: 12,
          className: l()(O.channelListChannelIcon, {
            [O.muted]: e.muted
          })
        }), (0, i.jsx)(u.Text, {
          variant: "text-xs/normal",
          color: e.muted ? "text-muted" : void 0,
          children: e.name
        })]
      }), (0, i.jsx)("div", {
        className: l()(O.badge, {
          [O.hidden]: !e.badged
        }),
        children: (0, i.jsx)(N.NumberBadge, {
          count: 1
        })
      })]
    }, e.name))
  })
}

function A(e) {
  return (0, i.jsxs)("div", {
    className: O.mockMessage,
    children: [e.notificationSetting === _.UserNotificationSettings.NO_MESSAGES && (0, i.jsx)("div", {
      className: O.mockMessageDisabled
    }), (0, i.jsx)("div", {
      children: (0, i.jsx)("img", {
        className: O.mockMessageAvatar,
        src: p,
        alt: ""
      })
    }), (0, i.jsxs)("div", {
      children: [(0, i.jsx)(u.Text, {
        variant: "text-xs/medium",
        children: C.default.Messages.NOTIFICATION_SETTINGS_PRESETS_NOTIFICATION_AUTHOR
      }), e.notificationSetting === _.UserNotificationSettings.ALL_MESSAGES && (0, i.jsx)(u.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: C.default.Messages.NOTIFICATION_SETTINGS_PRESETS_NOTIFICATION_MESSAGE
      }), e.notificationSetting !== _.UserNotificationSettings.ALL_MESSAGES && (0, i.jsxs)(i.Fragment, {
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