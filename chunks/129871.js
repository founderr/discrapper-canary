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
  l = n("136050");
let o = ["#7185f6", "#7799f3", "#7eb2eb", "#85d5e0", "#89e6dd", "#8cefda", "#68eacb"],
  c = ["#ffffff", "#f0f0f0"],
  d = [.15, .23, .32, .45, .57, .62, .7],
  u = [{
    base: 14,
    tint: 1
  }, {
    base: 10,
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
  }],
  f = [.95, 1],
  m = [{
    base: 1,
    tint: 2
  }, {
    base: 14,
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