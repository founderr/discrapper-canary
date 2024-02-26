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
  T = s("77078"),
  r = s("968246");

function o(e) {
  let {
    tips: t,
    className: s,
    headerText: a
  } = e;
  return (0, n.jsxs)("div", {
    className: l(r.tipsSection, s),
    children: [(0, n.jsx)("div", {
      className: r.tipsHeader,
      children: (0, n.jsx)(T.Heading, {
        variant: "heading-lg/bold",
        className: r.headerText,
        children: a
      })
    }), (0, n.jsx)("ul", {
      className: r.tipsList,
      children: t.map((e, t) => (0, n.jsxs)("li", {
        className: r.tipRow,
        children: [(0, n.jsx)(T.Heading, {
          variant: "heading-md/semibold",
          color: "text-brand",
          className: r.tipNumber,
          children: t + 1
        }), (0, n.jsx)(T.Text, {
          variant: "text-sm/medium",
          children: e
        })]
      }, "safety-tips-".concat(t)))
    })]
  })
}