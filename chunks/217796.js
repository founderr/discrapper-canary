"use strict";
n.r(t), n.d(t, {
  OneTimePaymentPredicateStep: function() {
    return p
  }
}), n("222007");
var r = n("37983"),
  s = n("884691"),
  u = n("627445"),
  o = n.n(u),
  l = n("245187"),
  i = n("635357"),
  a = n("642906"),
  c = n("85336"),
  d = n("628738"),
  f = n("49111");

function p(e) {
  let {
    handleStepChange: t,
    handleClose: n
  } = e, {
    blockedPayments: u,
    hasFetchedSkus: p,
    paymentSources: E,
    hasFetchedPaymentSources: _,
    application: I,
    skusById: h,
    selectedSkuId: R
  } = (0, a.usePaymentContext)(), {
    isGift: v
  } = (0, i.useGiftContext)(), [S, x] = s.useState(!0);
  return (s.useEffect(() => {
    let e = null != I;
    p && _ && e && x(!1)
  }, [p, _, I]), s.useEffect(() => {
    if (S || u) return;
    o(null != R, "Expected selectedSkuId");
    let e = h[R];
    if (v && (null == e ? void 0 : e.productLine) === f.SKUProductLines.COLLECTIBLES) {
      t(c.Step.GIFT_CUSTOMIZATION);
      return
    }
    if (0 === Object.keys(E).length) {
      t(c.Step.ADD_PAYMENT_STEPS);
      return
    }
    t(c.Step.REVIEW)
  }, [S, u, t, E, v, h, R]), S) ? (0, r.jsx)(d.default, {}) : u ? (0, r.jsx)(l.BlockedPaymentsContentModal, {
    onClose: n
  }) : null
}