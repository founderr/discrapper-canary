n.d(t, {
  Z: function() {
return N;
  }
});
var i = n(735250),
  a = n(470079),
  s = n(481060),
  r = n(117496),
  l = n(540742),
  o = n(766219),
  c = n(801543),
  d = n(979233),
  u = n(88693),
  _ = n(611928),
  E = n(680180),
  h = n(791734),
  m = n(341789),
  I = n(591433),
  g = n(282773),
  p = n(143021),
  T = n(775260),
  S = n(49898),
  f = n(689938),
  C = n(679199);

function N() {
  let e = a.useRef((0, r.P)()),
{
  onScroll: t,
  scrollPosition: n,
  resetScrollPosition: N
} = (0, d.M)(),
{
  tabs: A,
  selectedTab: v,
  setSelectedTab: Z
} = (0, T.Y)(),
L = (0, o.lg)(v),
{
  searchBarState: O,
  onTabsAvailableWidthChange: R,
  resetSearchBarState: x,
  onCollapsedSearchBarClick: b,
  tabsClassName: P
} = (0, u.U)(),
{
  searchQuery: M,
  onSearchTextChange: D,
  onClearSearch: y,
  onSearchSubmit: j,
  isSearchVisible: U
} = (0, p.H)({
  loadId: e.current,
  onClear: x
}),
G = a.useCallback(e => {
  Z(e), y();
}, [
  y,
  Z
]),
k = a.useMemo(() => U ? A.filter(e => {
  let {
    id: t
  } = e;
  return !S.MU.has(t);
}) : A, [
  A,
  U
]),
w = a.useRef(new c.Z(L)),
{
  onGuildCardSeen: B,
  onGuildCardClick: H
} = (0, g.H)({
  guildDiscoveryCardSeenManager: w.current,
  loadId: e.current
});
  a.useEffect(() => {
w.current.flushSeenGuilds(e.current);
  }, [L]), a.useEffect(() => {
N();
  }, [
L,
N
  ]), a.useEffect(() => {
!U && l.B.setState({
  clickedGuildScrollPosition: null
});
  }, [U]);
  let V = a.useMemo(() => {
switch (v) {
  case S.vf.HUBS:
  case S.vf.GUILDS:
    return null;
  default:
    let e = (0, o.vb)(v);
    return (0, i.jsx)(E.Z, {
      query: M,
      placeholder: f.Z.Messages.GLOBAL_DISCOVERY_SEARCH_PLACEHOLDER.format({
        title: e
      }),
      onTextChange: D,
      onClear: y,
      onSubmit: j,
      onCollapsedClick: b,
      state: O
    });
}
  }, [
y,
b,
j,
D,
O,
M,
v
  ]);
  return (0, i.jsxs)('div', {
className: C.container,
children: [
  (0, i.jsxs)(_.ZP, {
    className: U ? C.search : void 0,
    children: [
      !U && (0, i.jsx)(_.z6, {
        scrollPosition: n
      }),
      (0, i.jsx)(_.aV, {
        icon: U ? s.ArrowLargeLeftIcon : s.ServerIcon,
        onClick: U ? y : void 0
      }),
      (0, i.jsx)(h.Z, {
        className: P,
        tabs: k,
        selectedTab: U ? null : v,
        onTabSelect: G,
        onAvailableWidthChange: R
      }),
      V
    ]
  }),
  U ? (0, i.jsx)(I.Z, {
    loadId: e.current,
    onGuildCardClick: H,
    onGuildCardSeen: B
  }) : (0, i.jsx)(m.Z, {
    loadId: e.current,
    selectedTab: v,
    onScroll: t,
    onGuildCardClick: H,
    onGuildCardSeen: B
  })
]
  });
}