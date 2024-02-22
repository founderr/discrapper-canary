"use strict";
let a, n;
r.r(t), r.d(t, {
  default: function() {
    return C
  }
}), r("222007");
var u = r("917351"),
  i = r("446674"),
  l = r("913144"),
  s = r("915639"),
  o = r("491232");
let c = new Map,
  d = new Map,
  f = c,
  E = d,
  m = !1;
let p = () => {
  f = c, E = d, n = void 0, m = !1, a = void 0
};
class S extends i.default.Store {
  initialize() {
    this.syncWith([s.default], p)
  }
  get isFetching() {
    return m
  }
  get error() {
    return a
  }
  get lastFetched() {
    return n
  }
  get categories() {
    return f
  }
  get products() {
    return E
  }
  getCategory(e) {
    return null != e ? f.get(e) : void 0
  }
  getProduct(e) {
    return null != e ? E.get(e) : void 0
  }
  getCategoryForProduct(e) {
    let t = this.getProduct(e);
    return this.getCategory(null == t ? void 0 : t.categorySkuId)
  }
}
S.displayName = "CollectiblesCategoryStore";
var C = new S(l.default, {
  COLLECTIBLES_CATEGORIES_FETCH: e => {
    m = !0, a = void 0
  },
  COLLECTIBLES_CATEGORIES_FETCH_SUCCESS: e => {
    0 === e.categories.length ? (f = c, E = d) : !(0, u.isEqual)([...f.values()], e.categories) && (f = new Map(e.categories.map(e => [e.skuId, e])), E = new Map((0, o.getProductsFromCategories)(f).map(e => [e.skuId, e]))), n = Date.now(), m = !1, a = void 0
  },
  COLLECTIBLES_CATEGORIES_FETCH_FAILURE: e => {
    let {
      error: t
    } = e;
    f = c, E = d, m = !1, a = t
  },
  COLLECTIBLES_PRODUCT_FETCH: e => {
    m = !0, a = void 0
  },
  COLLECTIBLES_PRODUCT_FETCH_SUCCESS: e => {
    E.set(e.product.skuId, e.product), m = !1, a = void 0
  },
  COLLECTIBLES_PRODUCT_FETCH_FAILURE: e => {
    let {
      error: t
    } = e;
    m = !1, a = t
  },
  LOGOUT: p
})