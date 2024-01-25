"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
});
var l = n("37983");
n("884691");
var a = n("77078"),
  s = n("224038");

function i(e) {
  let {
    user: t,
    nickname: n
  } = e, i = null != n;
  return (0, l.jsx)(a.Avatar, {
    src: t.getAvatarURL(void 0, i ? 16 : 24),
    size: i ? a.AvatarSizes.SIZE_16 : a.AvatarSizes.SIZE_24,
    className: i ? s.miniAvatar : s.largeAvatar,
    "aria-hidden": !0
  })
}