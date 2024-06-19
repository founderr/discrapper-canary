t.d(n, {
  Z: function() {
    return D
  }
}), t(47120);
var l = t(735250),
  a = t(470079),
  i = t(106351),
  r = t(442837),
  u = t(481060),
  o = t(367907),
  s = t(933557),
  d = t(177862),
  c = t(434404),
  I = t(984933),
  _ = t(430824),
  E = t(699516),
  A = t(594174),
  T = t(369994),
  N = t(162157),
  M = t(981631),
  f = t(689938),
  S = t(463303);

function D(e) {
  var n, t;
  let {
    guildId: D,
    transitionState: R,
    onClose: L
  } = e, C = (0, r.e7)([_.Z], () => _.Z.getGuild(D), [D]), h = null !== (n = null == C ? void 0 : C.safetyAlertsChannelId) && void 0 !== n ? n : null, [O, v] = a.useState(!!(null == C ? void 0 : C.hasFeature(M.oNc.RAID_ALERTS_DISABLED))), Z = (0, N.BT)(C), [x, G] = a.useState(null != h ? h : null !== (t = null == C ? void 0 : C.publicUpdatesChannelId) && void 0 !== t ? t : null), [U, g] = a.useState(!1), y = (0, r.Wu)([I.ZP, A.default, E.Z], () => {
    let e = I.ZP.getChannels(D)[I.sH].filter(e => {
      let {
        channel: n
      } = e;
      return n.type === i.d.GUILD_TEXT
    }).map(e => {
      let {
        channel: n
      } = e;
      return {
        value: n.id,
        label: (0, s.F6)(n, A.default, E.Z, !0)
      }
    });
    return null != h ? e : [...e]
  }, [D, h]), b = async () => {
    if (null == C) {
      (0, u.showToast)((0, u.createToast)(f.Z.Messages.GUILD_ANTIRAID_SAFETY_SETUP_ERROR, u.ToastType.FAILURE));
      return
    }
    try {
      g(!0), O !== C.hasFeature(M.oNc.RAID_ALERTS_DISABLED) && await (0, T.f6)(C, !O), x !== h && (await c.Z.saveGuild(D, {
        safetyAlertsChannelId: x
      }, {
        throwErr: !0
      }), c.Z.updateGuild({
        safetyAlertsChannelId: x
      }));
      let e = null != x ? x : h;
      if (null != e) {
        let n = {
          raid_alert_type: d.wR.JOIN_RAID,
          enabled: O,
          raid_alert_channel_id: e,
          guild_id: D,
          channel_id: e
        };
        (0, o.yw)(M.rMx.GUILD_RAID_ALERTS_SETUP, n)
      }
      L()
    } catch (e) {
      (0, u.showToast)((0, u.createToast)(f.Z.Messages.GUILD_ANTIRAID_SAFETY_SETUP_ERROR, u.ToastType.FAILURE))
    } finally {
      g(!1)
    }
  };
  return (0, l.jsxs)(u.ModalRoot, {
    transitionState: R,
    size: u.ModalSize.SMALL,
    children: [(0, l.jsx)(u.ModalHeader, {
      separator: !1,
      children: (0, l.jsx)(u.Heading, {
        color: "header-primary",
        variant: "heading-md/semibold",
        children: f.Z.Messages.GUILD_ANTIRAID_SAFETY_SETUP_CHANNEL_MODAL_TITLE
      })
    }), (0, l.jsxs)(u.ModalContent, {
      children: [(0, l.jsx)(u.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        children: f.Z.Messages.GUILD_ANTIRAID_SAFETY_SETUP_CHANNEL_MODAL_DESCRIPTION
      }), (0, l.jsx)("div", {
        className: S.mainChannelContainer,
        children: (0, l.jsxs)(u.Clickable, {
          className: S.enableAlertsContainer,
          onClick: () => {
            if (!!Z) v(!O)
          },
          children: [(0, l.jsx)(u.Text, {
            variant: "text-md/medium",
            color: "text-normal",
            children: f.Z.Messages.GUILD_ANTIRAID_SAFETY_SETUP_CHANNEL_MODAL_ENABLE_ALERTS
          }), (0, l.jsx)(u.Checkbox, {
            value: !O,
            className: S.enabledAlertsCheckbox,
            type: u.Checkbox.Types.INVERTED,
            disabled: !Z
          })]
        })
      }), (0, l.jsxs)("div", {
        className: S.mainChannelContainer,
        children: [(0, l.jsx)(u.Text, {
          variant: "eyebrow",
          color: "text-muted",
          children: f.Z.Messages.GUILD_ANTIRAID_SAFETY_CHANNEL_TITLE
        }), (0, l.jsx)(u.SearchableSelect, {
          options: y,
          onChange: e => {
            G(e)
          },
          value: x,
          className: S.channelSelect,
          maxVisibleItems: 4
        }), (0, l.jsx)(u.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: f.Z.Messages.GUILD_ANTIRAID_SAFETY_SETUP_CHANNEL_MODAL_CHANNEL_PERMISSIONS_NOTICE
        })]
      })]
    }), (0, l.jsxs)(u.ModalFooter, {
      children: [(0, l.jsx)(u.Button, {
        onClick: b,
        color: u.Button.Colors.BRAND,
        look: u.Button.Looks.FILLED,
        submitting: U,
        children: f.Z.Messages.SAVE
      }), (0, l.jsx)(u.Button, {
        onClick: L,
        color: u.Button.Colors.PRIMARY,
        look: u.Button.Looks.LINK,
        disabled: U,
        children: f.Z.Messages.CANCEL
      })]
    })]
  })
}