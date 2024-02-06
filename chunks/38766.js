"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var i = n("884691"),
  r = n("79112"),
  o = n("685665"),
  s = n("929423");
n("424562");
var l = n("49111"),
  a = n("397336");

function u(e) {
  let {
    guild: t,
    scrollPosition: n,
    analyticsLocation: u,
    analyticsLocations: c,
    openWithoutBackstack: d = !1
  } = e, {
    analyticsLocations: f
  } = (0, o.default)(), E = (0, i.useCallback)(() => {
    null != t && (0, s.initGuildIdentitySettings)(t, null != c ? c : f), r.default.open(l.UserSettingsSections.PROFILE_CUSTOMIZATION, null != t ? a.ProfileCustomizationSubsection.GUILD : a.ProfileCustomizationSubsection.USER_PROFILE, {
      scrollPosition: n,
      analyticsLocation: u,
      analyticsLocations: c,
      openWithoutBackstack: d
    })
  }, [t, n, u, c, d, f]);
  return E
}