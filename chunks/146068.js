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
  l = a("585025");
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
  f = [.05, .4, .15, .33, .1, .3, .6],
  m = [{
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

function h(e) {
  let {
    width: t,
    height: a,
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
    styleContent: _,
    containerId: x
  } = (0, s.useClanBannerStyleInjection)(T, C);
  return (0, n.jsxs)("svg", {
    ...E,
    "aria-label": i.default.Messages.CLAN_LOOK_BANNER,
    width: t,
    height: a,
    viewBox: "0 0 ".concat(s.CLAN_BANNER_WIDTH, " ").concat(s.CLAN_BANNER_HEIGHT),
    children: [(0, n.jsxs)("defs", {
      children: [(0, n.jsx)("defs", {
        children: (0, n.jsxs)("linearGradient", {
          id: "sky-gradient",
          x1: "0",
          x2: "1",
          y1: "0",
          y2: "1",
          children: [(0, n.jsx)("stop", {
            stopColor: T[2],
            offset: "0%"
          }), (0, n.jsx)("stop", {
            stopColor: T[0],
            offset: "100%"
          })]
        })
      }), (0, n.jsx)("style", {
        children: _
      })]
    }), (0, n.jsx)("use", {
      href: "".concat(l, "#sky"),
      style: {
        fill: "url(#sky-gradient)"
      }
    }), (0, n.jsx)("use", {
      href: "".concat(l, "#wrapper-layer"),
      id: x
    })]
  })
}