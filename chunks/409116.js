s.d(t, {
  F: function() {
return u;
  }
}), s(757143);
var n = s(735250);
s(470079);
var r = s(120356),
  a = s.n(r),
  o = s(481060),
  i = s(937615),
  l = s(884697),
  c = s(793024);
let d = e => e.length > 5 ? e.replace(/\.00$/, '') : e,
  u = e => {
var t;
let {
  price: {
    amount: s,
    currency: r
  },
  renderPrice: u,
  icon: p,
  className: g,
  discount: f = l.f_,
  variant: C = 'heading-md/semibold'
} = e, m = d((0, i.T4)(s, r)), _ = f !== l.f_ && f.discountPercentage >= 5 ? (0, n.jsxs)(n.Fragment, {
  children: [
    m,
    (0, n.jsx)(o.Heading, {
      variant: C,
      color: 'text-positive',
      className: c.discount,
      children: ' (-'.concat(f.discountPercentage, '%)')
    })
  ]
}) : m;
return (0, n.jsx)(n.Fragment, {
  children: (0, n.jsxs)(o.Heading, {
    variant: C,
    className: a()(c.container, g),
    children: [
      p,
      null !== (t = null == u ? void 0 : u(_)) && void 0 !== t ? t : _
    ]
  })
});
  };