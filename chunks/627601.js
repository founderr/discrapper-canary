"use strict";
l.r(t), l.d(t, {
  UserPopoutUpsellSource: function() {
    return i
  },
  useUserPopoutCollectiblesUpsellStore: function() {
    return a
  }
});
var s, i, n = l("308503");
(s = i || (i = {})).PROFILE_PANEL = "profile panel", s.USER_POPOUT = "user popout";
let u = {
    upsellSource: null
  },
  a = (0, n.default)(e => ({
    ...u,
    setUpsellSource: t => e({
      upsellSource: t
    }),
    reset: () => {
      e({
        ...u
      })
    }
  }))