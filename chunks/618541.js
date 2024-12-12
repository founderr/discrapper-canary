let i, a;
var s,
    o = r(411104);
var l = r(442837),
    u = r(544891),
    c = r(570140),
    d = r(358085),
    f = r(981631);
function _(e, n, r) {
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
let h = null,
    p = null,
    m = null;
function g(e) {
    let { client: n } = e;
    h = n;
}
function E(e) {
    let { paypalClient: n } = e;
    p = n;
}
function v(e) {
    let { venmoClient: n } = e;
    m = n;
}
function I(e) {
    let { paymentSourceType: n, state: r, path: a, query: s } = e;
    if (n !== f.HeQ.PAYPAL || r !== i) return;
    let o = window.popupBridge.onComplete;
    'function' == typeof o &&
        o(null, {
            path: a,
            queryItems: s
        });
}
function T(e) {
    let { paymentSourceType: n, state: r } = e;
    n === f.HeQ.PAYPAL && (i = r);
}
function b() {
    p = null;
}
function y() {
    m = null;
}
(0, d.isDesktop)() &&
    (window.popupBridge = {
        getReturnUrlPrefix: () => {
            if (null == i) throw Error('popupBridgeState is unset');
            return (0, u.K0)() + f.ANM.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(f.gg$.BRAINTREE, i);
        },
        open: (e) => {
            (a = e), window.open(e), A.emitChange();
        }
    });
class S extends (s = l.ZP.Store) {
    getClient() {
        return h;
    }
    getPayPalClient() {
        return p;
    }
    getVenmoClient() {
        return m;
    }
    getLastURL() {
        return a;
    }
}
_(S, 'displayName', 'BraintreeStore');
let A = new S(c.Z, {
    BRAINTREE_CREATE_CLIENT_SUCCESS: g,
    BRAINTREE_CREATE_PAYPAL_CLIENT_SUCCESS: E,
    BILLING_POPUP_BRIDGE_CALLBACK: I,
    BILLING_POPUP_BRIDGE_STATE_UPDATE: T,
    BRAINTREE_TEARDOWN_PAYPAL_CLIENT: b,
    BRAINTREE_CREATE_VENMO_CLIENT_SUCCESS: v,
    BRAINTREE_TEARDOWN_VENMO_CLIENT: y
});
n.Z = A;
