"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
});
var r = n("37983"),
  a = n("884691"),
  s = n("77078"),
  i = n("390236"),
  l = a.memo(function(e) {
    var t, n, l, c;
    let {
      user: u,
      size: o = s.AvatarSizes.SIZE_32,
      animate: d = !1,
      "aria-hidden": f = !1,
      ...E
    } = e, v = a.useContext(i.default);
    return (0, r.jsx)(s.Avatar, {
      src: (t = u, n = (0, s.getAvatarSize)(o), l = d, c = v, t.getAvatarURL(c, n, l)),
      size: o,
      "aria-label": f ? void 0 : u.username,
      "aria-hidden": f,
      ...E
    })
  })