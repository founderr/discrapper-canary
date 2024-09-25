n.d(t, {
    Vi: function () {
        return y;
    },
    W1: function () {
        return M;
    },
    k: function () {
        return D;
    },
    l2: function () {
        return L;
    }
});
var r = n(913527),
    i = n.n(r),
    a = n(399606),
    o = n(355467),
    s = n(211242),
    l = n(706454),
    u = n(594174),
    c = n(78839),
    d = n(295226),
    _ = n(74538),
    E = n(937579),
    f = n(436783),
    h = n(617799),
    p = n(61196),
    m = n(104494),
    I = n(639119),
    T = n(921022),
    g = n(748770),
    S = n(725727),
    A = n(1844),
    v = n(474936),
    N = n(981631),
    O = n(689938);
let R = 10;
function C(e) {
    var t, n, r;
    let { experimentEnabled: a, premiumSubscription: o, mostRecentSubscription: s } = e,
        l = !1,
        c = !1;
    if (null != s && s.status === N.O0b.ENDED) {
        let e = (null === (t = s.metadata) || void 0 === t ? void 0 : t.ended_at) != null ? i()(s.metadata.ended_at) : null,
            r = null === (n = (0, _.Af)(s)) || void 0 === n ? void 0 : n.planId,
            a = null != r && _.ZP.getPremiumType(r) === v.p9.TIER_2;
        c = null != e && a && e.add(R, 'days').isAfter(i()());
    }
    if (null != o) {
        let e = null === (r = (0, _.Af)(o)) || void 0 === r ? void 0 : r.planId,
            t = null != e && _.ZP.getPremiumType(e) === v.p9.TIER_2,
            n = u.default.getCurrentUser(),
            i = (null == o ? void 0 : o.trialId) != null && _.ZP.isPremiumExactly(n, v.p9.TIER_0);
        l = t || i;
    }
    return !a || l || c;
}
function y() {
    var e;
    let { paymentsBlocked: t } = s.Z.useExperiment({ location: '153d31_1' }, { autoTrackExposure: !1 }),
        { promotion: n } = (0, S.mq)(),
        { enabled: r } = (0, p.ZP)(),
        { mostRecentSubscription: i, premiumSubscription: o } = (0, a.cj)([c.ZP], () => ({
            mostRecentSubscription: c.ZP.getMostRecentPremiumTypeSubscription(),
            premiumSubscription: c.ZP.getPremiumTypeSubscription()
        })),
        l = (0, I.N)(),
        u = (0, m.Ng)(),
        d = new Date(null !== (e = null == n ? void 0 : n.endDate) && void 0 !== e ? e : 0).valueOf(),
        _ = Date.now(),
        E = _ > d,
        { enabled: g } = (0, f.Z)();
    (0, T.Z)({
        delay: E ? -1 : d - _,
        disable: g
    });
    let A =
            !C({
                experimentEnabled: r,
                premiumSubscription: o,
                mostRecentSubscription: i
            }) &&
            null == l &&
            null != n &&
            !t &&
            null == u,
        { enabled: v } = h.Z.useExperiment(
            { location: '153d31_2' },
            {
                autoTrackExposure: A,
                disable: !A
            }
        );
    return !E && v;
}
async function b() {
    var e;
    let t = u.default.getCurrentUser(),
        n = !(null == t ? void 0 : t.isClaimed()),
        { paymentsBlocked: r } = s.Z.getCurrentConfig({ location: '153d31_3' }, { autoTrackExposure: !1 }),
        { enabled: i } = (0, p.aW)(),
        { enabled: a } = h.Z.getCurrentConfig({ location: '153d31_4' }, { autoTrackExposure: !1 });
    if (n || r || !i || !a) return !1;
    if ((d.Z.shouldFetchOffer() && !(0, _.I5)(t) && (await (0, E.T)('BogoPromotionUtils')), d.Z.hasFetchedOffer() && (d.Z.hasAnyUnexpiredOffer() || d.Z.hasAnyUnexpiredDiscountOffer()))) return !1;
    !c.ZP.hasFetchedMostRecentPremiumTypeSubscription() && (null === (e = u.default.getCurrentUser()) || void 0 === e ? void 0 : e.hasHadSKU(v.Si.TIER_2)) && (await (0, o.ou)()), !c.ZP.hasFetchedSubscriptions() && (await (0, o.jg)());
    let l = c.ZP.getMostRecentPremiumTypeSubscription();
    return !C({
        experimentEnabled: i,
        premiumSubscription: c.ZP.getPremiumTypeSubscription(),
        mostRecentSubscription: l
    });
}
async function L() {
    if (!(await b())) return;
    let e = A.Z.bogoPromotion;
    if (!(null != e && new Date(e.endDate).valueOf() >= Date.now())) await (0, g.L9)();
}
async function D() {
    let e = A.Z.bogoPromotion,
        t = null != e && new Date(e.endDate).valueOf() >= Date.now() && new Date(e.startDate).valueOf() <= Date.now(),
        n = await b(),
        { enabled: r } = p.Am.getCurrentConfig({ location: '153d31_6' }, { autoTrackExposure: !1 }),
        { enabled: i } = h.Z.getCurrentConfig({ location: '153d31_7' }, { autoTrackExposure: t && r && n });
    return t && i && r && n;
}
function M() {
    switch (l.default.locale) {
        case 'de':
        case 'es-ES':
        case 'fr':
        case 'hr':
        case 'it':
        case 'lt':
        case 'nl':
        case 'pl':
        case 'pt-BR':
        case 'ro':
        case 'fi':
        case 'sv-SE':
        case 'tr':
        case 'cs':
        case 'el':
        case 'bg':
        case 'ru':
        case 'uk':
        case 'ja':
        case 'ko':
            return O.Z.Messages.NITRO_BADGE_TEXT;
        default:
            return O.Z.Messages.BOGO_PILL;
    }
}
