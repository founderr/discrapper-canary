"use strict";
l.r(t), l.d(t, {
  default: function() {
    return E
  }
});
var a = l("37983");
l("884691");
var n = l("414456"),
  s = l.n(n),
  r = l("77078"),
  i = l("688771"),
  u = l("635956"),
  o = l("791106"),
  d = l("216422"),
  c = l("49111"),
  f = l("646718"),
  m = l("782340"),
  S = l("863782");

function E(e) {
  let {
    message: t,
    onClose: l,
    openStreamUpsellModal: n,
    glow: E = !1
  } = e, {
    enabled: C,
    variant: h
  } = i.default.useExperiment({
    location: "StreamSettingsUpsellBanner"
  }, {
    autoTrackExposure: !0
  }), g = C && i.GradientVariants.includes(h), _ = C && [i.EnhancedHDStreamingRoadblockVariants.VARIANT_1A, i.EnhancedHDStreamingRoadblockVariants.VARIANT_1B].includes(h), N = {
    section: c.AnalyticsSections.STREAM_SETTINGS,
    object: c.AnalyticsObjects.PREMIUM_UPSELL_BANNER,
    objectType: c.AnalyticsObjectTypes.BUY
  }, p = () => (0, a.jsx)(u.default, {
    className: s(S.enhancedCTA, {
      [S.ctaGradientBackground]: g
    }),
    iconClassName: S.premiumIcon,
    subscriptionTier: f.PremiumSubscriptionSKUs.TIER_2,
    buttonText: m.default.Messages.STREAM_PREMIUM_UPSELL_BANNER_CTA,
    size: r.Button.Sizes.TINY,
    premiumModalAnalyticsLocation: N
  });
  return C ? (0, a.jsxs)("div", {
    className: s(S.upsellBanner, S.enhancedBanner, {
      [S.gradientGlow]: E
    }),
    children: [(0, a.jsxs)("div", {
      className: S.iconTextContainer,
      children: [(0, a.jsx)(d.default, {
        color: o.GradientCssUrls.PREMIUM_TIER_2
      }), (0, a.jsx)(r.Text, {
        variant: "text-sm/medium",
        className: s(S.upsellText, S.enhancedUpsellText),
        children: null != t ? t : _ ? m.default.Messages.STREAM_PREMIUM_UPSELL_BANNER_V2 : m.default.Messages.STREAM_PREMIUM_UPSELL_BANNER_LEARN_MORE_V2.format({
          onClick: () => n({
            analyticsLocation: N,
            onClose: l
          })
        })
      })]
    }), (0, a.jsx)("div", {
      className: S.enhancedCTAs,
      children: _ ? (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(r.Button, {
          className: s(S.enhancedCTA, S.learnMoreCTA),
          color: g ? r.Button.Colors.CUSTOM : r.Button.Colors.TRANSPARENT,
          onClick: () => n({
            analyticsLocation: N,
            onClose: l
          }),
          look: r.Button.Looks.OUTLINED,
          size: r.Button.Sizes.TINY,
          children: m.default.Messages.LEARN_MORE
        }), p()]
      }) : p()
    })]
  }) : (0, a.jsxs)(r.Clickable, {
    onClick: () => n({
      analyticsLocation: N,
      onClose: l
    }),
    className: s(S.upsellBanner, S.gradientBackground),
    children: [(0, a.jsxs)("div", {
      className: S.iconTextContainer,
      children: [(0, a.jsx)(d.default, {
        className: S.iconColor
      }), (0, a.jsx)(r.Text, {
        variant: "text-sm/medium",
        className: S.upsellText,
        children: null != t ? t : m.default.Messages.STREAM_PREMIUM_UPSELL_BANNER
      })]
    }), (0, a.jsx)(r.Text, {
      variant: "text-sm/medium",
      className: S.textLink,
      children: m.default.Messages.STREAM_PREMIUM_UPSELL_BANNER_CTA
    })]
  })
}