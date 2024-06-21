n(47120);
var i = n(735250),
  s = n(470079),
  l = n(120356),
  a = n.n(l),
  r = n(143927),
  o = n(622535),
  c = n(970606),
  u = n(945124),
  d = n(231467),
  E = n(931515),
  h = n(207796),
  _ = n(777734),
  I = n(976757),
  m = n(981631),
  g = n(920040);
t.Z = s.memo(function(e) {
  let {
    title: t,
    subtitle: n,
    className: l
  } = e, {
    loaded: p,
    clans: N,
    searchResult: T,
    searchCriteria: C
  } = (0, E.Qc)(20), S = (0, h.GN)(e => e.selectedTraits, r.Z), A = s.useMemo(() => new Set(C.games), [C.games]), f = s.useCallback(e => {
    var t;
    return (0, i.jsx)(d.ZP, {
      clan: e,
      className: g.card,
      affinity: null !== (t = e.affininty) && void 0 !== t ? t : (0, u.y)(e, C),
      traitsToHighlight: S,
      source: m.jXE.DISCOVER_SEARCH,
      prioritizedGameIds: A,
      onlyAnimateIconOnHover: !0
    }, e.id)
  }, [C, S, A]), Z = s.useMemo(() => null != T && (0, I.Pw)(T) ? N : [], [N, T]), v = s.useCallback(e => {
    e && Z.length > 0 && (0, c.Oe)(Z.map(e => e.id), "top_picks", C)
  }, [Z, C]);
  return 0 !== N.length && p ? (0, i.jsx)(o.$, {
    onChange: v,
    threshold: .25,
    children: (0, i.jsxs)("div", {
      className: a()(g.previewListContainer, l),
      children: [(0, i.jsx)("div", {
        className: g.previewListSection,
        children: (0, i.jsx)(_.Z, {
          title: t,
          subtitle: n
        })
      }), (0, i.jsx)("div", {
        className: g.previewList,
        children: Z.map(e => f(e))
      })]
    })
  }) : null
})