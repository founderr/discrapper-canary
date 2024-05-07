"use strict";
s.r(t);
var a = s("735250");
s("470079");
var n = s("120356"),
  i = s.n(n),
  E = s("186078"),
  l = s("137158"),
  _ = s("915580");
t.default = function(e) {
  let {
    formField: t,
    index: s,
    isDragEnabled: n,
    isDropHovered: r,
    onDrop: u,
    onEdit: o,
    onRemove: T,
    canRemove: d,
    actionsLocation: A
  } = e, {
    label: I
  } = t;
  return (0, a.jsx)(l.default, {
    field: t,
    index: s,
    isDragEnabled: n,
    isDropHovered: r,
    onDrop: u,
    onEdit: o,
    onRemove: T,
    title: I,
    canRemove: d,
    actionsLocation: A,
    children: (0, a.jsx)(E.MultipleChoiceFieldBody, {
      field: t,
      value: void 0,
      radioItemClassName: i()(_.fieldBackground, _.multipleChoiceFixedTextColor),
      disabled: !1
    })
  })
}