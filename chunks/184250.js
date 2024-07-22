a.r(s), a.d(s, {
  default: function() {
return P;
  }
});
var _ = a(735250);
a(470079);
var n = a(230711),
  t = a(790527),
  o = a(474936),
  E = a(981631),
  c = a(689938);

function P(e) {
  let {
onClose: s,
analyticsSource: P,
analyticsLocation: I,
...r
  } = e;
  return (0, _.jsx)(t.Z, {
artURL: a(76096),
type: o.cd.APP_ICONS_UPSELL,
title: c.Z.Messages.PREMIUM_UPSEL_FEATURE_IN_APP_ICONS_TITLE,
body: c.Z.Messages.PREMIUM_UPSELL_FEATURE_IN_APP_ICONS_DESCRIPTION,
glowUp: c.Z.Messages.PREMIUM_UPSELL_FEATURE_IN_APP_ICONS_DESCRIPTION,
onSecondaryClick: () => {
  s(), n.Z.open(E.oAB.PREMIUM);
},
secondaryCTA: c.Z.Messages.PREMIUM_ROADBLOCK_UPSELL_SECONDARY_CTA,
analyticsSource: P,
analyticsLocation: I,
onClose: s,
enableArtBoxShadow: !1,
hideBackButton: !0,
showEnhancedUpsell: !0,
...r
  });
}