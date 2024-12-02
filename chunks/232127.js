t.d(n, {
    U: function () {
        return u;
    }
});
var o = t(926841),
    l = t(626135),
    i = t(91641),
    r = t(959784),
    a = t(987338),
    s = t(981631);
let c = new i.E([r.NR, r.ZI, r.Ob, r.uc, r.m1, o.b], a.$P.PAYMENT_FLOW_STARTED, { location: 'payment flow started' });
function u(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    l.default.track(s.rMx.PAYMENT_FLOW_STARTED, e, n), c.trigger();
}
