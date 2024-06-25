t.d(s, {
  Z: function() {
    return R
  }
});
var n = t(735250),
  i = t(470079),
  a = t(442837),
  l = t(89057),
  r = t(724884),
  o = t(290799),
  c = t(362948),
  E = t(899667),
  d = t(165630),
  _ = t(771845),
  T = t(594174),
  S = t(314884),
  u = t(74538),
  I = t(296533),
  N = t(901750),
  A = t(112863),
  C = t(701157),
  O = t(912152),
  m = t(615603),
  h = t(474936),
  g = t(703079);

function R(e) {
  let {
    premiumSubscription: s
  } = e, t = (0, a.e7)([S.Z], () => S.Z.boostSlots), R = i.useMemo(() => Object.values(t), [t]), M = (0, a.e7)([T.default], () => T.default.getCurrentUser()), x = u.ZP.isPremium(M, h.p9.TIER_2), D = (0, a.e7)([d.Z], () => d.Z.affinities), p = (0, a.e7)([_.ZP], () => _.ZP.getFlattenedGuildIds()), L = D.length > 0 || p.length > 0, P = R.length > 0, Z = i.useMemo(() => R.some(e => null != e.premiumGuildSubscription), [R]), f = (0, a.e7)([E.Z], () => E.Z.getCurrentUserAppliedBoosts()), v = (null == s ? void 0 : s.isPausedOrPausePending) === !0;
  return (0, n.jsxs)("div", {
    children: [(0, n.jsx)(l.oQ, {
      className: g.blockedPaymentsWarning
    }), (0, n.jsx)(N.Z, {
      hasGuildBoostSlots: P,
      hasAppliedGuildBoosts: Z,
      isUserPremiumTier2: x,
      subscriptionIsPausedOrPausePending: v
    }), (0, n.jsx)(O.Z, {
      hasAppliedGuildBoosts: Z,
      isUserPremiumTier2: x,
      hasGuildAffinitiesOrInGuild: L,
      subscriptionIsPausedOrPausePending: v
    }), !L && (0, n.jsx)(A.Z, {}), (null == s ? void 0 : s.isPaused) ? (0, n.jsx)(I.r, {
      appliedGuildBoosts: f,
      premiumSubscription: s
    }) : (0, n.jsx)(I.Z, {
      guildBoostSlots: t,
      premiumSubscription: s
    }), (0, n.jsx)(m.Z, {
      guildBoostSlots: R
    }), (0, n.jsx)(C.Z, {
      hasAppliedGuildBoosts: Z,
      subscriptionIsPausedOrPausePending: v
    }), (0, n.jsx)(c.Z, {
      className: g.tierComparisonTable,
      hideHeading: !0,
      hideTier0: !0
    }), (0, n.jsx)(r.Z, {
      cardClassName: g.boosterRecognitionCard
    }), (0, n.jsx)(o.Z, {
      className: g.faq
    })]
  })
}