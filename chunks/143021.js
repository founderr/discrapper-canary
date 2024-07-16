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
categoryId: n
  } = e, [o, c] = i.useState(!1), [d, u] = i.useState(''), [_, E] = i.useState(''), h = i.useRef('');
  i.useEffect(() => {
s.Ue();
  }, []);
  let I = l.dU,
m = a.default.locale,
g = null !== (t = I.find(e => e.code === m)) && void 0 !== t ? t : I[0],
p = i.useCallback(() => {
  c(!0), u(h.current), s.bR(h.current, {
    categoryId: n,
    preferredLocale: g.code,
    offset: 0,
    length: 12,
    filters: {
      approximate_member_count: r.sq
    }
  }, !1);
}, [
  n,
  g.code
]);
  i.useEffect(() => {
o && p();
  }, [
o,
p
  ]);
  let T = i.useCallback(() => {
E(''), h.current = '', c(!1);
  }, []);
  return {
isSearchActive: o,
searchQuery: _,
searchResultsQuery: d,
onSearchTextChange: i.useCallback(e => {
  if ('' === e)
    return T();
  E(e), h.current = e;
}, [T]),
onSearchSubmit: p,
resetSearch: T
  };
}