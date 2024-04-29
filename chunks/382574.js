"use strict";
n.r(t);
var i = n("735250");
n("470079");
var r = n("73880"),
  s = n("137158"),
  a = n("689938"),
  l = n("915580");
t.default = function(e) {
  let {
    formField: t,
    index: n,
    isDragEnabled: o,
    isDropHovered: u,
    onDrop: c,
    onEdit: d,
    onRemove: f,
    canRemove: p,
    actionsLocation: m
  } = e, {
    label: E,
    placeholder: I
  } = t;
  return (0, i.jsx)(s.default, {
    field: t,
    index: n,
    isDragEnabled: o,
    isDropHovered: u,
    onDrop: c,
    onEdit: d,
    onRemove: f,
    title: E,
    canRemove: p,
    actionsLocation: m,
    children: (0, i.jsx)(r.ParagraphFieldBody, {
      className: l.fieldBackground,
      placeholder: null != I ? I : a.default.Messages.MEMBER_VERIFICATION_ANSWER_PLACEHOLDER,
      disabled: !0
    })
  })
}