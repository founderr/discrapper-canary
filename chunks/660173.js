"use strict";
n.r(t), n.d(t, {
  CategoryTab: function() {
    return c
  }
});
var i = n("735250");
n("470079");
var s = n("557533"),
  l = n.n(s),
  a = n("789978"),
  r = n("777207"),
  o = n("655462");

function c(e) {
  let {
    onClick: t,
    title: n,
    body: s,
    icon: c,
    selected: d,
    disabled: u
  } = e;
  return (0, i.jsx)(a.FocusRing, {
    children: (0, i.jsxs)("button", {
      type: "button",
      onClick: () => {
        !u && t()
      },
      disabled: u,
      className: l()(o.wrapper, {
        [o.selected]: d
      }),
      children: [(0, i.jsx)("div", {
        className: o.icon,
        children: c
      }), (0, i.jsxs)("div", {
        children: [(0, i.jsx)(r.Text, {
          variant: "text-sm/semibold",
          color: "none",
          children: n
        }), (0, i.jsx)(r.Text, {
          variant: "text-xs/normal",
          color: "none",
          children: s
        })]
      })]
    })
  })
}