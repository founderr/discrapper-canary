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
  l = a("444816");
let o = ["#2d456e", "#395788", "#486ead", "#4f7ac2", "#5989d9", "#729bdd", "#96b3e3", "#b5c9e9", "#e0e0e2"],
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
  f = [.4],
  m = [{
    base: 1,
    tint: 5
  }];

function h(e) {
  let {
    width: t,
    height: a,
    primaryTintColor: h,
    secondaryTintColor: E,
    ...p
  } = e, {
    primaryColorsTransformed: C,
    secondaryColorsTransformed: T
  } = (0, r.getTransformedBadgeColors)({
    primaryBaseColors: o,
    primaryTintColor: h,
    primaryTintLuminances: d,
    primaryLuminanceWeights: u,
    secondaryBaseColors: c,
    secondaryTintColor: E,
    secondaryTintLuminances: f,
    secondaryLuminanceWeights: m
  }), {
    styleContent: _,
    containerId: x
  } = (0, s.useClanBannerStyleInjection)(C, T);
  return (0, n.jsxs)("svg", {
    ...p,
    "aria-label": i.default.Messages.CLAN_LOOK_BANNER,
    width: t,
    height: a,
    viewBox: "0 0 ".concat(s.CLAN_BANNER_WIDTH, " ").concat(s.CLAN_BANNER_HEIGHT),
    children: [(0, n.jsx)("defs", {
      children: (0, n.jsx)("style", {
        children: _
      })
    }), (0, n.jsx)("use", {
      href: "".concat(l, "#wrapper-layer"),
      id: x
    })]
  })
}