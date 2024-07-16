n.d(t, {
  Z: function() {
return g;
  }
});
var i = n(735250),
  a = n(470079),
  s = n(442837),
  r = n(212093),
  l = n(683301),
  o = n(823379),
  c = n(766219),
  d = n(756101),
  u = n(871348),
  _ = n(705063),
  E = n(49898);
let h = [];

function I(e) {
  let {
onScroll: t,
onGuildCardSeen: n,
onGuildCardClick: o
  } = e, c = (0, s.Wu)([l.ZP], () => {
var e, t;
return null !== (t = null === (e = l.ZP.getDiscoverableGuilds().featured) || void 0 === e ? void 0 : e.guilds) && void 0 !== t ? t : h;
  });
  return a.useEffect(() => {
(0, r.$z)(0, 30);
  }, []), (0, i.jsx)(d.Z, {
tab: E.vf.FEATURED,
guilds: c,
onScroll: t,
onGuildCardSeen: n,
onGuildCardClick: o
  });
}

function m(e) {
  let {
tab: t,
onScroll: n,
onGuildCardSeen: o,
onGuildCardClick: u
  } = e, _ = (0, c.lg)(t), E = (0, s.Wu)([l.ZP], () => {
var e, t;
return null !== (t = null === (e = l.ZP.getDiscoverableGuilds()[_]) || void 0 === e ? void 0 : e.guilds) && void 0 !== t ? t : h;
  });
  return a.useEffect(() => {
(0, r.K5)(_);
  }, [_]), (0, i.jsx)(d.Z, {
tab: t,
guilds: E,
onScroll: n,
onGuildCardSeen: o,
onGuildCardClick: u
  });
}

function g(e) {
  let {
loadId: t,
selectedTab: n,
onScroll: a,
onGuildCardSeen: s,
onGuildCardClick: r
  } = e;
  switch (n) {
case E.vf.FEATURED:
  return (0, i.jsx)(I, {
    onScroll: a,
    onGuildCardClick: r,
    onGuildCardSeen: s
  });
case E.vf.GAMING:
case E.vf.MUSIC:
case E.vf.ENTERTAINMENT:
case E.vf.TECH:
case E.vf.EDUCATION:
  return (0, i.jsx)(m, {
    tab: n,
    onScroll: a,
    onGuildCardClick: r,
    onGuildCardSeen: s
  });
case E.vf.HUBS:
  return (0, i.jsx)(_.X, {
    onScroll: a,
    loadId: t
  });
case E.vf.GUILDS:
  return (0, i.jsx)(u.U, {
    onScroll: a
  });
default:
  (0, o.vE)(n);
  }
}