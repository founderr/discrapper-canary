n.d(t, {
    H: function () {
        return b;
    },
    w: function () {
        return c;
    }
});
var r = n(470079),
    a = n(442837),
    u = n(668781),
    l = n(509545),
    i = n(580130),
    d = n(74538),
    s = n(231338),
    h = n(689938);
function c(e, t, n) {
    r.useEffect(() => {
        null != e &&
            e.isPurchasedExternally &&
            null != e.paymentGateway &&
            !n &&
            (u.Z.show({
                title: h.Z.Messages.BILLING_EXTERNAL_HEADER.format({ paymentGatewayName: s.Vz[e.paymentGateway] }),
                body: h.Z.Messages.BILLING_EXTERNAL_MANAGE_ELSEWHERE.format({
                    paymentGatewayName: s.Vz[e.paymentGateway],
                    subscriptionManagementLink: (0, d.JE)(e.paymentGateway, 'SUBSCRIPTION_MANAGEMENT')
                }),
                confirmText: h.Z.Messages.OKAY
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
        s = r.useMemo(
            () =>
                Array.from(u).filter((e) => {
                    let { parentId: t, consumed: n } = e;
                    return null != t && !n;
                }),
            [u]
        );
    return {
        hasEntitlements: !t && null != n && null != s && s.length >= d.ZP.getIntervalMonths(n.interval, n.intervalCount),
        entitlements: s
    };
}
