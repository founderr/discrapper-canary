r.d(n, {
    Z: function () {
        return u;
    }
});
var i = r(47120);
var a = r(442837),
    s = r(176919),
    o = r(975060),
    l = r(505649);
function u() {
    let e = (0, a.e7)([o.Z], () => o.Z.error),
        [n, r] = (0, a.Wu)([l.Z], () => [l.Z.error, l.Z.isAwaitingAuthentication]);
    return {
        paymentError: null != n ? n : e,
        paymentAuthenticationState: r ? s.wr.PENDING : null != n ? s.wr.ERROR : s.wr.NONE
    };
}
