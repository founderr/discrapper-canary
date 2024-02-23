"use strict";
let i, a;
n.r(t), n.d(t, {
  default: function() {
    return p
  }
}), n("222007");
var r = n("917351"),
  l = n("446674"),
  s = n("913144"),
  o = n("915639"),
  u = n("491232");
let c = new Map,
  d = new Map,
  f = c,
  E = d,
  _ = !1;
let h = () => {
  f = c, E = d, a = void 0, _ = !1, i = void 0
};
class S extends l.default.Store {
  initialize() {
    this.syncWith([o.default], h)
  }
  get isFetching() {
    return _
  }
  get error() {
    return i
  }
  get lastFetched() {
    return a
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
var p = new S(s.default, {
  COLLECTIBLES_CATEGORIES_FETCH: e => {
    _ = !0, i = void 0
  },
  COLLECTIBLES_CATEGORIES_FETCH_SUCCESS: e => {
    0 === e.categories.length ? (f = c, E = d) : !(0, r.isEqual)([...f.values()], e.categories) && (f = new Map(e.categories.map(e => [e.skuId, e])), E = new Map((0, u.getProductsFromCategories)(f).map(e => [e.skuId, e]))), a = Date.now(), _ = !1, i = void 0
  },
  COLLECTIBLES_CATEGORIES_FETCH_FAILURE: e => {
    let {
      error: t
    } = e;
    f = c, E = d, _ = !1, i = t
  },
  COLLECTIBLES_PRODUCT_FETCH: e => {
    _ = !0, i = void 0
  },
  COLLECTIBLES_PRODUCT_FETCH_SUCCESS: e => {
    E.set(e.product.skuId, e.product), _ = !1, i = void 0
  },
  COLLECTIBLES_PRODUCT_FETCH_FAILURE: e => {
    let {
      error: t
    } = e;
    _ = !1, i = t
  },
  LOGOUT: h
})