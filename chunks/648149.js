"use strict";
a.r(t), a.d(t, {
  default: function() {
    return i
  }
});
var n = a("37983");
a("884691");
var l = a("77078"),
  s = a("224038");

function i(e) {
  let {
    user: t,
    nickname: a
  } = e, i = null != a;
  return (0, n.jsx)(l.Avatar, {
    src: t.getAvatarURL(void 0, i ? 16 : 24),
    size: i ? l.AvatarSizes.SIZE_16 : l.AvatarSizes.SIZE_24,
    className: i ? s.miniAvatar : s.largeAvatar,
    "aria-hidden": !0
  })
}