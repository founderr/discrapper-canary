"use strict";
s.r(t), s.d(t, {
  showGenericGuildProfileUpdateFailureToast: function() {
    return l
  },
  showGenericProfileUpdateFailureToast: function() {
    return i
  }
});
var a = s("481060"),
  n = s("689938");

function i() {
  (0, a.showToast)((0, a.createToast)(n.default.Messages.USER_SETTINGS_EDIT_PROFILE_GENERIC_ERROR, a.ToastType.FAILURE))
}

function l() {
  (0, a.showToast)((0, a.createToast)(n.default.Messages.GUILD_SETTINGS_EDIT_PROFILE_GENERIC_ERROR, a.ToastType.FAILURE))
}