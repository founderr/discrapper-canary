"use strict";
l.r(t), l.d(t, {
  default: function() {
    return o
  }
}), l("47120");
var s = l("470079"),
  a = l("442837"),
  r = l("365943"),
  n = l("25251"),
  i = l("223143");

function o() {
  let {
    isFetching: e,
    error: t,
    categories: l,
    purchases: o
  } = (0, i.default)(), [u, c, d] = (0, a.useStateFromStoresArray)([n.default], () => [n.default.isFetching, n.default.fetchError, n.default.profileEffects]);
  return s.useEffect(() => {
    (0, r.fetchUserProfileEffects)(!0)
  }, []), {
    isFetching: e || u,
    error: null != t ? t : c,
    profileEffects: d,
    categories: l,
    purchases: o
  }
}