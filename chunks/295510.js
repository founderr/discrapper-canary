t.d(n, {
  Z: function() {
    return o
  }
});
var i = t(735250);
t(470079);
var r = t(153867),
  l = t(468026),
  u = t(394059),
  a = t(689938);

function o(e) {
  let {
    type: n,
    onConfirm: t,
    ...o
  } = e, s = n === u.K.STREAM ? a.Z.Messages.HIDE_SELF_STREAM_CONFIRMATION_HEADER : a.Z.Messages.HIDE_SELF_VIDEO_CONFIRMATION_HEADER, d = n === u.K.STREAM ? a.Z.Messages.HIDE_SELF_STREAM_CONFIRMATION_BODY : a.Z.Messages.HIDE_SELF_VIDEO_CONFIRMATION_BODY;
  return (0, i.jsx)(l.default, {
    confirmText: a.Z.Messages.CONFIRM,
    secondaryConfirmText: a.Z.Messages.DONT_ASK_AGAIN,
    title: s,
    cancelText: a.Z.Messages.CANCEL,
    onConfirm: t,
    onConfirmSecondary: () => {
      r.ZP.updatedUnsyncedSettings({
        disableHideSelfStreamAndVideoConfirmationAlert: !0
      }), t()
    },
    body: d,
    ...o
  })
}