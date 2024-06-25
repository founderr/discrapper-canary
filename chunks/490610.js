n(47120);
var s = n(735250),
  i = n(470079),
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
  T = n(920040);
t.Z = i.memo(function(e) {
  let {
    title: t,
    subtitle: n,
    className: l
  } = e, {
    loaded: g,
    clans: p,
    searchResult: N,
    searchCriteria: S
  } = (0, E.Qc)(20), C = (0, h.GN)(e => e.selectedTraits, r.Z), A = i.useMemo(() => new Set(S.games), [S.games]), f = i.useCallback(e => {
    var t;
    return (0, s.jsx)(d.ZP, {
      clan: e,
      className: T.card,
      affinity: null !== (t = e.affininty) && void 0 !== t ? t : (0, u.y)(e, S),
      traitsToHighlight: C,
      source: m.jXE.DISCOVER_SEARCH,
      prioritizedGameIds: A,
      onlyAnimateIconOnHover: !0
    }, e.id)
  }, [S, C, A]), Z = i.useMemo(() => null != N && (0, I.Pw)(N) ? p : [], [p, N]), L = i.useCallback(e => {
    e && Z.length > 0 && (0, c.Oe)(Z.map(e => e.id), "top_picks", S)
  }, [Z, S]);
  return 0 !== p.length && g ? (0, s.jsx)(o.$, {
    onChange: L,
    threshold: .25,
    children: (0, s.jsxs)("div", {
      className: a()(T.previewListContainer, l),
      children: [(0, s.jsx)("div", {
        className: T.previewListSection,
        children: (0, s.jsx)(_.Z, {
          title: t,
          subtitle: n
        })
      }), (0, s.jsx)("div", {
        className: T.previewList,
        children: Z.map(e => f(e))
      })]
    })
  }) : null
})