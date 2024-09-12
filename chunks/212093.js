n.d(t, {
    $z: function () {
        return N;
    },
    AQ: function () {
        return R;
    },
    G7: function () {
        return g;
    },
    K5: function () {
        return A;
    },
    Ue: function () {
        return S;
    },
    bR: function () {
        return function e(t, n) {
            let r = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                { categoryId: i = p.Hk, preferredLocale: a, offset: _, length: I, tag: m } = n,
                S = d.ZP.getSearchIndex();
            if (null == S) return;
            r &&
                !(function (e) {
                    let { query: t, preferredLocale: n, offset: r, limit: i, categoryId: a, tag: o } = e,
                        l = (0, c.s1)(),
                        u = s.stringify({
                            query: t,
                            offset: r,
                            limit: i,
                            preferredLocale: n,
                            categoryId: a,
                            tag: o
                        }),
                        d = l.location.search;
                    (!(null != d && d.length > 0 && d.startsWith('?')) || (d.startsWith('?') && d.split('?')[1] !== u)) && (0, c.uL)(h.Z5c.GUILD_DISCOVERY, { search: u });
                })({
                    query: t,
                    preferredLocale: a,
                    offset: _,
                    limit: I,
                    categoryId: i,
                    tag: m
                }),
                u.Z.dispatch({
                    type: 'GUILD_DISCOVERY_SEARCH_FETCH_START',
                    section: h.Lcj.SEARCH,
                    query: t,
                    categoryId: i
                });
            let g = Object.assign({}, T, n.filters),
                A = Object.keys(g).map((e) => ''.concat(e).concat(g[e]));
            i !== p.Hk && A.push('(primary_category_id='.concat(i, ' OR categories.id=').concat(i, ')'));
            let N = A.join(' AND ');
            try {
                let s = S.search(t, {
                        filters: N,
                        optionalFilters: ['preferred_locale: '.concat(a)],
                        length: I,
                        offset: _,
                        restrictSearchableAttributes: ['name', 'description', 'keywords', 'categories.name', 'categories.name_localizations.'.concat(a), 'primary_category.name', 'primary_category.name_localizations.'.concat(a), 'vanity_url_code']
                    }),
                    c = o.tn.get({
                        url: h.ANM.GUILD_DISCOVERY_VALID_TERM,
                        query: { term: t },
                        oldFormErrors: !0
                    });
                Promise.all([s, c])
                    .then((e) => {
                        let [
                            { hits: n, nbHits: r },
                            {
                                body: { valid: a }
                            }
                        ] = e;
                        u.Z.dispatch({
                            type: 'GUILD_DISCOVERY_SEARCH_FETCH_SUCCESS',
                            section: h.Lcj.SEARCH,
                            query: t,
                            categoryId: i,
                            guilds: a
                                ? [
                                      ...n.map((e) => ({
                                          ...e,
                                          id: e.objectID
                                      }))
                                  ]
                                : [],
                            offset: _,
                            limit: I,
                            total: a ? Math.min(r, p.lA) : 0
                        });
                    })
                    .catch((a) => {
                        if (a.body.retry_after > 0 && S === d.ZP.getSearchIndex())
                            setTimeout(() => {
                                e(t, n, r);
                            }, a.body.retry_after * E.Z.Millis.SECOND);
                        else {
                            let e = new l.Hx(a);
                            f.m9({
                                categoryId: i,
                                statusCode: e.code
                            }),
                                u.Z.dispatch({
                                    type: 'GUILD_DISCOVERY_SEARCH_FETCH_FAILURE',
                                    section: h.Lcj.SEARCH,
                                    categoryId: i,
                                    query: t
                                });
                        }
                    });
            } catch (n) {
                let e = new l.Hx(n);
                f.m9({
                    categoryId: i,
                    statusCode: e.code
                }),
                    u.Z.dispatch({
                        type: 'GUILD_DISCOVERY_SEARCH_FETCH_FAILURE',
                        section: h.Lcj.SEARCH,
                        categoryId: i,
                        query: t
                    });
            }
        };
    },
    gk: function () {
        return O;
    },
    uY: function () {
        return v;
    }
}),
    n(653041),
    n(47120);
var r = n(807034),
    i = n(837281),
    a = n.n(i),
    s = n(664751),
    o = n(544891),
    l = n(343817),
    u = n(570140),
    c = n(703656),
    d = n(683301),
    _ = n(230307),
    E = n(70956),
    f = n(900849),
    h = n(981631),
    p = n(731455);
let I = window.GLOBAL_ENV.ALGOLIA_KEY,
    m = 'production' === window.GLOBAL_ENV.PROJECT_ENV ? 'prod_discoverable_guilds' : 'staging' === window.GLOBAL_ENV.PROJECT_ENV ? 'stg_discoverable_guilds' : 'dev_discoverable_guilds',
    T = {
        'auto_removed:': !1,
        approximate_presence_count: '> 0',
        approximate_member_count: '> 0'
    };
function S() {
    if (null == I) return;
    let e = a()('NKTZZ4AIZU', I, { responsesCache: (0, r.A)() }).initIndex(m);
    u.Z.wait(() =>
        u.Z.dispatch({
            type: 'GUILD_DISCOVERY_SEARCH_INIT',
            index: e
        })
    );
}
function g(e, t) {
    let n = d.ZP.getSearchIndex();
    if (null == n) return;
    let r = Object.assign({}, T, t),
        i = Object.keys(r).map((e) => ''.concat(e).concat(r[e]));
    try {
        let t = n.search(e, {
                filters: i.join(' AND '),
                facets: ['categories.id']
            }),
            r = o.tn.get({
                url: h.ANM.GUILD_DISCOVERY_VALID_TERM,
                query: { term: e },
                oldFormErrors: !0
            });
        Promise.all([t, r]).then((t) => {
            let [
                { nbHits: n, facets: r },
                {
                    body: { valid: i }
                }
            ] = t;
            u.Z.dispatch({
                type: 'GUILD_DISCOVERY_SEARCH_UPDATE_COUNTS',
                query: e,
                nbHits: i ? n : 0,
                facets: i ? r : void 0
            });
        });
    } catch (t) {
        u.Z.dispatch({
            type: 'GUILD_DISCOVERY_SEARCH_COUNTS_FAIL',
            query: e
        });
    }
}
async function A(e) {
    u.Z.dispatch({
        type: 'GUILD_DISCOVERY_POPULAR_FETCH_START',
        categoryId: e
    });
    try {
        let { guilds: t } = (
            await o.tn.get({
                url: h.ANM.GUILD_DISCOVERY,
                query: s.stringify({ categories: [e] }),
                oldFormErrors: !0
            })
        ).body;
        u.Z.dispatch({
            type: 'GUILD_DISCOVERY_POPULAR_FETCH_SUCCESS',
            categoryId: e,
            guilds: t
        });
    } catch (t) {
        u.Z.dispatch({
            type: 'GUILD_DISCOVERY_POPULAR_FETCH_FAILURE',
            categoryId: e
        }),
            f.rC({ categoryId: e });
    }
}
async function N(e, t) {
    u.Z.dispatch({
        type: 'GUILD_DISCOVERY_FETCH_START',
        section: h.Lcj.FEATURED
    });
    try {
        let n = await o.tn.get({
            url: h.ANM.GUILD_DISCOVERY,
            query: s.stringify({
                offset: e,
                limit: t
            }),
            oldFormErrors: !0
        });
        C(n.body, h.Lcj.FEATURED);
    } catch (e) {
        u.Z.dispatch({
            type: 'GUILD_DISCOVERY_FETCH_FAILURE',
            section: h.Lcj.FEATURED
        }),
            f.rC({ categoryId: p.Hk });
    }
}
async function O() {
    let e = Object.keys(_.Z.applicationStatistics);
    u.Z.dispatch({
        type: 'GUILD_DISCOVERY_FETCH_START',
        section: h.Lcj.GAMES_YOU_PLAY
    });
    try {
        let t = await o.tn.get({
            url: h.ANM.GUILD_DISCOVERY,
            query: s.stringify({ application_ids: e }),
            oldFormErrors: !0
        });
        C(t.body, h.Lcj.GAMES_YOU_PLAY);
    } catch (e) {
        u.Z.dispatch({
            type: 'GUILD_DISCOVERY_FETCH_FAILURE',
            section: h.Lcj.GAMES_YOU_PLAY
        });
    }
}
function R() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    e && (0, c.uL)(h.Z5c.GUILD_DISCOVERY), u.Z.dispatch({ type: 'GUILD_DISCOVERY_CLEAR_SEARCH' });
}
function v(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    u.Z.dispatch({
        type: 'GUILD_DISCOVERY_SELECT_CATEGORY',
        categoryId: e,
        isHomepage: t
    });
}
function C(e, t) {
    let { offset: n, limit: r, guilds: i, total: a } = e;
    u.Z.dispatch({
        type: 'GUILD_DISCOVERY_FETCH_SUCCESS',
        section: t,
        guilds: i,
        offset: n,
        limit: r,
        total: a
    });
}
