"use strict";
n.r(t), n.d(t, {
  OneTimePaymentPredicateStep: function() {
    return p
  }
}), n("222007");
var r = n("37983"),
  u = n("884691"),
  i = n("627445"),
  a = n.n(i),
  l = n("245187"),
  s = n("635357"),
  o = n("642906"),
  c = n("85336"),
  d = n("628738"),
  f = n("49111");

function p(e) {
  let {
    handleStepChange: t,
    handleClose: n
  } = e, {
    blockedPayments: i,
    hasFetchedSkus: p,
    paymentSources: P,
    hasFetchedPaymentSources: S,
    application: h,
    skusById: m,
    selectedSkuId: x
  } = (0, o.usePaymentContext)(), {
    isGift: C
  } = (0, s.useGiftContext)(), [I, E] = u.useState(!0);
  return (u.useEffect(() => {
    let e = null != h;
    p && S && e && E(!1)
  }, [p, S, h]), u.useEffect(() => {
    if (I || i) return;
    a(null != x, "Expected selectedSkuId");
    let e = m[x];
    if (C && (null == e ? void 0 : e.productLine) === f.SKUProductLines.COLLECTIBLES) {
      t(c.Step.GIFT_CUSTOMIZATION);
      return
    }
    if (0 === Object.keys(P).length) {
      t(c.Step.ADD_PAYMENT_STEPS);
      return
    }
    t(c.Step.REVIEW)
  }, [I, i, t, P, C, m, x]), I) ? (0, r.jsx)(d.default, {}) : i ? (0, r.jsx)(l.BlockedPaymentsContentModal, {
    onClose: n
  }) : null
}