"use strict";
s.r(t), s.d(t, {
  showGenericGuildProfileUpdateFailureToast: function() {
    return i
  },
  showGenericProfileUpdateFailureToast: function() {
    return l
  }
});
var a = s("481060"),
  n = s("689938");

function l() {
  (0, a.showToast)((0, a.createToast)(n.default.Messages.USER_SETTINGS_EDIT_PROFILE_GENERIC_ERROR, a.ToastType.FAILURE))
}

function i() {
  (0, a.showToast)((0, a.createToast)(n.default.Messages.GUILD_SETTINGS_EDIT_PROFILE_GENERIC_ERROR, a.ToastType.FAILURE))
}