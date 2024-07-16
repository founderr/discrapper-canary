n.d(t, {
  Z: function() {
return I;
  }
});
var i = n(735250);
n(470079);
var a = n(399606),
  s = n(260034),
  r = n(410030),
  l = n(650394),
  o = n(683301),
  c = n(900849),
  d = n(766219),
  u = n(864677),
  _ = n(689938),
  E = n(856059);
let h = [];

function I(e) {
  var t, n;
  let {
selectedTab: I,
searchResultsQuery: m,
onGuildCardSeen: g,
onGuildCardClick: p
  } = e, T = (0, r.ZP)(), S = (0, a.e7)([o.ZP], () => o.ZP.isFetchingSearch()), f = (0, a.e7)([o.ZP], () => o.ZP.getDiscoverableGuilds().search), C = (0, d.lg)(I), N = null !== (n = null === (t = f[m]) || void 0 === t ? void 0 : t[C]) && void 0 !== n ? n : h;
  return (0, i.jsxs)(u.Z, {
children: [
  (0, i.jsx)(s.X, {
    variant: 'heading-xl/bold',
    className: E.heading,
    children: _.Z.Messages.GLOBAL_DISCOVERY_SERVERS_SEARCH_RESULTS_HEADER.format({
      query: m
    })
  }),
  (0, i.jsx)(l.Z, {
    guilds: N.guilds,
    loading: S,
    loadingPlaceholderCount: 12,
    onViewGuild: p,
    loadingGuildId: null,
    theme: T,
    analyticsContext: c.P1.SEARCH,
    onGuildCardSeen: g
  })
]
  });
}