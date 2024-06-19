t.d(n, {
  Y: function() {
    return l
  }
});
var i, l, s = t(735250),
  r = t(470079),
  a = t(120356),
  o = t.n(a),
  u = t(11519);
(i = l || (l = {})).PREMIUM = "premium", i.LIMITED = "limited";
let c = {
  premium: {
    border: u.premiumFeatureBorder,
    background: u.premiumBackground
  },
  limited: {
    border: u.limitedFeatureBorder,
    background: u.limitedBackground
  }
};
n.Z = r.forwardRef(function(e, n) {
  let {
    children: t,
    type: i = "premium",
    isShown: l,
    hasBackground: r = !1,
    className: a,
    backgroundClassName: d
  } = e;
  if (!l) return (0, s.jsx)(s.Fragment, {
    children: t
  });
  let {
    border: _,
    background: I
  } = c[i];
  return (0, s.jsx)("div", {
    ref: n,
    className: o()(_, a),
    children: (0, s.jsx)("div", {
      className: o()(r ? I : u.background, d),
      children: t
    })
  })
})