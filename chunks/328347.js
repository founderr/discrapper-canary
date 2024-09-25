let r;
var i,
    a = n(442837),
    o = n(570140);
function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let l = [],
    u = l,
    c = null,
    d = (e) => {
        var t, n;
        (u = null !== (t = e.analyticsLocations) && void 0 !== t ? t : l), (c = null !== (n = e.analyticsSource) && void 0 !== n ? n : null), (r = e.initialProductSkuId);
    },
    _ = (e) => {
        (u = l), (c = null);
    },
    E = (e) => {
        e.item.skuId === r && (r = void 0);
    };
class f extends (i = a.ZP.Store) {
    get analyticsLocations() {
        return u;
    }
    get analyticsSource() {
        return c;
    }
    get initialProductSkuId() {
        return r;
    }
    getAnalytics() {
        return {
            analyticsLocations: u,
            analyticsSource: c
        };
    }
}
s(f, 'displayName', 'CollectiblesShopStore'),
    (t.Z = new f(o.Z, {
        COLLECTIBLES_SHOP_OPEN: d,
        COLLECTIBLES_SHOP_CLOSE: _,
        COLLECTIBLES_PRODUCT_DETAILS_OPEN: E,
        LOGOUT: _
    }));
