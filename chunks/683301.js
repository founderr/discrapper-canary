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
    h = n(442837);
n(902704);
var p = n(570140),
    m = n(117496),
    g = n(314897),
    E = n(230307),
    v = n(981631),
    I = n(731455);
((s = i || (i = {})).UNSET = 'unset'), (s.FETCHING = 'fetching'), (s.FAILED = 'failed'), (s.SUCCEEDED = 'succeeded');
let S = {
        guilds: [],
        total: 0,
        offset: 0,
        limit: 0,
        loading: !1,
        isFirstLoad: !0
    },
    T = {
        [v.Lcj.FEATURED]: { ...S },
        [v.Lcj.GAMES_YOU_PLAY]: { ...S },
        [v.Lcj.MISC]: { ...S },
        [v.Lcj.SEARCH]: {},
        [I.Hk]: { ...S }
    },
    b = '',
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
class w extends (a = h.ZP.Store) {
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
        return T;
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
        return b;
    }
    getTopCategoryCounts(e) {
        var t;
        return null === (t = T[v.Lcj.SEARCH][e]) || void 0 === t ? void 0 : t.resultCounts;
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
    (t.ZP = new w(p.Z, {
        GUILD_DISCOVERY_SEARCH_INIT: function (e) {
            let { index: t } = e;
            R = t;
        },
        GUILD_DISCOVERY_FETCH_START: function (e) {
            let { section: t } = e;
            (y = !0),
                (T = {
                    ...T,
                    [t]: {
                        ...T[t],
                        loading: !0
                    }
                });
        },
        GUILD_DISCOVERY_FETCH_SUCCESS: function (e) {
            let { guilds: t, section: n, total: r, offset: i, limit: a } = e;
            (y = !1), (N = Date.now()), (D = (0, m.P)());
            let s = _().map(t, x);
            T = {
                ...T,
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
                (T = {
                    ...T,
                    [t]: {
                        ...S,
                        loading: !1
                    }
                });
        },
        GUILD_DISCOVERY_POPULAR_FETCH_START: function (e) {
            let { categoryId: t } = e;
            (y = !0),
                (T = {
                    ...T,
                    [t]: {
                        ...S,
                        ...T[t],
                        loading: !0
                    }
                });
        },
        GUILD_DISCOVERY_POPULAR_FETCH_SUCCESS: function (e) {
            let { categoryId: t, guilds: n } = e;
            (y = !1), (N = Date.now());
            let r = _().map(n, x);
            T = {
                ...T,
                [t]: {
                    ...S,
                    guilds: r,
                    loading: !1,
                    isFirstLoad: !1
                }
            };
        },
        GUILD_DISCOVERY_POPULAR_FETCH_FAILURE: function (e) {
            let { categoryId: t } = e;
            (y = !1),
                (T = {
                    ...T,
                    [t]: {
                        ...S,
                        loading: !1
                    }
                });
        },
        GUILD_DISCOVERY_SEARCH_FETCH_START: function (e) {
            var t;
            let { section: n, query: r, categoryId: i } = e;
            d()('search' === n, 'This action only supports search it seems'),
                (A = 'fetching'),
                (T = {
                    ...T,
                    [n]: {
                        ...T[n],
                        [r]: {
                            ...T[n][r],
                            [i]: {
                                ...(null === (t = T[n][r]) || void 0 === t ? void 0 : t[i]),
                                loading: !0
                            }
                        }
                    }
                }),
                (b = r);
        },
        GUILD_DISCOVERY_SEARCH_FETCH_SUCCESS: function (e) {
            var t;
            let { section: n, guilds: r, total: i, offset: a, limit: s, query: o, categoryId: l } = e;
            d()('search' === n, 'This action only supports search it seems');
            let u = r.map(x);
            (T = {
                ...T,
                [n]: {
                    ...T[n],
                    [o]: {
                        ...T[n][o],
                        [l]: {
                            ...(null === (t = T[n][o]) || void 0 === t ? void 0 : t[l]),
                            guilds: u,
                            total: i,
                            offset: a,
                            limit: s,
                            loading: !1
                        }
                    }
                }
            }),
                (b = o),
                (A = 'succeeded');
        },
        GUILD_DISCOVERY_SEARCH_FETCH_FAILURE: function (e) {
            var t;
            let { section: n, query: r, categoryId: i } = e;
            d()('search' === n, 'This action only supports search it seems'),
                (A = 'failed'),
                (T = {
                    ...T,
                    [n]: {
                        ...T[n],
                        [r]: {
                            ...T[n][r],
                            [i]: {
                                ...(null === (t = T[n][r]) || void 0 === t ? void 0 : t[i]),
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
            b = '';
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
            T = {
                ...T,
                [v.Lcj.SEARCH]: {
                    ...T[v.Lcj.SEARCH],
                    [r]: {
                        ...T[v.Lcj.SEARCH][r],
                        resultCounts: [[I.Hk, Math.min(I.lA, t)], ...i]
                    }
                }
            };
        },
        GUILD_DISCOVERY_SEARCH_COUNTS_FAIL: function (e) {
            let { query: t } = e;
            T = {
                ...T,
                [v.Lcj.SEARCH]: {
                    ...T[v.Lcj.SEARCH],
                    [t]: {
                        ...T[v.Lcj.SEARCH][t],
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
