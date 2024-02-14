"use strict";
s.r(t), s.d(t, {
  default: function() {
    return d
  }
});
var a = s("37983");
s("884691");
var l = s("414456"),
  n = s.n(l),
  i = s("472850"),
  r = s("933351"),
  o = s("935090"),
  d = function(e) {
    let {
      formField: t,
      index: s,
      isDragEnabled: l,
      isDropHovered: d,
      onDrop: u,
      onEdit: c,
      onRemove: E
    } = e, {
      label: _
    } = t;
    return (0, a.jsx)(r.default, {
      field: t,
      index: s,
      isDragEnabled: l,
      isDropHovered: d,
      onDrop: u,
      onEdit: c,
      onRemove: E,
      title: _,
      children: (0, a.jsx)(i.MultipleChoiceFieldBody, {
        field: t,
        value: void 0,
        radioItemClassName: n(o.fieldBackground, o.multipleChoiceFixedTextColor),
        disabled: !1
      })
    })
  }