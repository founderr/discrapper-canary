n.d(t, {
    M: function () {
        return o;
    }
});
var r,
    i,
    a,
    s,
    o,
    l,
    u = n(392711),
    c = n.n(u),
    d = n(442837),
    f = n(570140);
((r = o || (o = {}))[(r.FETCHING = 0)] = 'FETCHING'), (r[(r.FETCHED = 1)] = 'FETCHED'), (r[(r.ERROR = 2)] = 'ERROR');
let _ = {},
    p = {},
    h = {};
function m(e) {
    let { includesInactive: t } = e;
    return 'includes_inactive:'.concat(t);
}
class g extends (l = d.ZP.Store) {
    getLastFetchTimeMs(e) {
        let { includesInactive: t } = e;
        return h[m({ includesInactive: t })];
    }
    getFetchState(e) {
        let { includesInactive: t } = e;
        return p[m({ includesInactive: t })];
    }
    getCollections(e) {
        let { includesInactive: t } = e;
        return _[m({ includesInactive: t })];
    }
}
(s = void 0),
    (a = 'displayName') in (i = g)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s),
    (t.Z = new g(f.Z, {
        APPLICATION_DIRECTORY_FETCH_COLLECTIONS: function (e) {
            let { includesInactive: t } = e;
            p = {
                ...p,
                [m({ includesInactive: t })]: 0
            };
        },
        APPLICATION_DIRECTORY_FETCH_COLLECTIONS_SUCCESS: function (e) {
            var t;
            let { collections: n, includesInactive: r } = e,
                i = m({ includesInactive: r });
            let a =
                ((t = n.map((e) => {
                    var t;
                    return (e.application_directory_collection_items = ((t = e.application_directory_collection_items), c().sortBy(t, ['position', 'id']))), e;
                })),
                c().sortBy(t, ['position', 'id']));
            (_ = {
                ..._,
                [i]: a
            }),
                (p = {
                    ...p,
                    [i]: 1
                });
            let s = Date.now();
            h = {
                ...h,
                [i]: s
            };
        },
        APPLICATION_DIRECTORY_FETCH_COLLECTIONS_FAILURE: function (e) {
            let { includesInactive: t } = e;
            p = {
                ...p,
                [m({ includesInactive: t })]: 2
            };
        }
    }));
