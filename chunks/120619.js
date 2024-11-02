n(47120);
var i,
    l,
    r,
    a,
    s = n(442837),
    o = n(570140),
    c = n(959546),
    u = n(215023);
let d = new Map(),
    h = new Set(),
    m = new Set(),
    p = new Set(),
    f = new Map(),
    g = !1;
class C extends (i = s.ZP.Store) {
    getPrice(e) {
        return d.get(e);
    }
    isFetchingPrice(e) {
        return h.has(e);
    }
    getErrored(e) {
        return p.has(e);
    }
    getEntitlement(e) {
        return f.get(e);
    }
    isEntitlementFetched(e) {
        return f.has(e);
    }
    isEntitlementFetching(e) {
        return m.has(e);
    }
    getPlayedAnimation() {
        return g;
    }
}
(a = 'ConsumablesStore'),
    (r = 'displayName') in (l = C)
        ? Object.defineProperty(l, r, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (l[r] = a),
    (t.Z = new C(o.Z, {
        CONSUMABLES_PRICE_FETCH_STARTED: (e) => {
            h.add(e.skuId);
        },
        CONSUMABLES_PRICE_FETCH_SUCCEEDED: (e) => {
            d.set(e.skuId, e.price), h.delete(e.skuId);
        },
        CONSUMABLES_PRICE_FETCH_FAILED: (e) => {
            h.delete(e.skuId), p.add(e.skuId);
        },
        CONSUMABLES_CLEAR_ERROR: (e) => {
            p.delete(e.skuId);
        },
        CONSUMABLES_ENTITLEMENT_FETCH_COMPLETED: (e) => {
            m.delete(e.skuId), f.set(e.skuId, e.entitlement);
        },
        SKU_PURCHASE_SUCCESS: (e) => {
            if (1 !== e.entitlements.length) return;
            let t = e.entitlements[0];
            if (t.sku_id === u.FX) f.set(e.skuId, c.Z.createFromServer(t));
        },
        PLAYED_HD_STREAMING_POTION_ANIMATION: (e) => {
            g = !0;
        },
        RESET_PLAYED_HD_STREAMING_POTION_ANIMATION: (e) => {
            g = !1;
        },
        CONSUMABLES_ENTITLEMENT_FETCH_FAILED: (e) => {
            p.add(e.skuId), m.delete(e.skuId);
        },
        CONSUMABLES_ENTITLEMENT_FETCH_STARTED: (e) => {
            m.add(e.skuId);
        }
    }));
