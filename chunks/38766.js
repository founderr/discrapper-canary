"use strict";
n.r(e), n.d(e, {
  default: function() {
    return l
  }
});
var r = n("884691"),
  o = n("79112"),
  u = n("685665"),
  I = n("929423");
n("424562");
var i = n("49111"),
  T = n("397336");

function l(t) {
  let {
    guild: e,
    scrollPosition: n,
    analyticsLocation: l,
    analyticsLocations: E,
    openWithoutBackstack: _ = !1
  } = t, {
    analyticsLocations: a
  } = (0, u.default)(), s = (0, r.useCallback)(() => {
    null != e && (0, I.initGuildIdentitySettings)(e, null != E ? E : a), o.default.open(i.UserSettingsSections.PROFILE_CUSTOMIZATION, null != e ? T.ProfileCustomizationSubsection.GUILD : T.ProfileCustomizationSubsection.USER_PROFILE, {
      scrollPosition: n,
      analyticsLocation: l,
      analyticsLocations: E,
      openWithoutBackstack: _
    })
  }, [e, n, l, E, _, a]);
  return s
}