n.d(t, {
  Z: function() {
return m;
  }
});
var i = n(735250),
  a = n(470079),
  s = n(442837),
  r = n(481060),
  l = n(212093),
  o = n(410030),
  c = n(225784),
  d = n(683301),
  u = n(766219),
  _ = n(374939),
  E = n(402691),
  h = n(854761);
let I = [];

function m(e) {
  let {
categoryId: t,
tab: n,
onScroll: m
  } = e, g = (0, o.ZP)(), p = (0, s.Wu)([d.ZP], () => {
var e, n;
return null !== (n = null === (e = d.ZP.getDiscoverableGuilds()[t]) || void 0 === e ? void 0 : e.guilds) && void 0 !== n ? n : I;
  }), T = (0, s.e7)([d.ZP], () => d.ZP.getLoadId()), {
handleViewGuild: S,
onGuildCardSeen: f
  } = (0, E.g)(t, T), C = (0, u.Mf)(n), N = (0, u.a$)(n), A = (0, u.QW)(n);
  return a.useEffect(() => {
(0, l.K5)(t);
  }, [t]), (0, i.jsxs)(_.Z, {
title: C,
description: N,
onScroll: m,
children: [
  (0, i.jsx)(r.Heading, {
    className: h.sectionTitle,
    variant: 'heading-lg/semibold',
    color: 'header-primary',
    children: A
  }),
  (0, i.jsx)('div', {
    className: h.content,
    children: p.map((e, t) => (0, i.jsx)(c.Z, {
      guild: e,
      onView: e => S(e, t),
      theme: g,
      onGuildCardSeen: f
    }, e.id))
  })
]
  });
}