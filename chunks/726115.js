n.d(t, {
    AS: function () {
        return O;
    },
    BC: function () {
        return C;
    },
    Ew: function () {
        return N;
    },
    II: function () {
        return Z;
    },
    Io: function () {
        return S;
    },
    LO: function () {
        return L;
    },
    Mf: function () {
        return m;
    },
    QW: function () {
        return g;
    },
    U0: function () {
        return A;
    },
    XW: function () {
        return R;
    },
    Xp: function () {
        return v;
    },
    a$: function () {
        return I;
    },
    a1: function () {
        return T;
    },
    lg: function () {
        return p;
    },
    sS: function () {
        return f;
    },
    vb: function () {
        return h;
    }
}),
    n(411104),
    n(47120);
var i = n(878727),
    a = n(706454),
    s = n(823379),
    r = n(900849),
    l = n(762692),
    o = n(331114),
    c = n(356164),
    d = n(164991),
    u = n(128449),
    _ = n(731455),
    E = n(689938);
function h(e) {
    switch (e) {
        case u.vf.FEATURED:
            return E.Z.Messages.GLOBAL_DISCOVERY_SERVERS_FEATURED_CATEGORY;
        case u.vf.GUILDS:
            return E.Z.Messages.GLOBAL_DISCOVERY_SERVERS_GUILDS_CATEGORY;
        case u.vf.GAMING:
            return E.Z.Messages.GLOBAL_DISCOVERY_SERVERS_GAMING_CATEGORY;
        case u.vf.MUSIC:
            return E.Z.Messages.GLOBAL_DISCOVERY_SERVERS_MUSIC_CATEGORY;
        case u.vf.ENTERTAINMENT:
            return E.Z.Messages.GLOBAL_DISCOVERY_SERVERS_ENTERTAINMENT_CATEGORY;
        case u.vf.TECH:
            return E.Z.Messages.GLOBAL_DISCOVERY_SERVERS_TECH_CATEGORY;
        case u.vf.EDUCATION:
            return E.Z.Messages.GLOBAL_DISCOVERY_SERVERS_EDUCATION_CATEGORY;
        case u.vf.HUBS:
            return E.Z.Messages.GLOBAL_DISCOVERY_SERVERS_HUBS_CATEGORY;
    }
}
function m(e) {
    switch (e) {
        case u.vf.FEATURED:
            return E.Z.Messages.GUILD_DISCOVERY_HOME_TITLE;
        case u.vf.GAMING:
            return E.Z.Messages.GLOBAL_DISCOVERY_SERVERS_GAMING_CATEGORY;
        case u.vf.MUSIC:
            return E.Z.Messages.GLOBAL_DISCOVERY_SERVERS_MUSIC_CATEGORY;
        case u.vf.ENTERTAINMENT:
            return E.Z.Messages.GLOBAL_DISCOVERY_SERVERS_ENTERTAINMENT_CATEGORY;
        case u.vf.TECH:
            return E.Z.Messages.GLOBAL_DISCOVERY_SERVERS_TECH_CATEGORY;
        case u.vf.EDUCATION:
            return E.Z.Messages.GLOBAL_DISCOVERY_SERVERS_EDUCATION_CATEGORY;
        case u.vf.HUBS:
            return E.Z.Messages.GLOBAL_DISCOVERY_SERVERS_HUB_TITLE;
        default:
            throw Error('[getGlobalDiscoveryServerTabTitle] Unsupported tab: '.concat(e));
    }
}
function I(e) {
    switch (e) {
        case u.vf.FEATURED:
            return E.Z.Messages.GUILD_DISCOVERY_HOME_SUBTITLE;
        case u.vf.GAMING:
            return E.Z.Messages.GLOBAL_DISCOVERY_SERVERS_GAMING_DESCRIPTION;
        case u.vf.MUSIC:
            return E.Z.Messages.GLOBAL_DISCOVERY_SERVERS_MUSIC_DESCRIPTION;
        case u.vf.ENTERTAINMENT:
            return E.Z.Messages.GLOBAL_DISCOVERY_SERVERS_ENTERTAINMENT_DESCRIPTION;
        case u.vf.TECH:
            return E.Z.Messages.GLOBAL_DISCOVERY_SERVERS_TECH_DESCRIPTION;
        case u.vf.EDUCATION:
            return E.Z.Messages.GLOBAL_DISCOVERY_SERVERS_EDUCATION_DESCRIPTION;
        case u.vf.HUBS:
            return E.Z.Messages.GLOBAL_DISCOVERY_SERVERS_HUB_DESCRIPTION;
        default:
            throw Error('[getGlobalDiscoveryServerTabTitle] Unsupported tab: '.concat(e));
    }
}
function g(e) {
    switch (e) {
        case u.vf.FEATURED:
            return E.Z.Messages.GLOBAL_DISCOVERY_SERVERS_POPULAR_FEATURED;
        case u.vf.GAMING:
            return E.Z.Messages.GLOBAL_DISCOVERY_SERVERS_POPULAR_GAMING;
        case u.vf.MUSIC:
            return E.Z.Messages.GLOBAL_DISCOVERY_SERVERS_POPULAR_MUSIC;
        case u.vf.ENTERTAINMENT:
            return E.Z.Messages.GLOBAL_DISCOVERY_SERVERS_POPULAR_ENTERTAINMENT;
        case u.vf.TECH:
            return E.Z.Messages.GLOBAL_DISCOVERY_SERVERS_POPULAR_TECH;
        case u.vf.EDUCATION:
            return E.Z.Messages.GLOBAL_DISCOVERY_SERVERS_POPULAR_EDUCATION;
        default:
            return null;
    }
}
function p(e) {
    if (null == e) return _.Hk;
    switch (e) {
        case u.vf.FEATURED:
        case u.vf.GUILDS:
        case u.vf.HUBS:
            return _.Hk;
        case u.vf.GAMING:
            return _.Gj.Activity;
        case u.vf.MUSIC:
            return _.Gj.Music;
        case u.vf.ENTERTAINMENT:
            return _.Gj.Television;
        case u.vf.TECH:
            return _.Gj.Science;
        case u.vf.EDUCATION:
            return _.Gj.Education;
        default:
            (0, s.vE)(e);
    }
}
function T(e) {
    let { categoryId: t, query: n } = e;
    return ''.concat(u.BP, '-').concat(n, '-').concat(u.t0, '-').concat(t);
}
function S(e) {
    let { categoryId: t } = e;
    return ''.concat(u.aQ, '-').concat(u.t0, '-').concat(t);
}
function f() {
    return ''.concat(u.aQ);
}
function C(e) {
    let { query: t } = e;
    return ''.concat(u.BP, '-').concat(t);
}
function N(e) {
    return null == e || Date.now() - e > u.AF;
}
function A(e) {
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
        emojiCount: e.emoji_count
    };
}
function v() {
    var e;
    let [t] = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [a.default],
        n = _.dU,
        i = t.locale;
    return (null !== (e = n.find((e) => e.code === i)) && void 0 !== e ? e : n[0]).code;
}
function Z(e) {
    let { searchQuery: t } = e,
        n = C({ query: t }),
        a = o.Z.getIsFetchingCounts(n),
        s = o.Z.getIsFetchingCounts(n);
    if (!a && !s && '' !== t.trim())
        !(0, i.x)(t) &&
            ((0, d.LD)({ fetchedQuery: t }),
            l.Z.fetchAlgoliaSearchResultCounts({
                query: t,
                algoliaFilters: { approximate_member_count: r.sq },
                onSuccess: () => {
                    (0, d.LD)({ resultsQuery: t });
                }
            }));
}
function L(e) {
    let { loadId: t, categoryId: n, offset: a, searchQuery: s, languageCode: o } = e;
    if ('' !== s.trim())
        !(0, i.x)(s) &&
            (r.tI(t, n),
            l.Z.fetchAlgoliaSearchResults(s, {
                categoryId: n,
                preferredLocale: null != o ? o : v(),
                offset: a,
                length: 12,
                filters: { approximate_member_count: r.sq }
            }));
}
function R(e) {
    let { loadId: t, categoryId: n, searchQuery: i, languageCode: a } = e,
        s = T({
            query: i,
            categoryId: n
        }),
        r = c.Z.getIsInitialFetchComplete(s);
    !c.Z.getIsFetching(s) &&
        !r &&
        L({
            loadId: t,
            categoryId: n,
            searchQuery: i,
            languageCode: a,
            offset: 0
        });
}
function O(e) {
    let { loadId: t, categoryId: n, searchQuery: i, languageCode: a, offset: s } = e,
        r = T({
            query: i,
            categoryId: n
        });
    if (!c.Z.getIsFetching(r))
        c.Z.getIsInitialFetchComplete(r) &&
            L({
                loadId: t,
                categoryId: n,
                searchQuery: i,
                languageCode: a,
                offset: s
            });
}
