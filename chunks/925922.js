"use strict";
a.r(t), a.d(t, {
  default: function() {
    return u
  }
}), a("794252");
var s = a("37983");
a("884691");
var n = a("506838"),
  i = a("644417"),
  l = a("415133"),
  r = a("44984"),
  o = a("500645");

function u(e) {
  let {
    username: t,
    oneClickFlow: a = !1
  } = e, u = (0, r.useUsernameLiveCheck)((0, l.formatPomeloForEditing)(t), !0, !1, a);
  if (null == u) return null;
  let d = (0, n.match)(u.type).with(i.NameValidationState.RATE_LIMIT, () => "info").with(i.NameValidationState.ERROR, () => "error").with(i.NameValidationState.AVAILABLE, () => "success").with(i.NameValidationState.INTERNAL_ERROR, () => null).exhaustive();
  return null == d ? null : (0, s.jsx)(o.default, {
    type: d,
    children: u.message
  })
}