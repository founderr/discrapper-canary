t.d(s, {
  Z: function() {
    return l
  }
});
var n = t(735250),
  a = t(470079),
  i = t(461745),
  r = t(128277),
  o = t(689938);

function l() {
  let e = (0, r.Z7)(),
    s = a.useCallback((e, s) => {
      s.stopPropagation(), s.preventDefault(), (0, r.QH)(e)
    }, []),
    t = a.useCallback(() => {
      (0, r.QH)(!1), (0, r.yN)("")
    }, []);
  return (0, n.jsx)("div", {
    style: {
      marginBottom: "8px"
    },
    children: (0, n.jsx)(i.ZP, {
      size: i.ZP.Sizes.MEDIUM,
      query: e,
      onClear: t,
      onQueryChange: r.yN,
      placeholder: o.Z.Messages.SEARCH,
      inputProps: {
        "aria-label": o.Z.Messages.USER_SETTINGS_SEARCH_BAR,
        "aria-expanded": !0,
        onFocus: e => s(!0, e),
        onBlur: e => s(!1, e)
      }
    })
  })
}