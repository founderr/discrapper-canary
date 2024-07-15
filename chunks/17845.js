n.d(t, {
  Z: function() {
return c;
  }
});
var i = n(735250),
  a = n(470079),
  s = n(120356),
  r = n.n(s),
  l = n(481060),
  o = n(960794);

function c(e) {
  let {
title: t,
description: n,
button: s,
backgroundImageUrl: c = 'https://cdn.discordapp.com/assets/discovery/generic-hero-background.png',
className: d
  } = e, u = a.useMemo(() => ({
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
      s
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