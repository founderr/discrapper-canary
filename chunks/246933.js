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
  l = s("409814");
let _ = ["#cc99ff", "#ffffff"],
  r = ["#2d3dee", "#ffffff"],
  u = [.3, 1],
  o = [{
    base: 2,
    tint: 1
  }, {
    base: 5,
    tint: 1
  }],
  T = [.3, 1],
  d = [{
    base: 2,
    tint: 1
  }, {
    base: 5,
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
    children: [(0, a.jsxs)("defs", {
      children: [(0, a.jsxs)("defs", {
        children: [(0, a.jsxs)("radialGradient", {
          id: "fog-gradient-primary",
          cx: ".5",
          cy: ".5",
          r: ".6",
          fx: ".76",
          fy: ".33",
          spreadMethod: "pad",
          children: [(0, a.jsx)("stop", {
            stopColor: c[1],
            offset: "0%"
          }), (0, a.jsx)("stop", {
            stopColor: c[0],
            offset: "70%"
          })]
        }), (0, a.jsxs)("radialGradient", {
          id: "fog-gradient-secondary",
          cx: ".5",
          cy: ".5",
          r: ".6",
          fx: ".76",
          fy: ".33",
          spreadMethod: "pad",
          children: [(0, a.jsx)("stop", {
            stopColor: N[1],
            offset: "0%"
          }), (0, a.jsx)("stop", {
            stopColor: N[0],
            offset: "70%"
          })]
        })]
      }), (0, a.jsx)("style", {
        children: S
      })]
    }), (0, a.jsx)("use", {
      href: "".concat(l, "#wrapper-layer"),
      id: g
    }), (0, a.jsx)("use", {
      href: "".concat(l, "#clan-banner-warp-tunnel-secondary"),
      style: {
        fill: "url(#fog-gradient-secondary)"
      }
    }), (0, a.jsx)("use", {
      href: "".concat(l, "#clan-banner-warp-tunnel-primary"),
      style: {
        fill: "url(#fog-gradient-primary)"
      }
    })]
  })
}