s(47120);
var n,
    t,
    r,
    i,
    d = s(442837),
    l = s(570140);
let c = new Map(),
    o = new Set(),
    _ = new Set();
class E extends (n = d.ZP.Store) {
    getPrice(e) {
        return c.get(e);
    }
    getFetching(e) {
        return o.has(e);
    }
    getErrored(e) {
        return _.has(e);
    }
}
(i = 'ConsumablesStore'),
    (r = 'displayName') in (t = E)
        ? Object.defineProperty(t, r, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (t[r] = i),
    (a.Z = new E(l.Z, {
        CONSUMABLES_PRICE_FETCH_STARTED: (e) => {
            o.add(e.skuId);
        },
        CONSUMABLES_PRICE_FETCH_SUCCEEDED: (e) => {
            c.set(e.skuId, e.price), o.delete(e.skuId);
        },
        CONSUMABLES_PRICE_FETCH_FAILED: (e) => {
            o.delete(e.skuId), _.add(e.skuId);
        },
        CONSUMABLES_CLEAR_ERROR: (e) => {
            _.delete(e.skuId);
        }
    }));
