r.d(n, {
    Y: function () {
        return i;
    }
});
var i,
    a,
    s = r(442837),
    o = r(570140);
function l(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
!(function (e) {
    (e[(e.UNKNOWN = 0)] = 'UNKNOWN'), (e[(e.PENDING = 1)] = 'PENDING'), (e[(e.DONE = 2)] = 'DONE');
})(i || (i = {}));
let u = 0,
    c = null,
    d = null,
    f = null;
function _(e) {
    (u = 1), (c = e.loadId);
}
function h(e) {
    var n, r;
    if (c === e.loadId) (d = null !== (n = e.skuId) && void 0 !== n ? n : null), (f = null !== (r = e.skuSubscriptionPlanId) && void 0 !== r ? r : null), (u = 2);
}
class p extends (a = s.ZP.Store) {
    get browserCheckoutState() {
        return u;
    }
    get loadId() {
        return c;
    }
    get skuId() {
        return d;
    }
    get planId() {
        return f;
    }
}
l(p, 'displayName', 'BrowserCheckoutStateStore'),
    (n.Z = new p(o.Z, {
        USER_PAYMENT_BROWSER_CHECKOUT_STARTED: _,
        USER_PAYMENT_BROWSER_CHECKOUT_DONE: h
    }));
