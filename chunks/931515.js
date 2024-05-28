"use strict";
n.r(t), n.d(t, {
  useAutoFetchClanDiscoveryResults: function() {
    return h
  },
  useClanDiscoveryList: function() {
    return _
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
  C = n("308083");

function h() {
  let e = (0, f.useClanDiscoveryUIStore)(e => e.setGame, i.default),
    t = (0, f.useClanDiscoveryUIStore)(e => e.setSelectedGames, i.default),
    n = (0, f.useClanDiscoveryUIStore)(e => e.selectedGames, i.default),
    s = (0, f.useClanDiscoveryUIStore)(f.buildSearchCriteriaFromUIState, l()),
    E = (0, u.useClanPrepilotExperimentDefaultGameId)({
      location: "clan_discovery"
    }),
    {
      defaultGameId: h
    } = (0, u.useClanPilotExperiment)("clan_discovery"),
    _ = null != E ? E : h,
    S = function() {
      let e = (0, r.useStateFromStores)([c.default], () => c.default.hasLoadedStaticClanDiscovery());
      return a.useEffect(() => {
        !e && (0, d.loadStaticClanDiscovery)()
      }, [e]), e
    }(),
    m = (0, r.useStateFromStores)([c.default], () => c.default.isLoading());
  return a.useEffect(() => {
    !(n.length > 0) && (_ === C.VALORANT_ID ? (e(f.ClanDiscoveryGame.VALORANT), t([_])) : _ === C.GENSHIN_ID && (e(f.ClanDiscoveryGame.GENSHIN), t([_])))
  }, [e, t, _, n]), a.useEffect(() => {
    S && (0, d.searchClanDiscovery)(s)
  }, [s, S]), a.useEffect(() => {
    o.default.getDetectableGames()
  }, []), {
    loading: m
  }
}

function _() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
    t = (0, f.useClanDiscoveryUIStore)(f.buildSearchCriteriaFromUIState, l()),
    n = (0, r.useStateFromStores)([c.default], () => c.default.hasLoadedStaticClanDiscovery()),
    s = (0, r.useStateFromStores)([c.default], () => c.default.getSearchResult(t), [t]);
  return {
    loaded: n,
    clans: a.useMemo(() => {
      if ((0, E.isLoadedSearchResult)(s)) {
        let t = s.items;
        return null != e ? t.slice(0, e) : t
      }
      return []
    }, [e, s]),
    searchCriteria: t,
    searchResult: s
  }
}