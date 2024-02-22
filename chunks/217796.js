"use strict";
n.r(t), n.d(t, {
  OneTimePaymentPredicateStep: function() {
    return E
  }
}), n("222007");
var s = n("37983"),
  i = n("884691"),
  a = n("627445"),
  r = n.n(a),
  l = n("245187"),
  o = n("635357"),
  u = n("642906"),
  d = n("85336"),
  c = n("628738"),
  f = n("49111");

function E(e) {
  let {
    handleStepChange: t,
    handleClose: n
  } = e, {
    blockedPayments: a,
    hasFetchedSkus: E,
    paymentSources: p,
    hasFetchedPaymentSources: S,
    application: _,
    skusById: m,
    selectedSkuId: I
  } = (0, u.usePaymentContext)(), {
    isGift: C
  } = (0, o.useGiftContext)(), [T, x] = i.useState(!0);
  return (i.useEffect(() => {
    let e = null != _;
    E && S && e && x(!1)
  }, [E, S, _]), i.useEffect(() => {
    if (T || a) return;
    r(null != I, "Expected selectedSkuId");
    let e = m[I];
    if (C && (null == e ? void 0 : e.productLine) === f.SKUProductLines.COLLECTIBLES) {
      t(d.Step.GIFT_CUSTOMIZATION);
      return
    }
    if (0 === Object.keys(p).length) {
      t(d.Step.ADD_PAYMENT_STEPS);
      return
    }
    t(d.Step.REVIEW)
  }, [T, a, t, p, C, m, I]), T) ? (0, s.jsx)(c.default, {}) : a ? (0, s.jsx)(l.BlockedPaymentsContentModal, {
    onClose: n
  }) : null
}