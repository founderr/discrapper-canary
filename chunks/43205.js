n.d(t, {
  f: function() {
return d;
  }
}), n(47120);
var l = n(735250),
  i = n(470079),
  s = n(120356),
  a = n.n(s),
  r = n(481060),
  c = n(410030),
  o = n(906044);

function d(e) {
  let {
src: t,
size: n,
constrain: s = 'height',
className: d,
alt: u = 'icon',
fallbackSrc: m
  } = e, x = (0, c.ZP)(), [h, f] = i.useState(!1), [v, g] = i.useState(!1), j = null == m || v;
  if (null == t || h && j)
return (0, l.jsx)(r.UnknownGameIcon, {
  size: 'custom',
  width: n,
  height: n,
  color: 'dark' === x ? 'white' : 'black',
  className: a()(o.contentImage, d)
});
  let p = 'height' === s ? {
maxWidth: ''.concat(n, 'px'),
height: ''.concat(n, 'px')
  } : {
maxWidth: ''.concat(n, 'px'),
minHeight: ''.concat(n, 'px')
  };
  return (0, l.jsx)('img', {
style: p,
className: a()(o.contentImage, d),
src: h && null != m ? m : t,
alt: u,
onError: e => h ? g(!0) : f(!0)
  });
}