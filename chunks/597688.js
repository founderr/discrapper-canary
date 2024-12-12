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
let O = {},
    D = (e) => {
        let { skuId: n } = e;
        (R = new Set(R)).add(n), (i = void 0), (s = void 0);
    },
    L = (e) => {
        let { skuId: n, error: r } = e;
        (R = new Set(R)).delete(n), (i = r), (s = Date.now());
    },
    x = (e) => {
        let { skuId: n, product: r } = e;
        y.set(n, r), (R = new Set(R)).delete(n), (i = void 0), (s = void 0);
    },
    w = (e) => {
        (C = !0), (i = void 0), (s = void 0), (O = e.options);
    },
    P = (e) => {
        let { error: n } = e;
        (b = E), (y = v), (A = T), (C = !1), (R = new Set()), (i = n), (s = Date.now());
    },
    M = (e) => {
        0 === e.categories.length ? ((b = E), (y = v)) : !(0, u.isEqual)([...b.values()], e.categories) && ((b = new Map(e.categories.map((e) => [e.skuId, e]))), (y = new Map((0, p.Cs)(b, !0).map((e) => [e.skuId, e]))), (S = new Map((0, p.Cs)(b, !1).map((e) => [e.storeListingId, e])))), k(e.categories, y), (a = Date.now()), (C = !1), (i = void 0), (s = void 0);
    },
    k = (e, n) => {
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
    U = () => {
        (b = E), (y = v), (A = T), (a = void 0), (C = !1), (R = new Set()), (i = void 0), (s = void 0), (O = {});
    },
    B = () => {
        if (!f.Z.hasLoadedExperiments) return;
        let { giftRecommendationAlgorithm: e } = _.G.getCurrentConfig({ location: 'CollectiblesCategoryStore handleExperimentChange' }, { autoTrackExposure: !1 });
        e !== N && (a = void 0), (N = e);
    };
class G extends (o = c.ZP.Store) {
    initialize() {
        this.syncWith([h.default], U), this.syncWith([f.Z], B);
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
        return O;
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
    getProductByStoreListingId(e) {
        return null != e ? S.get(e) : void 0;
    }
    getCategoryForProduct(e) {
        let n = this.getProduct(e);
        return this.getCategory(null == n ? void 0 : n.categorySkuId);
    }
}
g(G, 'displayName', 'CollectiblesCategoryStore'),
    (n.Z = new G(d.Z, {
        COLLECTIBLES_CATEGORIES_FETCH: w,
        COLLECTIBLES_CATEGORIES_FETCH_SUCCESS: M,
        COLLECTIBLES_CATEGORIES_FETCH_FAILURE: P,
        COLLECTIBLES_PRODUCT_FETCH: D,
        COLLECTIBLES_PRODUCT_FETCH_SUCCESS: x,
        COLLECTIBLES_PRODUCT_FETCH_FAILURE: L,
        LOGOUT: U
    }));
