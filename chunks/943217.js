"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
});
var i = n("735250");
n("470079");
var r = n("481060"),
  s = n("153124"),
  a = n("793397"),
  o = n("228168"),
  l = n("678444");
let u = e => {
    let {
      size: t,
      stroke: n
    } = (0, r.getAvatarSpecs)(e);
    return t / 2 + n
  },
  d = {
    [o.UserProfileTypes.POPOUT]: {
      radius: u(r.AvatarSizes.SIZE_80),
      offsetX: 16,
      offsetY: 4
    },
    [o.UserProfileTypes.BITE_SIZE]: {
      radius: u(r.AvatarSizes.SIZE_80),
      offsetX: 10,
      offsetY: 4
    },
    [o.UserProfileTypes.MODAL]: {
      radius: u(r.AvatarSizes.SIZE_120),
      offsetX: 14,
      offsetY: 5
    },
    [o.UserProfileTypes.FULL_SIZE]: {
      radius: u(r.AvatarSizes.SIZE_120),
      offsetX: 16,
      offsetY: 5
    },
    [o.UserProfileTypes.SETTINGS]: {
      radius: u(r.AvatarSizes.SIZE_80),
      offsetX: 16,
      offsetY: -22
    },
    [o.UserProfileTypes.PANEL]: {
      radius: u(r.AvatarSizes.SIZE_80),
      offsetX: 10,
      offsetY: 8
    },
    [o.UserProfileTypes.POMELO_POPOUT]: {
      radius: u(r.AvatarSizes.SIZE_80),
      offsetX: 20,
      offsetY: -20
    },
    [o.UserProfileTypes.CANCEL_MODAL]: {
      radius: u(r.AvatarSizes.SIZE_56),
      offsetX: 8,
      offsetY: 2
    }
  };

function _(e) {
  let {
    children: t,
    profileType: n,
    isPremium: r,
    hasThemeColors: u,
    hasBanner: _,
    overrideBannerWidth: c,
    hasProfileEffect: E = !1
  } = e, I = (0, s.useUID)(), T = null != c ? c : (0, a.getUserBannerSize)(n), f = (0, a.getUserBannerHeight)({
    profileType: n,
    user: {
      hasBanner: _,
      isPremium: r,
      hasProfileEffect: E
    }
  }), {
    radius: S,
    offsetX: h,
    offsetY: A
  } = d[n], m = u && (n === o.UserProfileTypes.POPOUT || n === o.UserProfileTypes.BITE_SIZE) ? 4 : 0, N = f - A - m;
  return (0, i.jsxs)("svg", {
    className: l.bannerSVGWrapper,
    viewBox: "0 0 ".concat(T, " ").concat(f),
    style: {
      minWidth: T,
      minHeight: f
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
        cx: S + h - m,
        cy: N,
        r: S
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