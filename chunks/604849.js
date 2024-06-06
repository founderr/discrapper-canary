"use strict";
n.r(t), n.d(t, {
  useSafetyAlertsSettingOrDefault: function() {
    return l
  }
});
var i = n("442837"),
  a = n("581883"),
  s = n("981312");
let l = () => {
  let e = (0, i.useStateFromStores)([a.default], () => {
    var e, t, n;
    return null === (n = null === (t = a.default.settings.privacy) || void 0 === t ? void 0 : null === (e = t.inappropriateConversationWarnings) || void 0 === e ? void 0 : e.value) || void 0 === n || n
  });
  return (0, s.useUserIsTeen)("safety_warnings_setting") && e
}