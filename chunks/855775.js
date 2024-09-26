let r, i;
n.d(t, {
    c: function () {
        return d;
    }
});
var a,
    o = n(47120);
var s = n(442837),
    l = n(570140),
    u = n(981631);
function c(e, t, n) {
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
let d = 'no_payment_source',
    _ = null,
    E = null,
    f = null,
    h = null,
    p = null,
    m = {},
    I = null,
    T = !1,
    g = null,
    S = !1,
    A = !1,
    v = !1,
    N = !1,
    O = null,
    R = new Set();
function C(e) {
    null != r && null != I ? r(I) : null != i && i(e), (r = null), (i = null);
}
function y(e) {
    C(), (_ = e.skuId), (f = e.applicationId), (A = e.isIAP), (h = e.analyticsLocation), (O = e.context), (N = e.isGift), (v = !0), (S = !1), (r = e.resolve), (i = e.reject), (g = null), (I = null), (p = e.promotionId);
}
function L(e) {
    let { error: t } = e;
    (v = !1), (O = null), C(t);
}
function b(e) {
    let { skuId: t } = e;
    R.add(t);
}
function D(e) {
    let { skuId: t, paymentSourceId: n, price: r } = e;
    (m = {
        ...m,
        [t]: {
            ...m[t],
            [null != n ? n : d]: r
        }
    }),
        R.delete(t);
}
function M(e) {
    let { skuId: t } = e;
    R.delete(t);
}
function P() {
    T = !0;
}
function U(e) {
    let { entitlements: t, giftCode: n } = e;
    (T = !1), (I = t), (E = n);
}
function w(e) {
    let { giftCode: t } = e;
    if (0 !== t.uses || t.sku_id !== _) return !1;
    E = t.code;
}
function x(e) {
    let { error: t } = e;
    (T = !1), (g = t);
}
function G() {
    S = !0;
}
function k() {
    g = null;
}
function B(e) {
    N = e.isGift;
}
function F(e) {
    let { locked: t } = e;
    if (!t || null == O) return !1;
    (v = !1), (O = null), C();
}
class Z extends (a = s.ZP.Store) {
    getPricesForSku(e) {
        return m[e];
    }
    isOpen() {
        let e = __OVERLAY__ ? u.IlC.OVERLAY : u.IlC.APP;
        return O === e && v;
    }
    get isPurchasingSKU() {
        return T;
    }
    get forceConfirmationStepOnMount() {
        return S;
    }
    get error() {
        return g;
    }
    get skuId() {
        return _;
    }
    get applicationId() {
        return f;
    }
    get analyticsLocation() {
        return h;
    }
    get promotionId() {
        return p;
    }
    get isIAP() {
        return A;
    }
    get giftCode() {
        return E;
    }
    get isGift() {
        return N;
    }
    isFetchingSKU(e) {
        return R.has(e);
    }
}
c(Z, 'displayName', 'SKUPaymentModalStore'),
    (t.Z = new Z(l.Z, {
        SKU_PURCHASE_MODAL_OPEN: y,
        SKU_PURCHASE_MODAL_CLOSE: L,
        SKU_PURCHASE_PREVIEW_FETCH: b,
        SKU_PURCHASE_PREVIEW_FETCH_SUCCESS: D,
        SKU_PURCHASE_PREVIEW_FETCH_FAILURE: M,
        SKU_PURCHASE_START: P,
        SKU_PURCHASE_SUCCESS: U,
        SKU_PURCHASE_FAIL: x,
        SKU_PURCHASE_SHOW_CONFIRMATION_STEP: G,
        SKU_PURCHASE_CLEAR_ERROR: k,
        SKU_PURCHASE_UPDATE_IS_GIFT: B,
        OVERLAY_SET_INPUT_LOCKED: F,
        GIFT_CODE_CREATE: w
    }));
