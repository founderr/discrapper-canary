"use strict";
s.r(t), s.d(t, {
  default: function() {
    return p
  }
});
var a = s("735250");
s("470079");
var i = s("98278"),
  r = s("348121"),
  n = s("790527"),
  o = s("474936"),
  u = s("981631"),
  c = s("689938"),
  _ = s("679214"),
  l = s("399103");

function p(e) {
  let {
    onClose: t,
    analyticsSource: s,
    onLearnMore: p,
    ...d
  } = e;

  function U() {
    null == p || p(), t(), (0, i.navigateToPremiumMarketingPage)()
  }
  let {
    isLoading: E,
    suggestedPremiumType: L
  } = (0, r.default)(), O = L === o.PremiumTypes.TIER_0 ? o.PremiumSubscriptionSKUs.TIER_0 : o.PremiumSubscriptionSKUs.TIER_2, m = O === o.PremiumSubscriptionSKUs.TIER_0 ? c.default.Messages.VIDEO_BACKGROUND_UPSELL_BODY_TIER_0.format({
    onLearnMore: U
  }) : c.default.Messages.VIDEO_BACKGROUND_UPSELL_BODY.format({
    onLearnMore: U
  });
  return (0, a.jsx)(n.default, {
    artURL: l,
    artContainerClassName: _.videoBackgroundArt,
    type: o.PremiumUpsellTypes.VIDEO_BACKGROUNDS_MODAL,
    title: c.default.Messages.VIDEO_BACKGROUND_UPSELL_TITLE,
    body: m,
    glowUp: m,
    analyticsSource: s,
    analyticsLocation: {
      page: u.AnalyticsPages.PREMIUM_UPSELL_MODAL_VIDEO_BACKGROUNDS,
      object: u.AnalyticsObjects.BUTTON_CTA
    },
    onClose: t,
    subscriptionTier: O,
    isLoading: E,
    ...d
  })
}