"use strict";
s.r(t);
var a = s("735250");
s("470079");
var n = s("866442"),
  i = s("481060"),
  l = s("214623"),
  r = s("975266");
t.default = function(e) {
  let {
    colorKey: t,
    value: s,
    onChange: o,
    title: d
  } = e;
  return (0, a.jsxs)(i.FormItem, {
    children: [(0, a.jsx)(i.FormTitle, {
      tag: i.FormTitleTags.H5,
      children: d
    }), (0, a.jsx)(i.Popout, {
      renderPopout: e => (0, a.jsx)(i.CustomColorPicker, {
        ...e,
        value: s,
        onChange: e => o(t, (0, n.int2hex)(e))
      }),
      children: e => (0, a.jsx)(i.Clickable, {
        ...e,
        tag: "span",
        "aria-label": "Select a color",
        className: r.swatchContainer,
        style: {
          backgroundColor: s
        },
        children: (0, a.jsx)(l.default, {
          width: 16,
          height: 16,
          className: r.swatchIcon
        })
      })
    })]
  })
}