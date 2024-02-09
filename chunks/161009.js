"use strict";
n.r(t), n.d(t, {
  default: function() {
    return a
  }
}), n("222007");
var s = n("884691"),
  l = n("446674"),
  i = n("189293"),
  r = n("845962"),
  o = n("235898");

function a() {
  let {
    isFetching: e,
    error: t,
    categories: n,
    purchases: a
  } = (0, o.default)(), [u, c, d] = (0, l.useStateFromStoresArray)([r.default], () => [r.default.isFetching, r.default.fetchError, r.default.profileEffects]);
  return (0, s.useEffect)(() => {
    (0, i.fetchUserProfileEffects)()
  }, []), {
    isFetching: e || u,
    error: null != t ? t : c,
    profileEffects: d,
    categories: n,
    purchases: a
  }
}