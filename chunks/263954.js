l.d(n, {
  Z: function() {
    return a
  }
});
var r = l(735250);
l(470079);
var s = l(120356),
  t = l.n(s),
  o = l(295975);

function a(e) {
  let {
    icon: n,
    iconClassName: l,
    description: s,
    color: a
  } = e;
  return (0, r.jsxs)("div", {
    className: o.perkRow,
    children: [(0, r.jsx)("div", {
      className: o.perkIconContainer,
      children: (0, r.jsx)(n, {
        color: null != a ? a : "currentColor",
        className: t()(o.perkIcon, l)
      })
    }), (0, r.jsx)("div", {
      className: o.perkDescription,
      children: s
    })]
  })
}