n(411104);
var E,
    r,
    u,
    i,
    S = n(442837),
    _ = n(570140),
    o = n(366939),
    A = n(16084),
    l = n(128069),
    a = n(122289),
    T = n(622999),
    I = n(981631),
    c = n(689938);
let R = !1,
    C = null,
    N = null;
function s() {
    (R = !1), (N = null);
}
function M(e) {
    let { error: t } = e,
        { code: n, paymentId: E } = t;
    if (n !== l.ZP.ErrorCodes.CONFIRMATION_REQUIRED && n !== l.ZP.ErrorCodes.AUTHENTICATION_REQUIRED) return (R = !1), !1;
    !R && ((R = !0), (C = E), n === l.ZP.ErrorCodes.AUTHENTICATION_REQUIRED && P(E));
}
async function P(e) {
    if (null == e) return;
    let { error: t } = await (0, T.oe)(e);
    if (null != t) {
        _.Z.dispatch({
            type: 'PAYMENT_AUTHENTICATION_ERROR',
            error: new l.ZP(c.Z.Messages.PAYMENT_METHOD_CONFIRMATION_ERROR)
        });
        let e = Error(t);
        (0, a.q2)(e, { extra: { authenticationError: t } });
    }
}
function U(e) {
    let { payment: t } = e;
    if (!R || t.id !== C || ![I.PyE.COMPLETED, I.PyE.CANCELED].includes(t.status)) return !1;
    (R = !1), (N = null), (C = null), _.Z.wait(o.fw), _.Z.wait(A.pB);
}
class d extends (E = S.ZP.Store) {
    get isAwaitingAuthentication() {
        return R;
    }
    get error() {
        return N;
    }
    get awaitingPaymentId() {
        return C;
    }
}
(i = 'PaymentAuthenticationStore'),
    (u = 'displayName') in (r = d)
        ? Object.defineProperty(r, u, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[u] = i),
    (t.Z = new d(_.Z, {
        BILLING_SUBSCRIPTION_UPDATE_START: s,
        PAYMENT_AUTHENTICATION_CLEAR_ERROR: s,
        PREMIUM_PAYMENT_ERROR_CLEAR: s,
        PREMIUM_PAYMENT_MODAL_CLOSE: s,
        PREMIUM_PAYMENT_MODAL_OPEN: s,
        PREMIUM_PAYMENT_SUBSCRIBE_START: s,
        PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: s,
        PREMIUM_PAYMENT_UPDATE_SUCCESS: s,
        SKU_PURCHASE_MODAL_CLOSE: s,
        SKU_PURCHASE_MODAL_OPEN: s,
        SKU_PURCHASE_START: s,
        SKU_PURCHASE_SUCCESS: s,
        BILLING_SUBSCRIPTION_UPDATE_FAIL: M,
        PREMIUM_PAYMENT_SUBSCRIBE_FAIL: M,
        PREMIUM_PAYMENT_UPDATE_FAIL: M,
        SKU_PURCHASE_FAIL: M,
        GIFT_CODE_REDEEM_FAILURE: M,
        PAYMENT_AUTHENTICATION_ERROR: function (e) {
            let { error: t } = e;
            (N = t), (R = !1);
        },
        PAYMENT_UPDATE: U,
        BILLING_PAYMENT_FETCH_SUCCESS: U
    }));
