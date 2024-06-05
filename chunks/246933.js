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
  l = a("409814");
let o = ["#cc99ff", "#ffffff"],
  d = ["#2d3dee", "#ffffff"],
  c = [.3, 1],
  u = [{
    base: 2,
    tint: 1
  }, {
    base: 5,
    tint: 1
  }],
  f = [.3, 1],
  m = [{
    base: 2,
    tint: 1
  }, {
    base: 5,
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
    children: [(0, n.jsxs)("defs", {
      children: [(0, n.jsxs)("defs", {
        children: [(0, n.jsxs)("radialGradient", {
          id: "fog-gradient-primary",
          cx: ".5",
          cy: ".5",
          r: ".6",
          fx: ".76",
          fy: ".33",
          spreadMethod: "pad",
          children: [(0, n.jsx)("stop", {
            stopColor: _[1],
            offset: "0%"
          }), (0, n.jsx)("stop", {
            stopColor: _[0],
            offset: "70%"
          })]
        }), (0, n.jsxs)("radialGradient", {
          id: "fog-gradient-secondary",
          cx: ".5",
          cy: ".5",
          r: ".6",
          fx: ".76",
          fy: ".33",
          spreadMethod: "pad",
          children: [(0, n.jsx)("stop", {
            stopColor: C[1],
            offset: "0%"
          }), (0, n.jsx)("stop", {
            stopColor: C[0],
            offset: "70%"
          })]
        })]
      }), (0, n.jsx)("style", {
        children: x
      })]
    }), (0, n.jsx)("use", {
      href: "".concat(l, "#wrapper-layer"),
      id: p
    }), (0, n.jsx)("use", {
      href: "".concat(l, "#clan-banner-warp-tunnel-secondary"),
      style: {
        fill: "url(#fog-gradient-secondary)"
      }
    }), (0, n.jsx)("use", {
      href: "".concat(l, "#clan-banner-warp-tunnel-primary"),
      style: {
        fill: "url(#fog-gradient-primary)"
      }
    })]
  })
}