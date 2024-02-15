"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var i = n("884691"),
  r = n("79112"),
  l = n("685665"),
  u = n("929423");
n("424562");
var a = n("49111"),
  s = n("397336");

function o(e) {
  let {
    guild: t,
    scrollPosition: n,
    analyticsLocation: o,
    analyticsLocations: d,
    openWithoutBackstack: c = !1
  } = e, {
    analyticsLocations: f
  } = (0, l.default)(), E = (0, i.useCallback)(() => {
    null != t && (0, u.initGuildIdentitySettings)(t, null != d ? d : f), r.default.open(a.UserSettingsSections.PROFILE_CUSTOMIZATION, null != t ? s.ProfileCustomizationSubsection.GUILD : s.ProfileCustomizationSubsection.USER_PROFILE, {
      scrollPosition: n,
      analyticsLocation: o,
      analyticsLocations: d,
      openWithoutBackstack: c
    })
  }, [t, n, o, d, c, f]);
  return E
}