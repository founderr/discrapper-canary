"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
});
var r = n("37983"),
  u = n("884691"),
  i = n("77078"),
  a = n("390236"),
  l = u.memo(function(e) {
    var t, n, l, s;
    let {
      user: o,
      size: c = i.AvatarSizes.SIZE_32,
      animate: d = !1,
      "aria-hidden": f = !1,
      ...p
    } = e, P = u.useContext(a.default);
    return (0, r.jsx)(i.Avatar, {
      src: (t = o, n = (0, i.getAvatarSize)(c), l = d, s = P, t.getAvatarURL(s, n, l)),
      size: c,
      "aria-label": f ? void 0 : o.username,
      "aria-hidden": f,
      ...p
    })
  })