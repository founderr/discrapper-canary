"use strict";
s.r(t);
var a = s("735250");
s("470079");
var i = s("803997"),
  r = s.n(i),
  l = s("481060"),
  n = s("230711"),
  o = s("759231"),
  u = s("63063"),
  d = s("74538"),
  c = s("140465"),
  _ = s("474936"),
  E = s("981631"),
  C = s("689938"),
  f = s("694406");
t.default = e => {
  let t, s, {
      premiumSubscription: i,
      className: T,
      isFullscreen: I = !1,
      textColor: R
    } = e,
    S = (0, c.useIsInPremiumOfferExperience)();
  if (null == i) return null;
  let p = null != i ? d.default.getPremiumPlanItem(i) : null;
  if (d.default.isBoostOnlySubscription(i) ? t = C.default.Messages.PREMIUM_GUILD_SUBSCRIPTION : null != p && (t = d.default.getDisplayPremiumType(p.planId)), null == t) return null;
  let m = () => n.default.open(E.UserSettingsSections.SUBSCRIPTIONS),
    A = (null != p ? d.default.getSkuIdForPlan(p.planId) : null) === _.PremiumSubscriptionSKUs.TIER_1;
  return s = null != R ? R : S || I ? "always-white" : "text-normal", (0, a.jsxs)(l.Card, {
    className: r()(f.container, T, {
      [f.lightTextLink]: I,
      [f.centerText]: S
    }),
    type: l.Card.Types.CUSTOM,
    children: [(0, a.jsx)(o.default, {
      className: r()(f.icon, {
        [f.lightThemeColorOnly]: S || I
      })
    }), (0, a.jsx)(l.Text, {
      variant: "text-sm/medium",
      color: s,
      children: A ? C.default.Messages.PREMIUM_SUBSCRIPTION_TIER_1_DEPRECATION.format({
        helpdeskArticle: u.default.getArticleURL(E.HelpdeskArticles.PREMIUM_DETAILS),
        onSubscriptionsClick: m
      }) : C.default.Messages.PREMIUM_SUBSCRIPTION_MANAGE_YOURS_LINK.format({
        subscriptionName: t,
        onSubscriptionsClick: m
      })
    })]
  })
}