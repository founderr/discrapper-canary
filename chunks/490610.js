"use strict";
n.r(t), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("120356"),
  i = n.n(l),
  r = n("143927"),
  o = n("622535"),
  u = n("970606"),
  d = n("945124"),
  c = n("231467"),
  f = n("931515"),
  E = n("207796"),
  h = n("777734"),
  C = n("976757"),
  _ = n("981631"),
  m = n("886722");
t.default = s.memo(function(e) {
  let {
    title: t,
    subtitle: n,
    className: l
  } = e, {
    loaded: S,
    clans: p,
    searchResult: I,
    searchCriteria: g
  } = (0, f.useClanDiscoveryList)(20), T = (0, E.useClanDiscoveryUIStore)(e => e.selectedTraits, r.default), A = s.useMemo(() => new Set(g.games), [g.games]), N = s.useCallback(e => {
    var t;
    return (0, a.jsx)(c.default, {
      clan: e,
      className: m.card,
      affinity: null !== (t = e.affininty) && void 0 !== t ? t : (0, d.getClanDiscoveryAffinity)(e, g),
      traitsToHighlight: T,
      source: _.AnalyticsSections.DISCOVER_SEARCH,
      prioritizedGameIds: A,
      onlyAnimateIconOnHover: !0
    }, e.id)
  }, [g, T, A]), v = s.useMemo(() => null != I && (0, C.isLoadedSearchResult)(I) ? p : [], [p, I]), R = s.useCallback(e => {
    e && v.length > 0 && (0, u.trackClanDiscoveryViewed)(v.map(e => e.id), "top_picks", g)
  }, [v, g]);
  return 0 !== p.length && S ? (0, a.jsx)(o.VisibilitySensor, {
    onChange: R,
    threshold: .25,
    children: (0, a.jsxs)("div", {
      className: i()(m.previewListContainer, l),
      children: [(0, a.jsx)("div", {
        className: m.previewListSection,
        children: (0, a.jsx)(h.default, {
          title: t,
          subtitle: n
        })
      }), (0, a.jsx)("div", {
        className: m.previewList,
        children: v.map(e => N(e))
      })]
    })
  }) : null
})