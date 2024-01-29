"use strict";
t.r(r), t.d(r, {
  default: function() {
    return p
  }
}), t("70102"), t("794252");
var l = t("37983");
t("884691");
var n = t("506838"),
  i = t("769846"),
  o = t("77078"),
  a = t("606292"),
  s = t("476765"),
  u = t("159885"),
  f = t("878569"),
  d = t("590456"),
  c = t("573135"),
  P = t("423713");
let E = {
  [d.UserProfileTypes.POPOUT]: o.AvatarSizes.SIZE_80,
  [d.UserProfileTypes.MODAL]: o.AvatarSizes.SIZE_120,
  [d.UserProfileTypes.SETTINGS]: o.AvatarSizes.SIZE_80,
  [d.UserProfileTypes.PANEL]: o.AvatarSizes.SIZE_80,
  [d.UserProfileTypes.POMELO_POPOUT]: o.AvatarSizes.SIZE_80,
  [d.UserProfileTypes.CANCEL_MODAL]: o.AvatarSizes.SIZE_56
};

function p(e) {
  let {
    children: r,
    profileType: t,
    isPremium: p,
    hasThemeColors: T,
    hasBanner: _,
    forProfileEffectModal: O,
    hasProfileEffect: U = !1
  } = e, I = E[t], h = (0, s.useUID)(), m = function(e) {
    let {
      profileType: r,
      avatarSize: t,
      hasBanner: l,
      isPremium: s,
      hasThemeColors: P,
      hasProfileEffect: E
    } = e, p = c.AvatarDecorationBorderSizes[t];
    if (null == p) throw Error("Unsupported avatar size for banner mask");
    let T = (0, a.getDecorationSizeForAvatarSize)(t),
      {
        size: _,
        stroke: O
      } = (0, o.getAvatarSpecs)(t),
      U = {
        avatarSize: _,
        avatarBorderSize: O,
        avatarDecorationSize: T,
        avatarDecorationBorderSize: p,
        avatarDecorationOffsetY: -(T + 2 * p) / 2,
        bannerHeight: (0, f.getUserBannerHeight)({
          profileType: r,
          user: {
            hasBanner: l,
            isPremium: s,
            hasProfileEffect: E
          }
        })
      };
    return (0, n.match)(r).with(d.UserProfileTypes.POPOUT, () => {
      let e = P ? (0, u.cssValueToNumber)(i.default.USER_PROFILE_THEMED_CONTAINER_USER_PROFILE_THEMED_PADDING) : 0;
      return {
        ...U,
        bannerWidth: (0, u.cssValueToNumber)(i.default.USER_PROFILE_THEMED_CONTAINER_USER_POPOUT_WIDTH),
        offsetX: 16 - e,
        offsetY: 4 + e,
        avatarDecorationOffsetX: 4
      }
    }).with(d.UserProfileTypes.MODAL, () => ({
      ...U,
      bannerWidth: (0, f.getUserBannerSize)(d.UserProfileTypes.MODAL),
      offsetX: 14,
      offsetY: 5,
      avatarDecorationOffsetX: 2
    })).with(d.UserProfileTypes.SETTINGS, () => ({
      ...U,
      bannerWidth: 660,
      offsetX: 16,
      offsetY: -22,
      avatarDecorationOffsetX: 8
    })).with(d.UserProfileTypes.PANEL, () => {
      let e = (0, u.cssValueToNumber)(i.default.USER_PROFILE_THEMED_CONTAINER_USER_PROFILE_THEMED_PADDING);
      return {
        ...U,
        bannerWidth: (0, u.cssValueToNumber)(i.default.USER_PROFILE_THEMED_CONTAINER_USER_POPOUT_WIDTH),
        offsetX: 16 - e,
        offsetY: 4 + e,
        avatarDecorationOffsetX: 4
      }
    }).with(d.UserProfileTypes.POMELO_POPOUT, () => ({
      ...U,
      bannerWidth: (0, f.getUserBannerSize)(d.UserProfileTypes.POMELO_POPOUT),
      offsetX: 20,
      offsetY: -20,
      avatarDecorationOffsetX: 10
    })).with(d.UserProfileTypes.CANCEL_MODAL, () => ({
      ...U,
      bannerWidth: (0, f.getUserBannerSize)(d.UserProfileTypes.CANCEL_MODAL),
      offsetX: 8,
      offsetY: 2,
      avatarDecorationOffsetX: 8
    })).exhaustive()
  }({
    profileType: t,
    avatarSize: I,
    hasBanner: _,
    isPremium: p,
    hasThemeColors: T,
    hasProfileEffect: U
  });
  O && (m.bannerWidth = (0, u.cssValueToNumber)(i.default.USER_PROFILE_THEMED_CONTAINER_PROFILE_EFFECTS_USER_POPOUT_WIDTH));
  let y = m.avatarSize / 2 + m.avatarBorderSize,
    S = m.bannerHeight - m.offsetY;
  return (0, l.jsxs)("svg", {
    className: P.bannerSVGWrapper,
    viewBox: "0 0 ".concat(m.bannerWidth, " ").concat(m.bannerHeight),
    style: {
      minWidth: m.bannerWidth,
      minHeight: m.bannerHeight
    },
    children: [(0, l.jsxs)("mask", {
      id: h,
      children: [(0, l.jsx)("rect", {
        fill: "white",
        x: "0",
        y: "0",
        width: "100%",
        height: "100%"
      }), (0, l.jsx)("circle", {
        fill: "black",
        cx: m.offsetX + y,
        cy: S,
        r: y
      })]
    }), (0, l.jsx)("foreignObject", {
      x: "0",
      y: "0",
      width: "100%",
      height: "100%",
      overflow: "visible",
      mask: "url(#".concat(h, ")"),
      children: r
    })]
  })
}