"use strict";
s.r(t), s.d(t, {
  default: function() {
    return f
  }
});
var a = s("37983");
s("884691");
var r = s("414456"),
  n = s.n(r),
  i = s("77078"),
  l = s("79112"),
  u = s("423487"),
  o = s("701909"),
  d = s("719923"),
  c = s("182650"),
  _ = s("646718"),
  E = s("49111"),
  I = s("782340"),
  T = s("507759"),
  f = e => {
    let t, {
        premiumSubscription: s,
        className: r,
        isFullscreen: f = !1
      } = e,
      S = (0, c.useIsInPremiumOfferExperience)();
    if (null == s) return null;
    let R = null != s ? d.default.getPremiumPlanItem(s) : null,
      m = d.default.isBoostOnlySubscription(s);
    if (m ? t = I.default.Messages.PREMIUM_GUILD_SUBSCRIPTION : null != R && (t = d.default.getDisplayPremiumType(R.planId)), null == t) return null;
    let A = () => l.default.open(E.UserSettingsSections.SUBSCRIPTIONS),
      N = null != R ? d.default.getSkuIdForPlan(R.planId) : null,
      p = N === _.PremiumSubscriptionSKUs.TIER_1;
    return (0, a.jsxs)(i.Card, {
      className: n(T.container, r, {
        [T.lightTextLink]: f,
        [T.centerText]: S
      }),
      type: i.Card.Types.CUSTOM,
      children: [(0, a.jsx)(u.default, {
        className: n(T.icon, {
          [T.lightThemeColorOnly]: S || f
        })
      }), (0, a.jsx)(i.Text, {
        variant: "text-sm/medium",
        color: S || f ? "always-white" : "text-normal",
        children: p ? I.default.Messages.PREMIUM_SUBSCRIPTION_TIER_1_DEPRECATION.format({
          helpdeskArticle: o.default.getArticleURL(E.HelpdeskArticles.PREMIUM_DETAILS),
          onSubscriptionsClick: A
        }) : I.default.Messages.PREMIUM_SUBSCRIPTION_MANAGE_YOURS_LINK.format({
          subscriptionName: t,
          onSubscriptionsClick: A
        })
      })]
    })
  }