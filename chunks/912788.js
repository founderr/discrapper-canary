var i,
    a = r(442837),
    s = r(570140),
    o = r(881052);
function l(e, n, r) {
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
let u = null,
    c = null,
    d = null;
function f(e) {
    let { error: n } = e;
    u = n;
}
function _() {
    m();
}
function h(e) {
    let { message: n, code: r } = e;
    u = new o.HF(n, r);
}
function p(e) {
    let { message: n, code: r } = e;
    u = new o.HF(n, r);
}
function m() {
    u = null;
}
function g(e) {
    (c = e.giftCode), (d = e.skuId);
}
function E(e) {
    let { giftCode: n } = e;
    if (0 !== n.uses || n.sku_id !== d) return !1;
    c = n.code;
}
function v(e) {
    u = e.error;
}
function I(e) {
    e.isGift && (d = e.skuId);
}
class T extends (i = a.ZP.Store) {
    get paymentError() {
        return u;
    }
    getGiftCode(e) {
        return e === d ? c : null;
    }
}
l(T, 'displayName', 'PremiumPaymentModalStore'),
    (n.Z = new T(s.Z, {
        PREMIUM_PAYMENT_SUBSCRIBE_FAIL: f,
        PREMIUM_PAYMENT_UPDATE_FAIL: f,
        PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: _,
        PREMIUM_PAYMENT_UPDATE_SUCCESS: m,
        PREMIUM_PAYMENT_ERROR_CLEAR: m,
        BRAINTREE_TOKENIZE_PAYPAL_FAIL: h,
        BRAINTREE_TOKENIZE_VENMO_FAIL: p,
        SKU_PURCHASE_SUCCESS: g,
        SKU_PURCHASE_FAIL: v,
        SKU_PURCHASE_AWAIT_CONFIRMATION: I,
        GIFT_CODE_CREATE: E
    }));
