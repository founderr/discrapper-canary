r.d(n, {
    Z: function () {
        return u;
    }
});
var i = r(47120);
var a = r(192379),
    s = r(442837),
    o = r(355467),
    l = r(853872);
function u(e) {
    let { isGift: n, activeSubscription: r } = e,
        {
            defaultPaymentSourceId: i,
            paymentSources: u,
            hasFetchedPaymentSources: c
        } = (0, s.cj)([l.Z], () => ({
            defaultPaymentSourceId: l.Z.defaultPaymentSourceId,
            paymentSources: l.Z.paymentSources,
            hasFetchedPaymentSources: l.Z.hasFetchedPaymentSources
        })),
        d = (e, n, r) => (e || (null == n ? void 0 : n.paymentSourceId) == null ? r : n.paymentSourceId),
        [f, _] = a.useState(() => d(n, r, i));
    return (
        a.useEffect(() => {
            c ? _(d(n, r, i)) : (0, o.tZ)();
        }, [c, n, r, i]),
        {
            paymentSources: u,
            hasPaymentSources: Object.keys(u).length > 0,
            paymentSourceId: f,
            setPaymentSourceId: _,
            hasFetchedPaymentSources: c,
            defaultPaymentSource: null != i ? u[i] : null
        }
    );
}
