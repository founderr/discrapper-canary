"use strict";
n.r(t), n.d(t, {
  default: function() {
    return N
  }
}), n("47120");
var a = n("735250"),
  l = n("470079"),
  i = n("106351"),
  u = n("442837"),
  r = n("481060"),
  d = n("367907"),
  s = n("933557"),
  o = n("177862"),
  c = n("434404"),
  I = n("984933"),
  A = n("430824"),
  E = n("699516"),
  _ = n("594174"),
  T = n("369994"),
  f = n("162157"),
  R = n("981631"),
  M = n("689938"),
  S = n("954534");

function N(e) {
  var t, n;
  let {
    guildId: N,
    transitionState: D,
    onClose: L
  } = e, C = (0, u.useStateFromStores)([A.default], () => A.default.getGuild(N), [N]), p = null !== (t = null == C ? void 0 : C.safetyAlertsChannelId) && void 0 !== t ? t : null, [h, G] = l.useState(!!(null == C ? void 0 : C.hasFeature(R.GuildFeatures.RAID_ALERTS_DISABLED))), m = (0, f.useCanEnableRaidAlerts)(C), [v, O] = l.useState(null != p ? p : null !== (n = null == C ? void 0 : C.publicUpdatesChannelId) && void 0 !== n ? n : null), [x, y] = l.useState(!1), b = (0, u.useStateFromStoresArray)([I.default, _.default, E.default], () => {
    let e = I.default.getChannels(N)[0, I.GUILD_SELECTABLE_CHANNELS_KEY].filter(e => {
      let {
        channel: t
      } = e;
      return t.type === i.ChannelTypes.GUILD_TEXT
    }).map(e => {
      let {
        channel: t
      } = e;
      return {
        value: t.id,
        label: (0, s.computeChannelName)(t, _.default, E.default, !0)
      }
    });
    return null != p ? e : [...e]
  }, [N, p]), g = async () => {
    if (null == C) {
      (0, r.showToast)((0, r.createToast)(M.default.Messages.GUILD_ANTIRAID_SAFETY_SETUP_ERROR, r.ToastType.FAILURE));
      return
    }
    try {
      y(!0), h !== C.hasFeature(R.GuildFeatures.RAID_ALERTS_DISABLED) && await (0, T.setGuildRaidAlerts)(C, !h), v !== p && (await c.default.saveGuild(N, {
        safetyAlertsChannelId: v
      }, {
        throwErr: !0
      }), c.default.updateGuild({
        safetyAlertsChannelId: v
      }));
      let e = null != v ? v : p;
      if (null != e) {
        let t = {
          raid_alert_type: o.RaidAlertType.JOIN_RAID,
          enabled: h,
          raid_alert_channel_id: e,
          guild_id: N,
          channel_id: e
        };
        (0, d.trackWithMetadata)(R.AnalyticEvents.GUILD_RAID_ALERTS_SETUP, t)
      }
      L()
    } catch (e) {
      (0, r.showToast)((0, r.createToast)(M.default.Messages.GUILD_ANTIRAID_SAFETY_SETUP_ERROR, r.ToastType.FAILURE))
    } finally {
      y(!1)
    }
  };
  return (0, a.jsxs)(r.ModalRoot, {
    transitionState: D,
    size: r.ModalSize.SMALL,
    children: [(0, a.jsx)(r.ModalHeader, {
      separator: !1,
      children: (0, a.jsx)(r.Heading, {
        color: "header-primary",
        variant: "heading-md/semibold",
        children: M.default.Messages.GUILD_ANTIRAID_SAFETY_SETUP_CHANNEL_MODAL_TITLE
      })
    }), (0, a.jsxs)(r.ModalContent, {
      children: [(0, a.jsx)(r.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        children: M.default.Messages.GUILD_ANTIRAID_SAFETY_SETUP_CHANNEL_MODAL_DESCRIPTION
      }), (0, a.jsx)("div", {
        className: S.mainChannelContainer,
        children: (0, a.jsxs)(r.Clickable, {
          className: S.enableAlertsContainer,
          onClick: () => {
            m && G(!h)
          },
          children: [(0, a.jsx)(r.Text, {
            variant: "text-md/medium",
            color: "text-normal",
            children: M.default.Messages.GUILD_ANTIRAID_SAFETY_SETUP_CHANNEL_MODAL_ENABLE_ALERTS
          }), (0, a.jsx)(r.Checkbox, {
            value: !h,
            className: S.enabledAlertsCheckbox,
            type: r.Checkbox.Types.INVERTED,
            disabled: !m
          })]
        })
      }), (0, a.jsxs)("div", {
        className: S.mainChannelContainer,
        children: [(0, a.jsx)(r.Text, {
          variant: "eyebrow",
          color: "text-muted",
          children: M.default.Messages.GUILD_ANTIRAID_SAFETY_CHANNEL_TITLE
        }), (0, a.jsx)(r.SearchableSelect, {
          options: b,
          onChange: e => {
            O(e)
          },
          value: v,
          className: S.channelSelect,
          maxVisibleItems: 4
        }), (0, a.jsx)(r.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: M.default.Messages.GUILD_ANTIRAID_SAFETY_SETUP_CHANNEL_MODAL_CHANNEL_PERMISSIONS_NOTICE
        })]
      })]
    }), (0, a.jsxs)(r.ModalFooter, {
      children: [(0, a.jsx)(r.Button, {
        onClick: g,
        color: r.Button.Colors.BRAND,
        look: r.Button.Looks.FILLED,
        submitting: x,
        children: M.default.Messages.SAVE
      }), (0, a.jsx)(r.Button, {
        onClick: L,
        color: r.Button.Colors.PRIMARY,
        look: r.Button.Looks.LINK,
        disabled: x,
        children: M.default.Messages.CANCEL
      })]
    })]
  })
}