n.d(t, {
    M: function () {
        return r;
    }
});
var r,
    i,
    a = n(31775),
    o = n.n(a),
    s = n(288385),
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
let d = 20;
function _(e) {
    let { query: t, guildId: n, page: r, categoryId: i, integrationType: a, minUserInstallCommandCount: o, excludeAppsWithCustomInstallUrl: l, excludeNonEmbeddedApps: u, excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: c, source: d = s.F.APP_DIRECTORY } = e;
    return "query:'".concat(t, "' guildId:").concat(n, ' page:').concat(r, ' categoryId:').concat(i, ' integrationType:').concat(a, ' minUserInstallCommandCount:').concat(o, ' excludeAppsWithCustomInstallUrl:').concat(l, ' excludeNonEmbeddedApps:').concat(u, ' excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand:').concat(c, ' source:').concat(d);
}
!(function (e) {
    (e[(e.FETCHING = 0)] = 'FETCHING'), (e[(e.FETCHED = 1)] = 'FETCHED'), (e[(e.ERROR = 2)] = 'ERROR');
})(r || (r = {}));
let E = new (o())({ max: d }),
    f = {};
function h(e) {
    let { query: t, guildId: n, page: r, categoryId: i, integrationType: a, minUserInstallCommandCount: o, excludeAppsWithCustomInstallUrl: s, excludeNonEmbeddedApps: l, excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: u, source: c } = e,
        d = _({
            query: t,
            guildId: n,
            page: r,
            categoryId: i,
            integrationType: a,
            minUserInstallCommandCount: o,
            excludeAppsWithCustomInstallUrl: s,
            excludeNonEmbeddedApps: l,
            excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: u,
            source: c
        });
    f = {
        ...f,
        [d]: 0
    };
}
function p(e) {
    let { query: t, guildId: n, page: r, categoryId: i, result: a, integrationType: o, minUserInstallCommandCount: s, excludeAppsWithCustomInstallUrl: l, excludeNonEmbeddedApps: u, excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: c, source: d } = e,
        h = _({
            query: t,
            guildId: n,
            page: r,
            categoryId: i,
            integrationType: o,
            minUserInstallCommandCount: s,
            excludeAppsWithCustomInstallUrl: l,
            excludeNonEmbeddedApps: u,
            excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: c,
            source: d
        });
    E.set(h, {
        lastFetchTimeMs: Date.now(),
        ...a
    }),
        (f = {
            ...f,
            [h]: 1
        });
}
function m(e) {
    let { query: t, guildId: n, page: r, categoryId: i, integrationType: a, minUserInstallCommandCount: o, excludeAppsWithCustomInstallUrl: s, excludeNonEmbeddedApps: l, excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: u, source: c } = e,
        d = _({
            query: t,
            guildId: n,
            page: r,
            categoryId: i,
            integrationType: a,
            minUserInstallCommandCount: o,
            excludeAppsWithCustomInstallUrl: s,
            excludeNonEmbeddedApps: l,
            excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: u,
            source: c
        });
    f = {
        ...f,
        [d]: 2
    };
}
class I extends (i = l.ZP.Store) {
    getSearchResults(e) {
        let { query: t, guildId: n, page: r, categoryId: i, integrationType: a, minUserInstallCommandCount: o, excludeAppsWithCustomInstallUrl: s, excludeNonEmbeddedApps: l, excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: u, source: c } = e,
            d = _({
                query: t,
                guildId: n,
                page: r,
                categoryId: i,
                integrationType: a,
                minUserInstallCommandCount: o,
                excludeAppsWithCustomInstallUrl: s,
                excludeNonEmbeddedApps: l,
                excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: u,
                source: c
            });
        return E.get(d);
    }
    getFetchState(e) {
        let { query: t, guildId: n, page: r, categoryId: i, integrationType: a, minUserInstallCommandCount: o, excludeAppsWithCustomInstallUrl: s, excludeNonEmbeddedApps: l, excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: u, source: c } = e;
        return f[
            _({
                query: t,
                guildId: n,
                page: r,
                categoryId: i,
                integrationType: a,
                minUserInstallCommandCount: o,
                excludeAppsWithCustomInstallUrl: s,
                excludeNonEmbeddedApps: l,
                excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: u,
                source: c
            })
        ];
    }
}
c(I, 'displayName', 'ApplicationDirectorySearchStore'),
    (t.Z = new I(u.Z, {
        APPLICATION_DIRECTORY_FETCH_SEARCH: h,
        APPLICATION_DIRECTORY_FETCH_SEARCH_SUCCESS: p,
        APPLICATION_DIRECTORY_FETCH_SEARCH_FAILURE: m
    }));
