"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
}), n("222007");
var l = n("37983"),
  a = n("884691"),
  s = n("77078"),
  i = n("782340"),
  r = n("417108");

function u(e) {
  let {
    header: t,
    body: n,
    onSubmit: u,
    ...o
  } = e, [d, c] = a.useState(!1);
  return (0, l.jsxs)(s.ConfirmModal, {
    header: t,
    confirmText: i.default.Messages.LEAVE_GROUP_DM,
    cancelText: i.default.Messages.CANCEL,
    onConfirm: () => {
      u(null, d)
    },
    ...o,
    children: [(0, l.jsx)(s.Text, {
      variant: "text-md/normal",
      children: n
    }), (0, l.jsx)(s.Checkbox, {
      type: s.Checkbox.Types.INVERTED,
      value: d,
      onChange: () => c(e => !e),
      className: r.checkbox,
      children: (0, l.jsx)(s.Text, {
        variant: "text-md/normal",
        children: i.default.Messages.LEAVE_GROUP_DM_SILENTLY
      })
    })]
  })
}