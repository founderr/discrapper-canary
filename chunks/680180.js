n.d(t, {
  Z: function() {
return l;
  }
}), n(47120);
var i = n(735250),
  s = n(470079),
  a = n(481060),
  r = n(328759);

function l(e) {
  let {
query: t,
placeholder: n,
collapsed: l,
onTextChange: o,
onClear: c,
onSubmit: d
  } = e, u = s.useRef(null), [_, E] = s.useState(!1);
  s.useEffect(() => {
!l && E(!1);
  }, [l]);
  let h = s.useCallback(() => {
  E(!1), c();
}, [c]),
I = s.useCallback(() => {
  E(!0), setTimeout(() => {
    var e;
    return null === (e = u.current) || void 0 === e ? void 0 : e.focus();
  });
}, []),
m = s.useCallback(e => {
  'Enter' === e.key && d();
}, [d]);
  return l && !_ ? (0, i.jsx)(a.Clickable, {
className: r.searchIcon,
onClick: I,
children: (0, i.jsx)(a.MagnifyingGlassIcon, {
  size: 'md',
  color: a.tokens.colors.INTERACTIVE_NORMAL
})
  }) : (0, i.jsx)(a.SearchBar, {
ref: u,
className: r.searchBar,
size: a.SearchBar.Sizes.MEDIUM,
query: t,
placeholder: n,
onChange: o,
onClear: h,
onKeyDown: m
  });
}