"use strict";
a.r(t), a.d(t, {
  default: function() {
    return i
  }
});
var l = a("37983");
a("884691");
var n = a("77078"),
  s = a("224038");

function i(e) {
  let {
    user: t,
    nickname: a
  } = e, i = null != a;
  return (0, l.jsx)(n.Avatar, {
    src: t.getAvatarURL(void 0, i ? 16 : 24),
    size: i ? n.AvatarSizes.SIZE_16 : n.AvatarSizes.SIZE_24,
    className: i ? s.miniAvatar : s.largeAvatar,
    "aria-hidden": !0
  })
}