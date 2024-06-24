t.d(n, {
  Z: function() {
    return C
  }
});
var a = t(735250);
t(470079);
var r = t(249849),
  s = t(907561),
  i = t(689938),
  l = t(136050);
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
  m = [.95, 1],
  h = [{
    base: 1,
    tint: 2
  }, {
    base: 14,
    tint: 1
  }];

function C(e) {
  let {
    width: n,
    height: t,
    primaryTintColor: C,
    secondaryTintColor: x,
    ...f
  } = e, {
    primaryColorsTransformed: E,
    secondaryColorsTransformed: T
  } = (0, r.s)({
    primaryBaseColors: o,
    primaryTintColor: C,
    primaryTintLuminances: d,
    primaryLuminanceWeights: u,
    secondaryBaseColors: c,
    secondaryTintColor: x,
    secondaryTintLuminances: m,
    secondaryLuminanceWeights: h
  }), {
    styleContent: _,
    containerId: I
  } = (0, s.bC)(E, T);
  return (0, a.jsxs)("svg", {
    ...f,
    "aria-label": i.Z.Messages.CLAN_LOOK_BANNER,
    width: n,
    height: t,
    viewBox: "0 0 ".concat(s.Km, " ").concat(s.md),
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
            stopColor: T[1],
            offset: "60%"
          }), (0, a.jsx)("stop", {
            stopColor: T[0],
            offset: "100%"
          })]
        })
      }), (0, a.jsx)("style", {
        children: _
      })]
    }), (0, a.jsx)("use", {
      href: "".concat(l, "#wrapper-layer"),
      id: I
    }), (0, a.jsx)("use", {
      href: "".concat(l, "#foam"),
      style: {
        fill: "url(#foam-gradient)"
      }
    })]
  })
}