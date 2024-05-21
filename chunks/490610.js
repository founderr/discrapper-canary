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
  _ = n("689938"),
  C = n("886722");
t.default = s.memo(function() {
  let {
    loaded: e,
    clans: t,
    searchResult: n,
    searchCriteria: m
  } = (0, d.useClanDiscoveryList)(10), S = (0, c.useClanDiscoveryUIStore)(e => e.selectedTraits, l.default), p = s.useMemo(() => new Set(m.games), [m.games]), g = s.useCallback(e => {
    var t;
    return (0, a.jsx)("div", {
      className: C.card,
      children: (0, a.jsx)(u.default, {
        clan: e,
        affinity: null !== (t = e.affininty) && void 0 !== t ? t : (0, o.getClanDiscoveryAffinity)(e, m),
        traitsToHighlight: S,
        source: h.AnalyticsSections.DISCOVER_SEARCH,
        prioritizedGameIds: p
      })
    }, e.id)
  }, [m, S, p]), I = s.useMemo(() => null != n && (0, E.isLoadedSearchResult)(n) ? t : [], [t, n]), T = s.useCallback(e => {
    e && I.length > 0 && (0, r.trackClanDiscoveryViewed)(I.map(e => e.id), "top_picks", m)
  }, [I, m]);
  return 0 !== t.length && e ? (0, a.jsx)(i.VisibilitySensor, {
    onChange: T,
    threshold: .25,
    children: (0, a.jsxs)("div", {
      className: C.previewListContainer,
      children: [(0, a.jsx)("div", {
        className: C.previewListSection,
        children: (0, a.jsx)(f.default, {
          title: _.default.Messages.CLAN_DISCOVERY_STANDBY_TITLE,
          subtitle: _.default.Messages.CLAN_DISCOVERY_PREPILOT_SUBTITLE
        })
      }), (0, a.jsx)("div", {
        className: C.previewList,
        children: I.map(e => g(e))
      })]
    })
  }) : null
})