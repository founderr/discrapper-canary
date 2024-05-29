"use strict";
s.r(t);
var a = s("735250");
s("470079");
var r = s("882485"),
  l = s("481060"),
  i = s("44264");
t.default = function(e) {
  let {
    message: t
  } = e;
  return (0, a.jsxs)("div", {
    className: i.container,
    children: [(0, a.jsx)(r.CircleInformationIcon, {
      className: i.icon,
      width: 20,
      height: 20,
      color: l.tokens.colors.TEXT_WARNING
    }), (0, a.jsx)(l.Text, {
      variant: "text-sm/normal",
      color: "header-muted",
      children: t
    })]
  })
}