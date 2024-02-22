"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
}), n("794252");
var s = n("37983");
n("884691");
var i = n("414456"),
  a = n.n(i),
  r = n("506838"),
  l = n("77078"),
  o = n("85336"),
  u = n("782340"),
  d = n("95968");

function c(e) {
  let {
    step: t,
    onClose: n
  } = e, i = (0, r.match)(t).with(o.Step.REVIEW, () => u.default.Messages.COLLECTIBLES_SHOP_GIFT_MODAL_REVIEW_HEADER).with(o.Step.ADD_PAYMENT_STEPS, () => u.default.Messages.BILLING_STANDALONE_ADD_PAYMENT_TITLE).with(o.Step.GIFT_CUSTOMIZATION, () => u.default.Messages.COLLECTIBLES_SHOP_GIFT_MODAL_SELECT_HEADER).with(o.Step.CONFIRM, () => "").otherwise(() => null);
  return null == i ? null : (0, s.jsxs)(l.ModalHeader, {
    className: a(d.headerContainerGift),
    separator: t !== o.Step.CONFIRM,
    children: [(0, s.jsx)(l.Heading, {
      variant: "heading-lg/semibold",
      children: i
    }), (0, s.jsx)(l.ModalCloseButton, {
      onClick: n,
      className: d.closeButtonGift
    })]
  })
}