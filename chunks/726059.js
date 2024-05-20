"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
}), n("47120");
var i = n("470079"),
  r = n("392711"),
  a = n("442837"),
  s = n("232567"),
  o = n("699682"),
  l = n("800599"),
  u = n("621853");

function d(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    [n, d] = (0, a.useStateFromStoresArray)([u.default], () => [u.default.getMutualFriends(e), u.default.isFetchingFriends(e)]),
    _ = t && !d && null == n;
  (0, i.useEffect)(() => {
    _ && (0, s.fetchMutualFriends)(e)
  }, [_, e]);
  let c = (0, a.useStateFromStores)([l.default], () => l.default.getUserAffinitiesMap()),
    E = (0, i.useMemo)(() => null == n ? null : n.length < 2 ? n : (0, r.sortBy)(n, e => {
      var t, n;
      let {
        user: i
      } = e;
      return -((null !== (n = null === (t = c.get(i.id)) || void 0 === t ? void 0 : t.affinity) && void 0 !== n ? n : -1) * 1)
    }), [n, c]),
    I = (0, o.default)(E);
  return {
    mutualFriends: null != E ? E : I,
    isFetching: d
  }
}