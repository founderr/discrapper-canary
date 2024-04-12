"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
}), n("47120");
var a = n("735250"),
  r = n("470079"),
  l = n("89057"),
  s = n("509545"),
  i = n("626135"),
  u = n("74538"),
  o = n("987209"),
  d = n("598"),
  c = n("456251"),
  I = n("981631");

function _(e) {
  let {
    initialStep: t,
    initialPlanId: n,
    guildId: _,
    setAnalyticsData: f,
    handleClose: S
  } = e, {
    blockedPayments: E,
    setStep: T,
    hasFetchedSubscriptions: P,
    hasFetchedSubscriptionPlans: N,
    currencyLoading: m,
    selectedSkuId: C,
    setSelectedSkuId: A,
    setSelectedPlanId: p,
    priceOptions: O,
    setSubscriptionMetadataRequest: R
  } = (0, d.usePaymentContext)(), {
    isGift: M
  } = (0, o.useGiftContext)(), [L, h] = r.useState(!P || !N || m);
  return (r.useEffect(() => {
    h(!P || !N || m)
  }, [m, N, P]), r.useEffect(() => {
    null != _ && R({
      guild_id: _
    })
  }, [_, R]), r.useEffect(() => {
    p(n);
    let e = null != n ? s.default.get(n) : null;
    !L && !E && (f(t => {
      let n = null != e ? (0, u.getPrice)(e.id, !1, M, O) : void 0,
        a = {
          ...t,
          subscription_plan_id: null == e ? void 0 : e.id,
          price: null == n ? void 0 : n.amount,
          regular_price: null == e ? void 0 : e.price,
          currency: O.currency
        };
      return i.default.track(I.AnalyticEvents.PAYMENT_FLOW_STARTED, a), a
    }), null != e && (A(null == e ? void 0 : e.skuId), T(t)))
  }, [E, n, M, L, O, C, f, p, A, T, t]), L) ? (0, a.jsx)(c.default, {}) : E ? (0, a.jsx)(l.BlockedPaymentsContentModal, {
    onClose: S
  }) : null
}