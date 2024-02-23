"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var i = n("884691"),
  l = n("79112"),
  r = n("685665"),
  s = n("929423");
n("424562");
var a = n("49111"),
  u = n("397336");

function o(e) {
  let {
    guild: t,
    scrollPosition: n,
    analyticsLocation: o,
    analyticsLocations: d,
    openWithoutBackstack: c = !1
  } = e, {
    analyticsLocations: f
  } = (0, r.default)(), h = (0, i.useCallback)(() => {
    null != t && (0, s.initGuildIdentitySettings)(t, null != d ? d : f), l.default.open(a.UserSettingsSections.PROFILE_CUSTOMIZATION, null != t ? u.ProfileCustomizationSubsection.GUILD : u.ProfileCustomizationSubsection.USER_PROFILE, {
      scrollPosition: n,
      analyticsLocation: o,
      analyticsLocations: d,
      openWithoutBackstack: c
    })
  }, [t, n, o, d, c, f]);
  return h
}