"use strict";
n.r(t), n.d(t, {
  BenefitsConfirmationLite: function() {
    return i
  },
  PurchaseConfirmationLite: function() {
    return o
  }
});
var a = n("735250");
n("470079");
var r = n("481060"),
  s = n("17894"),
  l = n("689938"),
  u = n("149688");
let i = e => {
  let {
    onConfirm: t,
    onCancel: n,
    title: i,
    subtitle: o,
    confirmCta: c,
    showOpenDiscord: d = !0
  } = e;
  return (0, a.jsxs)("div", {
    className: u.confirmationContainer,
    children: [(0, a.jsx)(r.Heading, {
      className: u.confirmationHeader,
      variant: "heading-lg/extrabold",
      children: i
    }), null != o ? (0, a.jsx)(r.Text, {
      className: u.confirmationSubtitle,
      variant: "text-sm/normal",
      color: "header-secondary",
      children: o
    }) : null, (0, a.jsxs)("div", {
      className: u.buttonContainer,
      children: [d && (0, a.jsx)(r.Button, {
        fullWidth: !0,
        onClick: () => (0, s.default)("application_sub_mweb_success_modal"),
        children: l.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_OPEN_DISCORD_BUTTON
      }), (0, a.jsx)(r.Button, {
        fullWidth: !0,
        color: r.Button.Colors.PRIMARY,
        onClick: t,
        children: c
      }), null != n && (0, a.jsx)(r.Button, {
        fullWidth: !0,
        color: r.Button.Colors.PRIMARY,
        look: r.Button.Looks.LINK,
        onClick: n,
        children: l.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_CANCEL_BUTTON
      })]
    })]
  })
};

function o(e) {
  let {
    onConfirm: t,
    tierName: n,
    subscription: i
  } = e;
  return (0, a.jsxs)("div", {
    className: u.confirmationContainer,
    children: [(0, a.jsx)(r.Heading, {
      className: u.confirmationHeader,
      variant: "heading-lg/extrabold",
      children: l.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_CONFIRMATION_TITLE.format({
        tier: n
      })
    }), (0, a.jsx)(r.Text, {
      className: u.confirmationSubtitle,
      variant: "text-sm/normal",
      color: "header-secondary",
      children: l.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_CONFIRMATION_SUBTITLE.format({
        timestamp: null == i ? void 0 : i.currentPeriodEnd
      })
    }), (0, a.jsxs)("div", {
      className: u.buttonContainer,
      children: [(0, a.jsx)(r.Button, {
        className: u.__invalid_openDiscordButton,
        onClick: () => (0, s.default)("application_sub_mweb_success_modal"),
        children: l.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_OPEN_DISCORD_BUTTON
      }), (0, a.jsx)(r.Button, {
        className: u.__invalid_doneButton,
        look: r.Button.Looks.BLANK,
        onClick: t,
        children: l.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_DONE_BUTTON
      })]
    })]
  })
}