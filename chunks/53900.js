t.d(n, {
    Z: function () {
        return o;
    }
});
var r = t(442837),
    a = t(853872),
    i = t(78839);
function o() {
    let e = (0, r.e7)([i.ZP], () => i.ZP.getPremiumTypeSubscription());
    return (0, r.e7)([a.Z], () => {
        var n;
        return (null == e ? void 0 : e.paymentSourceId) != null ? (null === (n = a.Z.getPaymentSource(e.paymentSourceId)) || void 0 === n ? void 0 : n.country) : null;
    });
}
