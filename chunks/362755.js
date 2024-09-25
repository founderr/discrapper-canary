n.d(t, {
    Y: function () {
        return r;
    }
});
var r,
    i,
    a = n(442837),
    o = n(570140);
function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
!(function (e) {
    (e[(e.UNKNOWN = 0)] = 'UNKNOWN'), (e[(e.PENDING = 1)] = 'PENDING'), (e[(e.DONE = 2)] = 'DONE');
})(r || (r = {}));
let l = 0,
    u = null;
function c(e) {
    (l = 1), (u = e.loadId);
}
function d(e) {
    u === e.loadId && (l = 2);
}
class _ extends (i = a.ZP.Store) {
    get browserCheckoutState() {
        return l;
    }
    get loadId() {
        return u;
    }
}
s(_, 'displayName', 'BrowserCheckoutStateStore'),
    (t.Z = new _(o.Z, {
        USER_PAYMENT_BROWSER_CHECKOUT_STARTED: c,
        USER_PAYMENT_BROWSER_CHECKOUT_DONE: d
    }));
