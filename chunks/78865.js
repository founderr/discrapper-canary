t.r(a), t.d(a, {
  default: function() {
    return A
  }
});
var s = t(735250);
t(470079);
var o = t(174609),
  n = t(631771),
  r = t(790527),
  c = t(703656),
  E = t(626135),
  i = t(981631),
  _ = t(474936),
  d = t(689938),
  M = t(904354);
let l = t(279360);

function A(e) {
  let {
    onClose: a,
    onCloseParent: t,
    analyticsSource: A,
    ...S
  } = e, u = n.PC.useExperiment({
    location: "HD Streaming Roadblock"
  }, {
    autoTrackExposure: !0
  }).enabled, L = (0, s.jsx)("img", {
    className: u ? M.updatedArt : M.art,
    alt: "HD Streaming Nitro Perk",
    src: u ? "https://cdn.discordapp.com/assets/premium/roadblocks/hd_streaming.png" : l
  }), p = u ? d.Z.Messages.STREAM_PREMIUM_UPSELL_TITLE : d.Z.Messages.STREAM_PREMIUM_UPSELL_HEADER_V2, T = u ? d.Z.Messages.STREAM_PREMIUM_UPSELL_DESCRIPTION : d.Z.Messages.STREAM_PREMIUM_UPSELL_BODY_V2;
  return (0, s.jsx)(r.Z, {
    title: p,
    glowUp: T,
    body: T,
    artElement: L,
    artContainerClassName: u ? M.updatedArtContainer : void 0,
    type: _.cd.STREAM_QUALITY_UPSELL,
    analyticsLocation: {
      section: i.jXE.STREAM_UPSELL_MODAL,
      object: i.qAy.BUTTON_CTA
    },
    analyticsSource: A,
    onClose: a,
    onSubscribeClick: o.Z,
    secondaryCTA: d.Z.Messages.STREAM_PREMIUM_UPSELL_SECONDARY_CTA,
    onSecondaryClick: function() {
      (0, o.Z)(), a(), null == t || t(), E.default.track(i.rMx.PREMIUM_PROMOTION_OPENED, {
        location_section: i.jXE.STREAM_UPSELL_MODAL,
        location_object: i.qAy.NAVIGATION_LINK
      }), (0, c.uL)(i.Z5c.APPLICATION_STORE)
    },
    showEnhancedUpsell: !0,
    enableArtBoxShadow: !1,
    headerClassName: u ? M.updatedHeader : void 0,
    ...S
  })
}