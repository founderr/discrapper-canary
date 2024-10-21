t.d(n, {
    Z: function () {
        return u;
    }
}),
    t(47120);
var i = t(200651),
    r = t(192379),
    o = t(89057),
    a = t(509545),
    l = t(74538),
    s = t(987209),
    c = t(598),
    d = t(456251);
function u(e) {
    let { initialStep: n, initialPlanId: t, guildId: u, setAnalyticsData: _, handleClose: p } = e,
        { blockedPayments: f, setStep: I, hasFetchedSubscriptions: C, hasFetchedSubscriptionPlans: b, currencyLoading: m, selectedSkuId: S, setSelectedSkuId: h, setSelectedPlanId: T, priceOptions: g, setSubscriptionMetadataRequest: x } = (0, c.usePaymentContext)(),
        { isGift: O } = (0, s.wD)(),
        [N, P] = r.useState(!C || !b || m);
    return (r.useEffect(() => {
        P(!C || !b || m);
    }, [m, b, C]),
    r.useEffect(() => {
        null != u && x({ guild_id: u });
    }, [u, x]),
    r.useEffect(() => {
        T(t);
        let e = null != t ? a.Z.get(t) : null;
        if (!N && !f)
            _((n) => {
                let t = null != e ? (0, l.aS)(e.id, !1, O, g) : void 0;
                return {
                    ...n,
                    subscription_plan_id: null == e ? void 0 : e.id,
                    price: null == t ? void 0 : t.amount,
                    regular_price: null == e ? void 0 : e.price,
                    currency: g.currency
                };
            }),
                null != e && (h(null == e ? void 0 : e.skuId), I(n));
    }, [f, t, O, N, g, S, _, T, h, I, n]),
    N)
        ? (0, i.jsx)(d.Z, {})
        : f
          ? (0, i.jsx)(o.Vq, { onClose: p })
          : null;
}
