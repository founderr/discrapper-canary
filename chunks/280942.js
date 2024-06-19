t.d(s, {
  Z: function() {
    return E
  }
});
var n = t(735250);
t(470079);
var i = t(481060),
  a = t(230711),
  l = t(267642),
  r = t(981631),
  o = t(689938),
  c = t(257797);

function E(e) {
  let {
    guildBoostSlot: s,
    onClose: E,
    hasCancelableGuildBoostSlot: d,
    premiumSubscription: _,
    onSelect: T
  } = e, S = {
    transfer: {
      label: null != s.premiumGuildSubscription ? o.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_TRANSFER_BUTTON : o.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_SELECT_SERVER_BUTTON,
      subtext: s.isOnCooldown() ? o.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_TRANSFER_BUTTON_DISABLED_TOOLTIP : null,
      disabled: s.isOnCooldown()
    },
    cancel: {
      label: o.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_SLOT_CANCEL_BUTTON,
      subtext: d ? null : o.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_CANCEL_BUTTON_DISABLED_TOOLTIP,
      disabled: !d
    },
    uncancel: {
      label: o.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_SLOT_UNCANCEL_BUTTON,
      subtext: null,
      disabled: !1
    }
  };
  switch (_.status) {
    case r.O0b.PAST_DUE:
      S.cancel.disabled = !0, S.cancel.subtext = o.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_CANCEL_BUTTON_DISABLED_PAST_DUE_TOOLTIP, S.uncancel.disabled = !0;
      break;
    case r.O0b.PAUSE_PENDING:
    case r.O0b.PAUSED:
      S.transfer.disabled = !0, S.transfer.subtext = o.Z.Messages.GUILD_BOOSTING_TRANSFER_DISABLED_FOR_PAUSED_SUBSCRIPTION, S.cancel.disabled = !0, S.cancel.subtext = o.Z.Messages.GUILD_BOOSTING_CANCEL_DISABLED_FOR_PAUSED_SUBSCRIPTION, S.uncancel.disabled = !0
  }
  return (0, n.jsxs)(i.Menu, {
    onSelect: T,
    navId: "subscription-context",
    variant: "fixed",
    "aria-label": o.Z.Messages.GENERIC_ACTIONS_MENU_LABEL,
    onClose: E,
    children: [(0, n.jsx)(i.MenuItem, {
      id: "apply",
      label: S.transfer.label,
      subtext: S.transfer.subtext,
      action: function() {
        (0, i.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.resolve().then(t.bind(t, 760558));
          return t => (0, n.jsx)(e, {
            ...t,
            guildBoostSlots: [s],
            locationSection: r.jXE.SETTINGS_PREMIUM
          })
        })
      },
      disabled: S.transfer.disabled
    }), (0, l.tl)(s) ? (0, n.jsx)(i.MenuItem, {
      id: "uncancel",
      label: S.uncancel.label,
      subtext: S.uncancel.subtext,
      action: function() {
        (0, i.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.resolve().then(t.bind(t, 450468));
          return t => (0, n.jsx)(e, {
            ...t,
            guildBoostSlotId: s.id
          })
        })
      },
      disabled: S.uncancel.disabled
    }) : (0, n.jsx)(i.MenuItem, {
      id: "cancel",
      label: S.cancel.label,
      subtext: S.cancel.subtext,
      action: function() {
        (0, i.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.resolve().then(t.bind(t, 401786));
          return t => (0, n.jsx)(e, {
            ...t,
            guildBoostSlot: s
          })
        })
      },
      disabled: S.cancel.disabled,
      color: "danger"
    }), _.isPausedOrPausePending ? (0, n.jsx)(i.MenuItem, {
      id: "manage-subscription",
      label: o.Z.Messages.BILLING_MANAGE_SUBSCRIPTION,
      action: () => a.Z.open(r.oAB.SUBSCRIPTIONS),
      icon: i.LightbulbIcon,
      showIconFirst: !0,
      className: c.manageSubscription
    }) : null]
  })
}