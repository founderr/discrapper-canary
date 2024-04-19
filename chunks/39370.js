"use strict";
a.r(t), a.d(t, {
  default: function() {
    return d
  }
});
var n = a("735250");
a("470079");
var s = a("524437"),
  l = a("765585"),
  i = a("300284"),
  r = a("526761"),
  o = a("689938"),
  u = a("938869");

function d() {
  let e = (0, i.default)({
    scrollPosition: r.ProfileCustomizationScrollPositions.TRY_IT_OUT
  });
  return (0, n.jsx)(l.default, {
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