"use strict";
s.r(t), s.d(t, {
  default: function() {
    return o
  }
});
var a = s("37983");
s("884691");
var l = s("414456"),
  n = s.n(l),
  T = s("77078"),
  r = s("968246");

function o(e) {
  let {
    tips: t,
    className: s,
    headerText: l
  } = e;
  return (0, a.jsxs)("div", {
    className: n(r.tipsSection, s),
    children: [(0, a.jsx)("div", {
      className: r.tipsHeader,
      children: (0, a.jsx)(T.Heading, {
        variant: "heading-lg/bold",
        className: r.headerText,
        children: l
      })
    }), (0, a.jsx)("ul", {
      className: r.tipsList,
      children: t.map((e, t) => (0, a.jsxs)("li", {
        className: r.tipRow,
        children: [(0, a.jsx)(T.Heading, {
          variant: "heading-md/semibold",
          color: "text-brand",
          className: r.tipNumber,
          children: t + 1
        }), (0, a.jsx)(T.Text, {
          variant: "text-sm/medium",
          children: e
        })]
      }, "safety-tips-".concat(t)))
    })]
  })
}