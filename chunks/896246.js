n.d(t, {
    Z: function () {
        return S;
    }
}),
    n(47120);
var E = n(442837),
    r = n(176919),
    u = n(975060),
    i = n(505649);
function S() {
    let e = (0, E.e7)([u.Z], () => u.Z.error),
        [t, n] = (0, E.Wu)([i.Z], () => [i.Z.error, i.Z.isAwaitingAuthentication]);
    return {
        paymentError: null != t ? t : e,
        paymentAuthenticationState: n ? r.wr.PENDING : null != t ? r.wr.ERROR : r.wr.NONE
    };
}
