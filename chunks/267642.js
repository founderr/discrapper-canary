n.d(t, {
    A3: function () {
        return S;
    },
    FZ: function () {
        return T;
    },
    Je: function () {
        return N;
    },
    KK: function () {
        return V;
    },
    Qi: function () {
        return B;
    },
    Ro: function () {
        return r;
    },
    U2: function () {
        return A;
    },
    Vx: function () {
        return U;
    },
    _k: function () {
        return w;
    },
    _p: function () {
        return C;
    },
    aq: function () {
        return P;
    },
    cP: function () {
        return R;
    },
    e9: function () {
        return v;
    },
    f2: function () {
        return b;
    },
    gZ: function () {
        return k;
    },
    ge: function () {
        return L;
    },
    ig: function () {
        return g;
    },
    nW: function () {
        return O;
    },
    rF: function () {
        return D;
    },
    tb: function () {
        return y;
    },
    tl: function () {
        return H;
    },
    vn: function () {
        return x;
    },
    vx: function () {
        return M;
    },
    yw: function () {
        return F;
    }
}),
    n(411104),
    n(47120),
    n(724458);
var r,
    i,
    a = n(392711),
    s = n.n(a);
n(913527);
var o = n(274136),
    l = n(179360),
    u = n(314884),
    c = n(78839),
    d = n(424218),
    _ = n(823379),
    E = n(63063),
    f = n(74538),
    h = n(981631),
    p = n(474936),
    I = n(689938);
Object.freeze({
    1: 1,
    2: 2,
    3: 3,
    4: 6,
    5: 9,
    6: 12,
    7: 15,
    8: 18,
    9: 24
});
((i = r || (r = {}))[(i.EMOJI = 1)] = 'EMOJI'), (i[(i.AUDIO = 2)] = 'AUDIO'), (i[(i.ANIMATED = 3)] = 'ANIMATED'), (i[(i.CUSTOMIZATION = 4)] = 'CUSTOMIZATION'), (i[(i.UPLOAD = 5)] = 'UPLOAD'), (i[(i.VANITY = 6)] = 'VANITY'), (i[(i.STREAM = 7)] = 'STREAM'), (i[(i.STICKER = 8)] = 'STICKER'), (i[(i.CUSTOM_ROLE_ICON = 11)] = 'CUSTOM_ROLE_ICON'), (i[(i.STAGE_VIDEO = 12)] = 'STAGE_VIDEO'), (i[(i.SOUNDBOARD = 13)] = 'SOUNDBOARD');
let m = [h.Eu4.NONE, h.Eu4.TIER_1, h.Eu4.TIER_2, h.Eu4.TIER_3],
    T = (e, t) => {
        var n;
        return e === h.Eu4.NONE ? h.Eu4.TIER_1 : null === (n = G(t).find((t) => t.tier === e)) || void 0 === n ? void 0 : n.nextTier;
    },
    S = (e, t) => (null != t && t.hasFeature(h.oNc.MORE_STICKERS) && e === h.Eu4.TIER_3 ? o.D.MAX_STICKER_SLOTS : p.$8[e]),
    g = (e) => p.pH[e],
    A = (e, t) => (null != t && t.hasFeature(h.oNc.MORE_SOUNDBOARD) ? 96 : p._k[e]),
    N = (e) => {
        if (e === h.Eu4.NONE) return p._k[e];
        let t = m[m.indexOf(e) - 1];
        return p._k[e] - p._k[t];
    },
    R = (e) => [
        {
            tier: h.Eu4.TIER_1,
            title: I.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERKS_TITLE_TIER_1,
            perks: [
                {
                    title: I.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_EMOJI.format({
                        adding: p.HO[h.Eu4.TIER_1].limits.emoji - p.HO[h.Eu4.NONE].limits.emoji,
                        total: p.HO[h.Eu4.TIER_1].limits.emoji
                    }),
                    description: I.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_1_EMOJI,
                    icon: 1
                },
                {
                    title: I.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_STICKER.format({
                        adding: g(h.Eu4.TIER_1),
                        total: S(h.Eu4.TIER_1)
                    }),
                    description: I.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_1_STICKER,
                    icon: 8
                },
                {
                    title: I.Z.Messages.SOUNDBOARD_MARKETING_BOOSTING_PERKS.format({
                        soundCount: N(h.Eu4.TIER_1),
                        totalSoundCount: A(h.Eu4.TIER_1)
                    }),
                    description: I.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_1_SOUNDBOARD,
                    icon: 13
                },
                {
                    title: I.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_AUDIO_QUALITY.format({ bitrate: p.HO[h.Eu4.TIER_1].limits.bitrate / 1000 }),
                    description: I.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_1_AUDIO_QUALITY,
                    icon: 2
                },
                {
                    title: I.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_1_ANIMATED_GUILD_ICON,
                    description: I.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_1_ANIMATED_GUILD_ICON.format(),
                    icon: 3
                },
                {
                    title: I.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_1_SPLASH,
                    description: I.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_1_SPLASH,
                    icon: 4
                },
                {
                    title: I.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_1_STREAMING,
                    description: I.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_1_STREAMING,
                    icon: 7
                }
            ].filter(_.lm)
        },
        {
            tier: h.Eu4.TIER_2,
            title: I.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERKS_TITLE_TIER_2,
            perks: [
                {
                    title: I.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_EMOJI.format({
                        adding: p.HO[h.Eu4.TIER_2].limits.emoji - p.HO[h.Eu4.TIER_1].limits.emoji,
                        total: p.HO[h.Eu4.TIER_2].limits.emoji
                    }),
                    description: I.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_EMOJI,
                    icon: 1
                },
                {
                    title: I.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_STICKER.format({
                        adding: g(h.Eu4.TIER_2),
                        total: S(h.Eu4.TIER_2)
                    }),
                    description: I.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_STICKER,
                    icon: 8
                },
                {
                    title: I.Z.Messages.SOUNDBOARD_MARKETING_BOOSTING_PERKS.format({
                        soundCount: N(h.Eu4.TIER_2),
                        totalSoundCount: A(h.Eu4.TIER_2)
                    }),
                    description: I.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_SOUNDBOARD,
                    icon: 13
                },
                {
                    title: I.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_AUDIO_QUALITY.format({ bitrate: p.HO[h.Eu4.TIER_2].limits.bitrate / 1000 }),
                    description: I.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_AUDIO_QUALITY,
                    icon: 2
                },
                {
                    title: I.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_2_BANNER,
                    description: I.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_BANNER,
                    icon: 4
                },
                {
                    title: I.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_UPLOAD_LIMIT.format({ fileSize: (0, d.BU)(p.HO[h.Eu4.TIER_2].limits.fileSize / 1024, { useKibibytes: !0 }) }),
                    description: I.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_UPLOAD_LIMIT.format(),
                    icon: 5
                },
                {
                    title: I.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_2_STREAMING,
                    description: I.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_STREAMING,
                    icon: 7
                },
                {
                    title: I.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_2_CUSTOM_ROLE_ICONS,
                    description: I.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_CUSTOM_ROLE_ICONS,
                    icon: 11
                },
                e
                    ? {
                          title: I.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_VIDEO_STAGE.format({ limit: h.eez }),
                          description: I.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_VIDEO_STAGE.format({ limit: h.eez }),
                          icon: 12
                      }
                    : null
            ].filter(_.lm)
        },
        {
            tier: h.Eu4.TIER_3,
            title: I.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERKS_TITLE_TIER_3,
            perks: [
                {
                    title: I.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_EMOJI.format({
                        adding: p.HO[h.Eu4.TIER_3].limits.emoji - p.HO[h.Eu4.TIER_2].limits.emoji,
                        total: p.HO[h.Eu4.TIER_3].limits.emoji
                    }),
                    description: I.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_3_EMOJI,
                    icon: 1
                },
                {
                    title: I.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_STICKER.format({
                        adding: g(h.Eu4.TIER_3),
                        total: S(h.Eu4.TIER_3)
                    }),
                    description: I.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_3_STICKER,
                    icon: 8
                },
                {
                    title: I.Z.Messages.SOUNDBOARD_MARKETING_BOOSTING_PERKS.format({
                        soundCount: N(h.Eu4.TIER_3),
                        totalSoundCount: A(h.Eu4.TIER_3)
                    }),
                    description: I.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_3_SOUNDBOARD,
                    icon: 13
                },
                {
                    title: I.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_AUDIO_QUALITY.format({ bitrate: p.HO[h.Eu4.TIER_3].limits.bitrate / 1000 }),
                    description: I.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_3_AUDIO_QUALITY,
                    icon: 2
                },
                {
                    title: I.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_3_VANITY_URL,
                    description: I.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_3_VANITY_URL.format({ helpdeskArticle: E.Z.getArticleURL(h.BhN.GUILD_VANITY_URL) }),
                    icon: 6
                },
                {
                    title: I.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_UPLOAD_LIMIT.format({ fileSize: (0, d.BU)(p.HO[h.Eu4.TIER_3].limits.fileSize / 1024, { useKibibytes: !0 }) }),
                    description: I.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_3_UPLOAD_LIMIT.format(),
                    icon: 5
                },
                {
                    title: I.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_3_ANIMATED_BANNER,
                    description: I.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_3_ANIMATED_BANNER,
                    icon: 3
                },
                e
                    ? {
                          title: I.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_VIDEO_STAGE.format({ limit: h.RcX }),
                          description: I.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_VIDEO_STAGE.format({ limit: h.RcX }),
                          icon: 12
                      }
                    : null
            ].filter(_.lm)
        }
    ];
function O(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { useLevels: n = !0 } = t;
    switch (e) {
        case h.Eu4.NONE:
            return n ? I.Z.Messages.PREMIUM_GUILD_TIER_0 : I.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_NONE_NAME;
        case h.Eu4.TIER_1:
            return I.Z.Messages.PREMIUM_GUILD_TIER_1;
        case h.Eu4.TIER_2:
            return I.Z.Messages.PREMIUM_GUILD_TIER_2;
        case h.Eu4.TIER_3:
            return I.Z.Messages.PREMIUM_GUILD_TIER_3;
        default:
            throw Error('Not a valid tier type');
    }
}
function v(e) {
    switch (e) {
        case h.Eu4.NONE:
            return I.Z.Messages.PREMIUM_GUILD_TIER_0;
        case h.Eu4.TIER_1:
            return I.Z.Messages.PREMIUM_GUILD_TIER_1_SHORT;
        case h.Eu4.TIER_2:
            return I.Z.Messages.PREMIUM_GUILD_TIER_2_SHORT;
        case h.Eu4.TIER_3:
            return I.Z.Messages.PREMIUM_GUILD_TIER_3_SHORT;
        default:
            throw Error('Not a valid tier type');
    }
}
let C = s().memoize((e) => (p.HO[h.Eu4.TIER_1].features.includes(e) ? h.Eu4.TIER_1 : p.HO[h.Eu4.TIER_2].features.includes(e) ? h.Eu4.TIER_2 : p.HO[h.Eu4.TIER_3].features.includes(e) ? h.Eu4.TIER_3 : null)),
    L = (e) => {
        if (e === h.Eu4.NONE) return h.Qqv.NONE;
        if (e === h.Eu4.TIER_1) return h.Qqv.TIER_1;
        if (e === h.Eu4.TIER_2) return h.Qqv.TIER_2;
        else if (e === h.Eu4.TIER_3) return h.Qqv.TIER_3;
        return null;
    };
function D(e, t) {
    for (let n of G(t)) if (e >= n.amount) return n.tier;
    return h.Eu4.NONE;
}
function y(e, t) {
    return null == t || (null != e && e >= t);
}
function b(e, t) {
    return y(e.premiumTier, t);
}
function M(e) {
    return s()
        .values(e)
        .filter((e) => e.isAvailable());
}
function P(e) {
    let { fractionalState: t } = e,
        n = c.ZP.getPremiumTypeSubscription();
    !u.Z.hasFetched && (0, l.X8)();
    let r = M(u.Z.boostSlots);
    if ((null == n ? void 0 : n.isPausedOrPausePending) && (t === p.a$.NONE || 0 === r.length)) return I.Z.Messages.GUILD_BOOSTING_DISABLED_FOR_PAUSED_SUBSCRIPTION;
    let { numAvailableGuildBoostSlots: i, numCanceledGuildBoostSlots: a } = Object.values(u.Z.boostSlots).reduce((e, t) => (H(t) && e.numCanceledGuildBoostSlots++, t.isAvailable() && e.numAvailableGuildBoostSlots++, e), {
        numAvailableGuildBoostSlots: 0,
        numCanceledGuildBoostSlots: 0
    });
    if (null == n || i > 0) return null;
    if (n.status === h.O0b.PAST_DUE) return I.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_PURCHASE_BUTTON_DISABLED_SUBSCRIPTION_PAST_DUE;
    if (n.status === h.O0b.ACCOUNT_HOLD) return I.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_PURCHASE_BUTTON_DISABLED_SUBSCRIPTION_ACCOUNT_HOLD;
    if (a > 0) return I.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_PURCHASE_BUTTON_DISABLED_PENDING_MUTATION_PREMIUM_GUILD_SUBSCRIPTION;
    if (null == n.renewalMutations) return null;
    let s = f.uV(n.renewalMutations.additionalPlans);
    return f.uV(n.additionalPlans) > s ? I.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_PURCHASE_BUTTON_DISABLED_PENDING_MUTATION_PREMIUM_GUILD_SUBSCRIPTION : I.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_PURCHASE_BUTTON_DISABLED_PENDING_MUTATION_PLAN;
}
function U(e, t) {
    return w(e, t) > 0;
}
function w(e, t) {
    let n = D(e.length, t),
        r = x(t)[n],
        i = e.filter((e) => null != e.endsAt);
    return r - (e.length - i.length);
}
function x(e) {
    return h.oCV;
}
function G(e) {
    let t = x(e);
    return [
        {
            tier: h.Eu4.TIER_3,
            amount: t[h.Eu4.TIER_3],
            nextTier: null
        },
        {
            tier: h.Eu4.TIER_2,
            amount: t[h.Eu4.TIER_2],
            nextTier: h.Eu4.TIER_3
        },
        {
            tier: h.Eu4.TIER_1,
            amount: t[h.Eu4.TIER_1],
            nextTier: h.Eu4.TIER_2
        }
    ];
}
function k(e, t) {
    let n = w(e, t);
    if (n > 0) {
        let t = e.sort((e, t) => (null != e.endsAt && null != t.endsAt ? e.endsAt.getTime() - t.endsAt.getTime() : -1)).filter((e) => null != e.endsAt);
        return t[t.length - n].endsAt;
    }
    return null;
}
function B(e, t) {
    let n = g(t),
        r = m.indexOf(t);
    if (-1 === r) return 0;
    let i = m[r - 1],
        a = null != i ? S(i) : 0,
        s = S(t);
    return Math.max(0, n - e.slice(a, s).length);
}
function F(e, t, n) {
    return -1 === m.indexOf(n) ? 0 : Math.max(0, A(n, e) - t.length);
}
function V(e, t) {
    let n = e.premiumSubscriberCount;
    return Math.max(0, x(e.id)[t] - n);
}
function H(e) {
    var t;
    return (null === (t = e.subscription) || void 0 === t ? void 0 : t.status) === h.O0b.CANCELED || e.canceled;
}
