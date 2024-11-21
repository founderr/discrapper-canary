n.d(t, {
    A3: function () {
        return I;
    },
    FZ: function () {
        return b;
    },
    Je: function () {
        return y;
    },
    KK: function () {
        return V;
    },
    Qi: function () {
        return Z;
    },
    Ro: function () {
        return r;
    },
    U2: function () {
        return S;
    },
    Vx: function () {
        return P;
    },
    _k: function () {
        return k;
    },
    _p: function () {
        return R;
    },
    aq: function () {
        return M;
    },
    cP: function () {
        return A;
    },
    e9: function () {
        return C;
    },
    f2: function () {
        return x;
    },
    gZ: function () {
        return B;
    },
    ge: function () {
        return O;
    },
    ig: function () {
        return T;
    },
    nW: function () {
        return N;
    },
    rF: function () {
        return D;
    },
    tb: function () {
        return L;
    },
    tl: function () {
        return j;
    },
    vn: function () {
        return U;
    },
    vx: function () {
        return w;
    },
    yw: function () {
        return F;
    }
}),
    n(411104),
    n(47120),
    n(627341),
    n(724458);
var r,
    i,
    a = n(392711),
    s = n.n(a);
n(913527);
var o = n(278074),
    l = n(274136),
    u = n(179360),
    c = n(314884),
    d = n(78839),
    f = n(424218),
    _ = n(823379),
    p = n(63063),
    h = n(74538),
    m = n(981631),
    g = n(474936),
    E = n(388032);
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
let v = [m.Eu4.NONE, m.Eu4.TIER_1, m.Eu4.TIER_2, m.Eu4.TIER_3],
    b = (e, t) => {
        var n;
        return e === m.Eu4.NONE ? m.Eu4.TIER_1 : null === (n = G(t).find((t) => t.tier === e)) || void 0 === n ? void 0 : n.nextTier;
    },
    I = (e, t) => (null != t && t.hasFeature(m.oNc.MORE_STICKERS) && e === m.Eu4.TIER_3 ? l.D.MAX_STICKER_SLOTS : g.$8[e]),
    T = (e) => g.pH[e],
    S = (e, t) => (null != t && t.hasFeature(m.oNc.MORE_SOUNDBOARD) ? 96 : g._k[e]),
    y = (e) => {
        if (e === m.Eu4.NONE) return g._k[e];
        let t = v[v.indexOf(e) - 1];
        return g._k[e] - g._k[t];
    },
    A = (e) => [
        {
            tier: m.Eu4.TIER_1,
            title: E.intl.string(E.t['lK+WOT']),
            perks: [
                {
                    title: E.intl.formatToPlainString(E.t.dnLAws, {
                        adding: g.HO[m.Eu4.TIER_1].limits.emoji - g.HO[m.Eu4.NONE].limits.emoji,
                        total: g.HO[m.Eu4.TIER_1].limits.emoji
                    }),
                    description: E.intl.string(E.t['/Guvxs']),
                    icon: 1
                },
                {
                    title: E.intl.formatToPlainString(E.t['/9p2/v'], {
                        adding: T(m.Eu4.TIER_1),
                        total: I(m.Eu4.TIER_1)
                    }),
                    description: E.intl.string(E.t.JfsnDQ),
                    icon: 8
                },
                {
                    title: E.intl.formatToPlainString(E.t.NRuk5u, {
                        soundCount: y(m.Eu4.TIER_1),
                        totalSoundCount: S(m.Eu4.TIER_1)
                    }),
                    description: E.intl.string(E.t.Oq7OVl),
                    icon: 13
                },
                {
                    title: E.intl.formatToPlainString(E.t.zoT1ZG, { bitrate: g.HO[m.Eu4.TIER_1].limits.bitrate / 1000 }),
                    description: E.intl.string(E.t['8a03jo']),
                    icon: 2
                },
                {
                    title: E.intl.string(E.t.h0s84e),
                    description: E.intl.format(E.t['t+0cbm'], {}),
                    icon: 3
                },
                {
                    title: E.intl.string(E.t.vjPGPj),
                    description: E.intl.string(E.t.tG4MMT),
                    icon: 4
                },
                {
                    title: E.intl.string(E.t.cObMZG),
                    description: E.intl.string(E.t['puH/9f']),
                    icon: 7
                }
            ].filter(_.lm)
        },
        {
            tier: m.Eu4.TIER_2,
            title: E.intl.string(E.t['34GpBQ']),
            perks: [
                {
                    title: E.intl.formatToPlainString(E.t.dnLAws, {
                        adding: g.HO[m.Eu4.TIER_2].limits.emoji - g.HO[m.Eu4.TIER_1].limits.emoji,
                        total: g.HO[m.Eu4.TIER_2].limits.emoji
                    }),
                    description: E.intl.string(E.t.fRiNh4),
                    icon: 1
                },
                {
                    title: E.intl.formatToPlainString(E.t['/9p2/v'], {
                        adding: T(m.Eu4.TIER_2),
                        total: I(m.Eu4.TIER_2)
                    }),
                    description: E.intl.string(E.t.t4TM29),
                    icon: 8
                },
                {
                    title: E.intl.formatToPlainString(E.t.NRuk5u, {
                        soundCount: y(m.Eu4.TIER_2),
                        totalSoundCount: S(m.Eu4.TIER_2)
                    }),
                    description: E.intl.string(E.t.pEYlPT),
                    icon: 13
                },
                {
                    title: E.intl.formatToPlainString(E.t.zoT1ZG, { bitrate: g.HO[m.Eu4.TIER_2].limits.bitrate / 1000 }),
                    description: E.intl.string(E.t['nzRo/P']),
                    icon: 2
                },
                {
                    title: E.intl.string(E.t['+KhQKC']),
                    description: E.intl.string(E.t.ZWf10N),
                    icon: 4
                },
                {
                    title: E.intl.formatToPlainString(E.t.t95LnJ, { fileSize: (0, f.BU)(g.HO[m.Eu4.TIER_2].limits.fileSize / 1024, { useKibibytes: !0 }) }),
                    description: E.intl.format(E.t['yvht6+'], {}),
                    icon: 5
                },
                {
                    title: E.intl.string(E.t.bmaoND),
                    description: E.intl.string(E.t.WZW2Bg),
                    icon: 7
                },
                {
                    title: E.intl.string(E.t.BHtqcX),
                    description: E.intl.string(E.t.ukVcER),
                    icon: 11
                },
                e
                    ? {
                          title: E.intl.formatToPlainString(E.t.T8P3TE, { limit: m.eez }),
                          description: E.intl.formatToPlainString(E.t.T8P3TE, { limit: m.eez }),
                          icon: 12
                      }
                    : null
            ].filter(_.lm)
        },
        {
            tier: m.Eu4.TIER_3,
            title: E.intl.string(E.t.P7LdcX),
            perks: [
                {
                    title: E.intl.formatToPlainString(E.t.dnLAws, {
                        adding: g.HO[m.Eu4.TIER_3].limits.emoji - g.HO[m.Eu4.TIER_2].limits.emoji,
                        total: g.HO[m.Eu4.TIER_3].limits.emoji
                    }),
                    description: E.intl.string(E.t.AfJxnZ),
                    icon: 1
                },
                {
                    title: E.intl.formatToPlainString(E.t['/9p2/v'], {
                        adding: T(m.Eu4.TIER_3),
                        total: I(m.Eu4.TIER_3)
                    }),
                    description: E.intl.string(E.t['+ZI4QU']),
                    icon: 8
                },
                {
                    title: E.intl.formatToPlainString(E.t.NRuk5u, {
                        soundCount: y(m.Eu4.TIER_3),
                        totalSoundCount: S(m.Eu4.TIER_3)
                    }),
                    description: E.intl.string(E.t['8omJSU']),
                    icon: 13
                },
                {
                    title: E.intl.formatToPlainString(E.t.zoT1ZG, { bitrate: g.HO[m.Eu4.TIER_3].limits.bitrate / 1000 }),
                    description: E.intl.string(E.t.cOkbp6),
                    icon: 2
                },
                {
                    title: E.intl.string(E.t.C2w2cH),
                    description: E.intl.format(E.t['3Reos7'], { helpdeskArticle: p.Z.getArticleURL(m.BhN.GUILD_VANITY_URL) }),
                    icon: 6
                },
                {
                    title: E.intl.formatToPlainString(E.t.t95LnJ, { fileSize: (0, f.BU)(g.HO[m.Eu4.TIER_3].limits.fileSize / 1024, { useKibibytes: !0 }) }),
                    description: E.intl.format(E.t.IwDqSE, {}),
                    icon: 5
                },
                {
                    title: E.intl.string(E.t.z0GtBA),
                    description: E.intl.string(E.t.v92GNT),
                    icon: 3
                },
                e
                    ? {
                          title: E.intl.formatToPlainString(E.t.T8P3TE, { limit: m.RcX }),
                          description: E.intl.formatToPlainString(E.t.T8P3TE, { limit: m.RcX }),
                          icon: 12
                      }
                    : null
            ].filter(_.lm)
        }
    ];
function N(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { useLevels: n = !0 } = t;
    switch (e) {
        case m.Eu4.NONE:
            return n ? E.intl.string(E.t.LcKgJS) : E.intl.string(E.t.mx8j2t);
        case m.Eu4.TIER_1:
            return E.intl.string(E.t.nzXtaW);
        case m.Eu4.TIER_2:
            return E.intl.string(E.t['h33/ub']);
        case m.Eu4.TIER_3:
            return E.intl.string(E.t.BfF6EB);
        default:
            throw Error('Not a valid tier type');
    }
}
function C(e) {
    switch (e) {
        case m.Eu4.NONE:
            return E.intl.string(E.t.LcKgJS);
        case m.Eu4.TIER_1:
            return E.intl.string(E.t.xRjU1d);
        case m.Eu4.TIER_2:
            return E.intl.string(E.t.C7e2Bg);
        case m.Eu4.TIER_3:
            return E.intl.string(E.t.avGxmp);
        default:
            throw Error('Not a valid tier type');
    }
}
let R = s().memoize((e) => (g.HO[m.Eu4.TIER_1].features.includes(e) ? m.Eu4.TIER_1 : g.HO[m.Eu4.TIER_2].features.includes(e) ? m.Eu4.TIER_2 : g.HO[m.Eu4.TIER_3].features.includes(e) ? m.Eu4.TIER_3 : null)),
    O = (e) => {
        if (e === m.Eu4.NONE) return m.Qqv.NONE;
        if (e === m.Eu4.TIER_1) return m.Qqv.TIER_1;
        if (e === m.Eu4.TIER_2) return m.Qqv.TIER_2;
        else if (e === m.Eu4.TIER_3) return m.Qqv.TIER_3;
        return null;
    };
function D(e, t) {
    for (let n of G(t)) if (e >= n.amount) return n.tier;
    return m.Eu4.NONE;
}
function L(e, t) {
    return null == t || (null != e && e >= t);
}
function x(e, t) {
    return L(e.premiumTier, t);
}
function w(e) {
    return s()
        .values(e)
        .filter((e) => e.isAvailable());
}
function M(e) {
    let { fractionalState: t } = e,
        n = d.ZP.getPremiumTypeSubscription();
    !c.Z.hasFetched && (0, u.X8)();
    let r = w(c.Z.boostSlots),
        i = null == n ? void 0 : n.isPausedOrPausePending,
        a = r.length > 0,
        s = E.intl.format(E.t.kJ1AZG, { helpCenterLink: p.Z.getArticleURL(m.BhN.FRACTIONAL_PREMIUM_ABOUT) }),
        l = (0, o.EQ)({
            isPausedOrPausePending: i,
            fractionalState: t,
            canApplyBoosts: a
        })
            .with(
                {
                    isPausedOrPausePending: !0,
                    fractionalState: g.a$.FP_SUB_PAUSED,
                    canApplyBoosts: !1
                },
                () => s
            )
            .with(
                {
                    isPausedOrPausePending: void 0,
                    fractionalState: g.a$.FP_ONLY
                },
                () => s
            )
            .with(
                {
                    isPausedOrPausePending: !1,
                    fractionalState: g.a$.FP_ONLY
                },
                () => s
            )
            .with(
                {
                    isPausedOrPausePending: !0,
                    fractionalState: g.a$.NONE
                },
                () => E.intl.string(E.t.mOWsFx)
            )
            .otherwise(() => null);
    if (null != l) return l;
    let { numAvailableGuildBoostSlots: f, numCanceledGuildBoostSlots: _ } = Object.values(c.Z.boostSlots).reduce((e, t) => (j(t) && e.numCanceledGuildBoostSlots++, t.isAvailable() && e.numAvailableGuildBoostSlots++, e), {
        numAvailableGuildBoostSlots: 0,
        numCanceledGuildBoostSlots: 0
    });
    if (null == n || f > 0) return null;
    if (n.status === m.O0b.PAST_DUE) return E.intl.string(E.t.De4Vm5);
    if (n.status === m.O0b.ACCOUNT_HOLD) return E.intl.string(E.t.JakNQ0);
    if (_ > 0) return E.intl.string(E.t.x25mZW);
    if (null == n.renewalMutations) return null;
    let v = h.uV(n.renewalMutations.additionalPlans);
    return h.uV(n.additionalPlans) > v ? E.intl.string(E.t.x25mZW) : E.intl.string(E.t['W/bb8f']);
}
function P(e, t) {
    return k(e, t) > 0;
}
function k(e, t) {
    let n = D(e.length, t),
        r = U(t)[n],
        i = e.filter((e) => null != e.endsAt);
    return r - (e.length - i.length);
}
function U(e) {
    return m.oCV;
}
function G(e) {
    let t = U(e);
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
function B(e, t) {
    let n = k(e, t);
    if (n > 0) {
        let t = e.sort((e, t) => (null != e.endsAt && null != t.endsAt ? e.endsAt.getTime() - t.endsAt.getTime() : -1)).filter((e) => null != e.endsAt);
        return t[t.length - n].endsAt;
    }
    return null;
}
function Z(e, t) {
    let n = T(t),
        r = v.indexOf(t);
    if (-1 === r) return 0;
    let i = v[r - 1],
        a = null != i ? I(i) : 0,
        s = I(t);
    return Math.max(0, n - e.slice(a, s).length);
}
function F(e, t, n) {
    return -1 === v.indexOf(n) ? 0 : Math.max(0, S(n, e) - t.length);
}
function V(e, t) {
    let n = e.premiumSubscriberCount;
    return Math.max(0, U(e.id)[t] - n);
}
function j(e) {
    var t;
    return (null === (t = e.subscription) || void 0 === t ? void 0 : t.status) === m.O0b.CANCELED || e.canceled;
}
