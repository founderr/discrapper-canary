n.d(t, {
  Z: function() {
return S;
  }
});
var i = n(735250),
  s = n(470079),
  a = n(481060),
  r = n(117496),
  l = n(766219),
  o = n(801543),
  c = n(212476),
  d = n(611928),
  u = n(680180),
  _ = n(791734),
  E = n(341789),
  h = n(591433),
  I = n(282773),
  m = n(143021),
  g = n(775260),
  p = n(49898),
  T = n(689938),
  f = n(679199);

function S() {
  let e = s.useRef((0, r.P)()),
{
  tabs: t,
  selectedTab: n,
  onSelectTab: S
} = (0, g.Y)(),
{
  onScroll: C,
  scrollPosition: N
} = (0, c.c)(),
A = (0, l.lg)(n),
{
  isSearchVisible: v,
  searchQuery: Z,
  onSearchTextChange: L,
  onClearSearch: O,
  onSearchSubmit: R
} = (0, m.H)({
  loadId: e.current,
  categoryId: A
}),
x = s.useMemo(() => v ? t.filter(e => {
  let {
    id: t
  } = e;
  return !p.MU.has(t);
}) : t, [
  t,
  v
]),
b = s.useRef(new o.Z(A)),
{
  onGuildCardSeen: P,
  onGuildCardClick: M
} = (0, I.H)({
  guildDiscoveryCardSeenManager: b.current,
  loadId: e.current
});
  s.useEffect(() => {
b.current.flushSeenGuilds(e.current);
  }, [A]);
  let D = s.useMemo(() => {
switch (n) {
  case p.vf.HUBS:
  case p.vf.GUILDS:
    return null;
  default:
    let e = (0, l.vb)(n);
    return (0, i.jsx)(u.Z, {
      query: Z,
      placeholder: T.Z.Messages.GLOBAL_DISCOVERY_SEARCH_PLACEHOLDER.format({
        title: e
      }),
      onTextChange: L,
      onClear: O,
      onSubmit: R
    });
}
  }, [
O,
R,
L,
Z,
n
  ]);
  return (0, i.jsxs)('div', {
className: f.container,
children: [
  (0, i.jsxs)(d.ZP, {
    className: v ? f.search : void 0,
    children: [
      !v && (0, i.jsx)(d.z6, {
        scrollPosition: N
      }),
      (0, i.jsx)(d.aV, {
        icon: v ? a.ArrowLargeLeftIcon : a.ServerIcon,
        onClick: v ? O : void 0
      }),
      (0, i.jsx)(_.Z, {
        tabs: x,
        selectedTab: n,
        onTabSelect: S
      }),
      D
    ]
  }),
  v ? (0, i.jsx)(h.Z, {
    loadId: e.current,
    onGuildCardClick: M,
    onGuildCardSeen: P
  }) : (0, i.jsx)(E.Z, {
    loadId: e.current,
    selectedTab: n,
    onScroll: C,
    onGuildCardClick: M,
    onGuildCardSeen: P
  })
]
  });
}