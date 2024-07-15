n.d(t, {
  U: function() {
return T;
  }
});
var i = n(735250),
  s = n(470079),
  a = n(657707),
  r = n(823379),
  l = n(766219),
  o = n(212476),
  c = n(791734),
  d = n(860403),
  u = n(388571),
  _ = n(536763),
  E = n(160460),
  h = n(968669),
  I = n(982345),
  m = n(49898),
  g = n(689938),
  p = n(65050);

function T() {
  let {
tabs: e,
selectedTab: t,
onSelectTab: n
  } = (0, I.Y)(), {
handleScroll: T,
scrollPosition: S
  } = (0, o.c)(), C = (0, l.lg)(t.id), {
searching: f,
searchQuery: N,
setSearchQuery: A,
handleSearchClear: Z,
handleSearchSubmit: L
  } = (0, h.C)(C), v = s.useMemo(() => {
if (t.id === m.vf.GUILDS && !f)
  return (0, i.jsx)(u.U, {
    onScroll: T
  });
if (f)
  return (0, i.jsx)(E.x, {
    searchQuery: N,
    categoryId: C,
    onSearchClear: Z
  });
switch (t.id) {
  case m.vf.GAMING:
  case m.vf.MUSIC:
  case m.vf.ENTERTAINMENT:
  case m.vf.TECH:
  case m.vf.EDUCATION:
    return (0, i.jsx)(d.Z, {
      categoryId: C,
      tab: t.id,
      onScroll: T
    });
  case m.vf.HUBS:
    return (0, i.jsx)(_.X, {
      onScroll: T
    });
  case m.vf.GUILDS:
    return null;
  default:
    (0, r.vE)(t.id);
}
  }, [
C,
T,
Z,
N,
f,
t.id
  ]);
  return (0, i.jsxs)('div', {
className: p.container,
children: [
  (0, i.jsx)(c.Z, {
    icon: (0, i.jsx)(a.QTo, {}),
    title: g.Z.Messages.GLOBAL_DISCOVERY_SERVERS_TITLE,
    tabs: e,
    selectedTab: t,
    onTabSelect: n,
    searchQuery: N,
    onSearch: A,
    onSearchClear: Z,
    onSearchSubmit: L,
    scrollPosition: S
  }),
  v
]
  });
}