n.d(t, {
  Z: function() {
return A;
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
  C = n(689938),
  N = n(645664);

function A() {
  let e = a.useRef((0, r.P)()),
{
  onScroll: t,
  scrollPosition: n,
  resetScrollPosition: A
} = (0, u.M)(),
{
  tabs: v,
  selectedTab: Z,
  setSelectedTab: L
} = (0, S.Y)(),
O = (0, c.lg)(Z),
{
  searchBarState: R,
  onTabsAvailableWidthChange: x,
  resetSearchBarState: b,
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
  loadId: e.current,
  onClear: b
}),
k = a.useCallback(e => {
  L(e), j();
}, [
  j,
  L
]),
w = a.useMemo(() => G ? v.filter(e => {
  let {
    id: t
  } = e;
  return !f.MU.has(t);
}) : v, [
  v,
  G
]),
B = a.useRef(new d.Z(O)),
{
  onGuildCardSeen: H,
  onGuildCardClick: V
} = (0, p.H)({
  guildDiscoveryCardSeenManager: B.current,
  loadId: e.current
});
  a.useEffect(() => {
B.current.flushSeenGuilds(e.current);
  }, [O]), a.useEffect(() => {
A();
  }, [
O,
A
  ]), a.useEffect(() => {
!G && o.B.setState({
  clickedGuildScrollPosition: null
});
  }, [G]);
  let F = a.useMemo(() => {
switch (Z) {
  case f.vf.HUBS:
  case f.vf.GUILDS:
    return (0, i.jsx)(l.Z, {});
  default:
    let e = (0, c.vb)(Z);
    return (0, i.jsx)(h.Z, {
      query: D,
      placeholder: C.Z.Messages.GLOBAL_DISCOVERY_SEARCH_PLACEHOLDER.format({
        title: e
      }),
      onTextChange: y,
      onClear: j,
      onSubmit: U,
      onCollapsedClick: P,
      state: R
    });
}
  }, [
j,
P,
U,
y,
R,
D,
Z
  ]);
  return (0, i.jsxs)('div', {
className: N.container,
children: [
  (0, i.jsxs)(E.ZP, {
    className: G ? N.search : void 0,
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
        selectedTab: G ? null : Z,
        onTabSelect: k,
        onAvailableWidthChange: x
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
    selectedTab: Z,
    onScroll: t,
    onGuildCardClick: V,
    onGuildCardSeen: H
  })
]
  });
}