n.d(t, {
  LE: function() {
    return I
  },
  Qc: function() {
    return m
  }
});
var s = n(470079),
  i = n(348327),
  l = n.n(i),
  a = n(143927),
  r = n(442837),
  o = n(224706),
  c = n(963202),
  u = n(229765),
  d = n(10473),
  E = n(207796),
  h = n(976757),
  _ = n(308083);

function I() {
  let e = (0, E.GN)(e => e.setGame, a.Z),
    t = (0, E.GN)(e => e.setSelectedGames, a.Z),
    n = (0, E.GN)(e => e.selectedGames, a.Z),
    i = (0, E.GN)(E.t1, l()),
    h = (0, c.An)({
      location: "clan_discovery"
    }),
    {
      defaultGameId: I
    } = (0, c.nk)("clan_discovery"),
    m = null != h ? h : I,
    T = function() {
      let e = (0, r.e7)([d.Z], () => d.Z.hasLoadedStaticClanDiscovery());
      return s.useEffect(() => {
        !e && (0, u.X)()
      }, [e]), e
    }(),
    g = (0, r.e7)([d.Z], () => d.Z.isLoading());
  return s.useEffect(() => {
    !(n.length > 0) && (m === _.nJ ? (e(E.hz.VALORANT), t([m])) : m === _.xn && (e(E.hz.GENSHIN), t([m])))
  }, [e, t, m, n]), s.useEffect(() => {
    T && (0, u.j)(i)
  }, [i, T]), s.useEffect(() => {
    o.Z.getDetectableGames()
  }, []), {
    loading: g
  }
}

function m() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
    t = (0, E.GN)(E.t1, l()),
    n = (0, r.e7)([d.Z], () => d.Z.hasLoadedStaticClanDiscovery()),
    i = (0, r.e7)([d.Z], () => d.Z.getSearchResult(t), [t]);
  return {
    loaded: n,
    clans: s.useMemo(() => {
      if ((0, h.Pw)(i)) {
        let t = i.items;
        return null != e ? t.slice(0, e) : t
      }
      return []
    }, [e, i]),
    searchCriteria: t,
    searchResult: i
  }
}