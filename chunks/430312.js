"use strict";
t.r(r), t.d(r, {
  UserProfileContext: function() {
    return P
  },
  default: function() {
    return p
  }
}), t("794252");
var l = t("37983"),
  n = t("884691"),
  i = t("414456"),
  o = t.n(i),
  a = t("506838"),
  s = t("217513"),
  u = t("906889"),
  f = t("590456"),
  d = t("200932"),
  c = t("677055");
let P = n.createContext({
  profileType: null,
  profileTheme: null
});

function E(e) {
  var r, t;
  let {
    user: i,
    guildId: E,
    profileType: p,
    className: T,
    pendingThemeColors: _,
    pendingProfileEffectId: O,
    useDefaultClientTheme: U,
    children: I,
    forceShowPremium: h = !1,
    showOutOfBoundaryComponents: m = !1
  } = e, y = n.useRef(null), S = (0, s.default)(i.id, E), {
    profileTheme: v
  } = (0, u.default)(i, S, {
    themeElementRef: y,
    pendingThemeColors: _,
    isPreview: h,
    useDefaultClientTheme: U
  }), N = (null == S ? void 0 : S.canEditThemes) || h, A = n.useMemo(() => ({
    profileType: p,
    profileTheme: v
  }), [p, v]);
  return (0, l.jsx)("div", {
    ref: y,
    className: o((r = p, (0, a.match)(r).with(f.UserProfileTypes.POPOUT, f.UserProfileTypes.SETTINGS, f.UserProfileTypes.CANCEL_MODAL, () => c.userPopoutOuter).with(f.UserProfileTypes.MODAL, () => c.userProfileModalOuter).with(f.UserProfileTypes.PANEL, () => c.userPanelOuter).with(f.UserProfileTypes.CARD, () => c.userCardOuter).exhaustive()), N ? c.userProfileOuterThemed : c.userProfileOuterUnthemed, d.profileColors, m ? c.showOutOfBoundaryComponents : void 0, "theme-".concat(v), T),
    children: (0, l.jsx)("div", {
      className: o((t = p, (0, a.match)(t).with(f.UserProfileTypes.POPOUT, f.UserProfileTypes.SETTINGS, f.UserProfileTypes.CANCEL_MODAL, () => c.userPopoutInner).with(f.UserProfileTypes.MODAL, () => c.userProfileModalInner).with(f.UserProfileTypes.PANEL, () => c.userPanelInner).with(f.UserProfileTypes.CARD, () => c.userCardInner).exhaustive()), function() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          r = arguments.length > 1 ? arguments[1] : void 0,
          t = arguments.length > 2 ? arguments[2] : void 0;
        return (0, a.match)({
          profileType: t,
          canUsePremiumProfileCustomization: e,
          hasBanner: r
        }).with({
          profileType: f.UserProfileTypes.PANEL
        }, () => c.userPanelInnerThemed).with({
          canUsePremiumProfileCustomization: !0,
          hasBanner: !0
        }, () => c.userProfileInnerThemedWithBanner).with({
          canUsePremiumProfileCustomization: !0
        }, () => c.userProfileInnerThemedPremiumWithoutBanner).otherwise(() => c.userProfileInnerThemedNonPremium)
      }((null == S ? void 0 : S.canUsePremiumProfileCustomization) || h, null !== O && ((null == S ? void 0 : S.banner) != null || void 0 !== O), p)),
      children: (0, l.jsx)(P.Provider, {
        value: A,
        children: I
      })
    })
  })
}
E.Inner = function(e) {
  var r;
  let {
    className: t,
    children: i
  } = e, {
    profileType: s
  } = n.useContext(P);
  return (0, l.jsx)("div", {
    className: o((r = s, (0, a.match)(r).with(f.UserProfileTypes.POPOUT, f.UserProfileTypes.SETTINGS, () => c.userPopoutOverlayBackground).with(f.UserProfileTypes.MODAL, () => c.userProfileModalOverlayBackground).with(f.UserProfileTypes.PANEL, () => c.userPanelOverlayBackground).otherwise(() => c.overlayBackground)), t),
    children: i
  })
};
var p = E