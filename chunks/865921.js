"use strict";
r.r(t), r.d(t, {
  OneTimePaymentPredicateStep: function() {
    return m
  }
}), r("47120");
var n = r("735250"),
  a = r("470079"),
  s = r("512722"),
  l = r.n(s),
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
    blockedPayments: s,
    hasFetchedSkus: m,
    paymentSources: p,
    hasFetchedPaymentSources: N,
    application: E,
    skusById: g,
    selectedSkuId: h
  } = (0, c.usePaymentContext)(), {
    isGift: P
  } = (0, i.useGiftContext)(), [x, C] = a.useState(!0);
  return (a.useEffect(() => {
    let e = null != E;
    m && N && e && C(!1)
  }, [m, N, E]), a.useEffect(() => {
    if (x || s) return;
    l()(null != h, "Expected selectedSkuId");
    let e = g[h];
    if (P && (null == e ? void 0 : e.productLine) === f.SKUProductLines.COLLECTIBLES) {
      t(d.Step.GIFT_CUSTOMIZATION);
      return
    }
    if (0 === Object.keys(p).length) {
      t(d.Step.ADD_PAYMENT_STEPS);
      return
    }
    t(d.Step.REVIEW)
  }, [x, s, t, p, P, g, h]), x) ? (0, n.jsx)(o.default, {}) : s ? (0, n.jsx)(u.BlockedPaymentsContentModal, {
    onClose: r
  }) : null
}