"use strict";
s.r(t);
var n = s("735250");
s("470079");
var a = s("120356"),
  l = s.n(a),
  i = s("481060"),
  r = s("332419");
t.default = e => {
  let {
    icon: t,
    iconClassName: s,
    header: a,
    description: o
  } = e;
  return (0, n.jsxs)("div", {
    className: r.container,
    children: [(0, n.jsx)("div", {
      className: r.circle,
      children: (0, n.jsx)(t, {
        className: l()(r.icon, s),
        width: 20,
        height: 20,
        color: "currentColor"
      })
    }), (0, n.jsxs)("div", {
      children: [(0, n.jsx)(i.Heading, {
        variant: "heading-md/bold",
        className: r.header,
        children: (0, n.jsx)(i.HeadingLevel, {
          children: a
        })
      }), (0, n.jsx)(i.Text, {
        variant: "text-sm/medium",
        color: "text-muted",
        children: o
      })]
    })]
  })
}