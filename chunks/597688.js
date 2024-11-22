let r, i, a;
n(47120);
var s,
    o,
    l,
    u,
    c = n(392711),
    d = n(442837),
    f = n(570140),
    _ = n(353926),
    p = n(109213),
    h = n(706454),
    m = n(884697),
    g = n(215023);
let E = new Map(),
    v = new Map(),
    I = new Map(),
    b = [],
    T = E,
    S = v,
    y = I,
    A = b,
    N = null,
    C = !1,
    R = new Set();
let O = {},
    D = (e, t) => {
        if (0 === e.length) {
            A = b;
            return;
        }
        switch (N) {
            case p.u.POPULAR:
                A = g.HU;
                break;
            case p.u.RECENT:
                A = (0, m.x0)(e, t);
                break;
            case p.u.NONE:
            default:
                A = b;
        }
    },
    L = () => {
        (T = E), (S = v), (A = b), (i = void 0), (C = !1), (R = new Set()), (r = void 0), (a = void 0), (O = {});
    },
    x = () => {
        if (!_.Z.hasLoadedExperiments) return;
        let { giftRecommendationAlgorithm: e } = p.G.getCurrentConfig({ location: 'CollectiblesCategoryStore handleExperimentChange' }, { autoTrackExposure: !1 });
        e !== N && (i = void 0), (N = e);
    };
class w extends (s = d.ZP.Store) {
    initialize() {
        this.syncWith([h.default], L), this.syncWith([_.Z], x);
    }
    get isFetchingCategories() {
        return C;
    }
    isFetchingProduct(e) {
        return null != e && R.has(e);
    }
    get error() {
        return r;
    }
    get lastErrorTimestamp() {
        return a;
    }
    get lastSuccessfulFetch() {
        return i;
    }
    get lastFetchOptions() {
        return O;
    }
    get categories() {
        return T;
    }
    get products() {
        return S;
    }
    get recommendedGiftSkuIds() {
        return A;
    }
    getCategory(e) {
        return null != e ? T.get(e) : void 0;
    }
    getProduct(e) {
        return null != e ? S.get(e) : void 0;
    }
    getProductByStoreListingId(e) {
        return null != e ? y.get(e) : void 0;
    }
    getCategoryForProduct(e) {
        let t = this.getProduct(e);
        return this.getCategory(null == t ? void 0 : t.categorySkuId);
    }
}
(u = 'CollectiblesCategoryStore'),
    (l = 'displayName') in (o = w)
        ? Object.defineProperty(o, l, {
              value: u,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (o[l] = u),
    (t.Z = new w(f.Z, {
        COLLECTIBLES_CATEGORIES_FETCH: (e) => {
            (C = !0), (r = void 0), (a = void 0), (O = e.options);
        },
        COLLECTIBLES_CATEGORIES_FETCH_SUCCESS: (e) => {
            0 === e.categories.length ? ((T = E), (S = v)) : !(0, c.isEqual)([...T.values()], e.categories) && ((T = new Map(e.categories.map((e) => [e.skuId, e]))), (S = new Map((0, m.Cs)(T, !0).map((e) => [e.skuId, e]))), (y = new Map((0, m.Cs)(T, !1).map((e) => [e.storeListingId, e])))), D(e.categories, S), (i = Date.now()), (C = !1), (r = void 0), (a = void 0);
        },
        COLLECTIBLES_CATEGORIES_FETCH_FAILURE: (e) => {
            let { error: t } = e;
            (T = E), (S = v), (A = b), (C = !1), (R = new Set()), (r = t), (a = Date.now());
        },
        COLLECTIBLES_PRODUCT_FETCH: (e) => {
            let { skuId: t } = e;
            (R = new Set(R)).add(t), (r = void 0), (a = void 0);
        },
        COLLECTIBLES_PRODUCT_FETCH_SUCCESS: (e) => {
            let { skuId: t, product: n } = e;
            S.set(t, n), (R = new Set(R)).delete(t), (r = void 0), (a = void 0);
        },
        COLLECTIBLES_PRODUCT_FETCH_FAILURE: (e) => {
            let { skuId: t, error: n } = e;
            (R = new Set(R)).delete(t), (r = n), (a = Date.now());
        },
        LOGOUT: L
    }));
