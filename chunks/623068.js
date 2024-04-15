"use strict";
r.r(t);
var n = r("735250");
r("470079");
var s = r("120356"),
  i = r.n(s),
  u = r("442837"),
  a = r("607070"),
  l = r("314684"),
  o = r("967538"),
  d = r("914677"),
  _ = r("735825"),
  c = r("527752");
t.default = e => {
  let {
    showAnimations: t = !0,
    iconClassName: r,
    staticPercentage: s,
    innerCircleClassName: E,
    progressCircleStrokeSize: R,
    gemBackgroundCircleSize: T
  } = e, S = (0, l.useFreeBoostUserTenureReward)(), N = (0, u.useStateFromStores)([a.default], () => a.default.useReducedMotion), f = t && !N;
  if (null == S) return null;
  let {
    redeemableInDays: m = 0,
    tenureRewardSkuId: A
  } = S, D = _.TenureRewardSKUs.FREE_GUILD_BOOST_1_MONTH === A ? _.NUM_DAYS_REQUIRED_1_MONTH_VARIANT : _.NUM_DAYS_3_REQUIRED_MONTH_VARIANT, w = Math.min(D, Math.max(D - m, 0)), I = 100 * w / D, O = f ? 100 * Math.max(w - .25 * D, 0) / D : I;
  return (0, n.jsx)("div", {
    className: i()(c.gemProgressCircle, r),
    children: (0, n.jsx)(d.default, {
      animationClassName: i()(c.activeProgressCircle, {
        [c.activeProgressCircleAnimation]: f
      }),
      progressCircleStrokeSize: R,
      percentage: null != s ? s : I,
      initialPercentage: null != s ? s : O,
      children: (0, n.jsx)(o.default, {
        className: f ? c.nitroGemAnimation : void 0,
        backgroundColor: i()(c.gemBackgroundFill, E),
        backgroundCircleSize: T
      })
    })
  })
}