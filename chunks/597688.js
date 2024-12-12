let i, a, s;
var o,
    l = r(47120);
var u = r(392711);
var c = r(442837),
    d = r(570140),
    f = r(353926),
    _ = r(109213),
    h = r(706454),
    p = r(884697),
    m = r(215023);
function g(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let E = new Map(),
    v = new Map(),
    I = new Map(),
    T = [],
    b = E,
    y = v,
    S = I,
    A = T,
    N = null,
    C = !1,
    R = new Set();
let O = new Map(),
    D = new Map();
let L = {},
    x = (e) => {
        let { skuId: n } = e;
        (R = new Set(R)).add(n), (O = new Map(O)).delete(n), (D = new Map(D)).delete(n);
    },
    w = (e) => {
        let { skuId: n, error: r } = e;
        (R = new Set(R)).delete(n), (O = new Map(O)).set(n, r), (D = new Map(D)).set(n, Date.now());
    },
    P = (e) => {
        let { skuId: n, product: r } = e;
        y.set(n, r), (R = new Set(R)).delete(n), (O = new Map(O)).delete(n), (D = new Map(D)).delete(n);
    },
    M = (e) => {
        (C = !0), (i = void 0), (s = void 0), (L = e.options);
    },
    k = (e) => {
        let { error: n } = e;
        (b = E), (y = v), (A = T), (C = !1), (R = new Set()), (i = n), (s = Date.now());
    },
    U = (e) => {
        0 === e.categories.length ? ((b = E), (y = v)) : !(0, u.isEqual)([...b.values()], e.categories) && ((b = new Map(e.categories.map((e) => [e.skuId, e]))), (y = new Map((0, p.Cs)(b, !0).map((e) => [e.skuId, e]))), (S = new Map((0, p.Cs)(b, !1).map((e) => [e.storeListingId, e])))), B(e.categories, y), (a = Date.now()), (C = !1), (i = void 0), (s = void 0);
    },
    B = (e, n) => {
        if (0 === e.length) {
            A = T;
            return;
        }
        switch (N) {
            case _.u.POPULAR:
                A = m.HU;
                break;
            case _.u.RECENT:
                A = (0, p.x0)(e, n);
                break;
            case _.u.NONE:
            default:
                A = T;
        }
    },
    G = () => {
        (b = E), (y = v), (A = T), (a = void 0), (C = !1), (R = new Set()), (i = void 0), (s = void 0), (L = {});
    },
    Z = () => {
        if (!f.Z.hasLoadedExperiments) return;
        let { giftRecommendationAlgorithm: e } = _.G.getCurrentConfig({ location: 'CollectiblesCategoryStore handleExperimentChange' }, { autoTrackExposure: !1 });
        e !== N && (a = void 0), (N = e);
    };
class F extends (o = c.ZP.Store) {
    initialize() {
        this.syncWith([h.default], G), this.syncWith([f.Z], Z);
    }
    get isFetchingCategories() {
        return C;
    }
    isFetchingProduct(e) {
        return null != e && R.has(e);
    }
    get error() {
        return i;
    }
    get lastErrorTimestamp() {
        return s;
    }
    get lastSuccessfulFetch() {
        return a;
    }
    get lastFetchOptions() {
        return L;
    }
    get categories() {
        return b;
    }
    get products() {
        return y;
    }
    get recommendedGiftSkuIds() {
        return A;
    }
    getCategory(e) {
        return null != e ? b.get(e) : void 0;
    }
    getProduct(e) {
        return null != e ? y.get(e) : void 0;
    }
    getProductFetchError(e) {
        return null != e ? O.get(e) : void 0;
    }
    getProductFetchErrorTimestamp(e) {
        return null != e ? D.get(e) : void 0;
    }
    getProductByStoreListingId(e) {
        return null != e ? S.get(e) : void 0;
    }
    getCategoryForProduct(e) {
        let n = this.getProduct(e);
        return this.getCategory(null == n ? void 0 : n.categorySkuId);
    }
}
g(F, 'displayName', 'CollectiblesCategoryStore'),
    (n.Z = new F(d.Z, {
        COLLECTIBLES_CATEGORIES_FETCH: M,
        COLLECTIBLES_CATEGORIES_FETCH_SUCCESS: U,
        COLLECTIBLES_CATEGORIES_FETCH_FAILURE: k,
        COLLECTIBLES_PRODUCT_FETCH: x,
        COLLECTIBLES_PRODUCT_FETCH_SUCCESS: P,
        COLLECTIBLES_PRODUCT_FETCH_FAILURE: w,
        LOGOUT: G
    }));
