"use strict";
s.r(t), s.d(t, {
  default: function() {
    return S
  }
});
var a = s("735250");
s("470079");
var n = s("178346"),
  l = s("481060"),
  i = s("230711"),
  r = s("267642"),
  o = s("760558"),
  d = s("981631"),
  u = s("689938"),
  c = s("584545");

function S(e) {
  let {
    guildBoostSlot: t,
    onClose: S,
    hasCancelableGuildBoostSlot: E,
    premiumSubscription: T,
    onSelect: _
  } = e, I = {
    transfer: {
      label: null != t.premiumGuildSubscription ? u.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_TRANSFER_BUTTON : u.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_SELECT_SERVER_BUTTON,
      subtext: t.isOnCooldown() ? u.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_TRANSFER_BUTTON_DISABLED_TOOLTIP : null,
      disabled: t.isOnCooldown()
    },
    cancel: {
      label: u.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_SLOT_CANCEL_BUTTON,
      subtext: E ? null : u.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_CANCEL_BUTTON_DISABLED_TOOLTIP,
      disabled: !E
    },
    uncancel: {
      label: u.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_SLOT_UNCANCEL_BUTTON,
      subtext: null,
      disabled: !1
    }
  };
  switch (T.status) {
    case d.SubscriptionStatusTypes.PAST_DUE:
      I.cancel.disabled = !0, I.cancel.subtext = u.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_CANCEL_BUTTON_DISABLED_PAST_DUE_TOOLTIP, I.uncancel.disabled = !0;
      break;
    case d.SubscriptionStatusTypes.PAUSE_PENDING:
    case d.SubscriptionStatusTypes.PAUSED:
      I.transfer.disabled = !0, I.transfer.subtext = u.default.Messages.GUILD_BOOSTING_TRANSFER_DISABLED_FOR_PAUSED_SUBSCRIPTION, I.cancel.disabled = !0, I.cancel.subtext = u.default.Messages.GUILD_BOOSTING_CANCEL_DISABLED_FOR_PAUSED_SUBSCRIPTION, I.uncancel.disabled = !0
  }
  return (0, a.jsxs)(l.Menu, {
    onSelect: _,
    navId: "subscription-context",
    variant: "fixed",
    "aria-label": u.default.Messages.GENERIC_ACTIONS_MENU_LABEL,
    onClose: S,
    children: [(0, a.jsx)(l.MenuItem, {
      id: "apply",
      label: I.transfer.label,
      subtext: I.transfer.subtext,
      action: function() {
        (0, l.openModalLazy)(async () => e => (0, a.jsx)(o.default, {
          ...e,
          guildBoostSlots: [t],
          locationSection: d.AnalyticsSections.SETTINGS_PREMIUM
        }))
      },
      disabled: I.transfer.disabled
    }), (0, r.isGuildBoostSlotCanceled)(t) ? (0, a.jsx)(l.MenuItem, {
      id: "uncancel",
      label: I.uncancel.label,
      subtext: I.uncancel.subtext,
      action: function() {
        (0, l.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([s.e("99387"), s.e("73049")]).then(s.bind(s, "450468"));
          return s => (0, a.jsx)(e, {
            ...s,
            guildBoostSlotId: t.id
          })
        })
      },
      disabled: I.uncancel.disabled
    }) : (0, a.jsx)(l.MenuItem, {
      id: "cancel",
      label: I.cancel.label,
      subtext: I.cancel.subtext,
      action: function() {
        (0, l.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([s.e("99387"), s.e("55224")]).then(s.bind(s, "401786"));
          return s => (0, a.jsx)(e, {
            ...s,
            guildBoostSlot: t
          })
        })
      },
      disabled: I.cancel.disabled,
      color: "danger"
    }), T.isPausedOrPausePending ? (0, a.jsx)(l.MenuItem, {
      id: "manage-subscription",
      label: u.default.Messages.BILLING_MANAGE_SUBSCRIPTION,
      action: () => i.default.open(d.UserSettingsSections.SUBSCRIPTIONS),
      icon: n.LightbulbIcon,
      showIconFirst: !0,
      className: c.manageSubscription
    }) : null]
  })
}