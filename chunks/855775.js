"use strict";
let r, u;
n.r(t), n.d(t, {
  NO_PAYMENT_SOURCE: function() {
    return _
  }
}), n("47120");
var i, l, a, o, s = n("442837"),
  E = n("570140"),
  S = n("981631");
let _ = "no_payment_source",
  d = null,
  c = null,
  A = null,
  f = null,
  T = null,
  I = {},
  C = null,
  P = !1,
  R = null,
  N = !1,
  M = !1,
  U = !1,
  h = !1,
  p = null,
  O = new Set;

function L(e) {
  null != r && null != C ? r(C) : null != u && u(e), r = null, u = null
}
class m extends(i = s.default.Store) {
  getPricesForSku(e) {
    return I[e]
  }
  isOpen() {
    let e = __OVERLAY__ ? S.AppContext.OVERLAY : S.AppContext.APP;
    return p === e && U
  }
  get isPurchasingSKU() {
    return P
  }
  get forceConfirmationStepOnMount() {
    return N
  }
  get error() {
    return R
  }
  get skuId() {
    return d
  }
  get applicationId() {
    return A
  }
  get analyticsLocation() {
    return f
  }
  get promotionId() {
    return T
  }
  get isIAP() {
    return M
  }
  get giftCode() {
    return c
  }
  get isGift() {
    return h
  }
  isFetchingSKU(e) {
    return O.has(e)
  }
}
o = "SKUPaymentModalStore", (a = "displayName") in(l = m) ? Object.defineProperty(l, a, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : l[a] = o, t.default = new m(E.default, {
  SKU_PURCHASE_MODAL_OPEN: function(e) {
    L(), d = e.skuId, A = e.applicationId, M = e.isIAP, f = e.analyticsLocation, p = e.context, h = e.isGift, U = !0, N = !1, r = e.resolve, u = e.reject, R = null, C = null, T = e.promotionId
  },
  SKU_PURCHASE_MODAL_CLOSE: function(e) {
    let {
      error: t
    } = e;
    U = !1, p = null, L(t)
  },
  SKU_PURCHASE_PREVIEW_FETCH: function(e) {
    let {
      skuId: t
    } = e;
    O.add(t)
  },
  SKU_PURCHASE_PREVIEW_FETCH_SUCCESS: function(e) {
    let {
      skuId: t,
      paymentSourceId: n,
      price: r
    } = e;
    I = {
      ...I,
      [t]: {
        ...I[t],
        [null != n ? n : _]: r
      }
    }, O.delete(t)
  },
  SKU_PURCHASE_PREVIEW_FETCH_FAILURE: function(e) {
    let {
      skuId: t
    } = e;
    O.delete(t)
  },
  SKU_PURCHASE_START: function() {
    P = !0
  },
  SKU_PURCHASE_SUCCESS: function(e) {
    let {
      entitlements: t,
      giftCode: n
    } = e;
    P = !1, C = t, c = n
  },
  SKU_PURCHASE_FAIL: function(e) {
    let {
      error: t
    } = e;
    P = !1, R = t
  },
  SKU_PURCHASE_SHOW_CONFIRMATION_STEP: function() {
    N = !0
  },
  SKU_PURCHASE_CLEAR_ERROR: function() {
    R = null
  },
  SKU_PURCHASE_UPDATE_IS_GIFT: function(e) {
    h = e.isGift
  },
  OVERLAY_SET_INPUT_LOCKED: function(e) {
    let {
      locked: t
    } = e;
    if (!t || null == p) return !1;
    U = !1, p = null, L()
  },
  GIFT_CODE_CREATE: function(e) {
    let {
      giftCode: t
    } = e;
    if (0 !== t.uses || t.sku_id !== d) return !1;
    c = t.code
  }
})