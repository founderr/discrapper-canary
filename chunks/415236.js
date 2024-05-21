"use strict";
l.r(t), l.d(t, {
  default: function() {
    return r
  }
});
var s = l("735250");
l("470079");
var a = l("481060"),
  n = l("285952"),
  i = l("482478");

function r(e) {
  let {
    description: t,
    icon: l,
    id: r,
    label: o,
    onChange: d,
    value: u
  } = e;
  return (0, s.jsxs)("div", {
    className: i.cardContent,
    children: [(0, s.jsxs)(n.default, {
      justify: n.default.Justify.BETWEEN,
      align: n.default.Align.CENTER,
      children: [l, (0, s.jsx)(n.default.Child, {
        grow: 1,
        children: (0, s.jsx)(a.Text, {
          variant: "text-md/semibold",
          children: o
        })
      }), null != d && null != u ? (0, s.jsx)(a.Switch, {
        id: r,
        checked: u,
        onChange: d
      }) : null]
    }), (0, s.jsx)(a.Text, {
      variant: "text-xs/normal",
      color: "text-normal",
      className: i.cardDescription,
      children: t
    })]
  })
}