t.d(n, {
    U: function () {
        return p;
    }
});
var o = t(737143),
    l = t(926841),
    i = t(213264),
    r = t(626135),
    a = t(91641),
    s = t(959784),
    c = t(987338),
    u = t(981631);
let d = new a.E([s.NR, s.ZI, s.Ob, s.uc, s.m1, l.b, o.L4, i.u], c.$P.PAYMENT_FLOW_STARTED, { location: 'payment flow started' });
function p(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    r.default.track(u.rMx.PAYMENT_FLOW_STARTED, e, n), d.trigger();
}
