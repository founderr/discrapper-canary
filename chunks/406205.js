"use strict";
s.r(t), s.d(t, {
  default: function() {
    return v
  }
}), s("47120"), s("789020");
var i = s("735250"),
  a = s("470079"),
  n = s("803997"),
  l = s.n(n),
  r = s("399606"),
  d = s("882485"),
  o = s("344740"),
  u = s("481060"),
  c = s("92114"),
  h = s("9156"),
  S = s("93879"),
  N = s("26290"),
  g = s("621600"),
  f = s("113449"),
  m = s("748756"),
  E = s("732760"),
  _ = s("686660"),
  T = s("981631"),
  x = s("490897"),
  I = s("526761"),
  O = s("689938"),
  p = s("911420"),
  C = s("650455");
let M = () => [{
  value: _.Presets.ALL_MESSAGES,
  name: O.default.Messages.NOTIFICATION_PRESET_1
}, {
  value: _.Presets.MENTIONS,
  name: O.default.Messages.NOTIFICATION_PRESET_2
}, {
  value: _.Presets.NOTHING,
  name: O.default.Messages.NOTIFICATION_PRESET_3
}, {
  value: _.Presets.CUSTOM,
  name: O.default.Messages.NOTIFICATION_PRESET_CUSTOM
}];

function v(e) {
  let {
    guildId: t
  } = e, s = (0, r.useStateFromStores)([h.default], () => h.default.getGuildFlags(t)), n = (0, r.useStateFromStores)([h.default], () => {
    let e = h.default.getGuildUnreadSetting(t),
      s = h.default.getMessageNotifications(t);
    return e === x.UnreadSetting.UNSET ? s === T.UserNotificationSettings.ALL_MESSAGES ? x.UnreadSetting.ALL_MESSAGES : x.UnreadSetting.ONLY_MENTIONS : e
  }), l = (0, r.useStateFromStores)([h.default], () => h.default.getMessageNotifications(t)), [S, N] = (0, a.useState)(!1), C = S ? _.Presets.CUSTOM : (0, _.presetFromSettings)(n, l), v = e => {
    if (e === _.Presets.CUSTOM) {
      N(!0);
      return
    }
    N(!1), (0, m.updateGuildPreset)(t, e)
  };
  return (0, i.jsxs)("div", {
    children: [(0, i.jsx)("div", {
      className: p.segmentedControlsContainer,
      children: (0, i.jsx)(u.SegmentedControl, {
        value: C,
        options: M(),
        onChange: e => {
          let {
            value: t
          } = e;
          return v(t)
        },
        className: p.segmentedControl,
        look: "pill"
      })
    }), (0, i.jsx)("div", {
      className: p.presetSeparator
    }), (0, i.jsxs)("div", {
      className: p.customPresetsContainer,
      children: [(0, i.jsxs)("div", {
        className: p.grid,
        children: [(0, i.jsx)(L, {
          unreadSetting: n
        }), (0, i.jsx)(j, {
          notificationSetting: l
        })]
      }), (0, i.jsxs)("div", {
        className: p.grid,
        children: [(0, i.jsxs)("div", {
          children: [(0, i.jsx)(u.Text, {
            variant: "text-sm/semibold",
            color: "header-primary",
            children: O.default.Messages.NOTIFICATION_SETTINGS_PRESETS_UNREAD_TITLE
          }), (0, i.jsx)(u.Text, {
            variant: "text-xs/medium",
            color: "text-muted",
            children: O.default.Messages.NOTIFICATION_SETTINGS_PRESETS_UNREAD_SUBTITLE
          })]
        }), (0, i.jsxs)("div", {
          children: [(0, i.jsx)(u.Text, {
            variant: "text-sm/semibold",
            color: "header-primary",
            children: O.default.Messages.NOTIFICATION_SETTINGS_PRESETS_NOTIFICATION_TITLE
          }), (0, i.jsx)(u.Text, {
            variant: "text-xs/medium",
            color: "text-muted",
            children: O.default.Messages.NOTIFICATION_SETTINGS_PRESETS_NOTIFICATION_SUBTITLE
          })]
        })]
      }), (0, i.jsxs)("div", {
        className: p.grid,
        children: [(0, i.jsx)(u.SingleSelect, {
          value: n,
          className: p.input,
          onChange: e => {
            N(!1), c.default.updateGuildNotificationSettings(t, {
              flags: (0, f.withGuildUnreadFlags)(s, e === x.UnreadSetting.ALL_MESSAGES ? I.GuildNotificationSettingsFlags.UNREADS_ALL_MESSAGES : I.GuildNotificationSettingsFlags.UNREADS_ONLY_MENTIONS)
            }, g.NotificationLabel.unreads(e))
          },
          options: (0, E.getUnreadSelectOptions)({
            notificationSetting: l
          }),
          renderOptionLabel: e => {
            let t = e.disabled && e.value === x.UnreadSetting.ONLY_MENTIONS && n !== x.UnreadSetting.ONLY_MENTIONS;
            return (0, i.jsxs)(i.Fragment, {
              children: [(0, i.jsx)("div", {
                children: (0, i.jsx)(u.Text, {
                  variant: "text-md/normal",
                  color: e.disabled ? "text-muted" : void 0,
                  children: e.label
                })
              }), t && (0, i.jsx)(u.Tooltip, {
                text: O.default.Messages.NOTIFICATION_SETTINGS_UNREAD_MENTION_ONLY_DISABLED,
                children: e => (0, i.jsx)(o.DenyIcon, {
                  ...e,
                  width: 20,
                  height: 20,
                  className: p.muted
                })
              })]
            })
          }
        }), (0, i.jsx)(u.SingleSelect, {
          className: p.input,
          value: l,
          onChange: e => {
            N(!1);
            let s = {
              message_notifications: e
            };
            e === T.UserNotificationSettings.ALL_MESSAGES && n !== x.UnreadSetting.ALL_MESSAGES && (s.flags = (0, f.withGuildUnreadFlags)(h.default.getGuildFlags(t), I.GuildNotificationSettingsFlags.UNREADS_ALL_MESSAGES)), c.default.updateGuildNotificationSettings(t, s, g.NotificationLabel.notifications(e))
          },
          options: (0, E.getPushNotificationSelectOptions)({
            notificationSetting: l
          }),
          renderOptionLabel: e => {
            let t = e.value === T.UserNotificationSettings.ALL_MESSAGES && n !== x.UnreadSetting.ALL_MESSAGES && l !== T.UserNotificationSettings.ALL_MESSAGES;
            return (0, i.jsxs)(i.Fragment, {
              children: [(0, i.jsx)(u.Text, {
                variant: "text-md/normal",
                children: e.label
              }), t && (0, i.jsx)(u.Tooltip, {
                text: O.default.Messages.NOTIFICATION_SETTINGS_UNREAD_UPDATE_WARNING,
                children: e => (0, i.jsx)(d.CircleInformationIcon, {
                  ...e,
                  width: 20,
                  height: 20,
                  className: p.muted
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
    name: O.default.Messages.NOTIFICATION_SETTINGS_PRESETS_UNREAD_CHANNEL_1
  }, {
    badged: !1,
    unread: !0,
    muted: !0,
    name: O.default.Messages.NOTIFICATION_SETTINGS_PRESETS_UNREAD_CHANNEL_2
  }, {
    badged: !1,
    unread: !1,
    muted: !0,
    name: O.default.Messages.NOTIFICATION_SETTINGS_PRESETS_UNREAD_CHANNEL_3
  }];
  return t === x.UnreadSetting.ALL_MESSAGES && (s[1].muted = !1), (0, i.jsx)("div", {
    className: p.channeList,
    children: s.map(e => (0, i.jsxs)("div", {
      className: p.channelListChannel,
      children: [(0, i.jsxs)("div", {
        className: p.channelListChannelName,
        children: [(0, i.jsx)("div", {
          className: l()(p.unread, {
            [p.hidden]: !e.unread,
            [p.unreadMuted]: e.muted
          })
        }), (0, i.jsx)(S.default, {
          height: 12,
          width: 12,
          className: l()(p.channelListChannelIcon, {
            [p.muted]: e.muted
          })
        }), (0, i.jsx)(u.Text, {
          variant: "text-xs/normal",
          color: e.muted ? "text-muted" : void 0,
          children: e.name
        })]
      }), (0, i.jsx)("div", {
        className: l()(p.badge, {
          [p.hidden]: !e.badged
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
    className: p.mockMessage,
    children: [e.notificationSetting === T.UserNotificationSettings.NO_MESSAGES && (0, i.jsx)("div", {
      className: p.mockMessageDisabled
    }), (0, i.jsx)("div", {
      children: (0, i.jsx)("img", {
        className: p.mockMessageAvatar,
        src: C,
        alt: ""
      })
    }), (0, i.jsxs)("div", {
      children: [(0, i.jsx)(u.Text, {
        variant: "text-xs/medium",
        children: O.default.Messages.NOTIFICATION_SETTINGS_PRESETS_NOTIFICATION_AUTHOR
      }), e.notificationSetting === T.UserNotificationSettings.ALL_MESSAGES && (0, i.jsx)(u.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: O.default.Messages.NOTIFICATION_SETTINGS_PRESETS_NOTIFICATION_MESSAGE
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
          children: O.default.Messages.NOTIFICATION_SETTINGS_PRESETS_NOTIFICATION_MESSAGE
        })]
      })]
    })]
  })
}