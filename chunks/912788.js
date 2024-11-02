var r,
    i,
    a,
    s,
    o = n(442837),
    l = n(570140),
    u = n(881052);
let c = null,
    d = null,
    f = null;
function _(e) {
    let { error: t } = e;
    c = t;
}
function h() {
    c = null;
}
class p extends (s = o.ZP.Store) {
    get paymentError() {
        return c;
    }
    getGiftCode(e) {
        return e === f ? d : null;
    }
}
(a = 'PremiumPaymentModalStore'),
    (i = 'displayName') in (r = p)
        ? Object.defineProperty(r, i, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[i] = a),
    (t.Z = new p(l.Z, {
        PREMIUM_PAYMENT_SUBSCRIBE_FAIL: _,
        PREMIUM_PAYMENT_UPDATE_FAIL: _,
        PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: function () {
            h();
        },
        PREMIUM_PAYMENT_UPDATE_SUCCESS: h,
        PREMIUM_PAYMENT_ERROR_CLEAR: h,
        BRAINTREE_TOKENIZE_PAYPAL_FAIL: function (e) {
            let { message: t, code: n } = e;
            c = new u.HF(t, n);
        },
        BRAINTREE_TOKENIZE_VENMO_FAIL: function (e) {
            let { message: t, code: n } = e;
            c = new u.HF(t, n);
        },
        SKU_PURCHASE_SUCCESS: function (e) {
            (d = e.giftCode), (f = e.skuId);
        },
        SKU_PURCHASE_FAIL: function (e) {
            c = e.error;
        },
        SKU_PURCHASE_AWAIT_CONFIRMATION: function (e) {
            e.isGift && (f = e.skuId);
        },
        GIFT_CODE_CREATE: function (e) {
            let { giftCode: t } = e;
            if (0 !== t.uses || t.sku_id !== f) return !1;
            d = t.code;
        }
    }));
