"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var i = n("37983");
n("884691");
var r = n("421898"),
  a = n.n(r),
  s = n("15542"),
  l = n("134560");

function o(e) {
  let {
    onClick: t,
    title: n,
    body: r,
    icon: o,
    selected: u,
    disabled: c
  } = e;
  return (0, i.jsx)(s.FocusRing, {
    children: (0, i.jsxs)("button", {
      type: "button",
      onClick: () => {
        !c && t()
      },
      disabled: c,
      className: a(l.wrapper, {
        [l.selected]: u
      }),
      children: [(0, i.jsx)("div", {
        className: l.icon,
        children: o
      }), (0, i.jsxs)("div", {
        children: [(0, i.jsx)("div", {
          className: l.title,
          children: n
        }), (0, i.jsx)("div", {
          className: l.body,
          children: r
        })]
      })]
    })
  })
}