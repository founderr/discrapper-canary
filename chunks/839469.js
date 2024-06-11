"use strict";
s.r(t), s.d(t, {
  useSettingSearchResults: function() {
    return o
  }
}), s("47120");
var a = s("470079"),
  n = s("170401"),
  i = s("128277"),
  l = s("394644"),
  r = s("726985");

function o() {
  let e = (0, i.useSettingSearchQuery)(),
    t = (0, l.useGenerateUserSettingsSections)(),
    s = a.useRef(new n.default((0, l.getSearchableSettingsTitles)(t))),
    [o, d] = a.useState(!1),
    [u, c] = a.useState(r.EMPTY_SETTINGS_LIST),
    S = a.useCallback(async e => {
      c(await s.current.search(e.trim())), d(!0)
    }, []);
  return a.useEffect(() => {
    "" === e || e.length < 2 ? (c(r.EMPTY_SETTINGS_LIST), d(!1)) : S(e)
  }, [e, S]), {
    hasSearchResults: o,
    searchResults: u
  }
}