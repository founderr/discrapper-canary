"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var i = n("77078"),
  a = n("229353"),
  l = n("131010"),
  s = n("583374"),
  r = n("782340"),
  o = new l.default({
    onSwitchSuccess(e) {
      setTimeout(() => {
        (0, i.showToast)((0, i.createToast)(r.default.Messages.SWITCH_ACCOUNTS_TOAST_LOGIN_SUCCESS.format({
          username: e.username
        }), i.ToastType.SUCCESS))
      }, 100)
    },
    onSwitchError() {
      (0, i.showToast)((0, i.createToast)(a.SWITCH_ACCOUNTS_TOAST_LOGIN_ERROR, i.ToastType.FAILURE))
    },
    onTokenSet() {
      (0, i.closeModal)(s.SWITCH_ACCOUNTS_MODAL_KEY)
    }
  })