n.r(s), n.d(s, {
  default: function() {
    return d
  }
}), n(47120);
var t = n(735250),
  a = n(470079),
  o = n(481060),
  r = n(153867),
  c = n(689938),
  i = n(952085);

function d(e) {
  let {
    onSubmit: s,
    onClose: n,
    ...d
  } = e, [l, C] = a.useState(!1);
  return (0, t.jsxs)(o.ConfirmModal, {
    header: c.Z.Messages.CALL_USER_PROMPT_HEADER,
    confirmButtonColor: o.Button.Colors.GREEN,
    confirmText: c.Z.Messages.CALL_USER_CONFIRM,
    cancelText: c.Z.Messages.CANCEL,
    onConfirm: s,
    onClose: () => (l && r.ZP.updatedUnsyncedSettings({
      disableCallUserConfirmationPrompt: !0
    }), n()),
    ...d,
    children: [(0, t.jsx)(o.Text, {
      variant: "text-md/normal",
      children: c.Z.Messages.CALL_USER_PROMPT
    }), (0, t.jsx)(o.Checkbox, {
      type: o.Checkbox.Types.INVERTED,
      value: l,
      onChange: (e, s) => C(s),
      className: i.checkbox,
      children: (0, t.jsx)(o.Text, {
        variant: "text-md/normal",
        children: c.Z.Messages.DONT_ASK_AGAIN
      })
    })]
  })
}