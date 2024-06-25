var n = s(735250);
s(470079);
var a = s(120356),
  i = s.n(a),
  r = s(481060),
  l = s(230711),
  o = s(63063),
  c = s(74538),
  E = s(140465),
  _ = s(474936),
  u = s(981631),
  d = s(689938),
  T = s(724991);
t.Z = e => {
  let t, s, {
      premiumSubscription: a,
      className: I,
      isFullscreen: R = !1,
      textColor: A
    } = e,
    N = (0, E.Nx)();
  if (null == a) return null;
  let C = null != a ? c.ZP.getPremiumPlanItem(a) : null;
  if (c.ZP.isBoostOnlySubscription(a) ? t = d.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION : null != C && (t = c.ZP.getDisplayPremiumType(C.planId)), null == t) return null;
  let g = () => l.Z.open(u.oAB.SUBSCRIPTIONS),
    m = (null != C ? c.ZP.getSkuIdForPlan(C.planId) : null) === _.Si.TIER_1;
  return s = null != A ? A : N || R ? "always-white" : "text-normal", (0, n.jsxs)(r.Card, {
    className: i()(T.container, I, {
      [T.lightTextLink]: R,
      [T.centerText]: N
    }),
    type: r.Card.Types.CUSTOM,
    children: [(0, n.jsx)(r.CircleExclamationPointIcon, {
      size: "custom",
      width: 20,
      height: 20,
      color: "currentColor",
      className: i()(T.icon, {
        [T.lightThemeColorOnly]: N || R
      })
    }), (0, n.jsx)(r.Text, {
      variant: "text-sm/medium",
      color: s,
      children: m ? d.Z.Messages.PREMIUM_SUBSCRIPTION_TIER_1_DEPRECATION.format({
        helpdeskArticle: o.Z.getArticleURL(u.BhN.PREMIUM_DETAILS),
        onSubscriptionsClick: g
      }) : d.Z.Messages.PREMIUM_SUBSCRIPTION_MANAGE_YOURS_LINK.format({
        subscriptionName: t,
        onSubscriptionsClick: g
      })
    })]
  })
}