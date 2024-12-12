let i;
var a,
    s = r(442837),
    o = r(570140);
function l(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let u = [],
    c = u,
    d = null,
    f = (e) => {
        var n, r;
        (c = null !== (n = e.analyticsLocations) && void 0 !== n ? n : u), (d = null !== (r = e.analyticsSource) && void 0 !== r ? r : null), (i = e.initialProductSkuId);
    },
    _ = (e) => {
        (c = u), (d = null);
    },
    h = (e) => {
        e.item.skuId === i && (i = void 0);
    };
class p extends (a = s.ZP.Store) {
    get analyticsLocations() {
        return c;
    }
    get analyticsSource() {
        return d;
    }
    get initialProductSkuId() {
        return i;
    }
    getAnalytics() {
        return {
            analyticsLocations: c,
            analyticsSource: d
        };
    }
}
l(p, 'displayName', 'CollectiblesShopStore'),
    (n.Z = new p(o.Z, {
        COLLECTIBLES_SHOP_OPEN: f,
        COLLECTIBLES_SHOP_CLOSE: _,
        COLLECTIBLES_PRODUCT_DETAILS_OPEN: h,
        LOGOUT: _
    }));
