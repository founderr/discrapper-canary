n.d(t, {
  Z: function() {
return I;
  }
});
var i = n(735250),
  a = n(399606),
  s = n(260034),
  r = n(410030),
  l = n(650394),
  o = n(683301),
  c = n(900849),
  d = n(864677),
  u = n(402691),
  _ = n(689938),
  E = n(45304);
let h = [];

function I(e) {
  var t, n;
  let {
searchResultsQuery: I,
categoryId: m
  } = e, g = (0, a.e7)([o.ZP], () => o.ZP.isFetchingSearch()), p = (0, a.e7)([o.ZP], () => o.ZP.getDiscoverableGuilds().search), T = (0, a.e7)([o.ZP], () => o.ZP.getLoadId()), f = null !== (n = null === (t = p[I]) || void 0 === t ? void 0 : t[m]) && void 0 !== n ? n : h, S = (0, r.ZP)(), {
handleViewGuild: C,
onGuildCardSeen: N
  } = (0, u.g)(m, T);
  return (0, i.jsxs)(d.Z, {
children: [
  (0, i.jsx)(s.X, {
    variant: 'heading-xl/bold',
    className: E.heading,
    children: _.Z.Messages.GLOBAL_DISCOVERY_SERVERS_SEARCH_RESULTS_HEADER.format({
      query: I
    })
  }),
  (0, i.jsx)(l.Z, {
    guilds: f.guilds,
    loading: g,
    loadingPlaceholderCount: 12,
    onViewGuild: C,
    loadingGuildId: null,
    theme: S,
    analyticsContext: c.P1.SEARCH,
    onGuildCardSeen: N
  })
]
  });
}