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
  r = a("444816");
let o = ["#2d456e", "#395788", "#486ead", "#4f7ac2", "#5989d9", "#729bdd", "#96b3e3", "#b5c9e9", "#e0e0e2"],
  u = ["#f7931e"],
  d = [.05, .09, .15, .2, .25, .33, .44, .57, .95],
  c = [{
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
  E = [{
    base: 1,
    tint: 5
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