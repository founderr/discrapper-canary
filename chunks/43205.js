n.d(t, {
  f: function() {
return c;
  }
}), n(47120);
var r = n(735250),
  i = n(470079),
  a = n(120356),
  s = n.n(a),
  o = n(481060),
  l = n(410030),
  u = n(906044);

function c(e) {
  let {
src: t,
size: n,
constrain: a = 'height',
className: c,
alt: d = 'icon',
fallbackSrc: _
  } = e, E = (0, l.ZP)(), [f, h] = i.useState(!1), [p, m] = i.useState(!1), I = null == _ || p, T = 'height' === a ? {
maxWidth: ''.concat(n, 'px'),
height: ''.concat(n, 'px')
  } : {
maxWidth: ''.concat(n, 'px'),
minHeight: ''.concat(n, 'px')
  };
  return null == t || f && I ? (0, r.jsx)(o.UnknownGameIcon, {
size: 'custom',
width: n,
height: n,
color: 'dark' === E ? 'white' : 'black',
style: T,
className: s()(u.contentImage, c)
  }) : (0, r.jsx)('img', {
style: T,
className: s()(u.contentImage, c),
src: f && null != _ ? _ : t,
alt: d,
onError: e => f ? m(!0) : h(!0)
  });
}