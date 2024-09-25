t.d(n, {
    H: function () {
        return _;
    },
    w: function () {
        return d;
    }
});
var r = t(470079),
    i = t(442837),
    a = t(668781),
    s = t(509545),
    o = t(580130),
    l = t(74538),
    c = t(231338),
    u = t(689938);
function d(e, n, t) {
    r.useEffect(() => {
        null != e &&
            e.isPurchasedExternally &&
            null != e.paymentGateway &&
            !t &&
            (a.Z.show({
                title: u.Z.Messages.BILLING_EXTERNAL_HEADER.format({ paymentGatewayName: c.Vz[e.paymentGateway] }),
                body: u.Z.Messages.BILLING_EXTERNAL_MANAGE_ELSEWHERE.format({
                    paymentGatewayName: c.Vz[e.paymentGateway],
                    subscriptionManagementLink: (0, l.JE)(e.paymentGateway, 'SUBSCRIPTION_MANAGEMENT')
                }),
                confirmText: u.Z.Messages.OKAY
            }),
            n());
    }, [e]);
}
let I = [];
function _(e, n) {
    let t = (0, i.e7)([s.Z], () => (null != e ? s.Z.get(e) : null)),
        a = (0, i.e7)([o.Z], () => {
            var e;
            return null != t && null !== (e = o.Z.getForSku(t.skuId)) && void 0 !== e ? e : I;
        }),
        c = r.useMemo(
            () =>
                Array.from(a).filter((e) => {
                    let { parentId: n, consumed: t } = e;
                    return null != n && !t;
                }),
            [a]
        );
    return {
        hasEntitlements: !n && null != t && null != c && c.length >= l.ZP.getIntervalMonths(t.interval, t.intervalCount),
        entitlements: c
    };
}
