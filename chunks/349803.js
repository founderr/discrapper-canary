"use strict";
s.r(t);
var a = s("735250");
s("470079");
var i = s("803997"),
  r = s.n(i),
  l = s("718017"),
  n = s("399606"),
  o = s("607070"),
  u = s("104494"),
  d = s("639119"),
  c = s("318747"),
  _ = s("409100"),
  E = s("474936"),
  C = s("981631"),
  f = s("450057");
t.default = function(e) {
  var t, s;
  let {
    isVisible: i,
    isFullscreen: T,
    subscriptionTier: I
  } = e, R = null === (t = (0, d.usePremiumTrialOffer)()) || void 0 === t ? void 0 : t.subscription_trial, S = (0, u.usePremiumDiscountOffer)(), p = (0, u.discountOfferHasTier)(S, E.PremiumSubscriptionSKUs.TIER_2) ? E.PremiumSubscriptionSKUs.TIER_2 : void 0, m = (0, n.useStateFromStores)([o.default], () => o.default.useReducedMotion), A = (0, l.useSpring)({
    transform: i ? "translateY(-100%)" : "translateY(0%)",
    opacity: i ? 1 : 0,
    config: {
      tension: 120,
      friction: 12
    },
    immediate: m
  }), g = {
    section: C.AnalyticsSections.MARKETING_FLOATING_CTA
  };
  return (0, a.jsx)(l.animated.div, {
    className: r()(f.wrapper, {
      [f.fullscreenWrapper]: T,
      [f.invisible]: !i
    }),
    style: A,
    children: (0, a.jsxs)("div", {
      className: f.innerWrapper,
      children: [(0, a.jsx)(_.default, {
        className: f.button,
        shinyButtonClassName: f.shinyButton,
        subscriptionTier: null !== (s = null != I ? I : null == R ? void 0 : R.sku_id) && void 0 !== s ? s : p,
        premiumModalAnalyticsLocation: g,
        isPersistentCTA: !0
      }), (0, a.jsx)(c.default, {
        className: f.button,
        premiumModalAnalyticsLocation: g
      })]
    })
  })
}