t.d(n, {
  h: function() {
    return o
  },
  m: function() {
    return u
  }
});
var r = t(735250);
t(470079);
var s = t(481060),
  a = t(17894),
  l = t(689938),
  i = t(484595);
let o = e => {
  let {
    onConfirm: n,
    onCancel: t,
    title: o,
    subtitle: u,
    confirmCta: c,
    showOpenDiscord: d = !0
  } = e;
  return (0, r.jsxs)("div", {
    className: i.confirmationContainer,
    children: [(0, r.jsx)(s.Heading, {
      className: i.confirmationHeader,
      variant: "heading-lg/extrabold",
      children: o
    }), null != u ? (0, r.jsx)(s.Text, {
      className: i.confirmationSubtitle,
      variant: "text-sm/normal",
      color: "header-secondary",
      children: u
    }) : null, (0, r.jsxs)("div", {
      className: i.buttonContainer,
      children: [d && (0, r.jsx)(s.Button, {
        fullWidth: !0,
        onClick: () => (0, a.Z)("application_sub_mweb_success_modal"),
        children: l.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_OPEN_DISCORD_BUTTON
      }), (0, r.jsx)(s.Button, {
        fullWidth: !0,
        color: s.Button.Colors.PRIMARY,
        onClick: n,
        children: c
      }), null != t && (0, r.jsx)(s.Button, {
        fullWidth: !0,
        color: s.Button.Colors.PRIMARY,
        look: s.Button.Looks.LINK,
        onClick: t,
        children: l.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_CANCEL_BUTTON
      })]
    })]
  })
};

function u(e) {
  let {
    onConfirm: n,
    tierName: t,
    subscription: o
  } = e;
  return (0, r.jsxs)("div", {
    className: i.confirmationContainer,
    children: [(0, r.jsx)(s.Heading, {
      className: i.confirmationHeader,
      variant: "heading-lg/extrabold",
      children: l.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_CONFIRMATION_TITLE.format({
        tier: t
      })
    }), (0, r.jsx)(s.Text, {
      className: i.confirmationSubtitle,
      variant: "text-sm/normal",
      color: "header-secondary",
      children: l.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_CONFIRMATION_SUBTITLE.format({
        timestamp: null == o ? void 0 : o.currentPeriodEnd
      })
    }), (0, r.jsxs)("div", {
      className: i.buttonContainer,
      children: [(0, r.jsx)(s.Button, {
        className: i.__invalid_openDiscordButton,
        onClick: () => (0, a.Z)("application_sub_mweb_success_modal"),
        children: l.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_OPEN_DISCORD_BUTTON
      }), (0, r.jsx)(s.Button, {
        className: i.__invalid_doneButton,
        look: s.Button.Looks.BLANK,
        onClick: n,
        children: l.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_DONE_BUTTON
      })]
    })]
  })
}