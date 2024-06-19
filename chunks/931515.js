n.d(t, {
  LE: function() {
    return I
  },
  Qc: function() {
    return m
  }
});
var i = n(470079),
  s = n(348327),
  l = n.n(s),
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
    s = (0, E.GN)(E.t1, l()),
    h = (0, c.An)({
      location: "clan_discovery"
    }),
    {
      defaultGameId: I
    } = (0, c.nk)("clan_discovery"),
    m = null != h ? h : I,
    g = function() {
      let e = (0, r.e7)([d.Z], () => d.Z.hasLoadedStaticClanDiscovery());
      return i.useEffect(() => {
        !e && (0, u.X)()
      }, [e]), e
    }(),
    p = (0, r.e7)([d.Z], () => d.Z.isLoading());
  return i.useEffect(() => {
    !(n.length > 0) && (m === _.nJ ? (e(E.hz.VALORANT), t([m])) : m === _.xn && (e(E.hz.GENSHIN), t([m])))
  }, [e, t, m, n]), i.useEffect(() => {
    g && (0, u.j)(s)
  }, [s, g]), i.useEffect(() => {
    o.Z.getDetectableGames()
  }, []), {
    loading: p
  }
}

function m() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
    t = (0, E.GN)(E.t1, l()),
    n = (0, r.e7)([d.Z], () => d.Z.hasLoadedStaticClanDiscovery()),
    s = (0, r.e7)([d.Z], () => d.Z.getSearchResult(t), [t]);
  return {
    loaded: n,
    clans: i.useMemo(() => {
      if ((0, h.Pw)(s)) {
        let t = s.items;
        return null != e ? t.slice(0, e) : t
      }
      return []
    }, [e, s]),
    searchCriteria: t,
    searchResult: s
  }
}