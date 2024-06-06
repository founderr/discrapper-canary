"use strict";
n.r(t), n.d(t, {
  useUserIsTeen: function() {
    return l
  }
});
var i = n("442837"),
  a = n("594174"),
  s = n("699816");

function l(e) {
  let t = (0, i.useStateFromStores)([a.default], () => {
      var e;
      return null === (e = a.default.getCurrentUser()) || void 0 === e ? void 0 : e.nsfwAllowed
    }),
    n = (0, s.useStaffTeenSafetyAssistAgeBypass)(e);
  return !1 === t || n
}