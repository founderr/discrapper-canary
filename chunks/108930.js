"use strict";
a.r(t), a.d(t, {
  default: function() {
    return h
  }
});
var n = a("735250");
a("470079");
var s = a("249849"),
  l = a("907561"),
  i = a("689938"),
  r = a("307536");
let o = ["#50599c", "#cc99ff", "#fefefe"],
  u = ["#39306f", "#aeaad2"],
  d = [.05, .4, 1],
  c = [{
    base: 8,
    tint: 1
  }, {
    base: 6,
    tint: 1
  }, {
    base: 10,
    tint: 1
  }],
  f = [.05, .4],
  E = [{
    base: 8,
    tint: 1
  }, {
    base: 8,
    tint: 1
  }];

function h(e) {
  let {
    width: t,
    height: a,
    primaryTintColor: h,
    secondaryTintColor: _,
    ...C
  } = e, {
    primaryColorsTransformed: m,
    secondaryColorsTransformed: S
  } = (0, s.getTransformedBadgeColors)({
    primaryBaseColors: o,
    primaryTintColor: h,
    primaryTintLuminances: d,
    primaryLuminanceWeights: c,
    secondaryBaseColors: u,
    secondaryTintColor: _,
    secondaryTintLuminances: f,
    secondaryLuminanceWeights: E
  }), {
    bannerPreviewRef: p,
    onLoad: I
  } = (0, l.useClanBannerStyleInjection)(m, S);
  return (0, n.jsx)("object", {
    ...C,
    ref: p,
    "aria-label": i.default.Messages.CLAN_LOOK_BANNER,
    width: t,
    height: a,
    data: r,
    onLoad: I
  })
}