"use strict";
l.r(t), l.d(t, {
  default: function() {
    return S
  }
});
var a = l("735250");
l("470079");
var n = l("120356"),
  s = l.n(n),
  i = l("481060"),
  r = l("197115"),
  u = l("672752"),
  o = l("466111"),
  d = l("981631"),
  c = l("474936"),
  f = l("689938"),
  m = l("441157");

function S(e) {
  let {
    message: t,
    onClose: l,
    openStreamUpsellModal: n,
    glow: S = !1
  } = e, E = {
    section: d.AnalyticsSections.STREAM_SETTINGS,
    object: d.AnalyticsObjects.PREMIUM_UPSELL_BANNER,
    objectType: d.AnalyticsObjectTypes.BUY
  };
  return (0, a.jsxs)("div", {
    className: s()(m.upsellBanner, m.enhancedBanner, {
      [m.gradientGlow]: S
    }),
    children: [(0, a.jsxs)("div", {
      className: m.iconTextContainer,
      children: [(0, a.jsx)(o.default, {
        color: u.GradientCssUrls.PREMIUM_TIER_2
      }), (0, a.jsx)(i.Text, {
        variant: "text-sm/medium",
        className: s()(m.upsellText, m.enhancedUpsellText),
        children: null != t ? t : f.default.Messages.STREAM_PREMIUM_UPSELL_BANNER_LEARN_MORE_V3.format({
          onClick: () => n({
            analyticsLocation: E,
            onClose: l
          })
        })
      })]
    }), (0, a.jsx)("div", {
      className: m.enhancedCTAs,
      children: (0, a.jsx)(r.default, {
        className: s()(m.enhancedCTA, m.ctaGradientBackground),
        iconClassName: m.premiumIcon,
        subscriptionTier: c.PremiumSubscriptionSKUs.TIER_2,
        buttonText: f.default.Messages.STREAM_PREMIUM_UPSELL_BANNER_CTA,
        size: i.Button.Sizes.TINY,
        premiumModalAnalyticsLocation: E
      })
    })]
  })
}