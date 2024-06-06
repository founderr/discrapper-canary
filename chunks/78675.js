"use strict";
n.r(t), n.d(t, {
  default: function() {
    return O
  }
}), n("47120");
var i = n("735250"),
  r = n("470079"),
  s = n("120356"),
  a = n.n(s),
  o = n("866442"),
  l = n("442837"),
  u = n("692547"),
  d = n("481060"),
  _ = n("220082"),
  c = n("583405"),
  E = n("695346"),
  I = n("451478"),
  T = n("311715"),
  f = n("768581"),
  S = n("74538"),
  h = n("888778"),
  A = n("943217"),
  m = n("793397"),
  N = n("474936"),
  p = n("214572");

function O(e) {
  var t, n;
  let {
    user: s,
    displayProfile: O,
    guildId: C,
    profileType: R,
    pendingBanner: g,
    overrideBannerWidth: L,
    children: v,
    animateOnHover: D = !1,
    hasProfileEffect: M = !1,
    canUsePremiumCustomization: y = !1
  } = e, P = y || S.default.isPremiumAtLeast(null == O ? void 0 : O.premiumType, N.PremiumTypes.TIER_2), [U, b] = r.useState(!1), G = (0, l.useStateFromStores)([I.default], () => I.default.isFocused()), w = E.GifAutoPlay.getSetting(), {
    bannerSrc: k,
    status: B
  } = (0, h.default)({
    displayProfile: O,
    pendingBanner: g,
    size: (0, m.getUserBannerSize)(R),
    canAnimate: D || !w ? U : G
  }), V = (0, d.useToken)(u.default.unsafe_rawColors.PRIMARY_800).hex(), x = (0, d.getAvatarSize)(d.AvatarSizes.SIZE_80), F = (0, o.hex2int)((0, _.default)(s.getAvatarURL(C, x), V, !1)), H = (0, c.default)(null !== (t = null == O ? void 0 : O.primaryColor) && void 0 !== t ? t : F).hsl;
  return (0, i.jsx)(A.default, {
    isPremium: P,
    hasThemeColors: null !== (n = null == O ? void 0 : O.canEditThemes) && void 0 !== n && n,
    profileType: R,
    hasBanner: null != k,
    hasProfileEffect: M,
    overrideBannerWidth: L,
    children: (0, i.jsxs)("div", {
      className: a()(p.banner, p.divider, (0, m.getUserBannerStyles)({
        profileType: R,
        user: {
          hasBanner: null != k,
          isPremium: P,
          hasProfileEffect: M
        }
      })),
      onMouseMove: () => b(!0),
      onMouseLeave: () => b(!1),
      style: {
        backgroundImage: null != k ? "url(".concat(k, ")") : void 0,
        backgroundColor: B !== h.BannerLoadingStatus.COMPLETE ? u.default.unsafe_rawColors.PRIMARY_800.css : H
      },
      children: [!w && (0, f.isAnimatedImageURL)(k) && (0, i.jsx)(T.default, {
        className: p.gifTag
      }), v]
    })
  })
}