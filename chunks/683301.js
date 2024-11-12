let r;
n(47120), n(653041);
var i,
    a,
    s,
    o,
    l,
    u,
    c = n(512722),
    d = n.n(c),
    f = n(392711),
    _ = n.n(f),
    p = n(442837);
n(902704);
var h = n(570140),
    m = n(117496),
    g = n(314897),
    E = n(230307),
    v = n(981631),
    I = n(731455);
((s = i || (i = {})).UNSET = 'unset'), (s.FETCHING = 'fetching'), (s.FAILED = 'failed'), (s.SUCCEEDED = 'succeeded');
let b = {
        guilds: [],
        total: 0,
        offset: 0,
        limit: 0,
        loading: !1,
        isFirstLoad: !0
    },
    S = {
        [v.Lcj.FEATURED]: { ...b },
        [v.Lcj.GAMES_YOU_PLAY]: { ...b },
        [v.Lcj.MISC]: { ...b },
        [v.Lcj.SEARCH]: {},
        [I.Hk]: { ...b }
    },
    T = '',
    y = !1,
    A = 'unset',
    N = null,
    C = I.Hk,
    R = null,
    O = [],
    D = (0, m.P)(),
    L = !1;
function x(e) {
    return {
        id: e.id,
        name: e.name,
        description: e.description,
        splash: e.splash,
        banner: e.banner,
        icon: e.icon,
        features: new Set(e.features),
        presenceCount: e.approximate_presence_count,
        memberCount: e.approximate_member_count,
        premiumSubscriptionCount: e.premium_subscription_count,
        preferredLocale: e.preferred_locale,
        discoverySplash: e.discovery_splash,
        emojis: e.emojis,
        emojiCount: e.emoji_count,
        keywords: e.keywords
    };
}
class w extends (a = p.ZP.Store) {
    initialize() {
        this.waitFor(g.default);
    }
    isFetching() {
        return y || null == N || null == E.Z.lastFetched;
    }
    isFetchingSearch() {
        return 'fetching' === A;
    }
    hasSearchError() {
        return 'failed' === A;
    }
    getDiscoverableGuilds() {
        return S;
    }
    getCurrentCategoryId() {
        return C;
    }
    getCurrentHomepageCategoryId() {
        return r;
    }
    getSearchIndex() {
        return R;
    }
    getMostRecentQuery() {
        return T;
    }
    getTopCategoryCounts(e) {
        var t;
        return null === (t = S[v.Lcj.SEARCH][e]) || void 0 === t ? void 0 : t.resultCounts;
    }
    getSeenGuildIds() {
        return O;
    }
    getLoadId() {
        return D;
    }
    getIsReady() {
        return L;
    }
}
(u = 'GuildDiscoveryStore'),
    (l = 'displayName') in (o = w)
        ? Object.defineProperty(o, l, {
              value: u,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (o[l] = u),
    (t.ZP = new w(h.Z, {
        GUILD_DISCOVERY_SEARCH_INIT: function (e) {
            let { index: t } = e;
            R = t;
        },
        GUILD_DISCOVERY_FETCH_START: function (e) {
            let { section: t } = e;
            (y = !0),
                (S = {
                    ...S,
                    [t]: {
                        ...S[t],
                        loading: !0
                    }
                });
        },
        GUILD_DISCOVERY_FETCH_SUCCESS: function (e) {
            let { guilds: t, section: n, total: r, offset: i, limit: a } = e;
            (y = !1), (N = Date.now()), (D = (0, m.P)());
            let s = _().map(t, x);
            S = {
                ...S,
                [n]: {
                    guilds: s,
                    offset: i,
                    limit: a,
                    total: r,
                    loading: !1,
                    isFirstLoad: !1
                }
            };
        },
        GUILD_DISCOVERY_FETCH_FAILURE: function (e) {
            let { section: t } = e;
            (y = !1),
                (S = {
                    ...S,
                    [t]: {
                        ...b,
                        loading: !1
                    }
                });
        },
        GUILD_DISCOVERY_POPULAR_FETCH_START: function (e) {
            let { categoryId: t } = e;
            (y = !0),
                (S = {
                    ...S,
                    [t]: {
                        ...b,
                        ...S[t],
                        loading: !0
                    }
                });
        },
        GUILD_DISCOVERY_POPULAR_FETCH_SUCCESS: function (e) {
            let { categoryId: t, guilds: n } = e;
            (y = !1), (N = Date.now());
            let r = _().map(n, x);
            S = {
                ...S,
                [t]: {
                    ...b,
                    guilds: r,
                    loading: !1,
                    isFirstLoad: !1
                }
            };
        },
        GUILD_DISCOVERY_POPULAR_FETCH_FAILURE: function (e) {
            let { categoryId: t } = e;
            (y = !1),
                (S = {
                    ...S,
                    [t]: {
                        ...b,
                        loading: !1
                    }
                });
        },
        GUILD_DISCOVERY_SEARCH_FETCH_START: function (e) {
            var t;
            let { section: n, query: r, categoryId: i } = e;
            d()('search' === n, 'This action only supports search it seems'),
                (A = 'fetching'),
                (S = {
                    ...S,
                    [n]: {
                        ...S[n],
                        [r]: {
                            ...S[n][r],
                            [i]: {
                                ...(null === (t = S[n][r]) || void 0 === t ? void 0 : t[i]),
                                loading: !0
                            }
                        }
                    }
                }),
                (T = r);
        },
        GUILD_DISCOVERY_SEARCH_FETCH_SUCCESS: function (e) {
            var t;
            let { section: n, guilds: r, total: i, offset: a, limit: s, query: o, categoryId: l } = e;
            d()('search' === n, 'This action only supports search it seems');
            let u = r.map(x);
            (S = {
                ...S,
                [n]: {
                    ...S[n],
                    [o]: {
                        ...S[n][o],
                        [l]: {
                            ...(null === (t = S[n][o]) || void 0 === t ? void 0 : t[l]),
                            guilds: u,
                            total: i,
                            offset: a,
                            limit: s,
                            loading: !1
                        }
                    }
                }
            }),
                (T = o),
                (A = 'succeeded');
        },
        GUILD_DISCOVERY_SEARCH_FETCH_FAILURE: function (e) {
            var t;
            let { section: n, query: r, categoryId: i } = e;
            d()('search' === n, 'This action only supports search it seems'),
                (A = 'failed'),
                (S = {
                    ...S,
                    [n]: {
                        ...S[n],
                        [r]: {
                            ...S[n][r],
                            [i]: {
                                ...(null === (t = S[n][r]) || void 0 === t ? void 0 : t[i]),
                                loading: !1
                            }
                        }
                    }
                });
        },
        GUILD_DISCOVERY_SELECT_CATEGORY: function (e) {
            let { categoryId: t, isHomepage: n } = e;
            (C = t), n && (r = t);
        },
        GUILD_DISCOVERY_CLEAR_SEARCH: function () {
            T = '';
        },
        GUILD_DISCOVERY_SEARCH_UPDATE_COUNTS: function (e) {
            let { nbHits: t, facets: n, query: r } = e,
                i = [];
            if (null != n) {
                var a;
                let e = null !== (a = n['categories.id']) && void 0 !== a ? a : {};
                delete e[I.o3],
                    (i = Object.entries(e)
                        .map((e) => {
                            let [t, n] = e;
                            return [parseInt(t, 10), n];
                        })
                        .sort((e, t) => t[1] - e[1])
                        .slice(0, 7));
            }
            S = {
                ...S,
                [v.Lcj.SEARCH]: {
                    ...S[v.Lcj.SEARCH],
                    [r]: {
                        ...S[v.Lcj.SEARCH][r],
                        resultCounts: [[I.Hk, Math.min(I.lA, t)], ...i]
                    }
                }
            };
        },
        GUILD_DISCOVERY_SEARCH_COUNTS_FAIL: function (e) {
            let { query: t } = e;
            S = {
                ...S,
                [v.Lcj.SEARCH]: {
                    ...S[v.Lcj.SEARCH],
                    [t]: {
                        ...S[v.Lcj.SEARCH][t],
                        resultCounts: null
                    }
                }
            };
        },
        GUILD_DISCOVERY_GUILD_SEEN: function (e) {
            let { guildId: t } = e;
            !O.includes(t) && O.push(t);
        },
        GUILD_DISCOVERY_CLEAR_SEEN_GUILDS: function () {
            O = [];
        },
        GUILD_DISCOVERY_CATEGORY_FETCH_SUCCESS: function (e) {
            let { forClanDiscovery: t } = e;
            t && (L = !0);
        }
    }));
