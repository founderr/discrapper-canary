n.d(t, {
  Z: function() {
return S;
  }
});
var i = n(735250),
  a = n(470079),
  s = n(481060),
  r = n(117496),
  l = n(766219),
  o = n(212476),
  c = n(207986),
  d = n(680180),
  u = n(791734),
  _ = n(341789),
  E = n(591433),
  h = n(282773),
  I = n(143021),
  m = n(775260),
  g = n(49898),
  p = n(689938),
  T = n(679199);

function S() {
  let {
tabs: e,
selectedTab: t,
onSelectTab: n
  } = (0, m.Y)(), {
onScroll: S,
scrollPosition: f
  } = (0, o.c)(), C = (0, l.lg)(t.id), {
isSearchActive: N,
searchQuery: A,
searchResultsQuery: v,
resetSearch: Z,
onSearchSubmit: L,
onSearchTextChange: O
  } = (0, I.C)({
categoryId: C
  }), R = a.useRef((0, r.P)()), {
onGuildCardSeen: x,
onGuildCardClick: b
  } = (0, h.H)({
categoryId: C,
loadId: R.current
  }), P = N && t.id !== g.vf.HUBS && t.id !== g.vf.GUILDS;
  a.useEffect(() => {
N && !P && Z();
  }, [
N,
P,
Z
  ]);
  let M = a.useMemo(() => P ? (0, i.jsx)(s.Clickable, {
  className: T.clickable,
  onClick: Z,
  children: (0, i.jsx)(s.ArrowLargeLeftIcon, {
    color: s.tokens.colors.HEADER_PRIMARY,
    size: 'md'
  })
}) : (0, i.jsx)(s.ServerIcon, {
  color: s.tokens.colors.HEADER_PRIMARY,
  size: 'md'
}), [
  P,
  Z
]),
D = a.useMemo(() => {
  switch (t.id) {
    case g.vf.HUBS:
    case g.vf.GUILDS:
      return null;
    default:
      let e = (0, l.vb)(t.id);
      return (0, i.jsx)(d.Z, {
        query: A,
        placeholder: p.Z.Messages.GLOBAL_DISCOVERY_SEARCH_PLACEHOLDER.format({
          title: e
        }),
        onTextChange: O,
        onClear: Z,
        onSubmit: L
      });
  }
}, [
  L,
  O,
  Z,
  A,
  t.id
]),
y = (0, c.Z)({
  scrollPosition: f
});
  return (0, i.jsxs)('div', {
className: T.container,
children: [
  (0, i.jsx)(u.Z, {
    tabs: e,
    selectedTab: t,
    onTabSelect: n,
    backgroundStyle: y,
    leading: M,
    trailing: D
  }),
  P ? (0, i.jsx)(E.Z, {
    loadId: R.current,
    selectedTab: t.id,
    searchResultsQuery: v,
    onGuildCardClick: b,
    onGuildCardSeen: x
  }) : (0, i.jsx)(_.Z, {
    loadId: R.current,
    selectedTab: t.id,
    onScroll: S,
    onGuildCardClick: b,
    onGuildCardSeen: x
  })
]
  });
}