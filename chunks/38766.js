"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var i = n("884691"),
  r = n("79112"),
  u = n("685665"),
  a = n("929423");
n("424562");
var s = n("49111"),
  l = n("397336");

function o(e) {
  let {
    guild: t,
    scrollPosition: n,
    analyticsLocation: o,
    analyticsLocations: c,
    openWithoutBackstack: d = !1
  } = e, {
    analyticsLocations: f
  } = (0, u.default)(), E = (0, i.useCallback)(() => {
    null != t && (0, a.initGuildIdentitySettings)(t, null != c ? c : f), r.default.open(s.UserSettingsSections.PROFILE_CUSTOMIZATION, null != t ? l.ProfileCustomizationSubsection.GUILD : l.ProfileCustomizationSubsection.USER_PROFILE, {
      scrollPosition: n,
      analyticsLocation: o,
      analyticsLocations: c,
      openWithoutBackstack: d
    })
  }, [t, n, o, c, d, f]);
  return E
}