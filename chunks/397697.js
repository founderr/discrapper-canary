"use strict";
s.r(t), s.d(t, {
  default: function() {
    return A
  }
});
var a = s("735250");
s("470079");
var n = s("249849"),
  i = s("907561"),
  E = s("689938"),
  l = s("12008");
let _ = ["#01007f", "#0000b0", "#0000e1", "#2d3dee", "#5470e9", "#a091eb", "#cc99ff"],
  r = ["#a7e4e4", "#ffffff"],
  u = [.01, .03, .055, .1, .19, .25, .35],
  o = [{
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
  T = [.55, 1],
  d = [{
    base: 8,
    tint: 1
  }, {
    base: 20,
    tint: 1
  }];

function A(e) {
  let {
    width: t,
    height: s,
    primaryTintColor: A,
    secondaryTintColor: I,
    ...L
  } = e, {
    primaryColorsTransformed: c,
    secondaryColorsTransformed: N
  } = (0, n.getTransformedBadgeColors)({
    primaryBaseColors: _,
    primaryTintColor: A,
    primaryTintLuminances: u,
    primaryLuminanceWeights: o,
    secondaryBaseColors: r,
    secondaryTintColor: I,
    secondaryTintLuminances: T,
    secondaryLuminanceWeights: d
  }), {
    styleContent: S,
    containerId: g
  } = (0, i.useClanBannerStyleInjection)(c, N);
  return (0, a.jsxs)("svg", {
    ...L,
    "aria-label": E.default.Messages.CLAN_LOOK_BANNER,
    width: t,
    height: s,
    viewBox: "0 0 ".concat(i.CLAN_BANNER_WIDTH, " ").concat(i.CLAN_BANNER_HEIGHT),
    children: [(0, a.jsx)("defs", {
      children: (0, a.jsx)("style", {
        children: S
      })
    }), (0, a.jsx)("use", {
      href: "".concat(l, "#wrapper-layer"),
      id: g
    })]
  })
}