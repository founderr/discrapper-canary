let E, r;
n.d(t, {
    c: function () {
        return a;
    }
}),
    n(47120);
var u,
    i,
    S,
    _,
    o = n(442837),
    A = n(570140),
    l = n(981631);
let a = 'no_payment_source',
    T = null,
    I = null,
    c = null,
    R = null,
    C = null,
    N = {},
    s = null,
    M = !1,
    P = null,
    U = !1,
    d = !1,
    O = !1,
    f = !1,
    L = null,
    p = new Set();
function G(e) {
    null != E && null != s ? E(s) : null != r && r(e), (E = null), (r = null);
}
class Z extends (u = o.ZP.Store) {
    getPricesForSku(e) {
        return N[e];
    }
    isOpen() {
        let e = __OVERLAY__ ? l.IlC.OVERLAY : l.IlC.APP;
        return L === e && O;
    }
    get isPurchasingSKU() {
        return M;
    }
    get forceConfirmationStepOnMount() {
        return U;
    }
    get error() {
        return P;
    }
    get skuId() {
        return T;
    }
    get applicationId() {
        return c;
    }
    get analyticsLocation() {
        return R;
    }
    get promotionId() {
        return C;
    }
    get isIAP() {
        return d;
    }
    get giftCode() {
        return I;
    }
    get isGift() {
        return f;
    }
    isFetchingSKU(e) {
        return p.has(e);
    }
}
(_ = 'SKUPaymentModalStore'),
    (S = 'displayName') in (i = Z)
        ? Object.defineProperty(i, S, {
              value: _,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[S] = _),
    (t.Z = new Z(A.Z, {
        SKU_PURCHASE_MODAL_OPEN: function (e) {
            G(), (T = e.skuId), (c = e.applicationId), (d = e.isIAP), (R = e.analyticsLocation), (L = e.context), (f = e.isGift), (O = !0), (U = !1), (E = e.resolve), (r = e.reject), (P = null), (s = null), (C = e.promotionId);
        },
        SKU_PURCHASE_MODAL_CLOSE: function (e) {
            let { error: t } = e;
            (O = !1), (L = null), G(t);
        },
        SKU_PURCHASE_PREVIEW_FETCH: function (e) {
            let { skuId: t } = e;
            p.add(t);
        },
        SKU_PURCHASE_PREVIEW_FETCH_SUCCESS: function (e) {
            let { skuId: t, paymentSourceId: n, price: E } = e;
            (N = {
                ...N,
                [t]: {
                    ...N[t],
                    [null != n ? n : a]: E
                }
            }),
                p.delete(t);
        },
        SKU_PURCHASE_PREVIEW_FETCH_FAILURE: function (e) {
            let { skuId: t } = e;
            p.delete(t);
        },
        SKU_PURCHASE_START: function () {
            M = !0;
        },
        SKU_PURCHASE_SUCCESS: function (e) {
            let { entitlements: t, giftCode: n } = e;
            (M = !1), (s = t), (I = n);
        },
        SKU_PURCHASE_FAIL: function (e) {
            let { error: t } = e;
            (M = !1), (P = t);
        },
        SKU_PURCHASE_SHOW_CONFIRMATION_STEP: function () {
            U = !0;
        },
        SKU_PURCHASE_CLEAR_ERROR: function () {
            P = null;
        },
        SKU_PURCHASE_UPDATE_IS_GIFT: function (e) {
            f = e.isGift;
        },
        OVERLAY_SET_INPUT_LOCKED: function (e) {
            let { locked: t } = e;
            if (!t || null == L) return !1;
            (O = !1), (L = null), G();
        },
        GIFT_CODE_CREATE: function (e) {
            let { giftCode: t } = e;
            if (0 !== t.uses || t.sku_id !== T) return !1;
            I = t.code;
        }
    }));
