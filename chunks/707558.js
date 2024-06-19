t.d(s, {
  Z: function() {
    return c
  }
});
var n = t(735250);
t(470079);
var i = t(120356),
  a = t.n(i),
  l = t(285952),
  r = t(555582),
  o = t(331651);

function c(e) {
  let {
    features: s
  } = e;
  return (0, n.jsx)(n.Fragment, {
    children: s.map((e, s) => (0, n.jsxs)(l.Z, {
      align: l.Z.Align.CENTER,
      className: a()(o.marginTop20, r.feature, {
        [r.featureBorder]: 0 !== s
      }),
      children: [null != e.icon ? (0, n.jsx)("div", {
        className: a()(r.icon, e.icon)
      }) : null, (0, n.jsxs)("div", {
        children: [null != e.title ? (0, n.jsx)("div", {
          className: a()(o.marginBottom8, r.title),
          children: e.title
        }) : null, (0, n.jsx)("div", {
          className: r.description,
          children: e.description
        })]
      })]
    }, s))
  })
}