"use strict";
a.r(t);
var n = a("735250");
a("470079");
var s = a("481060"),
  l = a("570140"),
  i = a("317770"),
  r = a("689938");
class o extends i.default {
  _initialize() {
    l.default.subscribe("POGGERMODE_TEMPORARILY_DISABLED", this.handlePoggermodeTemporarilyDisabled)
  }
  _terminate() {
    l.default.unsubscribe("POGGERMODE_TEMPORARILY_DISABLED", this.handlePoggermodeTemporarilyDisabled)
  }
  handlePoggermodeTemporarilyDisabled() {
    (0, s.openModal)(e => (0, n.jsx)(s.ConfirmModal, {
      ...e,
      header: r.default.Messages.POGGERMODE_TEMPORARILY_DISABLED_TOAST_TITLE,
      confirmText: r.default.Messages.CONFIRM,
      confirmButtonColor: s.Button.Colors.GREEN,
      children: (0, n.jsx)(s.Text, {
        variant: "text-md/normal",
        children: r.default.Messages.POGGERMODE_TEMPORARILY_DISABLED_TOAST_BODY
      })
    }))
  }
}
t.default = new o