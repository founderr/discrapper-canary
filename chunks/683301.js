let r;
n.d(t, {
    xk: function () {
        return g;
    }
});
var i,
    a,
    o = n(47120);
var s = n(653041);
var l = n(512722),
    u = n.n(l),
    c = n(392711),
    d = n.n(c),
    _ = n(442837);
n(902704);
var E = n(570140),
    f = n(117496),
    h = n(314897),
    p = n(230307),
    m = n(981631),
    I = n(731455);
function T(e, t, n) {
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
!(function (e) {
    (e.UNSET = 'unset'), (e.FETCHING = 'fetching'), (e.FAILED = 'failed'), (e.SUCCEEDED = 'succeeded');
})(i || (i = {}));
let g = {
        guilds: [],
        total: 0,
        offset: 0,
        limit: 0,
        loading: !1,
        isFirstLoad: !0
    },
    S = {
        [m.Lcj.FEATURED]: { ...g },
        [m.Lcj.GAMES_YOU_PLAY]: { ...g },
        [m.Lcj.MISC]: { ...g },
        [m.Lcj.SEARCH]: {},
        [I.Hk]: { ...g }
    },
    A = '',
    v = !1,
    N = 'unset',
    O = null,
    R = I.Hk,
    C = null,
    y = [],
    b = (0, f.P)(),
    L = !1,
    D = 7;
function M(e) {
    let { index: t } = e;
    C = t;
}
function P(e) {
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
function U(e) {
    let { section: t } = e;
    (v = !0),
        (S = {
            ...S,
            [t]: {
                ...S[t],
                loading: !0
            }
        });
}
function w(e) {
    let { guilds: t, section: n, total: r, offset: i, limit: a } = e;
    (v = !1), (O = Date.now()), (b = (0, f.P)());
    let o = d().map(t, P);
    S = {
        ...S,
        [n]: {
            guilds: o,
            offset: i,
            limit: a,
            total: r,
            loading: !1,
            isFirstLoad: !1
        }
    };
}
function x(e) {
    let { section: t } = e;
    (v = !1),
        (S = {
            ...S,
            [t]: {
                ...g,
                loading: !1
            }
        });
}
function G(e) {
    let { categoryId: t } = e;
    (v = !0),
        (S = {
            ...S,
            [t]: {
                ...g,
                ...S[t],
                loading: !0
            }
        });
}
function k(e) {
    let { categoryId: t, guilds: n } = e;
    (v = !1), (O = Date.now());
    let r = d().map(n, P);
    S = {
        ...S,
        [t]: {
            ...g,
            guilds: r,
            loading: !1,
            isFirstLoad: !1
        }
    };
}
function B(e) {
    let { categoryId: t } = e;
    (v = !1),
        (S = {
            ...S,
            [t]: {
                ...g,
                loading: !1
            }
        });
}
function F(e) {
    var t;
    let { section: n, query: r, categoryId: i } = e;
    u()('search' === n, 'This action only supports search it seems'),
        (N = 'fetching'),
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
        (A = r);
}
function Z(e) {
    var t;
    let { section: n, guilds: r, total: i, offset: a, limit: o, query: s, categoryId: l } = e;
    u()('search' === n, 'This action only supports search it seems');
    let c = r.map(P);
    (S = {
        ...S,
        [n]: {
            ...S[n],
            [s]: {
                ...S[n][s],
                [l]: {
                    ...(null === (t = S[n][s]) || void 0 === t ? void 0 : t[l]),
                    guilds: c,
                    total: i,
                    offset: a,
                    limit: o,
                    loading: !1
                }
            }
        }
    }),
        (A = s),
        (N = 'succeeded');
}
function V(e) {
    var t;
    let { section: n, query: r, categoryId: i } = e;
    u()('search' === n, 'This action only supports search it seems'),
        (N = 'failed'),
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
}
function H() {
    A = '';
}
function Y(e) {
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
                .slice(0, D));
    }
    S = {
        ...S,
        [m.Lcj.SEARCH]: {
            ...S[m.Lcj.SEARCH],
            [r]: {
                ...S[m.Lcj.SEARCH][r],
                resultCounts: [[I.Hk, Math.min(I.lA, t)], ...i]
            }
        }
    };
}
function j(e) {
    let { query: t } = e;
    S = {
        ...S,
        [m.Lcj.SEARCH]: {
            ...S[m.Lcj.SEARCH],
            [t]: {
                ...S[m.Lcj.SEARCH][t],
                resultCounts: null
            }
        }
    };
}
function W(e) {
    let { categoryId: t, isHomepage: n } = e;
    (R = t), n && (r = t);
}
function K(e) {
    let { guildId: t } = e;
    !y.includes(t) && y.push(t);
}
function z() {
    y = [];
}
function q(e) {
    let { forClanDiscovery: t } = e;
    t && (L = !0);
}
class Q extends (a = _.ZP.Store) {
    initialize() {
        this.waitFor(h.default);
    }
    isFetching() {
        return v || null == O || null == p.Z.lastFetched;
    }
    isFetchingSearch() {
        return 'fetching' === N;
    }
    hasSearchError() {
        return 'failed' === N;
    }
    getDiscoverableGuilds() {
        return S;
    }
    getCurrentCategoryId() {
        return R;
    }
    getCurrentHomepageCategoryId() {
        return r;
    }
    getSearchIndex() {
        return C;
    }
    getMostRecentQuery() {
        return A;
    }
    getTopCategoryCounts(e) {
        var t;
        return null === (t = S[m.Lcj.SEARCH][e]) || void 0 === t ? void 0 : t.resultCounts;
    }
    getSeenGuildIds() {
        return y;
    }
    getLoadId() {
        return b;
    }
    getIsReady() {
        return L;
    }
}
T(Q, 'displayName', 'GuildDiscoveryStore'),
    (t.ZP = new Q(E.Z, {
        GUILD_DISCOVERY_SEARCH_INIT: M,
        GUILD_DISCOVERY_FETCH_START: U,
        GUILD_DISCOVERY_FETCH_SUCCESS: w,
        GUILD_DISCOVERY_FETCH_FAILURE: x,
        GUILD_DISCOVERY_POPULAR_FETCH_START: G,
        GUILD_DISCOVERY_POPULAR_FETCH_SUCCESS: k,
        GUILD_DISCOVERY_POPULAR_FETCH_FAILURE: B,
        GUILD_DISCOVERY_SEARCH_FETCH_START: F,
        GUILD_DISCOVERY_SEARCH_FETCH_SUCCESS: Z,
        GUILD_DISCOVERY_SEARCH_FETCH_FAILURE: V,
        GUILD_DISCOVERY_SELECT_CATEGORY: W,
        GUILD_DISCOVERY_CLEAR_SEARCH: H,
        GUILD_DISCOVERY_SEARCH_UPDATE_COUNTS: Y,
        GUILD_DISCOVERY_SEARCH_COUNTS_FAIL: j,
        GUILD_DISCOVERY_GUILD_SEEN: K,
        GUILD_DISCOVERY_CLEAR_SEEN_GUILDS: z,
        GUILD_DISCOVERY_CATEGORY_FETCH_SUCCESS: q
    }));
