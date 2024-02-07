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
    setStep: P,
    hasFetchedSubscriptions: E,
    hasFetchedSubscriptionPlans: N,
    currencyLoading: A,
    selectedSkuId: m,
    setSelectedSkuId: p,
    setSelectedPlanId: C,
    priceOptions: O,
    setSubscriptionMetadataRequest: R
  } = (0, c.usePaymentContext)(), {
    isGift: g
  } = (0, o.useGiftContext)(), [M, L] = l.useState(!E || !N || A);
  return (l.useEffect(() => {
    L(!E || !N || A)
  }, [A, N, E]), l.useEffect(() => {
    null != I && R({
      guild_id: I
    })
  }, [I, R]), l.useEffect(() => {
    C(n);
    let e = null != n ? r.default.get(n) : null;
    !M && !T && (_(t => {
      let n = null != e ? (0, u.getPrice)(e.id, !1, g, O) : void 0,
        a = {
          ...t,
          subscription_plan_id: null == e ? void 0 : e.id,
          price: null == n ? void 0 : n.amount,
          regular_price: null == e ? void 0 : e.price,
          currency: O.currency
        };
      return s.default.track(f.AnalyticEvents.PAYMENT_FLOW_STARTED, a), a
    }), null != e && (p(null == e ? void 0 : e.skuId), P(t)))
  }, [T, n, g, M, O, m, _, C, p, P, t]), M) ? (0, a.jsx)(d.default, {}) : T ? (0, a.jsx)(i.BlockedPaymentsContentModal, {
    onClose: S
  }) : null
}