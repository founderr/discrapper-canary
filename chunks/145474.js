i.d(n, {
  P: function() {
    return Z
  }
});
var r = i(735250),
  t = i(470079),
  l = i(442837),
  a = i(481060),
  s = i(352954),
  u = i(441894),
  d = i(314897),
  o = i(689938);

function Z(e, n) {
  let i = (0, u.J)(n),
    Z = (0, l.e7)([d.default], () => d.default.getId() === e),
    c = t.useCallback(() => {
      s.Z.openSecureFramesUserVerificationModal(e, n)
    }, [n, e]);
  return !i || Z ? null : (0, r.jsx)(a.MenuItem, {
    id: "secure-frames-user-verification",
    label: o.Z.Messages.E2EE_VIEW_VERIFICATION_CODE,
    action: c
  })
}