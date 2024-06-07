"use strict";
n.r(t), n.d(t, {
  default: function() {
    return N
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
  S = n("888778"),
  h = n("943217"),
  A = n("793397"),
  m = n("214572");

function N(e) {
  var t;
  let {
    user: n,
    displayProfile: s,
    guildId: N,
    profileType: p,
    pendingBanner: O,
    children: C,
    animateOnHover: R = !1,
    hasProfileEffect: g = !1,
    canUsePremiumCustomization: L = !1
  } = e, v = L || (null == s ? void 0 : s.canUsePremiumProfileCustomization) || !1, [D, M] = r.useState(!1), y = (0, l.useStateFromStores)([I.default], () => I.default.isFocused()), P = E.GifAutoPlay.getSetting(), {
    bannerSrc: U,
    status: b
  } = (0, S.default)({
    displayProfile: s,
    pendingBanner: O,
    size: (0, A.getUserBannerSize)(p),
    canAnimate: R || !P ? D : y
  }), G = (0, d.useToken)(u.default.unsafe_rawColors.PRIMARY_800).hex(), w = (0, d.getAvatarSize)(d.AvatarSizes.SIZE_80), k = (0, o.hex2int)((0, _.default)(n.getAvatarURL(N, w), G, !1)), B = (0, c.default)(null !== (t = null == s ? void 0 : s.primaryColor) && void 0 !== t ? t : k).hsl;
  return (0, i.jsx)(h.default, {
    isPremium: v,
    hasThemeColors: v,
    profileType: p,
    hasBanner: null != U,
    hasProfileEffect: g,
    children: (0, i.jsxs)("div", {
      className: a()(m.banner, m.divider, (0, A.getUserBannerStyles)({
        profileType: p,
        user: {
          hasBanner: null != U,
          isPremium: v,
          hasProfileEffect: g
        }
      })),
      onMouseMove: () => M(!0),
      onMouseLeave: () => M(!1),
      style: {
        backgroundImage: null != U ? "url(".concat(U, ")") : void 0,
        backgroundColor: b !== S.BannerLoadingStatus.COMPLETE ? u.default.unsafe_rawColors.PRIMARY_800.css : B
      },
      children: [!P && (0, f.isAnimatedImageURL)(U) && (0, i.jsx)(T.default, {
        className: m.gifTag
      }), C]
    })
  })
}