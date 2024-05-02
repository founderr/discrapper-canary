"use strict";
n.r(t);
var a = n("735250");
n("470079");
var r = n("707592"),
  s = n("137158"),
  i = n("689938"),
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
    placeholder: E
  } = t;
  return (0, a.jsx)(s.default, {
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
      placeholder: null != E ? E : i.default.Messages.MEMBER_VERIFICATION_ANSWER_PLACEHOLDER,
      disabled: !0
    })
  })
}