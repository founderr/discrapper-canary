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
  l = t(585025);
let o = ["#0fa3dd", "#a7e4e4", "#a2ccdd"],
  c = ["#0b3215", "#a6b51a", "#35748a", "#65a88f", "#621c12", "#f96748", "#ffbbbb"],
  d = [.25, .9, .9],
  u = [{
    base: 8,
    tint: 1
  }, {
    base: 14,
    tint: 1
  }, {
    base: 5,
    tint: 1
  }],
  m = [.05, .4, .15, .33, .1, .3, .6],
  h = [{
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
  }, {
    base: 8,
    tint: 1
  }, {
    base: 8,
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
        children: (0, a.jsxs)("linearGradient", {
          id: "sky-gradient",
          x1: "0",
          x2: "1",
          y1: "0",
          y2: "1",
          children: [(0, a.jsx)("stop", {
            stopColor: E[2],
            offset: "0%"
          }), (0, a.jsx)("stop", {
            stopColor: E[0],
            offset: "100%"
          })]
        })
      }), (0, a.jsx)("style", {
        children: _
      })]
    }), (0, a.jsx)("use", {
      href: "".concat(l, "#sky"),
      style: {
        fill: "url(#sky-gradient)"
      }
    }), (0, a.jsx)("use", {
      href: "".concat(l, "#wrapper-layer"),
      id: I
    })]
  })
}