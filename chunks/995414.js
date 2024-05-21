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
  l = a("114266");
let o = ["#0089d9"],
  c = ["#ff9e32", "#b4eefc", "#ffffff", "#804f19"],
  d = [.2],
  u = [{
    base: 8,
    tint: 1
  }],
  f = [.45, .7, 1, .3],
  m = [{
    base: 8,
    tint: 1
  }, {
    base: 8,
    tint: 1
  }, {
    base: 10,
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
    secondaryTintColor: E,
    ...p
  } = e, {
    primaryColorsTransformed: T,
    secondaryColorsTransformed: C
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
  } = (0, s.useClanBannerStyleInjection)(T, C);
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