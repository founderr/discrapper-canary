t(47120);
var n = t(735250);
t(470079);
var i = t(120356),
  a = t.n(i),
  l = t(392711),
  r = t.n(l),
  o = t(442837),
  c = t(481060),
  E = t(594174),
  d = t(509545),
  _ = t(78839),
  T = t(74538),
  S = t(393411),
  u = t(474936),
  I = t(689938),
  N = t(570662);

function A(e) {
  let {
    user: s,
    planId: t,
    count: i,
    userPremiumSubscription: l
  } = e, [r, E] = (0, o.Wu)([d.Z], () => [d.Z.get(t), null != l ? d.Z.get(l.planId) : null]);
  if (null == r || T.ZP.getInterval(t).intervalType !== u.rV.MONTH) return null;
  let _ = null != E ? E.skuId : null,
    S = r.skuId === _,
    A = T.ZP.getDisplayName(t);
  return (0, n.jsxs)("div", {
    className: N.accountCreditRow,
    children: [(0, n.jsx)("div", {
      className: a()({
        [N.iconBackgroundTier0]: r.skuId === u.Si.TIER_0,
        [N.iconBackgroundTier1]: r.skuId === u.Si.TIER_1,
        [N.iconBackgroundTier2]: r.skuId === u.Si.TIER_2
      }),
      children: (0, n.jsx)(c.NitroWheelIcon, {
        size: "md",
        color: "currentColor",
        className: N.icon
      })
    }), (0, n.jsxs)("div", {
      className: N.rowDetails,
      children: [(0, n.jsx)(c.Heading, {
        variant: "heading-md/semibold",
        children: I.Z.Messages.PREMIUM_SUBSCRIPTION_CREDIT.format({
          planName: A
        })
      }), s.hasFreePremium() || null != l && l.isPurchasedExternally ? null : (0, n.jsx)(c.Heading, {
        className: N.rowApplied,
        variant: "heading-sm/semibold",
        color: "header-secondary",
        children: S && null != l ? I.Z.Messages.PREMIUM_SUBSCRIPTION_CREDIT_APPLIED_ON.format({
          date: l.currentPeriodEnd
        }) : I.Z.Messages.PREMIUM_SUBSCRIPTION_CREDIT_APPLIED_MISMATCHED_PLAN.format({
          planName: A
        })
      })]
    }), (0, n.jsx)(c.Text, {
      className: N.rowCreditCount,
      variant: "text-md/semibold",
      children: I.Z.Messages.PREMIUM_SUBSCRIPTION_CREDIT_COUNT_MONTHS.format({
        count: i
      })
    })]
  })
}
s.Z = function(e) {
  let {
    className: s,
    entitlements: t
  } = e, i = r()(Array.from(t)).filter(e => {
    let {
      subscriptionPlanId: s,
      parentId: t,
      consumed: n
    } = e;
    return null != s && null != t && !n
  }).groupBy(e => e.subscriptionPlanId).value(), l = (0, o.e7)([_.ZP], () => _.ZP.getPremiumSubscription()), d = (0, o.e7)([_.ZP], () => null == _.ZP.getPremiumTypeSubscription()), T = Object.keys(i).some(e => e === u.Xh.PREMIUM_MONTH_TIER_1), C = (0, o.e7)([E.default], () => E.default.getCurrentUser());
  return null == C ? null : (0, n.jsxs)("div", {
    children: [(0, n.jsx)("div", {
      className: a()(s, N.premiumSubscriptionAccountCredit),
      children: Object.keys(i).map(e => (0, n.jsx)(A, {
        planId: e,
        count: i[e].length,
        userPremiumSubscription: l,
        user: C
      }, e))
    }), T && d && (0, n.jsxs)("div", {
      children: [(0, n.jsx)(c.Text, {
        className: N.tier1AccountCreditHeader,
        variant: "text-md/normal",
        children: I.Z.Messages.PREMIUM_TIER_1_ACCOUNT_CREDIT_HEADER
      }), (0, n.jsx)(S.R, {})]
    })]
  })
}