let i, a, s;
var o,
    l = r(47120);
var u = r(392711);
var c = r(442837),
    d = r(570140);
function f(e, n, r) {
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
let _ = new Map(),
    h = _,
    p = !1;
let m = !1,
    g = (e) => {
        (p = !0), (a = void 0);
    },
    E = (e) => {
        let { error: n } = e;
        (h = _), (p = !1), (a = n), (m = !0);
    },
    v = (e) => {
        0 === e.purchases.length ? (h = _) : !(0, u.isEqual)([...h.values()], e.purchases) && (h = new Map(e.purchases.map((e) => [e.skuId, e]))), (m = !0), (p = !1), (a = void 0);
    },
    I = (e) => {
        (i = e.skuId), (s = void 0);
    },
    T = (e) => {
        null == e.purchases || 0 === e.purchases.length ? (h = _) : !(0, u.isEqual)([...h.values()], e.purchases) && (h = new Map(e.purchases.map((e) => [e.skuId, e]))), (i = void 0), (s = void 0);
    },
    b = (e) => {
        let { error: n, skuId: r } = e;
        (i = r), (s = n);
    },
    y = (e) => {
        (h = _), (p = !1), (i = void 0), (a = void 0), (s = void 0);
    };
class S extends (o = c.ZP.Store) {
    get isFetching() {
        return p;
    }
    get isClaiming() {
        return i;
    }
    get purchases() {
        return h;
    }
    get fetchError() {
        return a;
    }
    get claimError() {
        return s;
    }
    get hasPreviouslyFetched() {
        return m;
    }
    getPurchase(e) {
        return null != e ? h.get(e) : void 0;
    }
}
f(S, 'displayName', 'CollectiblesPurchaseStore'),
    (n.Z = new S(d.Z, {
        COLLECTIBLES_PURCHASES_FETCH: g,
        COLLECTIBLES_PURCHASES_FETCH_SUCCESS: v,
        COLLECTIBLES_PURCHASES_FETCH_FAILURE: E,
        COLLECTIBLES_CLAIM: I,
        COLLECTIBLES_CLAIM_SUCCESS: T,
        COLLECTIBLES_CLAIM_FAILURE: b,
        LOGOUT: y
    }));
