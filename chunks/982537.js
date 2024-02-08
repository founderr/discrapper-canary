"use strict";
n.r(t), n.d(t, {
  default: function() {
    return M
  }
}), n("222007");
var l = n("37983"),
  a = n("884691"),
  i = n("298386"),
  u = n("446674"),
  r = n("77078"),
  d = n("716241"),
  s = n("679653"),
  o = n("85448"),
  A = n("592407"),
  E = n("923959"),
  _ = n("305961"),
  I = n("27618"),
  c = n("697218"),
  T = n("311340"),
  R = n("701203"),
  f = n("49111"),
  N = n("782340"),
  S = n("456793");

function M(e) {
  var t, n;
  let {
    guildId: M,
    transitionState: L,
    onClose: D
  } = e, C = (0, u.useStateFromStores)([_.default], () => _.default.getGuild(M), [M]), m = null !== (t = null == C ? void 0 : C.safetyAlertsChannelId) && void 0 !== t ? t : null, [h, G] = a.useState(!!(null == C ? void 0 : C.hasFeature(f.GuildFeatures.RAID_ALERTS_DISABLED))), p = (0, R.useCanEnableRaidAlerts)(C), [O, x] = a.useState(null != m ? m : null !== (n = null == C ? void 0 : C.publicUpdatesChannelId) && void 0 !== n ? n : null), [v, g] = a.useState(!1), b = (0, u.useStateFromStoresArray)([E.default, c.default, I.default], () => {
    let e = E.default.getChannels(M),
      t = e[0, E.GUILD_SELECTABLE_CHANNELS_KEY].filter(e => {
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
          label: (0, s.computeChannelName)(t, c.default, I.default, !0)
        }
      });
    return null != m ? t : [...t]
  }, [M, m]), y = async () => {
    if (null == C) {
      (0, r.showToast)((0, r.createToast)(N.default.Messages.GUILD_ANTIRAID_SAFETY_SETUP_ERROR, r.ToastType.FAILURE));
      return
    }
    try {
      g(!0), h !== C.hasFeature(f.GuildFeatures.RAID_ALERTS_DISABLED) && await (0, T.setGuildRaidAlerts)(C, !h), O !== m && (await A.default.saveGuild(M, {
        safetyAlertsChannelId: O
      }, {
        throwErr: !0
      }), A.default.updateGuild({
        safetyAlertsChannelId: O
      }));
      let e = null != O ? O : m;
      if (null != e) {
        let t = {
          raid_alert_type: o.RaidAlertType.JOIN_RAID,
          enabled: h,
          raid_alert_channel_id: e,
          guild_id: M,
          channel_id: e
        };
        (0, d.trackWithMetadata)(f.AnalyticEvents.GUILD_RAID_ALERTS_SETUP, t)
      }
      D()
    } catch (e) {
      (0, r.showToast)((0, r.createToast)(N.default.Messages.GUILD_ANTIRAID_SAFETY_SETUP_ERROR, r.ToastType.FAILURE))
    } finally {
      g(!1)
    }
  };
  return (0, l.jsxs)(r.ModalRoot, {
    transitionState: L,
    size: r.ModalSize.SMALL,
    children: [(0, l.jsx)(r.ModalHeader, {
      separator: !1,
      children: (0, l.jsx)(r.Heading, {
        color: "header-primary",
        variant: "heading-md/semibold",
        children: N.default.Messages.GUILD_ANTIRAID_SAFETY_SETUP_CHANNEL_MODAL_TITLE
      })
    }), (0, l.jsxs)(r.ModalContent, {
      children: [(0, l.jsx)(r.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        children: N.default.Messages.GUILD_ANTIRAID_SAFETY_SETUP_CHANNEL_MODAL_DESCRIPTION
      }), (0, l.jsx)("div", {
        className: S.mainChannelContainer,
        children: (0, l.jsxs)(r.Clickable, {
          className: S.enableAlertsContainer,
          onClick: () => {
            p && G(!h)
          },
          children: [(0, l.jsx)(r.Text, {
            variant: "text-md/medium",
            color: "text-normal",
            children: N.default.Messages.GUILD_ANTIRAID_SAFETY_SETUP_CHANNEL_MODAL_ENABLE_ALERTS
          }), (0, l.jsx)(r.Checkbox, {
            value: !h,
            className: S.enabledAlertsCheckbox,
            type: r.Checkbox.Types.INVERTED,
            disabled: !p
          })]
        })
      }), (0, l.jsxs)("div", {
        className: S.mainChannelContainer,
        children: [(0, l.jsx)(r.Text, {
          variant: "eyebrow",
          color: "text-muted",
          children: N.default.Messages.GUILD_ANTIRAID_SAFETY_CHANNEL_TITLE
        }), (0, l.jsx)(r.SearchableSelect, {
          options: b,
          onChange: e => {
            x(e)
          },
          value: O,
          className: S.channelSelect,
          maxVisibleItems: 4
        }), (0, l.jsx)(r.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: N.default.Messages.GUILD_ANTIRAID_SAFETY_SETUP_CHANNEL_MODAL_CHANNEL_PERMISSIONS_NOTICE
        })]
      })]
    }), (0, l.jsxs)(r.ModalFooter, {
      children: [(0, l.jsx)(r.Button, {
        onClick: y,
        color: r.Button.Colors.BRAND_NEW,
        look: r.Button.Looks.FILLED,
        submitting: v,
        children: N.default.Messages.SAVE
      }), (0, l.jsx)(r.Button, {
        onClick: D,
        color: r.Button.Colors.PRIMARY,
        look: r.Button.Looks.LINK,
        disabled: v,
        children: N.default.Messages.CANCEL
      })]
    })]
  })
}