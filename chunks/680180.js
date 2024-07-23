n.d(t, {
  Z: function() {
return l;
  }
});
var i = n(735250),
  s = n(470079),
  a = n(481060),
  r = n(328759);

function l(e) {
  let {
query: t,
placeholder: n,
onTextChange: l,
onClear: o,
onSubmit: c
  } = e, d = s.useCallback(e => {
'Enter' === e.key && c();
  }, [c]);
  return (0, i.jsx)('div', {
className: r.search,
children: (0, i.jsx)(a.SearchBar, {
  size: a.SearchBar.Sizes.MEDIUM,
  query: t,
  placeholder: n,
  onChange: l,
  onClear: o,
  onKeyDown: d
})
  });
}