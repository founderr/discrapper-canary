"use strict";
s.r(t), s.d(t, {
  default: function() {
    return d
  }
});
var a = s("37983");
s("884691");
var l = s("446674"),
  n = s("77078"),
  i = s("679653"),
  r = s("42203"),
  o = s("782340");

function d(e) {
  let {
    onConfirm: t,
    onCancel: s,
    channelId: d
  } = e, u = (0, l.useStateFromStores)([r.default], () => null != d ? r.default.getChannel(d) : null), c = (0, i.default)(u, !0);
  return (0, a.jsx)(n.DeclarativeConfirmModal, {
    dismissable: !0,
    header: o.default.Messages.WELCOME_CHANNEL_DELETE_CONFIRM_TITLE,
    confirmText: o.default.Messages.REMOVE,
    cancelText: o.default.Messages.CANCEL,
    onConfirm: t,
    onCancel: s,
    children: (0, a.jsx)(n.Text, {
      variant: "text-sm/normal",
      children: null != u ? o.default.Messages.WELCOME_CHANNEL_DELETE_CONFIRM_BODY.format({
        channelName: c
      }) : o.default.Messages.WELCOME_CHANNEL_DELETE_CONFIRM_BODY_GENERIC
    })
  })
}