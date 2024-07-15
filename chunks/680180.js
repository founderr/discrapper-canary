n.d(t, {
  Z: function() {
return l;
  }
});
var i = n(735250),
  a = n(470079),
  s = n(481060),
  r = n(986348);

function l(e) {
  let {
query: t,
placeholder: n,
onTextChange: l,
onClear: o,
onSubmit: c
  } = e, d = a.useCallback(e => {
'Enter' === e.key && c();
  }, [c]);
  return (0, i.jsx)('div', {
className: r.search,
children: (0, i.jsx)(s.SearchBar, {
  size: s.SearchBar.Sizes.MEDIUM,
  query: t,
  placeholder: n,
  onChange: l,
  onClear: o,
  onKeyDown: d
})
  });
}