"use strict";
a.r(t);
var n = a("735250");
a("470079");
var r = a("120356"),
  i = a.n(r),
  s = a("186078"),
  l = a("137158"),
  o = a("17359");
t.default = function(e) {
  let {
    formField: t,
    index: a,
    isDragEnabled: r,
    isDropHovered: d,
    onDrop: c,
    onEdit: u,
    onRemove: f,
    canRemove: m,
    actionsLocation: E
  } = e, {
    label: h
  } = t;
  return (0, n.jsx)(l.default, {
    field: t,
    index: a,
    isDragEnabled: r,
    isDropHovered: d,
    onDrop: c,
    onEdit: u,
    onRemove: f,
    title: h,
    canRemove: m,
    actionsLocation: E,
    children: (0, n.jsx)(s.MultipleChoiceFieldBody, {
      field: t,
      value: void 0,
      radioItemClassName: i()(o.fieldBackground, o.multipleChoiceFixedTextColor),
      disabled: !1
    })
  })
}