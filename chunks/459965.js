n.d(t, {
    H: function () {
        return b;
    },
    w: function () {
        return s;
    }
});
var r = n(192379),
    a = n(442837),
    u = n(668781),
    l = n(509545),
    i = n(580130),
    d = n(74538),
    c = n(231338),
    h = n(388032);
function s(e, t, n) {
    r.useEffect(() => {
        null != e &&
            e.isPurchasedExternally &&
            null != e.paymentGateway &&
            !n &&
            (u.Z.show({
                title: h.intl.formatToPlainString(h.t['6mIX6u'], { paymentGatewayName: c.Vz[e.paymentGateway] }),
                body: h.intl.format(h.t.EOa8en, {
                    paymentGatewayName: c.Vz[e.paymentGateway],
                    subscriptionManagementLink: (0, d.JE)(e.paymentGateway, 'SUBSCRIPTION_MANAGEMENT')
                }),
                confirmText: h.intl.string(h.t.BddRzc)
            }),
            t());
    }, [e]);
}
let f = [];
function b(e, t) {
    let n = (0, a.e7)([l.Z], () => (null != e ? l.Z.get(e) : null)),
        u = (0, a.e7)([i.Z], () => {
            var e;
            return null != n && null !== (e = i.Z.getForSku(n.skuId)) && void 0 !== e ? e : f;
        }),
        c = r.useMemo(
            () =>
                Array.from(u).filter((e) => {
                    let { parentId: t, consumed: n } = e;
                    return null != t && !n;
                }),
            [u]
        );
    return {
        hasEntitlements: !t && null != n && null != c && c.length >= d.ZP.getIntervalMonths(n.interval, n.intervalCount),
        entitlements: c
    };
}
