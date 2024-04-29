"use strict";
a.r(t), a.d(t, {
  default: function() {
    return u
  }
});
var n = a("735250");
a("470079");
var i = a("481060"),
  s = a("729334"),
  l = a("660097");

function u(e) {
  let {
    user: t,
    size: a
  } = e, u = (0, i.getAvatarSpecs)(a), r = null != t ? t.getAvatarURL(null, u.size) : l;
  return (0, n.jsx)("div", {
    className: s.avatarBackground,
    children: (0, n.jsx)("div", {
      className: s.avatar,
      style: {
        width: u.size,
        height: u.size
      },
      children: (0, n.jsx)(i.Avatar, {
        src: r,
        "aria-hidden": !0,
        size: a
      })
    })
  })
}