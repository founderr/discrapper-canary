"use strict";
t.r(l);
var a = t("735250"),
  s = t("470079"),
  n = t("481060"),
  i = t("372900");
l.default = s.memo(function(e) {
  var l, t, o, d;
  let {
    user: r,
    size: u = n.AvatarSizes.SIZE_32,
    animate: c = !1,
    "aria-hidden": h = !1,
    ...m
  } = e, v = s.useContext(i.default);
  return (0, a.jsx)(n.Avatar, {
    src: (l = r, t = (0, n.getAvatarSize)(u), o = c, d = v, l.getAvatarURL(d, t, o)),
    size: u,
    "aria-label": h ? void 0 : r.username,
    "aria-hidden": h,
    ...m
  })
})