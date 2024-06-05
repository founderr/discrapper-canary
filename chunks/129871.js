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
  l = a("136050");
let o = ["#7185f6", "#7799f3", "#7eb2eb", "#85d5e0", "#89e6dd", "#8cefda", "#68eacb"],
  d = ["#ffffff", "#f0f0f0"],
  c = [.15, .23, .32, .45, .57, .62, .7],
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
        children: x
      })]
    }), (0, n.jsx)("use", {
      href: "".concat(l, "#wrapper-layer"),
      id: p
    }), (0, n.jsx)("use", {
      href: "".concat(l, "#foam"),
      style: {
        fill: "url(#foam-gradient)"
      }
    })]
  })
}