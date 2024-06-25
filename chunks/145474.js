t.d(n, {
  P: function() {
    return c
  }
});
var i = t(735250),
  r = t(470079),
  l = t(442837),
  u = t(481060),
  a = t(352954),
  o = t(441894),
  s = t(314897),
  d = t(689938);

function c(e, n) {
  let t = (0, o.J)(n),
    c = (0, l.e7)([s.default], () => s.default.getId() === e),
    E = r.useCallback(() => {
      a.Z.openSecureFramesUserVerificationModal(e, n)
    }, [n, e]);
  return !t || c ? null : (0, i.jsx)(u.MenuItem, {
    id: "secure-frames-user-verification",
    label: d.Z.Messages.E2EE_VIEW_VERIFICATION_CODE,
    action: E
  })
}