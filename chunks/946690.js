"use strict";
s.r(t);
var a = s("735250");
s("470079");
var n = s("120356"),
  l = s.n(n),
  i = s("481060"),
  r = s("332419");
t.default = e => {
  let {
    icon: t,
    iconClassName: s,
    header: n,
    description: u
  } = e;
  return (0, a.jsxs)("div", {
    className: r.container,
    children: [(0, a.jsx)("div", {
      className: r.circle,
      children: (0, a.jsx)(t, {
        className: l()(r.icon, s),
        width: 20,
        height: 20,
        color: "currentColor"
      })
    }), (0, a.jsxs)("div", {
      children: [(0, a.jsx)(i.Heading, {
        variant: "heading-md/bold",
        className: r.header,
        children: (0, a.jsx)(i.HeadingLevel, {
          children: n
        })
      }), (0, a.jsx)(i.Text, {
        variant: "text-sm/medium",
        color: "text-muted",
        children: u
      })]
    })]
  })
}