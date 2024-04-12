"use strict";
r.r(t), r.d(t, {
  OneTimePaymentPredicateStep: function() {
    return m
  }
}), r("47120");
var n = r("735250"),
  s = r("470079"),
  a = r("512722"),
  l = r.n(a),
  u = r("89057"),
  i = r("987209"),
  c = r("598"),
  d = r("409813"),
  o = r("456251"),
  f = r("981631");

function m(e) {
  let {
    handleStepChange: t,
    handleClose: r
  } = e, {
    blockedPayments: a,
    hasFetchedSkus: m,
    paymentSources: p,
    hasFetchedPaymentSources: h,
    application: x,
    skusById: P,
    selectedSkuId: C
  } = (0, c.usePaymentContext)(), {
    isGift: j
  } = (0, i.useGiftContext)(), [g, E] = s.useState(!0);
  return (s.useEffect(() => {
    let e = null != x;
    m && h && e && E(!1)
  }, [m, h, x]), s.useEffect(() => {
    if (g || a) return;
    l()(null != C, "Expected selectedSkuId");
    let e = P[C];
    if (j && (null == e ? void 0 : e.productLine) === f.SKUProductLines.COLLECTIBLES) {
      t(d.Step.GIFT_CUSTOMIZATION);
      return
    }
    if (0 === Object.keys(p).length) {
      t(d.Step.ADD_PAYMENT_STEPS);
      return
    }
    t(d.Step.REVIEW)
  }, [g, a, t, p, j, P, C]), g) ? (0, n.jsx)(o.default, {}) : a ? (0, n.jsx)(u.BlockedPaymentsContentModal, {
    onClose: r
  }) : null
}