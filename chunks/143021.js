n.d(t, {
  H: function() {
return g;
  },
  f: function() {
return m;
  }
});
var i = n(470079),
  s = n(143927),
  a = n(442837),
  r = n(212093),
  l = n(36867),
  o = n(706454),
  c = n(251625),
  d = n(900849),
  u = n(540742),
  _ = n(731455);
let E = [],
  h = (0, c.oH)(() => {
var e;
let t = _.dU,
  n = o.default.locale;
return null !== (e = t.find(e => e.code === n)) && void 0 !== e ? e : t[0];
  });

function I(e) {
  let {
loadId: t,
categoryId: n,
offset: i
  } = e;
  u.B.setState({
isSearchVisible: !0,
searchCategoryId: n
  });
  let {
searchResultsQuery: s,
searchQuery: a,
searchCategoryId: o
  } = u.B.getState(), {
guilds: c,
total: _,
loading: E,
initialized: I
  } = l.Z.getResults(s, o);
  if (E || I && c.length >= _)
return;
  u.B.setState({
searchResultsQuery: a
  });
  let m = h();
  d.tI(t, o), r.bR(a, {
categoryId: n,
preferredLocale: m.code,
offset: i,
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
  }, s.Z), r = (0, u.B)(e => {
let {
  searchCategoryId: t
} = e;
return t;
  }, s.Z), {
guilds: o,
loading: c
  } = (0, a.e7)([l.Z], () => null == n ? {
guilds: E,
loading: !0
  } : l.Z.getResults(n, r)), d = i.useCallback(() => I({
loadId: t,
categoryId: r,
offset: o.length
  }), [
o.length,
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
categoryId: n
  } = e, a = (0, u.B)(e => {
let {
  isSearchVisible: t
} = e;
return t;
  }, s.Z), l = (0, u.B)(e => {
let {
  searchQuery: t
} = e;
return t;
  }, s.Z);
  i.useEffect(() => {
r.Ue();
  }, []);
  let o = i.useCallback(e => {
  u.B.setState({
    searchQuery: e
  });
}, []),
c = i.useCallback(() => {
  u.B.setState({
    searchResultsQuery: '',
    searchQuery: '',
    isSearchVisible: !1
  }), d.IZ(t);
}, [t]);
  return {
searchQuery: l,
onSearchTextChange: o,
onClearSearch: c,
onSearchSubmit: i.useCallback(() => I({
  loadId: t,
  categoryId: n,
  offset: 0
}), [
  n,
  t
]),
isSearchVisible: a
  };
}