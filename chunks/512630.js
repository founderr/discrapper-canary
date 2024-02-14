"use strict";
s.r(t), s.d(t, {
  default: function() {
    return c
  }
}), s("794252");
var n = s("37983");
s("884691");
var a = s("414456"),
  l = s.n(a),
  i = s("506838"),
  r = s("681187"),
  u = s("605160"),
  o = s("265363"),
  d = s("902558"),
  c = e => {
    let {
      obscureReason: t,
      iconClassname: s
    } = e;
    return (0, i.match)(t).with(u.ObscureReason.EXPLICIT_CONTENT, () => (0, n.jsx)(r.ImageWarningIcon, {
      className: l(s, d.obscuredIcon),
      color: "white"
    })).with(u.ObscureReason.SPOILER, () => (0, n.jsx)(o.default, {
      className: s
    })).otherwise(() => null)
  }