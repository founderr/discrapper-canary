"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
});
var a = n("37983"),
  l = n("884691"),
  i = n("77078"),
  r = n("390236"),
  s = l.memo(function(e) {
    var t, n, s, u;
    let {
      user: o,
      size: d = i.AvatarSizes.SIZE_32,
      animate: c = !1,
      "aria-hidden": f = !1,
      ...I
    } = e, _ = l.useContext(r.default);
    return (0, a.jsx)(i.Avatar, {
      src: (t = o, n = (0, i.getAvatarSize)(d), s = c, u = _, t.getAvatarURL(u, n, s)),
      size: d,
      "aria-label": f ? void 0 : o.username,
      "aria-hidden": f,
      ...I
    })
  })