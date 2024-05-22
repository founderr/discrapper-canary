"use strict";
s.r(t), s.d(t, {
  showInvalidUsernameToast: function() {
    return l
  }
});
var a = s("481060"),
  n = s("689938");

function l() {
  (0, a.showToast)((0, a.createToast)(n.default.Messages.USER_SETTINGS_UPDATE_FAILURE, a.ToastType.FAILURE))
}