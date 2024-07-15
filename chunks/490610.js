n(47120);
var i = n(735250),
  a = n(470079),
  s = n(120356),
  r = n.n(s),
  l = n(143927),
  o = n(622535),
  c = n(970606),
  d = n(945124),
  u = n(231467),
  _ = n(931515),
  E = n(207796),
  h = n(777734),
  I = n(976757),
  m = n(981631),
  g = n(477975);
t.Z = a.memo(function(e) {
  let {
title: t,
subtitle: n,
className: s
  } = e, {
loaded: p,
clans: T,
searchResult: f,
searchCriteria: S
  } = (0, _.Qc)(20), C = (0, E.GN)(e => e.selectedTraits, l.Z), N = a.useMemo(() => new Set(S.games), [S.games]), A = a.useCallback(e => {
var t;
return (0, i.jsx)(u.ZP, {
  clan: e,
  className: g.card,
  affinity: null !== (t = e.affininty) && void 0 !== t ? t : (0, d.y)(e, S),
  traitsToHighlight: C,
  source: m.jXE.DISCOVER_SEARCH,
  prioritizedGameIds: N,
  onlyAnimateIconOnHover: !0
}, e.id);
  }, [
S,
C,
N
  ]), v = a.useMemo(() => null != f && (0, I.Pw)(f) ? T : [], [
T,
f
  ]), Z = a.useCallback(e => {
e && v.length > 0 && (0, c.Oe)(v.map(e => e.id), 'top_picks', S);
  }, [
v,
S
  ]);
  return 0 !== T.length && p ? (0, i.jsx)(o.$, {
onChange: Z,
threshold: 0.25,
children: (0, i.jsxs)('div', {
  className: r()(g.previewListContainer, s),
  children: [
    (0, i.jsx)('div', {
      className: g.previewListSection,
      children: (0, i.jsx)(h.Z, {
        title: t,
        subtitle: n
      })
    }),
    (0, i.jsx)('div', {
      className: g.previewList,
      children: v.map(e => A(e))
    })
  ]
})
  }) : null;
});