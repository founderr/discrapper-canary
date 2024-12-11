n(411104);
var r,
    i,
    a,
    s,
    o = n(442837),
    l = n(570140),
    u = n(366939),
    c = n(16084),
    d = n(128069),
    f = n(122289),
    _ = n(622999),
    p = n(981631),
    h = n(388032);
let m = !1,
    g = null,
    E = null;
function v() {
    (m = !1), (E = null), (g = null);
}
function I(e) {
    let { error: t } = e,
        { code: n, paymentId: r } = t;
    if (n !== d.ZP.ErrorCodes.CONFIRMATION_REQUIRED && n !== d.ZP.ErrorCodes.AUTHENTICATION_REQUIRED) return (m = !1), !1;
    !m && ((m = !0), (g = r), n === d.ZP.ErrorCodes.AUTHENTICATION_REQUIRED && T(r));
}
async function T(e) {
    if (null == e) return;
    let { error: t } = await (0, _.oe)(e);
    if (null != t) {
        let e = Error(t);
        (0, f.q2)(e, { extra: { authenticationError: t } });
    }
}
function b(e) {
    let { payment: t } = e,
        n = [p.PyE.COMPLETED, p.PyE.FAILED, p.PyE.CANCELED];
    if (!m || t.id !== g || !n.includes(t.status)) return !1;
    if (((m = !1), (g = null), t.status === p.PyE.FAILED)) {
        var r;
        let e = null;
        (null === (r = t.metadata) || void 0 === r ? void 0 : r.billing_error_code) === d.SM.BILLING_INSUFFICIENT_FUNDS && (e = d.SM.BILLING_INSUFFICIENT_FUNDS), (E = new d.ZP(h.intl.string(h.t.khEaRE), e));
    } else (E = null), l.Z.wait(u.fw), l.Z.wait(c.pB);
}
class S extends (r = o.ZP.Store) {
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
(s = 'PaymentAuthenticationStore'),
    (a = 'displayName') in (i = S)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s),
    (t.Z = new S(l.Z, {
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
        PAYMENT_AUTHENTICATION_ERROR: function (e) {
            let { error: t } = e;
            (E = t), (m = !1);
        },
        PAYMENT_UPDATE: b,
        BILLING_PAYMENT_FETCH_SUCCESS: b
    }));
