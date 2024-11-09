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
    h = n(109213),
    p = n(706454),
    m = n(884697),
    g = n(215023);
let E = new Map(),
    v = new Map(),
    I = [],
    S = E,
    T = v,
    b = I,
    y = null,
    A = !1,
    N = new Set();
let C = {},
    R = (e, t) => {
        if (0 === e.length) {
            b = I;
            return;
        }
        switch (y) {
            case h.u.POPULAR:
                b = g.HU;
                break;
            case h.u.RECENT:
                b = (0, m.x0)(e, t);
                break;
            case h.u.NONE:
            default:
                b = I;
        }
    },
    O = () => {
        (S = E), (T = v), (b = I), (y = null), (i = void 0), (A = !1), (N = new Set()), (r = void 0), (a = void 0), (C = {});
    },
    D = () => {
        if (!_.Z.hasLoadedExperiments) return;
        let { giftRecommendationAlgorithm: e } = h.G.getCurrentConfig({ location: 'CollectiblesCategoryStore handleExperimentChange' }, { autoTrackExposure: !1 });
        e !== y && (i = void 0), (y = e);
    };
class L extends (s = d.ZP.Store) {
    initialize() {
        this.syncWith([p.default], O), this.syncWith([_.Z], D);
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
        return S;
    }
    get products() {
        return T;
    }
    get recommendedGiftSkuIds() {
        return b;
    }
    getCategory(e) {
        return null != e ? S.get(e) : void 0;
    }
    getProduct(e) {
        return null != e ? T.get(e) : void 0;
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
            0 === e.categories.length ? ((S = E), (T = v)) : !(0, c.isEqual)([...S.values()], e.categories) && ((S = new Map(e.categories.map((e) => [e.skuId, e]))), (T = new Map((0, m.Cs)(S).map((e) => [e.skuId, e])))), R(e.categories, T), (i = Date.now()), (A = !1), (r = void 0), (a = void 0);
        },
        COLLECTIBLES_CATEGORIES_FETCH_FAILURE: (e) => {
            let { error: t } = e;
            (S = E), (T = v), (b = I), (A = !1), (N = new Set()), (r = t), (a = Date.now());
        },
        COLLECTIBLES_PRODUCT_FETCH: (e) => {
            let { skuId: t } = e;
            (N = new Set(N)).add(t), (r = void 0), (a = void 0);
        },
        COLLECTIBLES_PRODUCT_FETCH_SUCCESS: (e) => {
            let { skuId: t, product: n } = e;
            T.set(t, n), (N = new Set(N)).delete(t), (r = void 0), (a = void 0);
        },
        COLLECTIBLES_PRODUCT_FETCH_FAILURE: (e) => {
            let { skuId: t, error: n } = e;
            (N = new Set(N)).delete(t), (r = n), (a = Date.now());
        },
        LOGOUT: O
    }));
