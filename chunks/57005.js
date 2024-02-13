"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var l = n("37983");
n("884691");
var a = n("77078"),
  s = n("679653"),
  i = n("782340"),
  r = n("21893");

function o(e) {
  let {
    channel: t,
    category: n,
    ...o
  } = e, u = (0, s.default)(t, !0), d = (0, s.default)(n);
  return (0, l.jsx)(a.ConfirmModal, {
    header: i.default.Messages.CONFIRM_CHANNEL_DRAG_TITLE,
    confirmText: i.default.Messages.SYNC_PERMISSIONS,
    cancelText: i.default.Messages.KEEP_PERMISSIONS,
    confirmButtonColor: a.Button.Colors.BRAND,
    ...o,
    children: (0, l.jsx)(a.Text, {
      variant: "text-md/normal",
      className: r.message,
      selectable: !1,
      children: i.default.Messages.SYNC_PERMISSIONS_EXPLANATION.format({
        channelName: u,
        categoryName: d
      })
    })
  })
}