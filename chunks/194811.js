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
platform: n
  } = e, {
profileType: l
  } = (0, a.z)();
  return (0, r.jsxs)(i.Heading, {
variant: l === s.y0.PANEL ? 'text-xs/semibold' : 'text-xs/medium',
color: 'header-primary',
className: o.header,
children: [
  t,
  null != n && (0, r.jsx)('div', {
    className: o.platformIcon,
    style: {
      maskImage: 'url('.concat(n.icon.whiteSVG, ')'),
      WebkitMaskImage: 'url('.concat(n.icon.whiteSVG, ')')
    }
  })
]
  });
}