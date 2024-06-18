"use strict";
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(481060),
  l = n(316186);
let u = r.memo(function(e) {
  let {
    children: t,
    className: n,
    icon: r,
    isCollapsed: s,
    onClick: u,
    "aria-label": _
  } = e;
  return (0, i.jsx)("div", {
    className: o()(l.wrapper, n),
    children: (0, i.jsxs)(a.Clickable, {
      onClick: u,
      onKeyDown: e => e.stopPropagation(),
      className: o()(l.header, {
        [l.interactive]: null != s
      }),
      "aria-expanded": null != s ? !s : void 0,
      "aria-label": _,
      children: [null != r && (0, i.jsx)("div", {
        "aria-hidden": !0,
        className: l.headerIcon,
        children: r
      }), (0, i.jsx)("span", {
        className: l.headerLabel,
        children: t
      }), null != s ? (0, i.jsx)(a.ChevronSmallDownIcon, {
        size: "custom",
        color: "currentColor",
        className: o()(l.headerCollapseIcon, {
          [l.headerCollapseIconCollapsed]: s
        }),
        height: 16,
        width: 16
      }) : null]
    })
  })
});
t.Z = u