n.d(t, {
  b: function() {
return l;
  }
});
var o = n(735250),
  r = n(470079),
  a = n(120356),
  s = n.n(a),
  i = n(481060),
  c = n(232489);

function l(e) {
  let {
chunks: t,
columns: n,
className: a
  } = e, l = r.useMemo(() => ({
'--secure-frames-columns': n
  }), [n]);
  return null == t ? (0, o.jsx)('div', {
className: c.loading,
children: (0, o.jsx)(i.Spinner, {})
  }) : (0, o.jsx)('div', {
style: l,
className: s()(c.code, a),
children: t.map((e, t) => (0, o.jsx)('div', {
  className: s()(c.chunk, {
    [c.divider]: t > n - 1
  }),
  children: (0, o.jsx)(i.Text, {
    className: c.codeText,
    variant: 'code',
    color: 'text-normal',
    children: e
  })
}, ''.concat(e, '-').concat(t)))
  });
}