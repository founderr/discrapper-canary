t.d(n, {
    U: function () {
        return c;
    }
});
var o = t(626135),
    r = t(91641),
    l = t(959784),
    i = t(987338),
    a = t(981631);
let s = new r.E([l.NR, l.ZI, l.Ob, l.uc, l.m1], i.$P.PAYMENT_FLOW_STARTED, { location: 'payment flow started' });
function c(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    o.default.track(a.rMx.PAYMENT_FLOW_STARTED, e, n), s.trigger();
}
