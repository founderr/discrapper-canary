"use strict";
t.r(r), t.d(r, {
  buildGetPremiumUserBannerStyles: function() {
    return s
  },
  getUserBannerStyles: function() {
    return u
  },
  getUserBannerHeight: function() {
    return f
  },
  getUserBannerSize: function() {
    return c
  }
}), t("794252");
var l = t("506838"),
  n = t("617258"),
  i = t("769846"),
  o = t("590456"),
  a = t("220817");
let s = e => r => {
    if (r.hasBanner && r.isPremium || r.hasProfileEffect) return e.premiumUserWithBanner;
    if (r.isPremium) {
      var t;
      return null !== (t = e.premiumUserWithoutBanner) && void 0 !== t ? t : e.default
    }
    return e.default
  },
  u = e => {
    let {
      profileType: r,
      user: t
    } = e;
    return (0, l.match)(r).with(o.UserProfileTypes.POPOUT, o.UserProfileTypes.POMELO_POPOUT, () => {
      let e = s({
        premiumUserWithBanner: a.popoutBannerPremium,
        premiumUserWithoutBanner: a.popoutNoBannerPremium,
        default: a.popoutBanner
      });
      return e(t)
    }).with(o.UserProfileTypes.MODAL, () => {
      let e = s({
        premiumUserWithBanner: a.profileBannerPremium,
        premiumUserWithoutBanner: a.profileBanner,
        default: a.profileBanner
      });
      return e(t)
    }).with(o.UserProfileTypes.SETTINGS, () => a.settingsBanner).with(o.UserProfileTypes.PANEL, () => a.panelBanner).with(o.UserProfileTypes.CANCEL_MODAL, () => a.cancelModalBanner).exhaustive()
  },
  f = e => {
    let {
      profileType: r,
      user: t
    } = e, a = (0, l.match)(r).with(o.UserProfileTypes.POPOUT, () => {
      let e = s({
        premiumUserWithBanner: i.default.USER_BANNER_PREMIUM_BANNER_HEIGHT_POPOUT,
        premiumUserWithoutBanner: i.default.USER_BANNER_PREMIUM_BANNER_HEIGHT_NO_BANNER_IMAGE_POPOUT,
        default: i.default.USER_BANNER_BANNER_HEIGHT_POPOUT
      });
      return e(t)
    }).with(o.UserProfileTypes.MODAL, () => {
      let e = s({
        premiumUserWithBanner: i.default.USER_BANNER_PREMIUM_BANNER_HEIGHT_PROFILE,
        premiumUserWithoutBanner: i.default.USER_BANNER_BANNER_HEIGHT_PROFILE,
        default: i.default.USER_BANNER_BANNER_HEIGHT_PROFILE
      });
      return e(t)
    }).with(o.UserProfileTypes.POMELO_POPOUT, () => i.default.USER_BANNER_BANNER_HEIGHT_POMELO).with(o.UserProfileTypes.SETTINGS, () => i.default.USER_BANNER_PREMIUM_BANNER_HEIGHT_SETTINGS).with(o.UserProfileTypes.PANEL, () => i.default.USER_BANNER_BANNER_HEIGHT_PANEL).with(o.UserProfileTypes.CANCEL_MODAL, () => i.default.USER_BANNER_CANCEL_MODAL_HEIGHT).exhaustive();
    return (0, n.cssValueToNumber)(a)
  },
  d = Object.freeze({
    [o.UserProfileTypes.POPOUT]: 480,
    [o.UserProfileTypes.PANEL]: 480,
    [o.UserProfileTypes.MODAL]: 600,
    [o.UserProfileTypes.SETTINGS]: 600,
    [o.UserProfileTypes.POMELO_POPOUT]: 432,
    [o.UserProfileTypes.CANCEL_MODAL]: 172
  }),
  c = e => d[e]