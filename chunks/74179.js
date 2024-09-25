n.d(t, {
    Z: function () {
        return l;
    }
});
var r = n(47120);
var i = n(470079),
    a = n(442837),
    o = n(355467),
    s = n(853872);
function l(e) {
    let { isGift: t, activeSubscription: n } = e,
        {
            defaultPaymentSourceId: r,
            paymentSources: l,
            hasFetchedPaymentSources: u
        } = (0, a.cj)([s.Z], () => ({
            defaultPaymentSourceId: s.Z.defaultPaymentSourceId,
            paymentSources: s.Z.paymentSources,
            hasFetchedPaymentSources: s.Z.hasFetchedPaymentSources
        })),
        c = (e, t, n) => (e || (null == t ? void 0 : t.paymentSourceId) == null ? n : t.paymentSourceId),
        [d, _] = i.useState(() => c(t, n, r));
    return (
        i.useEffect(() => {
            u ? _(c(t, n, r)) : (0, o.tZ)();
        }, [u, t, n, r]),
        {
            paymentSources: l,
            hasPaymentSources: Object.keys(l).length > 0,
            paymentSourceId: d,
            setPaymentSourceId: _,
            hasFetchedPaymentSources: u,
            defaultPaymentSource: null != r ? l[r] : null
        }
    );
}
