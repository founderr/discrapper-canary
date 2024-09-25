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
let s = !1,
    l = !1,
    u = !1;
function c(e) {
    (l = !0), (s = !1), (u = e.isTargeted);
}
function d() {
    (l = !0), (s = !1);
}
function _() {
    s = !0;
}
function E() {
    (s = !1), (l = !1), (u = !1);
}
class f extends (r = i.ZP.Store) {
    getIsTargeted() {
        return u;
    }
    shouldFetchCheckoutRecovery() {
        return !s && !l;
    }
}
o(f, 'displayName', 'CheckoutRecoveryStore'),
    (t.Z = new f(a.Z, {
        CHECKOUT_RECOVERY_STATUS_FETCH_SUCCESS: c,
        CHECKOUT_RECOVERY_STATUS_FETCH_FAILURE: d,
        CHECKOUT_RECOVERY_STATUS_FETCH: _,
        LOGOUT: E
    }));
