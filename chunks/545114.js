n.d(t, {
  Z: function() {
return Z;
  }
});
var i = n(735250),
  a = n(470079),
  s = n(481060),
  r = n(963202),
  l = n(117496),
  o = n(702646),
  c = n(540742),
  d = n(766219),
  u = n(801543),
  _ = n(979233),
  E = n(88693),
  h = n(611928),
  m = n(680180),
  I = n(791734),
  g = n(341789),
  p = n(591433),
  T = n(282773),
  S = n(143021),
  f = n(775260),
  C = n(49898),
  N = n(731455),
  A = n(689938),
  v = n(645664);

function Z() {
  let e = a.useRef((0, l.P)()),
{
  onScroll: t,
  scrollPosition: n,
  resetScrollPosition: Z
} = (0, _.M)(),
{
  tabs: L,
  selectedTab: O,
  setSelectedTab: R
} = (0, f.Y)(),
x = (0, d.lg)(O),
b = !C.MU.has(O),
P = (0, r.iN)('global_discovery_servers_layout'),
{
  searchBarState: M,
  onTabsAvailableWidthChange: D,
  onCollapsedSearchBarClick: y,
  tabsClassName: j
} = (0, E.U)({
  isSearchBarVisible: b
}),
{
  searchQuery: U,
  onSearchTextChange: G,
  onClearSearch: k,
  onSearchSubmit: w,
  isSearchVisible: B
} = (0, S.H)({
  loadId: e.current
}),
H = a.useCallback(e => {
  R(e), B && k();
}, [
  B,
  k,
  R
]),
V = a.useMemo(() => B ? L.filter(e => {
  let {
    id: t
  } = e;
  return !C.MU.has(t);
}) : L, [
  L,
  B
]),
F = a.useRef(new u.Z(x)),
{
  onGuildCardSeen: Y,
  onGuildCardClick: W
} = (0, T.H)({
  guildDiscoveryCardSeenManager: F.current,
  loadId: e.current
});
  a.useEffect(() => {
F.current.flushSeenGuilds(e.current);
  }, [x]), a.useEffect(() => {
Z();
  }, [
O,
Z
  ]), a.useEffect(() => {
!B && c.B.setState({
  searchScrollPosition: null
});
  }, [B]);
  let z = a.useMemo(() => {
switch (O) {
  case C.vf.HUBS:
    return null;
  case C.vf.GUILDS:
    if (P)
      return (0, i.jsx)(o.Z, {});
    return null;
  default:
    return (0, i.jsx)(m.Z, {
      query: U,
      placeholder: x === N.Hk ? A.Z.Messages.SEARCH : A.Z.Messages.GLOBAL_DISCOVERY_SEARCH_PLACEHOLDER.format({
        title: (0, d.vb)(O)
      }),
      onTextChange: G,
      onClear: k,
      onSubmit: w,
      onCollapsedClick: y,
      state: M
    });
}
  }, [
x,
k,
y,
w,
G,
M,
U,
O,
P
  ]);
  return (0, i.jsxs)('div', {
className: v.container,
children: [
  (0, i.jsxs)(h.ZP, {
    className: B ? v.search : void 0,
    children: [
      !B && (0, i.jsx)(h.z6, {
        scrollPosition: n
      }),
      (0, i.jsx)(h.aV, {
        icon: B ? s.ArrowLargeLeftIcon : s.ServerIcon,
        onClick: B ? k : void 0
      }),
      (0, i.jsx)(I.Z, {
        className: j,
        tabs: V,
        selectedTab: B ? null : O,
        onTabSelect: H,
        onAvailableWidthChange: D
      }),
      z
    ]
  }),
  B ? (0, i.jsx)(p.Z, {
    loadId: e.current,
    onGuildCardClick: W,
    onGuildCardSeen: Y
  }) : (0, i.jsx)(g.Z, {
    loadId: e.current,
    selectedTab: O,
    onScroll: t,
    onGuildCardClick: W,
    onGuildCardSeen: Y
  })
]
  });
}