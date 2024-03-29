"use strict";
n.r(t), n.d(t, {
  OneTimePaymentPredicateStep: function() {
    return _
  }
}), n("47120");
var a = n("735250"),
  r = n("470079"),
  s = n("512722"),
  l = n.n(s),
  i = n("89057"),
  u = n("987209"),
  o = n("598"),
  d = n("409813"),
  c = n("456251"),
  f = n("981631");

function _(e) {
  let {
    handleStepChange: t,
    handleClose: n
  } = e, {
    blockedPayments: s,
    hasFetchedSkus: _,
    paymentSources: I,
    hasFetchedPaymentSources: E,
    application: S,
    skusById: P,
    selectedSkuId: A
  } = (0, o.usePaymentContext)(), {
    isGift: C
  } = (0, u.useGiftContext)(), [N, T] = r.useState(!0);
  return (r.useEffect(() => {
    let e = null != S;
    _ && E && e && T(!1)
  }, [_, E, S]), r.useEffect(() => {
    if (N || s) return;
    l()(null != A, "Expected selectedSkuId");
    let e = P[A];
    if (C && (null == e ? void 0 : e.productLine) === f.SKUProductLines.COLLECTIBLES) {
      t(d.Step.GIFT_CUSTOMIZATION);
      return
    }
    if (0 === Object.keys(I).length) {
      t(d.Step.ADD_PAYMENT_STEPS);
      return
    }
    t(d.Step.REVIEW)
  }, [N, s, t, I, C, P, A]), N) ? (0, a.jsx)(c.default, {}) : s ? (0, a.jsx)(i.BlockedPaymentsContentModal, {
    onClose: n
  }) : null
}