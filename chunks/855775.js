let r, E;
n.d(e, {
    c: function () {
        return a;
    }
}),
    n(47120);
var i,
    u,
    o,
    S,
    l = n(442837),
    _ = n(570140),
    A = n(981631);
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
    f = !1,
    O = !1,
    L = null,
    p = new Set();
function D(t) {
    null != r && null != s ? r(s) : null != E && E(t), (r = null), (E = null);
}
class G extends (i = l.ZP.Store) {
    getPricesForSku(t) {
        return N[t];
    }
    isOpen() {
        let t = __OVERLAY__ ? A.IlC.OVERLAY : A.IlC.APP;
        return L === t && f;
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
        return O;
    }
    isFetchingSKU(t) {
        return p.has(t);
    }
}
(S = 'SKUPaymentModalStore'),
    (o = 'displayName') in (u = G)
        ? Object.defineProperty(u, o, {
              value: S,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (u[o] = S),
    (e.Z = new G(_.Z, {
        SKU_PURCHASE_MODAL_OPEN: function (t) {
            D(), (T = t.skuId), (c = t.applicationId), (d = t.isIAP), (R = t.analyticsLocation), (L = t.context), (O = t.isGift), (f = !0), (U = !1), (r = t.resolve), (E = t.reject), (P = null), (s = null), (C = t.promotionId);
        },
        SKU_PURCHASE_MODAL_CLOSE: function (t) {
            let { error: e } = t;
            (f = !1), (L = null), D(e);
        },
        SKU_PURCHASE_PREVIEW_FETCH: function (t) {
            let { skuId: e } = t;
            p.add(e);
        },
        SKU_PURCHASE_PREVIEW_FETCH_SUCCESS: function (t) {
            let { skuId: e, paymentSourceId: n, price: r } = t;
            (N = {
                ...N,
                [e]: {
                    ...N[e],
                    [null != n ? n : a]: r
                }
            }),
                p.delete(e);
        },
        SKU_PURCHASE_PREVIEW_FETCH_FAILURE: function (t) {
            let { skuId: e } = t;
            p.delete(e);
        },
        SKU_PURCHASE_START: function () {
            M = !0;
        },
        SKU_PURCHASE_SUCCESS: function (t) {
            let { entitlements: e, giftCode: n } = t;
            (M = !1), (s = e), (I = n);
        },
        SKU_PURCHASE_FAIL: function (t) {
            let { error: e } = t;
            (M = !1), (P = e);
        },
        SKU_PURCHASE_SHOW_CONFIRMATION_STEP: function () {
            U = !0;
        },
        SKU_PURCHASE_CLEAR_ERROR: function () {
            P = null;
        },
        SKU_PURCHASE_UPDATE_IS_GIFT: function (t) {
            O = t.isGift;
        },
        OVERLAY_SET_INPUT_LOCKED: function (t) {
            let { locked: e } = t;
            if (!e || null == L) return !1;
            (f = !1), (L = null), D();
        },
        GIFT_CODE_CREATE: function (t) {
            let { giftCode: e } = t;
            if (0 !== e.uses || e.sku_id !== T) return !1;
            I = e.code;
        }
    }));
