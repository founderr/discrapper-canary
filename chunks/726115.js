n.d(t, {
    CD: function () {
        return C;
    },
    Ew: function () {
        return S;
    },
    Mf: function () {
        return v;
    },
    NL: function () {
        return D;
    },
    PM: function () {
        return x;
    },
    QW: function () {
        return b;
    },
    U0: function () {
        return y;
    },
    Xp: function () {
        return A;
    },
    a$: function () {
        return I;
    },
    lg: function () {
        return T;
    },
    oT: function () {
        return R;
    },
    vL: function () {
        return L;
    },
    vb: function () {
        return E;
    }
}),
    n(411104),
    n(47120),
    n(757143);
var r = n(772848),
    i = n(544891),
    a = n(401919),
    s = n(706454),
    o = n(626135),
    l = n(823379),
    u = n(900849),
    c = n(762692);
n(275131);
var d = n(331114),
    f = n(356164),
    _ = n(164991),
    p = n(128449),
    h = n(981631),
    m = n(731455),
    g = n(388032);
function E(e) {
    switch (e) {
        case p.vf.FEATURED:
            return g.intl.string(g.t['RU+DCQ']);
        case p.vf.GAMING:
            return g.intl.string(g.t['CD/USE']);
        case p.vf.MUSIC:
            return g.intl.string(g.t.nt9PLy);
        case p.vf.ENTERTAINMENT:
            return g.intl.string(g.t.gSbmdn);
        case p.vf.TECH:
            return g.intl.string(g.t['0A0By8']);
        case p.vf.EDUCATION:
            return g.intl.string(g.t.Gy9woq);
        case p.vf.HUBS:
            return g.intl.string(g.t['q469/f']);
    }
}
function v(e) {
    switch (e) {
        case p.vf.FEATURED:
            return g.intl.string(g.t.OlDfzM);
        case p.vf.GAMING:
            return g.intl.string(g.t['CD/USE']);
        case p.vf.MUSIC:
            return g.intl.string(g.t.nt9PLy);
        case p.vf.ENTERTAINMENT:
            return g.intl.string(g.t.gSbmdn);
        case p.vf.TECH:
            return g.intl.string(g.t['0A0By8']);
        case p.vf.EDUCATION:
            return g.intl.string(g.t.Gy9woq);
        case p.vf.HUBS:
            return g.intl.string(g.t.X5xPlZ);
        default:
            throw Error('[getGlobalDiscoveryServerTabTitle] Unsupported tab: '.concat(e));
    }
}
function I(e) {
    switch (e) {
        case p.vf.FEATURED:
            return g.intl.string(g.t.SdMhrq);
        case p.vf.GAMING:
            return g.intl.string(g.t.AAJ5oq);
        case p.vf.MUSIC:
            return g.intl.string(g.t['SOio+P']);
        case p.vf.ENTERTAINMENT:
            return g.intl.string(g.t.R09vf3);
        case p.vf.TECH:
            return g.intl.string(g.t['Ew4d5+']);
        case p.vf.EDUCATION:
            return g.intl.string(g.t.sasIWV);
        case p.vf.HUBS:
            return g.intl.string(g.t['F/IQCA']);
        default:
            throw Error('[getGlobalDiscoveryServerTabTitle] Unsupported tab: '.concat(e));
    }
}
function b(e) {
    switch (e) {
        case p.vf.FEATURED:
            return g.intl.string(g.t.crt84e);
        case p.vf.GAMING:
            return g.intl.string(g.t.fWbIpa);
        case p.vf.MUSIC:
            return g.intl.string(g.t.nfgDz8);
        case p.vf.ENTERTAINMENT:
            return g.intl.string(g.t.k1CYxs);
        case p.vf.TECH:
            return g.intl.string(g.t['4dawpq']);
        case p.vf.EDUCATION:
            return g.intl.string(g.t.uexPgY);
        default:
            return null;
    }
}
function T(e) {
    switch (e) {
        case p.vf.FEATURED:
            return m.Hk;
        case p.vf.GAMING:
            return m.Gj.Activity;
        case p.vf.MUSIC:
            return m.Gj.Music;
        case p.vf.ENTERTAINMENT:
            return m.Gj.Television;
        case p.vf.TECH:
            return m.Gj.Science;
        case p.vf.EDUCATION:
            return m.Gj.Education;
        case p.vf.HUBS:
            return m.gU;
        default:
            (0, l.vE)(e);
    }
}
function S(e) {
    return null == e || Date.now() - e > p.AF;
}
function y(e) {
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
        n = (0, m.Cf)(),
        r = t.locale;
    return (null !== (e = n.find((e) => e.code === r)) && void 0 !== e ? e : n[0]).code;
}
function N(e) {
    let { loadId: t, categoryId: n, offset: r, query: i, languageCode: a } = e;
    '' !== i.trim() &&
        (u.tI(t, n),
        c.Z.fetchAlgoliaSearchResults(i, {
            categoryId: n,
            languageCode: a,
            offset: r,
            length: 12,
            filters: { approximate_member_count: u.sq }
        }));
}
function C(e) {
    let { loadId: t, categoryId: n, query: r, languageCode: i, offset: a } = e;
    if (
        !f.Z.getIsFetching({
            query: r,
            categoryId: n,
            languageCode: i
        })
    )
        f.Z.getIsInitialFetchComplete({
            query: r,
            categoryId: n,
            languageCode: i
        }) &&
            N({
                loadId: t,
                categoryId: n,
                query: r,
                languageCode: i,
                offset: a
            });
}
function R(e) {
    let { loadId: t, categoryId: n, query: r, languageCode: i } = e,
        a = f.Z.getIsFetching({
            query: r,
            categoryId: n,
            languageCode: i
        }),
        s = f.Z.getIsInitialFetchComplete({
            query: r,
            categoryId: n,
            languageCode: i
        });
    !a &&
        !s &&
        N({
            loadId: t,
            categoryId: n,
            query: r,
            languageCode: i,
            offset: 0
        });
}
async function O(e) {
    return (
        !(0, a.x)(e) &&
        (
            await i.tn.get({
                url: h.ANM.GUILD_DISCOVERY_VALID_TERM,
                query: { term: e },
                oldFormErrors: !0,
                rejectWithError: !1
            })
        ).body.valid
    );
}
async function D(e) {
    let { loadId: t, categoryId: n, query: r, languageCode: i } = e;
    if ('' === r.trim()) return;
    let a = d.Z.getIsFetchingCounts(r),
        s = d.Z.getIsFetchingCounts(r);
    if (!a && !s) {
        if (
            (_.Z.setState({
                fetchedQuery: r,
                resultsQuery: ''
            }),
            f.Z.getIsBlocked(r) || !(await O(r)))
        ) {
            c.Z.handleBlockedSearchQuery(r);
            return;
        }
        c.Z.fetchAlgoliaSearchResultCounts({
            query: r,
            algoliaFilters: { approximate_member_count: u.sq },
            onComplete: () => {
                _.Z.setState({ resultsQuery: r });
            }
        }),
            R({
                loadId: t,
                categoryId: n,
                query: r,
                languageCode: i
            });
    }
}
async function L(e) {
    let { loadId: t, guildId: n, index: r, categoryId: i, analyticsLocation: a, options: s } = e,
        l = {
            ...s,
            loadId: t
        };
    await u.Ub(n, a, l),
        o.default.track(h.rMx.GUILD_DISCOVERY_GUILD_SELECTED, {
            guild_id: n,
            load_id: t,
            card_index: r,
            category_id: i,
            location: a
        });
}
function x() {
    return (0, r.Z)().replace(/-/g, '');
}
