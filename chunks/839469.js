"use strict";
s.r(t), s.d(t, {
  useSettingSearchResults: function() {
    return o
  }
}), s("47120");
var a = s("470079"),
  n = s("170401"),
  l = s("128277"),
  i = s("394644"),
  r = s("726985");

function o() {
  let e = (0, l.useSettingSearchQuery)(),
    t = (0, i.useGenerateUserSettingsSections)(),
    s = a.useRef(new n.default((0, i.getSearchableSettingTitles)(t))),
    [o, d] = a.useState(!1),
    [u, c] = a.useState(r.EMPTY_SETTINGS_LIST),
    S = a.useCallback(async e => {
      c(await s.current.search(e.trim())), d(!0)
    }, []);
  return a.useEffect(() => {
    "" === e ? (c(r.EMPTY_SETTINGS_LIST), d(!1)) : S(e)
  }, [e, S]), {
    hasSearchResults: o,
    searchResults: u
  }
}