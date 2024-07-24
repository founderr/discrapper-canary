n.d(t, {
  Z: function() {
return c;
  }
});
var r = n(735250);
n(470079);
var i = n(120356),
  a = n.n(i),
  s = n(481060),
  o = n(652853),
  l = n(228168),
  u = n(692184);

function c(e) {
  let {
text: t,
onClick: n,
...i
  } = e, {
profileType: c
  } = (0, o.z)(), d = c !== l.y0.FULL_SIZE ? 1 : void 0;
  return null == t || '' === t ? null : null != n ? (0, r.jsx)(s.Clickable, {
onClick: n,
className: a()(u.clickable, u.text),
children: (0, r.jsx)(s.Text, {
  color: 'text-normal',
  lineClamp: d,
  ...i,
  children: t
})
  }) : (0, r.jsx)(s.Text, {
color: 'text-normal',
lineClamp: d,
...i,
children: t
  });
}