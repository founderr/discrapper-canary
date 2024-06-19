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
  o = t(307536);
let l = ["#50599c", "#cc99ff", "#fefefe"],
  c = ["#39306f", "#aeaad2"],
  d = [.05, .4, 1],
  u = [{
    base: 8,
    tint: 1
  }, {
    base: 6,
    tint: 1
  }, {
    base: 10,
    tint: 1
  }],
  m = [.05, .4],
  h = [{
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
    children: [(0, a.jsx)("defs", {
      children: (0, a.jsx)("style", {
        children: _
      })
    }), (0, a.jsx)("use", {
      href: "".concat(o, "#wrapper-layer"),
      id: I
    })]
  })
}