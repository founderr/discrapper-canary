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
  l = n("409814");
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
    height: n,
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
    styleContent: x,
    containerId: _
  } = (0, s.useClanBannerStyleInjection)(T, C);
  return (0, a.jsxs)("svg", {
    ...E,
    "aria-label": i.default.Messages.CLAN_LOOK_BANNER,
    width: t,
    height: n,
    viewBox: "0 0 ".concat(s.CLAN_BANNER_WIDTH, " ").concat(s.CLAN_BANNER_HEIGHT),
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
            stopColor: T[1],
            offset: "0%"
          }), (0, a.jsx)("stop", {
            stopColor: T[0],
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
            stopColor: C[1],
            offset: "0%"
          }), (0, a.jsx)("stop", {
            stopColor: C[0],
            offset: "70%"
          })]
        })]
      }), (0, a.jsx)("style", {
        children: x
      })]
    }), (0, a.jsx)("use", {
      href: "".concat(l, "#wrapper-layer"),
      id: _
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