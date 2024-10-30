let r, i;
n(47120);
var a,
    s,
    o,
    l,
    u = n(392711),
    c = n(442837),
    d = n(570140),
    _ = n(353926),
    E = n(109213),
    f = n(706454),
    h = n(884697),
    p = n(215023);
let I = new Map(),
    m = new Map(),
    T = [],
    S = I,
    g = m,
    A = T,
    N = null,
    R = !1,
    O = new Set();
let v = {},
    C = (e, t) => {
        if (0 === e.length) {
            A = T;
            return;
        }
        switch (N) {
            case E.u.POPULAR:
                A = p.HU;
                break;
            case E.u.RECENT:
                A = (0, h.x0)(e, t);
                break;
            case E.u.NONE:
            default:
                A = T;
        }
    },
    L = () => {
        (S = I), (g = m), (A = T), (N = null), (i = void 0), (R = !1), (O = new Set()), (r = void 0), (v = {});
    },
    D = () => {
        if (!_.Z.hasLoadedExperiments) return;
        let { giftRecommendationAlgorithm: e } = E.G.getCurrentConfig({ location: 'CollectiblesCategoryStore handleExperimentChange' }, { autoTrackExposure: !1 });
        e !== N && (i = void 0), (N = e);
    };
class y extends (a = c.ZP.Store) {
    initialize() {
        this.syncWith([f.default], L), this.syncWith([_.Z], D);
    }
    get isFetchingCategories() {
        return R;
    }
    isFetchingProduct(e) {
        return null != e && O.has(e);
    }
    get error() {
        return r;
    }
    get lastSuccessfulFetch() {
        return i;
    }
    get lastFetchOptions() {
        return v;
    }
    get categories() {
        return S;
    }
    get products() {
        return g;
    }
    get recommendedGiftSkuIds() {
        return A;
    }
    getCategory(e) {
        return null != e ? S.get(e) : void 0;
    }
    getProduct(e) {
        return null != e ? g.get(e) : void 0;
    }
    getCategoryForProduct(e) {
        let t = this.getProduct(e);
        return this.getCategory(null == t ? void 0 : t.categorySkuId);
    }
}
(l = 'CollectiblesCategoryStore'),
    (o = 'displayName') in (s = y)
        ? Object.defineProperty(s, o, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (s[o] = l),
    (t.Z = new y(d.Z, {
        COLLECTIBLES_CATEGORIES_FETCH: (e) => {
            (R = !0), (r = void 0), (v = e.options);
        },
        COLLECTIBLES_CATEGORIES_FETCH_SUCCESS: (e) => {
            0 === e.categories.length ? ((S = I), (g = m)) : !(0, u.isEqual)([...S.values()], e.categories) && ((S = new Map(e.categories.map((e) => [e.skuId, e]))), (g = new Map((0, h.Cs)(S).map((e) => [e.skuId, e])))), C(e.categories, g), (i = Date.now()), (R = !1), (r = void 0);
        },
        COLLECTIBLES_CATEGORIES_FETCH_FAILURE: (e) => {
            let { error: t } = e;
            (S = I), (g = m), (A = T), (R = !1), (O = new Set()), (r = t);
        },
        COLLECTIBLES_PRODUCT_FETCH: (e) => {
            let { skuId: t } = e;
            (O = new Set(O)).add(t), (r = void 0);
        },
        COLLECTIBLES_PRODUCT_FETCH_SUCCESS: (e) => {
            let { skuId: t, product: n } = e;
            g.set(t, n), (O = new Set(O)).delete(t), (r = void 0);
        },
        COLLECTIBLES_PRODUCT_FETCH_FAILURE: (e) => {
            let { skuId: t, error: n } = e;
            (O = new Set(O)).delete(t), (r = n);
        },
        LOGOUT: L
    }));
