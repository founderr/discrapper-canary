var a,
    r,
    l,
    s,
    i = n(442837),
    o = n(570140);
let c = null,
    u = null;
class d extends (s = i.ZP.Store) {
    get client() {
        return c;
    }
    get cashAppPayComponent() {
        return u;
    }
}
(l = 'AdyenStore'),
    (r = 'displayName') in (a = d)
        ? Object.defineProperty(a, r, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (a[r] = l);
let m = new d(o.Z, {
    ADYEN_CREATE_CLIENT_SUCCESS: function (e) {
        let { client: t } = e;
        c = t;
    },
    ADYEN_TEARDOWN_CLIENT: function () {
        c = null;
    },
    ADYEN_CREATE_CASH_APP_PAY_COMPONENT_SUCCESS: function (e) {
        let { component: t } = e;
        u = t;
    }
});
t.Z = m;
