n.d(t, {
  Z: function() {
return l;
  }
});
var r = n(735250);
n(470079);
var i = n(481060),
  a = n(652853),
  s = n(228168),
  o = n(692184);

function l(e) {
  let {
text: t,
onClick: n,
...l
  } = e, {
profileType: u
  } = (0, a.z)(), c = u !== s.y0.FULL_SIZE ? 1 : void 0;
  return null == t || '' === t ? null : null != n ? (0, r.jsx)(i.Clickable, {
onClick: n,
children: (0, r.jsx)(i.Text, {
  color: 'text-normal',
  lineClamp: c,
  className: o.link,
  ...l,
  children: t
})
  }) : (0, r.jsx)(i.Text, {
color: 'text-normal',
lineClamp: c,
...l,
children: t
  });
}