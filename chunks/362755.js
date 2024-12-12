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
    c = null;
function d(e) {
    (u = 1), (c = e.loadId);
}
function f(e) {
    c === e.loadId && (u = 2);
}
class _ extends (a = s.ZP.Store) {
    get browserCheckoutState() {
        return u;
    }
    get loadId() {
        return c;
    }
}
l(_, 'displayName', 'BrowserCheckoutStateStore'),
    (n.Z = new _(o.Z, {
        USER_PAYMENT_BROWSER_CHECKOUT_STARTED: d,
        USER_PAYMENT_BROWSER_CHECKOUT_DONE: f
    }));
