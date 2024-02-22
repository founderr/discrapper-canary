"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var r = n("884691"),
  i = n("79112"),
  s = n("685665"),
  o = n("929423");
n("424562");
var a = n("49111"),
  l = n("397336");

function u(e) {
  let {
    guild: t,
    scrollPosition: n,
    analyticsLocation: u,
    analyticsLocations: c,
    openWithoutBackstack: d = !1
  } = e, {
    analyticsLocations: f
  } = (0, s.default)(), E = (0, r.useCallback)(() => {
    null != t && (0, o.initGuildIdentitySettings)(t, null != c ? c : f), i.default.open(a.UserSettingsSections.PROFILE_CUSTOMIZATION, null != t ? l.ProfileCustomizationSubsection.GUILD : l.ProfileCustomizationSubsection.USER_PROFILE, {
      scrollPosition: n,
      analyticsLocation: u,
      analyticsLocations: c,
      openWithoutBackstack: d
    })
  }, [t, n, u, c, d, f]);
  return E
}