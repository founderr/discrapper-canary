n.d(t, {
  Y: function() {
return a;
  }
});
var i, a, s = n(735250),
  r = n(470079),
  l = n(120356),
  o = n.n(l),
  c = n(325175);
(i = a || (a = {})).PREMIUM = 'premium', i.LIMITED = 'limited';
let d = {
  premium: {
border: c.premiumFeatureBorder,
background: c.premiumBackground
  },
  limited: {
border: c.limitedFeatureBorder,
background: c.limitedBackground
  }
};
t.Z = r.forwardRef(function(e, t) {
  let {
children: n,
type: i = 'premium',
isShown: a,
hasBackground: r = !1,
className: l,
backgroundClassName: u
  } = e;
  if (!a)
return (0, s.jsx)(s.Fragment, {
  children: n
});
  let {
border: _,
background: E
  } = d[i];
  return (0, s.jsx)('div', {
ref: t,
className: o()(_, l),
children: (0, s.jsx)('div', {
  className: o()(r ? E : c.background, u),
  children: n
})
  });
});