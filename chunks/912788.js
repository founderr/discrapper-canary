var r,
    i = n(442837),
    a = n(570140),
    o = n(881052);
function s(e, t, n) {
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
let l = null,
    u = null,
    c = null;
function d(e) {
    let { error: t } = e;
    l = t;
}
function _() {
    h();
}
function E(e) {
    let { message: t, code: n } = e;
    l = new o.HF(t, n);
}
function f(e) {
    let { message: t, code: n } = e;
    l = new o.HF(t, n);
}
function h() {
    l = null;
}
function p(e) {
    (u = e.giftCode), (c = e.skuId);
}
function m(e) {
    let { giftCode: t } = e;
    if (0 !== t.uses || t.sku_id !== c) return !1;
    u = t.code;
}
function I(e) {
    l = e.error;
}
function T(e) {
    e.isGift && (c = e.skuId);
}
class g extends (r = i.ZP.Store) {
    get paymentError() {
        return l;
    }
    getGiftCode(e) {
        return e === c ? u : null;
    }
}
s(g, 'displayName', 'PremiumPaymentModalStore'),
    (t.Z = new g(a.Z, {
        PREMIUM_PAYMENT_SUBSCRIBE_FAIL: d,
        PREMIUM_PAYMENT_UPDATE_FAIL: d,
        PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: _,
        PREMIUM_PAYMENT_UPDATE_SUCCESS: h,
        PREMIUM_PAYMENT_ERROR_CLEAR: h,
        BRAINTREE_TOKENIZE_PAYPAL_FAIL: E,
        BRAINTREE_TOKENIZE_VENMO_FAIL: f,
        SKU_PURCHASE_SUCCESS: p,
        SKU_PURCHASE_FAIL: I,
        SKU_PURCHASE_AWAIT_CONFIRMATION: T,
        GIFT_CODE_CREATE: m
    }));
