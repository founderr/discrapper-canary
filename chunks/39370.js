"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var a = n("735250");
n("470079");
var s = n("524437"),
  i = n("765585"),
  l = n("300284"),
  r = n("526761"),
  o = n("689938"),
  u = n("677849");

function d() {
  let e = (0, l.default)({
    scrollPosition: r.ProfileCustomizationScrollPositions.TRY_IT_OUT
  });
  return (0, a.jsx)(i.default, {
    isPremiumFeature: !0,
    shouldUseHorizontalButtons: !0,
    inlineArt: !0,
    artClassName: u.profileThemesArt,
    onTryFeature: e,
    header: o.default.Messages.PROFILE_THEMES_TOOLTIP_TITLE,
    body: o.default.Messages.PROFILE_THEMES_TOOLTIP_DESCRIPTION_PREMIUM,
    dismissibleContent: s.DismissibleContent.PROFILE_THEMES_FEATURE_EDUCATION_TOOLTIP_TAKE_2
  })
}