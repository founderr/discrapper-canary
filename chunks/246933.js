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
  l = a("409814");
let o = ["#cc99ff", "#ffffff"],
  c = ["#2d3dee", "#ffffff"],
  d = [.3, 1],
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

function h(e) {
  let {
    width: t,
    height: a,
    primaryTintColor: h,
    secondaryTintColor: p,
    ...E
  } = e, {
    primaryColorsTransformed: T,
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
  } = (0, s.useClanBannerStyleInjection)(T, C);
  return (0, n.jsxs)("svg", {
    ...E,
    "aria-label": i.default.Messages.CLAN_LOOK_BANNER,
    width: t,
    height: a,
    viewBox: "0 0 ".concat(s.CLAN_BANNER_WIDTH, " ").concat(s.CLAN_BANNER_HEIGHT),
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
            stopColor: T[1],
            offset: "0%"
          }), (0, n.jsx)("stop", {
            stopColor: T[0],
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
        children: _
      })]
    }), (0, n.jsx)("use", {
      href: "".concat(l, "#wrapper-layer"),
      id: x
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