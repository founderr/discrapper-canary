i.d(n, {
  P: function() {
    return o
  }
});
var l = i(735250),
  t = i(470079),
  u = i(442837),
  r = i(481060),
  s = i(352954),
  a = i(441894),
  d = i(314897),
  Z = i(689938);

function o(e, n) {
  let i = (0, a.J)(n),
    o = (0, u.e7)([d.default], () => d.default.getId() === e),
    E = t.useCallback(() => {
      s.Z.openSecureFramesUserVerificationModal(e, n)
    }, [n, e]);
  return !i || o ? null : (0, l.jsx)(r.MenuItem, {
    id: "secure-frames-user-verification",
    label: Z.Z.Messages.E2EE_VIEW_VERIFICATION_CODE,
    action: E
  })
}