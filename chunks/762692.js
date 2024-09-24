n(653041), n(47120), n(733860);
var i = n(807034),
    a = n(837281),
    s = n.n(a),
    r = n(392711),
    l = n(664751),
    o = n(544891),
    c = n(343817),
    d = n(570140),
    u = n(70956),
    _ = n(900849),
    E = n(331114),
    h = n(356164),
    m = n(726115),
    I = n(981631),
    g = n(731455);
let p = window.GLOBAL_ENV.ALGOLIA_KEY,
    T = 'production' === window.GLOBAL_ENV.PROJECT_ENV ? 'prod_discoverable_guilds' : 'staging' === window.GLOBAL_ENV.PROJECT_ENV ? 'stg_discoverable_guilds' : 'dev_discoverable_guilds',
    f = {
        'auto_removed:': !1,
        approximate_presence_count: '> 0',
        approximate_member_count: '> 0'
    };
async function S(e) {
    return (
        await o.tn.get({
            url: I.ANM.GUILD_DISCOVERY_VALID_TERM,
            query: { term: e },
            oldFormErrors: !0
        })
    ).body.valid;
}
async function C(e, t, n) {
    let { categoryId: i = g.Hk, preferredLocale: a, offset: s, length: r } = t,
        l = h.Z.getAlgoliaSearchIndex();
    if (null == l) return;
    let o = (0, m.a1)({
        query: e,
        categoryId: t.categoryId
    });
    d.Z.dispatch({
        type: 'GLOBAL_DISCOVERY_SERVERS_SEARCH_START',
        id: o
    });
    let E = Object.assign({}, f, t.filters),
        I = Object.keys(E).map((e) => ''.concat(e).concat(E[e]));
    i !== g.Hk && I.push('(primary_category_id='.concat(i, ' OR categories.id=').concat(i, ')'));
    let p = I.join(' AND ');
    try {
        let { hits: t, nbHits: n } = await l.search(e, {
            filters: p,
            optionalFilters: ['preferred_locale: '.concat(a)],
            length: r,
            offset: s,
            restrictSearchableAttributes: ['name', 'description', 'keywords', 'categories.name', 'categories.name_localizations.'.concat(a), 'primary_category.name', 'primary_category.name_localizations.'.concat(a), 'vanity_url_code']
        });
        d.Z.dispatch({
            type: 'GLOBAL_DISCOVERY_SERVERS_SEARCH_SUCCESS',
            id: o,
            guilds: [
                ...t.map((e) => ({
                    ...e,
                    id: e.objectID
                }))
            ],
            total: n
        });
    } catch (r) {
        var T;
        let a = new c.Hx(r),
            s = null !== (T = null == n ? void 0 : n.isRetry) && void 0 !== T && T;
        r.body.retry_after > 0 && l === h.Z.getAlgoliaSearchIndex()
            ? (_.m9({
                  categoryId: i,
                  error: a,
                  willRequestRetry: !0,
                  isRequestRetry: s
              }),
              setTimeout(() => C(e, t, { isRetry: !0 }), r.body.retry_after * u.Z.Millis.SECOND))
            : (_.m9({
                  categoryId: i,
                  error: a,
                  willRequestRetry: !1,
                  isRequestRetry: s
              }),
              d.Z.dispatch({
                  type: 'GLOBAL_DISCOVERY_SERVERS_SEARCH_FAILURE',
                  id: o,
                  error: r
              }));
    }
}
async function N(e) {
    let { query: t, algoliaFilters: n, onSuccess: i } = e,
        a = h.Z.getAlgoliaSearchIndex();
    if (null == a) return;
    let s = (0, m.BC)({ query: t }),
        l = Object.assign({}, f, n),
        o = Object.keys(l).map((e) => ''.concat(e).concat(l[e]));
    try {
        var c;
        let { nbHits: e, facets: n } = await a.search(t, {
                filters: o.join(' AND '),
                facets: ['categories.id']
            }),
            l = await S(t);
        if (null == n || !l) {
            d.Z.dispatch({
                type: 'GLOBAL_DISCOVERY_SERVERS_SEARCH_COUNT_SUCCESS',
                id: s,
                categoryCounts: []
            });
            return;
        }
        let u = null !== (c = n['categories.id']) && void 0 !== c ? c : {};
        delete u[g.o3];
        let _ = (0, r.chain)(u)
            .entries()
            .map((e) => {
                let [t, n] = e;
                return [parseInt(t, 10), n];
            })
            .sort((e, t) => t[1] - e[1])
            .slice(0, 7)
            .value();
        _.unshift([g.Hk, e]),
            d.Z.dispatch({
                type: 'GLOBAL_DISCOVERY_SERVERS_SEARCH_COUNT_SUCCESS',
                id: s,
                categoryCounts: _
            }),
            null == i || i();
    } catch (e) {
        d.Z.dispatch({
            type: 'GLOBAL_DISCOVERY_SERVERS_SEARCH_COUNT_FAILURE',
            id: s,
            error: e
        });
    }
}
async function A(e) {
    let { categoryId: t } = e,
        n = (0, m.Io)({ categoryId: t }),
        i = h.Z.getLastFetchTimestamp(n);
    if ((0, m.Ew)(i)) {
        d.Z.dispatch({
            type: 'GLOBAL_DISCOVERY_SERVERS_SEARCH_START',
            id: n,
            reset: !0
        });
        try {
            let { guilds: e, total: i } = (
                await o.tn.get({
                    url: I.ANM.GUILD_DISCOVERY,
                    query: l.stringify({ categories: [t] }),
                    oldFormErrors: !0
                })
            ).body;
            d.Z.dispatch({
                type: 'GLOBAL_DISCOVERY_SERVERS_SEARCH_SUCCESS',
                id: n,
                guilds: e,
                total: i
            });
        } catch (e) {
            d.Z.dispatch({
                type: 'GLOBAL_DISCOVERY_SERVERS_SEARCH_FAILURE',
                id: n,
                error: e
            }),
                _.rC({ categoryId: t });
        }
    }
}
async function v() {
    let e = (0, m.sS)(),
        t = h.Z.getLastFetchTimestamp(e);
    if ((0, m.Ew)(t)) {
        d.Z.dispatch({
            type: 'GLOBAL_DISCOVERY_SERVERS_SEARCH_START',
            id: e,
            reset: !0
        });
        try {
            let { guilds: t, total: n } = (
                await o.tn.get({
                    url: I.ANM.GUILD_DISCOVERY,
                    query: l.stringify({
                        offset: 0,
                        limit: 30
                    }),
                    oldFormErrors: !0
                })
            ).body;
            d.Z.dispatch({
                type: 'GLOBAL_DISCOVERY_SERVERS_SEARCH_SUCCESS',
                id: e,
                guilds: t,
                total: n
            });
        } catch (t) {
            d.Z.dispatch({
                type: 'GLOBAL_DISCOVERY_SERVERS_SEARCH_FAILURE',
                id: e,
                error: t
            }),
                _.rC({ categoryId: g.Hk });
        }
    }
}
t.Z = {
    createAlgoliaIndex: function () {
        if (null == p) return;
        let e = s()('NKTZZ4AIZU', p, { responsesCache: (0, i.A)() }).initIndex(T);
        d.Z.dispatch({
            type: 'GLOBAL_DISCOVERY_SERVERS_SEARCH_INITIALIZED',
            algoliaSearchIndex: e
        });
    },
    fetchAlgoliaSearchResults: C,
    fetchAlgoliaSearchResultCounts: N,
    clearAlgoliaSearchResults: function (e) {
        let t = (0, m.BC)({ query: e }),
            n = E.Z.getCounts(t),
            i =
                null != n
                    ? n.map((t) => {
                          let [n] = t;
                          return (0, m.a1)({
                              categoryId: n,
                              query: e
                          });
                      })
                    : [];
        d.Z.dispatch({
            type: 'GLOBAL_DISCOVERY_SERVERS_SEARCH_COUNT_CLEAR',
            id: t
        }),
            d.Z.dispatch({
                type: 'GLOBAL_DISCOVERY_SERVERS_SEARCH_BULK_CLEAR',
                ids: i
            });
    },
    fetchFeaturedGuilds: v,
    fetchCategoryFeaturedGuilds: A,
    resetSearchLayout: function () {
        d.Z.dispatch({ type: 'GLOBAL_DISCOVERY_SERVERS_SEARCH_LAYOUT_RESET' });
    }
};
