t.d(n, {
  f: function() {
return c;
  }
}), t(47120);
var l = t(735250),
  r = t(470079),
  a = t(120356),
  o = t.n(a),
  i = t(481060),
  u = t(410030),
  s = t(906044);

function c(e) {
  let {
src: n,
size: t,
constrain: a = 'height',
className: c,
alt: d = 'icon',
fallbackSrc: E
  } = e, _ = (0, u.ZP)(), [f, v] = r.useState(!1), [T, x] = r.useState(!1), m = null == E || T;
  if (null == n || f && m)
return (0, l.jsx)(i.UnknownGameIcon, {
  size: 'custom',
  width: t,
  height: t,
  color: 'dark' === _ ? 'white' : 'black',
  className: o()(s.contentImage, c)
});
  let N = 'height' === a ? {
maxWidth: ''.concat(t, 'px'),
height: ''.concat(t, 'px')
  } : {
maxWidth: ''.concat(t, 'px'),
minHeight: ''.concat(t, 'px')
  };
  return (0, l.jsx)('img', {
style: N,
className: o()(s.contentImage, c),
src: f && null != E ? E : n,
alt: d,
onError: e => f ? x(!0) : v(!0)
  });
}