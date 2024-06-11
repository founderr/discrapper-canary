"use strict";
n.r(t), n.d(t, {
  OneTimePaymentPredicateStep: function() {
    return E
  }
}), n("47120");
var r = n("735250"),
  a = n("470079"),
  s = n("512722"),
  u = n.n(s),
  i = n("89057"),
  l = n("987209"),
  c = n("598"),
  o = n("409813"),
  d = n("456251"),
  f = n("981631");

function E(e) {
  let {
    handleStepChange: t,
    handleClose: n
  } = e, {
    blockedPayments: s,
    hasFetchedSkus: E,
    paymentSources: A,
    hasFetchedPaymentSources: S,
    application: C,
    skusById: P,
    selectedSkuId: _
  } = (0, c.usePaymentContext)(), {
    isGift: m
  } = (0, l.useGiftContext)(), [p, N] = a.useState(!0);
  return (a.useEffect(() => {
    let e = null != C;
    E && S && e && N(!1)
  }, [E, S, C]), a.useEffect(() => {
    if (p || s) return;
    u()(null != _, "Expected selectedSkuId");
    let e = P[_];
    if (m && (null == e ? void 0 : e.productLine) === f.SKUProductLines.COLLECTIBLES) {
      t(o.Step.GIFT_CUSTOMIZATION);
      return
    }
    if (0 === Object.keys(A).length) {
      t(o.Step.ADD_PAYMENT_STEPS);
      return
    }
    t(o.Step.REVIEW)
  }, [p, s, t, A, m, P, _]), p) ? (0, r.jsx)(d.default, {}) : s ? (0, r.jsx)(i.BlockedPaymentsContentModal, {
    onClose: n
  }) : null
}