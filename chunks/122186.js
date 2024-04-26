"use strict";
l.r(t), l.d(t, {
  default: function() {
    return E
  }
});
var a = l("735250");
l("470079");
var n = l("120356"),
  s = l.n(n),
  i = l("481060"),
  r = l("193878"),
  u = l("197115"),
  o = l("672752"),
  d = l("466111"),
  c = l("981631"),
  f = l("474936"),
  m = l("689938"),
  S = l("219324");

function E(e) {
  let {
    message: t,
    onClose: l,
    openStreamUpsellModal: n,
    glow: E = !1
  } = e, {
    enabled: _,
    variant: C
  } = r.default.useExperiment({
    location: "StreamSettingsUpsellBanner"
  }, {
    autoTrackExposure: !0
  }), g = _ && r.GradientVariants.includes(C), N = _ && [r.EnhancedHDStreamingRoadblockVariants.VARIANT_1A, r.EnhancedHDStreamingRoadblockVariants.VARIANT_1B].includes(C), h = {
    section: c.AnalyticsSections.STREAM_SETTINGS,
    object: c.AnalyticsObjects.PREMIUM_UPSELL_BANNER,
    objectType: c.AnalyticsObjectTypes.BUY
  }, A = () => (0, a.jsx)(u.default, {
    className: s()(S.enhancedCTA, {
      [S.ctaGradientBackground]: g
    }),
    iconClassName: S.premiumIcon,
    subscriptionTier: f.PremiumSubscriptionSKUs.TIER_2,
    buttonText: m.default.Messages.STREAM_PREMIUM_UPSELL_BANNER_CTA,
    size: i.Button.Sizes.TINY,
    premiumModalAnalyticsLocation: h
  });
  return _ ? (0, a.jsxs)("div", {
    className: s()(S.upsellBanner, S.enhancedBanner, {
      [S.gradientGlow]: E
    }),
    children: [(0, a.jsxs)("div", {
      className: S.iconTextContainer,
      children: [(0, a.jsx)(d.default, {
        color: o.GradientCssUrls.PREMIUM_TIER_2
      }), (0, a.jsx)(i.Text, {
        variant: "text-sm/medium",
        className: s()(S.upsellText, S.enhancedUpsellText),
        children: null != t ? t : N ? m.default.Messages.STREAM_PREMIUM_UPSELL_BANNER_V2 : m.default.Messages.STREAM_PREMIUM_UPSELL_BANNER_LEARN_MORE_V2.format({
          onClick: () => n({
            analyticsLocation: h,
            onClose: l
          })
        })
      })]
    }), (0, a.jsx)("div", {
      className: S.enhancedCTAs,
      children: N ? (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(i.Button, {
          className: s()(S.enhancedCTA, S.learnMoreCTA),
          color: g ? i.Button.Colors.CUSTOM : i.Button.Colors.TRANSPARENT,
          onClick: () => n({
            analyticsLocation: h,
            onClose: l
          }),
          look: i.Button.Looks.OUTLINED,
          size: i.Button.Sizes.TINY,
          children: m.default.Messages.LEARN_MORE
        }), A()]
      }) : A()
    })]
  }) : (0, a.jsxs)(i.Clickable, {
    onClick: () => n({
      analyticsLocation: h,
      onClose: l
    }),
    className: s()(S.upsellBanner, S.gradientBackground),
    children: [(0, a.jsxs)("div", {
      className: S.iconTextContainer,
      children: [(0, a.jsx)(d.default, {
        className: S.iconColor
      }), (0, a.jsx)(i.Text, {
        variant: "text-sm/medium",
        className: S.upsellText,
        children: null != t ? t : m.default.Messages.STREAM_PREMIUM_UPSELL_BANNER
      })]
    }), (0, a.jsx)(i.Text, {
      variant: "text-sm/medium",
      className: S.textLink,
      children: m.default.Messages.STREAM_PREMIUM_UPSELL_BANNER_CTA
    })]
  })
}