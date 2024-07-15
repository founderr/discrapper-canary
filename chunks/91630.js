n.d(t, {
  U: function() {
return f;
  }
});
var i = n(735250),
  s = n(470079),
  a = n(481060),
  r = n(823379),
  l = n(766219),
  o = n(212476),
  c = n(207986),
  d = n(680180),
  u = n(791734),
  _ = n(860403),
  E = n(388571),
  h = n(536763),
  I = n(160460),
  m = n(968669),
  g = n(982345),
  p = n(49898),
  T = n(689938),
  S = n(65050);

function f() {
  let {
tabs: e,
selectedTab: t,
onSelectTab: n
  } = (0, g.Y)(), {
handleScroll: f,
scrollPosition: C
  } = (0, o.c)(), N = (0, l.lg)(t.id), {
isSearchActive: A,
searchQuery: Z,
searchResultsQuery: L,
resetSearch: v,
onSearchSubmit: O,
onSearchTextChange: R
  } = (0, m.C)(N), x = A && t.id !== p.vf.HUBS && t.id !== p.vf.GUILDS;
  s.useEffect(() => {
A && !x && v();
  }, [
A,
x,
v
  ]);
  let b = s.useMemo(() => {
  if (x)
    return (0, i.jsx)(I.Z, {
      searchResultsQuery: L,
      categoryId: N,
      onSearchClear: v
    });
  switch (t.id) {
    case p.vf.GAMING:
    case p.vf.MUSIC:
    case p.vf.ENTERTAINMENT:
    case p.vf.TECH:
    case p.vf.EDUCATION:
      return (0, i.jsx)(_.Z, {
        categoryId: N,
        tab: t.id,
        onScroll: f
      });
    case p.vf.HUBS:
      return (0, i.jsx)(h.X, {
        onScroll: f
      });
    case p.vf.GUILDS:
      return (0, i.jsx)(E.U, {
        onScroll: f
      });
    default:
      (0, r.vE)(t.id);
  }
}, [
  N,
  f,
  x,
  v,
  L,
  t.id
]),
P = s.useMemo(() => x ? (0, i.jsx)(a.Clickable, {
  className: S.clickable,
  onClick: v,
  children: (0, i.jsx)(a.ArrowLargeLeftIcon, {
    color: a.tokens.colors.HEADER_PRIMARY,
    size: 'md'
  })
}) : (0, i.jsx)(a.ServerIcon, {
  color: a.tokens.colors.HEADER_PRIMARY,
  size: 'md'
}), [
  x,
  v
]),
M = (0, l.vb)(t.id),
D = s.useMemo(() => {
  switch (t.id) {
    case p.vf.GAMING:
    case p.vf.MUSIC:
    case p.vf.ENTERTAINMENT:
    case p.vf.TECH:
    case p.vf.EDUCATION:
      return (0, i.jsx)(d.Z, {
        query: Z,
        placeholder: T.Z.Messages.GLOBAL_DISCOVERY_SEARCH_PLACEHOLDER.format({
          title: M
        }),
        onTextChange: R,
        onClear: v,
        onSubmit: O
      });
    default:
      return null;
  }
}, [
  O,
  R,
  v,
  Z,
  t.id,
  M
]),
y = (0, c.Z)({
  scrollPosition: C
});
  return (0, i.jsxs)('div', {
className: S.container,
children: [
  (0, i.jsx)(u.Z, {
    tabs: e,
    selectedTab: t,
    onTabSelect: n,
    backgroundStyle: y,
    leading: P,
    trailing: D
  }),
  b
]
  });
}