n.d(t, {
    $z: function () {
        return y;
    },
    AQ: function () {
        return b;
    },
    G7: function () {
        return R;
    },
    K5: function () {
        return C;
    },
    Ue: function () {
        return N;
    },
    bR: function () {
        return O;
    },
    gk: function () {
        return L;
    },
    uY: function () {
        return D;
    }
});
var r = n(653041);
var i = n(47120);
var a = n(807034),
    o = n(837281),
    s = n.n(o),
    l = n(664751),
    u = n(544891),
    c = n(343817),
    d = n(570140),
    _ = n(703656),
    E = n(683301),
    f = n(230307),
    h = n(70956),
    p = n(900849),
    m = n(981631),
    I = n(731455);
let T = 'NKTZZ4AIZU',
    g = window.GLOBAL_ENV.ALGOLIA_KEY,
    S = 'production' === window.GLOBAL_ENV.PROJECT_ENV ? 'prod_discoverable_guilds' : 'staging' === window.GLOBAL_ENV.PROJECT_ENV ? 'stg_discoverable_guilds' : 'dev_discoverable_guilds',
    A = {
        'auto_removed:': !1,
        approximate_presence_count: '> 0',
        approximate_member_count: '> 0'
    };
function v(e) {
    let { query: t, preferredLocale: n, offset: r, limit: i, categoryId: a, tag: o } = e,
        s = (0, _.s1)(),
        u = l.stringify({
            query: t,
            offset: r,
            limit: i,
            preferredLocale: n,
            categoryId: a,
            tag: o
        }),
        c = s.location.search;
    if (!(null != c && c.length > 0 && c.startsWith('?')) || (c.startsWith('?') && c.split('?')[1] !== u)) {
        let e = { search: u };
        (0, _.uL)(m.Z5c.GUILD_DISCOVERY, e);
    }
}
function N() {
    if (null == g) return;
    let e = s()(T, g, { responsesCache: (0, a.A)() }).initIndex(S);
    d.Z.wait(() =>
        d.Z.dispatch({
            type: 'GUILD_DISCOVERY_SEARCH_INIT',
            index: e
        })
    );
}
function O(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = arguments.length > 3 ? arguments[3] : void 0,
        { categoryId: i = I.Hk, preferredLocale: a, offset: o, length: s, tag: l } = t,
        _ = E.ZP.getSearchIndex();
    if (null == _) return;
    n &&
        v({
            query: e,
            preferredLocale: a,
            offset: o,
            limit: s,
            categoryId: i,
            tag: l
        }),
        d.Z.dispatch({
            type: 'GUILD_DISCOVERY_SEARCH_FETCH_START',
            section: m.Lcj.SEARCH,
            query: e,
            categoryId: i
        });
    let f = Object.assign({}, A, t.filters),
        T = Object.keys(f).map((e) => ''.concat(e).concat(f[e]));
    i !== I.Hk && T.push('(primary_category_id='.concat(i, ' OR categories.id=').concat(i, ')'));
    let g = T.join(' AND '),
        S = ['preferred_locale: '.concat(a)],
        N = ['name', 'description', 'keywords', 'categories.name', 'categories.name_localizations.'.concat(a), 'primary_category.name', 'primary_category.name_localizations.'.concat(a), 'vanity_url_code'];
    try {
        let a = _.search(e, {
                filters: g,
                optionalFilters: S,
                length: s,
                offset: o,
                restrictSearchableAttributes: N
            }),
            l = u.tn.get({
                url: m.ANM.GUILD_DISCOVERY_VALID_TERM,
                query: { term: e },
                oldFormErrors: !0
            });
        Promise.all([a, l])
            .then((t) => {
                let [
                    { hits: n, nbHits: r },
                    {
                        body: { valid: a }
                    }
                ] = t;
                d.Z.dispatch({
                    type: 'GUILD_DISCOVERY_SEARCH_FETCH_SUCCESS',
                    section: m.Lcj.SEARCH,
                    query: e,
                    categoryId: i,
                    guilds: a
                        ? [
                              ...n.map((e) => ({
                                  ...e,
                                  id: e.objectID
                              }))
                          ]
                        : [],
                    offset: o,
                    limit: s,
                    total: a ? Math.min(r, I.lA) : 0
                });
            })
            .catch((a) => {
                var o;
                let s = new c.Hx(a),
                    l = null !== (o = null == r ? void 0 : r.isRetry) && void 0 !== o && o;
                a.body.retry_after > 0 && _ === E.ZP.getSearchIndex()
                    ? (p.m9({
                          categoryId: i,
                          error: s,
                          willRequestRetry: !0,
                          isRequestRetry: l
                      }),
                      setTimeout(() => {
                          O(e, t, n, { isRetry: !0 });
                      }, a.body.retry_after * h.Z.Millis.SECOND))
                    : (p.m9({
                          categoryId: i,
                          error: s,
                          willRequestRetry: !1,
                          isRequestRetry: l
                      }),
                      d.Z.dispatch({
                          type: 'GUILD_DISCOVERY_SEARCH_FETCH_FAILURE',
                          section: m.Lcj.SEARCH,
                          categoryId: i,
                          query: e
                      }));
            });
    } catch (a) {
        var R;
        let t = new c.Hx(a),
            n = null !== (R = null == r ? void 0 : r.isRetry) && void 0 !== R && R;
        p.m9({
            categoryId: i,
            error: t,
            willRequestRetry: !1,
            isRequestRetry: n
        }),
            d.Z.dispatch({
                type: 'GUILD_DISCOVERY_SEARCH_FETCH_FAILURE',
                section: m.Lcj.SEARCH,
                categoryId: i,
                query: e
            });
    }
}
function R(e, t) {
    let n = E.ZP.getSearchIndex();
    if (null == n) return;
    let r = Object.assign({}, A, t),
        i = Object.keys(r).map((e) => ''.concat(e).concat(r[e]));
    try {
        let t = n.search(e, {
                filters: i.join(' AND '),
                facets: ['categories.id']
            }),
            r = u.tn.get({
                url: m.ANM.GUILD_DISCOVERY_VALID_TERM,
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
            d.Z.dispatch({
                type: 'GUILD_DISCOVERY_SEARCH_UPDATE_COUNTS',
                query: e,
                nbHits: i ? n : 0,
                facets: i ? r : void 0
            });
        });
    } catch (t) {
        d.Z.dispatch({
            type: 'GUILD_DISCOVERY_SEARCH_COUNTS_FAIL',
            query: e
        });
    }
}
async function C(e) {
    d.Z.dispatch({
        type: 'GUILD_DISCOVERY_POPULAR_FETCH_START',
        categoryId: e
    });
    try {
        let { guilds: t } = (
            await u.tn.get({
                url: m.ANM.GUILD_DISCOVERY,
                query: l.stringify({ categories: [e] }),
                oldFormErrors: !0
            })
        ).body;
        d.Z.dispatch({
            type: 'GUILD_DISCOVERY_POPULAR_FETCH_SUCCESS',
            categoryId: e,
            guilds: t
        });
    } catch (t) {
        d.Z.dispatch({
            type: 'GUILD_DISCOVERY_POPULAR_FETCH_FAILURE',
            categoryId: e
        }),
            p.rC({ categoryId: e });
    }
}
async function y(e, t) {
    d.Z.dispatch({
        type: 'GUILD_DISCOVERY_FETCH_START',
        section: m.Lcj.FEATURED
    });
    try {
        let n = await u.tn.get({
            url: m.ANM.GUILD_DISCOVERY,
            query: l.stringify({
                offset: e,
                limit: t
            }),
            oldFormErrors: !0
        });
        M(n.body, m.Lcj.FEATURED);
    } catch (e) {
        d.Z.dispatch({
            type: 'GUILD_DISCOVERY_FETCH_FAILURE',
            section: m.Lcj.FEATURED
        }),
            p.rC({ categoryId: I.Hk });
    }
}
async function L() {
    let e = Object.keys(f.Z.applicationStatistics);
    d.Z.dispatch({
        type: 'GUILD_DISCOVERY_FETCH_START',
        section: m.Lcj.GAMES_YOU_PLAY
    });
    try {
        let t = await u.tn.get({
            url: m.ANM.GUILD_DISCOVERY,
            query: l.stringify({ application_ids: e }),
            oldFormErrors: !0
        });
        M(t.body, m.Lcj.GAMES_YOU_PLAY);
    } catch (e) {
        d.Z.dispatch({
            type: 'GUILD_DISCOVERY_FETCH_FAILURE',
            section: m.Lcj.GAMES_YOU_PLAY
        });
    }
}
function b() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    e && (0, _.uL)(m.Z5c.GUILD_DISCOVERY), d.Z.dispatch({ type: 'GUILD_DISCOVERY_CLEAR_SEARCH' });
}
function D(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    d.Z.dispatch({
        type: 'GUILD_DISCOVERY_SELECT_CATEGORY',
        categoryId: e,
        isHomepage: t
    });
}
function M(e, t) {
    let { offset: n, limit: r, guilds: i, total: a } = e;
    d.Z.dispatch({
        type: 'GUILD_DISCOVERY_FETCH_SUCCESS',
        section: t,
        guilds: i,
        offset: n,
        limit: r,
        total: a
    });
}
