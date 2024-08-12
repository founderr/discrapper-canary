n.d(t, {
  Z: function() {
return g;
  }
}), n(47120);
var i = n(735250),
  a = n(470079),
  s = n(143927),
  r = n(442837),
  l = n(481060),
  o = n(150192),
  c = n(706454),
  d = n(540742),
  u = n(89182),
  _ = n(740474),
  E = n(393596),
  h = n(689938),
  m = n(90615);

function I(e) {
  let {
count: t,
categoryId: n
  } = e, a = t.toLocaleString(c.default.locale), s = (0, r.e7)([o.Z], () => o.Z.getCategoryName(n));
  return (0, i.jsxs)('div', {
className: m.label,
children: [
  (0, i.jsx)(l.Text, {
    variant: 'text-sm/medium',
    color: 'header-primary',
    children: s
  }),
  (0, i.jsx)(l.Text, {
    variant: 'text-sm/normal',
    color: 'text-muted',
    children: a
  })
]
  });
}

function g(e) {
  let {
loadId: t
  } = e, n = (0, d.B)(e => {
let {
  searchCategoryId: t
} = e;
return t;
  }, s.Z), c = (0, _.q)(), g = (0, r.e7)([o.Z], () => o.Z.getCategoryName(n)), p = a.useCallback(e => {
(0, E.I)({
  loadId: t,
  categoryId: Number(e)
});
  }, [t]), T = a.useMemo(() => null == c ? [] : c.map(e => {
let [t, n] = e;
return {
  id: ''.concat(t),
  label: (0, i.jsx)(I, {
    categoryId: t,
    count: n
  })
};
  }), [c]);
  return null == c ? null : (0, i.jsxs)('div', {
className: m.container,
children: [
  (0, i.jsx)(l.Text, {
    variant: 'text-sm/medium',
    color: 'text-secondary',
    children: h.Z.Messages.GLOBAL_DISCOVERY_SHOW
  }),
  (0, i.jsx)(u.Z, {
    className: m.filter,
    items: T,
    title: g,
    onSelect: p,
    selected: ''.concat(n),
    'aria-label': h.Z.Messages.GLOBAL_DISCOVERY_SERVERS_LANGUAGE_FILTER
  })
]
  });
}