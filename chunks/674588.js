r.d(n, {
    CP: function () {
        return A;
    },
    T4: function () {
        return N;
    },
    bG: function () {
        return R;
    },
    g5: function () {
        return O;
    },
    gZ: function () {
        return y;
    },
    i6: function () {
        return S;
    },
    yC: function () {
        return C;
    }
});
var i = r(47120);
var a = r(261470),
    s = r(288385),
    o = r(544891),
    l = r(570140),
    u = r(706454),
    c = r(264043),
    d = r(894653),
    f = r(368862),
    _ = r(809547),
    h = r(303383),
    p = r(973001),
    m = r(981631);
let g = 1000,
    E = 5000,
    v = 10,
    I = 86400000,
    T = 600000,
    b = new Map();
async function y(e) {
    var n;
    let r = Date.now(),
        i = null !== (n = b.get(e)) && void 0 !== n ? n : 0;
    if (c.Z.getApplicationFetchState(e) === c.M.FETCHING || c.Z.isInvalidApplication(e) || r < i + T) return;
    b.set(e, r),
        l.Z.dispatch({
            type: 'APPLICATION_DIRECTORY_FETCH_APPLICATION',
            applicationId: e
        });
    let s = new a.Z(g, E),
        u = (e, n) =>
            429 === e.status &&
            !!(s.fails < v) &&
            (s.fail(() => {
                n(void 0, u);
            }),
            !0);
    try {
        let n = (
            await o.tn.get({
                url: m.ANM.APPLICATION_DIRECTORY_EMBED_APPLICATION(e),
                backoff: s,
                retries: v,
                interceptResponse: u,
                rejectWithError: !1
            })
        ).body;
        l.Z.dispatch({
            type: 'APPLICATION_DIRECTORY_FETCH_APPLICATION_SUCCESS',
            application: n
        });
    } catch (n) {
        l.Z.dispatch({
            type: 'APPLICATION_DIRECTORY_FETCH_APPLICATION_FAILURE',
            applicationId: e,
            isInvalidApplication: !0
        });
    }
}
async function S(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        r = Date.now(),
        i = c.Z.getApplicationFetchState(e),
        a = c.Z.getApplicationLastFetchTime(e),
        { dontRefetchMs: s, noCache: d } = n,
        f = null != a && a + (null != s ? s : T) > r;
    if (i !== c.M.FETCHING && !f) {
        l.Z.dispatch({
            type: 'APPLICATION_DIRECTORY_FETCH_APPLICATION',
            applicationId: e
        });
        try {
            let n = await o.tn.get({
                url: m.ANM.APPLICATION_DIRECTORY_APPLICATION(e),
                query: {
                    locale: u.default.locale,
                    nocache: d
                },
                rejectWithError: !0
            });
            l.Z.dispatch({
                type: 'APPLICATION_DIRECTORY_FETCH_APPLICATION_SUCCESS',
                application: n.body
            });
        } catch (n) {
            l.Z.dispatch({
                type: 'APPLICATION_DIRECTORY_FETCH_APPLICATION_FAILURE',
                applicationId: e,
                isInvalidApplication: !0
            });
        }
    }
}
async function A() {
    let e = Date.now(),
        n = d.Z.getLastFetchTimeMs();
    if (null != n && n + T > e) return;
    let r = await o.tn.get({
        url: m.ANM.APPLICATION_DIRECTORY_CATEGORIES,
        query: { locale: u.default.locale },
        rejectWithError: !1
    });
    l.Z.dispatch({
        type: 'APPLICATION_DIRECTORY_FETCH_CATEGORIES_SUCCESS',
        categories: r.body
    });
}
async function N(e) {
    var n;
    let { applicationId: r, guildId: i, options: a } = e,
        { page: s } = null != a ? a : {},
        c = Date.now(),
        d = h.Z.getFetchState({
            applicationId: r,
            guildId: i
        }),
        { lastFetchTimeMs: f } =
            null !==
                (n = h.Z.getSimilarApplications({
                    applicationId: r,
                    guildId: i
                })) && void 0 !== n
                ? n
                : {};
    if (d !== h.M.FETCHING && (null == f || !(f + T > c))) {
        l.Z.dispatch({
            type: 'APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS',
            applicationId: r,
            guildId: i,
            page: s
        });
        try {
            let e = await o.tn.get({
                url: m.ANM.APPLICATION_DIRECTORY_SIMILAR(r),
                query: {
                    guild_id: i,
                    page: s,
                    locale: u.default.locale
                },
                rejectWithError: !0
            });
            l.Z.dispatch({
                type: 'APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS_SUCCESS',
                applicationId: r,
                guildId: i,
                similarApplications: e.body.applications,
                loadId: e.body.load_id,
                page: s,
                totalPages: e.body.num_pages
            });
        } catch (e) {
            l.Z.dispatch({
                type: 'APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS_FAILURE',
                applicationId: r,
                guildId: i,
                page: s
            });
        }
    }
}
async function C(e) {
    var n;
    let { query: r, guildId: i, options: a, onSuccessCallback: c } = e,
        { page: d, pageSize: f, categoryId: h, integrationType: p, minUserInstallCommandCount: g, excludeAppsWithCustomInstallUrl: E, excludeNonEmbeddedApps: v, excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: I, source: b = s.F.APP_DIRECTORY } = null != a ? a : {},
        y = Date.now(),
        S = _.Z.getFetchState({
            query: r,
            guildId: i,
            page: d,
            pageSize: f,
            categoryId: h,
            integrationType: p
        }),
        { lastFetchTimeMs: A } =
            null !==
                (n = _.Z.getSearchResults({
                    query: r,
                    guildId: i,
                    page: d,
                    pageSize: f,
                    categoryId: h,
                    integrationType: p
                })) && void 0 !== n
                ? n
                : {};
    if (S !== _.M.FETCHING && (null == A || !(A + T > y))) {
        l.Z.dispatch({
            type: 'APPLICATION_DIRECTORY_FETCH_SEARCH',
            query: r,
            guildId: i,
            page: d,
            pageSize: f,
            categoryId: h,
            integrationType: p,
            minUserInstallCommandCount: g,
            excludeAppsWithCustomInstallUrl: E,
            excludeNonEmbeddedApps: v,
            excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: I,
            source: b
        });
        try {
            let e = await o.tn.get({
                url: m.ANM.APPLICATION_DIRECTORY_SEARCH,
                query: {
                    query: r,
                    guild_id: i,
                    page: d,
                    page_size: f,
                    category_id: h,
                    locale: u.default.locale,
                    integration_type: p,
                    min_user_install_command_count: g,
                    exclude_apps_with_custom_install_url: E,
                    exclude_non_embedded_apps: v,
                    exclude_embedded_apps_without_primary_entry_point_app_command: I,
                    source: b
                },
                rejectWithError: !0
            });
            l.Z.dispatch({
                type: 'APPLICATION_DIRECTORY_FETCH_SEARCH_SUCCESS',
                query: r,
                guildId: i,
                page: d,
                pageSize: f,
                categoryId: h,
                integrationType: p,
                result: {
                    results: e.body.results,
                    countsByCategory: e.body.counts_by_category,
                    totalCount: e.body.result_count,
                    totalPages: e.body.num_pages,
                    type: e.body.type,
                    loadId: e.body.load_id
                },
                minUserInstallCommandCount: g,
                excludeAppsWithCustomInstallUrl: E,
                excludeNonEmbeddedApps: v,
                excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: I,
                source: b
            }),
                null == c || c(e.body.result_count);
        } catch (e) {
            l.Z.dispatch({
                type: 'APPLICATION_DIRECTORY_FETCH_SEARCH_FAILURE',
                query: r,
                guildId: i,
                page: d,
                pageSize: f,
                categoryId: h,
                integrationType: p,
                minUserInstallCommandCount: g,
                excludeAppsWithCustomInstallUrl: E,
                excludeNonEmbeddedApps: v,
                excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: I,
                source: b
            });
        }
    }
}
async function R() {
    let { includesInactive: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        n = Date.now(),
        r = f.Z.getFetchState({ includesInactive: e }),
        i = f.Z.getLastFetchTimeMs({ includesInactive: e });
    if (r !== f.M.FETCHING && (null == i || !(i + T > n))) {
        l.Z.dispatch({
            type: 'APPLICATION_DIRECTORY_FETCH_COLLECTIONS',
            includesInactive: e
        });
        try {
            let n = await o.tn.get({
                url: m.ANM.APPLICATION_DIRECTORY_COLLECTIONS,
                query: {
                    includes_inactive: e,
                    locale: u.default.locale
                },
                rejectWithError: !0
            });
            l.Z.dispatch({
                type: 'APPLICATION_DIRECTORY_FETCH_COLLECTIONS_SUCCESS',
                collections: n.body,
                includesInactive: e
            });
        } catch (n) {
            l.Z.dispatch({
                type: 'APPLICATION_DIRECTORY_FETCH_COLLECTIONS_FAILURE',
                includesInactive: e
            });
        }
    }
}
async function O() {
    let e = Date.now(),
        n = p.Z.getFetchState(),
        r = p.Z.getLastFetchTimeMs(),
        i = p.Z.getNextFetchRetryTimeMs();
    if (n !== p.M.FETCHING && (null == r || !(r + I > e)) && (null == i || !(e < i))) {
        l.Z.dispatch({ type: 'FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS' });
        try {
            let e = await o.tn.get({
                url: m.ANM.INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS,
                rejectWithError: !1
            });
            l.Z.dispatch({
                type: 'FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS_SUCCESS',
                guildIdToApplicationIds: e.body
            });
        } catch (n) {
            var a;
            let e = (null == n ? void 0 : n.status) === 429;
            l.Z.dispatch({
                type: 'FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS_FAILURE',
                retryAfterSeconds: e ? (null == n ? void 0 : null === (a = n.body) || void 0 === a ? void 0 : a.retry_after) : void 0
            });
        }
    }
}
