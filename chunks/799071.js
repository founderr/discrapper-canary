t.d(s, {
  Z: function() {
    return r
  }
}), t(47120);
var n = t(735250),
  i = t(470079),
  a = t(173511),
  l = t(481060);

function r() {
  let [e, s] = i.useState("");
  return (0, n.jsxs)(l.FormSection, {
    title: "Text components",
    tag: l.FormTitleTags.H1,
    children: [(0, n.jsx)(l.TextInput, {
      placeholder: "Enter custom text...",
      onChange: e => s(e)
    }), (0, n.jsx)(l.FormDivider, {
      style: {
        margin: "10px 0"
      }
    }), a.O.map(s => "code" === s ? null : (0, n.jsx)(l.Text, {
      variant: s,
      children: "" !== e ? "".concat(e, " (").concat(s, ")") : s
    }, s))]
  })
}