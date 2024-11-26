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
    c = t(987209),
    d = t(563132),
    s = t(456251);
function u(e) {
    let { initialStep: n, initialPlanId: t, guildId: u, setAnalyticsData: f, handleClose: p } = e,
        { blockedPayments: m, setStep: b, hasFetchedSubscriptions: _, hasFetchedSubscriptionPlans: x, currencyLoading: g, selectedSkuId: h, setSelectedSkuId: C, setSelectedPlanId: v, priceOptions: S, setSubscriptionMetadataRequest: j } = (0, d.usePaymentContext)(),
        { isGift: k } = (0, c.wD)(),
        [T, y] = r.useState(!_ || !x || g);
    return (r.useEffect(() => {
        y(!_ || !x || g);
    }, [g, x, _]),
    r.useEffect(() => {
        null != u && j({ guild_id: u });
    }, [u, j]),
    r.useEffect(() => {
        v(t);
        let e = null != t ? a.Z.get(t) : null;
        if (!T && !m)
            f((n) => {
                let t = null != e ? (0, l.aS)(e.id, !1, k, S) : void 0;
                return {
                    ...n,
                    subscription_plan_id: null == e ? void 0 : e.id,
                    price: null == t ? void 0 : t.amount,
                    regular_price: null == e ? void 0 : e.price,
                    currency: S.currency
                };
            }),
                null != e && (C(null == e ? void 0 : e.skuId), b(n));
    }, [m, t, k, T, S, h, f, v, C, b, n]),
    T)
        ? (0, i.jsx)(s.Z, {})
        : m
          ? (0, i.jsx)(o.Vq, { onClose: p })
          : null;
}
