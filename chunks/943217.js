"use strict";
n.d(t, {
  Z: function() {
    return c
  }
});
var i = n(735250);
n(470079);
var r = n(481060),
  s = n(153124),
  o = n(793397),
  a = n(228168),
  l = n(357743);
let u = e => {
    let {
      size: t,
      stroke: n
    } = (0, r.getAvatarSpecs)(e);
    return t / 2 + n
  },
  _ = {
    [a.y0.POPOUT]: {
      radius: u(r.AvatarSizes.SIZE_80),
      offsetX: 16,
      offsetY: 4
    },
    [a.y0.BITE_SIZE]: {
      radius: u(r.AvatarSizes.SIZE_80),
      offsetX: 10,
      offsetY: 4
    },
    [a.y0.MODAL]: {
      radius: u(r.AvatarSizes.SIZE_120),
      offsetX: 14,
      offsetY: 5
    },
    [a.y0.FULL_SIZE]: {
      radius: u(r.AvatarSizes.SIZE_120),
      offsetX: 16,
      offsetY: 5
    },
    [a.y0.SETTINGS]: {
      radius: u(r.AvatarSizes.SIZE_80),
      offsetX: 16,
      offsetY: -22
    },
    [a.y0.PANEL]: {
      radius: u(r.AvatarSizes.SIZE_80),
      offsetX: 10,
      offsetY: 8
    },
    [a.y0.POMELO_POPOUT]: {
      radius: u(r.AvatarSizes.SIZE_80),
      offsetX: 20,
      offsetY: -20
    },
    [a.y0.CANCEL_MODAL]: {
      radius: u(r.AvatarSizes.SIZE_56),
      offsetX: 8,
      offsetY: 2
    }
  };

function c(e) {
  let {
    children: t,
    profileType: n,
    isPremium: r,
    hasThemeColors: u,
    hasBanner: c,
    overrideBannerWidth: d,
    hasProfileEffect: E = !1
  } = e, I = (0, s.Dt)(), T = null != d ? d : (0, o.e7)(n), h = (0, o.Wo)({
    profileType: n,
    user: {
      hasBanner: c,
      isPremium: r,
      hasProfileEffect: E
    }
  }), {
    radius: f,
    offsetX: S,
    offsetY: N
  } = _[n], A = u && (n === a.y0.POPOUT || n === a.y0.BITE_SIZE) ? 4 : 0, m = h - N - A;
  return (0, i.jsxs)("svg", {
    className: l.bannerSVGWrapper,
    viewBox: "0 0 ".concat(T, " ").concat(h),
    style: {
      minWidth: T,
      minHeight: h
    },
    children: [(0, i.jsxs)("mask", {
      id: I,
      children: [(0, i.jsx)("rect", {
        fill: "white",
        x: "0",
        y: "0",
        width: "100%",
        height: "100%"
      }), (0, i.jsx)("circle", {
        fill: "black",
        cx: f + S - A,
        cy: m,
        r: f
      })]
    }), (0, i.jsx)("foreignObject", {
      x: "0",
      y: "0",
      width: "100%",
      height: "100%",
      overflow: "visible",
      mask: "url(#".concat(I, ")"),
      children: t
    })]
  })
}