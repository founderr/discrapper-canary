"use strict";
let n, l, i;
r.r(t), r.d(t, {
  default: function() {
    return C
  }
}), r("222007");
var s = r("917351"),
  a = r("446674"),
  u = r("913144");
let o = new Map,
  c = o,
  d = !1;
class f extends a.default.Store {
  get isFetching() {
    return d
  }
  get isClaiming() {
    return n
  }
  get purchases() {
    return c
  }
  get fetchError() {
    return l
  }
  get claimError() {
    return i
  }
  getPurchase(e) {
    return null != e ? c.get(e) : void 0
  }
}
f.displayName = "CollectiblesPurchaseStore";
var C = new f(u.default, {
  COLLECTIBLES_PURCHASES_FETCH: e => {
    d = !0, l = void 0
  },
  COLLECTIBLES_PURCHASES_FETCH_SUCCESS: e => {
    0 === e.purchases.length ? c = o : !(0, s.isEqual)([...c.values()], e.purchases) && (c = new Map(e.purchases.map(e => [e.skuId, e]))), d = !1, l = void 0
  },
  COLLECTIBLES_PURCHASES_FETCH_FAILURE: e => {
    let {
      error: t
    } = e;
    c = o, d = !1, l = t
  },
  COLLECTIBLES_CLAIM: e => {
    n = e.skuId, i = void 0
  },
  COLLECTIBLES_CLAIM_SUCCESS: e => {
    null == e.purchases || 0 === e.purchases.length ? c = o : !(0, s.isEqual)([...c.values()], e.purchases) && (c = new Map(e.purchases.map(e => [e.skuId, e]))), n = void 0, i = void 0
  },
  COLLECTIBLES_CLAIM_FAILURE: e => {
    let {
      error: t,
      skuId: r
    } = e;
    n = r, i = t
  },
  LOGOUT: e => {
    c = o, d = !1, n = void 0, l = void 0, i = void 0
  }
})