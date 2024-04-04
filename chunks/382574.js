"use strict";
i.r(t);
var a = i("735250");
i("470079");
var l = i("73880"),
  n = i("137158"),
  s = i("689938"),
  r = i("482249");
t.default = function(e) {
  let {
    formField: t,
    index: i,
    isDragEnabled: o,
    isDropHovered: d,
    onDrop: c,
    onEdit: u,
    onRemove: f,
    canRemove: m
  } = e, {
    label: E,
    placeholder: I
  } = t;
  return (0, a.jsx)(n.default, {
    field: t,
    index: i,
    isDragEnabled: o,
    isDropHovered: d,
    onDrop: c,
    onEdit: u,
    onRemove: f,
    title: E,
    canRemove: m,
    children: (0, a.jsx)(l.ParagraphFieldBody, {
      className: r.fieldBackground,
      placeholder: null != I ? I : s.default.Messages.MEMBER_VERIFICATION_ANSWER_PLACEHOLDER,
      disabled: !0
    })
  })
}