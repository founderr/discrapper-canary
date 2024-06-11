"use strict";
s.r(t), s.d(t, {
  default: function() {
    return M
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
  N = s("621600"),
  g = s("113449"),
  f = s("748756"),
  m = s("732760"),
  E = s("686660"),
  T = s("981631"),
  _ = s("490897"),
  I = s("526761"),
  x = s("689938"),
  C = s("462361"),
  O = s("650455");
let p = () => [{
  value: E.Presets.ALL_MESSAGES,
  name: x.default.Messages.NOTIFICATION_PRESET_1
}, {
  value: E.Presets.MENTIONS,
  name: x.default.Messages.NOTIFICATION_PRESET_2
}, {
  value: E.Presets.NOTHING,
  name: x.default.Messages.NOTIFICATION_PRESET_3
}, {
  value: E.Presets.CUSTOM,
  name: x.default.Messages.NOTIFICATION_PRESET_CUSTOM
}];

function M(e) {
  let {
    guildId: t
  } = e, s = (0, r.useStateFromStores)([h.default], () => h.default.getGuildFlags(t)), n = (0, r.useStateFromStores)([h.default], () => {
    let e = h.default.getGuildUnreadSetting(t),
      s = h.default.getMessageNotifications(t);
    return e === _.UnreadSetting.UNSET ? s === T.UserNotificationSettings.ALL_MESSAGES ? _.UnreadSetting.ALL_MESSAGES : _.UnreadSetting.ONLY_MENTIONS : e
  }), l = (0, r.useStateFromStores)([h.default], () => h.default.getMessageNotifications(t)), [S, O] = (0, a.useState)(!1), M = S ? E.Presets.CUSTOM : (0, E.presetFromSettings)(n, l), A = e => {
    if (e === E.Presets.CUSTOM) {
      O(!0);
      return
    }
    O(!1), (0, f.updateGuildPreset)(t, e)
  };
  return (0, i.jsxs)("div", {
    children: [(0, i.jsx)("div", {
      className: C.segmentedControlsContainer,
      children: (0, i.jsx)(u.SegmentedControl, {
        value: M,
        options: p(),
        onChange: e => {
          let {
            value: t
          } = e;
          return A(t)
        },
        className: C.segmentedControl,
        look: "pill"
      })
    }), (0, i.jsx)("div", {
      className: C.presetSeparator
    }), (0, i.jsxs)("div", {
      className: C.customPresetsContainer,
      children: [(0, i.jsxs)("div", {
        className: C.grid,
        children: [(0, i.jsx)(v, {
          unreadSetting: n
        }), (0, i.jsx)(L, {
          notificationSetting: l
        })]
      }), (0, i.jsxs)("div", {
        className: C.grid,
        children: [(0, i.jsxs)("div", {
          children: [(0, i.jsx)(u.Text, {
            variant: "text-sm/semibold",
            color: "header-primary",
            children: x.default.Messages.NOTIFICATION_SETTINGS_PRESETS_UNREAD_TITLE
          }), (0, i.jsx)(u.Text, {
            variant: "text-xs/medium",
            color: "text-muted",
            children: x.default.Messages.NOTIFICATION_SETTINGS_PRESETS_UNREAD_SUBTITLE
          })]
        }), (0, i.jsxs)("div", {
          children: [(0, i.jsx)(u.Text, {
            variant: "text-sm/semibold",
            color: "header-primary",
            children: x.default.Messages.NOTIFICATION_SETTINGS_PRESETS_NOTIFICATION_TITLE
          }), (0, i.jsx)(u.Text, {
            variant: "text-xs/medium",
            color: "text-muted",
            children: x.default.Messages.NOTIFICATION_SETTINGS_PRESETS_NOTIFICATION_SUBTITLE
          })]
        })]
      }), (0, i.jsxs)("div", {
        className: C.grid,
        children: [(0, i.jsx)(u.SingleSelect, {
          value: n,
          className: C.input,
          onChange: e => {
            O(!1), c.default.updateGuildNotificationSettings(t, {
              flags: (0, g.withGuildUnreadFlags)(s, e === _.UnreadSetting.ALL_MESSAGES ? I.GuildNotificationSettingsFlags.UNREADS_ALL_MESSAGES : I.GuildNotificationSettingsFlags.UNREADS_ONLY_MENTIONS)
            }, N.NotificationLabel.unreads(e))
          },
          options: (0, m.getUnreadSelectOptions)({
            notificationSetting: l
          }),
          renderOptionLabel: e => {
            let t = e.disabled && e.value === _.UnreadSetting.ONLY_MENTIONS && n !== _.UnreadSetting.ONLY_MENTIONS;
            return (0, i.jsxs)(i.Fragment, {
              children: [(0, i.jsx)("div", {
                children: (0, i.jsx)(u.Text, {
                  variant: "text-md/normal",
                  color: e.disabled ? "text-muted" : void 0,
                  children: e.label
                })
              }), t && (0, i.jsx)(u.Tooltip, {
                text: x.default.Messages.NOTIFICATION_SETTINGS_UNREAD_MENTION_ONLY_DISABLED,
                children: e => (0, i.jsx)(d.DenyIcon, {
                  ...e,
                  width: 20,
                  height: 20,
                  className: C.muted
                })
              })]
            })
          }
        }), (0, i.jsx)(u.SingleSelect, {
          className: C.input,
          value: l,
          onChange: e => {
            O(!1);
            let s = {
              message_notifications: e
            };
            e === T.UserNotificationSettings.ALL_MESSAGES && n !== _.UnreadSetting.ALL_MESSAGES && (s.flags = (0, g.withGuildUnreadFlags)(h.default.getGuildFlags(t), I.GuildNotificationSettingsFlags.UNREADS_ALL_MESSAGES)), c.default.updateGuildNotificationSettings(t, s, N.NotificationLabel.notifications(e))
          },
          options: (0, m.getPushNotificationSelectOptions)({
            notificationSetting: l
          }),
          renderOptionLabel: e => {
            let t = e.value === T.UserNotificationSettings.ALL_MESSAGES && n !== _.UnreadSetting.ALL_MESSAGES && l !== T.UserNotificationSettings.ALL_MESSAGES;
            return (0, i.jsxs)(i.Fragment, {
              children: [(0, i.jsx)(u.Text, {
                variant: "text-md/normal",
                children: e.label
              }), t && (0, i.jsx)(u.Tooltip, {
                text: x.default.Messages.NOTIFICATION_SETTINGS_UNREAD_UPDATE_WARNING,
                children: e => (0, i.jsx)(o.CircleInformationIcon, {
                  ...e,
                  width: 20,
                  height: 20,
                  className: C.muted
                })
              })]
            })
          }
        })]
      })]
    })]
  })
}

function v(e) {
  let {
    unreadSetting: t
  } = e, s = [{
    badged: !0,
    unread: !0,
    muted: !1,
    name: x.default.Messages.NOTIFICATION_SETTINGS_PRESETS_UNREAD_CHANNEL_1
  }, {
    badged: !1,
    unread: !0,
    muted: !0,
    name: x.default.Messages.NOTIFICATION_SETTINGS_PRESETS_UNREAD_CHANNEL_2
  }, {
    badged: !1,
    unread: !1,
    muted: !0,
    name: x.default.Messages.NOTIFICATION_SETTINGS_PRESETS_UNREAD_CHANNEL_3
  }];
  return t === _.UnreadSetting.ALL_MESSAGES && (s[1].muted = !1), (0, i.jsx)("div", {
    className: C.channeList,
    children: s.map(e => (0, i.jsxs)("div", {
      className: C.channelListChannel,
      children: [(0, i.jsxs)("div", {
        className: C.channelListChannelName,
        children: [(0, i.jsx)("div", {
          className: l()(C.unread, {
            [C.hidden]: !e.unread,
            [C.unreadMuted]: e.muted
          })
        }), (0, i.jsx)(S.default, {
          height: 12,
          width: 12,
          className: l()(C.channelListChannelIcon, {
            [C.muted]: e.muted
          })
        }), (0, i.jsx)(u.Text, {
          variant: "text-xs/normal",
          color: e.muted ? "text-muted" : void 0,
          children: e.name
        })]
      }), (0, i.jsx)("div", {
        className: l()(C.badge, {
          [C.hidden]: !e.badged
        }),
        children: (0, i.jsx)(u.NumberBadge, {
          count: 1
        })
      })]
    }, e.name))
  })
}

function L(e) {
  return (0, i.jsxs)("div", {
    className: C.mockMessage,
    children: [e.notificationSetting === T.UserNotificationSettings.NO_MESSAGES && (0, i.jsx)("div", {
      className: C.mockMessageDisabled
    }), (0, i.jsx)("div", {
      children: (0, i.jsx)("img", {
        className: C.mockMessageAvatar,
        src: O,
        alt: ""
      })
    }), (0, i.jsxs)("div", {
      children: [(0, i.jsx)(u.Text, {
        variant: "text-xs/medium",
        children: x.default.Messages.NOTIFICATION_SETTINGS_PRESETS_NOTIFICATION_AUTHOR
      }), e.notificationSetting === T.UserNotificationSettings.ALL_MESSAGES && (0, i.jsx)(u.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: x.default.Messages.NOTIFICATION_SETTINGS_PRESETS_NOTIFICATION_MESSAGE
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
          children: x.default.Messages.NOTIFICATION_SETTINGS_PRESETS_NOTIFICATION_MESSAGE
        })]
      })]
    })]
  })
}