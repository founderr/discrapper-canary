"use strict";
n.r(t), n.d(t, {
  useFrecencySettings: function() {
    return a
  }
});
var r = n("884691"),
  i = n("446674"),
  s = n("872173"),
  l = n("374363");

function a() {
  return r.useEffect(() => {
    s.FrecencyUserSettingsActionCreators.loadIfNecessary()
  }, []), (0, i.useStateFromStores)([l.default], () => l.default.frecencyWithoutFetchingLatest)
}