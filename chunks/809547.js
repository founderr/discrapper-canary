r.d(n, {
    M: function () {
        return i;
    }
});
var i,
    a,
    s = r(31775),
    o = r.n(s),
    l = r(288385),
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
let f = 20;
function _(e) {
    let { query: n, guildId: r, page: i, pageSize: a, categoryId: s, integrationType: o, minUserInstallCommandCount: u, excludeAppsWithCustomInstallUrl: c, excludeNonEmbeddedApps: d, excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: f, source: _ = l.F.APP_DIRECTORY } = e;
    return "query:'".concat(n, "' guildId:").concat(r, ' page:').concat(i, ' pageSize:').concat(a, ' categoryId:').concat(s, ' integrationType:').concat(o, ' minUserInstallCommandCount:').concat(u, ' excludeAppsWithCustomInstallUrl:').concat(c, ' excludeNonEmbeddedApps:').concat(d, ' excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand:').concat(f, ' source:').concat(_);
}
!(function (e) {
    (e[(e.FETCHING = 0)] = 'FETCHING'), (e[(e.FETCHED = 1)] = 'FETCHED'), (e[(e.ERROR = 2)] = 'ERROR');
})(i || (i = {}));
let h = new (o())({ max: f }),
    p = {};
function m(e) {
    let { query: n, guildId: r, page: i, pageSize: a, categoryId: s, integrationType: o, minUserInstallCommandCount: l, excludeAppsWithCustomInstallUrl: u, excludeNonEmbeddedApps: c, excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: d, source: f } = e,
        h = _({
            query: n,
            guildId: r,
            page: i,
            pageSize: a,
            categoryId: s,
            integrationType: o,
            minUserInstallCommandCount: l,
            excludeAppsWithCustomInstallUrl: u,
            excludeNonEmbeddedApps: c,
            excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: d,
            source: f
        });
    p = {
        ...p,
        [h]: 0
    };
}
function g(e) {
    let { query: n, guildId: r, page: i, pageSize: a, categoryId: s, result: o, integrationType: l, minUserInstallCommandCount: u, excludeAppsWithCustomInstallUrl: c, excludeNonEmbeddedApps: d, excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: f, source: m } = e,
        g = _({
            query: n,
            guildId: r,
            page: i,
            pageSize: a,
            categoryId: s,
            integrationType: l,
            minUserInstallCommandCount: u,
            excludeAppsWithCustomInstallUrl: c,
            excludeNonEmbeddedApps: d,
            excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: f,
            source: m
        });
    h.set(g, {
        lastFetchTimeMs: Date.now(),
        ...o
    }),
        (p = {
            ...p,
            [g]: 1
        });
}
function E(e) {
    let { query: n, guildId: r, page: i, pageSize: a, categoryId: s, integrationType: o, minUserInstallCommandCount: l, excludeAppsWithCustomInstallUrl: u, excludeNonEmbeddedApps: c, excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: d, source: f } = e,
        h = _({
            query: n,
            guildId: r,
            page: i,
            pageSize: a,
            categoryId: s,
            integrationType: o,
            minUserInstallCommandCount: l,
            excludeAppsWithCustomInstallUrl: u,
            excludeNonEmbeddedApps: c,
            excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: d,
            source: f
        });
    p = {
        ...p,
        [h]: 2
    };
}
class v extends (a = u.ZP.Store) {
    getSearchResults(e) {
        let { query: n, guildId: r, page: i, pageSize: a, categoryId: s, integrationType: o, minUserInstallCommandCount: l, excludeAppsWithCustomInstallUrl: u, excludeNonEmbeddedApps: c, excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: d, source: f } = e,
            p = _({
                query: n,
                guildId: r,
                page: i,
                pageSize: a,
                categoryId: s,
                integrationType: o,
                minUserInstallCommandCount: l,
                excludeAppsWithCustomInstallUrl: u,
                excludeNonEmbeddedApps: c,
                excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: d,
                source: f
            });
        return h.get(p);
    }
    getFetchState(e) {
        let { query: n, guildId: r, page: i, pageSize: a, categoryId: s, integrationType: o, minUserInstallCommandCount: l, excludeAppsWithCustomInstallUrl: u, excludeNonEmbeddedApps: c, excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: d, source: f } = e;
        return p[
            _({
                query: n,
                guildId: r,
                page: i,
                pageSize: a,
                categoryId: s,
                integrationType: o,
                minUserInstallCommandCount: l,
                excludeAppsWithCustomInstallUrl: u,
                excludeNonEmbeddedApps: c,
                excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: d,
                source: f
            })
        ];
    }
}
d(v, 'displayName', 'ApplicationDirectorySearchStore'),
    (n.Z = new v(c.Z, {
        APPLICATION_DIRECTORY_FETCH_SEARCH: m,
        APPLICATION_DIRECTORY_FETCH_SEARCH_SUCCESS: g,
        APPLICATION_DIRECTORY_FETCH_SEARCH_FAILURE: E
    }));
