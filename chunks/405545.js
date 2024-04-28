"use strict";
n.r(t);
var i = n("735250");
n("470079");
var r = n("120356"),
  s = n.n(r),
  a = n("186078"),
  l = n("137158"),
  o = n("17359");
t.default = function(e) {
  let {
    formField: t,
    index: n,
    isDragEnabled: r,
    isDropHovered: u,
    onDrop: c,
    onEdit: d,
    onRemove: f,
    canRemove: p,
    actionsLocation: m
  } = e, {
    label: E
  } = t;
  return (0, i.jsx)(l.default, {
    field: t,
    index: n,
    isDragEnabled: r,
    isDropHovered: u,
    onDrop: c,
    onEdit: d,
    onRemove: f,
    title: E,
    canRemove: p,
    actionsLocation: m,
    children: (0, i.jsx)(a.MultipleChoiceFieldBody, {
      field: t,
      value: void 0,
      radioItemClassName: s()(o.fieldBackground, o.multipleChoiceFixedTextColor),
      disabled: !1
    })
  })
}