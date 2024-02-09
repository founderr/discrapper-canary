"use strict";
l.r(t), l.d(t, {
  buildGetPremiumUserBannerStyles: function() {
    return o
  },
  getUserBannerStyles: function() {
    return u
  },
  getUserBannerHeight: function() {
    return d
  },
  getUserBannerSize: function() {
    return f
  }
}), l("794252");
var r = l("506838"),
  a = l("617258"),
  n = l("769846"),
  s = l("590456"),
  i = l("220817");
let o = e => t => {
    if (t.hasBanner && t.isPremium || t.hasProfileEffect) return e.premiumUserWithBanner;
    if (t.isPremium) {
      var l;
      return null !== (l = e.premiumUserWithoutBanner) && void 0 !== l ? l : e.default
    }
    return e.default
  },
  u = e => {
    let {
      profileType: t,
      user: l
    } = e;
    return (0, r.match)(t).with(s.UserProfileTypes.POPOUT, s.UserProfileTypes.POMELO_POPOUT, () => {
      let e = o({
        premiumUserWithBanner: i.popoutBannerPremium,
        premiumUserWithoutBanner: i.popoutNoBannerPremium,
        default: i.popoutBanner
      });
      return e(l)
    }).with(s.UserProfileTypes.MODAL, () => {
      let e = o({
        premiumUserWithBanner: i.profileBannerPremium,
        premiumUserWithoutBanner: i.profileBanner,
        default: i.profileBanner
      });
      return e(l)
    }).with(s.UserProfileTypes.SETTINGS, () => i.settingsBanner).with(s.UserProfileTypes.PANEL, () => i.panelBanner).with(s.UserProfileTypes.CANCEL_MODAL, () => i.cancelModalBanner).exhaustive()
  },
  d = e => {
    let {
      profileType: t,
      user: l
    } = e, i = (0, r.match)(t).with(s.UserProfileTypes.POPOUT, () => {
      let e = o({
        premiumUserWithBanner: n.default.USER_BANNER_PREMIUM_BANNER_HEIGHT_POPOUT,
        premiumUserWithoutBanner: n.default.USER_BANNER_PREMIUM_BANNER_HEIGHT_NO_BANNER_IMAGE_POPOUT,
        default: n.default.USER_BANNER_BANNER_HEIGHT_POPOUT
      });
      return e(l)
    }).with(s.UserProfileTypes.MODAL, () => {
      let e = o({
        premiumUserWithBanner: n.default.USER_BANNER_PREMIUM_BANNER_HEIGHT_PROFILE,
        premiumUserWithoutBanner: n.default.USER_BANNER_BANNER_HEIGHT_PROFILE,
        default: n.default.USER_BANNER_BANNER_HEIGHT_PROFILE
      });
      return e(l)
    }).with(s.UserProfileTypes.POMELO_POPOUT, () => n.default.USER_BANNER_BANNER_HEIGHT_POMELO).with(s.UserProfileTypes.SETTINGS, () => n.default.USER_BANNER_PREMIUM_BANNER_HEIGHT_SETTINGS).with(s.UserProfileTypes.PANEL, () => n.default.USER_BANNER_BANNER_HEIGHT_PANEL).with(s.UserProfileTypes.CANCEL_MODAL, () => n.default.USER_BANNER_CANCEL_MODAL_HEIGHT).exhaustive();
    return (0, a.cssValueToNumber)(i)
  },
  c = Object.freeze({
    [s.UserProfileTypes.POPOUT]: 480,
    [s.UserProfileTypes.PANEL]: 480,
    [s.UserProfileTypes.MODAL]: 600,
    [s.UserProfileTypes.SETTINGS]: 600,
    [s.UserProfileTypes.POMELO_POPOUT]: 432,
    [s.UserProfileTypes.CANCEL_MODAL]: 172
  }),
  f = e => c[e]