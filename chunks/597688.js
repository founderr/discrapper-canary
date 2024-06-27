"use strict";
let i, r;
n(47120);
var s, o, a, l, u = n(392711),
  _ = n(442837),
  c = n(570140),
  d = n(706454),
  E = n(884697);
let I = new Map,
  T = new Map,
  h = I,
  f = T,
  S = !1,
  A = new Set;
let N = {},
  m = () => {
    h = I, f = T, r = void 0, S = !1, A = new Set, i = void 0, N = {}
  };
class O extends(s = _.ZP.Store) {
  initialize() {
    this.syncWith([d.default], m)
  }
  get isFetchingCategories() {
    return S
  }
  isFetchingProduct(e) {
    return null != e && A.has(e)
  }
  get error() {
    return i
  }
  get lastSuccessfulFetch() {
    return r
  }
  get lastFetchOptions() {
    return N
  }
  get categories() {
    return h
  }
  get products() {
    return f
  }
  getCategory(e) {
    return null != e ? h.get(e) : void 0
  }
  getProduct(e) {
    return null != e ? f.get(e) : void 0
  }
  getCategoryForProduct(e) {
    let t = this.getProduct(e);
    return this.getCategory(null == t ? void 0 : t.categorySkuId)
  }
}
l = "CollectiblesCategoryStore", (a = "displayName") in(o = O) ? Object.defineProperty(o, a, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : o[a] = l, t.Z = new O(c.Z, {
  COLLECTIBLES_CATEGORIES_FETCH: e => {
    S = !0, i = void 0, N = e.options
  },
  COLLECTIBLES_CATEGORIES_FETCH_SUCCESS: e => {
    0 === e.categories.length ? (h = I, f = T) : !(0, u.isEqual)([...h.values()], e.categories) && (h = new Map(e.categories.map(e => [e.skuId, e])), f = new Map((0, E.Cs)(h).map(e => [e.skuId, e]))), r = Date.now(), S = !1, i = void 0
  },
  COLLECTIBLES_CATEGORIES_FETCH_FAILURE: e => {
    let {
      error: t
    } = e;
    h = I, f = T, S = !1, A = new Set, i = t
  },
  COLLECTIBLES_PRODUCT_FETCH: e => {
    let {
      skuId: t
    } = e;
    (A = new Set(A)).add(t), i = void 0
  },
  COLLECTIBLES_PRODUCT_FETCH_SUCCESS: e => {
    let {
      skuId: t,
      product: n
    } = e;
    f.set(t, n), (A = new Set(A)).delete(t), i = void 0
  },
  COLLECTIBLES_PRODUCT_FETCH_FAILURE: e => {
    let {
      skuId: t,
      error: n
    } = e;
    (A = new Set(A)).delete(t), i = n
  },
  LOGOUT: m
})