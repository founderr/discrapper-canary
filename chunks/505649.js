var i,
    a = r(411104);
var s = r(442837),
    o = r(570140),
    l = r(366939),
    u = r(16084),
    c = r(128069),
    d = r(122289),
    f = r(622999),
    _ = r(981631),
    h = r(388032);
function p(e, n, r) {
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
let m = !1,
    g = null,
    E = null;
function v() {
    (m = !1), (E = null), (g = null);
}
function I(e) {
    let { error: n } = e,
        { code: r, paymentId: i } = n;
    if (r !== c.ZP.ErrorCodes.CONFIRMATION_REQUIRED && r !== c.ZP.ErrorCodes.AUTHENTICATION_REQUIRED) return (m = !1), !1;
    !m && ((m = !0), (g = i), r === c.ZP.ErrorCodes.AUTHENTICATION_REQUIRED && T(i));
}
async function T(e) {
    if (null == e) return;
    let { error: n } = await (0, f.oe)(e);
    if (null != n) {
        let e = Error(n);
        (0, d.q2)(e, { extra: { authenticationError: n } });
    }
}
function b(e) {
    let { error: n } = e;
    (E = n), (m = !1);
}
function y(e) {
    let { payment: n } = e,
        r = [_.PyE.COMPLETED, _.PyE.FAILED, _.PyE.CANCELED];
    if (!m || n.id !== g || !r.includes(n.status)) return !1;
    if (((m = !1), (g = null), n.status === _.PyE.FAILED)) {
        var i;
        let e = null;
        (null === (i = n.metadata) || void 0 === i ? void 0 : i.billing_error_code) === c.SM.BILLING_INSUFFICIENT_FUNDS && (e = c.SM.BILLING_INSUFFICIENT_FUNDS), (E = new c.ZP(h.intl.string(h.t.khEaRE), e));
    } else (E = null), o.Z.wait(l.fw), o.Z.wait(u.pB);
}
class S extends (i = s.ZP.Store) {
    get isAwaitingAuthentication() {
        return m;
    }
    get error() {
        return E;
    }
    get awaitingPaymentId() {
        return g;
    }
}
p(S, 'displayName', 'PaymentAuthenticationStore'),
    (n.Z = new S(o.Z, {
        BILLING_SUBSCRIPTION_UPDATE_START: v,
        PAYMENT_AUTHENTICATION_CLEAR_ERROR: v,
        PREMIUM_PAYMENT_ERROR_CLEAR: v,
        PREMIUM_PAYMENT_MODAL_CLOSE: v,
        PREMIUM_PAYMENT_MODAL_OPEN: v,
        PREMIUM_PAYMENT_SUBSCRIBE_START: v,
        PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: v,
        PREMIUM_PAYMENT_UPDATE_SUCCESS: v,
        SKU_PURCHASE_MODAL_CLOSE: v,
        SKU_PURCHASE_MODAL_OPEN: v,
        SKU_PURCHASE_START: v,
        SKU_PURCHASE_SUCCESS: v,
        BILLING_SUBSCRIPTION_UPDATE_FAIL: I,
        PREMIUM_PAYMENT_SUBSCRIBE_FAIL: I,
        PREMIUM_PAYMENT_UPDATE_FAIL: I,
        SKU_PURCHASE_FAIL: I,
        GIFT_CODE_REDEEM_FAILURE: I,
        PAYMENT_AUTHENTICATION_ERROR: b,
        PAYMENT_UPDATE: y,
        BILLING_PAYMENT_FETCH_SUCCESS: y
    }));
