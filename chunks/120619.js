n(47120);
var r,
    i,
    o,
    a,
    l = n(442837),
    s = n(570140),
    c = n(959546),
    u = n(215023);
let d = new Map(),
    f = new Set(),
    p = new Set(),
    h = new Set(),
    v = new Map(),
    _ = null;
class m extends (r = l.ZP.Store) {
    getPrice(e) {
        return d.get(e);
    }
    isFetchingPrice(e) {
        return f.has(e);
    }
    getErrored(e) {
        return h.has(e);
    }
    getEntitlement(e) {
        return v.get(e);
    }
    isEntitlementFetched(e) {
        return v.has(e);
    }
    isEntitlementFetching(e) {
        return p.has(e);
    }
    getPreviousGoLiveSettings() {
        return _;
    }
}
(a = 'ConsumablesStore'),
    (o = 'displayName') in (i = m)
        ? Object.defineProperty(i, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[o] = a),
    (t.Z = new m(s.Z, {
        CONSUMABLES_PRICE_FETCH_STARTED: (e) => {
            f.add(e.skuId);
        },
        CONSUMABLES_PRICE_FETCH_SUCCEEDED: (e) => {
            d.set(e.skuId, e.price), f.delete(e.skuId);
        },
        CONSUMABLES_PRICE_FETCH_FAILED: (e) => {
            f.delete(e.skuId), h.add(e.skuId);
        },
        CONSUMABLES_CLEAR_ERROR: (e) => {
            h.delete(e.skuId);
        },
        CONSUMABLES_ENTITLEMENT_FETCH_COMPLETED: (e) => {
            p.delete(e.skuId), v.set(e.skuId, e.entitlement);
        },
        SKU_PURCHASE_SUCCESS: (e) => {
            if (1 !== e.entitlements.length) return;
            let t = e.entitlements[0];
            if (t.sku_id === u.FX) v.set(e.skuId, c.Z.createFromServer(t));
        },
        CONSUMABLES_ENTITLEMENT_FETCH_FAILED: (e) => {
            h.add(e.skuId), p.delete(e.skuId);
        },
        CONSUMABLES_ENTITLEMENT_FETCH_STARTED: (e) => {
            p.add(e.skuId);
        },
        SET_PREVIOUS_GO_LIVE_SETTINGS: (e) => {
            _ = e.previousGoLiveSettings;
        },
        CLEAR_CONSUMED_ENTITLEMENT: (e) => {
            v.delete(e.skuId);
        }
    }));
