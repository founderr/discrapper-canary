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
    u = n(31775),
    c = n.n(u),
    d = n(288385),
    _ = n(442837),
    E = n(570140);
function f(e) {
    let { query: t, guildId: n, page: r, pageSize: i, categoryId: a, integrationType: s, minUserInstallCommandCount: o, excludeAppsWithCustomInstallUrl: l, excludeNonEmbeddedApps: u, excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: c, source: _ = d.F.APP_DIRECTORY } = e;
    return "query:'".concat(t, "' guildId:").concat(n, ' page:').concat(r, ' pageSize:').concat(i, ' categoryId:').concat(a, ' integrationType:').concat(s, ' minUserInstallCommandCount:').concat(o, ' excludeAppsWithCustomInstallUrl:').concat(l, ' excludeNonEmbeddedApps:').concat(u, ' excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand:').concat(c, ' source:').concat(_);
}
((r = o || (o = {}))[(r.FETCHING = 0)] = 'FETCHING'), (r[(r.FETCHED = 1)] = 'FETCHED'), (r[(r.ERROR = 2)] = 'ERROR');
let h = new (c())({ max: 20 }),
    p = {};
class I extends (l = _.ZP.Store) {
    getSearchResults(e) {
        let { query: t, guildId: n, page: r, pageSize: i, categoryId: a, integrationType: s, minUserInstallCommandCount: o, excludeAppsWithCustomInstallUrl: l, excludeNonEmbeddedApps: u, excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: c, source: d } = e,
            _ = f({
                query: t,
                guildId: n,
                page: r,
                pageSize: i,
                categoryId: a,
                integrationType: s,
                minUserInstallCommandCount: o,
                excludeAppsWithCustomInstallUrl: l,
                excludeNonEmbeddedApps: u,
                excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: c,
                source: d
            });
        return h.get(_);
    }
    getFetchState(e) {
        let { query: t, guildId: n, page: r, pageSize: i, categoryId: a, integrationType: s, minUserInstallCommandCount: o, excludeAppsWithCustomInstallUrl: l, excludeNonEmbeddedApps: u, excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: c, source: d } = e;
        return p[
            f({
                query: t,
                guildId: n,
                page: r,
                pageSize: i,
                categoryId: a,
                integrationType: s,
                minUserInstallCommandCount: o,
                excludeAppsWithCustomInstallUrl: l,
                excludeNonEmbeddedApps: u,
                excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: c,
                source: d
            })
        ];
    }
}
(s = 'ApplicationDirectorySearchStore'),
    (a = 'displayName') in (i = I)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s),
    (t.Z = new I(E.Z, {
        APPLICATION_DIRECTORY_FETCH_SEARCH: function (e) {
            let { query: t, guildId: n, page: r, pageSize: i, categoryId: a, integrationType: s, minUserInstallCommandCount: o, excludeAppsWithCustomInstallUrl: l, excludeNonEmbeddedApps: u, excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: c, source: d } = e,
                _ = f({
                    query: t,
                    guildId: n,
                    page: r,
                    pageSize: i,
                    categoryId: a,
                    integrationType: s,
                    minUserInstallCommandCount: o,
                    excludeAppsWithCustomInstallUrl: l,
                    excludeNonEmbeddedApps: u,
                    excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: c,
                    source: d
                });
            p = {
                ...p,
                [_]: 0
            };
        },
        APPLICATION_DIRECTORY_FETCH_SEARCH_SUCCESS: function (e) {
            let { query: t, guildId: n, page: r, pageSize: i, categoryId: a, result: s, integrationType: o, minUserInstallCommandCount: l, excludeAppsWithCustomInstallUrl: u, excludeNonEmbeddedApps: c, excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: d, source: _ } = e,
                E = f({
                    query: t,
                    guildId: n,
                    page: r,
                    pageSize: i,
                    categoryId: a,
                    integrationType: o,
                    minUserInstallCommandCount: l,
                    excludeAppsWithCustomInstallUrl: u,
                    excludeNonEmbeddedApps: c,
                    excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: d,
                    source: _
                });
            h.set(E, {
                lastFetchTimeMs: Date.now(),
                ...s
            }),
                (p = {
                    ...p,
                    [E]: 1
                });
        },
        APPLICATION_DIRECTORY_FETCH_SEARCH_FAILURE: function (e) {
            let { query: t, guildId: n, page: r, pageSize: i, categoryId: a, integrationType: s, minUserInstallCommandCount: o, excludeAppsWithCustomInstallUrl: l, excludeNonEmbeddedApps: u, excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: c, source: d } = e,
                _ = f({
                    query: t,
                    guildId: n,
                    page: r,
                    pageSize: i,
                    categoryId: a,
                    integrationType: s,
                    minUserInstallCommandCount: o,
                    excludeAppsWithCustomInstallUrl: l,
                    excludeNonEmbeddedApps: u,
                    excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: c,
                    source: d
                });
            p = {
                ...p,
                [_]: 2
            };
        }
    }));
