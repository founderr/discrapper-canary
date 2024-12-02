n.d(t, {
    Y: function () {
        return o;
    }
});
var r,
    i,
    a,
    s,
    o,
    l,
    u = n(442837),
    c = n(570140);
((r = o || (o = {}))[(r.UNKNOWN = 0)] = 'UNKNOWN'), (r[(r.PENDING = 1)] = 'PENDING'), (r[(r.DONE = 2)] = 'DONE');
let d = 0,
    f = null;
class _ extends (l = u.ZP.Store) {
    get browserCheckoutState() {
        return d;
    }
    get loadId() {
        return f;
    }
}
(s = 'BrowserCheckoutStateStore'),
    (a = 'displayName') in (i = _)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s),
    (t.Z = new _(c.Z, {
        USER_PAYMENT_BROWSER_CHECKOUT_STARTED: function (e) {
            (d = 1), (f = e.loadId);
        },
        USER_PAYMENT_BROWSER_CHECKOUT_DONE: function (e) {
            f === e.loadId && (d = 2);
        }
    }));
