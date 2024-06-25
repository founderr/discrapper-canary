t.d(n, {
  Z: function() {
    return d
  }
}), t(47120);
var r = t(735250),
  s = t(470079),
  a = t(89057),
  l = t(509545),
  i = t(74538),
  o = t(987209),
  u = t(598),
  c = t(456251);

function d(e) {
  let {
    initialStep: n,
    initialPlanId: t,
    guildId: d,
    setAnalyticsData: I,
    handleClose: _
  } = e, {
    blockedPayments: T,
    setStep: E,
    hasFetchedSubscriptions: N,
    hasFetchedSubscriptionPlans: S,
    currencyLoading: h,
    selectedSkuId: p,
    setSelectedSkuId: C,
    setSelectedPlanId: A,
    priceOptions: m,
    setSubscriptionMetadataRequest: O
  } = (0, u.usePaymentContext)(), {
    isGift: P
  } = (0, o.wD)(), [f, g] = s.useState(!N || !S || h);
  return (s.useEffect(() => {
    g(!N || !S || h)
  }, [h, S, N]), s.useEffect(() => {
    null != d && O({
      guild_id: d
    })
  }, [d, O]), s.useEffect(() => {
    A(t);
    let e = null != t ? l.Z.get(t) : null;
    if (!f && !T) I(n => {
      let t = null != e ? (0, i.aS)(e.id, !1, P, m) : void 0;
      return {
        ...n,
        subscription_plan_id: null == e ? void 0 : e.id,
        price: null == t ? void 0 : t.amount,
        regular_price: null == e ? void 0 : e.price,
        currency: m.currency
      }
    }), null != e && (C(null == e ? void 0 : e.skuId), E(n))
  }, [T, t, P, f, m, p, I, A, C, E, n]), f) ? (0, r.jsx)(c.Z, {}) : T ? (0, r.jsx)(a.Vq, {
    onClose: _
  }) : null
}