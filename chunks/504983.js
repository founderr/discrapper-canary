t.d(n, {
  Y: function() {
    return r
  }
});
var l, r, i = t(735250),
  o = t(470079),
  a = t(120356),
  s = t.n(a),
  d = t(11519);
(l = r || (r = {})).PREMIUM = "premium", l.LIMITED = "limited";
let u = {
  premium: {
    border: d.premiumFeatureBorder,
    background: d.premiumBackground
  },
  limited: {
    border: d.limitedFeatureBorder,
    background: d.limitedBackground
  }
};
n.Z = o.forwardRef(function(e, n) {
  let {
    children: t,
    type: l = "premium",
    isShown: r,
    hasBackground: o = !1,
    className: a,
    backgroundClassName: c
  } = e;
  if (!r) return (0, i.jsx)(i.Fragment, {
    children: t
  });
  let {
    border: h,
    background: f
  } = u[l];
  return (0, i.jsx)("div", {
    ref: n,
    className: s()(h, a),
    children: (0, i.jsx)("div", {
      className: s()(o ? f : d.background, c),
      children: t
    })
  })
})