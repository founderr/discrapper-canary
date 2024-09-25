let r, i;
var a,
    o = n(411104);
var s = n(442837),
    l = n(544891),
    u = n(570140),
    c = n(358085),
    d = n(981631);
function _(e, t, n) {
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
let E = null,
    f = null,
    h = null;
function p(e) {
    let { client: t } = e;
    E = t;
}
function m(e) {
    let { paypalClient: t } = e;
    f = t;
}
function I(e) {
    let { venmoClient: t } = e;
    h = t;
}
function T(e) {
    let { paymentSourceType: t, state: n, path: i, query: a } = e;
    if (t !== d.HeQ.PAYPAL || n !== r) return;
    let o = window.popupBridge.onComplete;
    'function' == typeof o &&
        o(null, {
            path: i,
            queryItems: a
        });
}
function g(e) {
    let { paymentSourceType: t, state: n } = e;
    t === d.HeQ.PAYPAL && (r = n);
}
function S() {
    f = null;
}
function A() {
    h = null;
}
(0, c.isDesktop)() &&
    (window.popupBridge = {
        getReturnUrlPrefix: () => {
            if (null == r) throw Error('popupBridgeState is unset');
            return (0, l.K0)() + d.ANM.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(d.gg$.BRAINTREE, r);
        },
        open: (e) => {
            (i = e), window.open(e), N.emitChange();
        }
    });
class v extends (a = s.ZP.Store) {
    getClient() {
        return E;
    }
    getPayPalClient() {
        return f;
    }
    getVenmoClient() {
        return h;
    }
    getLastURL() {
        return i;
    }
}
_(v, 'displayName', 'BraintreeStore');
let N = new v(u.Z, {
    BRAINTREE_CREATE_CLIENT_SUCCESS: p,
    BRAINTREE_CREATE_PAYPAL_CLIENT_SUCCESS: m,
    BILLING_POPUP_BRIDGE_CALLBACK: T,
    BILLING_POPUP_BRIDGE_STATE_UPDATE: g,
    BRAINTREE_TEARDOWN_PAYPAL_CLIENT: S,
    BRAINTREE_CREATE_VENMO_CLIENT_SUCCESS: I,
    BRAINTREE_TEARDOWN_VENMO_CLIENT: A
});
t.Z = N;
