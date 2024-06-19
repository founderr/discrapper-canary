t.d(l, {
  Z: function() {
    return i
  }
});
var n = t(735250);
t(470079);
var s = t(528011),
  a = t(533244),
  o = t(734489);

function i(e) {
  let {
    guild: l
  } = e, {
    shouldShowIncidentActions: t,
    incidentData: i,
    isUnderLockdown: r
  } = (0, s.mI)(l.id), C = !1;
  return (null != i && (C = (0, a.i9)(i) && t), C || r) ? (0, n.jsx)(o.Z, {
    guild: l,
    incidentData: i,
    isUnderLockdown: r,
    isRaidDetected: C
  }) : null
}