"use strict";
a.r(t), a.d(t, {
  default: function() {
    return A
  }
});
var s = a("735250");
a("470079");
var n = a("174609"),
  o = a("631771"),
  i = a("790527"),
  c = a("703656"),
  l = a("626135"),
  r = a("981631"),
  d = a("474936"),
  E = a("689938"),
  u = a("647061");
let _ = a("279360");

function A(e) {
  let {
    onClose: t,
    onCloseParent: a,
    analyticsSource: A,
    ...M
  } = e, S = o.HDStreamingUpsellExperiment.useExperiment({
    location: "HD Streaming Roadblock"
  }, {
    autoTrackExposure: !0
  }).enabled, p = (0, s.jsx)("img", {
    className: S ? u.updatedArt : u.art,
    alt: "HD Streaming Nitro Perk",
    src: S ? "https://cdn.discordapp.com/assets/premium/roadblocks/hd_streaming.png" : _
  }), T = S ? E.default.Messages.STREAM_PREMIUM_UPSELL_TITLE : E.default.Messages.STREAM_PREMIUM_UPSELL_HEADER_V2, L = S ? E.default.Messages.STREAM_PREMIUM_UPSELL_DESCRIPTION : E.default.Messages.STREAM_PREMIUM_UPSELL_BODY_V2;
  return (0, s.jsx)(i.default, {
    title: T,
    glowUp: L,
    body: L,
    artElement: p,
    artContainerClassName: S ? u.updatedArtContainer : void 0,
    type: d.PremiumUpsellTypes.STREAM_QUALITY_UPSELL,
    analyticsLocation: {
      section: r.AnalyticsSections.STREAM_UPSELL_MODAL,
      object: r.AnalyticsObjects.BUTTON_CTA
    },
    analyticsSource: A,
    onClose: t,
    onSubscribeClick: n.default,
    secondaryCTA: E.default.Messages.STREAM_PREMIUM_UPSELL_SECONDARY_CTA,
    onSecondaryClick: function() {
      (0, n.default)(), t(), null == a || a(), l.default.track(r.AnalyticEvents.PREMIUM_PROMOTION_OPENED, {
        location_section: r.AnalyticsSections.STREAM_UPSELL_MODAL,
        location_object: r.AnalyticsObjects.NAVIGATION_LINK
      }), (0, c.transitionTo)(r.Routes.APPLICATION_STORE)
    },
    showEnhancedUpsell: !0,
    enableArtBoxShadow: !1,
    headerClassName: S ? u.updatedHeader : void 0,
    ...M
  })
}