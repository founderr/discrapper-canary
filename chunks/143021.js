n.d(t, {
  HF: function() {
return S;
  },
  f$: function() {
return T;
  },
  y6: function() {
return p;
  }
});
var i = n(470079),
  a = n(143927),
  s = n(731965),
  r = n(442837),
  l = n(212093),
  o = n(296386),
  c = n(36867),
  d = n(706454),
  u = n(683301),
  _ = n(251625),
  E = n(900849),
  h = n(540742),
  m = n(731455);
let I = [],
  g = (0, _.oH)(() => {
var e;
let t = m.dU,
  n = d.default.locale;
return null !== (e = t.find(e => e.code === n)) && void 0 !== e ? e : t[0];
  });

function p(e) {
  let {
loadId: t,
categoryId: n
  } = e, {
searchResultsQuery: i,
searchQuery: a
  } = h.B.getState(), {
guilds: r,
total: o,
loading: d,
initialized: _
  } = c.Z.getResults(i, n);
  if (d || _ && r.length >= o)
return;
  (0, s.j)(() => h.B.setState({
searchResultsQuery: a,
isSearchVisible: !0,
searchCategoryId: n
  }));
  let m = g();
  E.tI(t, n), null == u.ZP.getTopCategoryCounts(a) && l.G7(a, {
approximate_member_count: E.sq
  }), l.bR(a, {
categoryId: n,
preferredLocale: m.code,
offset: r.length,
length: 12,
filters: {
  approximate_member_count: E.sq
}
  }, !1);
}

function T(e) {
  let {
loadId: t
  } = e, n = (0, h.B)(e => {
let {
  searchResultsQuery: t
} = e;
return t;
  }, a.Z), s = (0, h.B)(e => {
let {
  searchCategoryId: t
} = e;
return t;
  }, a.Z), {
guilds: l,
loading: o
  } = (0, r.e7)([c.Z], () => null == n ? {
guilds: I,
loading: !0
  } : c.Z.getResults(n, s)), d = i.useCallback(() => p({
loadId: t,
categoryId: s
  }), [
t,
s
  ]);
  return i.useMemo(() => ({
guilds: l,
loading: o,
searchResultsQuery: n,
loadMore: d,
searchCategoryId: s
  }), [
l,
d,
n,
o,
s
  ]);
}

function S(e) {
  let {
loadId: t,
categoryId: n,
onClear: r
  } = e, c = (0, h.B)(e => {
let {
  isSearchVisible: t
} = e;
return t;
  }, a.Z), d = (0, h.B)(e => {
let {
  searchQuery: t
} = e;
return t;
  }, a.Z);
  i.useEffect(() => {
l.Ue(), (0, o.le)();
  }, []);
  let u = i.useCallback(e => {
  (0, s.j)(() => h.B.setState({
    searchQuery: e
  }));
}, []),
_ = i.useCallback(() => {
  r(), (0, s.j)(() => h.B.setState({
    searchResultsQuery: '',
    searchQuery: '',
    isSearchVisible: !1
  })), E.IZ(t);
}, [
  t,
  r
]),
m = i.useCallback(() => p({
  loadId: t,
  categoryId: n
}), [
  n,
  t
]);
  return i.useMemo(() => ({
searchQuery: d,
onSearchTextChange: u,
onClearSearch: _,
onSearchSubmit: m,
isSearchVisible: c
  }), [
c,
_,
m,
u,
d
  ]);
}