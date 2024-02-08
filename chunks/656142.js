"use strict";
s.r(t), s.d(t, {
  default: function() {
    return N
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
  E = s("719923"),
  _ = s("153160"),
  T = s("646718"),
  I = s("782340"),
  S = s("545627"),
  N = e => {
    var t;
    let {
      className: s
    } = e, n = (0, i.useStateFromStores)([d.default], () => d.default.getCurrentUser()), N = (0, i.useStateFromStores)([o.default], () => o.default.locale), g = (0, i.useStateFromStores)([c.default], () => c.default.getPremiumTypeSubscription()), f = (0, i.useStateFromStores)([u.default], () => null != g ? u.default.get(g.planId) : void 0), A = null !== (t = (0, i.useStateFromStores)([u.default], () => null != f ? u.default.getForSkuAndInterval(T.PremiumSubscriptionSKUs.GUILD, f.interval, f.intervalCount) : void 0)) && void 0 !== t ? t : T.SubscriptionPlanInfo[T.SubscriptionPlans.PREMIUM_MONTH_GUILD];
    return (0, a.jsxs)("div", {
      className: l(S.wrapper, s),
      children: [(0, a.jsx)(r.Heading, {
        className: S.heading,
        variant: "heading-xl/semibold",
        children: I.default.Messages.GUILD_SETTINGS_PREMIUM_UPSELL_HEADING_PRIMARY
      }), (0, a.jsx)(r.Text, {
        variant: "text-md/normal",
        children: function(e) {
          let {
            currentUser: t,
            locale: s,
            guildBoostingPlanId: n,
            interval: l,
            intervalCount: i
          } = e, r = E.default.getDefaultPrice(n, E.default.isPremium(t)), o = E.default.getDefaultPrice(n, !1), d = (0, _.formatRate)((0, _.formatPrice)(r.amount, r.currency), l, i), u = (0, _.formatRate)((0, _.formatPrice)(o.amount, o.currency), l, i);
          return E.default.isPremium(t, T.PremiumTypes.TIER_2) ? I.default.Messages.GUILD_SETTINGS_PREMIUM_UPSELL_SUBHEADING_TIER_2.format({
            price: d,
            originalPrice: u,
            originalPriceHook: (e, t) => (0, a.jsx)("span", {
              className: S.originalPrice,
              children: e
            }, t),
            freeSubscriptionCount: T.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM,
            discountPercent: (0, _.formatPercent)(s, T.GUILD_BOOST_COST_FOR_PREMIUM_USER_DISCOUNT_PERCENT / 100)
          }) : E.default.isPremium(t, T.PremiumTypes.TIER_1) ? I.default.Messages.GUILD_SETTINGS_PREMIUM_UPSELL_SUBHEADING_TIER_1.format({
            price: d,
            originalPrice: u,
            originalPriceHook: (e, t) => (0, a.jsx)("span", {
              className: S.originalPrice,
              children: e
            }, t),
            discountPercent: (0, _.formatPercent)(s, T.GUILD_BOOST_COST_FOR_PREMIUM_USER_DISCOUNT_PERCENT / 100)
          }) : I.default.Messages.GUILD_SETTINGS_PREMIUM_UPSELL_SUBHEADING.format({
            price: d
          })
        }({
          currentUser: n,
          locale: N,
          guildBoostingPlanId: A.id,
          interval: A.interval,
          intervalCount: A.intervalCount
        })
      })]
    })
  }