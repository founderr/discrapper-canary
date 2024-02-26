"use strict";
n.r(t), n.d(t, {
  useFrecencySettings: function() {
    return o
  }
});
var a = n("884691"),
  r = n("446674"),
  l = n("872173"),
  i = n("374363");

function o() {
  return a.useEffect(() => {
    l.FrecencyUserSettingsActionCreators.loadIfNecessary()
  }, []), (0, r.useStateFromStores)([i.default], () => i.default.frecencyWithoutFetchingLatest)
}