n.d(t, {
  Z: function() {
    return o
  }
}), n(47120);
var l = n(735250),
  i = n(470079),
  s = n(481060),
  r = n(689938),
  a = n(995794);

function o(e) {
  let {
    header: t,
    body: n,
    onSubmit: o,
    ...u
  } = e, [c, d] = i.useState(!1);
  return (0, l.jsxs)(s.ConfirmModal, {
    header: t,
    confirmText: r.Z.Messages.LEAVE_GROUP_DM,
    cancelText: r.Z.Messages.CANCEL,
    onConfirm: () => {
      o(null, c)
    },
    ...u,
    children: [(0, l.jsx)(s.Text, {
      variant: "text-md/normal",
      children: n
    }), (0, l.jsx)(s.Checkbox, {
      type: s.Checkbox.Types.INVERTED,
      value: c,
      onChange: () => d(e => !e),
      className: a.checkbox,
      children: (0, l.jsx)(s.Text, {
        variant: "text-md/normal",
        children: r.Z.Messages.LEAVE_GROUP_DM_SILENTLY
      })
    })]
  })
}