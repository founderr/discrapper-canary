"use strict";
s.r(t), s.d(t, {
  default: function() {
    return o
  }
});
var n = s("37983");
s("884691");
var a = s("414456"),
  l = s.n(a),
  r = s("77078"),
  T = s("968246");

function o(e) {
  let {
    tips: t,
    className: s,
    headerText: a
  } = e;
  return (0, n.jsxs)("div", {
    className: l(T.tipsSection, s),
    children: [(0, n.jsx)("div", {
      className: T.tipsHeader,
      children: (0, n.jsx)(r.Heading, {
        variant: "heading-lg/bold",
        className: T.headerText,
        children: a
      })
    }), (0, n.jsx)("ul", {
      className: T.tipsList,
      children: t.map((e, t) => (0, n.jsxs)("li", {
        className: T.tipRow,
        children: [(0, n.jsx)(r.Heading, {
          variant: "heading-md/semibold",
          color: "text-brand",
          className: T.tipNumber,
          children: t + 1
        }), (0, n.jsx)(r.Text, {
          variant: "text-sm/medium",
          children: e
        })]
      }, "safety-tips-".concat(t)))
    })]
  })
}