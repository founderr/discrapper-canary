var a = t(735250);
t(470079);
var r = t(707592),
  s = t(137158),
  i = t(689938),
  l = t(237261);
n.Z = function(e) {
  let {
    formField: n,
    index: t,
    isDragEnabled: o,
    isDropHovered: c,
    onDrop: d,
    onEdit: u,
    onRemove: m,
    canRemove: h,
    actionsLocation: C
  } = e, {
    label: x,
    placeholder: f
  } = n;
  return (0, a.jsx)(s.Z, {
    field: n,
    index: t,
    isDragEnabled: o,
    isDropHovered: c,
    onDrop: d,
    onEdit: u,
    onRemove: m,
    title: x,
    canRemove: h,
    actionsLocation: C,
    children: (0, a.jsx)(r.Gi, {
      className: l.fieldBackground,
      placeholder: null != f ? f : i.Z.Messages.MEMBER_VERIFICATION_ANSWER_PLACEHOLDER,
      disabled: !0
    })
  })
}