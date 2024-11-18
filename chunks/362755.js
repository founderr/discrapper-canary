n.d(e, {
    Y: function () {
        return o;
    }
});
var r,
    E,
    i,
    u,
    o,
    S,
    l = n(442837),
    _ = n(570140);
((r = o || (o = {}))[(r.UNKNOWN = 0)] = 'UNKNOWN'), (r[(r.PENDING = 1)] = 'PENDING'), (r[(r.DONE = 2)] = 'DONE');
let A = 0,
    a = null;
class T extends (S = l.ZP.Store) {
    get browserCheckoutState() {
        return A;
    }
    get loadId() {
        return a;
    }
}
(u = 'BrowserCheckoutStateStore'),
    (i = 'displayName') in (E = T)
        ? Object.defineProperty(E, i, {
              value: u,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (E[i] = u),
    (e.Z = new T(_.Z, {
        USER_PAYMENT_BROWSER_CHECKOUT_STARTED: function (t) {
            (A = 1), (a = t.loadId);
        },
        USER_PAYMENT_BROWSER_CHECKOUT_DONE: function (t) {
            a === t.loadId && (A = 2);
        }
    }));
