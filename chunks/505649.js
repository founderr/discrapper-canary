var r,
    i = n(411104);
var a = n(442837),
    o = n(570140),
    s = n(366939),
    l = n(16084),
    u = n(128069),
    c = n(122289),
    d = n(622999),
    _ = n(981631),
    E = n(689938);
function f(e, t, n) {
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
let h = !1,
    p = null,
    m = null;
function I() {
    (h = !1), (m = null);
}
function T(e) {
    let { error: t } = e,
        { code: n, paymentId: r } = t;
    if (n !== u.ZP.ErrorCodes.AUTHENTICATION_REQUIRED) return (h = !1), !1;
    !h && ((h = !0), (p = r), g(r));
}
async function g(e) {
    if (null == e) return;
    let { error: t } = await (0, d.oe)(e);
    if (null != t) {
        o.Z.dispatch({
            type: 'PAYMENT_AUTHENTICATION_ERROR',
            error: new u.ZP(E.Z.Messages.PAYMENT_METHOD_CONFIRMATION_ERROR)
        });
        let e = Error(t);
        (0, c.q2)(e, { extra: { authenticationError: t } });
    }
}
function S(e) {
    let { error: t } = e;
    (m = t), (h = !1);
}
function A(e) {
    let { payment: t } = e;
    if (!h || t.id !== p || ![_.PyE.COMPLETED, _.PyE.CANCELED].includes(t.status)) return !1;
    (h = !1), (m = null), (p = null), o.Z.wait(s.fw), o.Z.wait(l.pB);
}
class v extends (r = a.ZP.Store) {
    get isAwaitingAuthentication() {
        return h;
    }
    get error() {
        return m;
    }
    get awaitingPaymentId() {
        return p;
    }
}
f(v, 'displayName', 'PaymentAuthenticationStore'),
    (t.Z = new v(o.Z, {
        BILLING_SUBSCRIPTION_UPDATE_START: I,
        PAYMENT_AUTHENTICATION_CLEAR_ERROR: I,
        PREMIUM_PAYMENT_ERROR_CLEAR: I,
        PREMIUM_PAYMENT_MODAL_CLOSE: I,
        PREMIUM_PAYMENT_MODAL_OPEN: I,
        PREMIUM_PAYMENT_SUBSCRIBE_START: I,
        PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: I,
        PREMIUM_PAYMENT_UPDATE_SUCCESS: I,
        SKU_PURCHASE_MODAL_CLOSE: I,
        SKU_PURCHASE_MODAL_OPEN: I,
        SKU_PURCHASE_START: I,
        SKU_PURCHASE_SUCCESS: I,
        BILLING_SUBSCRIPTION_UPDATE_FAIL: T,
        PREMIUM_PAYMENT_SUBSCRIBE_FAIL: T,
        PREMIUM_PAYMENT_UPDATE_FAIL: T,
        SKU_PURCHASE_FAIL: T,
        GIFT_CODE_REDEEM_FAILURE: T,
        PAYMENT_AUTHENTICATION_ERROR: S,
        PAYMENT_UPDATE: A,
        BILLING_PAYMENT_FETCH_SUCCESS: A
    }));
