t.d(n, {
    U: function () {
        return d;
    }
});
var o = t(737143),
    l = t(926841),
    i = t(626135),
    r = t(91641),
    a = t(959784),
    s = t(987338),
    c = t(981631);
let u = new r.E([a.NR, a.ZI, a.Ob, a.uc, a.m1, l.b, o.L4], s.$P.PAYMENT_FLOW_STARTED, { location: 'payment flow started' });
function d(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    i.default.track(c.rMx.PAYMENT_FLOW_STARTED, e, n), u.trigger();
}
