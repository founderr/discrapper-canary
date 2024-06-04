"use strict";
a.r(t), a.d(t, {
  default: function() {
    return p
  }
});
var s = a("735250");
a("470079");
var n = a("98278"),
  i = a("790527"),
  r = a("474936"),
  o = a("981631"),
  c = a("689938"),
  u = a("679214"),
  l = a("399103");

function p(e) {
  let {
    onClose: t,
    analyticsSource: a,
    onLearnMore: p,
    ..._
  } = e, d = r.PremiumSubscriptionSKUs.TIER_2, O = c.default.Messages.VIDEO_BACKGROUND_UPSELL_BODY.format({
    onLearnMore: function() {
      null == p || p(), t(), (0, n.navigateToPremiumMarketingPage)()
    }
  });
  return (0, s.jsx)(i.default, {
    artURL: l,
    artContainerClassName: u.videoBackgroundArt,
    type: r.PremiumUpsellTypes.VIDEO_BACKGROUNDS_MODAL,
    title: c.default.Messages.VIDEO_BACKGROUND_UPSELL_TITLE,
    body: O,
    glowUp: O,
    analyticsSource: a,
    analyticsLocation: {
      page: o.AnalyticsPages.PREMIUM_UPSELL_MODAL_VIDEO_BACKGROUNDS,
      object: o.AnalyticsObjects.BUTTON_CTA
    },
    onClose: t,
    subscriptionTier: d,
    ..._
  })
}