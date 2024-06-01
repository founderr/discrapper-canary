"use strict";
n.r(t), n.d(t, {
  useUserIsTeen: function() {
    return i
  }
});
var a = n("442837"),
  s = n("594174"),
  r = n("699816");

function i(e) {
  let t = (0, a.useStateFromStores)([s.default], () => {
      var e;
      return null === (e = s.default.getCurrentUser()) || void 0 === e ? void 0 : e.nsfwAllowed
    }),
    n = (0, r.useStaffTeenSafetyAssistAgeBypass)(e);
  return !1 === t || n
}