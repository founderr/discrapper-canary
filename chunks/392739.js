"use strict";
a.r(t), a.d(t, {
  default: function() {
    return i
  }
});
var s = a("735250");
a("470079");
var l = a("481060"),
  n = a("967154");

function i(e) {
  let {
    children: t,
    label: a
  } = e;
  return (0, s.jsxs)("li", {
    children: [(0, s.jsx)(l.Text, {
      variant: "text-xs/semibold",
      color: "header-secondary",
      className: n.benefitLabel,
      children: a
    }), (0, s.jsx)(l.Spacer, {
      size: 12
    }), t]
  })
}