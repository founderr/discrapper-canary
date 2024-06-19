var a = n(735250),
  l = n(470079),
  s = n(461745),
  r = n(747608);
let i = l.forwardRef(function(e, t) {
  let {
    query: n,
    onQueryChange: l,
    onRemoveTag: i,
    onSelect: o,
    onSelectionChange: d,
    selectedSection: c,
    selectedRow: u,
    tags: m,
    sections: h,
    placeholder: S = "",
    focusAfterReady: T,
    isReady: x,
    "aria-labelledby": g,
    "aria-controls": v
  } = e;
  return (0, a.jsx)(s.ZP, {
    autoFocus: !0,
    className: r.searchBar,
    maxHeight: 100,
    onQueryChange: l,
    onRemoveTag: i,
    selectedSection: c,
    selectedRow: u,
    onSelect: o,
    onSelectionChange: d,
    placeholder: 0 === m.length ? S : "",
    query: n,
    ref: t,
    size: s.ZP.Sizes.MEDIUM,
    tags: m,
    sections: h,
    focusAfterReady: T,
    isReady: x,
    inputProps: {
      "aria-labelledby": g,
      "aria-controls": v,
      "aria-expanded": !0,
      "aria-activedescendant": "user-row-".concat(u)
    }
  })
});
t.Z = i