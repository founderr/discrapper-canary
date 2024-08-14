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
x = !f.MU.has(L),
{
  searchBarState: b,
  onTabsAvailableWidthChange: P,
  onCollapsedSearchBarClick: M,
  tabsClassName: D
} = (0, _.U)({
  isSearchBarVisible: x
}),
{
  searchQuery: y,
  onSearchTextChange: j,
  onClearSearch: U,
  onSearchSubmit: G,
  isSearchVisible: k
} = (0, T.H)({
  loadId: e.current
}),
w = a.useCallback(e => {
  O(e), k && U();
}, [
  k,
  U,
  O
]),
B = a.useMemo(() => k ? Z.filter(e => {
  let {
    id: t
  } = e;
  return !f.MU.has(t);
}) : Z, [
  Z,
  k
]),
H = a.useRef(new d.Z(R)),
{
  onGuildCardSeen: V,
  onGuildCardClick: F
} = (0, p.H)({
  guildDiscoveryCardSeenManager: H.current,
  loadId: e.current
});
  a.useEffect(() => {
H.current.flushSeenGuilds(e.current);
  }, [R]), a.useEffect(() => {
v();
  }, [
L,
v
  ]), a.useEffect(() => {
!k && o.B.setState({
  searchScrollPosition: null
});
  }, [k]);
  let Y = a.useMemo(() => {
switch (L) {
  case f.vf.HUBS:
    return null;
  case f.vf.GUILDS:
    return (0, i.jsx)(l.Z, {});
  default:
    return (0, i.jsx)(h.Z, {
      query: y,
      placeholder: R === C.Hk ? N.Z.Messages.SEARCH : N.Z.Messages.GLOBAL_DISCOVERY_SEARCH_PLACEHOLDER.format({
        title: (0, c.vb)(L)
      }),
      onTextChange: j,
      onClear: U,
      onSubmit: G,
      onCollapsedClick: M,
      state: b
    });
}
  }, [
R,
U,
M,
G,
j,
b,
y,
L
  ]);
  return (0, i.jsxs)('div', {
className: A.container,
children: [
  (0, i.jsxs)(E.ZP, {
    className: k ? A.search : void 0,
    children: [
      !k && (0, i.jsx)(E.z6, {
        scrollPosition: n
      }),
      (0, i.jsx)(E.aV, {
        icon: k ? s.ArrowLargeLeftIcon : s.ServerIcon,
        onClick: k ? U : void 0
      }),
      (0, i.jsx)(m.Z, {
        className: D,
        tabs: B,
        selectedTab: k ? null : L,
        onTabSelect: w,
        onAvailableWidthChange: P
      }),
      Y
    ]
  }),
  k ? (0, i.jsx)(g.Z, {
    loadId: e.current,
    onGuildCardClick: F,
    onGuildCardSeen: V
  }) : (0, i.jsx)(I.Z, {
    loadId: e.current,
    selectedTab: L,
    onScroll: t,
    onGuildCardClick: F,
    onGuildCardSeen: V
  })
]
  });
}