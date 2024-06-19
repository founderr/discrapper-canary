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
  o = t(444816);
let l = ["#2d456e", "#395788", "#486ead", "#4f7ac2", "#5989d9", "#729bdd", "#96b3e3", "#b5c9e9", "#e0e0e2"],
  c = ["#f7931e"],
  d = [.05, .09, .15, .2, .25, .33, .44, .57, .95],
  u = [{
    base: 4,
    tint: 1
  }, {
    base: 4,
    tint: 1
  }, {
    base: 4,
    tint: 1
  }, {
    base: 4,
    tint: 1
  }, {
    base: 4,
    tint: 1
  }, {
    base: 4,
    tint: 1
  }, {
    base: 4,
    tint: 1
  }, {
    base: 4,
    tint: 1
  }, {
    base: 7,
    tint: 1
  }],
  m = [.4],
  h = [{
    base: 1,
    tint: 5
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