"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
}), n("47120");
var i = n("470079"),
  r = n("392711"),
  s = n("442837"),
  a = n("881052"),
  o = n("699682"),
  l = n("81897"),
  u = n("800599"),
  d = n("621853"),
  _ = n("484459");

function c(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    [n, c] = (0, s.useStateFromStoresArray)([d.default], () => [d.default.getMutualFriends(e), d.default.isFetchingProfile(e)]),
    E = (0, l.default)(),
    [I, T] = (0, i.useState)(null),
    f = t && null == I && !c && null == n;
  (0, i.useEffect)(() => {
    if (!!f)(async () => {
      try {
        await (0, _.default)(e, void 0, {
          withMutualFriends: !0,
          abortSignal: E
        })
      } catch (e) {
        T(new a.APIError(e))
      }
    })()
  }, [f, e, E]);
  let S = (0, s.useStateFromStores)([u.default], () => u.default.getUserAffinitiesMap()),
    h = (0, i.useMemo)(() => null == n ? null : n.length < 2 ? n : (0, r.sortBy)(n, e => {
      var t, n;
      let {
        user: i
      } = e;
      return -((null !== (n = null === (t = S.get(i.id)) || void 0 === t ? void 0 : t.affinity) && void 0 !== n ? n : -1) * 1)
    }), [n, S]),
    A = (0, o.default)(h);
  return {
    mutualFriends: null != h ? h : A,
    isFetching: c
  }
}