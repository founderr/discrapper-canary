n.d(t, {
    M: function () {
        return r;
    }
});
var r,
    i,
    a = n(392711),
    o = n.n(a),
    s = n(442837),
    l = n(570140);
function u(e, t, n) {
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
    (e[(e.FETCHING = 0)] = 'FETCHING'), (e[(e.FETCHED = 1)] = 'FETCHED'), (e[(e.ERROR = 2)] = 'ERROR');
})(r || (r = {}));
let c = {},
    d = {},
    _ = {};
function E(e) {
    let { includesInactive: t } = e;
    return 'includes_inactive:'.concat(t);
}
function f(e) {
    let { includesInactive: t } = e;
    d = {
        ...d,
        [E({ includesInactive: t })]: 0
    };
}
function h(e) {
    return o().sortBy(e, ['position', 'id']);
}
function p(e) {
    return o().sortBy(e, ['position', 'id']);
}
function m(e) {
    let { collections: t, includesInactive: n } = e,
        r = E({ includesInactive: n }),
        i = h(t.map((e) => ((e.application_directory_collection_items = p(e.application_directory_collection_items)), e)));
    (c = {
        ...c,
        [r]: i
    }),
        (d = {
            ...d,
            [r]: 1
        });
    let a = Date.now();
    _ = {
        ..._,
        [r]: a
    };
}
function I(e) {
    let { includesInactive: t } = e;
    d = {
        ...d,
        [E({ includesInactive: t })]: 2
    };
}
class T extends (i = s.ZP.Store) {
    getLastFetchTimeMs(e) {
        let { includesInactive: t } = e;
        return _[E({ includesInactive: t })];
    }
    getFetchState(e) {
        let { includesInactive: t } = e;
        return d[E({ includesInactive: t })];
    }
    getCollections(e) {
        let { includesInactive: t } = e;
        return c[E({ includesInactive: t })];
    }
}
u(T, 'displayName', void 0),
    (t.Z = new T(l.Z, {
        APPLICATION_DIRECTORY_FETCH_COLLECTIONS: f,
        APPLICATION_DIRECTORY_FETCH_COLLECTIONS_SUCCESS: m,
        APPLICATION_DIRECTORY_FETCH_COLLECTIONS_FAILURE: I
    }));
