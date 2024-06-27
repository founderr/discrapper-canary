"use strict";
n(627341);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(278074),
  l = n(721987),
  u = n(138655),
  _ = n(793397),
  c = n(652853),
  d = n(228168),
  E = n(277354);
let I = (e, t) => {
    let n = (0, a.EQ)(e).with(d.y0.MODAL, () => E.userProfileModalOuter).with(d.y0.PANEL, () => E.userPanelOuter).with(d.y0.CARD, () => E.userCardOuter).with(d.y0.BITE_SIZE, () => E.biteSizeOuter).with(d.y0.FULL_SIZE, () => E.fullSizeOuter).otherwise(() => E.userPopoutOuter),
      i = t ? E.userProfileOuterThemed : E.userProfileOuterUnthemed;
    return o()(n, i)
  },
  T = (e, t, n) => {
    let i = (0, a.EQ)(e).with(d.y0.MODAL, d.y0.FULL_SIZE, () => E.userProfileModalInner).with(d.y0.PANEL, () => E.userPanelInner).with(d.y0.CARD, () => E.userCardInner).otherwise(() => E.userPopoutInner),
      r = (0, a.EQ)(e).with(d.y0.PANEL, () => E.userPanelInnerThemed).with(d.y0.BITE_SIZE, () => E.biteSizeInnerThemed).with(d.y0.FULL_SIZE, () => E.fullSizeInnerThemed).otherwise(() => (0, _.zW)({
        premiumUserWithBanner: E.userProfileInnerThemedWithBanner,
        premiumUserWithoutBanner: E.userProfileInnerThemedPremiumWithoutBanner,
        default: E.userProfileInnerThemedNonPremium
      })({
        isPremium: t,
        hasBanner: n
      }));
    return o()(i, r)
  },
  h = r.forwardRef(function(e, t) {
    let {
      user: n,
      displayProfile: r,
      profileType: s,
      className: a,
      pendingThemeColors: _,
      pendingProfileEffectId: d,
      themeOverride: h,
      children: f,
      forceShowPremium: S = !1,
      showOutOfBoundaryComponents: A = !1
    } = e, {
      theme: N,
      primaryColor: m,
      secondaryColor: O
    } = (0, l.Z)({
      user: n,
      displayProfile: r,
      pendingThemeColors: _,
      isPreview: S
    }), {
      profileThemeStyle: R,
      profileThemeClassName: p
    } = (0, u.Z)({
      theme: null != h ? h : N,
      primaryColor: m,
      secondaryColor: O
    }), g = (null == r ? void 0 : r.canEditThemes) || S, C = null !== d && ((null == r ? void 0 : r.banner) != null || void 0 !== d);
    return (0, i.jsx)("div", {
      className: o()(I(s, g), A ? E.showOutOfBoundaryComponents : void 0, p, a),
      style: R,
      ref: t,
      children: (0, i.jsx)("div", {
        className: T(s, g, C),
        children: (0, i.jsx)(c.X, {
          profileType: s,
          theme: null != h ? h : N,
          primaryColor: m,
          secondaryColor: O,
          children: f
        })
      })
    })
  }),
  f = e => (0, a.EQ)(e).with(d.y0.POPOUT, d.y0.SETTINGS, () => E.userPopoutOverlayBackground).with(d.y0.MODAL, () => E.userProfileModalOverlayBackground).with(d.y0.BITE_SIZE, () => E.biteSizeOverlayBackground).with(d.y0.FULL_SIZE, () => E.fullSizeOverlayBackground).otherwise(() => E.overlayBackground);
t.Z = Object.assign(h, {
  Overlay: function(e) {
    let {
      children: t,
      className: n
    } = e, {
      profileType: r
    } = (0, c.z)();
    return (0, i.jsx)("div", {
      className: o()(f(r), n),
      children: t
    })
  }
})