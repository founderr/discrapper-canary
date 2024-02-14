"use strict";
n.r(t), n.d(t, {
  BenefitsConfirmationLite: function() {
    return u
  },
  PurchaseConfirmationLite: function() {
    return o
  }
});
var a = n("37983");
n("884691");
var s = n("77078"),
  l = n("724038"),
  i = n("782340"),
  r = n("61790");
let u = e => {
  let {
    onConfirm: t,
    onCancel: n,
    title: u,
    subtitle: o,
    confirmCta: d,
    showOpenDiscord: c = !0
  } = e;
  return (0, a.jsxs)("div", {
    className: r.confirmationContainer,
    children: [(0, a.jsx)(s.Heading, {
      className: r.confirmationHeader,
      variant: "heading-lg/extrabold",
      children: u
    }), null != o ? (0, a.jsx)(s.Text, {
      className: r.confirmationSubtitle,
      variant: "text-sm/normal",
      color: "header-secondary",
      children: o
    }) : null, (0, a.jsxs)("div", {
      className: r.buttonContainer,
      children: [c && (0, a.jsx)(s.Button, {
        fullWidth: !0,
        onClick: () => (0, l.default)("application_sub_mweb_success_modal"),
        children: i.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_OPEN_DISCORD_BUTTON
      }), (0, a.jsx)(s.Button, {
        fullWidth: !0,
        color: s.Button.Colors.PRIMARY,
        onClick: t,
        children: d
      }), null != n && (0, a.jsx)(s.Button, {
        fullWidth: !0,
        color: s.Button.Colors.PRIMARY,
        look: s.Button.Looks.LINK,
        onClick: n,
        children: i.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_CANCEL_BUTTON
      })]
    })]
  })
};

function o(e) {
  let {
    onConfirm: t,
    tierName: n,
    subscription: u
  } = e;
  return (0, a.jsxs)("div", {
    className: r.confirmationContainer,
    children: [(0, a.jsx)(s.Heading, {
      className: r.confirmationHeader,
      variant: "heading-lg/extrabold",
      children: i.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_CONFIRMATION_TITLE.format({
        tier: n
      })
    }), (0, a.jsx)(s.Text, {
      className: r.confirmationSubtitle,
      variant: "text-sm/normal",
      color: "header-secondary",
      children: i.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_CONFIRMATION_SUBTITLE.format({
        timestamp: null == u ? void 0 : u.currentPeriodEnd
      })
    }), (0, a.jsxs)("div", {
      className: r.buttonContainer,
      children: [(0, a.jsx)(s.Button, {
        className: r.openDiscordButton,
        onClick: () => (0, l.default)("application_sub_mweb_success_modal"),
        children: i.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_OPEN_DISCORD_BUTTON
      }), (0, a.jsx)(s.Button, {
        className: r.doneButton,
        look: s.Button.Looks.BLANK,
        onClick: t,
        children: i.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_DONE_BUTTON
      })]
    })]
  })
}