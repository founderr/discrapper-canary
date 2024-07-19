e.r(s), e.d(s, {
  default: function() {
return L;
  }
});
var a = e(735250);
e(470079);
var n = e(230711),
  t = e(790527),
  o = e(474936),
  _ = e(981631),
  c = e(689938);

function L(E) {
  let {
onClose: s,
analyticsSource: L,
analyticsLocation: M,
...T
  } = E;
  return (0, a.jsx)(t.Z, {
artURL: e(230321),
type: o.cd.CLIENT_THEMES_UPSELL,
title: c.Z.Messages.PREMIUM_UPSELL_FEATURE_CLIENT_THEMES_TITLE,
body: c.Z.Messages.PREMIUM_UPSELL_FEATURE_CLIENT_THEMES_DESCRIPTION,
glowUp: c.Z.Messages.PREMIUM_UPSELL_FEATURE_CLIENT_THEMES_DESCRIPTION,
onSecondaryClick: () => {
  s(), n.Z.open(_.oAB.PREMIUM);
},
secondaryCTA: c.Z.Messages.PREMIUM_ROADBLOCK_UPSELL_SECONDARY_CTA,
analyticsSource: L,
analyticsLocation: M,
onClose: s,
enableArtBoxShadow: !1,
hideBackButton: !0,
showEnhancedUpsell: !0,
...T
  });
}