"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
}), n("627341");
var a = n("735250");
n("470079");
var l = n("120356"),
  s = n.n(l),
  r = n("278074"),
  i = n("481060"),
  o = n("409813"),
  d = n("689938"),
  u = n("888681");

function c(e) {
  let {
    step: t,
    onClose: n
  } = e, l = (0, r.match)(t).with(o.Step.REVIEW, () => d.default.Messages.COLLECTIBLES_SHOP_GIFT_MODAL_REVIEW_HEADER).with(o.Step.ADD_PAYMENT_STEPS, () => d.default.Messages.BILLING_STANDALONE_ADD_PAYMENT_TITLE).with(o.Step.GIFT_CUSTOMIZATION, () => d.default.Messages.COLLECTIBLES_SHOP_GIFT_MODAL_SELECT_HEADER).with(o.Step.AWAITING_PURCHASE_TOKEN_AUTH, () => d.default.Messages.COLLECTIBLES_GIFT_COACHMARK_HEADING).with(o.Step.CONFIRM, () => "").otherwise(() => null);
  return null == l ? null : (0, a.jsxs)(i.ModalHeader, {
    className: s()(u.headerContainerGift),
    separator: t !== o.Step.CONFIRM,
    children: [(0, a.jsx)(i.Heading, {
      variant: "heading-lg/semibold",
      children: l
    }), (0, a.jsx)(i.ModalCloseButton, {
      onClick: n,
      className: u.closeButtonGift
    })]
  })
}