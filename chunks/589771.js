"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
}), n("47120");
var a = n("735250"),
  r = n("470079"),
  s = n("89057"),
  l = n("509545"),
  u = n("74538"),
  i = n("987209"),
  o = n("598"),
  c = n("456251");

function d(e) {
  let {
    initialStep: t,
    initialPlanId: n,
    guildId: d,
    setAnalyticsData: f,
    handleClose: _
  } = e, {
    blockedPayments: I,
    setStep: E,
    hasFetchedSubscriptions: S,
    hasFetchedSubscriptionPlans: P,
    currencyLoading: N,
    selectedSkuId: A,
    setSelectedSkuId: C,
    setSelectedPlanId: m,
    priceOptions: T,
    setSubscriptionMetadataRequest: p
  } = (0, o.usePaymentContext)(), {
    isGift: O
  } = (0, i.useGiftContext)(), [R, M] = r.useState(!S || !P || N);
  return (r.useEffect(() => {
    M(!S || !P || N)
  }, [N, P, S]), r.useEffect(() => {
    null != d && p({
      guild_id: d
    })
  }, [d, p]), r.useEffect(() => {
    m(n);
    let e = null != n ? l.default.get(n) : null;
    !R && !I && (f(t => {
      let n = null != e ? (0, u.getPrice)(e.id, !1, O, T) : void 0;
      return {
        ...t,
        subscription_plan_id: null == e ? void 0 : e.id,
        price: null == n ? void 0 : n.amount,
        regular_price: null == e ? void 0 : e.price,
        currency: T.currency
      }
    }), null != e && (C(null == e ? void 0 : e.skuId), E(t)))
  }, [I, n, O, R, T, A, f, m, C, E, t]), R) ? (0, a.jsx)(c.default, {}) : I ? (0, a.jsx)(s.BlockedPaymentsContentModal, {
    onClose: _
  }) : null
}