t.d(n, {
  Z: function() {
    return o
  }
});
var i = t(735250);
t(470079);
var l = t(153867),
  r = t(468026),
  a = t(394059),
  u = t(689938);

function o(e) {
  let {
    type: n,
    onConfirm: t,
    ...o
  } = e, s = n === a.K.STREAM ? u.Z.Messages.HIDE_SELF_STREAM_CONFIRMATION_HEADER : u.Z.Messages.HIDE_SELF_VIDEO_CONFIRMATION_HEADER, d = n === a.K.STREAM ? u.Z.Messages.HIDE_SELF_STREAM_CONFIRMATION_BODY : u.Z.Messages.HIDE_SELF_VIDEO_CONFIRMATION_BODY;
  return (0, i.jsx)(r.default, {
    confirmText: u.Z.Messages.CONFIRM,
    secondaryConfirmText: u.Z.Messages.DONT_ASK_AGAIN,
    title: s,
    cancelText: u.Z.Messages.CANCEL,
    onConfirm: t,
    onConfirmSecondary: () => {
      l.ZP.updatedUnsyncedSettings({
        disableHideSelfStreamAndVideoConfirmationAlert: !0
      }), t()
    },
    body: d,
    ...o
  })
}