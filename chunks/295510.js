n.d(t, {
  Z: function() {
    return o
  }
});
var l = n(735250);
n(470079);
var i = n(153867),
  s = n(468026),
  a = n(394059),
  r = n(689938);

function o(e) {
  let {
    type: t,
    onConfirm: n,
    ...o
  } = e, c = t === a.K.STREAM ? r.Z.Messages.HIDE_SELF_STREAM_CONFIRMATION_HEADER : r.Z.Messages.HIDE_SELF_VIDEO_CONFIRMATION_HEADER, u = t === a.K.STREAM ? r.Z.Messages.HIDE_SELF_STREAM_CONFIRMATION_BODY : r.Z.Messages.HIDE_SELF_VIDEO_CONFIRMATION_BODY;
  return (0, l.jsx)(s.default, {
    confirmText: r.Z.Messages.CONFIRM,
    secondaryConfirmText: r.Z.Messages.DONT_ASK_AGAIN,
    title: c,
    cancelText: r.Z.Messages.CANCEL,
    onConfirm: n,
    onConfirmSecondary: () => {
      i.ZP.updatedUnsyncedSettings({
        disableHideSelfStreamAndVideoConfirmationAlert: !0
      }), n()
    },
    body: u,
    ...o
  })
}