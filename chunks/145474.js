"use strict";
a.r(t), a.d(t, {
  useSecureFrameItem: function() {
    return f
  }
});
var u = a("735250"),
  l = a("470079"),
  s = a("442837"),
  d = a("481060"),
  n = a("436592"),
  r = a("433612"),
  i = a("314897"),
  o = a("689938");

function f(e, t) {
  let a = (0, n.useIsSecureFramesUIEnabled)(t),
    f = (0, s.useStateFromStores)([i.default], () => i.default.getId() === e),
    c = l.useCallback(() => {
      (0, r.openSecureFramesUserVerificationModal)(e, t)
    }, [t, e]);
  return !a || f ? null : (0, u.jsx)(d.MenuItem, {
    id: "secure-frames-user-verification",
    label: o.default.Messages.E2EE_VIEW_VERIFICATION_CODE,
    action: c
  })
}