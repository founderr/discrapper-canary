"use strict";
s.r(t), s.d(t, {
  default: function() {
    return f
  }
});
var a = s("37983");
s("884691");
var n = s("414456"),
  i = s.n(n),
  r = s("907002"),
  l = s("65597"),
  o = s("206230"),
  u = s("154889"),
  d = s("917247"),
  c = s("218435"),
  _ = s("881155"),
  E = s("646718"),
  I = s("49111"),
  T = s("589323"),
  f = function(e) {
    var t, s;
    let {
      isVisible: n,
      isFullscreen: f,
      subscriptionTier: S
    } = e, R = null === (t = (0, d.usePremiumTrialOffer)()) || void 0 === t ? void 0 : t.subscription_trial, m = (0, u.usePremiumDiscountOffer)(), A = (0, u.discountOfferHasTier)(m, E.PremiumSubscriptionSKUs.TIER_2) ? E.PremiumSubscriptionSKUs.TIER_2 : void 0, N = (0, l.default)([o.default], () => o.default.useReducedMotion), p = (0, r.useSpring)({
      transform: n ? "translateY(-100%)" : "translateY(0%)",
      opacity: n ? 1 : 0,
      config: {
        tension: 120,
        friction: 12
      },
      immediate: N
    }), g = {
      section: I.AnalyticsSections.MARKETING_FLOATING_CTA
    };
    return (0, a.jsx)(r.animated.div, {
      className: i(T.wrapper, {
        [T.fullscreenWrapper]: f,
        [T.invisible]: !n
      }),
      style: p,
      children: (0, a.jsxs)("div", {
        className: T.innerWrapper,
        children: [(0, a.jsx)(_.default, {
          className: T.button,
          shinyButtonClassName: T.shinyButton,
          subscriptionTier: null !== (s = null != S ? S : null == R ? void 0 : R.sku_id) && void 0 !== s ? s : A,
          premiumModalAnalyticsLocation: g,
          isPersistentCTA: !0
        }), (0, a.jsx)(c.default, {
          className: T.button,
          premiumModalAnalyticsLocation: g
        })]
      })
    })
  }