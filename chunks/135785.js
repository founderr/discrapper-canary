"use strict";
s.r(t);
var a = s("735250");
s("470079");
var r = s("120356"),
  i = s.n(r),
  n = s("481060"),
  l = s("230711"),
  o = s("759231"),
  u = s("63063"),
  c = s("74538"),
  d = s("140465"),
  _ = s("474936"),
  E = s("981631"),
  R = s("689938"),
  T = s("624855");
t.default = e => {
  let t, s, {
      premiumSubscription: r,
      className: f,
      isFullscreen: m = !1,
      textColor: I
    } = e,
    S = (0, d.useIsInPremiumOfferExperience)();
  if (null == r) return null;
  let p = null != r ? c.default.getPremiumPlanItem(r) : null;
  if (c.default.isBoostOnlySubscription(r) ? t = R.default.Messages.PREMIUM_GUILD_SUBSCRIPTION : null != p && (t = c.default.getDisplayPremiumType(p.planId)), null == t) return null;
  let A = () => l.default.open(E.UserSettingsSections.SUBSCRIPTIONS),
    g = (null != p ? c.default.getSkuIdForPlan(p.planId) : null) === _.PremiumSubscriptionSKUs.TIER_1;
  return s = null != I ? I : S || m ? "always-white" : "text-normal", (0, a.jsxs)(n.Card, {
    className: i()(T.container, f, {
      [T.lightTextLink]: m,
      [T.centerText]: S
    }),
    type: n.Card.Types.CUSTOM,
    children: [(0, a.jsx)(o.default, {
      className: i()(T.icon, {
        [T.lightThemeColorOnly]: S || m
      })
    }), (0, a.jsx)(n.Text, {
      variant: "text-sm/medium",
      color: s,
      children: g ? R.default.Messages.PREMIUM_SUBSCRIPTION_TIER_1_DEPRECATION.format({
        helpdeskArticle: u.default.getArticleURL(E.HelpdeskArticles.PREMIUM_DETAILS),
        onSubscriptionsClick: A
      }) : R.default.Messages.PREMIUM_SUBSCRIPTION_MANAGE_YOURS_LINK.format({
        subscriptionName: t,
        onSubscriptionsClick: A
      })
    })]
  })
}