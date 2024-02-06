"use strict";
r.r(t), r.d(t, {
  default: function() {
    return u
  }
}), r("222007");
var n = r("884691"),
  l = r("446674"),
  i = r("189293"),
  s = r("845962"),
  a = r("235898");

function u() {
  let {
    isFetching: e,
    error: t,
    categories: r,
    purchases: u
  } = (0, a.default)(), [o, c, d] = (0, l.useStateFromStoresArray)([s.default], () => [s.default.isFetching, s.default.fetchError, s.default.profileEffects]);
  return (0, n.useEffect)(() => {
    (0, i.fetchUserProfileEffects)()
  }, []), {
    isFetching: e || o,
    error: null != t ? t : c,
    profileEffects: d,
    categories: r,
    purchases: u
  }
}