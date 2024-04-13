"use strict";
i.r(t);
var n = i("735250");
i("470079");
var r = i("73880"),
  s = i("137158"),
  a = i("689938"),
  l = i("482249");
t.default = function(e) {
  let {
    formField: t,
    index: i,
    isDragEnabled: o,
    isDropHovered: u,
    onDrop: c,
    onEdit: d,
    onRemove: f,
    canRemove: p
  } = e, {
    label: C,
    placeholder: m
  } = t;
  return (0, n.jsx)(s.default, {
    field: t,
    index: i,
    isDragEnabled: o,
    isDropHovered: u,
    onDrop: c,
    onEdit: d,
    onRemove: f,
    title: C,
    canRemove: p,
    children: (0, n.jsx)(r.ParagraphFieldBody, {
      className: l.fieldBackground,
      placeholder: null != m ? m : a.default.Messages.MEMBER_VERIFICATION_ANSWER_PLACEHOLDER,
      disabled: !0
    })
  })
}