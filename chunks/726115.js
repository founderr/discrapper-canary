n.d(t, {
    Ew: function () {
        return g;
    },
    Iv: function () {
        return v;
    },
    Mf: function () {
        return _;
    },
    PM: function () {
        return b;
    },
    QW: function () {
        return h;
    },
    Uv: function () {
        return E;
    },
    Xp: function () {
        return I;
    },
    a$: function () {
        return p;
    },
    lg: function () {
        return m;
    },
    vL: function () {
        return T;
    },
    vb: function () {
        return f;
    }
}),
    n(411104),
    n(47120),
    n(757143);
var r = n(772848),
    i = n(706454),
    a = n(626135),
    s = n(823379),
    o = n(900849);
n(275131), n(356164);
var l = n(128449),
    u = n(981631),
    c = n(731455),
    d = n(388032);
function f(e) {
    switch (e) {
        case l.vf.FEATURED:
            return d.intl.string(d.t['RU+DCQ']);
        case l.vf.GAMING:
            return d.intl.string(d.t['CD/USE']);
        case l.vf.MUSIC:
            return d.intl.string(d.t.nt9PLy);
        case l.vf.ENTERTAINMENT:
            return d.intl.string(d.t.gSbmdn);
        case l.vf.TECH:
            return d.intl.string(d.t['0A0By8']);
        case l.vf.EDUCATION:
            return d.intl.string(d.t.Gy9woq);
        case l.vf.HUBS:
            return d.intl.string(d.t['q469/f']);
    }
}
function _(e) {
    switch (e) {
        case l.vf.FEATURED:
            return d.intl.string(d.t.OlDfzM);
        case l.vf.GAMING:
            return d.intl.string(d.t['CD/USE']);
        case l.vf.MUSIC:
            return d.intl.string(d.t.nt9PLy);
        case l.vf.ENTERTAINMENT:
            return d.intl.string(d.t.gSbmdn);
        case l.vf.TECH:
            return d.intl.string(d.t['0A0By8']);
        case l.vf.EDUCATION:
            return d.intl.string(d.t.Gy9woq);
        case l.vf.HUBS:
            return d.intl.string(d.t.X5xPlZ);
        default:
            throw Error('[getGlobalDiscoveryServerTabTitle] Unsupported tab: '.concat(e));
    }
}
function p(e) {
    switch (e) {
        case l.vf.FEATURED:
            return d.intl.string(d.t.SdMhrq);
        case l.vf.GAMING:
            return d.intl.string(d.t.AAJ5oq);
        case l.vf.MUSIC:
            return d.intl.string(d.t['SOio+P']);
        case l.vf.ENTERTAINMENT:
            return d.intl.string(d.t.R09vf3);
        case l.vf.TECH:
            return d.intl.string(d.t['Ew4d5+']);
        case l.vf.EDUCATION:
            return d.intl.string(d.t.sasIWV);
        case l.vf.HUBS:
            return d.intl.string(d.t['F/IQCA']);
        default:
            throw Error('[getGlobalDiscoveryServerTabTitle] Unsupported tab: '.concat(e));
    }
}
function h(e) {
    switch (e) {
        case l.vf.FEATURED:
            return d.intl.string(d.t.crt84e);
        case l.vf.GAMING:
            return d.intl.string(d.t.fWbIpa);
        case l.vf.MUSIC:
            return d.intl.string(d.t.nfgDz8);
        case l.vf.ENTERTAINMENT:
            return d.intl.string(d.t.k1CYxs);
        case l.vf.TECH:
            return d.intl.string(d.t['4dawpq']);
        case l.vf.EDUCATION:
            return d.intl.string(d.t.uexPgY);
        default:
            return null;
    }
}
function m(e) {
    switch (e) {
        case l.vf.FEATURED:
            return c.Hk;
        case l.vf.GAMING:
            return c.Gj.Activity;
        case l.vf.MUSIC:
            return c.Gj.Music;
        case l.vf.ENTERTAINMENT:
            return c.Gj.Television;
        case l.vf.TECH:
            return c.Gj.Science;
        case l.vf.EDUCATION:
            return c.Gj.Education;
        case l.vf.HUBS:
            return c.gU;
        default:
            (0, s.vE)(e);
    }
}
function g(e) {
    return null == e || Date.now() - e > l.AF;
}
function E(e) {
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
function v(e) {
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
        premiumSubscriptionCount: void 0,
        preferredLocale: void 0,
        discoverySplash: e.discovery_splash,
        emojis: []
    };
}
function I() {
    var e;
    let [t] = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [i.default],
        n = (0, c.Cf)(),
        r = t.locale;
    return (null !== (e = n.find((e) => e.code === r)) && void 0 !== e ? e : n[0]).code;
}
async function T(e) {
    let { loadId: t, guildId: n, index: r, categoryId: i, analyticsLocation: s, options: l } = e,
        c = {
            ...l,
            loadId: t
        };
    await o.Ub(n, s, c),
        a.default.track(u.rMx.GUILD_DISCOVERY_GUILD_SELECTED, {
            guild_id: n,
            load_id: t,
            card_index: r,
            category_id: i,
            location: s
        });
}
function b() {
    return (0, r.Z)().replace(/-/g, '');
}
