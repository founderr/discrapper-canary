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
  I = s("296533"),
  N = s("901750"),
  f = s("112863"),
  g = s("701157"),
  m = s("912152"),
  C = s("615603"),
  A = s("474936"),
  h = s("388095");

function O(e) {
  let {
    premiumSubscription: t
  } = e, s = (0, l.useStateFromStores)([T.default], () => T.default.boostSlots), O = n.useMemo(() => Object.values(s), [s]), p = (0, l.useStateFromStores)([E.default], () => E.default.getCurrentUser()), R = _.default.isPremium(p, A.PremiumTypes.TIER_2), x = (0, l.useStateFromStores)([c.default], () => c.default.affinities), M = (0, l.useStateFromStores)([S.default], () => S.default.getFlattenedGuildIds()), D = x.length > 0 || M.length > 0, L = O.length > 0, P = n.useMemo(() => O.some(e => null != e.premiumGuildSubscription), [O]), b = (0, l.useStateFromStores)([u.default], () => u.default.getCurrentUserAppliedBoosts()), v = (null == t ? void 0 : t.isPausedOrPausePending) === !0;
  return (0, a.jsxs)("div", {
    children: [(0, a.jsx)(i.BlockedPaymentsWarning, {
      className: h.blockedPaymentsWarning
    }), (0, a.jsx)(N.default, {
      hasGuildBoostSlots: L,
      hasAppliedGuildBoosts: P,
      isUserPremiumTier2: R,
      subscriptionIsPausedOrPausePending: v
    }), (0, a.jsx)(m.default, {
      hasAppliedGuildBoosts: P,
      isUserPremiumTier2: R,
      hasGuildAffinitiesOrInGuild: D,
      subscriptionIsPausedOrPausePending: v
    }), !D && (0, a.jsx)(f.default, {}), (null == t ? void 0 : t.isPaused) ? (0, a.jsx)(I.GuildBoostingSettingsPausedAppliedBoosts, {
      appliedGuildBoosts: b,
      premiumSubscription: t
    }) : (0, a.jsx)(I.default, {
      guildBoostSlots: s,
      premiumSubscription: t
    }), (0, a.jsx)(C.default, {
      guildBoostSlots: O
    }), (0, a.jsx)(g.default, {
      hasAppliedGuildBoosts: P,
      subscriptionIsPausedOrPausePending: v
    }), (0, a.jsx)(d.default, {
      className: h.tierComparisonTable,
      hideHeading: !0,
      hideTier0: !0
    }), (0, a.jsx)(r.default, {
      cardClassName: h.boosterRecognitionCard
    }), (0, a.jsx)(o.default, {
      className: h.faq
    })]
  })
}