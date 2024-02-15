"use strict";
a.r(t), a.d(t, {
  default: function() {
    return o
  }
});
var s = a("37983");
a("884691");
var l = a("77078"),
  n = a("461380"),
  i = a("165296");

function o(e) {
  let {
    url: t,
    text: a,
    onClick: o
  } = e;
  return (0, s.jsx)(l.Anchor, {
    href: t,
    onClick: o,
    className: i.externalLinkWrapper,
    children: (0, s.jsxs)(l.Clickable, {
      className: i.childButton,
      children: [(0, s.jsx)(l.Text, {
        className: i.childText,
        variant: "text-md/semibold",
        children: a
      }), (0, s.jsx)(n.default, {
        className: i.childIcon,
        direction: n.default.Directions.RIGHT
      })]
    })
  })
}