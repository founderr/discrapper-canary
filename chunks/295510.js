t.d(n, {
  Z: function() {
return o;
  }
});
var i = t(735250);
t(470079);
var r = t(153867),
  a = t(468026),
  s = t(394059),
  l = t(689938);

function o(e) {
  let {
type: n,
onConfirm: t,
...o
  } = e, u = n === s.K.STREAM ? l.Z.Messages.HIDE_SELF_STREAM_CONFIRMATION_HEADER : l.Z.Messages.HIDE_SELF_VIDEO_CONFIRMATION_HEADER, d = n === s.K.STREAM ? l.Z.Messages.HIDE_SELF_STREAM_CONFIRMATION_BODY : l.Z.Messages.HIDE_SELF_VIDEO_CONFIRMATION_BODY;
  return (0, i.jsx)(a.default, {
confirmText: l.Z.Messages.CONFIRM,
secondaryConfirmText: l.Z.Messages.DONT_ASK_AGAIN,
title: u,
cancelText: l.Z.Messages.CANCEL,
onConfirm: t,
onConfirmSecondary: () => {
  r.ZP.updatedUnsyncedSettings({
    disableHideSelfStreamAndVideoConfirmationAlert: !0
  }), t();
},
body: d,
...o
  });
}