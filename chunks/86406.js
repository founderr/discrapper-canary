"use strict";
s.r(t), s.d(t, {
  default: function() {
    return A
  }
});
var a = s("735250");
s("470079");
var n = s("249849"),
  i = s("907561"),
  E = s("689938"),
  l = s("408263");
let _ = ["#00ff00"],
  r = ["#000000", "#ed1c24"],
  u = [.7],
  o = [{
    base: 1,
    tint: 2
  }],
  T = [0, .2],
  d = [{
    base: 1,
    tint: 0
  }, {
    base: 1,
    tint: 4
  }];

function A(e) {
  let {
    width: t,
    height: s,
    primaryTintColor: A,
    secondaryTintColor: I,
    ...L
  } = e, {
    primaryColorsTransformed: c,
    secondaryColorsTransformed: N
  } = (0, n.getTransformedBadgeColors)({
    primaryBaseColors: _,
    primaryTintColor: A,
    primaryTintLuminances: u,
    primaryLuminanceWeights: o,
    secondaryBaseColors: r,
    secondaryTintColor: I,
    secondaryTintLuminances: T,
    secondaryLuminanceWeights: d
  }), {
    styleContent: S,
    containerId: g
  } = (0, i.useClanBannerStyleInjection)(c, N);
  return (0, a.jsxs)("svg", {
    ...L,
    "aria-label": E.default.Messages.CLAN_LOOK_BANNER,
    width: t,
    height: s,
    viewBox: "0 0 ".concat(i.CLAN_BANNER_WIDTH, " ").concat(i.CLAN_BANNER_HEIGHT),
    children: [(0, a.jsxs)("defs", {
      children: [(0, a.jsx)("defs", {
        children: (0, a.jsxs)("linearGradient", {
          id: "line-gradient",
          x1: "0",
          x2: "1",
          y1: "0",
          y2: "1",
          children: [(0, a.jsx)("stop", {
            stopColor: N[1],
            offset: "0%"
          }), (0, a.jsx)("stop", {
            stopColor: c[0],
            offset: "50%"
          }), (0, a.jsx)("stop", {
            stopColor: c[0],
            offset: "80%"
          }), (0, a.jsx)("stop", {
            stopColor: N[1],
            offset: "100%"
          })]
        })
      }), (0, a.jsx)("style", {
        children: S
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