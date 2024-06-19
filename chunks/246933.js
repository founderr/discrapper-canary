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
  o = t(409814);
let l = ["#cc99ff", "#ffffff"],
  c = ["#2d3dee", "#ffffff"],
  d = [.3, 1],
  u = [{
    base: 2,
    tint: 1
  }, {
    base: 5,
    tint: 1
  }],
  m = [.3, 1],
  h = [{
    base: 2,
    tint: 1
  }, {
    base: 5,
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
    primaryBaseColors: l,
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
            stopColor: E[1],
            offset: "0%"
          }), (0, a.jsx)("stop", {
            stopColor: E[0],
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
            stopColor: T[1],
            offset: "0%"
          }), (0, a.jsx)("stop", {
            stopColor: T[0],
            offset: "70%"
          })]
        })]
      }), (0, a.jsx)("style", {
        children: _
      })]
    }), (0, a.jsx)("use", {
      href: "".concat(o, "#wrapper-layer"),
      id: I
    }), (0, a.jsx)("use", {
      href: "".concat(o, "#clan-banner-warp-tunnel-secondary"),
      style: {
        fill: "url(#fog-gradient-secondary)"
      }
    }), (0, a.jsx)("use", {
      href: "".concat(o, "#clan-banner-warp-tunnel-primary"),
      style: {
        fill: "url(#fog-gradient-primary)"
      }
    })]
  })
}