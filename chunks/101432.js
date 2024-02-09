"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
  }
}), n("222007");
var a = n("37983"),
  l = n("884691"),
  i = n("245187"),
  s = n("10514"),
  r = n("599110"),
  u = n("719923"),
  o = n("635357"),
  c = n("642906"),
  d = n("628738"),
  f = n("49111");

function I(e) {
  let {
    initialStep: t,
    initialPlanId: n,
    guildId: I,
    setAnalyticsData: _,
    handleClose: S
  } = e, {
    blockedPayments: T,
    setStep: N,
    hasFetchedSubscriptions: E,
    hasFetchedSubscriptionPlans: P,
    currencyLoading: A,
    selectedSkuId: m,
    setSelectedSkuId: C,
    setSelectedPlanId: p,
    priceOptions: O,
    setSubscriptionMetadataRequest: R
  } = (0, c.usePaymentContext)(), {
    isGift: g
  } = (0, o.useGiftContext)(), [L, M] = l.useState(!E || !P || A);
  return (l.useEffect(() => {
    M(!E || !P || A)
  }, [A, P, E]), l.useEffect(() => {
    null != I && R({
      guild_id: I
    })
  }, [I, R]), l.useEffect(() => {
    p(n);
    let e = null != n ? s.default.get(n) : null;
    !L && !T && (_(t => {
      let n = null != e ? (0, u.getPrice)(e.id, !1, g, O) : void 0,
        a = {
          ...t,
          subscription_plan_id: null == e ? void 0 : e.id,
          price: null == n ? void 0 : n.amount,
          regular_price: null == e ? void 0 : e.price,
          currency: O.currency
        };
      return r.default.track(f.AnalyticEvents.PAYMENT_FLOW_STARTED, a), a
    }), null != e && (C(null == e ? void 0 : e.skuId), N(t)))
  }, [T, n, g, L, O, m, _, p, C, N, t]), L) ? (0, a.jsx)(d.default, {}) : T ? (0, a.jsx)(i.BlockedPaymentsContentModal, {
    onClose: S
  }) : null
}