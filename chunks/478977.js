var n = t(735250);
t(470079);
var i = t(866442),
  a = t(481060),
  l = t(614771);
s.Z = function(e) {
  let {
    colorKey: s,
    value: t,
    onChange: r,
    title: o
  } = e;
  return (0, n.jsxs)(a.FormItem, {
    children: [(0, n.jsx)(a.FormTitle, {
      tag: a.FormTitleTags.H5,
      children: o
    }), (0, n.jsx)(a.Popout, {
      renderPopout: e => (0, n.jsx)(a.CustomColorPicker, {
        ...e,
        value: t,
        onChange: e => r(s, (0, i.Rf)(e))
      }),
      children: e => (0, n.jsx)(a.Clickable, {
        ...e,
        tag: "span",
        "aria-label": "Select a color",
        className: l.swatchContainer,
        style: {
          backgroundColor: t
        },
        children: (0, n.jsx)(a.EyeDropperIcon, {
          size: "xs",
          color: "currentColor",
          className: l.swatchIcon
        })
      })
    })]
  })
}