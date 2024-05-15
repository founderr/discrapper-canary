"use strict";
n.r(t);
var a = n("735250");
n("470079");
var s = n("481060"),
  i = n("570140"),
  l = n("317770"),
  r = n("689938");
class o extends l.default {
  _initialize() {
    i.default.subscribe("POGGERMODE_TEMPORARILY_DISABLED", this.handlePoggermodeTemporarilyDisabled)
  }
  _terminate() {
    i.default.unsubscribe("POGGERMODE_TEMPORARILY_DISABLED", this.handlePoggermodeTemporarilyDisabled)
  }
  handlePoggermodeTemporarilyDisabled() {
    (0, s.openModal)(e => (0, a.jsx)(s.ConfirmModal, {
      ...e,
      header: r.default.Messages.POGGERMODE_TEMPORARILY_DISABLED_TOAST_TITLE,
      confirmText: r.default.Messages.CONFIRM,
      confirmButtonColor: s.Button.Colors.GREEN,
      children: (0, a.jsx)(s.Text, {
        variant: "text-md/normal",
        children: r.default.Messages.POGGERMODE_TEMPORARILY_DISABLED_TOAST_BODY
      })
    }))
  }
}
t.default = new o