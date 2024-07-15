n.d(t, {
  Z: function() {
return c;
  }
});
var i = n(735250),
  s = n(470079),
  a = n(120356),
  r = n.n(a),
  l = n(481060),
  o = n(960794);

function c(e) {
  let {
title: t,
description: n,
button: a,
backgroundImageUrl: c = 'https://cdn.discordapp.com/assets/discovery/generic-hero-background.png',
className: d
  } = e, u = s.useMemo(() => ({
backgroundImage: 'url('.concat(c, ')')
  }), [c]);
  return (0, i.jsxs)('div', {
className: r()(o.imageContainer, d),
children: [
  (0, i.jsxs)('div', {
    className: o.imageContent,
    children: [
      (0, i.jsx)(l.Heading, {
        variant: 'heading-lg/medium',
        color: 'always-white',
        children: t
      }),
      (0, i.jsx)(l.Text, {
        variant: 'text-md/medium',
        color: 'text-muted',
        children: n
      }),
      a
    ]
  }),
  (0, i.jsx)('div', {
    className: o.imageBackground,
    style: u,
    children: (0, i.jsx)('div', {
      className: o.imageBackgroundOverlay
    })
  })
]
  });
}