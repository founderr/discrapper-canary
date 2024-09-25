let r, i;
var a,
    o = n(47120);
var s = n(392711);
var l = n(442837),
    u = n(570140),
    c = n(706454),
    d = n(884697);
function _(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let E = new Map(),
    f = new Map(),
    h = E,
    p = f,
    m = !1,
    I = new Set();
let T = {},
    g = (e) => {
        let { skuId: t } = e;
        (I = new Set(I)).add(t), (r = void 0);
    },
    S = (e) => {
        let { skuId: t, error: n } = e;
        (I = new Set(I)).delete(t), (r = n);
    },
    A = (e) => {
        let { skuId: t, product: n } = e;
        p.set(t, n), (I = new Set(I)).delete(t), (r = void 0);
    },
    v = (e) => {
        (m = !0), (r = void 0), (T = e.options);
    },
    N = (e) => {
        let { error: t } = e;
        (h = E), (p = f), (m = !1), (I = new Set()), (r = t);
    },
    O = (e) => {
        0 === e.categories.length ? ((h = E), (p = f)) : !(0, s.isEqual)([...h.values()], e.categories) && ((h = new Map(e.categories.map((e) => [e.skuId, e]))), (p = new Map((0, d.Cs)(h).map((e) => [e.skuId, e])))), (i = Date.now()), (m = !1), (r = void 0);
    },
    R = () => {
        (h = E), (p = f), (i = void 0), (m = !1), (I = new Set()), (r = void 0), (T = {});
    };
class C extends (a = l.ZP.Store) {
    initialize() {
        this.syncWith([c.default], R);
    }
    get isFetchingCategories() {
        return m;
    }
    isFetchingProduct(e) {
        return null != e && I.has(e);
    }
    get error() {
        return r;
    }
    get lastSuccessfulFetch() {
        return i;
    }
    get lastFetchOptions() {
        return T;
    }
    get categories() {
        return h;
    }
    get products() {
        return p;
    }
    getCategory(e) {
        return null != e ? h.get(e) : void 0;
    }
    getProduct(e) {
        return null != e ? p.get(e) : void 0;
    }
    getCategoryForProduct(e) {
        let t = this.getProduct(e);
        return this.getCategory(null == t ? void 0 : t.categorySkuId);
    }
}
_(C, 'displayName', 'CollectiblesCategoryStore'),
    (t.Z = new C(u.Z, {
        COLLECTIBLES_CATEGORIES_FETCH: v,
        COLLECTIBLES_CATEGORIES_FETCH_SUCCESS: O,
        COLLECTIBLES_CATEGORIES_FETCH_FAILURE: N,
        COLLECTIBLES_PRODUCT_FETCH: g,
        COLLECTIBLES_PRODUCT_FETCH_SUCCESS: A,
        COLLECTIBLES_PRODUCT_FETCH_FAILURE: S,
        LOGOUT: R
    }));
