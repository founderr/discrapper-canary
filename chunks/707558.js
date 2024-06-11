"use strict";
s.r(t), s.d(t, {
  default: function() {
    return d
  }
});
var a = s("735250");
s("470079");
var n = s("120356"),
  i = s.n(n),
  l = s("285952"),
  r = s("592356"),
  o = s("611273");

function d(e) {
  let {
    features: t
  } = e;
  return (0, a.jsx)(a.Fragment, {
    children: t.map((e, t) => (0, a.jsxs)(l.default, {
      align: l.default.Align.CENTER,
      className: i()(o.marginTop20, r.feature, {
        [r.featureBorder]: 0 !== t
      }),
      children: [null != e.icon ? (0, a.jsx)("div", {
        className: i()(r.icon, e.icon)
      }) : null, (0, a.jsxs)("div", {
        children: [null != e.title ? (0, a.jsx)("div", {
          className: i()(o.marginBottom8, r.title),
          children: e.title
        }) : null, (0, a.jsx)("div", {
          className: r.description,
          children: e.description
        })]
      })]
    }, t))
  })
}