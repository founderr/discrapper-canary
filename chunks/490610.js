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
  C = n("981631"),
  h = n("886722");
t.default = s.memo(function(e) {
  let {
    title: t,
    subtitle: n
  } = e, {
    loaded: _,
    clans: S,
    searchResult: m,
    searchCriteria: p
  } = (0, d.useClanDiscoveryList)(20), I = (0, c.useClanDiscoveryUIStore)(e => e.selectedTraits, l.default), g = s.useMemo(() => new Set(p.games), [p.games]), T = s.useCallback(e => {
    var t;
    return (0, a.jsx)(u.default, {
      clan: e,
      className: h.card,
      affinity: null !== (t = e.affininty) && void 0 !== t ? t : (0, o.getClanDiscoveryAffinity)(e, p),
      traitsToHighlight: I,
      source: C.AnalyticsSections.DISCOVER_SEARCH,
      prioritizedGameIds: g,
      onlyAnimateIconOnHover: !0
    }, e.id)
  }, [p, I, g]), A = s.useMemo(() => null != m && (0, E.isLoadedSearchResult)(m) ? S : [], [S, m]), N = s.useCallback(e => {
    e && A.length > 0 && (0, r.trackClanDiscoveryViewed)(A.map(e => e.id), "top_picks", p)
  }, [A, p]);
  return 0 !== S.length && _ ? (0, a.jsx)(i.VisibilitySensor, {
    onChange: N,
    threshold: .25,
    children: (0, a.jsxs)("div", {
      className: h.previewListContainer,
      children: [(0, a.jsx)("div", {
        className: h.previewListSection,
        children: (0, a.jsx)(f.default, {
          title: t,
          subtitle: n
        })
      }), (0, a.jsx)("div", {
        className: h.previewList,
        children: A.map(e => T(e))
      })]
    })
  }) : null
})