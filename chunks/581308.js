"use strict";
a.r(t);
var n = a("735250");
a("470079");
var r = a("882485"),
  s = a("481060"),
  i = a("44264");
t.default = function(e) {
  let {
    message: t
  } = e;
  return (0, n.jsxs)("div", {
    className: i.container,
    children: [(0, n.jsx)(r.CircleInformationIcon, {
      className: i.icon,
      width: 20,
      height: 20,
      color: s.tokens.colors.TEXT_WARNING
    }), (0, n.jsx)(s.Text, {
      variant: "text-sm/normal",
      color: "header-muted",
      children: t
    })]
  })
}