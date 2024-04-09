"use strict";
n.r(t);
var i = n("735250");
n("470079");
var r = n("707592"),
  a = n("137158"),
  s = n("689938"),
  l = n("482249");
t.default = function(e) {
  let {
    formField: t,
    index: n,
    isDragEnabled: o,
    isDropHovered: u,
    onDrop: c,
    onEdit: d,
    onRemove: f,
    canRemove: p
  } = e, {
    label: m,
    placeholder: E
  } = t;
  return (0, i.jsx)(a.default, {
    field: t,
    index: n,
    isDragEnabled: o,
    isDropHovered: u,
    onDrop: c,
    onEdit: d,
    onRemove: f,
    title: m,
    canRemove: p,
    children: (0, i.jsx)(r.TextInputFieldBody, {
      className: l.fieldBackground,
      placeholder: null != E ? E : s.default.Messages.MEMBER_VERIFICATION_ANSWER_PLACEHOLDER,
      disabled: !0
    })
  })
}