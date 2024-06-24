var n = t(735250);
t(470079);
var a = t(120356),
  r = t.n(a),
  i = t(481060),
  l = t(230711),
  o = t(63063),
  _ = t(74538),
  c = t(140465),
  E = t(474936),
  u = t(981631),
  R = t(689938),
  d = t(724991);
s.Z = e => {
  let s, t, {
      premiumSubscription: a,
      className: I,
      isFullscreen: T = !1,
      textColor: A
    } = e,
    M = (0, c.Nx)();
  if (null == a) return null;
  let S = null != a ? _.ZP.getPremiumPlanItem(a) : null;
  if (_.ZP.isBoostOnlySubscription(a) ? s = R.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION : null != S && (s = _.ZP.getDisplayPremiumType(S.planId)), null == s) return null;
  let N = () => l.Z.open(u.oAB.SUBSCRIPTIONS),
    p = (null != S ? _.ZP.getSkuIdForPlan(S.planId) : null) === E.Si.TIER_1;
  return t = null != A ? A : M || T ? "always-white" : "text-normal", (0, n.jsxs)(i.Card, {
    className: r()(d.container, I, {
      [d.lightTextLink]: T,
      [d.centerText]: M
    }),
    type: i.Card.Types.CUSTOM,
    children: [(0, n.jsx)(i.CircleExclamationPointIcon, {
      size: "custom",
      width: 20,
      height: 20,
      color: "currentColor",
      className: r()(d.icon, {
        [d.lightThemeColorOnly]: M || T
      })
    }), (0, n.jsx)(i.Text, {
      variant: "text-sm/medium",
      color: t,
      children: p ? R.Z.Messages.PREMIUM_SUBSCRIPTION_TIER_1_DEPRECATION.format({
        helpdeskArticle: o.Z.getArticleURL(u.BhN.PREMIUM_DETAILS),
        onSubscriptionsClick: N
      }) : R.Z.Messages.PREMIUM_SUBSCRIPTION_MANAGE_YOURS_LINK.format({
        subscriptionName: s,
        onSubscriptionsClick: N
      })
    })]
  })
}