"use strict";
n.r(t), n.d(t, {
  useSafetyAlertsSettingOrDefault: function() {
    return s
  }
});
var a = n("442837"),
  i = n("581883"),
  r = n("981312");
let s = () => {
  let e = (0, a.useStateFromStores)([i.default], () => {
    var e, t, n;
    return null === (n = null === (t = i.default.settings.privacy) || void 0 === t ? void 0 : null === (e = t.inappropriateConversationWarnings) || void 0 === e ? void 0 : e.value) || void 0 === n || n
  });
  return (0, r.useUserIsTeen)("safety_warnings_setting") && e
}