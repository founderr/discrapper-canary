"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
  }
}), n("222007");
var r = n("37983"),
  i = n("884691"),
  s = n("245187"),
  l = n("10514"),
  u = n("599110"),
  a = n("719923"),
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
    handleClose: E
  } = e, {
    blockedPayments: S,
    setStep: T,
    hasFetchedSubscriptions: N,
    hasFetchedSubscriptionPlans: p,
    currencyLoading: C,
    selectedSkuId: m,
    setSelectedSkuId: P,
    setSelectedPlanId: h,
    priceOptions: R,
    setSubscriptionMetadataRequest: L
  } = (0, c.usePaymentContext)(), {
    isGift: M
  } = (0, o.useGiftContext)(), [v, A] = i.useState(!N || !p || C);
  return (i.useEffect(() => {
    A(!N || !p || C)
  }, [C, p, N]), i.useEffect(() => {
    null != I && L({
      guild_id: I
    })
  }, [I, L]), i.useEffect(() => {
    h(n);
    let e = null != n ? l.default.get(n) : null;
    !v && !S && (_(t => {
      let n = null != e ? (0, a.getPrice)(e.id, !1, M, R) : void 0,
        r = {
          ...t,
          subscription_plan_id: null == e ? void 0 : e.id,
          price: null == n ? void 0 : n.amount,
          regular_price: null == e ? void 0 : e.price,
          currency: R.currency
        };
      return u.default.track(f.AnalyticEvents.PAYMENT_FLOW_STARTED, r), r
    }), null != e && (P(null == e ? void 0 : e.skuId), T(t)))
  }, [S, n, M, v, R, m, _, h, P, T, t]), v) ? (0, r.jsx)(d.default, {}) : S ? (0, r.jsx)(s.BlockedPaymentsContentModal, {
    onClose: E
  }) : null
}