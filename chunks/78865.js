"use strict";
s.r(e), s.d(e, {
  default: function() {
    return E
  }
});
var n = s("735250");
s("470079");
var a = s("174609"),
  c = s("790527"),
  o = s("703656"),
  i = s("626135"),
  l = s("981631"),
  _ = s("474936"),
  u = s("689938");
let A = s("279360");

function E(t) {
  let {
    onClose: e,
    onCloseParent: s,
    analyticsSource: E,
    ...r
  } = t, d = u.default.Messages.STREAM_PREMIUM_UPSELL_BODY_V2;
  return (0, n.jsx)(c.default, {
    title: u.default.Messages.STREAM_PREMIUM_UPSELL_HEADER_V2,
    glowUp: d,
    body: d,
    artURL: A,
    type: _.PremiumUpsellTypes.STREAM_QUALITY_UPSELL,
    analyticsLocation: {
      section: l.AnalyticsSections.STREAM_UPSELL_MODAL,
      object: l.AnalyticsObjects.BUTTON_CTA
    },
    analyticsSource: E,
    onClose: e,
    onSubscribeClick: a.default,
    secondaryCTA: u.default.Messages.STREAM_PREMIUM_UPSELL_SECONDARY_CTA,
    onSecondaryClick: function() {
      (0, a.default)(), e(), null == s || s(), i.default.track(l.AnalyticEvents.PREMIUM_PROMOTION_OPENED, {
        location_section: l.AnalyticsSections.STREAM_UPSELL_MODAL,
        location_object: l.AnalyticsObjects.NAVIGATION_LINK
      }), (0, o.transitionTo)(l.Routes.APPLICATION_STORE)
    },
    showEnhancedUpsell: !0,
    enableArtBoxShadow: !1,
    ...r
  })
}