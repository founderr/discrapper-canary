"use strict";
n.r(t), n.d(t, {
  default: function() {
    return a
  }
});
var i = n("668781"),
  r = n("624138"),
  s = n("689938");

function a(e, t, n, a) {
  var o;
  i.default.show({
    title: s.default.Messages.EMBEDDED_ACTIVITY_CHANGE_CONFIRM_TITLE,
    cancelText: s.default.Messages.CANCEL,
    confirmText: s.default.Messages.CONFIRM,
    onConfirm: n,
    onCancel: a,
    body: s.default.Messages.EMBEDDED_ACTIVITY_CHANGE_ACTIVITY_CONFIRM_BODY.format({
      currentApplicationName: null !== (o = null == e ? void 0 : e.name) && void 0 !== o ? o : s.default.Messages.EMBEDDED_ACTIVITY_CURRENT_APPLICATION_DEFAULT,
      currentApplicationChannelName: (0, r.isNullOrEmpty)(null == t ? void 0 : t.name) ? s.default.Messages.EMBEDDED_ACTIVITY_CURRENT_APPLICATION_CHANNEL_DEFAULT : null == t ? void 0 : t.name
    })
  })
}