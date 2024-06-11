"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
}), n("47120");
var a = n("735250"),
  r = n("470079"),
  s = n("89057"),
  l = n("509545"),
  i = n("74538"),
  u = n("987209"),
  o = n("598"),
  d = n("456251");

function c(e) {
  let {
    initialStep: t,
    initialPlanId: n,
    guildId: c,
    setAnalyticsData: f,
    handleClose: _
  } = e, {
    blockedPayments: I,
    setStep: E,
    hasFetchedSubscriptions: S,
    hasFetchedSubscriptionPlans: P,
    currencyLoading: A,
    selectedSkuId: C,
    setSelectedSkuId: N,
    setSelectedPlanId: T,
    priceOptions: O,
    setSubscriptionMetadataRequest: m
  } = (0, o.usePaymentContext)(), {
    isGift: p
  } = (0, u.useGiftContext)(), [R, L] = r.useState(!S || !P || A);
  return (r.useEffect(() => {
    L(!S || !P || A)
  }, [A, P, S]), r.useEffect(() => {
    null != c && m({
      guild_id: c
    })
  }, [c, m]), r.useEffect(() => {
    T(n);
    let e = null != n ? l.default.get(n) : null;
    !R && !I && (f(t => {
      let n = null != e ? (0, i.getPrice)(e.id, !1, p, O) : void 0;
      return {
        ...t,
        subscription_plan_id: null == e ? void 0 : e.id,
        price: null == n ? void 0 : n.amount,
        regular_price: null == e ? void 0 : e.price,
        currency: O.currency
      }
    }), null != e && (N(null == e ? void 0 : e.skuId), E(t)))
  }, [I, n, p, R, O, C, f, T, N, E, t]), R) ? (0, a.jsx)(d.default, {}) : I ? (0, a.jsx)(s.BlockedPaymentsContentModal, {
    onClose: _
  }) : null
}