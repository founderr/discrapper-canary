"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var a = n("37983");
n("884691");
var l = n("452804"),
  u = n("135230"),
  i = n("535348"),
  d = n("782340");

function r(e) {
  let {
    type: t,
    onConfirm: n,
    ...r
  } = e, s = t === i.SelfStreamAndVideoAlertType.STREAM ? d.default.Messages.HIDE_SELF_STREAM_CONFIRMATION_HEADER : d.default.Messages.HIDE_SELF_VIDEO_CONFIRMATION_HEADER, o = t === i.SelfStreamAndVideoAlertType.STREAM ? d.default.Messages.HIDE_SELF_STREAM_CONFIRMATION_BODY : d.default.Messages.HIDE_SELF_VIDEO_CONFIRMATION_BODY;
  return (0, a.jsx)(u.default, {
    confirmText: d.default.Messages.CONFIRM,
    secondaryConfirmText: d.default.Messages.DONT_ASK_AGAIN,
    title: s,
    cancelText: d.default.Messages.CANCEL,
    onConfirm: n,
    onConfirmSecondary: () => {
      l.default.updatedUnsyncedSettings({
        disableHideSelfStreamAndVideoConfirmationAlert: !0
      }), n()
    },
    body: o,
    ...r
  })
}