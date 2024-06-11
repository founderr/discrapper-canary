"use strict";
s.r(t), s("47120");
var a = s("735250"),
  n = s("470079"),
  i = s("481060");
t.default = function(e) {
  let {
    assetKey: t,
    initialValue: s,
    onMessageChange: l,
    title: r
  } = e, [o, d] = n.useState("");
  return n.useEffect(() => {
    d(null != s ? s : "")
  }, [s]), (0, a.jsxs)(i.FormItem, {
    children: [(0, a.jsx)(i.FormTitle, {
      tag: i.FormTitleTags.H5,
      children: r
    }), (0, a.jsx)(i.FormText, {
      children: (0, a.jsx)(i.TextInput, {
        value: o,
        onChange: function(e) {
          d(e), l(t, e)
        }
      })
    })]
  })
}