n.d(t, {
    Z: function () {
        return l;
    }
});
var r = n(47120);
var i = n(442837),
    a = n(176919),
    o = n(975060),
    s = n(505649);
function l() {
    let e = (0, i.e7)([o.Z], () => o.Z.error),
        [t, n] = (0, i.Wu)([s.Z], () => [s.Z.error, s.Z.isAwaitingAuthentication]);
    return {
        paymentError: null != t ? t : e,
        paymentAuthenticationState: n ? a.wr.PENDING : null != t ? a.wr.ERROR : a.wr.NONE
    };
}
