n.d(t, {
    Z: function () {
        return b;
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
    E = n(112863),
    _ = n(701157),
    f = n(912152),
    I = n(615603),
    N = n(474936),
    A = n(20154);
function b(e) {
    let { premiumSubscription: t } = e,
        n = (0, r.e7)([p.Z], () => p.Z.boostSlots),
        b = s.useMemo(() => Object.values(n), [n]),
        v = (0, r.e7)([g.default], () => g.default.getCurrentUser()),
        j = x.ZP.isPremium(v, N.p9.TIER_2),
        O = (0, r.e7)([m.Z], () => m.Z.affinities),
        R = (0, r.e7)([h.ZP], () => h.ZP.getFlattenedGuildIds()),
        P = O.length > 0 || R.length > 0,
        D = b.length > 0,
        y = s.useMemo(() => b.filter((e) => null != e.premiumGuildSubscription), [b]),
        B = y.length > 0,
        L = b.length > y.length,
        Z = (0, r.e7)([u.Z], () => u.Z.getCurrentUserAppliedBoosts()),
        { fractionalState: F } = (0, l.Z)(),
        M = (null == t ? void 0 : t.isPausedOrPausePending) === !0 && F === N.a$.NONE,
        k = (null == t ? void 0 : t.isPausedOrPausePending) !== !0 && F === N.a$.NONE,
        w = j && F === N.a$.FP_SUB_PAUSED;
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(a.oQ, { className: A.blockedPaymentsWarning }),
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
                containerClassName: A.FPContainer,
                pillClassName: A.FPPill
            }),
            !P && (0, i.jsx)(E.Z, {}),
            (null == t ? void 0 : t.isPaused) && F === N.a$.NONE
                ? (0, i.jsx)(T.r, {
                      appliedGuildBoosts: Z,
                      premiumSubscription: t
                  })
                : (0, i.jsx)(T.Z, {
                      guildBoostSlots: n,
                      premiumSubscription: t
                  }),
            (0, i.jsx)(I.Z, { guildBoostSlots: b }),
            (0, i.jsx)(_.Z, {
                canAddBoosts: B && k,
                canApplyBoosts: L
            }),
            (0, i.jsx)(d.Z, {
                className: A.tierComparisonTable,
                hideHeading: !0,
                hideTier0: !0
            }),
            (0, i.jsx)(o.Z, { cardClassName: A.boosterRecognitionCard }),
            (0, i.jsx)(c.Z, { className: A.faq })
        ]
    });
}
