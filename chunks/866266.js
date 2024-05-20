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
  A = n("434404"),
  I = n("984933"),
  _ = n("430824"),
  E = n("699516"),
  c = n("594174"),
  T = n("369994"),
  R = n("162157"),
  N = n("981631"),
  S = n("689938"),
  M = n("954534");

function f(e) {
  var t, n;
  let {
    guildId: f,
    transitionState: L,
    onClose: D
  } = e, C = (0, u.useStateFromStores)([_.default], () => _.default.getGuild(f), [f]), h = null !== (t = null == C ? void 0 : C.safetyAlertsChannelId) && void 0 !== t ? t : null, [m, G] = a.useState(!!(null == C ? void 0 : C.hasFeature(N.GuildFeatures.RAID_ALERTS_DISABLED))), O = (0, R.useCanEnableRaidAlerts)(C), [p, v] = a.useState(null != h ? h : null !== (n = null == C ? void 0 : C.publicUpdatesChannelId) && void 0 !== n ? n : null), [x, g] = a.useState(!1), b = (0, u.useStateFromStoresArray)([I.default, c.default, E.default], () => {
    let e = I.default.getChannels(f)[0, I.GUILD_SELECTABLE_CHANNELS_KEY].filter(e => {
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
        label: (0, s.computeChannelName)(t, c.default, E.default, !0)
      }
    });
    return null != h ? e : [...e]
  }, [f, h]), y = async () => {
    if (null == C) {
      (0, r.showToast)((0, r.createToast)(S.default.Messages.GUILD_ANTIRAID_SAFETY_SETUP_ERROR, r.ToastType.FAILURE));
      return
    }
    try {
      g(!0), m !== C.hasFeature(N.GuildFeatures.RAID_ALERTS_DISABLED) && await (0, T.setGuildRaidAlerts)(C, !m), p !== h && (await A.default.saveGuild(f, {
        safetyAlertsChannelId: p
      }, {
        throwErr: !0
      }), A.default.updateGuild({
        safetyAlertsChannelId: p
      }));
      let e = null != p ? p : h;
      if (null != e) {
        let t = {
          raid_alert_type: o.RaidAlertType.JOIN_RAID,
          enabled: m,
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
            O && G(!m)
          },
          children: [(0, l.jsx)(r.Text, {
            variant: "text-md/medium",
            color: "text-normal",
            children: S.default.Messages.GUILD_ANTIRAID_SAFETY_SETUP_CHANNEL_MODAL_ENABLE_ALERTS
          }), (0, l.jsx)(r.Checkbox, {
            value: !m,
            className: M.enabledAlertsCheckbox,
            type: r.Checkbox.Types.INVERTED,
            disabled: !O
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
            v(e)
          },
          value: p,
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
        submitting: x,
        children: S.default.Messages.SAVE
      }), (0, l.jsx)(r.Button, {
        onClick: D,
        color: r.Button.Colors.PRIMARY,
        look: r.Button.Looks.LINK,
        disabled: x,
        children: S.default.Messages.CANCEL
      })]
    })]
  })
}