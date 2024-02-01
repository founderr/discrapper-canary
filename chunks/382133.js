"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var i = n("37983");
n("884691");
var r = n("421898"),
  l = n.n(r),
  a = n("15542"),
  s = n("760742");

function o(e) {
  let {
    onClick: t,
    title: n,
    body: r,
    icon: o,
    selected: u,
    disabled: c
  } = e;
  return (0, i.jsx)(a.FocusRing, {
    children: (0, i.jsxs)("button", {
      type: "button",
      onClick: () => {
        !c && t()
      },
      disabled: c,
      className: l(s.wrapper, {
        [s.selected]: u
      }),
      children: [(0, i.jsx)("div", {
        className: s.icon,
        children: o
      }), (0, i.jsxs)("div", {
        children: [(0, i.jsx)("div", {
          className: s.title,
          children: n
        }), (0, i.jsx)("div", {
          className: s.body,
          children: r
        })]
      })]
    })
  })
}