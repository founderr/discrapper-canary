n.d(t, {
    V: function () {
        return d;
    },
    a: function () {
        return _;
    }
});
var r = n(47120);
var i = n(442837),
    a = n(710845),
    o = n(853872),
    s = n(509545),
    l = n(78839),
    u = n(474936);
new a.Z('useSubscriptionPlansLoaded');
let c = (e) => {};
function d() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [...u.YQ];
    return (0, i.e7)([o.Z, s.Z, l.ZP], () => _(e, [o.Z, s.Z, l.ZP]), [e]);
}
function _() {
    var e;
    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [...u.YQ],
        [n, r, i] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [o.Z, s.Z, l.ZP],
        a = n.paymentSourceIds,
        d = n.defaultPaymentSourceId,
        _ = r.isLoadedForSKUs(t),
        E = null === (e = i.getPremiumTypeSubscription()) || void 0 === e ? void 0 : e.paymentSourceId;
    if (null != E && !r.hasPaymentSourceForSKUIds(E, t)) return c('subscription payment source '.concat(E, ' not loaded for ').concat(t)), !1;
    if (null != d && !r.hasPaymentSourceForSKUIds(d, t)) return c('default payment source '.concat(d, ' not loaded for ').concat(t)), !1;
    for (let e of a) if (!r.hasPaymentSourceForSKUIds(e, t)) return c('payment source '.concat(e, ' not loaded for ').concat(t)), !1;
    return _;
}
