t.d(n, {
    U: function () {
        return s;
    }
});
var o = t(626135),
    r = t(91641),
    a = t(959784),
    i = t(987338),
    c = t(981631);
let l = new r.E([a.NR, a.ZI, a.Ob, a.uc, a.m1], i.$P.PAYMENT_FLOW_STARTED, { location: 'payment flow started' });
function s(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    o.default.track(c.rMx.PAYMENT_FLOW_STARTED, e, n), l.trigger();
}
