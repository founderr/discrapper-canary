"use strict";
n.r(t), n.d(t, {
  openStopBroadcastConfirmModal: function() {
    return l
  },
  openStartBroadcastConfirmModal: function() {
    return u
  }
});
var a = n("37983");
n("884691");
var r = n("77078"),
  i = n("713726"),
  s = n("782340");

function l(e) {
  (0, r.openModal)(t => (0, a.jsx)(r.ConfirmModal, {
    header: s.default.Messages.STOP_STREAMING,
    confirmText: s.default.Messages.STOP_STREAMING,
    cancelText: s.default.Messages.CANCEL,
    onConfirm: () => {
      (0, i.stopBroadcast)(), e()
    },
    ...t,
    children: (0, a.jsx)(r.Text, {
      variant: "text-md/normal",
      children: s.default.Messages.BROADCASTING_STOP_STREAM_CONFIRM_BODY
    })
  }))
}

function u(e) {
  (0, r.openModal)(t => (0, a.jsx)(r.ConfirmModal, {
    header: s.default.Messages.START_STREAMING,
    confirmText: s.default.Messages.START_STREAMING,
    cancelText: s.default.Messages.CANCEL,
    onConfirm: e,
    confirmButtonColor: r.Button.Colors.BRAND,
    ...t,
    children: (0, a.jsx)(r.Text, {
      variant: "text-md/normal",
      children: s.default.Messages.BROADCASTING_START_STREAM_CONFIRM_BODY
    })
  }))
}