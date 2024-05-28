"use strict";
s.r(t), s.d(t, {
  default: function() {
    return c
  }
}), s("627341");
var a = s("735250");
s("470079");
var l = s("120356"),
  n = s.n(l),
  i = s("278074"),
  r = s("481060"),
  d = s("409813"),
  u = s("689938"),
  o = s("888681");

function c(e) {
  let {
    step: t,
    onClose: s
  } = e, l = (0, i.match)(t).with(d.Step.REVIEW, () => u.default.Messages.COLLECTIBLES_SHOP_GIFT_MODAL_REVIEW_HEADER).with(d.Step.ADD_PAYMENT_STEPS, () => u.default.Messages.BILLING_STANDALONE_ADD_PAYMENT_TITLE).with(d.Step.GIFT_CUSTOMIZATION, () => u.default.Messages.COLLECTIBLES_SHOP_GIFT_MODAL_SELECT_HEADER).with(d.Step.AWAITING_PURCHASE_TOKEN_AUTH, () => u.default.Messages.COLLECTIBLES_GIFT_COACHMARK_HEADING).with(d.Step.CONFIRM, () => "").otherwise(() => null);
  return null == l ? null : (0, a.jsxs)(r.ModalHeader, {
    className: n()(o.headerContainerGift),
    separator: t !== d.Step.CONFIRM,
    children: [(0, a.jsx)(r.Heading, {
      variant: "heading-lg/semibold",
      children: l
    }), (0, a.jsx)(r.ModalCloseButton, {
      onClick: s,
      className: o.closeButtonGift
    })]
  })
}