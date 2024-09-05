n.d(t, {
    Z: function () {
        return o;
    }
}),
    n(47120);
var i = n(442837),
    r = n(176919),
    u = n(975060),
    l = n(505649);
function o() {
    let e = (0, i.e7)([u.Z], () => u.Z.error),
        [t, n] = (0, i.Wu)([l.Z], () => [l.Z.error, l.Z.isAwaitingAuthentication]);
    return {
        paymentError: null != t ? t : e,
        paymentAuthenticationState: n ? r.wr.PENDING : null != t ? r.wr.ERROR : r.wr.NONE
    };
}
