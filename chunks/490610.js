"use strict";
n.r(t), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("143927"),
  i = n("622535"),
  r = n("970606"),
  o = n("945124"),
  u = n("231467"),
  d = n("931515"),
  c = n("207796"),
  f = n("777734"),
  E = n("976757"),
  h = n("981631"),
  _ = n("886722");
t.default = s.memo(function(e) {
  let {
    title: t,
    subtitle: n
  } = e, {
    loaded: C,
    clans: m,
    searchResult: S,
    searchCriteria: p
  } = (0, d.useClanDiscoveryList)(20), g = (0, c.useClanDiscoveryUIStore)(e => e.selectedTraits, l.default), I = s.useMemo(() => new Set(p.games), [p.games]), T = s.useCallback(e => {
    var t;
    return (0, a.jsx)(u.default, {
      clan: e,
      className: _.card,
      affinity: null !== (t = e.affininty) && void 0 !== t ? t : (0, o.getClanDiscoveryAffinity)(e, p),
      traitsToHighlight: g,
      source: h.AnalyticsSections.DISCOVER_SEARCH,
      prioritizedGameIds: I
    }, e.id)
  }, [p, g, I]), A = s.useMemo(() => null != S && (0, E.isLoadedSearchResult)(S) ? m : [], [m, S]), N = s.useCallback(e => {
    e && A.length > 0 && (0, r.trackClanDiscoveryViewed)(A.map(e => e.id), "top_picks", p)
  }, [A, p]);
  return 0 !== m.length && C ? (0, a.jsx)(i.VisibilitySensor, {
    onChange: N,
    threshold: .25,
    children: (0, a.jsxs)("div", {
      className: _.previewListContainer,
      children: [(0, a.jsx)("div", {
        className: _.previewListSection,
        children: (0, a.jsx)(f.default, {
          title: t,
          subtitle: n
        })
      }), (0, a.jsx)("div", {
        className: _.previewList,
        children: A.map(e => T(e))
      })]
    })
  }) : null
})