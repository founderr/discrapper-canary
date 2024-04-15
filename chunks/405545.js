"use strict";
i.r(t);
var n = i("735250");
i("470079");
var r = i("120356"),
  s = i.n(r),
  a = i("186078"),
  l = i("137158"),
  o = i("482249");
t.default = function(e) {
  let {
    formField: t,
    index: i,
    isDragEnabled: r,
    isDropHovered: u,
    onDrop: c,
    onEdit: d,
    onRemove: f,
    canRemove: p
  } = e, {
    label: C
  } = t;
  return (0, n.jsx)(l.default, {
    field: t,
    index: i,
    isDragEnabled: r,
    isDropHovered: u,
    onDrop: c,
    onEdit: d,
    onRemove: f,
    title: C,
    canRemove: p,
    children: (0, n.jsx)(a.MultipleChoiceFieldBody, {
      field: t,
      value: void 0,
      radioItemClassName: s()(o.fieldBackground, o.multipleChoiceFixedTextColor),
      disabled: !1
    })
  })
}