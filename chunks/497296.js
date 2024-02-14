"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var u = n("37983");
n("884691");
var r = n("626301"),
  a = n("552917"),
  i = n("843647"),
  o = n("789946"),
  l = n("646718"),
  s = n("49111"),
  c = n("782340"),
  d = n("965289"),
  f = n("431036");

function E(e) {
  let {
    onClose: t,
    analyticsSource: n,
    onLearnMore: E,
    ..._
  } = e;

  function T() {
    null == E || E(), t(), (0, r.navigateToPremiumMarketingPage)()
  }
  let {
    isLoading: S,
    suggestedPremiumType: p
  } = (0, i.default)({
    autoTrackExposure: !0,
    experiment: a.default,
    location: "video_backgrounds_upsell"
  }), A = p === l.PremiumTypes.TIER_0 ? l.PremiumSubscriptionSKUs.TIER_0 : l.PremiumSubscriptionSKUs.TIER_2, I = A === l.PremiumSubscriptionSKUs.TIER_0 ? c.default.Messages.VIDEO_BACKGROUND_UPSELL_BODY_TIER_0.format({
    onLearnMore: T
  }) : c.default.Messages.VIDEO_BACKGROUND_UPSELL_BODY.format({
    onLearnMore: T
  });
  return (0, u.jsx)(o.default, {
    artURL: f,
    artContainerClassName: d.videoBackgroundArt,
    type: l.PremiumUpsellTypes.VIDEO_BACKGROUNDS_MODAL,
    title: c.default.Messages.VIDEO_BACKGROUND_UPSELL_TITLE,
    body: I,
    glowUp: I,
    analyticsSource: n,
    analyticsLocation: {
      page: s.AnalyticsPages.PREMIUM_UPSELL_MODAL_VIDEO_BACKGROUNDS,
      object: s.AnalyticsObjects.BUTTON_CTA
    },
    onClose: t,
    subscriptionTier: A,
    isLoading: S,
    ..._
  })
}