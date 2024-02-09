"use strict";
l.r(t), l.d(t, {
  UserProfileContext: function() {
    return T
  },
  default: function() {
    return m
  }
}), l("794252");
var r = l("37983"),
  a = l("884691"),
  n = l("414456"),
  s = l.n(n),
  i = l("506838"),
  o = l("217513"),
  u = l("906889"),
  d = l("590456"),
  c = l("200932"),
  f = l("677055");
let T = a.createContext({
  profileType: null,
  profileTheme: null
});

function p(e) {
  var t, l;
  let {
    user: n,
    guildId: p,
    profileType: m,
    className: E,
    pendingThemeColors: P,
    pendingProfileEffectId: S,
    useDefaultClientTheme: v,
    children: h,
    forceShowPremium: g = !1,
    showOutOfBoundaryComponents: _ = !1
  } = e, N = a.useRef(null), O = (0, o.default)(n.id, p), {
    profileTheme: U
  } = (0, u.default)(n, O, {
    themeElementRef: N,
    pendingThemeColors: P,
    isPreview: g,
    useDefaultClientTheme: v
  }), A = (null == O ? void 0 : O.canEditThemes) || g, C = a.useMemo(() => ({
    profileType: m,
    profileTheme: U
  }), [m, U]);
  return (0, r.jsx)("div", {
    ref: N,
    className: s((t = m, (0, i.match)(t).with(d.UserProfileTypes.POPOUT, d.UserProfileTypes.SETTINGS, d.UserProfileTypes.CANCEL_MODAL, () => f.userPopoutOuter).with(d.UserProfileTypes.MODAL, () => f.userProfileModalOuter).with(d.UserProfileTypes.PANEL, () => f.userPanelOuter).with(d.UserProfileTypes.CARD, () => f.userCardOuter).exhaustive()), A ? f.userProfileOuterThemed : f.userProfileOuterUnthemed, c.profileColors, _ ? f.showOutOfBoundaryComponents : void 0, "theme-".concat(U), E),
    children: (0, r.jsx)("div", {
      className: s((l = m, (0, i.match)(l).with(d.UserProfileTypes.POPOUT, d.UserProfileTypes.SETTINGS, d.UserProfileTypes.CANCEL_MODAL, () => f.userPopoutInner).with(d.UserProfileTypes.MODAL, () => f.userProfileModalInner).with(d.UserProfileTypes.PANEL, () => f.userPanelInner).with(d.UserProfileTypes.CARD, () => f.userCardInner).exhaustive()), function() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          t = arguments.length > 1 ? arguments[1] : void 0,
          l = arguments.length > 2 ? arguments[2] : void 0;
        return (0, i.match)({
          profileType: l,
          canUsePremiumProfileCustomization: e,
          hasBanner: t
        }).with({
          profileType: d.UserProfileTypes.PANEL
        }, () => f.userPanelInnerThemed).with({
          canUsePremiumProfileCustomization: !0,
          hasBanner: !0
        }, () => f.userProfileInnerThemedWithBanner).with({
          canUsePremiumProfileCustomization: !0
        }, () => f.userProfileInnerThemedPremiumWithoutBanner).otherwise(() => f.userProfileInnerThemedNonPremium)
      }((null == O ? void 0 : O.canUsePremiumProfileCustomization) || g, null !== S && ((null == O ? void 0 : O.banner) != null || void 0 !== S), m)),
      children: (0, r.jsx)(T.Provider, {
        value: C,
        children: h
      })
    })
  })
}
p.Inner = function(e) {
  var t;
  let {
    className: l,
    children: n
  } = e, {
    profileType: o
  } = a.useContext(T);
  return (0, r.jsx)("div", {
    className: s((t = o, (0, i.match)(t).with(d.UserProfileTypes.POPOUT, d.UserProfileTypes.SETTINGS, () => f.userPopoutOverlayBackground).with(d.UserProfileTypes.MODAL, () => f.userProfileModalOverlayBackground).with(d.UserProfileTypes.PANEL, () => f.userPanelOverlayBackground).otherwise(() => f.overlayBackground)), l),
    children: n
  })
};
var m = p