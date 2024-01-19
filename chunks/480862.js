"use strict";
l.r(t), l.d(t, {
  default: function() {
    return h
  }
});
var n = l("37983");
l("884691");
var s = l("414456"),
  a = l.n(s),
  r = l("77078"),
  i = l("685665"),
  u = l("649844"),
  o = l("216422"),
  d = l("353487"),
  c = l("49111"),
  f = l("646718"),
  m = l("782340"),
  S = l("139191");

function h(e) {
  let {
    message: t,
    onClose: l,
    openStreamUpsellModal: s
  } = e, h = d.default.useExperiment({
    location: "371fea_1"
  }, {
    autoTrackExposure: !1
  }), {
    analyticsLocations: C
  } = (0, i.default)(), E = {
    section: c.AnalyticsSections.STREAM_SETTINGS,
    object: c.AnalyticsObjects.PREMIUM_UPSELL_BANNER,
    objectType: c.AnalyticsObjectTypes.BUY
  }, p = () => (d.default.trackExposure({
    location: "371fea_2"
  }), h.enabled) ? (0, u.default)({
    initialPlanId: null,
    subscriptionTier: f.PremiumSubscriptionSKUs.TIER_2,
    analyticsLocations: C,
    analyticsObject: E
  }) : s({
    analyticsLocation: E,
    onClose: l
  });
  return (0, n.jsxs)(r.Clickable, {
    onClick: () => {
      p()
    },
    className: a(S.upsellBanner, S.gradientBackground),
    children: [(0, n.jsxs)("div", {
      className: S.iconTextContainer,
      children: [(0, n.jsx)(o.default, {
        className: S.iconColor
      }), (0, n.jsx)(r.Text, {
        variant: "text-sm/medium",
        className: S.upsellText,
        children: null != t ? t : m.default.Messages.STREAM_PREMIUM_UPSELL_BANNER
      })]
    }), (0, n.jsx)(r.Text, {
      variant: "text-sm/medium",
      className: S.textLink,
      children: m.default.Messages.STREAM_PREMIUM_UPSELL_BANNER_CTA
    })]
  })
}