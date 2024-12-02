let r, i;
n.d(t, {
    c: function () {
        return f;
    }
}),
    n(47120);
var a,
    s,
    o,
    l,
    u = n(442837),
    c = n(570140),
    d = n(981631);
let f = 'no_payment_source',
    _ = null,
    p = null,
    h = null,
    m = null,
    g = null,
    E = {},
    v = null,
    I = !1,
    T = null,
    b = !1,
    S = !1,
    y = !1,
    A = !1,
    N = null,
    C = new Set();
function R(e) {
    null != r && null != v ? r(v) : null != i && i(e), (r = null), (i = null);
}
class O extends (a = u.ZP.Store) {
    getPricesForSku(e) {
        return E[e];
    }
    isOpen() {
        let e = __OVERLAY__ ? d.IlC.OVERLAY : d.IlC.APP;
        return N === e && y;
    }
    get isPurchasingSKU() {
        return I;
    }
    get forceConfirmationStepOnMount() {
        return b;
    }
    get error() {
        return T;
    }
    get skuId() {
        return _;
    }
    get applicationId() {
        return h;
    }
    get analyticsLocation() {
        return m;
    }
    get promotionId() {
        return g;
    }
    get isIAP() {
        return S;
    }
    get giftCode() {
        return p;
    }
    get isGift() {
        return A;
    }
    isFetchingSKU(e) {
        return C.has(e);
    }
}
(l = 'SKUPaymentModalStore'),
    (o = 'displayName') in (s = O)
        ? Object.defineProperty(s, o, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (s[o] = l),
    (t.Z = new O(c.Z, {
        SKU_PURCHASE_MODAL_OPEN: function (e) {
            R(), (_ = e.skuId), (h = e.applicationId), (S = e.isIAP), (m = e.analyticsLocation), (N = e.context), (A = e.isGift), (y = !0), (b = !1), (r = e.resolve), (i = e.reject), (T = null), (v = null), (g = e.promotionId);
        },
        SKU_PURCHASE_MODAL_CLOSE: function (e) {
            let { error: t } = e;
            (y = !1), (N = null), R(t);
        },
        SKU_PURCHASE_PREVIEW_FETCH: function (e) {
            let { skuId: t } = e;
            C.add(t);
        },
        SKU_PURCHASE_PREVIEW_FETCH_SUCCESS: function (e) {
            let { skuId: t, paymentSourceId: n, price: r } = e;
            (E = {
                ...E,
                [t]: {
                    ...E[t],
                    [null != n ? n : f]: r
                }
            }),
                C.delete(t);
        },
        SKU_PURCHASE_PREVIEW_FETCH_FAILURE: function (e) {
            let { skuId: t } = e;
            C.delete(t);
        },
        SKU_PURCHASE_START: function () {
            I = !0;
        },
        SKU_PURCHASE_SUCCESS: function (e) {
            let { entitlements: t, giftCode: n } = e;
            (I = !1), (v = t), (p = n);
        },
        SKU_PURCHASE_FAIL: function (e) {
            let { error: t } = e;
            (I = !1), (T = t);
        },
        SKU_PURCHASE_SHOW_CONFIRMATION_STEP: function () {
            b = !0;
        },
        SKU_PURCHASE_CLEAR_ERROR: function () {
            T = null;
        },
        SKU_PURCHASE_UPDATE_IS_GIFT: function (e) {
            A = e.isGift;
        },
        OVERLAY_SET_INPUT_LOCKED: function (e) {
            let { locked: t } = e;
            if (!t || null == N) return !1;
            (y = !1), (N = null), R();
        },
        GIFT_CODE_CREATE: function (e) {
            let { giftCode: t } = e;
            if (0 !== t.uses || t.sku_id !== _) return !1;
            p = t.code;
        }
    }));
