"use strict";
s.r(t), s.d(t, {
  default: function() {
    return r
  }
}), s("47120");
var a = s("735250"),
  n = s("470079"),
  i = s("173511"),
  l = s("481060");

function r() {
  let [e, t] = n.useState("");
  return (0, a.jsxs)(l.FormSection, {
    title: "Text components",
    tag: l.FormTitleTags.H1,
    children: [(0, a.jsx)(l.TextInput, {
      placeholder: "Enter custom text...",
      onChange: e => t(e)
    }), (0, a.jsx)(l.FormDivider, {
      style: {
        margin: "10px 0"
      }
    }), i.TEXT_VARIANT.map(t => "code" === t ? null : (0, a.jsx)(l.Text, {
      variant: t,
      children: "" !== e ? "".concat(e, " (").concat(t, ")") : t
    }, t))]
  })
}