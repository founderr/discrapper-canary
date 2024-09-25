var r,
    i,
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
!(function (e) {
    (e.NOT_FETCHED = 'NOT_FETCHED'), (e.FETCHING = 'FETCHING'), (e.FETCHED = 'FETCHED');
})(r || (r = {}));
let l = {},
    u = 'NOT_FETCHED',
    c = () => {
        u = 'FETCHING';
    },
    d = (e) => {
        (l = e.marketings.marketingsBySurfaces), (u = 'FETCHED');
    },
    _ = () => {
        (l = {}), (u = 'NOT_FETCHED');
    };
class E extends (i = a.ZP.Store) {
    getMarketingBySurface(e) {
        return l[e];
    }
    get fetchState() {
        return u;
    }
}
s(E, 'displayName', 'CollectiblesMarketingsStore'),
    (t.Z = new E(o.Z, {
        COLLECTIBLES_MARKETING_FETCH: c,
        COLLECTIBLES_MARKETING_FETCH_SUCCESS: d,
        LOGOUT: _
    }));
