n.d(t, {
  Z: function() {
return C;
  }
});
var i = n(735250),
  s = n(470079),
  a = n(481060),
  r = n(117496),
  l = n(766219),
  o = n(801543),
  c = n(88693),
  d = n(212476),
  u = n(611928),
  _ = n(680180),
  h = n(791734),
  E = n(341789),
  I = n(591433),
  m = n(282773),
  g = n(143021),
  p = n(775260),
  T = n(49898),
  f = n(689938),
  S = n(679199);

function C() {
  let e = s.useRef((0, r.P)()),
{
  tabs: t,
  selectedTab: n,
  onSelectTab: C
} = (0, p.Y)(),
{
  onScroll: N,
  scrollPosition: A
} = (0, d.c)(),
v = (0, l.lg)(n),
{
  isSearchVisible: Z,
  searchQuery: L,
  onSearchTextChange: O,
  onClearSearch: R,
  onSearchSubmit: x
} = (0, g.H)({
  loadId: e.current,
  categoryId: v
}),
b = s.useMemo(() => Z ? t.filter(e => {
  let {
    id: t
  } = e;
  return !T.MU.has(t);
}) : t, [
  t,
  Z
]),
P = s.useRef(new o.Z(v)),
{
  onGuildCardSeen: M,
  onGuildCardClick: D
} = (0, m.H)({
  guildDiscoveryCardSeenManager: P.current,
  loadId: e.current
});
  s.useEffect(() => {
P.current.flushSeenGuilds(e.current);
  }, [v]);
  let {
onTabsAvailableWidthChange: y,
collapsed: j
  } = (0, c.U)(), U = s.useMemo(() => {
switch (n) {
  case T.vf.HUBS:
  case T.vf.GUILDS:
    return null;
  default:
    let e = (0, l.vb)(n);
    return (0, i.jsx)(_.Z, {
      query: L,
      placeholder: f.Z.Messages.GLOBAL_DISCOVERY_SEARCH_PLACEHOLDER.format({
        title: e
      }),
      onTextChange: O,
      onClear: R,
      onSubmit: x,
      collapsed: j
    });
}
  }, [
j,
R,
x,
O,
L,
n
  ]);
  return (0, i.jsxs)('div', {
className: S.container,
children: [
  (0, i.jsxs)(u.ZP, {
    className: Z ? S.search : void 0,
    children: [
      !Z && (0, i.jsx)(u.z6, {
        scrollPosition: A
      }),
      (0, i.jsx)(u.aV, {
        icon: Z ? a.ArrowLargeLeftIcon : a.ServerIcon,
        onClick: Z ? R : void 0
      }),
      (0, i.jsx)(h.Z, {
        tabs: b,
        selectedTab: n,
        onTabSelect: C,
        onAvailableWidthChange: y
      }),
      U
    ]
  }),
  Z ? (0, i.jsx)(I.Z, {
    loadId: e.current,
    onGuildCardClick: D,
    onGuildCardSeen: M
  }) : (0, i.jsx)(E.Z, {
    loadId: e.current,
    selectedTab: n,
    onScroll: N,
    onGuildCardClick: D,
    onGuildCardSeen: M
  })
]
  });
}