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
  l = a("408263");
let o = ["#00ff00"],
  d = ["#000000", "#ed1c24"],
  c = [.7],
  u = [{
    base: 1,
    tint: 2
  }],
  f = [0, .2],
  m = [{
    base: 1,
    tint: 0
  }, {
    base: 1,
    tint: 4
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
        children: (0, n.jsxs)("linearGradient", {
          id: "line-gradient",
          x1: "0",
          x2: "1",
          y1: "0",
          y2: "1",
          children: [(0, n.jsx)("stop", {
            stopColor: C[1],
            offset: "0%"
          }), (0, n.jsx)("stop", {
            stopColor: _[0],
            offset: "50%"
          }), (0, n.jsx)("stop", {
            stopColor: _[0],
            offset: "80%"
          }), (0, n.jsx)("stop", {
            stopColor: C[1],
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
      href: "".concat(l, "#heightmap-lines-0"),
      style: {
        fill: "url(#line-gradient)"
      }
    }), (0, n.jsx)("use", {
      href: "".concat(l, "#heightmap-lines-1"),
      style: {
        fill: "url(#line-gradient)"
      }
    }), (0, n.jsx)("use", {
      href: "".concat(l, "#heightmap-lines-2"),
      style: {
        fill: "url(#line-gradient)"
      }
    })]
  })
}