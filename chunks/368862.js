r.d(n, {
    M: function () {
        return i;
    }
});
var i,
    a,
    s = r(392711),
    o = r.n(s),
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
!(function (e) {
    (e[(e.FETCHING = 0)] = 'FETCHING'), (e[(e.FETCHED = 1)] = 'FETCHED'), (e[(e.ERROR = 2)] = 'ERROR');
})(i || (i = {}));
let d = {},
    f = {},
    _ = {};
function h(e) {
    let { includesInactive: n } = e;
    return 'includes_inactive:'.concat(n);
}
function p(e) {
    let { includesInactive: n } = e;
    f = {
        ...f,
        [h({ includesInactive: n })]: 0
    };
}
function m(e) {
    return o().sortBy(e, ['position', 'id']);
}
function g(e) {
    return o().sortBy(e, ['position', 'id']);
}
function E(e) {
    let { collections: n, includesInactive: r } = e,
        i = h({ includesInactive: r }),
        a = m(n.map((e) => ((e.application_directory_collection_items = g(e.application_directory_collection_items)), e)));
    (d = {
        ...d,
        [i]: a
    }),
        (f = {
            ...f,
            [i]: 1
        });
    let s = Date.now();
    _ = {
        ..._,
        [i]: s
    };
}
function v(e) {
    let { includesInactive: n } = e;
    f = {
        ...f,
        [h({ includesInactive: n })]: 2
    };
}
class I extends (a = l.ZP.Store) {
    getLastFetchTimeMs(e) {
        let { includesInactive: n } = e;
        return _[h({ includesInactive: n })];
    }
    getFetchState(e) {
        let { includesInactive: n } = e;
        return f[h({ includesInactive: n })];
    }
    getCollections(e) {
        let { includesInactive: n } = e;
        return d[h({ includesInactive: n })];
    }
}
c(I, 'displayName', void 0),
    (n.Z = new I(u.Z, {
        APPLICATION_DIRECTORY_FETCH_COLLECTIONS: p,
        APPLICATION_DIRECTORY_FETCH_COLLECTIONS_SUCCESS: E,
        APPLICATION_DIRECTORY_FETCH_COLLECTIONS_FAILURE: v
    }));
