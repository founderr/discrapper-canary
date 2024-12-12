var i,
    a,
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
!(function (e) {
    (e.NOT_FETCHED = 'NOT_FETCHED'), (e.FETCHING = 'FETCHING'), (e.FETCHED = 'FETCHED');
})(i || (i = {}));
let u = {},
    c = 'NOT_FETCHED',
    d = () => {
        c = 'FETCHING';
    },
    f = (e) => {
        (u = e.marketings.marketingsBySurfaces), (c = 'FETCHED');
    },
    _ = () => {
        (u = {}), (c = 'NOT_FETCHED');
    };
class h extends (a = s.ZP.Store) {
    getMarketingBySurface(e) {
        return u[e];
    }
    get fetchState() {
        return c;
    }
}
l(h, 'displayName', 'CollectiblesMarketingsStore'),
    (n.Z = new h(o.Z, {
        COLLECTIBLES_MARKETING_FETCH: d,
        COLLECTIBLES_MARKETING_FETCH_SUCCESS: f,
        LOGOUT: _
    }));
