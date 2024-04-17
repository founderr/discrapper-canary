"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
}), n("47120");
var a = n("735250"),
  r = n("470079"),
  s = n("89057"),
  l = n("509545"),
  i = n("626135"),
  u = n("74538"),
  o = n("987209"),
  d = n("598"),
  c = n("456251"),
  f = n("981631");

function _(e) {
  let {
    initialStep: t,
    initialPlanId: n,
    guildId: _,
    setAnalyticsData: P,
    handleClose: S
  } = e, {
    blockedPayments: A,
    setStep: E,
    hasFetchedSubscriptions: p,
    hasFetchedSubscriptionPlans: C,
    currencyLoading: I,
    selectedSkuId: m,
    setSelectedSkuId: T,
    setSelectedPlanId: N,
    priceOptions: O,
    setSubscriptionMetadataRequest: y
  } = (0, d.usePaymentContext)(), {
    isGift: R
  } = (0, o.useGiftContext)(), [b, g] = r.useState(!p || !C || I);
  return (r.useEffect(() => {
    g(!p || !C || I)
  }, [I, C, p]), r.useEffect(() => {
    null != _ && y({
      guild_id: _
    })
  }, [_, y]), r.useEffect(() => {
    N(n);
    let e = null != n ? l.default.get(n) : null;
    !b && !A && (P(t => {
      let n = null != e ? (0, u.getPrice)(e.id, !1, R, O) : void 0,
        a = {
          ...t,
          subscription_plan_id: null == e ? void 0 : e.id,
          price: null == n ? void 0 : n.amount,
          regular_price: null == e ? void 0 : e.price,
          currency: O.currency
        };
      return i.default.track(f.AnalyticEvents.PAYMENT_FLOW_STARTED, a), a
    }), null != e && (T(null == e ? void 0 : e.skuId), E(t)))
  }, [A, n, R, b, O, m, P, N, T, E, t]), b) ? (0, a.jsx)(c.default, {}) : A ? (0, a.jsx)(s.BlockedPaymentsContentModal, {
    onClose: S
  }) : null
}