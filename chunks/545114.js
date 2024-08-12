n.d(t, {
  Z: function() {
return C;
  }
});
var i = n(735250),
  a = n(470079),
  s = n(481060),
  r = n(117496),
  l = n(766219),
  o = n(801543),
  c = n(88693),
  d = n(212476),
  u = n(611928),
  _ = n(680180),
  h = n(791734),
  E = n(341789),
  m = n(591433),
  I = n(282773),
  g = n(143021),
  p = n(775260),
  T = n(49898),
  S = n(689938),
  f = n(679199);

function C() {
  let e = a.useRef((0, r.P)()),
{
  onScroll: t,
  scrollPosition: n
} = (0, d.c)(),
{
  tabs: C,
  selectedTab: N,
  setSelectedTab: A
} = (0, p.Y)(),
v = (0, l.lg)(N),
{
  searchBarState: Z,
  onTabsAvailableWidthChange: L,
  resetSearchBarState: O,
  onCollapsedSearchBarClick: R,
  tabsClassName: x
} = (0, c.U)(),
{
  searchQuery: b,
  onSearchTextChange: P,
  onClearSearch: M,
  onSearchSubmit: D,
  isSearchVisible: y
} = (0, g.H)({
  loadId: e.current,
  onClear: O
}),
j = a.useCallback(e => {
  A(e), M();
}, [
  M,
  A
]),
U = a.useMemo(() => y ? C.filter(e => {
  let {
    id: t
  } = e;
  return !T.MU.has(t);
}) : C, [
  C,
  y
]),
G = a.useRef(new o.Z(v)),
{
  onGuildCardSeen: k,
  onGuildCardClick: w
} = (0, I.H)({
  guildDiscoveryCardSeenManager: G.current,
  loadId: e.current
});
  a.useEffect(() => {
G.current.flushSeenGuilds(e.current);
  }, [v]);
  let B = a.useMemo(() => {
switch (N) {
  case T.vf.HUBS:
  case T.vf.GUILDS:
    return null;
  default:
    let e = (0, l.vb)(N);
    return (0, i.jsx)(_.Z, {
      query: b,
      placeholder: S.Z.Messages.GLOBAL_DISCOVERY_SEARCH_PLACEHOLDER.format({
        title: e
      }),
      onTextChange: P,
      onClear: M,
      onSubmit: D,
      onCollapsedClick: R,
      state: Z
    });
}
  }, [
M,
R,
D,
P,
Z,
b,
N
  ]);
  return (0, i.jsxs)('div', {
className: f.container,
children: [
  (0, i.jsxs)(u.ZP, {
    className: y ? f.search : void 0,
    children: [
      !y && (0, i.jsx)(u.z6, {
        scrollPosition: n
      }),
      (0, i.jsx)(u.aV, {
        icon: y ? s.ArrowLargeLeftIcon : s.ServerIcon,
        onClick: y ? M : void 0
      }),
      (0, i.jsx)(h.Z, {
        className: x,
        tabs: U,
        selectedTab: y ? null : N,
        onTabSelect: j,
        onAvailableWidthChange: L
      }),
      B
    ]
  }),
  y ? (0, i.jsx)(m.Z, {
    loadId: e.current,
    onGuildCardClick: w,
    onGuildCardSeen: k
  }) : (0, i.jsx)(E.Z, {
    loadId: e.current,
    selectedTab: N,
    onScroll: t,
    onGuildCardClick: w,
    onGuildCardSeen: k
  })
]
  });
}