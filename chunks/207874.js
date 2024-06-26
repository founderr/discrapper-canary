n.d(t, {
  Z: function() {
    return a
  }
});
var i = n(735250),
  s = n(470079),
  l = n(461745),
  r = n(128277),
  o = n(689938);

function a(e) {
  let {
    style: t
  } = e, n = (0, r.Z7)(), a = s.useCallback((e, t) => {
    t.stopPropagation(), t.preventDefault(), (0, r.QH)(e)
  }, []), c = s.useCallback(() => {
    (0, r.QH)(!1), (0, r.yN)("")
  }, []);
  return (0, i.jsx)("div", {
    style: {
      marginBottom: "8px"
    },
    children: (0, i.jsx)(l.ZP, {
      size: l.ZP.Sizes.MEDIUM,
      query: n,
      onClear: c,
      onQueryChange: r.yN,
      placeholder: o.Z.Messages.SEARCH,
      className: t,
      inputProps: {
        "aria-label": o.Z.Messages.USER_SETTINGS_SEARCH_BAR,
        "aria-expanded": !0,
        onFocus: e => a(!0, e),
        onBlur: e => a(!1, e)
      }
    })
  })
}