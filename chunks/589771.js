n.d(t, {
  Z: function() {
    return d
  }
}), n(47120);
var r = n(735250),
  s = n(470079),
  a = n(89057),
  l = n(509545),
  i = n(74538),
  u = n(987209),
  o = n(598),
  c = n(456251);

function d(e) {
  let {
    initialStep: t,
    initialPlanId: n,
    guildId: d,
    setAnalyticsData: I,
    handleClose: _
  } = e, {
    blockedPayments: E,
    setStep: A,
    hasFetchedSubscriptions: N,
    hasFetchedSubscriptionPlans: C,
    currencyLoading: O,
    selectedSkuId: T,
    setSelectedSkuId: S,
    setSelectedPlanId: P,
    priceOptions: f,
    setSubscriptionMetadataRequest: h
  } = (0, o.usePaymentContext)(), {
    isGift: R
  } = (0, u.wD)(), [L, m] = s.useState(!N || !C || O);
  return (s.useEffect(() => {
    m(!N || !C || O)
  }, [O, C, N]), s.useEffect(() => {
    null != d && h({
      guild_id: d
    })
  }, [d, h]), s.useEffect(() => {
    P(n);
    let e = null != n ? l.Z.get(n) : null;
    if (!L && !E) I(t => {
      let n = null != e ? (0, i.aS)(e.id, !1, R, f) : void 0;
      return {
        ...t,
        subscription_plan_id: null == e ? void 0 : e.id,
        price: null == n ? void 0 : n.amount,
        regular_price: null == e ? void 0 : e.price,
        currency: f.currency
      }
    }), null != e && (S(null == e ? void 0 : e.skuId), A(t))
  }, [E, n, R, L, f, T, I, P, S, A, t]), L) ? (0, r.jsx)(c.Z, {}) : E ? (0, r.jsx)(a.Vq, {
    onClose: _
  }) : null
}