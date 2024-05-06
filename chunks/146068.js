"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
});
var a = n("735250");
n("470079");
var r = n("249849"),
  s = n("907561"),
  i = n("689938"),
  l = n("585025");
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
    height: n,
    primaryTintColor: h,
    secondaryTintColor: p,
    ...T
  } = e, {
    primaryColorsTransformed: E,
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
  } = (0, s.useClanBannerStyleInjection)(E, C);
  return (0, a.jsxs)("svg", {
    ...T,
    "aria-label": i.default.Messages.CLAN_LOOK_BANNER,
    width: t,
    height: n,
    viewBox: "0 0 ".concat(s.CLAN_BANNER_WIDTH, " ").concat(s.CLAN_BANNER_HEIGHT),
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
      id: x
    })]
  })
}