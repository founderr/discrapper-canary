"use strict";
let u, l, n;
r.r(t), r.d(t, {
  default: function() {
    return C
  }
}), r("222007");
var s = r("917351"),
  i = r("446674"),
  o = r("913144");
let a = new Map,
  c = a,
  d = !1;
class E extends i.default.Store {
  get isFetching() {
    return d
  }
  get isClaiming() {
    return u
  }
  get purchases() {
    return c
  }
  get fetchError() {
    return l
  }
  get claimError() {
    return n
  }
  getPurchase(e) {
    return null != e ? c.get(e) : void 0
  }
}
E.displayName = "CollectiblesPurchaseStore";
var C = new E(o.default, {
  COLLECTIBLES_PURCHASES_FETCH: e => {
    d = !0, l = void 0
  },
  COLLECTIBLES_PURCHASES_FETCH_SUCCESS: e => {
    0 === e.purchases.length ? c = a : !(0, s.isEqual)([...c.values()], e.purchases) && (c = new Map(e.purchases.map(e => [e.skuId, e]))), d = !1, l = void 0
  },
  COLLECTIBLES_PURCHASES_FETCH_FAILURE: e => {
    let {
      error: t
    } = e;
    c = a, d = !1, l = t
  },
  COLLECTIBLES_CLAIM: e => {
    u = e.skuId, n = void 0
  },
  COLLECTIBLES_CLAIM_SUCCESS: e => {
    null == e.purchases || 0 === e.purchases.length ? c = a : !(0, s.isEqual)([...c.values()], e.purchases) && (c = new Map(e.purchases.map(e => [e.skuId, e]))), u = void 0, n = void 0
  },
  COLLECTIBLES_CLAIM_FAILURE: e => {
    let {
      error: t,
      skuId: r
    } = e;
    u = r, n = t
  },
  LOGOUT: e => {
    c = a, d = !1, u = void 0, l = void 0, n = void 0
  }
})