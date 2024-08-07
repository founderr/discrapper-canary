n.d(t, {
  Z: function() {
return u;
  }
}), n(47120);
var r = n(735250),
  o = n(470079),
  s = n(558522),
  a = n(195787);

function u(e) {
  let {
imageBackground: t,
applicationName: n,
imageClassName: u,
imageNotFoundClassName: i
  } = e, [c, l] = o.useState(!1);
  return 'not-found' === t.state || c ? (0, r.jsx)('div', {
className: i,
children: (0, r.jsx)(s.Z, {
  className: a.brokenImageIcon
})
  }) : 'loading' === t.state ? null : (0, r.jsx)('img', {
alt: n,
className: u,
src: t.url,
onError: () => l(!0)
  });
}