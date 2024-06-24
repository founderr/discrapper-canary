var a = t(735250);
t(470079);
var r = t(120356),
  s = t.n(r),
  i = t(186078),
  l = t(137158),
  o = t(237261);
n.Z = function(e) {
  let {
    formField: n,
    index: t,
    isDragEnabled: r,
    isDropHovered: c,
    onDrop: d,
    onEdit: u,
    onRemove: m,
    canRemove: h,
    actionsLocation: C
  } = e, {
    label: x
  } = n;
  return (0, a.jsx)(l.Z, {
    field: n,
    index: t,
    isDragEnabled: r,
    isDropHovered: c,
    onDrop: d,
    onEdit: u,
    onRemove: m,
    title: x,
    canRemove: h,
    actionsLocation: C,
    children: (0, a.jsx)(i.BO, {
      field: n,
      value: void 0,
      radioItemClassName: s()(o.fieldBackground, o.multipleChoiceFixedTextColor),
      disabled: !1
    })
  })
}