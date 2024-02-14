"use strict";
s.r(t), s.d(t, {
  default: function() {
    return l
  }
});
var n = s("37983");
s("884691");
var o = s("414456"),
  a = s.n(o),
  r = s("77078"),
  i = s("968246");

function l(e) {
  let {
    tips: t,
    className: s,
    headerText: o
  } = e;
  return (0, n.jsxs)("div", {
    className: a(i.tipsSection, s),
    children: [(0, n.jsx)("div", {
      className: i.tipsHeader,
      children: (0, n.jsx)(r.Heading, {
        variant: "heading-lg/bold",
        className: i.headerText,
        children: o
      })
    }), (0, n.jsx)("ul", {
      className: i.tipsList,
      children: t.map((e, t) => (0, n.jsxs)("li", {
        className: i.tipRow,
        children: [(0, n.jsx)(r.Heading, {
          variant: "heading-md/semibold",
          color: "text-brand",
          className: i.tipNumber,
          children: t + 1
        }), (0, n.jsx)(r.Text, {
          variant: "text-sm/medium",
          children: e
        })]
      }, "safety-tips-".concat(t)))
    })]
  })
}