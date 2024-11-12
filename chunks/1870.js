let r, i, a;
n(47120);
var s,
    o,
    l,
    u,
    c = n(392711),
    d = n(442837),
    f = n(570140);
let _ = new Map(),
    p = _,
    h = !1;
let m = !1;
class g extends (s = d.ZP.Store) {
    get isFetching() {
        return h;
    }
    get isClaiming() {
        return r;
    }
    get purchases() {
        return p;
    }
    get fetchError() {
        return i;
    }
    get claimError() {
        return a;
    }
    get hasPreviouslyFetched() {
        return m;
    }
    getPurchase(e) {
        return null != e ? p.get(e) : void 0;
    }
}
(u = 'CollectiblesPurchaseStore'),
    (l = 'displayName') in (o = g)
        ? Object.defineProperty(o, l, {
              value: u,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (o[l] = u),
    (t.Z = new g(f.Z, {
        COLLECTIBLES_PURCHASES_FETCH: (e) => {
            (h = !0), (i = void 0);
        },
        COLLECTIBLES_PURCHASES_FETCH_SUCCESS: (e) => {
            0 === e.purchases.length ? (p = _) : !(0, c.isEqual)([...p.values()], e.purchases) && (p = new Map(e.purchases.map((e) => [e.skuId, e]))), (m = !0), (h = !1), (i = void 0);
        },
        COLLECTIBLES_PURCHASES_FETCH_FAILURE: (e) => {
            let { error: t } = e;
            (p = _), (h = !1), (i = t), (m = !0);
        },
        COLLECTIBLES_CLAIM: (e) => {
            (r = e.skuId), (a = void 0);
        },
        COLLECTIBLES_CLAIM_SUCCESS: (e) => {
            null == e.purchases || 0 === e.purchases.length ? (p = _) : !(0, c.isEqual)([...p.values()], e.purchases) && (p = new Map(e.purchases.map((e) => [e.skuId, e]))), (r = void 0), (a = void 0);
        },
        COLLECTIBLES_CLAIM_FAILURE: (e) => {
            let { error: t, skuId: n } = e;
            (r = n), (a = t);
        },
        LOGOUT: (e) => {
            (p = _), (h = !1), (r = void 0), (i = void 0), (a = void 0);
        }
    }));
