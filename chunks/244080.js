"use strict";
a.r(t), a.d(t, {
  default: function() {
    return s
  }
});
var n = a("380349");

function s(e) {
  let {
    currentActivities: t,
    isSpotifyActivity: a
  } = e, s = t[0], l = (0, n.default)(null == s ? void 0 : s.activity, null == s ? void 0 : s.activityUser);
  return a ? l : null
}