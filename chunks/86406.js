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
  l = n("408263");
let o = ["#00ff00"],
  c = ["#000000", "#ed1c24"],
  d = [.7],
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

function h(e) {
  let {
    width: t,
    height: n,
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
    containerId: g
  } = (0, s.useClanBannerStyleInjection)(T, C);
  return (0, a.jsxs)("svg", {
    ...E,
    "aria-label": i.default.Messages.CLAN_LOOK_BANNER,
    width: t,
    height: n,
    viewBox: "0 0 ".concat(s.CLAN_BANNER_WIDTH, " ").concat(s.CLAN_BANNER_HEIGHT),
    children: [(0, a.jsxs)("defs", {
      children: [(0, a.jsx)("defs", {
        children: (0, a.jsxs)("linearGradient", {
          id: "line-gradient",
          x1: "0",
          x2: "1",
          y1: "0",
          y2: "1",
          children: [(0, a.jsx)("stop", {
            stopColor: C[1],
            offset: "0%"
          }), (0, a.jsx)("stop", {
            stopColor: T[0],
            offset: "50%"
          }), (0, a.jsx)("stop", {
            stopColor: T[0],
            offset: "80%"
          }), (0, a.jsx)("stop", {
            stopColor: C[1],
            offset: "100%"
          })]
        })
      }), (0, a.jsx)("style", {
        children: _
      })]
    }), (0, a.jsx)("use", {
      href: "".concat(l, "#wrapper-layer"),
      id: g
    }), (0, a.jsx)("use", {
      href: "".concat(l, "#heightmap-lines-0"),
      style: {
        fill: "url(#line-gradient)"
      }
    }), (0, a.jsx)("use", {
      href: "".concat(l, "#heightmap-lines-1"),
      style: {
        fill: "url(#line-gradient)"
      }
    }), (0, a.jsx)("use", {
      href: "".concat(l, "#heightmap-lines-2"),
      style: {
        fill: "url(#line-gradient)"
      }
    })]
  })
}