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
    S = n(296533),
    T = n(901750),
    C = n(112863),
    _ = n(701157),
    E = n(912152),
    f = n(615603),
    I = n(474936),
    N = n(20154);
function b(e) {
    let { premiumSubscription: t } = e,
        n = (0, r.e7)([p.Z], () => p.Z.boostSlots),
        b = s.useMemo(() => Object.values(n), [n]),
        A = (0, r.e7)([g.default], () => g.default.getCurrentUser()),
        v = x.ZP.isPremium(A, I.p9.TIER_2),
        j = (0, r.e7)([m.Z], () => m.Z.affinities),
        O = (0, r.e7)([h.ZP], () => h.ZP.getFlattenedGuildIds()),
        R = j.length > 0 || O.length > 0,
        P = b.length > 0,
        D = s.useMemo(() => b.filter((e) => null != e.premiumGuildSubscription), [b]),
        y = D.length > 0,
        B = b.length > D.length,
        L = (0, r.e7)([u.Z], () => u.Z.getCurrentUserAppliedBoosts()),
        { fractionalState: Z } = (0, l.Z)(),
        F = (null == t ? void 0 : t.isPausedOrPausePending) === !0 && Z === I.a$.NONE,
        M = (null == t ? void 0 : t.isPausedOrPausePending) !== !0 && Z === I.a$.NONE,
        k = v && Z === I.a$.FP_SUB;
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(a.oQ, { className: N.blockedPaymentsWarning }),
            (0, i.jsx)(T.Z, {
                hasGuildBoostSlots: P,
                hasAppliedGuildBoosts: y,
                hasBoostPerk: k,
                canAddBoosts: M
            }),
            Z === I.a$.NONE &&
                (0, i.jsx)(E.Z, {
                    hasAppliedGuildBoosts: y,
                    hasBoostPerk: k,
                    hasGuildAffinitiesOrInGuild: R,
                    subscriptionIsPausedOrPausePending: F
                }),
            !R && (0, i.jsx)(C.Z, {}),
            (null == t ? void 0 : t.isPaused) && Z === I.a$.NONE
                ? (0, i.jsx)(S.r, {
                      appliedGuildBoosts: L,
                      premiumSubscription: t
                  })
                : (0, i.jsx)(S.Z, {
                      guildBoostSlots: n,
                      premiumSubscription: t
                  }),
            (0, i.jsx)(f.Z, { guildBoostSlots: b }),
            (0, i.jsx)(_.Z, {
                canAddBoosts: y && M,
                canApplyBoosts: B
            }),
            (0, i.jsx)(d.Z, {
                className: N.tierComparisonTable,
                hideHeading: !0,
                hideTier0: !0
            }),
            (0, i.jsx)(o.Z, { cardClassName: N.boosterRecognitionCard }),
            (0, i.jsx)(c.Z, { className: N.faq })
        ]
    });
}
