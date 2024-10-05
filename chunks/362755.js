n.d(t, {
    Y: function () {
        return S;
    }
});
var E,
    r,
    u,
    i,
    S,
    _,
    o = n(442837),
    A = n(570140);
((E = S || (S = {}))[(E.UNKNOWN = 0)] = 'UNKNOWN'), (E[(E.PENDING = 1)] = 'PENDING'), (E[(E.DONE = 2)] = 'DONE');
let l = 0,
    a = null;
class T extends (_ = o.ZP.Store) {
    get browserCheckoutState() {
        return l;
    }
    get loadId() {
        return a;
    }
}
(i = 'BrowserCheckoutStateStore'),
    (u = 'displayName') in (r = T)
        ? Object.defineProperty(r, u, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[u] = i),
    (t.Z = new T(A.Z, {
        USER_PAYMENT_BROWSER_CHECKOUT_STARTED: function (e) {
            (l = 1), (a = e.loadId);
        },
        USER_PAYMENT_BROWSER_CHECKOUT_DONE: function (e) {
            a === e.loadId && (l = 2);
        }
    }));
