"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
}), n("47120");
var l = n("735250"),
  a = n("470079"),
  i = n("106351"),
  u = n("442837"),
  r = n("481060"),
  d = n("367907"),
  s = n("933557"),
  o = n("177862"),
  E = n("434404"),
  _ = n("984933"),
  A = n("430824"),
  I = n("699516"),
  c = n("594174"),
  T = n("369994"),
  R = n("162157"),
  N = n("981631"),
  S = n("689938"),
  M = n("105139");

function f(e) {
  var t, n;
  let {
    guildId: f,
    transitionState: L,
    onClose: D
  } = e, C = (0, u.useStateFromStores)([A.default], () => A.default.getGuild(f), [f]), m = null !== (t = null == C ? void 0 : C.safetyAlertsChannelId) && void 0 !== t ? t : null, [h, G] = a.useState(!!(null == C ? void 0 : C.hasFeature(N.GuildFeatures.RAID_ALERTS_DISABLED))), p = (0, R.useCanEnableRaidAlerts)(C), [O, x] = a.useState(null != m ? m : null !== (n = null == C ? void 0 : C.publicUpdatesChannelId) && void 0 !== n ? n : null), [v, g] = a.useState(!1), b = (0, u.useStateFromStoresArray)([_.default, c.default, I.default], () => {
    let e = _.default.getChannels(f)[0, _.GUILD_SELECTABLE_CHANNELS_KEY].filter(e => {
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
    return null != m ? e : [...e]
  }, [f, m]), y = async () => {
    if (null == C) {
      (0, r.showToast)((0, r.createToast)(S.default.Messages.GUILD_ANTIRAID_SAFETY_SETUP_ERROR, r.ToastType.FAILURE));
      return
    }
    try {
      g(!0), h !== C.hasFeature(N.GuildFeatures.RAID_ALERTS_DISABLED) && await (0, T.setGuildRaidAlerts)(C, !h), O !== m && (await E.default.saveGuild(f, {
        safetyAlertsChannelId: O
      }, {
        throwErr: !0
      }), E.default.updateGuild({
        safetyAlertsChannelId: O
      }));
      let e = null != O ? O : m;
      if (null != e) {
        let t = {
          raid_alert_type: o.RaidAlertType.JOIN_RAID,
          enabled: h,
          raid_alert_channel_id: e,
          guild_id: f,
          channel_id: e
        };
        (0, d.trackWithMetadata)(N.AnalyticEvents.GUILD_RAID_ALERTS_SETUP, t)
      }
      D()
    } catch (e) {
      (0, r.showToast)((0, r.createToast)(S.default.Messages.GUILD_ANTIRAID_SAFETY_SETUP_ERROR, r.ToastType.FAILURE))
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
        children: S.default.Messages.GUILD_ANTIRAID_SAFETY_SETUP_CHANNEL_MODAL_TITLE
      })
    }), (0, l.jsxs)(r.ModalContent, {
      children: [(0, l.jsx)(r.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        children: S.default.Messages.GUILD_ANTIRAID_SAFETY_SETUP_CHANNEL_MODAL_DESCRIPTION
      }), (0, l.jsx)("div", {
        className: M.mainChannelContainer,
        children: (0, l.jsxs)(r.Clickable, {
          className: M.enableAlertsContainer,
          onClick: () => {
            p && G(!h)
          },
          children: [(0, l.jsx)(r.Text, {
            variant: "text-md/medium",
            color: "text-normal",
            children: S.default.Messages.GUILD_ANTIRAID_SAFETY_SETUP_CHANNEL_MODAL_ENABLE_ALERTS
          }), (0, l.jsx)(r.Checkbox, {
            value: !h,
            className: M.enabledAlertsCheckbox,
            type: r.Checkbox.Types.INVERTED,
            disabled: !p
          })]
        })
      }), (0, l.jsxs)("div", {
        className: M.mainChannelContainer,
        children: [(0, l.jsx)(r.Text, {
          variant: "eyebrow",
          color: "text-muted",
          children: S.default.Messages.GUILD_ANTIRAID_SAFETY_CHANNEL_TITLE
        }), (0, l.jsx)(r.SearchableSelect, {
          options: b,
          onChange: e => {
            x(e)
          },
          value: O,
          className: M.channelSelect,
          maxVisibleItems: 4
        }), (0, l.jsx)(r.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: S.default.Messages.GUILD_ANTIRAID_SAFETY_SETUP_CHANNEL_MODAL_CHANNEL_PERMISSIONS_NOTICE
        })]
      })]
    }), (0, l.jsxs)(r.ModalFooter, {
      children: [(0, l.jsx)(r.Button, {
        onClick: y,
        color: r.Button.Colors.BRAND_NEW,
        look: r.Button.Looks.FILLED,
        submitting: v,
        children: S.default.Messages.SAVE
      }), (0, l.jsx)(r.Button, {
        onClick: D,
        color: r.Button.Colors.PRIMARY,
        look: r.Button.Looks.LINK,
        disabled: v,
        children: S.default.Messages.CANCEL
      })]
    })]
  })
}