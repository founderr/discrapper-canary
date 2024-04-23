"use strict";
n.r(t), n.d(t, {
  useUserIsTeen: function() {
    return s
  }
});
var a = n("442837"),
  r = n("594174"),
  i = n("699816");

function s(e) {
  let t = (0, a.useStateFromStores)([r.default], () => {
      var e;
      return null === (e = r.default.getCurrentUser()) || void 0 === e ? void 0 : e.nsfwAllowed
    }),
    n = (0, i.useStaffTeenSafetyAssistAgeBypass)(e);
  return !1 === t || n
}