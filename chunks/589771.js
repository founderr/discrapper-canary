t.d(n, {
    Z: function () {
        return d;
    }
}),
    t(47120);
var r = t(735250),
    i = t(470079),
    a = t(89057),
    s = t(509545),
    o = t(74538),
    l = t(987209),
    c = t(598),
    u = t(456251);
function d(e) {
    let { initialStep: n, initialPlanId: t, guildId: d, setAnalyticsData: I, handleClose: _ } = e,
        { blockedPayments: m, setStep: f, hasFetchedSubscriptions: p, hasFetchedSubscriptionPlans: T, currencyLoading: h, selectedSkuId: N, setSelectedSkuId: E, setSelectedPlanId: C, priceOptions: S, setSubscriptionMetadataRequest: P } = (0, c.usePaymentContext)(),
        { isGift: g } = (0, l.wD)(),
        [A, O] = i.useState(!p || !T || h);
    return (i.useEffect(() => {
        O(!p || !T || h);
    }, [h, T, p]),
    i.useEffect(() => {
        null != d && P({ guild_id: d });
    }, [d, P]),
    i.useEffect(() => {
        C(t);
        let e = null != t ? s.Z.get(t) : null;
        if (!A && !m)
            I((n) => {
                let t = null != e ? (0, o.aS)(e.id, !1, g, S) : void 0;
                return {
                    ...n,
                    subscription_plan_id: null == e ? void 0 : e.id,
                    price: null == t ? void 0 : t.amount,
                    regular_price: null == e ? void 0 : e.price,
                    currency: S.currency
                };
            }),
                null != e && (E(null == e ? void 0 : e.skuId), f(n));
    }, [m, t, g, A, S, N, I, C, E, f, n]),
    A)
        ? (0, r.jsx)(u.Z, {})
        : m
          ? (0, r.jsx)(a.Vq, { onClose: _ })
          : null;
}
