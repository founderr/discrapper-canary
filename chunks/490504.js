"use strict";
r.r(t);
var n = r("735250");
r("470079");
var s = r("882485"),
  a = r("481060"),
  i = r("752803");
t.default = function(e) {
  let {
    message: t
  } = e;
  return (0, n.jsxs)("div", {
    className: i.container,
    children: [(0, n.jsx)(s.CircleInformationIcon, {
      className: i.icon,
      width: 20,
      height: 20,
      color: a.tokens.colors.TEXT_WARNING
    }), (0, n.jsx)(a.Text, {
      variant: "text-sm/normal",
      color: "header-muted",
      children: t
    })]
  })
}