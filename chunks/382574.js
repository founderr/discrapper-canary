"use strict";
a.r(t);
var n = a("735250");
a("470079");
var r = a("73880"),
  i = a("137158"),
  s = a("689938"),
  l = a("915580");
t.default = function(e) {
  let {
    formField: t,
    index: a,
    isDragEnabled: o,
    isDropHovered: c,
    onDrop: d,
    onEdit: u,
    onRemove: f,
    canRemove: m,
    actionsLocation: h
  } = e, {
    label: E,
    placeholder: T
  } = t;
  return (0, n.jsx)(i.default, {
    field: t,
    index: a,
    isDragEnabled: o,
    isDropHovered: c,
    onDrop: d,
    onEdit: u,
    onRemove: f,
    title: E,
    canRemove: m,
    actionsLocation: h,
    children: (0, n.jsx)(r.ParagraphFieldBody, {
      className: l.fieldBackground,
      placeholder: null != T ? T : s.default.Messages.MEMBER_VERIFICATION_ANSWER_PLACEHOLDER,
      disabled: !0
    })
  })
}