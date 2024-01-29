"use strict";
let r, l, i;
n.r(t), n.d(t, {
  default: function() {
    return C
  }
}), n("222007");
var s = n("917351"),
  a = n("446674"),
  o = n("913144");
let u = new Map,
  c = u,
  d = !1;
class f extends a.default.Store {
  get isFetching() {
    return d
  }
  get isClaiming() {
    return r
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
var C = new f(o.default, {
  COLLECTIBLES_PURCHASES_FETCH: e => {
    d = !0, l = void 0
  },
  COLLECTIBLES_PURCHASES_FETCH_SUCCESS: e => {
    0 === e.purchases.length ? c = u : !(0, s.isEqual)([...c.values()], e.purchases) && (c = new Map(e.purchases.map(e => [e.skuId, e]))), d = !1, l = void 0
  },
  COLLECTIBLES_PURCHASES_FETCH_FAILURE: e => {
    let {
      error: t
    } = e;
    c = u, d = !1, l = t
  },
  COLLECTIBLES_CLAIM: e => {
    r = e.skuId, i = void 0
  },
  COLLECTIBLES_CLAIM_SUCCESS: e => {
    null == e.purchases || 0 === e.purchases.length ? c = u : !(0, s.isEqual)([...c.values()], e.purchases) && (c = new Map(e.purchases.map(e => [e.skuId, e]))), r = void 0, i = void 0
  },
  COLLECTIBLES_CLAIM_FAILURE: e => {
    let {
      error: t,
      skuId: n
    } = e;
    r = n, i = t
  },
  LOGOUT: e => {
    c = u, d = !1, r = void 0, l = void 0, i = void 0
  }
})