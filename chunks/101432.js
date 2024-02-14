"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
}), n("222007");
var a = n("37983"),
  s = n("884691"),
  l = n("245187"),
  i = n("10514"),
  r = n("599110"),
  u = n("719923"),
  o = n("635357"),
  d = n("642906"),
  c = n("628738"),
  I = n("49111");

function _(e) {
  let {
    initialStep: t,
    initialPlanId: n,
    guildId: _,
    setAnalyticsData: f,
    handleClose: T
  } = e, {
    blockedPayments: S,
    setStep: N,
    hasFetchedSubscriptions: E,
    hasFetchedSubscriptionPlans: P,
    currencyLoading: A,
    selectedSkuId: C,
    setSelectedSkuId: m,
    setSelectedPlanId: O,
    priceOptions: p,
    setSubscriptionMetadataRequest: R
  } = (0, d.usePaymentContext)(), {
    isGift: L
  } = (0, o.useGiftContext)(), [M, g] = s.useState(!E || !P || A);
  return (s.useEffect(() => {
    g(!E || !P || A)
  }, [A, P, E]), s.useEffect(() => {
    null != _ && R({
      guild_id: _
    })
  }, [_, R]), s.useEffect(() => {
    O(n);
    let e = null != n ? i.default.get(n) : null;
    !M && !S && (f(t => {
      let n = null != e ? (0, u.getPrice)(e.id, !1, L, p) : void 0,
        a = {
          ...t,
          subscription_plan_id: null == e ? void 0 : e.id,
          price: null == n ? void 0 : n.amount,
          regular_price: null == e ? void 0 : e.price,
          currency: p.currency
        };
      return r.default.track(I.AnalyticEvents.PAYMENT_FLOW_STARTED, a), a
    }), null != e && (m(null == e ? void 0 : e.skuId), N(t)))
  }, [S, n, L, M, p, C, f, O, m, N, t]), M) ? (0, a.jsx)(c.default, {}) : S ? (0, a.jsx)(l.BlockedPaymentsContentModal, {
    onClose: T
  }) : null
}