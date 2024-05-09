"use strict";
n.r(t);
var a = n("735250");
n("470079");
var r = n("120356"),
  s = n.n(r),
  i = n("186078"),
  l = n("137158"),
  o = n("17359");
t.default = function(e) {
  let {
    formField: t,
    index: n,
    isDragEnabled: r,
    isDropHovered: c,
    onDrop: d,
    onEdit: u,
    onRemove: f,
    canRemove: m,
    actionsLocation: h
  } = e, {
    label: p
  } = t;
  return (0, a.jsx)(l.default, {
    field: t,
    index: n,
    isDragEnabled: r,
    isDropHovered: c,
    onDrop: d,
    onEdit: u,
    onRemove: f,
    title: p,
    canRemove: m,
    actionsLocation: h,
    children: (0, a.jsx)(i.MultipleChoiceFieldBody, {
      field: t,
      value: void 0,
      radioItemClassName: s()(o.fieldBackground, o.multipleChoiceFixedTextColor),
      disabled: !1
    })
  })
}