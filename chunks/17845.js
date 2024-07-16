n.d(t, {
  Z: function() {
return u;
  }
});
var i = n(735250),
  s = n(470079),
  a = n(120356),
  r = n.n(a),
  l = n(780384),
  o = n(481060),
  c = n(410030),
  d = n(960794);

function u(e) {
  let {
title: t,
description: n,
button: a,
backgroundImageUrl: u,
className: _
  } = e, E = (0, l.wj)((0, c.ZP)()), h = s.useMemo(() => null != u ? u : E ? 'https://cdn.discordapp.com/assets/discovery/generic-hero-background.png' : 'https://cdn.discordapp.com/assets/discovery/generic-hero-background-light-mode.png', [
E,
u
  ]), I = s.useMemo(() => ({
backgroundImage: 'url('.concat(h, ')')
  }), [h]);
  return (0, i.jsxs)('div', {
className: r()(d.imageContainer, _),
children: [
  (0, i.jsx)('div', {
    className: d.imageContent,
    children: (0, i.jsxs)('div', {
      className: d.textContainer,
      children: [
        (0, i.jsx)(o.Heading, {
          variant: 'heading-xl/bold',
          color: 'always-white',
          children: t
        }),
        (0, i.jsx)(o.Text, {
          variant: 'text-md/medium',
          color: 'text-muted',
          children: n
        }),
        a
      ]
    })
  }),
  (0, i.jsx)('div', {
    className: d.imageBackground,
    style: I,
    children: (0, i.jsx)('div', {
      className: d.imageBackgroundOverlay
    })
  })
]
  });
}