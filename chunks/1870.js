let r, i, a;
var o,
    s = n(47120);
var l = n(392711);
var u = n(442837),
    c = n(570140);
function d(e, t, n) {
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
let _ = new Map(),
    E = _,
    f = !1;
let h = !1,
    p = (e) => {
        (f = !0), (i = void 0);
    },
    m = (e) => {
        let { error: t } = e;
        (E = _), (f = !1), (i = t);
    },
    I = (e) => {
        0 === e.purchases.length ? (E = _) : !(0, l.isEqual)([...E.values()], e.purchases) && (E = new Map(e.purchases.map((e) => [e.skuId, e]))), (h = !0), (f = !1), (i = void 0);
    },
    T = (e) => {
        (r = e.skuId), (a = void 0);
    },
    g = (e) => {
        null == e.purchases || 0 === e.purchases.length ? (E = _) : !(0, l.isEqual)([...E.values()], e.purchases) && (E = new Map(e.purchases.map((e) => [e.skuId, e]))), (r = void 0), (a = void 0);
    },
    S = (e) => {
        let { error: t, skuId: n } = e;
        (r = n), (a = t);
    },
    A = (e) => {
        (E = _), (f = !1), (r = void 0), (i = void 0), (a = void 0);
    };
class v extends (o = u.ZP.Store) {
    get isFetching() {
        return f;
    }
    get isClaiming() {
        return r;
    }
    get purchases() {
        return E;
    }
    get fetchError() {
        return i;
    }
    get claimError() {
        return a;
    }
    get hasPreviouslyFetched() {
        return h;
    }
    getPurchase(e) {
        return null != e ? E.get(e) : void 0;
    }
}
d(v, 'displayName', 'CollectiblesPurchaseStore'),
    (t.Z = new v(c.Z, {
        COLLECTIBLES_PURCHASES_FETCH: p,
        COLLECTIBLES_PURCHASES_FETCH_SUCCESS: I,
        COLLECTIBLES_PURCHASES_FETCH_FAILURE: m,
        COLLECTIBLES_CLAIM: T,
        COLLECTIBLES_CLAIM_SUCCESS: g,
        COLLECTIBLES_CLAIM_FAILURE: S,
        LOGOUT: A
    }));
