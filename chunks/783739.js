t.d(s, {
  Z: function() {
    return R
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
  _ = t(165630),
  E = t(771845),
  u = t(594174),
  T = t(314884),
  S = t(74538),
  I = t(296533),
  N = t(901750),
  C = t(112863),
  A = t(701157),
  m = t(912152),
  O = t(615603),
  g = t(474936),
  h = t(703079);

function R(e) {
  let {
    premiumSubscription: s
  } = e, t = (0, i.e7)([T.Z], () => T.Z.boostSlots), R = a.useMemo(() => Object.values(t), [t]), p = (0, i.e7)([u.default], () => u.default.getCurrentUser()), x = S.ZP.isPremium(p, g.p9.TIER_2), M = (0, i.e7)([_.Z], () => _.Z.affinities), D = (0, i.e7)([E.ZP], () => E.ZP.getFlattenedGuildIds()), f = M.length > 0 || D.length > 0, L = R.length > 0, P = a.useMemo(() => R.some(e => null != e.premiumGuildSubscription), [R]), Z = (0, i.e7)([d.Z], () => d.Z.getCurrentUserAppliedBoosts()), v = (null == s ? void 0 : s.isPausedOrPausePending) === !0;
  return (0, n.jsxs)("div", {
    children: [(0, n.jsx)(r.oQ, {
      className: h.blockedPaymentsWarning
    }), (0, n.jsx)(N.Z, {
      hasGuildBoostSlots: L,
      hasAppliedGuildBoosts: P,
      isUserPremiumTier2: x,
      subscriptionIsPausedOrPausePending: v
    }), (0, n.jsx)(m.Z, {
      hasAppliedGuildBoosts: P,
      isUserPremiumTier2: x,
      hasGuildAffinitiesOrInGuild: f,
      subscriptionIsPausedOrPausePending: v
    }), !f && (0, n.jsx)(C.Z, {}), (null == s ? void 0 : s.isPaused) ? (0, n.jsx)(I.r, {
      appliedGuildBoosts: Z,
      premiumSubscription: s
    }) : (0, n.jsx)(I.Z, {
      guildBoostSlots: t,
      premiumSubscription: s
    }), (0, n.jsx)(O.Z, {
      guildBoostSlots: R
    }), (0, n.jsx)(A.Z, {
      hasAppliedGuildBoosts: P,
      subscriptionIsPausedOrPausePending: v
    }), (0, n.jsx)(c.Z, {
      className: h.tierComparisonTable,
      hideHeading: !0,
      hideTier0: !0
    }), (0, n.jsx)(o.Z, {
      cardClassName: h.boosterRecognitionCard
    }), (0, n.jsx)(l.Z, {
      className: h.faq
    })]
  })
}