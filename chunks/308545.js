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
  l = n("444816");
let o = ["#2d456e", "#395788", "#486ead", "#4f7ac2", "#5989d9", "#729bdd", "#96b3e3", "#b5c9e9", "#e0e0e2"],
  c = ["#f7931e"],
  d = [.05, .09, .15, .2, .25, .33, .44, .57, .95],
  u = [{
    base: 4,
    tint: 1
  }, {
    base: 4,
    tint: 1
  }, {
    base: 4,
    tint: 1
  }, {
    base: 4,
    tint: 1
  }, {
    base: 4,
    tint: 1
  }, {
    base: 4,
    tint: 1
  }, {
    base: 4,
    tint: 1
  }, {
    base: 4,
    tint: 1
  }, {
    base: 7,
    tint: 1
  }],
  f = [.4],
  m = [{
    base: 1,
    tint: 5
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