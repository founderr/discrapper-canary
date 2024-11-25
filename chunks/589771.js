n.d(t, {
    Z: function () {
        return u;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    o = n(89057),
    a = n(509545),
    l = n(74538),
    c = n(987209),
    s = n(563132),
    d = n(456251);
function u(e) {
    let { initialStep: t, initialPlanId: n, guildId: u, setAnalyticsData: f, handleClose: p } = e,
        { blockedPayments: m, setStep: b, hasFetchedSubscriptions: h, hasFetchedSubscriptionPlans: g, currencyLoading: x, selectedSkuId: _, setSelectedSkuId: v, setSelectedPlanId: C, priceOptions: S, setSubscriptionMetadataRequest: j } = (0, s.usePaymentContext)(),
        { isGift: k } = (0, c.wD)(),
        [y, T] = r.useState(!h || !g || x);
    return (r.useEffect(() => {
        T(!h || !g || x);
    }, [x, g, h]),
    r.useEffect(() => {
        null != u && j({ guild_id: u });
    }, [u, j]),
    r.useEffect(() => {
        C(n);
        let e = null != n ? a.Z.get(n) : null;
        if (!y && !m)
            f((t) => {
                let n = null != e ? (0, l.aS)(e.id, !1, k, S) : void 0;
                return {
                    ...t,
                    subscription_plan_id: null == e ? void 0 : e.id,
                    price: null == n ? void 0 : n.amount,
                    regular_price: null == e ? void 0 : e.price,
                    currency: S.currency
                };
            }),
                null != e && (v(null == e ? void 0 : e.skuId), b(t));
    }, [m, n, k, y, S, _, f, C, v, b, t]),
    y)
        ? (0, i.jsx)(d.Z, {})
        : m
          ? (0, i.jsx)(o.Vq, { onClose: p })
          : null;
}
