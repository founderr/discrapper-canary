n.d(e, {
    Y: function () {
        return S;
    }
});
var r,
    E,
    i,
    u,
    S,
    o,
    _ = n(442837),
    l = n(570140);
((r = S || (S = {}))[(r.UNKNOWN = 0)] = 'UNKNOWN'), (r[(r.PENDING = 1)] = 'PENDING'), (r[(r.DONE = 2)] = 'DONE');
let A = 0,
    a = null;
class T extends (o = _.ZP.Store) {
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
    (e.Z = new T(l.Z, {
        USER_PAYMENT_BROWSER_CHECKOUT_STARTED: function (t) {
            (A = 1), (a = t.loadId);
        },
        USER_PAYMENT_BROWSER_CHECKOUT_DONE: function (t) {
            a === t.loadId && (A = 2);
        }
    }));
