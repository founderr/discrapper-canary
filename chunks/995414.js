"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
});
var a = n("735250");
n("470079");
var r = n("249849"),
  s = n("907561"),
  i = n("689938"),
  l = n("114266");
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
    styleContent: _,
    containerId: x
  } = (0, s.useClanBannerStyleInjection)(E, C);
  return (0, a.jsxs)("svg", {
    ...T,
    "aria-label": i.default.Messages.CLAN_LOOK_BANNER,
    width: t,
    height: n,
    viewBox: "0 0 ".concat(s.CLAN_BANNER_WIDTH, " ").concat(s.CLAN_BANNER_HEIGHT),
    children: [(0, a.jsx)("defs", {
      children: (0, a.jsx)("style", {
        children: _
      })
    }), (0, a.jsx)("use", {
      href: "".concat(l, "#wrapper-layer"),
      id: x
    })]
  })
}