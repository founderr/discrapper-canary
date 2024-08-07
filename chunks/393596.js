n(47120);
var i = n(735250),
  a = n(470079),
  s = n(120356),
  r = n.n(s),
  l = n(143927),
  o = n(731965),
  c = n(442837),
  d = n(481060),
  u = n(150192),
  _ = n(706454),
  E = n(683301),
  h = n(540742),
  m = n(143021),
  I = n(768198);

function g(e) {
  let {
loadId: t,
categoryId: n,
count: s
  } = e, E = a.useCallback(() => {
(0, o.j)(() => h.B.setState({
  searchCategoryId: n
})), (0, m.y6)({
  loadId: t,
  categoryId: n
});
  }, [
n,
t
  ]), g = (0, h.B)(e => {
let {
  searchCategoryId: t
} = e;
return t;
  }, l.Z) === n, p = s.toLocaleString(_.default.locale), T = (0, c.e7)([u.Z], () => u.Z.getCategoryName(n));
  return (0, i.jsxs)(d.Clickable, {
onClick: E,
className: r()(I.category, {
  [I.selected]: g
}),
children: [
  (0, i.jsx)(d.Text, {
    className: I.name,
    variant: 'text-sm/medium',
    color: 'header-primary',
    children: T
  }),
  (0, i.jsx)(d.Text, {
    className: I.count,
    variant: 'text-sm/normal',
    color: 'text-muted',
    children: p
  })
]
  });
}
t.Z = function(e) {
  let {
loadId: t
  } = e, n = (0, h.B)(e => {
let {
  searchResultsQuery: t
} = e;
return t;
  }, l.Z), a = (0, c.e7)([E.ZP], () => E.ZP.getTopCategoryCounts(n));
  return null == a ? null : (0, i.jsx)('div', {
className: I.categories,
children: a.map(e => {
  let [n, a] = e;
  return (0, i.jsx)(g, {
    loadId: t,
    categoryId: n,
    count: a
  }, n);
})
  });
};