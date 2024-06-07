"use strict";
n.r(t), n.d(t, {
  useUserIsTeen: function() {
    return s
  }
});
var r = n("442837"),
  a = n("594174"),
  i = n("699816");

function s(e) {
  let t = (0, r.useStateFromStores)([a.default], () => {
      var e;
      return null === (e = a.default.getCurrentUser()) || void 0 === e ? void 0 : e.nsfwAllowed
    }),
    n = (0, i.useStaffTeenSafetyAssistAgeBypass)(e);
  return !1 === t || n
}