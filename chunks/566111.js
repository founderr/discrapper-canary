s.d(n, {
  Z: function() {
    return o
  }
}), s(47120);
var l = s(470079),
  t = s(442837),
  i = s(365943),
  r = s(25251),
  a = s(223143);

function o() {
  let {
    isFetching: e,
    error: n,
    categories: s,
    purchases: o
  } = (0, a.Z)(), [c, u, d] = (0, t.Wu)([r.Z], () => [r.Z.isFetching, r.Z.fetchError, r.Z.profileEffects]);
  return l.useEffect(() => {
    (0, i.z)(!0)
  }, []), {
    isFetching: e || c,
    error: null != n ? n : u,
    profileEffects: d,
    categories: s,
    purchases: o
  }
}