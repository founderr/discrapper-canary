n.d(t, {
    Z: function () {
        return A;
    }
});
var i = n(200651),
    s = n(192379),
    r = n(442837),
    l = n(975298),
    a = n(89057),
    o = n(724884),
    c = n(290799),
    d = n(362948),
    u = n(899667),
    m = n(165630),
    h = n(771845),
    g = n(594174),
    p = n(314884),
    x = n(74538),
    S = n(199778),
    T = n(296533),
    C = n(901750),
    _ = n(112863),
    E = n(701157),
    f = n(912152),
    I = n(615603),
    N = n(474936),
    b = n(139842);
function A(e) {
    let { premiumSubscription: t } = e,
        n = (0, r.e7)([p.Z], () => p.Z.boostSlots),
        A = s.useMemo(() => Object.values(n), [n]),
        v = (0, r.e7)([g.default], () => g.default.getCurrentUser()),
        j = x.ZP.isPremium(v, N.p9.TIER_2),
        O = (0, r.e7)([m.Z], () => m.Z.affinities),
        R = (0, r.e7)([h.ZP], () => h.ZP.getFlattenedGuildIds()),
        P = O.length > 0 || R.length > 0,
        D = A.length > 0,
        y = s.useMemo(() => A.filter((e) => null != e.premiumGuildSubscription), [A]),
        B = y.length > 0,
        L = A.length > y.length,
        Z = (0, r.e7)([u.Z], () => u.Z.getCurrentUserAppliedBoosts()),
        { fractionalState: F } = (0, l.Z)(),
        M = (null == t ? void 0 : t.isPausedOrPausePending) === !0 && F === N.a$.NONE,
        k = (null == t ? void 0 : t.isPausedOrPausePending) !== !0 && F === N.a$.NONE,
        w = j && F === N.a$.FP_SUB;
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(a.oQ, { className: b.blockedPaymentsWarning }),
            (0, i.jsx)(C.Z, {
                hasGuildBoostSlots: D,
                hasAppliedGuildBoosts: B,
                hasBoostPerk: w,
                canAddBoosts: k
            }),
            F === N.a$.NONE &&
                (0, i.jsx)(f.Z, {
                    hasAppliedGuildBoosts: B,
                    hasBoostPerk: w,
                    hasGuildAffinitiesOrInGuild: P,
                    subscriptionIsPausedOrPausePending: M
                }),
            (0, i.jsx)(S.Z, {
                hide: L,
                containerClassName: b.FPContainer,
                pillClassName: b.FPPill
            }),
            !P && (0, i.jsx)(_.Z, {}),
            (null == t ? void 0 : t.isPaused) && F === N.a$.NONE
                ? (0, i.jsx)(T.r, {
                      appliedGuildBoosts: Z,
                      premiumSubscription: t
                  })
                : (0, i.jsx)(T.Z, {
                      guildBoostSlots: n,
                      premiumSubscription: t
                  }),
            (0, i.jsx)(I.Z, { guildBoostSlots: A }),
            (0, i.jsx)(E.Z, {
                canAddBoosts: B && k,
                canApplyBoosts: L
            }),
            (0, i.jsx)(d.Z, {
                className: b.tierComparisonTable,
                hideHeading: !0,
                hideTier0: !0
            }),
            (0, i.jsx)(o.Z, { cardClassName: b.boosterRecognitionCard }),
            (0, i.jsx)(c.Z, { className: b.faq })
        ]
    });
}
