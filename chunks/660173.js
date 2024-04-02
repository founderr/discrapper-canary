"use strict";
n.r(t), n.d(t, {
  CategoryTab: function() {
    return c
  }
});
var i = n("735250");
n("470079");
var l = n("557533"),
  r = n.n(l),
  s = n("789978"),
  a = n("777207"),
  o = n("655462");

function c(e) {
  let {
    onClick: t,
    title: n,
    body: l,
    icon: c,
    selected: d,
    disabled: u
  } = e;
  return (0, i.jsx)(s.FocusRing, {
    children: (0, i.jsxs)("button", {
      type: "button",
      onClick: () => {
        !u && t()
      },
      disabled: u,
      className: r()(o.wrapper, {
        [o.selected]: d
      }),
      children: [(0, i.jsx)("div", {
        className: o.icon,
        children: c
      }), (0, i.jsxs)("div", {
        children: [(0, i.jsx)(a.Text, {
          variant: "text-sm/semibold",
          color: "none",
          children: n
        }), (0, i.jsx)(a.Text, {
          variant: "text-xs/normal",
          color: "none",
          children: l
        })]
      })]
    })
  })
}