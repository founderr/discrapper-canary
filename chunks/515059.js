"use strict";
i.r(t), i.d(t, {
  default: function() {
    return d
  }
});
var n = i("37983"),
  s = i("884691"),
  l = i("414456"),
  r = i.n(l),
  a = i("77078"),
  o = i("256170"),
  u = i("572935");
let c = s.memo(function(e) {
  let {
    children: t,
    className: i,
    icon: s,
    isCollapsed: l,
    onClick: c,
    "aria-label": d
  } = e;
  return (0, n.jsx)("div", {
    className: r(u.wrapper, i),
    children: (0, n.jsxs)(a.Clickable, {
      onClick: c,
      onKeyDown: e => e.stopPropagation(),
      className: r(u.header, {
        [u.interactive]: null != l
      }),
      "aria-expanded": null != l ? !l : void 0,
      "aria-label": d,
      children: [null != s && (0, n.jsx)("div", {
        "aria-hidden": !0,
        className: u.headerIcon,
        children: s
      }), (0, n.jsx)("span", {
        className: u.headerLabel,
        children: t
      }), null != l ? (0, n.jsx)(o.default, {
        className: r(u.headerCollapseIcon, {
          [u.headerCollapseIconCollapsed]: l
        }),
        height: 16,
        width: 16
      }) : null]
    })
  })
});
var d = c