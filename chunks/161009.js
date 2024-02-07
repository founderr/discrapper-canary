"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
}), n("222007");
var i = n("884691"),
  l = n("446674"),
  r = n("189293"),
  s = n("845962"),
  a = n("235898");

function o() {
  let {
    isFetching: e,
    error: t,
    categories: n,
    purchases: o
  } = (0, a.default)(), [u, c, d] = (0, l.useStateFromStoresArray)([s.default], () => [s.default.isFetching, s.default.fetchError, s.default.profileEffects]);
  return (0, i.useEffect)(() => {
    (0, r.fetchUserProfileEffects)()
  }, []), {
    isFetching: e || u,
    error: null != t ? t : c,
    profileEffects: d,
    categories: n,
    purchases: o
  }
}