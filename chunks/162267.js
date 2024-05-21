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
  l = n("771845"),
  u = n("621853");

function d(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    [n, d] = (0, a.useStateFromStoresArray)([u.default], () => [u.default.getMutualGuilds(e), u.default.isFetchingProfile(e)]),
    _ = t && !d && null == n;
  (0, i.useEffect)(() => {
    _ && (0, s.fetchProfile)(e, {
      withMutualGuilds: !0
    })
  }, [_, e]);
  let c = (0, a.useStateFromStores)([l.default], () => l.default.getFlattenedGuildIds()),
    E = (0, i.useMemo)(() => {
      if (null == n) return null;
      if (n.length < 2) return n;
      let e = Object.fromEntries(c.map((e, t) => [e, t]));
      return (0, r.sortBy)(n, t => {
        var n;
        let {
          guild: i
        } = t;
        return null !== (n = e[i.id]) && void 0 !== n ? n : c.length
      })
    }, [n, c]),
    I = (0, o.default)(E);
  return {
    mutualGuilds: null != E ? E : I,
    isFetching: d
  }
}