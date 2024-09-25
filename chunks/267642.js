n.d(t, {
    A3: function () {
        return N;
    },
    FZ: function () {
        return v;
    },
    Je: function () {
        return C;
    },
    KK: function () {
        return K;
    },
    Qi: function () {
        return j;
    },
    Ro: function () {
        return r;
    },
    U2: function () {
        return R;
    },
    Vx: function () {
        return F;
    },
    _k: function () {
        return Z;
    },
    _p: function () {
        return D;
    },
    aq: function () {
        return k;
    },
    cP: function () {
        return y;
    },
    e9: function () {
        return L;
    },
    f2: function () {
        return x;
    },
    gZ: function () {
        return Y;
    },
    ge: function () {
        return M;
    },
    ig: function () {
        return O;
    },
    nW: function () {
        return b;
    },
    rF: function () {
        return P;
    },
    tb: function () {
        return w;
    },
    tl: function () {
        return z;
    },
    vn: function () {
        return V;
    },
    vx: function () {
        return G;
    },
    yw: function () {
        return W;
    }
});
var r,
    i = n(411104);
var a = n(47120);
var o = n(724458);
var s = n(392711),
    l = n.n(s),
    u = n(913527);
var c = n(274136),
    d = n(314884),
    _ = n(78839),
    E = n(424218),
    f = n(823379),
    h = n(63063),
    p = n(74538),
    m = n(981631),
    I = n(474936),
    T = n(689938);
let g = Object.freeze({
        1: 1,
        2: 2,
        3: 3,
        4: 6,
        5: 9,
        6: 12,
        7: 15,
        8: 18,
        9: 24
    }),
    S = 96;
!(function (e) {
    (e[(e.EMOJI = 1)] = 'EMOJI'), (e[(e.AUDIO = 2)] = 'AUDIO'), (e[(e.ANIMATED = 3)] = 'ANIMATED'), (e[(e.CUSTOMIZATION = 4)] = 'CUSTOMIZATION'), (e[(e.UPLOAD = 5)] = 'UPLOAD'), (e[(e.VANITY = 6)] = 'VANITY'), (e[(e.STREAM = 7)] = 'STREAM'), (e[(e.STICKER = 8)] = 'STICKER'), (e[(e.CUSTOM_ROLE_ICON = 11)] = 'CUSTOM_ROLE_ICON'), (e[(e.STAGE_VIDEO = 12)] = 'STAGE_VIDEO'), (e[(e.SOUNDBOARD = 13)] = 'SOUNDBOARD');
})(r || (r = {}));
let A = [m.Eu4.NONE, m.Eu4.TIER_1, m.Eu4.TIER_2, m.Eu4.TIER_3],
    v = (e, t) => {
        var n;
        return e === m.Eu4.NONE ? m.Eu4.TIER_1 : null === (n = H(t).find((t) => t.tier === e)) || void 0 === n ? void 0 : n.nextTier;
    },
    N = (e, t) => (null != t && t.hasFeature(m.oNc.MORE_STICKERS) && e === m.Eu4.TIER_3 ? c.D.MAX_STICKER_SLOTS : I.$8[e]),
    O = (e) => I.pH[e],
    R = (e, t) => (null != t && t.hasFeature(m.oNc.MORE_SOUNDBOARD) ? S : I._k[e]),
    C = (e) => {
        if (e === m.Eu4.NONE) return I._k[e];
        let t = A[A.indexOf(e) - 1];
        return I._k[e] - I._k[t];
    },
    y = (e) => [
        {
            tier: m.Eu4.TIER_1,
            title: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERKS_TITLE_TIER_1,
            perks: [
                {
                    title: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_EMOJI.format({
                        adding: I.HO[m.Eu4.TIER_1].limits.emoji - I.HO[m.Eu4.NONE].limits.emoji,
                        total: I.HO[m.Eu4.TIER_1].limits.emoji
                    }),
                    description: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_1_EMOJI,
                    icon: 1
                },
                {
                    title: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_STICKER.format({
                        adding: O(m.Eu4.TIER_1),
                        total: N(m.Eu4.TIER_1)
                    }),
                    description: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_1_STICKER,
                    icon: 8
                },
                {
                    title: T.Z.Messages.SOUNDBOARD_MARKETING_BOOSTING_PERKS.format({
                        soundCount: C(m.Eu4.TIER_1),
                        totalSoundCount: R(m.Eu4.TIER_1)
                    }),
                    description: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_1_SOUNDBOARD,
                    icon: 13
                },
                {
                    title: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_AUDIO_QUALITY.format({ bitrate: I.HO[m.Eu4.TIER_1].limits.bitrate / 1000 }),
                    description: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_1_AUDIO_QUALITY,
                    icon: 2
                },
                {
                    title: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_1_ANIMATED_GUILD_ICON,
                    description: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_1_ANIMATED_GUILD_ICON.format(),
                    icon: 3
                },
                {
                    title: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_1_SPLASH,
                    description: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_1_SPLASH,
                    icon: 4
                },
                {
                    title: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_1_STREAMING,
                    description: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_1_STREAMING,
                    icon: 7
                }
            ].filter(f.lm)
        },
        {
            tier: m.Eu4.TIER_2,
            title: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERKS_TITLE_TIER_2,
            perks: [
                {
                    title: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_EMOJI.format({
                        adding: I.HO[m.Eu4.TIER_2].limits.emoji - I.HO[m.Eu4.TIER_1].limits.emoji,
                        total: I.HO[m.Eu4.TIER_2].limits.emoji
                    }),
                    description: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_EMOJI,
                    icon: 1
                },
                {
                    title: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_STICKER.format({
                        adding: O(m.Eu4.TIER_2),
                        total: N(m.Eu4.TIER_2)
                    }),
                    description: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_STICKER,
                    icon: 8
                },
                {
                    title: T.Z.Messages.SOUNDBOARD_MARKETING_BOOSTING_PERKS.format({
                        soundCount: C(m.Eu4.TIER_2),
                        totalSoundCount: R(m.Eu4.TIER_2)
                    }),
                    description: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_SOUNDBOARD,
                    icon: 13
                },
                {
                    title: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_AUDIO_QUALITY.format({ bitrate: I.HO[m.Eu4.TIER_2].limits.bitrate / 1000 }),
                    description: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_AUDIO_QUALITY,
                    icon: 2
                },
                {
                    title: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_2_BANNER,
                    description: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_BANNER,
                    icon: 4
                },
                {
                    title: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_UPLOAD_LIMIT.format({ fileSize: (0, E.BU)(I.HO[m.Eu4.TIER_2].limits.fileSize / 1024, { useKibibytes: !0 }) }),
                    description: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_UPLOAD_LIMIT.format(),
                    icon: 5
                },
                {
                    title: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_2_STREAMING,
                    description: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_STREAMING,
                    icon: 7
                },
                {
                    title: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_2_CUSTOM_ROLE_ICONS,
                    description: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_CUSTOM_ROLE_ICONS,
                    icon: 11
                },
                e
                    ? {
                          title: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_VIDEO_STAGE.format({ limit: m.eez }),
                          description: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_VIDEO_STAGE.format({ limit: m.eez }),
                          icon: 12
                      }
                    : null
            ].filter(f.lm)
        },
        {
            tier: m.Eu4.TIER_3,
            title: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERKS_TITLE_TIER_3,
            perks: [
                {
                    title: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_EMOJI.format({
                        adding: I.HO[m.Eu4.TIER_3].limits.emoji - I.HO[m.Eu4.TIER_2].limits.emoji,
                        total: I.HO[m.Eu4.TIER_3].limits.emoji
                    }),
                    description: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_3_EMOJI,
                    icon: 1
                },
                {
                    title: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_STICKER.format({
                        adding: O(m.Eu4.TIER_3),
                        total: N(m.Eu4.TIER_3)
                    }),
                    description: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_3_STICKER,
                    icon: 8
                },
                {
                    title: T.Z.Messages.SOUNDBOARD_MARKETING_BOOSTING_PERKS.format({
                        soundCount: C(m.Eu4.TIER_3),
                        totalSoundCount: R(m.Eu4.TIER_3)
                    }),
                    description: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_3_SOUNDBOARD,
                    icon: 13
                },
                {
                    title: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_AUDIO_QUALITY.format({ bitrate: I.HO[m.Eu4.TIER_3].limits.bitrate / 1000 }),
                    description: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_3_AUDIO_QUALITY,
                    icon: 2
                },
                {
                    title: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_3_VANITY_URL,
                    description: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_3_VANITY_URL.format({ helpdeskArticle: h.Z.getArticleURL(m.BhN.GUILD_VANITY_URL) }),
                    icon: 6
                },
                {
                    title: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_UPLOAD_LIMIT.format({ fileSize: (0, E.BU)(I.HO[m.Eu4.TIER_3].limits.fileSize / 1024, { useKibibytes: !0 }) }),
                    description: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_3_UPLOAD_LIMIT.format(),
                    icon: 5
                },
                {
                    title: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_3_ANIMATED_BANNER,
                    description: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_3_ANIMATED_BANNER,
                    icon: 3
                },
                e
                    ? {
                          title: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_VIDEO_STAGE.format({ limit: m.RcX }),
                          description: T.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_VIDEO_STAGE.format({ limit: m.RcX }),
                          icon: 12
                      }
                    : null
            ].filter(f.lm)
        }
    ];
function b(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { useLevels: n = !0 } = t;
    switch (e) {
        case m.Eu4.NONE:
            return n ? T.Z.Messages.PREMIUM_GUILD_TIER_0 : T.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_NONE_NAME;
        case m.Eu4.TIER_1:
            return T.Z.Messages.PREMIUM_GUILD_TIER_1;
        case m.Eu4.TIER_2:
            return T.Z.Messages.PREMIUM_GUILD_TIER_2;
        case m.Eu4.TIER_3:
            return T.Z.Messages.PREMIUM_GUILD_TIER_3;
        default:
            throw Error('Not a valid tier type');
    }
}
function L(e) {
    switch (e) {
        case m.Eu4.NONE:
            return T.Z.Messages.PREMIUM_GUILD_TIER_0;
        case m.Eu4.TIER_1:
            return T.Z.Messages.PREMIUM_GUILD_TIER_1_SHORT;
        case m.Eu4.TIER_2:
            return T.Z.Messages.PREMIUM_GUILD_TIER_2_SHORT;
        case m.Eu4.TIER_3:
            return T.Z.Messages.PREMIUM_GUILD_TIER_3_SHORT;
        default:
            throw Error('Not a valid tier type');
    }
}
let D = l().memoize((e) => (I.HO[m.Eu4.TIER_1].features.includes(e) ? m.Eu4.TIER_1 : I.HO[m.Eu4.TIER_2].features.includes(e) ? m.Eu4.TIER_2 : I.HO[m.Eu4.TIER_3].features.includes(e) ? m.Eu4.TIER_3 : null)),
    M = (e) => {
        if (e === m.Eu4.NONE) return m.Qqv.NONE;
        if (e === m.Eu4.TIER_1) return m.Qqv.TIER_1;
        if (e === m.Eu4.TIER_2) return m.Qqv.TIER_2;
        else if (e === m.Eu4.TIER_3) return m.Qqv.TIER_3;
        return null;
    };
function P(e, t) {
    for (let n of H(t)) if (e >= n.amount) return n.tier;
    return m.Eu4.NONE;
}
function U(e, t) {
    for (let n of H(t)) if (e >= n.amount) return n.nextTier;
    return BoostedGuildTiers.TIER_1;
}
function w(e, t) {
    return null == t || (null != e && e >= t);
}
function x(e, t) {
    return w(e.premiumTier, t);
}
function G(e) {
    return l()
        .values(e)
        .filter((e) => e.isAvailable());
}
function k() {
    let e = _.ZP.getPremiumTypeSubscription();
    if (null == e ? void 0 : e.isPausedOrPausePending) return T.Z.Messages.GUILD_BOOSTING_DISABLED_FOR_PAUSED_SUBSCRIPTION;
    let { numAvailableGuildBoostSlots: t, numCanceledGuildBoostSlots: n } = Object.values(d.Z.boostSlots).reduce((e, t) => (z(t) && e.numCanceledGuildBoostSlots++, t.isAvailable() && e.numAvailableGuildBoostSlots++, e), {
        numAvailableGuildBoostSlots: 0,
        numCanceledGuildBoostSlots: 0
    });
    if (null == e || t > 0) return null;
    if (e.status === m.O0b.PAST_DUE) return T.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_PURCHASE_BUTTON_DISABLED_SUBSCRIPTION_PAST_DUE;
    if (e.status === m.O0b.ACCOUNT_HOLD) return T.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_PURCHASE_BUTTON_DISABLED_SUBSCRIPTION_ACCOUNT_HOLD;
    if (n > 0) return T.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_PURCHASE_BUTTON_DISABLED_PENDING_MUTATION_PREMIUM_GUILD_SUBSCRIPTION;
    if (null == e.renewalMutations) return null;
    let r = p.uV(e.renewalMutations.additionalPlans);
    return p.uV(e.additionalPlans) > r ? T.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_PURCHASE_BUTTON_DISABLED_PENDING_MUTATION_PREMIUM_GUILD_SUBSCRIPTION : T.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_PURCHASE_BUTTON_DISABLED_PENDING_MUTATION_PLAN;
}
function B(e) {
    return e.sort((e, t) => (null != e.endsAt && null != t.endsAt ? e.endsAt.getTime() - t.endsAt.getTime() : -1));
}
function F(e, t) {
    return Z(e, t) > 0;
}
function Z(e, t) {
    let n = P(e.length, t),
        r = V(t)[n],
        i = e.filter((e) => null != e.endsAt);
    return r - (e.length - i.length);
}
function V(e) {
    return m.oCV;
}
function H(e) {
    let t = V(e);
    return [
        {
            tier: m.Eu4.TIER_3,
            amount: t[m.Eu4.TIER_3],
            nextTier: null
        },
        {
            tier: m.Eu4.TIER_2,
            amount: t[m.Eu4.TIER_2],
            nextTier: m.Eu4.TIER_3
        },
        {
            tier: m.Eu4.TIER_1,
            amount: t[m.Eu4.TIER_1],
            nextTier: m.Eu4.TIER_2
        }
    ];
}
function Y(e, t) {
    let n = Z(e, t);
    if (n > 0) {
        let t = B(e).filter((e) => null != e.endsAt);
        return t[t.length - n].endsAt;
    }
    return null;
}
function j(e, t) {
    let n = O(t),
        r = A.indexOf(t);
    if (-1 === r) return 0;
    let i = A[r - 1],
        a = null != i ? N(i) : 0,
        o = N(t);
    return Math.max(0, n - e.slice(a, o).length);
}
function W(e, t, n) {
    return -1 === A.indexOf(n) ? 0 : Math.max(0, R(n, e) - t.length);
}
function K(e, t) {
    let n = e.premiumSubscriberCount;
    return Math.max(0, V(e.id)[t] - n);
}
function z(e) {
    var t;
    return (null === (t = e.subscription) || void 0 === t ? void 0 : t.status) === m.O0b.CANCELED || e.canceled;
}
