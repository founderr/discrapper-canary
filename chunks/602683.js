t(47120);
var n = t(735250),
  i = t(470079),
  a = t(481060);
s.Z = function(e) {
  let {
    assetKey: s,
    initialValue: t,
    onMessageChange: l,
    title: r
  } = e, [o, c] = i.useState("");
  return i.useEffect(() => {
    c(null != t ? t : "")
  }, [t]), (0, n.jsxs)(a.FormItem, {
    children: [(0, n.jsx)(a.FormTitle, {
      tag: a.FormTitleTags.H5,
      children: r
    }), (0, n.jsx)(a.FormText, {
      children: (0, n.jsx)(a.TextInput, {
        value: o,
        onChange: function(e) {
          c(e), l(s, e)
        }
      })
    })]
  })
}