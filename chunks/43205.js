t.d(n, {
  f: function() {
return s;
  }
}), t(47120);
var a = t(735250),
  l = t(470079),
  r = t(120356),
  i = t.n(r),
  o = t(481060),
  u = t(410030),
  c = t(487596);

function s(e) {
  let {
src: n,
size: t,
constrain: r = 'height',
className: s,
alt: d = 'icon',
fallbackSrc: f
  } = e, h = (0, u.ZP)(), [m, v] = l.useState(!1), [_, E] = l.useState(!1), g = null == f || _;
  if (null == n || m && g)
return (0, a.jsx)(o.UnknownGameIcon, {
  size: 'custom',
  width: t,
  height: t,
  color: 'dark' === h ? 'white' : 'black',
  className: i()(c.contentImage, s)
});
  let N = 'height' === r ? {
maxWidth: ''.concat(t, 'px'),
height: ''.concat(t, 'px')
  } : {
maxWidth: ''.concat(t, 'px'),
minHeight: ''.concat(t, 'px')
  };
  return (0, a.jsx)('img', {
style: N,
className: i()(c.contentImage, s),
src: m && null != f ? f : n,
alt: d,
onError: e => m ? E(!0) : v(!0)
  });
}