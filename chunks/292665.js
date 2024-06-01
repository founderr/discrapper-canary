"use strict";
l.r(t), l.d(t, {
  default: function() {
    return c
  }
});
var n = l("735250");
l("470079");
var i = l("120356"),
  r = l.n(i),
  a = l("481060"),
  s = l("471731"),
  o = l("533695");

function c(e) {
  let {
    title: t,
    className: l,
    ref: i
  } = e;
  return (0, n.jsxs)("div", {
    className: r()(o.header, l),
    ref: i,
    children: [(0, n.jsx)(s.default, {
      className: o.logo
    }), (0, n.jsx)(a.HeadingLevel, {
      forceLevel: 1,
      children: (0, n.jsx)(a.Heading, {
        className: o.title,
        variant: "heading-md/semibold",
        color: "header-secondary",
        children: t
      })
    })]
  })
}