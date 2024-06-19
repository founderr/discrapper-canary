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
  o = t(408263);
let l = ["#00ff00"],
  c = ["#000000", "#ed1c24"],
  d = [.7],
  u = [{
    base: 1,
    tint: 2
  }],
  m = [0, .2],
  h = [{
    base: 1,
    tint: 0
  }, {
    base: 1,
    tint: 4
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
      children: [(0, a.jsx)("defs", {
        children: (0, a.jsxs)("linearGradient", {
          id: "line-gradient",
          x1: "0",
          x2: "1",
          y1: "0",
          y2: "1",
          children: [(0, a.jsx)("stop", {
            stopColor: T[1],
            offset: "0%"
          }), (0, a.jsx)("stop", {
            stopColor: E[0],
            offset: "50%"
          }), (0, a.jsx)("stop", {
            stopColor: E[0],
            offset: "80%"
          }), (0, a.jsx)("stop", {
            stopColor: T[1],
            offset: "100%"
          })]
        })
      }), (0, a.jsx)("style", {
        children: _
      })]
    }), (0, a.jsx)("use", {
      href: "".concat(o, "#wrapper-layer"),
      id: I
    }), (0, a.jsx)("use", {
      href: "".concat(o, "#heightmap-lines-0"),
      style: {
        fill: "url(#line-gradient)"
      }
    }), (0, a.jsx)("use", {
      href: "".concat(o, "#heightmap-lines-1"),
      style: {
        fill: "url(#line-gradient)"
      }
    }), (0, a.jsx)("use", {
      href: "".concat(o, "#heightmap-lines-2"),
      style: {
        fill: "url(#line-gradient)"
      }
    })]
  })
}