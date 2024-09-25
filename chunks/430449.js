var r,
    i,
    a = n(47120);
var o = n(392711),
    s = n.n(o),
    l = n(442837),
    u = n(570140);
function c(e, t, n) {
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
    (e[(e.NOT_FETCHED = 0)] = 'NOT_FETCHED'), (e[(e.FETCHING = 1)] = 'FETCHING'), (e[(e.FETCH_SUCCESS = 2)] = 'FETCH_SUCCESS');
})(r || (r = {}));
let d = {},
    _ = {};
function E(e) {
    let { applicationId: t } = e;
    d = {
        ...d,
        [t]: 1
    };
}
function f(e) {
    let { applicationId: t } = e;
    d = {
        ...d,
        [t]: 2
    };
}
function h(e) {
    let { applicationId: t, assets: n } = e;
    if (null != n) {
        var r;
        _[t] = {
            assets: null !== (r = s().keyBy(n, 'name')) && void 0 !== r ? r : {},
            lastUpdated: Date.now()
        };
    } else delete _[t];
}
function p(e) {
    let { assets: t } = e,
        n = { ...d };
    for (let e in t) {
        var r;
        let i = t[e];
        (n[e] = 2),
            (_[e] = {
                assets: null !== (r = s().keyBy(i, 'name')) && void 0 !== r ? r : {},
                lastUpdated: Date.now()
            });
    }
    d = n;
}
class m extends (i = l.ZP.Store) {
    getApplicationAssetFetchState(e) {
        var t;
        return null !== (t = d[e]) && void 0 !== t ? t : 0;
    }
    getFetchingIds() {
        return [
            ...Object.entries(d)
                .filter((e) => {
                    let [, t] = e;
                    return 1 === t;
                })
                .map((e) => {
                    let [t] = e;
                    return t;
                })
        ];
    }
    getApplicationAssets(e) {
        return _[e];
    }
}
c(m, 'displayName', 'ApplicationAssetsStore'),
    (t.Z = new m(u.Z, {
        APPLICATION_ASSETS_FETCH: E,
        APPLICATION_ASSETS_FETCH_SUCCESS: f,
        APPLICATION_ASSETS_UPDATE: h,
        EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS: p,
        DEVELOPER_ACTIVITY_SHELF_FETCH_SUCCESS: p
    }));
