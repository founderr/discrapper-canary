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
    paymentSources: P,
    hasFetchedPaymentSources: S,
    application: A,
    skusById: E,
    selectedSkuId: p
  } = (0, o.usePaymentContext)(), {
    isGift: C
  } = (0, u.useGiftContext)(), [I, m] = r.useState(!0);
  return (r.useEffect(() => {
    let e = null != A;
    _ && S && e && m(!1)
  }, [_, S, A]), r.useEffect(() => {
    if (I || s) return;
    l()(null != p, "Expected selectedSkuId");
    let e = E[p];
    if (C && (null == e ? void 0 : e.productLine) === f.SKUProductLines.COLLECTIBLES) {
      t(d.Step.GIFT_CUSTOMIZATION);
      return
    }
    if (0 === Object.keys(P).length) {
      t(d.Step.ADD_PAYMENT_STEPS);
      return
    }
    t(d.Step.REVIEW)
  }, [I, s, t, P, C, E, p]), I) ? (0, a.jsx)(c.default, {}) : s ? (0, a.jsx)(i.BlockedPaymentsContentModal, {
    onClose: n
  }) : null
}