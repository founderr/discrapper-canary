"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
});
var a = n("735250");
n("470079");
var s = n("249849"),
  l = n("907561"),
  i = n("689938"),
  r = n("409814");
let o = ["#cc99ff", "#ffffff"],
  u = ["#2d3dee", "#ffffff"],
  d = [.3, 1],
  c = [{
    base: 2,
    tint: 1
  }, {
    base: 5,
    tint: 1
  }],
  f = [.3, 1],
  E = [{
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
  return (0, a.jsx)("object", {
    ...C,
    ref: p,
    "aria-label": i.default.Messages.CLAN_LOOK_BANNER,
    width: t,
    height: n,
    data: r,
    onLoad: I
  })
}