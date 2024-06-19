s.d(l, {
  Z: function() {
    return o
  }
}), s(47120);
var n = s(470079),
  t = s(442837),
  r = s(365943),
  i = s(25251),
  a = s(223143);

function o() {
  let {
    isFetching: e,
    error: l,
    categories: s,
    purchases: o
  } = (0, a.Z)(), [c, u, d] = (0, t.Wu)([i.Z], () => [i.Z.isFetching, i.Z.fetchError, i.Z.profileEffects]);
  return n.useEffect(() => {
    (0, r.z)(!0)
  }, []), {
    isFetching: e || c,
    error: null != l ? l : u,
    profileEffects: d,
    categories: s,
    purchases: o
  }
}