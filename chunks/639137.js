"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
}), n("794252");
var s = n("37983");
n("884691");
var r = n("414456"),
  l = n.n(r),
  i = n("506838"),
  a = n("77078"),
  o = n("85336"),
  u = n("782340"),
  d = n("432883");

function c(e) {
  let {
    step: t,
    onClose: n
  } = e, r = (0, i.match)(t).with(o.Step.REVIEW, () => u.default.Messages.COLLECTIBLES_SHOP_GIFT_MODAL_REVIEW_HEADER).with(o.Step.ADD_PAYMENT_STEPS, () => u.default.Messages.BILLING_STANDALONE_ADD_PAYMENT_TITLE).with(o.Step.GIFT_CUSTOMIZATION, () => u.default.Messages.COLLECTIBLES_SHOP_GIFT_MODAL_SELECT_HEADER).with(o.Step.CONFIRM, () => "").otherwise(() => null);
  return null == r ? null : (0, s.jsxs)(a.ModalHeader, {
    className: l(d.headerContainerGift),
    separator: t !== o.Step.CONFIRM,
    children: [(0, s.jsx)(a.Heading, {
      variant: "heading-lg/semibold",
      children: r
    }), (0, s.jsx)(a.ModalCloseButton, {
      onClick: n,
      className: d.closeButtonGift
    })]
  })
}