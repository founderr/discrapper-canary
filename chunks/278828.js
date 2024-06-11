"use strict";
s.r(t), s.d(t, {
  updateDmSafetyAlertsSetting: function() {
    return i
  }
});
var a = s("381499"),
  n = s("675478");
let i = e => n.PreloadedUserSettingsActionCreators.updateAsync("privacy", t => {
  t.inappropriateConversationWarnings = a.BoolValue.create({
    value: e
  })
}, n.UserSettingsDelay.INFREQUENT_USER_ACTION)