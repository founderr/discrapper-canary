n.d(t, {
  C: function() {
return o;
  }
}), n(47120);
var i = n(470079),
  a = n(212093),
  s = n(706454),
  r = n(900849),
  l = n(731455);

function o(e) {
  var t;
  let [n, o] = i.useState(!1), [c, d] = i.useState(''), [u, _] = i.useState(''), E = i.useRef('');
  i.useEffect(() => {
a.Ue();
  }, []);
  let h = l.dU,
I = s.default.locale,
m = null !== (t = h.find(e => e.code === I)) && void 0 !== t ? t : h[0],
g = i.useCallback(() => {
  o(!0), d(E.current), a.bR(E.current, {
    categoryId: e,
    preferredLocale: m.code,
    offset: 0,
    length: 12,
    filters: {
      approximate_member_count: r.sq
    }
  }, !1);
}, [
  e,
  m.code
]);
  i.useEffect(() => {
n && g();
  }, [
n,
g
  ]);
  let p = i.useCallback(e => {
_(e), E.current = e, '' === e && o(!1);
  }, []);
  return {
isSearchActive: n,
searchQuery: u,
searchResultsQuery: c,
onSearchTextChange: p,
onSearchSubmit: g,
resetSearch: i.useCallback(() => {
  _(''), E.current = '', o(!1);
}, [])
  };
}