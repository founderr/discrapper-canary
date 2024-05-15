"use strict";
n.r(t), n.d(t, {
  useAutoFetchClanDiscoveryResults: function() {
    return _
  },
  useClanDiscoveryList: function() {
    return C
  }
});
var a = n("470079"),
  s = n("348327"),
  l = n.n(s),
  i = n("143927"),
  r = n("442837"),
  o = n("224706"),
  u = n("963202"),
  d = n("229765"),
  c = n("10473"),
  f = n("207796"),
  E = n("976757"),
  h = n("308083");

function _() {
  let e = (0, f.useClanDiscoveryUIStore)(e => e.game, i.default),
    t = (0, f.useClanDiscoveryUIStore)(e => e.setGame, i.default),
    n = (0, f.useClanDiscoveryUIStore)(e => e.setSelectedGames, i.default),
    s = (0, f.useClanDiscoveryUIStore)(e => e.selectedGames, i.default),
    E = (0, f.useClanDiscoveryUIStore)(f.buildSearchCriteriaFromUIState, l()),
    _ = (0, u.useClanPrepilotExperimentDefaultGameId)({
      location: "clan_discovery"
    }),
    {
      defaultGameId: C
    } = (0, u.useClanPilotExperiment)("clan_discovery"),
    m = null != _ ? _ : C,
    S = function(e) {
      let t = (0, r.useStateFromStores)([c.default], () => c.default.hasLoadedStaticClanDiscovery(e));
      return a.useEffect(() => {
        !t && (0, d.loadStaticClanDiscovery)(e)
      }, [e, t]), t
    }(e);
  a.useEffect(() => {
    !(s.length > 0) && (m === h.VALORANT_ID ? (t(f.ClanDiscoveryGame.VALORANT), n([m])) : m === h.GENSHIN_ID && (t(f.ClanDiscoveryGame.GENSHIN), n([m])))
  }, [t, n, m, s]), a.useEffect(() => {
    S && (0, d.searchClanDiscovery)(e, E)
  }, [e, E, S]), a.useEffect(() => {
    o.default.getDetectableGames()
  }, [])
}

function C() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
    t = (0, f.useClanDiscoveryUIStore)(f.buildSearchCriteriaFromUIState, l()),
    n = (0, f.useClanDiscoveryUIStore)(e => e.game, i.default),
    s = (0, r.useStateFromStores)([c.default], () => c.default.hasLoadedStaticClanDiscovery(n)),
    o = (0, r.useStateFromStores)([c.default], () => c.default.getSearchResult(t), [t]);
  return {
    loaded: s,
    clans: a.useMemo(() => {
      if ((0, E.isLoadedSearchResult)(o)) {
        let t = o.items;
        return null != e ? t.slice(0, e) : t
      }
      return []
    }, [e, o]),
    searchCriteria: t,
    searchResult: o
  }
}