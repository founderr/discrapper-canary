n(653041), n(47120), n(733860);
var r = n(807034),
    i = n(837281),
    a = n.n(i),
    s = n(392711),
    o = n(343817),
    l = n(570140),
    u = n(70956),
    c = n(900849),
    d = n(356164),
    f = n(726115),
    _ = n(731455);
let p = window.GLOBAL_ENV.ALGOLIA_KEY,
    h = 'production' === window.GLOBAL_ENV.PROJECT_ENV ? 'prod_discoverable_guilds' : 'staging' === window.GLOBAL_ENV.PROJECT_ENV ? 'stg_discoverable_guilds' : 'dev_discoverable_guilds',
    m = {
        'auto_removed:': !1,
        approximate_presence_count: '> 0',
        approximate_member_count: '> 0'
    };
async function g(e, t, n) {
    let { categoryId: r, languageCode: i, offset: a, length: s } = t,
        p = d.Z.getAlgoliaSearchIndex();
    if (null == p || d.Z.getIsBlocked(e)) return;
    l.Z.dispatch({
        type: 'GLOBAL_DISCOVERY_SERVERS_SEARCH_START',
        query: e,
        categoryId: r,
        languageCode: i
    });
    let h = Object.assign({}, m, t.filters),
        E = Object.keys(h).map((e) => ''.concat(e).concat(h[e]));
    r !== _.Hk && E.push('(primary_category_id='.concat(r, ' OR categories.id=').concat(r, ')'));
    let v = E.join(' AND '),
        b = null != i ? i : (0, f.Xp)();
    try {
        let { hits: t, nbHits: n } = await p.search(e, {
            filters: v,
            optionalFilters: ['preferred_locale: '.concat(b)],
            length: s,
            offset: a,
            restrictSearchableAttributes: ['name', 'description', 'keywords', 'categories.name', 'categories.name_localizations.'.concat(b), 'primary_category.name', 'primary_category.name_localizations.'.concat(b), 'vanity_url_code']
        });
        l.Z.dispatch({
            type: 'GLOBAL_DISCOVERY_SERVERS_SEARCH_SUCCESS',
            query: e,
            categoryId: r,
            languageCode: i,
            guilds: [
                ...t.map((e) => ({
                    ...e,
                    id: e.objectID
                }))
            ],
            total: n
        });
    } catch (f) {
        var I;
        let a = new o.Hx(f),
            s = null !== (I = null == n ? void 0 : n.isRetry) && void 0 !== I && I;
        f.body.retry_after > 0 && p === d.Z.getAlgoliaSearchIndex()
            ? (c.m9({
                  categoryId: r,
                  error: a,
                  willRequestRetry: !0,
                  isRequestRetry: s
              }),
              setTimeout(() => g(e, t, { isRetry: !0 }), f.body.retry_after * u.Z.Millis.SECOND))
            : (c.m9({
                  categoryId: r,
                  error: a,
                  willRequestRetry: !1,
                  isRequestRetry: s
              }),
              l.Z.dispatch({
                  type: 'GLOBAL_DISCOVERY_SERVERS_SEARCH_FAILURE',
                  query: e,
                  categoryId: r,
                  languageCode: i,
                  error: f
              }));
    }
}
async function E(e) {
    let { query: t, algoliaFilters: n, onComplete: r } = e,
        i = d.Z.getAlgoliaSearchIndex();
    if (null == i || d.Z.getIsBlocked(t)) return;
    let a = Object.assign({}, m, n),
        o = Object.keys(a).map((e) => ''.concat(e).concat(a[e]));
    try {
        var u;
        let { nbHits: e, facets: n } = await i.search(t, {
            filters: o.join(' AND '),
            facets: ['categories.id']
        });
        if (null == n) return;
        let r = null !== (u = n['categories.id']) && void 0 !== u ? u : {};
        delete r[_.o3];
        let a = (0, s.chain)(r)
            .entries()
            .map((e) => {
                let [t, n] = e;
                return [parseInt(t, 10), n];
            })
            .sort((e, t) => t[1] - e[1])
            .slice(0, 7)
            .value();
        a.unshift([_.Hk, e]),
            l.Z.dispatch({
                type: 'GLOBAL_DISCOVERY_SERVERS_SEARCH_COUNT_SUCCESS',
                query: t,
                categoryCounts: a
            });
    } catch (e) {
        l.Z.dispatch({
            type: 'GLOBAL_DISCOVERY_SERVERS_SEARCH_COUNT_FAILURE',
            query: t,
            error: e
        });
    } finally {
        null == r || r();
    }
}
t.Z = {
    handleBlockedSearchQuery: function (e) {
        l.Z.dispatch({
            type: 'GLOBAL_DISCOVERY_SERVERS_SEARCH_BLOCKED',
            query: e
        });
    },
    createAlgoliaIndex: function () {
        if (null == p) return;
        let e = a()('NKTZZ4AIZU', p, { responsesCache: (0, r.A)() }).initIndex(h);
        l.Z.dispatch({
            type: 'GLOBAL_DISCOVERY_SERVERS_SEARCH_INITIALIZED',
            algoliaSearchIndex: e
        });
    },
    fetchAlgoliaSearchResults: g,
    fetchAlgoliaSearchResultCounts: E,
    clearAlgoliaSearchResults: function (e) {
        var t;
        l.Z.dispatch({
            type: 'GLOBAL_DISCOVERY_SERVERS_SEARCH_CLEAR',
            ignoreQueries: null !== (t = null == e ? void 0 : e.ignoreQueries) && void 0 !== t ? t : []
        });
    },
    resetSearchLayout: function () {
        l.Z.dispatch({ type: 'GLOBAL_DISCOVERY_SERVERS_SEARCH_LAYOUT_RESET' });
    }
};
