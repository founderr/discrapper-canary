"use strict";
t.d(s, {
  Z: function() {
    return o
  }
});
var n = t(735250);
t(470079);
var i = t(481060),
  l = t(259580),
  a = t(689938),
  r = t(837773);

function o(e) {
  let {
    role: s,
    onClick: t
  } = e;
  return (0, n.jsxs)(i.Clickable, {
    className: r.container,
    onClick: t,
    children: [(0, n.jsx)("div", {
      className: r.icon,
      children: (0, n.jsx)(i.GroupIcon, {
        size: "custom",
        color: "currentColor",
        width: 20,
        height: 20
      })
    }), (0, n.jsxs)("div", {
      className: r.description,
      children: [(0, n.jsx)(i.Text, {
        className: r.label,
        color: "none",
        variant: "text-md/bold",
        children: a.Z.Messages.ROLE_EVERYONE_LABEL
      }), (0, n.jsxs)(i.Text, {
        color: "none",
        variant: "text-xs/normal",
        children: [s.name, " • ", a.Z.Messages.ROLE_EVERYONE_DESCRIPTION]
      })]
    }), (0, n.jsx)(l.Z, {
      className: r.arrow,
      direction: l.Z.Directions.RIGHT
    })]
  })
}