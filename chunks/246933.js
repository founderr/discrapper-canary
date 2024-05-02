"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
});
var a = n("735250");
n("470079");
var r = n("249849"),
  i = n("907561"),
  s = n("689938"),
  l = n("409814");
let o = ["#cc99ff", "#ffffff"],
  c = ["#2d3dee", "#ffffff"],
  d = [.3, 1],
  u = [{
    base: 2,
    tint: 1
  }, {
    base: 5,
    tint: 1
  }],
  f = [.3, 1],
  m = [{
    base: 2,
    tint: 1
  }, {
    base: 5,
    tint: 1
  }];

function h(e) {
  let {
    width: t,
    height: n,
    primaryTintColor: h,
    secondaryTintColor: p,
    ...T
  } = e, {
    primaryColorsTransformed: E,
    secondaryColorsTransformed: C
  } = (0, r.getTransformedBadgeColors)({
    primaryBaseColors: o,
    primaryTintColor: h,
    primaryTintLuminances: d,
    primaryLuminanceWeights: u,
    secondaryBaseColors: c,
    secondaryTintColor: p,
    secondaryTintLuminances: f,
    secondaryLuminanceWeights: m
  }), {
    bannerPreviewRef: _,
    onLoad: g
  } = (0, i.useClanBannerStyleInjection)(E, C);
  return (0, a.jsx)("object", {
    ...T,
    ref: _,
    "aria-label": s.default.Messages.CLAN_LOOK_BANNER,
    width: t,
    height: n,
    data: l,
    onLoad: g
  })
}