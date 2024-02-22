"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var u = n("37983");
n("884691");
var a = n("452804"),
  i = n("135230"),
  l = n("535348"),
  r = n("782340");

function d(e) {
  let {
    type: t,
    onConfirm: n,
    ...d
  } = e, o = t === l.SelfStreamAndVideoAlertType.STREAM ? r.default.Messages.HIDE_SELF_STREAM_CONFIRMATION_HEADER : r.default.Messages.HIDE_SELF_VIDEO_CONFIRMATION_HEADER, s = t === l.SelfStreamAndVideoAlertType.STREAM ? r.default.Messages.HIDE_SELF_STREAM_CONFIRMATION_BODY : r.default.Messages.HIDE_SELF_VIDEO_CONFIRMATION_BODY;
  return (0, u.jsx)(i.default, {
    confirmText: r.default.Messages.CONFIRM,
    secondaryConfirmText: r.default.Messages.DONT_ASK_AGAIN,
    title: o,
    cancelText: r.default.Messages.CANCEL,
    onConfirm: n,
    onConfirmSecondary: () => {
      a.default.updatedUnsyncedSettings({
        disableHideSelfStreamAndVideoConfirmationAlert: !0
      }), n()
    },
    body: s,
    ...d
  })
}