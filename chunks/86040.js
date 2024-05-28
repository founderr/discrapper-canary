"use strict";
n.r(t), n.d(t, {
  AwaitingPurchaseTokenAuthStepBody: function() {
    return u
  },
  AwaitingPurchaseTokenAuthStepFooter: function() {
    return o
  }
});
var i = n("735250");
n("470079");
var l = n("481060"),
  s = n("285952"),
  a = n("689938"),
  r = n("319749");
let u = e => {
    let {
      className: t,
      isEmailResent: n,
      resendEmail: s
    } = e;
    return (0, i.jsx)("div", {
      className: t,
      children: (0, i.jsxs)("div", {
        className: r.awaitingWrapper,
        children: [(0, i.jsx)(l.Heading, {
          variant: "heading-xl/bold",
          children: a.default.Messages.PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL_HEADER
        }), (0, i.jsxs)("p", {
          children: [(0, i.jsx)(l.Text, {
            variant: "text-md/normal",
            children: a.default.Messages.PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL
          }), (0, i.jsx)("br", {}), (0, i.jsx)(l.Text, {
            variant: "text-md/normal",
            children: a.default.Messages.PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL_INSTRUCTIONS
          }), (0, i.jsx)("br", {}), (0, i.jsxs)(l.Text, {
            variant: "text-md/normal",
            children: [a.default.Messages.PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL_RESEND_PROMPT, "\xa0", n ? a.default.Messages.PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL_RESEND_SENT : (0, i.jsx)(l.Anchor, {
              onClick: s,
              children: a.default.Messages.PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL_RESEND_ACTION
            })]
          })]
        })]
      })
    })
  },
  o = () => (0, i.jsx)("div", {
    children: (0, i.jsx)(l.ModalFooter, {
      justify: s.default.Justify.BETWEEN,
      align: s.default.Align.CENTER,
      children: (0, i.jsx)(l.Button, {
        "data-testid": "continue",
        color: l.Button.Colors.BRAND,
        disabled: !0,
        children: a.default.Messages.PAYMENT_WAITING_FOR_PURCHASE_TOKEN_AUTHORIZATION_MODAL_NEXT_BUTTON
      })
    })
  })