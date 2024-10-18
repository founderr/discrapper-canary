n.d(t, {
    CD: function () {
        return Z;
    },
    Ew: function () {
        return C;
    },
    Mf: function () {
        return g;
    },
    NL: function () {
        return O;
    },
    QW: function () {
        return S;
    },
    U0: function () {
        return N;
    },
    Xp: function () {
        return A;
    },
    a$: function () {
        return T;
    },
    lg: function () {
        return f;
    },
    oT: function () {
        return L;
    },
    vL: function () {
        return x;
    },
    vb: function () {
        return p;
    }
}),
    n(411104),
    n(47120);
var i = n(544891),
    a = n(878727),
    s = n(706454),
    r = n(626135),
    l = n(823379),
    o = n(900849),
    c = n(762692),
    d = n(331114),
    u = n(356164),
    _ = n(164991),
    E = n(128449),
    h = n(981631),
    m = n(731455),
    I = n(689938);
function p(e) {
    switch (e) {
        case E.vf.FEATURED:
            return I.Z.Messages.GLOBAL_DISCOVERY_SERVERS_FEATURED_CATEGORY;
        case E.vf.GUILDS:
            return I.Z.Messages.GLOBAL_DISCOVERY_SERVERS_GUILDS_CATEGORY;
        case E.vf.GAMING:
            return I.Z.Messages.GLOBAL_DISCOVERY_SERVERS_GAMING_CATEGORY;
        case E.vf.MUSIC:
            return I.Z.Messages.GLOBAL_DISCOVERY_SERVERS_MUSIC_CATEGORY;
        case E.vf.ENTERTAINMENT:
            return I.Z.Messages.GLOBAL_DISCOVERY_SERVERS_ENTERTAINMENT_CATEGORY;
        case E.vf.TECH:
            return I.Z.Messages.GLOBAL_DISCOVERY_SERVERS_TECH_CATEGORY;
        case E.vf.EDUCATION:
            return I.Z.Messages.GLOBAL_DISCOVERY_SERVERS_EDUCATION_CATEGORY;
        case E.vf.HUBS:
            return I.Z.Messages.GLOBAL_DISCOVERY_SERVERS_HUBS_CATEGORY;
    }
}
function g(e) {
    switch (e) {
        case E.vf.FEATURED:
            return I.Z.Messages.GUILD_DISCOVERY_HOME_TITLE;
        case E.vf.GAMING:
            return I.Z.Messages.GLOBAL_DISCOVERY_SERVERS_GAMING_CATEGORY;
        case E.vf.MUSIC:
            return I.Z.Messages.GLOBAL_DISCOVERY_SERVERS_MUSIC_CATEGORY;
        case E.vf.ENTERTAINMENT:
            return I.Z.Messages.GLOBAL_DISCOVERY_SERVERS_ENTERTAINMENT_CATEGORY;
        case E.vf.TECH:
            return I.Z.Messages.GLOBAL_DISCOVERY_SERVERS_TECH_CATEGORY;
        case E.vf.EDUCATION:
            return I.Z.Messages.GLOBAL_DISCOVERY_SERVERS_EDUCATION_CATEGORY;
        case E.vf.HUBS:
            return I.Z.Messages.GLOBAL_DISCOVERY_SERVERS_HUB_TITLE;
        default:
            throw Error('[getGlobalDiscoveryServerTabTitle] Unsupported tab: '.concat(e));
    }
}
function T(e) {
    switch (e) {
        case E.vf.FEATURED:
            return I.Z.Messages.GUILD_DISCOVERY_HOME_SUBTITLE;
        case E.vf.GAMING:
            return I.Z.Messages.GLOBAL_DISCOVERY_SERVERS_GAMING_DESCRIPTION;
        case E.vf.MUSIC:
            return I.Z.Messages.GLOBAL_DISCOVERY_SERVERS_MUSIC_DESCRIPTION;
        case E.vf.ENTERTAINMENT:
            return I.Z.Messages.GLOBAL_DISCOVERY_SERVERS_ENTERTAINMENT_DESCRIPTION;
        case E.vf.TECH:
            return I.Z.Messages.GLOBAL_DISCOVERY_SERVERS_TECH_DESCRIPTION;
        case E.vf.EDUCATION:
            return I.Z.Messages.GLOBAL_DISCOVERY_SERVERS_EDUCATION_DESCRIPTION;
        case E.vf.HUBS:
            return I.Z.Messages.GLOBAL_DISCOVERY_SERVERS_HUB_DESCRIPTION;
        default:
            throw Error('[getGlobalDiscoveryServerTabTitle] Unsupported tab: '.concat(e));
    }
}
function S(e) {
    switch (e) {
        case E.vf.FEATURED:
            return I.Z.Messages.GLOBAL_DISCOVERY_SERVERS_POPULAR_FEATURED;
        case E.vf.GAMING:
            return I.Z.Messages.GLOBAL_DISCOVERY_SERVERS_POPULAR_GAMING;
        case E.vf.MUSIC:
            return I.Z.Messages.GLOBAL_DISCOVERY_SERVERS_POPULAR_MUSIC;
        case E.vf.ENTERTAINMENT:
            return I.Z.Messages.GLOBAL_DISCOVERY_SERVERS_POPULAR_ENTERTAINMENT;
        case E.vf.TECH:
            return I.Z.Messages.GLOBAL_DISCOVERY_SERVERS_POPULAR_TECH;
        case E.vf.EDUCATION:
            return I.Z.Messages.GLOBAL_DISCOVERY_SERVERS_POPULAR_EDUCATION;
        default:
            return null;
    }
}
function f(e) {
    switch (e) {
        case E.vf.FEATURED:
            return m.Hk;
        case E.vf.GUILDS:
            return m.mE;
        case E.vf.GAMING:
            return m.Gj.Activity;
        case E.vf.MUSIC:
            return m.Gj.Music;
        case E.vf.ENTERTAINMENT:
            return m.Gj.Television;
        case E.vf.TECH:
            return m.Gj.Science;
        case E.vf.EDUCATION:
            return m.Gj.Education;
        case E.vf.HUBS:
            return m.gU;
        default:
            (0, l.vE)(e);
    }
}
function C(e) {
    return null == e || Date.now() - e > E.AF;
}
function N(e) {
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
function A() {
    var e;
    let [t] = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [s.default],
        n = m.dU,
        i = t.locale;
    return (null !== (e = n.find((e) => e.code === i)) && void 0 !== e ? e : n[0]).code;
}
function v(e) {
    let { loadId: t, categoryId: n, offset: i, query: a, languageCode: s } = e;
    '' !== a.trim() &&
        (o.tI(t, n),
        c.Z.fetchAlgoliaSearchResults(a, {
            categoryId: n,
            languageCode: s,
            offset: i,
            length: 12,
            filters: { approximate_member_count: o.sq }
        }));
}
function Z(e) {
    let { loadId: t, categoryId: n, query: i, languageCode: a, offset: s } = e;
    if (
        !u.Z.getIsFetching({
            query: i,
            categoryId: n,
            languageCode: a
        })
    )
        u.Z.getIsInitialFetchComplete({
            query: i,
            categoryId: n,
            languageCode: a
        }) &&
            v({
                loadId: t,
                categoryId: n,
                query: i,
                languageCode: a,
                offset: s
            });
}
function L(e) {
    let { loadId: t, categoryId: n, query: i, languageCode: a } = e,
        s = u.Z.getIsFetching({
            query: i,
            categoryId: n,
            languageCode: a
        }),
        r = u.Z.getIsInitialFetchComplete({
            query: i,
            categoryId: n,
            languageCode: a
        });
    !s &&
        !r &&
        v({
            loadId: t,
            categoryId: n,
            query: i,
            languageCode: a,
            offset: 0
        });
}
async function R(e) {
    return (
        !(0, a.x)(e) &&
        (
            await i.tn.get({
                url: h.ANM.GUILD_DISCOVERY_VALID_TERM,
                query: { term: e },
                oldFormErrors: !0
            })
        ).body.valid
    );
}
async function O(e) {
    let { loadId: t, categoryId: n, query: i, languageCode: a } = e;
    if ('' === i.trim()) return;
    let s = d.Z.getIsFetchingCounts(i),
        r = d.Z.getIsFetchingCounts(i);
    if (!s && !r) {
        if (
            ((0, _.LD)({
                fetchedQuery: i,
                resultsQuery: ''
            }),
            u.Z.getIsBlocked(i) || !(await R(i)))
        ) {
            c.Z.handleBlockedSearchQuery(i);
            return;
        }
        c.Z.fetchAlgoliaSearchResultCounts({
            query: i,
            algoliaFilters: { approximate_member_count: o.sq },
            onComplete: () => {
                (0, _.LD)({ resultsQuery: i });
            }
        }),
            L({
                loadId: t,
                categoryId: n,
                query: i,
                languageCode: a
            });
    }
}
async function x(e) {
    let { loadId: t, guildId: n, index: i, categoryId: a, analyticsLocation: s, options: l } = e,
        c = {
            ...l,
            loadId: t
        };
    await o.Ub(n, s, c),
        r.default.track(h.rMx.GUILD_DISCOVERY_GUILD_SELECTED, {
            guild_id: n,
            load_id: t,
            card_index: i,
            category_id: a,
            location: s
        });
}
