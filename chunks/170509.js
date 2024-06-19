n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var l = n(735250);
n(470079);
var i = n(481060),
  s = n(933557),
  r = n(689938),
  a = n(101212);

function o(e) {
  let {
    channel: t,
    category: n,
    ...o
  } = e, u = (0, s.ZP)(t, !0), c = (0, s.ZP)(n);
  return (0, l.jsx)(i.ConfirmModal, {
    header: r.Z.Messages.CONFIRM_CHANNEL_DRAG_TITLE,
    confirmText: r.Z.Messages.SYNC_PERMISSIONS,
    cancelText: r.Z.Messages.KEEP_PERMISSIONS,
    confirmButtonColor: i.Button.Colors.BRAND,
    ...o,
    children: (0, l.jsx)(i.Text, {
      variant: "text-md/normal",
      className: a.message,
      selectable: !1,
      children: r.Z.Messages.SYNC_PERMISSIONS_EXPLANATION.format({
        channelName: u,
        categoryName: c
      })
    })
  })
}