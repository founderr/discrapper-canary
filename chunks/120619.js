n(47120);
var i,
    r,
    l,
    a,
    o = n(442837),
    s = n(570140),
    c = n(959546),
    u = n(215023);
let d = new Map(),
    m = new Set(),
    h = new Set(),
    f = new Set(),
    p = new Map(),
    _ = !1,
    g = null;
class E extends (i = o.ZP.Store) {
    getPrice(e) {
        return d.get(e);
    }
    isFetchingPrice(e) {
        return m.has(e);
    }
    getErrored(e) {
        return f.has(e);
    }
    getEntitlement(e) {
        return p.get(e);
    }
    isEntitlementFetched(e) {
        return p.has(e);
    }
    isEntitlementFetching(e) {
        return h.has(e);
    }
    getPlayedAnimation() {
        return _;
    }
    getPreviousGoLiveSettings() {
        return g;
    }
}
(a = 'ConsumablesStore'),
    (l = 'displayName') in (r = E)
        ? Object.defineProperty(r, l, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[l] = a),
    (t.Z = new E(s.Z, {
        CONSUMABLES_PRICE_FETCH_STARTED: (e) => {
            m.add(e.skuId);
        },
        CONSUMABLES_PRICE_FETCH_SUCCEEDED: (e) => {
            d.set(e.skuId, e.price), m.delete(e.skuId);
        },
        CONSUMABLES_PRICE_FETCH_FAILED: (e) => {
            m.delete(e.skuId), f.add(e.skuId);
        },
        CONSUMABLES_CLEAR_ERROR: (e) => {
            f.delete(e.skuId);
        },
        CONSUMABLES_ENTITLEMENT_FETCH_COMPLETED: (e) => {
            h.delete(e.skuId), p.set(e.skuId, e.entitlement);
        },
        SKU_PURCHASE_SUCCESS: (e) => {
            if (1 !== e.entitlements.length) return;
            let t = e.entitlements[0];
            if (t.sku_id === u.FX) p.set(e.skuId, c.Z.createFromServer(t));
        },
        PLAYED_HD_STREAMING_POTION_ANIMATION: (e) => {
            _ = !0;
        },
        RESET_PLAYED_HD_STREAMING_POTION_ANIMATION: (e) => {
            _ = !1;
        },
        CONSUMABLES_ENTITLEMENT_FETCH_FAILED: (e) => {
            f.add(e.skuId), h.delete(e.skuId);
        },
        CONSUMABLES_ENTITLEMENT_FETCH_STARTED: (e) => {
            h.add(e.skuId);
        },
        SET_PREVIOUS_GO_LIVE_SETTINGS: (e) => {
            g = e.previousGoLiveSettings;
        }
    }));
