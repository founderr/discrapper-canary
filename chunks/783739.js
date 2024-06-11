"use strict";
s.r(t), s.d(t, {
  default: function() {
    return h
  }
});
var a = s("735250"),
  n = s("470079"),
  i = s("442837"),
  l = s("89057"),
  r = s("724884"),
  o = s("290799"),
  d = s("362948"),
  u = s("899667"),
  c = s("165630"),
  S = s("771845"),
  E = s("594174"),
  T = s("314884"),
  _ = s("74538"),
  I = s("296533"),
  N = s("901750"),
  g = s("112863"),
  f = s("701157"),
  m = s("912152"),
  A = s("615603"),
  C = s("474936"),
  O = s("388095");

function h(e) {
  let {
    premiumSubscription: t
  } = e, s = (0, i.useStateFromStores)([T.default], () => T.default.boostSlots), h = n.useMemo(() => Object.values(s), [s]), R = (0, i.useStateFromStores)([E.default], () => E.default.getCurrentUser()), p = _.default.isPremium(R, C.PremiumTypes.TIER_2), M = (0, i.useStateFromStores)([c.default], () => c.default.affinities), D = (0, i.useStateFromStores)([S.default], () => S.default.getFlattenedGuildIds()), x = M.length > 0 || D.length > 0, L = h.length > 0, P = n.useMemo(() => h.some(e => null != e.premiumGuildSubscription), [h]), b = (0, i.useStateFromStores)([u.default], () => u.default.getCurrentUserAppliedBoosts()), v = (null == t ? void 0 : t.isPausedOrPausePending) === !0;
  return (0, a.jsxs)("div", {
    children: [(0, a.jsx)(l.BlockedPaymentsWarning, {
      className: O.blockedPaymentsWarning
    }), (0, a.jsx)(N.default, {
      hasGuildBoostSlots: L,
      hasAppliedGuildBoosts: P,
      isUserPremiumTier2: p,
      subscriptionIsPausedOrPausePending: v
    }), (0, a.jsx)(m.default, {
      hasAppliedGuildBoosts: P,
      isUserPremiumTier2: p,
      hasGuildAffinitiesOrInGuild: x,
      subscriptionIsPausedOrPausePending: v
    }), !x && (0, a.jsx)(g.default, {}), (null == t ? void 0 : t.isPaused) ? (0, a.jsx)(I.GuildBoostingSettingsPausedAppliedBoosts, {
      appliedGuildBoosts: b,
      premiumSubscription: t
    }) : (0, a.jsx)(I.default, {
      guildBoostSlots: s,
      premiumSubscription: t
    }), (0, a.jsx)(A.default, {
      guildBoostSlots: h
    }), (0, a.jsx)(f.default, {
      hasAppliedGuildBoosts: P,
      subscriptionIsPausedOrPausePending: v
    }), (0, a.jsx)(d.default, {
      className: O.tierComparisonTable,
      hideHeading: !0,
      hideTier0: !0
    }), (0, a.jsx)(r.default, {
      cardClassName: O.boosterRecognitionCard
    }), (0, a.jsx)(o.default, {
      className: O.faq
    })]
  })
}