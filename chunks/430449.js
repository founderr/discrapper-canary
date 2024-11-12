n(47120);
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
((a = r || (r = {}))[(a.NOT_FETCHED = 0)] = 'NOT_FETCHED'), (a[(a.FETCHING = 1)] = 'FETCHING'), (a[(a.FETCH_SUCCESS = 2)] = 'FETCH_SUCCESS');
let _ = {},
    p = {};
function h(e) {
    let { assets: t } = e,
        n = { ..._ };
    for (let e in t) {
        var r;
        let i = t[e];
        (n[e] = 2),
            (p[e] = {
                assets: null !== (r = c().keyBy(i, 'name')) && void 0 !== r ? r : {},
                lastUpdated: Date.now()
            });
    }
    _ = n;
}
class m extends (i = d.ZP.Store) {
    getApplicationAssetFetchState(e) {
        var t;
        return null !== (t = _[e]) && void 0 !== t ? t : 0;
    }
    getFetchingIds() {
        return [
            ...Object.entries(_)
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
        return p[e];
    }
}
(l = 'ApplicationAssetsStore'),
    (o = 'displayName') in (s = m)
        ? Object.defineProperty(s, o, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (s[o] = l),
    (t.Z = new m(f.Z, {
        APPLICATION_ASSETS_FETCH: function (e) {
            let { applicationId: t } = e;
            _ = {
                ..._,
                [t]: 1
            };
        },
        APPLICATION_ASSETS_FETCH_SUCCESS: function (e) {
            let { applicationId: t } = e;
            _ = {
                ..._,
                [t]: 2
            };
        },
        APPLICATION_ASSETS_UPDATE: function (e) {
            let { applicationId: t, assets: n } = e;
            if (null != n) {
                var r;
                p[t] = {
                    assets: null !== (r = c().keyBy(n, 'name')) && void 0 !== r ? r : {},
                    lastUpdated: Date.now()
                };
            } else delete p[t];
        },
        EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS: h,
        DEVELOPER_ACTIVITY_SHELF_FETCH_SUCCESS: h
    }));
