"use strict";
s.r(t), s.d(t, {
  default: function() {
    return o
  }
});
var a = s("735250"),
  n = s("470079"),
  i = s("461745"),
  l = s("128277"),
  r = s("689938");

function o() {
  let e = (0, l.useSettingSearchQuery)(),
    t = n.useCallback((e, t) => {
      t.stopPropagation(), t.preventDefault(), (0, l.setIsSettingSearchActive)(e)
    }, []),
    s = n.useCallback(() => {
      (0, l.setIsSettingSearchActive)(!1), (0, l.setSettingSearchQuery)("")
    }, []);
  return (0, a.jsx)("div", {
    style: {
      marginBottom: "8px"
    },
    children: (0, a.jsx)(i.default, {
      size: i.default.Sizes.MEDIUM,
      query: e,
      onClear: s,
      onQueryChange: l.setSettingSearchQuery,
      placeholder: r.default.Messages.SEARCH,
      inputProps: {
        "aria-label": r.default.Messages.USER_SETTINGS_SEARCH_BAR,
        "aria-expanded": !0,
        onFocus: e => t(!0, e),
        onBlur: e => t(!1, e)
      }
    })
  })
}