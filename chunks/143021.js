n.d(t, {
  H: function() {
return g;
  },
  f: function() {
return m;
  }
});
var i = n(470079),
  a = n(143927),
  s = n(442837),
  r = n(212093),
  l = n(36867),
  o = n(706454),
  c = n(251625),
  d = n(900849),
  u = n(540742),
  _ = n(731455);
let h = [],
  E = (0, c.oH)(() => {
var e;
let t = _.dU,
  n = o.default.locale;
return null !== (e = t.find(e => e.code === n)) && void 0 !== e ? e : t[0];
  });

function I(e) {
  let {
loadId: t,
categoryId: n
  } = e;
  u.B.setState({
isSearchVisible: !0,
searchCategoryId: n
  });
  let {
searchResultsQuery: i,
searchQuery: a,
searchCategoryId: s
  } = u.B.getState(), {
guilds: o,
total: c,
loading: _,
initialized: h
  } = l.Z.getResults(i, s);
  if (_ || h && o.length >= c)
return;
  u.B.setState({
searchResultsQuery: a
  });
  let I = E();
  d.tI(t, s), r.bR(a, {
categoryId: n,
preferredLocale: I.code,
offset: o.length,
length: 12,
filters: {
  approximate_member_count: d.sq
}
  }, !1);
}

function m(e) {
  let {
loadId: t
  } = e, n = (0, u.B)(e => {
let {
  searchResultsQuery: t
} = e;
return t;
  }, a.Z), r = (0, u.B)(e => {
let {
  searchCategoryId: t
} = e;
return t;
  }, a.Z), {
guilds: o,
loading: c
  } = (0, s.e7)([l.Z], () => null == n ? {
guilds: h,
loading: !0
  } : l.Z.getResults(n, r)), d = i.useCallback(() => I({
loadId: t,
categoryId: r
  }), [
t,
r
  ]);
  return i.useMemo(() => ({
guilds: o,
loading: c,
searchResultsQuery: n,
loadMore: d,
searchCategoryId: r
  }), [
o,
d,
n,
c,
r
  ]);
}

function g(e) {
  let {
loadId: t,
categoryId: n,
onClear: s
  } = e, l = (0, u.B)(e => {
let {
  isSearchVisible: t
} = e;
return t;
  }, a.Z), o = (0, u.B)(e => {
let {
  searchQuery: t
} = e;
return t;
  }, a.Z);
  i.useEffect(() => {
r.Ue();
  }, []);
  let c = i.useCallback(e => {
  u.B.setState({
    searchQuery: e
  });
}, []),
_ = i.useCallback(() => {
  s(), u.B.setState({
    searchResultsQuery: '',
    searchQuery: '',
    isSearchVisible: !1
  }), d.IZ(t);
}, [
  t,
  s
]),
h = i.useCallback(() => I({
  loadId: t,
  categoryId: n
}), [
  n,
  t
]);
  return i.useMemo(() => ({
searchQuery: o,
onSearchTextChange: c,
onClearSearch: _,
onSearchSubmit: h,
isSearchVisible: l
  }), [
l,
_,
h,
c,
o
  ]);
}