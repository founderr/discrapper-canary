t.d(n, {
    Z: function () {
        return i;
    }
});
var a = t(442837),
    s = t(853872),
    r = t(78839);
function i() {
    let e = (0, a.e7)([r.ZP], () => r.ZP.getPremiumTypeSubscription());
    return (0, a.e7)([s.Z], () => {
        var n;
        return (null == e ? void 0 : e.paymentSourceId) != null ? (null === (n = s.Z.getPaymentSource(e.paymentSourceId)) || void 0 === n ? void 0 : n.country) : null;
    });
}
