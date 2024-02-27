"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
  }
}), n("222007");
var a = n("37983"),
  l = n("884691"),
  i = n("245187"),
  r = n("10514"),
  s = n("599110"),
  u = n("719923"),
  o = n("635357"),
  d = n("642906"),
  c = n("628738"),
  f = n("49111");

function I(e) {
  let {
    initialStep: t,
    initialPlanId: n,
    guildId: I,
    setAnalyticsData: _,
    handleClose: S
  } = e, {
    blockedPayments: E,
    setStep: T,
    hasFetchedSubscriptions: A,
    hasFetchedSubscriptionPlans: P,
    currencyLoading: N,
    selectedSkuId: m,
    setSelectedSkuId: C,
    setSelectedPlanId: O,
    priceOptions: p,
    setSubscriptionMetadataRequest: L
  } = (0, d.usePaymentContext)(), {
    isGift: h
  } = (0, o.useGiftContext)(), [R, M] = l.useState(!A || !P || N);
  return (l.useEffect(() => {
    M(!A || !P || N)
  }, [N, P, A]), l.useEffect(() => {
    null != I && L({
      guild_id: I
    })
  }, [I, L]), l.useEffect(() => {
    O(n);
    let e = null != n ? r.default.get(n) : null;
    !R && !E && (_(t => {
      let n = null != e ? (0, u.getPrice)(e.id, !1, h, p) : void 0,
        a = {
          ...t,
          subscription_plan_id: null == e ? void 0 : e.id,
          price: null == n ? void 0 : n.amount,
          regular_price: null == e ? void 0 : e.price,
          currency: p.currency
        };
      return s.default.track(f.AnalyticEvents.PAYMENT_FLOW_STARTED, a), a
    }), null != e && (C(null == e ? void 0 : e.skuId), T(t)))
  }, [E, n, h, R, p, m, _, O, C, T, t]), R) ? (0, a.jsx)(c.default, {}) : E ? (0, a.jsx)(i.BlockedPaymentsContentModal, {
    onClose: S
  }) : null
}