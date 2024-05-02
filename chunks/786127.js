"use strict";
n.r(t);
var a = n("735250");
n("470079");
var r = n("707592"),
  i = n("137158"),
  s = n("689938"),
  l = n("915580");
t.default = function(e) {
  let {
    formField: t,
    index: n,
    isDragEnabled: o,
    isDropHovered: c,
    onDrop: d,
    onEdit: u,
    onRemove: f,
    canRemove: m,
    actionsLocation: h
  } = e, {
    label: p,
    placeholder: T
  } = t;
  return (0, a.jsx)(i.default, {
    field: t,
    index: n,
    isDragEnabled: o,
    isDropHovered: c,
    onDrop: d,
    onEdit: u,
    onRemove: f,
    title: p,
    canRemove: m,
    actionsLocation: h,
    children: (0, a.jsx)(r.TextInputFieldBody, {
      className: l.fieldBackground,
      placeholder: null != T ? T : s.default.Messages.MEMBER_VERIFICATION_ANSWER_PLACEHOLDER,
      disabled: !0
    })
  })
}