"use strict";
l.r(t), l.d(t, {
  default: function() {
    return i
  }
});
var a = l("37983");
l("884691");
var n = l("77078"),
  s = l("224038");

function i(e) {
  let {
    user: t,
    nickname: l
  } = e, i = null != l;
  return (0, a.jsx)(n.Avatar, {
    src: t.getAvatarURL(void 0, i ? 16 : 24),
    size: i ? n.AvatarSizes.SIZE_16 : n.AvatarSizes.SIZE_24,
    className: i ? s.miniAvatar : s.largeAvatar,
    "aria-hidden": !0
  })
}