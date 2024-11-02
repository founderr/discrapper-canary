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
    s = t(598),
    d = t(456251);
function u(e) {
    let { initialStep: n, initialPlanId: t, guildId: u, setAnalyticsData: p, handleClose: f } = e,
        { blockedPayments: b, setStep: m, hasFetchedSubscriptions: h, hasFetchedSubscriptionPlans: x, currencyLoading: g, selectedSkuId: _, setSelectedSkuId: v, setSelectedPlanId: C, priceOptions: S, setSubscriptionMetadataRequest: k } = (0, s.usePaymentContext)(),
        { isGift: y } = (0, c.wD)(),
        [j, T] = r.useState(!h || !x || g);
    return (r.useEffect(() => {
        T(!h || !x || g);
    }, [g, x, h]),
    r.useEffect(() => {
        null != u && k({ guild_id: u });
    }, [u, k]),
    r.useEffect(() => {
        C(t);
        let e = null != t ? a.Z.get(t) : null;
        if (!j && !b)
            p((n) => {
                let t = null != e ? (0, l.aS)(e.id, !1, y, S) : void 0;
                return {
                    ...n,
                    subscription_plan_id: null == e ? void 0 : e.id,
                    price: null == t ? void 0 : t.amount,
                    regular_price: null == e ? void 0 : e.price,
                    currency: S.currency
                };
            }),
                null != e && (v(null == e ? void 0 : e.skuId), m(n));
    }, [b, t, y, j, S, _, p, C, v, m, n]),
    j)
        ? (0, i.jsx)(d.Z, {})
        : b
          ? (0, i.jsx)(o.Vq, { onClose: f })
          : null;
}
