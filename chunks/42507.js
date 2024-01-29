"use strict";
n.r(t), n.d(t, {
  useFrecencySettings: function() {
    return a
  }
});
var s = n("884691"),
  r = n("446674"),
  i = n("872173"),
  l = n("374363");

function a() {
  return s.useEffect(() => {
    i.FrecencyUserSettingsActionCreators.loadIfNecessary()
  }, []), (0, r.useStateFromStores)([l.default], () => l.default.frecencyWithoutFetchingLatest)
}