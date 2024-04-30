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
  r = a("136050");
let o = ["#7185f6", "#7799f3", "#7eb2eb", "#85d5e0", "#89e6dd", "#8cefda", "#68eacb"],
  u = ["#ffffff", "#f0f0f0"],
  d = [.15, .23, .32, .45, .57, .62, .7],
  c = [{
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
  E = [{
    base: 1,
    tint: 2
  }, {
    base: 14,
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