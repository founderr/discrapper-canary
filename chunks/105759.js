r.d(t, {
  Z: function() {
    return c
  }
});
var n = r(470079),
  s = r(442837),
  i = r(598077),
  l = r(699516),
  a = r(295226),
  o = r(786397),
  d = r(474936);

function c() {
  let e = (0, o.w)(d.a7),
    t = (0, s.e7)([a.Z], () => a.Z.getReferrer(null == e ? void 0 : e.trial_id)),
    r = (0, s.e7)([l.Z], () => null == t || l.Z.isBlocked(t.id));
  return n.useMemo(() => r || null == t ? null : new i.Z(t), [t, r])
}