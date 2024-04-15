"use strict";
n.r(t), n.d(t, {
  OneTimePaymentPredicateStep: function() {
    return p
  }
}), n("47120");
var r = n("735250"),
  s = n("470079"),
  a = n("512722"),
  u = n.n(a),
  l = n("89057"),
  i = n("987209"),
  c = n("598"),
  d = n("409813"),
  o = n("456251"),
  f = n("981631");

function p(e) {
  let {
    handleStepChange: t,
    handleClose: n
  } = e, {
    blockedPayments: a,
    hasFetchedSkus: p,
    paymentSources: m,
    hasFetchedPaymentSources: h,
    application: x,
    skusById: P,
    selectedSkuId: g
  } = (0, c.usePaymentContext)(), {
    isGift: C
  } = (0, i.useGiftContext)(), [E, j] = s.useState(!0);
  return (s.useEffect(() => {
    let e = null != x;
    p && h && e && j(!1)
  }, [p, h, x]), s.useEffect(() => {
    if (E || a) return;
    u()(null != g, "Expected selectedSkuId");
    let e = P[g];
    if (C && (null == e ? void 0 : e.productLine) === f.SKUProductLines.COLLECTIBLES) {
      t(d.Step.GIFT_CUSTOMIZATION);
      return
    }
    if (0 === Object.keys(m).length) {
      t(d.Step.ADD_PAYMENT_STEPS);
      return
    }
    t(d.Step.REVIEW)
  }, [E, a, t, m, C, P, g]), E) ? (0, r.jsx)(o.default, {}) : a ? (0, r.jsx)(l.BlockedPaymentsContentModal, {
    onClose: n
  }) : null
}