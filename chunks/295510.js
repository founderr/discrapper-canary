"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var i = n("735250");
n("470079");
var a = n("153867"),
  l = n("468026"),
  s = n("394059"),
  u = n("689938");

function d(e) {
  let {
    type: t,
    onConfirm: n,
    ...d
  } = e, r = t === s.SelfStreamAndVideoAlertType.STREAM ? u.default.Messages.HIDE_SELF_STREAM_CONFIRMATION_HEADER : u.default.Messages.HIDE_SELF_VIDEO_CONFIRMATION_HEADER, o = t === s.SelfStreamAndVideoAlertType.STREAM ? u.default.Messages.HIDE_SELF_STREAM_CONFIRMATION_BODY : u.default.Messages.HIDE_SELF_VIDEO_CONFIRMATION_BODY;
  return (0, i.jsx)(l.default, {
    confirmText: u.default.Messages.CONFIRM,
    secondaryConfirmText: u.default.Messages.DONT_ASK_AGAIN,
    title: r,
    cancelText: u.default.Messages.CANCEL,
    onConfirm: n,
    onConfirmSecondary: () => {
      a.default.updatedUnsyncedSettings({
        disableHideSelfStreamAndVideoConfirmationAlert: !0
      }), n()
    },
    body: o,
    ...d
  })
}