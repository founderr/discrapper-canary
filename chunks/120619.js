n(47120);
var r,
    i,
    o,
    a,
    s = n(442837),
    l = n(570140),
    c = n(959546),
    u = n(215023);
let d = new Map(),
    f = new Set(),
    p = new Set(),
    v = new Set(),
    _ = new Map(),
    h = !1,
    b = null;
class g extends (r = s.ZP.Store) {
    getPrice(e) {
        return d.get(e);
    }
    isFetchingPrice(e) {
        return f.has(e);
    }
    getErrored(e) {
        return v.has(e);
    }
    getEntitlement(e) {
        return _.get(e);
    }
    isEntitlementFetched(e) {
        return _.has(e);
    }
    isEntitlementFetching(e) {
        return p.has(e);
    }
    getPlayedAnimation() {
        return h;
    }
    getPreviousGoLiveSettings() {
        return b;
    }
}
(a = 'ConsumablesStore'),
    (o = 'displayName') in (i = g)
        ? Object.defineProperty(i, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[o] = a),
    (t.Z = new g(l.Z, {
        CONSUMABLES_PRICE_FETCH_STARTED: (e) => {
            f.add(e.skuId);
        },
        CONSUMABLES_PRICE_FETCH_SUCCEEDED: (e) => {
            d.set(e.skuId, e.price), f.delete(e.skuId);
        },
        CONSUMABLES_PRICE_FETCH_FAILED: (e) => {
            f.delete(e.skuId), v.add(e.skuId);
        },
        CONSUMABLES_CLEAR_ERROR: (e) => {
            v.delete(e.skuId);
        },
        CONSUMABLES_ENTITLEMENT_FETCH_COMPLETED: (e) => {
            p.delete(e.skuId), _.set(e.skuId, e.entitlement);
        },
        SKU_PURCHASE_SUCCESS: (e) => {
            if (1 !== e.entitlements.length) return;
            let t = e.entitlements[0];
            if (t.sku_id === u.FX) _.set(e.skuId, c.Z.createFromServer(t));
        },
        PLAYED_HD_STREAMING_POTION_ANIMATION: (e) => {
            h = !0;
        },
        RESET_PLAYED_HD_STREAMING_POTION_ANIMATION: (e) => {
            h = !1;
        },
        CONSUMABLES_ENTITLEMENT_FETCH_FAILED: (e) => {
            v.add(e.skuId), p.delete(e.skuId);
        },
        CONSUMABLES_ENTITLEMENT_FETCH_STARTED: (e) => {
            p.add(e.skuId);
        },
        SET_PREVIOUS_GO_LIVE_SETTINGS: (e) => {
            b = e.previousGoLiveSettings;
        },
        CLEAR_CONSUMED_ENTITLEMENT: (e) => {
            _.delete(e.skuId);
        }
    }));
