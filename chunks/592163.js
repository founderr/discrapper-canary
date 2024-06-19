n.r(e), n.d(e, {
  default: function() {
    return p
  }
});
var a = n(735250);
n(470079);
var o = n(98278),
  s = n(790527),
  r = n(474936),
  i = n(981631),
  c = n(689938),
  u = n(889908),
  _ = n(399103);

function p(t) {
  let {
    onClose: e,
    analyticsSource: n,
    onLearnMore: p,
    ...d
  } = t, L = r.Si.TIER_2, O = c.Z.Messages.VIDEO_BACKGROUND_UPSELL_BODY.format({
    onLearnMore: function() {
      null == p || p(), e(), (0, o.z)()
    }
  });
  return (0, a.jsx)(s.Z, {
    artURL: _,
    artContainerClassName: u.videoBackgroundArt,
    type: r.cd.VIDEO_BACKGROUNDS_MODAL,
    title: c.Z.Messages.VIDEO_BACKGROUND_UPSELL_TITLE,
    body: O,
    glowUp: O,
    analyticsSource: n,
    analyticsLocation: {
      page: i.ZY5.PREMIUM_UPSELL_MODAL_VIDEO_BACKGROUNDS,
      object: i.qAy.BUTTON_CTA
    },
    onClose: e,
    subscriptionTier: L,
    ...d
  })
}