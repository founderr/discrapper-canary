r.d(n, {
  Z: function() {
    return d
  }
});
var t = r(470079),
  o = r(442837),
  a = r(598077),
  i = r(699516),
  s = r(295226),
  l = r(786397),
  c = r(474936);

function d() {
  let e = (0, l.w)(c.a7),
    n = (0, o.e7)([s.Z], () => s.Z.getReferrer(null == e ? void 0 : e.trial_id)),
    r = (0, o.e7)([i.Z], () => null == n || i.Z.isBlocked(n.id));
  return t.useMemo(() => r || null == n ? null : new a.Z(n), [n, r])
}