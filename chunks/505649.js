n(411104);
var r,
    E,
    i,
    u,
    o = n(442837),
    S = n(570140),
    l = n(366939),
    _ = n(16084),
    A = n(128069),
    a = n(122289),
    T = n(622999),
    I = n(981631),
    c = n(388032);
let R = !1,
    C = null,
    N = null;
function s() {
    (R = !1), (N = null), (C = null);
}
function M(t) {
    let { error: e } = t,
        { code: n, paymentId: r } = e;
    if (n !== A.ZP.ErrorCodes.CONFIRMATION_REQUIRED && n !== A.ZP.ErrorCodes.AUTHENTICATION_REQUIRED) return (R = !1), !1;
    !R && ((R = !0), (C = r), n === A.ZP.ErrorCodes.AUTHENTICATION_REQUIRED && P(r));
}
async function P(t) {
    if (null == t) return;
    let { error: e } = await (0, T.oe)(t);
    if (null != e) {
        S.Z.dispatch({
            type: 'PAYMENT_AUTHENTICATION_ERROR',
            error: new A.ZP(c.intl.string(c.t.khEaRE))
        });
        let t = Error(e);
        (0, a.q2)(t, { extra: { authenticationError: e } });
    }
}
function U(t) {
    let { payment: e } = t,
        n = [I.PyE.COMPLETED, I.PyE.FAILED, I.PyE.CANCELED];
    if (!R || e.id !== C || !n.includes(e.status)) return !1;
    (R = !1), (C = null), e.status === I.PyE.FAILED ? (N = new A.ZP(c.intl.string(c.t.khEaRE))) : ((N = null), S.Z.wait(l.fw), S.Z.wait(_.pB));
}
class d extends (r = o.ZP.Store) {
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
(u = 'PaymentAuthenticationStore'),
    (i = 'displayName') in (E = d)
        ? Object.defineProperty(E, i, {
              value: u,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (E[i] = u),
    (e.Z = new d(S.Z, {
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
        PAYMENT_AUTHENTICATION_ERROR: function (t) {
            let { error: e } = t;
            (N = e), (R = !1);
        },
        PAYMENT_UPDATE: U,
        BILLING_PAYMENT_FETCH_SUCCESS: U
    }));
