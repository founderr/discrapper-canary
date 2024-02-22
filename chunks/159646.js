"use strict";
s.r(t), s.d(t, {
  default: function() {
    return f
  }
});
var a = s("37983");
s("884691");
var i = s("414456"),
  n = s.n(i),
  r = s("77078"),
  l = s("79112"),
  o = s("423487"),
  u = s("701909"),
  d = s("719923"),
  c = s("182650"),
  _ = s("646718"),
  E = s("49111"),
  I = s("782340"),
  T = s("555875"),
  f = e => {
    let t, s, {
        premiumSubscription: i,
        className: f,
        isFullscreen: S = !1,
        textColor: R
      } = e,
      m = (0, c.useIsInPremiumOfferExperience)();
    if (null == i) return null;
    let A = null != i ? d.default.getPremiumPlanItem(i) : null,
      p = d.default.isBoostOnlySubscription(i);
    if (p ? t = I.default.Messages.PREMIUM_GUILD_SUBSCRIPTION : null != A && (t = d.default.getDisplayPremiumType(A.planId)), null == t) return null;
    let N = () => l.default.open(E.UserSettingsSections.SUBSCRIPTIONS),
      g = null != A ? d.default.getSkuIdForPlan(A.planId) : null,
      C = g === _.PremiumSubscriptionSKUs.TIER_1;
    return s = null != R ? R : m || S ? "always-white" : "text-normal", (0, a.jsxs)(r.Card, {
      className: n(T.container, f, {
        [T.lightTextLink]: S,
        [T.centerText]: m
      }),
      type: r.Card.Types.CUSTOM,
      children: [(0, a.jsx)(o.default, {
        className: n(T.icon, {
          [T.lightThemeColorOnly]: m || S
        })
      }), (0, a.jsx)(r.Text, {
        variant: "text-sm/medium",
        color: s,
        children: C ? I.default.Messages.PREMIUM_SUBSCRIPTION_TIER_1_DEPRECATION.format({
          helpdeskArticle: u.default.getArticleURL(E.HelpdeskArticles.PREMIUM_DETAILS),
          onSubscriptionsClick: N
        }) : I.default.Messages.PREMIUM_SUBSCRIPTION_MANAGE_YOURS_LINK.format({
          subscriptionName: t,
          onSubscriptionsClick: N
        })
      })]
    })
  }