"use strict";
n.r(e), n.d(e, {
  OneTimePaymentPredicateStep: function() {
    return p
  }
}), n("222007");
var r = n("37983"),
  i = n("884691"),
  o = n("627445"),
  u = n.n(o),
  a = n("245187"),
  c = n("635357"),
  l = n("642906"),
  s = n("85336"),
  f = n("628738"),
  d = n("49111");

function p(t) {
  let {
    handleStepChange: e,
    handleClose: n
  } = t, {
    blockedPayments: o,
    hasFetchedSkus: p,
    paymentSources: E,
    hasFetchedPaymentSources: S,
    application: v,
    skusById: T,
    selectedSkuId: _
  } = (0, l.usePaymentContext)(), {
    isGift: m
  } = (0, c.useGiftContext)(), [x, P] = i.useState(!0);
  return (i.useEffect(() => {
    let t = null != v;
    p && S && t && P(!1)
  }, [p, S, v]), i.useEffect(() => {
    if (x || o) return;
    u(null != _, "Expected selectedSkuId");
    let t = T[_];
    if (m && (null == t ? void 0 : t.productLine) === d.SKUProductLines.COLLECTIBLES) {
      e(s.Step.GIFT_CUSTOMIZATION);
      return
    }
    if (0 === Object.keys(E).length) {
      e(s.Step.ADD_PAYMENT_STEPS);
      return
    }
    e(s.Step.REVIEW)
  }, [x, o, e, E, m, T, _]), x) ? (0, r.jsx)(f.default, {}) : o ? (0, r.jsx)(a.BlockedPaymentsContentModal, {
    onClose: n
  }) : null
}