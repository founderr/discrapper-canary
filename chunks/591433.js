n.d(t, {
  Z: function() {
return f;
  }
}), n(47120);
var i = n(735250),
  s = n(470079),
  a = n(392711),
  r = n.n(a),
  l = n(399606),
  o = n(260034),
  c = n(410030),
  d = n(117496),
  u = n(650394),
  _ = n(683301),
  E = n(626135),
  h = n(900849),
  I = n(766219),
  m = n(864677),
  g = n(689938),
  p = n(856059);
let T = [],
  S = r().throttle(h.c6, 1000, {
leading: !1,
trailing: !0
  });

function f(e) {
  var t, n;
  let {
loadId: a,
selectedTab: r,
searchResultsQuery: f,
onGuildCardSeen: C,
onGuildCardClick: N
  } = e, A = (0, c.ZP)(), Z = s.useContext(E.AnalyticsContext), [v, L] = s.useState((0, d.P)()), O = (0, l.e7)([_.ZP], () => _.ZP.isFetchingSearch()), R = (0, l.e7)([_.ZP], () => _.ZP.getDiscoverableGuilds().search), x = (0, I.lg)(r), b = null !== (n = null === (t = R[f]) || void 0 === t ? void 0 : t[x]) && void 0 !== n ? n : T;
  s.useEffect(() => {
L((0, d.P)());
  }, [f]);
  let P = s.useCallback(e => {
S({
  loadId: a,
  searchId: v,
  query: f,
  guildResults: b.guilds,
  analyticsContext: Z,
  categoryId: x,
  isTagSearch: !1
}), C(e);
  }, [
Z,
x,
a,
C,
v,
b.guilds,
f
  ]);
  return (0, i.jsxs)(m.Z, {
children: [
  (0, i.jsx)(o.X, {
    variant: 'heading-xl/bold',
    className: p.heading,
    children: g.Z.Messages.GLOBAL_DISCOVERY_SERVERS_SEARCH_RESULTS_HEADER.format({
      query: f
    })
  }),
  (0, i.jsx)(u.Z, {
    guilds: b.guilds,
    loading: O,
    loadingPlaceholderCount: 12,
    onViewGuild: N,
    loadingGuildId: null,
    theme: A,
    analyticsContext: h.P1.SEARCH,
    onGuildCardSeen: P
  })
]
  });
}