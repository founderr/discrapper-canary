"use strict";
l.r(a), l.d(a, {
  default: function() {
    return o
  }
});
var t = l("37983");
l("884691");
var s = l("77078"),
  n = l("461380"),
  i = l("30679");

function o(e) {
  let {
    url: a,
    text: l
  } = e;
  return (0, t.jsx)(s.Anchor, {
    href: a,
    className: i.externalLinkWrapper,
    children: (0, t.jsxs)(s.Clickable, {
      className: i.childButton,
      children: [(0, t.jsx)(s.Text, {
        className: i.childText,
        variant: "text-md/semibold",
        children: l
      }), (0, t.jsx)(n.default, {
        className: i.childIcon,
        direction: n.default.Directions.RIGHT
      })]
    })
  })
}