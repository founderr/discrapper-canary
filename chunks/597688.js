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
    b = [],
    I = E,
    S = v,
    T = b,
    y = null,
    A = !1,
    N = new Set();
let C = {},
    R = (e, t) => {
        if (0 === e.length) {
            T = b;
            return;
        }
        switch (y) {
            case p.u.POPULAR:
                T = g.HU;
                break;
            case p.u.RECENT:
                T = (0, m.x0)(e, t);
                break;
            case p.u.NONE:
            default:
                T = b;
        }
    },
    O = () => {
        (I = E), (S = v), (T = b), (i = void 0), (A = !1), (N = new Set()), (r = void 0), (a = void 0), (C = {});
    },
    D = () => {
        if (!_.Z.hasLoadedExperiments) return;
        let { giftRecommendationAlgorithm: e } = p.G.getCurrentConfig({ location: 'CollectiblesCategoryStore handleExperimentChange' }, { autoTrackExposure: !1 });
        e !== y && (i = void 0), (y = e);
    };
class L extends (s = d.ZP.Store) {
    initialize() {
        this.syncWith([h.default], O), this.syncWith([_.Z], D);
    }
    get isFetchingCategories() {
        return A;
    }
    isFetchingProduct(e) {
        return null != e && N.has(e);
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
        return C;
    }
    get categories() {
        return I;
    }
    get products() {
        return S;
    }
    get recommendedGiftSkuIds() {
        return T;
    }
    getCategory(e) {
        return null != e ? I.get(e) : void 0;
    }
    getProduct(e) {
        return null != e ? S.get(e) : void 0;
    }
    getCategoryForProduct(e) {
        let t = this.getProduct(e);
        return this.getCategory(null == t ? void 0 : t.categorySkuId);
    }
}
(u = 'CollectiblesCategoryStore'),
    (l = 'displayName') in (o = L)
        ? Object.defineProperty(o, l, {
              value: u,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (o[l] = u),
    (t.Z = new L(f.Z, {
        COLLECTIBLES_CATEGORIES_FETCH: (e) => {
            (A = !0), (r = void 0), (a = void 0), (C = e.options);
        },
        COLLECTIBLES_CATEGORIES_FETCH_SUCCESS: (e) => {
            0 === e.categories.length ? ((I = E), (S = v)) : !(0, c.isEqual)([...I.values()], e.categories) && ((I = new Map(e.categories.map((e) => [e.skuId, e]))), (S = new Map((0, m.Cs)(I).map((e) => [e.skuId, e])))), R(e.categories, S), (i = Date.now()), (A = !1), (r = void 0), (a = void 0);
        },
        COLLECTIBLES_CATEGORIES_FETCH_FAILURE: (e) => {
            let { error: t } = e;
            (I = E), (S = v), (T = b), (A = !1), (N = new Set()), (r = t), (a = Date.now());
        },
        COLLECTIBLES_PRODUCT_FETCH: (e) => {
            let { skuId: t } = e;
            (N = new Set(N)).add(t), (r = void 0), (a = void 0);
        },
        COLLECTIBLES_PRODUCT_FETCH_SUCCESS: (e) => {
            let { skuId: t, product: n } = e;
            S.set(t, n), (N = new Set(N)).delete(t), (r = void 0), (a = void 0);
        },
        COLLECTIBLES_PRODUCT_FETCH_FAILURE: (e) => {
            let { skuId: t, error: n } = e;
            (N = new Set(N)).delete(t), (r = n), (a = Date.now());
        },
        LOGOUT: O
    }));
