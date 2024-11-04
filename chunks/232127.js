t.d(n, {
    U: function () {
        return c;
    }
});
var r = t(626135),
    o = t(91641),
    i = t(959784),
    l = t(987338),
    a = t(981631);
let s = new o.E([i.NR, i.ZI, i.Ob, i.uc, i.m1], l.$P.PAYMENT_FLOW_STARTED, { location: 'payment flow started' });
function c(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    r.default.track(a.rMx.PAYMENT_FLOW_STARTED, e, n), s.trigger();
}
