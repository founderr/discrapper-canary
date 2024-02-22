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
var l = n("77078"),
  i = n("724038"),
  r = n("782340"),
  s = n("61790");
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
    className: s.confirmationContainer,
    children: [(0, a.jsx)(l.Heading, {
      className: s.confirmationHeader,
      variant: "heading-lg/extrabold",
      children: u
    }), null != o ? (0, a.jsx)(l.Text, {
      className: s.confirmationSubtitle,
      variant: "text-sm/normal",
      color: "header-secondary",
      children: o
    }) : null, (0, a.jsxs)("div", {
      className: s.buttonContainer,
      children: [c && (0, a.jsx)(l.Button, {
        fullWidth: !0,
        onClick: () => (0, i.default)("application_sub_mweb_success_modal"),
        children: r.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_OPEN_DISCORD_BUTTON
      }), (0, a.jsx)(l.Button, {
        fullWidth: !0,
        color: l.Button.Colors.PRIMARY,
        onClick: t,
        children: d
      }), null != n && (0, a.jsx)(l.Button, {
        fullWidth: !0,
        color: l.Button.Colors.PRIMARY,
        look: l.Button.Looks.LINK,
        onClick: n,
        children: r.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_CANCEL_BUTTON
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
    className: s.confirmationContainer,
    children: [(0, a.jsx)(l.Heading, {
      className: s.confirmationHeader,
      variant: "heading-lg/extrabold",
      children: r.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_CONFIRMATION_TITLE.format({
        tier: n
      })
    }), (0, a.jsx)(l.Text, {
      className: s.confirmationSubtitle,
      variant: "text-sm/normal",
      color: "header-secondary",
      children: r.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_CONFIRMATION_SUBTITLE.format({
        timestamp: null == u ? void 0 : u.currentPeriodEnd
      })
    }), (0, a.jsxs)("div", {
      className: s.buttonContainer,
      children: [(0, a.jsx)(l.Button, {
        className: s.openDiscordButton,
        onClick: () => (0, i.default)("application_sub_mweb_success_modal"),
        children: r.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_OPEN_DISCORD_BUTTON
      }), (0, a.jsx)(l.Button, {
        className: s.doneButton,
        look: l.Button.Looks.BLANK,
        onClick: t,
        children: r.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_DONE_BUTTON
      })]
    })]
  })
}