n.d(t, {
  b: function() {
return E;
  }
});
var r = n(735250),
  a = n(470079),
  o = n(120356),
  s = n.n(o),
  i = n(481060),
  c = n(232489);

function E(e) {
  let {
chunks: t,
columns: n,
className: o
  } = e, E = a.useMemo(() => ({
'--secure-frames-columns': n
  }), [n]);
  return null == t ? (0, r.jsx)('div', {
className: c.loading,
children: (0, r.jsx)(i.Spinner, {})
  }) : (0, r.jsx)('div', {
style: E,
className: s()(c.code, o),
children: t.map((e, t) => (0, r.jsx)('div', {
  className: s()(c.chunk, {
    [c.divider]: t > n - 1
  }),
  children: (0, r.jsx)(i.Text, {
    className: c.codeText,
    variant: 'code',
    color: 'text-normal',
    children: e
  })
}, ''.concat(e, '-').concat(t)))
  });
}