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
  l = a("136050");
let o = ["#7185f6", "#7799f3", "#7eb2eb", "#85d5e0", "#89e6dd", "#8cefda", "#68eacb"],
  c = ["#ffffff", "#f0f0f0"],
  d = [.15, .23, .32, .45, .57, .62, .7],
  u = [{
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
  m = [{
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
    secondaryTintColor: E,
    ...T
  } = e, {
    primaryColorsTransformed: p,
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
  } = (0, s.useClanBannerStyleInjection)(p, C);
  return (0, n.jsxs)("svg", {
    ...T,
    "aria-label": i.default.Messages.CLAN_LOOK_BANNER,
    width: t,
    height: a,
    viewBox: "0 0 ".concat(s.CLAN_BANNER_WIDTH, " ").concat(s.CLAN_BANNER_HEIGHT),
    children: [(0, n.jsxs)("defs", {
      children: [(0, n.jsx)("defs", {
        children: (0, n.jsxs)("radialGradient", {
          id: "foam-gradient",
          cx: "0.5",
          cy: "0.5",
          r: "0.65",
          fx: "0.5",
          fy: "0.8",
          children: [(0, n.jsx)("stop", {
            stopColor: C[1],
            offset: "60%"
          }), (0, n.jsx)("stop", {
            stopColor: C[0],
            offset: "100%"
          })]
        })
      }), (0, n.jsx)("style", {
        children: _
      })]
    }), (0, n.jsx)("use", {
      href: "".concat(l, "#wrapper-layer"),
      id: x
    }), (0, n.jsx)("use", {
      href: "".concat(l, "#foam"),
      style: {
        fill: "url(#foam-gradient)"
      }
    })]
  })
}