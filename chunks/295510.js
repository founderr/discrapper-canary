n.d(t, {
  Z: function() {
return d;
  }
});
var i = n(735250);
n(470079);
var r = n(153867),
  a = n(468026),
  s = n(394059),
  o = n(689938);

function d(e) {
  let {
type: t,
onConfirm: n,
...d
  } = e, I = t === s.K.STREAM ? o.Z.Messages.HIDE_SELF_STREAM_CONFIRMATION_HEADER : o.Z.Messages.HIDE_SELF_VIDEO_CONFIRMATION_HEADER, c = t === s.K.STREAM ? o.Z.Messages.HIDE_SELF_STREAM_CONFIRMATION_BODY : o.Z.Messages.HIDE_SELF_VIDEO_CONFIRMATION_BODY;
  return (0, i.jsx)(a.default, {
confirmText: o.Z.Messages.CONFIRM,
secondaryConfirmText: o.Z.Messages.DONT_ASK_AGAIN,
title: I,
cancelText: o.Z.Messages.CANCEL,
onConfirm: n,
onConfirmSecondary: () => {
  r.ZP.updatedUnsyncedSettings({
    disableHideSelfStreamAndVideoConfirmationAlert: !0
  }), n();
},
body: c,
...d
  });
}