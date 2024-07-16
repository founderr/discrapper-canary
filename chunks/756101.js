n.d(t, {
  Z: function() {
return d;
  }
});
var i = n(735250);
n(470079);
var s = n(481060),
  a = n(410030),
  r = n(225784),
  l = n(766219),
  o = n(374939),
  c = n(753196);

function d(e) {
  let {
tab: t,
guilds: n,
onScroll: d,
onGuildCardClick: u,
onGuildCardSeen: _
  } = e, E = (0, a.ZP)(), h = (0, l.Mf)(t), I = (0, l.a$)(t), m = (0, l.QW)(t);
  return (0, i.jsxs)(o.Z, {
title: h,
description: I,
onScroll: d,
children: [
  (0, i.jsx)(s.Heading, {
    className: c.sectionTitle,
    variant: 'heading-lg/semibold',
    color: 'header-primary',
    children: m
  }),
  (0, i.jsx)('div', {
    className: c.content,
    children: n.map((e, t) => (0, i.jsx)(r.Z, {
      guild: e,
      onView: e => u(e, t),
      theme: E,
      onGuildCardSeen: _
    }, e.id))
  })
]
  });
}