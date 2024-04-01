"use strict";
n.r(t);
var s, l, a = n("735250");
n("470079");
var i = n("481060"),
  r = n("285952"),
  o = n("86813"),
  u = n("276400");
(s = l || (l = {})).SMALL = "SMALL", s.MEDIUM = "MEDIUM", s.LARGE = "LARGE";
let d = {
    SMALL: u.dropdownSmall,
    MEDIUM: u.dropdownMedium,
    LARGE: u.dropdownLarge
  },
  c = e => {
    let {
      onDropdownClick: t,
      children: n,
      contentClassName: s,
      dropdownSize: l = "MEDIUM",
      ...c
    } = e;
    return (0, a.jsx)(i.Button, {
      ...c,
      children: (0, a.jsxs)(r.default, {
        align: r.default.Align.CENTER,
        children: [(0, a.jsx)(r.default.Child, {
          className: s,
          children: n
        }), null != t ? (0, a.jsxs)(i.Clickable, {
          className: d[l],
          onClick: e => {
            e.stopPropagation(), null != t && t(e)
          },
          children: [(0, a.jsx)("div", {
            className: u.arrowSeparator
          }), (0, a.jsx)(o.default, {
            className: u.dropdownArrow
          })]
        }) : null]
      })
    })
  };
c.DropdownSizes = l, c.Sizes = i.Button.Sizes, c.Colors = i.Button.Colors, c.Looks = i.Button.Looks, t.default = c