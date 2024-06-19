n.d(s, {
  n: function() {
    return _
  }
});
var a = n(470079),
  l = n(442837),
  t = n(626135),
  i = n(236289),
  o = n(451284),
  r = n(613734),
  c = n(800530),
  d = n(981631);
let _ = () => {
  let e = (0, l.e7)([i.Z], () => i.Z.getAppealClassificationId()),
    s = (0, r.YG)(null != e ? e : d.lds),
    n = (0, o.P)(),
    _ = (0, l.e7)([i.Z], () => i.Z.getIsDsaEligible());
  return a.useCallback(a => {
    t.default.track(d.rMx.SAFETY_HUB_ACTION, {
      action: a,
      account_standing: n.state,
      classification_ids: null != e ? [Number(e)] : null,
      source: c.s.AppealIngestion,
      is_dsa_eligible: _,
      violation_type: s.violationType
    })
  }, [n.state, e, s, _])
}