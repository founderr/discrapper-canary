"use strict";
s.r(t), s.d(t, {
  default: function() {
    return b
  }
}), s("47120");
var i = s("735250"),
  n = s("470079"),
  a = s("120356"),
  l = s.n(a),
  r = s("442837"),
  o = s("692547"),
  d = s("481060"),
  u = s("239091"),
  c = s("92114"),
  h = s("225433"),
  S = s("933557"),
  N = s("775666"),
  f = s("471445"),
  g = s("592125"),
  m = s("324067"),
  E = s("699516"),
  _ = s("9156"),
  T = s("594174"),
  x = s("823379"),
  p = s("621600"),
  C = s("423589"),
  I = s("221259"),
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
  } = e, n = (0, r.useStateFromStoresArray)([g.default, _.default], () => (0, C.filterOverrides)(_.default.getChannelOverrides(t), {
    ignoreMute: !0,
    ignoreUnreadSetting: !1,
    ignoreNotificationSetting: !1
  }).map(e => g.default.getChannel(e)).filter(x.isNotNullish));
  (0, v.default)(n, () => s());
  let a = (0, r.useStateFromStores)([m.default], () => m.default.getCategories(t)),
    l = n.map((e, t) => (0, i.jsxs)("div", {
      className: R.channelRow,
      children: [(0, i.jsx)(U, {
        channel: e,
        categories: a
      }, e.id), t < n.length - 1 && (0, i.jsx)("div", {
        className: R.separator
      })]
    }, e.id));
  return (0, i.jsxs)("div", {
    children: [(0, i.jsx)(L.default, {
      guildId: t,
      onSelected: e => {
        if (null != n.find(t => t.id === e)) return;
        let s = g.default.getChannel(e);
        null != s && c.default.updateChannelOverrideSettings(t, e, {
          muted: !1,
          message_notifications: _.default.resolvedMessageNotifications(s),
          flags: (0, O.withChannelUnreadFlags)(_.default.getChannelIdFlags(s.guild_id, s.id), _.default.resolveUnreadSetting(s))
        }, p.NotificationLabels.OverrideCreated)
      }
    }), l.length > 0 && (0, i.jsxs)("div", {
      className: R.table,
      children: [(0, i.jsxs)("div", {
        className: R.row,
        children: [(0, i.jsx)(d.Text, {
          variant: "text-xs/bold",
          color: "text-muted",
          className: R.rowName,
          children: A.default.Messages.CHANNEL_OR_CATEGORY
        }), (0, i.jsx)(d.Text, {
          variant: "text-xs/bold",
          color: "text-muted",
          className: R.rowOption,
          children: A.default.Messages.NOTIFICATION_PRESET_1
        }), (0, i.jsx)(d.Text, {
          variant: "text-xs/bold",
          color: "text-muted",
          className: R.rowOption,
          children: A.default.Messages.NOTIFICATION_PRESET_2
        }), (0, i.jsx)(d.Text, {
          variant: "text-xs/bold",
          color: "text-muted",
          className: R.rowOption,
          children: A.default.Messages.NOTIFICATION_PRESET_3
        }), (0, i.jsx)(d.Text, {
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
  } = e, a = (0, d.useToken)(o.default.unsafe_rawColors.GREEN_360).hex(), c = (0, r.useStateFromStores)([g.default], () => g.default.getChannel(null == t ? void 0 : t.parent_id)), m = (0, I.useChannelPresetSettings)(t), [_, x] = n.useState(!1);
  if (null == t) return null;
  let p = A.default.Messages.NO_CATEGORY,
    C = (0, f.getChannelIconComponent)(t);
  t.type === j.ChannelTypes.GUILD_CATEGORY && null != t.guild_id && "" !== t.guild_id ? p = A.default.Messages.NUM_CHANNELS.format({
    num: null != s[t.id] ? s[t.id].length : 0
  }) : null != c && (p = A.default.Messages.IN_CATEGORY.format({
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
          children: [(0, i.jsx)(d.Text, {
            variant: "text-md/semibold",
            className: R.modColor,
            children: (0, S.computeChannelName)(t, T.default, E.default)
          }), (0, i.jsx)(d.Text, {
            variant: "text-xs/medium",
            className: R.modColor,
            children: p
          })]
        })]
      }), (0, i.jsx)("div", {
        className: R.rowOption,
        children: (0, i.jsx)("div", {
          children: (0, i.jsx)(d.Checkbox, {
            color: a,
            shape: d.Checkbox.Shapes.ROUND,
            type: d.Checkbox.Types.INVERTED,
            value: O === M.Presets.ALL_MESSAGES,
            onChange: () => ((0, I.updateChannelPreset)(t.guild_id, t.id, M.Presets.ALL_MESSAGES), x(!1))
          })
        })
      }), (0, i.jsx)("div", {
        className: R.rowOption,
        children: (0, i.jsx)("div", {
          children: (0, i.jsx)(d.Checkbox, {
            color: a,
            shape: d.Checkbox.Shapes.ROUND,
            type: d.Checkbox.Types.INVERTED,
            value: O === M.Presets.MENTIONS,
            onChange: () => ((0, I.updateChannelPreset)(t.guild_id, t.id, M.Presets.MENTIONS), x(!1))
          })
        })
      }), (0, i.jsx)("div", {
        className: R.rowOption,
        children: (0, i.jsx)("div", {
          children: (0, i.jsx)(d.Checkbox, {
            color: a,
            shape: d.Checkbox.Shapes.ROUND,
            type: d.Checkbox.Types.INVERTED,
            value: O === M.Presets.NOTHING,
            onChange: () => ((0, I.updateChannelPreset)(t.guild_id, t.id, M.Presets.NOTHING), x(!1))
          })
        })
      }), (0, i.jsx)("div", {
        className: R.rowOption,
        children: (0, i.jsx)("div", {
          children: (0, i.jsx)(d.Checkbox, {
            onClick: e => {
              (0, u.openContextMenu)(e, () => (0, i.jsx)(d.Menu, {
                navId: "ChannelNotificationCustomSettingsItems",
                "aria-label": A.default.Messages.NOTIFICATION_SETTINGS_CHANNELS_CUSTOM_MENU_ARIA_LABEL,
                onClose: () => {},
                onSelect: () => {},
                children: (0, N.useChannelNotificationCustomSettingsItem)(t, () => x(!1))
              }))
            },
            color: a,
            shape: d.Checkbox.Shapes.ROUND,
            type: d.Checkbox.Types.INVERTED,
            value: O === M.Presets.CUSTOM,
            onChange: () => x(!0)
          })
        })
      }), (0, i.jsx)(h.default, {
        onClick: () => (0, I.updateChannelToGuildDefault)(t.guild_id, t.id),
        className: R.removeButton
      })]
    })
  })
}