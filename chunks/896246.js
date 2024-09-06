n.d(t, {
    Z: function () {
        return S;
    }
}),
    n(47120);
var E = n(442837),
    r = n(176919),
    i = n(975060),
    u = n(505649);
function S() {
    let e = (0, E.e7)([i.Z], () => i.Z.error),
        [t, n] = (0, E.Wu)([u.Z], () => [u.Z.error, u.Z.isAwaitingAuthentication]);
    return {
        paymentError: null != t ? t : e,
        paymentAuthenticationState: n ? r.wr.PENDING : null != t ? r.wr.ERROR : r.wr.NONE
    };
}
