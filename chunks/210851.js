t(47120);
var n = t(735250),
  i = t(470079),
  a = t(481060),
  l = t(763610),
  r = t(614771);
s.Z = function(e) {
  var s, t;
  let {
    assetKey: o,
    filters: c,
    initialValue: E,
    onFileChange: d,
    title: _
  } = e, [T, S] = i.useState(null), [u, I] = i.useState(!1);
  return (0, n.jsxs)(a.FormItem, {
    children: [(0, n.jsx)(a.FormTitle, {
      tag: a.FormTitleTags.H5,
      children: (0, n.jsxs)("div", {
        className: r.headingWithTooltip,
        children: [_, (0, n.jsx)(a.Tooltip, {
          text: "Supported asset formats: ".concat(c.join(", ")),
          children: e => (0, n.jsx)(a.CircleInformationIcon, {
            size: "xs",
            ...e
          })
        })]
      })
    }), (0, n.jsx)(l.Z, {
      filename: null !== (t = null !== (s = null == T ? void 0 : T.name) && void 0 !== s ? s : E) && void 0 !== t ? t : "",
      filters: [{
        name: _,
        extensions: c
      }],
      buttonText: "Browse",
      placeholder: "Select an asset",
      onFileSelect: function(e) {
        if (S(null != e ? e : null), null == e) return;
        I(!0);
        let s = new FileReader;
        s.onload = function() {
          "string" == typeof s.result && (d(o, s.result), I(!1))
        }, s.onerror = function(e) {
          console.error(e)
        }, s.readAsDataURL(e)
      }
    })]
  })
}