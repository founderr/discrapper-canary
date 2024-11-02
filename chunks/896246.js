n.d(e, {
    Z: function () {
        return S;
    }
}),
    n(47120);
var r = n(442837),
    E = n(176919),
    i = n(975060),
    u = n(505649);
function S() {
    let t = (0, r.e7)([i.Z], () => i.Z.error),
        [e, n] = (0, r.Wu)([u.Z], () => [u.Z.error, u.Z.isAwaitingAuthentication]);
    return {
        paymentError: null != e ? e : t,
        paymentAuthenticationState: n ? E.wr.PENDING : null != e ? E.wr.ERROR : E.wr.NONE
    };
}
