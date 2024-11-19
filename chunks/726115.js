n.d(t, {
    CD: function () {
        return N;
    },
    Ew: function () {
        return T;
    },
    Mf: function () {
        return E;
    },
    NL: function () {
        return O;
    },
    QW: function () {
        return b;
    },
    U0: function () {
        return S;
    },
    Xp: function () {
        return y;
    },
    a$: function () {
        return v;
    },
    lg: function () {
        return I;
    },
    oT: function () {
        return C;
    },
    vL: function () {
        return D;
    },
    vb: function () {
        return g;
    }
}),
    n(411104),
    n(47120);
var r = n(544891),
    i = n(401919),
    a = n(706454),
    s = n(626135),
    o = n(823379),
    l = n(900849),
    u = n(762692);
n(275131);
var c = n(331114),
    d = n(356164),
    f = n(164991),
    _ = n(128449),
    p = n(981631),
    h = n(731455),
    m = n(388032);
function g(e) {
    switch (e) {
        case _.vf.FEATURED:
            return m.intl.string(m.t['RU+DCQ']);
        case _.vf.GAMING:
            return m.intl.string(m.t['CD/USE']);
        case _.vf.MUSIC:
            return m.intl.string(m.t.nt9PLy);
        case _.vf.ENTERTAINMENT:
            return m.intl.string(m.t.gSbmdn);
        case _.vf.TECH:
            return m.intl.string(m.t['0A0By8']);
        case _.vf.EDUCATION:
            return m.intl.string(m.t.Gy9woq);
        case _.vf.HUBS:
            return m.intl.string(m.t['q469/f']);
    }
}
function E(e) {
    switch (e) {
        case _.vf.FEATURED:
            return m.intl.string(m.t.OlDfzM);
        case _.vf.GAMING:
            return m.intl.string(m.t['CD/USE']);
        case _.vf.MUSIC:
            return m.intl.string(m.t.nt9PLy);
        case _.vf.ENTERTAINMENT:
            return m.intl.string(m.t.gSbmdn);
        case _.vf.TECH:
            return m.intl.string(m.t['0A0By8']);
        case _.vf.EDUCATION:
            return m.intl.string(m.t.Gy9woq);
        case _.vf.HUBS:
            return m.intl.string(m.t.X5xPlZ);
        default:
            throw Error('[getGlobalDiscoveryServerTabTitle] Unsupported tab: '.concat(e));
    }
}
function v(e) {
    switch (e) {
        case _.vf.FEATURED:
            return m.intl.string(m.t.SdMhrq);
        case _.vf.GAMING:
            return m.intl.string(m.t.AAJ5oq);
        case _.vf.MUSIC:
            return m.intl.string(m.t['SOio+P']);
        case _.vf.ENTERTAINMENT:
            return m.intl.string(m.t.R09vf3);
        case _.vf.TECH:
            return m.intl.string(m.t['Ew4d5+']);
        case _.vf.EDUCATION:
            return m.intl.string(m.t.sasIWV);
        case _.vf.HUBS:
            return m.intl.string(m.t['F/IQCA']);
        default:
            throw Error('[getGlobalDiscoveryServerTabTitle] Unsupported tab: '.concat(e));
    }
}
function b(e) {
    switch (e) {
        case _.vf.FEATURED:
            return m.intl.string(m.t.crt84e);
        case _.vf.GAMING:
            return m.intl.string(m.t.fWbIpa);
        case _.vf.MUSIC:
            return m.intl.string(m.t.nfgDz8);
        case _.vf.ENTERTAINMENT:
            return m.intl.string(m.t.k1CYxs);
        case _.vf.TECH:
            return m.intl.string(m.t['4dawpq']);
        case _.vf.EDUCATION:
            return m.intl.string(m.t.uexPgY);
        default:
            return null;
    }
}
function I(e) {
    switch (e) {
        case _.vf.FEATURED:
            return h.Hk;
        case _.vf.GAMING:
            return h.Gj.Activity;
        case _.vf.MUSIC:
            return h.Gj.Music;
        case _.vf.ENTERTAINMENT:
            return h.Gj.Television;
        case _.vf.TECH:
            return h.Gj.Science;
        case _.vf.EDUCATION:
            return h.Gj.Education;
        case _.vf.HUBS:
            return h.gU;
        default:
            (0, o.vE)(e);
    }
}
function T(e) {
    return null == e || Date.now() - e > _.AF;
}
function S(e) {
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
function y() {
    var e;
    let [t] = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [a.default],
        n = (0, h.Cf)(),
        r = t.locale;
    return (null !== (e = n.find((e) => e.code === r)) && void 0 !== e ? e : n[0]).code;
}
function A(e) {
    let { loadId: t, categoryId: n, offset: r, query: i, languageCode: a } = e;
    '' !== i.trim() &&
        (l.tI(t, n),
        u.Z.fetchAlgoliaSearchResults(i, {
            categoryId: n,
            languageCode: a,
            offset: r,
            length: 12,
            filters: { approximate_member_count: l.sq }
        }));
}
function N(e) {
    let { loadId: t, categoryId: n, query: r, languageCode: i, offset: a } = e;
    if (
        !d.Z.getIsFetching({
            query: r,
            categoryId: n,
            languageCode: i
        })
    )
        d.Z.getIsInitialFetchComplete({
            query: r,
            categoryId: n,
            languageCode: i
        }) &&
            A({
                loadId: t,
                categoryId: n,
                query: r,
                languageCode: i,
                offset: a
            });
}
function C(e) {
    let { loadId: t, categoryId: n, query: r, languageCode: i } = e,
        a = d.Z.getIsFetching({
            query: r,
            categoryId: n,
            languageCode: i
        }),
        s = d.Z.getIsInitialFetchComplete({
            query: r,
            categoryId: n,
            languageCode: i
        });
    !a &&
        !s &&
        A({
            loadId: t,
            categoryId: n,
            query: r,
            languageCode: i,
            offset: 0
        });
}
async function R(e) {
    return (
        !(0, i.x)(e) &&
        (
            await r.tn.get({
                url: p.ANM.GUILD_DISCOVERY_VALID_TERM,
                query: { term: e },
                oldFormErrors: !0,
                rejectWithError: !1
            })
        ).body.valid
    );
}
async function O(e) {
    let { loadId: t, categoryId: n, query: r, languageCode: i } = e;
    if ('' === r.trim()) return;
    let a = c.Z.getIsFetchingCounts(r),
        s = c.Z.getIsFetchingCounts(r);
    if (!a && !s) {
        if (
            (f.Z.setState({
                fetchedQuery: r,
                resultsQuery: ''
            }),
            d.Z.getIsBlocked(r) || !(await R(r)))
        ) {
            u.Z.handleBlockedSearchQuery(r);
            return;
        }
        u.Z.fetchAlgoliaSearchResultCounts({
            query: r,
            algoliaFilters: { approximate_member_count: l.sq },
            onComplete: () => {
                f.Z.setState({ resultsQuery: r });
            }
        }),
            C({
                loadId: t,
                categoryId: n,
                query: r,
                languageCode: i
            });
    }
}
async function D(e) {
    let { loadId: t, guildId: n, index: r, categoryId: i, analyticsLocation: a, options: o } = e,
        u = {
            ...o,
            loadId: t
        };
    await l.Ub(n, a, u),
        s.default.track(p.rMx.GUILD_DISCOVERY_GUILD_SELECTED, {
            guild_id: n,
            load_id: t,
            card_index: r,
            category_id: i,
            location: a
        });
}
