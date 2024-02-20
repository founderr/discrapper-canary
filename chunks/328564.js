"use strict";
s.r(t), s.d(t, {
  useSafetyAlertsSettingOrDefault: function() {
    return i
  }
});
var a = s("446674"),
  n = s("374363"),
  l = s("908041");
let i = () => {
  let e = (0, a.useStateFromStores)([n.default], () => {
      var e, t, s;
      return null === (s = null === (t = n.default.settings.privacy) || void 0 === t ? void 0 : null === (e = t.inappropriateConversationWarnings) || void 0 === e ? void 0 : e.value) || void 0 === s || s
    }),
    t = (0, l.useUserIsTeen)("safety_warnings_setting");
  return t && e
}