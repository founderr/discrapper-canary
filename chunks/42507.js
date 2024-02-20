"use strict";
a.r(t), a.d(t, {
  useFrecencySettings: function() {
    return i
  }
});
var n = a("884691"),
  l = a("446674"),
  o = a("872173"),
  s = a("374363");

function i() {
  return n.useEffect(() => {
    o.FrecencyUserSettingsActionCreators.loadIfNecessary()
  }, []), (0, l.useStateFromStores)([s.default], () => s.default.frecencyWithoutFetchingLatest)
}