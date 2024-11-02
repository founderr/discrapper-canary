var r,
    i,
    a,
    s,
    o,
    l,
    u = n(442837),
    c = n(570140);
((r = o || (o = {})).NOT_FETCHED = 'NOT_FETCHED'), (r.FETCHING = 'FETCHING'), (r.FETCHED = 'FETCHED');
let d = {},
    f = 'NOT_FETCHED';
class _ extends (l = u.ZP.Store) {
    getMarketingBySurface(e) {
        return d[e];
    }
    get fetchState() {
        return f;
    }
}
(s = 'CollectiblesMarketingsStore'),
    (a = 'displayName') in (i = _)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s),
    (t.Z = new _(c.Z, {
        COLLECTIBLES_MARKETING_FETCH: () => {
            f = 'FETCHING';
        },
        COLLECTIBLES_MARKETING_FETCH_SUCCESS: (e) => {
            (d = e.marketings.marketingsBySurfaces), (f = 'FETCHED');
        },
        LOGOUT: () => {
            (d = {}), (f = 'NOT_FETCHED');
        }
    }));
