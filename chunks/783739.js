"use strict";
s.r(t), s.d(t, {
  default: function() {
    return h
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
  g = s("112863"),
  f = s("701157"),
  m = s("912152"),
  C = s("615603"),
  A = s("474936"),
  O = s("388095");

function h(e) {
  let {
    premiumSubscription: t
  } = e, s = (0, l.useStateFromStores)([T.default], () => T.default.boostSlots), h = n.useMemo(() => Object.values(s), [s]), p = (0, l.useStateFromStores)([E.default], () => E.default.getCurrentUser()), R = _.default.isPremium(p, A.PremiumTypes.TIER_2), M = (0, l.useStateFromStores)([c.default], () => c.default.affinities), x = (0, l.useStateFromStores)([S.default], () => S.default.getFlattenedGuildIds()), D = M.length > 0 || x.length > 0, L = h.length > 0, P = n.useMemo(() => h.some(e => null != e.premiumGuildSubscription), [h]), b = (0, l.useStateFromStores)([u.default], () => u.default.getCurrentUserAppliedBoosts()), v = (null == t ? void 0 : t.isPausedOrPausePending) === !0;
  return (0, a.jsxs)("div", {
    children: [(0, a.jsx)(i.BlockedPaymentsWarning, {
      className: O.blockedPaymentsWarning
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
    }), !D && (0, a.jsx)(g.default, {}), (null == t ? void 0 : t.isPaused) ? (0, a.jsx)(I.GuildBoostingSettingsPausedAppliedBoosts, {
      appliedGuildBoosts: b,
      premiumSubscription: t
    }) : (0, a.jsx)(I.default, {
      guildBoostSlots: s,
      premiumSubscription: t
    }), (0, a.jsx)(C.default, {
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