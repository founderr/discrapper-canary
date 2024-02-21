"use strict";
s.r(t), s.d(t, {
  default: function() {
    return o
  }
});
var T = s("37983");
s("884691");
var l = s("414456"),
  a = s.n(l),
  n = s("77078"),
  r = s("968246");

function o(e) {
  let {
    tips: t,
    className: s,
    headerText: l
  } = e;
  return (0, T.jsxs)("div", {
    className: a(r.tipsSection, s),
    children: [(0, T.jsx)("div", {
      className: r.tipsHeader,
      children: (0, T.jsx)(n.Heading, {
        variant: "heading-lg/bold",
        className: r.headerText,
        children: l
      })
    }), (0, T.jsx)("ul", {
      className: r.tipsList,
      children: t.map((e, t) => (0, T.jsxs)("li", {
        className: r.tipRow,
        children: [(0, T.jsx)(n.Heading, {
          variant: "heading-md/semibold",
          color: "text-brand",
          className: r.tipNumber,
          children: t + 1
        }), (0, T.jsx)(n.Text, {
          variant: "text-sm/medium",
          children: e
        })]
      }, "safety-tips-".concat(t)))
    })]
  })
}