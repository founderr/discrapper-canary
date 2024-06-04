"use strict";
s.r(t), s.d(t, {
  default: function() {
    return O
  }
});
var a = s("735250"),
  n = s("470079"),
  l = s("442837"),
  i = s("89057"),
  r = s("724884"),
  o = s("290799"),
  d = s("362948"),
  u = s("899667"),
  c = s("165630"),
  S = s("771845"),
  E = s("594174"),
  T = s("314884"),
  _ = s("74538"),
  f = s("296533"),
  I = s("901750"),
  m = s("112863"),
  N = s("701157"),
  g = s("912152"),
  h = s("615603"),
  C = s("474936"),
  A = s("388095");

function O(e) {
  let {
    premiumSubscription: t
  } = e, s = (0, l.useStateFromStores)([T.default], () => T.default.boostSlots), O = n.useMemo(() => Object.values(s), [s]), p = (0, l.useStateFromStores)([E.default], () => E.default.getCurrentUser()), R = _.default.isPremium(p, C.PremiumTypes.TIER_2), x = (0, l.useStateFromStores)([c.default], () => c.default.affinities), M = (0, l.useStateFromStores)([S.default], () => S.default.getFlattenedGuildIds()), D = x.length > 0 || M.length > 0, L = O.length > 0, v = n.useMemo(() => O.some(e => null != e.premiumGuildSubscription), [O]), P = (0, l.useStateFromStores)([u.default], () => u.default.getCurrentUserAppliedBoosts()), b = (null == t ? void 0 : t.isPausedOrPausePending) === !0;
  return (0, a.jsxs)("div", {
    children: [(0, a.jsx)(i.BlockedPaymentsWarning, {
      className: A.blockedPaymentsWarning
    }), (0, a.jsx)(I.default, {
      hasGuildBoostSlots: L,
      hasAppliedGuildBoosts: v,
      isUserPremiumTier2: R,
      subscriptionIsPausedOrPausePending: b
    }), (0, a.jsx)(g.default, {
      hasAppliedGuildBoosts: v,
      isUserPremiumTier2: R,
      hasGuildAffinitiesOrInGuild: D,
      subscriptionIsPausedOrPausePending: b
    }), !D && (0, a.jsx)(m.default, {}), (null == t ? void 0 : t.isPaused) ? (0, a.jsx)(f.GuildBoostingSettingsPausedAppliedBoosts, {
      appliedGuildBoosts: P,
      premiumSubscription: t
    }) : (0, a.jsx)(f.default, {
      guildBoostSlots: s,
      premiumSubscription: t
    }), (0, a.jsx)(h.default, {
      guildBoostSlots: O
    }), (0, a.jsx)(N.default, {
      hasAppliedGuildBoosts: v,
      subscriptionIsPausedOrPausePending: b
    }), (0, a.jsx)(d.default, {
      className: A.tierComparisonTable,
      hideHeading: !0,
      hideTier0: !0
    }), (0, a.jsx)(r.default, {
      cardClassName: A.boosterRecognitionCard
    }), (0, a.jsx)(o.default, {
      className: A.faq
    })]
  })
}