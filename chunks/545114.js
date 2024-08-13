n.d(t, {
  Z: function() {
return v;
  }
});
var i = n(735250),
  a = n(470079),
  s = n(481060),
  r = n(117496),
  l = n(702646),
  o = n(540742),
  c = n(766219),
  d = n(801543),
  u = n(979233),
  _ = n(88693),
  E = n(611928),
  h = n(680180),
  m = n(791734),
  I = n(341789),
  g = n(591433),
  p = n(282773),
  T = n(143021),
  S = n(775260),
  f = n(49898),
  C = n(731455),
  N = n(689938),
  A = n(645664);

function v() {
  let e = a.useRef((0, r.P)()),
{
  onScroll: t,
  scrollPosition: n,
  resetScrollPosition: v
} = (0, u.M)(),
{
  tabs: Z,
  selectedTab: L,
  setSelectedTab: O
} = (0, S.Y)(),
R = (0, c.lg)(L),
{
  searchBarState: x,
  onTabsAvailableWidthChange: b,
  onCollapsedSearchBarClick: P,
  tabsClassName: M
} = (0, _.U)(),
{
  searchQuery: D,
  onSearchTextChange: y,
  onClearSearch: j,
  onSearchSubmit: U,
  isSearchVisible: G
} = (0, T.H)({
  loadId: e.current
}),
k = a.useCallback(e => {
  O(e), G && j();
}, [
  G,
  j,
  O
]),
w = a.useMemo(() => G ? Z.filter(e => {
  let {
    id: t
  } = e;
  return !f.MU.has(t);
}) : Z, [
  Z,
  G
]),
B = a.useRef(new d.Z(R)),
{
  onGuildCardSeen: H,
  onGuildCardClick: V
} = (0, p.H)({
  guildDiscoveryCardSeenManager: B.current,
  loadId: e.current
});
  a.useEffect(() => {
B.current.flushSeenGuilds(e.current);
  }, [R]), a.useEffect(() => {
v();
  }, [
R,
v
  ]), a.useEffect(() => {
!G && o.B.setState({
  searchScrollPosition: null
});
  }, [G]);
  let F = a.useMemo(() => {
switch (L) {
  case f.vf.HUBS:
  case f.vf.GUILDS:
    return (0, i.jsx)(l.Z, {});
  default:
    return (0, i.jsx)(h.Z, {
      query: D,
      placeholder: R === C.Hk ? N.Z.Messages.SEARCH : N.Z.Messages.GLOBAL_DISCOVERY_SEARCH_PLACEHOLDER.format({
        title: (0, c.vb)(L)
      }),
      onTextChange: y,
      onClear: j,
      onSubmit: U,
      onCollapsedClick: P,
      state: x
    });
}
  }, [
R,
j,
P,
U,
y,
x,
D,
L
  ]);
  return (0, i.jsxs)('div', {
className: A.container,
children: [
  (0, i.jsxs)(E.ZP, {
    className: G ? A.search : void 0,
    children: [
      !G && (0, i.jsx)(E.z6, {
        scrollPosition: n
      }),
      (0, i.jsx)(E.aV, {
        icon: G ? s.ArrowLargeLeftIcon : s.ServerIcon,
        onClick: G ? j : void 0
      }),
      (0, i.jsx)(m.Z, {
        className: M,
        tabs: w,
        selectedTab: G ? null : L,
        onTabSelect: k,
        onAvailableWidthChange: b
      }),
      F
    ]
  }),
  G ? (0, i.jsx)(g.Z, {
    loadId: e.current,
    onGuildCardClick: V,
    onGuildCardSeen: H
  }) : (0, i.jsx)(I.Z, {
    loadId: e.current,
    selectedTab: L,
    onScroll: t,
    onGuildCardClick: V,
    onGuildCardSeen: H
  })
]
  });
}