"use strict";
l.r(t), l.d(t, {
  default: function() {
    return m
  }
}), l("70102"), l("794252");
var r = l("37983");
l("884691");
var a = l("506838"),
  n = l("769846"),
  s = l("77078"),
  i = l("606292"),
  o = l("476765"),
  u = l("159885"),
  d = l("878569"),
  c = l("590456"),
  f = l("573135"),
  T = l("423713");
let p = {
  [c.UserProfileTypes.POPOUT]: s.AvatarSizes.SIZE_80,
  [c.UserProfileTypes.MODAL]: s.AvatarSizes.SIZE_120,
  [c.UserProfileTypes.SETTINGS]: s.AvatarSizes.SIZE_80,
  [c.UserProfileTypes.PANEL]: s.AvatarSizes.SIZE_80,
  [c.UserProfileTypes.POMELO_POPOUT]: s.AvatarSizes.SIZE_80,
  [c.UserProfileTypes.CANCEL_MODAL]: s.AvatarSizes.SIZE_56
};

function m(e) {
  let {
    children: t,
    profileType: l,
    isPremium: m,
    hasThemeColors: E,
    hasBanner: P,
    forProfileEffectModal: S,
    hasProfileEffect: v = !1
  } = e, h = p[l], g = (0, o.useUID)(), _ = function(e) {
    let {
      profileType: t,
      avatarSize: l,
      hasBanner: r,
      isPremium: o,
      hasThemeColors: T,
      hasProfileEffect: p
    } = e, m = f.AvatarDecorationBorderSizes[l];
    if (null == m) throw Error("Unsupported avatar size for banner mask");
    let E = (0, i.getDecorationSizeForAvatarSize)(l),
      {
        size: P,
        stroke: S
      } = (0, s.getAvatarSpecs)(l),
      v = {
        avatarSize: P,
        avatarBorderSize: S,
        avatarDecorationSize: E,
        avatarDecorationBorderSize: m,
        avatarDecorationOffsetY: -(E + 2 * m) / 2,
        bannerHeight: (0, d.getUserBannerHeight)({
          profileType: t,
          user: {
            hasBanner: r,
            isPremium: o,
            hasProfileEffect: p
          }
        })
      };
    return (0, a.match)(t).with(c.UserProfileTypes.POPOUT, () => {
      let e = T ? (0, u.cssValueToNumber)(n.default.USER_PROFILE_THEMED_CONTAINER_USER_PROFILE_THEMED_PADDING) : 0;
      return {
        ...v,
        bannerWidth: (0, u.cssValueToNumber)(n.default.USER_PROFILE_THEMED_CONTAINER_USER_POPOUT_WIDTH),
        offsetX: 16 - e,
        offsetY: 4 + e,
        avatarDecorationOffsetX: 4
      }
    }).with(c.UserProfileTypes.MODAL, () => ({
      ...v,
      bannerWidth: (0, d.getUserBannerSize)(c.UserProfileTypes.MODAL),
      offsetX: 14,
      offsetY: 5,
      avatarDecorationOffsetX: 2
    })).with(c.UserProfileTypes.SETTINGS, () => ({
      ...v,
      bannerWidth: 660,
      offsetX: 16,
      offsetY: -22,
      avatarDecorationOffsetX: 8
    })).with(c.UserProfileTypes.PANEL, () => {
      let e = (0, u.cssValueToNumber)(n.default.USER_PROFILE_THEMED_CONTAINER_USER_PROFILE_THEMED_PADDING);
      return {
        ...v,
        bannerWidth: (0, u.cssValueToNumber)(n.default.USER_PROFILE_THEMED_CONTAINER_USER_POPOUT_WIDTH),
        offsetX: 16 - e,
        offsetY: 4 + e,
        avatarDecorationOffsetX: 4
      }
    }).with(c.UserProfileTypes.POMELO_POPOUT, () => ({
      ...v,
      bannerWidth: (0, d.getUserBannerSize)(c.UserProfileTypes.POMELO_POPOUT),
      offsetX: 20,
      offsetY: -20,
      avatarDecorationOffsetX: 10
    })).with(c.UserProfileTypes.CANCEL_MODAL, () => ({
      ...v,
      bannerWidth: (0, d.getUserBannerSize)(c.UserProfileTypes.CANCEL_MODAL),
      offsetX: 8,
      offsetY: 2,
      avatarDecorationOffsetX: 8
    })).exhaustive()
  }({
    profileType: l,
    avatarSize: h,
    hasBanner: P,
    isPremium: m,
    hasThemeColors: E,
    hasProfileEffect: v
  });
  S && (_.bannerWidth = (0, u.cssValueToNumber)(n.default.USER_PROFILE_THEMED_CONTAINER_PROFILE_EFFECTS_USER_POPOUT_WIDTH));
  let N = _.avatarSize / 2 + _.avatarBorderSize,
    O = _.bannerHeight - _.offsetY;
  return (0, r.jsxs)("svg", {
    className: T.bannerSVGWrapper,
    viewBox: "0 0 ".concat(_.bannerWidth, " ").concat(_.bannerHeight),
    style: {
      minWidth: _.bannerWidth,
      minHeight: _.bannerHeight
    },
    children: [(0, r.jsxs)("mask", {
      id: g,
      children: [(0, r.jsx)("rect", {
        fill: "white",
        x: "0",
        y: "0",
        width: "100%",
        height: "100%"
      }), (0, r.jsx)("circle", {
        fill: "black",
        cx: _.offsetX + N,
        cy: O,
        r: N
      })]
    }), (0, r.jsx)("foreignObject", {
      x: "0",
      y: "0",
      width: "100%",
      height: "100%",
      overflow: "visible",
      mask: "url(#".concat(g, ")"),
      children: t
    })]
  })
}