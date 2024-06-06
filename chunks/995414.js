"use strict";
a.r(t), a.d(t, {
  default: function() {
    return E
  }
});
var n = a("735250");
a("470079");
var r = a("249849"),
  i = a("907561"),
  s = a("689938"),
  l = a("114266");
let o = ["#0089d9"],
  d = ["#ff9e32", "#b4eefc", "#ffffff", "#804f19"],
  c = [.2],
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

function E(e) {
  let {
    width: t,
    height: a,
    primaryTintColor: E,
    secondaryTintColor: h,
    ...T
  } = e, {
    primaryColorsTransformed: _,
    secondaryColorsTransformed: C
  } = (0, r.getTransformedBadgeColors)({
    primaryBaseColors: o,
    primaryTintColor: E,
    primaryTintLuminances: c,
    primaryLuminanceWeights: u,
    secondaryBaseColors: d,
    secondaryTintColor: h,
    secondaryTintLuminances: f,
    secondaryLuminanceWeights: m
  }), {
    styleContent: x,
    containerId: p
  } = (0, i.useClanBannerStyleInjection)(_, C);
  return (0, n.jsxs)("svg", {
    ...T,
    "aria-label": s.default.Messages.CLAN_LOOK_BANNER,
    width: t,
    height: a,
    viewBox: "0 0 ".concat(i.CLAN_BANNER_WIDTH, " ").concat(i.CLAN_BANNER_HEIGHT),
    children: [(0, n.jsx)("defs", {
      children: (0, n.jsx)("style", {
        children: x
      })
    }), (0, n.jsx)("use", {
      href: "".concat(l, "#wrapper-layer"),
      id: p
    })]
  })
}