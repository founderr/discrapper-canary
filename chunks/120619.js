n(47120);
var i,
    s,
    a,
    l,
    r = n(442837),
    o = n(570140),
    c = n(959546),
    u = n(215023);
let d = new Map(),
    h = new Set(),
    m = new Set(),
    p = new Set(),
    _ = new Map();
class f extends (i = r.ZP.Store) {
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
        return _.get(e);
    }
    isEntitlementFetched(e) {
        return _.has(e);
    }
    isEntitlementFetching(e) {
        return m.has(e);
    }
}
(l = 'ConsumablesStore'),
    (a = 'displayName') in (s = f)
        ? Object.defineProperty(s, a, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (s[a] = l),
    (t.Z = new f(o.Z, {
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
            m.delete(e.skuId), _.set(e.skuId, e.entitlement);
        },
        SKU_PURCHASE_SUCCESS: (e) => {
            if (1 !== e.entitlements.length) return;
            let t = e.entitlements[0];
            if (t.sku_id === u.FX) _.set(e.skuId, c.Z.createFromServer(t));
        },
        CONSUMABLES_ENTITLEMENT_FETCH_FAILED: (e) => {
            p.add(e.skuId), m.delete(e.skuId);
        },
        CONSUMABLES_ENTITLEMENT_FETCH_STARTED: (e) => {
            m.add(e.skuId);
        }
    }));
