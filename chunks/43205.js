s.d(a, {
  f: function() {
return E;
  }
}), s(47120);
var n = s(735250),
  t = s(470079),
  l = s(120356),
  r = s.n(l),
  i = s(481060),
  o = s(410030),
  c = s(906044);

function E(e) {
  let {
src: a,
size: s,
constrain: l = 'height',
className: E,
alt: _ = 'icon',
fallbackSrc: d
  } = e, u = (0, o.ZP)(), [I, A] = t.useState(!1), [N, O] = t.useState(!1), R = null == d || N;
  if (null == a || I && R)
return (0, n.jsx)(i.UnknownGameIcon, {
  size: 'custom',
  width: s,
  height: s,
  color: 'dark' === u ? 'white' : 'black',
  className: r()(c.contentImage, E)
});
  let m = 'height' === l ? {
maxWidth: ''.concat(s, 'px'),
height: ''.concat(s, 'px')
  } : {
maxWidth: ''.concat(s, 'px'),
minHeight: ''.concat(s, 'px')
  };
  return (0, n.jsx)('img', {
style: m,
className: r()(c.contentImage, E),
src: I && null != d ? d : a,
alt: _,
onError: e => I ? O(!0) : A(!0)
  });
}