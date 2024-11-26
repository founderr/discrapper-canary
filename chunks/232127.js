t.d(n, {
    U: function () {
        return u;
    }
});
var o = t(626135),
    l = t(91641),
    i = t(959784),
    r = t(987338),
    a = t(981631);
let s = new l.E([i.NR, i.ZI, i.Ob, i.uc, i.m1], r.$P.PAYMENT_FLOW_STARTED, { location: 'payment flow started' });
function u(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    o.default.track(a.rMx.PAYMENT_FLOW_STARTED, e, n), s.trigger();
}
