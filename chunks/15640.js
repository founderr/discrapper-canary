r.d(n, {
    V: function () {
        return f;
    },
    a: function () {
        return _;
    }
});
var i = r(47120);
var a = r(442837),
    s = r(710845),
    o = r(853872),
    l = r(509545),
    u = r(78839),
    c = r(474936);
new s.Z('useSubscriptionPlansLoaded');
let d = (e) => {};
function f() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [...c.YQ];
    return (0, a.e7)([o.Z, l.Z, u.ZP], () => _(e, [o.Z, l.Z, u.ZP]), [e]);
}
function _() {
    var e;
    let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [...c.YQ],
        [r, i, a] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [o.Z, l.Z, u.ZP],
        s = r.paymentSourceIds,
        f = r.defaultPaymentSourceId,
        _ = i.isLoadedForSKUs(n),
        h = null === (e = a.getPremiumTypeSubscription()) || void 0 === e ? void 0 : e.paymentSourceId;
    if (null != h && !i.hasPaymentSourceForSKUIds(h, n)) return d('subscription payment source '.concat(h, ' not loaded for ').concat(n)), !1;
    if (null != f && !i.hasPaymentSourceForSKUIds(f, n)) return d('default payment source '.concat(f, ' not loaded for ').concat(n)), !1;
    for (let e of s) if (!i.hasPaymentSourceForSKUIds(e, n)) return d('payment source '.concat(e, ' not loaded for ').concat(n)), !1;
    return _;
}
