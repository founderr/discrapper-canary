var i,
    a,
    s = r(47120);
var o = r(392711),
    l = r.n(o),
    u = r(442837),
    c = r(570140);
function d(e, n, r) {
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
    (e[(e.NOT_FETCHED = 0)] = 'NOT_FETCHED'), (e[(e.FETCHING = 1)] = 'FETCHING'), (e[(e.FETCH_SUCCESS = 2)] = 'FETCH_SUCCESS');
})(i || (i = {}));
let f = {},
    _ = {};
function h(e) {
    let { applicationId: n } = e;
    f = {
        ...f,
        [n]: 1
    };
}
function p(e) {
    let { applicationId: n } = e;
    f = {
        ...f,
        [n]: 2
    };
}
function m(e) {
    let { applicationId: n, assets: r } = e;
    if (null != r) {
        var i;
        _[n] = {
            assets: null !== (i = l().keyBy(r, 'name')) && void 0 !== i ? i : {},
            lastUpdated: Date.now()
        };
    } else delete _[n];
}
function g(e) {
    let { assets: n } = e,
        r = { ...f };
    for (let e in n) {
        var i;
        let a = n[e];
        (r[e] = 2),
            (_[e] = {
                assets: null !== (i = l().keyBy(a, 'name')) && void 0 !== i ? i : {},
                lastUpdated: Date.now()
            });
    }
    f = r;
}
class E extends (a = u.ZP.Store) {
    getApplicationAssetFetchState(e) {
        var n;
        return null !== (n = f[e]) && void 0 !== n ? n : 0;
    }
    getFetchingIds() {
        return [
            ...Object.entries(f)
                .filter((e) => {
                    let [, n] = e;
                    return 1 === n;
                })
                .map((e) => {
                    let [n] = e;
                    return n;
                })
        ];
    }
    getApplicationAssets(e) {
        return _[e];
    }
}
d(E, 'displayName', 'ApplicationAssetsStore'),
    (n.Z = new E(c.Z, {
        APPLICATION_ASSETS_FETCH: h,
        APPLICATION_ASSETS_FETCH_SUCCESS: p,
        APPLICATION_ASSETS_UPDATE: m,
        EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS: g,
        DEVELOPER_ACTIVITY_SHELF_FETCH_SUCCESS: g
    }));
