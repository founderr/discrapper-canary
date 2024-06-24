n.d(t, {
  Z: function() {
    return d
  }
}), n(47120);
var r = n(735250),
  a = n(470079),
  s = n(89057),
  l = n(509545),
  i = n(74538),
  o = n(987209),
  u = n(598),
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
    setStep: C,
    hasFetchedSubscriptions: N,
    hasFetchedSubscriptionPlans: A,
    currencyLoading: O,
    selectedSkuId: h,
    setSelectedSkuId: S,
    setSelectedPlanId: T,
    priceOptions: f,
    setSubscriptionMetadataRequest: P
  } = (0, u.usePaymentContext)(), {
    isGift: p
  } = (0, o.wD)(), [R, m] = a.useState(!N || !A || O);
  return (a.useEffect(() => {
    m(!N || !A || O)
  }, [O, A, N]), a.useEffect(() => {
    null != d && P({
      guild_id: d
    })
  }, [d, P]), a.useEffect(() => {
    T(n);
    let e = null != n ? l.Z.get(n) : null;
    if (!R && !E) I(t => {
      let n = null != e ? (0, i.aS)(e.id, !1, p, f) : void 0;
      return {
        ...t,
        subscription_plan_id: null == e ? void 0 : e.id,
        price: null == n ? void 0 : n.amount,
        regular_price: null == e ? void 0 : e.price,
        currency: f.currency
      }
    }), null != e && (S(null == e ? void 0 : e.skuId), C(t))
  }, [E, n, p, R, f, h, I, T, S, C, t]), R) ? (0, r.jsx)(c.Z, {}) : E ? (0, r.jsx)(s.Vq, {
    onClose: _
  }) : null
}