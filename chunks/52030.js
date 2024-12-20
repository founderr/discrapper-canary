let i, a, s;
var o,
    l = r(442837),
    u = r(570140);
function c(e, n, r) {
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
let d = [];
let f = {};
let _ = !1,
    h = d,
    p = (e) => {
        (_ = !0), (s = void 0), (f = e.options), (a = void 0);
    },
    m = (e) => {
        (h = e.shopHome.shopBlocks), (i = Date.now()), (_ = !1), (s = void 0), (a = void 0);
    },
    g = (e) => {
        let { error: n } = e;
        (h = d), (_ = !1), (s = n), (a = Date.now());
    },
    E = () => {
        (h = d), (f = {}), (s = void 0), (_ = !1), (i = void 0), (a = void 0);
    };
class v extends (o = l.ZP.Store) {
    get lastSuccessfulFetch() {
        return i;
    }
    get lastErrorTimestamp() {
        return a;
    }
    get lastFetchOptions() {
        return f;
    }
    get fetchShopHomeError() {
        return s;
    }
    get isFetchingShopHome() {
        return _;
    }
    get shopBlocks() {
        return h;
    }
}
c(v, 'displayName', 'CollectiblesShopHomesStore'),
    (n.Z = new v(u.Z, {
        COLLECTIBLES_SHOP_HOME_FETCH: p,
        COLLECTIBLES_SHOP_HOME_FETCH_SUCCESS: m,
        COLLECTIBLES_SHOP_HOME_FETCH_FAILURE: g,
        LOGOUT: E
    }));
