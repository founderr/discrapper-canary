n(47120);
var i,
    s,
    a,
    l,
    r = n(442837),
    o = n(570140),
    c = n(215023);
let u = new Map(),
    d = new Set(),
    h = new Set(),
    m = null;
class p extends (i = r.ZP.Store) {
    getPrice(e) {
        return u.get(e);
    }
    getFetching(e) {
        return d.has(e);
    }
    getErrored(e) {
        return h.has(e);
    }
    getEntitlement() {
        return m;
    }
}
(l = 'ConsumablesStore'),
    (a = 'displayName') in (s = p)
        ? Object.defineProperty(s, a, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (s[a] = l),
    (t.Z = new p(o.Z, {
        CONSUMABLES_PRICE_FETCH_STARTED: (e) => {
            d.add(e.skuId);
        },
        CONSUMABLES_PRICE_FETCH_SUCCEEDED: (e) => {
            u.set(e.skuId, e.price), d.delete(e.skuId);
        },
        CONSUMABLES_PRICE_FETCH_FAILED: (e) => {
            d.delete(e.skuId), h.add(e.skuId);
        },
        CONSUMABLES_CLEAR_ERROR: (e) => {
            h.delete(e.skuId);
        },
        SKU_PURCHASE_SUCCESS: (e) => {
            if (1 !== e.entitlements.length) return;
            let t = e.entitlements[0];
            if (t.sku_id === c.FX) m = t;
        }
    }));
