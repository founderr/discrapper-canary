"use strict";
s.r(t);
var a = s("735250");
s("470079");
var n = s("73880"),
  i = s("137158"),
  E = s("689938"),
  l = s("915580");
t.default = function(e) {
  let {
    formField: t,
    index: s,
    isDragEnabled: _,
    isDropHovered: r,
    onDrop: u,
    onEdit: o,
    onRemove: T,
    canRemove: d,
    actionsLocation: A
  } = e, {
    label: I,
    placeholder: L
  } = t;
  return (0, a.jsx)(i.default, {
    field: t,
    index: s,
    isDragEnabled: _,
    isDropHovered: r,
    onDrop: u,
    onEdit: o,
    onRemove: T,
    title: I,
    canRemove: d,
    actionsLocation: A,
    children: (0, a.jsx)(n.ParagraphFieldBody, {
      className: l.fieldBackground,
      placeholder: null != L ? L : E.default.Messages.MEMBER_VERIFICATION_ANSWER_PLACEHOLDER,
      disabled: !0
    })
  })
}