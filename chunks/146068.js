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
  l = n("585025");
let o = ["#0fa3dd", "#a7e4e4", "#a2ccdd"],
  c = ["#0b3215", "#a6b51a", "#35748a", "#65a88f", "#621c12", "#f96748", "#ffbbbb"],
  d = [.25, .9, .9],
  u = [{
    base: 8,
    tint: 1
  }, {
    base: 14,
    tint: 1
  }, {
    base: 5,
    tint: 1
  }],
  f = [.05, .4, .15, .33, .1, .3, .6],
  m = [{
    base: 8,
    tint: 1
  }, {
    base: 8,
    tint: 1
  }, {
    base: 8,
    tint: 1
  }, {
    base: 8,
    tint: 1
  }, {
    base: 8,
    tint: 1
  }, {
    base: 8,
    tint: 1
  }, {
    base: 8,
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