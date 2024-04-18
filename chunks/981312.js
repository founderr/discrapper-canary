"use strict";
n.r(t), n.d(t, {
  useUserIsTeen: function() {
    return s
  }
});
var a = n("442837"),
  i = n("594174"),
  r = n("699816");

function s(e) {
  let t = (0, a.useStateFromStores)([i.default], () => {
      var e;
      return null === (e = i.default.getCurrentUser()) || void 0 === e ? void 0 : e.nsfwAllowed
    }),
    n = (0, r.useStaffTeenSafetyAssistAgeBypass)(e);
  return !1 === t || n
}