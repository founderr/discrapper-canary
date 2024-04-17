"use strict";
s.r(t), s.d(t, {
  default: function() {
    return b
  }
}), s("47120");
var i = s("735250"),
  a = s("470079"),
  n = s("120356"),
  l = s.n(n),
  r = s("442837"),
  d = s("692547"),
  o = s("481060"),
  u = s("239091"),
  c = s("92114"),
  h = s("225433"),
  S = s("933557"),
  N = s("775666"),
  g = s("471445"),
  f = s("592125"),
  m = s("324067"),
  E = s("699516"),
  _ = s("9156"),
  T = s("594174"),
  x = s("823379"),
  I = s("621600"),
  C = s("423589"),
  p = s("221259"),
  O = s("113449"),
  M = s("686660"),
  v = s("958648"),
  L = s("569658"),
  j = s("981631"),
  A = s("689938"),
  R = s("214458");

function b(e) {
  let {
    guildId: t,
    requestScrollToBottom: s
  } = e, a = (0, r.useStateFromStoresArray)([f.default, _.default], () => (0, C.filterOverrides)(_.default.getChannelOverrides(t), {
    ignoreMute: !0,
    ignoreUnreadSetting: !1,
    ignoreNotificationSetting: !1
  }).map(e => f.default.getChannel(e)).filter(x.isNotNullish));
  (0, v.default)(a, () => s());
  let n = (0, r.useStateFromStores)([m.default], () => m.default.getCategories(t)),
    l = a.map((e, t) => (0, i.jsxs)("div", {
      className: R.channelRow,
      children: [(0, i.jsx)(U, {
        channel: e,
        categories: n
      }, e.id), t < a.length - 1 && (0, i.jsx)("div", {
        className: R.separator
      })]
    }, e.id));
  return (0, i.jsxs)("div", {
    children: [(0, i.jsx)(L.default, {
      guildId: t,
      onSelected: e => {
        if (null != a.find(t => t.id === e)) return;
        let s = f.default.getChannel(e);
        null != s && c.default.updateChannelOverrideSettings(t, e, {
          muted: !1,
          message_notifications: _.default.resolvedMessageNotifications(s),
          flags: (0, O.withChannelUnreadFlags)(_.default.getChannelIdFlags(s.guild_id, s.id), _.default.resolveUnreadSetting(s))
        }, I.NotificationLabels.OverrideCreated)
      }
    }), l.length > 0 && (0, i.jsxs)("div", {
      className: R.table,
      children: [(0, i.jsxs)("div", {
        className: R.row,
        children: [(0, i.jsx)(o.Text, {
          variant: "text-xs/bold",
          color: "text-muted",
          className: R.rowName,
          children: A.default.Messages.CHANNEL_OR_CATEGORY
        }), (0, i.jsx)(o.Text, {
          variant: "text-xs/bold",
          color: "text-muted",
          className: R.rowOption,
          children: A.default.Messages.NOTIFICATION_PRESET_1
        }), (0, i.jsx)(o.Text, {
          variant: "text-xs/bold",
          color: "text-muted",
          className: R.rowOption,
          children: A.default.Messages.NOTIFICATION_PRESET_2
        }), (0, i.jsx)(o.Text, {
          variant: "text-xs/bold",
          color: "text-muted",
          className: R.rowOption,
          children: A.default.Messages.NOTIFICATION_PRESET_3
        }), (0, i.jsx)(o.Text, {
          variant: "text-xs/bold",
          color: "text-muted",
          className: R.rowOption,
          children: A.default.Messages.NOTIFICATION_PRESET_CUSTOM
        })]
      }), l.length > 0 && (0, i.jsx)("div", {
        className: R.channels,
        children: l
      })]
    })]
  })
}

function U(e) {
  let {
    channel: t,
    categories: s
  } = e, n = (0, o.useToken)(d.default.unsafe_rawColors.GREEN_360).hex(), c = (0, r.useStateFromStores)([f.default], () => f.default.getChannel(null == t ? void 0 : t.parent_id)), m = (0, p.useChannelPresetSettings)(t), [_, x] = a.useState(!1);
  if (null == t) return null;
  let I = A.default.Messages.NO_CATEGORY,
    C = (0, g.getChannelIconComponent)(t);
  t.type === j.ChannelTypes.GUILD_CATEGORY && null != t.guild_id && "" !== t.guild_id ? I = A.default.Messages.NUM_CHANNELS.format({
    num: null != s[t.id] ? s[t.id].length : 0
  }) : null != c && (I = A.default.Messages.IN_CATEGORY.format({
    categoryName: (0, S.computeChannelName)(c, T.default, E.default)
  }));
  let O = _ ? M.Presets.CUSTOM : m.preset;
  return (0, i.jsx)("div", {
    children: (0, i.jsxs)("div", {
      className: l()(R.row, R.channel),
      children: [(0, i.jsxs)("div", {
        className: l()(R.rowName, R.modColor),
        children: [null != C ? (0, i.jsx)(C, {
          height: 20,
          width: 20,
          className: R.icon
        }) : null, (0, i.jsxs)("div", {
          children: [(0, i.jsx)(o.Text, {
            variant: "text-md/semibold",
            className: R.modColor,
            children: (0, S.computeChannelName)(t, T.default, E.default)
          }), (0, i.jsx)(o.Text, {
            variant: "text-xs/medium",
            className: R.modColor,
            children: I
          })]
        })]
      }), (0, i.jsx)("div", {
        className: R.rowOption,
        children: (0, i.jsx)("div", {
          children: (0, i.jsx)(o.Checkbox, {
            color: n,
            shape: o.Checkbox.Shapes.ROUND,
            type: o.Checkbox.Types.INVERTED,
            value: O === M.Presets.ALL_MESSAGES,
            onChange: () => ((0, p.updateChannelPreset)(t.guild_id, t.id, M.Presets.ALL_MESSAGES), x(!1))
          })
        })
      }), (0, i.jsx)("div", {
        className: R.rowOption,
        children: (0, i.jsx)("div", {
          children: (0, i.jsx)(o.Checkbox, {
            color: n,
            shape: o.Checkbox.Shapes.ROUND,
            type: o.Checkbox.Types.INVERTED,
            value: O === M.Presets.MENTIONS,
            onChange: () => ((0, p.updateChannelPreset)(t.guild_id, t.id, M.Presets.MENTIONS), x(!1))
          })
        })
      }), (0, i.jsx)("div", {
        className: R.rowOption,
        children: (0, i.jsx)("div", {
          children: (0, i.jsx)(o.Checkbox, {
            color: n,
            shape: o.Checkbox.Shapes.ROUND,
            type: o.Checkbox.Types.INVERTED,
            value: O === M.Presets.NOTHING,
            onChange: () => ((0, p.updateChannelPreset)(t.guild_id, t.id, M.Presets.NOTHING), x(!1))
          })
        })
      }), (0, i.jsx)("div", {
        className: R.rowOption,
        children: (0, i.jsx)("div", {
          children: (0, i.jsx)(o.Checkbox, {
            onClick: e => {
              (0, u.openContextMenu)(e, () => (0, i.jsx)(o.Menu, {
                navId: "ChannelNotificationCustomSettingsItems",
                "aria-label": A.default.Messages.NOTIFICATION_SETTINGS_CHANNELS_CUSTOM_MENU_ARIA_LABEL,
                onClose: () => {},
                onSelect: () => {},
                children: (0, N.useChannelNotificationCustomSettingsItem)(t, () => x(!1))
              }))
            },
            color: n,
            shape: o.Checkbox.Shapes.ROUND,
            type: o.Checkbox.Types.INVERTED,
            value: O === M.Presets.CUSTOM,
            onChange: () => x(!0)
          })
        })
      }), (0, i.jsx)(h.default, {
        onClick: () => (0, p.updateChannelToGuildDefault)(t.guild_id, t.id),
        className: R.removeButton
      })]
    })
  })
}