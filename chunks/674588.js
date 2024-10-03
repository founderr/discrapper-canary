n.d(t, {
    CP: function () {
        return N;
    },
    T4: function () {
        return O;
    },
    bG: function () {
        return C;
    },
    g5: function () {
        return y;
    },
    gZ: function () {
        return A;
    },
    i6: function () {
        return v;
    },
    yC: function () {
        return R;
    }
});
var r = n(47120);
var i = n(261470),
    a = n(288385),
    o = n(544891),
    s = n(570140),
    l = n(706454),
    u = n(264043),
    c = n(894653),
    d = n(368862),
    _ = n(809547),
    E = n(303383),
    f = n(973001),
    h = n(981631);
let p = 1000,
    m = 5000,
    I = 10,
    T = 86400000,
    g = 600000,
    S = new Map();
async function A(e) {
    var t;
    let n = Date.now(),
        r = null !== (t = S.get(e)) && void 0 !== t ? t : 0;
    if (u.Z.getApplicationFetchState(e) === u.M.FETCHING || u.Z.isInvalidApplication(e) || n < r + g) return;
    S.set(e, n),
        s.Z.dispatch({
            type: 'APPLICATION_DIRECTORY_FETCH_APPLICATION',
            applicationId: e
        });
    let a = new i.Z(p, m),
        l = (e, t) =>
            429 === e.status &&
            !!(a.fails < I) &&
            (a.fail(() => {
                t(void 0, l);
            }),
            !0);
    try {
        let t = (
            await o.tn.get({
                url: h.ANM.APPLICATION_DIRECTORY_EMBED_APPLICATION(e),
                backoff: a,
                retries: I,
                interceptResponse: l
            })
        ).body;
        s.Z.dispatch({
            type: 'APPLICATION_DIRECTORY_FETCH_APPLICATION_SUCCESS',
            application: t
        });
    } catch (t) {
        s.Z.dispatch({
            type: 'APPLICATION_DIRECTORY_FETCH_APPLICATION_FAILURE',
            applicationId: e,
            isInvalidApplication: !0
        });
    }
}
async function v(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = Date.now(),
        r = u.Z.getApplicationFetchState(e),
        i = u.Z.getApplicationLastFetchTime(e),
        { dontRefetchMs: a, noCache: c } = t,
        d = null != i && i + (null != a ? a : g) > n;
    if (r !== u.M.FETCHING && !d) {
        s.Z.dispatch({
            type: 'APPLICATION_DIRECTORY_FETCH_APPLICATION',
            applicationId: e
        });
        try {
            let t = await o.tn.get({
                url: h.ANM.APPLICATION_DIRECTORY_APPLICATION(e),
                query: {
                    locale: l.default.locale,
                    nocache: c
                }
            });
            s.Z.dispatch({
                type: 'APPLICATION_DIRECTORY_FETCH_APPLICATION_SUCCESS',
                application: t.body
            });
        } catch (t) {
            s.Z.dispatch({
                type: 'APPLICATION_DIRECTORY_FETCH_APPLICATION_FAILURE',
                applicationId: e,
                isInvalidApplication: !0
            });
        }
    }
}
async function N() {
    let e = Date.now(),
        t = c.Z.getLastFetchTimeMs();
    if (null != t && t + g > e) return;
    let n = await o.tn.get({
        url: h.ANM.APPLICATION_DIRECTORY_CATEGORIES,
        query: { locale: l.default.locale }
    });
    s.Z.dispatch({
        type: 'APPLICATION_DIRECTORY_FETCH_CATEGORIES_SUCCESS',
        categories: n.body
    });
}
async function O(e) {
    var t;
    let { applicationId: n, guildId: r, options: i } = e,
        { page: a } = null != i ? i : {},
        u = Date.now(),
        c = E.Z.getFetchState({
            applicationId: n,
            guildId: r
        }),
        { lastFetchTimeMs: d } =
            null !==
                (t = E.Z.getSimilarApplications({
                    applicationId: n,
                    guildId: r
                })) && void 0 !== t
                ? t
                : {};
    if (c !== E.M.FETCHING && (null == d || !(d + g > u))) {
        s.Z.dispatch({
            type: 'APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS',
            applicationId: n,
            guildId: r,
            page: a
        });
        try {
            let e = await o.tn.get({
                url: h.ANM.APPLICATION_DIRECTORY_SIMILAR(n),
                query: {
                    guild_id: r,
                    page: a,
                    locale: l.default.locale
                }
            });
            s.Z.dispatch({
                type: 'APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS_SUCCESS',
                applicationId: n,
                guildId: r,
                similarApplications: e.body.applications,
                loadId: e.body.load_id,
                page: a,
                totalPages: e.body.num_pages
            });
        } catch (e) {
            s.Z.dispatch({
                type: 'APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS_FAILURE',
                applicationId: n,
                guildId: r,
                page: a
            });
        }
    }
}
async function R(e) {
    var t;
    let { query: n, guildId: r, options: i, onSuccessCallback: u } = e,
        { page: c, categoryId: d, integrationType: E, minUserInstallCommandCount: f, excludeAppsWithCustomInstallUrl: p, excludeNonEmbeddedApps: m, excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: I, source: T = a.F.APP_DIRECTORY } = null != i ? i : {},
        S = Date.now(),
        A = _.Z.getFetchState({
            query: n,
            guildId: r,
            page: c,
            categoryId: d,
            integrationType: E
        }),
        { lastFetchTimeMs: v } =
            null !==
                (t = _.Z.getSearchResults({
                    query: n,
                    guildId: r,
                    page: c,
                    categoryId: d,
                    integrationType: E
                })) && void 0 !== t
                ? t
                : {};
    if (A !== _.M.FETCHING && (null == v || !(v + g > S))) {
        s.Z.dispatch({
            type: 'APPLICATION_DIRECTORY_FETCH_SEARCH',
            query: n,
            guildId: r,
            page: c,
            categoryId: d,
            integrationType: E,
            minUserInstallCommandCount: f,
            excludeAppsWithCustomInstallUrl: p,
            excludeNonEmbeddedApps: m,
            excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: I,
            source: T
        });
        try {
            let e = await o.tn.get({
                url: h.ANM.APPLICATION_DIRECTORY_SEARCH,
                query: {
                    query: n,
                    guild_id: r,
                    page: c,
                    category_id: d,
                    locale: l.default.locale,
                    integration_type: E,
                    min_user_install_command_count: f,
                    exclude_apps_with_custom_install_url: p,
                    exclude_non_embedded_apps: m,
                    exclude_embedded_apps_without_primary_entry_point_app_command: I,
                    source: T
                }
            });
            s.Z.dispatch({
                type: 'APPLICATION_DIRECTORY_FETCH_SEARCH_SUCCESS',
                query: n,
                guildId: r,
                page: c,
                categoryId: d,
                integrationType: E,
                result: {
                    results: e.body.results,
                    countsByCategory: e.body.counts_by_category,
                    totalCount: e.body.result_count,
                    totalPages: e.body.num_pages,
                    type: e.body.type,
                    loadId: e.body.load_id
                },
                minUserInstallCommandCount: f,
                excludeAppsWithCustomInstallUrl: p,
                excludeNonEmbeddedApps: m,
                excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: I,
                source: T
            }),
                null == u || u(e.body.result_count);
        } catch (e) {
            s.Z.dispatch({
                type: 'APPLICATION_DIRECTORY_FETCH_SEARCH_FAILURE',
                query: n,
                guildId: r,
                page: c,
                categoryId: d,
                integrationType: E,
                minUserInstallCommandCount: f,
                excludeAppsWithCustomInstallUrl: p,
                excludeNonEmbeddedApps: m,
                excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: I,
                source: T
            });
        }
    }
}
async function C() {
    let { includesInactive: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = Date.now(),
        n = d.Z.getFetchState({ includesInactive: e }),
        r = d.Z.getLastFetchTimeMs({ includesInactive: e });
    if (n !== d.M.FETCHING && (null == r || !(r + g > t))) {
        s.Z.dispatch({
            type: 'APPLICATION_DIRECTORY_FETCH_COLLECTIONS',
            includesInactive: e
        });
        try {
            let t = await o.tn.get({
                url: h.ANM.APPLICATION_DIRECTORY_COLLECTIONS,
                query: {
                    includes_inactive: e,
                    locale: l.default.locale
                }
            });
            s.Z.dispatch({
                type: 'APPLICATION_DIRECTORY_FETCH_COLLECTIONS_SUCCESS',
                collections: t.body,
                includesInactive: e
            });
        } catch (t) {
            s.Z.dispatch({
                type: 'APPLICATION_DIRECTORY_FETCH_COLLECTIONS_FAILURE',
                includesInactive: e
            });
        }
    }
}
async function y() {
    let e = Date.now(),
        t = f.Z.getFetchState(),
        n = f.Z.getLastFetchTimeMs(),
        r = f.Z.getNextFetchRetryTimeMs();
    if (t !== f.M.FETCHING && (null == n || !(n + T > e)) && (null == r || !(e < r))) {
        s.Z.dispatch({ type: 'FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS' });
        try {
            let e = await o.tn.get({ url: h.ANM.INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS });
            s.Z.dispatch({
                type: 'FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS_SUCCESS',
                guildIdToApplicationIds: e.body
            });
        } catch (t) {
            var i;
            let e = (null == t ? void 0 : t.status) === 429;
            s.Z.dispatch({
                type: 'FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS_FAILURE',
                retryAfterSeconds: e ? (null == t ? void 0 : null === (i = t.body) || void 0 === i ? void 0 : i.retry_after) : void 0
            });
        }
    }
}
