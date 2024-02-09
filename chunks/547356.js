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
  s = n("782340"),
  r = n("22019");
let u = e => {
  let {
    onConfirm: t,
    onCancel: n,
    title: u,
    subtitle: o,
    confirmCta: c,
    showOpenDiscord: d = !0
  } = e;
  return (0, a.jsxs)("div", {
    className: r.confirmationContainer,
    children: [(0, a.jsx)(l.Heading, {
      className: r.confirmationHeader,
      variant: "heading-lg/extrabold",
      children: u
    }), null != o ? (0, a.jsx)(l.Text, {
      className: r.confirmationSubtitle,
      variant: "text-sm/normal",
      color: "header-secondary",
      children: o
    }) : null, (0, a.jsxs)("div", {
      className: r.buttonContainer,
      children: [d && (0, a.jsx)(l.Button, {
        fullWidth: !0,
        onClick: () => (0, i.default)("application_sub_mweb_success_modal"),
        children: s.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_OPEN_DISCORD_BUTTON
      }), (0, a.jsx)(l.Button, {
        fullWidth: !0,
        color: l.Button.Colors.PRIMARY,
        onClick: t,
        children: c
      }), null != n && (0, a.jsx)(l.Button, {
        fullWidth: !0,
        color: l.Button.Colors.PRIMARY,
        look: l.Button.Looks.LINK,
        onClick: n,
        children: s.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_CANCEL_BUTTON
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
    children: [(0, a.jsx)(l.Heading, {
      className: r.confirmationHeader,
      variant: "heading-lg/extrabold",
      children: s.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_CONFIRMATION_TITLE.format({
        tier: n
      })
    }), (0, a.jsx)(l.Text, {
      className: r.confirmationSubtitle,
      variant: "text-sm/normal",
      color: "header-secondary",
      children: s.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_CONFIRMATION_SUBTITLE.format({
        timestamp: null == u ? void 0 : u.currentPeriodEnd
      })
    }), (0, a.jsxs)("div", {
      className: r.buttonContainer,
      children: [(0, a.jsx)(l.Button, {
        className: r.openDiscordButton,
        onClick: () => (0, i.default)("application_sub_mweb_success_modal"),
        children: s.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_OPEN_DISCORD_BUTTON
      }), (0, a.jsx)(l.Button, {
        className: r.doneButton,
        look: l.Button.Looks.BLANK,
        onClick: t,
        children: s.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_DONE_BUTTON
      })]
    })]
  })
}