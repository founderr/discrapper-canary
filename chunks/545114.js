n.d(t, {
  Z: function() {
return f;
  }
});
var i = n(735250),
  s = n(470079),
  a = n(481060),
  r = n(117496),
  l = n(766219),
  o = n(801543),
  c = n(212476),
  d = n(207986),
  u = n(680180),
  _ = n(791734),
  E = n(341789),
  h = n(591433),
  I = n(282773),
  m = n(143021),
  g = n(775260),
  p = n(49898),
  T = n(689938),
  S = n(679199);

function f() {
  let {
tabs: e,
selectedTab: t,
onSelectTab: n
  } = (0, g.Y)(), {
onScroll: f,
scrollPosition: C
  } = (0, c.c)(), N = (0, l.lg)(t.id), A = s.useRef((0, r.P)()), {
isSearchActive: v,
searchQuery: Z,
searchResultsQuery: L,
resetSearch: O,
onSearchSubmit: R,
onSearchTextChange: x
  } = (0, m.C)({
categoryId: N,
loadId: A.current
  }), b = s.useRef(new o.Z(N)), {
onGuildCardSeen: P,
onGuildCardClick: M
  } = (0, I.H)({
categoryId: N,
guildDiscoveryCardSeenManager: b.current,
loadId: A.current
  });
  s.useEffect(() => {
b.current.flushSeenGuilds(A.current);
  }, [N]);
  let D = v && t.id !== p.vf.HUBS && t.id !== p.vf.GUILDS;
  s.useEffect(() => {
v && !D && O();
  }, [
v,
D,
O
  ]);
  let y = s.useMemo(() => D ? (0, i.jsx)(a.Clickable, {
  className: S.clickable,
  onClick: O,
  children: (0, i.jsx)(a.ArrowLargeLeftIcon, {
    color: a.tokens.colors.HEADER_PRIMARY,
    size: 'md'
  })
}) : (0, i.jsx)(a.ServerIcon, {
  color: a.tokens.colors.HEADER_PRIMARY,
  size: 'md'
}), [
  D,
  O
]),
j = s.useMemo(() => {
  switch (t.id) {
    case p.vf.HUBS:
    case p.vf.GUILDS:
      return null;
    default:
      let e = (0, l.vb)(t.id);
      return (0, i.jsx)(u.Z, {
        query: Z,
        placeholder: T.Z.Messages.GLOBAL_DISCOVERY_SEARCH_PLACEHOLDER.format({
          title: e
        }),
        onTextChange: x,
        onClear: O,
        onSubmit: R
      });
  }
}, [
  R,
  x,
  O,
  Z,
  t.id
]),
U = (0, d.Z)({
  scrollPosition: C
});
  return (0, i.jsxs)('div', {
className: S.container,
children: [
  (0, i.jsx)(_.Z, {
    tabs: e,
    selectedTab: t,
    onTabSelect: n,
    backgroundStyle: U,
    leading: y,
    trailing: j
  }),
  D ? (0, i.jsx)(h.Z, {
    loadId: A.current,
    selectedTab: t.id,
    searchResultsQuery: L,
    onGuildCardClick: M,
    onGuildCardSeen: P
  }) : (0, i.jsx)(E.Z, {
    loadId: A.current,
    selectedTab: t.id,
    onScroll: f,
    onGuildCardClick: M,
    onGuildCardSeen: P
  })
]
  });
}