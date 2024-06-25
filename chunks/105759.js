n.d(t, {
  Z: function() {
    return l
  }
});
var o = n(470079),
  i = n(442837),
  r = n(598077),
  a = n(699516),
  s = n(295226),
  c = n(786397),
  d = n(474936);

function l() {
  let e = (0, c.w)(d.a7),
    t = (0, i.e7)([s.Z], () => s.Z.getReferrer(null == e ? void 0 : e.trial_id)),
    n = (0, i.e7)([a.Z], () => null == t || a.Z.isBlocked(t.id));
  return o.useMemo(() => n || null == t ? null : new r.Z(t), [t, n])
}