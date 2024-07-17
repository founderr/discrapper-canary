n.d(t, {
  C: function() {
return o;
  }
}), n(47120);
var i = n(470079),
  s = n(212093),
  a = n(706454),
  r = n(900849),
  l = n(731455);

function o(e) {
  var t;
  let {
loadId: n,
categoryId: o
  } = e, [c, d] = i.useState(!1), [u, _] = i.useState(''), [E, h] = i.useState(''), I = i.useRef('');
  i.useEffect(() => {
s.Ue();
  }, []);
  let m = l.dU,
g = a.default.locale,
p = null !== (t = m.find(e => e.code === g)) && void 0 !== t ? t : m[0],
T = i.useCallback(() => {
  r.tI(n, o), d(!0), _(I.current), s.bR(I.current, {
    categoryId: o,
    preferredLocale: p.code,
    offset: 0,
    length: 12,
    filters: {
      approximate_member_count: r.sq
    }
  }, !1);
}, [
  o,
  p.code,
  n
]);
  i.useEffect(() => {
c && T();
  }, [
c,
T
  ]);
  let S = i.useCallback(() => {
h(''), I.current = '', d(!1), r.IZ(n);
  }, [n]);
  return {
isSearchActive: c,
searchQuery: E,
searchResultsQuery: u,
onSearchTextChange: i.useCallback(e => {
  if ('' === e)
    return S();
  h(e), I.current = e;
}, [S]),
onSearchSubmit: T,
resetSearch: S
  };
}