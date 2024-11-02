n.d(t, {
    Z: function () {
        return N;
    }
});
var i = n(200651),
    s = n(192379),
    r = n(442837),
    l = n(89057),
    a = n(724884),
    o = n(290799),
    c = n(362948),
    d = n(899667),
    u = n(165630),
    m = n(771845),
    h = n(594174),
    g = n(314884),
    p = n(74538),
    x = n(296533),
    S = n(901750),
    T = n(112863),
    C = n(701157),
    _ = n(912152),
    E = n(615603),
    f = n(474936),
    I = n(20154);
function N(e) {
    let { premiumSubscription: t } = e,
        n = (0, r.e7)([g.Z], () => g.Z.boostSlots),
        N = s.useMemo(() => Object.values(n), [n]),
        A = (0, r.e7)([h.default], () => h.default.getCurrentUser()),
        b = p.ZP.isPremium(A, f.p9.TIER_2),
        v = (0, r.e7)([u.Z], () => u.Z.affinities),
        j = (0, r.e7)([m.ZP], () => m.ZP.getFlattenedGuildIds()),
        O = v.length > 0 || j.length > 0,
        R = N.length > 0,
        P = s.useMemo(() => N.some((e) => null != e.premiumGuildSubscription), [N]),
        D = (0, r.e7)([d.Z], () => d.Z.getCurrentUserAppliedBoosts()),
        y = (null == t ? void 0 : t.isPausedOrPausePending) === !0;
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(l.oQ, { className: I.blockedPaymentsWarning }),
            (0, i.jsx)(S.Z, {
                hasGuildBoostSlots: R,
                hasAppliedGuildBoosts: P,
                isUserPremiumTier2: b,
                subscriptionIsPausedOrPausePending: y
            }),
            (0, i.jsx)(_.Z, {
                hasAppliedGuildBoosts: P,
                isUserPremiumTier2: b,
                hasGuildAffinitiesOrInGuild: O,
                subscriptionIsPausedOrPausePending: y
            }),
            !O && (0, i.jsx)(T.Z, {}),
            (null == t ? void 0 : t.isPaused)
                ? (0, i.jsx)(x.r, {
                      appliedGuildBoosts: D,
                      premiumSubscription: t
                  })
                : (0, i.jsx)(x.Z, {
                      guildBoostSlots: n,
                      premiumSubscription: t
                  }),
            (0, i.jsx)(E.Z, { guildBoostSlots: N }),
            (0, i.jsx)(C.Z, {
                hasAppliedGuildBoosts: P,
                subscriptionIsPausedOrPausePending: y
            }),
            (0, i.jsx)(c.Z, {
                className: I.tierComparisonTable,
                hideHeading: !0,
                hideTier0: !0
            }),
            (0, i.jsx)(a.Z, { cardClassName: I.boosterRecognitionCard }),
            (0, i.jsx)(o.Z, { className: I.faq })
        ]
    });
}
