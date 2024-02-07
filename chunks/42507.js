"use strict";
n.r(t), n.d(t, {
  useFrecencySettings: function() {
    return l
  }
});
var r = n("884691"),
  a = n("446674"),
  i = n("872173"),
  o = n("374363");

function l() {
  return r.useEffect(() => {
    i.FrecencyUserSettingsActionCreators.loadIfNecessary()
  }, []), (0, a.useStateFromStores)([o.default], () => o.default.frecencyWithoutFetchingLatest)
}