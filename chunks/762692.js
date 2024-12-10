n(653041), n(47120), n(733860);
var i = n(807034),
    r = n(837281),
    l = n.n(r),
    a = n(392711),
    o = n(544891),
    s = n(343817),
    c = n(570140),
    d = n(70956),
    u = n(900849),
    h = n(356164),
    m = n(726115),
    p = n(128449),
    g = n(981631);
let f = window.GLOBAL_ENV.ALGOLIA_KEY,
    _ = 'production' === window.GLOBAL_ENV.PROJECT_ENV ? 'prod_discoverable_guilds' : 'staging' === window.GLOBAL_ENV.PROJECT_ENV ? 'stg_discoverable_guilds' : 'dev_discoverable_guilds',
    E = {
        'auto_removed:': !1,
        approximate_presence_count: '> 0',
        approximate_member_count: '> 0'
    };
async function I(e, t) {
    let { categoryId: n, languageCode: i, offset: r, limit: l, withCounts: a } = t;
    c.Z.dispatch({
        type: 'GLOBAL_DISCOVERY_SERVERS_SEARCH_START',
        query: e,
        categoryId: n,
        languageCode: i
    });
    try {
        let t = await o.tn.get({
                url: g.ANM.GUILD_DISCOVERY_SEARCH,
                query: {
                    query: e,
                    category_id: n === p.Hk ? null : n,
                    offset: r,
                    limit: l,
                    language_code: i,
                    with_counts: a
                },
                oldFormErrors: !0,
                rejectWithError: !1
            }),
            s = t.body.guilds.map(m.Iv),
            u = t.body.total_count;
        if (a) {
            var d;
            let n = [];
            null === (d = t.body.categories) ||
                void 0 === d ||
                d.slice(0, 8).forEach((e) => {
                    let { id: t, count: i } = e;
                    n.push([Number(t), i]);
                }),
                c.Z.dispatch({
                    type: 'GLOBAL_DISCOVERY_SERVERS_SEARCH_COUNT_SUCCESS',
                    query: e,
                    categoryCounts: n
                });
        }
        c.Z.dispatch({
            type: 'GLOBAL_DISCOVERY_SERVERS_SEARCH_SUCCESS',
            query: e,
            categoryId: n,
            languageCode: i,
            guilds: s,
            total: u
        });
    } catch (r) {
        let t = new s.Hx(r);
        u.m9({
            categoryId: n,
            error: t,
            willRequestRetry: !1,
            isRequestRetry: !1
        }),
            a &&
                c.Z.dispatch({
                    type: 'GLOBAL_DISCOVERY_SERVERS_SEARCH_COUNT_SUCCESS',
                    query: e,
                    categoryCounts: []
                }),
            c.Z.dispatch({
                type: 'GLOBAL_DISCOVERY_SERVERS_SEARCH_FAILURE',
                query: e,
                categoryId: n,
                languageCode: i,
                error: r
            });
    }
}
async function C(e, t, n) {
    let { categoryId: i, languageCode: r, offset: l, length: a } = t,
        o = h.Z.getAlgoliaSearchIndex();
    if (null == o || h.Z.getIsBlocked(e)) return;
    c.Z.dispatch({
        type: 'GLOBAL_DISCOVERY_SERVERS_SEARCH_START',
        query: e,
        categoryId: i,
        languageCode: r
    });
    let g = Object.assign({}, E, t.filters),
        f = Object.keys(g).map((e) => ''.concat(e).concat(g[e]));
    i !== p.Hk && f.push('(primary_category_id='.concat(i, ' OR categories.id=').concat(i, ')'));
    let _ = f.join(' AND '),
        I = null != r ? r : (0, m.Xp)();
    try {
        let { hits: t, nbHits: n } = await o.search(e, {
                filters: _,
                optionalFilters: ['preferred_locale: '.concat(I)],
                length: a,
                offset: l,
                restrictSearchableAttributes: ['name', 'description', 'keywords', 'categories.name', 'categories.name_localizations.'.concat(I), 'primary_category.name', 'primary_category.name_localizations.'.concat(I), 'vanity_url_code']
            }),
            s = t.map((e) =>
                (0, m.Uv)({
                    ...e,
                    id: e.objectID
                })
            );
        c.Z.dispatch({
            type: 'GLOBAL_DISCOVERY_SERVERS_SEARCH_SUCCESS',
            query: e,
            categoryId: i,
            languageCode: r,
            guilds: s,
            total: n
        });
    } catch (m) {
        var v;
        let l = new s.Hx(m),
            a = null !== (v = null == n ? void 0 : n.isRetry) && void 0 !== v && v;
        m.body.retry_after > 0 && o === h.Z.getAlgoliaSearchIndex()
            ? (u.m9({
                  categoryId: i,
                  error: l,
                  willRequestRetry: !0,
                  isRequestRetry: a
              }),
              setTimeout(() => C(e, t, { isRetry: !0 }), m.body.retry_after * d.Z.Millis.SECOND))
            : (u.m9({
                  categoryId: i,
                  error: l,
                  willRequestRetry: !1,
                  isRequestRetry: a
              }),
              c.Z.dispatch({
                  type: 'GLOBAL_DISCOVERY_SERVERS_SEARCH_FAILURE',
                  query: e,
                  categoryId: i,
                  languageCode: r,
                  error: m
              }));
    }
}
async function v(e) {
    let { query: t, algoliaFilters: n, onComplete: i } = e,
        r = h.Z.getAlgoliaSearchIndex();
    if (null == r || h.Z.getIsBlocked(t)) return;
    let l = Object.assign({}, E, n),
        o = Object.keys(l).map((e) => ''.concat(e).concat(l[e]));
    try {
        var s;
        let { nbHits: e, facets: n } = await r.search(t, {
            filters: o.join(' AND '),
            facets: ['categories.id']
        });
        if (null == n) return;
        let i = null !== (s = n['categories.id']) && void 0 !== s ? s : {};
        delete i[p.o3];
        let l = (0, a.chain)(i)
            .entries()
            .map((e) => {
                let [t, n] = e;
                return [parseInt(t, 10), n];
            })
            .sort((e, t) => t[1] - e[1])
            .slice(0, 7)
            .value();
        l.unshift([p.Hk, e]),
            c.Z.dispatch({
                type: 'GLOBAL_DISCOVERY_SERVERS_SEARCH_COUNT_SUCCESS',
                query: t,
                categoryCounts: l
            });
    } catch (e) {
        c.Z.dispatch({
            type: 'GLOBAL_DISCOVERY_SERVERS_SEARCH_COUNT_FAILURE',
            query: t,
            error: e
        });
    } finally {
        null == i || i();
    }
}
t.Z = {
    handleBlockedSearchQuery: function (e) {
        c.Z.dispatch({
            type: 'GLOBAL_DISCOVERY_SERVERS_SEARCH_BLOCKED',
            query: e
        });
    },
    createAlgoliaIndex: function () {
        if (null == f) return;
        let e = l()('NKTZZ4AIZU', f, { responsesCache: (0, i.A)() }).initIndex(_);
        c.Z.dispatch({
            type: 'GLOBAL_DISCOVERY_SERVERS_SEARCH_INITIALIZED',
            algoliaSearchIndex: e
        });
    },
    fetchAlgoliaSearchResults: C,
    fetchAlgoliaSearchResultCounts: v,
    fetchSearchResults: I,
    clearAlgoliaSearchResults: function (e) {
        var t;
        c.Z.dispatch({
            type: 'GLOBAL_DISCOVERY_SERVERS_SEARCH_CLEAR',
            ignoreQueries: null !== (t = null == e ? void 0 : e.ignoreQueries) && void 0 !== t ? t : []
        });
    },
    resetSearchLayout: function () {
        c.Z.dispatch({ type: 'GLOBAL_DISCOVERY_SERVERS_SEARCH_LAYOUT_RESET' });
    }
};
