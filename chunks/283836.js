i.d(n, {
    Z: function () {
        return c;
    },
    q: function () {
        return u;
    }
}),
    i(47120);
var l = i(470079),
    t = i(442837),
    r = i(241159),
    s = i(496929),
    a = i(558381),
    o = i(270144),
    d = i(238);
function u(e, n) {
    l.useEffect(() => {
        c(e);
    }, [e]);
    let { subscriptionGroupListing: i } = (0, o.F5)(e, n),
        r = null == i ? void 0 : i.subscription_listings,
        s = (0, t.Wu)(
            [d.Z],
            () => {
                var n;
                let { subscriptions: i } = d.Z.getStoreLayout(e),
                    l = new Set(i.map((e) => e.id));
                return null !== (n = null == r ? void 0 : r.filter((e) => l.has(e.id))) && void 0 !== n ? n : [];
            },
            [e, r]
        ),
        a = (0, t.Wu)([d.Z], () => d.Z.getStoreLayout(e).otps, [e]);
    return l.useMemo(
        () => ({
            subs: s,
            otps: a,
            subscriptionGroupListing: null != i ? i : void 0
        }),
        [s, a, i]
    );
}
function c(e) {
    (0, r.k)(e), (0, a.oJ)(e), (0, s.yD)(e, !1);
}
