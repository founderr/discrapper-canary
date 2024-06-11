"use strict";
s.r(t), s.d(t, {
  Subsetting: function() {
    return l
  }
});
var a = s("735250");
s("470079");
var n = s("394644"),
  i = s("295545");
let l = e => {
  let {
    setting: t,
    children: s
  } = e, l = (0, i.useIsEligibleForUserSettingsSearchDesktop)({
    location: "subsettings"
  }), r = (0, n.useViewableSettingsFilterFromSearch)(t);
  return l ? r.size > 0 && !r.has(t) ? null : (0, a.jsx)(a.Fragment, {
    children: s
  }) : (0, a.jsx)(a.Fragment, {
    children: s
  })
}