"use strict";
a.r(t), a.d(t, {
  default: function() {
    return h
  }
});
var n = a("735250");
a("470079");
var r = a("249849"),
  s = a("907561"),
  i = a("689938"),
  l = a("12008");
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
    height: a,
    primaryTintColor: h,
    secondaryTintColor: E,
    ...p
  } = e, {
    primaryColorsTransformed: C,
    secondaryColorsTransformed: T
  } = (0, r.getTransformedBadgeColors)({
    primaryBaseColors: o,
    primaryTintColor: h,
    primaryTintLuminances: d,
    primaryLuminanceWeights: u,
    secondaryBaseColors: c,
    secondaryTintColor: E,
    secondaryTintLuminances: f,
    secondaryLuminanceWeights: m
  }), {
    styleContent: _,
    containerId: x
  } = (0, s.useClanBannerStyleInjection)(C, T);
  return (0, n.jsxs)("svg", {
    ...p,
    "aria-label": i.default.Messages.CLAN_LOOK_BANNER,
    width: t,
    height: a,
    viewBox: "0 0 ".concat(s.CLAN_BANNER_WIDTH, " ").concat(s.CLAN_BANNER_HEIGHT),
    children: [(0, n.jsx)("defs", {
      children: (0, n.jsx)("style", {
        children: _
      })
    }), (0, n.jsx)("use", {
      href: "".concat(l, "#wrapper-layer"),
      id: x
    })]
  })
}