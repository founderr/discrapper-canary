t.d(n, {
    Z: function () {
        return l;
    }
});
var r = t(442837),
    i = t(853872),
    a = t(78839);
function l() {
    let e = (0, r.e7)([a.ZP], () => a.ZP.getPremiumTypeSubscription());
    return (0, r.e7)([i.Z], () => {
        var n;
        return (null == e ? void 0 : e.paymentSourceId) != null ? (null === (n = i.Z.getPaymentSource(e.paymentSourceId)) || void 0 === n ? void 0 : n.country) : null;
    });
}
