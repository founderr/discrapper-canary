n(47120);
var i,
    o,
    r,
    l,
    s = n(442837),
    a = n(570140),
    u = n(959546),
    c = n(215023);
let d = new Map(),
    h = new Set(),
    f = new Set(),
    p = new Set(),
    m = new Map(),
    v = !1,
    g = null;
class E extends (i = s.ZP.Store) {
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
        return m.get(e);
    }
    isEntitlementFetched(e) {
        return m.has(e);
    }
    isEntitlementFetching(e) {
        return f.has(e);
    }
    getPlayedAnimation() {
        return v;
    }
    getPreviousGoLiveSettings() {
        return g;
    }
}
(l = 'ConsumablesStore'),
    (r = 'displayName') in (o = E)
        ? Object.defineProperty(o, r, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (o[r] = l),
    (t.Z = new E(a.Z, {
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
            f.delete(e.skuId), m.set(e.skuId, e.entitlement);
        },
        SKU_PURCHASE_SUCCESS: (e) => {
            if (1 !== e.entitlements.length) return;
            let t = e.entitlements[0];
            if (t.sku_id === c.FX) m.set(e.skuId, u.Z.createFromServer(t));
        },
        PLAYED_HD_STREAMING_POTION_ANIMATION: (e) => {
            v = !0;
        },
        RESET_PLAYED_HD_STREAMING_POTION_ANIMATION: (e) => {
            v = !1;
        },
        CONSUMABLES_ENTITLEMENT_FETCH_FAILED: (e) => {
            p.add(e.skuId), f.delete(e.skuId);
        },
        CONSUMABLES_ENTITLEMENT_FETCH_STARTED: (e) => {
            f.add(e.skuId);
        },
        SET_PREVIOUS_GO_LIVE_SETTINGS: (e) => {
            g = e.previousGoLiveSettings;
        }
    }));
