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
  l = s("136050");
let _ = ["#7185f6", "#7799f3", "#7eb2eb", "#85d5e0", "#89e6dd", "#8cefda", "#68eacb"],
  r = ["#ffffff", "#f0f0f0"],
  u = [.15, .23, .32, .45, .57, .62, .7],
  o = [{
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
  T = [.95, 1],
  d = [{
    base: 1,
    tint: 2
  }, {
    base: 14,
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
      children: [(0, a.jsx)("defs", {
        children: (0, a.jsxs)("radialGradient", {
          id: "foam-gradient",
          cx: "0.5",
          cy: "0.5",
          r: "0.65",
          fx: "0.5",
          fy: "0.8",
          children: [(0, a.jsx)("stop", {
            stopColor: N[1],
            offset: "60%"
          }), (0, a.jsx)("stop", {
            stopColor: N[0],
            offset: "100%"
          })]
        })
      }), (0, a.jsx)("style", {
        children: S
      })]
    }), (0, a.jsx)("use", {
      href: "".concat(l, "#wrapper-layer"),
      id: g
    }), (0, a.jsx)("use", {
      href: "".concat(l, "#foam"),
      style: {
        fill: "url(#foam-gradient)"
      }
    })]
  })
}