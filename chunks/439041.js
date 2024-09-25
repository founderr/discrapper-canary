var r,
    i = n(442837),
    a = n(570140);
function o(e, t, n) {
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
let s = null,
    l = null;
function u(e) {
    let { client: t } = e;
    s = t;
}
function c() {
    s = null;
}
function d(e) {
    let { component: t } = e;
    l = t;
}
class _ extends (r = i.ZP.Store) {
    get client() {
        return s;
    }
    get cashAppPayComponent() {
        return l;
    }
}
o(_, 'displayName', 'AdyenStore');
let E = new _(a.Z, {
    ADYEN_CREATE_CLIENT_SUCCESS: u,
    ADYEN_TEARDOWN_CLIENT: c,
    ADYEN_CREATE_CASH_APP_PAY_COMPONENT_SUCCESS: d
});
t.Z = E;
