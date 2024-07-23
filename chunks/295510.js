n.d(t, {
  Z: function() {
return u;
  }
});
var i = n(735250);
n(470079);
var r = n(153867),
  a = n(468026),
  o = n(394059),
  s = n(689938);

function u(e) {
  let {
type: t,
onConfirm: n,
...u
  } = e, d = t === o.K.STREAM ? s.Z.Messages.HIDE_SELF_STREAM_CONFIRMATION_HEADER : s.Z.Messages.HIDE_SELF_VIDEO_CONFIRMATION_HEADER, l = t === o.K.STREAM ? s.Z.Messages.HIDE_SELF_STREAM_CONFIRMATION_BODY : s.Z.Messages.HIDE_SELF_VIDEO_CONFIRMATION_BODY;
  return (0, i.jsx)(a.default, {
confirmText: s.Z.Messages.CONFIRM,
secondaryConfirmText: s.Z.Messages.DONT_ASK_AGAIN,
title: d,
cancelText: s.Z.Messages.CANCEL,
onConfirm: n,
onConfirmSecondary: () => {
  r.ZP.updatedUnsyncedSettings({
    disableHideSelfStreamAndVideoConfirmationAlert: !0
  }), n();
},
body: l,
...u
  });
}