"use strict";
n.d(t, {
  Z: function() {
    return m
  }
}), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(866442),
  l = n(442837),
  u = n(692547),
  _ = n(481060),
  c = n(220082),
  d = n(583405),
  E = n(695346),
  I = n(451478),
  T = n(311715),
  h = n(768581),
  f = n(888778),
  S = n(943217),
  A = n(793397),
  N = n(300388);

function m(e) {
  var t;
  let {
    user: n,
    displayProfile: s,
    guildId: m,
    profileType: O,
    pendingBanner: p,
    children: R,
    animateOnHover: g = !1,
    hasProfileEffect: C = !1,
    canUsePremiumCustomization: v = !1
  } = e, L = v || (null == s ? void 0 : s.canUsePremiumProfileCustomization) || !1, [D, M] = r.useState(!1), P = (0, l.e7)([I.Z], () => I.Z.isFocused()), y = E.QK.getSetting(), {
    bannerSrc: U,
    status: b
  } = (0, f.Z)({
    displayProfile: s,
    pendingBanner: p,
    size: (0, A.e7)(O),
    canAnimate: g || !y ? D : P
  }), G = (0, _.useToken)(u.Z.unsafe_rawColors.PRIMARY_800).hex(), w = (0, _.getAvatarSize)(_.AvatarSizes.SIZE_80), x = (0, a._i)((0, c.ZP)(n.getAvatarURL(m, w), G, !1)), B = (0, d.Z)(null !== (t = null == s ? void 0 : s.primaryColor) && void 0 !== t ? t : x).hsl;
  return (0, i.jsx)(S.Z, {
    isPremium: L,
    hasThemeColors: L,
    profileType: O,
    hasBanner: null != U,
    hasProfileEffect: C,
    children: (0, i.jsxs)("div", {
      className: o()(N.banner, N.divider, (0, A.Ae)({
        profileType: O,
        user: {
          hasBanner: null != U,
          isPremium: L,
          hasProfileEffect: C
        }
      })),
      onMouseMove: () => M(!0),
      onMouseLeave: () => M(!1),
      style: {
        backgroundImage: null != U ? "url(".concat(U, ")") : void 0,
        backgroundColor: b !== f.s.COMPLETE ? u.Z.unsafe_rawColors.PRIMARY_800.css : B
      },
      children: [!y && (0, h.F8)(U) && (0, i.jsx)(T.Z, {
        className: N.gifTag
      }), R]
    })
  })
}