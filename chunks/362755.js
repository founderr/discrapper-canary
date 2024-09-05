n.d(t, {
    Y: function () {
        return o;
    }
});
var i,
    r,
    u,
    l,
    o,
    E,
    a = n(442837),
    _ = n(570140);
((i = o || (o = {}))[(i.UNKNOWN = 0)] = 'UNKNOWN'), (i[(i.PENDING = 1)] = 'PENDING'), (i[(i.DONE = 2)] = 'DONE');
let S = 0,
    s = null;
class A extends (E = a.ZP.Store) {
    get browserCheckoutState() {
        return S;
    }
    get loadId() {
        return s;
    }
}
(l = 'BrowserCheckoutStateStore'),
    (u = 'displayName') in (r = A)
        ? Object.defineProperty(r, u, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[u] = l),
    (t.Z = new A(_.Z, {
        USER_PAYMENT_BROWSER_CHECKOUT_STARTED: function (e) {
            (S = 1), (s = e.loadId);
        },
        USER_PAYMENT_BROWSER_CHECKOUT_DONE: function (e) {
            s === e.loadId && (S = 2);
        }
    }));
