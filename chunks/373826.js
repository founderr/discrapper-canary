n.d(t, {
  Z: function() {
return d;
  }
});
var r = n(735250);
n(470079);
var i = n(120356),
  a = n.n(i),
  s = n(481060),
  o = n(514342),
  l = n(652853),
  u = n(228168),
  c = n(692184);

function d(e) {
  let {
text: t,
onClick: n,
...i
  } = e, {
profileType: d
  } = (0, l.z)(), _ = d !== u.y0.FULL_SIZE ? 1 : void 0;
  return null == t || '' === t ? null : null != n ? (0, r.jsx)(s.Clickable, {
onClick: n,
className: a()(c.clickable, c.text),
children: (0, r.jsx)(s.Text, {
  color: 'text-normal',
  lineClamp: _,
  ...i,
  children: (0, r.jsx)(o.Z, {
    children: t
  })
})
  }) : (0, r.jsx)(s.Text, {
color: 'text-normal',
lineClamp: _,
...i,
children: (0, r.jsx)(o.Z, {
  children: t
})
  });
}