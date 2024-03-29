"use strict";
n.r(t);
var a = n("735250"),
  r = n("470079"),
  s = n("481060"),
  l = n("372900");
t.default = r.memo(function(e) {
  var t, n, i, u;
  let {
    user: o,
    size: d = s.AvatarSizes.SIZE_32,
    animate: c = !1,
    "aria-hidden": f = !1,
    ..._
  } = e, I = r.useContext(l.default);
  return (0, a.jsx)(s.Avatar, {
    src: (t = o, n = (0, s.getAvatarSize)(d), i = c, u = I, t.getAvatarURL(u, n, i)),
    size: d,
    "aria-label": f ? void 0 : o.username,
    "aria-hidden": f,
    ..._
  })
})