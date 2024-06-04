"use strict";
s.r(t), s.d(t, {
  Subsetting: function() {
    return i
  }
});
var a = s("735250");
s("470079");
var n = s("394644"),
  l = s("295545");
let i = e => {
  let {
    setting: t,
    children: s
  } = e, i = (0, l.useIsEligibleForUserSettingsSearchDesktop)({
    location: "subsettings"
  }), r = (0, n.useViewableSettingsFilterFromSearch)(t);
  return i ? r.size > 0 && !r.has(t) ? null : (0, a.jsx)("div", {
    children: s
  }) : (0, a.jsx)(a.Fragment, {
    children: s
  })
}