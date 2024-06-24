t.d(s, {
  Z: function() {
    return o
  }
});
var n = t(735250),
  i = t(470079),
  a = t(461745),
  l = t(128277),
  r = t(689938);

function o() {
  let e = (0, l.Z7)(),
    s = i.useCallback((e, s) => {
      s.stopPropagation(), s.preventDefault(), (0, l.QH)(e)
    }, []),
    t = i.useCallback(() => {
      (0, l.QH)(!1), (0, l.yN)("")
    }, []);
  return (0, n.jsx)("div", {
    style: {
      marginBottom: "8px"
    },
    children: (0, n.jsx)(a.ZP, {
      size: a.ZP.Sizes.MEDIUM,
      query: e,
      onClear: t,
      onQueryChange: l.yN,
      placeholder: r.Z.Messages.SEARCH,
      inputProps: {
        "aria-label": r.Z.Messages.USER_SETTINGS_SEARCH_BAR,
        "aria-expanded": !0,
        onFocus: e => s(!0, e),
        onBlur: e => s(!1, e)
      }
    })
  })
}