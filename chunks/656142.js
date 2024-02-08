"use strict";
s.r(t), s.d(t, {
  default: function() {
    return g
  }
});
var a = s("37983");
s("884691");
var n = s("414456"),
  l = s.n(n),
  i = s("446674"),
  r = s("77078"),
  o = s("915639"),
  d = s("697218"),
  u = s("10514"),
  c = s("521012"),
  E = s("240481"),
  _ = s("719923"),
  T = s("153160"),
  I = s("646718"),
  S = s("782340"),
  N = s("545627"),
  g = e => {
    var t;
    let {
      className: s
    } = e, n = (0, i.useStateFromStores)([d.default], () => d.default.getCurrentUser()), g = (0, i.useStateFromStores)([o.default], () => o.default.locale), f = (0, i.useStateFromStores)([c.default], () => c.default.getPremiumTypeSubscription()), A = (0, i.useStateFromStores)([u.default], () => null != f ? u.default.get(f.planId) : void 0), L = null !== (t = (0, i.useStateFromStores)([u.default], () => null != A ? u.default.getForSkuAndInterval(I.PremiumSubscriptionSKUs.GUILD, A.interval, A.intervalCount) : void 0)) && void 0 !== t ? t : I.SubscriptionPlanInfo[I.SubscriptionPlans.PREMIUM_MONTH_GUILD];
    return (0, a.jsxs)("div", {
      className: l(N.wrapper, s),
      children: [(0, a.jsx)(r.Heading, {
        className: N.heading,
        variant: "heading-xl/semibold",
        children: S.default.Messages.GUILD_SETTINGS_PREMIUM_UPSELL_HEADING_PRIMARY
      }), (0, a.jsx)(r.Text, {
        variant: "text-md/normal",
        children: function(e) {
          let {
            currentUser: t,
            locale: s,
            guildBoostingPlanId: n,
            interval: l,
            intervalCount: i
          } = e, r = _.default.getDefaultPrice(n, _.default.isPremium(t)), o = _.default.getDefaultPrice(n, !1), d = (0, T.formatRate)((0, T.formatPrice)(r.amount, r.currency), l, i), u = (0, T.formatRate)((0, T.formatPrice)(o.amount, o.currency), l, i);
          return _.default.isPremium(t, I.PremiumTypes.TIER_2) ? S.default.Messages.GUILD_SETTINGS_PREMIUM_UPSELL_SUBHEADING_TIER_2.format({
            price: d,
            originalPrice: u,
            originalPriceHook: (e, t) => (0, a.jsx)("span", {
              className: N.originalPrice,
              children: e
            }, t),
            freeSubscriptionCount: I.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM,
            discountPercent: (0, E.formatPercent)(s, I.GUILD_BOOST_COST_FOR_PREMIUM_USER_DISCOUNT_PERCENT / 100)
          }) : _.default.isPremium(t, I.PremiumTypes.TIER_1) ? S.default.Messages.GUILD_SETTINGS_PREMIUM_UPSELL_SUBHEADING_TIER_1.format({
            price: d,
            originalPrice: u,
            originalPriceHook: (e, t) => (0, a.jsx)("span", {
              className: N.originalPrice,
              children: e
            }, t),
            discountPercent: (0, E.formatPercent)(s, I.GUILD_BOOST_COST_FOR_PREMIUM_USER_DISCOUNT_PERCENT / 100)
          }) : S.default.Messages.GUILD_SETTINGS_PREMIUM_UPSELL_SUBHEADING.format({
            price: d
          })
        }({
          currentUser: n,
          locale: g,
          guildBoostingPlanId: L.id,
          interval: L.interval,
          intervalCount: L.intervalCount
        })
      })]
    })
  }