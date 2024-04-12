"use strict";
n.r(t);
var i = n("735250");
n("470079");
var r = n("803997"),
  s = n.n(r),
  a = n("186078"),
  l = n("137158"),
  o = n("482249");
t.default = function(e) {
  let {
    formField: t,
    index: n,
    isDragEnabled: r,
    isDropHovered: u,
    onDrop: c,
    onEdit: d,
    onRemove: f,
    canRemove: p
  } = e, {
    label: m
  } = t;
  return (0, i.jsx)(l.default, {
    field: t,
    index: n,
    isDragEnabled: r,
    isDropHovered: u,
    onDrop: c,
    onEdit: d,
    onRemove: f,
    title: m,
    canRemove: p,
    children: (0, i.jsx)(a.MultipleChoiceFieldBody, {
      field: t,
      value: void 0,
      radioItemClassName: s()(o.fieldBackground, o.multipleChoiceFixedTextColor),
      disabled: !1
    })
  })
}