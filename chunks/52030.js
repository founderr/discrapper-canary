var i,
    a = r(442837),
    s = r(570140);
function o(e, n, r) {
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
let l = [],
    u = {
        lastSuccessfulFetch: void 0,
        lastErrorTimestamp: void 0,
        lastFetchOptions: {},
        fetchShopHomeError: void 0,
        isFetchingShopHome: !1,
        shopBlocks: l
    },
    c = (e) => {
        (u.isFetchingShopHome = !0), (u.fetchShopHomeError = void 0), (u.lastFetchOptions = e.options), (u.lastErrorTimestamp = void 0);
    },
    d = (e) => {
        (u.shopBlocks = e.shopHome.shopBlocks), (u.lastSuccessfulFetch = Date.now()), (u.isFetchingShopHome = !1), (u.fetchShopHomeError = void 0), (u.lastErrorTimestamp = void 0);
    },
    f = (e) => {
        let { error: n } = e;
        (u.shopBlocks = l), (u.isFetchingShopHome = !1), (u.fetchShopHomeError = n), (u.lastErrorTimestamp = Date.now());
    },
    _ = () => {
        (u.shopBlocks = l), (u.lastFetchOptions = {}), (u.fetchShopHomeError = void 0), (u.isFetchingShopHome = !1), (u.lastSuccessfulFetch = void 0), (u.lastErrorTimestamp = void 0);
    };
class h extends (i = a.ZP.Store) {
    get state() {
        return u;
    }
}
o(h, 'displayName', 'CollectiblesShopHomesStore'),
    new h(s.Z, {
        COLLECTIBLES_SHOP_HOME_FETCH: c,
        COLLECTIBLES_SHOP_HOME_FETCH_SUCCESS: d,
        COLLECTIBLES_SHOP_HOME_FETCH_FAILURE: f,
        LOGOUT: _
    });
