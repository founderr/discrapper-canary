"use strict";
s.r(t);
var a = s("735250");
s("470079");
var r = s("120356"),
  i = s.n(r),
  n = s("920906"),
  l = s("399606"),
  o = s("607070"),
  u = s("104494"),
  c = s("639119"),
  d = s("318747"),
  _ = s("409100"),
  E = s("474936"),
  R = s("981631"),
  T = s("984623");
t.default = function(e) {
  var t, s;
  let {
    isVisible: r,
    isFullscreen: f,
    subscriptionTier: I
  } = e, S = null === (t = (0, c.usePremiumTrialOffer)()) || void 0 === t ? void 0 : t.subscription_trial, m = (0, u.usePremiumDiscountOffer)(), p = (0, u.discountOfferHasTier)(m, E.PremiumSubscriptionSKUs.TIER_2) ? E.PremiumSubscriptionSKUs.TIER_2 : void 0, A = (0, l.useStateFromStores)([o.default], () => o.default.useReducedMotion), N = (0, n.useSpring)({
    transform: r ? "translateY(-100%)" : "translateY(0%)",
    opacity: r ? 1 : 0,
    config: {
      tension: 120,
      friction: 12
    },
    immediate: A
  }), M = {
    section: R.AnalyticsSections.MARKETING_FLOATING_CTA
  };
  return (0, a.jsx)(n.animated.div, {
    className: i()(T.wrapper, {
      [T.fullscreenWrapper]: f,
      [T.invisible]: !r
    }),
    style: N,
    children: (0, a.jsxs)("div", {
      className: T.innerWrapper,
      children: [(0, a.jsx)(_.default, {
        className: T.button,
        shinyButtonClassName: T.shinyButton,
        subscriptionTier: null !== (s = null != I ? I : null == S ? void 0 : S.sku_id) && void 0 !== s ? s : p,
        premiumModalAnalyticsLocation: M,
        isPersistentCTA: !0
      }), (0, a.jsx)(d.default, {
        className: T.button,
        premiumModalAnalyticsLocation: M
      })]
    })
  })
}