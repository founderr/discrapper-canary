n(47120);
var r,
    i,
    o,
    a,
    l = n(442837),
    s = n(570140),
    u = n(959546),
    c = n(215023);
let d = new Map(),
    f = new Set(),
    _ = new Set(),
    p = new Set(),
    m = new Map(),
    h = null;
class v extends (r = l.ZP.Store) {
    getPrice(e) {
        return d.get(e);
    }
    isFetchingPrice(e) {
        return f.has(e);
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
        return _.has(e);
    }
    getPreviousGoLiveSettings() {
        return h;
    }
}
(a = 'ConsumablesStore'),
    (o = 'displayName') in (i = v)
        ? Object.defineProperty(i, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[o] = a),
    (t.Z = new v(s.Z, {
        CONSUMABLES_PRICE_FETCH_STARTED: (e) => {
            f.add(e.skuId);
        },
        CONSUMABLES_PRICE_FETCH_SUCCEEDED: (e) => {
            d.set(e.skuId, e.price), f.delete(e.skuId);
        },
        CONSUMABLES_PRICE_FETCH_FAILED: (e) => {
            f.delete(e.skuId), p.add(e.skuId);
        },
        CONSUMABLES_CLEAR_ERROR: (e) => {
            p.delete(e.skuId);
        },
        CONSUMABLES_ENTITLEMENT_FETCH_COMPLETED: (e) => {
            _.delete(e.skuId), m.set(e.skuId, e.entitlement);
        },
        SKU_PURCHASE_SUCCESS: (e) => {
            if (1 !== e.entitlements.length) return;
            let t = e.entitlements[0];
            if (t.sku_id === c.FX) m.set(e.skuId, u.Z.createFromServer(t));
        },
        CONSUMABLES_ENTITLEMENT_FETCH_FAILED: (e) => {
            p.add(e.skuId), _.delete(e.skuId);
        },
        CONSUMABLES_ENTITLEMENT_FETCH_STARTED: (e) => {
            _.add(e.skuId);
        },
        SET_PREVIOUS_GO_LIVE_SETTINGS: (e) => {
            h = e.previousGoLiveSettings;
        },
        CLEAR_CONSUMED_ENTITLEMENT: (e) => {
            m.delete(e.skuId);
        }
    }));
