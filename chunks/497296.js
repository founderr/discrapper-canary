"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
});
var u = n("37983");
n("884691");
var r = n("626301"),
  a = n("552917"),
  o = n("843647"),
  l = n("789946"),
  i = n("646718"),
  s = n("49111"),
  c = n("782340"),
  d = n("965289"),
  f = n("431036");

function p(e) {
  let {
    onClose: t,
    analyticsSource: n,
    onLearnMore: p,
    ...E
  } = e;

  function S() {
    null == p || p(), t(), (0, r.navigateToPremiumMarketingPage)()
  }
  let {
    isLoading: _,
    suggestedPremiumType: y
  } = (0, o.default)({
    autoTrackExposure: !0,
    experiment: a.default,
    location: "video_backgrounds_upsell"
  }), m = y === i.PremiumTypes.TIER_0 ? i.PremiumSubscriptionSKUs.TIER_0 : i.PremiumSubscriptionSKUs.TIER_2, T = m === i.PremiumSubscriptionSKUs.TIER_0 ? c.default.Messages.VIDEO_BACKGROUND_UPSELL_BODY_TIER_0.format({
    onLearnMore: S
  }) : c.default.Messages.VIDEO_BACKGROUND_UPSELL_BODY.format({
    onLearnMore: S
  });
  return (0, u.jsx)(l.default, {
    artURL: f,
    artContainerClassName: d.videoBackgroundArt,
    type: i.PremiumUpsellTypes.VIDEO_BACKGROUNDS_MODAL,
    title: c.default.Messages.VIDEO_BACKGROUND_UPSELL_TITLE,
    body: T,
    glowUp: T,
    analyticsSource: n,
    analyticsLocation: {
      page: s.AnalyticsPages.PREMIUM_UPSELL_MODAL_VIDEO_BACKGROUNDS,
      object: s.AnalyticsObjects.BUTTON_CTA
    },
    onClose: t,
    subscriptionTier: m,
    isLoading: _,
    ...E
  })
}