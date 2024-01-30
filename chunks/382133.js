"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
});
var i = n("37983");
n("884691");
var r = n("421898"),
  l = n.n(r),
  a = n("15542"),
  o = n("760742");

function s(e) {
  let {
    onClick: t,
    title: n,
    body: r,
    icon: s,
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
      className: l(o.wrapper, {
        [o.selected]: u
      }),
      children: [(0, i.jsx)("div", {
        className: o.icon,
        children: s
      }), (0, i.jsxs)("div", {
        children: [(0, i.jsx)("div", {
          className: o.title,
          children: n
        }), (0, i.jsx)("div", {
          className: o.body,
          children: r
        })]
      })]
    })
  })
}