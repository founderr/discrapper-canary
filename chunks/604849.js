"use strict";
n.r(t), n.d(t, {
  useSafetyAlertsSettingOrDefault: function() {
    return i
  }
});
var a = n("442837"),
  s = n("581883"),
  r = n("981312");
let i = () => {
  let e = (0, a.useStateFromStores)([s.default], () => {
    var e, t, n;
    return null === (n = null === (t = s.default.settings.privacy) || void 0 === t ? void 0 : null === (e = t.inappropriateConversationWarnings) || void 0 === e ? void 0 : e.value) || void 0 === n || n
  });
  return (0, r.useUserIsTeen)("safety_warnings_setting") && e
}