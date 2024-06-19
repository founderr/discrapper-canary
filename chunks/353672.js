t.d(n, {
  Z: function() {
    return c
  }
});
var s = t(735250);
t(470079);
var o = t(120356),
  r = t.n(o),
  a = t(481060),
  i = t(583427);

function c(e) {
  let {
    tips: n,
    className: t,
    headerText: o
  } = e;
  return (0, s.jsxs)("div", {
    className: r()(i.tipsSection, t),
    children: [(0, s.jsx)("div", {
      className: i.tipsHeader,
      children: (0, s.jsx)(a.Heading, {
        variant: "heading-lg/bold",
        className: i.headerText,
        children: o
      })
    }), (0, s.jsx)("ul", {
      className: i.tipsList,
      children: n.map((e, n) => (0, s.jsxs)("li", {
        className: i.tipRow,
        children: [(0, s.jsx)(a.Heading, {
          variant: "heading-md/semibold",
          color: "text-brand",
          className: i.tipNumber,
          children: n + 1
        }), (0, s.jsx)(a.Text, {
          variant: "text-sm/medium",
          children: e
        })]
      }, "safety-tips-".concat(n)))
    })]
  })
}