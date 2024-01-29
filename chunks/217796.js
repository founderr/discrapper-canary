"use strict";
n.r(t), n.d(t, {
  OneTimePaymentPredicateStep: function() {
    return p
  }
}), n("222007");
var s = n("37983"),
  r = n("884691"),
  i = n("627445"),
  l = n.n(i),
  a = n("245187"),
  u = n("635357"),
  o = n("642906"),
  d = n("85336"),
  c = n("628738"),
  f = n("49111");

function p(e) {
  let {
    handleStepChange: t,
    handleClose: n
  } = e, {
    blockedPayments: i,
    hasFetchedSkus: p,
    paymentSources: E,
    hasFetchedPaymentSources: S,
    application: h,
    skusById: m,
    selectedSkuId: I
  } = (0, o.usePaymentContext)(), {
    isGift: _
  } = (0, u.useGiftContext)(), [C, T] = r.useState(!0);
  return (r.useEffect(() => {
    let e = null != h;
    p && S && e && T(!1)
  }, [p, S, h]), r.useEffect(() => {
    if (C || i) return;
    l(null != I, "Expected selectedSkuId");
    let e = m[I];
    if (_ && (null == e ? void 0 : e.productLine) === f.SKUProductLines.COLLECTIBLES) {
      t(d.Step.GIFT_CUSTOMIZATION);
      return
    }
    if (0 === Object.keys(E).length) {
      t(d.Step.ADD_PAYMENT_STEPS);
      return
    }
    t(d.Step.REVIEW)
  }, [C, i, t, E, _, m, I]), C) ? (0, s.jsx)(c.default, {}) : i ? (0, s.jsx)(a.BlockedPaymentsContentModal, {
    onClose: n
  }) : null
}