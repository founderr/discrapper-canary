t.d(s, {
    Z: function () {
        return p;
    }
});
var n = t(735250),
    a = t(470079),
    i = t(442837),
    r = t(89057),
    o = t(724884),
    l = t(290799),
    c = t(362948),
    d = t(899667),
    u = t(165630),
    _ = t(771845),
    E = t(594174),
    T = t(314884),
    I = t(74538),
    S = t(296533),
    N = t(901750),
    m = t(112863),
    C = t(701157),
    g = t(912152),
    A = t(615603),
    h = t(474936),
    O = t(833145);
function p(e) {
    let { premiumSubscription: s } = e,
        t = (0, i.e7)([T.Z], () => T.Z.boostSlots),
        p = a.useMemo(() => Object.values(t), [t]),
        x = (0, i.e7)([E.default], () => E.default.getCurrentUser()),
        R = I.ZP.isPremium(x, h.p9.TIER_2),
        f = (0, i.e7)([u.Z], () => u.Z.affinities),
        M = (0, i.e7)([_.ZP], () => _.ZP.getFlattenedGuildIds()),
        D = f.length > 0 || M.length > 0,
        P = p.length > 0,
        L = a.useMemo(() => p.some((e) => null != e.premiumGuildSubscription), [p]),
        b = (0, i.e7)([d.Z], () => d.Z.getCurrentUserAppliedBoosts()),
        Z = (null == s ? void 0 : s.isPausedOrPausePending) === !0;
    return (0, n.jsxs)('div', {
        children: [
            (0, n.jsx)(r.oQ, { className: O.blockedPaymentsWarning }),
            (0, n.jsx)(N.Z, {
                hasGuildBoostSlots: P,
                hasAppliedGuildBoosts: L,
                isUserPremiumTier2: R,
                subscriptionIsPausedOrPausePending: Z
            }),
            (0, n.jsx)(g.Z, {
                hasAppliedGuildBoosts: L,
                isUserPremiumTier2: R,
                hasGuildAffinitiesOrInGuild: D,
                subscriptionIsPausedOrPausePending: Z
            }),
            !D && (0, n.jsx)(m.Z, {}),
            (null == s ? void 0 : s.isPaused)
                ? (0, n.jsx)(S.r, {
                      appliedGuildBoosts: b,
                      premiumSubscription: s
                  })
                : (0, n.jsx)(S.Z, {
                      guildBoostSlots: t,
                      premiumSubscription: s
                  }),
            (0, n.jsx)(A.Z, { guildBoostSlots: p }),
            (0, n.jsx)(C.Z, {
                hasAppliedGuildBoosts: L,
                subscriptionIsPausedOrPausePending: Z
            }),
            (0, n.jsx)(c.Z, {
                className: O.tierComparisonTable,
                hideHeading: !0,
                hideTier0: !0
            }),
            (0, n.jsx)(o.Z, { cardClassName: O.boosterRecognitionCard }),
            (0, n.jsx)(l.Z, { className: O.faq })
        ]
    });
}
