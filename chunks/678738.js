"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
});
var a = n("735250");
n("470079");
var l = n("481060"),
  s = n("394026");

function i(e) {
  let {
    title: t,
    children: n,
    headingColor: i = "header-secondary"
  } = e;
  return (0, a.jsxs)("section", {
    className: s.section,
    children: [(0, a.jsx)(l.Heading, {
      variant: "text-xs/semibold",
      color: i,
      children: t
    }), n]
  })
}