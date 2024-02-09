"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
}), n("222007");
var r = n("884691"),
  s = n("446674"),
  i = n("189293"),
  l = n("845962"),
  a = n("235898");

function o() {
  let {
    isFetching: e,
    error: t,
    categories: n,
    purchases: o
  } = (0, a.default)(), [u, c, d] = (0, s.useStateFromStoresArray)([l.default], () => [l.default.isFetching, l.default.fetchError, l.default.profileEffects]);
  return (0, r.useEffect)(() => {
    (0, i.fetchUserProfileEffects)()
  }, []), {
    isFetching: e || u,
    error: null != t ? t : c,
    profileEffects: d,
    categories: n,
    purchases: o
  }
}