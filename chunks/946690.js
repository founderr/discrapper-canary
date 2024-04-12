"use strict";
a.r(t);
var n = a("735250");
a("470079");
var s = a("803997"),
  l = a.n(s),
  i = a("481060"),
  r = a("343735");
t.default = e => {
  let {
    icon: t,
    iconClassName: a,
    header: s,
    description: o
  } = e;
  return (0, n.jsxs)("div", {
    className: r.container,
    children: [(0, n.jsx)("div", {
      className: r.circle,
      children: (0, n.jsx)(t, {
        className: l()(r.icon, a),
        width: 20,
        height: 20,
        color: "currentColor"
      })
    }), (0, n.jsxs)("div", {
      children: [(0, n.jsx)(i.Heading, {
        variant: "heading-md/bold",
        className: r.header,
        children: (0, n.jsx)(i.HeadingLevel, {
          children: s
        })
      }), (0, n.jsx)(i.Text, {
        variant: "text-sm/medium",
        color: "text-muted",
        children: o
      })]
    })]
  })
}