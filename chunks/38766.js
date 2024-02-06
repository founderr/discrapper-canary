"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var i = n("884691"),
  l = n("79112"),
  r = n("685665"),
  o = n("929423");
n("424562");
var a = n("49111"),
  s = n("397336");

function u(e) {
  let {
    guild: t,
    scrollPosition: n,
    analyticsLocation: u,
    analyticsLocations: c,
    openWithoutBackstack: d = !1
  } = e, {
    analyticsLocations: f
  } = (0, r.default)(), E = (0, i.useCallback)(() => {
    null != t && (0, o.initGuildIdentitySettings)(t, null != c ? c : f), l.default.open(a.UserSettingsSections.PROFILE_CUSTOMIZATION, null != t ? s.ProfileCustomizationSubsection.GUILD : s.ProfileCustomizationSubsection.USER_PROFILE, {
      scrollPosition: n,
      analyticsLocation: u,
      analyticsLocations: c,
      openWithoutBackstack: d
    })
  }, [t, n, u, c, d, f]);
  return E
}