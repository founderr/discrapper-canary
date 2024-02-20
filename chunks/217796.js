"use strict";
n.r(t), n.d(t, {
  OneTimePaymentPredicateStep: function() {
    return P
  }
}), n("222007");
var u = n("37983"),
  r = n("884691"),
  a = n("627445"),
  i = n.n(a),
  l = n("245187"),
  s = n("635357"),
  o = n("642906"),
  c = n("85336"),
  d = n("628738"),
  f = n("49111");

function P(e) {
  let {
    handleStepChange: t,
    handleClose: n
  } = e, {
    blockedPayments: a,
    hasFetchedSkus: P,
    paymentSources: S,
    hasFetchedPaymentSources: p,
    application: h,
    skusById: m,
    selectedSkuId: x
  } = (0, o.usePaymentContext)(), {
    isGift: C
  } = (0, s.useGiftContext)(), [v, E] = r.useState(!0);
  return (r.useEffect(() => {
    let e = null != h;
    P && p && e && E(!1)
  }, [P, p, h]), r.useEffect(() => {
    if (v || a) return;
    i(null != x, "Expected selectedSkuId");
    let e = m[x];
    if (C && (null == e ? void 0 : e.productLine) === f.SKUProductLines.COLLECTIBLES) {
      t(c.Step.GIFT_CUSTOMIZATION);
      return
    }
    if (0 === Object.keys(S).length) {
      t(c.Step.ADD_PAYMENT_STEPS);
      return
    }
    t(c.Step.REVIEW)
  }, [v, a, t, S, C, m, x]), v) ? (0, u.jsx)(d.default, {}) : a ? (0, u.jsx)(l.BlockedPaymentsContentModal, {
    onClose: n
  }) : null
}