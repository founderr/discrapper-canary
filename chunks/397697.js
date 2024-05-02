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
  l = n("12008");
let o = ["#01007f", "#0000b0", "#0000e1", "#2d3dee", "#5470e9", "#a091eb", "#cc99ff"],
  c = ["#a7e4e4", "#ffffff"],
  d = [.01, .03, .055, .1, .19, .25, .35],
  u = [{
    base: 8,
    tint: 1
  }, {
    base: 6,
    tint: 1
  }, {
    base: 6,
    tint: 1
  }, {
    base: 6,
    tint: 1
  }, {
    base: 6,
    tint: 1
  }, {
    base: 6,
    tint: 1
  }, {
    base: 6,
    tint: 1
  }],
  f = [.55, 1],
  m = [{
    base: 8,
    tint: 1
  }, {
    base: 20,
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