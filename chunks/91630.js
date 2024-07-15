n.d(t, {
  U: function() {
return S;
  }
});
var i = n(735250),
  a = n(470079),
  s = n(481060),
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
  f = n(65050);

function S() {
  let {
tabs: e,
selectedTab: t,
onSelectTab: n
  } = (0, g.Y)(), {
handleScroll: S,
scrollPosition: C
  } = (0, o.c)(), N = (0, l.lg)(t.id), {
isSearchActive: A,
searchQuery: v,
searchResultsQuery: Z,
resetSearch: L,
onSearchSubmit: O,
onSearchTextChange: R
  } = (0, m.C)(N), x = A && t.id !== p.vf.HUBS && t.id !== p.vf.GUILDS;
  a.useEffect(() => {
A && !x && L();
  }, [
A,
x,
L
  ]);
  let b = a.useMemo(() => {
  if (x)
    return (0, i.jsx)(I.Z, {
      searchResultsQuery: Z,
      categoryId: N,
      onSearchClear: L
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
        onScroll: S
      });
    case p.vf.HUBS:
      return (0, i.jsx)(h.X, {
        onScroll: S
      });
    case p.vf.GUILDS:
      return (0, i.jsx)(E.U, {
        onScroll: S
      });
    default:
      (0, r.vE)(t.id);
  }
}, [
  N,
  S,
  x,
  L,
  Z,
  t.id
]),
P = a.useMemo(() => x ? (0, i.jsx)(s.Clickable, {
  className: f.clickable,
  onClick: L,
  children: (0, i.jsx)(s.ArrowLargeLeftIcon, {
    color: s.tokens.colors.HEADER_PRIMARY,
    size: 'md'
  })
}) : (0, i.jsx)(s.ServerIcon, {
  color: s.tokens.colors.HEADER_PRIMARY,
  size: 'md'
}), [
  x,
  L
]),
M = (0, l.vb)(t.id),
D = a.useMemo(() => {
  switch (t.id) {
    case p.vf.GAMING:
    case p.vf.MUSIC:
    case p.vf.ENTERTAINMENT:
    case p.vf.TECH:
    case p.vf.EDUCATION:
      return (0, i.jsx)(d.Z, {
        query: v,
        placeholder: T.Z.Messages.GLOBAL_DISCOVERY_SEARCH_PLACEHOLDER.format({
          title: M
        }),
        onTextChange: R,
        onClear: L,
        onSubmit: O
      });
    default:
      return null;
  }
}, [
  O,
  R,
  L,
  v,
  t.id,
  M
]),
y = (0, c.Z)({
  scrollPosition: C
});
  return (0, i.jsxs)('div', {
className: f.container,
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