"use strict";
l.r(t), l.d(t, {
  default: function() {
    return s
  }
});
var r = l("37983");
l("884691");
var a = l("77078"),
  n = l("224038");

function s(e) {
  let {
    user: t,
    nickname: l
  } = e, s = null != l;
  return (0, r.jsx)(a.Avatar, {
    src: t.getAvatarURL(void 0, s ? 16 : 24),
    size: s ? a.AvatarSizes.SIZE_16 : a.AvatarSizes.SIZE_24,
    className: s ? n.miniAvatar : n.largeAvatar,
    "aria-hidden": !0
  })
}