"use strict";
n.r(t), n.d(t, {
  useSafetyAlertsSettingOrDefault: function() {
    return s
  }
});
var a = n("442837"),
  r = n("581883"),
  i = n("981312");
let s = () => {
  let e = (0, a.useStateFromStores)([r.default], () => {
    var e, t, n;
    return null === (n = null === (t = r.default.settings.privacy) || void 0 === t ? void 0 : null === (e = t.inappropriateConversationWarnings) || void 0 === e ? void 0 : e.value) || void 0 === n || n
  });
  return (0, i.useUserIsTeen)("safety_warnings_setting") && e
}